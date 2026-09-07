"use client";
import { useRef, useState } from "react";
import type { DetailSection } from "../lib/program-data";
import { sectionHtml } from "../lib/detail-html";
import HtmlEditor from "./html-editor";

export default function SectionEditor({sections,onChange}:{sections:DetailSection[];onChange:(sections:DetailSection[])=>void}) {
  const [open,setOpen]=useState<string|null>(null);
  const [drag,setDrag]=useState<string|null>(null);
  const [target,setTarget]=useState<string|null>(null);
  const [notice,setNotice]=useState("");
  const [removed,setRemoved]=useState<{section:DetailSection;index:number}|null>(null);
  const list=useRef<HTMLDivElement>(null);
  const destination=useRef<string|null>(null);
  function move(id:string,to:number) {
    const from=sections.findIndex(s=>s.id===id);
    if(from<0 || to<0 || to>=sections.length || from===to)return;
    const next=[...sections]; const [item]=next.splice(from,1); next.splice(to,0,item);
    onChange(next); setNotice(`${item.title} 섹션을 ${to+1}번째로 이동했습니다.`);
  }
  function add() {
    const section={id:`section-${crypto.randomUUID()}`,title:"새 섹션",body:"",html:"<p>내용을 입력해 주세요.</p>"};
    onChange([...sections,section]);setOpen(section.id);setNotice("새 섹션을 추가했습니다. 제목과 내용을 수정해 주세요.");
  }
  return <div className="of-section-editor">
    <p className="of-muted">손잡이를 드래그하거나 위·아래 버튼으로 순서를 변경하세요. 편집을 펼쳐 제목과 HTML을 수정할 수 있습니다.</p>
    <div ref={list} className="of-section-list">
      {sections.map((section,index)=><div key={section.id} data-section-id={section.id} className={`of-section-item${drag===section.id?" is-dragging":""}${target===section.id && drag!==section.id?" is-target":""}`}>
        <div className="of-section-bar">
          <button type="button" className="of-section-handle" aria-label={`${section.title} 드래그하여 순서 변경`} onPointerDown={e=>{
            if(e.button!==0)return;
            e.currentTarget.setPointerCapture(e.pointerId);setDrag(section.id);destination.current=section.id;setTarget(section.id);
          }} onPointerMove={e=>{
            if(!e.currentTarget.hasPointerCapture(e.pointerId))return;
            const row=document.elementFromPoint(e.clientX,e.clientY)?.closest<HTMLElement>("[data-section-id]");
            const id=row && list.current?.contains(row)?row.dataset.sectionId:null;
            destination.current=id??null;setTarget(id??null);
            if(e.clientY<90)window.scrollBy(0,-18);else if(e.clientY>window.innerHeight-90)window.scrollBy(0,18);
          }} onPointerUp={e=>{
            if(!e.currentTarget.hasPointerCapture(e.pointerId))return;
            const to=sections.findIndex(s=>s.id===destination.current);move(section.id,to);
            e.currentTarget.releasePointerCapture(e.pointerId);setDrag(null);setTarget(null);destination.current=null;
          }} onPointerCancel={()=>{setDrag(null);setTarget(null);destination.current=null;}} onKeyDown={e=>{
            if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();move(section.id,index+(e.key==="ArrowUp"?-1:1));}
          }}>⠿</button>
          <button type="button" className="of-section-toggle" aria-expanded={open===section.id} aria-controls={`edit-${section.id}`} onClick={()=>setOpen(open===section.id?null:section.id)}><span>{String(index+1).padStart(2,"0")}</span><strong>{section.title || "제목 없는 섹션"}</strong><span>{open===section.id?"접기":"편집"}</span></button>
          <div className="of-section-controls">
            <button type="button" disabled={index===0} aria-label={`${section.title} 위로 이동`} onClick={()=>move(section.id,index-1)}>↑</button>
            <button type="button" disabled={index===sections.length-1} aria-label={`${section.title} 아래로 이동`} onClick={()=>move(section.id,index+1)}>↓</button>
            <button type="button" onClick={()=>{setRemoved({section,index});onChange(sections.filter(s=>s.id!==section.id));setNotice(`${section.title} 섹션을 삭제했습니다.`);}}>삭제</button>
          </div>
        </div>
        <div id={`edit-${section.id}`} hidden={open!==section.id} className="of-section-content of-form">
          <label>섹션 제목<input required maxLength={200} value={section.title} onChange={e=>onChange(sections.map(s=>s.id===section.id?{...s,title:e.target.value}:s))}/></label>
          <HtmlEditor value={section.html??sectionHtml(section)} onChange={html=>onChange(sections.map(s=>s.id===section.id?{...s,html}:s))}/>
        </div>
      </div>)}
    </div>
    {!sections.length && <p className="of-muted">등록된 섹션이 없습니다. 섹션을 추가해 상세 내용을 작성하세요.</p>}
    <div className="of-section-footer"><button type="button" className="of-button secondary" disabled={sections.length>=20} onClick={add}>＋ 섹션 추가</button><span className="of-muted">{sections.length} / 20개</span></div>
    <div className="of-section-feedback"><span role="status">{notice}</span>{removed && <button type="button" disabled={sections.length>=20} onClick={()=>{const next=[...sections];next.splice(Math.min(removed.index,next.length),0,removed.section);onChange(next);setRemoved(null);setNotice("삭제한 섹션을 복원했습니다.");}}>삭제 되돌리기</button>}</div>
    <p className="of-muted">추가·삭제·순서 변경은 아래 ‘변경 사항 저장’을 누르면 반영됩니다.</p>
  </div>;
}
