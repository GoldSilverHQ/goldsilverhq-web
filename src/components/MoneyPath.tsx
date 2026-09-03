import { useMemo, useState } from "react";
import {
  PATH_MODES,
  PATH_WINDOWS,
  slicePath,
  pathSeries,
  pathStats,
  type PathMode,
  type PathWindow,
} from "@/lib/dashboard/money-path";
import { Segmented } from "@/components/Segmented";

function fmtX(n: number) {
  return `${n.toFixed(n >= 10 ? 0 : 1)}×`;
}

function fmtMoney(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: n >= 100 ? 0 : 2 });
}

function PathChart({
  points,
  showM2,
}: {
  points: { year: number; gold: number; silver: number; m2?: number }[];
  showM2: boolean;
}) {
  const w = 640;
  const h = 260;
  const pad = { l: 36, r: 12, t: 12, b: 28 };
  const ys = points.flatMap((p) => [p.gold, p.silver, showM2 ? p.m2 ?? 0 : 0]);
  const max = Math.max(...ys, 100);
  const min = 0;
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const x = (i: number) => pad.l + (points.length < 2 ? 0 : (i / (points.length - 1)) * innerW);
  const y = (v: number) => pad.t + (1 - (v - min) / (max - min)) * innerH;
  const line = (key: "gold" | "silver" | "m2") =>
    points
      .map((p, i) => {
        const v = p[key];
        if (v == null) return "";
        return `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`;
      })
      .join(" ");
  const ticks: number[] = [];
  const step = max > 8000 ? 2000 : max > 2000 ? 500 : max > 400 ? 100 : 50;
  for (let t = 0; t <= max; t += step) ticks.push(t);
  const yearTicks = points.filter((_, i) => i === 0 || i === points.length - 1 || points[i].year % 10 === 0);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-64 w-full" role="img" aria-label="Gold, silver, and US M2 indexed">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={w - pad.r} y1={y(t)} y2={y(t)} stroke="#f2ede4" strokeOpacity="0.1" />
          <text x={pad.l - 6} y={y(t) + 3} textAnchor="end" fill="#6e6860" fontSize="10">
            {t}
          </text>
        </g>
      ))}
      <line x1={pad.l} x2={w - pad.r} y1={y(100)} y2={y(100)} stroke="#e8d48b" strokeOpacity="0.35" strokeDasharray="4 4" />
      {showM2 ? (
        <path d={line("m2")} fill="none" stroke="#6e6860" strokeWidth="1.6" strokeDasharray="5 4" />
      ) : null}
      <path d={line("silver")} fill="none" stroke="#c5cdd4" strokeWidth="2" />
      <path d={line("gold")} fill="none" stroke="#c9a227" strokeWidth="2.2" />
      {yearTicks.map((p) => {
        const i = points.indexOf(p);
        return (
          <text key={p.year} x={x(i)} y={h - 8} textAnchor="middle" fill="#6e6860" fontSize="10">
            {p.year}
          </text>
        );
      })}
    </svg>
  );
}

export function MoneyPath() {
  const [win, setWin] = useState<PathWindow>("1971");
  const [mode, setMode] = useState<PathMode>("indexed");
  const start = PATH_WINDOWS.find((w) => w.id === win)!.start;
  const points = useMemo(() => pathSeries(start, mode), [start, mode]);
  const stats = useMemo(() => pathStats(start), [start]);

  const copy =
    mode === "indexed"
      ? "All three start at 100. If gold tracks the printing press, it rides with M2."
      : mode === "m2"
        ? "Gold and silver divided by US M2, then rebased to 100. Flat means the metal only kept up with money."
        : "Gold and silver divided by CPI, then rebased to 100. Official inflation, not the money stock.";

  return (
    <section className="mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Money stock</p>
          <h2 className="mt-2 font-display text-3xl">Gold & silver vs US M2</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">{copy}</p>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <Segmented label="Path view" value={mode} onChange={setMode} options={PATH_MODES} />
          <Segmented label="From year" value={win} onChange={setWin} options={PATH_WINDOWS} />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">US M2</p>
          <p className="mt-2 font-display text-3xl tabular-nums">{fmtX(stats.m2x)}</p>
          <p className="mt-1 text-sm text-muted">since {stats.from.year}</p>
        </article>
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Gold</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-gold">{fmtX(stats.goldx)}</p>
          <p className="mt-1 text-sm text-muted">
            M2-implied ${fmtMoney(stats.impliedGold)} · actual ${fmtMoney(stats.to.gold)}
          </p>
        </article>
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-silver uppercase">Silver</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-silver">{fmtX(stats.silverx)}</p>
          <p className="mt-1 text-sm text-muted">
            M2-implied ${fmtMoney(stats.impliedSilver)} · actual ${fmtMoney(stats.to.silver)}
          </p>
        </article>
      </div>

      <div className="mt-6 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
        <div className="mb-3 flex flex-wrap gap-4 text-xs">
          <span className="text-gold">— Gold</span>
          <span className="text-silver">— Silver</span>
          {mode === "indexed" ? <span className="text-faint">– – M2</span> : null}
          <span className="text-faint">100 = {stats.from.year}</span>
        </div>
        <PathChart points={points} showM2={mode === "indexed"} />
      </div>

      <div className="mt-6 w-full overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)] sm:w-1/2">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs tracking-[0.12em] text-faint uppercase">
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Gold</th>
              <th className="px-4 py-3 font-medium">Silver</th>
              <th className="px-4 py-3 font-medium">M2 $bn</th>
            </tr>
          </thead>
          <tbody>
            {sliceKeyYears(start).map((r) => (
              <tr key={r.year} className="border-b border-line last:border-0">
                <td className="px-4 py-3 tabular-nums text-muted">{r.year}</td>
                <td className="px-4 py-3 tabular-nums text-gold-soft">${fmtMoney(r.gold)}</td>
                <td className="px-4 py-3 tabular-nums text-silver">${fmtMoney(r.silver)}</td>
                <td className="px-4 py-3 tabular-nums text-muted">{r.m2.toLocaleString("en-US", { maximumFractionDigits: 0 })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-faint">
        M2: FRED M2SL. CPI: FRED CPIAUCSL. Metals: annual averages (LBMA / COMEX); 2026 is latest, not a completed year.
        M2-implied price = start price × (M2 now ÷ M2 then). Compiled desk — not a live feed.
      </p>
    </section>
  );
}

function sliceKeyYears(start: number) {
  const keep = new Set([start, 1980, 2000, 2008, 2011, 2020, 2024, 2026]);
  return slicePath(start).filter((r) => keep.has(r.year));
}
