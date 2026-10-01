import { Link } from "@tanstack/react-router";
import type { OnThisDayEvent } from "@/lib/content/on-this-day";
import type { SilverMovers } from "@/lib/dashboard/silver-movers";

function Box({
  kicker,
  title,
  titleClassName = "",
  footer,
  children,
}: {
  kicker: string;
  title: string;
  titleClassName?: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col rounded-sm bg-surface p-4 shadow-[var(--shadow-border)]">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">{kicker}</p>
      <h2 className={`mt-1 font-display text-lg leading-snug ${titleClassName}`}>{title}</h2>
      <div className="mt-3 flex-1">{children}</div>
      <p className="mt-4 border-t border-line pt-3 text-sm">{footer}</p>
    </section>
  );
}

function roundPct(n: number) {
  return Math.round(n * 100) / 100;
}

function fmtPct(n: number) {
  const r = roundPct(n);
  const s = Math.abs(r).toFixed(2);
  return r > 0 ? `+${s}%` : r < 0 ? `\u2212${s}%` : `${s}%`;
}

function pctColor(n: number) {
  const r = roundPct(n);
  return r > 0 ? "text-up" : r < 0 ? "text-down" : "text-muted";
}

function fmtDate(iso: string) {
  const d = new Date(`${iso}T12:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      });
}

export function HomeSidebar({
  dayLabel,
  events,
  movers,
}: {
  dayLabel: string;
  events: OnThisDayEvent[];
  movers: SilverMovers | null;
}) {
  return (
    <aside
      aria-label="On this day and silver producers"
      className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 xl:content-start"
    >
      <Box
        kicker={dayLabel}
        title="On this day in Sound Money History"
        footer={
          <Link to="/history" className="text-gold hover:text-gold-soft">
            Sound Money History →
          </Link>
        }
      >
        {events.length ? (
          <ul className="space-y-3 text-sm">
            {events.map((e) => (
              <li key={`${e.year}-${e.text}`} className="flex gap-2">
                <span aria-hidden className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-gold" />
                <p className="text-muted">
                  <span className="font-semibold text-fg tabular-nums">{e.year}</span>{" "}
                  {e.href ? (
                    <a href={e.href} className="hover:text-gold">
                      {e.text}
                    </a>
                  ) : (
                    e.text
                  )}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-faint">No dated entry for today yet.</p>
        )}
      </Box>

      <Box
        kicker={movers ? `Last trading day · ${fmtDate(movers.asOf)}` : "Last trading day"}
        title="Silver producers: top 5 daily change"
        titleClassName="w-fit text-silver-shine"
        footer={
          <Link
            to="/silver-stocks"
            className="text-silver-shine underline-offset-2 hover:underline"
          >
            Silver stocks report →
          </Link>
        }
      >
        {movers ? (
          <table className="w-full text-sm">
            <caption className="caption-bottom pt-2 text-left text-xs text-faint">
              Close-to-close change, producers only.
            </caption>
            <thead className="sr-only">
              <tr>
                <th>Company and ticker</th>
                <th>Daily change</th>
              </tr>
            </thead>
            <tbody>
              {movers.rows.map((r) => (
                <tr key={r.ticker} className="border-b border-line last:border-0">
                  <td className="py-1.5 pr-2">
                    <span className="block leading-tight">{r.name}</span>
                    <span className="text-xs tracking-wide text-faint">{r.ticker}</span>
                  </td>
                  <td className={`py-1.5 text-right align-top tabular-nums ${pctColor(r.dayPct)}`}>
                    {fmtPct(r.dayPct)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-sm text-faint">Data unavailable right now.</p>
        )}
      </Box>
    </aside>
  );
}
