import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "docs");
const clientDir = path.join(projectRoot, "dist", "client");
const siteOrigin = process.argv[2] || "http://127.0.0.1:3000";
const basePath = "/offset";

const homeMotion = String.raw`(() => {
  const stage = document.querySelector(".home-stage");
  const icons = Array.from(document.querySelectorAll(".home-icon"));
  if (!stage || icons.length === 0) return;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motion = icons.map((_, index) => ({x:0,y:0,vx:0,vy:0,phase:index*1.37,speed:0.00055+(index%4)*0.00009}));
  const pushIcons = (clientX, clientY) => icons.forEach((icon, index) => {
    const rect = icon.getBoundingClientRect();
    const dx = rect.left + rect.width / 2 - clientX;
    const dy = rect.top + rect.height / 2 - clientY;
    const distance = Math.hypot(dx, dy);
    if (distance > Math.min(rect.width, rect.height) / 4) return;
    const angle = distance > 1 ? Math.atan2(dy, dx) : index * 0.8;
    motion[index].vx += Math.cos(angle) * 3.8;
    motion[index].vy += Math.sin(angle) * 3.8;
  });
  stage.addEventListener("pointermove", event => pushIcons(event.clientX, event.clientY));
  stage.addEventListener("pointerdown", event => pushIcons(event.clientX, event.clientY));
  let frame = 0;
  let startTime = null;
  const animate = time => {
    if (startTime === null) startTime = time;
    const elapsed = time - startTime;
    motion.forEach((item, index) => {
      item.vx += -item.x * 0.012; item.vy += -item.y * 0.012;
      item.vx *= 0.92; item.vy *= 0.92; item.x += item.vx; item.y += item.vy;
      const floatX = reduceMotion ? 0 : Math.sin(elapsed * item.speed + item.phase) * 5;
      const floatY = reduceMotion ? 0 : (Math.sin(elapsed * item.speed * 0.82 + item.phase) - Math.sin(item.phase)) * 2;
      icons[index].style.transform = "translate3d(" + (item.x + floatX) + "px, " + (item.y + floatY) + "px, 0)";
    });
    frame = requestAnimationFrame(animate);
  };
  const sync = () => { cancelAnimationFrame(frame); if (!document.hidden) frame = requestAnimationFrame(animate); };
  sync(); document.addEventListener("visibilitychange", sync);
})();`;

const typingIntro = String.raw`(() => {
  const placeholder = document.querySelector(".typing-intro-placeholder");
  const target = document.querySelector(".typing-intro-text");
  if (!placeholder || !target) return;
  const text = placeholder.textContent || "";
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { target.textContent = text; return; }
  let length = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      length += 1; target.textContent = text.slice(0, length);
      if (length >= text.length) clearInterval(interval);
    }, 42);
  }, 300);
})();`;

const workshopCta = String.raw`(() => {
  const slot = document.querySelector(".sticky-cta-slot");
  const cta = slot?.querySelector(".sticky-cta");
  if (!slot || !cta) return;
  const update = () => cta.classList.toggle("is-docked", slot.getBoundingClientRect().top <= innerHeight - slot.offsetHeight - 20);
  update(); addEventListener("scroll", update, {passive:true}); addEventListener("resize", update);
})();`;

const routeScripts = new Map([
  ["/", homeMotion],
  ["/about", typingIntro],
  ["/workshop", workshopCta],
]);

function transformHtml(html, route) {
  const controller = routeScripts.get(route) || "";
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/=(['"])\/(?!\/)/g, `=$1${basePath}/`)
    .replace("</body>", `${controller ? `<script>${controller}</script>` : ""}</body>`);
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, {
  recursive: true,
  filter(source) {
    return ![".vite", ".assetsignore", "_headers"].includes(path.basename(source));
  },
});

for await (const cssPath of (await import("node:fs/promises")).glob(`${outputDir}/assets/*.css`)) {
  const css = await readFile(cssPath, "utf8");
  await writeFile(cssPath, css.replaceAll("url(/", `url(${basePath}/`));
}

for (const route of routeScripts.keys()) {
  const response = await fetch(new URL(route, siteOrigin));
  if (!response.ok) throw new Error(`Failed to render ${route}: ${response.status}`);
  const html = transformHtml(await response.text(), route);
  const routeDir = route === "/" ? outputDir : path.join(outputDir, route.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
}

await mkdir(path.join(outputDir, "apply"), { recursive: true });
await writeFile(path.join(outputDir, "apply", "index.html"), `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=https://portfolio-workshop-1.jayyoungjunkim.chatgpt.site/apply"><title>신청 페이지로 이동 중</title></head><body><p><a href="https://portfolio-workshop-1.jayyoungjunkim.chatgpt.site/apply">신청 페이지로 이동</a></p></body></html>`);
await writeFile(path.join(outputDir, "404.html"), await readFile(path.join(outputDir, "index.html"), "utf8"));
await writeFile(path.join(outputDir, ".nojekyll"), "");

console.log(`Generated GitHub Pages from ${siteOrigin}`);
