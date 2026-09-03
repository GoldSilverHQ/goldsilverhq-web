import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { historyClusters, ideaPages, practicePages } from "./content/map.ts";
import { indexPaths, robotsTxt, sitemapXml } from "./seo.ts";

describe("indexable topical map", () => {
  it("lists home, three pillars, every cluster and episode, and the tools", () => {
    const paths = indexPaths();
    assert.ok(paths.includes("/"));
    assert.ok(paths.includes("/sound-money"));
    assert.ok(paths.includes("/history"));
    assert.ok(paths.includes("/gold-silver"));
    assert.ok(paths.includes("/about"));
    for (const page of ideaPages) assert.ok(paths.includes(`/sound-money/${page.slug}`), page.slug);
    for (const cluster of historyClusters) {
      assert.ok(paths.includes(`/history/${cluster.slug}`), cluster.slug);
      for (const episode of cluster.episodes) {
        assert.ok(paths.includes(`/history/${cluster.slug}/${episode.slug}`), episode.slug);
      }
    }
    for (const page of practicePages) assert.ok(paths.includes(`/gold-silver/${page.slug}`), page.slug);
  });

  it("does not list products that do not exist yet", () => {
    const paths = indexPaths();
    assert.equal(paths.some((p) => p.includes("kit") || p.includes("newsletter")), false);
    assert.equal(paths.includes("/flows"), false);
  });

  it("has enough URLs for Search Console to start on the map", () => {
    assert.ok(indexPaths().length >= 40);
  });

  it("emits a sitemap and robots file that point at those URLs", () => {
    const origin = "https://goldsilverhq.com";
    const xml = sitemapXml(origin);
    assert.match(xml, /<loc>https:\/\/goldsilverhq\.com\/history\/20th-century\/weimar-1923<\/loc>/);
    assert.equal(xml.includes("/kit"), false);
    assert.match(robotsTxt(origin), /Sitemap: https:\/\/goldsilverhq\.com\/sitemap\.xml/);
  });
});
