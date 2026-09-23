import { getHistoryYear } from "./history-years.ts";

/**
 * Curated sound-money hinges for the History hub year-card grid.
 * Prefer `/history/YYYY` when that page exists; otherwise the long episode.
 * Labels only — not advice, not a forecast.
 */
export type HistoryHubYearCard = {
  year: number;
  /** One short line: what changed for money that year. */
  blurb: string;
  /** Episode used when `/history/YYYY` is not live yet. */
  episode: string;
};

export const HISTORY_HUB_YEAR_CARDS: readonly HistoryHubYearCard[] = [
  {
    year: 312,
    blurb: "Constantine’s solidus: a gold coin kept honest by weight for centuries.",
    episode: "/history/ancient/solidus-continuity",
  },
  {
    year: 1545,
    blurb: "Cerro Rico starts feeding silver into Atlantic and Pacific trade.",
    episode: "/history/silver/potosi",
  },
  {
    year: 1609,
    blurb: "Amsterdam’s Wisselbank credits a bank guilder merchants can transfer.",
    episode: "/history/banks-paper/bank-of-amsterdam",
  },
  {
    year: 1640,
    blurb: "Charles I seizes merchants’ bullion stored in the Tower mint.",
    episode: "/history/banks-paper/warehouses-to-public-banks",
  },
  {
    year: 1672,
    blurb: "Payments stop on royal debt that goldsmiths had treated as safe.",
    episode: "/history/banks-paper/warehouses-to-public-banks",
  },
  {
    year: 1694,
    blurb: "A war loan and a note issue — the Bank of England charter.",
    episode: "/history/banks-paper/bank-of-england",
  },
  {
    year: 1716,
    blurb: "Law founds a bank whose notes are payable in coin under stated rules.",
    episode: "/history/banks-paper/john-law",
  },
  {
    year: 1720,
    blurb: "Law’s notes and Mississippi shares break in the same year.",
    episode: "/history/banks-paper/john-law",
  },
  {
    year: 1775,
    blurb: "Continental currency is first authorized.",
    episode: "/history/silver/piece-of-eight",
  },
  {
    year: 1776,
    blurb: "Independence, Continental notes, and metal still treated as money.",
    episode: "/history/silver/piece-of-eight",
  },
  {
    year: 1792,
    blurb: "Congress writes gold and silver into the dollar at a fixed mint ratio.",
    episode: "/history/america/early-us-coinage",
  },
  {
    year: 1832,
    blurb: "Jackson vetoes a new charter for the Second Bank of the United States.",
    episode: "/history/america/jackson-and-the-bank",
  },
  {
    year: 1873,
    blurb: "The standard silver dollar is dropped from the coinage list.",
    episode: "/history/america/crime-of-1873",
  },
  {
    year: 1900,
    blurb: "Statute defines the dollar in gold: 25.8 grains, nine-tenths fine.",
    episode: "/history/america/road-back-gold",
  },
  {
    year: 1907,
    blurb: "A New York scramble, a private rescue, and no public central bank yet.",
    episode: "/history/20th-century/panic-1907-fed",
  },
  {
    year: 1913,
    blurb: "Wilson signs the Federal Reserve Act on 23 December.",
    episode: "/history/20th-century/panic-1907-fed",
  },
  {
    year: 1914,
    blurb: "War finance stops peacetime convertibility and gold shipment.",
    episode: "/history/20th-century/classical-gold-standard-end",
  },
  {
    year: 1923,
    blurb: "The German paper mark stops working; the Rentenmark follows.",
    episode: "/history/20th-century/weimar-1923",
  },
  {
    year: 1933,
    blurb: "Order 6102 calls in most private monetary gold.",
    episode: "/history/20th-century/1933-gold-recall",
  },
  {
    year: 1934,
    blurb: "Title to monetary gold vests in the United States; official price $35.",
    episode: "/history/20th-century/1933-gold-recall",
  },
  {
    year: 1944,
    blurb: "Bretton Woods pegs the dollar to gold at $35 for official holders.",
    episode: "/history/20th-century/bretton-woods-nixon-1971",
  },
  {
    year: 1971,
    blurb: "The United States suspends dollar–gold convertibility for foreign officials.",
    episode: "/history/20th-century/bretton-woods-nixon-1971",
  },
  {
    year: 1980,
    blurb: "A concentrated silver position, a rule change, and a March break.",
    episode: "/history/silver/silver-thursday",
  },
];

/** Prefer the year page; fall back to the long episode when that year is not live. */
export function historyHubYearHref(card: HistoryHubYearCard): string {
  return getHistoryYear(String(card.year)) ? `/history/${card.year}` : card.episode;
}
