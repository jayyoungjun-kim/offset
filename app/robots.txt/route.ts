import {config} from "../lib/auth";
export const dynamic="force-dynamic";
const productionRules="User-agent: *\nAllow: /\nDisallow: /apply\nDisallow: /api/\n\nUser-agent: GPTBot\nAllow: /\nDisallow: /apply\nDisallow: /api/\n\nUser-agent: OAI-SearchBot\nAllow: /\nDisallow: /apply\nDisallow: /api/\n\nUser-agent: ClaudeBot\nAllow: /\nDisallow: /apply\nDisallow: /api/\n\nUser-agent: PerplexityBot\nAllow: /\nDisallow: /apply\nDisallow: /api/\n\nSitemap: https://offset.quest/sitemap.xml\nHost: https://offset.quest\n";
export function GET(){
 const qa=config("SITE_ENV")==="qa";
 return new Response(qa?"User-agent: *\nDisallow: /\n":productionRules,{headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store",...(qa?{"x-robots-tag":"noindex, nofollow"}:{})}});
}
