"use client";
/* eslint-disable jsx-a11y/role-supports-aria-props */

import Link from "next/link";
import SiteHeader from "../site-header";
import StickySubmitButton from "./sticky-submit-button";
import { useRouter } from "next/navigation";
import { DragEvent, FormEvent, useRef, useState } from "react";

const careers = ["1년 미만", "1~3년", "4~7년", "7년 이상"];
const commitments = ["가능해요.", "어려울 수도 있어요."];
const conditions = ["오프라인 참석 가능합니다.", "기존 포트폴리오가 있습니다.", "매주 피드백을 반영하여 수정하겠습니다."];
const availability = ["월요일 19:30 ~ 22:00", "수요일 19:30 ~ 22:00", "목요일 19:30 ~ 22:00", "금요일 19:30 ~ 22:00", "토요일 10:00 ~ 12:30", "토요일 14:00 ~ 16:30", "토요일 18:00 ~ 20:30", "일요일 10:00 ~ 12:30", "일요일 14:00 ~ 16:30", "일요일 18:00 ~ 20:30"];
const MAX_FILE_SIZE = 20 * 1024 * 1024;
type Errors = Partial<Record<"name"|"phone"|"email"|"career"|"portfolio"|"concern"|"commitment"|"conditions"|"availability", string>>;

function ErrorText({message}:{message?:string}) { return message ? <p className="error-text" role="alert">{message}</p> : null; }

export default function ApplyPage(){
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [file,setFile]=useState<File|null>(null);
  const [isDragging,setIsDragging]=useState(false);
  const [career,setCareer]=useState("");
  const [commitment,setCommitment]=useState("");
  const [concern,setConcern]=useState("");
  const [checkedConditions,setCheckedConditions]=useState<string[]>([]);
  const [checkedTimes,setCheckedTimes]=useState<string[]>([]);
  const [errors,setErrors]=useState<Errors>({});
  const [submitError,setSubmitError]=useState("");
  const [isSubmitting,setIsSubmitting]=useState(false);

  function toggle(value:string, values:string[], setter:(next:string[])=>void){setter(values.includes(value)?values.filter(item=>item!==value):[...values,value]);}
  function acceptFile(next?:File){
    if(!next) return false;
    if(next.size>MAX_FILE_SIZE){setFile(null);setErrors(prev=>({...prev,portfolio:"파일 용량은 최대 20MB까지 첨부할 수 있습니다."}));return false;}
    setFile(next);setErrors(prev=>({...prev,portfolio:undefined}));return true;
  }
  function drop(e:DragEvent<HTMLLabelElement>){e.preventDefault();setIsDragging(false);acceptFile(e.dataTransfer.files?.[0]);}
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data=new FormData(e.currentTarget); const next:Errors={};
    if(!String(data.get("name")||"").trim()) next.name="이름을 입력해 주세요.";
    if(!String(data.get("phone")||"").trim()) next.phone="연락처를 입력해 주세요.";
    if(!String(data.get("email")||"").trim()) next.email="이메일을 입력해 주세요.";
    if(!career) next.career="현재 경력을 선택해 주세요.";
    if(!String(data.get("portfolioLink")||"").trim()&&!file) next.portfolio="포트폴리오 링크를 입력하거나 파일을 첨부해 주세요.";
    if(String(data.get("concern")||"").trim().length<100) next.concern="현재 고민되는 부분을 100자 이상 입력해 주세요.";
    if(!commitment) next.commitment="포트폴리오 수정 가능 여부를 선택해 주세요.";
    if(checkedConditions.length!==conditions.length) next.conditions="참여 조건을 모두 확인하고 선택해 주세요.";
    if(checkedTimes.length===0) next.availability="가능한 시간대를 한 개 이상 선택해 주세요.";
    setErrors(next);
    if(Object.keys(next).length){requestAnimationFrame(()=>formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());return;}
    setSubmitError("");
    setIsSubmitting(true);
    try {
      let storedFile=null;
      if(file){
        const initResponse=await fetch("/api/applications",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"initUpload",name:file.name,type:file.type||"application/octet-stream",size:file.size,applicantName:String(data.get("name")||"")})});
        const initResult=await initResponse.json().catch(()=>({})) as {uploadUrl?:string;error?:string};
        if(!initResponse.ok||!initResult.uploadUrl) throw new Error(initResult.error||"파일 업로드를 준비하지 못했습니다.");
        const uploadResponse=await fetch("/api/applications",{method:"PUT",headers:{"content-type":file.type||"application/octet-stream","x-file-size":String(file.size),"x-upload-session":initResult.uploadUrl},body:file});
        const uploadResult=await uploadResponse.json().catch(()=>({})) as {file?:{id:string;name:string;url:string;size:number;type:string};error?:string};
        if(!uploadResponse.ok||!uploadResult.file) throw new Error(uploadResult.error||"포트폴리오 파일 업로드에 실패했습니다.");
        storedFile=uploadResult.file;
      }
      const payload={name:String(data.get("name")||""),phone:String(data.get("phone")||""),email:String(data.get("email")||""),career,portfolioLink:String(data.get("portfolioLink")||""),concern:String(data.get("concern")||""),commitment,conditions:checkedConditions,availability:checkedTimes,file:storedFile};
      const response=await fetch("/api/applications",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});
      const result=await response.json().catch(()=>({})) as {error?:string};
      if(!response.ok) throw new Error(result.error||"신청서를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.");
      router.push("/apply/complete");
    } catch(error) {
      setSubmitError(error instanceof Error?error.message:"신청서를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return <main className="form-page">
    <SiteHeader />
    <div className="container form-wrap"><Link className="back-link" href="/workshop">←뒤로가기</Link>
      <form ref={formRef} className="application-form" onSubmit={submit} noValidate>
        <h1>프로덕트 디자이너 포트폴리오 완성반 1기 신청서</h1>
        <div className="field"><label htmlFor="name">이름</label><input className="text-input" id="name" name="name" placeholder="이름" aria-invalid={!!errors.name} onChange={()=>setErrors(p=>({...p,name:undefined}))}/><ErrorText message={errors.name}/></div>
        <div className="field"><label htmlFor="phone">연락처</label><input className="text-input" id="phone" name="phone" type="tel" placeholder="010-1234-5678" aria-invalid={!!errors.phone} onChange={()=>setErrors(p=>({...p,phone:undefined}))}/><ErrorText message={errors.phone}/></div>
        <div className="field"><label htmlFor="email">이메일</label><input className="text-input" id="email" name="email" type="email" placeholder="portfolioworkshop@gmail.com" aria-invalid={!!errors.email} onChange={()=>setErrors(p=>({...p,email:undefined}))}/><ErrorText message={errors.email}/></div>
        <div className="field" role="group" aria-labelledby="career-label" aria-invalid={!!errors.career} tabIndex={-1}><p className="field-label" id="career-label">현재 경력을 알려주세요</p><div className="choice-list">{careers.map(item=><label className="choice" key={item}><span>{item}</span><input type="radio" name="career" value={item} checked={career===item} onChange={()=>{setCareer(item);setErrors(p=>({...p,career:undefined}));}}/></label>)}</div><ErrorText message={errors.career}/></div>
        <div className="field" role="group" aria-labelledby="portfolio-label" aria-invalid={!!errors.portfolio} tabIndex={-1}><p className="field-label" id="portfolio-label">포트폴리오 파일 첨부 또는 링크</p><input className="text-input" name="portfolioLink" type="url" placeholder="https://" onChange={()=>setErrors(p=>({...p,portfolio:undefined}))}/><label className={`upload${isDragging?" is-dragging":""}`} onDragEnter={e=>{e.preventDefault();setIsDragging(true)}} onDragOver={e=>e.preventDefault()} onDragLeave={()=>setIsDragging(false)} onDrop={drop}><span className="upload-copy"><span>{file?.name||<>첨부할 파일을 여기에 끌어다 놓거나,<br className="upload-mobile-break" /> 파일 선택 버튼을 직접 선택해주세요.</>}</span><span className="upload-note" role="status" aria-live="polite">{file?"파일이 첨부되었습니다.":"파일 용량은 최대 20MB까지 첨부할 수 있습니다."}</span></span><span className="file-button">파일 선택</span><input type="file" onChange={e=>{if(!acceptFile(e.target.files?.[0])) e.currentTarget.value="";}}/></label><ErrorText message={errors.portfolio}/></div>
        <div className="field"><label htmlFor="concern">현재 가장 고민되는 부분은 무엇인가요?</label><textarea className="textarea" id="concern" name="concern" minLength={100} placeholder="100자 이상 입력하세요." value={concern} aria-invalid={!!errors.concern} onChange={e=>{setConcern(e.target.value);setErrors(p=>({...p,concern:undefined}));}}/><div className="field-meta"><ErrorText message={errors.concern}/><p className="character-count" aria-live="polite">{concern.length}/100</p></div></div>
        <div className="field" role="group" aria-labelledby="commitment-label" aria-invalid={!!errors.commitment} tabIndex={-1}><p className="field-label" id="commitment-label">4주 동안 매주 포트폴리오를 수정할 시간을 확보할 수 있나요?</p><div className="choice-list">{commitments.map(item=><label className="choice" key={item}><span>{item}</span><input type="radio" name="commitment" value={item} checked={commitment===item} onChange={()=>{setCommitment(item);setErrors(p=>({...p,commitment:undefined}));}}/></label>)}</div><ErrorText message={errors.commitment}/></div>
        <div className="field" role="group" aria-labelledby="conditions-label" aria-invalid={!!errors.conditions} tabIndex={-1}><p className="field-label" id="conditions-label">참여 조건을 확인해 주세요.</p><div className="choice-list">{conditions.map(item=><label className="choice" key={item}><span>{item}</span><input type="checkbox" name="conditions" value={item} checked={checkedConditions.includes(item)} onChange={()=>{toggle(item,checkedConditions,setCheckedConditions);setErrors(p=>({...p,conditions:undefined}));}}/></label>)}</div><ErrorText message={errors.conditions}/></div>
        <div className="field" role="group" aria-labelledby="availability-label" aria-invalid={!!errors.availability} tabIndex={-1}><p className="field-label" id="availability-label">가능한 시간대를 모두 선택해 주세요.</p><div className="choice-grid">{availability.map(item=><label className="choice" key={item}><span>{item}</span><input type="checkbox" name="availability" value={item} checked={checkedTimes.includes(item)} onChange={()=>{toggle(item,checkedTimes,setCheckedTimes);setErrors(p=>({...p,availability:undefined}));}}/></label>)}</div><ErrorText message={errors.availability}/></div>
        <ErrorText message={submitError}/>
        <StickySubmitButton isSubmitting={isSubmitting}/>
      </form>
    </div>
  </main>;
}
