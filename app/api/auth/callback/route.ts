import {
  config,
  cookie,
  cookieValue,
  hash,
  token,
  safeReturn,
} from "../../../lib/auth";
import { database } from "../../../lib/store";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const headers = new Headers({ "cache-control": "no-store" });
  headers.append("set-cookie", cookieValue(request, "offset_oauth", "", 0));
  try {
    const state = url.searchParams.get("state"),
      code = url.searchParams.get("code");
    if (
      url.origin !== config("AUTH_ORIGIN") ||
      !state ||
      state !== cookie(request, "offset_oauth") ||
      !code
    )
      throw Error("state");
    const db = database();
    const flow = await db
      .prepare(
        "DELETE FROM oauth_flows WHERE state_hash=? AND expires_at>? RETURNING verifier,return_to",
      )
      .bind(await hash(state), Date.now())
      .first<{ verifier: string; return_to: string }>();
    if (!flow) throw Error("flow");
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: config("GOOGLE_CLIENT_ID"),
        client_secret: config("GOOGLE_CLIENT_SECRET"),
        redirect_uri: config("AUTH_ORIGIN") + "/api/auth/callback",
        grant_type: "authorization_code",
        code,
        code_verifier: flow.verifier,
      }),
    });
    if (!response.ok) throw Error("exchange");
    const tokens = (await response.json()) as { access_token?: string };
    if (!tokens.access_token) throw Error("token");
    const info = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      { headers: { authorization: `Bearer ${tokens.access_token}` } },
    );
    if (!info.ok) throw Error("profile");
    const user = (await info.json()) as {
      sub?: string;
      email?: string;
      email_verified?: boolean;
      name?: string;
    };
    if (!user.sub || !user.email || user.email_verified !== true)
      throw Error("identity");
    const session = token();
    await db.batch([
      db
        .prepare(
          "INSERT INTO users(id,email,name,created_at) VALUES(?,?,?,?) ON CONFLICT(id) DO UPDATE SET email=excluded.email,name=excluded.name",
        )
        .bind(
          user.sub,
          user.email,
          user.name || user.email.split("@")[0],
          new Date().toISOString(),
        ),
      db
        .prepare(
          "INSERT INTO sessions(token_hash,user_id,expires_at) VALUES(?,?,?)",
        )
        .bind(await hash(session), user.sub, Date.now() + 7 * 86400000),
      db.prepare("DELETE FROM sessions WHERE expires_at<?").bind(Date.now()),
    ]);
    headers.append(
      "set-cookie",
      cookieValue(request, "offset_session", session, 7 * 86400),
    );
    headers.set(
      "location",
      new URL(safeReturn(flow.return_to), url.origin).toString(),
    );
  } catch {
    headers.set(
      "location",
      new URL("/login?error=authentication", url.origin).toString(),
    );
  }
  return new Response(null, { status: 303, headers });
}
