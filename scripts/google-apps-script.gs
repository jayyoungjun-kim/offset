// Configure these values in Apps Script under Project Settings > Script Properties.
// Keeping deployment-specific IDs and secrets out of source control makes this
// file safe to use as a reusable setup template.
const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const SHEET_ID = SCRIPT_PROPERTIES.getProperty("SHEET_ID");
const DRIVE_FOLDER_ID = SCRIPT_PROPERTIES.getProperty("DRIVE_FOLDER_ID");
const FORM_SUBMIT_SECRET = SCRIPT_PROPERTIES.getProperty("FORM_SUBMIT_SECRET");
const NOTIFICATION_EMAIL = SCRIPT_PROPERTIES.getProperty("NOTIFICATION_EMAIL");
const NOTIFICATION_PHONE = SCRIPT_PROPERTIES.getProperty("NOTIFICATION_PHONE");
const SOLAPI_SENDER_NUMBER = SCRIPT_PROPERTIES.getProperty("SOLAPI_SENDER_NUMBER");
const SOLAPI_API_KEY = SCRIPT_PROPERTIES.getProperty("SOLAPI_API_KEY");
const SOLAPI_API_SECRET = SCRIPT_PROPERTIES.getProperty("SOLAPI_API_SECRET");
const MAX_FILE_SIZE = 20 * 1024 * 1024;
const HEADERS = ["제출 ID","제출 시각","이름","연락처","이메일","경력","포트폴리오 링크","첨부 파일명","Drive 파일 링크","현재 고민","수정 시간 확보","참여 조건","가능 시간대"];

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function safeFileName(value) {
  return String(value || "portfolio").replace(/[\\/:*?"<>|]/g, "_");
}

function normalizePhone(value) {
  return String(value || "").replace(/[^0-9]/g, "");
}

function bytesToHex(bytes) {
  return bytes.map(function(byte) {
    const value = byte < 0 ? byte + 256 : byte;
    return ("0" + value.toString(16)).slice(-2);
  }).join("");
}

function sendSms(text) {
  if (!NOTIFICATION_PHONE || !SOLAPI_SENDER_NUMBER || !SOLAPI_API_KEY || !SOLAPI_API_SECRET) {
    throw new Error("문자 알림 설정이 완료되지 않았습니다.");
  }
  const date = new Date().toISOString();
  const salt = Utilities.getUuid().replace(/-/g, "");
  const signature = bytesToHex(Utilities.computeHmacSha256Signature(date + salt, SOLAPI_API_SECRET, Utilities.Charset.UTF_8));
  const response = UrlFetchApp.fetch("https://api.solapi.com/messages/v4/send-many/detail", {
    method: "post",
    contentType: "application/json; charset=UTF-8",
    headers: {
      Authorization: "HMAC-SHA256 apiKey=" + SOLAPI_API_KEY + ", date=" + date + ", salt=" + salt + ", signature=" + signature,
    },
    payload: JSON.stringify({
      messages: [{
        to: normalizePhone(NOTIFICATION_PHONE),
        from: normalizePhone(SOLAPI_SENDER_NUMBER),
        text: text,
      }],
    }),
    muteHttpExceptions: true,
  });
  const status = response.getResponseCode();
  if (status < 200 || status >= 300) throw new Error("SOLAPI 문자 발송 실패: " + response.getContentText());
}

function notifyApplication(payload) {
  const submittedAt = Utilities.formatDate(new Date(payload.submittedAt || Date.now()), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  const subject = "[OFFSET] " + payload.name + "님의 신청서가 접수되었습니다.";
  const body = [
    "새로운 포트폴리오 완성반 신청서가 접수되었습니다.",
    "",
    "접수 시각: " + submittedAt,
    "이름: " + payload.name,
    "연락처: " + payload.phone,
    "이메일: " + payload.email,
    "경력: " + payload.career,
    "가능 시간대: " + (payload.availability || []).join(" / "),
    "제출 ID: " + payload.submissionId,
  ].join("\n");

  const results = { email: false, sms: false };
  try {
    if (!NOTIFICATION_EMAIL) throw new Error("이메일 알림 설정이 완료되지 않았습니다.");
    MailApp.sendEmail({ to: NOTIFICATION_EMAIL, subject: subject, body: body, name: "OFFSET 신청 알림" });
    results.email = true;
  } catch (error) {
    console.error("Application email notification failed", error);
  }
  try {
    sendSms("[OFFSET] " + payload.name + "님의 신청서가 접수되었습니다. (" + submittedAt + ")");
    results.sms = true;
  } catch (error) {
    console.error("Application SMS notification failed", error);
  }
  return results;
}

function initUpload(payload) {
  const size = Number(payload.size || 0);
  if (!size || size > MAX_FILE_SIZE) throw new Error("파일 용량은 최대 20MB까지 첨부할 수 있습니다.");
  const timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyyMMdd-HHmmss");
  const name = `${timestamp}_${safeFileName(payload.applicantName)}_${safeFileName(payload.name)}`;
  const endpoint = "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&fields=id,name,webViewLink";
  const response = UrlFetchApp.fetch(endpoint, {
    method: "post",
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken(),
      "X-Upload-Content-Type": payload.type || "application/octet-stream",
      "X-Upload-Content-Length": String(size),
    },
    contentType: "application/json; charset=UTF-8",
    payload: JSON.stringify({ name: name, parents: [DRIVE_FOLDER_ID] }),
    muteHttpExceptions: true,
  });
  if (response.getResponseCode() !== 200) throw new Error("Drive 업로드 세션 생성 실패: " + response.getContentText());
  const uploadUrl = response.getHeaders().Location || response.getHeaders().location;
  if (!uploadUrl) throw new Error("Drive 업로드 주소를 받지 못했습니다.");
  return { ok: true, uploadUrl: uploadUrl };
}

function recordApplication(payload) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let recorded = false;
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    const duplicate = sheet.createTextFinder(payload.submissionId).matchEntireCell(true).findNext();
    if (duplicate) return { ok: true, duplicate: true };
    const file = payload.file || {};
    sheet.appendRow([payload.submissionId,new Date(payload.submittedAt || Date.now()),payload.name,payload.phone,payload.email,payload.career,payload.portfolioLink || "",file.name || "",file.url || "",payload.concern,payload.commitment,(payload.conditions || []).join(" / "),(payload.availability || []).join(" / ")]);
    recorded = true;
  } finally {
    lock.releaseLock();
  }
  return { ok: true, recorded: recorded, notifications: notifyApplication(payload) };
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    if (payload.secret !== FORM_SUBMIT_SECRET) return jsonResponse({ ok:false, error:"Unauthorized" });
    if (payload.action === "initUpload") return jsonResponse(initUpload(payload));
    if (payload.action === "recordApplication") return jsonResponse(recordApplication(payload));
    return jsonResponse({ ok:false, error:"Unknown action" });
  } catch (error) {
    return jsonResponse({ ok:false, error:String(error && error.message ? error.message : error) });
  }
}

function authorizeSetup() {
  UrlFetchApp.fetch(
    "https://www.googleapis.com/drive/v3/about?fields=user",
    {
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken()
      },
      muteHttpExceptions: true
    }
  );

  SpreadsheetApp.openById(SHEET_ID).getName();

  const testFile = DriveApp
    .getFolderById(DRIVE_FOLDER_ID)
    .createFile(Utilities.newBlob("권한 확인", "text/plain", "OFFSET 권한 확인용 파일.txt"));

  testFile.setTrashed(true);
}
