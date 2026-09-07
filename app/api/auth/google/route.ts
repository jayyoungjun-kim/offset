import {
  config,
  safeReturn,
  token,
  hash,
  cookieValue,
} from "../../../lib/auth";
import { database } from "../../../lib/store";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const redirect = (message: string) =>
    Response.redirect(new URL("/login?error=" + message, url.origin), 303);
  if (
    !config("GOOGLE_CLIENT_ID") ||
    !config("GOOGLE_CLIENT_SECRET") ||
    !config("AUTH_ORIGIN")
  )
    return redirect("configuration");
  if (url.origin !== config("AUTH_ORIGIN")) return redirect("origin");
  try {
    const state = token(),
      verifier = token();
    const challenge = btoa(
      String.fromCharCode(
        ...new Uint8Array(
          await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(verifier),
          ),
        ),
      ),
    )
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    const db = database();
    await db
      .prepare("DELETE FROM oauth_flows WHERE expires_at<?")
      .bind(Date.now())
      .run();
    await db
      .prepare(
        "INSERT INTO oauth_flows(state_hash,verifier,return_to,expires_at) VALUES(?,?,?,?)",
      )
      .bind(
        await hash(state),
        verifier,
        safeReturn(url.searchParams.get("returnTo")),
        Date.now() + 600000,
      )
      .run();
    const destination = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    destination.search = new URLSearchParams({
      client_id: config("GOOGLE_CLIENT_ID"),
      redirect_uri: config("AUTH_ORIGIN") + "/api/auth/callback",
      response_type: "code",
      scope: "openid email profile",
      state,
      code_challenge: challenge,
      code_challenge_method: "S256",
      prompt: "select_account",
    }).toString();
    return new Response(null, {
      status: 303,
      headers: {
        location: destination.toString(),
        "set-cookie": cookieValue(request, "offset_oauth", state, 600),
        "cache-control": "no-store",
      },
    });
  } catch {
    return redirect("unavailable");
  }
}
