import { useEffect, useState } from "react";
import { ATH_1980, adjAth, getAthNow } from "@/lib/dashboard/ath-1980";

type Desk = { cpi: number; m2: number; cpiDate: string; m2Date: string; gold: number; silver: number };

function money(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: n >= 100 ? 0 : 2 });
}

function Col({
  label,
  value,
  spot,
}: {
  label: string;
  value: number;
  spot: number;
}) {
  const pct = value ? spot / value : 0;
  const cleared = pct >= 1;
  const width = `${Math.min(100, Math.max(0, pct * 100))}%`;
  return (
    <div className="flex h-full min-w-0 flex-col text-center">
      <p className="min-h-10 text-[10px] font-semibold leading-tight tracking-[0.06em] text-faint uppercase">{label}</p>
      <p className="mt-2 font-display text-3xl tabular-nums leading-none">${money(value)}</p>
      <p className={`mt-2 text-xs tabular-nums ${cleared ? "text-gold" : "text-muted"}`}>
        {cleared ? "above" : `${(pct * 100).toFixed(0)}% of ATH`}
      </p>
      <div className="mt-auto w-full pt-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-raised">
          <div className="h-full bg-gold" style={{ width }} />
        </div>
      </div>
    </div>
  );
}

function MetalAth({
  name,
  print,
  when,
  spot,
  cpiAdj,
  m2Adj,
  color,
}: {
  name: string;
  print: number;
  when: string;
  spot: number;
  cpiAdj: number;
  m2Adj: number;
  color: string;
}) {
  return (
    <article className="rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-border)]">
      <p className={`text-center text-xs font-semibold tracking-[0.14em] uppercase ${color}`}>{name}</p>
      <p className="mt-2 text-center text-sm text-muted">
        Printed ${money(print)} · {when}
      </p>
      <p className="mt-1 text-center text-sm tabular-nums text-fg">Spot ${money(spot)}</p>
      <div className="mt-5 grid grid-cols-2 items-stretch gap-4">
        <Col label="CPI-adjusted all-time high" value={cpiAdj} spot={spot} />
        <Col label="M2-adjusted all-time high" value={m2Adj} spot={spot} />
      </div>
    </article>
  );
}

export function AthNow() {
  const [desk, setDesk] = useState<Desk | null>(null);

  useEffect(() => {
    let on = true;
    getAthNow()
      .then((d) => {
        if (on) setDesk(d);
      })
      .catch(() => undefined);
    return () => {
      on = false;
    };
  }, []);

  const cpi = desk?.cpi ?? 332.813;
  const m2 = desk?.m2 ?? 23218;
  const gold = desk?.gold ?? 4456;
  const silver = desk?.silver ?? 66.5;

  return (
    <section className="mt-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">January 1980</p>
      <h2 className="mt-2 font-display text-3xl">The 1980 ATH, in today’s dollars</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Gold’s London print was $850. Silver’s Hunt-era print was $49.45. CPI is official inflation. M2 is the money
        stock.
      </p>

      <div className="mt-6 grid w-full gap-4 sm:grid-cols-2">
        <MetalAth
          name="Gold"
          print={ATH_1980.gold.usd}
          when={ATH_1980.gold.when}
          spot={gold}
          cpiAdj={adjAth(ATH_1980.gold.usd, ATH_1980.cpiThen, cpi)}
          m2Adj={adjAth(ATH_1980.gold.usd, ATH_1980.m2Then, m2)}
          color="text-gold"
        />
        <MetalAth
          name="Silver"
          print={ATH_1980.silver.usd}
          when={ATH_1980.silver.when}
          spot={silver}
          cpiAdj={adjAth(ATH_1980.silver.usd, ATH_1980.cpiThen, cpi)}
          m2Adj={adjAth(ATH_1980.silver.usd, ATH_1980.m2Then, m2)}
          color="text-silver"
        />
      </div>
      <p className="mt-3 text-xs text-faint">
        CPI: FRED CPIAUCSL ({desk?.cpiDate ?? "2026-07"} vs Jan 1980 = 78.0). M2: FRED M2SL ({desk?.m2Date ?? "2026-07"} vs
        Jan 1980 = $1,483 bn). Spot: live metals feed.
      </p>
    </section>
  );
}
