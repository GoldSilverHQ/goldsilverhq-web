import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildRefresh } from "./refresh.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = join(ROOT, "src/lib/dashboard/desk-refreshed.json");

describe("desk-refresh", () => {
  it("fetches free public money + LBMA prints into a typed snapshot", async () => {
    const doc = await buildRefresh();
    assert.ok(doc.refreshedAt);
    assert.ok(doc.metrics.usM2.bn > 20_000, `usM2 ${doc.metrics.usM2.bn}`);
    assert.match(doc.metrics.usM2.asOf, /^\d{4}-\d{2}$/);
    assert.ok(doc.metrics.cpi.value > 200);
    assert.ok(doc.metrics.eurM3.value > 1e13);
    assert.ok(doc.metrics.fx.eurUsd > 0.5 && doc.metrics.fx.eurUsd < 2);
    assert.ok(doc.metrics.fx.cnyUsd > 4);
    assert.ok(doc.metrics.fx.jpyUsd > 80);
    const { paired, vaultLatest, clearing } = doc.metrics.lbma;
    assert.ok(paired.goldClearingDailyMoz > 5 && paired.goldClearingDailyMoz < 40);
    assert.ok(paired.vaultGoldT > 7_000 && paired.vaultGoldT < 12_000);
    assert.equal(paired.asOf, clearing.asOf);
    assert.ok(vaultLatest.goldT >= paired.vaultGoldT - 500);
    assert.ok(Array.isArray(doc.manual) && doc.manual.length >= 4);
  });

  it("keeps committed refreshed.json in the expected shape", () => {
    const doc = JSON.parse(readFileSync(OUT, "utf8"));
    assert.ok(doc.metrics?.usM2?.bn);
    assert.ok(doc.metrics?.lbma?.paired?.vaultGoldT);
    assert.ok(doc.metrics?.eurM3?.value);
  });
});
