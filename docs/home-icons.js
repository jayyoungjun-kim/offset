(() => {
  const stage = document.querySelector(".home-stage");
  const icons = Array.from(document.querySelectorAll(".home-icon"));
  if (!stage || icons.length === 0) return;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motion = icons.map((_, index) => ({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    phase: index * 1.37,
    speed: 0.00055 + (index % 4) * 0.00009,
  }));

  const pushIcons = (clientX, clientY) => {
    icons.forEach((icon, index) => {
      const rect = icon.getBoundingClientRect();
      const dx = rect.left + rect.width / 2 - clientX;
      const dy = rect.top + rect.height / 2 - clientY;
      const distance = Math.hypot(dx, dy);
      if (distance > Math.min(rect.width, rect.height) / 4) return;

      const angle = distance > 1 ? Math.atan2(dy, dx) : index * 0.8;
      motion[index].vx += Math.cos(angle) * 3.8;
      motion[index].vy += Math.sin(angle) * 3.8;
    });
  };

  stage.addEventListener("pointermove", (event) => pushIcons(event.clientX, event.clientY));
  stage.addEventListener("pointerdown", (event) => pushIcons(event.clientX, event.clientY));

  let frame = 0;
  let startTime = null;
  const animate = (time) => {
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
      const floatY = reduceMotion
        ? 0
        : (Math.sin(elapsed * item.speed * 0.82 + item.phase) - Math.sin(item.phase)) * 2;
      icons[index].style.transform = `translate3d(${item.x + floatX}px, ${item.y + floatY}px, 0)`;
    });

    frame = requestAnimationFrame(animate);
  };

  const syncAnimation = () => {
    cancelAnimationFrame(frame);
    if (!document.hidden) frame = requestAnimationFrame(animate);
  };

  syncAnimation();
  document.addEventListener("visibilitychange", syncAnimation);
})();
