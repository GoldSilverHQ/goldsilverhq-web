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
      ["/markets", "/markets/physical-silver-demand-by-country"],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/gold-silver-ratio/);
    assert.doesNotMatch(sitemapSrc, /vault-holdings|london-vault/);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /vault-holdings|london-vault/.test(path)));
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
      ["/markets", "/markets/official-gold-book-value"],
    );

    const sitemapSrc = readFileSync(new URL("../seo/phase1-sitemap-paths.mjs", import.meta.url), "utf8");
    assert.match(sitemapSrc, /\/markets\/central-bank-gold-reserves/);
    assert.doesNotMatch(sitemapSrc, /china-gold|gold-share-of-reserves/);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => /china-gold|gold-share/.test(path)));
  });
});
