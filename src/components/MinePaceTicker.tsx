import { useEffect, useState } from "react";
import {
  GOLD_MINE_2026E,
  SILVER_MINE_2026F,
  goldOzPerSecond,
  silverOzPerSecond,
  ytdMineOunces,
} from "@/lib/dashboard/mine-pace";

function fmtOz(n: number) {
  return Math.floor(n).toLocaleString("en-US");
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

  return (
    <section aria-label="Estimated mine production this year">
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Gold mined this year</p>
          <p className="mt-3 font-sans text-4xl tabular-nums tracking-tight text-gold sm:text-5xl">
            {ytd ? fmtOz(ytd.goldOz) : "—"}
            <span className="ml-2 align-middle text-sm tracking-widest text-muted">oz</span>
          </p>
          <p className="mt-3 text-xs text-faint">
            ~{goldRate.toFixed(2)} oz/s · {GOLD_MINE_2026E.tonnes.toLocaleString("en-US")} t {GOLD_MINE_2026E.asOf}{" "}
            mine pace, run evenly. Not a live mine feed.
          </p>
        </article>
        <article className="rounded-xl bg-raised px-5 py-6 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-silver)_28%,transparent)]">
          <p className="text-xs font-semibold tracking-[0.16em] text-silver uppercase">Silver mined this year</p>
          <p className="mt-3 font-sans text-4xl tabular-nums tracking-tight text-silver sm:text-5xl">
            {ytd ? fmtOz(ytd.silverOz) : "—"}
            <span className="ml-2 align-middle text-sm tracking-widest text-muted">oz</span>
          </p>
          <p className="mt-3 text-xs text-faint">
            ~{silverRate.toFixed(1)} oz/s · {SILVER_MINE_2026F.moz.toLocaleString("en-US")} Moz {SILVER_MINE_2026F.asOf}{" "}
            mine pace, run evenly. Not a live mine feed.
          </p>
        </article>
      </div>
    </section>
  );
}
