import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  getBody,
  historyHubBody,
  marketsHubBody,
  americaHubBody,
  silverHubBody,
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

const ARRIVAL =
  /If you arrived|start here:|New here\?|what caused Weimar hyperinflation|what was the piece of eight\?|what was the Panic of 1907\?|what was Silver Thursday\?|why 1971 mattered|central-bank gold buying|vocabulary first, not a shop/i;

describe("intent paths (existing URLs only)", () => {
  it("keeps the sitemap freeze — no new mining/intent URLs", () => {
    assert.equal(PHASE1_SITEMAP_PATHS.length, 58);
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/year"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/1776"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/sound-money/what-is-sound-money"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/history/20th-century/bretton-woods-nixon-1971"));
    assert.ok(PHASE1_SITEMAP_PATHS.includes("/markets/central-bank-gold-reserves"));
    assert.ok(!PHASE1_SITEMAP_PATHS.some((p) => /\/intent|\/mining|\/miner/.test(p)));
  });

  it("drops query-shaped arrival openings from reading copy", () => {
    const bodies = readFileSync(join(root, "lib/content/bodies.ts"), "utf8");
    assert.doesNotMatch(bodies, ARRIVAL);

    const hubs = [
      historyHubBody,
      soundMoneyHubBody,
      marketsHubBody,
      twentiethCenturyHubBody,
      americaHubBody,
      silverHubBody,
    ];
    for (const hub of hubs) assert.doesNotMatch(bodyText(hub), ARRIVAL);

    const home = readFileSync(join(root, "components/HomeDashboard.tsx"), "utf8");
    assert.doesNotMatch(home, ARRIVAL);
    assert.doesNotMatch(home, /weimar-1923|piece-of-eight|panic-1907-fed|silver-thursday/);

    const desk = readFileSync(join(root, "components/FullDesk.tsx"), "utf8");
    assert.doesNotMatch(desk, /not a reason for a private holder to copy a central bank/);
    assert.doesNotMatch(desk, /not a forecast or a tip to buy metal/);
    assert.doesNotMatch(desk, /weimar-1923/);
  });

  it("keeps documentary openings and related links", () => {
    const def = bodyText(getBody("sound-money", "what-is-sound-money")!);
    assert.match(def, /A note can clear the till on Monday/);
    assert.match(def, /\[hard money (?:vs|versus) fiat\]\(\/sound-money\/hard-money-vs-fiat\)/);
    assert.match(def, /\[Nixon shock\]\(\/history\/20th-century\/bretton-woods-nixon-1971\)/);
    assert.doesNotMatch(def, TIP_PATTERN);
    const idea = getIdea("what-is-sound-money");
    assert.ok(idea?.related?.some((r) => r.href === "/history/20th-century/bretton-woods-nixon-1971"));

    const nixon = bodyText(getBody("20th-century", "bretton-woods-nixon-1971")!);
    assert.match(nixon, /On Sunday evening, \*\*15 August 1971\*\*/);
    assert.match(nixon, /\[official gold book value\]\(\/markets\/official-gold-book-value\)/);
    assert.doesNotMatch(nixon, TIP_PATTERN);
    const century = getCluster("20th-century");
    const nixonEp = century?.episodes.find((e) => e.slug === "bretton-woods-nixon-1971");
    assert.ok(nixonEp?.related?.some((r) => r.href === "/markets/official-gold-book-value"));
    assert.ok(nixonEp?.related?.some((r) => r.href === "/sound-money/backed-money"));
    assert.ok(nixonEp?.related?.some((r) => r.href === "/sound-money/what-is-sound-money"));

    const cb = bodyText(getBody("markets", "central-bank-gold-reserves")!);
    assert.match(cb, /It is not a shopping list/);
    assert.doesNotMatch(cb, /buy gold now|best gold stock|copy the central bank as advice/i);
    const cbPage = getMarket("central-bank-gold-reserves");
    assert.ok(cbPage?.related?.some((r) => r.href === "/sound-money/backed-money"));
    assert.ok(cbPage?.related?.some((r) => r.href === "/history/20th-century/bretton-woods-nixon-1971"));

    const weimar = bodyText(getBody("20th-century", "weimar-1923")!);
    assert.match(weimar, /In the autumn of \*\*1923\*\*/);
    assert.doesNotMatch(weimar, TIP_PATTERN);
    const weimarEp = century?.episodes.find((e) => e.slug === "weimar-1923");
    assert.ok((weimarEp?.related?.length ?? 0) > 0);
    assert.ok(weimarEp?.related?.some((r) => r.href === "/sound-money/inflation-purchasing-power"));
    assert.ok(weimarEp?.related?.some((r) => r.href === "/history/banks-paper/assignats"));
    assert.ok(weimarEp?.related?.some((r) => r.href === "/sound-money/what-is-sound-money"));

    const piece = bodyText(getBody("silver", "piece-of-eight")!);
    assert.match(piece, /For more than two centuries/);
    assert.match(piece, /\[Potosí\]\(\/history\/silver\/potosi\)/);
    assert.match(piece, /\[early U\.S\. coinage\]\(\/history\/america\/early-us-coinage\)/);
    assert.doesNotMatch(piece, TIP_PATTERN);
    const silver = getCluster("silver");
    const pieceEp = silver?.episodes.find((e) => e.slug === "piece-of-eight");
    assert.ok(pieceEp?.related?.some((r) => r.href === "/history/silver/potosi"));
    assert.ok(pieceEp?.related?.some((r) => r.href === "/history/america/early-us-coinage"));
    assert.ok(pieceEp?.related?.some((r) => r.href === "/history/silver/bimetallism"));
    assert.ok(pieceEp?.related?.some((r) => r.href === "/markets/gold-silver-ratio"));

    const panic = bodyText(getBody("20th-century", "panic-1907-fed")!);
    assert.match(panic, /On \*\*22 October 1907\*\*/);
    assert.match(panic, /\[end of the classical gold standard\]\(\/history\/20th-century\/classical-gold-standard-end\)/);
    assert.doesNotMatch(panic, TIP_PATTERN);
    assert.doesNotMatch(panic, /end the Fed|buy gold now|price target for/i);
    const panicEp = century?.episodes.find((e) => e.slug === "panic-1907-fed");
    assert.ok((panicEp?.related?.length ?? 0) >= 4);
    assert.ok(panicEp?.related?.some((r) => r.href === "/history/20th-century/classical-gold-standard-end"));
    assert.ok(panicEp?.related?.some((r) => r.href === "/history/america/jackson-and-the-bank"));
    assert.ok(panicEp?.related?.some((r) => r.href === "/history/america/road-back-gold"));
    const america = getCluster("america");
    assert.ok(america?.related?.some((r) => r.href === "/history/20th-century/panic-1907-fed"));
    assert.ok(century?.related?.some((r) => r.href === "/history/20th-century/panic-1907-fed"));

    const thursday = bodyText(getBody("silver", "silver-thursday")!);
    assert.match(thursday, /On \*\*27 March 1980\*\*/);
    assert.match(thursday, /\[gold–silver ratio\]\(\/markets\/gold-silver-ratio\)/);
    assert.match(thursday, /\[information versus advice\]\(\/sound-money\/information-not-advice\)/);
    assert.doesNotMatch(thursday, TIP_PATTERN);
    const thursdayEp = silver?.episodes.find((e) => e.slug === "silver-thursday");
    assert.ok((thursdayEp?.related?.length ?? 0) >= 4);
    assert.ok(thursdayEp?.related?.some((r) => r.href === "/markets/gold-silver-ratio"));
    assert.ok(thursdayEp?.related?.some((r) => r.href === "/history/silver/monetary-and-industry"));
    assert.ok(thursdayEp?.related?.some((r) => r.href === "/history/america/crime-of-1873"));
    assert.ok(thursdayEp?.related?.some((r) => r.href === "/history/silver/bimetallism"));
    assert.ok(silver?.related?.some((r) => r.href === "/history/silver/silver-thursday"));
  });
});
