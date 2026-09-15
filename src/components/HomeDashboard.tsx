import { Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MinePaceTicker } from "@/components/MinePaceTicker";
import { Segmented } from "@/components/Segmented";
import { COMPILED_OFFICIAL } from "@/lib/dashboard/clock-prints";
import {
  downloadMetricShareCard,
  type MetricShareTone,
} from "@/lib/dashboard/metric-share-card";
import { getSpotLite } from "@/lib/dashboard/spot";
import { SILVER_2024, silverVisibleMonths } from "@/lib/dashboard/stocks";

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

export type DeskMetricTab = "prices" | "mining" | "reserves";

const DESK_TABS: { id: DeskMetricTab; label: string }[] = [
  { id: "prices", label: "Prices" },
  { id: "mining", label: "Mining" },
  { id: "reserves", label: "Reserves" },
];

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
  secondary,
}: {
  kicker: string;
  label: string;
  tone: MetricShareTone;
  unit: string;
  value?: string;
  note: string;
  secondary?: string;
}) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  const [busy, setBusy] = useState(false);

  async function onDownload() {
    if (!value || busy) return;
    setBusy(true);
    try {
      await downloadMetricShareCard({
        kicker,
        label,
        value,
        unit,
        note,
        tone,
        secondary,
      });
    } catch {
      // Download may fail if the browser blocks the blob — leave the live tile as-is.
    } finally {
      setBusy(false);
    }
  }

  return (
    <article className="relative rounded-lg bg-surface p-4 pr-12 shadow-[var(--shadow-border)]">
      <button
        type="button"
        onClick={onDownload}
        disabled={!value || busy}
        className="absolute top-2.5 right-2 grid size-9 place-items-center rounded-full text-muted transition-colors hover:text-gold-soft focus-visible:text-gold-soft focus-visible:outline-none disabled:opacity-40"
        aria-label={`Download ${label} as image`}
        title="Download 4:5 share card"
      >
        <Download className="size-3.5" strokeWidth={2} />
      </button>
      <p className="text-xs font-semibold tracking-[0.16em] text-faint">{kicker}</p>
      <h3 className="mt-1 text-sm text-muted">{label}</h3>
      <p className={`clock-value mt-3 font-sans tabular-nums tracking-tight ${color}`}>
        {value ?? "—"}
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      </p>
      {secondary ? (
        <p className="mt-2 text-xs leading-snug tabular-nums tracking-normal text-faint">{secondary}</p>
      ) : null}
      <p className="mt-2 text-xs text-faint">{note}</p>
    </article>
  );
}

export function HomeDashboard({ initialTab = "prices" }: { initialTab?: DeskMetricTab } = {}) {
  const [spot, setSpot] = useState<Spot | null>(null);
  const [tab, setTab] = useState<DeskMetricTab>(initialTab);

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
    <div className="data-ui mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <h1 className="sr-only">GoldSilverHQ</h1>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Metals desk</p>
          <p className="mt-1 text-sm text-muted">Dated prints by category. Each figure downloads as a 4:5 card.</p>
        </div>
        <Segmented label="Desk metric category" value={tab} onChange={setTab} options={DESK_TABS} />
      </div>

      <div className="mt-6" role="tabpanel" aria-label={`${tab} metrics`}>
        {tab === "prices" ? (
          <section className="grid gap-3 sm:grid-cols-3">
            <FaceTile
              kicker="gold"
              label="Gold spot"
              tone="gold"
              unit="USD / oz"
              value={spot ? `$${fmtMoney(spot.gold, 0)}` : undefined}
              note="Same print as the header tape."
            />
            <FaceTile
              kicker="silver"
              label="Silver spot"
              tone="silver"
              unit="USD / oz"
              value={spot ? `$${fmtMoney(spot.silver, 2)}` : undefined}
              note="Same feed as gold."
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
        ) : null}

        {tab === "mining" ? (
          <MinePaceTicker />
        ) : null}

        {tab === "reserves" ? (
          <section className="grid gap-3 sm:grid-cols-2">
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
              note={`Identifiable bullion ÷ ${SILVER_2024.asOf} fabrication.`}
            />
          </section>
        ) : null}
      </div>

      <p className="mt-6 text-center text-sm">
        <Link to="/desk" className="btn-gold inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium">
          Open the full desk →
        </Link>
      </p>
    </div>
  );
}
