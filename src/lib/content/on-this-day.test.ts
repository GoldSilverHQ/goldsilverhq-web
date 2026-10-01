import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ON_THIS_DAY, monthDayKey, onThisDay } from "./on-this-day.ts";
import { historyClusters } from "./map.ts";

const historyPaths = new Set<string>(["/history"]);
for (const c of historyClusters) {
  historyPaths.add(`/history/${c.slug}`);
  for (const e of c.episodes) historyPaths.add(`/history/${c.slug}/${e.slug}`);
}

describe("on this day", () => {
  it("keys by zero-padded month-day", () => {
    assert.equal(monthDayKey(new Date("2026-10-01T08:00:00Z")), "10-01");
    assert.equal(monthDayKey(new Date("2026-03-05T23:30:00Z")), "03-05");
  });

  it("returns 1 October events in year order with a readable label", () => {
    const day = onThisDay(new Date("2026-10-01T08:00:00Z"));
    assert.equal(day.label, "1 October");
    assert.deepEqual(
      day.events.map((e) => e.year),
      [1897, 1903],
    );
  });

  it("keeps every entry well-formed, sourced, and BaFin-clean", () => {
    for (const [key, events] of Object.entries(ON_THIS_DAY)) {
      assert.match(key, /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/);
      assert.ok(events.length >= 1 && events.length <= 3, key);
      for (const e of events) {
        assert.ok(Number.isInteger(e.year) && e.year < 2100, key);
        assert.ok(e.text.length > 0 && e.text.length <= 160, key);
        assert.ok(e.source.length > 0, key);
        assert.doesNotMatch(e.text, /\bbuy\b|\bsell\b|invest|price target|forecast/i);
        if (e.href) assert.ok(historyPaths.has(e.href), `${key} ${e.href}`);
      }
    }
  });
});
