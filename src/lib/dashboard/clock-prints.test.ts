import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { dollarLostVsGold, fmtCompact, fmtUsdCompact, officialMtmUsd } from "./clock-prints.ts";

describe("clock prints", () => {
  it("marks official gold to market", () => {
    const usd = officialMtmUsd(1, 2000);
    assert.ok(usd > 60_000_000 && usd < 70_000_000);
  });

  it("measures dollar loss vs the 1971 gold price", () => {
    const lost = dollarLostVsGold(4062);
    assert.ok(lost != null);
    assert.ok(Math.abs(lost - 0.99) < 0.005);
    assert.equal(dollarLostVsGold(0), null);
  });

  it("compacts dollars", () => {
    assert.equal(fmtUsdCompact(2.3e12), "$2.3T");
    assert.equal(fmtUsdCompact(23.2e9), "$23.2B");
  });

  it("compacts other printers", () => {
    assert.equal(fmtCompact(17.637718e12, "€"), "€17.6T");
    assert.equal(fmtCompact(355.51e12, "CN¥"), "CN¥355.5T");
    assert.equal(fmtCompact(1_297e12, "¥"), "¥1,297T");
  });
});
