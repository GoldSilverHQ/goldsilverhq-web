import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isTheme } from "./theme.ts";

describe("theme", () => {
  it("accepts only dark and light", () => {
    assert.equal(isTheme("dark"), true);
    assert.equal(isTheme("light"), true);
    assert.equal(isTheme("system"), false);
    assert.equal(isTheme(null), false);
  });
});
