import { Link } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { MinePaceTicker } from "@/components/MinePaceTicker";
import { fmtUsdCompact, officialMtmUsd, TROY_OZ_PER_TONNE } from "@/lib/dashboard/clock-prints";
import { fmtSignedPct, pctToneClass } from "@/lib/dashboard/pct";
import { getSpotLite } from "@/lib/dashboard/spot";
import {
  PERF_PERIODS,
  type MetalPerformance,
  type SpotPerformance,
} from "@/lib/dashboard/spot-performance";
import { SILVER_2025, WGC_STOCK } from "@/lib/dashboard/stocks";

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

function fmtMoney(n: number, d: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });
}

/** Billion ounces once the stock is large enough; otherwise the survey's million-ounce unit. */
function fmtStockOunces(oz: number) {
  const billion = oz / 1e9;
  if (billion >= 2) {
    const digits = billion.toFixed(2).replace(/0$/, "");
    return `${digits} billion ounces`;
  }
  const million = oz / 1e6;
  const whole = Number.isInteger(million);
  return `${million.toLocaleString("en-US", {
    maximumFractionDigits: whole ? 0 : 1,
    minimumFractionDigits: whole ? 0 : 1,
  })} million ounces`;
}

const EVER_MINED_OZ = WGC_STOCK.aboveGroundT * TROY_OZ_PER_TONNE;
const VISIBLE_SILVER_OZ = SILVER_2025.identifiableMoz * 1e6;

/** World Silver Survey 2026 identifiable bullion: London, CME, SGE, SHFE, other exchanges. */
const VISIBLE_SILVER_PARTS =
  "London vaults, CME (COMEX), Shanghai Gold Exchange, Shanghai Futures Exchange, other exchanges";

function PerfRow({ perf, label }: { perf: MetalPerformance | null | undefined; label: string }) {
  return (
    <dl aria-label={`${label} price change`} className="mt-2 grid grid-cols-5 gap-x-0.5">
      {PERF_PERIODS.map((p) => {
        const v = perf?.changes[p];
        return (
          <div key={p} className="min-w-0 text-center">
            <dt className="text-[8px] font-medium leading-none tracking-tight text-faint @[14rem]:text-[10px] @[14rem]:tracking-[0.06em]">
              {p}
            </dt>
            <dd
              className={`mt-0.5 text-[8px] leading-none whitespace-nowrap tabular-nums @[14rem]:text-[10px] @[18rem]:text-[11px] ${v == null ? "text-faint" : pctToneClass(v, 1)}`}
            >
              {v == null ? "—" : fmtSignedPct(v, 1)}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

function PriceCard({
  label,
  tone,
  unit,
  value,
  children,
}: {
  label: string;
  tone: "gold" | "silver";
  unit: string;
  value?: string;
  children?: ReactNode;
}) {
  const color = tone === "gold" ? "text-gold" : "text-silver";
  return (
    <article className="@container rounded-lg bg-surface px-2 py-3 text-center shadow-[var(--shadow-border)]">
      <h3 className="text-xs font-medium tracking-wide text-muted">{label}</h3>
      <p
        className={`mt-1.5 font-sans text-[1.7rem] leading-none tabular-nums tracking-tight sm:text-[1.95rem] ${color}`}
      >
        {value ?? "—"}
        <span className="ml-1.5 align-middle font-sans text-[11px] font-medium tracking-[0.12em] text-muted">
          {unit}
        </span>
      </p>
      {children}
    </article>
  );
}

function StockCard({
  tone,
  value,
  ounces,
  detail,
}: {
  tone: "gold" | "silver";
  value?: string;
  ounces: string;
  detail?: string;
}) {
  const color = tone === "gold" ? "text-gold" : "text-silver";
  return (
    <article className="rounded-lg bg-surface px-3.5 py-3 text-center shadow-[var(--shadow-border)]">
      <p
        className={`font-sans text-[1.7rem] font-bold leading-none tabular-nums tracking-tight sm:text-[1.95rem] ${color}`}
      >
        {value ?? "—"}
      </p>
      <p className="mt-2 text-xs text-muted">{ounces}</p>
      {detail ? <p className="mt-1 text-xs leading-snug text-faint">{detail}</p> : null}
    </article>
  );
}

export function HomeDashboard({
  sidebar,
  performance,
}: {
  sidebar?: ReactNode;
  performance?: SpotPerformance | null;
}) {
  const [spot, setSpot] = useState<Spot | null>(null);

  useEffect(() => {
    let on = true;
    getSpotLite()
      .then((s) => {
        if (on) setSpot(s);
      })
      .catch(() => undefined);
    return () => {
      on = false;
    };
  }, []);

  return (
    <div className="data-ui mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:py-10 xl:grid-cols-[minmax(0,1fr)_17rem]">
      <h1 className="sr-only">GoldSilverHQ</h1>
      <div className="min-w-0">
        <section className="grid gap-3 sm:grid-cols-3">
          <PriceCard
            label="Gold spot"
            tone="gold"
            unit="USD / oz"
            value={spot ? `$${fmtMoney(spot.gold, 0)}` : undefined}
          >
            <PerfRow perf={performance?.gold} label="Gold" />
          </PriceCard>
          <PriceCard
            label="Silver spot"
            tone="silver"
            unit="USD / oz"
            value={spot ? `$${fmtMoney(spot.silver, 2)}` : undefined}
          >
            <PerfRow perf={performance?.silver} label="Silver" />
          </PriceCard>
          <PriceCard
            label="Gold–silver ratio"
            tone="gold"
            unit="oz Ag / oz Au"
            value={spot ? spot.ratio.toFixed(1) : undefined}
          />
        </section>

        <div className="mt-3">
          <MinePaceTicker />
        </div>

        <section className="mt-3 grid gap-3 sm:grid-cols-2">
          <StockCard
            tone="gold"
            value={
              spot ? fmtUsdCompact(officialMtmUsd(WGC_STOCK.aboveGroundT, spot.gold)) : undefined
            }
            ounces={`${fmtStockOunces(EVER_MINED_OZ)} ever mined`}
          />
          <StockCard
            tone="silver"
            value={spot ? fmtUsdCompact(spot.silver * VISIBLE_SILVER_OZ) : undefined}
            ounces={fmtStockOunces(VISIBLE_SILVER_OZ)}
            detail={VISIBLE_SILVER_PARTS}
          />
        </section>

        <p className="mt-6 text-center text-sm">
          <Link
            to="/desk"
            className="btn-gold inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium"
          >
            More Golden Numbers →
          </Link>
        </p>
      </div>
      {sidebar}
    </div>
  );
}
