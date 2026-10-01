import { useEffect, useState } from "react";
import { GOLD_MINE_2026E, mineOzRatio, ytdMineOunces } from "@/lib/dashboard/mine-pace";

function fmtOunces(n: number) {
  return Math.floor(n).toLocaleString("en-US");
}

function PaceTile({
  kicker,
  tone,
  unit,
  value,
  note,
}: {
  kicker: string;
  tone: "gold" | "silver" | "gold-soft";
  unit: string;
  value: string;
  note: string;
}) {
  const color =
    tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-gold-soft";
  return (
    <article className="flex min-h-[9.25rem] flex-col rounded-lg bg-surface px-4 pt-4 pb-5 shadow-[var(--shadow-border)]">
      <p className={`text-xs font-semibold tracking-[0.16em] uppercase ${color}`}>{kicker}</p>
      <p
        className={`clock-value mt-3 flex flex-wrap items-baseline gap-x-2 font-sans tabular-nums tracking-tight ${color}`}
      >
        {value}
        <span className="font-sans text-xs tracking-widest text-muted">{unit}</span>
      </p>
      <p className="mt-2 text-xs leading-snug text-faint">{note}</p>
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

  const ratio = mineOzRatio();
  const year = GOLD_MINE_2026E.asOf.slice(0, 4);

  return (
    <section aria-label="Estimated mine production this year">
      <div className="grid gap-3 md:grid-cols-3">
        <PaceTile
          kicker="Gold mined this year"
          tone="gold"
          unit="ounces"
          value={ytd ? fmtOunces(ytd.goldOz) : "—"}
          note={`Ounces mined worldwide so far in ${year}, estimated from World Gold Council data.`}
        />
        <PaceTile
          kicker="Silver mined this year"
          tone="silver"
          unit="ounces"
          value={ytd ? fmtOunces(ytd.silverOz) : "—"}
          note={`Ounces mined worldwide so far in ${year}, estimated from Silver Institute data.`}
        />
        <PaceTile
          kicker="Mining ratio"
          tone="gold-soft"
          unit="ounces Ag / ounces Au"
          value={ratio.toFixed(1)}
          note={`Ounces of silver mined for each ounce of gold in ${year}.`}
        />
      </div>
    </section>
  );
}
