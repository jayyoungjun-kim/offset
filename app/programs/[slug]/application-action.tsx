"use client";
import { useEffect, useRef, useState } from "react";
import { type Program } from "../../lib/program-data";
export default function ApplicationAction({
  program: p,
  unavailable = false,
}: {
  program: Program;
  unavailable?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [name, setName] = useState("");
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const close = () => {
      document.body.style.overflow = "";
    };
    el.addEventListener("close", close);
    return () => {
      el.removeEventListener("close", close);
      close();
    };
  }, []);
  async function open() {
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/auth/session");
      if (!r.ok)
        throw Error("로그인 정보를 확인하지 못했습니다. 다시 시도해 주세요.");
      const d = (await r.json()) as { user?: { name: string }; error?: string };
      if (!d.user) {
        window.location.assign(
          "/login?returnTo=" + encodeURIComponent("/programs/" + p.slug),
        );
        return;
      }
      setName(d.user.name);
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/enrollments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          programId: p.id,
          motivation: f.get("motivation"),
          portfolio: f.get("portfolio"),
          consent: f.get("consent") === "on",
        }),
      });
      const d = (await r.json()) as { user?: { name: string }; error?: string };
      if (!r.ok) throw Error(d.error);
      window.location.assign("/account?submitted=1");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <div className="of-mobile-apply">
        <button
          className="of-button"
          onClick={open}
          disabled={p.status !== "open" || busy || unavailable}
        >
          {busy
            ? "확인 중…"
            : p.status === "open"
              ? "프로그램 신청하기 ↗"
              : `${p.cohort} 모집이 마감되었습니다`}
        </button>
      </div>
      {error && (
        <p role="alert" className="of-form-error">
          {error}
        </p>
      )}
      <dialog ref={dialog} className="of-dialog">
        <div className="of-dialog-heading">
          <h2>프로그램 신청</h2>
          <button
            aria-label="신청 창 닫기"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        <p>{p.title.replace("\n", " ")}</p>
        <form className="of-form" onSubmit={submit}>
          <p>{name}님, 현재 고민과 작업을 알려주세요.</p>
          <label>
            포트폴리오 링크
            <input
              name="portfolio"
              type="url"
              required
              placeholder="https://"
              maxLength={2000}
            />
          </label>
          <label>
            신청 동기와 현재 고민
            <textarea
              name="motivation"
              required
              minLength={20}
              maxLength={3000}
              placeholder="20자 이상 작성해 주세요."
              rows={5}
            />
          </label>
          <div className="of-consent-copy">
            신청 검토 및 참여 안내를 위해 이름, 이메일, 포트폴리오 링크, 신청
            동기를 수집합니다. 신청일로부터 1년 보관 후 삭제합니다. 동의를
            거부할 수 있으나 신청 접수는 제한됩니다. 문의:
            offset.learn@gmail.com
          </div>
          <label className="of-checkbox">
            <input type="checkbox" name="consent" required />
            개인정보 수집·이용에 동의합니다.
          </label>
          {error && (
            <p role="alert" className="of-form-error">
              {error}
            </p>
          )}
          <button className="of-button" disabled={busy}>
            {busy ? "접수 중…" : "신청서 제출"}
          </button>
        </form>
      </dialog>
    </>
  );
}
