import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  getBody,
  historyHubBody,
  marketsHubBody,
  soundMoneyHubBody,
  twentiethCenturyHubBody,
  type Section,
} from "./bodies.ts";
import { getCluster, getIdea, getMarket } from "./map.ts";
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

const TIP_PATTERN =
  /buy gold now|buy silver now|best gold stock|price target for|NYSE|TSX|ticker symbol/i;

describe("intent paths (existing URLs only)", () => {
  it("keeps the sitemap freeze — no new mining/intent URLs", () => {
    assert.equal(PHASE1_SITEMAP_PATHS.length, 43);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/sound-money/what-is-sound-money"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/20th-century/bretton-woods-nixon-1971"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((p) => /\/intent|\/mining|\/miner/.test(p)));
  });

  it("path 1 — sound-money definition journey", () => {
    const hub = bodyText(soundMoneyHubBody);
    assert.match(hub, /what is sound money\?/i);
    assert.match(hub, /vocabulary first/i);
    assert.doesNotMatch(hub, TIP_PATTERN);

    const def = bodyText(getBody("sound-money", "what-is-sound-money")!);
    assert.match(def, /what is sound money\?/i);
    assert.match(def, /\[hard money (?:vs|versus) fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.match(def, /\[Nixon shock\]\(\/history\/20th-century\/bretton-woods-nixon-1971\)/);
    assert.doesNotMatch(def, TIP_PATTERN);

    const inflation = bodyText(getBody("sound-money", "inflation-purchasing-power")!);
    assert.match(inflation, /inflation \/ purchasing power/i);
    assert.match(inflation, /\[Money\]\(\/desk\)/);
    assert.match(inflation, /\[Weimar hyperinflation\]\(\/history\/20th-century\/weimar-1923\)/);
    assert.doesNotMatch(inflation, TIP_PATTERN);

    const page = getIdea("what-is-sound-money");
    assert.ok(page);
    assert.ok(page.related.some((r) => r.href === "/history/20th-century/bretton-woods-nixon-1971"));
  });

  it("path 2 — 1971 gold-window journey", () => {
    const history = bodyText(historyHubBody);
    assert.match(history, /why 1971 mattered/i);
    assert.match(history, /\[Sound Money\]\(\/sound-money\)/);

    const century = bodyText(twentiethCenturyHubBody);
    assert.match(century, /why 1971 mattered/i);
    assert.match(century, /gold window/i);

    const nixon = bodyText(getBody("20th-century", "bretton-woods-nixon-1971")!);
    assert.match(nixon, /why 1971 mattered/i);
    assert.match(nixon, /\[official gold book value\]\(\/markets\/official-gold-book-value\)/);
    assert.match(nixon, /\[what “backed” means\]\(\/sound-money\/backed-money\)/);
    assert.match(nixon, /\[what is sound money\?\]\(\/sound-money\/what-is-sound-money\)/);
    assert.doesNotMatch(nixon, TIP_PATTERN);

    const book = bodyText(getBody("markets", "official-gold-book-value")!);
    assert.match(book, /1971/);
    assert.match(book, /\[central banks report gold in reserves\]\(\/markets\/central-bank-gold-reserves\)/);
    assert.match(book, /\[what “backed” means\]\(\/sound-money\/backed-money\)/);

    const cluster = getCluster("20th-century");
    const episode = cluster?.episodes.find((e) => e.slug === "bretton-woods-nixon-1971");
    assert.ok(episode);
    assert.ok(episode.related.some((r) => r.href === "/markets/official-gold-book-value"));
    assert.ok(episode.related.some((r) => r.href === "/sound-money/backed-money"));
    assert.ok(episode.related.some((r) => r.href === "/sound-money/what-is-sound-money"));
  });

  it("path 3 — central-bank gold buying journey", () => {
    const hub = bodyText(marketsHubBody);
    assert.match(hub, /central-bank gold buying/i);
    assert.match(hub, /not a reason to copy a central bank/i);
    assert.match(hub, /\[Central-bank gold reserves\]\(\/markets\/central-bank-gold-reserves\)/);
    assert.doesNotMatch(hub, TIP_PATTERN);

    const cb = bodyText(getBody("markets", "central-bank-gold-reserves")!);
    assert.match(cb, /central-bank gold buying/i);
    assert.match(cb, /not a tip to copy a central bank/i);
    assert.match(cb, /\[Official gold\]\(\/desk\)/);
    assert.match(cb, /\[what “backed” means\]\(\/sound-money\/backed-money\)/);
    assert.doesNotMatch(cb, /buy gold now|best gold stock|copy the central bank as advice/i);

    const page = getMarket("central-bank-gold-reserves");
    assert.ok(page);
    assert.ok(page.related.some((r) => r.href === "/sound-money/backed-money"));
    assert.ok(page.related.some((r) => r.href === "/history/20th-century/bretton-woods-nixon-1971"));
  });

  it("home and desk soft bridges for the three new paths", () => {
    const home = readFileSync(join(root, "components/HomeDashboard.tsx"), "utf8");
    assert.match(home, /what is sound money\?/);
    assert.match(home, /1971 gold-window close/);
    assert.match(home, /weimar-1923/);
    assert.match(home, /central-bank-gold-reserves/);
    assert.match(home, /not a tip to copy a central bank/);
    assert.match(home, /backed-money/);

    const desk = readFileSync(join(root, "components/FullDesk.tsx"), "utf8");
    assert.match(desk, /not a reason for a private holder to copy a central bank/);
    assert.match(desk, /central-bank-gold-reserves/);
    assert.match(desk, /inflation-purchasing-power/);
    assert.match(desk, /bretton-woods-nixon-1971/);
    assert.match(desk, /weimar-1923/);
  });

  it("path 4 — Weimar / hyperinflation journey", () => {
    const history = bodyText(historyHubBody);
    assert.match(history, /what caused Weimar hyperinflation/i);
    assert.match(history, /\[inflation and purchasing power\]\(\/sound-money\/inflation-purchasing-power\)/);

    const century = bodyText(twentiethCenturyHubBody);
    assert.match(century, /what caused Weimar hyperinflation/i);
    assert.match(century, /Weimar/i);

    const weimar = bodyText(getBody("20th-century", "weimar-1923")!);
    assert.match(weimar, /what caused Weimar hyperinflation/i);
    assert.match(weimar, /\[inflation and purchasing power\]\(\/sound-money\/inflation-purchasing-power\)/);
    assert.match(weimar, /\[Money\]\(\/desk\)/);
    assert.match(weimar, /\[assignats\]\(\/history\/banks-paper\/assignats\)/);
    assert.doesNotMatch(weimar, TIP_PATTERN);
    assert.doesNotMatch(weimar, /buy gold now|forecast next year|every currency will/i);

    const inflation = bodyText(getBody("sound-money", "inflation-purchasing-power")!);
    assert.match(inflation, /Weimar \/ hyperinflation/i);
    assert.match(inflation, /\[Weimar 1923\]\(\/history\/20th-century\/weimar-1923\)/);

    const hub = bodyText(soundMoneyHubBody);
    assert.match(hub, /what caused Weimar hyperinflation/i);
    assert.match(hub, /\[Weimar 1923\]\(\/history\/20th-century\/weimar-1923\)/);

    const cluster = getCluster("20th-century");
    const episode = cluster?.episodes.find((e) => e.slug === "weimar-1923");
    assert.ok(episode);
    assert.ok(episode.related.length > 0);
    assert.ok(episode.related.some((r) => r.href === "/sound-money/inflation-purchasing-power"));
    assert.ok(episode.related.some((r) => r.href === "/history/banks-paper/assignats"));
    assert.ok(episode.related.some((r) => r.href === "/sound-money/what-is-sound-money"));
  });
});
