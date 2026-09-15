import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  METRIC_SHARE_BRAND,
  METRIC_SHARE_HEIGHT,
  METRIC_SHARE_WIDTH,
  metricShareFilename,
} from "./metric-share-card.ts";

describe("metric share cards", () => {
  it("is exactly 4:5 portrait", () => {
    assert.equal(METRIC_SHARE_WIDTH / METRIC_SHARE_HEIGHT, 4 / 5);
    assert.equal(METRIC_SHARE_WIDTH, 1080);
    assert.equal(METRIC_SHARE_HEIGHT, 1350);
  });

  it("brands GoldSilverHQ.com", () => {
    assert.equal(METRIC_SHARE_BRAND, "GoldSilverHQ.com");
  });

  it("builds a stable download filename", () => {
    assert.equal(metricShareFilename("Gold spot"), "gold-spot-goldsilverhq.png");
    assert.equal(metricShareFilename("Gold–silver ratio"), "gold-silver-ratio-goldsilverhq.png");
  });
});
