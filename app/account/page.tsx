"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProgramHeader, { ProgramFooter } from "../programs/program-header";
import { type Enrollment, enrollmentLabel } from "../lib/program-data";
import "../programs/programs.css";
export default function Account() {
  const [items, setItems] = useState<Enrollment[]>([]),
    [name, setName] = useState(""),
    [error, setError] = useState(""),
    [loading, setLoading] = useState(true);
  function load() {
    Promise.all([fetch("/api/auth/session"), fetch("/api/enrollments")])
      .then(async ([a, b]) => {
        if (b.status === 401) {
          location.replace("/login?returnTo=/account");
          return;
        }
        const u = (await a.json()) as { user: { name: string } },
          d = (await b.json()) as { error?: string; enrollments: Enrollment[] };
        if (!a.ok || !b.ok)
          throw Error(d.error || "정보를 불러오지 못했습니다.");
        setName(u.user.name);
        setItems(d.enrollments);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }
  useEffect(load, []);
  return (
    <div className="of-site">
      <ProgramHeader />
      <main className="of-wrap of-account">
        <div className="of-account-top">
          <div>
            <p className="of-eyebrow">MY LEARNING</p>
            <h1>{name ? `${name}님의 배움` : "나의 프로그램"}</h1>
          </div>
          <form action="/api/auth/logout" method="post">
            <button className="of-button secondary">로그아웃</button>
          </form>
        </div>
        {loading ? (
          <p role="status">신청 내역을 불러오는 중입니다.</p>
        ) : error ? (
          <div className="of-notice" role="alert">
            {error}{" "}
            <button
              onClick={() => {
                setError("");
                setLoading(true);
                load();
              }}
            >
              다시 시도
            </button>
          </div>
        ) : items.length ? (
          <div className="of-account-list">
            {items.map((x) => (
              <article className="of-account-item" key={x.id}>
                <div>
                  <span>
                    {new Date(x.created_at).toLocaleDateString("ko-KR")} 신청
                  </span>
                  <span className="of-status">{enrollmentLabel[x.status]}</span>
                </div>
                <h2>{x.title}</h2>
                <p>신청 번호 {x.id.slice(0, 8)}</p>
                <p>
                  {x.status === "accepted"
                    ? "참가 가능 상태입니다. 결제 및 일정 안내를 별도로 확인해 주세요."
                    : "참가 가능 여부와 다음 절차는 신청 검토 후 안내합니다."}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="of-empty">
            <h2>아직 신청한 프로그램이 없어요.</h2>
            <p>지금 나에게 필요한 배움을 찾아보세요.</p>
            <Link className="of-button" href="/programs">
              프로그램 둘러보기 ↗
            </Link>
          </div>
        )}
      </main>
      <ProgramFooter />
    </div>
  );
}
