import type { Program } from "../lib/program-data";
export default function ProgramCover({program:p}:{program:Program}) {
  return <div className="of-program-artwork of-image-cover" aria-hidden="true">
    {p.image ? <img src={p.image} alt="" width="1600" height="1200" decoding="async" /> : null}
  </div>;
}

export function CalendarIcon(){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 3v5m8-5v5M4 11h16"/></svg>}
export function TagIcon(){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m12 3-9 9a2 2 0 0 0 0 3l6 6a2 2 0 0 0 3 0l9-9V5a2 2 0 0 0-2-2h-7Z"/><circle cx="16.5" cy="7.5" r="1"/></svg>}
