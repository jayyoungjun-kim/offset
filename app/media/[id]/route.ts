import { mediaBucket } from "../../lib/media";
import { mediaIdPattern } from "../../lib/media-types";
export async function GET(_r:Request,{params}:{params:Promise<{id:string}>}) {
  const {id}=await params;
  if(!mediaIdPattern.test(id))return new Response(null,{status:404});
  try {
    const object=await mediaBucket().get(`thumbnails/${id}`);
    if(!object)return new Response(null,{status:404});
    return new Response(object.body,{headers:{"content-type":"image/webp","content-length":String(object.size),"cache-control":"public, max-age=3600","x-content-type-options":"nosniff",etag:object.httpEtag}});
  } catch { return new Response(null,{status:503}); }
}
