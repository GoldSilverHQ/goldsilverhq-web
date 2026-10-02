/**
 * Credit-free discovery of @GoldSilverHQ X Articles.
 *
 * Primary: FxTwitter public JSON (no key, no X API credits)
 *   - /2/profile/<user>/articles   → Article posts (title + body, no media)
 *   - /2/profile/<user>/statuses   → timeline, filtered to Article posts
 *   - /<user>/status/<postId>      → one Article with cover + inline MEDIA
 * Fallbacks: vxtwitter status JSON (title + cover only), then the paid X API
 * when X_BEARER_TOKEN is set. The X MCP is agent-side only and not used here.
 */

import {
  GSHQ_USERNAME,
  articleIdFromUrl,
  bearerToken,
  listRecentArticles,
  shouldSkipTitle,
} from "./lib.mjs";

export const FX_HOSTS = ["https://api.fxtwitter.com", "https://api.fixupx.com"];
const VX_HOST = "https://api.vxtwitter.com";
const UA = "GoldSilverHQ-x-blog-mirror/1.0 (+https://www.goldsilverhq.com)";

export async function fetchJson(url, { timeoutMs = 15_000 } = {}) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "application/json" },
    signal: AbortSignal.timeout(timeoutMs),
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`${res.status} from ${url}: ${text.slice(0, 200)}`);
    err.status = res.status;
    throw err;
  }
  return JSON.parse(text);
}

async function fxGet(path) {
  let lastErr;
  for (const host of FX_HOSTS) {
    try {
      return await fetchJson(`${host}${path}`);
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

function toIso(createdAt, createdTimestamp) {
  if (createdTimestamp) return new Date(createdTimestamp * 1000).toISOString();
  const t = Date.parse(createdAt ?? "");
  return Number.isNaN(t) ? null : new Date(t).toISOString();
}

function mediaUrl(m) {
  return m?.media_info?.original_img_url || m?.url || null;
}

/** Inline MEDIA figures in Article order, resolved to image URLs. */
export function inlineMediaFromFxArticle(article) {
  const byId = new Map(
    (article?.media_entities ?? []).map((m) => [String(m.media_id), m]),
  );
  const entityMap = article?.content?.entityMap ?? [];
  const entries = Array.isArray(entityMap)
    ? entityMap.map((e) => e?.value ?? e)
    : Object.values(entityMap);
  const out = [];
  for (const e of entries) {
    if (e?.type !== "MEDIA") continue;
    for (const item of e.data?.mediaItems ?? []) {
      const m = byId.get(String(item.mediaId));
      out.push({
        mediaId: String(item.mediaId),
        url: mediaUrl(m),
        caption: e.data?.caption ?? "",
      });
    }
  }
  return out;
}

export function plainTextFromFxArticle(article) {
  return (article?.content?.blocks ?? [])
    .map((b) => (b.text ?? "").trim())
    .filter(Boolean)
    .join("\n\n");
}

/**
 * Normalize one FxTwitter status (timeline item or `tweet`) into the shape
 * listRecentArticles returns. Returns null when the post is not a native
 * Article or not authored by @GoldSilverHQ.
 */
export function normalizeFxStatus(status) {
  if (!status) return null;
  const author = status.author?.screen_name ?? "";
  if (author.toLowerCase() !== GSHQ_USERNAME.toLowerCase()) return null;
  if (status.reposted_by) return null;
  // A bare /i/article/ link (e.g. re-sharing an old Article) is not a new publish.
  const article = status.article ?? null;
  if (!article?.id) return null;
  const articleId = String(article.id);
  const title = (article?.title ?? "").trim();
  const hasMedia = Array.isArray(article?.media_entities) && article.media_entities.length > 0;
  return {
    postId: String(status.id),
    articleId,
    articleUrl: `https://x.com/i/article/${articleId}`,
    title,
    previewText: article?.preview_text ?? "",
    plainText: plainTextFromFxArticle(article),
    createdAt: toIso(status.created_at, status.created_timestamp),
    coverUrl: mediaUrl(article?.cover_media),
    inlineMedia: hasMedia ? inlineMediaFromFxArticle(article) : null,
    skip: shouldSkipTitle(title),
  };
}

function newestFirst(list) {
  return [...list].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}

export function dedupeArticles(list) {
  const seen = new Map();
  for (const a of list) {
    if (!a) continue;
    const prev = seen.get(a.articleId);
    if (!prev || (a.title && !prev.title)) seen.set(a.articleId, a);
  }
  return newestFirst([...seen.values()]);
}

/** List recent Articles from FxTwitter (articles feed + statuses feed). */
export async function listRecentArticlesPublic({ count = 20 } = {}) {
  const user = GSHQ_USERNAME;
  const errors = [];
  const found = [];
  for (const feed of ["articles", "statuses"]) {
    try {
      const data = await fxGet(`/2/profile/${user}/${feed}?count=${count}`);
      for (const s of data.results ?? []) found.push(normalizeFxStatus(s));
    } catch (err) {
      errors.push(`${feed}: ${err.message}`);
    }
  }
  const articles = dedupeArticles(found);
  if (!articles.length && errors.length) {
    throw new Error(`FxTwitter discovery failed — ${errors.join(" | ")}`);
  }
  return articles;
}

/**
 * Full Article (body, cover, every inline MEDIA URL) for one post id.
 * FxTwitter first; vxtwitter only fills title + cover (inlineMedia stays null).
 */
export async function fetchArticleDetail(postId) {
  try {
    const data = await fxGet(`/${GSHQ_USERNAME}/status/${postId}`);
    const a = normalizeFxStatus(data.tweet);
    if (a) return { ...a, inlineMedia: a.inlineMedia ?? [], detailSource: "fxtwitter" };
  } catch {
    // fall through to vxtwitter
  }
  const vx = await fetchJson(`${VX_HOST}/${GSHQ_USERNAME}/status/${postId}`);
  const title = (vx.article?.title ?? "").trim();
  return {
    postId: String(postId),
    articleId: articleIdFromUrl(vx.text) ?? null,
    title,
    previewText: vx.article?.preview_text ?? "",
    plainText: "",
    createdAt: toIso(vx.date, vx.date_epoch),
    coverUrl: vx.article?.image ?? null,
    inlineMedia: null,
    skip: shouldSkipTitle(title),
    detailSource: "vxtwitter",
  };
}

/**
 * Discover recent Articles without X API credits. Falls back to the paid
 * X API only when every public source fails and X_BEARER_TOKEN is set.
 * @returns {Promise<{ source: string, articles: object[], warnings: string[] }>}
 */
export async function discoverArticles({ count = 20 } = {}) {
  const warnings = [];
  try {
    const articles = await listRecentArticlesPublic({ count });
    if (articles.length) return { source: "fxtwitter", articles, warnings };
    warnings.push("FxTwitter returned no Article posts.");
  } catch (err) {
    warnings.push(err.message);
  }
  if (bearerToken()) {
    const articles = await listRecentArticles({ maxResults: 50 });
    return { source: "x-api", articles, warnings };
  }
  const err = new Error(
    `No public source answered and no X_BEARER_TOKEN set. ${warnings.join(" | ")}`,
  );
  err.code = "DISCOVERY_UNAVAILABLE";
  throw err;
}

/** Attach full detail (cover + inline media) to each pending Article. */
export async function enrichArticles(articles) {
  const out = [];
  for (const a of articles) {
    try {
      const d = await fetchArticleDetail(a.postId);
      out.push({
        ...a,
        title: d.title || a.title,
        previewText: d.previewText || a.previewText,
        plainText: d.plainText || a.plainText,
        coverUrl: d.coverUrl || a.coverUrl,
        inlineMedia: d.inlineMedia,
        detailSource: d.detailSource,
      });
    } catch (err) {
      out.push({ ...a, inlineMedia: a.inlineMedia ?? null, detailError: err.message });
    }
  }
  return out;
}
