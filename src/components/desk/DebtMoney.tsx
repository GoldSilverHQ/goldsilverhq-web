import { useMemo } from "react";
import { ChartLegend, LineChart, type LineSeries } from "@/components/desk/charts";
import { DeskBoard, DeskMetricTile } from "@/components/desk/DeskMetricTile";
import { formatAsOf } from "@/lib/dashboard/central-banks";
import { fmtUsdCompact, officialMtmUsd } from "@/lib/dashboard/clock-prints";
import {
  IIF_HEADLINE,
  TREASURY_GOLD,
  US_DEBT,
  US_DEBT_HISTORY,
  US_INTEREST,
  WORLD_GOV_DEBT,
  goldCoverOfDebt,
  goldDaysOfInterest,
  goldValueUsd,
  goldVsDebtSeries,
  interestToGold,
} from "@/lib/dashboard/debt";
import { DESK_REFRESHED, staleNote } from "@/lib/dashboard/desk-refreshed";
import { WGC_STOCK } from "@/lib/dashboard/stocks";

function dayLabel(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function withStale(note: string, stamp: Parameters<typeof staleNote>[0]) {
  const s = staleNote(stamp);
  return s ? `${note} ${s}` : note;
}

const m = DESK_REFRESHED.metrics;

/** US federal debt, debt-to-GDP, Treasury gold against debt, and a year of interest against the gold. */
export function UsDebtAndGold({ spot, spotAsOf }: { spot?: number; spotAsOf: string }) {
  const goldUsd = spot ? goldValueUsd(spot) : null;
  const cover = spot ? goldCoverOfDebt(spot) : null;
  const ratio = spot ? interestToGold(spot) : null;
  const days = spot ? goldDaysOfInterest(spot) : null;
  const series: LineSeries[] = useMemo(
    () => [
      {
        id: "cover",
        label: "US Treasury gold as % of federal debt",
        points: goldVsDebtSeries(spot),
        color: "#c9a227",
      },
    ],
    [spot],
  );
  const fy = US_INTEREST.fiscalYear;
  return (
    <>
      <DeskBoard title="US federal debt" kicker="Treasury · FRED" cols={3}>
        <DeskMetricTile
          kicker="Debt"
          label="Total public debt outstanding"
          unit="USD"
          cadence="daily"
          asOf={dayLabel(US_DEBT.asOf)}
          live={fmtUsdCompact(US_DEBT.totalUsd)}
          secondary={`Held by the public ${fmtUsdCompact(US_DEBT.publicUsd)} · held by federal trust funds ${fmtUsdCompact(US_DEBT.intragovUsd)}`}
          note={withStale("US Treasury, Debt to the Penny. Updated each business day.", m.usDebt)}
        />
        <DeskMetricTile
          kicker="Ratio"
          label="Federal debt as % of GDP"
          unit="%"
          cadence="monthly"
          asOf={formatAsOf(US_DEBT_HISTORY.debtGdpAsOf)}
          live={US_DEBT_HISTORY.debtGdpPct.toFixed(1)}
          note={withStale("FRED GFDEGDQ188S, quarterly. Total public debt over nominal GDP.", m.usDebtHistory)}
        />
        <DeskMetricTile
          kicker="Gold"
          label="US Treasury gold at today's price"
          unit="USD"
          cadence="live"
          asOf={spotAsOf}
          live={goldUsd != null ? fmtUsdCompact(goldUsd) : undefined}
          note={`${(TREASURY_GOLD.oz / 1e6).toFixed(1)} million oz (Fiscal Data, ${formatAsOf(TREASURY_GOLD.asOf)}) × spot. Book value at the legal $42.22/oz: ${fmtUsdCompact(TREASURY_GOLD.bookUsd)}.`}
        />
      </DeskBoard>

      <section className="mt-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <DeskMetricTile
              kicker="Cover"
              label="US gold as a share of federal debt"
              unit="%"
              cadence="live"
              asOf={spotAsOf}
              live={cover != null ? (cover * 100).toFixed(1) : undefined}
              note="Treasury gold at spot divided by total public debt. A comparison of two stocks, not a plan to repay anything."
            />
          </div>
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5 lg:col-span-2">
            <ChartLegend series={series} />
            <LineChart series={series} label="US Treasury gold as percent of federal debt since 2000" ySuffix="%" height={200} />
            <p className="mt-2 text-xs text-faint">
              Yearly: today's 261.5 million oz × that year's average gold price ÷ year-end federal debt (FRED GFDEBTN).
              US holdings have stayed near that level since 2000. Latest point: spot ÷ Debt to the Penny.
            </p>
          </div>
        </div>
      </section>

      <DeskBoard title="A year of interest vs all US gold" kicker="trailing 12 months" cols={4}>
        <DeskMetricTile
          kicker="Gross"
          label="Interest on all Treasury securities"
          unit="USD"
          cadence="monthly"
          asOf={formatAsOf(US_INTEREST.asOf)}
          live={fmtUsdCompact(US_INTEREST.ttmGrossUsd)}
          secondary={`FY${fy} to ${formatAsOf(US_INTEREST.asOf)}: ${fmtUsdCompact(US_INTEREST.fytdGrossUsd)}`}
          note={withStale(
            "Gross: includes interest credited to federal trust funds (Social Security and others). Fiscal Data, Interest Expense.",
            m.usInterest,
          )}
        />
        <DeskMetricTile
          kicker="Public"
          label="Interest on debt held by the public"
          unit="USD"
          cadence="monthly"
          asOf={formatAsOf(US_INTEREST.asOf)}
          live={fmtUsdCompact(US_INTEREST.ttmPublicUsd)}
          note="Public issues only (bills, notes, bonds, TIPS…), excluding trust-fund securities. Not the budget's 'net interest', which also nets out interest received."
        />
        <DeskMetricTile
          kicker="Ratio"
          label="Gross interest ÷ US gold at spot"
          unit="×"
          cadence="live"
          asOf={spotAsOf}
          live={ratio != null ? ratio.toFixed(2) : undefined}
          note="Above 1 means one year of gross interest is larger than the market value of all Treasury gold."
        />
        <DeskMetricTile
          kicker="Days"
          label="Days of gross interest US gold would match"
          unit="days"
          cadence="live"
          asOf={spotAsOf}
          live={days != null ? Math.round(days).toLocaleString("en-US") : undefined}
          note="Treasury gold at spot ÷ (trailing-12-month gross interest ÷ 365)."
        />
      </DeskBoard>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        The longer story is in{" "}
        <a href="/blog/interest-costs-vs-us-gold" className="text-gold hover:text-gold-soft">
          When One Year of Interest Costs More Than All of America&apos;s Gold
        </a>
        .
      </p>
    </>
  );
}

/** World government debt (IMF, completed years only), IIF headline, and gold marked against it. */
export function WorldDebt({ spot, spotAsOf, officialTonnes }: { spot?: number; spotAsOf: string; officialTonnes: number }) {
  const allGold = spot ? officialMtmUsd(WGC_STOCK.aboveGroundT, spot) : null;
  const official = spot ? officialMtmUsd(officialTonnes, spot) : null;
  return (
    <DeskBoard title="World debt vs gold" kicker="IMF · IIF · WGC" cols={4}>
      <DeskMetricTile
        kicker="Governments"
        label="World government debt"
        unit="USD"
        cadence="yearly"
        asOf={String(WORLD_GOV_DEBT.year)}
        live={fmtUsdCompact(WORLD_GOV_DEBT.usd)}
        note={withStale(
          `IMF World Economic Outlook: general government gross debt, ${WORLD_GOV_DEBT.countries} economies summed at market exchange rates. ${WORLD_GOV_DEBT.year} is the latest completed year (an IMF estimate); projection years are not shown.`,
          m.imfGovDebt,
        )}
      />
      <DeskMetricTile
        kicker="All sectors"
        label="Global debt (IIF headline)"
        unit="USD"
        cadence="yearly"
        asOf={IIF_HEADLINE.period}
        live={`>${fmtUsdCompact(IIF_HEADLINE.usd)}`}
        note={`“${IIF_HEADLINE.text}.” Households, companies, governments and the financial sector. Source: ${IIF_HEADLINE.source} (headline only; the dataset is for IIF members).`}
      />
      <DeskMetricTile
        kicker="Official"
        label="Official gold vs world government debt"
        unit="%"
        cadence="live"
        asOf={spotAsOf}
        live={official != null ? ((official / WORLD_GOV_DEBT.usd) * 100).toFixed(1) : undefined}
        note={`World official tonnes (${Math.round(officialTonnes).toLocaleString("en-US")} t) × spot, as a share of IMF government debt.`}
      />
      <DeskMetricTile
        kicker="All gold"
        label="All above-ground gold vs world government debt"
        unit="%"
        cadence="live"
        asOf={spotAsOf}
        live={allGold != null ? ((allGold / WORLD_GOV_DEBT.usd) * 100).toFixed(0) : undefined}
        note={`WGC above-ground stock (${WGC_STOCK.aboveGroundT.toLocaleString("en-US")} t) × spot. Mostly jewellery and private bars; not all of it could be sold at the posted price.`}
      />
    </DeskBoard>
  );
}
