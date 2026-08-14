"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyWorkshopCta() {
  const slotRef = useRef<HTMLDivElement>(null);
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const update = () => {
      const slot = slotRef.current;
      if (!slot) return;
      setIsDocked(slot.getBoundingClientRect().top <= window.innerHeight - slot.offsetHeight - 20);
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

  return <div className="sticky-cta-slot" ref={slotRef}>
    <div className={`sticky-cta${isDocked ? " is-docked" : ""}`}>
      <button type="button" disabled>모집 마감</button>
    </div>
  </div>;
}
