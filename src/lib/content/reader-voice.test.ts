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
    .flatMap((s) => [s.heading, ...(s.callout?.paragraphs ?? []), ...s.paragraphs, ...(s.list ?? [])])
    .filter(Boolean)
    .join("\n");
}

/** Writer/taxonomy jargon that must not appear in reader-facing copy. */
const FORBIDDEN =
  /\b(Pillar\s*[1-4]|Flavio|thicken(?:ed|ing)?|sitemap-ready|write queue|long-tail first|topical map|episode stub|Continue the map|Best of the map|episodes drafted|Phase 3 draft)\b|\bSpoke\s+\d|\bCluster\s+\d|How this page sits in the pillar|Do not park Weimar/i;

function assertClean(label: string, text: string) {
  assert.doesNotMatch(text, FORBIDDEN, `${label} still has writer/taxonomy jargon`);
}

describe("reader voice (no writer jargon on sitemap pages)", () => {
  it("keeps hub bodies free of taxonomy jargon", () => {
    for (const [label, body] of [
      ["history hub", historyHubBody],
      ["sound-money hub", soundMoneyHubBody],
      ["markets hub", marketsHubBody],
      ["20th-century hub", twentiethCenturyHubBody],
      ["america hub", americaHubBody],
      ["silver hub", silverHubBody],
      ["banks-paper hub", banksPaperHubBody],
      ["ancient hub", ancientHubBody],
    ] as const) {
      assertClean(label, bodyText(body));
    }
  });

  it("keeps every Phase-1 article body free of taxonomy jargon", () => {
    for (const path of PHASE1_SITEMAP_PATHS) {
      if (path === "/history" || path === "/sound-money" || path === "/markets") continue;
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
      "routes/about.tsx",
      "routes/desk.tsx",
      "components/Article.tsx",
      "components/HomeEditorial.tsx",
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
    }
  });
});
