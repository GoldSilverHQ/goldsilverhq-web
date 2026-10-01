import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildRefresh } from "./refresh.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = join(ROOT, "src/lib/dashboard/desk-refreshed.json");

const NOW = new Date("2026-10-02T06:15:00Z");
const PREV = {
  refreshedAt: "2026-09-29T06:15:00.000Z",
  metrics: {
    a: { value: 1, asOf: "2026-08", lastGoodAt: "2026-09-29" },
    b: { value: 2, asOf: "2026-08", lastGoodAt: "2026-09-29" },
  },
};
const fail = async () => {
  throw new Error("503");
};

describe("desk-refresh resilience", () => {
  it("keeps the last good value and marks it stale when one source fails", async () => {
    const { doc, failures } = await buildRefresh({
      prev: PREV,
      now: NOW,
      sources: { a: async () => ({ value: 10, asOf: "2026-09" }), b: fail },
    });
    assert.deepEqual(doc.metrics.a, { value: 10, asOf: "2026-09", lastGoodAt: "2026-10-02" });
    assert.equal(doc.metrics.b.value, 2);
    assert.equal(doc.metrics.b.lastGoodAt, "2026-09-29");
    assert.equal(doc.metrics.b.staleSince, "2026-10-02");
    assert.deepEqual(
      failures.map((f) => f.id),
      ["b"],
    );
  });

  it("keeps the first stale date across repeated failures and clears it on recovery", async () => {
    const stalePrev = {
      ...PREV,
      metrics: { ...PREV.metrics, b: { ...PREV.metrics.b, staleSince: "2026-09-30" } },
    };
    const again = await buildRefresh({ prev: stalePrev, now: NOW, sources: { b: fail } });
    assert.equal(again.doc.metrics.b.staleSince, "2026-09-30");
    const back = await buildRefresh({ prev: stalePrev, now: NOW, sources: { b: async () => ({ value: 3 }) } });
    assert.equal(back.doc.metrics.b.staleSince, undefined);
    assert.equal(back.doc.metrics.b.lastGoodAt, "2026-10-02");
  });

  it("reports every failure when nothing answers", async () => {
    const { failures, total } = await buildRefresh({ prev: PREV, now: NOW, sources: { a: fail, b: fail } });
    assert.equal(failures.length, total);
  });
});

describe("desk-refresh live feeds", { skip: !process.env.DESK_REFRESH_LIVE && "set DESK_REFRESH_LIVE=1 to hit the network" }, () => {
  it("fetches free public money + LBMA prints into a typed snapshot", async () => {
    const { doc, failures } = await buildRefresh({ prev: null });
    assert.deepEqual(failures, []);
    assert.ok(doc.metrics.usM2.bn > 20_000, `usM2 ${doc.metrics.usM2.bn}`);
    assert.match(doc.metrics.usM2.asOf, /^\d{4}-\d{2}$/);
    assert.ok(doc.metrics.cpi.value > 200);
    assert.ok(doc.metrics.eurM3.value > 1e13);
    assert.ok(doc.metrics.fx.eurUsd > 0.5 && doc.metrics.fx.eurUsd < 2);
    const { paired, vaultLatest, clearing } = doc.metrics.lbma;
    assert.ok(paired.vaultGoldT > 7_000 && paired.vaultGoldT < 12_000);
    assert.equal(paired.asOf, clearing.asOf);
    assert.ok(vaultLatest.goldT >= paired.vaultGoldT - 500);
  });
});

describe("desk-refresh committed snapshot", () => {
  it("keeps committed refreshed.json in the expected shape", () => {
    const doc = JSON.parse(readFileSync(OUT, "utf8"));
    assert.ok(doc.metrics?.usM2?.bn);
    assert.ok(doc.metrics?.lbma?.paired?.vaultGoldT);
    assert.ok(doc.metrics?.eurM3?.value);
  });
});
