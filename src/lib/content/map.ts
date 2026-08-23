export type Episode = {
  slug: string;
  title: string;
  summary: string;
  status: "ready" | "skeleton";
  paragraphs: string[];
  related: { title: string; href: string }[];
};

export type Cluster = {
  slug: string;
  title: string;
  summary: string;
  episodes: Episode[];
};

export type Pillar = {
  id: "sound-money" | "history" | "gold-silver";
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
      "Five clusters from ancient coinage to 1971. Episode → cluster → this hub → ebook. Cross-links only where they help.",
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
      { title: "Sound Money History", href: "/history" },
    ],
  },
  {
    slug: "hard-money-vs-fiat",
    title: "Hard money vs fiat",
    summary: "The distinction between money constrained by nature and money constrained only by policy.",
    status: "skeleton",
    paragraphs: [
      "Hard money is costly to produce. Fiat money is a claim created by a state or bank, accepted because of law and habit. Both can circulate. They fail in different ways.",
      "This page is a skeleton in the topical map. It will stay under Sound Money (the idea), not under history.",
    ],
    related: [
      { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
      { title: "Inflation and purchasing power", href: "/sound-money/inflation-purchasing-power" },
    ],
  },
  {
    slug: "inflation-purchasing-power",
    title: "Inflation and purchasing power",
    summary: "How a changing money supply shows up in what an hour of work will buy.",
    status: "skeleton",
    paragraphs: [
      "Inflation is a decline in purchasing power of the unit. Prices are the visible surface. The underlying question is whether the stock of money is growing faster than the goods and claims it is asked to measure.",
      "Historical cases live in the history pillar. This page stays on the concept.",
    ],
    related: [
      { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
      { title: "Weimar 1923 (history)", href: "/history/20th-century/weimar-1923" },
    ],
  },
  {
    slug: "backed-money",
    title: "What “backed money” means (and what it doesn’t)",
    summary: "Redeemability, reserves, and the difference between a slogan and a contract.",
    status: "skeleton",
    paragraphs: [
      "“Backed” is used loosely. A note that is legally redeemable in a defined weight of metal is one thing. A currency said to be “supported by” gold sitting in a vault with no public claim on it is another.",
      "This page will keep the language tight so the rest of the map can stay honest.",
    ],
    related: [{ title: "What is sound money?", href: "/sound-money/what-is-sound-money" }],
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
    summary: "Why markets chose gold and silver, and how coins spread from Lydia through Greece and Rome.",
    episodes: [
      {
        slug: "why-markets-chose-gold-silver",
        title: "Why markets chose gold and silver",
        summary: "Divisibility, durability, and the slow selection of two metals as money.",
        status: "skeleton",
        paragraphs: [
          "Before states stamped coins, markets already used gold and silver as money. The properties that made them useful — scarcity, durability, divisibility — are the starting point of this cluster.",
        ],
        related: [{ title: "Lydia and the first coins", href: "/history/ancient/lydia-first-coins" }],
      },
      {
        slug: "lydia-first-coins",
        title: "Lydia and the first coins",
        summary: "Electrum, state stamps, and the first widely circulating coins.",
        status: "skeleton",
        paragraphs: [
          "Lydia is the conventional starting point for struck coinage. The stamp reduced the cost of verifying metal. That is the invention, not the metal itself.",
        ],
        related: [{ title: "Greece: silver and trade", href: "/history/ancient/greece-silver-trade" }],
      },
      {
        slug: "greece-silver-trade",
        title: "Greece: silver and trade",
        summary: "Attic owls, mines, and silver as the language of Mediterranean trade.",
        status: "skeleton",
        paragraphs: [
          "Greek city-states turned silver mining and coinage into a commercial network. The tetradrachm is the familiar face of that system.",
        ],
        related: [{ title: "Rome: denarius and aureus", href: "/history/ancient/rome-denarius-aureus" }],
      },
      {
        slug: "rome-denarius-aureus",
        title: "Rome: denarius, aureus, slow debasement",
        summary: "A silver and gold system that eroded as fiscal pressure rose.",
        status: "skeleton",
        paragraphs: [
          "Rome ran a bimetallic coinage. Debasement was gradual, then obvious. The lesson is fiscal, not moral: when spending outruns metal, the coin is lightened.",
        ],
        related: [{ title: "The solidus", href: "/history/ancient/solidus-continuity" }],
      },
      {
        slug: "solidus-continuity",
        title: "After Rome: the solidus and early continuity",
        summary: "A gold coin that outlasted the western empire.",
        status: "skeleton",
        paragraphs: [
          "The solidus carried gold coinage through late antiquity. Continuity of weight and fineness is the story, not a romance of empire.",
        ],
        related: [{ title: "Ancient money hub", href: "/history/ancient" }],
      },
    ],
  },
  {
    slug: "banks-paper",
    title: "Banks & paper money",
    summary: "From warehouses to public banks, and the early paper experiments that failed in public.",
    episodes: [
      {
        slug: "warehouses-to-public-banks",
        title: "From warehouses to public banks",
        summary: "Receipts for deposited metal become circulating claims.",
        status: "skeleton",
        paragraphs: [
          "Paper money begins as a warehouse receipt. The moment the receipt circulates without the metal moving, banking has begun.",
        ],
        related: [{ title: "Bank of Amsterdam", href: "/history/banks-paper/bank-of-amsterdam" }],
      },
      {
        slug: "bank-of-amsterdam",
        title: "Bank of Amsterdam",
        summary: "A public bank that became the clearing house of European trade.",
        status: "skeleton",
        paragraphs: [
          "The Bank of Amsterdam is the model public deposit bank. Its later concealed lending is part of the same story as its early reputation.",
        ],
        related: [{ title: "Bank of England", href: "/history/banks-paper/bank-of-england" }],
      },
      {
        slug: "bank-of-england",
        title: "Bank of England",
        summary: "A private corporation with a public charter, and notes that became money.",
        status: "skeleton",
        paragraphs: [
          "The Bank of England fused war finance and note issue. Understanding it is required before the 20th-century cluster.",
        ],
        related: [{ title: "John Law", href: "/history/banks-paper/john-law" }],
      },
      {
        slug: "john-law",
        title: "John Law and the Mississippi Bubble",
        summary: "An early paper experiment: credit, a trading company, and a collapse of confidence.",
        status: "ready",
        paragraphs: [
          "John Law offered France a system: a public bank issuing notes, a trading company absorbing state debt, and a promise that paper could do the work of scarce coin. For a short time Paris believed him.",
          "The Mississippi Company and the bank became two sides of the same machine. Notes were used to bid up shares; shares were used to justify more notes. When confidence broke in 1720, the paper could not be converted without destroying the system that had issued it.",
          "The episode belongs here, in banks and paper, not in the idea pillar. It is a case of credit without a trusted stop. Cross-link to Weimar only as a later rhyme, not as the same event.",
        ],
        related: [
          { title: "Banks & paper hub", href: "/history/banks-paper" },
          { title: "Weimar 1923", href: "/history/20th-century/weimar-1923" },
          { title: "Assignats", href: "/history/banks-paper/assignats" },
        ],
      },
      {
        slug: "assignats",
        title: "Assignats / early paper collapses",
        summary: "Revolutionary paper, land as “backing,” and another public failure of notes.",
        status: "skeleton",
        paragraphs: [
          "Assignats were paper claims supposedly tied to confiscated land. Quantity rose; confidence did not. This is an overview page for early paper collapses, not a second John Law biography.",
        ],
        related: [{ title: "John Law", href: "/history/banks-paper/john-law" }],
      },
    ],
  },
  {
    slug: "america",
    title: "America & gold/silver politics",
    summary: "Bimetallism, greenbacks, 1873, and the long argument over what the dollar is.",
    episodes: [
      {
        slug: "early-us-coinage",
        title: "Early U.S. coinage / bimetallism",
        summary: "A republic that wrote gold and silver into law, then discovered the ratio problem.",
        status: "skeleton",
        paragraphs: [
          "The early United States legally recognized both gold and silver. The mint ratio, not a slogan, decided which metal actually circulated.",
        ],
        related: [
          { title: "Crime of 1873", href: "/history/america/crime-of-1873" },
          { title: "Silver in history", href: "/history/silver" },
        ],
      },
      {
        slug: "jackson-and-the-bank",
        title: "Jackson and the Bank",
        summary: "The fight over a central bank before the Fed existed.",
        status: "skeleton",
        paragraphs: [
          "Jackson’s war on the Second Bank is American politics and monetary history at once. It belongs in this cluster, with a light cross-link to the later Fed episode.",
        ],
        related: [{ title: "Panic of 1907 and the Fed", href: "/history/20th-century/panic-1907-fed" }],
      },
      {
        slug: "greenbacks-civil-war",
        title: "Greenbacks and the Civil War",
        summary: "Inconvertible paper as a war measure, and the later return toward gold.",
        status: "skeleton",
        paragraphs: [
          "Greenbacks financed the Union. They were a suspension, not a theory of money. The postwar fight was about whether and when to resume.",
        ],
        related: [{ title: "Road back toward gold", href: "/history/america/road-back-gold" }],
      },
      {
        slug: "crime-of-1873",
        title: "The Crime of 1873 and the silver question",
        summary: "Demonetization, free silver, and the politics of the unit.",
        status: "skeleton",
        paragraphs: [
          "The Coinage Act of 1873 dropped the standard silver dollar. Whether that was a crime or a clarification is the American silver question in one sentence.",
        ],
        related: [
          { title: "Bimetallism (silver cluster)", href: "/history/silver/bimetallism" },
          { title: "20th century cluster", href: "/history/20th-century" },
        ],
      },
      {
        slug: "road-back-gold",
        title: "The road back toward the gold standard",
        summary: "Resumption and the gold-standard United States before 1914.",
        status: "skeleton",
        paragraphs: [
          "After greenbacks came a political and legal path back toward gold payments. This overview stops before the Fed. The next cluster picks up in 1907.",
        ],
        related: [{ title: "Panic of 1907 and the Fed", href: "/history/20th-century/panic-1907-fed" }],
      },
    ],
  },
  {
    slug: "20th-century",
    title: "20th century: Fed, wars, 1971",
    summary: "From the Panic of 1907 to the closing of the gold window. Phase 1 of the map.",
    episodes: [
      {
        slug: "panic-1907-fed",
        title: "Panic of 1907 and the birth of the Fed",
        summary: "A banking panic, private coordination, and the argument for a central bank.",
        status: "ready",
        paragraphs: [
          "In October 1907 New York’s trust companies faced a run. J. P. Morgan and a small group of bankers coordinated liquidity because there was no public lender of last resort with a standing mandate.",
          "The panic did not create the Federal Reserve by itself. It made the political case. The Aldrich-Vreeland Act, the National Monetary Commission, and the 1913 Federal Reserve Act followed a sequence: crisis, study, statute.",
          "This episode opens the 20th-century cluster. It links backward to Jackson and the Bank, and forward to wartime gold and 1971. It is history, not a verdict on central banking as an idea.",
        ],
        related: [
          { title: "20th-century hub", href: "/history/20th-century" },
          { title: "Jackson and the Bank", href: "/history/america/jackson-and-the-bank" },
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
        ],
      },
      {
        slug: "classical-gold-standard-end",
        title: "Classical gold standard and its wartime end",
        summary: "How the pre-1914 system worked, and why the First World War broke it.",
        status: "skeleton",
        paragraphs: [
          "The classical gold standard was a set of practices: convertibility, gold shipping, and interest rates that responded to reserve drains. The First World War suspended it. What came after was not the same system with a pause. It was a different architecture.",
        ],
        related: [
          { title: "Panic of 1907", href: "/history/20th-century/panic-1907-fed" },
          { title: "Bretton Woods → Nixon 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
        ],
      },
      {
        slug: "weimar-1923",
        title: "Weimar 1923",
        summary: "Hyperinflation in Germany — the textbook case of paper without a trusted stop.",
        status: "ready",
        paragraphs: [
          "In 1923 the German mark lost all practical value. Prices rose by the hour. People spent cash the day they received it. The cartoon of “printing money” is not wrong, but it is incomplete. The sequence starts with war finance.",
          "Germany paid for the First World War largely by borrowing and expanding the note issue rather than by taxation. After the armistice came reparations, domestic debts, and a political environment that made restraint costly. The Reichsbank accommodated the Treasury.",
          "Inflation was already visible in 1919–1921. Hyperinflation arrived when note issue accelerated after 1922, especially during the Ruhr occupation. By late 1923 the mark no longer worked as a unit of account. Stabilisation required a new unit (the Rentenmark) and a credible stop to the press.",
          "This episode sits in the 20th-century cluster, not in Sound Money (the idea). The idea pillar defines terms. This page records what happened.",
        ],
        related: [
          { title: "20th-century hub", href: "/history/20th-century" },
          { title: "Inflation (the idea)", href: "/sound-money/inflation-purchasing-power" },
          { title: "Bretton Woods → Nixon 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
          { title: "John Law", href: "/history/banks-paper/john-law" },
        ],
      },
      {
        slug: "1933-gold-recall",
        title: "1933 U.S. gold recall",
        summary: "Documentary tone: the order, the rationale given at the time, and what followed for private holdings.",
        status: "skeleton",
        paragraphs: [
          "In 1933 the United States required most domestic gold coin and bullion to be delivered to the government. The page will stay documentary: statute, executive order, and contemporaneous justification — not a polemic.",
        ],
        related: [
          { title: "Bretton Woods → Nixon 1971", href: "/history/20th-century/bretton-woods-nixon-1971" },
          { title: "America cluster", href: "/history/america" },
        ],
      },
      {
        slug: "bretton-woods-nixon-1971",
        title: "Bretton Woods → Nixon 1971",
        summary: "The gold-exchange system after the war, and the closing of the gold window.",
        status: "ready",
        paragraphs: [
          "Bretton Woods (1944) made the dollar the center of the postwar monetary system. Other currencies pegged to the dollar; the dollar was defined in gold for official holders. It was a gold-exchange standard, not the classical pre-1914 system.",
          "The arrangement depended on confidence that official claims could still meet gold at the promised price. As dollar balances abroad grew, that confidence thinned. The London Gold Pool, two-tier gold, and a sequence of stopgaps bought time.",
          "In August 1971 the United States suspended convertibility of the dollar into gold for foreign governments. The “Nixon shock” ended the last official gold link in the system that had begun at Bretton Woods. What followed was a world of floating fiat currencies.",
          "Link this episode up to the 20th-century hub and sideways to the America cluster. Do not park it under Sound Money (the idea).",
        ],
        related: [
          { title: "20th-century hub", href: "/history/20th-century" },
          { title: "Classical gold standard’s wartime end", href: "/history/20th-century/classical-gold-standard-end" },
          { title: "America hub", href: "/history/america" },
          { title: "What is sound money?", href: "/sound-money/what-is-sound-money" },
        ],
      },
    ],
  },
  {
    slug: "silver",
    title: "Silver in history",
    summary: "Potosí, the piece of eight, bimetallism, 1980, and silver’s dual monetary and industrial role.",
    episodes: [
      {
        slug: "potosi",
        title: "Potosí — the silver mountain",
        summary: "A mountain that rewired global money in the early modern world.",
        status: "skeleton",
        paragraphs: [
          "Potosí flooded Eurasia with silver. The flows on the map page are the visual companion to this episode.",
        ],
        related: [
          { title: "Piece of eight", href: "/history/silver/piece-of-eight" },
          { title: "Metal flows map", href: "/flows" },
        ],
      },
      {
        slug: "piece-of-eight",
        title: "Piece of eight — first global currency",
        summary: "The Spanish dollar as a unit that crossed oceans.",
        status: "skeleton",
        paragraphs: [
          "The piece of eight was not a metaphor. It was a coin that circulated from the Americas to East Asia. That is why it sits in the silver cluster and on the flows map.",
        ],
        related: [{ title: "Potosí", href: "/history/silver/potosi" }],
      },
      {
        slug: "bimetallism",
        title: "Bimetallism: when gold and silver shared the stage",
        summary: "Two metals, one unit, and a ratio that would not stay still.",
        status: "skeleton",
        paragraphs: [
          "Bimetallism is the legal attempt to keep both metals in the same monetary system. The American silver question is the political face of the same problem.",
        ],
        related: [{ title: "Crime of 1873", href: "/history/america/crime-of-1873" }],
      },
      {
        slug: "silver-thursday",
        title: "Silver Thursday / Hunt Brothers 1980",
        summary: "A modern squeeze, a collapse, and a documentary record — facts only.",
        status: "skeleton",
        paragraphs: [
          "March 1980 ended a concentrated attempt to dominate the silver market. This page will stay factual: positions, rules, and the break. No stock tips.",
        ],
        related: [{ title: "Silver hub", href: "/history/silver" }],
      },
      {
        slug: "monetary-and-industry",
        title: "Silver: monetary history and industry",
        summary: "The metal that is still money in memory and an industrial input in fact.",
        status: "skeleton",
        paragraphs: [
          "Silver’s split personality — monetary metal and industrial metal — is the last episode in this cluster. Facts only; no forecasts.",
        ],
        related: [{ title: "Gold & silver in practice", href: "/gold-silver" }],
      },
    ],
  },
];

export const practicePages: Episode[] = [
  {
    slug: "bars-vs-coins",
    title: "Bars vs coins",
    summary: "Form factor, recognisability, and why both exist.",
    status: "skeleton",
    paragraphs: [
      "Bars minimise fabrication cost per ounce. Coins maximise recognisability. This page will stay practical and neutral. Phase 3 of the map.",
    ],
    related: [{ title: "Premium over spot", href: "/gold-silver/premium-over-spot" }],
  },
  {
    slug: "premium-over-spot",
    title: "Premium over spot",
    summary: "Why the price you pay is not the screen price.",
    status: "skeleton",
    paragraphs: [
      "Premium is the difference between spot and the product in hand. It is not a trick by itself. It is fabrication, distribution, and bid-ask.",
    ],
    related: [{ title: "Beginner checklist", href: "/gold-silver/beginner-checklist" }],
  },
  {
    slug: "storage",
    title: "Storage (neutral)",
    summary: "Home, allocated, and vault options described without a sales pitch.",
    status: "skeleton",
    paragraphs: [
      "Storage is a trade-off among access, cost, and counterparty. This page will describe the menu, not pick for you.",
    ],
    related: [{ title: "Buying online", href: "/gold-silver/buying-online" }],
  },
  {
    slug: "spotting-fakes",
    title: "Spotting fakes (high level)",
    summary: "High-level tells and a disclaimer: this is not a laboratory manual.",
    status: "skeleton",
    paragraphs: [
      "Counterfeits exist. Weight, dimensions, and reputable counterparties are the high-level defense. No page on this site replaces a professional test.",
    ],
    related: [{ title: "Information vs advice", href: "/sound-money/information-not-advice" }],
  },
  {
    slug: "beginner-checklist",
    title: "Beginner checklist: first ounces",
    summary: "A short list for first physical ounces — still not advice.",
    status: "skeleton",
    paragraphs: [
      "First ounces are a process: product type, seller, storage, and records. The checklist will stay humble and linked to the disclaimer page.",
    ],
    related: [{ title: "Information vs advice", href: "/sound-money/information-not-advice" }],
  },
  {
    slug: "buying-online",
    title: "Buying online: what to watch for",
    summary: "Spreads, settlement, and basic operational caution.",
    status: "skeleton",
    paragraphs: [
      "Online buying is logistics: identity of the dealer, payment, shipping, and what happens if a parcel never arrives. Neutral watch-fors, not a vendor ranking.",
    ],
    related: [{ title: "Storage", href: "/gold-silver/storage" }],
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

export function seoTitle(page: string) {
  return `${page} — GoldSilverHQ`;
}
