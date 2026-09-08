import sanitizeHtml from "sanitize-html";
import type { DetailSection } from "./program-data";
export function cleanDetailHtml(html:string) {
  return sanitizeHtml(html, {
    allowedTags:["p","br","h2","h3","h4","strong","b","em","i","u","s","ul","ol","li","a","img","figure","figcaption","blockquote","hr","table","thead","tbody","tr","th","td","details","summary","div","span"],
    allowedAttributes:{a:["href","title"],img:["src","alt","width","height"],th:["colspan","rowspan"],td:["colspan","rowspan"],details:["open"],"*":["style"]},
    allowedSchemes:["https","mailto"],allowedSchemesByTag:{img:["https"]},allowProtocolRelative:false,
    allowedStyles:{"*":{"text-align":[/^(left|center|right)$/],color:[/^#[0-9a-fA-F]{3,8}$/],"background-color":[/^#[0-9a-fA-F]{3,8}$/],"font-size":[/^([89]|[1-9][0-9]|1[01][0-9]|120)px$/],"font-weight":[/^(400|500|600|700)$/]}},
    transformTags:{a:(_tag,attrs)=>({tagName:"a",attribs:{...attrs,rel:"noopener noreferrer"}})},
  });
}
const escape=(s:string)=>s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
function inline(s:string){return escape(s).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g,'<a href="$2">$1</a>');}
function paragraphs(body:string){return body.split(/\n{2,}/).filter(Boolean).map(block=>{
 if(block.startsWith("### "))return `<h3>${inline(block.slice(4))}</h3>`;
 const lines=block.split("\n");
 if(lines.every(l=>l.startsWith("- ")))return `<ul>${lines.map(l=>`<li>${inline(l.slice(2))}</li>`).join("")}</ul>`;
 if(lines.every(l=>/^\d+\. /.test(l)))return `<ol>${lines.map(l=>`<li>${inline(l.replace(/^\d+\. /,""))}</li>`).join("")}</ol>`;
 return `<p>${inline(block).replaceAll("\n","<br />")}</p>`;
}).join("\n");}
export function sectionHtml(section:DetailSection){
 if(section.html!==undefined)return cleanDetailHtml(section.html);
 if(section.id!=="faq")return cleanDetailHtml(paragraphs(section.body));
 return cleanDetailHtml(section.body.split(/(?:^|\n)### /).filter(Boolean).map(item=>{const split=item.indexOf("\n");return `<details><summary>${escape(split<0?item:item.slice(0,split))}</summary>${split<0?"":paragraphs(item.slice(split).trim())}</details>`}).join("\n"));
}
export const detailPreviewCss=`body{font-family:Pretendard,system-ui,sans-serif;color:#333;margin:24px;font-size:16px;line-height:1.9;overflow-wrap:anywhere}h2,h3,h4{color:#111;line-height:1.5}p{margin:0 0 16px}img{max-width:100%;height:auto}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:10px;text-align:left}blockquote{border-left:3px solid #111;padding-left:20px;margin-left:0;color:#666}details{border-top:1px solid #eee;padding:16px 0}summary{cursor:pointer;font-weight:600}a{color:inherit;text-underline-offset:4px}figure{margin:24px 0}figcaption{font-size:14px;color:#777}pre{white-space:pre-wrap}`;
