"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProgramHeader, { ProgramFooter } from "./program-header";
import ProgramCover from "./program-cover";
import { type Program, statusLabel } from "../lib/program-data";
export default function ProgramList({initialPrograms,initiallyUnavailable=false}:{initialPrograms:Program[];initiallyUnavailable?:boolean}) {
  const sortMenu=useRef<HTMLDetailsElement>(null);
  const [programs,setPrograms]=useState(initialPrograms),[sort,setSort]=useState("latest"),[error,setError]=useState(initiallyUnavailable),[loading,setLoading]=useState(false);
  function load(){fetch("/api/catalog").then(async r=>{if(!r.ok)throw Error();return r.json() as Promise<{programs:Program[]}>}).then(d=>{setPrograms(d.programs);setError(false)}).catch(()=>setError(true)).finally(()=>setLoading(false))}
  useEffect(load,[]);
  useEffect(()=>{const close=(e:PointerEvent)=>{if(sortMenu.current&&!sortMenu.current.contains(e.target as Node))sortMenu.current.open=false;};document.addEventListener("pointerdown",close);return()=>document.removeEventListener("pointerdown",close);},[]);
  const results=programs.filter(p=>p.status!=="draft").sort((a,b)=>sort==="latest" ? Date.parse(b.updatedAt)-Date.parse(a.updatedAt)||a.order-b.order : sort==="price" ? a.price-b.price||a.order-b.order : Number(b.status==="open")-Number(a.status==="open")||a.order-b.order);
  return <div className="of-site of-catalog-site">
    <ProgramHeader/>
    <main className="of-wrap of-catalog">
      <div className="of-catalog-toolbar">
        <h1 aria-live="polite">{loading ? "불러오는 중…" : `${results.length}개의 프로그램`}</h1>
        <details className="of-sort-menu" ref={sortMenu} onKeyDown={e=>{if(e.key==="Escape"){sortMenu.current!.open=false;sortMenu.current?.querySelector("summary")?.focus();}}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))e.currentTarget.open=false;}}><summary aria-label="프로그램 정렬">{({latest:"최신순",open:"모집 중 우선",price:"낮은 가격순"})[sort]}<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" fill="currentColor"/></svg></summary><div role="group" aria-label="정렬 기준">{[['latest','최신순'],['open','모집 중 우선'],['price','낮은 가격순']].map(([v,label])=><button type="button" key={v} aria-pressed={sort===v} onClick={()=>{setSort(v);sortMenu.current!.open=false;sortMenu.current?.querySelector("summary")?.focus();}}>{label}<span aria-hidden="true">{sort===v?'✓':''}</span></button>)}</div></details>
      </div>
      {error&&<div className="of-notice" role="alert">프로그램 정보를 불러오지 못했습니다. <button onClick={()=>{setLoading(true);load()}}>다시 불러오기</button></div>}
      <div className="of-event-grid">
        {results.map(p=><Link key={p.id} href={`/programs/${p.slug}`} className="of-event-card">
          <ProgramCover program={p}/>
          <div className="of-event-card-body">
            <p className="of-event-card-kicker">{p.category} · {p.format}</p>
            <h2>{p.title.replace("\n"," ")}</h2>
            <div className="of-event-card-footer"><span>{p.cohort} · {p.duration}</span><span className={`of-card-state ${p.status}`}>{statusLabel[p.status]}</span></div>
          </div>
        </Link>)}
      </div>
      {!results.length&&!loading&&!error&&<div className="of-empty"><h2>등록된 프로그램이 없습니다.</h2></div>}
    </main>
    <ProgramFooter/>
  </div>;
}
