"use client";
import { useEffect, useId, useRef, useState } from "react";
import { cleanDetailHtml, detailPreviewCss } from "../lib/detail-html";
export default function HtmlEditor({value,onChange}:{value:string;onChange:(html:string)=>void}) {
 const frame=useRef<HTMLIFrameElement>(null),visualFocus=useRef(false),lastEmitted=useRef<string|null>(null),current=useRef({value,onChange}),cleanup=useRef<(()=>void)|null>(null);
 current.current={value,onChange};
 const [error,setError]=useState(""),[fontSize,setFontSize]=useState("16");
 const savedRange=useRef<Range|null>(null);
 const id=useId(),area=useRef<HTMLTextAreaElement>(null),[mode,setMode]=useState("split");
 function insert(before:string,after="") {
 if(mode==="preview" || visualFocus.current) {
   const doc=frame.current?.contentDocument;
   if(doc){doc.body.focus();const selected=doc.getSelection()?.toString()??"";const escaped=selected.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");doc.execCommand("insertHTML",false,before+escaped+after);doc.body.dispatchEvent(new Event("input",{bubbles:true}));return;}
 }
 const el=area.current;const start=el?.selectionStart??value.length,end=el?.selectionEnd??start;onChange(value.slice(0,start)+before+value.slice(start,end)+after+value.slice(end));requestAnimationFrame(()=>{area.current?.focus();area.current?.setSelectionRange(start+before.length,end+before.length)});}
 function applyFontSize() {
  const px=Number(fontSize);
  if(!Number.isInteger(px)||px<8||px>120){setError("글자 크기는 8~120px 사이의 정수로 입력해 주세요.");return;}
  if(mode==="preview"||visualFocus.current){
    const doc=frame.current?.contentDocument,range=savedRange.current;
    if(!doc||!range||range.collapsed||!doc.body.contains(range.commonAncestorContainer)){setError("미리보기에서 크기를 바꿀 글자를 먼저 선택해 주세요.");return;}
    doc.body.focus();const selection=doc.getSelection();selection?.removeAllRanges();selection?.addRange(range);
    // Let the browser preserve nested inline formatting and paragraph boundaries.
    doc.execCommand("styleWithCSS",false,"false");doc.execCommand("fontSize",false,"7");
    doc.body.querySelectorAll('font[size="7"]').forEach(node=>{const span=doc.createElement("span");span.style.fontSize=`${px}px`;while(node.firstChild)span.appendChild(node.firstChild);node.replaceWith(span);});
    savedRange.current=null;syncFromPreview();
  }else{
    const el=area.current,start=el?.selectionStart??0,end=el?.selectionEnd??0;
    if(start===end){setError("HTML 코드에서 크기를 바꿀 글자를 먼저 선택해 주세요.");return;}
    const before=`<span style="font-size:${px}px">`;
    onChange(value.slice(0,start)+before+value.slice(start,end)+"</span>"+value.slice(end));
    setError("");requestAnimationFrame(()=>{el?.focus();el?.setSelectionRange(start+before.length,end+before.length);});
  }
 }
 function syncFromPreview() {
  const body=frame.current?.contentDocument?.body;if(!body)return;
  const html=cleanDetailHtml(body.innerHTML);
  if(html.length>24000){body.innerHTML=cleanDetailHtml(current.current.value);setError("본문은 24,000자까지 입력할 수 있습니다.");return;}
  setError("");lastEmitted.current=html;current.current.onChange(html);
 }
 function setupPreview(){
  cleanup.current?.();savedRange.current=null;const doc=frame.current?.contentDocument;if(!doc)return;
  doc.body.innerHTML=cleanDetailHtml(current.current.value);
  doc.body.contentEditable="true";doc.body.setAttribute("role","textbox");doc.body.setAttribute("aria-label","상세 콘텐츠 직접 편집");doc.body.setAttribute("aria-multiline","true");
  let composing=false;
  const input=()=>{if(!composing)syncFromPreview();};
  const start=()=>{composing=true;};const end=()=>{composing=false;syncFromPreview();};
  const focus=()=>{visualFocus.current=true;};
  const click=(e:Event)=>{if((e.target as Element).closest("a"))e.preventDefault();};
  const paste=(e:ClipboardEvent)=>{e.preventDefault();const html=e.clipboardData?.getData("text/html");const plain=e.clipboardData?.getData("text/plain")??"";doc.execCommand(html?"insertHTML":"insertText",false,html?cleanDetailHtml(html):plain);input();};
  const selectionChange=()=>{const selection=doc.getSelection();if(selection?.rangeCount && doc.body.contains(selection.anchorNode))savedRange.current=selection.getRangeAt(0).cloneRange();};
  doc.addEventListener("selectionchange",selectionChange);
  const drop=(e:DragEvent)=>e.preventDefault();
  doc.body.addEventListener("input",input);doc.body.addEventListener("compositionstart",start);doc.body.addEventListener("compositionend",end);doc.body.addEventListener("focus",focus);doc.body.addEventListener("paste",paste);doc.body.addEventListener("click",click);doc.body.addEventListener("drop",drop);
  cleanup.current=()=>{doc.removeEventListener("selectionchange",selectionChange);doc.body.removeEventListener("input",input);doc.body.removeEventListener("compositionstart",start);doc.body.removeEventListener("compositionend",end);doc.body.removeEventListener("focus",focus);doc.body.removeEventListener("paste",paste);doc.body.removeEventListener("click",click);doc.body.removeEventListener("drop",drop);};
 }
 useEffect(()=>{if(value===lastEmitted.current)return;const body=frame.current?.contentDocument?.body;if(body){savedRange.current=null;body.innerHTML=cleanDetailHtml(value);}},[value]);
 useEffect(()=>()=>cleanup.current?.(),[]);
 const srcDoc=`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https:; style-src 'unsafe-inline'; font-src https:;"><style>@font-face{font-family:Pretendard;src:url('https://qa.offset.quest/fonts/PretendardVariable.woff2')} ${detailPreviewCss}</style></head><body></body></html>`;
 return <div className="of-html-editor">
   <div className="of-html-toolbar"><div role="group" aria-label="HTML 삽입 도구">
   {[['문단','<p>','</p>'],['소제목','<h3>','</h3>'],['굵게','<strong>','</strong>'],['목록','<ul>\n  <li>','</li>\n</ul>'],['링크','<a href="https://">','</a>'],['이미지','<figure><img src="https://" alt="이미지 설명"><figcaption>이미지 설명</figcaption></figure>',''],['표','<table><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>항목</td><td>내용</td></tr></tbody></table>',''],['접기','<details><summary>질문</summary><p>답변</p></details>','']].map(([label,b,a])=><button key={label} type="button" onMouseDown={e=>e.preventDefault()} onClick={()=>insert(b,a)}>{label}</button>)}
   </div><div className="of-font-size-control" role="group" aria-label="글자 크기 도구"><label htmlFor={`${id}-font-size`}>글자 크기</label><input id={`${id}-font-size`} type="number" min="8" max="120" step="1" value={fontSize} onChange={e=>setFontSize(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();applyFontSize();}}}/><span>px</span><button type="button" onMouseDown={e=>e.preventDefault()} onClick={applyFontSize}>크기 적용</button></div><div role="group" aria-label="에디터 보기">{[['code','HTML'],['split','나란히'],['preview','미리보기']].map(([v,l])=><button key={v} type="button" aria-pressed={mode===v} onClick={()=>setMode(v)}>{l}</button>)}</div></div>
   <div className={`of-html-panes ${mode}`}>
    {mode!=="preview"&&<div><label htmlFor={id}>HTML 코드</label><textarea ref={area} id={id} value={value} maxLength={24000} onFocus={()=>{visualFocus.current=false;}} onChange={e=>{lastEmitted.current=null;onChange(e.target.value);}} spellCheck={false} autoCapitalize="off" rows={16}/></div>}
    {mode!=="code"&&<div><span>본문을 클릭해 직접 편집</span><iframe ref={frame} title="상세 콘텐츠 직접 편집" sandbox="allow-same-origin" srcDoc={srcDoc} onLoad={setupPreview}/></div>}
   </div>
   {error&&<p role="alert" className="of-form-error">{error}</p>}
   <p className="of-html-help">{value.length.toLocaleString()} / 24,000자 · 글자를 선택한 뒤 8~120px 크기를 적용할 수 있습니다. 제목, 목록, 표, 이미지, 링크와 접기 영역을 지원합니다. 스크립트·이벤트 속성·외부 임베드는 저장 시 제거됩니다.</p>
 </div>;
}
