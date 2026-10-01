#!/usr/bin/env python3
"""Build src/lib/dashboard/cb-extras.json for the Central banks tab.

Inputs (already in the repo):
  data/cb/gold_features.csv  IMF IFS reserves with gold at market value, 2000-2025
  data/cb/cb_seed.json       GSHQ seed (entities + yearly holdings in tonnes)

Outputs:
  holders       top official holders by tonnes (fallback when GSHQ is unreachable)
  shareSeries   gold as % of total reserves per year for the largest holders
  worldShare    sum of gold value / sum of total reserves, all reporting countries, per year
"""

from __future__ import annotations

import csv
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "data" / "cb" / "gold_features.csv"
SEED_PATH = ROOT / "data" / "cb" / "cb_seed.json"
OUT = ROOT / "src" / "lib" / "dashboard" / "cb-extras.json"

TOP_HOLDERS = 20
SHARE_COUNTRIES = 25
MIN_COVERAGE = 0.75


def main() -> None:
    seed = json.loads(SEED_PATH.read_text())
    entities = {e["id"]: e for e in seed["entities"]}
    hold: dict[str, dict[int, float]] = defaultdict(dict)
    for h in seed["holdings"]:
        if h["freq"] == "year":
            hold[h["entity_id"]][int(h["period"][:4])] = float(h["tonnes"])

    holders = sorted(
        (e for e in seed["entities"] if e["kind"] in ("country", "institution") and e.get("stock_tonnes")),
        key=lambda e: -float(e["stock_tonnes"]),
    )[:TOP_HOLDERS]

    rows = list(csv.DictReader(CSV_PATH.open()))
    share: dict[str, dict[int, float]] = defaultdict(dict)
    gold_sum: dict[int, float] = defaultdict(float)
    total_sum: dict[int, float] = defaultdict(float)
    for r in rows:
        iso = r["country_code"].lower()
        y = int(r["year"])
        try:
            gold = float(r["gold_value_usd"])
            total = float(r["total_reserves_usd"])
        except ValueError:
            continue
        if total <= 0:
            continue
        share[iso][y] = round(gold / total * 100, 1)
        gold_sum[y] += gold
        total_sum[y] += total

    # The newest year in the CSV is partial (fewer reporters, part-year totals); stop at the last full-coverage year.
    reporters = defaultdict(int)
    for r in rows:
        if r["gold_value_usd"] and r["total_reserves_usd"]:
            reporters[int(r["year"])] += 1
    full = max(reporters.values()) * MIN_COVERAGE
    latest = max(y for y, n in reporters.items() if n >= full)
    share = {iso: {y: v for y, v in s.items() if y <= latest} for iso, s in share.items()}
    gold_sum = {y: v for y, v in gold_sum.items() if y <= latest}
    by_gold_latest = sorted(
        (r for r in rows if int(r["year"]) == latest and r["gold_value_usd"]),
        key=lambda r: -float(r["gold_value_usd"]),
    )[:SHARE_COUNTRIES]

    out = {
        "source": "IMF IFS reserves (gold at market value) via data/cb/gold_features.csv; tonnes from GSHQ seed",
        "shareLatestYear": latest,
        "holders": [
            {
                "id": e["id"],
                "name": e["name"],
                "kind": e["kind"],
                "tonnes": round(float(e["stock_tonnes"]), 1),
                "asOf": e.get("stock_as_of"),
                "hold": {str(y): round(t, 1) for y, t in sorted(hold[e["id"]].items()) if y >= 2015},
            }
            for e in holders
        ],
        "shareSeries": [
            {
                "id": r["country_code"].lower(),
                "name": entities.get(r["country_code"].lower(), {}).get("name", r["country"]),
                "share": {str(y): v for y, v in sorted(share[r["country_code"].lower()].items())},
            }
            for r in by_gold_latest
        ],
        "worldShare": {str(y): round(gold_sum[y] / total_sum[y] * 100, 1) for y in sorted(gold_sum)},
    }
    OUT.write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"wrote {OUT} holders={len(out['holders'])} share={len(out['shareSeries'])} latest={latest}")


if __name__ == "__main__":
    main()
