/**
 * Article titlebild (= on-page hero file) that also doubles as the Open Graph / X card.
 *
 * On-page layout (via `ArticleLead`): **title (+ teaser) first, then landscape
 * media under** — X Articles reading order. The whole lead (title, teaser,
 * titlebild) shares the article text column (`max-w-prose`) so the title does
 * not outrun the image or body. Do not put the image above the title
 * (feed-card style) and never ship a tall full-bleed of the whole illustration.
 *
 * Display vs share: files stay **1200×630** for OG/X. On-page, `ArticleHeroImage`
 * shows a **5:2** band (`aspect-[5/2]`, object-cover center) —
 * analog to X Article title-image, shorter than native ~1.9:1 OG. No max-height
 * strip crop (#108). Do not invent a portrait on-page format this pass.
 *
 * Convention for later articles:
 * 1. Keep the master illustration elsewhere if needed; write the **landscape**
 *    titlebild JPEG under `public/images/<pillar>/...` at OG aspect (1200×630).
 * 2. Write the **same** 1200×630 crop to the Phase-1 card path under `public/og/cards/`
 *    (same key as `ogImagePathForRoute(path)` — see `phase1-sitemap-paths.mjs`).
 * 3. Register one entry here with matching `src` + `ogSrc`, alt, caption, credit.
 * 4. Render with `ArticleLead` + `ArticleHeroImage` (5:2 inset band at prose width).
 * 5. `npm run og:cards` skips paths listed here so branded text cards do not overwrite.
 *
 * Only ship real artwork — do not invent placeholders. Prefer true PD / CC0 /
 * U.S. government / expired-copyright sources (no CC BY credit-line requirement).
 */

export type ArticleHero = {
  /** Route pathname (no trailing slash), e.g. `/history/america/jackson-and-the-bank`. */
  path: string;
  /** On-page titlebild (public URL path) — landscape / OG aspect, not a tall full plate. */
  src: string;
  /** 1200×630 share JPEG (public URL path). Usually the Phase-1 `/og/cards/*.jpg` file. */
  ogSrc: string;
  alt: string;
  /** Short caption under the hero (historical context). */
  caption?: string;
  /** Attribution / rights advisory. */
  credit?: string;
};

/** Articles that use a photographic/illustration hero as both titlebild and OG. */
export const ARTICLE_HEROES: readonly ArticleHero[] = [
  {
    path: "/history/ancient/why-markets-chose-gold-silver",
    src: "/images/history/ancient/why-markets-chose-gold-silver.jpg",
    ogSrc: "/og/cards/history-ancient-why-markets-chose-gold-silver.jpg",
    alt: "Detail of a Renaissance table strewn with gold coins, a balance scale, pearls, and an open illuminated book.",
    caption:
      "Quentin Massys, “The Moneylender and his Wife” (1514) — coined metal weighed on the table.",
    credit: "Public domain (artist died 1530). Louvre INV 1444 reproduction via Wikimedia Commons.",
  },
  {
    path: "/history/ancient/lydia-first-coins",
    src: "/images/history/ancient/lydia-first-coins.jpg",
    ogSrc: "/og/cards/history-ancient-lydia-first-coins.jpg",
    alt: "Line engraving of an early electrum stater: lion on the obverse and animal punch marks on the reverse.",
    caption:
      "Early electrum stater (line plate after Barclay V. Head) — lion type from the first-coinage world of Lydia/Ionia.",
    credit: "Public domain (19th-century numismatic plate; copyright expired).",
  },
  {
    path: "/history/ancient/greece-silver-trade",
    src: "/images/history/ancient/greece-silver-trade.jpg",
    ogSrc: "/og/cards/history-ancient-greece-silver-trade.jpg",
    alt: "Athenian silver tetradrachm: Athena’s helmeted head beside the owl reverse.",
    caption:
      "Athenian owl tetradrachm (5th century BC) — silver coinage that moved with Greek trade.",
    credit: "CC0 — Cleveland Museum of Art (Open Access), 1941.296.",
  },
  {
    path: "/history/ancient/rome-denarius-aureus",
    src: "/images/history/ancient/rome-denarius-aureus.jpg",
    ogSrc: "/og/cards/history-ancient-rome-denarius-aureus.jpg",
    alt: "Silver denarius and gold aureus standing before Roman ruins.",
    caption: "Silver denarius and gold aureus.",
  },
  {
    path: "/history/ancient/solidus-continuity",
    src: "/images/history/ancient/solidus-continuity.jpg",
    ogSrc: "/og/cards/history-ancient-solidus-continuity.jpg",
    alt: "Two late-antique gold solidi side by side: Justinian I and Constantius II.",
    caption:
      "Gold solidi of Justinian I and Constantius II — late-Roman gold coinage that the solidus continued.",
    credit: "CC0 — Metropolitan Museum of Art Open Access.",
  },
  {
    path: "/history/banks-paper/warehouses-to-public-banks",
    src: "/images/history/banks-paper/warehouses-to-public-banks.jpg",
    ogSrc: "/og/cards/history-banks-paper-warehouses-to-public-banks.jpg",
    alt: "Detail of money changers’ hands, balance scale, coins, and open ledger on a table.",
    caption:
      "Marinus van Reymerswaele, “The Moneychangers” — private deposit-and-transfer work before public banks.",
    credit: "Public domain (artist active 16th century). Hermitage reproduction via Wikimedia Commons.",
  },
  {
    path: "/history/banks-paper/bank-of-amsterdam",
    src: "/images/history/banks-paper/bank-of-amsterdam.jpg",
    ogSrc: "/og/cards/history-banks-paper-bank-of-amsterdam.jpg",
    alt: "Seventeenth-century painting of Amsterdam’s old town hall on Dam Square.",
    caption:
      "Pieter Saenredam, old Amsterdam town hall on the Dam — home of the Wisselbank (Bank of Amsterdam).",
    credit: "Public domain (artist died 1665). Rijksmuseum SK-C-1409.",
  },
  {
    path: "/history/banks-paper/bank-of-england",
    src: "/images/history/banks-paper/bank-of-england.jpg",
    ogSrc: "/og/cards/history-banks-paper-bank-of-england.jpg",
    alt: "Historical print showing the Bank of England building in London.",
    caption: "Historical view of the Bank of England, London (print).",
    credit: "CC0 — Rijksmuseum (RP-P-2010-229).",
  },
  {
    path: "/history/banks-paper/john-law",
    src: "/images/history/banks-paper/john-law.jpg",
    ogSrc: "/og/cards/history-banks-paper-john-law.jpg",
    alt: "1720 satirical print of Mississippi Company shareholders fleeing toward Vianen during the bubble collapse.",
    caption:
      "“De Malle Actionisten naar Vianen” (1720) from Het Groote Tafereel der Dwaasheid — Mississippi Bubble satire.",
    credit: "CC0 — Rijksmuseum (RP-P-OB-83.554).",
  },
  {
    path: "/history/banks-paper/assignats",
    src: "/images/history/banks-paper/assignats.jpg",
    ogSrc: "/og/cards/history-banks-paper-assignats.jpg",
    alt: "French Revolutionary assignat note for 100 livres dated 29 September 1790.",
    caption: "Assignat of 100 livres (29 September 1790) — Revolutionary France’s paper land-backed note.",
    credit: "CC0 — scanned note plate via Wikimedia Commons.",
  },
  {
    path: "/history/america/early-us-coinage",
    src: "/images/history/america/early-us-coinage.jpg",
    ogSrc: "/og/cards/history-america-early-us-coinage.jpg",
    alt: "1795 Flowing Hair silver dollar, obverse and reverse side by side.",
    caption: "Flowing Hair dollar (1795) — early United States silver coinage under the Mint Act framework.",
    credit: "Public domain — National Numismatic Collection, Smithsonian (U.S. government work).",
  },
  {
    path: "/history/america/jackson-and-the-bank",
    src: "/images/history/america/jackson-and-the-bank.jpg",
    ogSrc: "/og/cards/history-america-jackson-and-the-bank.jpg",
    alt: "Colorized 1836 political cartoon: Andrew Jackson, cane raised, facing a many-headed monster representing the Second Bank of the United States and its state branches during the Bank War.",
    caption:
      "“General Jackson Slaying the Many Headed Monster” (1836) — colorized Bank War / Second Bank veto cartoon.",
    credit:
      "Colorized reproduction of the 1836 Bank War cartoon (original: Library of Congress LC-DIG-ds-14740).",
  },
  {
    path: "/history/america/greenbacks-civil-war",
    src: "/images/history/america/greenbacks-civil-war.jpg",
    ogSrc: "/og/cards/history-america-greenbacks-civil-war.jpg",
    alt: "Face of a United States Note (two-dollar greenback) with ornate engraved portrait and green treasury seal.",
    caption: "United States Note (greenback) — Civil War–era fiat paper circulating beside specie.",
    credit: "Public domain (U.S. government currency design).",
  },
  {
    path: "/history/america/crime-of-1873",
    src: "/images/history/america/crime-of-1873.jpg",
    ogSrc: "/og/cards/history-america-crime-of-1873.jpg",
    alt: "Nineteenth-century cartoon about the U.S. trade dollar and the silver question after 1873.",
    caption: "Trade-dollar cartoon — popular memory of the 1873 coinage change and the silver question.",
    credit: "Public domain (19th-century U.S. print; copyright expired).",
  },
  {
    path: "/history/america/road-back-gold",
    src: "/images/history/america/road-back-gold.jpg",
    ogSrc: "/og/cards/history-america-road-back-gold.jpg",
    alt: "1907 Saint-Gaudens double eagle twenty-dollar gold coin, obverse and reverse.",
    caption: "Saint-Gaudens double eagle (1907) — high gold coinage of the restored gold-standard era.",
    credit: "Public domain — National Numismatic Collection, Smithsonian (U.S. government work).",
  },
  {
    path: "/history/20th-century/panic-1907-fed",
    src: "/images/history/20th-century/panic-1907-fed.jpg",
    ogSrc: "/og/cards/history-20th-century-panic-1907-fed.jpg",
    alt: "1907 Puck magazine cartoon titled “The panic,” showing Wall Street turmoil around the banking crisis.",
    caption: "“The panic” (Puck, 1907) — Keppler cartoon of the banking scramble that preceded the Fed.",
    credit: "Public domain — Library of Congress (LCCN 2011647205); no known restrictions.",
  },
  {
    path: "/history/20th-century/classical-gold-standard-end",
    src: "/images/history/20th-century/classical-gold-standard-end.jpg",
    ogSrc: "/og/cards/history-20th-century-classical-gold-standard-end.jpg",
    alt: "Gold sovereign coin minted in India, obverse and reverse side by side.",
    caption: "British gold sovereign (India mint) — emblem of the classical gold-standard coin network.",
    credit: "CC0 — open museum plate via Wikimedia Commons.",
  },
  {
    path: "/history/20th-century/weimar-1923",
    src: "/images/history/20th-century/weimar-1923.jpg",
    ogSrc: "/og/cards/history-20th-century-weimar-1923.jpg",
    alt: "Crowded Berlin bank interior during the German hyperinflation period, customers packed at teller windows.",
    caption: "“In a Berlin Bank” — customers during the German inflation crisis (Library of Congress).",
    credit: "Public domain — Library of Congress (LCCN 2014716642); no known restrictions.",
  },
  {
    path: "/history/20th-century/1933-gold-recall",
    src: "/images/history/20th-century/1933-gold-recall.jpg",
    ogSrc: "/og/cards/history-20th-century-1933-gold-recall.jpg",
    alt: "San Francisco Mint workmen standing among gold ingots and molds in the basement casting area.",
    caption: "Gold ingots at the San Francisco Mint — official gold stock in the era of U.S. gold recall.",
    credit: "Public domain — U.S. government photograph (NARA 296561).",
  },
  {
    path: "/history/20th-century/bretton-woods-nixon-1971",
    src: "/images/history/20th-century/bretton-woods-nixon-1971.jpg",
    ogSrc: "/og/cards/history-20th-century-bretton-woods-nixon-1971.jpg",
    alt: "President Richard Nixon seated at a table meeting with economic advisors and Cabinet members.",
    caption:
      "President Nixon with economic advisors — the policy circle around the 1971 gold-window decision.",
    credit: "Public domain — U.S. government photograph (NARA 194579).",
  },
  {
    path: "/history/silver/potosi",
    src: "/images/history/silver/potosi.jpg",
    ogSrc: "/og/cards/history-silver-potosi.jpg",
    alt: "1758 panorama of the Imperial Villa of Potosí with Cerro Rico rising behind the colonial city.",
    caption: "Villa Imperial de Potosí (1758 panorama) — Cerro Rico and the colonial silver city.",
    credit: "CC0 — Gaspar Miguel de Berrío panorama reproduction via Wikimedia Commons.",
  },
  {
    path: "/history/silver/piece-of-eight",
    src: "/images/history/silver/piece-of-eight.jpg",
    ogSrc: "/og/cards/history-silver-piece-of-eight.jpg",
    alt: "1771 Mexican pillar dollar of eight reales, obverse and reverse of the Spanish colonial silver coin.",
    caption: "Carlos III pillar dollar, 8 reales (Mexico, 1771) — the “piece of eight.”",
    credit: "Public domain (18th-century coin; copyright expired).",
  },
  {
    path: "/history/silver/bimetallism",
    src: "/images/history/silver/bimetallism.jpg",
    ogSrc: "/og/cards/history-silver-bimetallism.jpg",
    alt: "Puck cartoon “The free silver highwayman at it again,” satirizing Free Silver politics.",
    caption: "“The free silver highwayman at it again” (Puck) — U.S. bimetallism / Free Silver debate.",
    credit: "Public domain — Library of Congress (LCCN 2012648520); no known restrictions.",
  },
  {
    path: "/history/silver/silver-thursday",
    src: "/images/history/silver/silver-thursday.jpg",
    ogSrc: "/og/cards/history-silver-silver-thursday.jpg",
    alt: "1886 United States one-dollar silver certificate with ornate engraved portrait and silver-certificate seal.",
    caption:
      "Series 1886 $1 silver certificate — U.S. paper claim on silver, ancestor of later bullion speculation eras.",
    credit: "Public domain (U.S. government currency design).",
  },
  {
    path: "/history/silver/monetary-and-industry",
    src: "/images/history/silver/monetary-and-industry.jpg",
    ogSrc: "/og/cards/history-silver-monetary-and-industry.jpg",
    alt: "Bird’s-eye view of Leadville, Colorado, a silver-mining boomtown, circa 1880.",
    caption: "Leadville, Colorado (c. 1880) — silver mining where monetary metal met industry.",
    credit: "Public domain — Boston & Ziegler view; copyright expired.",
  },
  // Idea (Sound Money definitions)
  {
    path: "/sound-money/what-is-sound-money",
    src: "/images/sound-money/what-is-sound-money.jpg",
    ogSrc: "/og/cards/sound-money-what-is-sound-money.jpg",
    alt: "Dutch Golden Age painting of a woman weighing gold on a small balance at a sunlit table.",
    caption: "Pieter de Hooch, “Woman Weighing Gold” — testing the metal, not the slogan.",
    credit: "Public domain (artist died 1684). Gemäldegalerie, Berlin (1401B) via Wikimedia Commons.",
  },
  {
    path: "/sound-money/hard-money-vs-fiat",
    src: "/images/sound-money/hard-money-vs-fiat.jpg",
    ogSrc: "/og/cards/sound-money-hard-money-vs-fiat.jpg",
    alt: "Face of a 1928 United States ten-dollar gold certificate with gold treasury seal.",
    caption: "Series 1928 $10 gold certificate — paper that named a metal claim while convertibility still held.",
    credit: "Public domain (U.S. government currency design).",
  },
  {
    path: "/sound-money/inflation-purchasing-power",
    src: "/images/sound-money/inflation-purchasing-power.jpg",
    ogSrc: "/og/cards/sound-money-inflation-purchasing-power.jpg",
    alt: "Obverse of a 1923 German railways emergency note for five hundred billion marks.",
    caption: "German railways Notgeld, 500 billion marks (1923) — a unit that stopped holding purchasing power.",
    credit: "Public domain (1923 note; copyright expired).",
  },
  {
    path: "/sound-money/backed-money",
    src: "/images/sound-money/backed-money.jpg",
    ogSrc: "/og/cards/sound-money-backed-money.jpg",
    alt: "Stacks of gold bars stored on shelves inside a government vault.",
    caption: "Gold bars in a U.S. vault — a reserve photograph is not the same as a public redeemability claim.",
    credit: "Public domain — U.S. government photograph (NARA 296609).",
  },
  // Markets fact pages
  {
    path: "/markets/official-gold-book-value",
    src: "/images/markets/official-gold-book-value.jpg",
    ogSrc: "/og/cards/markets-official-gold-book-value.jpg",
    alt: "Face of a 1900 United States ten-thousand-dollar gold certificate.",
    caption: "Series 1900 $10,000 gold certificate — official gold dollars on paper, ancestor of today’s book rate.",
    credit: "Public domain (U.S. government currency design).",
  },
  {
    path: "/markets/central-bank-gold-reserves",
    src: "/images/markets/central-bank-gold-reserves.jpg",
    ogSrc: "/og/cards/markets-central-bank-gold-reserves.jpg",
    alt: "Exterior of the United States Bullion Depository at Fort Knox.",
    caption: "U.S. Bullion Depository, Fort Knox — one official stock among many published reserve books.",
    credit: "Public domain — U.S. government photograph.",
  },
  {
    path: "/markets/gold-silver-ratio",
    src: "/images/markets/gold-silver-ratio.jpg",
    ogSrc: "/og/cards/markets-gold-silver-ratio.jpg",
    alt: "A gold balance scale with gold coins on one pan and silver coins on the other.",
    caption: "Two metals on one beam — the ratio is still just a dated quotient of printed prices.",
    credit: "Working titlebild for GoldSilverHQ (temporary).",
  },
  {
    path: "/markets/physical-silver-demand-by-country",
    src: "/images/markets/physical-silver-demand-by-country.jpg",
    ogSrc: "/og/cards/markets-physical-silver-demand-by-country.jpg",
    alt: "Stacked silver bullion bars with stamped serial numbers and purity marks.",
    caption: "Physical silver — bars people buy, before the factory and workshop lists.",
    credit: "Working titlebild for GoldSilverHQ (temporary).",
  },
  // Blog
  {
    path: "/blog/when-exchanges-change-the-silver-rules",
    src: "/images/blog/when-exchanges-change-the-silver-rules.jpg",
    ogSrc: "/og/cards/blog-when-exchanges-change-the-silver-rules.jpg",
    alt: "Silver bars and a trading screen — title image for the 1980 exchange-rules note.",
    caption: "January 1980 — COMEX silver futures moved to liquidation-only trading.",
    credit: "Title image from the GoldSilverHQ X Article on the 1980 silver rule change.",
  },
  {
    path: "/blog/ltcm-1998-consortium",
    src: "/images/blog/ltcm-1998-consortium.jpg",
    ogSrc: "/og/cards/blog-ltcm-1998-consortium.jpg",
    alt: "Late-1990s trading floor under pressure — title image for the LTCM 1998 consortium note.",
    caption: "23 September 1998 — private capital, Fed facilitation, no public check.",
    credit: "Title image from the GoldSilverHQ X Article on the LTCM consortium.",
  },
  {
    path: "/blog/newton-1717-guinea",
    src: "/images/blog/newton-1717-guinea.jpg",
    ogSrc: "/og/cards/blog-newton-1717-guinea.jpg",
    alt: "Isaac Newton at a desk with gold and silver coins — title image for the 1717 Mint report note.",
    caption: "Newton’s Mint arithmetic, 1717 — gold priced wrong, silver leaving.",
    credit: "Title image from the GoldSilverHQ X Article on the 1717 guinea cut.",
  },
  {
    path: "/blog/gold-silver-ratio-what-it-counts",
    src: "/images/blog/gold-silver-ratio-what-it-counts.jpg",
    ogSrc: "/og/cards/blog-gold-silver-ratio-what-it-counts.jpg",
    alt: "Gold and silver coins laid side by side for comparison.",
    caption: "Two prices, one quotient — the ratio as a dated print, not a mint law.",
    credit: "CC0 — open photograph via Wikimedia Commons.",
  },
  {
    path: "/blog/weimar-purchasing-power-note",
    src: "/images/blog/weimar-purchasing-power-note.jpg",
    ogSrc: "/og/cards/blog-weimar-purchasing-power-note.jpg",
    alt: "German children playing with worthless banknotes during the 1923 hyperinflation.",
    caption: "Weimar 1923 — when the mark’s purchasing power failed by the hour.",
    credit: "Public domain (period press photograph; copyright expired).",
  },
] as const;

const byPath = new Map(ARTICLE_HEROES.map((h) => [h.path.replace(/\/+$/, "") || "/", h]));

export function articleHeroForPath(pathname: string): ArticleHero | undefined {
  const path = pathname.replace(/\/+$/, "") || "/";
  return byPath.get(path);
}

/** Paths whose `/og/cards/*.jpg` files are custom artwork — skip in `og:cards` regen. */
export function articleHeroOgOverridePaths(): string[] {
  return ARTICLE_HEROES.map((h) => h.path);
}
