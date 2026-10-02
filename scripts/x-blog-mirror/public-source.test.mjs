import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  normalizeFxStatus,
  inlineMediaFromFxArticle,
  dedupeArticles,
} from "./public-source.mjs";

const author = { screen_name: "GoldSilverHQ" };

const fullStatus = {
  id: "2105729431734022209",
  text: "https://x.com/i/article/2105579156780052480",
  author,
  created_at: "Thu Oct 01 18:39:53 +0000 2026",
  created_timestamp: 1790879993,
  article: {
    id: "2105579156780052480",
    title: "The Day the Government Became America's Only Money Printer ",
    preview_text: "On October 1, 1877…",
    cover_media: { media_info: { original_img_url: "https://pbs.twimg.com/media/cover.jpg" } },
    media_entities: [
      { media_id: "2", media_info: { original_img_url: "https://pbs.twimg.com/media/two.jpg" } },
      { media_id: "1", media_info: { original_img_url: "https://pbs.twimg.com/media/one.jpg" } },
    ],
    content: {
      blocks: [{ text: "First paragraph." }, { text: " " }, { text: "Second." }],
      entityMap: [
        { key: "0", value: { type: "MEDIA", data: { caption: "One", mediaItems: [{ mediaId: "1" }] } } },
        { key: "1", value: { type: "TWEET", data: {} } },
        { key: "2", value: { type: "MEDIA", data: { caption: "Two", mediaItems: [{ mediaId: "2" }] } } },
      ],
    },
  },
};

describe("x-blog-mirror public source", () => {
  it("normalizes a full FxTwitter Article status", () => {
    const a = normalizeFxStatus(fullStatus);
    assert.equal(a.articleId, "2105579156780052480");
    assert.equal(a.postId, "2105729431734022209");
    assert.equal(a.title, "The Day the Government Became America's Only Money Printer");
    assert.equal(a.createdAt, "2026-10-01T18:39:53.000Z");
    assert.equal(a.coverUrl, "https://pbs.twimg.com/media/cover.jpg");
    assert.equal(a.plainText, "First paragraph.\n\nSecond.");
    assert.equal(a.skip, false);
    assert.deepEqual(
      a.inlineMedia.map((m) => [m.url, m.caption]),
      [
        ["https://pbs.twimg.com/media/one.jpg", "One"],
        ["https://pbs.twimg.com/media/two.jpg", "Two"],
      ],
    );
  });

  it("leaves inline media unknown when the feed omits media entities", () => {
    const a = normalizeFxStatus({
      ...fullStatus,
      article: { ...fullStatus.article, cover_media: undefined, media_entities: [] },
    });
    assert.equal(a.inlineMedia, null);
    assert.equal(a.coverUrl, null);
  });

  it("ignores plain posts, bare article links, reposts and other authors", () => {
    assert.equal(normalizeFxStatus({ id: "1", text: "Gold morning.", author }), null);
    assert.equal(
      normalizeFxStatus({ id: "2", text: "https://x.com/i/article/1865687395577786592", author }),
      null,
    );
    assert.equal(normalizeFxStatus({ ...fullStatus, reposted_by: { screen_name: "x" } }), null);
    assert.equal(normalizeFxStatus({ ...fullStatus, author: { screen_name: "Other" } }), null);
  });

  it("marks weekly stock roundups as skip", () => {
    const a = normalizeFxStatus({
      ...fullStatus,
      article: { ...fullStatus.article, id: "9", title: "Silver Stocks - Weekly Roundup" },
    });
    assert.equal(a.skip, true);
  });

  it("dedupes by article id and sorts newest first", () => {
    const list = dedupeArticles([
      { articleId: "1", title: "", createdAt: "2026-09-30T00:00:00.000Z" },
      null,
      { articleId: "2", title: "B", createdAt: "2026-10-01T00:00:00.000Z" },
      { articleId: "1", title: "A", createdAt: "2026-09-30T00:00:00.000Z" },
    ]);
    assert.deepEqual(list.map((a) => [a.articleId, a.title]), [["2", "B"], ["1", "A"]]);
  });

  it("returns no inline media for an Article without MEDIA entities", () => {
    assert.deepEqual(inlineMediaFromFxArticle({ content: { entityMap: [] } }), []);
  });
});
