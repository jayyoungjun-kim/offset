import LoginScreen from "./login-screen";
import { safeReturn } from "../lib/auth";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "로그인",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};
export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ returnTo?: string; error?: string }>;
}) {
  const p = await searchParams;
  return (
    <LoginScreen
      returnTo={safeReturn(p.returnTo || null)}
      errorCode={p.error || ""}
    />
  );
}
