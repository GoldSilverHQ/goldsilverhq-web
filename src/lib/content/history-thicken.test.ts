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
