#!/usr/bin/env python3
"""Push data/cb/cb_seed.json into the GSHQ Supabase project.

Requires GSHQ_SUPABASE_URL (default set) and GSHQ_SUPABASE_SERVICE_ROLE.
The anon key cannot INSERT because RLS is SELECT-only.
Schema must already exist (run supabase/gshq.sql first, or this will 404).
"""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEED = ROOT / "data" / "cb" / "cb_seed.json"
URL = os.environ.get("GSHQ_SUPABASE_URL", "https://wixwyxahyutsimxsaqgx.supabase.co").rstrip("/")
KEY = os.environ.get("GSHQ_SUPABASE_SERVICE_ROLE", "").strip()


def post(table: str, rows: list[dict]) -> None:
    body = json.dumps(rows).encode()
    req = urllib.request.Request(
        f"{URL}/rest/v1/{table}",
        data=body,
        method="POST",
        headers={
            "apikey": KEY,
            "Authorization": f"Bearer {KEY}",
            "Content-Type": "application/json",
            "Prefer": "resolution=merge-duplicates,return=minimal",
        },
    )
    try:
        with urllib.request.urlopen(req) as res:
            res.read()
    except urllib.error.HTTPError as e:
        raise SystemExit(f"{table} {e.code} {e.read()[:400]!r}") from e


def chunks(xs: list, n: int = 200):
    for i in range(0, len(xs), n):
        yield xs[i : i + n]


def main() -> None:
    if not KEY:
        sys.exit("Set GSHQ_SUPABASE_SERVICE_ROLE (SQL editor paste of supabase/gshq.sql is the no-key path).")
    seed = json.loads(SEED.read_text())
    for batch in chunks(seed["entities"]):
        post("cb_entities", batch)
    for batch in chunks(seed["holdings"]):
        post("cb_holdings", batch)
    for batch in chunks(seed["flows"]):
        post("cb_flows", batch)
    print(
        f"upserted entities={len(seed['entities'])} holdings={len(seed['holdings'])} flows={len(seed['flows'])}"
    )


if __name__ == "__main__":
    main()
