export type XY = { x: number; y: number };

export type LineSeries = {
  id: string;
  label: string;
  points: XY[];
  color: string;
  dashed?: boolean;
};

export type RefLine = { y: number; label: string; below?: boolean };

const AXIS = "#6e6860";
const GRID = "#f2ede4";

function niceStep(span: number, target = 5) {
  const raw = span / target;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  const step = norm >= 5 ? 10 : norm >= 2 ? 5 : norm >= 1 ? 2 : 1;
  return step * mag;
}

function fmtTick(v: number) {
  const a = Math.abs(v);
  if (a >= 1e12) return `${+(v / 1e12).toFixed(1)}T`;
  if (a >= 1e9) return `${+(v / 1e9).toFixed(1)}B`;
  if (a >= 1e6) return `${+(v / 1e6).toFixed(1)}M`;
  if (a >= 10_000) return `${+(v / 1e3).toFixed(0)}k`;
  return v.toLocaleString("en-US", { maximumFractionDigits: a < 10 ? 1 : 0 });
}

/** Simple responsive SVG line chart. x is a year (or fractional year). */
export function LineChart({
  series,
  refLines = [],
  label,
  yPrefix = "",
  ySuffix = "",
  log = false,
  height = 260,
  yMin,
}: {
  series: LineSeries[];
  refLines?: RefLine[];
  label: string;
  yPrefix?: string;
  ySuffix?: string;
  log?: boolean;
  height?: number;
  yMin?: number;
}) {
  const w = 640;
  const h = height;
  const pad = { l: 46, r: 12, t: 14, b: 26 };
  const all = series.flatMap((s) => s.points);
  if (all.length < 2) return <div className="rounded-md bg-raised" style={{ height: h / 2 }} aria-hidden />;
  const xs = all.map((p) => p.x);
  const ys = [...all.map((p) => p.y), ...refLines.map((r) => r.y)].filter((v) => !log || v > 0);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  let lo = yMin ?? Math.min(0, ...ys);
  let hi = Math.max(...ys);
  if (log) {
    lo = Math.max(Math.min(...ys), 1e-9);
  }
  if (hi === lo) hi = lo + 1;
  const tf = (v: number) => (log ? Math.log10(v) : v);
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const X = (v: number) => pad.l + ((v - x0) / (x1 - x0 || 1)) * innerW;
  const Y = (v: number) => pad.t + (1 - (tf(Math.max(v, log ? lo : -Infinity)) - tf(lo)) / (tf(hi) - tf(lo))) * innerH;

  const ticks: number[] = [];
  if (log) {
    for (let e = Math.floor(Math.log10(lo)); e <= Math.ceil(Math.log10(hi)); e++) {
      const t = 10 ** e;
      if (t >= lo && t <= hi) ticks.push(t);
    }
  } else {
    const step = niceStep(hi - lo);
    for (let t = Math.ceil(lo / step) * step; t <= hi; t += step) ticks.push(t);
  }
  const span = x1 - x0;
  const xStep = span > 150 ? 50 : span > 60 ? 20 : span > 25 ? 10 : span > 8 ? 2 : 1;
  const xTicks: number[] = [];
  for (let t = Math.ceil(x0 / xStep) * xStep; t <= x1; t += xStep) xTicks.push(t);

  const path = (pts: XY[]) =>
    pts
      .filter((p) => !log || p.y > 0)
      .map((p, i) => `${i === 0 ? "M" : "L"}${X(p.x).toFixed(1)} ${Y(p.y).toFixed(1)}`)
      .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: "auto" }} role="img" aria-label={label}>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={w - pad.r} y1={Y(t)} y2={Y(t)} stroke={GRID} strokeOpacity="0.08" />
          <text x={pad.l - 6} y={Y(t) + 3} textAnchor="end" fill={AXIS} fontSize="10" fontFamily="var(--font-sans)">
            {yPrefix}
            {fmtTick(t)}
            {ySuffix}
          </text>
        </g>
      ))}
      {refLines.map((r) => (
        <g key={r.label}>
          <line
            x1={pad.l}
            x2={w - pad.r}
            y1={Y(r.y)}
            y2={Y(r.y)}
            stroke="#e8d48b"
            strokeOpacity="0.5"
            strokeDasharray="4 4"
          />
          <text x={w - pad.r} y={r.below ? Y(r.y) + 12 : Y(r.y) - 4} textAnchor="end" fill={AXIS} fontSize="10" fontFamily="var(--font-sans)">
            {r.label}
          </text>
        </g>
      ))}
      {series.map((s) => (
        <path
          key={s.id}
          d={path(s.points)}
          fill="none"
          stroke={s.color}
          strokeWidth="2"
          strokeDasharray={s.dashed ? "5 4" : undefined}
        />
      ))}
      {xTicks.map((t) => (
        <text key={t} x={X(t)} y={h - 8} textAnchor="middle" fill={AXIS} fontSize="10" fontFamily="var(--font-sans)">
          {t}
        </text>
      ))}
    </svg>
  );
}

export function ChartLegend({ series, extra }: { series: Pick<LineSeries, "id" | "label" | "color" | "dashed">[]; extra?: string }) {
  return (
    <div className="mb-3 flex flex-wrap gap-4 text-xs">
      {series.map((s) => (
        <span key={s.id} style={{ color: s.color }}>
          {s.dashed ? "– –" : "—"} {s.label}
        </span>
      ))}
      {extra ? <span className="text-faint">{extra}</span> : null}
    </div>
  );
}

/** Signed vertical bars per year (positive gold, negative muted). */
export function BarChart({
  bars,
  label,
  ySuffix = "",
  height = 220,
}: {
  bars: { x: string; y: number; note?: string }[];
  label: string;
  ySuffix?: string;
  height?: number;
}) {
  const w = 640;
  const h = height;
  const pad = { l: 46, r: 8, t: 18, b: 26 };
  if (!bars.length) return null;
  const hi = Math.max(0, ...bars.map((b) => b.y));
  const lo = Math.min(0, ...bars.map((b) => b.y));
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const Y = (v: number) => pad.t + (1 - (v - lo) / (hi - lo || 1)) * innerH;
  const slot = innerW / bars.length;
  const bw = Math.max(4, slot * 0.64);
  const step = niceStep(hi - lo, 4);
  const ticks: number[] = [];
  for (let t = Math.ceil(lo / step) * step; t <= hi; t += step) ticks.push(t);
  const every = bars.length > 24 ? 5 : bars.length > 12 ? 2 : 1;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: "auto" }} role="img" aria-label={label}>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={w - pad.r} y1={Y(t)} y2={Y(t)} stroke={GRID} strokeOpacity={t === 0 ? 0.3 : 0.08} />
          <text x={pad.l - 6} y={Y(t) + 3} textAnchor="end" fill={AXIS} fontSize="10" fontFamily="var(--font-sans)">
            {fmtTick(t)}
            {ySuffix}
          </text>
        </g>
      ))}
      {bars.map((b, i) => {
        const x = pad.l + i * slot + (slot - bw) / 2;
        const top = Y(Math.max(0, b.y));
        const height = Math.abs(Y(b.y) - Y(0));
        return (
          <g key={b.x}>
            <rect x={x} y={top} width={bw} height={Math.max(1, height)} rx="2" fill={b.y >= 0 ? "#c9a227" : "#8a8f96"}>
              <title>{`${b.x}: ${b.y.toLocaleString("en-US", { maximumFractionDigits: 1 })}${ySuffix}${b.note ? ` (${b.note})` : ""}`}</title>
            </rect>
            {i % every === 0 || i === bars.length - 1 ? (
              <text
                x={x + bw / 2}
                y={h - 8}
                textAnchor="middle"
                fill={AXIS}
                fontSize="10"
                fontFamily="var(--font-sans)"
              >
                {b.x}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
