/**
 * Notable people in the sound-money record.
 * Index: `/history/vip`. Person: `/history/vip/ludwig-von-mises`.
 * Not `/history/andrew-jackson` — that one-segment slot is clusters and years.
 * Unknown slugs 404. No forecasts, no advice.
 */

export const HISTORY_VIP_DESCRIPTION =
  "Financiers, economists, and the politicians who signed the statutes. One short page each, tied to the longer article already on this site.";

export type HistoryPersonImage = {
  path: string;
  src: string;
  ogSrc: string;
  alt: string;
  caption: string;
  credit: string;
  /** Person pages show the uncropped portrait (native ratio), not the 5:2 band. */
  frame: "portrait";
  width: number;
  height: number;
};

export type HistoryPerson = {
  slug: string;
  name: string;
  life: string;
  role: string;
  summary: string;
  paragraphs: readonly string[];
  /** Longer page already on the site. */
  more?: { href: string; title: string };
  image: HistoryPersonImage;
};

function person(
  slug: string,
  image: Omit<HistoryPersonImage, "path" | "ogSrc" | "src" | "frame"> & { src?: string },
  page: Omit<HistoryPerson, "slug" | "image">,
): HistoryPerson {
  const path = `/history/vip/${slug}`;
  return {
    slug,
    ...page,
    image: {
      path,
      src: image.src ?? `/images/history/vip/${slug}.jpg`,
      ogSrc: `/og/cards/history-vip-${slug}.jpg`,
      alt: image.alt,
      caption: image.caption,
      credit: image.credit,
      frame: "portrait",
      width: image.width,
      height: image.height,
    },
  };
}

export const HISTORY_PEOPLE: readonly HistoryPerson[] = [
  person(
    "john-law",
    {
      alt: "Portrait of John Law in a grey wig, holding a sealed letter.",
      caption: "John Law, after Alexis Simon Belle (19th-century copy, Château de Versailles).",
      credit: "Public domain.",
      width: 736,
      height: 920,
    },
    {
      name: "John Law",
      life: "1671–1729",
      role: "Financier",
      summary:
        "Regency France fused his note-issuing bank with Mississippi Company shares. Both broke in 1720.",
      paragraphs: [
        "John Law persuaded the Regency of Philippe d’Orléans to charter a bank whose notes and a colonial share company rose together. In 1720 the paper and the shares came down together.",
        "That is one regency’s paper-and-shares collapse — notes and Mississippi equity breaking in the same year.",
      ],
      more: { href: "/history/banks-paper/john-law", title: "John Law and the Mississippi Bubble" },
    },
  ),
  person(
    "adam-smith",
    {
      alt: "Profile etching of Adam Smith in a wig and coat.",
      caption: "Adam Smith, profile etching after the 1787 Tassie medallion.",
      credit: "Public domain.",
      width: 900,
      height: 1342,
    },
    {
      name: "Adam Smith",
      life: "1723–1790",
      role: "Economist",
      summary:
        "In 1776 he still described gold and silver as the money trade had selected, and the Bank of Amsterdam as a bank that took coin and did not lend.",
      paragraphs: [
        "The Wealth of Nations was published on 9 March 1776. On this site that book is the contemporary description of gold and silver as money the trade had already chosen. It is not a trading plan.",
        "Smith could still describe the Bank of Amsterdam, in that same year, as a place that took in coin and did not lend. Later books showed the reputation running ahead of the vault. That gap is the Amsterdam article, not a view on what to hold.",
      ],
      more: { href: "/history/banks-paper/bank-of-amsterdam", title: "Bank of Amsterdam" },
    },
  ),
  person(
    "alexander-hamilton",
    {
      alt: "Portrait of Alexander Hamilton in a dark coat and white cravat.",
      caption: "Alexander Hamilton, by John Trumbull (1806).",
      credit: "Public domain.",
      width: 900,
      height: 1066,
    },
    {
      name: "Alexander Hamilton",
      life: "1755–1804",
      role: "Treasury secretary",
      summary:
        "His 1791 mint report argued for a bimetallic dollar. The Coinage Act of 1792 wrote that into statute.",
      paragraphs: [
        "Hamilton’s Report on the Establishment of a Mint (1791) argued for a dollar in both gold and silver, at a ratio close to market practice. Congress wrote that into the Coinage Act of 1792: two metals, one legal unit, a fixed mint ratio.",
        "The law could fix the ratio. The market did not have to keep it. When world prices drifted, the cheaper metal stayed in the till and the other left. This page is that report and that Act, not a brief for either metal.",
      ],
      more: { href: "/history/america/early-us-coinage", title: "Early U.S. coinage" },
    },
  ),
  person(
    "andrew-jackson",
    {
      alt: "Portrait of Andrew Jackson, white-haired, in a dark coat.",
      caption:
        "Andrew Jackson, by Thomas Sully (1845), printed as the [Andrew Jackson Portrait Poster](https://shop.goldsilverhq.com/products/andrew-jackson-portrait-poster-2?variant=6de14e5e-3ae8-4673-aea7-00e521c9c76f).",
      credit: "CC0 — National Gallery of Art, Washington (1942.8.34).",
      width: 900,
      height: 1072,
    },
    {
      name: "Andrew Jackson",
      life: "1767–1845",
      role: "President",
      summary: "In 1832 he vetoed a new charter for the Second Bank of the United States.",
      paragraphs: [
        "Congress sent Andrew Jackson a bill to recharter the Second Bank years before the charter expired. He vetoed it. The veto message attacked the Bank as unconstitutional privilege. The campaign that autumn made the Bank the issue. He won.",
        "There was no Federal Reserve. That statute is 1913. This is an earlier fight over who held the government’s balances and who issued the country’s paper.",
      ],
      more: { href: "/history/america/jackson-and-the-bank", title: "Jackson and the Bank" },
    },
  ),
  person(
    "woodrow-wilson",
    {
      alt: "Photograph of Woodrow Wilson in a suit and tie, December 1912.",
      caption: "Woodrow Wilson as president-elect, 2 December 1912.",
      credit: "Public domain — Library of Congress (cph.3a04218).",
      width: 900,
      height: 1096,
    },
    {
      name: "Woodrow Wilson",
      life: "1856–1924",
      role: "President",
      summary: "On 23 December 1913 he signed the Federal Reserve Act.",
      paragraphs: [
        "The Act created regional Federal Reserve Banks and a federal board. Member banks could discount commercial paper and receive Reserve notes. The public brief was elastic currency and a lender of last resort, so a scramble like 1907 would not depend on one private rescue.",
        "The signature is the statute of **23 December 1913**. Gold convertibility would fail in war the next year; that is a separate break.",
      ],
      more: { href: "/history/20th-century/panic-1907-fed", title: "Panic of 1907 and the Fed" },
    },
  ),
  person(
    "ludwig-von-mises",
    {
      alt: "Austrian four-ducat gold piece of Franz Joseph I, dated 1888.",
      caption: "Austrian four-ducat gold piece, Franz Joseph I, 1888. Not a portrait of Mises.",
      credit: "CC0 — Metropolitan Museum of Art Open Access.",
      width: 900,
      height: 904,
    },
    {
      name: "Ludwig von Mises",
      life: "1881–1973",
      role: "Economist",
      summary:
        "He argued that a gold standard restrained the issuer. This page reports the argument. It does not adopt it.",
      paragraphs: [
        "Ludwig von Mises set the argument out in Theorie des Geldes und der Umlaufsmittel (1912), later in English as The Theory of Money and Credit. He argued that a money’s purchasing power is inherited from its earlier use as a commodity, not granted by the issuer’s word.",
        "He treated a gold coin standard as a limit on governments and banks that issue claims beyond the metal. Human Action (1949) restated that case after he had left Europe. Describing the argument is not a recommendation to hold metal, and it is not a forecast.",
      ],
      more: { href: "/sound-money/what-is-sound-money", title: "What is sound money?" },
    },
  ),
];

const BY_SLUG = new Map(HISTORY_PEOPLE.map((row) => [row.slug, row]));

export function historyPersonPaths(): string[] {
  return HISTORY_PEOPLE.map((row) => `/history/vip/${row.slug}`);
}

/** `/history/vip/ludwig-von-mises` — kebab-case slug, not `person_a`. */
export function getHistoryPerson(slug: string): HistoryPerson | undefined {
  return BY_SLUG.get(slug);
}

export function adjacentHistoryPeople(slug: string): {
  prev?: HistoryPerson;
  next?: HistoryPerson;
} {
  const i = HISTORY_PEOPLE.findIndex((row) => row.slug === slug);
  if (i < 0) return {};
  return {
    prev: i > 0 ? HISTORY_PEOPLE[i - 1] : undefined,
    next: i < HISTORY_PEOPLE.length - 1 ? HISTORY_PEOPLE[i + 1] : undefined,
  };
}
