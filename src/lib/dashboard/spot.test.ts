import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { resolveSpot } from "./spot.ts";

describe("spot feed (no Marketstack)", () => {
  it("resolves live gold and silver from Yahoo 15m or gold-api", async () => {
    const spot = await resolveSpot();
    assert.ok(spot.gold > 1000, `gold ${spot.gold}`);
    assert.ok(spot.silver > 5, `silver ${spot.silver}`);
    assert.ok(["yahoo-15m", "gold-api", "gas-metrics", "gas-metals"].includes(spot.source));
    assert.ok(spot.asOf);
  });
});
