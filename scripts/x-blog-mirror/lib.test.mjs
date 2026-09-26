import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  shouldSkipTitle,
  articleIdFromUrl,
  nextUnseenArticle,
  unseenEligibleArticles,
} from "./lib.mjs";

describe("x-blog-mirror helpers", () => {
  it("skips weekly stock roundup titles", () => {
    assert.equal(shouldSkipTitle("Silver Stocks - Weekly Roundup"), true);
    assert.equal(shouldSkipTitle("Silver Stocks - Weekly Roundup "), true);
    assert.equal(
      shouldSkipTitle("The Day Banks Put Up $3.6 Billion to Stop a Hedge Fund Collapse"),
      false,
    );
  });

  it("parses article ids from permalinks", () => {
    assert.equal(
      articleIdFromUrl("https://x.com/i/article/2102821638521688064"),
      "2102821638521688064",
    );
    assert.equal(articleIdFromUrl("https://x.com/GoldSilverHQ/status/1"), null);
  });

  it("returns every unseen non-skip article (newest first)", () => {
    const seen = { articles: [{ articleId: "1" }] };
    const articles = [
      { articleId: "9", title: "Silver Stocks - Weekly Roundup", skip: true, createdAt: "2026-09-23" },
      { articleId: "8", title: "LTCM", skip: false, createdAt: "2026-09-22" },
      { articleId: "7", title: "Interest", skip: false, createdAt: "2026-09-22" },
      { articleId: "1", title: "Newton", skip: false, createdAt: "2026-09-21" },
    ];
    const all = unseenEligibleArticles(articles, seen);
    assert.deepEqual(
      all.map((a) => a.articleId),
      ["8", "7"],
    );
    assert.equal(nextUnseenArticle(articles, seen).articleId, "8");
  });

  it("returns empty when nothing is eligible", () => {
    const seen = { articles: [{ articleId: "8" }] };
    const articles = [
      { articleId: "9", title: "Silver Stocks - Weekly Roundup", skip: true, createdAt: "2026-09-23" },
      { articleId: "8", title: "LTCM", skip: false, createdAt: "2026-09-22" },
    ];
    assert.deepEqual(unseenEligibleArticles(articles, seen), []);
    assert.equal(nextUnseenArticle(articles, seen), null);
  });
});
