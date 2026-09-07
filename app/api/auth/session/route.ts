import { currentUser, json, fail, config } from "../../../lib/auth";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    return json({
      user: await currentUser(request),
      configured: !!(
        config("GOOGLE_CLIENT_ID") &&
        config("GOOGLE_CLIENT_SECRET") &&
        config("AUTH_ORIGIN")
      ),
    });
  } catch (e) {
    return fail(e);
  }
}
