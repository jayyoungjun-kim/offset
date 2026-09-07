import { env } from "cloudflare:workers";
import { ApiError } from "./auth";
import { MAX_IMAGE_BYTES, MAX_IMAGE_EDGE } from "./media-types";
export function mediaBucket(): R2Bucket {
  const bucket = (env as unknown as { MEDIA?: R2Bucket }).MEDIA;
  if (!bucket) throw new ApiError(503, "이미지 저장소에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요.");
  return bucket;
}
export async function readImageBody(request: Request) {
  if (request.headers.get("content-type") !== "image/webp") throw new ApiError(415, "최적화된 WebP 이미지만 업로드할 수 있습니다.");
  const reader = request.body?.getReader();
  if (!reader) throw new ApiError(400, "이미지를 선택해 주세요.");
  const chunks: Uint8Array[] = []; let size = 0;
  while (true) {
    const {done, value} = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_IMAGE_BYTES) { await reader.cancel(); throw new ApiError(413, "이미지 용량은 500KB 이하여야 합니다."); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  const dimensions = webpDimensions(bytes);
  return {bytes, ...dimensions};
}
// Validate the container, image header and dimensions independently of client metadata.
export function webpDimensions(b: Uint8Array) {
  const invalid = () => { throw new ApiError(400, "유효한 정적 WebP 이미지를 선택해 주세요."); };
  if (b.length < 30) return invalid();
  const s = (o:number,n:number) => String.fromCharCode(...b.subarray(o,o+n));
  const v = new DataView(b.buffer,b.byteOffset,b.byteLength);
  if (s(0,4)!=="RIFF" || s(8,4)!=="WEBP" || v.getUint32(4,true)+8!==b.length) return invalid();
  let width=0,height=0, imageFound=false;
  for (let o=12;o<b.length;) {
    if(o+8>b.length)return invalid();
    const type=s(o,4),len=v.getUint32(o+4,true),p=o+8;
    if(p+len>b.length)return invalid();
    if(type==="ANIM"||type==="ANMF")return invalid();
    if(type==="VP8X" && (len<10 || (b[p]&2)))return invalid();
    if(type==="VP8 ") {
      if(len<10 || (b[p]&1) || s(p+3,3)!=="\x9d\x01\x2a")return invalid();
      width=v.getUint16(p+6,true)&0x3fff; height=v.getUint16(p+8,true)&0x3fff; imageFound=true;
    } else if(type==="VP8L") {
      if(len<5 || b[p]!==0x2f)return invalid();
      const bits=v.getUint32(p+1,true); width=(bits&0x3fff)+1; height=((bits>>>14)&0x3fff)+1; imageFound=true;
    }
    o=p+len+(len%2);
  }
  if(!imageFound || !width || !height || width>MAX_IMAGE_EDGE || height>MAX_IMAGE_EDGE)return invalid();
  return {width,height};
}
