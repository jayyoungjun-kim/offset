"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { trackEvent } from "./analytics";

export default function StickyWorkshopCta() {
  const router = useRouter();
  const slotRef = useRef<HTMLDivElement>(null);
  const [isDocked, setIsDocked] = useState(false);
  const prefetchApply = useCallback(() => router.prefetch("/apply"), [router]);

  useEffect(() => {
    prefetchApply();

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
  }, [prefetchApply]);

  return <div className="sticky-cta-slot" ref={slotRef}>
    <div className={`sticky-cta${isDocked ? " is-docked" : ""}`}>
      <Link
        href="/apply"
        prefetch
        onFocus={prefetchApply}
        onPointerEnter={prefetchApply}
        onTouchStart={prefetchApply}
        onClick={() => trackEvent("apply_cta_click", { cta_location: "workshop", link_url: "/apply" })}
      >워크샵 신청하기</Link>
    </div>
  </div>;
}
