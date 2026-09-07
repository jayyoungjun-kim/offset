import {
  requireUser,
  sameOrigin,
  json,
  fail,
  bodyJson,
  ApiError,
} from "./auth";
import { database } from "./store";
export async function listEnrollments(r: Request) {
  try {
    const u = await requireUser(r);
    const rows = await database()
      .prepare(
        "SELECT enrollments.*, json_extract(programs.data,'$.title') AS title FROM enrollments JOIN programs ON programs.id=program_id WHERE user_id=? ORDER BY created_at DESC",
      )
      .bind(u.id)
      .all();
    return json({ enrollments: rows.results });
  } catch (e) {
    return fail(e);
  }
}
export async function submitEnrollment(r: Request) {
  try {
    const b = await bodyJson(r);
    sameOrigin(r);
    const u = await requireUser(r);
    if (
      typeof b.programId !== "string" ||
      typeof b.motivation !== "string" ||
      b.motivation.trim().length < 20 ||
      b.motivation.length > 3000 ||
      b.consent !== true ||
      typeof b.portfolio !== "string" ||
      b.portfolio.length > 2000
    )
      throw new ApiError(
        400,
        "신청 내용과 개인정보 수집 동의를 확인해 주세요.",
      );
    try {
      if (!["https:", "http:"].includes(new URL(b.portfolio).protocol))
        throw Error();
    } catch {
      throw new ApiError(400, "포트폴리오의 올바른 웹 주소를 입력해 주세요.");
    }
    const db = database();
    const program = await db
      .prepare("SELECT id FROM programs WHERE id=? AND status='open'")
      .bind(b.programId)
      .first();
    if (!program)
      throw new ApiError(409, "현재 신청 가능한 프로그램이 아닙니다.");
    const id = crypto.randomUUID();
    const result = await db
      .prepare(
        "INSERT INTO enrollments(id,user_id,program_id,name,email,motivation,portfolio,consent_version,created_at) SELECT ?,?,?,?,?,?,?,?,? WHERE EXISTS(SELECT 1 FROM programs WHERE id=? AND status='open') ON CONFLICT(user_id,program_id) DO NOTHING",
      )
      .bind(
        id,
        u.id,
        b.programId,
        u.name,
        u.email,
        b.motivation.trim(),
        b.portfolio,
        "2026-09-07",
        new Date().toISOString(),
        b.programId,
      )
      .run();
    if (!result.meta.changes)
      throw new ApiError(409, "이미 신청했거나 모집이 마감되었습니다.");
    return json({ id }, 201);
  } catch (e) {
    return fail(e);
  }
}
