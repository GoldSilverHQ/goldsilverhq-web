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
  nextUnseenArticle,
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
  const articles = await listRecentArticles({ maxResults: 50 });
  let next = nextUnseenArticle(articles, seen);
  if (next && siteAlreadyHasArticle(next)) {
    console.log(`::notice::Candidate ${next.articleId} already on site; treat as seen.`);
    next = null;
  }

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
    instructions: [
      "Write a LONGER site essay (≈1,200–1,800 words) from plainText — same facts, expand context, no invented numbers.",
      "Reuse title spine; BaFin-clean; no stock tips; credit X Article once.",
      "Download cover with scripts/x-blog-mirror/download-cover.mjs; register blog.ts + bodies.ts + article-media.ts + sitemap.",
      "Append data/x-articles-seen.json; commit: blog: mirror X Article <id> — <short title>",
      "Open PR; merge when CI green (same auto-merge policy as desk drafts).",
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
