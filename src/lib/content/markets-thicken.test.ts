import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getBody, marketsHubBody } from "./bodies.ts";
import { getMarket } from "./map.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

describe("markets page thicken (no new URLs)", () => {
  it("keeps the 2024 investment ranking and adds a fabrication contrast", () => {
    const body = getBody("markets", "physical-silver-demand-by-country");
    assert.ok(body);

    const text = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
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

  it("adds dated WSS 2026 industrial fabrication without replacing the investment ranking", () => {
    const body = getBody("markets", "physical-silver-demand-by-country");
    assert.ok(body);

    const investment = body.find((s) => s.heading === "2024 country snapshots");
    const coins = body.find((s) => s.heading === "2025 coins and medals fabrication — a different table");
    const industrial = body.find((s) => s.heading === "2025 industrial fabrication by country — a third table");
    const mix = body.find((s) => s.heading === "Where 2025 industrial ounces went");
    assert.ok(investment, "2024 investment ranking must stay");
    assert.ok(coins, "coins-and-medals mint table must stay");
    assert.ok(industrial, "expected a separate 2025 industrial country block");
    assert.ok(mix, "expected a 2025 industrial-mix block");
    assert.ok(industrial.table);
    assert.ok(mix.table);

    const text = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");
    const industrialTable = industrial.table.rows.flat().join("\n");
    const mixTable = mix.table.rows.flat().join("\n");
    const hubText = marketsHubBody
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");
    const neighbor = getBody("markets", "gold-silver-ratio");
    assert.ok(neighbor);
    const neighborText = neighbor.flatMap((s) => s.paragraphs).join("\n");

    assert.match(text, /United States 64\.9/);
    assert.match(text, /India 59\.8/);
    assert.match(text, /Fabrication countries ≠ investment offtake/);
    assert.match(text, /Industrial fabrication ≠ investment offtake/);
    assert.match(text, /India 18\.4/);
    assert.match(text, /87\.9 million ounces/);
    assert.match(text, /657\.4 million ounces/);
    assert.match(industrialTable, /China/);
    assert.match(industrialTable, /\*\*282\.9\*\*/);
    assert.match(industrialTable, /United States/);
    assert.match(industrialTable, /\*\*125\.5\*\*/);
    assert.match(industrialTable, /Japan/);
    assert.match(industrialTable, /\*\*68\.8\*\*/);
    assert.match(industrialTable, /Germany/);
    assert.match(industrialTable, /\*\*31\.0\*\*/);
    assert.match(industrialTable, /United Kingdom/);
    assert.match(industrialTable, /\*\*21\.6\*\*/);
    assert.match(industrialTable, /\*\*657\.4\*\*/);
    assert.match(mixTable, /\*\*262\.9\*\*/);
    assert.match(mixTable, /\*\*40%\*\*/);
    assert.match(mixTable, /\*\*186\.6\*\*/);
    assert.match(mixTable, /\*\*28%\*\*/);
    assert.match(mixTable, /\*\*157\.4\*\*/);
    assert.match(mixTable, /\*\*24%\*\*/);
    assert.match(mixTable, /\*\*50\.5\*\*/);
    assert.match(mixTable, /\*\*8%\*\*/);
    assert.match(text, /449\.5 million ounces/);
    assert.match(text, /factory address/i);
    assert.match(hubText, /2025.*industrial-fabrication/);
    assert.match(neighborText, /industrial fabrication as a factory table/);
    assert.doesNotMatch(text, /639\.6|forecast|ebook|Kauf|buy silver in India|price target/i);

    const page = getMarket("physical-silver-demand-by-country");
    assert.ok(page);
    assert.equal(
      page.title,
      "Where fabricated silver goes: jewelry demand by country (and what physical rankings still do not measure)",
    );
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/markets", "/markets/gold-silver-ratio", "/history/silver/monetary-and-industry"],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/physical-silver-demand-by-country/);
    assert.doesNotMatch(sitemapSrc, /industrial-silver|silver-fabrication-by-country/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/physical-silver-demand-by-country"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /industrial-silver|silver-fabrication/.test(path)));
  });

  it("adds dated WSS 2026 jewelry fabrication without replacing the other rankings", () => {
    const body = getBody("markets", "physical-silver-demand-by-country");
    assert.ok(body);

    const investment = body.find((s) => s.heading === "2024 country snapshots");
    const coins = body.find((s) => s.heading === "2025 coins and medals fabrication — a different table");
    const industrial = body.find((s) => s.heading === "2025 industrial fabrication by country — a third table");
    const mix = body.find((s) => s.heading === "Where 2025 industrial ounces went");
    const jewelry = body.find((s) => s.heading === "2025 jewelry fabrication by country — a fourth table");
    const usgs = body.find((s) => s.heading === "Mine supply on the USGS book — not a new boom");
    assert.ok(investment, "2024 investment ranking must stay");
    assert.ok(coins, "coins-and-medals mint table must stay");
    assert.ok(industrial, "2025 industrial country block must stay");
    assert.ok(mix, "2025 industrial-mix block must stay");
    assert.ok(jewelry, "expected a separate 2025 jewelry country block");
    assert.ok(usgs, "expected a short USGS mine-output context on the same spoke");
    assert.ok(jewelry.table);

    const text = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");
    const jewelryTable = jewelry.table.rows.flat().join("\n");
    const hubText = marketsHubBody
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");
    const neighbor = getBody("markets", "gold-silver-ratio");
    assert.ok(neighbor);
    const neighborText = neighbor.flatMap((s) => s.paragraphs).join("\n");

    assert.match(text, /United States 64\.9/);
    assert.match(text, /India 59\.8/);
    assert.match(text, /Jewelry fabrication ≠ investment offtake/);
    assert.match(text, /Industrial fabrication ≠ investment offtake/);
    assert.match(text, /87\.9 million ounces/);
    assert.match(text, /657\.4 million ounces/);
    assert.match(text, /189\.3 million ounces/);
    assert.match(jewelryTable, /India/);
    assert.match(jewelryTable, /\*\*70\.3\*\*/);
    assert.match(jewelryTable, /Thailand/);
    assert.match(jewelryTable, /\*\*28\.5\*\*/);
    assert.match(jewelryTable, /Italy/);
    assert.match(jewelryTable, /\*\*18\.0\*\*/);
    assert.match(jewelryTable, /China/);
    assert.match(jewelryTable, /\*\*16\.2\*\*/);
    assert.match(jewelryTable, /United States/);
    assert.match(jewelryTable, /\*\*10\.3\*\*/);
    assert.match(jewelryTable, /\*\*189\.3\*\*/);
    assert.match(jewelryTable, /205\.1/);
    assert.match(text, /workshop address/i);
    assert.match(text, /27,300 tonnes/);
    assert.match(text, /25,300 tonnes/);
    assert.match(text, /26,000 tonnes/);
    assert.match(text, /Mineral Commodity Summaries 2016/);
    assert.match(text, /Mineral Commodity Summaries 2026/);
    assert.match(text, /\[markets\]\(\/markets\)/);
    assert.match(text, /\[gold–silver ratio\]\(\/markets\/gold-silver-ratio\)/);
    assert.match(hubText, /jewelry-fabrication/);
    assert.match(neighborText, /jewelry fabrication as a workshop table/);
    assert.doesNotMatch(text, /639\.6|159\.4|forecast|ebook|Kauf|buy silver in India|price target/i);

    const page = getMarket("physical-silver-demand-by-country");
    assert.ok(page);
    assert.equal(
      page.title,
      "Where fabricated silver goes: jewelry demand by country (and what physical rankings still do not measure)",
    );
    assert.match(page.summary, /Jewelry fabrication by country/);
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/markets", "/markets/gold-silver-ratio", "/history/silver/monetary-and-industry"],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/physical-silver-demand-by-country/);
    assert.doesNotMatch(sitemapSrc, /jewelry-fabrication|jewelry-demand-by-country|silver-jewelry-by-country/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/physical-silver-demand-by-country"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /jewelry-fabrication|jewelry-demand-by-country/.test(path)));
  });

  it("adds dated WSS 2026 recycling by source without replacing the other rankings", () => {
    const body = getBody("markets", "physical-silver-demand-by-country");
    assert.ok(body);

    const investment = body.find((s) => s.heading === "2024 country snapshots");
    const coins = body.find((s) => s.heading === "2025 coins and medals fabrication — a different table");
    const industrial = body.find((s) => s.heading === "2025 industrial fabrication by country — a third table");
    const mix = body.find((s) => s.heading === "Where 2025 industrial ounces went");
    const jewelry = body.find((s) => s.heading === "2025 jewelry fabrication by country — a fourth table");
    const recycling = body.find((s) => s.heading === "Where recycled silver comes from (2025)");
    const usgs = body.find((s) => s.heading === "Mine supply on the USGS book — not a new boom");
    assert.ok(investment, "2024 investment ranking must stay");
    assert.ok(coins, "coins-and-medals mint table must stay");
    assert.ok(industrial, "2025 industrial country block must stay");
    assert.ok(mix, "2025 industrial-mix block must stay");
    assert.ok(jewelry, "2025 jewelry country block must stay");
    assert.ok(recycling, "expected a separate 2025 recycling-by-source block");
    assert.ok(usgs, "USGS mine-output context must stay");
    assert.ok(recycling.table);
    assert.ok(recycling.callout);

    const recyclingIndex = body.indexOf(recycling);
    const follow = body[recyclingIndex + 1];
    assert.ok(follow && follow.heading === "", "expected a short scrap-vs-supply follow-up after the table");

    const recyclingText = [recycling.heading, recycling.callout.label, ...recycling.callout.paragraphs, ...recycling.paragraphs, ...(follow.paragraphs ?? [])]
      .join("\n")
      .replace(/\[[^\]]+\]\([^)]+\)/g, (m) => m.match(/\[([^\]]+)\]/)?.[1] ?? "")
      .replace(/\*\*/g, "")
      .trim();
    const recyclingWords = recyclingText.split(/\s+/).length;
    assert.ok(
      recyclingWords >= 300 && recyclingWords <= 500,
      `expected 300–500 words in the recycling block, got ${recyclingWords}`,
    );

    const text = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");
    const recyclingTable = recycling.table.rows.flat().join("\n");
    const hubText = marketsHubBody
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");
    const neighbor = getBody("markets", "gold-silver-ratio");
    assert.ok(neighbor);
    const neighborText = neighbor.flatMap((s) => s.paragraphs).join("\n");

    assert.match(text, /United States 64\.9/);
    assert.match(text, /India 59\.8/);
    assert.match(text, /Scrap sources ≠ offtake ≠ fabrication/);
    assert.match(text, /Jewelry fabrication ≠ investment offtake/);
    assert.match(text, /Industrial fabrication ≠ investment offtake/);
    assert.match(text, /87\.9 million ounces/);
    assert.match(text, /657\.4 million ounces/);
    assert.match(text, /189\.3 million ounces/);
    assert.match(text, /197\.6 million ounces/);
    assert.match(recyclingTable, /Industrial/);
    assert.match(recyclingTable, /\*\*110\.1\*\*/);
    assert.match(recyclingTable, /Jewelry/);
    assert.match(recyclingTable, /\*\*38\.2\*\*/);
    assert.match(recyclingTable, /Silverware/);
    assert.match(recyclingTable, /\*\*28\.3\*\*/);
    assert.match(recyclingTable, /Photographic/);
    assert.match(recyclingTable, /\*\*16\.2\*\*/);
    assert.match(recyclingTable, /Coin/);
    assert.match(recyclingTable, /\*\*4\.7\*\*/);
    assert.match(recyclingTable, /\*\*197\.6\*\*/);
    assert.match(text, /thirteen-year high/);
    assert.match(text, /secondary \*\*supply\*\*|secondary supply/i);
    assert.match(text, /e-scrap yields/);
    assert.match(text, /Silver Institute/);
    assert.match(text, /Metals Focus/);
    assert.match(text, /\[markets\]\(\/markets\)/);
    assert.match(text, /\[gold–silver ratio\]\(\/markets\/gold-silver-ratio\)/);
    assert.match(text, /mine clock/);
    assert.match(text, /scrap clock/);
    assert.match(hubText, /recycling-by-source/);
    assert.match(hubText, /scrap returning from use, not the mine clock/);
    assert.match(neighborText, /scrap clock — secondary supply/);
    assert.match(neighborText, /industrial fabrication as a factory table/);
    assert.match(neighborText, /jewelry fabrication as a workshop table/);
    assert.doesNotMatch(text, /2026F|Top 5|outlook|forecast|ebook|Kauf|buy silver in India|price target/i);

    const page = getMarket("physical-silver-demand-by-country");
    assert.ok(page);
    assert.equal(
      page.title,
      "Where fabricated silver goes: jewelry demand by country (and what physical rankings still do not measure)",
    );
    assert.match(page.summary, /Jewelry fabrication by country/);
    assert.match(page.summary, /Recycling by source/);
    assert.deepEqual(
      page.related.map((r) => r.href),
      ["/markets", "/markets/gold-silver-ratio", "/history/silver/monetary-and-industry"],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/physical-silver-demand-by-country/);
    assert.doesNotMatch(sitemapSrc, /recycling-by-source|silver-recycling|scrap-silver/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/physical-silver-demand-by-country"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /recycling-by-source|silver-recycling|scrap-silver/.test(path)));
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
      [
        "/markets",
        "/markets/physical-silver-demand-by-country",
        "/history/silver/monetary-and-industry",
        "/history/silver/bimetallism",
        "/history/silver/piece-of-eight",
        "/sound-money/hard-money-vs-fiat",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/gold-silver-ratio/);
    assert.doesNotMatch(sitemapSrc, /mining-ratio/);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("mining-ratio")));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/gold-silver-ratio"));
  });

  it("adds London vault holdings as a custody inventory on the same ratio page", () => {
    const body = getBody("markets", "gold-silver-ratio");
    assert.ok(body);

    const vault = body.find((s) => s.heading === "London vault holdings — a custody inventory");
    assert.ok(vault, "expected London vault holdings under the existing ratio page");
    const text = body
      .flatMap((s) => [
        s.heading,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
      ])
      .join("\n");
    const hubText = marketsHubBody
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");
    const neighbor = getBody("markets", "physical-silver-demand-by-country");
    assert.ok(neighbor);
    const neighborText = neighbor.flatMap((s) => s.paragraphs).join("\n");

    assert.match(text, /Three contemporaneous clocks/);
    assert.match(text, /market price, mine output, and London vault stocks/);
    assert.match(text, /9,632 tonnes/);
    assert.match(text, /28,431 tonnes/);
    assert.match(text, /310 million ounces/);
    assert.match(text, /914 million ounces/);
    assert.match(text, /~3\.0/);
    assert.match(text, /August 2026/);
    assert.match(text, /custody inventory/);
    assert.match(text, /not a world aboveground census/);
    assert.match(text, /https:\/\/www\.lbma\.org\.uk\/articles\/london-gold-and-silver-vault-data-for-august-2026/);
    assert.match(text, /https:\/\/www\.lbma\.org\.uk\/prices-and-data\/london-vault-data/);
    assert.match(text, /not a fair-value/);
    assert.match(text, /not a mean/i);
    assert.match(text, /\[markets\]\(\/markets\)/);
    assert.match(text, /\[Physical silver demand by country\]\(\/markets\/physical-silver-demand-by-country\)/);
    assert.match(hubText, /three clocks/);
    assert.match(hubText, /London vault stocks/);
    assert.match(neighborText, /dated London vault inventory/);
    assert.doesNotMatch(text, /15:1 catch-up|\$217|\$290|Kauf|ebook|buy gold|buy silver/i);

    const page = getMarket("gold-silver-ratio");
    assert.ok(page);
    assert.equal(page.title, "What the gold–silver ratio measures (and what it does not)");
    assert.deepEqual(
      page.related.map((r) => r.href),
      [
        "/markets",
        "/markets/physical-silver-demand-by-country",
        "/history/silver/monetary-and-industry",
        "/history/silver/bimetallism",
        "/history/silver/piece-of-eight",
        "/sound-money/hard-money-vs-fiat",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/gold-silver-ratio/);
    assert.doesNotMatch(sitemapSrc, /vault-holdings|london-vault/);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /vault-holdings|london-vault/.test(path)));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/gold-silver-ratio"));
  });

  it("adds 2011 30:1 ratio history on the same page without forecast language", () => {
    const body = getBody("markets", "gold-silver-ratio");
    assert.ok(body);

    const history = body.find((s) => s.heading === "What a 30:1 ratio meant in 2011");
    assert.ok(history, "expected a 2011 30:1 historical block on the existing ratio page");
    const mining = body.find((s) => s.heading === "Mining ratio vs market ratio");
    const vault = body.find((s) => s.heading === "London vault holdings — a custody inventory");
    assert.ok(mining, "mining-vs-market block must stay");
    assert.ok(vault, "London vault block must stay");

    const text = body
      .flatMap((s) => [
        s.heading,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
      ])
      .join("\n");
    const historyText = history.paragraphs.join("\n");
    const historyWords = historyText
      .replace(/\[[^\]]+\]\([^)]+\)/g, (m) => m.match(/\[([^\]]+)\]/)?.[1] ?? "")
      .replace(/\*\*/g, "")
      .trim()
      .split(/\s+/).length;
    const hubText = marketsHubBody
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");

    assert.ok(historyWords >= 250 && historyWords <= 500, `expected 250–500 words in the 2011 block, got ${historyWords}`);
    assert.match(text, /gold’s dollar price divided by silver/);
    assert.match(text, /\$1,535\.50/);
    assert.match(text, /\$48\.70/);
    assert.match(text, /31\.5/);
    assert.match(text, /31\.48/);
    assert.match(text, /28 April 2011/);
    assert.match(text, /\$41\.85/);
    assert.match(text, /45\.3/);
    assert.match(text, /44\.7/);
    assert.match(text, /http:\/\/www\.321gold\.com\/archives\/fix2011\.html/);
    assert.match(text, /https:\/\/taxfreegold\.co\.uk\/goldsilverratio2011\.html/);
    assert.match(text, /\[markets\]\(\/markets\)/);
    assert.match(text, /\[physical silver demand by country\]\(\/markets\/physical-silver-demand-by-country\)/);
    assert.match(text, /\[Silver Thursday\]\(\/history\/silver\/silver-thursday\)/);
    assert.match(hubText, /~30:1 as a named tape, not a target/);
    assert.match(text, /7\.1/);
    assert.match(text, /9,632 tonnes/);
    assert.doesNotMatch(text, /\$150|math catching up|moonshot|old-cycle|Kauf|ebook|buy gold|buy silver/i);
    assert.doesNotMatch(historyText, /forecast|price target|should buy|hold silver|return to 30/i);

    const page = getMarket("gold-silver-ratio");
    assert.ok(page);
    assert.equal(page.title, "What the gold–silver ratio measures (and what it does not)");
    assert.match(page.summary, /30:1 tape meant in April 2011 is market history, not a price target/);
    assert.deepEqual(
      page.related.map((r) => r.href),
      [
        "/markets",
        "/markets/physical-silver-demand-by-country",
        "/history/silver/monetary-and-industry",
        "/history/silver/bimetallism",
        "/history/silver/piece-of-eight",
        "/sound-money/hard-money-vs-fiat",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/gold-silver-ratio/);
    assert.doesNotMatch(sitemapSrc, /30-to-1|2011-ratio|gsr-2011/);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /30-to-1|2011-ratio|gsr-2011/.test(path)));
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
    assert.match(text, /648 tonnes/);
    assert.match(text, /August 2026/);
    assert.match(text, /\*\*\+90 tonnes\*\* year-to-date/);
    assert.match(text, /\*\*\+98 tonnes\*\* year-to-date/);
    assert.match(text, /700 tonnes/);
    assert.match(text, /do not say a private reader should follow NBP/i);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("poland")));
  });

  it("adds a dated 2026 YTD buyer table and keeps Tether off it", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const ytd = body.find((s) => s.heading.startsWith("Reported net buyers"));
    assert.ok(ytd);
    assert.ok(ytd.table);
    const table = ytd.table.rows.flat().join("\n");
    const page = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .join("\n");

    assert.match(ytd.heading, /August 2026/);
    assert.deepEqual(ytd.table.headers, ["Country", "Reported tonnes", "Through", "Source"]);
    assert.match(table, /Poland/);
    assert.match(table, /\*\*98\*\*/);
    assert.match(table, /China/);
    assert.match(table, /\*\*80\*\*/);
    assert.match(table, /Uzbekistan/);
    assert.match(table, /\*\*48\*\*/);
    assert.match(table, /Kazakhstan/);
    assert.match(table, /\*\*29\*\*/);
    assert.match(table, /July 2026/);
    assert.match(table, /Czech Republic/);
    assert.match(table, /\*\*14\*\*/);
    assert.doesNotMatch(table, /Tether/i);
    assert.match(page, /Not a central bank/);
    assert.match(page, /27\.1 tonnes/);
    assert.match(page, /22\.01 tonnes/);
    assert.doesNotMatch(page, /~40|40 t est|who to follow|forecast|Kauf|buy gold/i);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("tether")));
  });

  it("adds a dated China holdings block on the same reserves page", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const china = body.find((s) => s.heading.startsWith("China"));
    assert.ok(china, "expected a China holdings section on the same spoke");
    assert.ok(china.table);
    const table = china.table.rows.flat().join("\n");
    const page = body
      .flatMap((s) => [
        s.heading,
        ...s.paragraphs,
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");
    const text = [china.heading, ...china.paragraphs, china.table.caption, ...china.table.headers, table, page]
      .filter(Boolean)
      .join("\n");

    assert.match(text, /395/);
    assert.match(text, /600/);
    assert.match(text, /1,054/);
    assert.match(text, /1,658/);
    assert.match(text, /1,760/);
    assert.match(text, /1,948/);
    assert.match(text, /1,950/);
    assert.match(text, /2,235/);
    assert.match(text, /2,280/);
    assert.match(text, /2,306/);
    assert.match(text, /2,332/);
    assert.match(text, /2,387/);
    assert.match(text, /76\.73 million oz/);
    assert.match(text, /SAFE/);
    assert.match(text, /do not say a private reader should follow the PBoC/i);
    assert.doesNotMatch(text, /buy gold|Kauf|forecast|who to follow/i);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("china")));
  });

  it("adds dated gold-as-share prints without inventing the X-hook percentages", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const share = body.find((s) => s.heading.startsWith("Gold as a share"));
    assert.ok(share, "expected a reserve-share section on the same spoke");
    assert.ok(share.table);
    const table = share.table.rows.flat().join("\n");
    const text = [share.heading, ...share.paragraphs, share.table.caption, ...share.table.headers, table]
      .filter(Boolean)
      .join("\n");

    assert.match(text, /Q3 2024/);
    assert.match(text, /\*\*19%\*\*/);
    assert.match(text, /Q3 2025/);
    assert.match(text, /\*\*26%\*\*/);
    assert.match(text, /2010/);
    assert.match(text, /~4%/);
    assert.match(text, /\*\*15%\*\*/);
    assert.match(text, /\*\*30%\*\*/);
    assert.match(text, /\*\*8\.9%\*\*/);
    assert.match(text, /\*\*29\.4%\*\*/);
    assert.match(text, /two prints, not one spliced series/);
    assert.doesNotMatch(text, /\b16%\b|\b22%\b|\b20%\b|\b27%\b|~29%/);
    assert.doesNotMatch(text, /buy gold|Kauf|forecast|price target/i);

    const page = getMarket("central-bank-gold-reserves");
    assert.ok(page);
    assert.equal(page.title, "How central banks report gold in FX reserves");
    assert.deepEqual(
      page.related.map((r) => r.href),
      [
        "/markets",
        "/markets/official-gold-book-value",
        "/sound-money/backed-money",
        "/history/20th-century/bretton-woods-nixon-1971",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/central-bank-gold-reserves/);
    assert.doesNotMatch(sitemapSrc, /china-gold|gold-share-of-reserves/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /china-gold|gold-share/.test(path)));
  });

  it("adds dated official gold relative to GDP without inventing cells or new URLs", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const gdp = body.find((s) => s.heading.startsWith("Official gold relative to GDP"));
    assert.ok(gdp, "expected a gold-to-GDP section on the same spoke");
    assert.ok(gdp.table);
    const share = body.find((s) => s.heading.startsWith("Gold as a share"));
    assert.ok(share, "FX-share clock must stay on the page");
    const china = body.find((s) => s.heading.startsWith("China"));
    const poland = body.find((s) => s.heading.startsWith("Poland"));
    const ytd = body.find((s) => s.heading.startsWith("Reported net buyers"));
    const sellers = body.find((s) => s.heading.startsWith("Reported net official sellers"));
    const canada = body.find((s) => s.heading.startsWith("Canada"));
    const brown = body.find((s) => s.heading.startsWith("Brown"));
    assert.ok(
      china && poland && ytd && sellers && canada && brown,
      "China, Poland, YTD buyers, YTD sellers, Canada, and Brown’s Bottom must stay",
    );

    const table = gdp.table.rows.flat().join("\n");
    const text = [gdp.heading, ...gdp.paragraphs, gdp.table.caption, ...gdp.table.headers, table]
      .filter(Boolean)
      .join("\n");
    const page = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");

    assert.deepEqual(gdp.table.headers, ["Country", "Official tonnes", "2025 GDP", "Gold / GDP"]);
    assert.match(text, /\$4,026\.60/);
    assert.match(text, /31 July 2026/);
    assert.match(text, /WEO April 2026|World Economic Outlook \*\*April 2026\*\*/);
    assert.match(text, /32,150\.7466/);
    assert.match(table, /Portugal/);
    assert.match(table, /\*\*382\.7\*\*/);
    assert.match(table, /\*\*14\.30%\*\*/);
    assert.match(table, /Switzerland/);
    assert.match(table, /\*\*1,039\.9\*\*/);
    assert.match(table, /\*\*12\.90%\*\*/);
    assert.match(table, /Italy/);
    assert.match(table, /\*\*2,451\.8\*\*/);
    assert.match(table, /\*\*12\.45%\*\*/);
    assert.match(table, /Russian Federation/);
    assert.match(table, /\*\*2,276\.8\*\*/);
    assert.match(table, /\*\*11\.39%\*\*/);
    assert.match(table, /France/);
    assert.match(table, /\*\*2,437\.0\*\*/);
    assert.match(table, /\*\*9\.36%\*\*/);
    assert.match(table, /Germany/);
    assert.match(table, /\*\*3,349\.5\*\*/);
    assert.match(table, /\*\*8\.59%\*\*/);
    assert.match(table, /United States/);
    assert.match(table, /\*\*8,133\.5\*\*/);
    assert.match(table, /\*\*3\.42%\*\*/);
    assert.match(table, /Japan/);
    assert.match(table, /\*\*846\.0\*\*/);
    assert.match(table, /\*\*2\.47%\*\*/);
    assert.match(table, /China/);
    assert.match(table, /\*\*2,366\.3\*\*/);
    assert.match(table, /\*\*1\.56%\*\*/);
    assert.match(text, /640\.2 tonnes/);
    assert.match(text, /\*\*8\.00 percent\*\*/);
    assert.doesNotMatch(table, /Poland|Tether|Lebanon|Uzbekistan/i);
    assert.doesNotMatch(text, /biggest gold vaults|heaviest relative|Kauf|buy gold|forecast|price target/i);
    assert.match(page, /Gold as a share of FX/);
    assert.match(page, /\*\*19%\*\*/);
    assert.match(page, /\*\*26%\*\*/);
    assert.match(page, /2,387/);
    assert.match(page, /648 tonnes/);
    assert.match(page, /Not a central bank/);
    assert.match(page, /27\.1 tonnes/);

    const pageMeta = getMarket("central-bank-gold-reserves");
    assert.ok(pageMeta);
    assert.equal(pageMeta.title, "How central banks report gold in FX reserves");
    assert.deepEqual(
      pageMeta.related.map((r) => r.href),
      [
        "/markets",
        "/markets/official-gold-book-value",
        "/sound-money/backed-money",
        "/history/20th-century/bretton-woods-nixon-1971",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/central-bank-gold-reserves/);
    assert.doesNotMatch(sitemapSrc, /gold-to-gdp|gold-relative-to-gdp|official-gold-gdp/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /gold-to-gdp|gold-relative-to-gdp|official-gold-gdp/.test(path)));
  });

  it("adds a dated July 2026 official seller table beside the buyers and keeps the rest", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const sellers = body.find((s) => s.heading.startsWith("Reported net official sellers"));
    assert.ok(sellers, "expected a reported net official sellers section on the same spoke");
    assert.ok(sellers.table);
    const buyers = body.find((s) => s.heading.startsWith("Reported net buyers"));
    const share = body.find((s) => s.heading.startsWith("Gold as a share"));
    const gdp = body.find((s) => s.heading.startsWith("Official gold relative to GDP"));
    const china = body.find((s) => s.heading.startsWith("China"));
    const poland = body.find((s) => s.heading.startsWith("Poland"));
    const canada = body.find((s) => s.heading.startsWith("Canada"));
    const brown = body.find((s) => s.heading.startsWith("Brown"));
    assert.ok(
      buyers && share && gdp && china && poland && canada && brown,
      "buyers, FX-share, gold/GDP, China, Poland, Canada, and Brown’s Bottom must stay",
    );

    const table = sellers.table.rows.flat().join("\n");
    const sellerText = [sellers.heading, ...sellers.paragraphs, sellers.table.caption, ...sellers.table.headers, table]
      .filter(Boolean)
      .join("\n");
    const page = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");

    assert.match(sellers.heading, /July 2026/);
    assert.deepEqual(sellers.table.headers, ["Country", "Reported tonnes", "Through", "Source"]);
    assert.match(table, /Türkiye|Turkey/);
    assert.match(table, /\*\*85\*\*/);
    assert.match(table, /Russia/);
    assert.match(table, /\*\*50\*\*/);
    assert.match(table, /July 2026/);
    assert.match(table, /WGC monthly \(IMF IFS/);
    assert.match(sellerText, /not a private investment flow/);
    assert.match(sellerText, /does not invent an August seller total/);
    assert.match(sellerText, /31 July 2026/);
    assert.match(sellerText, /3 September 2026/);
    assert.doesNotMatch(table, /Tether|Poland|China|forecast|Kauf|buy gold/i);
    assert.doesNotMatch(sellerText, /who to follow|price target|Kauf|buy gold|sell gold/i);

    assert.match(page, /Reported net buyers, YTD through August 2026/);
    assert.match(page, /\*\*98\*\*/);
    assert.match(page, /\*\*80\*\*/);
    assert.match(page, /\*\*19%\*\*/);
    assert.match(page, /\*\*26%\*\*/);
    assert.match(page, /\*\*14\.30%\*\*/);
    assert.match(page, /2,387/);
    assert.match(page, /648 tonnes/);
    assert.match(page, /Not a central bank/);
    assert.match(page, /27\.1 tonnes/);
    assert.match(page, /22\.01 tonnes/);

    const pageMeta = getMarket("central-bank-gold-reserves");
    assert.ok(pageMeta);
    assert.equal(pageMeta.title, "How central banks report gold in FX reserves");
    assert.deepEqual(
      pageMeta.related.map((r) => r.href),
      [
        "/markets",
        "/markets/official-gold-book-value",
        "/sound-money/backed-money",
        "/history/20th-century/bretton-woods-nixon-1971",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/central-bank-gold-reserves/);
    assert.doesNotMatch(sitemapSrc, /official-sellers|cb-gold-sellers|turkey-gold|russia-gold/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /official-sellers|cb-gold-sellers/.test(path)));
  });

  it("adds a dated Canada Gold: 0 documentary block without a new URL or hindsight", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const canada = body.find((s) => s.heading.startsWith("Canada"));
    assert.ok(canada, "expected a Canada zero-reserves section on the same spoke");
    const sellers = body.find((s) => s.heading.startsWith("Reported net official sellers"));
    const buyers = body.find((s) => s.heading.startsWith("Reported net buyers"));
    const share = body.find((s) => s.heading.startsWith("Gold as a share"));
    const gdp = body.find((s) => s.heading.startsWith("Official gold relative to GDP"));
    const china = body.find((s) => s.heading.startsWith("China"));
    const poland = body.find((s) => s.heading.startsWith("Poland"));
    const brown = body.find((s) => s.heading.startsWith("Brown"));
    assert.ok(
      sellers && buyers && share && gdp && china && poland && brown,
      "sellers, buyers, FX-share, gold/GDP, China, Poland, and Brown’s Bottom must stay",
    );

    const canadaText = [canada.heading, ...canada.paragraphs].join("\n");
    const page = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");
    const hubText = marketsHubBody
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");

    assert.match(canada.heading, /Gold: 0/);
    assert.match(canada.heading, /official book/);
    assert.match(canadaText, /Finance Canada/);
    assert.match(canadaText, /\*\*Gold: 0\*\*/);
    assert.match(canadaText, /31 July 2026/);
    assert.match(canadaText, /US\$127,038 million/);
    assert.match(canadaText, /1,000 tonnes/);
    assert.match(canadaText, /3\.4 tonnes/);
    assert.match(canadaText, /21,851/);
    assert.match(canadaText, /\*\*77\*\* ounces/);
    assert.match(canadaText, /29 February 2016/);
    assert.match(canadaText, /41,106/);
    assert.match(canadaText, /32,860/);
    assert.match(canadaText, /CBC/);
    assert.match(
      canadaText,
      /https:\/\/www\.canada\.ca\/en\/department-finance\/services\/publications\/monthly-official-international-reserves\/2026\/08\.html/,
    );
    assert.match(
      canadaText,
      /https:\/\/www\.canada\.ca\/en\/department-finance\/news\/2016\/03\/official-international-reserves\.html/,
    );
    assert.match(canadaText, /https:\/\/www\.cbc\.ca\/news\/business\/gold-canada-reserves-1\.3475818/);
    assert.match(canadaText, /8,133\.5 tonnes/);
    assert.match(canadaText, /3,349\.5 tonnes/);
    assert.match(canadaText, /do not say a private reader should follow Ottawa/i);
    assert.match(canadaText, /do not say Canada was wrong/i);
    assert.match(canadaText, /not a private-flow instruction/);
    assert.doesNotMatch(
      canadaText,
      /worst trade|should have held|lost billions|buy gold|Kauf|forecast|price target|who to follow|sold at the bottom|ebook|Sound Money funnel/i,
    );

    assert.match(page, /Reported net official sellers, YTD through July 2026/);
    assert.match(page, /\*\*85\*\*/);
    assert.match(page, /\*\*19%\*\*/);
    assert.match(page, /\*\*26%\*\*/);
    assert.match(page, /\*\*14\.30%\*\*/);
    assert.match(page, /2,387/);
    assert.match(page, /648 tonnes/);
    assert.match(page, /Not a central bank/);
    assert.match(page, /printed \*\*Gold: 0\*\*/);
    assert.match(page, /Poland: a short documentary block/);
    assert.match(page, /Brown’s Bottom \(1999–2002\)/);

    assert.match(hubText, /Canada \*\*Gold: 0\*\* section/);
    assert.match(hubText, /dated official purchases and sales/);

    const pageMeta = getMarket("central-bank-gold-reserves");
    assert.ok(pageMeta);
    assert.match(pageMeta.summary, /Gold: 0/);
    assert.match(pageMeta.summary, /Canada/);
    assert.ok(pageMeta.seo?.secondary.includes("canada gold reserves"));
    assert.deepEqual(
      pageMeta.related.map((r) => r.href),
      [
        "/markets",
        "/markets/official-gold-book-value",
        "/sound-money/backed-money",
        "/history/20th-century/bretton-woods-nixon-1971",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/central-bank-gold-reserves/);
    assert.doesNotMatch(sitemapSrc, /canada-gold|canada-zero|canada-reserves/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /canada-gold|canada-zero|canada-reserves/.test(path)));
  });

  it("adds a dated Brown’s Bottom official-sale block without a new URL or hindsight", () => {
    const body = getBody("markets", "central-bank-gold-reserves");
    assert.ok(body);

    const brown = body.find((s) => s.heading.startsWith("Brown"));
    assert.ok(brown, "expected a Brown’s Bottom section on the same spoke");
    const sellers = body.find((s) => s.heading.startsWith("Reported net official sellers"));
    const buyers = body.find((s) => s.heading.startsWith("Reported net buyers"));
    const share = body.find((s) => s.heading.startsWith("Gold as a share"));
    const gdp = body.find((s) => s.heading.startsWith("Official gold relative to GDP"));
    const china = body.find((s) => s.heading.startsWith("China"));
    const poland = body.find((s) => s.heading.startsWith("Poland"));
    const canada = body.find((s) => s.heading.startsWith("Canada"));
    assert.ok(
      sellers && buyers && share && gdp && china && poland && canada,
      "sellers, buyers, FX-share, gold/GDP, China, Poland, and Canada must stay",
    );

    const brownText = [brown.heading, ...brown.paragraphs].join("\n");
    const page = body
      .flatMap((s) => [
        s.heading,
        s.callout?.label,
        ...(s.callout?.paragraphs ?? []),
        ...s.paragraphs,
        ...(s.list ?? []),
        s.table?.caption,
        ...(s.table?.headers ?? []),
        ...(s.table?.rows.flat() ?? []),
      ])
      .filter(Boolean)
      .join("\n");
    const hubText = marketsHubBody
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])
      .join("\n");

    assert.match(brown.heading, /1999–2002/);
    assert.match(brown.heading, /dated official gold sale/);
    assert.match(brownText, /395 tonnes/);
    assert.match(brownText, /\*\*17\*\*/);
    assert.match(brownText, /July 1999/);
    assert.match(brownText, /March 2002/);
    assert.match(brownText, /\$275/);
    assert.match(brownText, /\$3\.5 billion/);
    assert.match(brownText, /dollar, euro, and yen/);
    assert.match(brownText, /GOV\.UK/);
    assert.match(brownText, /Quarterly Bulletin/);
    assert.match(brownText, /Summer 2003/);
    assert.match(brownText, /https:\/\/www\.gov\.uk\/government\/publications\/the-sale-of-part-of-the-uk-gold-reserves-1999-2002/);
    assert.match(
      brownText,
      /https:\/\/www\.bankofengland\.co\.uk\/-\/media\/boe\/files\/quarterly-bulletin\/2003\/an-analysis-of-the-uk-gold-auctions-1999-2002\.pdf/,
    );
    assert.match(brownText, /\[official gold book value\]\(\/markets\/official-gold-book-value\)/);
    assert.match(brownText, /reporting convention|statutory book rate/);
    assert.match(brownText, /do not say a private reader should follow HM Treasury/i);
    assert.match(brownText, /not a private-flow tip/);
    assert.doesNotMatch(
      brownText,
      /worst trade|should have held|lost billions|buy gold|Kauf|forecast|price target|who to follow|sold at the bottom/i,
    );

    assert.match(page, /Reported net official sellers, YTD through July 2026/);
    assert.match(page, /\*\*85\*\*/);
    assert.match(page, /\*\*19%\*\*/);
    assert.match(page, /\*\*26%\*\*/);
    assert.match(page, /\*\*14\.30%\*\*/);
    assert.match(page, /2,387/);
    assert.match(page, /648 tonnes/);
    assert.match(page, /Not a central bank/);
    assert.match(page, /\*\*1999–2002\*\* UK auction programme/);
    assert.match(page, /Canada: Gold: 0 on the official book/);

    assert.match(hubText, /\*\*1999–2002\*\* UK official-sale section/);
    assert.match(hubText, /dated official purchases and sales/);
    assert.match(hubText, /\[markets\/official-gold-book-value\]|official gold book value/);
    assert.match(hubText, /Canada \*\*Gold: 0\*\* section/);

    const pageMeta = getMarket("central-bank-gold-reserves");
    assert.ok(pageMeta);
    assert.match(pageMeta.summary, /Brown’s Bottom/);
    assert.match(pageMeta.summary, /1999–2002/);
    assert.match(pageMeta.summary, /Gold: 0/);
    assert.deepEqual(
      pageMeta.related.map((r) => r.href),
      [
        "/markets",
        "/markets/official-gold-book-value",
        "/sound-money/backed-money",
        "/history/20th-century/bretton-woods-nixon-1971",
      ],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/central-bank-gold-reserves/);
    assert.doesNotMatch(sitemapSrc, /browns-bottom|brown-s-bottom|uk-gold-sales|hm-treasury-gold/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /browns-bottom|brown-s-bottom|uk-gold-sales/.test(path)));
  });
});
