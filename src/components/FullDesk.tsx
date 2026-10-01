import { useEffect, useState } from "react";
import { DollarPower } from "@/components/DollarPower";
import { CentralBankGold } from "@/components/desk/CentralBankGold";
import { UsDebtAndGold, WorldDebt } from "@/components/desk/DebtMoney";
import { MineSupply, SilverMarket, VaultsAndEtfs } from "@/components/desk/SupplyVaults";
import {
  CbTimeline,
  HoldersTable,
  NetBuyingByYear,
  ReserveShareChart,
  UsTreasuryGold,
} from "@/components/desk/CentralBanksExtras";
import { PastHighs, RatioHistory, RealPriceHistory } from "@/components/desk/PriceHistory";
import { DeskBoard, DeskMetricTile } from "@/components/desk/DeskMetricTile";
import { MoneyPath } from "@/components/MoneyPath";
import { SpotPriceHistory } from "@/components/SpotPriceHistory";
import { getOfficialGold, type OfficialGold } from "@/lib/dashboard/cb-desk";
import { CB_SHARE_LATEST_YEAR, CB_WORLD_SHARE } from "@/lib/dashboard/cb-extras";
import { formatAsOf } from "@/lib/dashboard/central-banks";
import {
  CHINA_SAFE_AUG_2026,
  COMPILED_OFFICIAL,
  dollarLostVsGold,
  fmtCompact,
  fmtUsdCompact,
  laterOfficial,
  latestUsM2,
  pctLostDisplay,
} from "@/lib/dashboard/clock-prints";
import { DESK_REFRESHED, staleNote } from "@/lib/dashboard/desk-refreshed";
import { COMPILED_PRINTERS, getPrinters, type Printers } from "@/lib/dashboard/printers";
import { getSpotLite, parseSpotAsOf } from "@/lib/dashboard/spot";
import {
  CB_YTD_2026,
  FX_START,
  SILVER_2025,
  WGC_MINE_2025,
  WGC_STOCK,
  cbTakeOfMine,
  investmentGoldGramsPerPerson,
  lostVsStart,
  silverVisibleMonths,
  wgcShare,
} from "@/lib/dashboard/stocks";

export type DeskCategory = "prices" | "banks" | "debt" | "supply" | "vaults";

const DESK_TABS: {
  id: DeskCategory;
  label: string;
  blurb: string;
}[] = [
  {
    id: "prices",
    label: "Prices & ratios",
    blurb: "Today's prices, their history in today's dollars, the gold–silver ratio, and the old record highs.",
  },
  {
    id: "banks",
    label: "Central banks",
    blurb: "Who holds official gold, who is buying or selling, and how that has changed.",
  },
  {
    id: "debt",
    label: "Debt & money",
    blurb: "Government debt, money supply and inflation, measured against gold.",
  },
  {
    id: "supply",
    label: "Supply & demand",
    blurb:
      "Mining by country, above-ground gold, and silver supply and use. Mine supply is ounces leaving the ground — a published geology figure, not a miner tip or a fair-value claim.",
  },
  {
    id: "vaults",
    label: "Vaults & ETFs",
    blurb:
      "Where the metal sits: London vaults, COMEX futures, ETFs, and identifiable silver stocks.",
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
        aria-label="Live category"
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
    ? parseSpotAsOf(spot.asOf).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })
    : "live";
  const goldLoss = spot ? dollarLostVsGold(spot.gold) : null;
  const m2Compiled = latestUsM2();
  const usM2Bn = printers.usM2.value / 1e9;
  const usM2AsOf = printers.usM2.asOf;
  const goldEur = spot ? spot.gold / printers.fx.eurUsd : null;
  const goldJpy = spot ? spot.gold * printers.fx.jpyUsd : null;
  const eurLoss = goldEur != null ? lostVsStart(goldEur, FX_START.eur.localGold) : null;
  const jpyLoss = goldJpy != null ? lostVsStart(goldJpy, FX_START.jpy.localGold) : null;
  const china = laterOfficial(official.chn, {
    tonnes: CHINA_SAFE_AUG_2026.tonnes,
    asOf: CHINA_SAFE_AUG_2026.asOf,
  });

  return (
    <div className="data-ui mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Live</p>
      <h1 className="mt-2 font-sans text-4xl leading-tight sm:text-5xl">
        <span className="text-gold">Golden</span> Numbers
      </h1>

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
            <RealPriceHistory latest={spot ?? undefined} />
            <PastHighs gold={spot?.gold} silver={spot?.silver} />
            <RatioHistory latest={spot ?? undefined} />
            <SpotPriceHistory />
          </>
        ) : null}

        {tab === "banks" ? (
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
                label="Net official buying, year to date"
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
                kicker="Reserves"
                label="Gold share of reserves"
                unit="%"
                cadence="yearly"
                asOf={String(CB_SHARE_LATEST_YEAR)}
                live={CB_WORLD_SHARE[String(CB_SHARE_LATEST_YEAR)]?.toFixed(1)}
                note="All countries reporting to the IMF: gold's value as a share of total reserves, at that year's average price."
              />
            </section>
            <NetBuyingByYear />
            <CentralBankGold />
            <HoldersTable />
            <ReserveShareChart />
            <UsTreasuryGold gold={spot?.gold} asOf={spotAsOf} />
            <CbTimeline />
            <DeskBoard title="Latest official prints" kicker="country and institution books" cols={3}>
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

        {tab === "supply" ? (
          <>
            <MineSupply />
            <DeskBoard title="Above-ground gold" kicker="World Gold Council, Q2 2026" cols={2}>
              <DeskMetricTile
                kicker="Stock"
                label="All gold ever mined, still above ground"
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
            </DeskBoard>
            <DeskBoard title="Who holds the gold" kicker="World Gold Council, Q2 2026" cols={4}>
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
                note="Private bars and coins plus gold ETFs. ETF tonnes alone are on Vaults & ETFs."
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
              <DeskMetricTile
                kicker="Official"
                label="Central banks and institutions"
                unit="%"
                cadence="yearly"
                asOf={formatAsOf(WGC_STOCK.asOf)}
                live={wgcShare(WGC_STOCK.officialT).toFixed(0)}
                note="WGC's official-sector cell (39,000 t). Wider than the year-end country book on the Central banks tab."
              />
            </DeskBoard>
            <SilverMarket />
            <DeskBoard title="Silver cover" kicker="our calculation" cols={2}>
              <DeskMetricTile
                kicker="Cover"
                label="Months of industrial and jewellery use in identifiable stocks"
                tone="silver"
                unit="mo"
                cadence="yearly"
                asOf={SILVER_2025.asOf}
                live={silverVisibleMonths().toFixed(1)}
                note="GoldSilverHQ calculation, not a survey figure: identifiable bullion (1,394.5 Moz) ÷ 2025 demand excluding coins and bars, × 12."
              />
            </DeskBoard>
            <p className="mt-6 max-w-2xl text-sm text-muted">
              Mine output and the silver balance are published survey figures. The{" "}
              <a href="/markets/gold-silver-ratio" className="text-gold hover:text-gold-soft">
                mining vs market ratio
              </a>{" "}
              and{" "}
              <a href="/markets/physical-silver-demand-by-country" className="text-gold hover:text-gold-soft">
                physical silver demand by country
              </a>{" "}
              date those counts;{" "}
              <a href="/history/silver/monetary-and-industry" className="text-gold hover:text-gold-soft">
                silver’s monetary and industrial roles
              </a>{" "}
              and{" "}
              <a href="/sound-money/hard-money-vs-fiat" className="text-gold hover:text-gold-soft">
                hard money vs fiat
              </a>{" "}
              are the older questions beside them.
            </p>
          </>
        ) : null}

        {tab === "debt" ? (
          <>
            <UsDebtAndGold spot={spot?.gold} spotAsOf={spotAsOf} />
            <WorldDebt spot={spot?.gold} spotAsOf={spotAsOf} officialTonnes={official.world.tonnes} />
            <DeskBoard
              title="Money supply and inflation"
              kicker={printers.source === "live" ? "latest month" : `stored ${usM2AsOf}`}
              cols={3}
            >
              <DeskMetricTile
                kicker="USD"
                label="US M2"
                unit="USD"
                cadence="monthly"
                asOf={formatAsOf(usM2AsOf)}
                live={fmtUsdCompact(usM2Bn * 1e9)}
                note={
                  printers.source === "live"
                    ? "FRED M2SL, latest month. Not a completed calendar year."
                    : (staleNote(DESK_REFRESHED.metrics.usM2) ??
                      `Stored FRED M2SL (${usM2AsOf}; tip ${m2Compiled.asOf}). Live feed missed.`)
                }
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
                    ? "ECB money stock, latest month."
                    : (staleNote(DESK_REFRESHED.metrics.eurM3) ??
                      `Stored ECB print (${printers.eurM3.asOf}). The live feed missed; this is the saved figure.`)
                }
              />
              <DeskMetricTile
                kicker="CPI"
                label="US consumer prices, year on year"
                unit="%"
                cadence="monthly"
                asOf={formatAsOf(DESK_REFRESHED.metrics.cpi.asOf)}
                live={DESK_REFRESHED.metrics.cpi.yoyPct != null ? DESK_REFRESHED.metrics.cpi.yoyPct.toFixed(1) : undefined}
                note={
                  staleNote(DESK_REFRESHED.metrics.cpi) ??
                  "FRED CPIAUCSL (BLS), seasonally adjusted, latest month vs the same month a year earlier."
                }
              />
            </DeskBoard>
            <DollarPower />
            <DeskBoard title="Currencies vs gold" kicker="share of purchasing power lost" cols={3}>
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
                kicker="JPY"
                label="Yen vs gold since 1971"
                unit="% lost"
                cadence="live"
                asOf={spotAsOf}
                live={jpyLoss != null ? pctLostDisplay(jpyLoss) : undefined}
                note="¥360 × $40.62 at the gold window. Bretton Woods closed 15 Aug 1971."
              />
            </DeskBoard>
            <MoneyPath />
          </>
        ) : null}

        {tab === "vaults" ? (
          <>
            <VaultsAndEtfs />
          </>
        ) : null}
      </div>
    </div>
  );
}
