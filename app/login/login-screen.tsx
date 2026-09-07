"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProgramHeader, { ProgramFooter } from "../programs/program-header";
import "../programs/programs.css";
export default function LoginScreen({
  returnTo,
  errorCode,
}: {
  returnTo: string;
  errorCode: string;
}) {
  const destination = returnTo;
  const [error, setError] = useState(
      errorCode
        ? "구글 로그인 연결을 완료하지 못했습니다. 잠시 후 다시 시도해 주세요."
        : "",
    ),
    [ready, setReady] = useState<boolean | null>(null);
  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => {
        if (!r.ok) throw Error();
        return r.json() as Promise<{ configured: boolean; user: unknown }>;
      })
      .then((d) => {
        setReady(d.configured);
        if (d.user) location.replace(returnTo);
      })
      .catch(() => {
        setReady(false);
        setError("로그인 서비스에 연결하지 못했습니다.");
      });
  }, [returnTo]);
  return (
    <div className="of-site">
      <ProgramHeader />
      <main className="of-login">
        <p className="of-eyebrow">WELCOME TO OFFSET</p>
        <h1>
          배움의 다음 단계를
          <br />
          함께 시작해요.
        </h1>
        <p>
          구글 계정으로 로그인하고
          <br />
          프로그램 신청과 참여 내역을 관리하세요.
        </p>
        {ready ? (
          <a
            className="of-button of-google"
            href={
              "/api/auth/google?returnTo=" + encodeURIComponent(destination)
            }
          >
            <b aria-hidden="true">G</b> Google로 계속하기
          </a>
        ) : (
          <button className="of-button of-google" disabled>
            {ready === null
              ? "로그인을 준비하고 있어요…"
              : "구글 로그인 연결 준비 중"}
          </button>
        )}
        {error && (
          <p role="alert" className="of-form-error">
            {error}
          </p>
        )}
        {ready === false && (
          <p className="of-notice">
            현재 로그인 연결을 준비하고 있습니다. 프로그램은 로그인 없이 둘러볼
            수 있어요.
          </p>
        )}
        <small>
          프로그램 신청 단계에서 개인정보 수집·이용에
          <br />
          대한 내용을 확인하고 동의할 수 있습니다.
        </small>
        <p>
          <Link href="/programs">프로그램 먼저 둘러보기 ↗</Link>
        </p>
      </main>
      <ProgramFooter />
    </div>
  );
}
