import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  CANONICAL_ORIGIN,
  GOOGLE_SITE_VERIFICATION_BODY,
  GOOGLE_SITE_VERIFICATION_PATH,
  PHASE1_SITEMAP_PATHS,
  ROBOTS_TXT,
  googleSiteVerificationResponse,
  sitemapXml,
} from "./robots-sitemap.ts";

describe("phase-1 robots and sitemap", () => {
  it("points crawlers at the www sitemap and allows the site", () => {
    assert.match(ROBOTS_TXT, /^User-agent: \*\nAllow: \/\nSitemap: https:\/\/www\.goldsilverhq\.com\/sitemap\.xml\n$/);
  });

  it("lists only the forty-one thick www URLs", () => {
    assert.deepEqual([...PHASE1_SITEMAP_PATHS], [
      "/history",
      "/history/ancient",
      "/history/ancient/why-markets-chose-gold-silver",
      "/history/ancient/lydia-first-coins",
      "/history/ancient/greece-silver-trade",
      "/history/ancient/rome-denarius-aureus",
      "/history/ancient/solidus-continuity",
      "/history/banks-paper",
      "/history/banks-paper/warehouses-to-public-banks",
      "/history/banks-paper/bank-of-amsterdam",
      "/history/banks-paper/bank-of-england",
      "/history/banks-paper/john-law",
      "/history/banks-paper/assignats",
      "/history/america",
      "/history/america/early-us-coinage",
      "/history/america/jackson-and-the-bank",
      "/history/america/greenbacks-civil-war",
      "/history/america/crime-of-1873",
      "/history/america/road-back-gold",
      "/history/20th-century",
      "/history/20th-century/panic-1907-fed",
      "/history/20th-century/classical-gold-standard-end",
      "/history/20th-century/weimar-1923",
      "/history/20th-century/1933-gold-recall",
      "/history/20th-century/bretton-woods-nixon-1971",
      "/history/silver",
      "/history/silver/potosi",
      "/history/silver/piece-of-eight",
      "/history/silver/bimetallism",
      "/history/silver/silver-thursday",
      "/history/silver/monetary-and-industry",
      "/sound-money",
      "/sound-money/what-is-sound-money",
      "/sound-money/hard-money-vs-fiat",
      "/sound-money/inflation-purchasing-power",
      "/sound-money/backed-money",
      "/markets",
      "/markets/official-gold-book-value",
      "/markets/central-bank-gold-reserves",
      "/markets/gold-silver-ratio",
      "/markets/physical-silver-demand-by-country",
    ]);

    const xml = sitemapXml();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    assert.deepEqual(
      locs,
      PHASE1_SITEMAP_PATHS.map((path) => `${CANONICAL_ORIGIN}${path}`),
    );
    assert.equal(locs.length, 41);
    assert.match(xml, /^<\?xml version="1.0" encoding="UTF-8"\?>/);
    assert.match(xml, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
    assert.doesNotMatch(
      xml,
      /\/gold-silver(?:\/|<)|information-not-advice|comex|physical-by-country/,
    );
  });

  it("serves the Google Search Console HTML verification body", async () => {
    assert.equal(GOOGLE_SITE_VERIFICATION_PATH, "/googleb53ee24d705afe09.html");
    assert.equal(
      GOOGLE_SITE_VERIFICATION_BODY,
      "google-site-verification: googleb53ee24d705afe09.html",
    );

    const response = googleSiteVerificationResponse();
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "text/html; charset=utf-8");
    assert.equal(await response.text(), GOOGLE_SITE_VERIFICATION_BODY);
  });
});
