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

export async function buildRefresh() {
  const [m2, cpi, eurUsd, cnyUsd, jpyUsd, eurM3, lbma] = await Promise.all([
    fredLast("M2SL"),
    fredLast("CPIAUCSL"),
    fredLast("DEXUSEU"),
    fredLast("DEXCHUS"),
    fredLast("DEXJPUS"),
    ecbM3(),
    lbmaPair(),
  ]);

  const fxAsOf = [eurUsd.date, cnyUsd.date, jpyUsd.date].sort().at(-1) ?? eurUsd.date;

  return {
    refreshedAt: new Date().toISOString(),
    metrics: {
      usM2: {
        bn: m2.value,
        asOf: m2.date.slice(0, 7),
        source: "FRED M2SL",
      },
      cpi: {
        value: cpi.value,
        asOf: cpi.date.slice(0, 7),
        source: "FRED CPIAUCSL",
      },
      eurM3: {
        value: eurM3.value,
        asOf: eurM3.asOf,
        source: "ECB BSI M3",
      },
      fx: {
        eurUsd: eurUsd.value,
        cnyUsd: cnyUsd.value,
        jpyUsd: jpyUsd.value,
        asOf: fxAsOf.slice(0, 10),
        source: "FRED DEXUSEU / DEXCHUS / DEXJPUS",
      },
      lbma,
    },
    manual: [
      "Spot Au/Ag — live in-app (Yahoo 15m → gold-api), not this cron",
      "WGC above-ground stock / GDT / mine — survey releases",
      "World Silver Survey / USGS MCS / IMF WEO debt",
      "China SAFE / NBP / CNB / CBU country books — national releases",
      "China M2 / Japan M2 — no free FRED series; keep compiled prints",
      "COMEX OI vs registered — no same-day pair stored",
    ],
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
  const next = await buildRefresh();
  mkdirSync(dirname(OUT), { recursive: true });
  let prevRaw = "";
  try {
    prevRaw = readFileSync(OUT, "utf8");
  } catch {
    /* first run */
  }
  let changed = true;
  if (prevRaw) {
    try {
      changed = payloadFingerprint(JSON.parse(prevRaw)) !== payloadFingerprint(next);
    } catch {
      changed = true;
    }
  }
  if (!changed) {
    console.log("desk-refresh: unchanged");
    process.exit(0);
  }
  writeFileSync(OUT, stableStringify(next));
  console.log(
    `desk-refresh: wrote ${OUT} usM2=${next.metrics.usM2.bn} eurM3=${next.metrics.eurM3.asOf} lbma=${next.metrics.lbma.paired.asOf}`,
  );
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
