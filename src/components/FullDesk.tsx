import { useEffect, useState } from "react";
import { AthNow } from "@/components/AthNow";
import { DollarPower } from "@/components/DollarPower";
import { CentralBankGold } from "@/components/desk/CentralBankGold";
import { DeskBoard, DeskMetricTile } from "@/components/desk/DeskMetricTile";
import { MoneyPath } from "@/components/MoneyPath";
import { SpotPriceHistory } from "@/components/SpotPriceHistory";
import { getOfficialGold, type OfficialGold } from "@/lib/dashboard/cb-desk";
import { formatAsOf } from "@/lib/dashboard/central-banks";
import {
  CHINA_SAFE_AUG_2026,
  COMPILED_OFFICIAL,
  dollarLostVsGold,
  fmtCompact,
  fmtUsdCompact,
  laterOfficial,
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
  LBMA_JUL_2026,
  SILVER_2025,
  SILVER_ETP_2025,
  USGS_MINE_2025,
  WGC_MINE_2025,
  WGC_STOCK,
  cbTakeOfMine,
  coverPct,
  investmentGoldGramsPerPerson,
  investmentSilverOzPerPerson,
  lbmaGoldClearingRatio,
  lostVsStart,
  mineOutputRatio,
  silverIdentifiableMoz,
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
    blurb: "Spot, five-year price history, the 1980 highs in today’s dollars, and the old 15:1 mint ratio.",
  },
  {
    id: "official",
    label: "Official gold",
    blurb: "Reported central-bank holdings and net official demand.",
  },
  {
    id: "stocks",
    label: "Stocks & flows",
    blurb:
      "Above-ground gold, silver supply and use, and who holds what. Mine supply is ounces leaving the ground — a published geology figure, not a miner tip or a fair-value claim.",
  },
  {
    id: "money",
    label: "Money",
    blurb: "Money supply, the dollar’s purchasing power, and sovereign debt against gold.",
  },
  {
    id: "paper",
    label: "Exchange paper",
    blurb:
      "London clearing, ETF holdings, and identifiable silver. COMEX open interest is left off — no same-day pair is stored.",
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
  const china = laterOfficial(official.chn, {
    tonnes: CHINA_SAFE_AUG_2026.tonnes,
    asOf: CHINA_SAFE_AUG_2026.asOf,
  });

  return (
    <div className="data-ui mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Metals desk</p>
      <h1 className="mt-2 font-sans text-4xl leading-tight sm:text-5xl">
        <span className="text-gold">Gold</span> & <span className="text-silver">silver</span> desk
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Dated prints by category. Each figure can download as a 4:5 card.
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
                kicker="Gold"
                label="Gold spot"
                unit="USD / oz"
                cadence="live"
                asOf={spotAsOf}
                live={spot ? `$${fmtMoney(spot.gold, 0)}` : undefined}
                note="15-minute print. Weekends stay last close."
              />
              <DeskMetricTile
                kicker="Silver"
                label="Silver spot"
                tone="silver"
                unit="USD / oz"
                cadence="live"
                asOf={spotAsOf}
                live={spot ? `$${fmtMoney(spot.silver, 2)}` : undefined}
                note="Same feed as gold. Not a tick-by-tick feed."
              />
              <DeskMetricTile
                kicker="Ratio"
                label="Gold–silver ratio"
                unit="oz Ag / oz Au"
                cadence="live"
                asOf={spotAsOf}
                live={spot ? spot.ratio.toFixed(1) : undefined}
                note="Ounces of silver per ounce of gold. The 15:1 line below is history, not a target."
              />
            </section>
            <SpotPriceHistory />
            <AthNow />
            <DeskBoard title="Old mint ratio" kicker="coinage, not a target" cols={2}>
              <DeskMetricTile
                kicker="History"
                label="Bimetallic mint ratio"
                unit="Ag : Au"
                cadence="const"
                asOf="history"
                live="15 : 1"
                note="Rome and 19th-century US coinage. Not a forecast."
              />
              <DeskMetricTile
                kicker="Today"
                label="Today vs 15 : 1"
                unit="×"
                cadence="live"
                asOf={spotAsOf}
                live={spread ? spread.toFixed(1) : undefined}
                note="Live gold–silver ratio divided by 15. A comparison, not a target."
              />
            </DeskBoard>
          </>
        ) : null}

        {tab === "official" ? (
          <>
            <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                label="Net official buying"
                unit="t"
                cadence="yearly"
                asOf={CB_YTD_2026.asOf ?? "2026"}
                live={fmtTonnes(CB_YTD_2026.tonnes)}
                note="WGC Gold Demand Trends, H1 2026. Includes unreported."
              />
              <DeskMetricTile
                kicker="Mines"
                label="Central-bank share of mine supply"
                unit="%"
                cadence="yearly"
                asOf={WGC_MINE_2025.asOf}
                live={(cbTakeOfMine() * 100).toFixed(0)}
                note="2025 official demand divided by World Gold Council mine supply."
              />
              <DeskMetricTile
                kicker="Share"
                label="Official share of above-ground gold"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.officialT).toFixed(0)}
                note="World Gold Council above-ground split. Wider than the year-end official book above."
              />
            </section>
            <CentralBankGold />
            <DeskBoard title="Official holdings" kicker="country and institution prints" cols={3}>
              <DeskMetricTile
                kicker="US"
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
                kicker="China"
                label="China reported official gold"
                unit="t"
                cadence="monthly"
                asOf={formatAsOf(china.asOf)}
                live={fmtTonnes(china.tonnes)}
                note={
                  china.asOf === CHINA_SAFE_AUG_2026.asOf
                    ? "SAFE official reserve assets, 7 Sep 2026: 76.73 million oz. Newer than the world year-end stock."
                    : "Latest reported official print. Newer than the world year-end stock."
                }
              />
            </DeskBoard>
          </>
        ) : null}

        {tab === "stocks" ? (
          <>
            <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <DeskMetricTile
                kicker="Stock"
                label="Above-ground gold"
                unit="t"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={fmtTonnes(WGC_STOCK.aboveGroundT)}
                note="World Gold Council stock, end-Q2 2026. Jewelry, official holdings, bars, ETFs, and other. Not the year-end official book."
              />
              <DeskMetricTile
                kicker="Per person"
                label="Investment gold per person"
                unit="g"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={investmentGoldGramsPerPerson().toFixed(1)}
                note="Bars, coins, and ETFs divided by 8.2 billion people. Not a purchase suggestion."
              />
              <DeskMetricTile
                kicker="Mines"
                label="Mine output ratio"
                tone="silver"
                unit="Ag : Au"
                cadence="yearly"
                asOf={USGS_MINE_2025.asOf}
                live={`${mineOutputRatio().toFixed(1)} : 1`}
                note={`USGS 2025 estimate: ${USGS_MINE_2025.silverT.toLocaleString("en-US")} t silver / ${USGS_MINE_2025.goldT.toLocaleString("en-US")} t gold. Geology, not a price target.`}
              />
              <DeskMetricTile
                kicker="Balance"
                label="Silver mine + recycle vs demand"
                tone="silver"
                unit="t"
                cadence="yearly"
                asOf={SILVER_2025.asOf}
                live={`${silverGap > 0 ? "+" : ""}${Math.round(silverGap).toLocaleString("en-US")}`}
                secondary={`Survey balance ${SILVER_2025.marketBalanceMoz} Moz. That line also counts hedging and official sales.`}
                note="World Silver Survey 2026, calendar 2025. Mine plus recycle minus total demand. Negative means that pair is short."
              />
              <DeskMetricTile
                kicker="Cover"
                label="Months of visible silver"
                tone="silver"
                unit="mo"
                cadence="yearly"
                asOf={SILVER_2025.asOf}
                live={silverVisibleMonths().toFixed(1)}
                note="Identifiable bullion divided by 2025 fabrication. Not jewelry, and not a daily vault print."
              />
              <DeskMetricTile
                kicker="Per person"
                label="Investment silver per person"
                tone="silver"
                unit="oz"
                cadence="yearly"
                asOf={SILVER_2025.asOf}
                live={investmentSilverOzPerPerson().toFixed(2)}
                note="End-2025 identifiable bullion divided by 8.2 billion people. Not a forecast."
              />
            </section>

            <DeskBoard title="Who holds the gold" kicker="World Gold Council, Q2 2026" cols={3}>
              <DeskMetricTile
                kicker="Jewelry"
                label="Jewelry"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.jewelryT).toFixed(0)}
                note="Mostly India and China. Worn gold, not a vault stock."
              />
              <DeskMetricTile
                kicker="Investment"
                label="Bars, coins, ETFs"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.barsCoinsT + WGC_STOCK.etfT).toFixed(0)}
                note="Private bars and coins plus gold ETFs. ETF tonnes alone are on Exchange paper."
              />
              <DeskMetricTile
                kicker="Other"
                label="Industry and other"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.otcT + WGC_STOCK.otherT).toFixed(0)}
                note="Fabrication, over-the-counter bars, and the World Gold Council residual."
              />
            </DeskBoard>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Official gold is the rest of this split ({wgcShare(WGC_STOCK.officialT).toFixed(0)}%). That share is on
              the Official gold tab.
            </p>
            <p className="mt-6 max-w-2xl text-sm text-muted">
              Mine output and months of visible cover are published survey figures, not equity tips. Read the{" "}
              <a href="/markets/gold-silver-ratio" className="text-gold hover:text-gold-soft">
                mining vs market ratio
              </a>
              ,{" "}
              <a href="/markets/physical-silver-demand-by-country" className="text-gold hover:text-gold-soft">
                physical silver demand by country
              </a>
              ,{" "}
              <a href="/history/silver/monetary-and-industry" className="text-gold hover:text-gold-soft">
                silver’s monetary and industrial roles
              </a>
              , or{" "}
              <a href="/sound-money/hard-money-vs-fiat" className="text-gold hover:text-gold-soft">
                hard money vs fiat
              </a>
              .
            </p>
          </>
        ) : null}

        {tab === "money" ? (
          <>
            <DollarPower />
            <DeskBoard
              title="Money supply"
              kicker={printers.source === "live" ? "latest month" : "stored July 2026"}
            >
              <DeskMetricTile
                kicker="USD"
                label="US M2"
                unit="USD"
                cadence="yearly"
                asOf={String(m2.year)}
                live={fmtUsdCompact(m2.bn * 1e9)}
                note="FRED M2SL. 2026 is the latest month, not a completed year."
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
                    ? "ECB money stock, latest month. China and Japan stay on their July 2026 prints."
                    : "Stored ECB print (July 2026). The live feed missed; this is the saved figure."
                }
              />
              <DeskMetricTile
                kicker="CNY"
                label="China M2"
                unit="CNY"
                cadence="monthly"
                asOf={formatAsOf(printers.cnyM2.asOf)}
                live={fmtCompact(printers.cnyM2.value, "CN¥")}
                note="People’s Bank of China, July 2026. Shown on its own, not folded into the US figure."
              />
              <DeskMetricTile
                kicker="JPY"
                label="Japan M2"
                unit="JPY"
                cadence="monthly"
                asOf={formatAsOf(printers.jpyM2.asOf)}
                live={fmtCompact(printers.jpyM2.value, "¥")}
                note="Bank of Japan, July 2026."
              />
            </DeskBoard>
            <DeskBoard title="Currencies vs gold" kicker="share of purchasing power lost">
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
            <DeskBoard title="Sovereign debt vs gold" kicker="IMF debt · WGC / official gold">
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
                note="World official tonnes times the gold spot. A mark-to-market, not a bid for the whole stock."
              />
              <DeskMetricTile
                kicker="Cover"
                label="All gold vs world gov debt"
                unit="%"
                cadence="live"
                asOf={spotAsOf}
                wide
                live={allCover != null ? (allCover * 100).toFixed(0) : undefined}
                note="Above-ground gold, marked to spot, as a share of IMF gross public debt."
              />
              <DeskMetricTile
                kicker="Cover"
                label="Official gold vs world gov debt"
                unit="%"
                cadence="live"
                asOf={spotAsOf}
                wide
                live={officialCover != null ? (officialCover * 100).toFixed(1) : undefined}
                note="Year-end official book, marked to spot, as a share of the same IMF debt. Not all above-ground gold."
              />
            </DeskBoard>
            <MoneyPath />
          </>
        ) : null}

        {tab === "paper" ? (
          <>
            <DeskBoard title="Claims vs metal" kicker="London · ETFs · vaults">
              <DeskMetricTile
                kicker="London"
                label="Clearing vs vaulted gold"
                unit="×"
                cadence="monthly"
                asOf="Jul 2026"
                live={lbmaGoldClearingRatio().toFixed(3)}
                note={`LBMA July 2026 daily average clearing (${LBMA_JUL_2026.goldClearingDailyMoz} Moz) divided by end-July London vault gold (${LBMA_JUL_2026.vaultGoldT.toLocaleString("en-US")} t). A daily ratio, not a full year, and not COMEX.`}
              />
              <DeskMetricTile
                kicker="ETFs"
                label="Gold ETF tonnes"
                unit="t"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={fmtTonnes(WGC_STOCK.etfT)}
                note="World Gold Council above-ground split, Q2 2026. Not a daily holdings series."
              />
              <DeskMetricTile
                kicker="Vaults"
                label="Identifiable silver"
                tone="silver"
                unit="moz"
                cadence="yearly"
                asOf={SILVER_2025.asOf}
                live={silverIdentifiableMoz().toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                note="World Silver Survey 2026 identifiable bullion, end-2025. London, CME, SGE, SHFE, and other exchanges. Not a daily vault print."
              />
              <DeskMetricTile
                kicker="ETFs"
                label="Silver ETF tonnes"
                tone="silver"
                unit="t"
                cadence="yearly"
                asOf="2025"
                live={fmtTonnes(SILVER_ETP_2025.tonnes)}
                note="World Silver Survey 2026 end-2025 exchange-traded holdings (1,317.6 Moz, printed as 40,982 t). Not a daily series."
              />
            </DeskBoard>
            <p className="mt-6 max-w-2xl text-sm text-muted">
              COMEX gold and silver open interest versus registered stocks are not shown. No same-day warehouse pair is
              stored, so those tiles stay off the page rather than as empty dashes.
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
