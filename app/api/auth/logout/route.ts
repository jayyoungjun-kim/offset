import { cookie, cookieValue, hash, sameOrigin, fail } from "../../../lib/auth";
import { database } from "../../../lib/store";
export async function POST(request: Request) {
  try {
    sameOrigin(request);
    const value = cookie(request, "offset_session");
    if (value)
      await database()
        .prepare("DELETE FROM sessions WHERE token_hash=?")
        .bind(await hash(value))
        .run();
    return new Response(null, {
      status: 303,
      headers: {
        location: "/programs",
        "set-cookie": cookieValue(request, "offset_session", "", 0),
        "cache-control": "no-store",
      },
    });
  } catch (e) {
    return fail(e);
  }
}
