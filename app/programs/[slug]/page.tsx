import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgram } from "../../lib/store";
import { money, statusLabel } from "../../lib/program-data";
import ProgramHeader, { ProgramFooter } from "../program-header";
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
      <main className="of-wrap of-detail wanted-detail">
        <div className="of-gallery" aria-label="워크숍 이미지">
          <div className="of-gallery-brand"><img src="/offset-branding.png" alt="OFFSET" /></div>
          <div className="of-gallery-icon"><img src={p.image} alt="포트폴리오 워크숍" /></div>
          <div className="of-gallery-wordmark"><img src="/offset-about-wordmark.svg" alt="OFFSET" /></div>
        </div>
        <div className="of-wanted-columns">
          <article className="of-wanted-content">
            <header className="of-wanted-title">
              <p><Link href="/programs">OFFSET</Link><span>·</span>{p.format}<span>·</span>{p.cohort}</p>
              <h1>{p.title.replace("\n", " ")}</h1>
            </header>
            <dl className="of-wanted-summary">
              <div><dt>모집 인원</dt><dd>{p.capacity}</dd></div>
              <div><dt>모집 현황</dt><dd>{statusLabel[p.status]}</dd></div>
              <div><dt>진행 방식</dt><dd>{p.duration}</dd></div>
            </dl>
            {p.detailSections?.length ? <DetailCopy sections={p.detailSections} /> : <DetailCopy sections={[
              {id:"overview",title:"프로그램 소개",body:p.description},
              {id:"outcomes",title:"학습 결과",body:p.outcomes.map(x=>"- "+x).join("\n")},
              {id:"audience",title:"참여 대상",body:p.audience.map(x=>"- "+x).join("\n")},
              {id:"curriculum",title:"진행 과정",body:p.curriculum.map((x,i)=>`${i+1}. ${x}`).join("\n")},
              {id:"mentor",title:p.mentor,body:p.mentorBio},
            ]} />}
          </article>
          <aside className="of-wanted-aside" aria-label="워크숍 신청">
            <div className="of-wanted-sticky">
              <ApplicationAction program={p} unavailable={offline} />
              <div className="of-wanted-info">
                <p className="of-wanted-cohort">{p.cohort} {statusLabel[p.status]}</p>
                <h2>{p.title.replace("\n", " ")}</h2>
                <dl><div><dt>진행기간</dt><dd>{p.duration}</dd></div><div><dt>참가비</dt><dd>{money(p.price)}</dd></div></dl>
                <a href="#application">신청 절차 <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <ProgramFooter />
    </div>
  );
}
