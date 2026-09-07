import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgram } from "../../lib/store";
import { money, statusLabel } from "../../lib/program-data";
import ProgramHeader, { ProgramFooter } from "../program-header";
import ProgramCover from "../program-cover";
import DetailCopy from "./detail-copy";
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
    <div className="of-site of-detail-site">
      <ProgramHeader />
      <main className="of-wrap of-event-layout">
        <article className="of-event-article">
          <div className="of-event-poster"><ProgramCover program={p} /></div>
          <div className="of-event-copy">
            {p.detailSections !== undefined ? <DetailCopy sections={p.detailSections} /> : <DetailCopy sections={[
              {id:"overview",title:"프로그램 소개",body:p.description},
              {id:"outcomes",title:"학습 결과",body:p.outcomes.map(x=>"- "+x).join("\n")},
              {id:"audience",title:"참여 대상",body:p.audience.map(x=>"- "+x).join("\n")},
              {id:"curriculum",title:"진행 과정",body:p.curriculum.map((x,i)=>`${i+1}. ${x}`).join("\n")},
              {id:"mentor",title:p.mentor,body:p.mentorBio},
            ]} />}
          </div>
        </article>
        <aside className="of-event-sidebar" aria-label="워크숍 정보 및 신청">
          <div className="of-event-sidebar-inner">
            <div className="of-event-registration">
              <div className="of-event-badges"><span>{p.category}</span><span>{p.price ? "유료" : "무료"}</span></div>
              <h1>{p.title.replace("\n", " ")}</h1>
              <dl className="of-event-schedule">
                <div><dt><span className="of-panel-sr">진행기간</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 2v6m8-6v6M3 11h18"/></svg></dt><dd>{p.duration}</dd></div>
                <div><dt><span className="of-panel-sr">진행시간</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></dt><dd>{p.schedule}</dd></div>
                <div><dt><span className="of-panel-sr">진행 장소</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8m-4-4v4"/></svg></dt><dd>{p.location}</dd></div>
              </dl>
              <div className="of-event-enrollment">
                <p>{p.cohort} {statusLabel[p.status]}</p>
                <dl><div><dt>모집 인원</dt><dd>{p.capacity}</dd></div><div><dt>참가비</dt><dd>{money(p.price)}</dd></div></dl>
                <ApplicationAction program={p} unavailable={offline} />
              </div>
            </div>
            <div className="of-event-support">
              <div className="of-event-mentor">
                <h2>멘토 소개</h2>
                <a className="of-event-mentor-row" href="#mentor" aria-label="멘토 소개 자세히 보기"><span className="of-event-avatar of-event-person" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/></svg></span><div className="of-event-mentor-profile"><strong>{p.mentor}</strong><p>{p.mentorBio.split(".")[0]}</p></div></a>
                <div className="of-event-tags"><span>{p.category}</span><span>{p.format}</span><span>{p.cohort}</span></div>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <ProgramFooter />
    </div>
  );
}
