"use client";
import { useEffect, useRef, useState } from "react";
import type { MediaImage } from "../lib/media-types";
import { optimizeImage } from "./optimize-image";
const sizeText=(bytes:number)=>bytes>=1024*1024?`${(bytes/1024/1024).toFixed(1)}MB`:`${Math.max(1,Math.round(bytes/1024))}KB`;
type Props={preview:boolean;images:MediaImage[];onImages:(images:MediaImage[])=>void;selected?:string;onSelect?:(url:string)=>void;onBusy?:(busy:boolean)=>void};
export default function ImageLibrary({preview,images,onImages,selected,onSelect,onBusy}:Props) {
  const [busy,setBusy]=useState(false),[error,setError]=useState(""),[notice,setNotice]=useState(""),[cursor,setCursor]=useState<string|null>(null),[loaded,setLoaded]=useState(preview),[removing,setRemoving]=useState<string|null>(null);
  const input=useRef<HTMLInputElement>(null);
  async function load(more=false) {
    setError("");setBusy(true);
    try {
      const r=await fetch("/api/admin/media"+(more&&cursor?`?cursor=${encodeURIComponent(cursor)}`:""));const d=await r.json() as {error?:string;images:MediaImage[];image:MediaImage;cursor:string|null};
      if(!r.ok)throw new Error(d.error||"이미지를 불러오지 못했습니다.");
      onImages(more?[...images,...d.images]:d.images);setCursor(d.cursor);setLoaded(true);
    } catch(e){setError((e as Error).message);} finally{setBusy(false);}
  }
  useEffect(()=>{if(!preview)void load();},[preview]); // Fetch fresh usage when opening the library.
  async function upload(file?:File) {
    if(!file)return;
    setBusy(true);onBusy?.(true);setError("");setNotice("");
    try {
      const result=await optimizeImage(file);
      let image:MediaImage;
      if(preview){image={id:crypto.randomUUID(),url:URL.createObjectURL(result.blob),name:file.name,size:result.blob.size,width:result.width,height:result.height,createdAt:new Date().toISOString(),usedBy:[]};}
      else {
        const r=await fetch(`/api/admin/media?name=${encodeURIComponent(file.name)}`,{method:"POST",headers:{"content-type":"image/webp"},body:result.blob});const d=await r.json() as {error?:string;images:MediaImage[];image:MediaImage;cursor:string|null};
        if(!r.ok)throw new Error(d.error||"이미지를 업로드하지 못했습니다.");image=d.image;
      }
      onImages([image,...images]);onSelect?.(image.url);
      const reduction=Math.round((1-image.size/file.size)*100);
      setNotice(`${sizeText(file.size)} → ${sizeText(image.size)}${reduction>0?` · ${reduction}% 절감`:""} · ${image.width} × ${image.height}px${preview?" · 미리보기 전용":" · 업로드 완료"}`);
    }catch(e){setError((e as Error).message);}finally{setBusy(false);onBusy?.(false);if(input.current)input.current.value="";}
  }
  async function remove(image:MediaImage) {
    setBusy(true);setError("");
    try {
      if(!preview){const r=await fetch(`/api/admin/media?id=${encodeURIComponent(image.id)}`,{method:"DELETE"});const d=await r.json() as {error?:string;images:MediaImage[];image:MediaImage;cursor:string|null};if(!r.ok)throw new Error(d.error||"삭제하지 못했습니다.");}
      else URL.revokeObjectURL(image.url);
      onImages(images.filter(x=>x.id!==image.id));setRemoving(null);setNotice("이미지를 삭제했습니다.");
    }catch(e){setError((e as Error).message);}finally{setBusy(false);}
  }
  return <div className="of-image-library">
    <div className="of-image-tools"><input ref={input} type="file" aria-label="썸네일 이미지 업로드" accept="image/jpeg,image/png,image/webp" disabled={busy} onChange={e=>void upload(e.target.files?.[0])}/><button type="button" className="of-button" disabled={busy} onClick={()=>input.current?.click()}>{busy?"이미지 처리 중…":"+ 이미지 업로드"}</button>{!preview&&<button type="button" className="of-button secondary" disabled={busy} onClick={()=>void load()}>새로고침</button>}</div>
    <p className="of-muted">JPG·PNG·WebP, 원본 최대 20MB. 자동으로 최대 1,600px·500KB 이하의 WebP로 최적화합니다. 4:3 이미지를 권장하며 원본 전체가 표시됩니다.</p>
    {preview&&<p className="of-muted">미리보기에서는 업로드와 선택을 체험할 수 있습니다. 새로고침하면 사라지며 사이트에는 반영되지 않습니다.</p>}
    {notice&&<p role="status" className="of-notice">{notice}</p>}{error&&<p role="alert" className="of-form-error">{error}</p>}
    {loaded&&!images.length&&<div className="of-image-empty">등록된 이미지가 없습니다.</div>}
    <div className="of-image-grid">{images.map(image=><article key={image.id} className={selected===image.url?"selected":""}>
      <div className="of-image-thumb"><img src={image.url} alt={image.name} loading="lazy"/></div>
      <strong title={image.name}>{image.name}</strong><p>{image.width} × {image.height} · {sizeText(image.size)}</p><p className="of-image-usage">{image.usedBy.length?`사용 중: ${image.usedBy.join(", ")}`:"미사용"}</p>
      <div className="of-image-actions">{onSelect&&<button type="button" disabled={busy||selected===image.url} onClick={()=>onSelect(image.url)}>{selected===image.url?"선택됨":"썸네일로 선택"}</button>}<button type="button" disabled={busy||!!image.usedBy.length||selected===image.url} onClick={()=>setRemoving(image.id)}>삭제</button></div>
      {removing===image.id&&<div className="of-image-confirm"><p>이미지를 보관함에서 삭제할까요?</p><button type="button" disabled={busy} onClick={()=>void remove(image)}>삭제하기</button><button type="button" disabled={busy} onClick={()=>setRemoving(null)}>취소</button></div>}
    </article>)}</div>
    {cursor&&<button type="button" className="of-button secondary" disabled={busy} onClick={()=>void load(true)}>이미지 더 보기</button>}
  </div>;
}
