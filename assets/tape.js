const TROY = 32150.74657;
const US_GOLD_T = 8133.5;
const US_GOLD_OZ = US_GOLD_T * TROY;

const fmtUsd = (n, d = 0) =>
  n == null || !Number.isFinite(n)
    ? "—"
    : n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: d, minimumFractionDigits: d });
const fmtCompact = (n) =>
  n == null || !Number.isFinite(n) ? "—" : Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(n);

async function metal(sym) {
  const r = await fetch(`https://api.gold-api.com/price/${sym}`);
  const j = await r.json();
  return typeof j.price === "number" ? j.price : null;
}

async function usDebt() {
  const url =
    "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page[size]=1";
  const r = await fetch(url);
  const j = await r.json();
  const row = j.data?.[0];
  return { usd: Number(row?.tot_pub_debt_out_amt), date: row?.record_date };
}

function set(id, v) {
  const el = document.getElementById(id);
  if (el) el.textContent = v;
}

export async function loadTape() {
  try {
    const [gold, silver, debt] = await Promise.all([metal("XAU"), metal("XAG"), usDebt()]);
    const ratio = gold && silver ? gold / silver : null;
    set("v-gold", fmtUsd(gold, 2));
    set("v-silver", fmtUsd(silver, 2));
    set("v-ratio", ratio ? ratio.toFixed(1) : "—");
    set("v-debt", debt.usd ? fmtUsd(debt.usd, 0) : "—");
    set("v-debt-date", debt.date ? `Treasury ${debt.date}` : "");
    if (gold && debt.usd) {
      const cover40 = (0.4 * debt.usd) / US_GOLD_OZ;
      const cover100 = debt.usd / US_GOLD_OZ;
      set("v-cover40", fmtUsd(cover40, 0));
      set("v-cover100", fmtUsd(cover100, 0));
      set("v-debt-gold", `${fmtCompact(debt.usd / gold)} oz`);
    }
    if (gold && silver) {
      set("v-ag15", fmtUsd(gold / 15, 0));
      set("v-ag30", fmtUsd(gold / 30, 0));
    }
    const share = document.getElementById("share-tape");
    if (share && gold && debt.usd) {
      const text = `US debt ${fmtCompact(debt.usd)} → gold at ${fmtUsd(gold, 0)}. Live tape: goldsilverhq.com @GoldSilverHQ`;
      share.href = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
    }
  } catch {
    set("v-gold", "—");
  }
}

loadTape();
