import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getBody } from "./bodies.ts";
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
});
