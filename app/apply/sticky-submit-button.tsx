"use client";

import { useEffect, useRef, useState } from "react";

export default function StickySubmitButton({ isSubmitting = false }: { isSubmitting?: boolean }) {
  const slotRef = useRef<HTMLDivElement>(null);
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const update = () => {
      const slot = slotRef.current;
      if (!slot) return;
      setIsDocked(slot.getBoundingClientRect().top + 80 <= window.innerHeight - 50 - 20);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const observer = new ResizeObserver(update);
    if (slotRef.current) observer.observe(slotRef.current);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return <div className="form-submit-slot" ref={slotRef}>
    <div className={`form-submit${isDocked ? " is-docked" : ""}`}>
      <button className="submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? <span className="submitting-label">제출 중<span className="submitting-dots" aria-hidden="true"><i>.</i><i>.</i><i>.</i></span></span> : "신청서 제출하기"}</button>
    </div>
  </div>;
}
