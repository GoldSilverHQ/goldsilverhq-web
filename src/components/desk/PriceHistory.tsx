import { useMemo, useState } from "react";
import { ChartLegend, LineChart, type LineSeries } from "@/components/desk/charts";
import { MetricDownloadButton } from "@/components/desk/MetricDownloadButton";
import { Segmented } from "@/components/Segmented";
import { formatAsOf } from "@/lib/dashboard/central-banks";
import { DESK_REFRESHED } from "@/lib/dashboard/desk-refreshed";
import {
  CPI_NOW,
  MINT_RATIOS,
  PAST_HIGHS,
  nominalSeries,
  ratioRange,
  ratioSeries,
  realSeries,
  toTodaysDollars,
  type Latest,
  type Metal,
} from "@/lib/dashboard/real-prices";

const GOLD = "#c9a227";
const SILVER = "#c5cdd4";
const MUTED = "#6e6860";

function usd(n: number) {
  return `$${n.toLocaleString("en-US", { maximumFractionDigits: n >= 100 ? 0 : 2, minimumFractionDigits: n >= 100 ? 0 : 2 })}`;
}

type View = "real" | "nominal";
const VIEWS: { id: View; label: string }[] = [
  { id: "real", label: "Today's dollars" },
  { id: "nominal", label: "Nominal" },
];
type Range = "1971" | "2000" | "2015";
const RANGES: { id: Range; label: string }[] = [
  { id: "1971", label: "Since 1971" },
  { id: "2000", label: "Since 2000" },
  { id: "2015", label: "Since 2015" },
];

function MetalHistory({ metal, view, from, latest }: { metal: Metal; view: View; from: number; latest?: Latest }) {
  const color = metal === "gold" ? GOLD : SILVER;
  const name = metal === "gold" ? "Gold" : "Silver";
  const series: LineSeries[] = useMemo(() => {
    const keep = (p: { x: number }) => p.x >= from;
    const real = realSeries(metal, latest).filter(keep);
    const nominal = nominalSeries(metal, latest).filter(keep);
    return view === "real"
      ? [
          { id: "real", label: "In today's dollars", points: real, color },
          { id: "nominal", label: "Nominal", points: nominal, color: MUTED, dashed: true },
        ]
      : [{ id: "nominal", label: "Nominal", points: nominal, color }];
  }, [metal, view, from, color, latest]);
  return (
    <article className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <p className={`text-xs font-semibold tracking-[0.14em] uppercase ${metal === "gold" ? "text-gold" : "text-silver"}`}>
        {name}, USD / oz
      </p>
      <div className="mt-3">
        <ChartLegend series={series} />
        <LineChart series={series} label={`${name} price per year since ${from}`} yPrefix="$" />
      </div>
    </article>
  );
}

/** Gold and silver per year since 1971, nominal or restated in today's dollars by US CPI. */
export function RealPriceHistory({ latest }: { latest?: Latest }) {
  const [view, setView] = useState<View>("real");
  const [range, setRange] = useState<Range>("1971");
  const from = Number(range);
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">History</p>
          <h2 className="mt-2 font-sans text-3xl">Prices since 1971, in today's dollars</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Yearly average price. "Today's dollars" restates each year by US consumer prices (CPI), so a 1980 dollar and
            a {CPI_NOW.asOf.slice(0, 4)} dollar buy the same basket.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <Segmented label="Price view" value={view} onChange={setView} options={VIEWS} />
          <Segmented label="From year" value={range} onChange={setRange} options={RANGES} />
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <MetalHistory metal="gold" view={view} from={from} latest={latest} />
        <MetalHistory metal="silver" view={view} from={from} latest={latest} />
      </div>
      <p className="mt-3 text-xs text-faint">
        Yearly averages (LBMA / COMEX; 2025 silver from the World Silver Survey 2026); the current year is today's spot,
        not a full-year average. CPI: FRED
        CPIAUCSL, {formatAsOf(CPI_NOW.asOf)}.
      </p>
    </section>
  );
}

/** Gold–silver ratio per year since 1971 with the old US mint ratios as history lines. */
export function RatioHistory({ latest }: { latest?: Latest }) {
  const live = latest && latest.silver > 0 ? latest.gold / latest.silver : undefined;
  const series: LineSeries[] = useMemo(
    () => [{ id: "ratio", label: "Gold–silver ratio (yearly average)", points: ratioSeries(latest), color: GOLD }],
    [latest],
  );
  const r = ratioRange(latest);
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Ratio</p>
      <h2 className="mt-2 font-sans text-3xl">Gold–silver ratio since 1971</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Ounces of silver one ounce of gold buys. The dotted lines are the ratios the US Mint once fixed by law; the
        market has not been tied to them since silver was demonetised.
      </p>
      <div className="relative mt-6 rounded-xl bg-surface p-4 pr-12 shadow-[var(--shadow-border)] sm:p-6 sm:pr-14">
        <MetricDownloadButton
          className="absolute top-3 right-3"
          payload={
            live
              ? {
                  kicker: "Ratio",
                  label: "Gold–silver ratio",
                  value: live.toFixed(1),
                  unit: "oz Ag / oz Au",
                  note: `${r.from}–${r.to} yearly range ${r.lo.y.toFixed(0)} (${r.lo.x}) to ${r.hi.y.toFixed(0)} (${r.hi.x}). History, not a target.`,
                  tone: "gold",
                }
              : null
          }
        />
        <ChartLegend series={series} extra="– – US mint ratios, history only" />
        <LineChart series={series} refLines={[...MINT_RATIOS]} label="Gold–silver ratio per year since 1971" height={190} />
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs text-faint">Now</dt>
            <dd className="tabular-nums text-gold">{live ? live.toFixed(1) : "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-faint">
              Average {r.from}–{r.to}
            </dt>
            <dd className="tabular-nums">{r.avg.toFixed(1)}</dd>
          </div>
          <div>
            <dt className="text-xs text-faint">Lowest year</dt>
            <dd className="tabular-nums">
              {r.lo.y.toFixed(1)} · {r.lo.x}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-faint">Highest year</dt>
            <dd className="tabular-nums">
              {r.hi.y.toFixed(1)} · {r.hi.x}
            </dd>
          </div>
        </dl>
      </div>
      <p className="mt-3 text-xs text-faint">
        Yearly averages from the same series as the price chart. 15 : 1 (Coinage Act 1792) and 16 : 1 (1834) are
        history, not a target.
      </p>
    </section>
  );
}

function HighCard({ high, spot }: { high: (typeof PAST_HIGHS)[number]; spot?: number }) {
  const cpiAdj = toTodaysDollars(high.usd, high.cpiThen);
  const m2Adj = high.usd * (m2Now() / high.m2Then);
  const pct = spot ? spot / cpiAdj : 0;
  const tone = high.metal === "gold" ? "gold" : "silver";
  const name = high.metal === "gold" ? "Gold" : "Silver";
  return (
    <article className="relative rounded-xl bg-surface p-5 pr-12 shadow-[var(--shadow-border)]">
      <MetricDownloadButton
        className="absolute top-3 right-3"
        payload={{
          kicker: high.when.slice(-4),
          label: `${name} ${high.when.slice(-4)} high in today's dollars`,
          value: usd(cpiAdj),
          unit: "USD / oz",
          note: `Printed ${usd(high.usd)} · ${high.where}, ${high.when}. Restated by US CPI. M2-adjusted ${usd(m2Adj)}.`,
          tone,
          secondary: spot ? `Spot ${usd(spot)}` : undefined,
        }}
      />
      <p className={`text-xs font-semibold tracking-[0.14em] uppercase ${tone === "gold" ? "text-gold" : "text-silver"}`}>
        {name} · {high.when}
      </p>
      <p className="mt-1 text-sm text-muted">
        Printed {usd(high.usd)} ({high.where})
      </p>
      <p className="mt-3 font-sans text-3xl tabular-nums">{usd(cpiAdj)}</p>
      <p className="text-xs text-faint">in today's dollars (CPI)</p>
      <p className={`mt-2 text-xs tabular-nums ${pct >= 1 ? "text-gold" : "text-muted"}`}>
        {spot ? (pct >= 1 ? "Spot is above this level" : `Spot is ${(pct * 100).toFixed(0)}% of this level`) : "—"}
      </p>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-raised">
        <div
          className={`h-full ${tone === "gold" ? "bg-gold" : "bg-silver"}`}
          style={{ width: `${Math.min(100, Math.max(0, pct * 100))}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-faint">Restated by US M2 instead: {usd(m2Adj)}</p>
    </article>
  );
}

function m2Now() {
  return DESK_REFRESHED.metrics.usM2.bn;
}

/** Earlier record prints (1980, 2011) restated in today's dollars against the page spot. */
export function PastHighs({ gold, silver }: { gold?: number; silver?: number }) {
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Old records</p>
      <h2 className="mt-2 font-sans text-3xl">1980 and 2011 highs in today's dollars</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Both metals have since printed higher nominal prices. Restated for inflation, the old peaks look different.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PAST_HIGHS.map((h) => (
          <HighCard key={`${h.metal}-${h.when}`} high={h} spot={h.metal === "gold" ? gold : silver} />
        ))}
      </div>
      <p className="mt-3 text-xs text-faint">
        CPI: FRED CPIAUCSL ({formatAsOf(CPI_NOW.asOf)}) vs the month of each print. M2: FRED M2SL (
        {formatAsOf(DESK_REFRESHED.metrics.usM2.asOf)}). M2 measures the money stock, not prices. Spot: the live feed at
        the top of this tab.
      </p>
    </section>
  );
}
