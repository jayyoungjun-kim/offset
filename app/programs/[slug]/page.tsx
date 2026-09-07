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
            {p.detailSections?.length ? <DetailCopy sections={p.detailSections} /> : <DetailCopy sections={[
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
                <div><dt>진행기간</dt><dd>{p.duration}</dd></div>
                <div><dt>진행시간</dt><dd>{p.schedule}</dd></div>
                <div><dt>진행 장소</dt><dd>{p.location}</dd></div>
              </dl>
              <div className="of-event-enrollment">
                <p>{p.cohort} {statusLabel[p.status]}</p>
                <dl><div><dt>모집 인원</dt><dd>{p.capacity}</dd></div><div><dt>참가비</dt><dd>{money(p.price)}</dd></div></dl>
                <ApplicationAction program={p} unavailable={offline} />
              </div>
            </div>
            <div className="of-event-support">
              <div className="of-event-organizer">
                <Link href="/about"><img src="/offset-logo.svg" width="100" height="20" alt="OFFSET" /></Link>
                <a className="of-event-contact" href="mailto:offset.learn@gmail.com">문의하기 ↗</a>
              </div>
              <div className="of-event-mentor">
                <h2>멘토 소개</h2>
                <p>{p.mentorBio}</p>
                <a href="#mentor">자세히 보기 ↓</a>
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
