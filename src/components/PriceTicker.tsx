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
        { k: "gold", v: `$${fmt(spot.gold, 0)}`, color: "text-gold" },
        { k: "silver", v: `$${fmt(spot.silver, 2)}`, color: "text-silver" },
      ]
    : [
        { k: "gold", v: "—", color: "text-gold" },
        { k: "silver", v: "—", color: "text-silver" },
      ];

  return (
    <Link
      to="/desk"
      aria-label="Gold and silver prices"
      className="flex min-w-0 items-center justify-end gap-2.5 whitespace-nowrap sm:gap-3"
    >
      {items.map((it) => (
        <span key={it.k} className="flex items-baseline gap-1.5 font-sans tabular-nums">
          <span className="text-xs font-semibold tracking-[0.12em] text-faint">{it.k}</span>
          <span className={`text-[0.6875rem] font-medium sm:text-xs ${it.color}`}>{it.v}</span>
        </span>
      ))}
    </Link>
  );
}
