import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../", import.meta.url));

describe("SiteShell consolidated nav", () => {
  it("keeps a short top-level bar with Library and Shop flyouts", () => {
    const shell = readFileSync(join(root, "components/SiteShell.tsx"), "utf8");

    assert.match(shell, /label:\s*"Desk"/);
    assert.match(shell, /label:\s*"History"/);
    assert.match(shell, /label:\s*"Library"/);
    assert.match(shell, /label:\s*"Blog"/);
    assert.match(shell, /label:\s*"Shop"/);

    assert.match(shell, /LIBRARY_NAV_MENU/);
    assert.match(shell, /SHOP_NAV_MENU/);
    assert.match(shell, /HISTORY_NAV_MENU/);

    // Former top-level peers are no longer flat peers in NAV.
    assert.doesNotMatch(shell, /href:\s*"\/sound-money",\s*label:\s*"Sound Money"/);
    assert.doesNotMatch(shell, /href:\s*"\/markets",\s*label:\s*"Markets"/);
    assert.doesNotMatch(shell, /label:\s*"In Practice"/);
    assert.doesNotMatch(shell, /href:\s*"\/partners",\s*label:\s*"Partners"/);

    // History hover flyout pattern preserved.
    assert.match(shell, /onMouseEnter=\{openMenu\}/);
    assert.match(shell, /setTimeout\(\(\) => setOpen\(false\), 120\)/);
  });
});
