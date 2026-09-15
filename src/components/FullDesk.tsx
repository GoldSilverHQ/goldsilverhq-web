import { useEffect, useState } from "react";
import { AthNow } from "@/components/AthNow";
import { DollarPower } from "@/components/DollarPower";
import { CentralBankGold } from "@/components/desk/CentralBankGold";
import { DeskBoard, DeskMetricTile } from "@/components/desk/DeskMetricTile";
import { MoneyPath } from "@/components/MoneyPath";
import { SpotTape } from "@/components/SpotTape";
import { getOfficialGold, type OfficialGold } from "@/lib/dashboard/cb-desk";
import { formatAsOf } from "@/lib/dashboard/central-banks";
import {
  COMPILED_OFFICIAL,
  dollarLostVsGold,
  fmtCompact,
  fmtUsdCompact,
  latestUsM2,
  officialMtmUsd,
  pctLostDisplay,
} from "@/lib/dashboard/clock-prints";
import { COMPILED_PRINTERS, getPrinters, type Printers } from "@/lib/dashboard/printers";
import { getSpotLite } from "@/lib/dashboard/spot";
import {
  CB_YTD_2026,
  FX_START,
  IMF_GOV_DEBT,
  SILVER_2024,
  USGS_MINE_2025,
  WGC_STOCK,
  cbTakeOfMine,
  coverPct,
  investmentGoldGramsPerPerson,
  investmentSilverOzPerPerson,
  lostVsStart,
  mineOutputRatio,
  silverIdentifiableMoz,
  silverOfficialT,
  silverSupplyGapT,
  silverVisibleMonths,
  wgcShare,
} from "@/lib/dashboard/stocks";

export type DeskCategory =
  | "prices"
  | "official"
  | "stocks"
  | "money"
  | "paper";

const DESK_TABS: {
  id: DeskCategory;
  label: string;
  blurb: string;
}[] = [
  {
    id: "prices",
    label: "Prices",
    blurb: "Spot, the five-year COMEX tape, ratios, and the 1980 highs in today’s dollars.",
  },
  {
    id: "official",
    label: "Official gold",
    blurb: "Reported central-bank and IFI holdings and net official demand.",
  },
  {
    id: "stocks",
    label: "Stocks & flows",
    blurb: "Above-ground metal, mine output, and who holds what.",
  },
  {
    id: "money",
    label: "Money",
    blurb: "Money supply, the dollar’s purchasing power, and sovereign debt against gold.",
  },
  {
    id: "paper",
    label: "Exchange paper",
    blurb: "Claims vs vaulted metal and ETF stock. Some prints are still dashes — missing feeds, not broken widgets.",
  },
];

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

function fmtMoney(n: number, d: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });
}

function fmtTonnes(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

function DeskTabBar({
  value,
  onChange,
}: {
  value: DeskCategory;
  onChange: (v: DeskCategory) => void;
}) {
  return (
    <div className="-mx-4 overflow-x-auto px-4">
      <div
        className="inline-flex min-w-full gap-1 rounded-full bg-surface p-1 shadow-[var(--shadow-border)] sm:min-w-0"
        role="tablist"
        aria-label="Desk category"
      >
        {DESK_TABS.map((tab) => {
          const on = tab.id === value;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => onChange(tab.id)}
              className={`shrink-0 rounded-full px-3 py-2.5 text-sm whitespace-nowrap transition-[color,background-color] duration-150 ease-out active:scale-[0.96] sm:px-4 ${
                on ? "bg-gold text-bg" : "text-muted hover:text-fg"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FullDesk() {
  const [tab, setTab] = useState<DeskCategory>("prices");
  const [spot, setSpot] = useState<Spot | null>(null);
  const [official, setOfficial] = useState<OfficialGold>(COMPILED_OFFICIAL);
  const [printers, setPrinters] = useState<Printers>(COMPILED_PRINTERS);

  useEffect(() => {
    let on = true;
    const load = () =>
      getSpotLite()
        .then((s) => {
          if (on) setSpot(s);
        })
        .catch(() => undefined);
    load();
    getOfficialGold()
      .then((d) => {
        if (on && d) setOfficial(d);
      })
      .catch(() => undefined);
    getPrinters()
      .then((d) => {
        if (on) setPrinters(d);
      })
      .catch(() => undefined);
    const id = setInterval(load, 15 * 60_000);
    return () => {
      on = false;
      clearInterval(id);
    };
  }, []);

  const active = DESK_TABS.find((t) => t.id === tab)!;
  const spotAsOf = spot?.asOf
    ? new Date(`${spot.asOf}T12:00:00Z`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })
    : "live";
  const spread = spot && spot.ratio > 0 ? spot.ratio / 15 : null;
  const goldLoss = spot ? dollarLostVsGold(spot.gold) : null;
  const m2 = latestUsM2();
  const officialMtm = spot ? officialMtmUsd(official.world.tonnes, spot.gold) : null;
  const allGoldMtm = spot ? officialMtmUsd(WGC_STOCK.aboveGroundT, spot.gold) : null;
  const officialCover = spot ? coverPct(official.world.tonnes, spot.gold) : null;
  const allCover = spot ? coverPct(WGC_STOCK.aboveGroundT, spot.gold) : null;
  const goldEur = spot ? spot.gold / printers.fx.eurUsd : null;
  const goldCny = spot ? spot.gold * printers.fx.cnyUsd : null;
  const goldJpy = spot ? spot.gold * printers.fx.jpyUsd : null;
  const eurLoss = goldEur != null ? lostVsStart(goldEur, FX_START.eur.localGold) : null;
  const cnyLoss = goldCny != null ? lostVsStart(goldCny, FX_START.cny.localGold) : null;
  const jpyLoss = goldJpy != null ? lostVsStart(goldJpy, FX_START.jpy.localGold) : null;
  const silverGap = silverSupplyGapT();

  return (
    <div className="data-ui mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Metals desk</p>
      <h1 className="mt-2 font-sans text-4xl leading-tight sm:text-5xl">
        <span className="text-gold">Gold</span> & <span className="text-silver">silver</span> desk
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Dated prints by category. Each figure can download as a 4:5 card. Dashes are missing prints, not broken
        widgets.
      </p>

      <div className="mt-6">
        <DeskTabBar value={tab} onChange={setTab} />
      </div>
      <p className="mt-3 max-w-2xl text-sm text-muted">{active.blurb}</p>

      <div className="mt-2" role="tabpanel" aria-label={active.label}>
        {tab === "prices" ? (
          <>
            <section className="mt-8 grid gap-3 sm:grid-cols-3">
              <DeskMetricTile
                kicker="Au"
                label="Gold spot"
                unit="USD / oz"
                cadence="live"
                asOf={spotAsOf}
                live={spot ? `$${fmtMoney(spot.gold, 0)}` : undefined}
                note="15-minute print. Weekends stay last close."
              />
              <DeskMetricTile
                kicker="Ag"
                label="Silver spot"
                tone="silver"
                unit="USD / oz"
                cadence="live"
                asOf={spotAsOf}
                live={spot ? `$${fmtMoney(spot.silver, 2)}` : undefined}
                note="Same feed as gold. Not a tick-by-tick tape."
              />
              <DeskMetricTile
                kicker="GSR"
                label="Gold–silver ratio"
                unit="oz Ag / oz Au"
                cadence="live"
                asOf={spotAsOf}
                live={spot ? spot.ratio.toFixed(1) : undefined}
                note="Live ratio. 15:1 is history, not a target."
              />
            </section>
            <SpotTape />
            <AthNow />
            <DeskBoard title="Ratios" kicker="price history">
              <DeskMetricTile
                kicker="Live"
                label="Gold–silver ratio"
                unit="×"
                cadence="live"
                asOf={spotAsOf}
                live={spot ? spot.ratio.toFixed(1) : undefined}
              />
              <DeskMetricTile
                kicker="History"
                label="Bimetallic mint ratio"
                unit="Ag : Au"
                cadence="const"
                asOf="const"
                live="15 : 1"
                note="Rome / 19th-c. US coinage. Not a forecast."
              />
              <DeskMetricTile
                kicker="Spread"
                label="Today vs 15 : 1"
                unit="×"
                cadence="live"
                asOf={spotAsOf}
                live={spread ? spread.toFixed(1) : undefined}
                note="How many times the old mint ratio the market is paying."
              />
            </DeskBoard>
          </>
        ) : null}

        {tab === "official" ? (
          <>
            <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <DeskMetricTile
                kicker="Official"
                label="World official gold"
                unit="t"
                cadence="yearly"
                asOf={formatAsOf(official.world.asOf)}
                live={fmtTonnes(official.world.tonnes)}
                note="Countries + IMF + ECB, one year-end vintage. Not BIS. 2026 buying is not in this stock yet."
              />
              <DeskMetricTile
                kicker="Buying"
                label="Net official buying, YTD"
                unit="t"
                cadence="yearly"
                asOf={CB_YTD_2026.asOf ?? "2026"}
                live={fmtTonnes(CB_YTD_2026.tonnes)}
                note="WGC GDT H1 2026. Includes unreported."
              />
              <DeskMetricTile
                kicker="Mine"
                label="CB take of mine supply"
                unit="%"
                cadence="yearly"
                live={(cbTakeOfMine() * 100).toFixed(0)}
                note="2025 official demand / WGC mine supply."
              />
              <DeskMetricTile
                kicker="Official"
                label="Central banks and IFIs"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.officialT).toFixed(0)}
                note="WGC above-ground split. Wider than our official book."
              />
            </section>
            <CentralBankGold />
            <DeskBoard title="Official holdings" kicker="country and IFI books">
              <DeskMetricTile
                kicker="Fed"
                label="United States official gold"
                unit="t"
                cadence="yearly"
                asOf={official.usa ? formatAsOf(official.usa.asOf) : "yearly"}
                live={official.usa ? fmtTonnes(official.usa.tonnes) : undefined}
              />
              <DeskMetricTile
                kicker="ECB"
                label="ECB gold (institution)"
                unit="t"
                cadence="yearly"
                asOf={official.ecb ? formatAsOf(official.ecb.asOf) : "yearly"}
                live={official.ecb ? fmtTonnes(official.ecb.tonnes) : undefined}
                note="The ECB’s own book. Eurosystem (national banks + ECB) is a larger sum, not this tile."
              />
              <DeskMetricTile
                kicker="PBoC"
                label="China reported official gold"
                unit="t"
                cadence="monthly"
                asOf={official.chn ? formatAsOf(official.chn.asOf) : "monthly"}
                live={official.chn ? fmtTonnes(official.chn.tonnes) : undefined}
                note="Latest PBoC/SAFE print. Newer than the world year-end stock."
              />
              <DeskMetricTile
                kicker="World"
                label="All official gold"
                unit="t"
                cadence="yearly"
                asOf={formatAsOf(official.world.asOf)}
                live={fmtTonnes(official.world.tonnes)}
                note="Same figure as the face. Compiled seed if GSHQ is offline."
              />
            </DeskBoard>
          </>
        ) : null}

        {tab === "stocks" ? (
          <>
            <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <DeskMetricTile
                kicker="Official"
                label="Official reserves"
                unit="t"
                cadence="yearly"
                asOf={formatAsOf(official.world.asOf)}
                live={fmtTonnes(official.world.tonnes)}
                note="Countries + IMF + ECB, one year-end vintage. Also under Official gold."
              />
              <DeskMetricTile
                kicker="Buying"
                label="Net official buying"
                unit="t"
                cadence="yearly"
                asOf={CB_YTD_2026.asOf ?? "2026"}
                live={fmtTonnes(CB_YTD_2026.tonnes)}
                note="WGC GDT H1 2026 YTD. Also under Official gold."
              />
              <DeskMetricTile
                kicker="Mine"
                label="CB share of mine supply"
                unit="%"
                cadence="yearly"
                live={(cbTakeOfMine() * 100).toFixed(0)}
                note="2025 official demand ÷ WGC mine supply."
              />
              <DeskMetricTile
                kicker="Investment"
                label="Investment gold per person"
                unit="g"
                cadence="yearly"
                live={investmentGoldGramsPerPerson().toFixed(1)}
                note="Bars, coins, ETFs over 8.2bn people."
              />
              <DeskMetricTile
                kicker="Official"
                label="Official silver"
                tone="silver"
                unit="t"
                cadence="yearly"
                asOf={SILVER_2024.asOf}
                live={String(Math.round(silverOfficialT()))}
                note="2024 Silver Institute. Official sector is a rounding error."
              />
              <DeskMetricTile
                kicker="Balance"
                label="Mine + recycle vs demand"
                tone="silver"
                unit="t"
                cadence="yearly"
                asOf={SILVER_2024.asOf}
                live={`${silverGap > 0 ? "+" : ""}${Math.round(silverGap).toLocaleString("en-US")}`}
                note="2024 Silver Institute. Negative = deficit."
              />
              <DeskMetricTile
                kicker="Cover"
                label="Months of visible cover"
                tone="silver"
                unit="mo"
                cadence="yearly"
                asOf={SILVER_2024.asOf}
                live={silverVisibleMonths().toFixed(1)}
                note="Identifiable bullion (vaults) ÷ 2024 fabrication. Not jewelry."
              />
              <DeskMetricTile
                kicker="Investment"
                label="Investment silver per person"
                tone="silver"
                unit="oz"
                cadence="yearly"
                asOf={SILVER_2024.asOf}
                live={investmentSilverOzPerPerson().toFixed(2)}
                note="2024 Silver Institute investment stock over 8.2bn people."
              />
              <DeskMetricTile
                kicker="Geology"
                label="Mine output ratio"
                tone="silver"
                unit="Ag : Au"
                cadence="yearly"
                asOf={USGS_MINE_2025.asOf}
                live={`${mineOutputRatio().toFixed(1)} : 1`}
                note={`USGS 2025e: ${USGS_MINE_2025.silverT.toLocaleString("en-US")} t silver / ${USGS_MINE_2025.goldT.toLocaleString("en-US")} t gold. A byproduct fact, not fair value.`}
              />
            </section>

            <DeskBoard title="Who holds the gold" kicker="WGC Q2 2026 · holdings mix">
              <DeskMetricTile
                kicker="Jewelry"
                label="Jewelry"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.jewelryT).toFixed(0)}
                note="Mostly India and China. Not a vault float."
              />
              <DeskMetricTile
                kicker="Investment"
                label="Bars, coins, ETFs"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.barsCoinsT + WGC_STOCK.etfT).toFixed(0)}
              />
              <DeskMetricTile
                kicker="Other"
                label="Industry, OTC, unaccounted"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.otcT + WGC_STOCK.otherT).toFixed(0)}
              />
            </DeskBoard>
          </>
        ) : null}

        {tab === "money" ? (
          <>
            <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <DeskMetricTile
                kicker="Cover"
                label="World gov debt / official gold"
                unit="%"
                cadence="yearly"
                asOf={IMF_GOV_DEBT.asOf}
                live={officialCover != null ? (officialCover * 100).toFixed(1) : undefined}
                note="IMF 2025 gross public debt vs our official book mark-to-market. Not all above-ground gold."
              />
            </section>
            <DollarPower />
            <DeskBoard
              title="Money supply"
              kicker={printers.source === "live" ? "ECB live · Asia compiled" : "compiled prints"}
            >
              <DeskMetricTile
                kicker="USD"
                label="US M2"
                unit="USD"
                cadence="yearly"
                asOf={String(m2.year)}
                live={fmtUsdCompact(m2.bn * 1e9)}
                note="FRED M2SL, compiled year. Not per-second. 2026 is latest, not a completed year."
              />
              <DeskMetricTile
                kicker="EUR"
                label="Euro-area M3"
                unit="EUR"
                cadence="monthly"
                asOf={formatAsOf(printers.eurM3.asOf)}
                live={fmtCompact(printers.eurM3.value, "€")}
                note={
                  printers.source === "live"
                    ? "ECB BSI M3, latest month. China and Japan M2 stay compiled — FRED dropped those series."
                    : "Compiled ECB print (Jul 2026). Live feed missed; this is the seed, not a gag."
                }
              />
              <DeskMetricTile
                kicker="CNY"
                label="China M2"
                unit="CNY"
                cadence="monthly"
                asOf={formatAsOf(printers.cnyM2.asOf)}
                live={fmtCompact(printers.cnyM2.value, "CN¥")}
                note="PBOC Jul 2026. Dwarfs the others. Do not hide it in a world sum."
              />
              <DeskMetricTile
                kicker="JPY"
                label="Japan M2"
                unit="JPY"
                cadence="monthly"
                asOf={formatAsOf(printers.jpyM2.asOf)}
                live={fmtCompact(printers.jpyM2.value, "¥")}
                note="BOJ Jul 2026. FRED’s Japan M2 series stopped years ago."
              />
            </DeskBoard>
            <DeskBoard title="Currencies vs gold" kicker="purchasing power lost">
              <DeskMetricTile
                kicker="USD"
                label="Dollar vs gold since 1971"
                unit="% lost"
                cadence="live"
                asOf={spotAsOf}
                live={goldLoss != null ? pctLostDisplay(goldLoss) : undefined}
                note="Share of the 1971 gold ounce a dollar no longer buys. Bretton Woods closed 15 Aug 1971."
              />
              <DeskMetricTile
                kicker="EUR"
                label="Euro vs gold since 1999"
                unit="% lost"
                cadence="live"
                asOf={spotAsOf}
                live={eurLoss != null ? pctLostDisplay(eurLoss) : undefined}
                note="First euro session, 4 Jan 1999 (~€244/oz). Gold in euros = USD gold ÷ EURUSD."
              />
              <DeskMetricTile
                kicker="CNY"
                label="Yuan vs gold since 1971"
                unit="% lost"
                cadence="live"
                asOf={spotAsOf}
                live={cnyLoss != null ? pctLostDisplay(cnyLoss) : undefined}
                note="Official 1971 rate, not a market yuan. Same gold-window dollar as the USD tile."
              />
              <DeskMetricTile
                kicker="JPY"
                label="Yen vs gold since 1971"
                unit="% lost"
                cadence="live"
                asOf={spotAsOf}
                live={jpyLoss != null ? pctLostDisplay(jpyLoss) : undefined}
                note="¥360 × $40.62 at the gold window. Bretton Woods closed 15 Aug 1971."
              />
            </DeskBoard>
            <DeskBoard title="Sovereign debt vs gold" kicker="two different stocks">
              <DeskMetricTile
                kicker="World"
                label="Global sovereign debt"
                unit="USD"
                cadence="yearly"
                asOf={IMF_GOV_DEBT.asOf}
                wide
                live={fmtUsdCompact(IMF_GOV_DEBT.usd)}
                note="IMF WEO gross public debt, 2025. Not IIF’s larger ‘all debt’ stock."
              />
              <DeskMetricTile
                kicker="All gold"
                label="Above-ground gold, mark-to-market"
                unit="USD"
                cadence="live"
                asOf={spotAsOf}
                live={allGoldMtm != null ? fmtUsdCompact(allGoldMtm) : undefined}
                note={`WGC ${formatAsOf(WGC_STOCK.asOf)} stock × spot. Jewelry plus vaults. Not all of it can be sold at the posted price.`}
              />
              <DeskMetricTile
                kicker="Official"
                label="Official gold, mark-to-market"
                unit="USD"
                cadence="live"
                asOf={spotAsOf}
                live={officialMtm != null ? fmtUsdCompact(officialMtm) : undefined}
                note="World official tonnes × spot. A mark, not a bid for the whole stack."
              />
              <DeskMetricTile
                kicker="Cover"
                label="All gold vs world gov debt"
                unit="%"
                cadence="live"
                asOf={spotAsOf}
                live={allCover != null ? (allCover * 100).toFixed(0) : undefined}
              />
              <DeskMetricTile
                kicker="Cover"
                label="Official gold vs world gov debt"
                unit="%"
                cadence="live"
                asOf={spotAsOf}
                live={officialCover != null ? (officialCover * 100).toFixed(1) : undefined}
              />
            </DeskBoard>
            <MoneyPath />
          </>
        ) : null}

        {tab === "paper" ? (
          <>
            <DeskBoard title="Claims vs metal" kicker="exchange paper · not one multiple">
              <DeskMetricTile
                kicker="COMEX Au"
                label="Open interest vs registered"
                unit="×"
                cadence="daily"
                note="No clean daily feed we trust. Futures claims vs registered metal — still a dash."
              />
              <DeskMetricTile
                kicker="LBMA"
                label="Clearing vs vaulted gold"
                unit="×"
                cadence="monthly"
                note="Turnover, not the same as COMEX. Stays dashed until we store a dated print."
              />
              <DeskMetricTile
                kicker="ETFs"
                label="Gold ETF tonnes"
                unit="t"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={fmtTonnes(WGC_STOCK.etfT)}
                note="WGC above-ground split, Q2 2026. Not a daily holdings tape."
              />
              <DeskMetricTile
                kicker="COMEX Ag"
                label="Open interest vs registered"
                tone="silver"
                unit="×"
                cadence="daily"
                note="Same gap as gold: no daily COMEX registered series in this desk."
              />
              <DeskMetricTile
                kicker="Vaults"
                label="Identifiable silver"
                tone="silver"
                unit="moz"
                cadence="yearly"
                asOf={SILVER_2024.asOf}
                live={silverIdentifiableMoz().toLocaleString("en-US", { maximumFractionDigits: 0 })}
                note="Silver Institute identifiable bullion, 2024. Not a London or COMEX daily vault print."
              />
              <DeskMetricTile
                kicker="ETFs"
                label="Silver ETF tonnes"
                tone="silver"
                unit="t"
                cadence="daily"
                note="No clean daily ETF stock we store. Identifiable silver is the yearly proxy above."
              />
            </DeskBoard>
            <p className="mt-6 text-sm text-muted">
              Four of six tiles are dashes on purpose. COMEX open interest and LBMA clearing stay empty until we store
              a trusted dated print.
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
