"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProgramHeader, { ProgramFooter } from "./program-header";
import { type Program, statusLabel, money } from "../lib/program-data";
export default function ProgramList({
  initialPrograms,
  initiallyUnavailable = false,
}: {
  initialPrograms: Program[];
  initiallyUnavailable?: boolean;
}) {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms),
    [query, setQuery] = useState(""),
    [category, setCategory] = useState("전체"),
    [status, setStatus] = useState("all"),
    [error, setError] = useState(initiallyUnavailable),
    [loading, setLoading] = useState(false);
  function load() {
    fetch("/api/catalog")
      .then(async (r) => {
        if (!r.ok) throw Error();
        return r.json() as Promise<{ programs: Program[] }>;
      })
      .then((d) => {
        setPrograms(d.programs);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }
  useEffect(load, []);
  const results = programs.filter(
    (p) =>
      p.status !== "draft" &&
      (category === "전체" || p.category === category) &&
      (status === "all" || p.status === status) &&
      (p.title + p.subtitle).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="of-site">
      <ProgramHeader />
      <main className="of-wrap of-list">
        <div className="of-intro">
          <div>
            <p className="of-eyebrow">LEARN. REFINE. REPEAT.</p>
            <h1>
              다음 단계로,
              <br />
              함께 나아가는 배움.
            </h1>
          </div>
          <p>
            새로운 관점을 만나고, 나의 작업을 다듬는 시간.
            <br />
            지금 나에게 필요한 프로그램을 찾아보세요.
          </p>
        </div>
        <div className="of-list-title">
          <h2>
            프로그램{" "}
            <sup>
              {programs
                .filter((p) => p.status !== "draft")
                .length.toString()
                .padStart(2, "0")}
            </sup>
          </h2>
          <label className="of-search">
            <span aria-hidden="true">⌕</span>
            <input
              aria-label="프로그램 검색"
              placeholder="어떤 배움을 찾고 있나요?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <div className="of-filters">
          <div role="group" aria-label="프로그램 유형">
            {["전체", "워크숍", "클래스", "모임"].map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <select
            aria-label="모집 상태"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">모든 모집 상태</option>
            <option value="open">모집 중</option>
            <option value="closed">모집 마감</option>
          </select>
        </div>
        {error && (
          <div className="of-notice" role="alert">
            최신 프로그램 정보를 불러오지 못했습니다. 다시 시도해 주세요.{" "}
            <button
              onClick={() => {
                setError(false);
                setLoading(true);
                load();
              }}
            >
              다시 불러오기
            </button>
          </div>
        )}
        <p className="of-result" aria-live="polite">
          {loading
            ? "프로그램을 불러오는 중입니다."
            : `${results.length}개의 프로그램`}
        </p>
        <div className="of-program-grid">
          {results.map((p) => (
            <Link
              key={p.id}
              href={`/programs/${p.slug}`}
              className="of-program-card"
            >
              <div className="of-cover">
                <div className="of-cover-top">
                  <span>OFFSET / {p.category}</span>
                  <span>NO. {String(p.order + 1).padStart(2, "0")}</span>
                </div>
                <h3>
                  {p.id === "portfolio-01" ? (
                    <>
                      Portfolio
                      <br />
                      <span>in progress.</span>
                    </>
                  ) : (
                    p.title
                  )}
                </h3>
                <img src={p.image} alt="" width="112" height="112" />
                <div className="of-cover-bottom">
                  <span>{p.duration}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
              <div className="of-card-meta">
                <span>
                  {p.category} · {p.format}
                </span>
                <span className={`of-status ${p.status}`}>
                  {statusLabel[p.status]}
                </span>
              </div>
              <h3 className="of-card-title">
                {p.title.replace("\n", " ")} <span>↗</span>
              </h3>
              <p className="of-card-description">{p.subtitle}</p>
              <div className="of-card-bottom">
                <span>
                  {p.cohort} · {p.location.split(" · ")[0]}
                </span>
                <strong>{money(p.price)}</strong>
              </div>
            </Link>
          ))}
        </div>
        {results.length === 0 && !loading && (
          <div className="of-empty">
            <h3>조건에 맞는 프로그램이 없어요.</h3>
            <p>다른 검색어나 모집 상태로 찾아보세요.</p>
            <button
              className="of-button secondary"
              onClick={() => {
                setQuery("");
                setCategory("전체");
                setStatus("all");
              }}
            >
              필터 초기화
            </button>
          </div>
        )}
        <div className="of-endnote">
          <span>
            SMALL SHIFTS,
            <br />
            LASTING GROWTH.
          </span>
          <p>
            좋은 배움이 쌓여, 다음의 나를 만듭니다.
            <br />
            새로운 프로그램도 이곳에서 만나보세요.
          </p>
        </div>
      </main>
      <ProgramFooter />
    </div>
  );
}
