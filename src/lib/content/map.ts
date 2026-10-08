import {
  americaHubBody,
  ancientHubBody,
  banksPaperHubBody,
  silverHubBody,
  twentiethCenturyHubBody,
  type Section,
} from "./bodies.ts";

export type Episode = {
  slug: string;
  title: string;
  summary: string;
  status: "ready" | "skeleton";
  paragraphs: string[];
  related: { title: string; href: string }[];
  /** Flavio pass: label the page after the map exists. Does not create pages. */
  seo?: {
    primary: string;
    secondary: string[];
    demand: "low" | "mid" | "high";
    difficulty: "low" | "mid" | "high";
    intent: "history" | "definition" | "practical" | "markets";
    titleTag?: string;
  };
};

export type Cluster = {
  slug: string;
  title: string;
  summary: string;
  intro?: string[];
  /** Optional Section[] body, same shape as episode pages. */
  sections?: Section[];
  related?: { title: string; href: string }[];
  seo?: {
    titleTag?: string;
  };
  episodes: Episode[];
};

/** Pillar hub /history — search title and related; body lives in historyHubBody. */
export const historyHub = {
  titleTag: "Sound Money History: From Coinage to 1971",
  related: [
    { title: "20th-century money", href: "/history/20th-century" },
    { title: "Sound money", href: "/sound-money/what-is-sound-money" },
    { title: "Gold & silver markets — current figures", href: "/markets" },
  ],
};

/** Pillar hub /sound-money — search title and related; body lives in soundMoneyHubBody. */
export const soundMoneyHub = {
  titleTag: "Sound Money: Hard, Fiat, Backed",
  related: [
    { title: "Sound money", href: "/sound-money/what-is-sound-money" },
    { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
    { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
    { title: "Backed money", href: "/sound-money/backed-money" },
    { title: "Sound Money History", href: "/history" },
  ],
};

/** Pillar hub /gold-silver — search title and related; body lives in practiceHubBody. */
export const practiceHub = {
  titleTag: "Gold & Silver in Practice: Form, Premium, Custody",
  related: [
    { title: "Sound Money", href: "/sound-money" },
    { title: "Why markets chose gold and silver", href: "/history/ancient/why-markets-chose-gold-silver" },
  ],
};

/** Pillar hub /markets — search title and related; body lives in marketsHubBody. */
export const marketsHub = {
  titleTag: "Gold & Silver Markets: Book Value, Reserves, Ratio",
  related: [
    { title: "Official gold book value", href: "/markets/official-gold-book-value" },
    { title: "Central-bank gold reserves", href: "/markets/central-bank-gold-reserves" },
    { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
    { title: "Physical silver demand by country", href: "/markets/physical-silver-demand-by-country" },
    { title: "Sound Money History", href: "/history" },
  ],
};

export type Pillar = {
  id: "sound-money" | "history" | "gold-silver" | "markets";
  path: string;
  title: string;
  kicker: string;
  question: string;
  summary: string;
};

export const pillars: Pillar[] = [
  {
    id: "sound-money",
    path: "/sound-money",
    title: "Sound Money",
    kicker: "The idea",
    question: "What does sound money mean?",
    summary:
      "Hard money versus fiat, purchasing power, and what “backed” does and does not mean.",
  },
  {
    id: "history",
    path: "/history",
    title: "Sound Money History",
    kicker: "What happened",
    question: "What happened?",
    summary:
      "From ancient coinage to 1971: Weimar, the Fed, and the Nixon shock among the dated cases.",
  },
  {
    id: "gold-silver",
    path: "/gold-silver",
    title: "Gold & Silver in Practice",
    kicker: "How to handle metal",
    question: "How do I handle metal?",
    summary:
      "Bars versus coins, premiums, storage, fakes at a high level, and a first-ounces checklist.",
  },
  {
    id: "markets",
    path: "/markets",
    title: "Gold & Silver Markets",
    kicker: "Current figures",
    question: "What do the current figures say?",
    summary:
      "Official book value, central-bank gold, the gold–silver ratio, and physical silver demand by country.",
  },
];

export const ideaPages: Episode[] = [
  {
    slug: "what-is-sound-money",
    title: "Sound money",
    summary: "Mining an ounce is slow and costly. For centuries that was the limit on the supply.",
    status: "ready",
    paragraphs: [
      "Sound money is money whose supply cannot be expanded at will by a political authority. Historically that constraint came from the cost of mining gold and silver. The point of the idea is not nostalgia. It is about whether the unit of account stays honest over long periods.",
      "Hard money versus fiat, inflation and purchasing power, and what “backed” actually means follow from that one test.",
    ],
    related: [
      { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
      { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
      { title: "Backed money", href: "/sound-money/backed-money" },
      { title: "Nixon shock 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
      { title: "Sound Money History", href: "/history" },
    ],
    seo: {
      primary: "what is sound money",
      secondary: ["sound money meaning", "hard money definition", "sound money vs fiat"],
      demand: "low",
      difficulty: "high",
      intent: "definition",
      titleTag: "Sound Money: The Issuer Cannot Create More at Will",
    },
  },
  {
    slug: "hard-money-vs-fiat",
    title: "Hard money vs fiat",
    summary: "Gold takes work to mine. Fiat money exists because the law says so. Both can circulate, and both can be mismanaged.",
    status: "ready",
    paragraphs: [
      "Hard money is costly to produce. Fiat money is a claim created by a state or bank, accepted because of law and habit. Both can circulate. They fail in different ways.",
    ],
    related: [
      { title: "Sound money", href: "/sound-money/what-is-sound-money" },
      { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
      { title: "Backed money", href: "/sound-money/backed-money" },
      { title: "Gold–silver ratio (mining vs market)", href: "/markets/gold-silver-ratio" },
      { title: "LTCM 1998 consortium", href: "/blog/ltcm-1998-consortium" },
      { title: "Sound Money History", href: "/history" },
    ],
    seo: {
      primary: "hard money vs fiat",
      secondary: ["what is fiat money", "what is hard money", "fiat currency meaning"],
      demand: "mid",
      difficulty: "high",
      intent: "definition",
      titleTag: "Hard Money vs Fiat: Costly Production vs Law and Habit",
    },
  },
  {
    slug: "inflation-purchasing-power",
    title: "Inflation and purchasing power",
    summary: "Prices are the surface. A rise of 50% in a month is the extreme, not the ordinary case.",
    status: "ready",
    paragraphs: [
      "Inflation is a decline in purchasing power of the unit. Prices are the visible surface. The underlying question is whether the stock of money is growing faster than the goods and claims it is asked to measure.",
    ],
    related: [
      { title: "Sound money", href: "/sound-money/what-is-sound-money" },
      { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
      { title: "Weimar hyperinflation", href: "/history/20th-century/weimar-1923" },
      { title: "Weimar purchasing-power note", href: "/blog/weimar-purchasing-power-note" },
      { title: "Sweden leaves gold, 1931", href: "/blog/sweden-1931-left-gold" },
      { title: "Mises and inflation as policy", href: "/blog/mises-inflation-as-policy" },
      { title: "Nixon shock 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
      { title: "Assignats", href: "/history/banks-paper/assignats" },
    ],
    seo: {
      primary: "inflation and purchasing power",
      secondary: ["what is inflation", "purchasing power of money", "inflation vs hyperinflation"],
      demand: "high",
      difficulty: "high",
      intent: "definition",
      titleTag: "Inflation and Purchasing Power: Prices as Surface",
    },
  },
  {
    slug: "backed-money",
    title: "Backed money",
    summary: "A note you can exchange for a set weight of metal is a contract. Gold in a vault nobody can claim is not.",
    status: "ready",
    paragraphs: [
      "“Backed” is used loosely. A note that is legally redeemable in a defined weight of metal is one thing. A currency said to be “supported by” gold sitting in a vault with no public claim on it is another.",
    ],
    related: [
      { title: "Sound money", href: "/sound-money/what-is-sound-money" },
      { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
      { title: "1933 U.S. gold recall", href: "/history/20th-century/1933-gold-recall" },
      { title: "Nixon shock 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
    ],
    seo: {
      primary: "what does backed by gold mean",
      secondary: ["gold backed currency", "redeemable currency", "gold reserves vs convertibility"],
      demand: "mid",
      difficulty: "mid",
      intent: "definition",
      titleTag: "Backed Money: Contract or Slogan",
    },
  },
  {
    slug: "information-not-advice",
    title: "Information vs investment advice",
    summary: "GoldSilverHQ publishes history and explanation. Nothing here recommends buying or selling anything.",
    status: "ready",
    paragraphs: [
      "GoldSilverHQ publishes educational media about monetary history and physical metal. Nothing here is investment advice, a solicitation, or a personal recommendation.",
      "Markets move. Laws differ by country. If you act, you do so on your own judgment and, where needed, with a licensed adviser in your jurisdiction.",
    ],
    related: [{ title: "Gold & silver in practice", href: "/gold-silver" }],
  },
];
export const historyClusters: Cluster[] = [
  {
    slug: "ancient",
    title: "Ancient money & coinage",
    summary:
      "Markets chose gold and silver for tradeability. Coinage from Lydia through Greece to Rome is metal first, stamp second — not a story that starts in 1971.",
    sections: ancientHubBody,
    related: [
      { title: "Sound Money History", href: "/history" },
      { title: "Banks & paper money", href: "/history/banks-paper" },
    ],
    seo: {
      titleTag: "Ancient Money and Coinage: Metal First, Stamp Second",
    },
    episodes: [
      {
        slug: "why-markets-chose-gold-silver",
        title: "Why markets chose gold and silver",
        summary:
          "Traders settled large debts in silver by weight long before anyone struck a coin, because the metal survived what cattle, grain, and shells could not.",
        status: "ready",
        paragraphs: [
          "Before states stamped coins, traders already settled in gold and silver by weight. The selection was a trade result, not a decree, and coinage came later as a cheaper way to check the metal. The metal came first. The stamp came second.",
        ],
        related: [
          { title: "Ancient money", href: "/history/ancient" },
          { title: "Lydia and the first coins", href: "/history/ancient/lydia-first-coins" },
        ],
        seo: {
          primary: "why gold and silver used as money",
          secondary: ["properties of gold as money", "why is gold money", "commodity money metals"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
          titleTag: "Why Markets Chose Gold and Silver: Metal First, Mint Later",
        },
      },
      {
        slug: "lydia-first-coins",
        title: "Lydia and the first coins",
        summary:
          "In Lydia, in the seventh and sixth centuries BCE, a punch on electrum let a buyer trust a king’s mark instead of arguing over every grain at the scale.",
        status: "ready",
        paragraphs: [
          "Lydia is the conventional starting point for struck coinage because a stamp cut the cost of checking electrum. The ore was already money. The mark was the new thing.",
        ],
        related: [
          { title: "Why markets chose gold and silver", href: "/history/ancient/why-markets-chose-gold-silver" },
          { title: "Greece: silver and trade", href: "/history/ancient/greece-silver-trade" },
        ],
        seo: {
          primary: "first coins lydia",
          secondary: ["croesus coins", "electrum coins", "invention of coinage"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "Lydia and the First Coins: Electrum, Stamp, Verification",
        },
      },
      {
        slug: "greece-silver-trade",
        title: "Greece: silver and trade",
        summary: "Laurion, Attic owls, silver as the language of the Mediterranean.",
        status: "ready",
        paragraphs: [
          "Greek city-states turned silver mining and coinage into a commercial network. The tetradrachm is the familiar face of that system.",
        ],
        related: [
          { title: "Lydia and the first coins", href: "/history/ancient/lydia-first-coins" },
          { title: "Rome: denarius and aureus", href: "/history/ancient/rome-denarius-aureus" },
          { title: "Potosí", href: "/history/silver/potosi" },
        ],
        seo: {
          primary: "athenian owl tetradrachm",
          secondary: ["laurion silver mines", "greek silver coins", "attic tetradrachm"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "Greece: Laurion Silver and the Attic Owl",
        },
      },
      {
        slug: "rome-denarius-aureus",
        title: "Rome: denarius, aureus, slow debasement",
        summary:
          "By the third century, a coin that still passed as silver could be bronze under a wash. The denarius was thinned over generations. Trust in a large payment moved toward the aureus.",
        status: "ready",
        paragraphs: [
          "By the worst years of the third century, many coins that still passed as silver were bronze under a wash. Rome paid large sums in the gold aureus and everyday sums in the silver denarius. The silver piece was the one the mint lightened.",
        ],
        related: [
          { title: "Greece: silver and trade", href: "/history/ancient/greece-silver-trade" },
          { title: "The solidus", href: "/history/ancient/solidus-continuity" },
        ],
        seo: {
          primary: "roman denarius debasement",
          secondary: ["aureus coin", "roman inflation coinage", "antoninianus"],
          demand: "mid",
          difficulty: "low",
          intent: "history",
          titleTag: "Rome: Denarius, Aureus, and Slow Debasement",
        },
      },
      {
        slug: "solidus-continuity",
        title: "Constantine’s solidus: gold that kept its weight",
        summary:
          "In the early fourth century Constantine’s mints settled on a gold coin of about 4.5 grams, and that weight outlasted the western empire as Byzantium’s nomisma.",
        status: "ready",
        paragraphs: [
          "Constantine’s solidus, about 1/72 of a Roman pound, became the gold piece strangers would still trust after silver had been washed thin. It lived on in Constantinople as the nomisma because the weight stayed put.",
        ],
        related: [
          { title: "Rome: denarius and aureus", href: "/history/ancient/rome-denarius-aureus" },
          { title: "Ancient money hub", href: "/history/ancient" },
          { title: "Warehouses to public banks", href: "/history/banks-paper/warehouses-to-public-banks" },
        ],
        seo: {
          primary: "solidus coin",
          secondary: ["byzantine nomisma", "constantine solidus", "besant gold"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "Constantine’s Solidus: Gold that Kept Its Weight",
        },
      },
    ],
  },
  {
    slug: "banks-paper",
    title: "Banks & paper money",
    summary:
      "Paper money begins as a metal warehouse receipt. This chapter follows that claim-check until bank and state notes are no longer warehouse claims.",
    sections: banksPaperHubBody,
    related: [
      { title: "Sound Money History", href: "/history" },
      { title: "John Law and the Mississippi Bubble (1720)", href: "/history/banks-paper/john-law" },
    ],
    seo: {
      titleTag: "Banks and Paper Money: From Warehouse Receipts to Notes",
    },
    episodes: [
      {
        slug: "warehouses-to-public-banks",
        title: "From warehouses to public banks",
        summary:
          "In 1640 Charles I seized merchants’ bullion in the Tower because the Crown needed cash for war, and afterward London settled debts with goldsmith notes while the metal stayed put.",
        status: "ready",
        paragraphs: [
          "In 1640 Charles I seized merchants’ bullion stored in the Tower mint because the Crown needed cash for war, and depositors learned that a sovereign can close the window. After the Restoration, goldsmith running-cash notes could pay a debt while the metal stayed in the vault.",
        ],
        related: [
          { title: "Banks & paper hub", href: "/history/banks-paper" },
          { title: "Bank of Amsterdam", href: "/history/banks-paper/bank-of-amsterdam" },
          { title: "John Law and the Mississippi Bubble", href: "/history/banks-paper/john-law" },
        ],
        seo: {
          primary: "origin of paper money",
          secondary: ["goldsmith receipts", "warehouse receipt banking", "history of bank notes"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "From Warehouses to Public Banks",
        },
      },
      {
        slug: "bank-of-amsterdam",
        title: "Bank of Amsterdam",
        summary:
          "Amsterdam’s Wisselbank (1609) took mixed coin and credited a standard bank guilder merchants could transfer on the city’s books (giro). That bank money usually traded at a premium — the agio — over worn street coin.",
        status: "ready",
        paragraphs: [
          "The Bank of Amsterdam is the model public deposit bank: mixed coin in, bank money out, bills settled by book entry (giro). Concealed lending later broke the reputation that a florin banco was only a claim on metal.",
        ],
        related: [
          { title: "Banks & paper hub", href: "/history/banks-paper" },
          { title: "Warehouses to public banks", href: "/history/banks-paper/warehouses-to-public-banks" },
          { title: "Bank of England", href: "/history/banks-paper/bank-of-england" },
        ],
        seo: {
          primary: "bank of amsterdam",
          secondary: ["wisselbank", "amsterdam wisselbank", "bank money guilder"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "The Bank of Amsterdam (Wisselbank, 1609)",
        },
      },
      {
        slug: "bank-of-england",
        title: "Bank of England",
        summary:
          "In February 1797 the Bank stopped paying gold for notes that had begun in 1694 as a war loan of about £1.2 million to the Crown, and the pound kept its name until full gold payout returned in 1821.",
        status: "ready",
        paragraphs: [
          "In February 1797 the Bank stopped paying gold for its notes, so holders could no longer test the pound in coin, though the paper stayed in use until full gold payout returned in 1821. Those notes had begun in 1694, when a private corporation was chartered to lend about £1.2 million to the Crown, and over the eighteenth century they became the ordinary paper of London.",
        ],
        related: [
          { title: "Banks & paper hub", href: "/history/banks-paper" },
          { title: "Bank of Amsterdam", href: "/history/banks-paper/bank-of-amsterdam" },
          { title: "John Law and the Mississippi Bubble", href: "/history/banks-paper/john-law" },
        ],
        seo: {
          primary: "bank of england founding",
          secondary: ["bank of england 1694", "bank restriction 1797", "history of the bank of england"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
          titleTag: "The Bank of England (1694)",
        },
      },
      {
        slug: "john-law",
        title: "John Law and the Mississippi Bubble",
        summary:
          "How John Law’s bank and Mississippi Company turned paper credit into a 1720 collapse — an early case of notes without a trusted stop.",
        status: "ready",
        paragraphs: [
          "John Law’s System in France fused a note-issuing bank with a rising colonial trading company. In 1719–1720 paper notes and Mississippi Company shares inflated together. The bust of 1720 was a paper-and-shares collapse under a regency seeking relief from war debt.",
        ],
        related: [
          { title: "Banks & paper hub", href: "/history/banks-paper" },
          { title: "Assignats", href: "/history/banks-paper/assignats" },
        ],
        seo: {
          primary: "john law mississippi bubble",
          secondary: ["john law economist", "mississippi company 1720", "john law paper money"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "John Law and the Mississippi Company (1720)",
        },
      },
      {
        slug: "assignats",
        title: "Assignats",
        summary:
          "Revolutionary France paid with assignats — paper tied to seized church and émigré land — then issued more than land sales could retire. By 1795–96 the unit was dead.",
        status: "ready",
        paragraphs: [
          "Assignats began as paper tied to confiscated church and émigré lands, the biens nationaux. The land was real. Quantity rose faster than retirement. By 1795–96 shops still held the slips, but coin had taken the unit’s job. France returned toward metal by abandoning the paper, not by redeeming it later at an old metal definition.",
        ],
        related: [
          { title: "Banks & paper hub", href: "/history/banks-paper" },
          { title: "John Law and the Mississippi Bubble", href: "/history/banks-paper/john-law" },
          { title: "Bank of England", href: "/history/banks-paper/bank-of-england" },
          { title: "Weimar hyperinflation", href: "/history/20th-century/weimar-1923" },
          { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
        ],
        seo: {
          primary: "assignats",
          secondary: ["french assignats", "assignat hyperinflation", "biens nationaux paper money"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "French Assignats (1789–1796)",
        },
      },
    ],
  },
  {
    slug: "america",
    title: "America & gold/silver politics",
    summary:
      "Two-metal dollar law, Civil War paper, and the silver fight — from the 1792 mint ratio to the Gold Standard Act of 1900.",
    sections: americaHubBody,
    related: [
      { title: "Sound Money History", href: "/history" },
      { title: "Panic of 1907 and the Fed", href: "/history/20th-century/panic-1907-fed" },
      { title: "20th-century money", href: "/history/20th-century" },
      { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
    ],
    seo: {
      titleTag: "America & Gold/Silver Politics: 1792 to 1900",
    },
    episodes: [
      {
        slug: "early-us-coinage",
        title: "Early U.S. coinage / bimetallism",
        summary:
          "On 2 April 1792 Congress fixed gold and silver at fifteen to one, and the world price, not the statute, decided which metal stayed in the till.",
        status: "ready",
        paragraphs: [
          "On 2 April 1792 Congress recognized both gold and silver at fifteen to one. When world prices drifted, the metal the Mint overvalued stayed in the till and the other left.",
        ],
        related: [
          { title: "Bimetallism", href: "/history/silver/bimetallism" },
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Piece of eight", href: "/history/silver/piece-of-eight" },
        ],
        seo: {
          primary: "coinage act of 1792",
          secondary: ["us bimetallism", "hamilton mint ratio", "early us gold silver coins"],
          demand: "low",
          difficulty: "low",
          intent: "history",
        },
      },
      {
        slug: "jackson-and-the-bank",
        title: "Jackson and the Bank",
        summary:
          "Jackson’s 1832 veto refused a new charter for the Second Bank, which held the Treasury’s cash and issued notes decades before any Federal Reserve.",
        status: "ready",
        paragraphs: [
          "The Second Bank held the Treasury’s cash and issued notes the public passed, and Jackson’s 1832 veto refused to renew that privilege. Pet banks and the Panic of 1837 followed; the Federal Reserve came after a later panic.",
        ],
        related: [
          { title: "America hub", href: "/history/america" },
          { title: "Greenbacks and the Civil War", href: "/history/america/greenbacks-civil-war" },
          { title: "Panic of 1907 and the Fed", href: "/history/20th-century/panic-1907-fed" },
        ],
        seo: {
          primary: "jackson bank war",
          secondary: ["second bank of the united states", "jackson veto 1832", "pet banks"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
        },
      },
      {
        slug: "greenbacks-civil-war",
        title: "Greenbacks and the Civil War",
        summary:
          "In February 1862 Congress made greenbacks legal tender for a war the banks had already stopped paying in gold, and New York priced that paper against coin until 1879.",
        status: "ready",
        paragraphs: [
          "Greenbacks financed the Union after banks suspended specie at the end of 1861. They suspended the metallic dollar for the war, and the fight after Appomattox was whether and when gold payments would return.",
        ],
        related: [
          { title: "Jackson and the Bank", href: "/history/america/jackson-and-the-bank" },
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Inflation (the idea)", href: "/sound-money/inflation-purchasing-power" },
          {
            title: "When the government became the only printer",
            href: "/blog/government-only-money-printer-1877",
          },
        ],
        seo: {
          primary: "greenbacks civil war",
          secondary: ["united states notes 1862", "legal tender act", "greenback gold premium"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
        },
      },
      {
        slug: "crime-of-1873",
        title: "The Crime of 1873 and the silver question",
        summary:
          "On 12 February 1873 Congress left the standard silver dollar off the Mint’s free-coinage list, and a generation later that omission was called the Crime of 1873.",
        status: "ready",
        paragraphs: [
          "The Coinage Act of 1873 dropped free coinage of the standard silver dollar, so gold became the large unit of the dollar. Agrarian politics later named the omission the Crime of 1873.",
        ],
        related: [
          { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
          { title: "Bimetallism", href: "/history/silver/bimetallism" },
          { title: "Road back toward gold", href: "/history/america/road-back-gold" },
        ],
        seo: {
          primary: "crime of 1873",
          secondary: ["coinage act of 1873", "free silver", "william jennings bryan gold"],
          demand: "mid",
          difficulty: "low",
          intent: "history",
        },
      },
      {
        slug: "road-back-gold",
        title: "The road back toward the gold standard",
        summary:
          "On the morning of 1 January 1879 a greenback could be paid in gold at face again, and the Gold Standard Act of 1900 wrote the dollar as 25.8 grains.",
        status: "ready",
        paragraphs: [
          "On 1 January 1879 paper and gold met at par, twenty-one years after the Union had flooded the country with legal-tender notes. Silver purchases, the panic of 1893, and Bryan’s 1896 campaign tested the reserve before the 1900 statute named the dollar in gold.",
        ],
        related: [
          { title: "Greenbacks and the Civil War", href: "/history/america/greenbacks-civil-war" },
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Panic of 1907 and the Fed", href: "/history/20th-century/panic-1907-fed" },
        ],
        seo: {
          primary: "gold standard act 1900",
          secondary: ["specie resumption 1879", "us gold standard 1900", "resumption act 1875"],
          demand: "low",
          difficulty: "low",
          intent: "history",
        },
      },
    ],
  },
  {
    slug: "20th-century",
    title: "20th-century money",
    summary:
      "From the Panic of 1907 and the Fed, through Weimar hyperinflation, to the Nixon shock that closed the gold window.",
    sections: twentiethCenturyHubBody,
    related: [
      { title: "Sound Money History", href: "/history" },
      { title: "Panic of 1907 and the Fed", href: "/history/20th-century/panic-1907-fed" },
      { title: "Weimar hyperinflation (1923)", href: "/history/20th-century/weimar-1923" },
    ],
    seo: {
      titleTag: "20th Century Gold: Fed, Weimar, Nixon 1971",
    },
    episodes: [
      {
        slug: "panic-1907-fed",
        title: "Panic of 1907 and the birth of the Fed",
        summary:
          "On 22 October 1907 the Knickerbocker Trust ran out of cash on Fifth Avenue, and Congress created the Federal Reserve in 1913 because no public bank had been there to lend.",
        status: "ready",
        paragraphs: [
          "On 22 October 1907 depositors lined up at the Knickerbocker Trust until the till failed, call money spiked, and the Exchange nearly shut. Morgan’s group improvised a last resort because no public central bank existed, and Congress created the Fed in 1913.",
        ],
        related: [
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
          { title: "Jackson and the Bank", href: "/history/america/jackson-and-the-bank" },
          { title: "Road back toward gold", href: "/history/america/road-back-gold" },
          { title: "LTCM 1998 consortium", href: "/blog/ltcm-1998-consortium" },
          { title: "20th-century money", href: "/history/20th-century" },
        ],
        seo: {
          primary: "panic of 1907",
          secondary: [
            "panic of 1907 federal reserve",
            "knickerbocker crisis",
            "why was the federal reserve created",
          ],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
          titleTag: "Panic of 1907 and the Birth of the Fed",
        },
      },
      {
        slug: "classical-gold-standard-end",
        title: "Classical gold standard and its wartime end",
        summary:
          "In the first days of August 1914 the peacetime gold window closed across Europe, and convertibility, gold shipment, and London settlement did not return with the peace.",
        status: "ready",
        paragraphs: [
          "Before 1914 a holder could still turn a major currency into gold, and gold moved when the exchange rate reached the cost of shipping it. The First World War closed that window. Later “returns to gold” reused the word and not the machine.",
        ],
        related: [
          { title: "1933 U.S. gold recall (Executive Order 6102)", href: "/history/20th-century/1933-gold-recall" },
          { title: "Nixon shock 1971: the gold window closes", href: "/history/20th-century/bretton-woods-nixon-1971" },
        ],
        seo: {
          primary: "classical gold standard",
          secondary: [
            "gold standard world war 1",
            "end of the gold standard 1914",
            "gold points",
            "gold exchange standard genoa",
            "currency and bank notes act 1914",
          ],
          demand: "mid",
          difficulty: "high",
          intent: "history",
          titleTag: "Classical Gold Standard and Its End in 1914",
        },
      },
      {
        slug: "weimar-1923",
        title: "Weimar hyperinflation (1923)",
        summary:
          "In the autumn of 1923 a German mark bought less by the hour than it had that morning, until the Rentenmark of mid-November scaled the paper by a trillion.",
        status: "ready",
        paragraphs: [
          "In the autumn of 1923 wages paid at noon were spent before supper, and a dollar that had been about 4.2 marks before the war was quoted in trillions of paper marks. The Rentenmark stopped the spiral in mid-November, at one trillion paper marks to one.",
        ],
        related: [
          { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
          { title: "Weimar purchasing-power note", href: "/blog/weimar-purchasing-power-note" },
          { title: "20th-century money", href: "/history/20th-century" },
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
          { title: "Assignats", href: "/history/banks-paper/assignats" },
          { title: "Sound money", href: "/sound-money/what-is-sound-money" },
        ],
        seo: {
          primary: "weimar hyperinflation",
          secondary: [
            "weimar inflation 1923",
            "german hyperinflation 1923",
            "what caused weimar hyperinflation",
            "rentenmark",
          ],
          demand: "high",
          difficulty: "high",
          intent: "history",
          titleTag: "Weimar Hyperinflation 1923 and the Rentenmark",
        },
      },
      {
        slug: "1933-gold-recall",
        title: "1933 U.S. gold recall (Executive Order 6102)",
        summary:
          "On 5 April 1933 Roosevelt required most private monetary gold to be turned in at $20.67 an ounce, and the next year’s statute put the metal on the Treasury’s books at $35.",
        status: "ready",
        paragraphs: [
          "On 5 April 1933 most private American gold coin, bullion, and gold certificates had to be delivered at $20.67 an ounce. The Gold Reserve Act of 1934 vested title in the United States, reset the official price to $35, and left official gold a Treasury asset the public could no longer claim at a window.",
        ],
        related: [
          { title: "20th-century money", href: "/history/20th-century" },
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
          { title: "Nixon shock 1971: the gold window closes", href: "/history/20th-century/bretton-woods-nixon-1971" },
        ],
        seo: {
          primary: "executive order 6102",
          secondary: [
            "1933 gold recall",
            "gold confiscation 1933",
            "gold reserve act 1934",
            "roosevelt gold",
          ],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
          titleTag: "1933 U.S. Gold Recall: Executive Order 6102",
        },
      },
      {
        slug: "bretton-woods-nixon-1971",
        title: "Nixon shock 1971: the gold window closes",
        summary:
          "On Sunday evening, 15 August 1971, Nixon told the country that foreign governments could no longer turn dollars into gold at $35, and the window stayed shut.",
        status: "ready",
        paragraphs: [
          "On 15 August 1971 the United States suspended dollar-to-gold convertibility for foreign official holders. Official claims had already outgrown the gold that could pay them at $35 an ounce, and by 1973 the major currencies were floating.",
        ],
        related: [
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
          { title: "20th-century money", href: "/history/20th-century" },
          { title: "Official gold book value", href: "/markets/official-gold-book-value" },
          {
            title: "September 1971 and the official gold price",
            href: "/blog/september-1971-official-gold-price",
          },
          {
            title: "Greenspan’s 1966 gold essay",
            href: "/blog/greenspan-1966-print-money",
          },
          { title: "Backed money", href: "/sound-money/backed-money" },
          { title: "Sound money", href: "/sound-money/what-is-sound-money" },
        ],
        seo: {
          primary: "nixon shock 1971",
          secondary: [
            "nixon end gold standard",
            "closing the gold window",
            "bretton woods collapse",
            "when did the us leave the gold standard",
          ],
          demand: "high",
          difficulty: "high",
          intent: "history",
          titleTag: "Nixon Shock, 15 August 1971: Dollar-Gold Convertibility Ends",
        },
      },
    ],
  },
  {
    slug: "silver",
    title: "Silver in history",
    summary: "Potosí, the piece of eight, bimetallism, 1980, and silver’s dual monetary and industrial role.",
    sections: silverHubBody,
    related: [
      { title: "Sound Money History", href: "/history" },
      { title: "America & gold/silver politics", href: "/history/america" },
      { title: "Piece of eight", href: "/history/silver/piece-of-eight" },
      { title: "Silver Thursday", href: "/history/silver/silver-thursday" },
      { title: "Potosí", href: "/history/silver/potosi" },
    ],
    seo: {
      titleTag: "Silver in History: Potosí to 1980 and Industry",
    },
    episodes: [
      {
        slug: "potosi",
        title: "Potosí — the silver mountain",
        summary:
          "From the 1540s Cerro Rico poured silver into Spanish fleets and, by the Manila galleon, into Chinese payments.",
        status: "ready",
        paragraphs: [
          "From the 1540s the mountain above Potosí fed a mint, a fleet, and European payments, and the Manila galleon carried the same silver to China, where it settled trade.",
        ],
        related: [
          { title: "Piece of eight", href: "/history/silver/piece-of-eight" },
          { title: "Spanish silver as global money", href: "/blog/spanish-silver-first-global-money" },
          { title: "Silver in history", href: "/history/silver" },
          { title: "Bimetallism", href: "/history/silver/bimetallism" },
          { title: "Greece: silver and trade", href: "/history/ancient/greece-silver-trade" },
        ],
        seo: {
          primary: "potosi silver",
          secondary: ["cerro rico potosi", "spanish silver mountain", "manila galleon silver"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "Potosí: The Silver Mountain and Global Flow",
        },
      },
      {
        slug: "piece-of-eight",
        title: "Piece of eight — first global currency",
        summary:
          "For more than two centuries merchants priced cargo in the Spanish eight-real piece, and the young United States named its dollar after a coin Americans already carried.",
        status: "ready",
        paragraphs: [
          "The piece of eight, about twenty-seven grams of silver, settled trade from the Americas to East Asia, and much of the metal came from Potosí. In 1792 the United States wrote a dollar close to that weight.",
        ],
        related: [
          { title: "Potosí", href: "/history/silver/potosi" },
          { title: "Spanish silver as global money", href: "/blog/spanish-silver-first-global-money" },
          { title: "Australia’s 1813 holey dollar", href: "/blog/australia-1813-holey-dollar" },
          { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
          { title: "Bimetallism", href: "/history/silver/bimetallism" },
          { title: "Newton’s 1717 Mint report", href: "/blog/newton-1717-guinea" },
          { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
          { title: "Silver in history", href: "/history/silver" },
        ],
        seo: {
          primary: "piece of eight",
          secondary: ["spanish dollar", "eight reales", "first global currency", "what was the piece of eight"],
          demand: "mid",
          difficulty: "low",
          intent: "history",
          titleTag: "Piece of Eight: The Spanish Dollar as Global Silver",
        },
      },
      {
        slug: "bimetallism",
        title: "Bimetallism: when gold and silver shared the stage",
        summary:
          "A mint can be told to coin gold and silver at one legal ratio, and the market can still price the two metals differently the next week.",
        status: "ready",
        paragraphs: [
          "Bimetallism kept both metals in one system at a fixed mint ratio, and when the market price of gold in silver drifted, the metal the law overpaid stayed in the till.",
        ],
        related: [
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
          { title: "Piece of eight", href: "/history/silver/piece-of-eight" },
          { title: "Newton’s 1717 Mint report", href: "/blog/newton-1717-guinea" },
          { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
          { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
        ],
        seo: {
          primary: "bimetallism",
          secondary: ["gold silver ratio history", "latin monetary union", "bimetallic standard"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
          titleTag: "Bimetallism: Mint Ratio vs Market Ratio",
        },
      },
      {
        slug: "silver-thursday",
        title: "Silver Thursday / Hunt Brothers 1980",
        summary:
          "On 27 March 1980 silver futures broke after the Hunts’ concentrated position met higher margins and limits on new longs.",
        status: "ready",
        paragraphs: [
          "Through 1979 and into 1980 the Hunt brothers built an enormous position in silver bullion and futures. On 27 March 1980 the price broke after margins rose and new longs were restricted.",
        ],
        related: [
          { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
          { title: "Silver: monetary and industry", href: "/history/silver/monetary-and-industry" },
          {
            title: "When exchanges change the silver rules",
            href: "/blog/when-exchanges-change-the-silver-rules",
          },
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Bimetallism", href: "/history/silver/bimetallism" },
          { title: "Silver in history", href: "/history/silver" },
        ],
        seo: {
          primary: "silver thursday",
          secondary: ["hunt brothers silver", "silver squeeze 1980", "nelson bunker hunt silver"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
          titleTag: "Silver Thursday 1980: Hunt Squeeze and the Break",
        },
      },
      {
        slug: "monetary-and-industry",
        title: "Silver: monetary history and industry",
        summary:
          "Silver stayed money in memory — coins, bars, a hedge named with gold — while photography, electronics, and solar paste pulled ounces into factories.",
        status: "ready",
        paragraphs: [
          "A vault ounce and a paste ounce answer different questions. Silver remained money in memory while photography, then electronics, then photovoltaics took it as an industrial input.",
        ],
        related: [
          { title: "Potosí", href: "/history/silver/potosi" },
          { title: "China’s 1934 silver appeal", href: "/blog/china-1934-silver-appeal" },
          { title: "Gold bars vs coins", href: "/gold-silver/bars-vs-coins" },
          { title: "Silver hub", href: "/history/silver" },
        ],
        seo: {
          primary: "silver industrial demand",
          secondary: ["silver monetary metal", "silver photography electronics", "why silver is industrial"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
          titleTag: "Silver: Monetary Memory and Industrial Demand",
        },
      },
    ],
  },
];

export const practicePages: Episode[] = [
  {
    slug: "bars-vs-coins",
    title: "Gold bars vs coins",
    summary: "Bars usually cost less per ounce. Coins cost more and are easier to recognise.",
    status: "ready",
    paragraphs: [
      "Bars minimise fabrication cost per ounce. Coins maximise recognisability.",
    ],
    related: [
      { title: "Gold & Silver in Practice", href: "/gold-silver" },
      { title: "Premium over spot", href: "/gold-silver/premium-over-spot" },
    ],
    seo: {
      primary: "gold bars vs coins",
      secondary: ["gold coins vs bars", "should I buy gold bars or coins"],
      demand: "high",
      difficulty: "high",
      intent: "practical",
    },
  },
  {
    slug: "premium-over-spot",
    title: "Premium over spot",
    summary:
      "Spot is a reference price. The premium is the price of form, brand, mint, and liquidity.",
    status: "ready",
    paragraphs: [
      "Premium over spot is the markup of an object above a screen or LBMA reference. It prices form, brand, mint, and liquidity.",
    ],
    related: [
      { title: "Gold & Silver in Practice", href: "/gold-silver" },
      { title: "Gold bars vs coins", href: "/gold-silver/bars-vs-coins" },
    ],
    seo: {
      primary: "gold premium over spot",
      secondary: ["why is gold more than spot", "bullion premium", "gold bid ask"],
      demand: "mid",
      difficulty: "mid",
      intent: "practical",
    },
  },
  {
    slug: "storage",
    title: "Storing gold and silver",
    summary:
      "Home, an allocated vault, or an unallocated claim — different facts about access, cost, and counterparty.",
    status: "ready",
    paragraphs: [
      "Storage is access, cost, and counterparty. Home, allocated, and unallocated are different arrangements.",
    ],
    related: [
      { title: "Gold & Silver in Practice", href: "/gold-silver" },
      { title: "Gold bars vs coins", href: "/gold-silver/bars-vs-coins" },
    ],
    seo: {
      primary: "storing gold",
      secondary: ["allocated gold storage", "home storage gold", "unallocated gold"],
      demand: "mid",
      difficulty: "mid",
      intent: "practical",
    },
  },
  {
    slug: "spotting-fakes",
    title: "Spotting fake gold and silver",
    summary:
      "Weight, dimensions, and a counterparty you can still find next year. A filter for the obvious copy.",
    status: "ready",
    paragraphs: [
      "Authenticity is a filter, not a laboratory course. Counterparty and published specs come first. Weight, dimensions, edge, and stamp catch the obvious. Nothing here is a guarantee.",
    ],
    related: [
      { title: "Gold & Silver in Practice", href: "/gold-silver" },
      { title: "Storing gold and silver", href: "/gold-silver/storage" },
    ],
    seo: {
      primary: "how to spot fake gold",
      secondary: ["fake gold coins", "counterfeit bullion", "weigh gold coin"],
      demand: "high",
      difficulty: "mid",
      intent: "practical",
    },
  },
  {
    slug: "beginner-checklist",
    title: "Beginner checklist: first ounces",
    summary:
      "First ounces are four decisions: form, counterparty, storage location, and documentation.",
    status: "ready",
    paragraphs: [
      "First ounces are four decisions: form, counterparty, storage location, and documentation.",
    ],
    related: [
      { title: "Gold & Silver in Practice", href: "/gold-silver" },
      { title: "Storing gold and silver", href: "/gold-silver/storage" },
    ],
    seo: {
      primary: "how to buy gold for beginners",
      secondary: ["first gold coins", "buying physical gold checklist", "how to start buying silver"],
      demand: "high",
      difficulty: "high",
      intent: "practical",
    },
  },
  {
    slug: "buying-online",
    title: "Buying gold and silver online",
    summary:
      "A screen quote still has to become a parcel: the dealer, a price locked at the order, payment, shipping, and an invoice. A parcel that does not arrive, or arrives light, is part of that logistics.",
    status: "ready",
    paragraphs: [
      "Online buying is logistics: who the dealer is, whether the payment is final, how the parcel moves, what the invoice names, and what happens if the box never arrives or arrives light. The price on the order stays the price of that order.",
    ],
    related: [
      { title: "Gold & Silver in Practice", href: "/gold-silver" },
      { title: "Storing gold and silver", href: "/gold-silver/storage" },
    ],
    seo: {
      primary: "buying gold online",
      secondary: ["buy silver online safely", "online bullion dealer", "gold shipping insurance"],
      demand: "high",
      difficulty: "high",
      intent: "practical",
    },
  },
];

export function getCluster(slug: string) {
  return historyClusters.find((c) => c.slug === slug);
}

export function getEpisode(clusterSlug: string, episodeSlug: string) {
  return getCluster(clusterSlug)?.episodes.find((e) => e.slug === episodeSlug);
}

export function getIdea(slug: string) {
  return ideaPages.find((p) => p.slug === slug);
}

export function getPractice(slug: string) {
  return practicePages.find((p) => p.slug === slug);
}

export const marketPages: Episode[] = [
  {
    slug: "official-gold-book-value",
    title: "Why U.S. official gold is still booked at $42.22",
    summary:
      "Statutory book versus spot. The Treasury still carries official gold at $42.22 an ounce — a leftover par, not a market quote.",
    status: "ready",
    paragraphs: [
      "United States official gold is still carried on the Treasury books at $42.22 a fine troy ounce. That number is a statutory book value. It is not the London or COMEX print, and it is not a forecast.",
    ],
    related: [
      { title: "Gold & silver markets", href: "/markets" },
      { title: "Nixon shock 1971: the gold window closes", href: "/history/20th-century/bretton-woods-nixon-1971" },
      { title: "Central-bank gold reserves", href: "/markets/central-bank-gold-reserves" },
      {
        title: "Interest costs vs U.S. gold",
        href: "/blog/interest-costs-vs-us-gold",
      },
      {
        title: "Why the books still say $42.22",
        href: "/blog/us-gold-booked-at-42-22",
      },
      { title: "Backed money", href: "/sound-money/backed-money" },
    ],
    seo: {
      primary: "official gold book value 42.22",
      secondary: ["us gold official price 42.22", "treasury gold book value", "statutory gold price vs spot"],
      demand: "mid",
      difficulty: "mid",
      intent: "markets",
      titleTag: "U.S. Official Gold Book Value: Still $42.22 an Ounce",
    },
  },
  {
    slug: "central-bank-gold-reserves",
    title: "Central-bank gold reserves",
    summary:
      "How much gold central banks hold, what share of reserves that metal makes up, how the stock compares with GDP, where the bars sit, and who has bought or sold — including China’s published stock since 2000, Poland’s climb to 648 tonnes, Finance Canada’s printed Gold: 0, and the 1999–2002 UK auctions known as Brown’s Bottom.",
    status: "ready",
    paragraphs: [
      "Central banks report gold as part of official reserve assets: stocks in tonnes, shares of reserves, and dated purchases and sales.",
    ],
    related: [
      { title: "Gold & silver markets", href: "/markets" },
      { title: "Official gold book value", href: "/markets/official-gold-book-value" },
      {
        title: "Interest costs vs U.S. gold",
        href: "/blog/interest-costs-vs-us-gold",
      },
      { title: "Backed money", href: "/sound-money/backed-money" },
      { title: "Nixon shock 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
    ],
    seo: {
      primary: "central bank gold reserves",
      secondary: [
        "official gold holdings",
        "imf gold reserves",
        "china gold reserves",
        "poland central bank gold",
        "canada gold reserves",
      ],
      demand: "high",
      difficulty: "mid",
      intent: "markets",
      titleTag: "Central-Bank Gold Reserves — Holdings, Shares, and Buys",
    },
  },
  {
    slug: "gold-silver-ratio",
    title: "What the gold–silver ratio measures (and what it does not)",
    summary:
      "Gold price divided by silver price at a dated print. A snapshot, not a fair-value claim. Mine output and London vault stocks are different quotients. What a 30:1 tape meant in April 2011 is market history, not a price target.",
    status: "ready",
    paragraphs: [
      "The gold–silver ratio is one price divided by another. It records how many ounces of silver equal one ounce of gold at those two prints. It does not name a destined level.",
    ],
    related: [
      { title: "Gold & silver markets", href: "/markets" },
      { title: "Physical silver demand by country", href: "/markets/physical-silver-demand-by-country" },
      { title: "Silver: monetary and industry", href: "/history/silver/monetary-and-industry" },
      { title: "Bimetallism", href: "/history/silver/bimetallism" },
      {
        title: "What the gold–silver ratio is counting",
        href: "/blog/gold-silver-ratio-what-it-counts",
      },
      { title: "Piece of eight", href: "/history/silver/piece-of-eight" },
      { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
    ],
    seo: {
      primary: "gold silver ratio",
      secondary: ["gold to silver ratio", "gsr 1980", "gold silver ratio 2011"],
      demand: "high",
      difficulty: "mid",
      intent: "markets",
      titleTag: "Gold–Silver Ratio: Definition, Dated Prints, 2011 History",
    },
  },
  {
    slug: "physical-silver-demand-by-country",
    title: "Who buys silver bars — and where factories and workshops use the rest",
    summary:
      "In 2024 the United States still led bar-and-coin buying, with India close behind. Factory use, jewelry workshops, coin mints, and scrap tell different country stories. The World Silver Survey prints those lists separately; mixing them is how the ranking gets confused.",
    status: "ready",
    paragraphs: [
      "Country rankings of silver demand usually mean bars and coins bought in a calendar year. Jewelry made in workshops, silver used in factories, and old silver returned as scrap are different lists. None of those is a mine book.",
    ],
    related: [
      { title: "Gold & silver markets", href: "/markets" },
      { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
      { title: "Silver: monetary and industry", href: "/history/silver/monetary-and-industry" },
    ],
    seo: {
      primary: "physical silver demand by country",
      secondary: [
        "silver investment demand by country",
        "silver bars and coins by country",
        "world silver survey physical investment",
        "silver coins and medals fabrication",
        "industrial silver demand by country",
        "silver jewelry fabrication by country",
        "silver recycling by source",
      ],
      demand: "mid",
      difficulty: "mid",
      intent: "markets",
      titleTag: "Who Buys Silver Bars — and Where Factories Use the Rest",
    },
  },
];

export function getMarket(slug: string) {
  return marketPages.find((p) => p.slug === slug);
}

/** Locked nav: cluster prev/next, then related[] as extra context. Hubs and the disclaimer page are omitted — breadcrumbs and footer already cover them. */
export function continueLinks(
  episode: Episode,
  clusterSlug?: string,
): { title: string; href: string }[] {
  const items: { title: string; href: string }[] = [];
  const seen = new Set<string>();
  const add = (title: string, href: string) => {
    if (!href || seen.has(href)) return;
    seen.add(href);
    items.push({ title, href });
  };

  if (clusterSlug && getCluster(clusterSlug)) {
    const cluster = getCluster(clusterSlug)!;
    const i = cluster.episodes.findIndex((e) => e.slug === episode.slug);
    if (i > 0) {
      const prev = cluster.episodes[i - 1];
      add(`← ${prev.title}`, `/history/${cluster.slug}/${prev.slug}`);
    }
    if (i >= 0 && i < cluster.episodes.length - 1) {
      const next = cluster.episodes[i + 1];
      add(`${next.title} →`, `/history/${cluster.slug}/${next.slug}`);
    }
  } else if (clusterSlug === "sound-money") {
    const list = ideaPages.filter((p) => p.slug !== "information-not-advice");
    const i = list.findIndex((e) => e.slug === episode.slug);
    if (i > 0) add(`← ${list[i - 1].title}`, `/sound-money/${list[i - 1].slug}`);
    if (i >= 0 && i < list.length - 1) add(`${list[i + 1].title} →`, `/sound-money/${list[i + 1].slug}`);
  } else if (clusterSlug === "gold-silver") {
    const list = practicePages;
    const i = list.findIndex((e) => e.slug === episode.slug);
    if (i > 0) add(`← ${list[i - 1].title}`, `/gold-silver/${list[i - 1].slug}`);
    if (i >= 0 && i < list.length - 1) add(`${list[i + 1].title} →`, `/gold-silver/${list[i + 1].slug}`);
  } else if (clusterSlug === "markets") {
    const list = marketPages;
    const i = list.findIndex((e) => e.slug === episode.slug);
    if (i > 0) add(`← ${list[i - 1].title}`, `/markets/${list[i - 1].slug}`);
    if (i >= 0 && i < list.length - 1) add(`${list[i + 1].title} →`, `/markets/${list[i + 1].slug}`);
  }

  const skip = new Set([
    "/history",
    "/sound-money",
    "/gold-silver",
    "/sound-money/information-not-advice",
    clusterSlug ? `/history/${clusterSlug}` : "",
  ]);
  for (const r of episode.related) {
    if (skip.has(r.href)) continue;
    add(r.title, r.href);
  }
  return items.slice(0, 4);
}

export function seoTitle(page: string) {
  return `${page} — GoldSilverHQ`;
}

/** Flavio write order: long-tail episodes first, then cluster hub, then pillar. */
export const phase1WriteOrder = [
  "/history/banks-paper/john-law",
  "/history/20th-century/weimar-1923",
  "/history/20th-century/panic-1907-fed",
  "/history/20th-century/bretton-woods-nixon-1971",
  "/history/20th-century",
  "/history",
] as const;
