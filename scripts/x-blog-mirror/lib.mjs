/**
 * Shared helpers for the @GoldSilverHQ X Article → site blog mirror.
 *
 * Auth: set X_BEARER_TOKEN (app-only Bearer) in the environment / GH Actions secret.
 * Connected Cursor X MCP as another account (e.g. @EpicFootyFacts) can still *read*
 * public GSHQ Articles via MCP tools; this script is for headless cron.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = join(__dirname, "../..");
export const SEEN_PATH = join(REPO_ROOT, "data/x-articles-seen.json");

export const GSHQ_USERNAME = "GoldSilverHQ";
export const GSHQ_USER_ID = "1744721184623890432";

/** Titles we never mirror as blog essays (stock tips / ticker roundups). */
export const SKIP_TITLE_RE =
  /weekly\s*roundup|silver\s*stocks\s*[-–—]\s*weekly|miners?\s+weekly/i;

export function loadSeen() {
  if (!existsSync(SEEN_PATH)) {
    return {
      updatedAt: new Date().toISOString(),
      account: GSHQ_USERNAME,
      accountUserId: GSHQ_USER_ID,
      articles: [],
    };
  }
  return JSON.parse(readFileSync(SEEN_PATH, "utf8"));
}

export function saveSeen(seen) {
  mkdirSync(dirname(SEEN_PATH), { recursive: true });
  seen.updatedAt = new Date().toISOString();
  writeFileSync(SEEN_PATH, `${JSON.stringify(seen, null, 2)}\n`, "utf8");
}

export function seenIds(seen) {
  return new Set((seen.articles ?? []).map((a) => String(a.articleId)));
}

export function articleIdFromUrl(url) {
  if (!url) return null;
  const m = String(url).match(/\/i\/article\/(\d+)/);
  return m ? m[1] : null;
}

export function shouldSkipTitle(title) {
  return SKIP_TITLE_RE.test(title ?? "");
}

export function bearerToken() {
  return process.env.X_BEARER_TOKEN || process.env.TWITTER_BEARER_TOKEN || "";
}

/**
 * GET helper for X API v2. Throws on non-2xx.
 * @param {string} pathAndQuery e.g. `/2/users/:id/tweets?...`
 */
export async function xGet(pathAndQuery) {
  const token = bearerToken();
  if (!token) {
    const err = new Error("Missing X_BEARER_TOKEN (or TWITTER_BEARER_TOKEN)");
    err.code = "NO_X_TOKEN";
    throw err;
  }
  const url = pathAndQuery.startsWith("http")
    ? pathAndQuery
    : `https://api.x.com${pathAndQuery}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "User-Agent": "GoldSilverHQ-x-blog-mirror/1.0",
    },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`X API ${res.status}: ${text.slice(0, 400)}`);
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return body;
}

/**
 * List recent GSHQ posts that carry an X Article card.
 * Newest first. Uses user posts endpoint + article fields.
 */
export async function listRecentArticles({ maxResults = 50 } = {}) {
  const fields = [
    "created_at",
    "entities",
    "article",
    "attachments",
    "author_id",
    "text",
  ].join(",");
  const expansions = ["article.cover_media", "attachments.media_keys"].join(",");
  const mediaFields = ["url", "preview_image_url", "type", "width", "height"].join(",");
  const q = new URLSearchParams({
    max_results: String(Math.min(100, Math.max(5, maxResults))),
    exclude: "retweets,replies",
    "tweet.fields": fields,
    expansions,
    "media.fields": mediaFields,
  });
  const data = await xGet(`/2/users/${GSHQ_USER_ID}/tweets?${q}`);
  const mediaByKey = new Map(
    (data.includes?.media ?? []).map((m) => [m.media_key, m]),
  );
  const out = [];
  for (const post of data.data ?? []) {
    const urls = (post.entities?.urls ?? [])
      .map((u) => u.expanded_url || u.unwound_url || "")
      .filter(Boolean);
    const articleUrl =
      urls.find((u) => /\/i\/article\/\d+/.test(u)) ||
      (post.article ? `https://x.com/i/article/${post.article.id ?? ""}` : null);
    const articleId =
      articleIdFromUrl(articleUrl) ||
      (post.article?.id ? String(post.article.id) : null);
    // Posts with an `article` object OR an /i/article URL count as Articles.
    if (!post.article && !articleId) continue;
    const title = (post.article?.title || "").trim();
    const coverKey = post.article?.cover_media;
    const cover = coverKey ? mediaByKey.get(coverKey) : null;
    out.push({
      postId: post.id,
      articleId: articleId || post.id,
      articleUrl:
        articleId != null
          ? `https://x.com/i/article/${articleId}`
          : articleUrl,
      title,
      previewText: post.article?.preview_text ?? "",
      plainText: post.article?.plain_text ?? "",
      createdAt: post.created_at,
      coverMediaKey: coverKey ?? null,
      coverUrl: cover?.url || cover?.preview_image_url || null,
      skip: shouldSkipTitle(title),
    });
  }
  // Newest first (API usually is; sort defensively).
  out.sort((a, b) => (a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0));
  return out;
}

/**
 * Diff against seen-list. Returns at most one eligible next Article (newest).
 */
export function nextUnseenArticle(articles, seen) {
  const known = seenIds(seen);
  for (const a of articles) {
    if (known.has(String(a.articleId))) continue;
    if (a.skip) continue;
    return a;
  }
  return null;
}

export function siteAlreadyHasArticle({ articleId, title, articleUrl }) {
  // Lightweight check against blog.ts source (no TS import in plain node).
  const blogSrc = readFileSync(join(REPO_ROOT, "src/lib/content/blog.ts"), "utf8");
  if (articleId && blogSrc.includes(String(articleId))) return true;
  if (articleUrl && blogSrc.includes(articleUrl)) return true;
  if (title) {
    const needle = title.trim().slice(0, 48);
    if (needle.length > 20 && blogSrc.includes(needle)) return true;
  }
  return false;
}
