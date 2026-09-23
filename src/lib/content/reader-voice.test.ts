import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  americaHubBody,
  ancientHubBody,
  banksPaperHubBody,
  getBody,
  historyHubBody,
  marketsHubBody,
  practiceHubBody,
  silverHubBody,
  soundMoneyHubBody,
  twentiethCenturyHubBody,
  type Section,
} from "./bodies.ts";
import {
  historyClusters,
  ideaPages,
  marketPages,
  pillars,
} from "./map.ts";
import { PHASE1_SITEMAP_PATHS } from "../seo/robots-sitemap.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function bodyText(sections: Section[]) {
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

/** Writer/taxonomy jargon that must not appear in reader-facing copy. */
const FORBIDDEN =
  /\b(Pillar\s*[1-4]|Flavio|thicken(?:ed|ing)?|sitemap-ready|write queue|long-tail first|topical map|episode stub|Continue the map|Best of the map|episodes drafted|Phase 3 draft|BaFin-clean|catalogue-plain|money-path series|List-building CTAs|visual companion to this episode|events live there|narrative lives there)\b|\bSpoke\s+\d|\bCluster\s+\d|How this page sits in the pillar|Why this stop matters|this page sits|This hub is that sequence|History['’]s job on this stop|Do not park Weimar|Do not mash \d|no spaghetti|issuer-discretion test/i;

/** Structural blog chrome that hubs must not lead with. */
const STRUCTURAL_HUB_CHROME =
  /What you will find here|What this is not|How to read an article|How to read a markets page|Where the other sections sit|A reading order|Where to start|Where to enter the modern story|How the five chapters form a path|Start with a date, or with a definition|Four pages that open the rest of the site|Read by chapter|Read by definition|Read by topic|Articles in this chapter|Five chapters$|The five chapters|The four topics|The definitions/;

function assertClean(label: string, text: string) {
  assert.doesNotMatch(text, FORBIDDEN, `${label} still has writer/taxonomy jargon`);
}

describe("reader voice (no writer jargon on sitemap pages)", () => {
  it("keeps hub bodies free of taxonomy jargon", () => {
    for (const [label, body] of [
      ["history hub", historyHubBody],
      ["sound-money hub", soundMoneyHubBody],
      ["markets hub", marketsHubBody],
      ["practice hub", practiceHubBody],
      ["20th-century hub", twentiethCenturyHubBody],
      ["america hub", americaHubBody],
      ["silver hub", silverHubBody],
      ["banks-paper hub", banksPaperHubBody],
      ["ancient hub", ancientHubBody],
    ] as const) {
      assertClean(label, bodyText(body));
      assert.doesNotMatch(bodyText(body), STRUCTURAL_HUB_CHROME, `${label} still has structural hub chrome`);
    }
  });

  it("opens history hub with a documentary stake, not a sitemap briefing", () => {
    const opener = historyHubBody[0]?.paragraphs[0] ?? "";
    assert.match(opener, /1923|1971/);
    assert.doesNotMatch(opener, /This section records|not a glossary|not a sales page/);
  });

  it("keeps hub episode doors as narrative links, not catalog-only lists", () => {
    for (const [label, body] of [
      ["history hub", historyHubBody],
      ["20th-century hub", twentiethCenturyHubBody],
      ["america hub", americaHubBody],
      ["silver hub", silverHubBody],
      ["banks-paper hub", banksPaperHubBody],
      ["ancient hub", ancientHubBody],
      ["sound-money hub", soundMoneyHubBody],
      ["markets hub", marketsHubBody],
    ] as const) {
      const text = bodyText(body);
      assert.doesNotMatch(text, /^Articles in this chapter$/m, `${label} still has catalog list heading`);
      assert.match(text, /\]\(\//, `${label} must still door into child pages`);
    }
    const history = bodyText(historyHubBody);
    assert.match(history, /\[Weimar \*\*1923\*\*\]\(\/history\/20th-century\/weimar-1923\)/);
    assert.match(history, /\[John Law \*\*1720\*\*\]\(\/history\/banks-paper\/john-law\)/);
    assert.match(history, /\[Potosí\]\(\/history\/silver\/potosi\)/);
  });

  it("keeps every Phase-1 article body free of taxonomy jargon", () => {
    for (const path of PHASE1_SITEMAP_PATHS) {
      if (path === "/history" || path === "/sound-money" || path === "/gold-silver" || path === "/markets") continue;
      const parts = path.split("/").filter(Boolean);
      if (parts[0] === "history" && parts.length === 3) {
        const body = getBody(parts[1], parts[2]);
        assert.ok(body, `missing body for ${path}`);
        assertClean(path, bodyText(body));
      } else if (parts[0] === "sound-money" && parts.length === 2) {
        const body = getBody("sound-money", parts[1]);
        assert.ok(body, `missing body for ${path}`);
        assertClean(path, bodyText(body));
      } else if (parts[0] === "markets" && parts.length === 2) {
        const body = getBody("markets", parts[1]);
        assert.ok(body, `missing body for ${path}`);
        assertClean(path, bodyText(body));
      } else if (parts[0] === "gold-silver" && parts.length === 2) {
        const body = getBody("gold-silver", parts[1]);
        assert.ok(body, `missing body for ${path}`);
        assertClean(path, bodyText(body));
      }
    }
  });

  it("keeps pillar kickers and featured chrome free of Pillar N labels", () => {
    for (const p of pillars) {
      assert.doesNotMatch(p.kicker, /Pillar\s*[1-4]/i);
      assertClean(`pillar ${p.id} summary`, p.summary);
    }
    for (const cluster of historyClusters) {
      assertClean(`cluster ${cluster.slug} summary`, cluster.summary);
      for (const ep of cluster.episodes) {
        assertClean(`${cluster.slug}/${ep.slug} summary`, ep.summary);
        assertClean(`${cluster.slug}/${ep.slug} paragraphs`, ep.paragraphs.join("\n"));
      }
    }
    for (const page of [...ideaPages, ...marketPages]) {
      assertClean(`${page.slug} summary`, page.summary);
      assertClean(`${page.slug} paragraphs`, page.paragraphs.join("\n"));
    }
  });

  it("keeps route chrome free of Pillar/Cluster/Spoke/Skeleton labels", () => {
    const files = [
      "routes/history/index.tsx",
      "routes/history/$cluster/index.tsx",
      "routes/history/$cluster/$episode.tsx",
      "routes/sound-money/index.tsx",
      "routes/sound-money/$slug.tsx",
      "routes/markets/index.tsx",
      "routes/markets/$slug.tsx",
      "routes/gold-silver/index.tsx",
      "routes/gold-silver/$slug.tsx",
      "routes/about.tsx",
      "routes/desk.tsx",
      "components/Article.tsx",
      "components/HomeEditorial.tsx",
      "components/HistoryYearCards.tsx",
      "components/NotFound.tsx",
    ];
    for (const rel of files) {
      const src = readFileSync(join(root, rel), "utf8");
      assert.doesNotMatch(src, /Pillar\s*[1-4]/);
      assert.doesNotMatch(src, /Continue the map/);
      assert.doesNotMatch(src, /Best of the map/);
      assert.doesNotMatch(src, /episodes drafted/);
      assert.doesNotMatch(src, /Spoke \{/);
      assert.doesNotMatch(src, />Cluster</);
      assert.doesNotMatch(src, /Episode · Pillar/);
      assert.doesNotMatch(src, /Phase 3 draft/);
      assert.doesNotMatch(src, /Skeleton in the topical map/);
      assert.doesNotMatch(src, /Four pillars/);
      assert.doesNotMatch(src, /BaFin-clean/);
      assert.doesNotMatch(src, /Tap a year to open the episode/);
      assert.doesNotMatch(src, /Start with a date, or with a definition/);
      assert.doesNotMatch(src, /Four pages that open the rest of the site/);
      assert.doesNotMatch(src, /Read by chapter/);
      assert.doesNotMatch(src, /Read by definition/);
      assert.doesNotMatch(src, /Read by topic/);
      assert.doesNotMatch(src, /The five chapters/);
      assert.doesNotMatch(src, /The four topics/);
      assert.doesNotMatch(src, />Chapter \{/);
      assert.doesNotMatch(src, />Topic \{/);
      assert.doesNotMatch(src, /All history chapters/);
    }
  });

  it("keeps featured home cards free of unglossed insider openers", () => {
    const featuredSrc = readFileSync(join(root, "lib/content/featured.ts"), "utf8");
    assert.doesNotMatch(featuredSrc, /Then the Rentenmark\./);
    assert.doesNotMatch(featuredSrc, /floating fiat\./);
    assert.match(featuredSrc, /Rentenmark\) that restored/);
    assert.match(featuredSrc, /fiat = money by law/);
  });
});
