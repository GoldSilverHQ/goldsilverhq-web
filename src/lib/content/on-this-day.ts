import data from "./on-this-day.json" with { type: "json" };

export type OnThisDayEvent = {
  year: number;
  text: string;
  /** Internal History path when a matching article exists. */
  href?: string;
  source: string;
};

/** Keyed by zero-padded "MM-DD". Max three events per day are shown. */
export const ON_THIS_DAY: Record<string, OnThisDayEvent[]> = data;

export function monthDayKey(date: Date, timeZone = "UTC") {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const month = parts.find((p) => p.type === "month")?.value ?? "01";
  const day = parts.find((p) => p.type === "day")?.value ?? "01";
  return `${month}-${day}`;
}

export function onThisDay(date: Date, timeZone = "UTC") {
  const key = monthDayKey(date, timeZone);
  const events = (ON_THIS_DAY[key] ?? [])
    .slice()
    .sort((a, b) => a.year - b.year)
    .slice(0, 3);
  const label = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    day: "numeric",
    month: "long",
  }).format(date);
  return { key, label, events };
}
