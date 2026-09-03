import { useEffect, useMemo, useState } from "react";
import {
  CB_TIMEFRAMES,
  COMPILED_DESK,
  cbGrowth,
  cbWorld,
  flagEmoji,
  type CbDesk,
  type CbTimeframe,
} from "@/lib/dashboard/central-banks";
import { getCbDesk } from "@/lib/dashboard/cb-desk";
import { ClockBoards } from "@/components/ClockBoards";
import { DollarPower } from "@/components/DollarPower";
import { AthNow } from "@/components/AthNow";
import { Segmented } from "@/components/Segmented";
import { SpotTape } from "@/components/SpotTape";

function fmtTonnes(n: number) {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toLocaleString("en-US", { maximumFractionDigits: 0 })} t`;
}

export function MetalDesk() {
  const [cbRange, setCbRange] = useState<CbTimeframe>("1Y");
  const [mode, setMode] = useState<"relative" | "absolute">("absolute");
  const [desk, setDesk] = useState<CbDesk>(COMPILED_DESK);

  useEffect(() => {
    let on = true;
    getCbDesk()
      .then((d) => {
        if (on && d) setDesk(d);
      })
      .catch(() => undefined);
    return () => {
      on = false;
    };
  }, []);

  const world = cbWorld(cbRange, desk);
  const rows = useMemo(() => {
    const list = cbGrowth(cbRange, desk).map((r) => ({
      id: r.id,
      name: r.name,
      pct: Math.round(r.growth * 1000) / 10,
      tonnes: r.tonnes,
      start: Math.round(r.start),
      stock: r.stock,
      asOf: r.asOf,
    }));
    return [...list].sort((a, b) => (mode === "relative" ? b.pct - a.pct : b.tonnes - a.tonnes));
  }, [cbRange, mode, desk]);
  const max = Math.max(...rows.map((r) => (mode === "relative" ? r.pct : r.tonnes)), 1);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Metals desk</p>
      <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
        <span className="text-gold">Gold</span> & <span className="text-silver">silver</span> desk
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Five-year COMEX tape, 1980 in today’s money, printers, and the official books.
      </p>

      <SpotTape />

      <AthNow />

      <DollarPower />

      <ClockBoards />

      <section className="mt-10">
        <p className="text-center text-xs font-semibold tracking-[0.14em] text-gold uppercase">Official sector</p>
        <h2 className="mt-2 text-center font-display text-3xl">Central bank gold</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
          {mode === "relative"
            ? "Relative: reported net change as a share of that country’s gold at the start of the window."
            : "Absolute: reported net tonnes in the window. China and Poland look different here than in percent."}
        </p>
        <div className="mt-5 flex flex-col items-center gap-2">
          <Segmented
            label="Scale"
            value={mode}
            onChange={setMode}
            options={[
              { id: "relative", label: "Relative %" },
              { id: "absolute", label: "Absolute t" },
            ]}
          />
          <Segmented
            label="Central bank timeframe"
            value={cbRange}
            onChange={setCbRange}
            options={CB_TIMEFRAMES.map((t) => ({ id: t.id, label: t.label }))}
          />
        </div>

        <p className="mt-6 text-center font-display text-3xl tabular-nums text-gold">
          {fmtTonnes(world)}
          <span className="ml-2 font-sans text-sm text-muted">
            {cbRange === "1Y"
              ? "WGC net official demand, H1 2026 (through Jun; includes unreported)"
              : "WGC net official demand (includes unreported)"}
          </span>
        </p>

        <div className="mt-6 grid w-full gap-4 lg:grid-cols-2">
        <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
          <ul className="flex flex-col gap-3">
            {rows.map((row) => {
              const value = mode === "relative" ? row.pct : row.tonnes;
              const label = mode === "relative" ? `+${row.pct.toFixed(1)}%` : fmtTonnes(row.tonnes);
              return (
                <li key={row.id} className="cb-bar-row" title={`${row.name}: +${row.pct.toFixed(1)}% · ${fmtTonnes(row.tonnes)}`}>
                  <p className="text-sm text-fg">
                    <span className="mr-1.5" aria-hidden>
                      {flagEmoji(row.id)}
                    </span>
                    {row.name}
                  </p>
                  <div className="h-7 overflow-hidden rounded-md bg-raised">
                    <div
                      className="h-full rounded-md bg-gold"
                      style={{ width: `${Math.max(8, (value / max) * 100)}%` }}
                    />
                  </div>
                  <p className="text-sm tabular-nums text-gold-soft sm:text-right">{label}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs tracking-[0.12em] text-faint uppercase">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">Reported net</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Start stock</th>
                <th className="px-4 py-3 font-medium">Growth</th>
                {cbRange === "1Y" ? <th className="hidden px-4 py-3 font-medium sm:table-cell">As of</th> : null}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.id} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 tabular-nums text-faint">{i + 1}</td>
                  <td className="px-4 py-3 text-fg">
                    <span className="mr-1.5" aria-hidden>
                      {flagEmoji(row.id)}
                    </span>
                    {row.name}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-gold-soft">{fmtTonnes(row.tonnes)}</td>
                  <td className="hidden px-4 py-3 tabular-nums text-muted sm:table-cell">
                    {row.start.toLocaleString("en-US")} t
                  </td>
                  <td className="px-4 py-3 tabular-nums text-gold">+{row.pct.toFixed(1)}%</td>
                  {cbRange === "1Y" ? (
                    <td className="hidden px-4 py-3 text-faint sm:table-cell">{row.asOf ?? "Jun 2026"}</td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        <p className="mt-3 text-xs text-faint">
          Official prints only — no estimates. 2026 YTD uses the latest figure per country (PBoC/SAFE for China,
          WGC monthly for the rest). WGC has not published the July all-country table yet. World total is WGC GDT H1,
          not the sum of the table. Top 15.{" "}
          {desk.source === "gshq" ? "Live from GSHQ." : "Compiled fallback."}
        </p>
      </section>
    </div>
  );
}
