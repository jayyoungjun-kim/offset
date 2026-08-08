"use client";

import { useEffect, useState } from "react";

const intro = "OFFSET is a design learning platform that explores how designers learn, grow, and evolve.";

export default function TypingIntro() {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setVisibleLength(intro.length));
      return () => window.cancelAnimationFrame(frame);
    }

    let interval = 0;
    const delay = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setVisibleLength((length) => {
          if (length >= intro.length) {
            window.clearInterval(interval);
            return length;
          }
          return length + 1;
        });
      }, 42);
    }, 300);

    return () => {
      window.clearTimeout(delay);
      window.clearInterval(interval);
    };
  }, []);

  return <h1 className="typing-intro" aria-label={intro}>
    <span className="typing-intro-placeholder" aria-hidden="true">{intro}</span>
    <span className="typing-intro-text" aria-hidden="true">{intro.slice(0, visibleLength)}</span>
  </h1>;
}
