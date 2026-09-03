#!/usr/bin/env python3
"""Build GSHQ central-bank gold seed SQL.

Metrics are kept strictly separate:
  reported_delta  = change in publicly reported official holdings (IMF IFS / WGC monthly)
                    NET of reported sales. Includes swaps/reclassifications.
                    Does NOT include WGC's unreported-buying estimate.
  wgc_net         = World Gold Council Gold Demand Trends official-sector demand.
                    NET. WORLD total includes an estimate of unreported buying.
                    Never compare a sum of country reported_delta to WORLD wgc_net.

There is no comprehensive gross-purchases series. Do not label either metric "gross".
"""

from __future__ import annotations

import csv
import json
from collections import defaultdict
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "data" / "cb" / "gold_features.csv"
OUT_SQL = ROOT / "supabase" / "gshq.sql"
OUT_JSON = ROOT / "data" / "cb" / "cb_seed.json"

# LBMA annual average USD/oz used by the WGC overlay that built gold_features.csv.
# Inverse of: usd = tonnes * 32150.7374 * price  →  recovers IFS tonnes.
GOLD_PRICE = {
    2015: 1160.06,
    2016: 1250.74,
    2017: 1257.15,
    2018: 1268.49,
    2019: 1392.60,
    2020: 1769.64,
    2021: 1798.61,
    2022: 1800.93,
    2023: 1940.54,
    2024: 2386.33,
    2025: 2869.00,
}
OZ_PER_T = 32_150.7374

WB_AGGREGATES = {
    "AFE", "AFW", "ARB", "CEB", "CSS", "EAP", "EAR", "EAS", "ECA", "ECS",
    "EMU", "EUU", "FCS", "HIC", "HPC", "IBD", "IBT", "IDA", "IDB", "IDX",
    "LAC", "LCN", "LDC", "LIC", "LMC", "LMY", "LTE", "MEA", "MIC", "MNA",
    "NAC", "OED", "OSS", "PRE", "PSS", "PST", "SAS", "SSA", "SSF", "SST",
    "TEA", "TEC", "TLA", "TMN", "TSA", "TSS", "UMC", "WLD",
}

DISPLAY_NAME = {
    "USA": "United States",
    "DEU": "Germany",
    "ITA": "Italy",
    "FRA": "France",
    "RUS": "Russia",
    "CHN": "China",
    "CHE": "Switzerland",
    "IND": "India",
    "JPN": "Japan",
    "NLD": "Netherlands",
    "TUR": "Türkiye",
    "POL": "Poland",
    "UZB": "Uzbekistan",
    "KAZ": "Kazakhstan",
    "SGP": "Singapore",
    "BRA": "Brazil",
    "QAT": "Qatar",
    "HUN": "Hungary",
    "CZE": "Czechia",
    "AZE": "Azerbaijan",
    "GBR": "United Kingdom",
    "SAU": "Saudi Arabia",
    "ESP": "Spain",
    "AUT": "Austria",
    "THA": "Thailand",
    "BEL": "Belgium",
    "DZA": "Algeria",
    "VEN": "Venezuela",
    "LBN": "Lebanon",
    "PRT": "Portugal",
    "KOR": "South Korea",
    "IRQ": "Iraq",
    "EGY": "Egypt",
    "IDN": "Indonesia",
    "MYS": "Malaysia",
    "PHL": "Philippines",
    "ZAF": "South Africa",
    "SWE": "Sweden",
    "MEX": "Mexico",
    "LBY": "Libya",
    "KWT": "Kuwait",
    "GRC": "Greece",
    "ROU": "Romania",
    "AUS": "Australia",
    "UKR": "Ukraine",
    "SVK": "Slovakia",
    "BLR": "Belarus",
    "BGR": "Bulgaria",
    "SRB": "Serbia",
    "JOR": "Jordan",
    "GHA": "Ghana",
    "CHL": "Chile",
    "GTM": "Guatemala",
    "BOL": "Bolivia",
    "URY": "Uruguay",
    "KHM": "Cambodia",
    "KGZ": "Kyrgyzstan",
    "GEO": "Georgia",
    "TWN": "Taiwan",
    "HKG": "Hong Kong",
    "ARE": "United Arab Emirates",
}

# World Gold Council Gold Demand Trends — WORLD official-sector NET demand (tonnes).
# Includes estimate of unreported buying. Source vintages: Visual Capitalist / GDT
# (2016–2023) and GDT Full Year 2025 table (2024–2025).
WGC_NET_WORLD_YEAR = {
    2016: 394.9,
    2017: 378.6,
    2018: 656.2,
    2019: 605.4,
    2020: 254.9,
    2021: 450.1,
    2022: 1080.0,
    2023: 1050.8,
    2024: 1092.4,
    2025: 863.3,
}

# Sparse named-country figures from GDT annual write-ups (NET, often ≈ reported
# for banks that disclose monthly). Stored as wgc_net, never mixed into reported_delta.
WGC_NET_COUNTRY_YEAR = {
    # Poland
    ("POL", 2019): 100, ("POL", 2022): 34, ("POL", 2023): 130, ("POL", 2024): 90, ("POL", 2025): 102,
    # China
    ("CHN", 2019): 96, ("CHN", 2022): 62, ("CHN", 2023): 225, ("CHN", 2024): 44, ("CHN", 2025): 27,
    # Türkiye — GDT; series is swap-noisy
    ("TUR", 2017): 86, ("TUR", 2018): 52, ("TUR", 2020): 34, ("TUR", 2022): 148,
    ("TUR", 2023): 84, ("TUR", 2024): 75, ("TUR", 2025): 27,
    # India
    ("IND", 2018): 42, ("IND", 2019): 38, ("IND", 2022): 33, ("IND", 2023): 16, ("IND", 2024): 73, ("IND", 2025): 18,
    # Kazakhstan
    ("KAZ", 2023): 15, ("KAZ", 2024): 20, ("KAZ", 2025): 57,
    # Czechia
    ("CZE", 2023): 19, ("CZE", 2024): 20, ("CZE", 2025): 20,
    # Singapore
    ("SGP", 2024): 76, ("SGP", 2025): -15,
    # Brazil / SOFAZ / Hungary / Qatar / Uzbekistan / Russia
    ("BRA", 2025): 43,
    ("AZE", 2025): 38,  # SOFAZ in GDT; flagged in note
    ("HUN", 2018): 28, ("HUN", 2021): 63,
    ("QAT", 2022): 35,
    ("UZB", 2022): 27, ("UZB", 2024): 12, ("UZB", 2025): 33,
    ("RUS", 2016): 201, ("RUS", 2017): 224, ("RUS", 2018): 274, ("RUS", 2019): 159, ("RUS", 2020): 26,
    ("RUS", 2025): -6,
    ("DEU", 2025): -1,
    ("JOR", 2025): -1,
}

# 2026 monthly PUBLICLY REPORTED net changes (WGC monthly blogs). NOT GDT.
# tonnes = that month only. World row is WGC's published monthly net.
MONTHLY_2026 = [
    # Jan — https://www.gold.org/goldhub/gold-focus/2026/03/central-bank-gold-statistics-momentum-eases-january-while-demand-base
    ("2026-01-01", "WORLD", 5, "WGC monthly statistics Jan 2026 (reported net)"),
    ("2026-01-01", "MYS", 3, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "UZB", 9, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "CZE", 2, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "IDN", 2, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "CHN", 1, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "SRB", 1, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "RUS", -9, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "BGR", -2, "WGC monthly statistics Jan 2026; euro-adoption transfer to ECB, not a market sale"),
    ("2026-01-01", "KAZ", -1, "WGC monthly statistics Jan 2026"),
    ("2026-01-01", "KGZ", -1, "WGC monthly statistics Jan 2026"),
    # Feb
    ("2026-02-01", "WORLD", 27, "WGC monthly statistics Feb 2026 (reported net)"),
    ("2026-02-01", "POL", 20, "WGC monthly statistics Feb 2026"),
    ("2026-02-01", "UZB", 8, "WGC monthly statistics Feb 2026"),
    ("2026-02-01", "KAZ", 8, "WGC monthly statistics Feb 2026"),
    ("2026-02-01", "CZE", 2, "WGC monthly statistics Feb 2026"),
    ("2026-02-01", "MYS", 2, "WGC monthly statistics Feb 2026"),
    ("2026-02-01", "CHN", 1, "WGC monthly statistics Feb 2026"),
    ("2026-02-01", "KHM", 1, "WGC monthly statistics Feb 2026"),
    ("2026-02-01", "TUR", -8, "WGC monthly statistics Feb 2026; includes swap/accounting noise"),
    ("2026-02-01", "RUS", -6, "WGC monthly statistics Feb 2026"),
    # Mar — country list incomplete (WGC named the two large sellers)
    ("2026-03-01", "WORLD", -30, "WGC monthly statistics Mar 2026 (reported net)"),
    ("2026-03-01", "TUR", -79, "WGC monthly statistics Mar 2026; mostly swaps unwound, not outright sales"),
    ("2026-03-01", "RUS", -6, "WGC monthly statistics Mar 2026"),
    # Apr — blog updated 12 Jun 2026 from 17t to 19t world
    ("2026-04-01", "WORLD", 19, "WGC monthly statistics Apr 2026, updated 12 Jun 2026 (reported net)"),
    ("2026-04-01", "POL", 14, "WGC monthly statistics Apr 2026"),
    ("2026-04-01", "CHN", 8, "WGC monthly statistics Apr 2026"),
    ("2026-04-01", "CZE", 3, "WGC monthly statistics Apr 2026"),
    ("2026-04-01", "RUS", -6, "WGC monthly statistics Apr 2026"),
    ("2026-04-01", "UZB", -1, "WGC monthly statistics Apr 2026"),
    # May — PDF 2026-07
    ("2026-05-01", "WORLD", 41, "WGC monthly statistics May 2026 (reported net)"),
    ("2026-05-01", "POL", 18, "WGC monthly statistics May 2026"),
    ("2026-05-01", "CHN", 10, "WGC monthly statistics May 2026"),
    ("2026-05-01", "UZB", 9, "WGC monthly statistics May 2026"),
    ("2026-05-01", "KAZ", 7, "WGC monthly statistics May 2026"),
    ("2026-05-01", "SGP", 4, "WGC monthly statistics May 2026"),
    ("2026-05-01", "CZE", 2, "WGC monthly statistics May 2026"),
    ("2026-05-01", "JOR", 1, "WGC monthly statistics May 2026"),
    ("2026-05-01", "TUR", -3, "WGC monthly statistics May 2026"),
    ("2026-05-01", "RUS", -6, "WGC monthly statistics May 2026"),
    # Jun — world total only; country tonnes not published as a table
    ("2026-06-01", "WORLD", 51, "WGC monthly statistics Jun 2026 (reported net)"),
]

# H1 2026 YTD reported (WGC June 2026 monthly blog). window=ytd, not a monthly flow.
YTD_H1_2026 = [
    ("POL", 82), ("UZB", 41), ("CHN", 40), ("KAZ", 27), ("CZE", 11),
    ("SGP", 10), ("CHL", 8), ("JOR", 6), ("GHA", 6),
]

# GDT quarterly WORLD 2026 (includes unreported estimate). Revised Q1.
WGC_NET_WORLD_Q2026 = [
    ("2026-01-01", 57.0, "WGC GDT Q2 2026 revision of Q1 (was 243.7t, 187t reclassified as OTC)"),
    ("2026-04-01", 288.9, "WGC GDT Q2 2026"),
]

# Latest intra-2026 holdings mentioned in WGC monthly / GDT (not year-end 2025).
HOLDINGS_2026 = [
    ("POL", "2026-06-30", 632.0, "WGC GDT Q2 2026 (H1)"),
    ("CHN", "2026-06-30", 2346.0, "WGC GDT Q2 2026 (H1)"),
    ("RUS", "2026-05-31", 2292.0, "WGC monthly May 2026"),
    ("SGP", "2026-05-31", 197.0, "WGC monthly May 2026"),
    ("KAZ", "2026-05-31", 361.0, "WGC monthly May 2026"),
    ("UZB", "2026-02-28", 407.0, "WGC monthly Feb 2026"),
    ("CZE", "2026-04-30", 79.0, "WGC monthly Apr 2026"),
    ("MYS", "2026-01-31", 42.0, "WGC monthly Jan 2026"),
]

# Institutions from Wikipedia / WGC snapshot (holdings only).
INSTITUTIONS = [
    ("imf", "IMF", None, "institution", 2814.0, "2025-12-31"),
    ("ecb", "European Central Bank", None, "institution", 506.5, "2025-12-31"),
]

FLOW_NOTES = {
    "TUR": "Türkiye reported holdings swing with gold swaps / accounting; not all tonnes are outright buys or sales.",
    "RUS": "Russia 2024 IFS row is missing; 2025 annual reported_delta is omitted rather than interpolated.",
    "AZE": "GDT 2025 +38t is SOFAZ (oil fund), not necessarily the central-bank row.",
    "BGR": "January 2026 −2t is a euro-adoption transfer to the ECB, excluded by WGC from some net charts.",
}

SQL_HEADER = """\
-- GoldSilverHQ central-bank gold
-- Paste into the GSHQ project SQL editor (https://wixwyxahyutsimxsaqgx.supabase.co)
-- and run once. Anon can SELECT; only service_role can write.
--
-- TWO METRICS — do not mix:
--   reported_delta  NET change in publicly reported official holdings
--                   (IMF IFS year-end / WGC monthly blogs). Includes swaps.
--                   Does NOT include unreported buying.
--   wgc_net         World Gold Council Gold Demand Trends official-sector demand.
--                   NET. WORLD includes Metals Focus' estimate of unreported buying
--                   (57% of 2025 GDT total). Named-country GDT figures are sparse.
-- There is no reliable GROSS-purchases series for all countries. WGC monthly charts
-- plot gross purchases vs gross sales vs net, but they do not publish the gross
-- country table. Do not label reported_delta or wgc_net as "gross buys".
--
-- 2026 months are reported_delta (WGC monthly). 2026 GDT quarters are wgc_net WORLD.
-- window='ytd' rows are cumulative, not that month's flow — filter window='period'
-- for charts.

"""

SCHEMA = r"""
drop table if exists public.cb_flows cascade;
drop table if exists public.cb_holdings cascade;
drop table if exists public.cb_entities cascade;
drop table if exists public.cb_metrics cascade;
drop table if exists public.cb_purchases cascade;
drop table if exists public.cb_world cascade;
drop table if exists public.cb_countries cascade;

create table public.cb_metrics (
  id text primary key,
  definition text not null
);

insert into public.cb_metrics (id, definition) values
  ('reported_delta', 'Net change in publicly reported official gold holdings (IMF IFS / WGC monthly). Signed tonnes. Includes swaps and reclassifications. Does NOT include unreported buying. Not gross purchases.'),
  ('wgc_net', 'World Gold Council Gold Demand Trends official-sector demand. Net tonnes. WORLD total includes an estimate of unreported buying and must not be compared to the sum of reported_delta.');

create table public.cb_entities (
  id text primary key,
  name text not null,
  iso3 text,
  kind text not null check (kind in ('country', 'institution', 'aggregate')),
  stock_tonnes numeric,
  stock_as_of date,
  updated_at timestamptz not null default now()
);

create table public.cb_holdings (
  entity_id text not null references public.cb_entities(id) on delete cascade,
  freq text not null check (freq in ('year', 'month')),
  period date not null,
  tonnes numeric not null check (tonnes >= 0),
  source text not null,
  primary key (entity_id, freq, period)
);

create table public.cb_flows (
  entity_id text not null references public.cb_entities(id) on delete cascade,
  freq text not null check (freq in ('year', 'month', 'quarter')),
  period date not null,
  metric text not null references public.cb_metrics(id),
  tonnes numeric not null,
  window text not null default 'period' check (window in ('period', 'ytd')),
  source text not null,
  note text,
  primary key (entity_id, freq, period, metric, window)
);

alter table public.cb_metrics enable row level security;
alter table public.cb_entities enable row level security;
alter table public.cb_holdings enable row level security;
alter table public.cb_flows enable row level security;

drop policy if exists "public read cb_metrics" on public.cb_metrics;
create policy "public read cb_metrics" on public.cb_metrics for select using (true);
drop policy if exists "public read cb_entities" on public.cb_entities;
create policy "public read cb_entities" on public.cb_entities for select using (true);
drop policy if exists "public read cb_holdings" on public.cb_holdings;
create policy "public read cb_holdings" on public.cb_holdings for select using (true);
drop policy if exists "public read cb_flows" on public.cb_flows;
create policy "public read cb_flows" on public.cb_flows for select using (true);

grant select on public.cb_metrics, public.cb_entities, public.cb_holdings, public.cb_flows to anon, authenticated;
grant all on public.cb_metrics, public.cb_entities, public.cb_holdings, public.cb_flows to service_role;

create index if not exists cb_holdings_period_idx on public.cb_holdings (freq, period);
create index if not exists cb_flows_metric_idx on public.cb_flows (metric, freq, period);
"""


def sql_str(s: str) -> str:
    return "'" + s.replace("'", "''") + "'"


def sql_num(n: float, nd: int = 2) -> str:
    v = round(float(n), nd)
    if abs(v - int(v)) < 10 ** (-nd):
        return str(int(v)) if nd == 0 else f"{v:.{nd}f}"
    return f"{v:.{nd}f}"


def clean_name(raw: str, iso3: str) -> str:
    if iso3 in DISPLAY_NAME:
        return DISPLAY_NAME[iso3]
    s = raw
    for junk in (
        ", Rep. of8)",
        ", Rep. of",
        ", RB",
        ", Arab Rep.",
        ", SAR, China",
        " Province of China",
    ):
        s = s.replace(junk, "")
    return s.strip()


def eid(iso3: str) -> str:
    return iso3.lower()


def load_holdings() -> tuple[dict[str, dict[int, float]], dict[str, str]]:
    by: dict[str, dict[int, float]] = defaultdict(dict)
    names: dict[str, str] = {}
    with CSV_PATH.open() as f:
        for r in csv.DictReader(f):
            code = (r.get("country_code") or "").strip().upper()
            if not code or code in WB_AGGREGATES:
                continue
            if not r.get("gold_value_usd"):
                continue
            year = int(r["year"])
            if year not in GOLD_PRICE:
                continue
            tonnes = float(r["gold_value_usd"]) / (GOLD_PRICE[year] * OZ_PER_T)
            if tonnes < 0:
                continue
            by[code][year] = tonnes
            names[code] = clean_name(r["country"], code)
    return by, names


def chunks(rows: list[str], n: int = 80) -> list[list[str]]:
    return [rows[i : i + n] for i in range(0, len(rows), n)]


def main() -> None:
    holdings, names = load_holdings()

    # Entities
    entities: dict[str, dict] = {}
    for iso3, years in holdings.items():
        last_y = max(years)
        entities[eid(iso3)] = {
            "id": eid(iso3),
            "name": names[iso3],
            "iso3": iso3,
            "kind": "country",
            "stock_tonnes": round(years[last_y], 2),
            "stock_as_of": f"{last_y}-12-31",
        }

    entities["world"] = {
        "id": "world",
        "name": "World (official sector)",
        "iso3": None,
        "kind": "aggregate",
        "stock_tonnes": None,
        "stock_as_of": None,
    }
    for iid, name, iso3, kind, stock, asof in INSTITUTIONS:
        entities[iid] = {
            "id": iid,
            "name": name,
            "iso3": iso3,
            "kind": kind,
            "stock_tonnes": stock,
            "stock_as_of": asof,
        }

    # Overlay 2026 intra-year stocks as "latest"
    for iso3, asof, tonnes, _src in HOLDINGS_2026:
        rec = entities.get(eid(iso3))
        if rec:
            rec["stock_tonnes"] = tonnes
            rec["stock_as_of"] = asof

    # Ensure monthly-only countries exist
    extra_names = {
        "MYS": "Malaysia", "IDN": "Indonesia", "SRB": "Serbia", "BGR": "Bulgaria",
        "KGZ": "Kyrgyzstan", "KHM": "Cambodia", "JOR": "Jordan", "GHA": "Ghana",
        "CHL": "Chile", "GTM": "Guatemala", "BOL": "Bolivia", "URY": "Uruguay",
        "GEO": "Georgia",
    }
    for iso3, name in extra_names.items():
        entities.setdefault(eid(iso3), {
            "id": eid(iso3),
            "name": name,
            "iso3": iso3,
            "kind": "country",
            "stock_tonnes": None,
            "stock_as_of": None,
        })

    # Year-end holdings 2015–2025
    holding_rows = []
    src_hold = "IMF IFS tonnes reconstructed via WGC/LBMA annual average (gold USD / (oz*32150.7374))"
    for iso3, years in holdings.items():
        for y, t in sorted(years.items()):
            if t < 0.005:
                continue
            holding_rows.append((eid(iso3), "year", f"{y}-12-31", round(t, 3), src_hold))

    for iid, name, iso3, kind, stock, asof in INSTITUTIONS:
        holding_rows.append((iid, "year", asof, stock, "WGC / Wikipedia official holdings snapshot"))

    for iso3, asof, tonnes, src in HOLDINGS_2026:
        holding_rows.append((eid(iso3), "month", asof, tonnes, src))

    # reported_delta yearly from consecutive holdings
    flow_rows = []  # entity, freq, period, metric, tonnes, window, source, note
    world_year: dict[int, float] = defaultdict(float)
    for iso3, years in holdings.items():
        note = FLOW_NOTES.get(iso3)
        for y in range(2016, 2026):
            if y not in years or (y - 1) not in years:
                continue
            delta = years[y] - years[y - 1]
            if abs(delta) < 0.4:
                continue
            flow_rows.append((
                eid(iso3), "year", f"{y}-01-01", "reported_delta",
                round(delta, 2), "period", src_hold, note,
            ))
            world_year[y] += delta

    for y, t in sorted(world_year.items()):
        flow_rows.append((
            "world", "year", f"{y}-01-01", "reported_delta",
            round(t, 1), "period",
            "Sum of country reported_delta (IFS reconstruction). Smaller than GDT wgc_net because unreported buying is excluded.",
            "Do not compare to cb_flows metric=wgc_net WORLD.",
        ))

    for y, t in WGC_NET_WORLD_YEAR.items():
        flow_rows.append((
            "world", "year", f"{y}-01-01", "wgc_net", t, "period",
            "WGC Gold Demand Trends (net official-sector demand, includes unreported estimate)",
            None,
        ))

    for (iso3, y), t in WGC_NET_COUNTRY_YEAR.items():
        entities.setdefault(eid(iso3), {
            "id": eid(iso3), "name": DISPLAY_NAME.get(iso3, iso3),
            "iso3": iso3, "kind": "country", "stock_tonnes": None, "stock_as_of": None,
        })
        flow_rows.append((
            eid(iso3), "year", f"{y}-01-01", "wgc_net", t, "period",
            "WGC Gold Demand Trends named-country figure (sparse; not a complete country set)",
            FLOW_NOTES.get(iso3),
        ))

    for period, iso3, t, src in MONTHLY_2026:
        flow_rows.append((
            eid(iso3) if iso3 != "WORLD" else "world",
            "month", period, "reported_delta", t, "period", src,
            FLOW_NOTES.get(iso3),
        ))

    for iso3, t in YTD_H1_2026:
        flow_rows.append((
            eid(iso3), "month", "2026-06-01", "reported_delta", t, "ytd",
            "WGC monthly statistics H1 2026 YTD (through June). Not a monthly flow.",
            FLOW_NOTES.get(iso3),
        ))

    for period, t, src in WGC_NET_WORLD_Q2026:
        flow_rows.append((
            "world", "quarter", period, "wgc_net", t, "period", src,
            "GDT includes unreported estimate. Q1 2026 was revised down from 244t to 57t.",
        ))

    # SQL
    lines = [SQL_HEADER, SCHEMA, ""]

    ent_vals = []
    for rec in sorted(entities.values(), key=lambda r: (r["kind"], r["name"])):
        stock = "null" if rec["stock_tonnes"] is None else sql_num(rec["stock_tonnes"])
        asof = "null" if rec["stock_as_of"] is None else sql_str(rec["stock_as_of"])
        iso = "null" if rec["iso3"] is None else sql_str(rec["iso3"])
        ent_vals.append(
            f"({sql_str(rec['id'])}, {sql_str(rec['name'])}, {iso}, {sql_str(rec['kind'])}, {stock}, {asof})"
        )
    for group in chunks(ent_vals, 60):
        lines.append(
            "insert into public.cb_entities (id, name, iso3, kind, stock_tonnes, stock_as_of) values\n  "
            + ",\n  ".join(group)
            + "\non conflict (id) do update set name = excluded.name, iso3 = excluded.iso3, "
            "kind = excluded.kind, stock_tonnes = excluded.stock_tonnes, stock_as_of = excluded.stock_as_of;\n"
        )

    hold_vals = []
    seen_h = set()
    for e, freq, period, t, src in holding_rows:
        key = (e, freq, period)
        if key in seen_h:
            continue
        seen_h.add(key)
        hold_vals.append(
            f"({sql_str(e)}, {sql_str(freq)}, {sql_str(period)}, {sql_num(t, 3)}, {sql_str(src)})"
        )
    for group in chunks(hold_vals, 80):
        lines.append(
            "insert into public.cb_holdings (entity_id, freq, period, tonnes, source) values\n  "
            + ",\n  ".join(group)
            + "\non conflict (entity_id, freq, period) do update set tonnes = excluded.tonnes, source = excluded.source;\n"
        )

    flow_vals = []
    seen_f = set()
    for e, freq, period, metric, t, window, src, note in flow_rows:
        key = (e, freq, period, metric, window)
        if key in seen_f:
            continue
        seen_f.add(key)
        nsql = "null" if not note else sql_str(note)
        flow_vals.append(
            f"({sql_str(e)}, {sql_str(freq)}, {sql_str(period)}, {sql_str(metric)}, {sql_num(t, 2)}, {sql_str(window)}, {sql_str(src)}, {nsql})"
        )
    for group in chunks(flow_vals, 60):
        lines.append(
            "insert into public.cb_flows (entity_id, freq, period, metric, tonnes, window, source, note) values\n  "
            + ",\n  ".join(group)
            + "\non conflict (entity_id, freq, period, metric, window) do update set "
            "tonnes = excluded.tonnes, source = excluded.source, note = excluded.note;\n"
        )

    OUT_SQL.parent.mkdir(parents=True, exist_ok=True)
    OUT_SQL.write_text("\n".join(lines) + "\n")

    payload = {
        "metrics": {
            "reported_delta": "Net change in publicly reported official holdings. Not gross. Not GDT.",
            "wgc_net": "WGC Gold Demand Trends net official-sector demand. WORLD includes unreported estimate.",
        },
        "entities": list(entities.values()),
        "holdings": [
            {"entity_id": a, "freq": b, "period": c, "tonnes": d, "source": e}
            for a, b, c, d, e in holding_rows
        ],
        "flows": [
            {
                "entity_id": a, "freq": b, "period": c, "metric": d,
                "tonnes": e, "window": f, "source": g, "note": h,
            }
            for a, b, c, d, e, f, g, h in flow_rows
        ],
    }
    OUT_JSON.write_text(json.dumps(payload, indent=2) + "\n")

    n_countries = sum(1 for e in entities.values() if e["kind"] == "country")
    n_rd = sum(1 for r in flow_rows if r[3] == "reported_delta" and r[1] == "year" and r[0] != "world")
    print(f"entities {len(entities)} (countries {n_countries})")
    print(f"holdings {len(hold_vals)}  flows {len(flow_vals)}")
    print(f"yearly country reported_delta rows {n_rd}")
    print(f"wrote {OUT_SQL} ({OUT_SQL.stat().st_size} bytes)")
    print(f"wrote {OUT_JSON} ({OUT_JSON.stat().st_size} bytes)")
    print("world reported_delta by year:", {y: round(world_year[y], 1) for y in sorted(world_year)})
    print("world wgc_net by year:", WGC_NET_WORLD_YEAR)


if __name__ == "__main__":
    main()
