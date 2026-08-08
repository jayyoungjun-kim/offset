const MAX_FILE_SIZE = 20 * 1024 * 1024;
const GITHUB_PAGES_ORIGIN = "https://jayyoungjun-kim.github.io";

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("access-control-allow-origin", GITHUB_PAGES_ORIGIN);
  headers.set("access-control-allow-credentials", "true");
  headers.set("vary", "Origin");
  return Response.json(body, { ...init, headers });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": GITHUB_PAGES_ORIGIN,
      "access-control-allow-credentials": "true",
      "access-control-allow-methods": "POST, PUT, OPTIONS",
      "access-control-allow-headers": "Content-Type, X-File-Size, X-Upload-Session",
      "access-control-max-age": "86400",
      vary: "Origin",
    },
  });
}

type StoredFile = { id: string; name: string; url: string; size: number; type: string };

async function callScript(payload: Record<string, unknown>) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secret = process.env.FORM_SUBMIT_SECRET;
  if (!scriptUrl || !secret) throw new Error("신청서 저장 설정이 완료되지 않았습니다.");
  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: { "content-type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...payload, secret }),
    redirect: "follow",
  });
  const result = await response.json().catch(() => null) as Record<string, unknown> | null;
  if (!response.ok || !result?.ok) throw new Error(String(result?.error || "Google 저장 요청에 실패했습니다."));
  return result;
}

export async function PUT(request: Request) {
  try {
    const session = request.headers.get("x-upload-session") || "";
    const fileSize = Number(request.headers.get("x-file-size") || request.headers.get("content-length") || 0);
    const sessionUrl = new URL(session);
    if (!sessionUrl.hostname.endsWith("googleapis.com") || !sessionUrl.pathname.includes("/upload/drive/")) {
      return jsonResponse({ error: "올바르지 않은 업로드 세션입니다." }, { status: 400 });
    }
    if (!fileSize || fileSize > MAX_FILE_SIZE) {
      return jsonResponse({ error: "파일 용량은 최대 20MB까지 첨부할 수 있습니다." }, { status: 413 });
    }
    const upload = await fetch(session, {
      method: "PUT",
      headers: { "content-type": request.headers.get("content-type") || "application/octet-stream", "content-length": String(fileSize) },
      body: request.body,
    });
    const file = await upload.json().catch(() => null) as { id?: string; name?: string; webViewLink?: string } | null;
    if (!upload.ok || !file?.id) return jsonResponse({ error: "포트폴리오 파일 업로드에 실패했습니다." }, { status: 502 });
    return jsonResponse({ ok: true, file: { id:file.id, name:file.name || "portfolio", url:file.webViewLink || `https://drive.google.com/open?id=${file.id}`, size:fileSize, type:request.headers.get("content-type") || "application/octet-stream" } });
  } catch (error) {
    console.error("Direct Drive upload failed", error);
    return jsonResponse({ error: "포트폴리오 파일 업로드에 실패했습니다." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (body.action === "initUpload") {
      const size = Number(body.size || 0);
      if (!body.name || !size || size > MAX_FILE_SIZE) return jsonResponse({ error: "파일 용량은 최대 20MB까지 첨부할 수 있습니다." }, { status: 413 });
      const result = await callScript({ action:"initUpload", name:String(body.name), type:String(body.type || "application/octet-stream"), size, applicantName:String(body.applicantName || "") });
      return jsonResponse({ ok:true, uploadUrl:result.uploadUrl });
    }

    const name=String(body.name||"").trim(), phone=String(body.phone||"").trim(), email=String(body.email||"").trim();
    const career=String(body.career||"").trim(), portfolioLink=String(body.portfolioLink||"").trim(), concern=String(body.concern||"").trim(), commitment=String(body.commitment||"").trim();
    const conditions=Array.isArray(body.conditions)?body.conditions.map(String):[], availability=Array.isArray(body.availability)?body.availability.map(String):[];
    const file=(body.file || null) as StoredFile | null;
    if (!name||!phone||!email||!career||!concern||!commitment||conditions.length!==3||availability.length===0||(!portfolioLink&&!file)) return jsonResponse({ error:"신청서 내용을 다시 확인해 주세요." },{status:400});
    if (concern.length<100) return jsonResponse({ error:"현재 고민되는 부분을 100자 이상 입력해 주세요." },{status:400});
    if (file && file.size>MAX_FILE_SIZE) return jsonResponse({ error:"파일 용량은 최대 20MB까지 첨부할 수 있습니다." },{status:413});

    const submissionId=crypto.randomUUID();
    const sheetConditions=[conditions.join("\n")];
    const sheetAvailability=[availability.join("\n")];
    await callScript({ action:"recordApplication", submissionId, submittedAt:new Date().toISOString(), name, phone, email, career, portfolioLink, concern, commitment, conditions:sheetConditions, availability:sheetAvailability, file });
    return jsonResponse({ ok:true, submissionId });
  } catch (error) {
    console.error("Application submission failed", error);
    return jsonResponse({ error:error instanceof Error?error.message:"신청서를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요." },{status:500});
  }
}
