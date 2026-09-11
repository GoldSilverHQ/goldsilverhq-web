import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getBody } from "./bodies.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

describe("markets page thicken (no new URLs)", () => {
  it("keeps the 2024 investment ranking and adds a fabrication contrast", () => {
    const body = getBody("markets", "physical-silver-demand-by-country");
    assert.ok(body);

    const text = body
      .flatMap((s) => [s.heading, s.callout?.label, ...(s.callout?.paragraphs ?? []), ...s.paragraphs, ...(s.list ?? [])])
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
    assert.match(text, /\*\*\+90 tonnes\*\* year-to-date/);
    assert.match(text, /700 tonnes/);
    assert.match(text, /do not say a private reader should follow NBP/i);
    assert.ok(!PHASE1_SITEMAP_PATHS.some((path) => path.includes("poland")));
  });
});
