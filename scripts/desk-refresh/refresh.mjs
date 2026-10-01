#!/usr/bin/env node
/**
 * Refresh non-spot /desk metrics from free public sources into
 * src/lib/dashboard/desk-refreshed.json (imported by the desk UI).
 * Spot stays live in-app (Yahoo → gold-api). BaFin-safe: dated facts only.
 *
 * Sources: FRED (M2, CPI, FX), ECB (euro-area M3), LBMA (clearing + vault JSON).
 * Survey / WGC / IMF / USGS / CB country books stay manual — no free machine feed.
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

/** One entry per stored metric. Each runs on its own so one dead feed cannot sink the rest. */
export const SOURCES = {
  usM2: async () => {
    const m2 = await fredLast("M2SL");
    return { bn: m2.value, asOf: m2.date.slice(0, 7), source: "FRED M2SL" };
  },
  cpi: async () => {
    const cpi = await fredLast("CPIAUCSL");
    return { value: cpi.value, asOf: cpi.date.slice(0, 7), source: "FRED CPIAUCSL" };
  },
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
};

export const MANUAL = [
  "Spot Au/Ag — live in-app (Yahoo 15m → gold-api), not this cron",
  "WGC above-ground stock / GDT / mine — survey releases",
  "World Silver Survey / USGS MCS / IMF WEO debt",
  "China SAFE / NBP / CNB / CBU country books — national releases",
  "China M2 / Japan M2 — no free FRED series; keep compiled prints",
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
