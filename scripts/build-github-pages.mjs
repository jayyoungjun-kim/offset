import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "docs");
const clientDir = path.join(projectRoot, "dist", "client");
const siteOrigin = process.argv[2] || "http://127.0.0.1:3000";
const basePath = "";
const channelPluginKey =
  process.env.NEXT_PUBLIC_CHANNEL_PLUGIN_KEY ||
  "a55a2e4a-90f1-463f-b9ca-317c14fe1f8e";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-B8K6MH44GD";
const analytics = gaMeasurementId
  ? String.raw`(() => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", ${JSON.stringify(gaMeasurementId)});
  document.addEventListener("click", event => {
    const link = event.target.closest(".nav-menu a");
    if (!link) return;
    const destination = new URL(link.href, location.href).pathname;
    const item = destination === "/about" ? "about" : destination === "/workshop" ? "workshop" : "";
    if (item) gtag("event", "navigation_click", {navigation_location:"header",navigation_item:item,link_url:destination});
  });
})();`
  : "";
const channelTalk = String.raw`(() => {
  const pluginKey = ${JSON.stringify(channelPluginKey)};
  if (!pluginKey || window.ChannelIOInitialized) return;
  const shouldRaiseLauncher = /^\/(workshop|apply)(?:\/|$)/.test(location.pathname) && matchMedia("(max-width: 720px)").matches;
  const channel = function(){ channel.c(arguments); };
  channel.q = [];
  channel.c = args => channel.q.push(args);
  window.ChannelIO = channel;
  window.ChannelIOInitialized = true;
  const script = document.createElement("script");
  script.id = "channel-talk-widget";
  script.async = true;
  script.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
  document.head.appendChild(script);
  channel("boot", {pluginKey});
  if (shouldRaiseLauncher) {
    let observer;
    let attempts = 0;
    const raiseLauncher = () => {
      const root = document.querySelector("#ch-plugin-entry > div")?.shadowRoot;
      const wrapper = root?.querySelector("button")?.parentElement;
      if (!wrapper) return;
      wrapper.style.setProperty("bottom", "80px", "important");
      if (!observer) {
        observer = new MutationObserver(raiseLauncher);
        observer.observe(root, {childList:true,subtree:true});
      }
    };
    const interval = setInterval(() => {
      raiseLauncher();
      attempts += 1;
      if (attempts >= 50) clearInterval(interval);
    }, 200);
  }
})();`;

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

const applicationForm = String.raw`(() => {
  const form = document.querySelector(".application-form");
  if (!form) return;
  const apiUrl = "https://portfolio-workshop-1.jayyoungjunkim.chatgpt.site/api/applications";
  const maxFileSize = 20 * 1024 * 1024;
  const fileInput = form.querySelector('input[type="file"]');
  const upload = form.querySelector(".upload");
  const uploadCopy = form.querySelector(".upload-copy > span:first-child");
  const uploadNote = form.querySelector(".upload-note");
  const concern = form.querySelector('[name="concern"]');
  const characterCount = form.querySelector(".character-count");
  const submitButton = form.querySelector('.submit-button');

  const fieldFor = name => form.querySelector('[name="' + name + '"]')?.closest(".field") || form.querySelector('[aria-labelledby="' + name + '-label"]');
  const clearError = name => {
    const field = fieldFor(name);
    field?.removeAttribute("aria-invalid");
    field?.querySelector('[data-error-for="' + name + '"]')?.remove();
  };
  const showError = (name, message) => {
    const field = fieldFor(name);
    if (!field) return;
    clearError(name);
    field.setAttribute("aria-invalid", "true");
    const error = document.createElement("p");
    error.className = "error-text";
    error.dataset.errorFor = name;
    error.setAttribute("role", "alert");
    error.textContent = message;
    field.append(error);
  };
  const clearSubmitError = () => form.querySelector('[data-error-for="submit"]')?.remove();
  const showSubmitError = message => {
    clearSubmitError();
    const error = document.createElement("p");
    error.className = "error-text";
    error.dataset.errorFor = "submit";
    error.setAttribute("role", "alert");
    error.textContent = message;
    submitButton.closest(".form-submit-slot").before(error);
  };

  form.addEventListener("input", event => {
    const name = event.target.name;
    if (name) clearError(name === "portfolioLink" ? "portfolio" : name);
    if (event.target === concern && characterCount) characterCount.textContent = concern.value.length + "/100";
  });
  form.addEventListener("change", event => {
    const name = event.target.name;
    if (name) clearError(name);
  });
  fileInput?.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    clearError("portfolio");
    if (!file) return;
    if (file.size > maxFileSize) {
      fileInput.value = "";
      showError("portfolio", "파일 용량은 최대 20MB까지 첨부할 수 있습니다.");
      return;
    }
    if (uploadCopy) uploadCopy.textContent = file.name;
    if (uploadNote) uploadNote.textContent = "파일이 첨부되었습니다.";
  });
  upload?.addEventListener("dragover", event => { event.preventDefault(); upload.classList.add("is-dragging"); });
  upload?.addEventListener("dragleave", () => upload.classList.remove("is-dragging"));
  upload?.addEventListener("drop", event => {
    event.preventDefault(); upload.classList.remove("is-dragging");
    if (event.dataTransfer.files?.[0] && fileInput) {
      const transfer = new DataTransfer(); transfer.items.add(event.dataTransfer.files[0]);
      fileInput.files = transfer.files; fileInput.dispatchEvent(new Event("change", {bubbles:true}));
    }
  });

  const uploadPortfolio = async (file, uploadUrl) => {
    const headers = {"content-type": file.type || "application/octet-stream"};
    try {
      const response = await fetch(uploadUrl, {method:"PUT", headers, body:file});
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.id) throw new Error(result.error?.message || "포트폴리오 파일 업로드에 실패했습니다.");
      return {id:result.id,name:result.name||file.name,url:result.webViewLink||"https://drive.google.com/open?id="+result.id,size:file.size,type:file.type||"application/octet-stream"};
    } catch (error) {
      if (!(error instanceof TypeError)) throw error;
      const response = await fetch(apiUrl, {method:"PUT",credentials:"include",headers:{...headers,"x-file-size":String(file.size),"x-upload-session":uploadUrl},body:file});
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.file) throw new Error(result.error || "포트폴리오 파일 업로드에 실패했습니다.");
      return result.file;
    }
  };

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const data = new FormData(form);
    const file = fileInput?.files?.[0] || null;
    const conditions = data.getAll("conditions").map(String);
    const availability = data.getAll("availability").map(String);
    const values = {
      name:String(data.get("name")||"").trim(), phone:String(data.get("phone")||"").trim(), email:String(data.get("email")||"").trim(),
      career:String(data.get("career")||""), portfolioLink:String(data.get("portfolioLink")||"").trim(), concern:String(data.get("concern")||"").trim(),
      commitment:String(data.get("commitment")||""), conditions, availability,
    };
    form.querySelectorAll("[data-error-for]").forEach(error => error.remove());
    const errors = [];
    if (!values.name) errors.push(["name","이름을 입력해 주세요."]);
    if (!values.phone) errors.push(["phone","연락처를 입력해 주세요."]);
    if (!values.email) errors.push(["email","이메일을 입력해 주세요."]);
    if (!values.career) errors.push(["career","현재 경력을 선택해 주세요."]);
    if (!values.portfolioLink && !file) errors.push(["portfolio","포트폴리오 링크를 입력하거나 파일을 첨부해 주세요."]);
    if (values.concern.length < 100) errors.push(["concern","현재 고민되는 부분을 100자 이상 입력해 주세요."]);
    if (!values.commitment) errors.push(["commitment","포트폴리오 수정 가능 여부를 선택해 주세요."]);
    if (conditions.length !== 3) errors.push(["conditions","참여 조건을 모두 확인하고 선택해 주세요."]);
    if (availability.length === 0) errors.push(["availability","가능한 시간대를 한 개 이상 선택해 주세요."]);
    errors.forEach(([name,message]) => showError(name,message));
    if (errors.length) { fieldFor(errors[0][0])?.scrollIntoView({behavior:"smooth",block:"center"}); return; }

    clearSubmitError(); submitButton.disabled = true;
    submitButton.innerHTML = '<span class="submitting-label">제출 중<span class="submitting-dots" aria-hidden="true"><i>.</i><i>.</i><i>.</i></span></span>';
    try {
      let storedFile = null;
      if (file) {
        const initResponse = await fetch(apiUrl, {method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({action:"initUpload",name:file.name,type:file.type||"application/octet-stream",size:file.size,applicantName:values.name})});
        const initResult = await initResponse.json().catch(() => ({}));
        if (!initResponse.ok || !initResult.uploadUrl) throw new Error(initResult.error || "파일 업로드를 준비하지 못했습니다.");
        storedFile = await uploadPortfolio(file, initResult.uploadUrl);
      }
      const response = await fetch(apiUrl, {method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({...values,file:storedFile})});
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "신청서를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.");
      location.assign("/apply/complete/");
    } catch (error) {
      showSubmitError(error instanceof Error ? error.message : "신청서를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.");
      submitButton.disabled = false; submitButton.textContent = "신청서 제출하기";
    }
  });

  const slot = form.querySelector(".form-submit-slot");
  const sticky = slot?.querySelector(".form-submit");
  if (slot && sticky) {
    const update = () => sticky.classList.toggle("is-docked", slot.getBoundingClientRect().top <= innerHeight - slot.offsetHeight - 20);
    update(); addEventListener("scroll", update, {passive:true}); addEventListener("resize", update);
  }
})();`;

const routeScripts = new Map([
  ["/", homeMotion],
  ["/about", typingIntro],
  ["/workshop", workshopCta],
  ["/apply", applicationForm],
  ["/apply/complete", ""],
]);

function transformHtml(html, route) {
  const controller = routeScripts.get(route) || "";
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/=(['"])\/(?!\/)/g, `=$1${basePath}/`)
    .replace("</head>", `${gaMeasurementId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}"></script>` : ""}</head>`)
    .replace("</body>", `${analytics ? `<script>${analytics}</script>` : ""}${controller ? `<script>${controller}</script>` : ""}<script>${channelTalk}</script></body>`);
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

await writeFile(path.join(outputDir, "404.html"), await readFile(path.join(outputDir, "index.html"), "utf8"));
await writeFile(path.join(outputDir, ".nojekyll"), "");

console.log(`Generated GitHub Pages from ${siteOrigin}`);
