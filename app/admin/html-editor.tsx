"use client";
import { useId, useRef, useState } from "react";
import { cleanDetailHtml, detailPreviewCss } from "../lib/detail-html";
export default function HtmlEditor({value,onChange}:{value:string;onChange:(html:string)=>void}) {
 const id=useId(),area=useRef<HTMLTextAreaElement>(null),[mode,setMode]=useState("split");
 function insert(before:string,after="") {const el=area.current;const start=el?.selectionStart??value.length,end=el?.selectionEnd??start;onChange(value.slice(0,start)+before+value.slice(start,end)+after+value.slice(end));requestAnimationFrame(()=>{area.current?.focus();area.current?.setSelectionRange(start+before.length,end+before.length)});}
 const safe=cleanDetailHtml(value);
 const srcDoc=`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https:; style-src 'unsafe-inline'; font-src https:;"><style>@font-face{font-family:Pretendard;src:url('https://qa.offset.quest/fonts/PretendardVariable.woff2')} ${detailPreviewCss}</style></head><body>${safe}</body></html>`;
 return <div className="of-html-editor">
   <div className="of-html-toolbar"><div role="group" aria-label="HTML 삽입 도구">
   {[['문단','<p>','</p>'],['소제목','<h3>','</h3>'],['굵게','<strong>','</strong>'],['목록','<ul>\n  <li>','</li>\n</ul>'],['링크','<a href="https://">','</a>'],['이미지','<figure><img src="https://" alt="이미지 설명"><figcaption>이미지 설명</figcaption></figure>',''],['표','<table><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>항목</td><td>내용</td></tr></tbody></table>',''],['접기','<details><summary>질문</summary><p>답변</p></details>','']].map(([label,b,a])=><button key={label} type="button" onClick={()=>{setMode(mode==="preview"?"split":mode);insert(b,a)}}>{label}</button>)}
   </div><div role="group" aria-label="에디터 보기">{[['code','HTML'],['split','나란히'],['preview','미리보기']].map(([v,l])=><button key={v} type="button" aria-pressed={mode===v} onClick={()=>setMode(v)}>{l}</button>)}</div></div>
   <div className={`of-html-panes ${mode}`}>
    {mode!=="preview"&&<div><label htmlFor={id}>HTML 코드</label><textarea ref={area} id={id} value={value} maxLength={24000} onChange={e=>onChange(e.target.value)} spellCheck={false} autoCapitalize="off" rows={16}/></div>}
    {mode!=="code"&&<div><span>저장 후 표시될 내용</span><iframe title="상세 콘텐츠 미리보기" sandbox="" srcDoc={srcDoc}/></div>}
   </div>
   <p className="of-html-help">{value.length.toLocaleString()} / 24,000자 · 제목, 목록, 표, 이미지, 링크와 접기 영역을 지원합니다. 스크립트·이벤트 속성·외부 임베드는 저장 시 제거됩니다.</p>
 </div>;
}
