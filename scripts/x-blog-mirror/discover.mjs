#!/usr/bin/env node
/**
 * Dry-run / CI entry: observe only. Never invents essay text.
 * If a new Article exists and X_BEARER_TOKEN is set, writes
 * data/x-articles-pending.json for an agent/PR to expand + publish.
 * If nothing new: exits 0, no commit needed.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  bearerToken,
  listRecentArticles,
  loadSeen,
  siteAlreadyHasArticle,
  REPO_ROOT,
} from "./lib.mjs";

const pendingPath = join(REPO_ROOT, "data/x-articles-pending.json");

async function main() {
  if (!bearerToken()) {
    console.log(
      "::notice::x-blog-mirror: no X_BEARER_TOKEN — scaffolding only. Add repo secret to enable cron discover.",
    );
    process.exit(0);
  }

  const seen = loadSeen();
  const known = new Set((seen.articles ?? []).map((a) => String(a.articleId)));
  const articles = await listRecentArticles({ maxResults: 50 });

  const skippedTitle = articles.filter((a) => a.skip);
  const alreadySeen = articles.filter((a) => !a.skip && known.has(String(a.articleId)));
  const onSite = articles.filter(
    (a) => !a.skip && !known.has(String(a.articleId)) && siteAlreadyHasArticle(a),
  );
  const eligible = articles.filter(
    (a) => !a.skip && !known.has(String(a.articleId)) && !siteAlreadyHasArticle(a),
  );

  // Near-miss log: why candidates did not become the pending pick.
  for (const a of skippedTitle) {
    console.log(
      `::notice::near-miss skip-title: ${a.articleId} — ${a.title || "(no title)"}`,
    );
  }
  for (const a of onSite) {
    console.log(
      `::notice::near-miss already-on-site: ${a.articleId} — ${a.title || "(no title)"}`,
    );
  }
  if (eligible.length > 1) {
    for (const a of eligible.slice(1)) {
      console.log(
        `::notice::near-miss queued-behind-newer: ${a.articleId} — ${a.title || "(no title)"} (at most one per run)`,
      );
    }
  }
  if (alreadySeen.length) {
    console.log(
      `::notice::near-miss already-seen: ${alreadySeen.length} Article(s) already in seen-list.`,
    );
  }

  let next = eligible[0] ?? null;

  if (!next) {
    console.log("::notice::x-blog-mirror: no new eligible Articles.");
    process.exit(0);
  }

  mkdirSync(dirname(pendingPath), { recursive: true });
  const pending = {
    detectedAt: new Date().toISOString(),
    article: {
      articleId: next.articleId,
      postId: next.postId,
      title: next.title,
      articleUrl: next.articleUrl,
      createdAt: next.createdAt,
      coverUrl: next.coverUrl,
      plainText: next.plainText,
      previewText: next.previewText,
    },
    queuedBehind: eligible.slice(1).map((a) => ({
      articleId: a.articleId,
      title: a.title,
      articleUrl: a.articleUrl,
    })),
    instructions: [
      "Write a LONGER site essay (≈1,200–1,800 words) from plainText — same facts, expand context, no invented numbers.",
      "Reuse title spine; BaFin-clean; no stock tips; credit X Article once.",
      "Download cover with scripts/x-blog-mirror/download-cover.mjs; register blog.ts + bodies.ts + article-media.ts + sitemap.",
      "Append data/x-articles-seen.json; commit: blog: mirror X Article <id> — <short title>",
      "Open PR; merge when CI green (same auto-merge policy as desk drafts).",
      "Note: compose/articles/edit/{id} is the author editor URL — public form is /i/article/{id}. Drafts are invisible to this discover path.",
    ],
  };
  writeFileSync(pendingPath, `${JSON.stringify(pending, null, 2)}\n`);
  console.log(`::warning::New X Article pending mirror: ${next.title}`);
  console.log(`Wrote ${pendingPath}`);
  // Non-zero so a workflow step can open a draft PR / notify — do not loop-spam publishes.
  process.exit(78);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
