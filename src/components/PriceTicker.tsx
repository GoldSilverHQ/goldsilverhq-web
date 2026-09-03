import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getSpotLite } from "@/lib/dashboard/spot";

type Spot = { gold: number; silver: number; ratio: number; asOf?: string };

function fmt(n: number, d: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });
}

export function PriceTicker() {
  const [spot, setSpot] = useState<Spot | null>(null);

  useEffect(() => {
    let on = true;
    const load = () =>
      getSpotLite()
        .then((s) => {
          if (on) setSpot(s);
        })
        .catch(() => undefined);
    load();
    const id = setInterval(load, 15 * 60_000);
    return () => {
      on = false;
      clearInterval(id);
    };
  }, []);

  const items = spot
    ? [
        { k: "Au", v: `$${fmt(spot.gold, 0)}`, color: "text-gold" },
        { k: "Ag", v: `$${fmt(spot.silver, 2)}`, color: "text-silver" },
        { k: "GSR", v: `${spot.ratio.toFixed(1)}×`, color: "text-gold-soft" },
      ]
    : [
        { k: "Au", v: "—", color: "text-gold" },
        { k: "Ag", v: "—", color: "text-silver" },
        { k: "GSR", v: "—", color: "text-gold-soft" },
      ];

  const asOf = spot?.asOf
    ? new Date(`${spot.asOf}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
    : null;

  return (
    <Link
      to="/"
      aria-label="Gold, silver, and gold–silver ratio"
      className="flex min-w-0 items-center justify-center gap-3 sm:gap-5"
    >
      {items.map((it) => (
        <span key={it.k} className="flex items-baseline gap-1.5 tabular-nums">
          <span className="text-xs font-semibold tracking-[0.12em] text-faint uppercase">{it.k}</span>
          <span className={`text-xs font-medium sm:text-sm ${it.color}`}>{it.v}</span>
        </span>
      ))}
      {asOf ? <span className="hidden text-[10px] text-faint sm:inline">{asOf}</span> : null}
    </Link>
  );
}
