import { useMemo } from "react";
import { BarChart, ChartLegend, LineChart, type LineSeries } from "@/components/desk/charts";
import { DeskBoard, DeskMetricTile } from "@/components/desk/DeskMetricTile";
import { flagEmoji, formatAsOf } from "@/lib/dashboard/central-banks";
import { DESK_REFRESHED, staleNote } from "@/lib/dashboard/desk-refreshed";
import { MOZ_TO_T, WGC_MINE_2025, WGC_STOCK } from "@/lib/dashboard/stocks";
import {
  SILVER_INVENTORIES_2025,
  USGS_2026,
  WSS_2026,
  WSS_YEARS,
  silverDemandByUse2025,
  wssLatest,
  wssSeries,
} from "@/lib/dashboard/supply";

const GOLD = "#c9a227";
const SILVER = "#c5cdd4";

function n0(v: number) {
  return Math.round(v).toLocaleString("en-US");
}

function CountryBars({ metal }: { metal: "gold" | "silver" }) {
  const data = USGS_2026[metal];
  const max = data.countries[0].t;
  const color = metal === "gold" ? "bg-gold" : "bg-silver";
  return (
    <article className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
      <p className={`text-xs font-semibold tracking-[0.14em] uppercase ${metal === "gold" ? "text-gold" : "text-silver"}`}>
        {metal === "gold" ? "Gold" : "Silver"} · top 10 countries, tonnes
      </p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {data.countries.map((c) => (
          <li key={c.iso3} className="grid grid-cols-[8.5rem_1fr_3.5rem] items-center gap-3 text-sm">
            <span className="truncate text-fg">
              <span className="mr-1.5" aria-hidden>
                {flagEmoji(c.iso3)}
              </span>
              {c.name}
            </span>
            <span className="h-5 overflow-hidden rounded bg-raised">
              <span className={`block h-full rounded ${color}`} style={{ width: `${(c.t / max) * 100}%` }} />
            </span>
            <span className="text-right tabular-nums text-muted">{n0(c.t)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-faint">
        World {n0(data.worldT)} t. Top ten = {((data.countries.reduce((a, c) => a + c.t, 0) / data.worldT) * 100).toFixed(0)}% of
        world output.
      </p>
    </article>
  );
}

/** Mine output (USGS, Silver Institute) and the producing countries. */
export function MineSupply() {
  const silverMineMoz = wssLatest("mine");
  return (
    <>
      <DeskBoard title="Mine production" kicker="USGS · WGC · Silver Institute, 2025" cols={4}>
        <DeskMetricTile
          kicker="Gold"
          label="Gold mined in 2025"
          unit="t"
          cadence="yearly"
          asOf={WGC_MINE_2025.asOf}
          live={n0(WGC_MINE_2025.mineT)}
          secondary={`USGS estimate: ${n0(USGS_2026.gold.worldT)} t`}
          note="World Gold Council mine supply. USGS counts fewer small-scale mines, so its total is lower."
        />
        <DeskMetricTile
          kicker="Silver"
          label="Silver mined in 2025"
          tone="silver"
          unit="Moz"
          cadence="yearly"
          asOf="2025"
          live={silverMineMoz.toFixed(1)}
          secondary={`${n0(silverMineMoz * MOZ_TO_T)} t · USGS estimate ${n0(USGS_2026.silver.worldT)} t`}
          note="World Silver Survey 2026. Most silver is a by-product of lead/zinc, copper and gold mines."
        />
        <DeskMetricTile
          kicker="Ratio"
          label="Silver mined per ounce of gold"
          tone="silver"
          unit="Ag : Au"
          cadence="yearly"
          asOf="2025"
          live={`${(USGS_2026.silver.worldT / USGS_2026.gold.worldT).toFixed(1)} : 1`}
          note="USGS 2025 estimates, tonnes to tonnes. Geology, not a price target."
        />
        <DeskMetricTile
          kicker="Recycling"
          label="Silver recycled in 2025"
          tone="silver"
          unit="Moz"
          cadence="yearly"
          asOf="2025"
          live={wssLatest("recycling").toFixed(1)}
          note="Scrap from industry, jewellery and silverware returned to market. World Silver Survey 2026."
        />
      </DeskBoard>
      <section className="mt-8">
        <h2 className="font-sans text-2xl sm:text-3xl">Where the metal is mined</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <CountryBars metal="gold" />
          <CountryBars metal="silver" />
        </div>
        <p className="mt-3 text-xs text-faint">{USGS_2026.source}. Company-level production is not shown here.</p>
      </section>
    </>
  );
}

/** Silver supply, demand and market balance per year from the World Silver Survey. */
export function SilverMarket() {
  const balance = WSS_YEARS.map((y, i) => ({ x: String(y), y: WSS_2026.balance[i] }));
  const supply: LineSeries[] = useMemo(
    () => [
      { id: "demand", label: "Total demand", points: wssSeries("totalDemand"), color: GOLD },
      { id: "supply", label: "Total supply", points: wssSeries("totalSupply"), color: SILVER },
      { id: "mine", label: "Mine output", points: wssSeries("mine"), color: "#6e6860", dashed: true },
    ],
    [],
  );
  const use = silverDemandByUse2025();
  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-silver uppercase">Silver market</p>
      <h2 className="mt-2 font-sans text-3xl">Silver supply and demand</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Million ounces per year. A negative balance means demand used more than that year's supply, drawing on existing
        stocks.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-silver uppercase">Market balance, Moz</p>
          <BarChart bars={balance} label="Silver market balance per year, million ounces" />
        </article>
        <article className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
          <ChartLegend series={supply} />
          <LineChart series={supply} label="Silver supply and demand per year, million ounces" yMin={700} height={220} />
        </article>
      </div>
      <div className="mt-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-silver uppercase">
          Where silver went in 2025 · {n0(use.total)} Moz
        </p>
        <div className="mt-4 flex h-6 w-full overflow-hidden rounded-md">
          {use.parts.map((p, i) => (
            <span
              key={p.id}
              title={`${p.label}: ${p.moz.toFixed(1)} Moz`}
              style={{ width: `${(p.moz / use.total) * 100}%`, background: ["#c5cdd4", "#9aa3ab", "#c9a227", "#e8d48b", "#8a7a55", "#5d5a55"][i] }}
            />
          ))}
        </div>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
          {use.parts.map((p, i) => (
            <li key={p.id} className="flex items-center gap-2">
              <span
                className="inline-block size-2.5 rounded-sm"
                style={{ background: ["#c5cdd4", "#9aa3ab", "#c9a227", "#e8d48b", "#8a7a55", "#5d5a55"][i] }}
              />
              <span className="text-muted">{p.label}</span>
              <span className="ml-auto tabular-nums">{((p.moz / use.total) * 100).toFixed(0)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-xs text-faint">
        {WSS_2026.source}, "Silver Supply and Demand". Supply includes mine output, recycling, net hedging and official
        sales. The survey's 2026 forecast column is not shown.
      </p>
    </section>
  );
}

/** London vault holdings per month, COMEX open interest, ETFs and identifiable silver stocks. */
export function VaultsAndEtfs() {
  const lbma = DESK_REFRESHED.metrics.lbma;
  const hist = lbma.history ?? [];
  const toX = (m: string) => Number(m.slice(0, 4)) + (Number(m.slice(5, 7)) - 1) / 12;
  const goldSeries: LineSeries[] = [
    { id: "g", label: "Gold in London vaults, t", points: hist.map((h) => ({ x: toX(h.m), y: h.goldT })), color: GOLD },
  ];
  const silverSeries: LineSeries[] = [
    { id: "s", label: "Silver in London vaults, t", points: hist.map((h) => ({ x: toX(h.m), y: h.silverT })), color: SILVER },
  ];
  const oi = DESK_REFRESHED.metrics.comexOpenInterest;
  const inv = SILVER_INVENTORIES_2025;
  const lbmaStale = staleNote(lbma);
  return (
    <>
      <DeskBoard title="London vaults" kicker={`LBMA · ${formatAsOf(`${lbma.vaultLatest.asOf}-01`)}`} cols={3}>
        <DeskMetricTile
          kicker="Gold"
          label="Gold in London vaults"
          unit="t"
          cadence="monthly"
          asOf={formatAsOf(`${lbma.vaultLatest.asOf}-01`)}
          live={n0(lbma.vaultLatest.goldT)}
          note={`LBMA month-end vault holdings, incl. the Bank of England and ETF gold stored in London.${lbmaStale ? ` ${lbmaStale}` : ""}`}
        />
        <DeskMetricTile
          kicker="Silver"
          label="Silver in London vaults"
          tone="silver"
          unit="t"
          cadence="monthly"
          asOf={formatAsOf(`${lbma.vaultLatest.asOf}-01`)}
          live={n0(lbma.vaultLatest.silverT)}
          note="Includes silver held for ETFs, which cannot be lent or traded day to day."
        />
        <DeskMetricTile
          kicker="Clearing"
          label="Daily gold clearing vs vaulted gold"
          unit="×"
          cadence="monthly"
          asOf={formatAsOf(`${lbma.paired.asOf}-01`)}
          live={((lbma.paired.goldClearingDailyMoz * 1e6) / (lbma.paired.vaultGoldT * 32_150.7374)).toFixed(3)}
          note={`Average daily London clearing (${lbma.paired.goldClearingDailyMoz} Moz) ÷ same-month vault gold. Not annualised, not COMEX.`}
        />
      </DeskBoard>
      {hist.length > 1 ? (
        <section className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
            <ChartLegend series={goldSeries} />
            <LineChart series={goldSeries} label="Gold in London vaults per month since 2016" height={200} yMin={6000} />
          </article>
          <article className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
            <ChartLegend series={silverSeries} />
            <LineChart series={silverSeries} label="Silver in London vaults per month since 2016" height={200} yMin={20000} />
          </article>
          <p className="text-xs text-faint lg:col-span-2">
            LBMA vault holdings data, month-end, since July 2016. Refreshed by the daily cron.
          </p>
        </section>
      ) : null}

      {oi ? (
        <DeskBoard title="COMEX futures open interest" kicker={`CFTC · week of ${oi.gold.asOf}`} cols={2}>
          <DeskMetricTile
            kicker="Gold"
            label="Open gold futures contracts"
            unit="contracts"
            cadence="daily"
            asOf={oi.gold.asOf}
            live={n0(oi.gold.contracts)}
            secondary={`= ${n0(oi.gold.tonnes)} t of gold at 100 oz per contract`}
            note={`${oi.source}. Contracts open at the weekly report, not metal in a warehouse.${staleNote(oi) ? ` ${staleNote(oi)}` : ""}`}
          />
          <DeskMetricTile
            kicker="Silver"
            label="Open silver futures contracts"
            tone="silver"
            unit="contracts"
            cadence="daily"
            asOf={oi.silver.asOf}
            live={n0(oi.silver.contracts)}
            secondary={`= ${n0(oi.silver.tonnes)} t of silver at 5,000 oz per contract`}
            note="Same weekly report. COMEX warehouse (registered / eligible) stocks are not shown: CME's files are not machine-readable for us."
          />
        </DeskBoard>
      ) : null}

      <DeskBoard title="ETFs" kicker="WGC · Silver Institute" cols={2}>
        <DeskMetricTile
          kicker="Gold"
          label="Gold held by ETFs"
          unit="t"
          cadence="yearly"
          asOf={formatAsOf(WGC_STOCK.asOf)}
          live={n0(WGC_STOCK.etfT)}
          note="World Gold Council above-ground split, end-Q2 2026 (rounded). Not a daily holdings series."
        />
        <DeskMetricTile
          kicker="Silver"
          label="Silver held by ETPs"
          tone="silver"
          unit="Moz"
          cadence="yearly"
          asOf="Dec 2025"
          live={inv.etpMoz.toLocaleString("en-US", { minimumFractionDigits: 1 })}
          secondary={`${n0(inv.etpMoz * MOZ_TO_T)} t · about ${inv.etpInLondonMoz} Moz of it in London vaults`}
          note="World Silver Survey 2026, end-2025. Overlaps the vault figures: ETP silver is stored in London and in domestic vaults (Canada, India, Switzerland)."
        />
      </DeskBoard>

      <section className="mt-8">
        <div className="flex flex-wrap items-baseline gap-2">
          <h2 className="font-sans text-2xl sm:text-3xl">Identifiable silver stocks</h2>
          <span className="text-xs text-faint">World Silver Survey 2026 · end-2025</span>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <DeskMetricTile
              kicker="Vaults"
              label="Identifiable silver bullion"
              tone="silver"
              unit="Moz"
              cadence="yearly"
              asOf="Dec 2025"
              live={inv.totalMoz.toLocaleString("en-US", { minimumFractionDigits: 1 })}
              secondary={`${n0(inv.totalMoz * MOZ_TO_T)} t`}
              note="London vaults plus exchange warehouses. Already includes the ETP silver stored in London — do not add the ETP figure on top."
            />
          </div>
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-6 lg:col-span-2">
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { k: "London vaults", v: inv.londonMoz },
                { k: "CME (COMEX)", v: inv.cmeMoz },
                { k: "Shanghai Gold Exchange", v: inv.sgeMoz },
                { k: "Shanghai Futures Exchange", v: inv.shfeMoz },
                { k: "Other exchanges", v: inv.otherMoz },
              ].map((r) => (
                <li key={r.k} className="grid grid-cols-[11rem_1fr_4rem] items-center gap-3">
                  <span className="text-muted">{r.k}</span>
                  <span className="h-4 overflow-hidden rounded bg-raised">
                    <span className="block h-full rounded bg-silver" style={{ width: `${(r.v / inv.londonMoz) * 100}%` }} />
                  </span>
                  <span className="text-right tabular-nums">{r.v.toFixed(1)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-faint">
              Of London's {inv.londonMoz} Moz, about {inv.etpInLondonMoz} Moz backed ETPs at end-2025. The survey put
              London silver not held for ETPs at a record low of about {inv.londonFreeFloatMoz} Moz at end-September 2025.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
