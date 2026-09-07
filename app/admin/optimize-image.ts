import { MAX_IMAGE_BYTES, MAX_IMAGE_EDGE } from "../lib/media-types";
export async function optimizeImage(file:File) {
  if(!["image/jpeg","image/png","image/webp"].includes(file.type))throw new Error("JPG, PNG, WebP 이미지를 선택해 주세요.");
  if(file.size>20*1024*1024)throw new Error("원본 이미지는 20MB 이하로 선택해 주세요.");
  const bitmap=await createImageBitmap(file).catch(()=>{throw new Error("이미지를 읽지 못했습니다. 다른 파일을 선택해 주세요.");});
  try {
    if(bitmap.width*bitmap.height>40_000_000)throw new Error("이미지는 4,000만 화소 이하로 선택해 주세요.");
    let scale=Math.min(1,MAX_IMAGE_EDGE/Math.max(bitmap.width,bitmap.height));
    const canvas=document.createElement("canvas");
    const context=canvas.getContext("2d");
    if(!context)throw new Error("이 브라우저에서 이미지를 처리할 수 없습니다.");
    for(let attempt=0;attempt<5;attempt++) {
      canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));
      context.drawImage(bitmap,0,0,canvas.width,canvas.height);
      for(const quality of [.86,.76,.66,.56]) {
        const blob=await new Promise<Blob|null>(resolve=>canvas.toBlob(resolve,"image/webp",quality));
        if(!blob || blob.type!=="image/webp")throw new Error("WebP 변환을 지원하는 최신 브라우저를 사용해 주세요.");
        if(blob.size<=MAX_IMAGE_BYTES)return {blob,width:canvas.width,height:canvas.height,originalSize:file.size};
      }
      scale*=.75;
    }
    throw new Error("이미지 용량을 줄이지 못했습니다. 더 작은 이미지를 선택해 주세요.");
  } finally {bitmap.close();}
}
