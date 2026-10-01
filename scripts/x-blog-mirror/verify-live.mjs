#!/usr/bin/env node
/**
 * Checks that every mirrored X Article in data/x-articles-seen.json answers
 * 200 on the production site. A mirror can merge cleanly and still never go
 * live (e.g. Vercel refusing the production build), and nothing else notices.
 *
 * Exit 0: all live. Exit 79: one or more pages missing (list on stdout and in
 * data/x-articles-not-live.json). Exit 1: unexpected error.
 */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadSeen, mirroredEntriesDueLive, REPO_ROOT, SITE_ORIGIN } from "./lib.mjs";

const origin = process.env.SITE_ORIGIN || SITE_ORIGIN;
const outPath = join(REPO_ROOT, "data/x-articles-not-live.json");

async function status(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, {
        redirect: "follow",
        headers: { "User-Agent": "GoldSilverHQ-x-blog-mirror/1.0 (live-check)" },
      });
      if (res.status < 500 || attempt === 1) return res.status;
    } catch (err) {
      if (attempt === 1) return `error: ${err.message}`;
    }
  }
}

async function main() {
  const due = mirroredEntriesDueLive(loadSeen());
  const missing = [];
  for (const a of due) {
    const url = `${origin}${a.sitePath}`;
    const code = await status(url);
    if (code !== 200)
      missing.push({
        articleId: a.articleId,
        title: a.title,
        url,
        status: code,
        mirroredAt: a.mirroredAt,
      });
  }

  console.log(
    `x-blog-mirror live check: ${due.length - missing.length}/${due.length} mirrored posts live on ${origin}`,
  );
  if (!missing.length) process.exit(0);

  for (const m of missing) {
    console.log(`::error::Mirrored but not live (${m.status}): ${m.url} — ${m.title}`);
  }
  writeFileSync(
    outPath,
    `${JSON.stringify({ checkedAt: new Date().toISOString(), missing }, null, 2)}\n`,
  );
  process.exit(79);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
