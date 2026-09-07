"use client";
import {useRef,useState} from "react";
import Link from "next/link";
export default function ProgramSearch(){
 const dialog=useRef<HTMLDialogElement>(null);const [query,setQuery]=useState("");const [items,setItems]=useState<{slug:string;title:string}[]>([]);const [state,setState]=useState("loading");
 async function open(){dialog.current?.showModal();setState("loading");try{const r=await fetch("/api/catalog");if(!r.ok)throw Error();const d=await r.json() as {programs?:{slug:string;title:string}[]};setItems(d.programs??[]);setState("ready");}catch{setState("error");}}
 return <><button type="button" className="of-gnb-search" aria-label="프로그램 검색" onClick={open}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 6 6"/></svg></button><dialog ref={dialog} className="of-gnb-search-dialog"><form method="dialog"><strong>프로그램 검색</strong><button aria-label="검색 닫기">×</button></form><input autoFocus aria-label="프로그램 검색어" placeholder="프로그램 이름을 검색하세요" value={query} onChange={e=>setQuery(e.target.value)}/><div aria-live="polite">{state==="loading"?<p>불러오는 중…</p>:state==="error"?<p>프로그램을 불러오지 못했습니다. 다시 시도해 주세요.</p>:items.filter(p=>p.title.toLowerCase().includes(query.trim().toLowerCase())).length?items.filter(p=>p.title.toLowerCase().includes(query.trim().toLowerCase())).map(p=><Link key={p.slug} href={`/programs/${p.slug}`} onClick={()=>dialog.current?.close()}>{p.title.replaceAll("\n"," ")} ↗</Link>):<p>검색 결과가 없습니다.</p>}</div></dialog></>;
}
