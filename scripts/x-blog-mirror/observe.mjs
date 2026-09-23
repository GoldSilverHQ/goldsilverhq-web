#!/usr/bin/env node
/**
 * Observe pass: list @GoldSilverHQ X Articles vs data/x-articles-seen.json.
 *
 * Exit 0 always on "nothing to do" / missing token (prints reason).
 * Exit 0 with JSON summary when a candidate exists (does not publish).
 *
 * Usage:
 *   node scripts/x-blog-mirror/observe.mjs
 *   node scripts/x-blog-mirror/observe.mjs --json
 */

import {
  bearerToken,
  listRecentArticles,
  loadSeen,
  nextUnseenArticle,
  siteAlreadyHasArticle,
  shouldSkipTitle,
} from "./lib.mjs";

const asJson = process.argv.includes("--json");

function print(obj) {
  if (asJson) {
    console.log(JSON.stringify(obj, null, 2));
  } else {
    console.log(obj.message ?? JSON.stringify(obj, null, 2));
    if (obj.articles) {
      for (const a of obj.articles) {
        const mark = a.seen ? "seen" : a.skip ? "skip" : "NEW";
        console.log(`  [${mark}] ${a.createdAt?.slice(0, 10) ?? "?"}  ${a.title || "(no title)"}  ${a.articleUrl}`);
      }
    }
    if (obj.next) {
      console.log(`\nNext candidate: ${obj.next.title}\n  ${obj.next.articleUrl}`);
    }
  }
}

async function main() {
  if (!bearerToken()) {
    print({
      ok: true,
      blocked: "NO_X_TOKEN",
      message:
        "No X_BEARER_TOKEN — observe skipped quietly. Add the secret for GH Action cron, or run via Cursor X MCP (public @GoldSilverHQ reads).",
    });
    process.exit(0);
  }

  const seen = loadSeen();
  const known = new Set((seen.articles ?? []).map((a) => String(a.articleId)));
  let articles;
  try {
    articles = await listRecentArticles({ maxResults: 50 });
  } catch (err) {
    print({
      ok: false,
      error: err.message,
      message: `X API error: ${err.message}`,
    });
    process.exit(err.code === "NO_X_TOKEN" ? 0 : 1);
  }

  const summarized = articles.map((a) => ({
    articleId: a.articleId,
    postId: a.postId,
    title: a.title,
    articleUrl: a.articleUrl,
    createdAt: a.createdAt,
    skip: a.skip || shouldSkipTitle(a.title),
    seen: known.has(String(a.articleId)),
    onSite: siteAlreadyHasArticle(a),
  }));

  let next = nextUnseenArticle(articles, seen);
  if (next && siteAlreadyHasArticle(next)) {
    next = null;
  }

  print({
    ok: true,
    count: summarized.length,
    unseenEligible: next ? 1 : 0,
    message: next
      ? `1 new eligible Article: ${next.title}`
      : "No new eligible Articles (exit quietly).",
    articles: summarized,
    next: next
      ? {
          articleId: next.articleId,
          postId: next.postId,
          title: next.title,
          articleUrl: next.articleUrl,
          createdAt: next.createdAt,
          coverUrl: next.coverUrl,
          plainTextChars: (next.plainText || "").length,
        }
      : null,
  });
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
