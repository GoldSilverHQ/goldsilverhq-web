import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getBody } from "./bodies.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

function bodyText(cluster: string, slug: string) {
  const body = getBody(cluster, slug);
  assert.ok(body);
  return body
    .flatMap((s) => [s.heading, ...(s.callout?.paragraphs ?? []), ...s.paragraphs, ...(s.list ?? [])])
    .filter(Boolean)
    .join("\n");
}

function wordCount(text: string) {
  const plain = text.replace(/\[[^\]]+\]\([^)]+\)/g, (m) => m.match(/\[([^\]]+)\]/)?.[1] ?? "").replace(/\*\*/g, "");
  return plain.trim().split(/\s+/).length;
}

describe("ancient why-markets thicken (no new URLs)", () => {
  it("thickens the existing episode and locks a two-stop ledger", () => {
    const text = bodyText("ancient", "why-markets-chose-gold-silver");
    const words = wordCount(text);
    assert.ok(words >= 900 && words <= 1200, `expected 900–1200 words, got ${words}`);

    assert.match(text, /Durability/);
    assert.match(text, /Divisibility/);
    assert.match(text, /Homogeneity/);
    assert.match(text, /Scarcity/);
    assert.match(text, /Recognizability/);
    assert.match(text, /Portability/);
    assert.match(text, /metal came first/i);
    assert.match(text, /stamp came second/i);
    assert.match(text, /\[ancient money hub\]\(\/history\/ancient\)/);
    assert.match(text, /\[Lydia and the first coins\]\(\/history\/ancient\/lydia-first-coins\)/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);
  });
});

describe("ancient lydia-first-coins thicken (no new URLs)", () => {
  it("thickens the existing episode and locks a two-stop ledger", () => {
    const text = bodyText("ancient", "lydia-first-coins");
    const words = wordCount(text);
    assert.ok(words >= 1000 && words <= 1300, `expected 1000–1300 words, got ${words}`);

    assert.match(text, /cheaper verification/i);
    assert.match(text, /western Anatolia/);
    assert.match(text, /electrum/i);
    assert.match(text, /Croesus/);
    assert.match(text, /not the birth of money/i);
    assert.match(text, /1971/);
    assert.match(text, /warehouse/i);
    assert.match(text, /silver as a network/i);
    assert.match(text, /\[Why markets chose gold and silver\]\(\/history\/ancient\/why-markets-chose-gold-silver\)/);
    assert.match(text, /\[ancient money hub\]\(\/history\/ancient\)/);
    assert.doesNotMatch(text, /\/history\/ancient\/greece-silver-trade/);
    assert.doesNotMatch(text, /\/history\/ancient\/rome-denarius-aureus/);
    assert.doesNotMatch(text, /\/history\/ancient\/solidus-continuity/);
    assert.doesNotMatch(text, /this stop|continue the map|hub\/spoke|Phase-1|episode index/i);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);
  });

  it("keeps related links on the hub and prior spoke, and off the sitemap", () => {
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const lydiaBlock = mapSrc.split('slug: "lydia-first-coins"')[1]?.split("slug:")[0] ?? "";
    assert.match(lydiaBlock, /status: "ready"/);
    assert.match(lydiaBlock, /href: "\/history\/ancient"/);
    assert.match(lydiaBlock, /href: "\/history\/ancient\/why-markets-chose-gold-silver"/);
    assert.doesNotMatch(lydiaBlock, /greece-silver-trade|rome-denarius-aureus|solidus-continuity/);
    assert.match(mapSrc, /THIN_ANCIENT_CONTINUES[\s\S]*greece-silver-trade/);
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/history/ancient/lydia-first-coins"));
  });
});
