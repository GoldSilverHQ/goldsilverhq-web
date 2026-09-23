/**
 * Article titlebild (= on-page hero file) that also doubles as the Open Graph / X card.
 *
 * On-page layout (via `ArticleLead`): **title (+ teaser) first, then landscape
 * media under** — X Articles reading order. Do not put the image above the title
 * (feed-card style) and never ship a tall full-bleed of the whole illustration.
 *
 * Display vs share: files stay **1200×630** for OG/X. On-page, `ArticleHeroImage`
 * keeps a landscape strip (`aspect-[1200/630]`, width 100%, **max-height** +
 * object-cover) so the photo does not eat a laptop first viewport. Do not re-export
 * assets to change reading height — CSS only.
 *
 * Convention for later articles:
 * 1. Keep the master illustration elsewhere if needed; write the **landscape**
 *    titlebild JPEG under `public/images/<pillar>/...` at OG aspect (1200×630).
 * 2. Write the **same** 1200×630 crop to the Phase-1 card path under `public/og/cards/`
 *    (same key as `ogImagePathForRoute(path)` — see `phase1-sitemap-paths.mjs`).
 * 3. Register one entry here with matching `src` + `ogSrc`, alt, caption, credit.
 * 4. Render with `ArticleLead` + `ArticleHeroImage` (landscape strip + max-height).
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
    alt: "Renaissance painting of a moneylender and his wife weighing coins and examining precious metal at a table.",
    caption:
      "Quentin Massys, “The Moneylender and his Wife” (1514) — weighing coined metal in early modern trade.",
    credit: "Public domain (artist died 1530). Louvre collection reproduction via Wikimedia Commons.",
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
    alt: "Athenian silver tetradrachm: Athena’s head on the left and the owl reverse on the right.",
    caption:
      "Athenian owl tetradrachm (5th century BC) — silver coinage that moved with Greek trade.",
    credit: "CC0 — Cleveland Museum of Art (Open Access).",
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
    alt: "Gold solidus of Byzantine emperor Justinian I, facing portrait with imperial regalia.",
    caption:
      "Gold solidus of Justinian I (6th century) — the long-lived successor to late-Roman gold coinage.",
    credit: "CC0 — Metropolitan Museum of Art Open Access.",
  },
  {
    path: "/history/banks-paper/warehouses-to-public-banks",
    src: "/images/history/banks-paper/warehouses-to-public-banks.jpg",
    ogSrc: "/og/cards/history-banks-paper-warehouses-to-public-banks.jpg",
    alt: "Painting of two money changers at a cluttered table counting and recording coins and notes.",
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
    credit: "Public domain (artist died 1665).",
  },
  {
    path: "/history/banks-paper/bank-of-england",
    src: "/images/history/banks-paper/bank-of-england.jpg",
    ogSrc: "/og/cards/history-banks-paper-bank-of-england.jpg",
    alt: "Historical print showing the Bank of England building in London.",
    caption: "Historical view of the Bank of England, London (print).",
    credit: "CC0 — Rijksmuseum (RP-P-2018-2136).",
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
    alt: "Flowing Hair silver dollar coin on a dark background.",
    caption: "Flowing Hair dollar — early United States silver coinage under the bimetallic Mint Act framework.",
    credit: "Public domain (U.S. coin design; copyright expired / government work).",
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
    alt: "First page of Executive Order 6102 ordering the recall of gold coin and bullion in 1933.",
    caption: "Executive Order 6102 (1933) — U.S. gold coin and bullion recall under FDR.",
    credit: "Public domain — U.S. government work (National Archives).",
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
    alt: "Renaissance painting of a woman weighing gold coins on a balance scale at a table.",
    caption: "Jan Sanders van Hemessen, “Woman Weighing Gold” (c. 1530) — testing the metal, not the slogan.",
    credit: "Public domain (artist died 1556). Gemäldegalerie, Berlin reproduction via Wikimedia Commons.",
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
    alt: "Gold and silver coins laid side by side for comparison.",
    caption: "Gold and silver coins together — two prices, one quotient on a named date.",
    credit: "CC0 — open photograph via Wikimedia Commons.",
  },
  {
    path: "/markets/physical-silver-demand-by-country",
    src: "/images/markets/physical-silver-demand-by-country.jpg",
    ogSrc: "/og/cards/markets-physical-silver-demand-by-country.jpg",
    alt: "Historical Chinese silver ingot (sycee) resting on a surface.",
    caption: "Ming-dynasty silver ingot (sycee) — physical silver as offtake, not a screen quote.",
    credit: "CC0 — open museum photograph via Wikimedia Commons.",
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
