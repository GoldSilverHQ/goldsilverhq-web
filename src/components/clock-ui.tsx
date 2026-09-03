import { ChevronDown, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type ClockTone = "gold" | "silver" | "fg";
export type ClockCadence = "live" | "daily" | "monthly" | "yearly" | "const";

export function fmtMoney(n: number, d: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });
}

export function fmtTonnes(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

export function Dash({ tone = "gold", unit }: { tone?: ClockTone; unit?: string }) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  return (
    <p className={`clock-value font-display tabular-nums tracking-tight ${color}`}>
      <span className="clock-dash">— — —</span>
      {unit ? (
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      ) : null}
    </p>
  );
}

export function Live({
  children,
  tone = "gold",
  unit,
}: {
  children: ReactNode;
  tone?: ClockTone;
  unit?: string;
}) {
  const color = tone === "gold" ? "text-gold" : tone === "silver" ? "text-silver" : "text-fg";
  return (
    <p className={`clock-value font-display tabular-nums tracking-tight ${color}`}>
      {children}
      {unit ? (
        <span className="ml-2 align-middle font-sans text-xs tracking-widest text-muted">{unit}</span>
      ) : null}
    </p>
  );
}

export function Tile({
  kicker,
  label,
  tone = "gold",
  unit,
  note,
  cadence,
  asOf,
  wide,
  live,
}: {
  kicker: string;
  label: string;
  tone?: ClockTone;
  unit?: string;
  note?: string;
  cadence: ClockCadence;
  asOf?: string;
  wide?: boolean;
  live?: ReactNode;
}) {
  return (
    <article className={`rounded-lg bg-surface p-4 shadow-[var(--shadow-border)] ${wide ? "sm:col-span-2" : ""}`}>
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">{kicker}</p>
        <p className="text-xs text-faint">{asOf ?? cadence}</p>
      </div>
      <h3 className="mt-1 text-sm text-muted">{label}</h3>
      <div className="mt-3">{live ? <Live tone={tone} unit={unit}>{live}</Live> : <Dash tone={tone} unit={unit} />}</div>
      {note ? <p className="mt-2 text-xs text-faint">{note}</p> : null}
    </article>
  );
}

export function Board({
  icon: Icon,
  title,
  kicker,
  open,
  children,
}: {
  icon: LucideIcon;
  title: string;
  kicker?: string;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <details open={open} className="mt-6 rounded-lg bg-raised/40 p-1 shadow-[var(--shadow-border)]">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 [&::-webkit-details-marker]:hidden">
        <Icon className="size-4 shrink-0 text-gold" aria-hidden />
        <span className="font-display text-2xl">{title}</span>
        {kicker ? <span className="ml-auto text-xs text-faint">{kicker}</span> : <span className="ml-auto" />}
        <ChevronDown className="clock-chevron size-4 text-faint" aria-hidden />
      </summary>
      <div className="grid gap-3 p-3 pt-1 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
    </details>
  );
}
