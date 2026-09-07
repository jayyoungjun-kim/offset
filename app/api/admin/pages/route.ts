import {
  requireUser,
  sameOrigin,
  json,
  fail,
  bodyJson,
} from "../../../lib/auth";
import { listPages, database } from "../../../lib/store";
import { validatePage } from "../../../lib/validation";
export async function GET(r: Request) {
  try {
    await requireUser(r, true);
    return json({ pages: await listPages() });
  } catch (e) {
    return fail(e);
  }
}
export async function POST(r: Request) {
  try {
    sameOrigin(r);
    const u = await requireUser(r, true);
    const p = validatePage(await bodyJson(r));
    const db = database();
    await db.batch([
      db
        .prepare(
          "INSERT INTO content_pages(id,type,status,data,updated_at) VALUES(?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET type=excluded.type,status=excluded.status,data=excluded.data,updated_at=excluded.updated_at",
        )
        .bind(p.id, p.type, p.status, JSON.stringify(p), p.updatedAt),
      db
        .prepare(
          "INSERT INTO audit_log(id,actor,action,entity_id,created_at) VALUES(?,?,?,?,?)",
        )
        .bind(crypto.randomUUID(), u.id, "page.save", p.id, p.updatedAt),
    ]);
    return json({ page: p });
  } catch (e) {
    return fail(e);
  }
}
