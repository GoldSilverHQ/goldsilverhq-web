import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { americaHubBody, banksPaperHubBody, getBody, silverHubBody } from "./bodies.ts";
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

const AMERICA_EPISODES = [
  "crime-of-1873",
  "jackson-and-the-bank",
  "greenbacks-civil-war",
  "early-us-coinage",
  "road-back-gold",
] as const;

describe("ancient why-markets polish (no new URLs)", () => {
  it("keeps the existing episode in the reader band and locks a two-stop ledger", () => {
    const body = getBody("ancient", "why-markets-chose-gold-silver");
    assert.ok(body, "missing body for ancient/why-markets-chose-gold-silver");
    const text = bodyText(body);
    const words = wordCount(text);
    assert.ok(words >= 1000 && words <= 1300, `expected 1000–1300 words, got ${words}`);

    assert.match(text, /Durability/);
    assert.match(text, /Divisibility/);
    assert.match(text, /Homogeneity/);
    assert.match(text, /Scarcity/);
    assert.match(text, /Recognizability/);
    assert.match(text, /Portability/);
    assert.match(text, /metal came first/i);
    assert.match(text, /stamp came second/i);
    assert.match(text, /1971/);
    assert.match(text, /warehouse receipt/i);
    assert.match(text, /\[ancient money\]\(\/history\/ancient\)/i);
    assert.match(text, /\[Lydia and the first coins\]\(\/history\/ancient\/lydia-first-coins\)/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);
    assert.doesNotMatch(
      text,
      /Why this stop matters|continue the map|this page is|episode index|ancient money hub|Phase-1|spoke\b/i,
    );

    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const whyBlock = mapSrc.match(
      /slug:\s*"why-markets-chose-gold-silver"[\s\S]*?slug:\s*"lydia-first-coins"/,
    )?.[0];
    assert.ok(whyBlock, "missing why-markets episode block in map.ts");
    const hrefs = [...whyBlock.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(hrefs, ["/history/ancient", "/history/ancient/lydia-first-coins"]);

    assert.ok(
      PHASE1_SITEMAP_PATHS.includes("/history/ancient/why-markets-chose-gold-silver"),
      "expected why-markets to stay on the sitemap",
    );
    assert.equal(
      PHASE1_SITEMAP_PATHS.filter((path) => path.startsWith("/history/ancient")).length,
      6,
      "ancient sitemap set must stay parent + five episodes",
    );
  });
});

const ANCIENT_REST_EPISODES = [
  "rome-denarius-aureus",
  "lydia-first-coins",
  "greece-silver-trade",
  "solidus-continuity",
] as const;

describe("ancient rest thicken Wave B (no new URLs)", () => {
  it("thickens the four remaining episodes to Phase-1 depth", () => {
    for (const slug of ANCIENT_REST_EPISODES) {
      const body = getBody("ancient", slug);
      assert.ok(body, `missing body for ancient/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1300, `${slug}: expected 900–1300 words, got ${words}`);
      assert.ok(body.filter((s) => s.heading).length >= 6, `${slug}: expected ≥6 headed sections`);
      assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf|should buy|price target to/i);
    }

    for (const slug of ANCIENT_REST_EPISODES) {
      assert.ok(
        PHASE1_SITEMAP_PATHS.includes(`/history/ancient/${slug}` as (typeof PHASE1_SITEMAP_PATHS)[number]),
        `expected /history/ancient/${slug} in sitemap`,
      );
    }
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
    assert.match(text, /Nero/);
    assert.match(text, /third[- ]century|3rd century/i);
    assert.doesNotMatch(text, /\[[^\]]+\]\([^)]+\)/);
    assert.doesNotMatch(text, /If you arrived|start here|What this is not/i);
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
  it("thickens all five episodes to Phase-1 depth", () => {
    for (const slug of AMERICA_EPISODES) {
      const body = getBody("america", slug);
      assert.ok(body, `missing body for america/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1200, `${slug}: expected 900–1200 words, got ${words}`);
      assert.ok(body.filter((s) => s.heading).length >= 6, `${slug}: expected ≥6 headed sections`);
      assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf|should buy|price target to/i);
    }

    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/america"));
    for (const slug of AMERICA_EPISODES) {
      assert.ok(
        PHASE1_SITEMAP_PATHS.includes(`/history/america/${slug}` as (typeof PHASE1_SITEMAP_PATHS)[number]),
        `expected /history/america/${slug} in sitemap`,
      );
    }
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
    const body = getBody("america", "road-back-gold")!;
    const text = bodyText(body);
    assert.match(text, /1 January 1879|1879/);
    assert.match(text, /Gold Standard Act/);
    assert.match(text, /1900/);
    assert.match(text, /25\.8 grains/);
    assert.match(text, /Panic of \*\*1907\*\*|Panic of 1907/);
    assert.doesNotMatch(text, /\[[^\]]+\]\([^)]+\)/);
    assert.doesNotMatch(text, /If you arrived|start here|What this is not/i);
    assert.doesNotMatch(text, /Nixon announces|15 August 1971/);

    const act = body.find((s) => /Sound Money Law|Gold Standard Act/i.test(s.heading));
    assert.ok(act?.figure, "expected mid-article 1900 cartoon figure after the Act section");
    assert.match(act!.figure!.src, /road-back-gold-1900-cartoon\.jpg$/);
    assert.match(act!.figure!.caption, /Survival of the Fittest/);
    assert.match(act!.figure!.credit ?? "", /Keppler & Schwarzmann/);
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
    assert.match(text, /Three fights, three centuries/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);

    for (const slug of AMERICA_EPISODES) {
      assert.match(text, new RegExp(`/history/america/${slug}`));
    }
  });
});

const SILVER_EPISODES = [
  "piece-of-eight",
  "silver-thursday",
  "bimetallism",
  "potosi",
  "monetary-and-industry",
] as const;

describe("silver cluster thicken Wave C (no new URLs)", () => {
  it("thickens all five episodes to Phase-1 depth", () => {
    for (const slug of SILVER_EPISODES) {
      const body = getBody("silver", slug);
      assert.ok(body, `missing body for silver/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1300, `${slug}: expected 900–1300 words, got ${words}`);
      assert.ok(body.filter((s) => s.heading).length >= 6, `${slug}: expected ≥6 headed sections`);
      assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf|should buy|price target to/i);
    }

    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/silver"));
    for (const slug of SILVER_EPISODES) {
      assert.ok(
        PHASE1_SITEMAP_PATHS.includes(`/history/silver/${slug}` as (typeof PHASE1_SITEMAP_PATHS)[number]),
        `expected /history/silver/${slug} in sitemap`,
      );
    }
  });

  it("locks piece of eight as global Spanish dollar", () => {
    const text = bodyText(getBody("silver", "piece-of-eight")!);
    assert.match(text, /piece of eight|eight-real|Spanish dollar/i);
    assert.match(text, /27 grams|twenty-seven grams/);
    assert.match(text, /Manila galleon/);
    assert.match(text, /\[Potosí\]\(\/history\/silver\/potosi\)/);
    assert.match(text, /\[early U\.S\. coinage\]\(\/history\/america\/early-us-coinage\)/);
    assert.match(text, /\[silver in history\]\(\/history\/silver\)/);
  });

  it("locks Silver Thursday as 1980 rule-change break", () => {
    const text = bodyText(getBody("silver", "silver-thursday")!);
    assert.match(text, /27 March 1980/);
    assert.match(text, /Hunt/);
    assert.match(text, /\$49\.45|\$50/);
    assert.match(text, /COMEX|margin/i);
    assert.match(text, /\[information versus advice\]\(\/sound-money\/information-not-advice\)/);
    assert.match(text, /\[bimetallism\]\(\/history\/silver\/bimetallism\)/);
    assert.doesNotMatch(text, /should buy|price target to/i);
  });

  it("locks bimetallism as mint-ratio mechanics", () => {
    const text = bodyText(getBody("silver", "bimetallism")!);
    assert.match(text, /mint ratio/i);
    assert.match(text, /market ratio/i);
    assert.match(text, /Gresham/);
    assert.match(text, /fifteen to one|15:1|15 to 1/);
    assert.match(text, /Latin Monetary Union/);
    assert.match(text, /\[Crime of 1873\]\(\/history\/america\/crime-of-1873\)/);
    assert.match(text, /\[gold–silver ratio\]\(\/markets\/gold-silver-ratio\)/);
  });

  it("locks Potosí as global silver flow", () => {
    const text = bodyText(getBody("silver", "potosi")!);
    assert.match(text, /Cerro Rico|Potosí/);
    assert.match(text, /1540s/);
    assert.match(text, /Manila galleon/);
    assert.match(text, /\[piece of eight\]\(\/history\/silver\/piece-of-eight\)/);
    assert.match(text, /\[Greece: silver and trade\]\(\/history\/ancient\/greece-silver-trade\)/);
    assert.doesNotMatch(text, /\]\(\/maps\)/);
  });

  it("locks monetary-and-industry as dual-role split", () => {
    const text = bodyText(getBody("silver", "monetary-and-industry")!);
    assert.match(text, /photography/i);
    assert.match(text, /photovoltaic/i);
    assert.match(text, /electronics/i);
    assert.match(text, /monetary/i);
    assert.match(text, /\[physical silver demand by country\]\(\/markets\/physical-silver-demand-by-country\)/);
    assert.match(text, /\[Silver Thursday\]\(\/history\/silver\/silver-thursday\)/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|should buy/i);
  });

  it("wires a thickened Silver hub without new routes", () => {
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    assert.match(mapSrc, /silverHubBody/);
    assert.match(mapSrc, /sections:\s*silverHubBody/);
    assert.match(mapSrc, /titleTag:\s*"Silver in History: Potosí to 1980 and Industry"/);
    assert.match(mapSrc, /titleTag:\s*"Piece of Eight: The Spanish Dollar as Global Silver"/);
    assert.match(mapSrc, /titleTag:\s*"Silver Thursday 1980: Hunt Squeeze and the Break"/);
    assert.match(mapSrc, /titleTag:\s*"Bimetallism: Mint Ratio vs Market Ratio"/);
    assert.match(mapSrc, /titleTag:\s*"Potosí: The Silver Mountain and Global Flow"/);
    assert.match(mapSrc, /titleTag:\s*"Silver: Monetary Memory and Industrial Demand"/);
    assert.doesNotMatch(mapSrc, /slug:\s*"silver-(?!thursday")[\w-]+"/);

    const text = bodyText(silverHubBody);
    const words = wordCount(text);
    assert.ok(words >= 750 && words <= 1200, `hub: expected 750–1200 words, got ${words}`);
    assert.match(text, /Potosí|piece of eight|bimetallism|Silver Thursday/i);
    assert.match(text, /Three silver stories, three hinges/);
    assert.match(text, /\[Crime of 1873\]\(\/history\/america\/crime-of-1873\)/);
    assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);

    for (const slug of SILVER_EPISODES) {
      assert.match(text, new RegExp(`/history/silver/${slug}`));
    }
  });
});

const STOP_HUB_VOICE =
  /Why this stop matters|this page sits|This hub is that sequence|History['’]s job on this stop|\bthis stop\b/i;

const POLISH_PAGES = [
  ["ancient", "lydia-first-coins"],
  ["ancient", "greece-silver-trade"],
  ["ancient", "rome-denarius-aureus"],
  ["ancient", "solidus-continuity"],
  ["banks-paper", "assignats"],
  ["silver", "monetary-and-industry"],
] as const;

describe("reader polish: documentary takeaways (no new URLs)", () => {
  it("rewrites the seven remaining meta pages without stop/hub briefing voice", () => {
    for (const [cluster, slug] of POLISH_PAGES) {
      const body = getBody(cluster, slug);
      assert.ok(body, `missing body for ${cluster}/${slug}`);
      const text = bodyText(body);
      const words = wordCount(text);
      assert.ok(words >= 900 && words <= 1300, `${slug}: expected 900–1300 words, got ${words}`);
      assert.doesNotMatch(text, STOP_HUB_VOICE, `${cluster}/${slug} still has stop/hub briefing voice`);
      assert.doesNotMatch(text, /ebook|LemonSqueezy|buy gold|buy silver|Kauf|should buy/i);
      assert.ok(
        PHASE1_SITEMAP_PATHS.includes(`/history/${cluster}/${slug}` as (typeof PHASE1_SITEMAP_PATHS)[number]),
        `expected /history/${cluster}/${slug} to stay on the sitemap`,
      );
    }

    const hub = bodyText(banksPaperHubBody);
    assert.doesNotMatch(hub, STOP_HUB_VOICE, "banks-paper hub still has stop/hub briefing voice");
    assert.match(hub, /Convertibility is the test/);
    assert.match(hub, /\[assignats\]\(\/history\/banks-paper\/assignats\)/);
    assert.doesNotMatch(hub, /ebook|LemonSqueezy|buy gold|buy silver|Kauf/i);
  });

  it("keeps ledger links on the polished pages", () => {
    const lydia = bodyText(getBody("ancient", "lydia-first-coins")!);
    assert.match(lydia, /\[ancient money\]\(\/history\/ancient\)/);
    assert.match(lydia, /\[why markets chose gold and silver\]\(\/history\/ancient\/why-markets-chose-gold-silver\)/);
    assert.match(lydia, /\[Greece: silver and trade\]\(\/history\/ancient\/greece-silver-trade\)/);

    const greece = bodyText(getBody("ancient", "greece-silver-trade")!);
    assert.match(greece, /\[Lydia and the first coins\]\(\/history\/ancient\/lydia-first-coins\)/);
    assert.match(greece, /\[Rome: denarius/);
    assert.match(greece, /\[Potosí\]\(\/history\/silver\/potosi\)/);

    const rome = bodyText(getBody("ancient", "rome-denarius-aureus")!);
    assert.match(rome, /denarius/i);
    assert.match(rome, /aureus/i);
    assert.match(rome, /bronze underneath|bronze cores/i);
    assert.doesNotMatch(rome, /\[[^\]]+\]\([^)]+\)/);

    const solidus = bodyText(getBody("ancient", "solidus-continuity")!);
    assert.match(solidus, /\[Rome: denarius and aureus\]\(\/history\/ancient\/rome-denarius-aureus\)/);
    assert.match(solidus, /\[banks and paper\]\(\/history\/banks-paper\)/);
    assert.match(solidus, /\[Sound Money History\]\(\/history\)/);

    const assignats = bodyText(getBody("banks-paper", "assignats")!);
    assert.match(assignats, /\[John Law and the Mississippi Bubble\]\(\/history\/banks-paper\/john-law\)/);
    assert.match(assignats, /\[Bank of England\]\(\/history\/banks-paper\/bank-of-england\)/);
    assert.match(assignats, /\[banks and paper\]\(\/history\/banks-paper\)/);

    const industry = bodyText(getBody("silver", "monetary-and-industry")!);
    assert.match(industry, /\[physical silver demand by country\]\(\/markets\/physical-silver-demand-by-country\)/);
    assert.match(industry, /\[Silver Thursday\]\(\/history\/silver\/silver-thursday\)/);
    assert.match(industry, /\[silver in history\]\(\/history\/silver\)/i);
  });
});

describe("maps stub (go-live: hide until real content)", () => {
  it("keeps /maps off the sitemap and out of primary nav and Explore cards", () => {
    assert.ok(!PHASE1_SITEMAP_PATHS.includes("/maps" as (typeof PHASE1_SITEMAP_PATHS)[number]));
    assert.equal(
      PHASE1_SITEMAP_PATHS.filter((path) => path.includes("maps")).length,
      0,
      "sitemap must not list /maps while the page is unfinished",
    );

    const root = new URL("../../", import.meta.url);
    const shell = readFileSync(new URL("./components/SiteShell.tsx", root), "utf8");
    const home = readFileSync(new URL("./components/HomeEditorial.tsx", root), "utf8");
    const desk = readFileSync(new URL("./routes/desk.tsx", root), "utf8");
    const maps = readFileSync(new URL("./routes/maps.tsx", root), "utf8");
    const mapSrc = readFileSync(new URL("./map.ts", import.meta.url), "utf8");
    const metrics = readFileSync(new URL("./lib/maps/metrics.ts", root), "utf8");

    assert.doesNotMatch(shell, /href:\s*"\/maps"/);
    assert.doesNotMatch(home, /\/maps/);
    assert.doesNotMatch(desk, /\/maps/);
    assert.doesNotMatch(mapSrc, /href:\s*"\/maps"/);
    assert.doesNotMatch(maps, /swap in your series|Draft placeholders|the map is ready for your series/i);
    assert.match(maps, /in progress/i);
    assert.doesNotMatch(metrics, /swap in your series|Draft placeholders/i);
  });
});
