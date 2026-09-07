import {
  requireUser,
  sameOrigin,
  json,
  fail,
  bodyJson,
  ApiError,
} from "../../../lib/auth";
import { listPrograms, saveProgram, database } from "../../../lib/store";
import { mediaBucket } from "../../../lib/media";
import { validateProgram } from "../../../lib/validation";
export async function GET(r: Request) {
  try {
    await requireUser(r, true);
    return json({ programs: await listPrograms(true) });
  } catch (e) {
    return fail(e);
  }
}
export async function POST(r: Request) {
  try {
    sameOrigin(r);
    const user = await requireUser(r, true);
    const p = validateProgram(await bodyJson(r, 256000));
    if (p.image && !await mediaBucket().head(`thumbnails/${p.image.slice(7)}`))
      throw new ApiError(400, "이미지를 찾을 수 없습니다. 다시 업로드하거나 선택해 주세요.");
    const conflict = await database()
      .prepare("SELECT id FROM programs WHERE slug=? AND id!=?")
      .bind(p.slug, p.id)
      .first();
    if (conflict)
      throw new ApiError(409, "이미 사용 중인 프로그램 주소입니다.");
    await saveProgram(p, user.id);
    return json({ program: p });
  } catch (e) {
    return fail(e);
  }
}
