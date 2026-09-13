import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getBody } from "./bodies.ts";
import { getMarket } from "./map.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

describe("markets page thicken (no new URLs)", () => {
  it("keeps the 2024 investment ranking and adds a fabrication contrast", () => {
    const body = getBody("markets", "physical-silver-demand-by-country");
    assert.ok(body);

    const text = body
      .flatMap((s) => [s.heading, s.callout?.label, ...(s.callout?.paragraphs ?? []), ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");

    assert.match(text, /United States 64\.9/);
    assert.match(text, /India 59\.8/);
    assert.match(text, /Germany 9\.9/);
    assert.match(text, /Fabrication countries ≠ investment offtake/);
    assert.match(text, /India 18\.4/);
    assert.match(text, /United States 15\.7/);
    assert.match(text, /Canada 11\.4/);
    assert.match(text, /United Kingdom 9\.8/);
    assert.match(text, /Australia 8\.3/);
    assert.match(text, /87\.9 million ounces/);
    assert.doesNotMatch(text, /forecast|ebook|buy silver in India/i);
  });

  it("adds mining-vs-market on the gold–silver ratio page without new URLs", () => {
    const body = getBody("markets", "gold-silver-ratio");
    assert.ok(body);

    const mining = body.find((s) => s.heading === "Mining ratio vs market ratio");
    assert.ok(mining, "expected Mining ratio vs market ratio under the definition");
    const text = body
      .flatMap((s) => [s.heading, ...(s.callout?.paragraphs ?? []), ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");

    assert.match(text, /What the ratio measures/);
    assert.match(text, /7\.1/);
    assert.match(text, /844\.1 million ounces/);
    assert.match(text, /3,300 tonnes/);
    assert.match(text, /26,000 tonnes/);
    assert.match(text, /10 September 2026/);
    assert.match(text, /\$4,364\.50/);
    assert.match(text, /\$64\.28/);
    assert.match(text, /67\.9/);
    assert.match(text, /COMEX December/);
    assert.match(text, /not a fair-value/);
    assert.match(text, /not a mean/i);
    assert.match(text, /\[markets\]\(\/markets\)/);
    assert.match(text, /\[Physical silver demand by country\]\(\/markets\/physical-silver-demand-by-country\)/);
    assert.doesNotMatch(text, /\$217|\$290|old-cycle|Kauf|ebook|buy gold|buy silver/i);

    const page = getMarket("gold-silver-ratio");
    assert.ok(page);
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/markets", "/markets/physical-silver-demand-by-country"],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/gold-silver-ratio/);
    assert.doesNotMatch(sitemapSrc, /mining-ratio/);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("mining-ratio")));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/gold-silver-ratio"));
  });

  it("refreshes only the Poland block on the reserves page", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const poland = body.find((s) => s.heading.startsWith("Poland"));
    assert.ok(poland);
    const text = poland.paragraphs.join("\n");

    assert.match(text, /581\.6 tonnes/);
    assert.match(text, /March 2026/);
    assert.match(text, /632 tonnes/);
    assert.match(text, /640 tonnes/);
    assert.match(text, /\*\*\+90 tonnes\*\* year-to-date/);
    assert.match(text, /700 tonnes/);
    assert.match(text, /do not say a private reader should follow NBP/i);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("poland")));
  });
});
