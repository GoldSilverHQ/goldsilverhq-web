import { articleHeroForPath } from "./article-media.ts";

/**
 * One calendar year, one picture, a short sound-money note.
 * URL is `/history/1776` — not `/history/year/1776` — because cluster slugs are words.
 * `/history/year` is only the index. Unknown years 404. No forecasts, no advice.
 */

export type HistoryYearImage = {
  path: string;
  src: string;
  ogSrc: string;
  alt: string;
  caption: string;
  credit: string;
};

export type HistoryYear = {
  year: number;
  title: string;
  summary: string;
  paragraphs: readonly string[];
  /** Longer episode already on the site. Omitted when this year has no episode. */
  more?: { href: string; title: string };
  image: HistoryYearImage;
};

function fromEpisode(
  year: number,
  episodePath: string,
  page: Omit<HistoryYear, "year" | "image" | "more"> & { more: { href: string; title: string } },
): HistoryYear {
  const hero = articleHeroForPath(episodePath);
  if (!hero?.caption || !hero.credit) {
    throw new Error(`history year ${year} needs a captioned hero at ${episodePath}`);
  }
  return {
    year,
    ...page,
    image: {
      path: `/history/${year}`,
      src: hero.src,
      ogSrc: `/og/cards/history-${year}.jpg`,
      alt: hero.alt,
      caption: hero.caption,
      credit: hero.credit,
    },
  };
}

export const HISTORY_YEARS: readonly HistoryYear[] = [
  fromEpisode(1545, "/history/silver/potosi", {
    title: "Potosí",
    summary: "Cerro Rico starts feeding silver into Atlantic and Pacific trade.",
    paragraphs: [
      "In 1545 Spanish miners opened Cerro Rico at Potosí. The mountain’s silver did not stay in the Andes. It moved into coin, into European prices, and across the Pacific on the Manila trade.",
      "This is a mine and a money flow, not a forecast of the metal’s price. The longer page is the silver mountain itself.",
    ],
    more: { href: "/history/silver/potosi", title: "Potosí — the silver mountain" },
  }),
  fromEpisode(1609, "/history/banks-paper/bank-of-amsterdam", {
    title: "Bank of Amsterdam",
    summary: "The Wisselbank takes mixed coin and credits a bank guilder merchants can transfer.",
    paragraphs: [
      "In 1609 Amsterdam opened a public deposit bank. Mixed street coin went in. A standard bank guilder came out, transferable on the city’s books. That bank money often traded at a premium, the agio, over worn coin.",
      "The reputation was that a bank florin was a claim on metal. Concealed lending later broke that reputation. 1609 is the opening, not the later breach.",
    ],
    more: { href: "/history/banks-paper/bank-of-amsterdam", title: "Bank of Amsterdam" },
  }),
  fromEpisode(1694, "/history/banks-paper/bank-of-england", {
    title: "Bank of England",
    summary: "A war loan and a note issue. Not a copy of Amsterdam’s giro.",
    paragraphs: [
      "In 1694 a private corporation was chartered as the Bank of England. The bargain was war finance: a loan to the Crown, and notes attached to that charter. Those notes became ordinary paper in London.",
      "England’s later stop on gold payout (1797) and the return of gold in the 1820s are a different chapter. This year is the charter.",
    ],
    more: { href: "/history/banks-paper/bank-of-england", title: "Bank of England" },
  }),
  fromEpisode(1720, "/history/banks-paper/john-law", {
    title: "Mississippi Bubble",
    summary: "John Law’s notes and Mississippi shares break in the same year.",
    paragraphs: [
      "John Law’s System tied a note-issuing bank to the Mississippi Company. In 1720 the paper and the shares came down together. Paris had treated the notes as money until it did not.",
      "This is not the assignats of the 1790s, and it is not Germany in 1923. It is one regency’s paper-and-shares collapse.",
    ],
    more: { href: "/history/banks-paper/john-law", title: "John Law and the Mississippi Bubble" },
  }),
  {
    year: 1776,
    title: "Continental paper",
    summary: "Independence, new Continental notes, and a book that still treated gold and silver as money.",
    paragraphs: [
      "On 4 July 1776 the Continental Congress declared independence. The war was already being paid in part with Continental currency, first authorized in 1775. The two-dollar note of 17 February 1776 promises the bearer two Spanish milled dollars, or the value in gold or silver. The promise is printed. The metal is not the paper.",
      "Silver and gold coin, including the Spanish dollar, remained the metal people could test. The later saying “not worth a continental” names the paper’s collapse in the years after this one. It is not a 1776 price. The same year, Adam Smith’s Wealth of Nations (9 March) still described gold and silver as the money trade had selected.",
    ],
    image: {
      path: "/history/1776",
      src: "/images/history/years/1776.jpg",
      ogSrc: "/og/cards/history-1776.jpg",
      alt: "Obverse of a two-dollar Continental currency note dated February 17, 1776.",
      caption: "Two-dollar Continental note, emission of 17 February 1776.",
      credit: "Public domain. Colonial Currency collection, University of Notre Dame.",
    },
  },
  fromEpisode(1792, "/history/america/early-us-coinage", {
    title: "Coinage Act",
    summary: "Congress writes gold and silver into the dollar at a fixed mint ratio.",
    paragraphs: [
      "The Coinage Act of 1792 made both gold and silver legal tender at an official exchange, the mint ratio. The law could fix that ratio. The market did not have to keep it.",
      "When world prices drifted, the metal that was cheaper at the mint stayed in the till and the other left. That is bimetallism as a statute, not a forecast of which metal wins.",
    ],
    more: { href: "/history/america/early-us-coinage", title: "Early U.S. coinage" },
  }),
  fromEpisode(1832, "/history/america/jackson-and-the-bank", {
    title: "Jackson vetoes the Bank",
    summary: "The President blocks a new charter for the Second Bank of the United States.",
    paragraphs: [
      "In 1832 Andrew Jackson vetoed the recharter of the Second Bank. The fight was over who held the government’s balances and who issued the country’s paper. There was no Federal Reserve. That statute is 1913.",
      "The cartoon on this page is from 1836, after the veto, during the Bank War. The year of the veto is 1832.",
    ],
    more: { href: "/history/america/jackson-and-the-bank", title: "Jackson and the Bank" },
  }),
  fromEpisode(1873, "/history/america/crime-of-1873", {
    title: "Coinage Act",
    summary: "The standard silver dollar is dropped from the coinage list.",
    paragraphs: [
      "The Coinage Act of 1873 left the standard silver dollar off the list of coins the Mint would strike. Silver advocates later called that the Crime of 1873. Others called it a clarification toward gold.",
      "The argument is still the argument. This page does not pick a side or a trade.",
    ],
    more: { href: "/history/america/crime-of-1873", title: "The Crime of 1873" },
  }),
  fromEpisode(1907, "/history/20th-century/panic-1907-fed", {
    title: "Panic of 1907",
    summary: "A New York scramble, a private rescue, and no public central bank yet.",
    paragraphs: [
      "In 1907 New York trust companies ran short of cash. Private bankers, led by J. Pierpont Morgan’s group, organized emergency support. The United States had no central bank to do that job.",
      "The Federal Reserve Act is 1913, after this panic. The Fed did not cause 1907.",
    ],
    more: { href: "/history/20th-century/panic-1907-fed", title: "Panic of 1907 and the Fed" },
  }),
  fromEpisode(1914, "/history/20th-century/classical-gold-standard-end", {
    title: "Gold standard breaks",
    summary: "War finance stops the peacetime rules: convertibility and gold shipment.",
    paragraphs: [
      "The classical gold standard was a set of practices, not a single treaty: convertibility, gold points, and London settlement. In 1914 war finance suspended that peacetime order.",
      "What followed was not the same system on pause. The longer page is that break.",
    ],
    more: { href: "/history/20th-century/classical-gold-standard-end", title: "Classical gold standard’s wartime end" },
  }),
  fromEpisode(1923, "/history/20th-century/weimar-1923", {
    title: "Weimar",
    summary: "The paper mark stops working. The Rentenmark is the stop that follows.",
    paragraphs: [
      "In 1923 the German mark lost practical use as a unit. The sequence starts with war finance and the Ruhr, not with a slogan about printers.",
      "The Rentenmark is how that particular collapse was stopped. It is not a model for a later trade, and it is not John Law’s 1720.",
    ],
    more: { href: "/history/20th-century/weimar-1923", title: "Weimar hyperinflation" },
  }),
  fromEpisode(1933, "/history/20th-century/1933-gold-recall", {
    title: "Gold recall",
    summary: "Order 6102 calls in most private monetary gold. The official price is reset the next year.",
    paragraphs: [
      "In 1933 the United States required most domestic gold coin, bullion, and gold certificates to be turned in. Executive Order 6102 is that order. The public claim on gold at the old mint price was removed.",
      "The Gold Reserve Act of 1934 then set the official price at $35, up from $20.67. Official gold became a Treasury asset. This is not 1914, and it is not the 1971 gold-window close.",
    ],
    more: { href: "/history/20th-century/1933-gold-recall", title: "1933 U.S. gold recall" },
  }),
  fromEpisode(1971, "/history/20th-century/bretton-woods-nixon-1971", {
    title: "Gold window closes",
    summary: "15 August: the United States suspends dollar–gold convertibility for foreign officials.",
    paragraphs: [
      "On 15 August 1971 the United States stopped converting dollars into gold for foreign official holders. That was the last official gold contract on the post-war dollar.",
      "Private Americans had already been barred from monetary gold since the 1933 recall. 1971 did not invent fiat in one night. It ended that remaining official link.",
    ],
    more: { href: "/history/20th-century/bretton-woods-nixon-1971", title: "Nixon shock 1971" },
  }),
  fromEpisode(1980, "/history/silver/silver-thursday", {
    title: "Silver Thursday",
    summary: "A concentrated silver position, a rule change, a March break. The record, not a lesson in what to hold.",
    paragraphs: [
      "In March 1980 a large silver position met exchange rule changes. The price break that followed is called Silver Thursday. The page states that sequence.",
      "It is not a view on silver now, and it is not a reason to buy or sell.",
    ],
    more: { href: "/history/silver/silver-thursday", title: "Silver Thursday" },
  }),
];

const BY_YEAR = new Map(HISTORY_YEARS.map((row) => [row.year, row]));

export function historyYearPaths(): string[] {
  return HISTORY_YEARS.map((row) => `/history/${row.year}`);
}

/** `/history/1776` — the param is the year digits. Cluster words are not years. */
export function getHistoryYear(slug: string): HistoryYear | undefined {
  if (!/^\d{3,4}$/.test(slug)) return undefined;
  return BY_YEAR.get(Number(slug));
}

export function adjacentHistoryYears(year: number): { prev?: HistoryYear; next?: HistoryYear } {
  const i = HISTORY_YEARS.findIndex((row) => row.year === year);
  if (i < 0) return {};
  return {
    prev: i > 0 ? HISTORY_YEARS[i - 1] : undefined,
    next: i < HISTORY_YEARS.length - 1 ? HISTORY_YEARS[i + 1] : undefined,
  };
}
