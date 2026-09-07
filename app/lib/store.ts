import { env } from "cloudflare:workers";
import { seedPrograms, type Program, type ContentPage } from "./program-data";
export function database() {
  if (!env.DB) throw new Error("DATABASE_UNAVAILABLE");
  return env.DB as D1Database;
}
// Older saved records predate the full-copy editor. Apply the source template
// only when absent; an admin save persists the sections with the program.
function readProgram(data: string): Program {
  const p: Program = JSON.parse(data);
  // Retire the old decorative artwork; uploads use managed media URLs.
  if (!p.image?.startsWith("/media/")) p.image = "";
  if (p.id === "portfolio-01" && p.detailSections === undefined) {
    p.detailSections = seedPrograms[0].detailSections;
  }
  if (p.id === "portfolio-01") {
    if (p.capacity === "9명 · 그룹당 3명") p.capacity = "9명 (그룹당 3명)";
    if (p.duration === "4주 · 주 1회") p.duration = "4주 (주 1회)";
  }
  return p;
}
export async function listPrograms(admin = false): Promise<Program[]> {
  const rows = await database()
    .prepare(
      `SELECT data FROM programs ${admin ? "" : "WHERE status != 'draft'"} ORDER BY sort_order, id`,
    )
    .all<{ data: string }>();
  return rows.results.map((r) => readProgram(r.data));
}
export async function getProgram(
  slug: string,
  admin = false,
): Promise<Program | null> {
  const row = await database()
    .prepare(
      `SELECT data FROM programs WHERE slug=? ${admin ? "" : "AND status != 'draft'"}`,
    )
    .bind(slug)
    .first<{ data: string }>();
  return row ? readProgram(row.data) : null;
}
export async function saveProgram(p: Program, actor: string) {
  const db = database();
  await db.batch([
    db
      .prepare(
        "INSERT INTO programs (id,slug,status,sort_order,data) VALUES (?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET slug=excluded.slug,status=excluded.status,sort_order=excluded.sort_order,data=excluded.data",
      )
      .bind(p.id, p.slug, p.status, p.order, JSON.stringify(p)),
    db
      .prepare(
        "INSERT INTO audit_log(id,actor,action,entity_id,created_at) VALUES(?,?,?,?,?)",
      )
      .bind(
        crypto.randomUUID(),
        actor,
        "program.save",
        p.id,
        new Date().toISOString(),
      ),
  ]);
}
export async function listPages(): Promise<ContentPage[]> {
  const rows = await database()
    .prepare("SELECT data FROM content_pages ORDER BY updated_at DESC")
    .all<{ data: string }>();
  return rows.results.map((r) => JSON.parse(r.data));
}
export { seedPrograms };
