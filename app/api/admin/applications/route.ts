import {
  requireUser,
  sameOrigin,
  json,
  fail,
  bodyJson,
  ApiError,
} from "../../../lib/auth";
import { database } from "../../../lib/store";
export async function GET(r: Request) {
  try {
    await requireUser(r, true);
    const rows = await database()
      .prepare(
        "SELECT enrollments.*,json_extract(programs.data,'$.title') AS title FROM enrollments JOIN programs ON programs.id=program_id ORDER BY created_at DESC",
      )
      .all();
    return json({ enrollments: rows.results });
  } catch (e) {
    return fail(e);
  }
}
export async function PATCH(r: Request) {
  try {
    sameOrigin(r);
    const u = await requireUser(r, true),
      b = await bodyJson(r);
    if (
      !["submitted", "reviewing", "accepted", "declined", "cancelled"].includes(
        b.status,
      ) ||
      typeof b.id !== "string"
    )
      throw new ApiError(400, "신청 상태를 확인해 주세요.");
    const db = database();
    const exists = await db
      .prepare("SELECT id FROM enrollments WHERE id=?")
      .bind(b.id)
      .first();
    if (!exists) throw new ApiError(404, "신청서를 찾을 수 없습니다.");
    await db.batch([
      db
        .prepare("UPDATE enrollments SET status=? WHERE id=?")
        .bind(b.status, b.id),
      db
        .prepare(
          "INSERT INTO audit_log(id,actor,action,entity_id,created_at) VALUES(?,?,?,?,?)",
        )
        .bind(
          crypto.randomUUID(),
          u.id,
          "enrollment." + b.status,
          b.id,
          new Date().toISOString(),
        ),
    ]);
    return json({ ok: true });
  } catch (e) {
    return fail(e);
  }
}
