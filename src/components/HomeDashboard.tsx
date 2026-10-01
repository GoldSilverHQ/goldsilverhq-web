import { Link } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { MinePaceTicker } from "@/components/MinePaceTicker";
import { COMPILED_OFFICIAL } from "@/lib/dashboard/clock-prints";
import { fmtDayMonYear } from "@/lib/dashboard/dates";
import { fmtSignedPct, pctToneClass } from "@/lib/dashboard/pct";
import { getSpotLite } from "@/lib/dashboard/spot";
import {
  PERF_PERIODS,
  type MetalPerformance,
  type SpotPerformance,
} from "@/lib/dashboard/spot-performance";
import { SILVER_2025, silverVisibleMonths } from "@/lib/dashboard/stocks";

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

function fmtMoney(n: number, d: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });
}

function FaceTile({
  kicker,
  label,
  tone,
  unit,
  value,
  note,
}: {
  kicker: string;
  label: string;
  tone: "gold" | "silver" | "fg";
  unit: string;
  value?: string;
  note: ReactNode;
}) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  return (
    <article className="@container rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
      <p className="text-xs font-semibold tracking-[0.16em] text-faint">{kicker}</p>
      <h3 className="mt-1 text-sm text-muted">{label}</h3>
      <p className={`clock-value mt-3 font-sans tabular-nums tracking-tight ${color}`}>
        {value ?? "—"}
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">
          {unit}
        </span>
      </p>
      {typeof note === "string" ? <p className="mt-2 text-xs text-faint">{note}</p> : note}
    </article>
  );
}

function PerfRow({ perf, label }: { perf: MetalPerformance | null | undefined; label: string }) {
  return (
    <div className="mt-3">
      <dl
        aria-label={`${label} price change`}
        className="grid grid-cols-3 gap-x-1 gap-y-1.5 @[15rem]:grid-cols-5"
      >
        {PERF_PERIODS.map((p) => {
          const v = perf?.changes[p];
          return (
            <div key={p} className="min-w-0">
              <dt className="text-[10px] font-semibold tracking-[0.12em] text-faint">{p}</dt>
              <dd
                className={`text-[11px] whitespace-nowrap tabular-nums ${v == null ? "text-faint" : pctToneClass(v, 1)}`}
              >
                {v == null ? "—" : fmtSignedPct(v, 1)}
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-1.5 text-[10px] text-faint">
        {perf ? `COMEX closes · as of ${fmtDayMonYear(perf.asOf)}` : "COMEX closes"}
      </p>
    </div>
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
          <FaceTile
            kicker="gold"
            label="Gold spot"
            tone="gold"
            unit="USD / oz"
            value={spot ? `$${fmtMoney(spot.gold, 0)}` : undefined}
            note={<PerfRow perf={performance?.gold} label="Gold" />}
          />
          <FaceTile
            kicker="silver"
            label="Silver spot"
            tone="silver"
            unit="USD / oz"
            value={spot ? `$${fmtMoney(spot.silver, 2)}` : undefined}
            note={<PerfRow perf={performance?.silver} label="Silver" />}
          />
          <FaceTile
            kicker="GSR"
            label="Gold–silver ratio"
            tone="gold"
            unit="oz Ag / oz Au"
            value={spot ? spot.ratio.toFixed(1) : undefined}
            note="How many ounces of silver equal one of gold at this print."
          />
        </section>

        <div className="mt-3">
          <MinePaceTicker />
        </div>

        <section className="mt-3 grid gap-3 sm:grid-cols-2">
          <FaceTile
            kicker="Official"
            label="World official gold"
            tone="gold"
            unit="t"
            value={Math.round(COMPILED_OFFICIAL.world.tonnes).toLocaleString("en-US")}
            note="Country books + IMF + ECB, one year-end vintage."
          />
          <FaceTile
            kicker="Silver"
            label="Visible silver / a year of industry"
            tone="silver"
            unit="months"
            value={silverVisibleMonths().toFixed(1)}
            note={`Identifiable bullion ÷ ${SILVER_2025.asOf} fabrication.`}
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
