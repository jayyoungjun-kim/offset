"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProgramHeader() {
  const [user, setUser] = useState<{ name: string; admin: boolean } | null>(
    null,
  );
  useEffect(() => {
    fetch("/api/auth/session")
      .then(
        (r) =>
          r.json() as Promise<{
            user: { name: string; admin: boolean } | null;
          }>,
      )
      .then((d) => setUser(d.user))
      .catch(() => {});
  }, []);
  return (
    <header className="of-header">
      <div className="of-wrap of-nav">
        <Link href="/" aria-label="OFFSET 홈" className="of-logo">
          <img src="/offset-logo.svg" alt="OFFSET" width="142" height="32" />
        </Link>
        <nav aria-label="주요 메뉴">
          <Link href="/programs" className="of-active">
            프로그램
          </Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="of-user">
          {user?.admin && <Link href="/admin">어드민</Link>}
          <Link href={user ? "/account" : "/login"}>
            {user ? "마이페이지" : "로그인"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export function ProgramFooter() {
  return (
    <footer className="of-footer of-wrap">
      <img src="/offset-logo.svg" alt="OFFSET" width="110" height="25" />
      <p>배우고, 다듬고, 함께 나아갑니다.</p>
      <div>
        <a href="mailto:offset.learn@gmail.com">문의하기 ↗</a>
        <span>© {new Date().getFullYear()} OFFSET</span>
      </div>
    </footer>
  );
}
