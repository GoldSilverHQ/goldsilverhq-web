import { useEffect, useState } from "react";
import { getSpotDesk, type PricePoint, type SpotDesk } from "@/lib/dashboard/spot";

function Spark({
  points,
  color,
  label,
}: {
  points: PricePoint[];
  color: string;
  label: string;
}) {
  if (points.length < 2) {
    return <div className="h-24 rounded-md bg-raised" aria-hidden />;
  }
  const w = 320;
  const h = 96;
  const pad = { l: 4, r: 4, t: 8, b: 8 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const ys = points.map((p) => p.v);
  const min = Math.min(...ys);
  const max = Math.max(...ys);
  const span = max - min || 1;
  const x = (i: number) => pad.l + (i / (points.length - 1)) * innerW;
  const y = (v: number) => pad.t + (1 - (v - min) / span) * innerH;
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(p.v).toFixed(1)}`).join(" ");
  const last = points[points.length - 1].v;
  const first = points[0].v;
  const up = last >= first;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" role="img" aria-label={label}>
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" />
      <circle cx={x(points.length - 1)} cy={y(last)} r="2.4" fill={color} />
      <text x={w - pad.r} y={12} textAnchor="end" fill={up ? "#c9a227" : "#c5cdd4"} fontSize="10">
        {up ? "▲" : "▼"} 5y
      </text>
    </svg>
  );
}

function fmt(n: number, d: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });
}

export function SpotTape({ compact = false }: { compact?: boolean }) {
  const [desk, setDesk] = useState<SpotDesk | null>(null);

  useEffect(() => {
    let on = true;
    getSpotDesk()
      .then((d) => {
        if (on) setDesk(d);
      })
      .catch(() => undefined);
    return () => {
      on = false;
    };
  }, []);

  const gold = desk?.gold;
  const silver = desk?.silver;
  const ratio = desk?.ratio;

  return (
    <section className="mt-8">
      {compact ? null : (
        <>
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Tape</p>
          <h2 className="mt-2 font-display text-3xl">Five years of the screen</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            COMEX closes, not a tick tape. Spot in the bar is the same metals feed as the clock.
          </p>
        </>
      )}
      <div className={`grid gap-4 md:grid-cols-3 ${compact ? "" : "mt-6"}`}>
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Gold</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-gold">
            {gold ? `$${fmt(gold, 0)}` : "—"}
          </p>
          <Spark points={desk?.goldSeries ?? []} color="#c9a227" label="Gold, five years" />
        </article>
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-silver uppercase">Silver</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-silver">
            {silver ? `$${fmt(silver, 2)}` : "—"}
          </p>
          <Spark points={desk?.silverSeries ?? []} color="#c5cdd4" label="Silver, five years" />
        </article>
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold-soft uppercase">Ratio</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-gold-soft">
            {ratio ? `${ratio.toFixed(1)}×` : "—"}
          </p>
          <Spark points={desk?.ratioSeries ?? []} color="#e8d48b" label="Gold–silver ratio, five years" />
        </article>
      </div>
      <p className="mt-3 text-xs text-faint">{desk?.source ?? "Charts load from COMEX when the feed answers."}</p>
    </section>
  );
}
