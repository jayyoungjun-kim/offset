"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProgramHeader, { ProgramFooter } from "./program-header";
import ProgramCover, {CalendarIcon, TagIcon} from "./program-cover";
import { type Program, statusLabel } from "../lib/program-data";
export default function ProgramList({initialPrograms,initiallyUnavailable=false}:{initialPrograms:Program[];initiallyUnavailable?:boolean}) {
  const [programs,setPrograms]=useState(initialPrograms),[sort,setSort]=useState("latest"),[error,setError]=useState(initiallyUnavailable),[loading,setLoading]=useState(false);
  function load(){fetch("/api/catalog").then(async r=>{if(!r.ok)throw Error();return r.json() as Promise<{programs:Program[]}>}).then(d=>{setPrograms(d.programs);setError(false)}).catch(()=>setError(true)).finally(()=>setLoading(false))}
  useEffect(load,[]);
  const results=programs.filter(p=>p.status!=="draft").sort((a,b)=>sort==="latest" ? Date.parse(b.updatedAt)-Date.parse(a.updatedAt)||a.order-b.order : sort==="price" ? a.price-b.price||a.order-b.order : Number(b.status==="open")-Number(a.status==="open")||a.order-b.order);
  return <div className="of-site of-catalog-site">
    <ProgramHeader/>
    <main className="of-wrap of-catalog">
      <div className="of-catalog-toolbar">
        <h1 aria-live="polite">{loading ? "불러오는 중…" : `${results.length}개의 프로그램`}</h1>
        <select aria-label="프로그램 정렬" value={sort} onChange={e=>setSort(e.target.value)}><option value="latest">최신순</option><option value="open">모집 중 우선</option><option value="price">낮은 가격순</option></select>
      </div>
      {error&&<div className="of-notice" role="alert">프로그램 정보를 불러오지 못했습니다. <button onClick={()=>{setLoading(true);load()}}>다시 불러오기</button></div>}
      <div className="of-event-grid">
        {results.map(p=><Link key={p.id} href={`/programs/${p.slug}`} className="of-event-card">
          <ProgramCover program={p}/>
          <h2>{p.title.replace("\n"," ")}</h2>
          <p className="of-event-card-meta"><CalendarIcon/><span>{p.duration}<i/> {p.format}</span></p>
          <p className="of-event-card-meta"><TagIcon/><span>{p.category}, {p.cohort}, {p.price ? "유료" : "무료"}</span></p>
          <span className={`of-card-state ${p.status}`}>{statusLabel[p.status]}</span>
        </Link>)}
      </div>
      {!results.length&&!loading&&!error&&<div className="of-empty"><h2>등록된 프로그램이 없습니다.</h2></div>}
    </main>
    <ProgramFooter/>
  </div>;
}
