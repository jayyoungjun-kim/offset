import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the OFFSET home page and production metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /OFFSET is a design learning platform/);
  assert.match(html, /property="og:url" content="https:\/\/offset\.quest"/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("server-renders every public page", async () => {
  for (const pathname of ["/about", "/programs", "/workshop", "/apply", "/apply/complete"]) {
    const response = await render(pathname);
    assert.ok([200, 307].includes(response.status), `${pathname}: ${response.status}`);
    if (response.status === 200) {
      assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, pathname);
    }
  }
});
