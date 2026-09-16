import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { getBody, marketsHubBody, type Section } from "./bodies.ts";
import { getIdea, getMarket } from "./map.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function bodyText(sections: Section[]) {
  return sections
    .flatMap((s) => [
      s.heading,
      ...(s.callout?.paragraphs ?? []),
      ...s.paragraphs,
      ...(s.list ?? []),
    ])
    .filter(Boolean)
    .join("\n");
}

describe("silver-mining intent path (existing URLs only)", () => {
  it("orients a mining-curious reader on Markets without new sitemap URLs", () => {
    const hub = bodyText(marketsHubBody);
    assert.match(hub, /silver mining/i);
    assert.match(hub, /not company shares/i);
    assert.match(hub, /\[gold–silver ratio\]\(\/markets\/gold-silver-ratio\)/);
    assert.match(hub, /\[Physical silver demand by country\]\(\/markets\/physical-silver-demand-by-country\)/);
    assert.match(hub, /\[Stocks & flows\]\(\/desk\)/);
    assert.match(hub, /\[hard money vs fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.match(hub, /\[monetary history and industry\]\(\/history\/silver\/monetary-and-industry\)/);
    assert.doesNotMatch(hub, /buy miner|best silver stock|price target for/i);

    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/gold-silver-ratio"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/physical-silver-demand-by-country"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((p) => /mining|miner/.test(p)));
  });

  it("keeps mining vs market as the core relabel on the ratio page", () => {
    const text = bodyText(getBody("markets", "gold-silver-ratio")!);
    assert.match(text, /silver mining/i);
    assert.match(text, /not a list of mining companies/i);
    assert.match(text, /miner pick|Nothing here is a miner pick/i);
    assert.match(text, /\[monetary history and industry\]\(\/history\/silver\/monetary-and-industry\)/);
    assert.match(text, /\[hard money vs fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.match(text, /Stocks & flows/);
    assert.doesNotMatch(text, /buy miners|NYSE|TSX|ticker symbol/i);

    const page = getMarket("gold-silver-ratio");
    assert.ok(page);
    assert.ok(page.related.some((r) => r.href === "/history/silver/monetary-and-industry"));
    assert.ok(page.related.some((r) => r.href === "/sound-money/hard-money-vs-fiat"));
  });

  it("separates offtake from mines on physical silver demand", () => {
    const text = bodyText(getBody("markets", "physical-silver-demand-by-country")!);
    assert.match(text, /silver mining/i);
    assert.match(text, /mine-production ranking is a different list/i);
    assert.match(text, /\[Stocks & flows\]\(\/desk\)/);
    assert.doesNotMatch(text, /buy miners|stock pick/i);

    const page = getMarket("physical-silver-demand-by-country");
    assert.ok(page);
    assert.ok(page.related.some((r) => r.href === "/history/silver/monetary-and-industry"));
  });

  it("bridges dual-role history without equity language", () => {
    const text = bodyText(getBody("silver", "monetary-and-industry")!);
    assert.match(text, /silver mining/i);
    assert.match(text, /not a list of companies to buy/i);
    assert.match(text, /\[hard money vs fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.doesNotMatch(text, /buy miners|equity tip|price target/i);
  });

  it("lands hard-money readers on the mining clock", () => {
    const text = bodyText(getBody("sound-money", "hard-money-vs-fiat")!);
    assert.match(text, /mining-ratio clock/);
    assert.match(text, /\[gold–silver ratio\]\(\/markets\/gold-silver-ratio\)/);

    const page = getIdea("hard-money-vs-fiat");
    assert.ok(page);
    assert.ok(page.related.some((r) => r.href === "/markets/gold-silver-ratio"));
  });

  it("adds a home mine-pace bridge and desk stocks copy", () => {
    const home = readFileSync(join(root, "components/HomeDashboard.tsx"), "utf8");
    assert.match(home, /Mine supply is ounces leaving the ground/);
    assert.match(home, /markets\/gold-silver-ratio/);
    assert.match(home, /to="\/desk"/);

    const desk = readFileSync(join(root, "components/FullDesk.tsx"), "utf8");
    assert.match(desk, /not a miner tip or a fair-value claim/);
    assert.match(desk, /mining vs market ratio/);
    assert.match(desk, /monetary-and-industry/);
    assert.match(desk, /hard-money-vs-fiat/);
  });
});
