import { DOLLAR_LOSS, DOLLAR_MULTIPLE, DOLLAR_NOW, DOLLAR_POWER } from "@/lib/dashboard/dollar-power";

function cents(pp: number) {
  if (pp >= 1) return "$1.00";
  return `${(pp * 100).toFixed(1)}¢`;
}

function DollarChart() {
  const w = 640;
  const h = 260;
  const pad = { l: 44, r: 12, t: 12, b: 28 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const n = DOLLAR_POWER.length;
  const x = (i: number) => pad.l + (i / (n - 1)) * innerW;
  const y = (pp: number) => pad.t + (1 - pp) * innerH;
  const line = DOLLAR_POWER.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(p.pp).toFixed(1)}`).join(" ");
  const area = `${line} L${x(n - 1).toFixed(1)} ${y(0).toFixed(1)} L${x(0).toFixed(1)} ${y(0).toFixed(1)} Z`;
  const yTicks = [1, 0.75, 0.5, 0.25, 0];
  const yearMarks = [1913, 1933, 1971, 1980, 2008, 2026];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-64 w-full" role="img" aria-label="US dollar purchasing power since 1913">
      <defs>
        <linearGradient id="pp-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {yTicks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={w - pad.r} y1={y(t)} y2={y(t)} stroke="#f2ede4" strokeOpacity="0.1" />
          <text x={pad.l - 6} y={y(t) + 3} textAnchor="end" fill="#6e6860" fontSize="10">
            {t === 0 ? "$0" : t === 1 ? "$1.00" : `${Math.round(t * 100)}¢`}
          </text>
        </g>
      ))}
      <path d={area} fill="url(#pp-fill)" />
      <path d={line} fill="none" stroke="#c9a227" strokeWidth="2.2" />
      {yearMarks.map((year) => {
        const i = DOLLAR_POWER.findIndex((p) => p.year === year);
        if (i < 0) return null;
        return (
          <text key={year} x={x(i)} y={h - 8} textAnchor="middle" fill="#6e6860" fontSize="10">
            {year}
          </text>
        );
      })}
    </svg>
  );
}

export function DollarPower() {
  const lost = Math.round(DOLLAR_LOSS * 1000) / 10;
  const left = DOLLAR_NOW.pp;

  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Since the Fed</p>
      <h2 className="mt-2 font-display text-3xl">The dollar since 1913</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Purchasing power of $1 at the founding of the Federal Reserve. Official CPI.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Lost</p>
          <p className="mt-2 font-display text-3xl tabular-nums">{lost.toFixed(1)}%</p>
          <p className="mt-1 text-sm text-muted">of 1913 purchasing power</p>
        </article>
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Left</p>
          <p className="mt-2 font-display text-3xl tabular-nums text-gold">{cents(left)}</p>
          <p className="mt-1 text-sm text-muted">what $1 from 1913 buys now</p>
        </article>
        <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">To match $1 then</p>
          <p className="mt-2 font-display text-3xl tabular-nums">${DOLLAR_MULTIPLE.toFixed(0)}</p>
          <p className="mt-1 text-sm text-muted">today’s dollars</p>
        </article>
      </div>

      <div className="mt-6 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
        <p className="mb-3 text-xs text-faint">Purchasing power of $1 (1913 = $1.00)</p>
        <DollarChart />
      </div>
      <p className="mt-3 text-xs text-faint">
        Source: FRED CPIAUCNS, last observation of each year. 1913 CPI = 10.0; {DOLLAR_NOW.year} = {DOLLAR_NOW.cpi}.
        2026 is year-to-date.
      </p>
    </section>
  );
}
