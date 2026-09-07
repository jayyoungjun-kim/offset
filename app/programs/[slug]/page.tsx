import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgram } from "../../lib/store";
import { money, statusLabel } from "../../lib/program-data";
import ProgramHeader, { ProgramFooter } from "../program-header";
import ApplicationAction from "./application-action";
export const dynamic = "force-dynamic";
async function load(slug: string) {
  try {
    return { program: await getProgram(slug), offline: false };
  } catch {
    return {
      program: null,
      offline: true,
    };
  }
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { program } = await load(slug);
  return {
    title: program?.title.replace("\n", " ") || "프로그램",
    description: program?.subtitle,
    alternates: { canonical: `/programs/${slug}` },
  };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { program: p, offline } = await load(slug);
  if (offline)
    return (
      <div className="of-site">
        <ProgramHeader />
        <main className="of-wrap of-account">
          <div className="of-empty" role="alert">
            <h1>프로그램 정보를 불러오지 못했습니다.</h1>
            <p>잠시 후 다시 시도해 주세요.</p>
            <Link className="of-button secondary" href="/programs">
              프로그램 목록으로
            </Link>
          </div>
        </main>
        <ProgramFooter />
      </div>
    );
  if (!p) notFound();
  return (
    <div className="of-site">
      <ProgramHeader />
      <main className="of-wrap of-detail">
        <Link href="/programs" className="of-back">
          ← 모든 프로그램
        </Link>
        <div className="of-detail-hero">
          <div>
            <p className="of-eyebrow">
              {p.category} / {p.cohort}
            </p>
            <h1>{p.title}</h1>
            <p>{p.subtitle}</p>
            <div className="of-detail-tags">
              <span className={`of-status ${p.status}`}>
                {statusLabel[p.status]}
              </span>
              <span>{p.format}</span>
              <span>{p.duration}</span>
            </div>
          </div>
          <div className="of-detail-art">
            <span>
              {p.id === "portfolio-01" ? (
                <>
                  PORTFOLIO
                  <br />
                  IN PROGRESS.
                </>
              ) : (
                p.title
              )}
            </span>
            <img src={p.image} width="150" height="150" alt="" />
            <small>작은 개선이 만드는, 다음의 가능성.</small>
          </div>
        </div>
        <div className="of-detail-columns">
          <article className="of-detail-content">
            <nav className="of-section-nav" aria-label="프로그램 상세 목차">
              <a href="#overview">프로그램 소개</a>
              <a href="#curriculum">진행 과정</a>
              <a href="#mentor">멘토</a>
              <a href="#information">참여 안내</a>
            </nav>
            <section id="overview">
              <p className="of-section-number">01 / OVERVIEW</p>
              <h2>
                나의 작업을,
                <br />
                새로운 관점으로 바라보는 시간.
              </h2>
              <p>{p.description}</p>
              <h3>이런 변화를 만들어갑니다</h3>
              <ul className="of-checklist">
                {p.outcomes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3>이런 분과 함께하고 싶어요</h3>
              <ul>
                {p.audience.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="of-muted">
                기존 포트폴리오를 다듬는 과정입니다. 처음부터 제작하거나
                취업·이직을 보장하는 프로그램은 아닙니다.
              </p>
            </section>
            <section id="curriculum">
              <p className="of-section-number">02 / PROCESS</p>
              <h2>
                리뷰하고, 수정하고.
                <br />더 나은 답을 찾아갑니다.
              </h2>
              <div className="of-curriculum">
                {p.curriculum.map((x, i) => (
                  <div key={i}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <p>{x}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="mentor">
              <p className="of-section-number">03 / PEOPLE</p>
              <h2>경험을 나누는 사람</h2>
              <div className="of-mentor">
                <span className="of-mentor-mark" aria-hidden="true">
                  O↗
                </span>
                <div>
                  <h3>{p.mentor}</h3>
                  <p>{p.mentorBio}</p>
                </div>
              </div>
            </section>
            <section id="information">
              <p className="of-section-number">04 / INFORMATION</p>
              <h2>참여 전, 확인해 주세요.</h2>
              <dl className="of-facts">
                {[
                  ["모집 상태", statusLabel[p.status]],
                  ["모집 인원", p.capacity],
                  ["진행 기간", p.duration],
                  ["진행 시간", p.schedule],
                  ["장소", p.location],
                  ["참가비", money(p.price)],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <details>
                <summary>신청하면 바로 참가가 확정되나요?</summary>
                <p>
                  신청 내용과 포트폴리오를 검토하고 비슷한 고민을 가진
                  참가자끼리 그룹을 구성합니다. 참가 가능 안내와 결제 안내는
                  별도로 전달하며, 신청만으로 결제되거나 참가가 확정되지는
                  않습니다.
                </p>
              </details>
              <details>
                <summary>어떤 포트폴리오가 필요한가요?</summary>
                <p>
                  리뷰할 수 있는 기존 포트폴리오가 필요합니다. 완성도보다 현재
                  고민과 개선 의지가 중요합니다. 매주 피드백을 반영할 시간을
                  확보해 주세요.
                </p>
              </details>
              <details>
                <summary>참가비와 취소는 어떻게 안내되나요?</summary>
                <p>
                  결제 방법과 취소·환불 기준은 참가 확정 전 운영자가 안내합니다.
                  조건을 확인한 후 참가 여부를 결정해 주세요.
                </p>
              </details>
            </section>
          </article>
          <aside className="of-apply-panel">
            <div className="of-apply-sticky">
              <span className={`of-status ${p.status}`}>
                {statusLabel[p.status]}
              </span>
              <h2>{p.title.replace("\n", " ")}</h2>
              <p>
                {p.cohort} · {p.format}
              </p>
              <dl>
                <div>
                  <dt>진행 기간</dt>
                  <dd>{p.duration}</dd>
                </div>
                <div>
                  <dt>모집 인원</dt>
                  <dd>{p.capacity}</dd>
                </div>
              </dl>
              <div className="of-price">
                <span>참가비</span>
                <strong>{money(p.price)}</strong>
              </div>
              <ApplicationAction program={p} unavailable={offline} />
              <p className="of-apply-caption">
                신청서 검토 후 참여 가능 여부를 안내합니다.
              </p>
              <a className="of-contact" href="mailto:offset.learn@gmail.com">
                프로그램 문의하기 ↗
              </a>
            </div>
          </aside>
        </div>
      </main>
      <ProgramFooter />
    </div>
  );
}
