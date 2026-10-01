import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getBody, practiceHubBody } from "./bodies.ts";
import { getPractice, practiceHub } from "./map.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

function bodyText(sections: NonNullable<ReturnType<typeof getBody>>) {
  return sections
    .flatMap((s) => [
      s.heading,
      ...(s.callout?.paragraphs ?? []),
      ...s.paragraphs,
      ...(s.list ?? []),
      s.table?.caption,
      ...(s.table?.headers ?? []),
      ...(s.table?.rows.flat() ?? []),
    ])
    .filter(Boolean)
    .join("\n");
}

function wordCount(text: string) {
  const plain = text.replace(/\[[^\]]+\]\([^)]+\)/g, (m) => m.match(/\[([^\]]+)\]/)?.[1] ?? "").replace(/\*\*/g, "");
  return plain.trim().split(/\s+/).length;
}

const PRACTICE_EPISODES = [
  "bars-vs-coins",
  "premium-over-spot",
  "storage",
  "spotting-fakes",
  "beginner-checklist",
  "buying-online",
] as const;

const THICK_PRACTICE_EPISODES = [
  "bars-vs-coins",
  "premium-over-spot",
  "storage",
  "spotting-fakes",
  "beginner-checklist",
  "buying-online",
] as const;
const THIN_PRACTICE_EPISODES = PRACTICE_EPISODES.filter(
  (slug) => !(THICK_PRACTICE_EPISODES as readonly string[]).includes(slug),
);

const BAFIN_FORBIDDEN =
  /ebook|LemonSqueezy|buy gold now|buy silver now|Kauf|should buy|you should buy|price target|best dealer|we recommend buying|load up on/i;

const SEO_HUB_META =
  /\b(this pillar|Continue the map|Phase-?1|Phase 3|Flavio|sitemap expansion|BaFin-clean|long-tail first|no spaghetti)\b/i;

describe("practice / gold-silver hub thicken (no new URLs, hub on sitemap)", () => {
  it("thickens the hub to documentary depth and leaves no Praxis note thin", () => {
    const text = bodyText(practiceHubBody);
    const words = wordCount(text);
    assert.ok(words >= 800 && words <= 1500, `hub: expected 800–1500 words, got ${words}`);
    assert.ok(words >= 900 && words <= 1300, `hub: target 900–1300 words, got ${words}`);

    assert.equal(THIN_PRACTICE_EPISODES.length, 0, "all Praxis notes should be thickened");
    for (const slug of THICK_PRACTICE_EPISODES) {
      const body = getBody("gold-silver", slug);
      assert.ok(body, `missing body for gold-silver/${slug}`);
      const spokeWords = wordCount(bodyText(body));
      assert.ok(spokeWords >= 800 && spokeWords <= 1500, `${slug}: expected 800–1500 words, got ${spokeWords}`);
    }
  });

  it("keeps handling facts without shop / overview-shelf chrome", () => {
    const text = bodyText(practiceHubBody);
    assert.match(text, /form, premium, storage, authenticity/i);
    assert.match(text, /first ounces/i);
    assert.match(text, /\[Sound Money\]\(\/sound-money\)/);
    assert.match(text, /\[why markets chose gold and silver\]\(\/history\/ancient\/why-markets-chose-gold-silver\)/);
    assert.match(text, /\[Sound Money History\]\(\/history\)/);
    assert.match(text, /\[Markets\]\(\/markets\)/);
    assert.doesNotMatch(text, /not a shop|educational menu|This overview stays|leave for History|standing line|These pages inform|Mixing the jobs/i);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);
    assert.doesNotMatch(text, SEO_HUB_META);
  });

  it("maps the six existing notes without inventing routes", () => {
    const text = bodyText(practiceHubBody);
    assert.match(text, /\[Gold bars vs coins\]\(\/gold-silver\/bars-vs-coins\)/);
    assert.match(text, /\[Premium over spot\]\(\/gold-silver\/premium-over-spot\)/);
    assert.match(text, /\[Storing gold and silver\]\(\/gold-silver\/storage\)/);
    assert.match(text, /\[Spotting fakes\]\(\/gold-silver\/spotting-fakes\)/);
    assert.match(text, /\[Beginner checklist\]\(\/gold-silver\/beginner-checklist\)/);
    assert.match(text, /\[Buying online\]\(\/gold-silver\/buying-online\)/);

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.equal(
      [...mapSrc.matchAll(/slug:\s*"(bars-vs-coins|premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)"/g)]
        .length,
      6,
    );
    assert.doesNotMatch(mapSrc, /slug:\s*"(?!gold-silver-ratio)gold-silver-[\w-]+"/);
  });

  it("keeps a two-link causal ledger and lists only the hub plus bars-vs-coins on the sitemap", () => {
    assert.deepEqual(
      practiceHub.related.map((r) => r.href),
      ["/sound-money", "/history/ancient/why-markets-chose-gold-silver"],
    );
    assert.equal(practiceHub.related.length, 2);

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /practiceHub/);
    assert.match(mapSrc, /titleTag:\s*"Gold & Silver in Practice: Form, Premium, Custody"/);

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/index.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /practiceHubBody/);
    assert.match(routeSrc, /ArticleSections/);
    assert.match(routeSrc, /Gold & Silver in Practice/);
    assert.match(routeSrc, /to="\/gold-silver\/\$slug"/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /"\/gold-silver"/);
    assert.match(sitemapSrc, /"\/gold-silver\/bars-vs-coins"/);
    assert.doesNotMatch(
      sitemapSrc,
      /\/gold-silver\/(premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)/,
    );
    assert.deepEqual(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/gold-silver")),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
  });
});

describe("practice / bars-vs-coins thicken (no new URLs, spoke on sitemap)", () => {
  it("thickens bars-vs-coins to documentary depth", () => {
    const body = getBody("gold-silver", "bars-vs-coins");
    assert.ok(body, "missing body for gold-silver/bars-vs-coins");
    const text = bodyText(body);
    const words = wordCount(text);
    assert.ok(words >= 800 && words <= 1200, `bars-vs-coins: expected 800–1200 words, got ${words}`);
    assert.ok(body.filter((s) => s.heading).length >= 5, "bars-vs-coins: expected ≥5 headed sections");

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/$slug.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /createFileRoute\("\/gold-silver\/\$slug"\)/);
    assert.match(routeSrc, /getPractice/);
    assert.match(routeSrc, /EpisodeBody/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);
  });

  it("locks the claim: form factor, fabrication, premium, resale", () => {
    const text = bodyText(getBody("gold-silver", "bars-vs-coins")!);
    assert.match(text, /form factor/);
    assert.match(text, /Minting, casting, pouring/);
    assert.match(text, /premium over spot/);
    assert.match(text, /Recognition and resale friction/);
    assert.match(text, /What the comparison leaves you with/);
    assert.match(text, /\[Gold & Silver in Practice\]\(\/gold-silver\)/);
    assert.match(text, /\[premium over spot\]\(\/gold-silver\/premium-over-spot\)/);
    assert.doesNotMatch(text, /Information only|These paragraphs inform|not a shop|as mechanics, not as a shop/i);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);
    assert.doesNotMatch(text, SEO_HUB_META);
    assert.doesNotMatch(text, /this stop|Continue the map|spoke\b|Phase-?1|Kaufsprache|ebook/i);
  });

  it("keeps a two-link causal ledger and lists the spoke on the sitemap", () => {
    const page = getPractice("bars-vs-coins");
    assert.ok(page, "missing bars-vs-coins in map.ts");
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/gold-silver", "/gold-silver/premium-over-spot"],
    );
    assert.equal(page.related.length, 2);
    assert.equal(page.slug, "bars-vs-coins");
    assert.equal(page.title, "Gold bars vs coins");

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const barsBlock = mapSrc.match(/slug:\s*"bars-vs-coins"[\s\S]*?slug:\s*"premium-over-spot"/)?.[0];
    assert.ok(barsBlock, "missing bars-vs-coins episode block in map.ts");
    const hrefs = [...barsBlock.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(hrefs, ["/gold-silver", "/gold-silver/premium-over-spot"]);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /"\/gold-silver"/);
    assert.match(sitemapSrc, /"\/gold-silver\/bars-vs-coins"/);
    assert.doesNotMatch(
      sitemapSrc,
      /\/gold-silver\/(premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)/,
    );
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver/bars-vs-coins"));
    assert.deepEqual(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/gold-silver")),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
  });
});

describe("practice / premium-over-spot thicken (no new URLs, spoke off sitemap)", () => {
  it("thickens premium-over-spot to documentary depth", () => {
    const body = getBody("gold-silver", "premium-over-spot");
    assert.ok(body, "missing body for gold-silver/premium-over-spot");
    const text = bodyText(body);
    const words = wordCount(text);
    assert.ok(words >= 800 && words <= 1200, `premium-over-spot: expected 800–1200 words, got ${words}`);
    assert.ok(body.filter((s) => s.heading).length >= 5, "premium-over-spot: expected ≥5 headed sections");

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/$slug.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /createFileRoute\("\/gold-silver\/\$slug"\)/);
    assert.match(routeSrc, /getPractice/);
    assert.match(routeSrc, /EpisodeBody/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);
  });

  it("locks the claim: form, brand, mint, liquidity", () => {
    const text = bodyText(getBody("gold-silver", "premium-over-spot")!);
    assert.match(text, /form, brand, mint, and liquidity/);
    assert.match(text, /LBMA/);
    assert.match(text, /dealer’s ask/);
    assert.match(text, /Fabrication is the first cost/);
    assert.match(text, /Distribution is the second/);
    assert.match(text, /Inventory is the third/);
    assert.match(text, /Recognition is the fourth/);
    assert.match(text, /not a timing tip/);
    assert.match(text, /fairly valued/);
    assert.match(text, /Reading the gap/);
    assert.match(text, /\[Gold & Silver in Practice\]\(\/gold-silver\)/);
    assert.match(text, /\[gold bars vs coins\]\(\/gold-silver\/bars-vs-coins\)/);
    assert.doesNotMatch(text, /Information only|These paragraphs inform|not a shopping tip|as mechanics, not as a shop/i);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);
    assert.doesNotMatch(text, SEO_HUB_META);
    assert.doesNotMatch(text, /this stop|Continue the map|spoke\b|Phase-?1|Kaufsprache|ebook/i);
  });

  it("keeps a two-link causal ledger and leaves the spoke off the sitemap", () => {
    const page = getPractice("premium-over-spot");
    assert.ok(page, "missing premium-over-spot in map.ts");
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
    assert.equal(page.related.length, 2);
    assert.equal(page.slug, "premium-over-spot");
    assert.equal(page.title, "Premium over spot");

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const premiumBlock = mapSrc.match(/slug:\s*"premium-over-spot"[\s\S]*?slug:\s*"storage"/)?.[0];
    assert.ok(premiumBlock, "missing premium-over-spot episode block in map.ts");
    const hrefs = [...premiumBlock.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(hrefs, ["/gold-silver", "/gold-silver/bars-vs-coins"]);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /"\/gold-silver"/);
    assert.match(sitemapSrc, /"\/gold-silver\/bars-vs-coins"/);
    assert.doesNotMatch(sitemapSrc, /\/gold-silver\/premium-over-spot/);
    assert.doesNotMatch(
      sitemapSrc,
      /\/gold-silver\/(premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)/,
    );
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver/bars-vs-coins"));
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/gold-silver/premium-over-spot"));
    assert.deepEqual(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/gold-silver")),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
  });
});

describe("practice / storage thicken (no new URLs, spoke off sitemap)", () => {
  it("thickens storage to documentary depth", () => {
    const body = getBody("gold-silver", "storage");
    assert.ok(body, "missing body for gold-silver/storage");
    const text = bodyText(body);
    const words = wordCount(text);
    assert.ok(words >= 800 && words <= 1200, `storage: expected 800–1200 words, got ${words}`);
    assert.ok(body.filter((s) => s.heading).length >= 5, "storage: expected ≥5 headed sections");

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/$slug.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /createFileRoute\("\/gold-silver\/\$slug"\)/);
    assert.match(routeSrc, /getPractice/);
    assert.match(routeSrc, /EpisodeBody/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);
  });

  it("locks the claim: access, cost, counterparty", () => {
    const text = bodyText(getBody("gold-silver", "storage")!);
    assert.match(text, /access, cost, and counterparty/);
    assert.match(text, /[Ii]dentifiable bars and coins/);
    assert.match(text, /claim, not a stack/);
    assert.match(text, /practical household risks/);
    assert.match(text, /Documentation and segregation/);
    assert.match(text, /not a vendor list/);
    assert.match(text, /form you hold and the place it sits/);
    assert.match(text, /Access, cost, counterparty in one place/);
    assert.match(text, /\[Gold & Silver in Practice\]\(\/gold-silver\)/);
    assert.match(text, /\[gold bars vs coins\]\(\/gold-silver\/bars-vs-coins\)/);
    assert.doesNotMatch(text, /Information only|These paragraphs inform|This page does not pick|as mechanics, not as a shop/i);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);
    assert.doesNotMatch(text, SEO_HUB_META);
    assert.doesNotMatch(text, /this stop|Continue the map|spoke\b|Phase-?1|Kaufsprache|ebook/i);
    assert.doesNotMatch(text, /best storage|best vault|best dealer/i);
  });

  it("keeps a two-link causal ledger and leaves the spoke off the sitemap", () => {
    const page = getPractice("storage");
    assert.ok(page, "missing storage in map.ts");
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
    assert.equal(page.related.length, 2);
    assert.equal(page.slug, "storage");
    assert.equal(page.title, "Storing gold and silver");

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const storageBlock = mapSrc.match(/slug:\s*"storage"[\s\S]*?slug:\s*"spotting-fakes"/)?.[0];
    assert.ok(storageBlock, "missing storage episode block in map.ts");
    const hrefs = [...storageBlock.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(hrefs, ["/gold-silver", "/gold-silver/bars-vs-coins"]);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /"\/gold-silver"/);
    assert.match(sitemapSrc, /"\/gold-silver\/bars-vs-coins"/);
    assert.doesNotMatch(sitemapSrc, /\/gold-silver\/storage/);
    assert.doesNotMatch(
      sitemapSrc,
      /\/gold-silver\/(premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)/,
    );
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver/bars-vs-coins"));
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/gold-silver/storage"));
    assert.deepEqual(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/gold-silver")),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
  });
});

describe("practice / spotting-fakes thicken (no new URLs, spoke off sitemap)", () => {
  it("thickens spotting-fakes to documentary depth", () => {
    const body = getBody("gold-silver", "spotting-fakes");
    assert.ok(body, "missing body for gold-silver/spotting-fakes");
    const text = bodyText(body);
    const words = wordCount(text);
    assert.ok(words >= 800 && words <= 1200, `spotting-fakes: expected 800–1200 words, got ${words}`);
    assert.ok(body.filter((s) => s.heading).length >= 5, "spotting-fakes: expected ≥5 headed sections");

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/$slug.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /createFileRoute\("\/gold-silver\/\$slug"\)/);
    assert.match(routeSrc, /getPractice/);
    assert.match(routeSrc, /EpisodeBody/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);
  });

  it("locks the claim: counterparty and specs — not a home lab, not a guarantee", () => {
    const text = bodyText(getBody("gold-silver", "spotting-fakes")!);
    assert.match(text, /Authenticity starts with a counterparty/);
    assert.match(text, /specs — weight and dimensions/);
    assert.match(text, /not a home laboratory/);
    assert.match(text, /not a guarantee/);
    assert.match(text, /filter for the obvious/);
    assert.match(text, /not a test manual/);
    assert.match(text, /A filter, not a laboratory/);
    assert.match(text, /Counterparty before gadgets/);
    assert.match(text, /Weight, dimensions, edge, reed, stamp/);
    assert.match(text, /warning, not a bargain/);
    assert.match(text, /When a professional is needed/);
    assert.match(text, /What a filter does not teach/);
    assert.match(text, /acid tests, X-ray fluorescence/);
    assert.match(text, /Filter, not guarantee/);
    assert.match(text, /\[Gold & Silver in Practice\]\(\/gold-silver\)/);
    assert.match(text, /\[storing gold and silver\]\(\/gold-silver\/storage\)/);
    assert.doesNotMatch(text, /Information only|These paragraphs inform|as mechanics, not as a shop/i);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);
    assert.doesNotMatch(text, SEO_HUB_META);
    assert.doesNotMatch(text, /this stop|Continue the map|spoke\b|Phase-?1|Kaufsprache|ebook/i);
    assert.doesNotMatch(text, /100%\s+of fakes|catch all fakes|you will catch/i);
    assert.doesNotMatch(text, /best dealer|vendor ranking|how to use acid|step-by-step XRF/i);
    assert.doesNotMatch(text, /\]\(\/gold-silver\/(buying-online|beginner-checklist|bars-vs-coins|premium-over-spot)\)/);
    assert.doesNotMatch(text, /\]\(\/sound-money/);
  });

  it("keeps a two-link causal ledger and leaves the spoke off the sitemap", () => {
    const page = getPractice("spotting-fakes");
    assert.ok(page, "missing spotting-fakes in map.ts");
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/gold-silver", "/gold-silver/storage"],
    );
    assert.equal(page.related.length, 2);
    assert.equal(page.slug, "spotting-fakes");
    assert.equal(page.title, "Spotting fake gold and silver (high level)");

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const fakesBlock = mapSrc.match(/slug:\s*"spotting-fakes"[\s\S]*?slug:\s*"beginner-checklist"/)?.[0];
    assert.ok(fakesBlock, "missing spotting-fakes episode block in map.ts");
    const hrefs = [...fakesBlock.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(hrefs, ["/gold-silver", "/gold-silver/storage"]);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /"\/gold-silver"/);
    assert.match(sitemapSrc, /"\/gold-silver\/bars-vs-coins"/);
    assert.doesNotMatch(sitemapSrc, /\/gold-silver\/spotting-fakes/);
    assert.doesNotMatch(
      sitemapSrc,
      /\/gold-silver\/(premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)/,
    );
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver/bars-vs-coins"));
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/gold-silver/spotting-fakes"));
    assert.deepEqual(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/gold-silver")),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
  });
});

describe("practice / beginner-checklist thicken (no new URLs, spoke off sitemap)", () => {
  it("thickens beginner-checklist to documentary depth", () => {
    const body = getBody("gold-silver", "beginner-checklist");
    assert.ok(body, "missing body for gold-silver/beginner-checklist");
    const text = bodyText(body);
    const words = wordCount(text);
    assert.ok(words >= 900 && words <= 1200, `beginner-checklist: expected 900–1200 words, got ${words}`);
    assert.ok(body.filter((s) => s.heading).length >= 5, "beginner-checklist: expected ≥5 headed sections");

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/$slug.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /createFileRoute\("\/gold-silver\/\$slug"\)/);
    assert.match(routeSrc, /getPractice/);
    assert.match(routeSrc, /EpisodeBody/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);
  });

  it("locks the claim: four decisions as a process", () => {
    const text = bodyText(getBody("gold-silver", "beginner-checklist")!);
    assert.match(text, /four decisions/);
    assert.match(text, /form, counterparty, storage location, documentation/);
    assert.match(text, /Process instead of a shop list/);
    assert.match(text, /Form and size before the price screen/);
    assert.match(text, /Premium and bid\/ask as facts, not tips/);
    assert.match(text, /Choose storage location before shipping/);
    assert.match(text, /Authenticity filters only as stop-rules/);
    assert.match(text, /What this checklist is not/);
    assert.match(text, /not a dealer ranking/);
    assert.match(text, /Four decisions/);
    assert.match(text, /\[Gold & Silver in Practice\]\(\/gold-silver\)/);
    assert.doesNotMatch(text, /Information only|These paragraphs inform|not buy or sell advice|as mechanics, not as a shop/i);
    assert.match(text, /\[gold bars vs coins\]\(\/gold-silver\/bars-vs-coins\)/);
    assert.match(text, /\[storing gold and silver\]\(\/gold-silver\/storage\)/);
    assert.match(text, /premium over spot/);
    assert.match(text, /Spotting fakes/);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);
    assert.doesNotMatch(text, SEO_HUB_META);
    assert.doesNotMatch(text, /this stop|Continue the map|spoke\b|Phase-?1|Kaufsprache|ebook/i);
    assert.doesNotMatch(text, /best dealer|vendor ranking|we recommend/i);
    assert.doesNotMatch(text, /\]\(\/gold-silver\/(buying-online|premium-over-spot|spotting-fakes)\)/);
    assert.doesNotMatch(text, /\]\(\/sound-money/);
  });

  it("keeps a two-link causal ledger and leaves the spoke off the sitemap", () => {
    const page = getPractice("beginner-checklist");
    assert.ok(page, "missing beginner-checklist in map.ts");
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/gold-silver", "/gold-silver/storage"],
    );
    assert.equal(page.related.length, 2);
    assert.equal(page.slug, "beginner-checklist");
    assert.equal(page.title, "Beginner checklist: first ounces");

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const checklistBlock = mapSrc.match(/slug:\s*"beginner-checklist"[\s\S]*?slug:\s*"buying-online"/)?.[0];
    assert.ok(checklistBlock, "missing beginner-checklist episode block in map.ts");
    const hrefs = [...checklistBlock.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(hrefs, ["/gold-silver", "/gold-silver/storage"]);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /"\/gold-silver"/);
    assert.match(sitemapSrc, /"\/gold-silver\/bars-vs-coins"/);
    assert.doesNotMatch(sitemapSrc, /\/gold-silver\/beginner-checklist/);
    assert.doesNotMatch(
      sitemapSrc,
      /\/gold-silver\/(premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)/,
    );
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver/bars-vs-coins"));
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/gold-silver/beginner-checklist"));
    assert.deepEqual(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/gold-silver")),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
  });
});

describe("practice / buying-online thicken (no new URLs, spoke off sitemap)", () => {
  it("thickens buying-online to documentary depth", () => {
    const body = getBody("gold-silver", "buying-online");
    assert.ok(body, "missing body for gold-silver/buying-online");
    const text = bodyText(body);
    const words = wordCount(text);
    assert.ok(words >= 800 && words <= 1500, `buying-online: expected 800–1500 words, got ${words}`);
    assert.ok(words >= 900 && words <= 1200, `buying-online: target 900–1200 words, got ${words}`);
    assert.ok(body.filter((s) => s.heading).length >= 5, "buying-online: expected ≥5 headed sections");

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/$slug.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /createFileRoute\("\/gold-silver\/\$slug"\)/);
    assert.match(routeSrc, /getPractice/);
    assert.match(routeSrc, /EpisodeBody/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);
  });

  it("locks the claim: logistics checklist — not a ranking, not a purchase tip", () => {
    const text = bodyText(getBody("gold-silver", "buying-online")!);
    assert.match(text, /logistics checklist/);
    assert.match(text, /not a dealer ranking/);
    assert.match(text, /not a purchase tip/);
    assert.match(text, /Logistics, not a ranking/);
    assert.match(text, /Dealer identity/);
    assert.match(text, /without relying only on their own FAQ/);
    assert.match(text, /Payment as a fact about finality/);
    assert.match(text, /does not recommend a method/);
    assert.match(text, /Shipping, insurance, and the empty box/);
    assert.match(text, /Invoice facts/);
    assert.match(text, /“We store it for you”/);
    assert.match(text, /Outlier price/);
    assert.match(text, /warning/);
    assert.match(text, /What this page is not/);
    assert.match(text, /not buy or sell advice/);
    assert.match(text, /Information only/);
    assert.match(text, /\[Gold & Silver in Practice\]\(\/gold-silver\)/);
    assert.match(text, /\[storing gold and silver\]\(\/gold-silver\/storage\)/);
    assert.match(text, /\[spotting fakes\]\(\/gold-silver\/spotting-fakes\)/);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);
    assert.doesNotMatch(text, SEO_HUB_META);
    assert.doesNotMatch(text, /this stop|Continue the map|spoke\b|Phase-?1|Kaufsprache|ebook/i);
    assert.doesNotMatch(text, /best dealer|vendor ranking|we recommend/i);
    assert.doesNotMatch(text, /\]\(\/gold-silver\/(beginner-checklist|bars-vs-coins|premium-over-spot)\)/);
    assert.doesNotMatch(text, /\]\(\/sound-money/);
  });

  it("keeps a two-link causal ledger and leaves the spoke off the sitemap", () => {
    const page = getPractice("buying-online");
    assert.ok(page, "missing buying-online in map.ts");
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/gold-silver", "/gold-silver/storage"],
    );
    assert.equal(page.related.length, 2);
    assert.equal(page.slug, "buying-online");
    assert.equal(page.title, "Buying gold and silver online");

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const buyingBlock = mapSrc.match(/slug:\s*"buying-online"[\s\S]*?\n  \},\n\];/)?.[0];
    assert.ok(buyingBlock, "missing buying-online episode block in map.ts");
    const hrefs = [...buyingBlock.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(hrefs, ["/gold-silver", "/gold-silver/storage"]);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /"\/gold-silver"/);
    assert.match(sitemapSrc, /"\/gold-silver\/bars-vs-coins"/);
    assert.doesNotMatch(sitemapSrc, /\/gold-silver\/buying-online/);
    assert.doesNotMatch(
      sitemapSrc,
      /\/gold-silver\/(premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)/,
    );
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/gold-silver/bars-vs-coins"));
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/gold-silver/buying-online"));
    assert.deepEqual(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/gold-silver")),
      ["/gold-silver", "/gold-silver/bars-vs-coins"],
    );
  });
});
