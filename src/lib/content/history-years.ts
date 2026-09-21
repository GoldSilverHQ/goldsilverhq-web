import { articleHeroForPath } from "./article-media.ts";
import { historyYearFill } from "./history-year-fill.ts";
import { allHistoryYearNumbers } from "../seo/phase1-sitemap-paths.mjs";

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

/** A year whose picture is its own public-domain or CC0 file, not an episode hero. */
function photoYear(
  year: number,
  image: Pick<HistoryYearImage, "alt" | "caption" | "credit">,
  page: Omit<HistoryYear, "year" | "image">,
): HistoryYear {
  return {
    year,
    ...page,
    image: {
      path: `/history/${year}`,
      src: `/images/history/years/${year}.jpg`,
      ogSrc: `/og/cards/history-${year}.jpg`,
      alt: image.alt,
      caption: image.caption,
      credit: image.credit,
    },
  };
}

const EXPLICIT_YEARS: readonly HistoryYear[] = [
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
  photoYear(1790, {
    alt: "Assignat of 100 livres dated 29 September 1790.",
    caption: "Assignat of 100 livres, 29 September 1790.",
    credit: "CC0.",
  }, {
    title: "Assignats",
    summary: "Revolutionary France recasts land-tied paper as everyday money. A September issue is called a ceiling. It does not hold.",
    paragraphs: [
      "In April 1790 the assignats were recast as circulating money. Interest was cut, then removed. Smaller notes followed, until the paper could pay wages and buy bread. What had been a fiscal instrument became the everyday unit.",
      "In September 1790 the Assembly added a large new issue and called the total a ceiling. The ceiling did not hold. This is not John Law’s 1720, and it is not England’s 1797 stop on gold payout.",
    ],
    more: { href: "/history/banks-paper/assignats", title: "Assignats" },
  }),
  fromEpisode(1792, "/history/america/early-us-coinage", {
    title: "Coinage Act",
    summary: "Congress writes gold and silver into the dollar at a fixed mint ratio.",
    paragraphs: [
      "The Coinage Act of 1792 made both gold and silver legal tender at an official exchange, the mint ratio. The law could fix that ratio. The market did not have to keep it.",
      "When world prices drifted, the metal that was cheaper at the mint stayed in the till and the other left. That is bimetallism as a statute, not a forecast of which metal wins.",
    ],
    more: { href: "/history/america/early-us-coinage", title: "Early U.S. coinage" },
  }),
  photoYear(1797, {
    alt: "Print of 1797 showing the Bank turning metal into paper.",
    caption: "Print of 1797: the Bank turns gold into paper.",
    credit: "CC0.",
  }, {
    title: "Bank Restriction",
    summary: "The Bank of England stops paying gold for its notes. The pound keeps its name.",
    paragraphs: [
      "In February 1797 an Order in Council told the Bank of England to stop paying gold for its notes. The Bank Restriction Act made that suspension statute. Notes stayed in London’s tills. Holders could no longer test the pound in coin at Threadneedle Street.",
      "Gold went to a premium against paper. Full gold payout resumed in 1821, after Peel’s Act of 1819. This is not the assignats, and it is not 1914.",
    ],
    more: { href: "/history/banks-paper/bank-of-england", title: "Bank of England" },
  }),
  photoYear(1821, {
    alt: "Gold sovereign of George IV.",
    caption: "Gold sovereign of George IV, the reign in which the Bank resumed gold payout.",
    credit: "CC0.",
  }, {
    title: "Gold payout resumes",
    summary: "The Bank of England pays gold for its notes again. Restriction ends.",
    paragraphs: [
      "Peel’s Act of 1819 set a path back to convertibility. In 1821 the Bank of England resumed full gold payout on its notes. The wartime stop of 1797 was over.",
      "The pound could be tested in coin again. That is resumption of a window, not a new kind of money. Britain’s later return in 1925, and the exit in 1931, are a different century.",
    ],
    more: { href: "/history/banks-paper/bank-of-england", title: "Bank of England" },
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
  photoYear(1862, {
    alt: "United States Note of 1862, a greenback.",
    caption: "United States Note, 1862.",
    credit: "Public domain.",
  }, {
    title: "Legal Tender Act",
    summary: "Congress authorizes United States Notes. The paper dollar floats below gold.",
    paragraphs: [
      "In February 1862 the Legal Tender Act authorized United States Notes — greenbacks — as legal tender. The Union paid for the war in paper the Treasury would not redeem in gold on demand.",
      "In New York that paper traded at a gold premium: the market’s measure of notes against metal. The date set to close that gap was 1 January 1879. This page is the authorization, not the resumption.",
    ],
    more: { href: "/history/america/greenbacks-civil-war", title: "Greenbacks and the Civil War" },
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
  photoYear(1879, {
    alt: "Ten-dollar refunding certificate, series of 1879.",
    caption: "Ten-dollar refunding certificate, series of 1879. Paper of the resumption year, not the gold paid against United States Notes.",
    credit: "Public domain.",
  }, {
    title: "Specie resumption",
    summary: "On 1 January, United States Notes are again treated as gold at par in practice.",
    paragraphs: [
      "The Specie Payment Resumption Act of 1875 set the date: 1 January 1879. On that day the United States resumed specie payments. The wartime greenback premium had closed in practice.",
      "Defining the dollar as a gold unit in statute waited until the Gold Standard Act of 1900. Resumption was the operational hinge. The 1900 Act was the label.",
    ],
    more: { href: "/history/america/road-back-gold", title: "The road back to gold" },
  }),
  photoYear(1900, {
    alt: "Ten-thousand-dollar gold certificate, series of 1900.",
    caption: "Ten-thousand-dollar gold certificate, series of 1900.",
    credit: "Public domain.",
  }, {
    title: "Gold Standard Act",
    summary: "Statute defines the dollar in gold: 25.8 grains, nine-tenths fine.",
    paragraphs: [
      "The Gold Standard Act of 1900 defined the dollar in gold in statute: 25.8 grains, nine-tenths fine. Specie payments had already resumed on 1 January 1879. This Act was the legal label.",
      "The country entered the twentieth century as a gold-standard country in law. The next American liquidity crisis, and the Federal Reserve, open with 1907.",
    ],
    more: { href: "/history/america/road-back-gold", title: "The road back to gold" },
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
  photoYear(1913, {
    alt: "Twenty-dollar Federal Reserve note, series of 1914.",
    caption: "Twenty-dollar Federal Reserve note, series of 1914. The Act is 23 December 1913. The note is not dated 1913.",
    credit: "Public domain.",
  }, {
    title: "Federal Reserve Act",
    summary: "Wilson signs the act on 23 December. A public central bank, after the 1907 scramble.",
    paragraphs: [
      "On 23 December 1913 Woodrow Wilson signed the Federal Reserve Act. It created regional Federal Reserve Banks and a federal board. Member banks could discount commercial paper and receive Reserve notes.",
      "The public brief was elastic currency and a lender of last resort, so a scramble like 1907 would not depend on one private rescue. This statute is not the 1914 suspension of gold convertibility.",
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
  photoYear(1925, {
    alt: "Gold sovereign of George V.",
    caption: "Gold sovereign of George V, the reign in which Britain restored a gold parity in 1925.",
    credit: "CC0.",
  }, {
    title: "Sterling’s pre-war parity",
    summary: "Britain restores gold convertibility at the pre-war sterling–dollar rate. The 1913 world does not come back.",
    paragraphs: [
      "In 1925 Britain returned to gold at the pre-war parity. The number was the old one. The machine was not: several centres, private convertibility, and gold that moved when the points were hit did not return with it.",
      "The wartime end of the classical standard names this return, and the exit six years later. Reusing the pre-war rate is not the same system on pause.",
    ],
    more: { href: "/history/20th-century/classical-gold-standard-end", title: "Classical gold standard’s wartime end" },
  }),
  photoYear(1931, {
    alt: "Bank of England five-pound note, 1931.",
    caption: "Bank of England five-pound note, 1931.",
    credit: "Public domain.",
  }, {
    title: "Britain leaves gold",
    summary: "Six years after the 1925 return, sterling leaves the gold parity.",
    paragraphs: [
      "In 1931 Britain left gold. The 1925 restoration had reused the pre-war parity. It had not rebuilt the pre-1914 order. The exit is the other half of that interwar pair.",
      "Other interwar “gold standards” were pegs, exchange controls, and official gold — a familiar name on a different architecture. This is not 1797, and it is not the American gold recall of 1933.",
    ],
    more: { href: "/history/20th-century/classical-gold-standard-end", title: "Classical gold standard’s wartime end" },
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
  photoYear(1934, {
    alt: "One-hundred-dollar gold certificate, series of 1934.",
    caption: "One-hundred-dollar gold certificate, series of 1934. Official paper after the Act. Not a note the public could redeem in gold.",
    credit: "Public domain.",
  }, {
    title: "Gold Reserve Act",
    summary: "30 January: title to monetary gold vests in the United States. The official price becomes $35.",
    paragraphs: [
      "The Gold Reserve Act of 30 January 1934 vested title to monetary gold in the United States. Federal Reserve Banks transferred their gold to the Treasury and received gold certificates. The Treasury was forbidden to redeem currency in gold for the public.",
      "The official dollar price was set at $35 an ounce, up from $20.67. That was a statute, not a market print. The recall order itself is 1933.",
    ],
    more: { href: "/history/20th-century/1933-gold-recall", title: "1933 U.S. gold recall" },
  }),
  photoYear(1944, {
    alt: "Opening of the Bretton Woods conference, 1944.",
    caption: "Opening of the Bretton Woods conference, 1944.",
    credit: "Public domain.",
  }, {
    title: "Bretton Woods",
    summary: "The post-war dollar is defined against gold at $35 for official holders. Citizens do not get that window.",
    paragraphs: [
      "Bretton Woods was negotiated in 1944 at Bretton Woods, New Hampshire. Member currencies were pegged to the US dollar. The dollar was defined against gold at $35 a troy ounce for official convertibility.",
      "Ordinary people in the United States did not redeem paper at the Treasury. The official window that remained was closed on 15 August 1971.",
    ],
    more: { href: "/history/20th-century/bretton-woods-nixon-1971", title: "Nixon shock 1971" },
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
  photoYear(1974, {
    alt: "United States double eagle of 1907.",
    caption: "United States double eagle, 1907. A pre-1933 gold coin of the kind private holders could keep again after 1974. The coin is not from 1974.",
    credit: "Public domain.",
  }, {
    title: "Private gold holding returns",
    summary: "Statute again allows Americans to hold gold bullion. Convertibility does not return.",
    paragraphs: [
      "Americans had been barred from holding monetary gold since the 1933 recall. Licenses covered industry, dentistry, and art. At the end of 1974, statute again allowed citizens to hold gold bullion.",
      "That restored a private holding right. It did not restore a public convertibility contract. The official window for foreign treasuries had already closed in 1971.",
    ],
    more: { href: "/history/20th-century/1933-gold-recall", title: "1933 U.S. gold recall" },
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

function buildHistoryYears(): readonly HistoryYear[] {
  const explicit = new Map(EXPLICIT_YEARS.map((row) => [row.year, row]));
  const pages: HistoryYear[] = [];
  for (const year of allHistoryYearNumbers()) {
    const known = explicit.get(year);
    if (known) {
      pages.push(known);
      explicit.delete(year);
      continue;
    }
    const filled = historyYearFill(year);
    if (!filled) throw new Error(`history year ${year} has no page`);
    pages.push(
      photoYear(year, filled.image, {
        title: filled.title,
        summary: filled.summary,
        paragraphs: filled.paragraphs,
        ...(filled.more ? { more: filled.more } : {}),
      }),
    );
  }
  if (explicit.size > 0) {
    throw new Error(`explicit history years missing from the year list: ${[...explicit.keys()].join(", ")}`);
  }
  return pages;
}

export const HISTORY_YEARS: readonly HistoryYear[] = buildHistoryYears();

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
