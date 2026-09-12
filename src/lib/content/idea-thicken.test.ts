import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getBody, soundMoneyHubBody } from "./bodies.ts";
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

const IDEA_EPISODES = [
  "backed-money",
  "hard-money-vs-fiat",
  "inflation-purchasing-power",
  "what-is-sound-money",
] as const;

describe("idea / sound-money thicken (no new URLs)", () => {
  it("thickens the four definition pages to Phase-1 depth", () => {
    for (const slug of IDEA_EPISODES) {
      const body = getBody("sound-money", slug);
      assert.ok(body, `missing body for sound-money/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1200, `${slug}: expected 900–1200 words, got ${words}`);
      assert.ok(body.filter((s) => s.heading).length >= 6, `${slug}: expected ≥6 headed sections`);
      assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf|should buy|price target to/i);
    }

    assert.ok(PHASE1_SITEMAP_PATHS.includes("/sound-money"));
    for (const slug of IDEA_EPISODES) {
      assert.ok(
        PHASE1_SITEMAP_PATHS.includes(`/sound-money/${slug}` as (typeof PHASE1_SITEMAP_PATHS)[number]),
        `expected /sound-money/${slug} in sitemap`,
      );
    }
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("information-not-advice")));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path === "/gold-silver" || path.startsWith("/gold-silver/")));
  });

  it("locks backed-money as contract vs slogan (Flavio long-tail first)", () => {
    const text = bodyText(getBody("sound-money", "backed-money")!);
    assert.match(text, /redeemab/i);
    assert.match(text, /slogan/i);
    assert.match(text, /\$35/);
    assert.match(text, /\[1933 U\.S\. gold recall\]\(\/history\/20th-century\/1933-gold-recall\)/);
    assert.match(text, /\[Bretton Woods\]\(\/history\/20th-century\/bretton-woods-nixon-1971\)/);
    assert.match(text, /\[Sound Money\]\(\/sound-money\)/);
  });

  it("locks hard-money vs fiat as costly production vs law-and-habit", () => {
    const text = bodyText(getBody("sound-money", "hard-money-vs-fiat")!);
    assert.match(text, /costly to produce/i);
    assert.match(text, /\*fiat\*/);
    assert.match(text, /\[1914\]\(\/history\/20th-century\/classical-gold-standard-end\)/);
    assert.match(text, /\[1971\]\(\/history\/20th-century\/bretton-woods-nixon-1971\)/);
    assert.match(text, /\[greenbacks and the Civil War\]\(\/history\/america\/greenbacks-civil-war\)/);
  });

  it("locks inflation as purchasing-power with hyperinflation as a case", () => {
    const text = bodyText(getBody("sound-money", "inflation-purchasing-power")!);
    assert.match(text, /purchasing power/i);
    assert.match(text, /50% or more in a month/);
    assert.match(text, /\[Weimar 1923\]\(\/history\/20th-century\/weimar-1923\)/);
    assert.match(text, /Hyperinflation is a case/i);
    assert.doesNotMatch(text, /next year’s CPI will|buy silver now/i);
  });

  it("locks what-is-sound-money as issuer-discretion entry", () => {
    const text = bodyText(getBody("sound-money", "what-is-sound-money")!);
    assert.match(text, /cannot be expanded at will/i);
    assert.match(text, /issuer/i);
    assert.match(text, /\[hard money versus fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.match(text, /\[Sound Money History\]\(\/history\)/);
    assert.doesNotMatch(text, /Federal Reserve Act of 1719/);
  });

  it("wires a thickened Sound Money hub without new routes", () => {
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /soundMoneyHub/);
    assert.match(mapSrc, /titleTag:\s*"Sound Money: Definitions, Not History"/);
    assert.doesNotMatch(mapSrc, /slug:\s*"sound-money-[\w-]+"/);

    const routeSrc = readFileSync(new URL("../../routes/sound-money/index.tsx", import.meta.url), "utf8");
    assert.match(routeSrc, /soundMoneyHubBody/);
    assert.match(routeSrc, /ArticleSections/);

    const text = bodyText(soundMoneyHubBody);
    const words = wordCount(text);
    assert.ok(words >= 550 && words <= 1200, `hub: expected 550–1200 words, got ${words}`);
    assert.match(text, /\[What is sound money\?\]\(\/sound-money\/what-is-sound-money\)/);
    assert.match(text, /\[Hard money vs fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.match(text, /\[Inflation and purchasing power\]\(\/sound-money\/inflation-purchasing-power\)/);
    assert.match(text, /\[What “backed” means\]\(\/sound-money\/backed-money\)/);
    assert.match(text, /Do not park Weimar or Nixon on this hub/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);

    for (const slug of IDEA_EPISODES) {
      assert.match(text, new RegExp(`/sound-money/${slug}`));
    }
  });

  it("keeps information-not-advice short (disclaimer, not Phase-1 essay)", () => {
    const body = getBody("sound-money", "information-not-advice");
    assert.equal(body, null);
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /slug:\s*"information-not-advice"/);
    assert.match(mapSrc, /BaFin-clean/);
  });
});
