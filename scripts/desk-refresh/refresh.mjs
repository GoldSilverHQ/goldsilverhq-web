#!/usr/bin/env node
/**
 * Refresh non-spot /desk metrics from free public sources into
 * src/lib/dashboard/desk-refreshed.json (imported by the desk UI).
 * Spot stays live in-app (Yahoo → gold-api). BaFin-safe: dated facts only.
 *
 * Sources: FRED (M2, CPI, FX, federal debt), ECB (euro-area M3), LBMA (clearing + vault JSON),
 * US Treasury Fiscal Data (debt, interest, Treasury gold), IMF WEO DataMapper (world government debt).
 * Survey / WGC / USGS / CB country books stay manual — no free machine feed.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = join(ROOT, "src/lib/dashboard/desk-refreshed.json");
const TROY_OZ_PER_TONNE = 32_150.7374;
const UA = {
  "User-Agent": "Mozilla/5.0 (compatible; GoldSilverHQ-desk-refresh/1.0; +https://www.goldsilverhq.com)",
  Accept: "application/json,text/csv,*/*",
};

async function fetchText(url) {
  const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(45_000) });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.text();
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(45_000) });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.json();
}

/** Last numeric FRED observation (fredgraph.csv — no API key). */
async function fredLast(id) {
  const text = await fetchText(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${encodeURIComponent(id)}`);
  const lines = text.trim().split("\n");
  for (let i = lines.length - 1; i >= 1; i--) {
    const [date, raw] = lines[i].split(",");
    const value = Number(raw);
    if (date && Number.isFinite(value)) return { date: date.slice(0, 10), value };
  }
  throw new Error(`fred empty ${id}`);
}

async function ecbM3() {
  const url =
    "https://data-api.ecb.europa.eu/service/data/BSI/M.U2.N.V.M30.X.1.U2.2300.Z01.E?lastNObservations=1&format=jsondata";
  const json = await fetchJson(url);
  const obs = Object.values(json.dataSets[0].series)[0].observations;
  const lastKey = Object.keys(obs)
    .sort((a, b) => Number(a) - Number(b))
    .at(-1);
  if (!lastKey) throw new Error("ecb empty");
  const millions = obs[lastKey][0];
  const period = json.structure.dimensions.observation[0].values[Number(lastKey)]?.id ?? "";
  return { value: millions * 1e6, asOf: period };
}

function monthKeyFromMs(ms) {
  const d = new Date(ms);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function kozToTonnes(koz) {
  return (koz * 1_000) / TROY_OZ_PER_TONNE;
}

/** LBMA clearing + vault JSON; pair clearing month with same-month vault gold. */
async function lbmaPair() {
  const [clearing, vault] = await Promise.all([
    fetchJson("https://www.lbma.org.uk/clearing-data/data.json"),
    fetchJson("https://www.lbma.org.uk/vault-holdings-data/data.json"),
  ]);
  if (!Array.isArray(clearing) || !Array.isArray(vault)) {
    throw new Error("lbma clearing/vault shape");
  }

  const clearLast = clearing.at(-1);
  const vaultLast = vault.at(-1);
  if (!clearLast || !vaultLast) throw new Error("lbma empty");

  const clearTs = clearLast[0];
  const goldClearingDailyMoz = Number(clearLast[1]);
  const vaultByTs = new Map(vault.map((row) => [row[0], row]));
  const vaultForClear = vaultByTs.get(clearTs);
  if (!vaultForClear) throw new Error(`no vault row for clearing ${clearTs}`);

  const vaultGoldKoz = Number(vaultForClear[1]);
  const vaultSilverKoz = Number(vaultForClear[2]);
  const latestVaultGoldKoz = Number(vaultLast[1]);
  const latestVaultSilverKoz = Number(vaultLast[2]);

  return {
    clearing: {
      asOf: monthKeyFromMs(clearTs),
      goldClearingDailyMoz,
      source: "lbma-clearing-data.json",
    },
    vaultLatest: {
      asOf: monthKeyFromMs(vaultLast[0]),
      goldT: Math.round(kozToTonnes(latestVaultGoldKoz)),
      silverT: Math.round(kozToTonnes(latestVaultSilverKoz)),
      source: "lbma-vault-holdings-data.json",
    },
    paired: {
      asOf: monthKeyFromMs(clearTs),
      goldClearingDailyMoz,
      vaultGoldT: Math.round(kozToTonnes(vaultGoldKoz)),
      vaultSilverT: Math.round(kozToTonnes(vaultSilverKoz)),
      note: "Daily-average clearing ÷ same-month end vault. Not annualised. Not COMEX.",
    },
  };
}

/** All numeric FRED observations, oldest first. */
async function fredSeries(id) {
  const text = await fetchText(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${encodeURIComponent(id)}`);
  return text
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => {
      const [date, raw] = line.split(",");
      return { date: date.slice(0, 10), value: Number(raw) };
    })
    .filter((r) => r.date && Number.isFinite(r.value));
}

const FISCAL = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service";

async function fiscal(path, params) {
  const q = new URLSearchParams(params).toString();
  const json = await fetchJson(`${FISCAL}${path}?${q}`);
  if (!Array.isArray(json?.data) || !json.data.length) throw new Error(`fiscal ${path} empty`);
  return json.data;
}

/** Debt to the Penny, latest business day. */
async function usDebt() {
  const [r] = await fiscal("/v2/accounting/od/debt_to_penny", { sort: "-record_date", "page[size]": "1" });
  return {
    totalUsd: Number(r.tot_pub_debt_out_amt),
    publicUsd: Number(r.debt_held_public_amt),
    intragovUsd: Number(r.intragov_hold_amt),
    asOf: r.record_date,
    source: "US Treasury Fiscal Data, Debt to the Penny",
  };
}

/**
 * Interest expense on Treasury securities, trailing 12 months.
 * Gross = all securities (incl. trust funds). Public = public issues only (excludes Government Account Series).
 */
async function usInterest(now = new Date()) {
  const since = new Date(Date.UTC(now.getUTCFullYear() - 1, now.getUTCMonth() - 3, 1)).toISOString().slice(0, 10);
  const rows = await fiscal("/v2/accounting/od/interest_expense", {
    filter: `record_date:gte:${since}`,
    sort: "-record_date",
    "page[size]": "2000",
  });
  const months = [...new Set(rows.map((r) => r.record_date))].sort().reverse();
  if (months.length < 12) throw new Error("interest: fewer than 12 months");
  const last12 = new Set(months.slice(0, 12));
  let gross = 0;
  let pub = 0;
  let fytd = 0;
  for (const r of rows) {
    if (!last12.has(r.record_date)) continue;
    const amt = Number(r.month_expense_amt);
    gross += amt;
    if (r.expense_catg_desc === "INTEREST EXPENSE ON PUBLIC ISSUES") pub += amt;
    if (r.record_date === months[0]) fytd += Number(r.fytd_expense_amt);
  }
  return {
    ttmGrossUsd: Math.round(gross),
    ttmPublicUsd: Math.round(pub),
    fytdGrossUsd: Math.round(fytd),
    fiscalYear: Number(rows.find((r) => r.record_date === months[0]).record_fiscal_year),
    asOf: months[0],
    source: "US Treasury Fiscal Data, Interest Expense on the Public Debt Outstanding",
  };
}

async function usTreasuryGold() {
  const rows = await fiscal("/v2/accounting/od/gold_reserve", { sort: "-record_date", "page[size]": "40" });
  const asOf = rows[0].record_date;
  const latest = rows.filter((r) => r.record_date === asOf);
  return {
    oz: Math.round(latest.reduce((a, r) => a + Number(r.fine_troy_ounce_qty), 0) * 1000) / 1000,
    bookUsd: Math.round(latest.reduce((a, r) => a + Number(r.book_value_amt), 0) * 100) / 100,
    asOf,
    source: "US Treasury Fiscal Data, U.S. Treasury-Owned Gold",
  };
}

/** Federal debt % of GDP (quarterly) and year-end total public debt since 1971 (Q4 observation, USD). */
async function usDebtHistory() {
  const [ratio, debt] = await Promise.all([fredSeries("GFDEGDQ188S"), fredSeries("GFDEBTN")]);
  const last = ratio.at(-1);
  const yearEnd = {};
  for (const r of debt) {
    const y = Number(r.date.slice(0, 4));
    if (y >= 1971 && r.date.slice(5, 7) === "10") yearEnd[y] = Math.round(r.value * 1e6);
  }
  return {
    debtGdpPct: Math.round(last.value * 10) / 10,
    debtGdpAsOf: last.date.slice(0, 7),
    yearEndUsd: yearEnd,
    source: "FRED GFDEGDQ188S / GFDEBTN",
  };
}

/** CPI level plus year-on-year change. */
async function cpiBook() {
  const s = await fredSeries("CPIAUCSL");
  const last = s.at(-1);
  const yearAgo = s.at(-13);
  return {
    value: last.value,
    asOf: last.date.slice(0, 7),
    yoyPct: yearAgo ? Math.round((last.value / yearAgo.value - 1) * 1000) / 10 : null,
    source: "FRED CPIAUCSL",
  };
}

const IMF = "https://www.imf.org/external/datamapper/api/v1";

/**
 * World general government gross debt in USD: sum over IMF countries of debt % GDP × GDP (WEO).
 * Only completed calendar years; the newest one is an IMF estimate, never a projection year.
 */
async function imfGovDebt(now = new Date()) {
  const y1 = now.getUTCFullYear() - 1;
  const years = [y1 - 1, y1];
  const periods = years.join(",");
  const [countries, debt, gdp] = await Promise.all([
    fetchJson(`${IMF}/countries`),
    fetchJson(`${IMF}/GGXWDG_NGDP?periods=${periods}`),
    fetchJson(`${IMF}/NGDPD?periods=${periods}`),
  ]);
  const ids = new Set(Object.keys(countries.countries ?? {}));
  const d = debt.values?.GGXWDG_NGDP ?? {};
  const g = gdp.values?.NGDPD ?? {};
  const byYear = {};
  for (const y of years) {
    let usdBn = 0;
    let n = 0;
    for (const [c, v] of Object.entries(d)) {
      if (!ids.has(c) || v[y] == null || g[c]?.[y] == null) continue;
      usdBn += (v[y] * g[c][y]) / 100;
      n++;
    }
    if (n < 150) throw new Error(`imf ${y}: only ${n} countries`);
    byYear[y] = { usd: Math.round(usdBn * 1e9), countries: n };
  }
  return { year: y1, byYear, source: "IMF World Economic Outlook (DataMapper GGXWDG_NGDP × NGDPD)" };
}

/** One entry per stored metric. Each runs on its own so one dead feed cannot sink the rest. */
export const SOURCES = {
  usM2: async () => {
    const m2 = await fredLast("M2SL");
    return { bn: m2.value, asOf: m2.date.slice(0, 7), source: "FRED M2SL" };
  },
  cpi: cpiBook,
  eurM3: async () => {
    const m3 = await ecbM3();
    return { value: m3.value, asOf: m3.asOf, source: "ECB BSI M3" };
  },
  fx: async () => {
    const [eurUsd, cnyUsd, jpyUsd] = await Promise.all([fredLast("DEXUSEU"), fredLast("DEXCHUS"), fredLast("DEXJPUS")]);
    const asOf = [eurUsd.date, cnyUsd.date, jpyUsd.date].sort().at(-1) ?? eurUsd.date;
    return {
      eurUsd: eurUsd.value,
      cnyUsd: cnyUsd.value,
      jpyUsd: jpyUsd.value,
      asOf: asOf.slice(0, 10),
      source: "FRED DEXUSEU / DEXCHUS / DEXJPUS",
    };
  },
  lbma: lbmaPair,
  usDebt,
  usInterest: () => usInterest(),
  usTreasuryGold,
  usDebtHistory,
  imfGovDebt: () => imfGovDebt(),
};

export const MANUAL = [
  "Spot Au/Ag — live in-app (Yahoo 15m → gold-api), not this cron",
  "WGC above-ground stock / GDT / mine — survey releases",
  "World Silver Survey / USGS MCS",
  "IIF Global Debt Monitor headline — quoted by hand with credit (dataset is members-only)",
  "China SAFE / NBP / CNB / CBU country books — national releases",
  "COMEX OI vs registered — no same-day pair stored",
];

function readPrev() {
  try {
    return JSON.parse(readFileSync(OUT, "utf8"));
  } catch {
    return null;
  }
}

/**
 * Fetch every source independently. A failed source keeps its last good value,
 * gains `staleSince` (first failed run) and keeps `lastGoodAt` (last successful run).
 * Returns the next document plus the list of failures.
 */
export async function buildRefresh({ prev = readPrev(), sources = SOURCES, now = new Date() } = {}) {
  const today = now.toISOString().slice(0, 10);
  const ids = Object.keys(sources);
  const settled = await Promise.allSettled(ids.map((id) => sources[id]()));
  const metrics = {};
  const failures = [];
  settled.forEach((res, i) => {
    const id = ids[i];
    const before = prev?.metrics?.[id];
    if (res.status === "fulfilled") {
      metrics[id] = { ...res.value, lastGoodAt: today };
      return;
    }
    const error = String(res.reason?.message ?? res.reason).slice(0, 200);
    failures.push({ id, error });
    if (before) {
      metrics[id] = { ...before, lastGoodAt: before.lastGoodAt ?? prev?.refreshedAt?.slice(0, 10), staleSince: before.staleSince ?? today };
    }
  });
  return {
    doc: { refreshedAt: now.toISOString(), metrics, manual: MANUAL },
    failures,
    total: ids.length,
  };
}

function stableStringify(obj) {
  return `${JSON.stringify(obj, null, 2)}\n`;
}

/** Drop refreshedAt before compare so cron does not no-op-churn every run. */
function payloadFingerprint(doc) {
  const { refreshedAt: _t, ...rest } = doc;
  return JSON.stringify(rest);
}

async function main() {
  const prev = readPrev();
  const { doc: next, failures, total } = await buildRefresh({ prev });
  for (const f of failures) console.log(`::warning title=desk-refresh ${f.id}::${f.error} (kept last good value)`);
  if (failures.length === total) {
    console.error("desk-refresh: every source failed; snapshot left as is");
    process.exit(1);
  }
  mkdirSync(dirname(OUT), { recursive: true });
  if (prev && payloadFingerprint(prev) === payloadFingerprint(next)) {
    console.log("desk-refresh: unchanged");
    return;
  }
  writeFileSync(OUT, stableStringify(next));
  console.log(`desk-refresh: wrote ${OUT} (${total - failures.length}/${total} sources fresh)`);
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
