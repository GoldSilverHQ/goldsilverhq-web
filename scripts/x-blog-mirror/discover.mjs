#!/usr/bin/env node
/**
 * Dry-run / CI entry: observe only. Never invents essay text.
 * If new Article(s) exist and X_BEARER_TOKEN is set, writes
 * data/x-articles-pending.json for an agent/PR to expand + publish.
 * Processes every eligible unseen Article in the schedule window (no 1/run cap).
 * If nothing new: exits 0, no commit needed.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  bearerToken,
  listRecentArticles,
  loadSeen,
  unseenEligibleArticles,
  siteAlreadyHasArticle,
  REPO_ROOT,
} from "./lib.mjs";

const pendingPath = join(REPO_ROOT, "data/x-articles-pending.json");

function summarizeArticle(a) {
  return {
    articleId: a.articleId,
    postId: a.postId,
    title: a.title,
    articleUrl: a.articleUrl,
    createdAt: a.createdAt,
    coverUrl: a.coverUrl,
    plainText: a.plainText,
    previewText: a.previewText,
  };
}

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
  const candidates = unseenEligibleArticles(articles, seen);
  const onSite = candidates.filter((a) => siteAlreadyHasArticle(a));
  const eligible = candidates.filter((a) => !siteAlreadyHasArticle(a));

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
  if (alreadySeen.length) {
    console.log(
      `::notice::near-miss already-seen: ${alreadySeen.length} Article(s) already in seen-list.`,
    );
  }

  if (!eligible.length) {
    console.log("::notice::x-blog-mirror: no new eligible Articles.");
    process.exit(0);
  }

  mkdirSync(dirname(pendingPath), { recursive: true });
  const pendingArticles = eligible.map(summarizeArticle);
  const pending = {
    detectedAt: new Date().toISOString(),
    /** All eligible Articles in this schedule window (newest first). */
    articles: pendingArticles,
    /** @deprecated Prefer `articles`; kept as first entry for older issue templates. */
    article: pendingArticles[0],
    instructions: [
      "Process EVERY Article in `articles` this run — no 1/run cap. One PR with multiple posts or sequential PRs are both OK.",
      "After each successful mirror, append that id to data/x-articles-seen.json before starting the next (do not fail halfway without recording what landed).",
      "Write a LONGER site essay (≈1,200–1,800 words) from plainText — same facts, expand context, no invented numbers.",
      "Reuse title spine; BaFin-clean; no stock tips; credit X Article once.",
      "Download COVER with scripts/x-blog-mirror/download-cover.mjs → public/images/blog/<slug>.jpg + OG card; register ARTICLE_HEROES.",
      "MANDATORY: also download EVERY inline MEDIA figure from the X Article body (not cover-only) with scripts/x-blog-mirror/download-inline.mjs; insert each as a section `figure` in bodies.ts at the matching X Article breakpoint (portrait / quote cards / etc.). Cover alone is a failed mirror.",
      "Register blog.ts + bodies.ts + article-media.ts + sitemap.",
      "Commit: blog: mirror X Article <id> — <short title> (or one commit covering the batch).",
      "Open PR; merge when CI green (same auto-merge policy as desk drafts).",
      "Note: compose/articles/edit/{id} is the author editor URL — public form is /i/article/{id}. Drafts are invisible to this discover path.",
    ],
  };
  writeFileSync(pendingPath, `${JSON.stringify(pending, null, 2)}\n`);
  console.log(
    `::warning::New X Article(s) pending mirror (${eligible.length}): ${eligible.map((a) => a.title).join(" | ")}`,
  );
  console.log(`Wrote ${pendingPath}`);
  // Non-zero so a workflow step can open a draft issue / notify — do not loop-spam publishes.
  process.exit(78);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
