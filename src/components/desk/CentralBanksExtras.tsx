import { useEffect, useMemo, useState } from "react";
import { BarChart, ChartLegend, LineChart, type LineSeries } from "@/components/desk/charts";
import { MetricDownloadButton } from "@/components/desk/MetricDownloadButton";
import { getCbHolders } from "@/lib/dashboard/cb-desk";
import {
  CB_HOLDERS_COMPILED,
  CB_SHARE_LATEST_YEAR,
  CB_SHARE_SERIES,
  CB_TIMELINE,
  CB_WORLD_SHARE,
  US_TREASURY_GOLD,
  holdingChange,
  shareFor,
  type CbHolder,
} from "@/lib/dashboard/cb-extras";
import { CB_WORLD_TOTAL, PUBLISHED_YTD_2026, flagEmoji, formatAsOf } from "@/lib/dashboard/central-banks";
import { TROY_OZ_PER_TONNE, fmtUsdCompact } from "@/lib/dashboard/clock-prints";

function t0(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

function signed(n: number | null) {
  if (n == null) return "—";
  const r = Math.round(n);
  return r === 0 ? "0" : `${r > 0 ? "+" : ""}${r.toLocaleString("en-US")}`;
}

/** World net official demand per year (WGC, includes unreported). Latest year is year to date. */
export function NetBuyingByYear() {
  const years = Object.keys(CB_WORLD_TOTAL).map(Number);
  const last = Math.max(...years);
  const bars = years.map((y) => ({
    x: y === last ? `${y} H1` : String(y),
    y: CB_WORLD_TOTAL[y as keyof typeof CB_WORLD_TOTAL],
  }));
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">By year</p>
      <h2 className="mt-2 font-sans text-3xl">Net official buying per year</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        All central banks together, in tonnes. Includes the World Gold Council's estimate of buying that is not
        reported country by country.
      </p>
      <div className="mt-6 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
        <BarChart bars={bars} label="World net official gold demand per year, tonnes" ySuffix=" t" />
      </div>
      <p className="mt-3 text-xs text-faint">
        World Gold Council, Gold Demand Trends. {last} is January–June only.
      </p>
    </section>
  );
}

function withPublished(h: CbHolder): CbHolder {
  const pub = PUBLISHED_YTD_2026[h.id];
  const base = h.hold["2025"];
  if (!pub || base == null || (h.asOf && h.asOf >= pub.asOf)) return h;
  return { ...h, tonnes: base + pub.tonnes, asOf: pub.asOf };
}

/** Top 20 official holders with change columns and gold as % of reserves. */
export function HoldersTable() {
  const [holders, setHolders] = useState<CbHolder[]>(CB_HOLDERS_COMPILED);
  const [live, setLive] = useState(false);
  useEffect(() => {
    let on = true;
    getCbHolders()
      .then((d) => {
        if (on && d?.length) {
          setHolders(d);
          setLive(true);
        }
      })
      .catch(() => undefined);
    return () => {
      on = false;
    };
  }, []);
  const rows = useMemo(() => holders.map(withPublished).sort((a, b) => b.tonnes - a.tonnes), [holders]);
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Holdings</p>
      <h2 className="mt-2 font-sans text-3xl">The 20 largest official holders</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Reported gold in tonnes, how it changed, and what share of each country's reserves it makes up.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <table className="w-full text-left text-sm tabular-nums">
          <thead>
            <tr className="border-b border-line text-xs tracking-[0.12em] text-faint uppercase">
              <th className="px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Holder</th>
              <th className="px-4 py-3 font-medium">Tonnes</th>
              <th className="px-4 py-3 font-medium">1 yr</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">5 yr</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">% of reserves ({CB_SHARE_LATEST_YEAR})</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">As of</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((h, i) => {
              const share = shareFor(h.id);
              const one = holdingChange(h, 2024, 2025);
              const five = holdingChange(h, 2020, 2025);
              return (
                <tr key={h.id} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-faint">{i + 1}</td>
                  <td className="px-4 py-3 text-fg">
                    <span className="mr-1.5" aria-hidden>
                      {flagEmoji(h.id)}
                    </span>
                    {h.name}
                  </td>
                  <td className="px-4 py-3 text-gold-soft">{t0(h.tonnes)}</td>
                  <td className={`px-4 py-3 ${one != null && one < 0 ? "text-muted" : "text-fg"}`}>{signed(one)}</td>
                  <td className={`hidden px-4 py-3 sm:table-cell ${five != null && five < 0 ? "text-muted" : "text-fg"}`}>
                    {signed(five)}
                  </td>
                  <td className="hidden px-4 py-3 text-muted md:table-cell">
                    {h.kind === "institution" ? "n/a" : share == null ? "—" : `${share.toFixed(0)}%`}
                  </td>
                  <td className="hidden px-4 py-3 text-faint sm:table-cell">{formatAsOf(h.asOf ?? undefined)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-faint">
        Tonnes: {live ? "GSHQ official-gold book" : "compiled GSHQ seed"} (IMF IFS / national releases); China, Poland,
        Czechia and Uzbekistan use their August 2026 national prints. 1 yr = end-2024 to end-2025; 5 yr = end-2020 to
        end-2025. % of reserves: IMF IFS, gold valued at that year's average price; {CB_SHARE_LATEST_YEAR} is the latest
        year with full country coverage. IMF, ECB and BIS are institutions, so no reserve share.
      </p>
    </section>
  );
}

const PALETTE = ["#c9a227", "#c5cdd4", "#e8d48b", "#8fb3a8", "#b38f8f"];

/** Gold as % of total reserves since 2000 for chosen countries, plus all reporting countries together. */
export function ReserveShareChart() {
  const [picked, setPicked] = useState<string[]>(["usa", "chn", "pol", "ind"]);
  const series: LineSeries[] = useMemo(() => {
    const world: LineSeries = {
      id: "world",
      label: "All reporting countries",
      color: "#6e6860",
      dashed: true,
      points: Object.entries(CB_WORLD_SHARE).map(([y, v]) => ({ x: Number(y), y: v })),
    };
    const chosen = picked
      .map((id, i) => {
        const s = CB_SHARE_SERIES.find((r) => r.id === id);
        if (!s) return null;
        return {
          id,
          label: s.name,
          color: PALETTE[i % PALETTE.length],
          points: Object.entries(s.share).map(([y, v]) => ({ x: Number(y), y: v })),
        } satisfies LineSeries;
      })
      .filter((s): s is NonNullable<typeof s> => s != null);
    return [...chosen, world];
  }, [picked]);
  const toggle = (id: string) =>
    setPicked((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : cur.length >= 5 ? cur : [...cur, id]));
  const worldNow = CB_WORLD_SHARE[String(CB_SHARE_LATEST_YEAR)];
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Reserves</p>
      <h2 className="mt-2 font-sans text-3xl">Gold as a share of reserves</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Gold's value as a percentage of each country's total reserves (gold plus foreign currency). Pick up to five
        countries.
      </p>
      <div className="relative mt-6 rounded-xl bg-surface p-4 pr-12 shadow-[var(--shadow-border)] sm:p-6 sm:pr-14">
        <MetricDownloadButton
          className="absolute top-3 right-3"
          payload={
            worldNow != null
              ? {
                  kicker: "Reserves",
                  label: "Gold share of reserves, all reporting countries",
                  value: `${worldNow.toFixed(1)}%`,
                  unit: "",
                  note: `IMF IFS, ${CB_SHARE_LATEST_YEAR}. Gold at that year's average price.`,
                  tone: "gold",
                }
              : null
          }
        />
        <div className="mb-4 flex flex-wrap gap-1.5">
          {CB_SHARE_SERIES.map((s) => {
            const on = picked.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s.id)}
                className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
                  on ? "bg-gold text-bg" : "bg-raised text-muted hover:text-fg"
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>
        <ChartLegend series={series} />
        <LineChart series={series} label="Gold as percent of total reserves since 2000" ySuffix="%" />
      </div>
      <p className="mt-3 text-xs text-faint">
        IMF International Financial Statistics, year-end reserves; gold valued at that year's average price (so shares
        differ from end-of-year snapshots). Through {CB_SHARE_LATEST_YEAR}; the newest year is not yet complete for most
        countries.
      </p>
    </section>
  );
}

/** US Treasury-owned gold: ounces, statutory book value, and value at today's spot. */
export function UsTreasuryGold({ gold, asOf }: { gold?: number; asOf: string }) {
  const g = US_TREASURY_GOLD;
  const market = gold ? g.oz * gold : null;
  const tonnes = g.oz / TROY_OZ_PER_TONNE;
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">United States</p>
      <h2 className="mt-2 font-sans text-3xl">US Treasury gold</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          {
            k: "Ounces",
            v: `${(g.oz / 1e6).toFixed(1)} M oz`,
            n: `${t0(tonnes)} t across Fort Knox, Denver, West Point and the New York Fed.`,
            share: `${(g.oz / 1e6).toFixed(1)}M`,
          },
          {
            k: "Book value",
            v: fmtUsdCompact(g.bookUsd),
            n: `Carried at the legal price of $${g.bookPerOz} per ounce, fixed in 1973.`,
            share: fmtUsdCompact(g.bookUsd),
          },
          {
            k: "At today's price",
            v: market ? fmtUsdCompact(market) : "—",
            n: `Same ounces × spot (${asOf}). A valuation, not a sale price.`,
            share: market ? fmtUsdCompact(market) : "",
          },
        ].map((c) => (
          <article key={c.k} className="relative rounded-lg bg-surface p-4 pr-12 shadow-[var(--shadow-border)]">
            <MetricDownloadButton
              className="absolute top-2.5 right-2"
              payload={
                c.share
                  ? { kicker: "US Treasury gold", label: c.k, value: c.share, unit: c.k === "Ounces" ? "oz" : "USD", note: c.n, tone: "gold" }
                  : null
              }
            />
            <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">{c.k}</p>
            <p className="clock-value mt-3 font-sans tabular-nums text-gold">{c.v}</p>
            <p className="mt-2 text-xs text-faint">{c.n}</p>
          </article>
        ))}
      </div>
      <p className="mt-3 text-xs text-faint">
        {g.source}, {formatAsOf(g.asOf)}. Debt comparisons sit on the Debt &amp; money tab.
      </p>
    </section>
  );
}

export function CbTimeline() {
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Timeline</p>
      <h2 className="mt-2 font-sans text-3xl">Official gold, key dates</h2>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {CB_TIMELINE.map((e) => (
          <li key={e.year} className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-sans text-xl tabular-nums text-gold">{e.year}</p>
            <p className="mt-2 text-sm text-muted">{e.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
