import { ancientHubBody, banksPaperHubBody, twentiethCenturyHubBody, type Section } from "./bodies";

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
    { title: "20th century: Fed, gold, and 1971", href: "/history/20th-century" },
    { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
    { title: "Gold & silver markets (facts, not history)", href: "/markets" },
  ],
};

/** Pillar hub /markets — search title and related; body lives in marketsHubBody. */
export const marketsHub = {
  titleTag: "Gold & Silver Markets: Facts, Not Tips",
  related: [
    { title: "Official gold book value", href: "/markets/official-gold-book-value" },
    { title: "Central-bank gold reserves", href: "/markets/central-bank-gold-reserves" },
    { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
    { title: "Physical silver demand by country", href: "/markets/physical-silver-demand-by-country" },
    { title: "Sound Money History (narrative lives there)", href: "/history" },
  ],
};

export type Pillar = {
  id: "sound-money" | "history" | "gold-silver" | "markets";
  path: string;
  title: string;
  kicker: string;
  question: string;
  summary: string;
  sell: string;
};

export const pillars: Pillar[] = [
  {
    id: "sound-money",
    path: "/sound-money",
    title: "Sound Money",
    kicker: "Pillar 1 · The idea",
    question: "What does sound money mean?",
    summary:
      "Definitions only: hard money versus fiat, purchasing power, and what “backed” does and does not mean. History stays in its own pillar.",
    sell: "Newsletter",
  },
  {
    id: "history",
    path: "/history",
    title: "Sound Money History",
    kicker: "Pillar 2 · What happened",
    question: "What happened?",
    summary:
      "Five clusters from ancient coinage to 1971. Weimar, the Fed, and the Nixon shock live here — not in the idea pillar. Episode → cluster → this hub → ebook.",
    sell: "Ebook: A Short History of Sound Money",
  },
  {
    id: "gold-silver",
    path: "/gold-silver",
    title: "Gold & Silver in Practice",
    kicker: "Pillar 3 · How to handle metal",
    question: "How do I handle metal?",
    summary:
      "Bars versus coins, premiums, storage, fakes at a high level, and a first-ounces checklist. Neutral and educational.",
    sell: "Newsletter + partner link if a deal exists",
  },
  {
    id: "markets",
    path: "/markets",
    title: "Gold & Silver Markets",
    kicker: "Pillar 4 · Current figures",
    question: "What do the current figures say?",
    summary:
      "Official book value, central-bank gold, the gold–silver ratio, and physical silver demand by country — dated market facts. Not sound-money history, and not how to buy a bar.",
    sell: "Newsletter",
  },
];

export const ideaPages: Episode[] = [
  {
    slug: "what-is-sound-money",
    title: "What is sound money?",
    summary: "A working definition: money that holds its function as a store of value without depending on a printing press.",
    status: "ready",
    paragraphs: [
      "Sound money is money whose supply cannot be expanded at will by a political authority. Historically that constraint came from the cost of mining gold and silver. The point of the idea is not nostalgia. It is about whether the unit of account stays honest over long periods.",
      "This pillar stays on meaning. Weimar, Nixon, and the Fed belong in history. Mixing the two makes both weaker for readers and for search engines.",
      "Use this page as the entry to hard money versus fiat, inflation, and what “backed” actually means.",
    ],
    related: [
      { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
      { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
      { title: "What “backed” means", href: "/sound-money/backed-money" },
      { title: "Sound Money History", href: "/history" },
    ],
    seo: {
      primary: "what is sound money",
      secondary: ["sound money meaning", "hard money definition", "sound money vs fiat"],
      demand: "low",
      difficulty: "high",
      intent: "definition",
    },
  },
  {
    slug: "hard-money-vs-fiat",
    title: "Hard money vs fiat",
    summary: "Money costly to produce versus money created by law and habit. Circulation does not decide the category.",
    status: "ready",
    paragraphs: [
      "Hard money is costly to produce. Fiat money is a claim created by a state or bank, accepted because of law and habit. Both can circulate. They fail in different ways.",
    ],
    related: [
      { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
      { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
      { title: "What “backed” means", href: "/sound-money/backed-money" },
      { title: "Sound Money History", href: "/history" },
    ],
    seo: {
      primary: "hard money vs fiat",
      secondary: ["what is fiat money", "what is hard money", "fiat currency meaning"],
      demand: "mid",
      difficulty: "high",
      intent: "definition",
    },
  },
  {
    slug: "inflation-purchasing-power",
    title: "Inflation and purchasing power",
    summary: "A decline in what the unit buys. Prices are the surface. Hyperinflation is a case, not the definition.",
    status: "ready",
    paragraphs: [
      "Inflation is a decline in purchasing power of the unit. Prices are the visible surface. The underlying question is whether the stock of money is growing faster than the goods and claims it is asked to measure.",
    ],
    related: [
      { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
      { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
      { title: "Weimar hyperinflation", href: "/history/20th-century/weimar-1923" },
    ],
    seo: {
      primary: "inflation and purchasing power",
      secondary: ["what is inflation", "purchasing power of money", "inflation vs hyperinflation"],
      demand: "high",
      difficulty: "high",
      intent: "definition",
    },
  },
  {
    slug: "backed-money",
    title: "What “backed money” means (and what it doesn’t)",
    summary: "Redeemability is a contract. Gold in a vault with no public claim is a slogan.",
    status: "ready",
    paragraphs: [
      "“Backed” is used loosely. A note that is legally redeemable in a defined weight of metal is one thing. A currency said to be “supported by” gold sitting in a vault with no public claim on it is another.",
    ],
    related: [
      { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
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
    },
  },
  {
    slug: "information-not-advice",
    title: "Information vs investment advice",
    summary: "A short, BaFin-clean line: this site is media. It is not a recommendation to buy or sell.",
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
          "Markets selected gold and silver for trade — durability, divisibility, scarcity and homogeneity, recognizability and portability — not by decree. Coinage is a later stamp.",
        status: "ready",
        paragraphs: [
          "Before states stamped coins, traders already settled in gold and silver. The selection is a trade result — durability, divisibility, scarcity and homogeneity, recognizability and portability — not a decree that invented money from nothing. Coinage is a later technology for verifying metal. The metal came first. The stamp came second.",
        ],
        related: [
          { title: "Ancient money hub", href: "/history/ancient" },
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
          "Struck coinage starts as a stamp on electrum that already settled trade — cheaper verification among strangers, not the birth of money.",
        status: "ready",
        paragraphs: [
          "Before the punch, traders settled metal by weight. The stamp cut the cost of checking that metal among strangers. That is the invention of coinage — not the birth of money.",
        ],
        related: [
          { title: "Ancient money hub", href: "/history/ancient" },
          { title: "Why markets chose gold and silver", href: "/history/ancient/why-markets-chose-gold-silver" },
        ],
        seo: {
          primary: "first coins lydia",
          secondary: ["invention of coinage", "electrum coins", "croesus coins", "lydian coinage"],
          demand: "low",
          difficulty: "low",
          intent: "history",
          titleTag: "Lydia and the First Coins: The Stamp That Verified Metal",
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
        },
      },
      {
        slug: "rome-denarius-aureus",
        title: "Rome: denarius, aureus, slow debasement",
        summary: "Gold and silver together. When spending outran metal, the coin was lightened.",
        status: "ready",
        paragraphs: [
          "Rome ran a bimetallic coinage. Debasement was gradual, then obvious. The lesson is fiscal, not moral: when spending outruns metal, the coin is lightened.",
        ],
        related: [
          { title: "Greece: silver and trade", href: "/history/ancient/greece-silver-trade" },
          { title: "The solidus", href: "/history/ancient/solidus-continuity" },
          { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
        ],
        seo: {
          primary: "roman denarius debasement",
          secondary: ["aureus coin", "roman inflation coinage", "antoninianus"],
          demand: "mid",
          difficulty: "low",
          intent: "history",
        },
      },
      {
        slug: "solidus-continuity",
        title: "After Rome: the solidus and early continuity",
        summary: "Constantine’s gold unit kept its weight into Byzantium.",
        status: "ready",
        paragraphs: [
          "The solidus carried gold coinage through late antiquity. Continuity of weight and fineness is the story, not a romance of empire.",
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
        },
      },
    ],
  },
  {
    slug: "banks-paper",
    title: "Banks & paper money",
    summary:
      "Paper money begins as a metal warehouse receipt. This cluster follows that claim-check until bank and state notes are no longer warehouse claims.",
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
          "Before public banks, paper money is a warehouse or goldsmith receipt — a claim check on deposited metal. Banking begins when that ticket pays.",
        status: "ready",
        paragraphs: [
          "Before public banks, paper money is a warehouse receipt — a claim check on deposited metal. Banking starts when that paper pays a debt without the metal leaving the vault. Later crises on this shelf depend on that handoff; they are not this episode, and they are not one another.",
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
          "The 1609 Wisselbank turns metal deposits into public giro balances — a civic ledger between warehouse receipts and later note banks.",
        status: "ready",
        paragraphs: [
          "The Bank of Amsterdam is the model public deposit bank: mixed coin in, bank money out, bills settled by giro. Concealed lending later broke the reputation that a florin banco was only a claim on metal.",
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
          "The 1694 charter is war finance with a note issue attached — not a city giro table. Those notes became London paper; Restriction and resumption are England’s own cycle.",
        status: "ready",
        paragraphs: [
          "The Bank of England fused war finance and note issue: a private corporation chartered in 1694, not a copy of Amsterdam. Its notes became the ordinary paper of London. Restriction in 1797 and resumption in the 1820s are an English suspend–resume cycle, not 1720 and not Weimar.",
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
          "John Law’s System in France fused a note-issuing bank with a rising colonial trading company. In 1719–1720 paper notes and Mississippi Company shares inflated together. The bust of 1720 was a paper-and-shares collapse under a regency seeking relief from war debt. It is not the same episode as France’s later assignats, and it is not “France printed Weimar.”",
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
          titleTag: "John Law and the Mississippi Bubble (1720)",
        },
      },
      {
        slug: "assignats",
        title: "Assignats and early paper collapses",
        summary:
          "Revolutionary France issued land-tied paper — the assignats — then over-issued it until the unit died. Not John Law’s 1720, not England’s Restriction, not Weimar.",
        status: "ready",
        paragraphs: [
          "Assignats began as paper tied to confiscated church and émigré lands, the biens nationaux. The land was real. Quantity rose faster than retirement. By 1795–96 the paper was not a unit anyone would hold. That is a revolutionary fiscal instrument with a land story. It is not John Law’s 1720 bank-and-company System, not England’s Restriction and resumption, and not Germany’s 1923 mark.",
        ],
        related: [
          { title: "Banks & paper hub", href: "/history/banks-paper" },
          { title: "John Law and the Mississippi Bubble", href: "/history/banks-paper/john-law" },
          { title: "Bank of England", href: "/history/banks-paper/bank-of-england" },
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
    summary: "Bimetallism, greenbacks, 1873, and the long argument over what the dollar is.",
    intro: [
      "This cluster is the American argument over the unit: two metals in 1792, Jackson’s bank war, greenbacks, the silver question, then a gold-standard statute in 1900.",
      "All five episodes now have first drafts. It stops before the Fed. 1907, 1933, and 1971 live in the [20th-century cluster](/history/20th-century).",
    ],
    episodes: [
      {
        slug: "early-us-coinage",
        title: "Early U.S. coinage / bimetallism",
        summary: "1792 wrote gold and silver into law. The mint ratio decided which metal stayed.",
        status: "ready",
        paragraphs: [
          "The early United States legally recognized both gold and silver. The mint ratio, not a slogan, decided which metal actually circulated.",
        ],
        related: [
          { title: "Bimetallism (silver cluster)", href: "/history/silver/bimetallism" },
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
        summary: "The 1832 veto and the fight over a central bank before the Fed existed.",
        status: "ready",
        paragraphs: [
          "Jackson’s war on the Second Bank is American politics and monetary history at once. It belongs in this cluster, with a light cross-link to the later Fed episode.",
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
        summary: "Inconvertible paper as a war measure, then a fight over resumption.",
        status: "ready",
        paragraphs: [
          "Greenbacks financed the Union. They were a suspension, not a theory of money. The postwar fight was about whether and when to resume.",
        ],
        related: [
          { title: "Jackson and the Bank", href: "/history/america/jackson-and-the-bank" },
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Inflation (the idea)", href: "/sound-money/inflation-purchasing-power" },
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
        summary: "The Coinage Act dropped the standard silver dollar. Crime or clarification — still the fight.",
        status: "ready",
        paragraphs: [
          "The Coinage Act of 1873 dropped the standard silver dollar. Whether that was a crime or a clarification is the American silver question in one sentence.",
        ],
        related: [
          { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
          { title: "Bimetallism (silver cluster)", href: "/history/silver/bimetallism" },
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
        summary: "Resumption in 1879, Gold Standard Act 1900 — then stop. 1907 is the next cluster.",
        status: "ready",
        paragraphs: [
          "After greenbacks came a political and legal path back toward gold payments. This overview stops before the Fed. The next cluster picks up in 1907.",
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
    title: "20th century: Fed, gold, and 1971",
    summary:
      "From the Panic of 1907 and the Fed, through Weimar hyperinflation, to the Nixon shock that closed the gold window.",
    sections: twentiethCenturyHubBody,
    related: [
      { title: "Sound Money History", href: "/history" },
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
          "The 1907 bankers’ panic, J. P. Morgan’s rescue, and why the United States created the Federal Reserve in 1913.",
        status: "ready",
        paragraphs: [
          "The Panic of 1907 was a liquidity crisis centered on New York trust companies. Private bankers, led by J. Pierpont Morgan’s group, organized emergency support when no public central bank existed. The Federal Reserve did not cause 1907. Congress created the Fed afterward, in 1913, in part because that panic showed how thin the country’s crisis plumbing was.",
        ],
        related: [
          { title: "20th century: Fed, gold, and 1971", href: "/history/20th-century" },
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
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
          "The pre-1914 gold standard was convertibility, gold points, and London settlement — not a treaty. World War I ended that peacetime order. What followed was a different architecture.",
        status: "ready",
        paragraphs: [
          "The classical gold standard was a set of practices: convertibility, gold shipping, and interest rates that responded to reserve drains. The First World War suspended it. What came after was not the same system with a pause. It was a different architecture.",
        ],
        related: [
          { title: "20th century: Fed, gold, and 1971", href: "/history/20th-century" },
          { title: "Panic of 1907 and the birth of the Fed", href: "/history/20th-century/panic-1907-fed" },
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
          "What caused German hyperinflation in 1923: war finance, the Ruhr occupation, the collapse of the paper mark, and how the Rentenmark stopped it.",
        status: "ready",
        paragraphs: [
          "In 1923 the German mark lost all practical value. Prices rose by the hour. People spent cash the day they received it. The cartoon of “printing money” is not wrong, but it is incomplete. The sequence starts with war finance.",
        ],
        related: [],
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
          titleTag: "Weimar Hyperinflation 1923: Causes, Timeline, Rentenmark",
        },
      },
      {
        slug: "1933-gold-recall",
        title: "1933 U.S. gold recall (Executive Order 6102)",
        summary:
          "Order 6102 and the Gold Reserve Act removed private monetary gold rights and reset the official price from $20.67 to $35. Not the 1914 convertibility break, and not the 1971 gold-window close.",
        status: "ready",
        paragraphs: [
          "In 1933 the United States required most domestic gold coin, bullion, and gold certificates to be delivered to the government. The Gold Reserve Act of 1934 then vested title to monetary gold in the United States and reset the official price from $20.67 to $35 an ounce. The public claim on gold at the old mint price was removed. Official gold became a Treasury asset, not circulating money.",
        ],
        related: [
          { title: "20th century: Fed, gold, and 1971", href: "/history/20th-century" },
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
          "August 15, 1971: the United States suspended dollar–gold convertibility. How Bretton Woods worked, and why it ended.",
        status: "ready",
        paragraphs: [
          "On 15 August 1971 the United States suspended the dollar’s convertibility into gold for foreign official holders. That act did not invent fiat money overnight. It ended the last official gold link in the post-war dollar system. Private Americans had already been barred from monetary gold under the 1933 recall. Bretton Woods did not fail in a single night. Pressure had built for years.",
        ],
        related: [
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
          { title: "20th century: Fed, gold, and 1971", href: "/history/20th-century" },
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
          titleTag: "Nixon Shock 1971: Closing the Gold Window",
        },
      },
    ],
  },
  {
    slug: "silver",
    title: "Silver in history",
    summary: "Potosí, the piece of eight, bimetallism, 1980, and silver’s dual monetary and industrial role.",
    intro: [
      "Silver is a monetary metal with its own path: a mountain, a global coin, a legal ratio, a 1980 squeeze, then industry. It is not a footnote to gold.",
      "All five episodes now have first drafts. American statutes stay in the America cluster.",
    ],
    episodes: [
      {
        slug: "potosi",
        title: "Potosí — the silver mountain",
        summary: "Cerro Rico, the Manila galleon, and a flood of silver into Eurasia.",
        status: "ready",
        paragraphs: [
          "Potosí flooded Eurasia with silver. The world map is the visual companion to this episode.",
        ],
        related: [
          { title: "Piece of eight", href: "/history/silver/piece-of-eight" },
          { title: "World map", href: "/maps" },
          { title: "Greece: silver and trade", href: "/history/ancient/greece-silver-trade" },
        ],
        seo: {
          primary: "potosi silver",
          secondary: ["cerro rico potosi", "spanish silver mountain", "manila galleon silver"],
          demand: "low",
          difficulty: "low",
          intent: "history",
        },
      },
      {
        slug: "piece-of-eight",
        title: "Piece of eight — first global currency",
        summary: "The Spanish dollar as a coin that circulated from the Americas to East Asia.",
        status: "ready",
        paragraphs: [
          "The piece of eight was not a metaphor. It was a coin that circulated from the Americas to East Asia.",
        ],
        related: [
          { title: "Potosí", href: "/history/silver/potosi" },
          { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
          { title: "World map", href: "/maps" },
        ],
        seo: {
          primary: "piece of eight",
          secondary: ["spanish dollar", "eight reales", "first global currency"],
          demand: "mid",
          difficulty: "low",
          intent: "history",
        },
      },
      {
        slug: "bimetallism",
        title: "Bimetallism: when gold and silver shared the stage",
        summary: "A fixed mint ratio and a market that will not stay still.",
        status: "ready",
        paragraphs: [
          "Bimetallism is the legal attempt to keep both metals in the same monetary system. The American silver question is the political face of the same problem.",
        ],
        related: [
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Early U.S. coinage", href: "/history/america/early-us-coinage" },
          { title: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
        ],
        seo: {
          primary: "bimetallism",
          secondary: ["gold silver ratio history", "latin monetary union", "bimetallic standard"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
        },
      },
      {
        slug: "silver-thursday",
        title: "Silver Thursday / Hunt Brothers 1980",
        summary: "A concentrated position, exchange rule changes, a March 1980 break. Facts only.",
        status: "ready",
        paragraphs: [
          "March 1980 ended a concentrated attempt to dominate the silver market. This page stays factual: positions, rules, and the break. No stock tips.",
        ],
        related: [
          { title: "Silver hub", href: "/history/silver" },
          { title: "Silver: monetary and industry", href: "/history/silver/monetary-and-industry" },
          { title: "Information vs advice", href: "/sound-money/information-not-advice" },
        ],
        seo: {
          primary: "silver thursday",
          secondary: ["hunt brothers silver", "silver squeeze 1980", "nelson bunker hunt silver"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
        },
      },
      {
        slug: "monetary-and-industry",
        title: "Silver: monetary history and industry",
        summary: "Money in memory, industrial input in fact. A split — not a forecast.",
        status: "ready",
        paragraphs: [
          "Silver’s split personality — monetary metal and industrial metal — is the last episode in this cluster. Facts only; no forecasts.",
        ],
        related: [
          { title: "Potosí", href: "/history/silver/potosi" },
          { title: "Gold bars vs coins", href: "/gold-silver/bars-vs-coins" },
          { title: "Silver hub", href: "/history/silver" },
        ],
        seo: {
          primary: "silver industrial demand",
          secondary: ["silver monetary metal", "silver photography electronics", "why silver is industrial"],
          demand: "mid",
          difficulty: "mid",
          intent: "history",
        },
      },
    ],
  },
];

export const practicePages: Episode[] = [
  {
    slug: "bars-vs-coins",
    title: "Gold bars vs coins",
    summary: "Bars usually cost less per ounce. Coins cost more and are easier to recognise. Comparison only — not a recommendation.",
    status: "ready",
    paragraphs: [
      "Bars minimise fabrication cost per ounce. Coins maximise recognisability. This page stays practical and neutral.",
    ],
    related: [
      { title: "Premium over spot", href: "/gold-silver/premium-over-spot" },
      { title: "Beginner checklist", href: "/gold-silver/beginner-checklist" },
      { title: "Information vs advice", href: "/sound-money/information-not-advice" },
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
    summary: "Spot is the screen. Premium is fabrication, distribution, and bid–ask — not automatically a trick.",
    status: "ready",
    paragraphs: [
      "Premium is the difference between spot and the product in hand. It is not a trick by itself. It is fabrication, distribution, and bid-ask.",
    ],
    related: [
      { title: "Gold bars vs coins", href: "/gold-silver/bars-vs-coins" },
      { title: "Beginner checklist", href: "/gold-silver/beginner-checklist" },
      { title: "Information vs advice", href: "/sound-money/information-not-advice" },
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
    summary: "Home, allocated, unallocated — access, cost, and counterparty. A menu, not a pick.",
    status: "ready",
    paragraphs: [
      "Storage is a trade-off among access, cost, and counterparty. This page describes the menu, not a pick.",
    ],
    related: [
      { title: "Buying online", href: "/gold-silver/buying-online" },
      { title: "Beginner checklist", href: "/gold-silver/beginner-checklist" },
      { title: "Information vs advice", href: "/sound-money/information-not-advice" },
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
    title: "Spotting fake gold and silver (high level)",
    summary: "Weight, dimensions, counterparty. Not a laboratory manual. Not a guarantee.",
    status: "ready",
    paragraphs: [
      "Counterfeits exist. Weight, dimensions, and reputable counterparties are the high-level defense. No page on this site replaces a professional test.",
    ],
    related: [
      { title: "Buying online", href: "/gold-silver/buying-online" },
      { title: "Information vs advice", href: "/sound-money/information-not-advice" },
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
    summary: "Form, seller, storage, records. A process — still not advice.",
    status: "ready",
    paragraphs: [
      "First ounces are a process: product type, seller, storage, and records. The checklist stays humble and linked to the disclaimer.",
    ],
    related: [
      { title: "Gold bars vs coins", href: "/gold-silver/bars-vs-coins" },
      { title: "Premium over spot", href: "/gold-silver/premium-over-spot" },
      { title: "Storage", href: "/gold-silver/storage" },
      { title: "Information vs advice", href: "/sound-money/information-not-advice" },
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
    summary: "Dealer, payment, shipping, empty box. Watch-fors — not a vendor list.",
    status: "ready",
    paragraphs: [
      "Online buying is logistics: identity of the dealer, payment, shipping, and what happens if a parcel never arrives. Neutral watch-fors, not a vendor ranking.",
    ],
    related: [
      { title: "Storage", href: "/gold-silver/storage" },
      { title: "Spotting fakes", href: "/gold-silver/spotting-fakes" },
      { title: "Information vs advice", href: "/sound-money/information-not-advice" },
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
    title: "How central banks report gold in FX reserves",
    summary:
      "Share of reserves, vault preferences, and dated official purchases. Poland’s 2026 NBP stock and 700-tonne aim sit here as a short documentary block — not a separate page.",
    status: "ready",
    paragraphs: [
      "Central banks report gold as part of official reserve assets. The figures are stocks, shares, and dated purchases — not a shopping list.",
    ],
    related: [
      { title: "Gold & silver markets", href: "/markets" },
      { title: "Official gold book value", href: "/markets/official-gold-book-value" },
    ],
    seo: {
      primary: "central bank gold reserves",
      secondary: ["official gold holdings", "imf gold reserves", "poland central bank gold"],
      demand: "high",
      difficulty: "mid",
      intent: "markets",
      titleTag: "Central-Bank Gold Reserves: Share, Vaults, Official Buys",
    },
  },
  {
    slug: "gold-silver-ratio",
    title: "What the gold–silver ratio measures (and what it does not)",
    summary:
      "Gold price divided by silver price at a dated print. A snapshot, not a fair-value claim. 1980 and 2011 are the named anchors.",
    status: "ready",
    paragraphs: [
      "The gold–silver ratio is one price divided by another. It records how many ounces of silver equal one ounce of gold at those two prints. It does not name a destined level.",
    ],
    related: [
      { title: "Gold & silver markets", href: "/markets" },
      { title: "Physical silver demand by country", href: "/markets/physical-silver-demand-by-country" },
      { title: "Bimetallism (silver cluster)", href: "/history/silver/bimetallism" },
    ],
    seo: {
      primary: "gold silver ratio",
      secondary: ["gold to silver ratio", "gsr 1980", "gold silver ratio 2011"],
      demand: "high",
      difficulty: "mid",
      intent: "markets",
      titleTag: "Gold–Silver Ratio: Definition and Dated Snapshots",
    },
  },
  {
    slug: "physical-silver-demand-by-country",
    title: "What physical silver demand by country measures (and what it does not)",
    summary:
      "Identified retail and investment bars and coins by country. A demand address, not a mine ranking. Mint fabrication is a different World Silver Survey table.",
    status: "ready",
    paragraphs: [
      "Country rankings of physical silver demand count identified bar and coin offtake in a calendar year. They do not rank mines, factories, or paper claims.",
    ],
    related: [
      { title: "Gold & silver markets", href: "/markets" },
      { title: "Gold–silver ratio", href: "/markets/gold-silver-ratio" },
    ],
    seo: {
      primary: "physical silver demand by country",
      secondary: [
        "silver investment demand by country",
        "silver bars and coins by country",
        "world silver survey physical investment",
        "silver coins and medals fabrication",
      ],
      demand: "mid",
      difficulty: "mid",
      intent: "markets",
      titleTag: "Physical Silver Demand by Country: What Rankings Measure",
    },
  },
];

export function getMarket(slug: string) {
  return marketPages.find((p) => p.slug === slug);
}

/** Thin ancient drafts — do not auto-promote as Continue destinations from a thickened spoke. */
const THIN_ANCIENT_CONTINUES = new Set([
  "greece-silver-trade",
  "rome-denarius-aureus",
  "solidus-continuity",
]);

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
      if (!THIN_ANCIENT_CONTINUES.has(next.slug)) {
        add(`${next.title} →`, `/history/${cluster.slug}/${next.slug}`);
      }
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
