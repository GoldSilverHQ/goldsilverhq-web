import type { ReactNode } from "react";
import { MetricDownloadButton } from "@/components/desk/MetricDownloadButton";
import type { MetricShareTone } from "@/lib/dashboard/metric-share-card";

type Cadence = "live" | "daily" | "monthly" | "yearly" | "const";

function Dash({ tone = "gold", unit }: { tone?: MetricShareTone; unit?: string }) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  return (
    <p className={`clock-value font-sans tabular-nums tracking-tight ${color}`}>
      <span className="clock-dash">— — —</span>
      {unit ? (
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      ) : null}
    </p>
  );
}

function Live({
  children,
  tone = "gold",
  unit,
}: {
  children: ReactNode;
  tone?: MetricShareTone;
  unit?: string;
}) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  return (
    <p className={`clock-value font-sans tabular-nums tracking-tight ${color}`}>
      {children}
      {unit ? (
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      ) : null}
    </p>
  );
}

/** Desk metric tile with optional 4:5 share download. */
export function DeskMetricTile({
  kicker,
  label,
  tone = "gold",
  unit,
  note,
  cadence,
  asOf,
  wide,
  live,
  secondary,
}: {
  kicker: string;
  label: string;
  tone?: MetricShareTone;
  unit?: string;
  note?: string;
  cadence: Cadence;
  asOf?: string;
  wide?: boolean;
  live?: string;
  secondary?: string;
}) {
  const shareValue = live && live !== "— — —" ? live : undefined;

  return (
    <article
      className={`relative rounded-lg bg-surface p-4 pr-12 shadow-[var(--shadow-border)] ${wide ? "sm:col-span-2" : ""}`}
    >
      <MetricDownloadButton
        className="absolute top-2.5 right-2"
        payload={
          shareValue
            ? {
                kicker,
                label,
                value: shareValue,
                unit: unit ?? "",
                note,
                tone,
                secondary,
              }
            : null
        }
      />
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">{kicker}</p>
        <p className="text-xs text-faint">{asOf ?? cadence}</p>
      </div>
      <h3 className="mt-1 text-sm text-muted">{label}</h3>
      <div className="mt-3">
        {shareValue ? (
          <Live tone={tone} unit={unit}>
            {shareValue}
          </Live>
        ) : (
          <Dash tone={tone} unit={unit} />
        )}
      </div>
      {secondary ? (
        <p className="mt-2 text-xs leading-snug tabular-nums tracking-normal text-faint">{secondary}</p>
      ) : null}
      {note ? <p className="mt-2 text-xs text-faint">{note}</p> : null}
    </article>
  );
}

export function DeskBoard({
  title,
  kicker,
  cols = 4,
  children,
}: {
  title: string;
  kicker?: string;
  cols?: 2 | 3 | 4;
  children: ReactNode;
}) {
  const grid =
    cols === 2 ? "sm:grid-cols-2" : cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-baseline gap-2">
        <h2 className="font-sans text-2xl sm:text-3xl">{title}</h2>
        {kicker ? <span className="text-xs text-faint">{kicker}</span> : null}
      </div>
      <div className={`mt-4 grid gap-3 ${grid}`}>{children}</div>
    </section>
  );
}
