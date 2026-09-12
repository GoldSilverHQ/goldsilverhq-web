import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getBody, practiceHubBody } from "./bodies.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

function bodyText(sections: NonNullable<ReturnType<typeof getBody>>) {
  return sections
    .flatMap((s) => [s.heading, ...(s.callout?.paragraphs ?? []), ...s.paragraphs, ...(s.list ?? [])])
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
  /ebook|LemonSqueezy|buy gold now|buy silver now|Kauf|should buy|price target|best dealer|we recommend buying|load up on/i;

describe("practice / gold-silver thicken (no new URLs, off-sitemap)", () => {
  it("thickens the six practice pages to Phase-1 depth", () => {
    for (const slug of PRACTICE_EPISODES) {
      const body = getBody("gold-silver", slug);
      assert.ok(body, `missing body for gold-silver/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1200, `${slug}: expected 900–1200 words, got ${words}`);
      assert.ok(body.filter((s) => s.heading).length >= 6, `${slug}: expected ≥6 headed sections`);
      assert.doesNotMatch(text, BAFIN_FORBIDDEN);
      assert.match(text, /information versus advice|Information versus advice/);
    }

    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/gold-silver"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.startsWith("/gold-silver")));
  });

  it("locks bars-vs-coins as fabrication trade-off (Flavio long-tail first)", () => {
    const text = bodyText(getBody("gold-silver", "bars-vs-coins")!);
    assert.match(text, /fabrication/i);
    assert.match(text, /collectible/i);
    assert.match(text, /\[premium over spot\]\(\/gold-silver\/premium-over-spot\)/);
    assert.match(text, /\[gold and silver in practice\]\(\/gold-silver\)/);
  });

  it("locks premium as bid–ask friction, not purity", () => {
    const text = bodyText(getBody("gold-silver", "premium-over-spot")!);
    assert.match(text, /bid/i);
    assert.match(text, /not a purity score/i);
    assert.match(text, /\[bars versus coins\]\(\/gold-silver\/bars-vs-coins\)/);
    assert.doesNotMatch(text, /fair premium is|you should pay/i);
  });

  it("locks storage as menu of access–cost–counterparty", () => {
    const text = bodyText(getBody("gold-silver", "storage")!);
    assert.match(text, /allocated/i);
    assert.match(text, /unallocated/i);
    assert.match(text, /does not pick/i);
    assert.match(text, /\[buying online\]\(\/gold-silver\/buying-online\)/);
  });

  it("locks spotting-fakes as high-level filter only", () => {
    const text = bodyText(getBody("gold-silver", "spotting-fakes")!);
    assert.match(text, /not a testing manual/i);
    assert.match(text, /counterparty/i);
    assert.match(text, /professional/i);
    assert.doesNotMatch(text, /here is how to run acid|buy this XRF/i);
  });

  it("locks beginner-checklist as decision index with high disclaimer density", () => {
    const text = bodyText(getBody("gold-silver", "beginner-checklist")!);
    assert.match(text, /named decisions/i);
    assert.match(text, /not a recommendation/i);
    assert.match(text, /\[bars versus coins\]\(\/gold-silver\/bars-vs-coins\)/);
    assert.match(text, /\[storage\]\(\/gold-silver\/storage\)/);
    assert.doesNotMatch(text, /we recommend buying|you should buy/i);
  });

  it("locks buying-online as watch-fors without vendor ranking", () => {
    const text = bodyText(getBody("gold-silver", "buying-online")!);
    assert.match(text, /does not rank vendors/i);
    assert.match(text, /invoice/i);
    assert.match(text, /\[storage\]\(\/gold-silver\/storage\)/);
    assert.match(text, /\[spotting fakes\]\(\/gold-silver\/spotting-fakes\)/);
  });

  it("wires a thickened Practice hub without sitemap expansion", () => {
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /practiceHub/);
    assert.match(mapSrc, /titleTag:\s*"Gold & Silver in Practice: Handling, Not Tips"/);
    assert.match(mapSrc, /export const practicePages/);
    assert.equal([...mapSrc.matchAll(/slug:\s*"(bars-vs-coins|premium-over-spot|storage|spotting-fakes|beginner-checklist|buying-online)"/g)].length, 6);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.startsWith("/gold-silver")));

    const routeSrc = readFileSync(new URL("../../routes/gold-silver/index.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /practiceHubBody/);
    assert.match(routeSrc, /ArticleSections/);

    const text = bodyText(practiceHubBody);
    const words = wordCount(text);
    assert.ok(words >= 550 && words <= 1200, `hub: expected 550–1200 words, got ${words}`);
    assert.match(text, /\[Gold bars vs coins\]\(\/gold-silver\/bars-vs-coins\)/);
    assert.match(text, /\[Premium over spot\]\(\/gold-silver\/premium-over-spot\)/);
    assert.match(text, /\[Storing gold and silver\]\(\/gold-silver\/storage\)/);
    assert.match(text, /\[Spotting fakes\]\(\/gold-silver\/spotting-fakes\)/);
    assert.match(text, /\[Beginner checklist\]\(\/gold-silver\/beginner-checklist\)/);
    assert.match(text, /\[Buying online\]\(\/gold-silver\/buying-online\)/);
    assert.match(text, /BaFin-clean/);
    assert.match(text, /sitemap expansion/i);
    assert.doesNotMatch(text, BAFIN_FORBIDDEN);

    for (const slug of PRACTICE_EPISODES) {
      assert.match(text, new RegExp(`/gold-silver/${slug}`));
    }
  });
});
