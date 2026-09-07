import test, { before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { randomBytes, createHash } from "node:crypto";
import { registerRenderedTests } from "./rendered-html.test.mjs";
import { seedPrograms } from "../app/lib/program-data.ts";
const port = 3011,
  origin = `http://localhost:${port}`,
  root = resolve("."),
  state = resolve(".wrangler/platform-test-state"),
  config = resolve(".wrangler/platform-test.json");
const adminToken = randomBytes(32).toString("hex"),
  userToken = randomBytes(32).toString("hex"),
  otherToken = randomBytes(32).toString("hex");
let server;
let logs = "";
const digest = (v) => createHash("sha256").update(v).digest("hex");
const quote = (v) => "'" + String(v).replaceAll("'", "''") + "'";
function execute(sql) {
  const file = resolve(".wrangler/platform-fixture.sql");
  writeFileSync(file, sql);
  const r = spawnSync(
    "node_modules/.bin/wrangler",
    [
      "d1",
      "execute",
      "DB",
      "--local",
      "--config",
      config,
      "--persist-to",
      state,
      "--file",
      file,
    ],
    { encoding: "utf8" },
  );
  if (r.status !== 0) throw Error(r.stderr || r.stdout);
}
async function request(
  path,
  { method = "GET", body, token, external = false } = {},
) {
  return fetch(origin + path, {
    method,
    redirect: "manual",
    headers: {
      // Isolate requests: early auth rejection can close an unread upload in Miniflare.
      connection: "close",
      ...(token ? { cookie: `offset_session=${token}` } : {}),
      ...(method !== "GET"
        ? {
            origin: external ? "https://evil.example" : origin,
            "content-type": "application/json",
          }
        : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
}
before(
  async () => {
    mkdirSync(".wrangler", { recursive: true });
    rmSync(state, { force: true, recursive: true });
    writeFileSync(
      config,
      JSON.stringify({
        name: "offset-platform-test",
        main: resolve("dist/server/index.js"),
        compatibility_date: "2026-05-15",
        compatibility_flags: ["nodejs_compat"],
        no_bundle: true,
        rules: [{ type: "ESModule", globs: ["**/*.js", "**/*.mjs"] }],
        assets: { directory: resolve("dist/client") },
        vars: {
          ADMIN_EMAILS: "admin@example.test",
          GOOGLE_CLIENT_ID: "",
          GOOGLE_CLIENT_SECRET: "",
          AUTH_ORIGIN: origin,
        },
        r2_buckets: [{binding:"MEDIA",bucket_name:"offset-test-media"}],
        d1_databases: [
          {
            binding: "DB",
            database_name: "offset-platform-test",
            database_id: "00000000-0000-4000-8000-000000000001",
          },
        ],
      }),
    );
    execute(
      readFileSync("drizzle/0000_nice_darwin.sql", "utf8") +
        "\n" +
        readFileSync("drizzle/0001_initial_program.sql", "utf8"),
    );
    execute(
      [
        ["admin", "admin@example.test", adminToken],
        ["member", "member@example.test", userToken],
        ["other", "other@example.test", otherToken],
      ]
        .map(
          ([id, email, token]) =>
            `INSERT INTO users VALUES(${[id, email, id, new Date().toISOString()].map(quote)}); INSERT INTO sessions VALUES(${[digest(token), id, Date.now() + 3600000].map(quote)});`,
        )
        .join("\n"),
    );
    server = spawn(
      "node_modules/.bin/wrangler",
      [
        "dev",
        "--local",
        "--config",
        config,
        "--persist-to",
        state,
        "--port",
        String(port),
      ],
      { stdio: ["ignore", "pipe", "pipe"] },
    );
    server.stdout.on("data", (d) => (logs += d));
    server.stderr.on("data", (d) => (logs += d));
    for (let n = 0; n < 80; n++) {
      try {
        const r = await request("/api/auth/session");
        if (r.ok) {
          // Wrangler may replace its initial Worker after the first ready event.
          // Let startup settle before sending non-retryable mutation requests.
          await new Promise((ready) => setTimeout(ready, 2000));
          const settled = await request("/api/auth/session");
          if (settled.ok) return;
        }
      } catch {}
      await new Promise((r) => setTimeout(r, 250));
    }
    throw Error(logs);
  },
  { timeout: 40000 },
);
after(async () => {
  if (server) {
    server.kill("SIGTERM");
    await new Promise((r) => {
      server.once("exit", r);
      setTimeout(r, 2000).unref();
    });
  }
  rmSync(state, { recursive: true, force: true });
  for (const f of [config, resolve(".wrangler/platform-fixture.sql")])
    rmSync(f, { force: true });
});
test("public list reads persisted program and closed status", async () => {
  const r = await request("/api/catalog");
  assert.equal(r.status, 200);
  const d = await r.json();
  assert.equal(d.programs[0].id, "portfolio-01");
  assert.equal(d.programs[0].status, "closed");
});
test("anonymous and member cannot access admin; forged cookie is rejected", async () => {
  for (const path of [
    "/api/admin/programs",
    "/api/admin/pages",
    "/api/admin/applications",
  ]) {
    assert.equal((await request(path)).status, 401);
    assert.equal((await request(path, { token: userToken })).status, 403);
    assert.equal((await request(path, { token: "f".repeat(64) })).status, 401);
  }
});
test("csrf and anonymous enrollment are rejected", async () => {
  assert.equal(
    (
      await request("/api/enrollments", {
        method: "POST",
        body: {},
        external: true,
      })
    ).status,
    403,
  );
  const anonymous = await request("/api/enrollments", {method:"POST",body:{}});
  assert.equal(anonymous.status, 401, (await anonymous.text()) + "\n" + logs);
  const legacyAnonymous = await request("/api/applications", {method:"POST",body:{}});
  assert.equal(legacyAnonymous.status, 401, (await legacyAnonymous.text()) + "\n" + logs);
});
let p = {
  ...seedPrograms[0],
  id: "test-program",
  slug: "test-program",
  status: "draft",
  title: "통합 검증 프로그램",
};
test("admin saves draft; draft excluded from public list and direct detail", async () => {
  assert.equal(
    (
      await request("/api/admin/programs", {
        method: "POST",
        token: adminToken,
        body: p,
      })
    ).status,
    200,
  );
  const r = await request("/api/catalog");
  assert.equal((await r.json()).programs.length, 1);
  assert.equal((await request("/programs/test-program")).status, 404);
});
test("duplicate slugs and invalid data rejected", async () => {
  assert.equal(
    (
      await request("/api/admin/programs", {
        method: "POST",
        token: adminToken,
        body: { ...p, id: "different" },
      })
    ).status,
    409,
  );
  assert.equal(
    (
      await request("/api/admin/programs", {
        method: "POST",
        token: adminToken,
        body: { ...p, price: -1 },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await request("/api/admin/programs", {
        method: "POST",
        token: adminToken,
        body: { ...p, image: "javascript:alert(1)" },
      })
    ).status,
    400,
  );
});
test("publish and update are reflected on both list and detail", async () => {
  p = { ...p, status: "open", price: 150000, title: "수정된 프로그램", detailSections: [{id:"overview",title:"운영자가 수정한 제목",body:"운영자가 저장한 상세 원문입니다."}] };
  assert.equal(
    (
      await request("/api/admin/programs", {
        method: "POST",
        token: adminToken,
        body: p,
      })
    ).status,
    200,
  );
  const d = await (await request("/api/catalog")).json();
  assert.equal(d.programs.find((x) => x.id === p.id).price, 150000);
  const r = await request("/programs/test-program");
  assert.equal(r.status, 200);
  const html=await r.text();
  assert.match(html, /수정된 프로그램/);
  assert.match(html, /운영자가 저장한 상세 원문입니다/);
});
const application = {
  programId: "test-program",
  motivation: "기존 포트폴리오의 문제 해결 과정을 개선하고 싶습니다.",
  portfolio: "https://example.test/portfolio",
  consent: true,
};
let enrollmentId;
test("consent and URL validation then successful single enrollment", async () => {
  assert.equal(
    (
      await request("/api/enrollments", {
        method: "POST",
        token: userToken,
        body: { ...application, consent: false },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await request("/api/enrollments", {
        method: "POST",
        token: userToken,
        body: { ...application, portfolio: "javascript:alert(1)" },
      })
    ).status,
    400,
  );
  const r = await request("/api/enrollments", {
    method: "POST",
    token: userToken,
    body: application,
  });
  assert.equal(r.status, 201);
  enrollmentId = (await r.json()).id;
  assert.equal(
    (
      await request("/api/enrollments", {
        method: "POST",
        token: userToken,
        body: application,
      })
    ).status,
    409,
  );
});
test("closed programs reject new applications even when client had old state", async () => {
  await request("/api/admin/programs", {
    method: "POST",
    token: adminToken,
    body: { ...p, status: "closed" },
  });
  assert.equal(
    (
      await request("/api/enrollments", {
        method: "POST",
        token: otherToken,
        body: application,
      })
    ).status,
    409,
  );
});
test("application reads scoped to member and admin updates reflected in account", async () => {
  const other = await (
    await request("/api/enrollments", { token: otherToken })
  ).json();
  assert.equal(other.enrollments.length, 0);
  const all = await (
    await request("/api/admin/applications", { token: adminToken })
  ).json();
  assert.equal(all.enrollments.length, 1);
  assert.equal(
    (
      await request("/api/admin/applications", {
        method: "PATCH",
        token: adminToken,
        body: { id: enrollmentId, status: "reviewing" },
      })
    ).status,
    200,
  );
  const own = await (
    await request("/api/enrollments", { token: userToken })
  ).json();
  assert.equal(own.enrollments[0].status, "reviewing");
  assert.equal(own.enrollments[0].email, "member@example.test");
});
test("typed content persists for future routes", async () => {
  const r = await request("/api/admin/pages", {
    method: "POST",
    token: adminToken,
    body: {
      id: "test-page",
      type: "notice",
      title: "검증 공지",
      body: "다음 구축 단계의 원고입니다.",
      status: "draft",
    },
  });
  assert.equal(r.status, 200);
  const d = await (
    await request("/api/admin/pages", { token: adminToken })
  ).json();
  assert.equal(d.pages[0].title, "검증 공지");
});
test("Google callback fails closed and absent configuration shows setup state", async () => {
  const a = await request("/api/auth/google?returnTo=//evil.example");
  assert.equal(a.status, 303);
  assert.match(a.headers.get("location"), /login\?error=configuration/);
  const b = await request("/api/auth/callback?state=invalid&code=invalid");
  assert.equal(b.status, 303);
  assert.match(b.headers.get("location"), /login\?error=authentication/);
  assert.doesNotMatch(b.headers.get("set-cookie"), /offset_session=/);
});
test("logout revokes server session", async () => {
  assert.equal(
    (await request("/api/auth/logout", { method: "POST", token: userToken }))
      .status,
    303,
  );
  assert.equal(
    (await request("/api/enrollments", { token: userToken })).status,
    401,
  );
});

registerRenderedTests(request);

test('legacy production compatibility is restricted to the exact old host and origin', async () => {
  const {isLegacyProductionRequest}=await import('../app/lib/environment.ts');
  const old='https://portfolio-workshop-1.jayyoungjunkim.chatgpt.site/api/applications';
  assert.equal(isLegacyProductionRequest(new Request(old,{headers:{origin:'https://offset.quest'}})),true);
  assert.equal(isLegacyProductionRequest(new Request(old,{headers:{origin:'https://qa.offset.quest'}})),false);
  assert.equal(isLegacyProductionRequest(new Request('https://qa.offset.quest/api/applications',{headers:{origin:'https://offset.quest'}})),false);
  assert.equal(isLegacyProductionRequest(new Request(old)),false);
  assert.equal((await request('/api/applications',{method:'OPTIONS'})).status,403);
});


test("workshop detail preserves every original paragraph, list item and FAQ", async () => {
  const expected = JSON.parse(readFileSync("tests/fixtures/workshop-original-text.json", "utf8"));
  for (const path of ["/programs/portfolio-workshop", "/workshop"]) {
    const response = await request(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    const sections = [...html.matchAll(/<section[^>]*class="of-original-section"[^>]*>([\s\S]*?)<\/section>/g)];
    assert.equal(sections.length, 7);
    const decoded = sections.map(m=>m[1]).join(" ").replace(/<[^>]*>/g," ")
      .replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'")
      .replace(/\s/g, "");
    for (const text of expected) assert.ok(decoded.includes(text.replace(/\s/g,"")), `Missing original text: ${text}`);
    assert.equal((sections[6][1].match(/<details/g)||[]).length, 9);
  }
});


test("detail sections can be added, reordered, deleted and cleared without restoring legacy content", async () => {
 const first={id:"section-first",title:"첫 번째 섹션",body:"",html:"<p>추가한 본문 A</p>"};
 const second={id:"section-second",title:"두 번째 섹션",body:"",html:"<p>추가한 본문 B</p>"};
 for(const sections of [[first,second],[second,first],[second],[]]) {
  const response=await request("/api/admin/programs",{method:"POST",token:adminToken,body:{...p,status:"open",detailSections:sections}});
  assert.equal(response.status,200);
  const fetched=await (await request("/api/admin/programs",{token:adminToken})).json();
  assert.deepEqual(fetched.programs.find(x=>x.id===p.id).detailSections.map(s=>s.id),sections.map(s=>s.id));
  const html=await (await request("/programs/test-program")).text();
  const ids=[...html.matchAll(/<section[^>]*id="([^"]+)"[^>]*class="of-original-section"/g)].map(x=>x[1]);
  assert.deepEqual(ids,sections.map(s=>s.id));
 }
});

test("admin mentor card changes persist and unsafe image URLs are rejected", async()=>{
 const body={...p,status:"open",mentor:"샘플 멘토",mentorBio:"첫 번째 소개 문장. 두 번째 소개 문장도 표시됩니다.",mentorImage:"https://example.com/mentor.png",detailSections:[{id:"overview",title:"소개",body:"프로그램 소개"}]};
 const response=await request("/api/admin/programs",{method:"POST",token:adminToken,body});assert.equal(response.status,200);
 const stored=await (await request("/api/admin/programs",{token:adminToken})).json();assert.equal(stored.programs.find(x=>x.id===p.id).mentorImage,body.mentorImage);
 const html=await (await request("/programs/test-program")).text();assert.match(html,/두 번째 소개 문장도 표시됩니다/);assert.match(html,/https:\/\/example.com\/mentor.png/);assert.doesNotMatch(html,/href="#mentor"/);
 const bad=await request("/api/admin/programs",{method:"POST",token:adminToken,body:{...body,mentorImage:"javascript:alert(1)"}});assert.equal(bad.status,400);
});


test("managed images enforce admin access, persist, attach, clear and delete", async () => {
  const upload = (token, body, external=false, type="image/webp") => fetch(origin+"/api/admin/media?name=thumbnail.webp",{method:"POST",headers:{connection:"close",cookie:`offset_session=${token||""}`,origin:external?"https://evil.example":origin,"content-type":type},body});
  for(const token of [undefined,otherToken]) {
    const r=await request("/api/admin/media",{token});assert.equal(r.status,token?403:401);
  }
  const bytes=readFileSync("tests/fixtures/thumbnail.webp");
  const forbidden=await upload(otherToken,bytes);assert.equal(forbidden.status,403);await forbidden.text();
  const saved=await upload(adminToken,bytes);assert.equal(saved.status,201);const {image}=await saved.json();
  assert.equal(image.width,8);assert.equal(image.height,6);assert.equal(image.size,bytes.length);
  const file=await request(image.url);assert.equal(file.status,200);assert.equal(file.headers.get("content-type"),"image/webp");assert.deepEqual(Buffer.from(await file.arrayBuffer()),bytes);
  const p={...seedPrograms[0],image:image.url};
  assert.equal((await request("/api/admin/programs",{method:"POST",token:adminToken,body:p})).status,200);
  const listed=await (await request("/api/admin/media",{token:adminToken})).json();assert.ok(listed.images.find(x=>x.id===image.id).usedBy.length);
  const html=await (await request("/programs/portfolio-workshop")).text();assert.ok(html.includes(image.url));assert.ok(!html.includes('class="of-artwork-top"'));
  assert.equal((await request(`/api/admin/media?id=${image.id}`,{method:"DELETE",token:adminToken})).status,409);
  assert.equal((await request("/api/admin/programs",{method:"POST",token:adminToken,body:{...p,image:""}})).status,200);
  assert.equal((await request(`/api/admin/media?id=${image.id}`,{method:"DELETE",token:adminToken})).status,200);
  assert.equal((await request(image.url)).status,404);
  assert.equal((await request("/api/admin/programs",{method:"POST",token:adminToken,body:p})).status,400);
  const bad=await upload(adminToken,new Uint8Array(30));assert.equal(bad.status,400);await bad.text();
  const oversized=await upload(adminToken,new Uint8Array(500*1024+1));assert.equal(oversized.status,413);await oversized.text();
  const csrf=await upload(adminToken,bytes,true);assert.equal(csrf.status,403);await csrf.text();
});

test("admin HTML round trip renders formatting and removes executable content", async () => {
 const raw='<h3>HTML 편집 제목</h3><p style="text-align: center">보존할 <strong>본문</strong></p><script>alert(1)</script><img src="https://example.test/image.png" onerror="alert(1)"><a href="javascript:alert(1)">링크</a><iframe src="https://example.test"></iframe><table><tr><td>표 내용</td></tr></table>';
 const saved=await request("/api/admin/programs",{method:"POST",token:adminToken,body:{...p,status:"open",detailSections:[{id:"overview",title:"상세 HTML",body:"기존 원문",html:raw}]}});
 assert.equal(saved.status,200);
 const result=await saved.json();
 assert.match(result.program.detailSections[0].html,/<strong>본문<\/strong>/);
 assert.doesNotMatch(result.program.detailSections[0].html,/script|onerror|javascript:|iframe/);
 const fetched=await (await request("/api/admin/programs",{token:adminToken})).json();
 assert.equal(fetched.programs.find(x=>x.id===p.id).detailSections[0].html,result.program.detailSections[0].html);
 const html=await (await request("/programs/test-program")).text();
 assert.match(html,/<h3>HTML 편집 제목<\/h3>/);
 assert.match(html,/<td>표 내용<\/td>/);
 const forbidden=await request("/api/admin/programs",{method:"POST",token:otherToken,body:{...p,detailSections:[{id:"overview",title:"변경",body:"본문",html:raw}]}});
 assert.equal(forbidden.status,403);
});

