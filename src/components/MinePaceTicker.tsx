import { Info } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import {
  GOLD_MINE_2026E,
  SILVER_MINE_2026F,
  goldOzPerSecond,
  goldOzPerYear,
  mineOzRatio,
  silverOzPerSecond,
  silverOzPerYear,
  ytdMineOunces,
} from "@/lib/dashboard/mine-pace";

function fmtOunces(n: number) {
  return Math.floor(n).toLocaleString("en-US");
}

function InfoHint({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <button
        type="button"
        className="peer absolute top-2.5 right-2 grid size-7 place-items-center rounded-full text-muted hover:text-gold-soft focus-visible:text-gold-soft focus-visible:outline-none"
        aria-label={label}
      >
        <Info className="size-3.5" strokeWidth={2} />
      </button>
      <span
        role="tooltip"
        className="invisible absolute top-full left-0 z-50 mt-1 w-full rounded-md bg-raised px-3 py-2 text-left text-xs leading-relaxed font-normal tracking-normal text-muted normal-case shadow-[var(--shadow-border)] peer-hover:visible peer-focus:visible"
      >
        {children}
      </span>
    </>
  );
}

function PaceTile({
  kicker,
  tone,
  unit,
  value,
  estimate,
  info,
}: {
  kicker: string;
  tone: "gold" | "silver" | "gold-soft";
  unit: string;
  value: string;
  /** Smaller second line — full-year estimate for mined cards. */
  estimate?: string;
  info: string;
}) {
  const color =
    tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-gold-soft";
  return (
    <article className="relative flex min-h-[9.25rem] flex-col rounded-lg bg-surface px-4 pt-4 pb-5 pr-10 shadow-[var(--shadow-border)]">
      <p className={`text-xs font-semibold tracking-[0.16em] uppercase ${color}`}>{kicker}</p>
      <InfoHint label={`${kicker} details`}>{info}</InfoHint>
      <p className={`clock-value mt-3 font-sans tabular-nums tracking-tight ${color}`}>
        {value}
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      </p>
      {estimate ? (
        <p className="mt-2 text-xs leading-snug tabular-nums tracking-normal text-faint">{estimate}</p>
      ) : null}
    </article>
  );
}

export function MinePaceTicker() {
  const [ytd, setYtd] = useState<ReturnType<typeof ytdMineOunces> | null>(null);

  useEffect(() => {
    const tick = () => setYtd(ytdMineOunces(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const year = ytd?.year ?? new Date().getUTCFullYear();
  const goldRate = goldOzPerSecond(year);
  const silverRate = silverOzPerSecond(year);
  const ratio = mineOzRatio();
  const goldFullYear = fmtOunces(goldOzPerYear());
  const silverFullYear = fmtOunces(silverOzPerYear());

  return (
    <section aria-label="Estimated mine production this year">
      <div className="grid gap-3 md:grid-cols-3">
        <PaceTile
          kicker="Gold mined this year"
          tone="gold"
          unit="ounces"
          value={ytd ? fmtOunces(ytd.goldOz) : "—"}
          estimate={`est. 2026: ${goldFullYear} ounces`}
          info={`About ${goldRate.toFixed(1)} troy ounces each second. Full-year estimate ${goldFullYear} ounces (${GOLD_MINE_2026E.tonnes.toLocaleString("en-US")} t ${GOLD_MINE_2026E.asOf}), spread evenly through the year. Estimate — not a live mine feed.`}
        />
        <PaceTile
          kicker="Silver mined this year"
          tone="silver"
          unit="ounces"
          value={ytd ? fmtOunces(ytd.silverOz) : "—"}
          estimate={`est. 2026: ${silverFullYear} ounces`}
          info={`About ${silverRate.toFixed(1)} troy ounces each second. Full-year estimate ${silverFullYear} ounces (${SILVER_MINE_2026F.moz.toLocaleString("en-US")} million ounces ${SILVER_MINE_2026F.asOf}), spread evenly through the year. Estimate — not a live mine feed.`}
        />
        <PaceTile
          kicker="Mining ratio"
          tone="gold-soft"
          unit="ounces Ag / ounces Au"
          value={ratio.toFixed(1)}
          info={`Silver mined per ounce of gold at the ${GOLD_MINE_2026E.asOf}/${SILVER_MINE_2026F.asOf} pace. Not the price ratio.`}
        />
      </div>
    </section>
  );
}
