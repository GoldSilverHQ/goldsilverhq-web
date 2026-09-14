import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getBody, practiceHubBody } from "./bodies.ts";
import { practiceHub } from "./map.ts";
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

const BAFIN_FORBIDDEN =
  /ebook|LemonSqueezy|buy gold now|buy silver now|Kauf|should buy|you should buy|price target|best dealer|we recommend buying|load up on/i;

const SEO_HUB_META =
  /\b(this pillar|Continue the map|Phase-?1|Phase 3|Flavio|sitemap expansion|BaFin-clean|long-tail first|no spaghetti)\b/i;

describe("practice / gold-silver hub thicken (no new URLs, off-sitemap)", () => {
  it("thickens only the hub to documentary depth and leaves the six notes thin", () => {
    const text = bodyText(practiceHubBody);
    const words = wordCount(text);
    assert.ok(words >= 800 && words <= 1500, `hub: expected 800–1500 words, got ${words}`);
    assert.ok(words >= 900 && words <= 1300, `hub: target 900–1300 words, got ${words}`);

    for (const slug of PRACTICE_EPISODES) {
      const body = getBody("gold-silver", slug);
      assert.ok(body, `missing body for gold-silver/${slug}`);
      const spokeWords = wordCount(bodyText(body));
      assert.ok(spokeWords < 500, `${slug} should stay thin today, got ${spokeWords}`);
    }
  });

  it("locks the claim: handling menu, not a shop, jobs kept apart", () => {
    const text = bodyText(practiceHubBody);
    assert.match(text, /not a shop/i);
    assert.match(text, /not a recommendation/i);
    assert.match(text, /form, premium, storage, authenticity/i);
    assert.match(text, /first ounces/i);
    assert.match(text, /\[Sound Money\]\(\/sound-money\)/);
    assert.match(text, /\[why markets chose gold and silver\]\(\/history\/ancient\/why-markets-chose-gold-silver\)/);
    assert.match(text, /\[Sound Money History\]\(\/history\)/);
    assert.match(text, /\[Markets\]\(\/markets\)/);
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

  it("keeps a two-link causal ledger and stays off the sitemap", () => {
    assert.deepEqual(
      practiceHub.related.map((r) => r.href),
      ["/sound-money", "/history/ancient/why-markets-chose-gold-silver"],
    );
    assert.equal(practiceHub.related.length, 2);

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /practiceHub/);
    assert.match(mapSrc, /titleTag:\s*"Gold & Silver in Practice: Handling, Not a Shop"/);

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/index.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /practiceHubBody/);
    assert.match(routeSrc, /ArticleSections/);
    assert.match(routeSrc, /Gold & Silver in Practice/);
    assert.match(routeSrc, /to="\/gold-silver\/\$slug"/);
    assert.doesNotMatch(routeSrc, /createFileRoute\("\/gold-silver\/[\w-]+\/"/);

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.doesNotMatch(sitemapSrc, /\/gold-silver(?:\/|"|,|\s)/);
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.startsWith("/gold-silver")));
  });
});
