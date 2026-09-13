import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  getThemeInitScript,
  isThemePreference,
  resolveTheme,
  THEME_STORAGE_KEY,
} from "./theme.ts";

describe("theme resolve", () => {
  it("uses stored light or dark", () => {
    assert.equal(resolveTheme("light", true), "light");
    assert.equal(resolveTheme("dark", false), "dark");
  });

  it("falls back to prefers-color-scheme when unset", () => {
    assert.equal(resolveTheme(null, true), "dark");
    assert.equal(resolveTheme(undefined, false), "light");
    assert.equal(resolveTheme("auto", true), "dark");
    assert.equal(resolveTheme("nonsense", false), "light");
  });

  it("type-guards preference strings", () => {
    assert.equal(isThemePreference("light"), true);
    assert.equal(isThemePreference("dark"), true);
    assert.equal(isThemePreference("system"), false);
  });

  it("emits a FOUC script that reads the storage key", () => {
    const script = getThemeInitScript();
    assert.match(script, new RegExp(THEME_STORAGE_KEY));
    assert.match(script, /prefers-color-scheme: dark/);
    assert.match(script, /classList\.add/);
  });
});
