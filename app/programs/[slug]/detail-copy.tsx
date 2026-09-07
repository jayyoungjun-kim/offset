import { cleanDetailHtml } from "../../lib/detail-html";
import type { ReactNode } from "react";
import type { DetailSection } from "../../lib/program-data";

// Deliberately small text format: React escapes all text; only HTTPS links are active.
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https:\/\/[^\s)]+\))/g).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^\s)]+)\)$/);
    return link ? <a key={i} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a> : part;
  });
}
function paragraphs(body: string) {
  return body.split(/\n{2,}/).filter(Boolean).map((block, i) => {
    if (block.startsWith("### ")) return <h3 key={i}>{inline(block.slice(4))}</h3>;
    const lines = block.split("\n");
    if (lines.every(line => line.startsWith("- "))) return <ul key={i}>{lines.map((line,j)=><li key={j}>{inline(line.slice(2))}</li>)}</ul>;
    if (lines.every(line => /^\d+\. /.test(line))) return <ol key={i}>{lines.map((line,j)=><li key={j}>{inline(line.replace(/^\d+\. /,""))}</li>)}</ol>;
    return <p key={i}>{inline(block)}</p>;
  });
}
export default function DetailCopy({sections}:{sections:DetailSection[]}) {
  return <>{sections.map(section=><section key={section.id} id={section.id} className="of-original-section">
    <h2>{section.title}</h2>
    {section.html !== undefined ? <div className="of-rich-html" dangerouslySetInnerHTML={{__html:cleanDetailHtml(section.html)}} /> : section.id === "faq" ? section.body.split(/(?:^|\n)### /).filter(Boolean).map((item,i)=>{
      const split=item.indexOf("\n");
      return <details key={i}><summary>{item.slice(0,split)}<span aria-hidden="true">⌄</span></summary>{paragraphs(item.slice(split).trim())}</details>;
    }) : paragraphs(section.body)}
  </section>)}</>;
}
