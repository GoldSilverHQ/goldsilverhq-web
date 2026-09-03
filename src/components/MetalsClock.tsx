import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Tile, fmtMoney, fmtTonnes } from "@/components/clock-ui";
import { getOfficialGold, type OfficialGold } from "@/lib/dashboard/cb-desk";
import { formatAsOf } from "@/lib/dashboard/central-banks";
import { COMPILED_OFFICIAL } from "@/lib/dashboard/clock-prints";
import { getSpotLite } from "@/lib/dashboard/spot";
import { IMF_GOV_DEBT, SILVER_2024, coverPct, silverVisibleMonths } from "@/lib/dashboard/stocks";

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

export function MetalsClock() {
  const [spot, setSpot] = useState<Spot | null>(null);
  const [official, setOfficial] = useState<OfficialGold>(COMPILED_OFFICIAL);

  useEffect(() => {
    let on = true;
    const load = () =>
      getSpotLite()
        .then((s) => {
          if (on) setSpot(s);
        })
        .catch(() => undefined);
    load();
    getOfficialGold()
      .then((d) => {
        if (on && d) setOfficial(d);
      })
      .catch(() => undefined);
    const id = setInterval(load, 15 * 60_000);
    return () => {
      on = false;
      clearInterval(id);
    };
  }, []);

  const spotAsOf = spot?.asOf
    ? new Date(`${spot.asOf}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
    : "live";
  const officialCover = spot ? coverPct(official.world.tonnes, spot.gold) : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Tile
          kicker="Au"
          label="Gold"
          unit="USD / oz"
          cadence="live"
          asOf={spotAsOf}
          live={spot ? `$${fmtMoney(spot.gold, 0)}` : undefined}
        />
        <Tile
          kicker="Ag"
          label="Silver"
          tone="silver"
          unit="USD / oz"
          cadence="live"
          asOf={spotAsOf}
          live={spot ? `$${fmtMoney(spot.silver, 2)}` : undefined}
        />
        <Tile
          kicker="GSR"
          label="Ratio"
          unit="oz Ag / oz Au"
          cadence="live"
          asOf={spotAsOf}
          live={spot ? spot.ratio.toFixed(1) : undefined}
        />
        <Tile
          kicker="Official"
          label="World official gold"
          unit="t"
          cadence="yearly"
          asOf={formatAsOf(official.world.asOf)}
          live={fmtTonnes(official.world.tonnes)}
        />
        <Tile
          kicker="Cover"
          label="Official gold vs world gov debt"
          unit="%"
          cadence="yearly"
          asOf={IMF_GOV_DEBT.asOf}
          live={officialCover != null ? (officialCover * 100).toFixed(1) : undefined}
        />
        <Tile
          kicker="Silver"
          label="Visible silver cover"
          tone="silver"
          unit="months"
          cadence="yearly"
          asOf={SILVER_2024.asOf}
          live={silverVisibleMonths().toFixed(1)}
        />
      </section>
      <p className="mt-5 text-center text-sm text-muted">
        <Link to="/desk" className="text-gold hover:text-gold-soft">
          Full desk →
        </Link>
      </p>
    </div>
  );
}
