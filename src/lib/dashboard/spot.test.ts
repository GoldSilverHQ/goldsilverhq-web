import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { parseSpotAsOf, resolveSpot } from "./spot.ts";

describe("parseSpotAsOf", () => {
  it("pins bare dates to midday UTC", () => {
    assert.equal(parseSpotAsOf("2026-09-30").toISOString(), "2026-09-30T12:00:00.000Z");
  });

  it("parses full timestamps as-is", () => {
    assert.equal(parseSpotAsOf("2026-09-30T20:15:00.000Z").toISOString(), "2026-09-30T20:15:00.000Z");
  });
});

describe("spot feed (no Marketstack)", () => {
  it("resolves live gold and silver from Yahoo 15m or gold-api", async () => {
    const spot = await resolveSpot();
    assert.ok(spot.gold > 1000, `gold ${spot.gold}`);
    assert.ok(spot.silver > 5, `silver ${spot.silver}`);
    assert.ok(["yahoo-15m", "gold-api", "gas-metrics", "gas-metals"].includes(spot.source));
    assert.ok(spot.asOf);
  });
});
