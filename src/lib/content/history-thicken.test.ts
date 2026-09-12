import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { americaHubBody, getBody } from "./bodies.ts";
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

const AMERICA_EPISODES = [
  "crime-of-1873",
  "jackson-and-the-bank",
  "greenbacks-civil-war",
  "early-us-coinage",
  "road-back-gold",
] as const;

describe("ancient why-markets thicken (no new URLs)", () => {
  it("thickens the existing episode and locks a two-stop ledger", () => {
    const text = bodyText(getBody("ancient", "why-markets-chose-gold-silver")!);
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

const ANCIENT_REST_EPISODES = [
  "rome-denarius-aureus",
  "lydia-first-coins",
  "greece-silver-trade",
  "solidus-continuity",
] as const;

describe("ancient rest thicken Wave B (no new URLs)", () => {
  it("thickens the four remaining episodes to Phase-1 depth without sitemap expansion", () => {
    for (const slug of ANCIENT_REST_EPISODES) {
      const body = getBody("ancient", slug);
      assert.ok(body, `missing body for ancient/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1200, `${slug}: expected 900–1200 words, got ${words}`);
      assert.ok(body.filter((s) => s.heading).length >= 6, `${slug}: expected ≥6 headed sections`);
      assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf|should buy|price target to/i);
    }

    assert.ok(
      !PHASE1_SITEMAP_PATHS.some(
        (path) =>
          path.includes("lydia-first-coins") ||
          path.includes("greece-silver-trade") ||
          path.includes("rome-denarius") ||
          path.includes("solidus-continuity"),
      ),
    );
  });

  it("locks Lydia as stamp-not-metal invention", () => {
    const text = bodyText(getBody("ancient", "lydia-first-coins")!);
    assert.match(text, /electrum/i);
    assert.match(text, /Croesus/);
    assert.match(text, /stamp/i);
    assert.match(text, /western Anatolia/);
    assert.match(text, /\[why markets chose gold and silver\]\(\/history\/ancient\/why-markets-chose-gold-silver\)/);
    assert.match(text, /\[Greece: silver and trade\]\(\/history\/ancient\/greece-silver-trade\)/);
    assert.doesNotMatch(text, /Nixon announces|15 August 1971/);
  });

  it("locks Greece as Laurion–owl silver network", () => {
    const text = bodyText(getBody("ancient", "greece-silver-trade")!);
    assert.match(text, /Laurion/);
    assert.match(text, /tetradrachm|owl/i);
    assert.match(text, /Aegean/);
    assert.match(text, /\[Lydia and the first coins\]\(\/history\/ancient\/lydia-first-coins\)/);
    assert.match(text, /\[Rome: denarius/);
    assert.match(text, /\[Potosí\]\(\/history\/silver\/potosi\)/);
  });

  it("locks Rome as fiscal debasement of silver", () => {
    const text = bodyText(getBody("ancient", "rome-denarius-aureus")!);
    assert.match(text, /denarius/i);
    assert.match(text, /aureus/i);
    assert.match(text, /antoninianus/i);
    assert.match(text, /third-century|3rd century/i);
    assert.match(text, /\[Greece: silver and trade\]\(\/history\/ancient\/greece-silver-trade\)/);
    assert.match(text, /\[.*solidus.*\]\(\/history\/ancient\/solidus-continuity\)/);
    assert.match(text, /\[early U\.S\. coinage\]\(\/history\/america\/early-us-coinage\)/);
    assert.doesNotMatch(text, /Nixon announces|15 August 1971/);
  });

  it("locks solidus as weight continuity, not paper or 1971", () => {
    const text = bodyText(getBody("ancient", "solidus-continuity")!);
    assert.match(text, /Constantine/);
    assert.match(text, /solidus/i);
    assert.match(text, /nomisma/i);
    assert.match(text, /1\/72|4\.5 grams/);
    assert.match(text, /\[Rome: denarius and aureus\]\(\/history\/ancient\/rome-denarius-aureus\)/);
    assert.match(text, /\[warehouses to public banks\]\(\/history\/banks-paper\/warehouses-to-public-banks\)/);
    assert.match(text, /\[ancient money\]\(\/history\/ancient\)/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|should buy/i);
  });

  it("wires SEO titleTags for the four rest episodes without new routes", () => {
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /titleTag:\s*"Lydia and the First Coins/);
    assert.match(mapSrc, /titleTag:\s*"Greece: Laurion Silver/);
    assert.match(mapSrc, /titleTag:\s*"Rome: Denarius, Aureus/);
    assert.match(mapSrc, /titleTag:\s*"The Solidus: Gold Weight Continuity/);
    assert.doesNotMatch(mapSrc, /slug:\s*"ancient-[\w-]+"/);
  });
});

describe("america cluster thicken (no new URLs)", () => {
  it("thickens all five episodes to Phase-1 depth without sitemap expansion", () => {
    for (const slug of AMERICA_EPISODES) {
      const body = getBody("america", slug);
      assert.ok(body, `missing body for america/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1200, `${slug}: expected 900–1200 words, got ${words}`);
      assert.ok(body.filter((s) => s.heading).length >= 6, `${slug}: expected ≥6 headed sections`);
      assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf|should buy|price target to/i);
    }

    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("/america")));
  });

  it("locks Crime of 1873 as the silver-question hinge", () => {
    const text = bodyText(getBody("america", "crime-of-1873")!);
    assert.match(text, /Coinage Act of \*\*1873\*\*/);
    assert.match(text, /Crime of 1873/);
    assert.match(text, /free silver/i);
    assert.match(text, /sixteen to one|16:1/);
    assert.match(text, /Bryan/);
    assert.match(text, /\[bimetallism\]\(\/history\/silver\/bimetallism\)/);
    assert.match(text, /\[America & gold\/silver politics\]\(\/history\/america\)/);
  });

  it("locks Jackson as pre-Fed bank war", () => {
    const text = bodyText(getBody("america", "jackson-and-the-bank")!);
    assert.match(text, /Second Bank/);
    assert.match(text, /1832/);
    assert.match(text, /pet banks/i);
    assert.match(text, /Specie Circular/);
    assert.match(text, /Panic of \*\*1837\*\*|Panic of 1837/);
    assert.match(text, /\[Panic of 1907\]\(\/history\/20th-century\/panic-1907-fed\)/);
    assert.doesNotMatch(text, /Federal Reserve Act of 1832/);
  });

  it("locks greenbacks as war paper then resumption", () => {
    const text = bodyText(getBody("america", "greenbacks-civil-war")!);
    assert.match(text, /Legal Tender Act/);
    assert.match(text, /greenbacks/i);
    assert.match(text, /gold premium/i);
    assert.match(text, /Resumption Act|Specie Payment Resumption/);
    assert.match(text, /1 January 1879/);
    assert.match(text, /\/sound-money\/inflation-purchasing-power/);
  });

  it("locks early U.S. coinage mint-ratio arithmetic", () => {
    const text = bodyText(getBody("america", "early-us-coinage")!);
    assert.match(text, /Coinage Act of \*\*1792\*\*/);
    assert.match(text, /fifteen to one|15:1/);
    assert.match(text, /371\.25 grains/);
    assert.match(text, /1834/);
    assert.match(text, /Gresham/);
    assert.match(text, /\[piece of eight\]\(\/history\/silver\/piece-of-eight\)/);
  });

  it("locks road-back-gold as handoff to 1907", () => {
    const text = bodyText(getBody("america", "road-back-gold")!);
    assert.match(text, /1 January 1879|1879/);
    assert.match(text, /Gold Standard Act/);
    assert.match(text, /1900/);
    assert.match(text, /25\.8 grains/);
    assert.match(text, /\[Panic of 1907\]\(\/history\/20th-century\/panic-1907-fed\)/);
    assert.doesNotMatch(text, /Nixon announces|15 August 1971/);
  });

  it("wires a thickened America hub without new routes", () => {
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /americaHubBody/);
    assert.match(mapSrc, /sections:\s*americaHubBody/);
    assert.match(mapSrc, /titleTag:\s*"America & Gold\/Silver Politics: 1792 to 1900"/);
    assert.doesNotMatch(mapSrc, /slug:\s*"america-[\w-]+"/);

    const text = bodyText(americaHubBody);
    const words = wordCount(text);
    assert.ok(words >= 750 && words <= 1200, `hub: expected 750–1200 words, got ${words}`);
    assert.match(text, /1792/);
    assert.match(text, /1900/);
    assert.match(text, /\[Crime of 1873\]\(\/history\/america\/crime-of-1873\)/);
    assert.match(text, /\[Panic of 1907\]\(\/history\/20th-century\/panic-1907-fed\)/);
    assert.match(text, /Do not mash 1832, 1862, and 1913/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);

    for (const slug of AMERICA_EPISODES) {
      assert.match(text, new RegExp(`/history/america/${slug}`));
    }
  });
});
