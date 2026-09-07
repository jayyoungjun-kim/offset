import { listPrograms } from "../../lib/store";
import { json, fail } from "../../lib/auth";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    return json({ programs: await listPrograms() });
  } catch (e) {
    return fail(e);
  }
}
