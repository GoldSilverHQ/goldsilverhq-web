export type TimelineMetal = "gold" | "silver" | "paper";

export type TimelineEra =
  | "origins"
  | "empires"
  | "silver-world"
  | "banks"
  | "paper"
  | "america"
  | "gold-age"
  | "fiat";

export type TimelineStop = {
  id: string;
  era: TimelineEra;
  year: string;
  title: string;
  blurb: string;
  href: string;
  metal: TimelineMetal;
};

export const timelineEras: { id: TimelineEra; label: string }[] = [
  { id: "origins", label: "Origins" },
  { id: "empires", label: "Empires" },
  { id: "silver-world", label: "Silver world" },
  { id: "banks", label: "Banks" },
  { id: "paper", label: "Paper" },
  { id: "america", label: "America" },
  { id: "gold-age", label: "Gold age" },
  { id: "fiat", label: "Fiat era" },
];

/** Spine for the history hub. Every href is a real episode on the map. */
export const historyTimeline: TimelineStop[] = [
  {
    id: "markets-choose",
    era: "origins",
    year: "Before coins",
    title: "Markets choose gold and silver",
    blurb: "Durability, divisibility, scarcity — selection by trade, not a decree.",
    href: "/history/ancient/why-markets-chose-gold-silver",
    metal: "gold",
  },
  {
    id: "lydia",
    era: "origins",
    year: "c. 600 BC",
    title: "Lydia strikes the first coins",
    blurb: "Electrum, a stamp, and a lower cost of verifying metal.",
    href: "/history/ancient/lydia-first-coins",
    metal: "gold",
  },
  {
    id: "greece",
    era: "empires",
    year: "5th c. BC",
    title: "Greek silver and trade",
    blurb: "Laurion mines and Attic owls: silver as the language of the Mediterranean.",
    href: "/history/ancient/greece-silver-trade",
    metal: "silver",
  },
  {
    id: "rome",
    era: "empires",
    year: "1st–3rd c.",
    title: "Rome: denarius, aureus, debasement",
    blurb: "When spending outran metal, the coin was lightened. Slow, then obvious.",
    href: "/history/ancient/rome-denarius-aureus",
    metal: "gold",
  },
  {
    id: "solidus",
    era: "empires",
    year: "AD 312–",
    title: "The solidus holds its weight",
    blurb: "Constantine’s gold unit kept its fineness into Byzantium — continuity, not romance.",
    href: "/history/ancient/solidus-continuity",
    metal: "gold",
  },
  {
    id: "potosi",
    era: "silver-world",
    year: "1545",
    title: "Potosí — the silver mountain",
    blurb: "Cerro Rico and a flood of silver into Eurasia. The first global metal flow.",
    href: "/history/silver/potosi",
    metal: "silver",
  },
  {
    id: "piece-of-eight",
    era: "silver-world",
    year: "16th–18th c.",
    title: "Piece of eight",
    blurb: "The Spanish dollar: a coin that circulated from the Americas to East Asia.",
    href: "/history/silver/piece-of-eight",
    metal: "silver",
  },
  {
    id: "warehouses",
    era: "banks",
    year: "17th c.",
    title: "From warehouses to bank notes",
    blurb: "A receipt for metal starts to circulate. That is when banking begins.",
    href: "/history/banks-paper/warehouses-to-public-banks",
    metal: "paper",
  },
  {
    id: "amsterdam",
    era: "banks",
    year: "1609",
    title: "Bank of Amsterdam",
    blurb: "Public deposits and bank money — then concealed lending against the same name.",
    href: "/history/banks-paper/bank-of-amsterdam",
    metal: "paper",
  },
  {
    id: "boe",
    era: "banks",
    year: "1694",
    title: "Bank of England",
    blurb: "A private corporation, a war loan, and notes that became English money.",
    href: "/history/banks-paper/bank-of-england",
    metal: "paper",
  },
  {
    id: "law",
    era: "paper",
    year: "1720",
    title: "John Law and the Mississippi Bubble",
    blurb: "Notes without a trusted stop. Paris believed him — until it did not.",
    href: "/history/banks-paper/john-law",
    metal: "paper",
  },
  {
    id: "assignats",
    era: "paper",
    year: "1790s",
    title: "French assignats",
    blurb: "Revolutionary paper “backed” by land. Quantity rose; the unit died.",
    href: "/history/banks-paper/assignats",
    metal: "paper",
  },
  {
    id: "us-1792",
    era: "america",
    year: "1792",
    title: "Coinage Act: gold and silver in law",
    blurb: "The mint ratio, not a slogan, decided which metal actually circulated.",
    href: "/history/america/early-us-coinage",
    metal: "gold",
  },
  {
    id: "jackson",
    era: "america",
    year: "1832",
    title: "Jackson and the Bank",
    blurb: "The veto and the fight over a concentrated credit institution — before the Fed.",
    href: "/history/america/jackson-and-the-bank",
    metal: "paper",
  },
  {
    id: "greenbacks",
    era: "america",
    year: "1861–65",
    title: "Greenbacks",
    blurb: "Inconvertible paper as a war measure, then a fight over resumption.",
    href: "/history/america/greenbacks-civil-war",
    metal: "paper",
  },
  {
    id: "1873",
    era: "america",
    year: "1873",
    title: "The Crime of 1873",
    blurb: "The standard silver dollar dropped. Crime or clarification — still the fight.",
    href: "/history/america/crime-of-1873",
    metal: "silver",
  },
  {
    id: "1907",
    era: "gold-age",
    year: "1907–1913",
    title: "Panic of 1907 and the Fed",
    blurb: "A private rescue in New York. Then a statute: crisis, study, Federal Reserve.",
    href: "/history/20th-century/panic-1907-fed",
    metal: "gold",
  },
  {
    id: "1914",
    era: "gold-age",
    year: "1914",
    title: "Classical gold standard ends",
    blurb: "War finance broke convertibility and gold shipment. What followed was not a pause.",
    href: "/history/20th-century/classical-gold-standard-end",
    metal: "gold",
  },
  {
    id: "weimar",
    era: "fiat",
    year: "1923",
    title: "Weimar hyperinflation",
    blurb: "War finance, the Ruhr, a mark that ceased to work. Then the Rentenmark.",
    href: "/history/20th-century/weimar-1923",
    metal: "paper",
  },
  {
    id: "1933",
    era: "fiat",
    year: "1933",
    title: "U.S. gold recall",
    blurb: "Order 6102. The public claim on gold at the old mint price is removed.",
    href: "/history/20th-century/1933-gold-recall",
    metal: "gold",
  },
  {
    id: "1971",
    era: "fiat",
    year: "1971",
    title: "Nixon closes the gold window",
    blurb: "The last official gold contract on the dollar. After that, floating fiat.",
    href: "/history/20th-century/bretton-woods-nixon-1971",
    metal: "gold",
  },
  {
    id: "1980",
    era: "fiat",
    year: "1980",
    title: "Silver Thursday",
    blurb: "A concentrated position, exchange rule changes, a March break. Facts only.",
    href: "/history/silver/silver-thursday",
    metal: "silver",
  },
];
