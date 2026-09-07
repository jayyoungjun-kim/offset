import { requireUser, sameOrigin, json, fail, ApiError } from "../../../lib/auth";
import { listPrograms } from "../../../lib/store";
import { mediaBucket, readImageBody } from "../../../lib/media";
import { MAX_IMAGE_BYTES, mediaIdPattern } from "../../../lib/media-types";
export async function GET(r: Request) {
  try {
    await requireUser(r, true);
    const cursor = new URL(r.url).searchParams.get("cursor") || undefined;
    const [result, programs] = await Promise.all([mediaBucket().list({prefix:"thumbnails/",limit:100,cursor,include:["customMetadata"]}),listPrograms(true)]);
    return json({ images: result.objects.map(o => ({id:o.key.slice(11),url:`/media/${o.key.slice(11)}`,name:o.customMetadata?.name||"이미지",size:o.size,width:Number(o.customMetadata?.width||0),height:Number(o.customMetadata?.height||0),createdAt:o.uploaded.toISOString(),usedBy:programs.filter(p=>p.image===`/media/${o.key.slice(11)}`).map(p=>p.title.replaceAll("\n"," "))})), cursor:result.truncated?result.cursor:null });
  } catch(e) { return fail(e); }
}
export async function POST(r: Request) {
  try {
    sameOrigin(r); await requireUser(r,true);
    const {bytes,width,height} = await readImageBody(r);
    const name = (new URL(r.url).searchParams.get("name")||"썸네일").replace(/[\x00-\x1f\x7f]/g,"").slice(0,160);
    const id=crypto.randomUUID()+".webp", url=`/media/${id}`;
    await mediaBucket().put(`thumbnails/${id}`,bytes,{httpMetadata:{contentType:"image/webp"},customMetadata:{name,width:String(width),height:String(height)}});
    return json({image:{id,url,name,size:bytes.length,width,height,createdAt:new Date().toISOString(),usedBy:[]}},201);
  } catch(e) {
    // Finish bounded rejected uploads so the runtime can close the request cleanly.
    if (!r.bodyUsed && r.body) {
      const reader = r.body.getReader(); let bytes = 0;
      try { while (bytes <= MAX_IMAGE_BYTES) { const chunk = await reader.read(); if (chunk.done) break; bytes += chunk.value.length; } }
      catch { /* Preserve the original validation or authorization error. */ }
      finally { await reader.cancel().catch(()=>{}); }
    }
    return fail(e);
  }
}
export async function DELETE(r: Request) {
  try {
    sameOrigin(r); await requireUser(r,true);
    const id=new URL(r.url).searchParams.get("id")||"";
    if(!mediaIdPattern.test(id))throw new ApiError(400,"올바른 이미지를 선택해 주세요.");
    const programs=await listPrograms(true);
    if(programs.some(p=>p.image===`/media/${id}`))throw new ApiError(409,"프로그램에서 사용 중인 이미지입니다. 썸네일을 변경하고 저장한 후 삭제해 주세요.");
    await mediaBucket().delete(`thumbnails/${id}`);
    return json({ok:true});
  } catch(e) { return fail(e); }
}
