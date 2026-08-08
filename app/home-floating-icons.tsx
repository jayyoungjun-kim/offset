"use client";

import { useEffect, useRef } from "react";

const icons = ["10", "13", "12"];

type Motion = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
};

export default function HomeFloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const stage = container?.parentElement;
    if (!container || !stage) return;

    const iconElements = Array.from(container.querySelectorAll<HTMLElement>(".home-icon"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motion: Motion[] = iconElements.map((_, index) => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      phase: index * 1.37,
      speed: 0.00055 + (index % 4) * 0.00009,
    }));

    const pushIcons = (clientX: number, clientY: number) => {
      iconElements.forEach((icon, index) => {
        const rect = icon.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = centerX - clientX;
        const dy = centerY - clientY;
        const distance = Math.hypot(dx, dy);
        const isOverIcon = distance <= Math.min(rect.width, rect.height) / 4;

        if (isOverIcon) {
          const angle = distance > 1 ? Math.atan2(dy, dx) : index * 0.8;
          motion[index].vx += Math.cos(angle) * 3.8;
          motion[index].vy += Math.sin(angle) * 3.8;
        }
      });
    };

    const handlePointerMove = (event: PointerEvent) => pushIcons(event.clientX, event.clientY);
    const handlePointerDown = (event: PointerEvent) => pushIcons(event.clientX, event.clientY);
    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerdown", handlePointerDown);

    let frame = 0;
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;

      motion.forEach((item, index) => {
        item.vx += -item.x * 0.012;
        item.vy += -item.y * 0.012;
        item.vx *= 0.92;
        item.vy *= 0.92;
        item.x += item.vx;
        item.y += item.vy;

        const floatX = reduceMotion ? 0 : Math.sin(elapsed * item.speed + item.phase) * 5;
        const floatY = reduceMotion ? 0
          : (Math.sin(elapsed * item.speed * 0.82 + item.phase) - Math.sin(item.phase)) * 2;
        iconElements[index].style.transform = `translate3d(${item.x + floatX}px, ${item.y + floatY}px, 0)`;
      });
      frame = requestAnimationFrame(animate);
    };

    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(animate);
    };

    syncAnimation();
    document.addEventListener("visibilitychange", syncAnimation);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", syncAnimation);
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return <div ref={containerRef} className="home-icons" aria-hidden="true">
    {icons.map((icon, index) => <span
      key={icon}
      className={`home-icon home-icon-${index + 1}`}
    >
      <img src={`/home-icons/icon-${icon}.png`} alt="" width="50" height="50" decoding="async" />
    </span>)}
  </div>;
}
