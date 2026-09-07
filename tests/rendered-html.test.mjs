import assert from "node:assert/strict";
import test from "node:test";
// Registered by platform.test.mjs inside the actual Workers runtime.
// Node cannot import cloudflare:workers; HTTP checks preserve the original assertions.
export function registerRenderedTests(request) {
  test("server-renders the OFFSET home page and production metadata", async () => {
    const response = await request("/");
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, /<html lang="ko">/i);
    assert.match(html, /OFFSET is a design learning platform/);
    assert.match(html, /property="og:url" content="https:\/\/offset\.quest"/i);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
  });
  test("server-renders every public and platform page", async () => {
    for (const pathname of [
      "/about",
      "/programs",
      "/workshop",
      "/apply",
      "/apply/complete",
      "/programs/portfolio-workshop",
      "/login",
      "/account",
      "/admin",
      "/admin/preview",
    ]) {
      const response = await request(pathname);
      assert.ok(
        [200, 307].includes(response.status),
        `${pathname}: ${response.status}`,
      );
      if (response.status === 200)
        assert.match(
          response.headers.get("content-type") ?? "",
          /^text\/html\b/i,
          pathname,
        );
    }
  });
}
