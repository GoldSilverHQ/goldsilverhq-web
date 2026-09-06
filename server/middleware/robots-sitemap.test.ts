import { describe, it } from "node:test";
import assert from "node:assert/strict";
import robotsSitemapMiddleware from "./robots-sitemap.ts";
import { GOOGLE_SITE_VERIFICATION_BODY } from "../../src/lib/seo/robots-sitemap.ts";

function event(path: string, method = "GET") {
  return {
    url: new URL(`https://www.goldsilverhq.com${path}`),
    req: { method },
  };
}

describe("robots-sitemap nitro middleware", () => {
  it("returns the Google verification file before the SPA not-found handler", async () => {
    const sentinel = Symbol("next");
    const result = robotsSitemapMiddleware(event("/googleb53ee24d705afe09.html"), () => sentinel);
    assert.ok(result instanceof Response);
    assert.equal(result.status, 200);
    assert.equal(result.headers.get("content-type"), "text/html; charset=utf-8");
    assert.equal(await result.text(), GOOGLE_SITE_VERIFICATION_BODY);
  });

  it("leaves other paths to next()", () => {
    const sentinel = Symbol("next");
    assert.equal(robotsSitemapMiddleware(event("/missing"), () => sentinel), sentinel);
  });
});
