#!/usr/bin/env node
/**
 * Dry-run / CI entry: observe only. Never invents essay text.
 * Discovery is credit-free (FxTwitter public JSON); the paid X API is only
 * a fallback when X_BEARER_TOKEN is set and every public source fails.
 * If new Article(s) exist, writes data/x-articles-pending.json (full text,
 * cover URL and every inline MEDIA URL) for an agent/PR to expand + publish.
 * Processes every eligible unseen Article in the schedule window (no 1/run cap).
 * Exit codes: 0 nothing new · 78 pending written · 2 discovery unavailable.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  loadSeen,
  unseenEligibleArticles,
  siteAlreadyHasArticle,
  REPO_ROOT,
} from "./lib.mjs";
import { discoverArticles, enrichArticles } from "./public-source.mjs";

const pendingPath = join(REPO_ROOT, "data/x-articles-pending.json");

function summarizeArticle(a) {
  return {
    articleId: a.articleId,
    postId: a.postId,
    title: a.title,
    articleUrl: a.articleUrl,
    postUrl: `https://x.com/GoldSilverHQ/status/${a.postId}`,
    createdAt: a.createdAt,
    coverUrl: a.coverUrl,
    inlineMedia: a.inlineMedia ?? null,
    inlineMediaCount: Array.isArray(a.inlineMedia) ? a.inlineMedia.length : null,
    detailSource: a.detailSource ?? null,
    detailError: a.detailError ?? null,
    plainText: a.plainText,
    previewText: a.previewText,
  };
}

async function main() {
  const seen = loadSeen();
  const known = new Set((seen.articles ?? []).map((a) => String(a.articleId)));
  let discovered;
  try {
    discovered = await discoverArticles();
  } catch (err) {
    console.log(`::error::x-blog-mirror: discovery unavailable — ${err.message}`);
    process.exit(2);
  }
  const { source, articles, warnings } = discovered;
  for (const w of warnings) console.log(`::warning::x-blog-mirror: ${w}`);
  console.log(`x-blog-mirror: ${articles.length} recent Article(s) via ${source}.`);

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
  const pendingArticles = (await enrichArticles(eligible)).map(summarizeArticle);
  for (const a of pendingArticles) {
    if (a.inlineMediaCount == null) {
      console.log(
        `::warning::inline media unknown for ${a.articleId} (${a.detailError ?? a.detailSource}) — fetch the Article before publishing; cover-only is a failed mirror.`,
      );
    }
  }
  const pending = {
    detectedAt: new Date().toISOString(),
    source,
    /** All eligible Articles in this schedule window (newest first). */
    articles: pendingArticles,
    /** @deprecated Prefer `articles`; kept as first entry for older issue templates. */
    article: pendingArticles[0],
    instructions: [
      "Process EVERY Article in `articles` this run — no 1/run cap. One PR with multiple posts or sequential PRs are both OK.",
      "After each successful mirror, append that id to data/x-articles-seen.json before starting the next (do not fail halfway without recording what landed).",
      "Write a LONGER site essay (≈1,200–1,800 words) from plainText — same facts, expand context, no invented numbers.",
      "Reuse title spine; BaFin-clean; no stock tips; credit X Article once.",
      "Download COVER (coverUrl) with scripts/x-blog-mirror/download-cover.mjs → public/images/blog/<slug>.jpg + OG card; register ARTICLE_HEROES.",
      "MANDATORY: also download EVERY inline MEDIA figure (inlineMedia[].url, in order; captions in inlineMedia[].caption) from the X Article body (not cover-only) with scripts/x-blog-mirror/download-inline.mjs; insert each as a section `figure` in bodies.ts at the matching X Article breakpoint (portrait / quote cards / etc.). Cover alone is a failed mirror.",
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
