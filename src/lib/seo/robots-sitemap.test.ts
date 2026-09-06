import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  CANONICAL_ORIGIN,
  PHASE1_SITEMAP_PATHS,
  ROBOTS_TXT,
  sitemapXml,
} from "./robots-sitemap.ts";

describe("phase-1 robots and sitemap", () => {
  it("points crawlers at the www sitemap and allows the site", () => {
    assert.match(ROBOTS_TXT, /^User-agent: \*\nAllow: \/\nSitemap: https:\/\/www\.goldsilverhq\.com\/sitemap\.xml\n$/);
  });

  it("lists only the six Phase-1 www URLs", () => {
    assert.deepEqual([...PHASE1_SITEMAP_PATHS], [
      "/history",
      "/history/20th-century",
      "/history/20th-century/weimar-1923",
      "/history/20th-century/bretton-woods-nixon-1971",
      "/history/20th-century/panic-1907-fed",
      "/history/banks-paper/john-law",
    ]);

    const xml = sitemapXml();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    assert.deepEqual(
      locs,
      PHASE1_SITEMAP_PATHS.map((path) => `${CANONICAL_ORIGIN}${path}`),
    );
    assert.equal(locs.length, 6);
    assert.match(xml, /^<\?xml version="1.0" encoding="UTF-8"\?>/);
    assert.match(xml, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
    assert.doesNotMatch(xml, /sound-money|gold-silver|\/ancient|\/america|1933-gold|classical-gold|assignats/);
  });
});
