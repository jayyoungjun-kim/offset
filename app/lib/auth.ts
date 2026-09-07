import { env } from "cloudflare:workers";
import { database } from "./store";
export type User = { id: string; email: string; name: string; admin: boolean };
export function config(key: string): string {
  return String(
    (env as unknown as Record<string, unknown>)[key] || process.env[key] || "",
  );
}
export function safeReturn(value: string | null) {
  if (
    !value ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    /[\\\r\n]/.test(value)
  )
    return "/account";
  return value;
}
export async function hash(value: string) {
  const data = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(data), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
}
export function token() {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
}
export function cookie(request: Request, name: string) {
  return (
    request.headers
      .get("cookie")
      ?.split(";")
      .map((x) => x.trim())
      .find((x) => x.startsWith(name + "="))
      ?.slice(name.length + 1) || ""
  );
}
export function cookieValue(
  request: Request,
  name: string,
  value: string,
  age: number,
) {
  return `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${age}${new URL(request.url).protocol === "https:" ? "; Secure" : ""}`;
}
export async function currentUser(request: Request): Promise<User | null> {
  const value = cookie(request, "offset_session");
  if (!/^[a-f0-9]{64}$/.test(value)) return null;
  const row = await database()
    .prepare(
      "SELECT users.id,users.email,users.name FROM sessions JOIN users ON users.id=sessions.user_id WHERE sessions.token_hash=? AND sessions.expires_at>?",
    )
    .bind(await hash(value), Date.now())
    .first<{ id: string; email: string; name: string }>();
  if (!row) return null;
  const admins = config("ADMIN_EMAILS")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return { ...row, admin: admins.includes(row.email.toLowerCase()) };
}
export class ApiError extends Error {
  readonly name = "OffsetApiError";
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin)
    throw new ApiError(403, "허용되지 않은 요청입니다.");
}
export async function requireUser(request: Request, admin = false) {
  const user = await currentUser(request);
  if (!user) throw new ApiError(401, "로그인이 필요합니다.");
  if (admin && !user.admin)
    throw new ApiError(403, "운영자 권한이 필요합니다.");
  return user;
}
export async function bodyJson(request: Request, maxBytes = 64000) {
  if (Number(request.headers.get("content-length") || 0) > maxBytes)
    throw new ApiError(413, "입력 내용이 너무 큽니다.");
  const reader = request.body?.getReader();
  const decoder = new TextDecoder();
  let text = "", bytes = 0;
  if (reader) {
    while (true) {
      const {done,value} = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBytes) { await reader.cancel(); throw new ApiError(413, "입력 내용이 너무 큽니다."); }
      text += decoder.decode(value,{stream:true});
    }
    text += decoder.decode();
  }
  try {
    const value = JSON.parse(text);
    if (!value || typeof value !== "object" || Array.isArray(value))
      throw new Error("Invalid body");
    return value;
  } catch {
    throw new ApiError(400, "올바르지 않은 요청입니다.");
  }
}
export function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}
export function fail(error: unknown) {
  // Workers can load the same server module through different bundled entries.
  // Match the explicit error identity instead of a bundle-local constructor.
  if (error instanceof Error && error.name === "OffsetApiError" && "status" in error
      && typeof error.status === "number" && [400,401,403,404,409,413,415,503].includes(error.status))
    return json({ error: error.message }, error.status);
  console.error("OFFSET API failure", error);
  return json(
    { error: "저장소에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요." },
    503,
  );
}
