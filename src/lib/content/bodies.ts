export type Section = { heading: string; paragraphs: string[]; list?: string[] };

const johnLaw: Section[] = [
  {
    heading: "Who John Law was",
    paragraphs: [
      "John Law (1671–1729) was a Scottish projector who reached the centre of French finance after the death of Louis XIV. France was carrying a heavy public debt. Coin was scarce relative to the claims on it. Law’s offer was simple on paper: a public bank whose notes would circulate, and a trading company that would absorb state debt and pay it from colonial revenue.",
      "He was not the first to notice that a receipt for metal can circulate as money. That path is the rest of this [banks and paper](/history/banks-paper) cluster. Law’s distinction was scale, and the fusion of the note issue with a rising stock.",
    ],
  },
  {
    heading: "The bank and the Mississippi Company",
    paragraphs: [
      "In 1716 Law received a charter for the Banque Générale, later taken over as the Banque Royale. Notes were payable in coin and, for a time, were preferred to clipped or uncertain specie because they were convenient and officially protected.",
      "In 1717 he organised the company that became the Compagnie des Indes — the Mississippi Company in English usage. It collected privileges over Louisiana and other French colonial trade. The company also took on government debt: creditors were induced to swap claims on the state for shares. The bank and the company were soon two sides of one machine.",
    ],
  },
  {
    heading: "How the Mississippi Bubble inflated",
    paragraphs: [
      "Share prices in 1719–1720 rose far beyond any contemporaneous earnings from the colony. New shares were issued into that rise. Bank notes were issued into the same rise. Notes bought shares; higher share prices were taken as proof that more notes were safe. Paris used a new word, millionaire, for people who had done this on the way up.",
      "Credit that can be expanded at will was used to bid for a claim whose price then justified more credit. There was no independent stop once the system was fully in motion.",
    ],
  },
  {
    heading: "The collapse of 1720",
    paragraphs: [
      "In 1720 confidence broke. Attempts to hold the share price, to regulate the note issue, and to force the public to treat paper as equivalent to coin arrived together and failed together. By the end of the year the paper could not be converted without destroying the institutions that had issued it. Law left France.",
      "England’s South Sea Bubble burst in the same year. A later French paper, the [assignats](/history/banks-paper/assignats), is a different episode.",
    ],
  },
];

const panic1907: Section[] = [
  {
    heading: "What the Panic of 1907 was",
    paragraphs: [
      "In **October 1907** New York’s trust companies faced a run. The Knickerbocker Trust Company failed to get a clearing-house rescue and closed its doors. Depositors queued at other trusts. Call-money rates spiked. The stock market cracked. There was no public central bank with a standing duty to lend into that panic.",
      "J. P. Morgan and a small group of bankers coordinated what a later generation would call a lender of last resort: gold imports, Treasury deposits, clearing-house certificates, and pressure on the strong to support the weak. The panic was short. The political argument it left behind was not.",
    ],
  },
  {
    heading: "Why the trusts were the weak point",
    paragraphs: [
      "National banks in New York cleared through the Clearing House, which could issue certificates and impose discipline. Trust companies sat partly outside that club. They had grown fast, held thinner cash against deposits, and looked enough like banks that a rumour could empty them.",
      "When Knickerbocker went, the run jumped to institutions that still had assets. Liquidity, not insolvency in every case, was the immediate problem. Without a statutory centre for reserves, rescue was personal: Morgan’s library, not a statute.",
    ],
  },
  {
    heading: "A short timeline, 1907–1913",
    paragraphs: ["Crisis, then study, then a law. That is the sequence — not a single meeting that invented a central bank."],
    list: [
      "**October 1907.** Knickerbocker fails to get support. Runs on trust companies. Morgan’s group organises gold, certificates, and forced cooperation.",
      "**1908.** Aldrich-Vreeland Act: emergency currency in a future panic, and a National Monetary Commission to study other countries’ banks.",
      "**1910–12.** Commission reports; the Aldrich plan; the Pujo hearings on the “money trust.” Jekyll Island is later folklore around a draft. It is not the statute.",
      "**23 December 1913.** Wilson signs the Federal Reserve Act. Regional reserve banks plus a Board in Washington. A public centre for reserves, with a private-bank membership structure.",
    ],
  },
  {
    heading: "What the Fed was built to do",
    paragraphs: [
      "The 1913 Act is an American compromise: not the Bank of England, not the Second Bank that [Jackson had destroyed](/history/america/jackson-and-the-bank). Jackson’s fight was over a federally chartered corporation that issued notes and held government funds. The Fed is regional, statutory, and born from a bankers’ panic plus a Progressive-era Congress. The names and the charter are not the same event.",
      "The new system was meant to pool reserves, issue an elastic currency, and discount commercial paper so that 1907 would not have to be repeated as a private rescue. What the Fed later became — in war, in depression, after 1971 — is other pages. This page stops at why it was created.",
    ],
  },
  {
    heading: "What came next on this cluster",
    paragraphs: [
      "The Reserve Banks were still new when Europe went to war in 1914. Convertibility and gold shipment, which had been the international stop, broke that summer. That is the next episode: the [wartime end of the classical gold standard](/history/20th-century/classical-gold-standard-end).",
    ],
  },
];


const weimar: Section[] = [
  {
    heading: "What Weimar hyperinflation was",
    paragraphs: [
      "Weimar hyperinflation was the collapse of the German paper mark as money in 1922–23. Prices rose first by the month, then by the day, then by the hour. By November 1923 a U.S. dollar — about **4.2 marks** before the First World War — was quoted at roughly **4.2 trillion paper marks**. People spent cash the afternoon they received it. Overnight, the notes were worth less.",
      "The cartoons — wheelbarrows, wallpaper, children stacking bricks of notes — are not invented. They are also not the cause. Hyperinflation here is a sequence: war finance without a gold stop, a fiscal gap after Versailles, the Reichsbank printing against Treasury bills, then the Ruhr occupation. Printing is the mechanism. The start is the missing constraint.",
    ],
  },
  {
    heading: "What caused Weimar hyperinflation",
    paragraphs: [
      "Germany paid for the First World War largely by borrowing and expanding the note issue, not by taxation on a wartime scale. [Gold convertibility ended with the war in 1914](/history/20th-century/classical-gold-standard-end). The mark kept its gold name; it lost the stop that had made the name honest. By the armistice the stock of paper was already several times the pre-war circulation. Controlled wartime prices hid part of the pressure. The black market did not.",
      "Peace did not restore the old constraint. The republic inherited domestic war debt, social claims, and reparations payable in gold or in kind. Tax collection was weak. The Reichsbank discounted Treasury bills — it created marks so the government could pay. Inflation was already visible in 1919–1921. That was still ordinary, if severe, inflation. Hyperinflation is a later phase: roughly when prices rise about 50% or more in a month. Germany crossed that line in **mid-1922**.",
      "Once expectations broke, the fiscal problem and the money problem fed each other. Tax arrived in marks worth less than when the liability was assessed. The gap was closed with more paper. Real cash balances collapsed. Velocity exploded: nobody would hold the unit. That is the mechanical core, not a morality play about “Germans printing money.”",
    ],
  },
  {
    heading: "A short timeline, 1914–1923",
    paragraphs: ["Exact daily rates vary by series. The order does not."],
    list: [
      "**July 1914.** Gold convertibility ends for the war. The mark is still talked about as a gold unit. The public can no longer test that claim at the window.",
      "**1918–21.** Armistice, Versailles, visible inflation. The Reichsbank keeps discounting Treasury paper. A dollar is already tens of marks, not 4.2.",
      "**Mid-1922.** Monthly price rises cross the usual hyperinflation threshold. The dollar rate leaves the hundreds for the thousands. Confidence in the mark as a store of value is gone.",
      "**January 1923.** France and Belgium occupy the Ruhr after defaults on deliveries in kind. Berlin answers with passive resistance and pays for it in new notes.",
      "**Spring 1923.** A brief attempt to hold the exchange rate burns reserves and fails. From late spring the monthly rates move into hundreds, then thousands of percent.",
      "**Autumn 1923.** The paper mark dies as a unit of account. Contracts move to foreign currency, gold-marks as a unit of calculation, or barter.",
      "**15–20 November 1923.** The Rentenmark is issued. **One trillion paper marks = one Rentenmark.** The dollar is pinned at 4.2 in the new unit — the old parity under a new name. The press stops financing the Treasury as before.",
    ],
  },
  {
    heading: "The Ruhr occupation and the final spiral",
    paragraphs: [
      "On **11 January 1923** French and Belgian troops occupied the Ruhr, Germany’s industrial core. Berlin called for passive resistance: do not cooperate; the Reich will cover wages. Production in the occupied zone fell. Tax from the region dried up. The wage and subsidy bill was met, again, by paper created through the Reichsbank.",
      "There was a short intervention in the foreign-exchange market in early 1923. Reserves were not large enough. When support ended, the slide resumed. By autumn, wholesale prices could rise on the order of **20% in a day** at the peak. At that speed the “money supply” is not a stock anyone holds. It is a hot potato. C. H. Bresciani-Turroni’s contemporary account is still the place historians send readers for the monthly tables.",
      "That is what it means for money to die: notes do not vanish. Nobody will hold them or price in them.",
    ],
  },
  {
    heading: "How high prices and the dollar rate went",
    paragraphs: [
      "Pre-war parity: about **4.2 marks per U.S. dollar**. By late 1922 the rate was already in the thousands. Through 1923 it moved through millions and billions into trillions. On the November stabilisation the official rate was set at **4.2 trillion paper marks per dollar** — twelve zeros relative to the gold-mark parity.",
      "Everyday prices followed. A loaf of bread that cost a fraction of a mark before the war was in the hundreds of billions of marks by November 1923. Postage, tram fares, and café bills were revised so often that a price at the start of a meal was not the price at the end. Banknotes were overprinted with new face values because new plates could not keep up.",
      "Exact multipliers differ by series — wholesale, retail, exchange. The qualitative fact does not: the paper mark ceased to work as a store of value or a unit of account. Accounting, wages, and trade shifted toward foreign currency, gold units, or goods.",
    ],
  },
  {
    heading: "Who lost, and who did not",
    paragraphs: [
      "Holders of cash, bank deposits, and nominal bonds in marks lost almost everything. Pensions and wages fixed in paper were destroyed unless they were rewritten daily. Debtors who owed marks saw the real burden of those debts evaporate — unless creditors had already switched the contract into a stable unit.",
      "People and firms that held land, inventories, plant, foreign currency, or precious metal kept purchasing power relative to pure mark holders. That is not a ranking of virtue. It is what a collapsing unit of account does to balance sheets. The political cost of that redistribution is why 1923 still sits in every serious history of the republic.",
    ],
  },
  {
    heading: "How it was stopped: the Rentenmark",
    paragraphs: [
      "Stabilisation needed two things together: a stop to marks created for the Treasury, and a unit people would accept. Mid-October 1923 decrees established the Deutsche Rentenbank. Rentenmarks entered circulation from **15 November 1923**. Conversion: **one trillion paper marks to one Rentenmark**. On **20 November** the exchange rate was held at 4.2 Rentenmarks per dollar.",
      "The notes were called “backed” by mortgages forced onto agricultural and industrial property. A holder could not walk to a window and demand a weight of gold. The mortgages were a legal charge on land and plant — a way to make the new issue look limited — not coin in a vault with a public claim on it.",
      "The Reichsbank was barred from discounting government bills as before. Rudolf Havenstein, the Reichsbank president of the inflation years, died on 20 November. Hjalmar Schacht, as currency commissioner and then Reichsbank head, enforced the new line. Contemporaries called the halt a miracle. The narrower fact: once the public believed the press would not run for the Treasury, the old paper was scaled by a trillion and set aside.",
      "In 1924 the Reichsmark succeeded the Rentenmark. The Dawes Plan rearranged reparations and credit. Those are sequels. The hyperinflation of the paper mark ended in November 1923.",
    ],
  },
  {
    heading: "Was it “only printing money”?",
    paragraphs: [
      "Printing is how the stock expanded. It is not a complete cause. A government that can tax and that faces a hard stop — gold convertibility, a currency board, a public that will not accept more notes — cannot do this for long. Weimar had a fiscal gap it would not close, a central bank that monetised Treasury paper, a lost war, reparations, and then the Ruhr. Remove the stop, keep the spending, and the unit fails.",
      "It is a documented extreme, not a script every paper currency has to finish.",
    ],
  },
];

const nixon: Section[] = [
  {
    heading: "What the Nixon shock was",
    paragraphs: [
      "On **15 August 1971** President Richard Nixon announced a New Economic Policy: a 90-day freeze on wages and prices, a surcharge on imports, and the suspension of dollar convertibility into gold for foreign official holders. That last measure is the closing of the gold window. The weekend is the Nixon shock.",
      "Private Americans had already been barred from holding monetary gold under the [1933 gold recall](/history/20th-century/1933-gold-recall). What ended in 1971 was a different claim: the promise that a foreign government could present dollars at the U.S. Treasury and receive gold at a fixed price.",
    ],
  },
  {
    heading: "How Bretton Woods actually worked",
    paragraphs: [
      "At Bretton Woods in 1944, member currencies were pegged to the U.S. dollar, and the dollar was defined in gold at **$35 an ounce** for official settlement. Other countries held dollars as reserves. The United States, in principle, stood ready to convert those official dollars into gold.",
      "That is a gold-exchange standard, not the [classical gold standard that ended in 1914](/history/20th-century/classical-gold-standard-end). Before 1914, notes of several countries were routinely convertible into coin for private holders, and gold actually shipped when exchange rates hit the gold points. After 1944, the public in the United States could not redeem dollars for gold. Only official holders had a window — and only while Washington honoured it.",
    ],
  },
  {
    heading: "Why the gold window came under pressure",
    paragraphs: [
      "The system assumed two things at once: the world would need more dollars as trade grew, and those dollars would stay as good as gold at $35. Robert Triffin stated the contradiction: more dollars for liquidity made the gold pledge less credible.",
      "The London Gold Pool (1961–1968) was a central-bank effort to hold the market price of gold at $35. It collapsed in **March 1968**. A two-tier market followed — an official price among central banks, a free price for everyone else. The $35 story was already cracked.",
      "In 1971 the crack became a run in slow motion. West Germany let the mark float in May. France had converted dollars into gold over several years. Other governments asked questions at the Treasury window. By August, U.S. gold reserves were far below the stock of official dollar claims that could, in principle, be presented.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The dates that matter for the dollar–gold link:"],
    list: [
      "**July 1944.** Bretton Woods: others peg to the dollar; the dollar is defined at $35 gold for official holders.",
      "**1933, still in force.** Domestic U.S. gold holding remains restricted. The 1971 decision does not “take gold from Americans.” That had already happened.",
      "**1961–March 1968.** London Gold Pool. Collapse, then a two-tier gold market.",
      "**May 1971.** The D-mark floats. Pressure on the remaining parities.",
      "**15 August 1971.** Gold window closed. Convertibility for official holders is suspended.",
      "**December 1971.** Smithsonian: new parities, official gold price raised to $38, later $42.22. Accounting, not a restored window.",
      "**1973.** Major currencies float against each other. The pegged Bretton Woods system is over.",
    ],
  },
  {
    heading: "15 August 1971",
    paragraphs: [
      "At Camp David, Nixon’s advisers — including John Connally and Paul Volcker — chose suspension rather than a deflation tight enough to defend $35, and rather than a negotiated devaluation first. The window was closed unilaterally. Nixon called the pause temporary. It was not reversed.",
      "The rest of the Sunday-night package (the freeze, the surcharge) was domestic politics and a bargaining chip on trade. For this map, the monetary fact is narrower: the last official gold contract on the dollar was broken that weekend.",
    ],
  },
  {
    heading: "What followed",
    paragraphs: [
      "Smithsonian tried to reset the pegs and raise the official gold price. Those numbers sat on paper. By 1973 the major currencies were floating. Central banks still held gold. None of the large currencies was a standing, public, gold-redemption contract.",
      "Whether floating fiat is better or worse is not this page’s job. The job is the date, the architecture it ended, and the architecture it was not.",
    ],
  },
];


const classicalGold: Section[] = [
  {
    heading: "What the classical gold standard was",
    paragraphs: [
      "Before 1914 the international monetary system was a set of practices, not a single treaty. A currency on the classical gold standard was convertible into a defined weight of gold. Notes and deposits were claims that could, in ordinary times, be turned into coin or bullion at a published mint price. Gold could be imported and exported.",
      "That convertibility, plus the cost of shipping metal, produced **gold points**: exchange rates could only wander so far before it became cheaper to send gold. Central banks — above all the Bank of England — used Bank rate and other devices to attract or repel metal. London was the centre. Other members kept their promises because a broken promise showed up as a gold drain.",
    ],
  },
  {
    heading: "How it actually worked",
    paragraphs: [
      "Textbooks later called this the “rules of the game”: lose gold, tighten; gain gold, ease. Real central banks did not always play that cleanly. They sterilised flows, used gold devices, and protected domestic credit when they could. The constraint still mattered. A bank that promised gold on demand could not expand without limit if people and foreigners were free to take the metal.",
      "The United States entered the century with a gold dollar and, after 1913, a new central bank — the sequel to the [Panic of 1907](/history/20th-century/panic-1907-fed). The classical system around that Fed was already older than the Fed. The break came from war, not from 1907.",
    ],
  },
  {
    heading: "Why 1914 ended it",
    paragraphs: [
      "The First World War made convertibility and free gold movement incompatible with war finance. Governments needed to spend faster than tax and genuine borrowing would allow. Gold exports were blocked or licensed. Notes were protected from internal drains. Britain’s Currency and Bank Notes Act of **1914** is one legal marker; similar suspensions ran across the belligerents that summer and autumn.",
      "The United States, not yet in the war, stayed closer to gold than the European combatants. New York, not London, became the place dollars and gold accumulated. That does not mean the classical system survived. A standard that only some members still honour, while the rest fight on inconvertible paper, is no longer the pre-1914 order.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The order, not every local statute:"],
    list: [
      "**Before 1914.** Convertibility, gold shipment, gold points. London at the centre.",
      "**July–August 1914.** War. Gold exports blocked or licensed. Notes protected. The stop is gone for the belligerents.",
      "**1914–18.** War finance on inconvertible paper. Prices rise; the gold name remains on some coins and accounts.",
      "**1922, Genoa.** A gold-*exchange* sketch: hold currencies that are themselves gold-convertible, instead of gold. Not the old machine.",
      "**1925–1931.** Britain restores the pre-war gold parity, then leaves gold. Other “returns” reuse the word. Private convertibility and routine metal shipment among several centres do not come back as they were.",
    ],
  },
  {
    heading: "What came after was not a pause",
    paragraphs: [
      "After 1918 many countries tried to “return to gold.” They reused the word. They did not restore the old machinery: several centres, private convertibility, gold that actually moved when the points were hit.",
      "Where the wartime stop never returned, paper could run for the Treasury. [Weimar hyperinflation](/history/20th-century/weimar-1923) is the European extreme of that break — war finance first, then a mark that ceased to work as money.",
    ],
  },
];


const goldRecall1933: Section[] = [
  {
    heading: "What Order 6102 did",
    paragraphs: [
      "On 5 April 1933 Franklin Roosevelt signed Executive Order 6102, requiring most domestic gold coin, bullion, and certificates to be delivered to the government at the official price. Exceptions existed for industry, art, and small amounts. The Gold Reserve Act of 1934 then vested title to gold in the United States and reset the official dollar price from $20.67 to $35 an ounce.",
      "The public claim on gold at the old mint price was removed by statute. After that, official gold is a Treasury asset, not circulating money.",
    ],
  },
  {
    heading: "The stated rationale",
    paragraphs: [
      "The contemporaneous justification was Depression emergency: stop hoarding, expand the money stock, raise the price level. Whether that worked as advertised is a later argument. This page stays on the documentary sequence: order, delivery, statute, new official price.",
    ],
  },
  {
    heading: "After 1933",
    paragraphs: [
      "Americans could not legally hold monetary gold for decades. Foreign governments still had a gold window on the dollar until [August 1971](/history/20th-century/bretton-woods-nixon-1971). Those are two different claims, two different decades.",
    ],
  },
];

const whatIsSoundMoney: Section[] = [
  {
    heading: "A working definition",
    paragraphs: [
      "Sound money is money whose supply cannot be expanded at will by a political authority. The unit is costly to produce, or it is bound by a contract that can actually be enforced — typically redeemability into a defined weight of metal. The point is not nostalgia for coins. It is whether the unit of account stays honest over long periods.",
      "If a treasury or a central bank can create more units without a matching real cost, the money is not sound in this sense. It may still circulate. It may still be legal tender. Circulation is not the test. The test is whether the issuer can dilute the stock as a matter of policy.",
    ],
  },
  {
    heading: "Where the phrase comes from",
    paragraphs: [
      "Older English used “sound” in two related ways: the ring of a good coin (as against a counterfeit or a clipped piece), and sound as in healthy, not debased. Both senses survive. A sound coin rang true. A sound monetary standard did not quietly lighten the unit.",
      "The phrase is now also used in crypto glossaries. That is a different search. This site uses it for metal-constrained money and for the ideas needed to read the history.",
    ],
  },
  {
    heading: "What the definition is not",
    paragraphs: [
      "It is not a claim that gold and silver never changed in price, or that every gold standard was well run. Metal money can be debased by clipping, by mint ratio tricks, and by suspending convertibility. The definition names a constraint, not a guarantee.",
    ],
  },
];

const hardMoneyVsFiat: Section[] = [
  {
    heading: "Hard money",
    paragraphs: [
      "Hard money is money that is costly to produce. Historically that cost was mining and minting gold or silver. You cannot create a new ounce with a vote or a keystroke. You can steal it, debase the coin, or suspend convertibility — those are different failures — but the metal itself does not appear because a treasury needs it.",
      "Hard is not a synonym for “never changes price.” An ounce of gold can buy more or less bread. The hardness is on the supply side: expanding the stock takes real resources.",
    ],
  },
  {
    heading: "Fiat money",
    paragraphs: [
      "Fiat money is a claim created by a state or a bank, accepted because of law and habit. The Latin *fiat* is “let it be done.” The unit exists because an authority says it does, and because people need it for taxes, debts, and daily settlement.",
      "Fiat can be well managed or badly managed. That is not the distinction. The distinction is the stop. If the issuer can expand the stock as policy, the money is fiat in this map’s language even when it once had a gold story attached.",
    ],
  },
  {
    heading: "Both can circulate",
    paragraphs: [
      "Circulation does not decide the category. People have used salt, cigarettes, paper notes, bank deposits, and gold coin. A circulating fiat unit can be more convenient than coin. A hard unit can be hoarded and disappear from the till. The question on this page is the constraint, not the popularity.",
      "When convertibility is suspended, a note that was a claim on metal becomes, for practical purposes, fiat. That is why [1914](/history/20th-century/classical-gold-standard-end) and [1971](/history/20th-century/bretton-woods-nixon-1971) matter to the names.",
    ],
  },
];

const inflation: Section[] = [
  {
    heading: "What inflation is on this site",
    paragraphs: [
      "Inflation, here, is a decline in the purchasing power of the unit. Prices are the visible surface. The underlying question is whether the stock of money is growing faster than the goods and claims it is asked to measure.",
      "An hour of work is a useful check. If the same hour buys less bread, less rent, or less metal over years, the unit has weakened. That can happen with or without a dramatic crisis. Hyperinflation is a special case, not the definition.",
    ],
  },
  {
    heading: "Money stock and prices",
    paragraphs: [
      "Prices can rise because goods are scarce, because demand shifts, or because more units chase the same things. Hard-money writers emphasise the last channel. A complete account of any year needs all three. The map only needs the distinction: a unit that can be issued without cost makes the last channel a policy choice.",
      "Sound money does not make relative prices stand still. It constrains one source of a general rise. [Weimar 1923](/history/20th-century/weimar-1923) is the extreme case of that channel running without a stop.",
    ],
  },
];

const backedMoney: Section[] = [
  {
    heading: "A contract, or a slogan",
    paragraphs: [
      "“Backed” is used loosely. A note that is legally redeemable in a defined weight of metal is one thing: a contract. A currency said to be “supported by” gold sitting in a vault, with no public right to present the note and take the metal, is another: a slogan, or at best a reserve-management fact.",
      "Redeemability is testable. Either a holder can demand the metal at a known price, or they cannot. Reserves on a balance sheet, without that right, do not make the unit hard.",
    ],
  },
  {
    heading: "Three easy confusions",
    paragraphs: [
      "First: covering a note issue with government bonds is not metal backing. It is a claim on a tax office. Second: a gold-exchange standard, as after [Bretton Woods](/history/20th-century/bretton-woods-nixon-1971), backed some currencies with dollars and dollars with official gold — not with coin in the public’s hand. Third: the [Rentenmark](/history/20th-century/weimar-1923) was “backed” by mortgages. That was an accounting and political device to stop the press, not a pile of gold at the teller window.",
      "The [1933 U.S. gold recall](/history/20th-century/1933-gold-recall) shows the other side: even a gold dollar can have the public claim removed by statute.",
    ],
  },
];

const barsVsCoins: Section[] = [
  {
    heading: "What the choice is",
    paragraphs: [
      "Physical gold and silver come mainly as minted coins or as cast or stamped bars. Both are metal. The difference is fabrication, recognisability, and how you later divide or resell a holding.",
      "Dealers will have a view. So will forums. The map only needs the trade-off: bars usually cost less per ounce above spot; coins usually cost more and are easier for a stranger to recognise.",
    ],
  },
  {
    heading: "Bars",
    paragraphs: [
      "A bar is weight and fineness with a maker’s stamp. Larger bars spread minting and assay cost over more ounces, so the [premium over spot](/gold-silver/premium-over-spot) is often lower. Storage is denser. Resale of a large bar can mean finding a counterparty who will assay or who trusts the brand and serial.",
      "Small minted bars (one ounce and under) sit closer to coins on premium. The bar-vs-coin slogan is really about large wholesale bars versus government coins. Name the size, or the comparison is empty.",
    ],
  },
  {
    heading: "Coins",
    paragraphs: [
      "A bullion coin is a government or mint product with a face value that is far below the metal. The coin is recognised by design: Maple, Philharmonic, Krugerrand, and so on. That recognisability is what you pay the extra premium for. It can make small sales simpler. It does not make the coin “money” in the legal-tender-for-rent sense in most places.",
      "Numismatic and proof coins are a different market. This pillar is about bullion — metal as metal — not collectibles. Mixing them is how beginners overpay.",
    ],
  },
];

const premiumOverSpot: Section[] = [
  {
    heading: "What premium is",
    paragraphs: [
      "Spot is a screen price for a paper ounce. The product in hand is fabricated, shipped, insured, and sold by someone who must buy it back later. Premium is the difference. It is not automatically a trick. It is fabrication, distribution, and the bid–ask of a physical market.",
      "A coin can carry a large premium and still be a clean product. A bar can be near spot and still be hard to resell. Compare it to the [bars vs coins](/gold-silver/bars-vs-coins) trade-off, not to a morality tale.",
    ],
  },
  {
    heading: "Bid, not only ask",
    paragraphs: [
      "The number that matters later is the dealer’s buy price — the bid — not only what you paid. A thin product with a fat ask and a poor bid is expensive twice. Ask what they will pay today for the same item, before you care about the story on the reverse.",
    ],
  },
];

const storage: Section[] = [
  {
    heading: "The trade-off",
    paragraphs: [
      "Storage is access versus cost versus counterparty. Home is near and on you. A vault is distant and on them. Allocated means specific bars or coins in your name; pooled or unallocated is a claim on a stack. This page describes the menu. It does not pick.",
    ],
  },
  {
    heading: "Home",
    paragraphs: [
      "Home storage keeps the metal in your control and the operational risk on you: fire, theft, forgetfulness, and the fact that a safe advertises itself. It has no vault fee. It has no auditor. Whether that is acceptable is a household question.",
    ],
  },
  {
    heading: "Allocated and vaults",
    paragraphs: [
      "Allocated storage, done properly, identifies bars or coins as yours. You should be able to name what you own. Unallocated and “pool” accounts are easier to run and easier to confuse with a bank deposit. If you cannot point to a bar list, you have a claim, not a pile.",
    ],
  },
];

const spottingFakes: Section[] = [
  {
    heading: "High level only",
    paragraphs: [
      "Counterfeits exist, especially of popular coins and of small bars with famous stamps. The first defence is not a home laboratory. It is a counterparty you can still find in a year, a product that is common enough to be known, and a check of weight and dimensions against the published spec.",
      "This is not a testing manual. It will not teach you to run acid, XRF, or ultrasound. A wrong test can damage a good piece. If a holding is large enough that a fake would matter, use a professional.",
    ],
  },
  {
    heading: "What a beginner can actually do",
    paragraphs: [
      "Weigh it. Measure it. Look at the edge, the reeding, the stamp, and whether the colour is trying too hard. Compare to a known genuine piece of the same product if you have one. None of that is conclusive. It is a filter for the obvious.",
      "A price far below everyone else is information. Treat it as a warning, not a bargain.",
    ],
  },
];

const beginnerChecklist: Section[] = [
  {
    heading: "First ounces are a process",
    paragraphs: [
      "A first physical holding is four decisions: what form, from whom, where it lives, and what you write down. Skip any one and the others get expensive.",
    ],
  },
  {
    heading: "The list",
    paragraphs: [
      "One: decide [bar or coin](/gold-silver/bars-vs-coins), and the size, before you look at a price. Two: know the [premium over spot](/gold-silver/premium-over-spot) and the bid, not only the ask. Three: choose [storage](/gold-silver/storage) before the parcel moves. Four: if you buy remote, read [buying online](/gold-silver/buying-online). Five: keep invoices, serials, and a note of where the metal is — in a place that is not only the same drawer.",
      "Six: stay off collectibles until you understand bullion. Seven: do not skip the fake filter on [spotting fakes](/gold-silver/spotting-fakes), and do not think a blog post replaces a test.",
    ],
  },
];

const buyingOnline: Section[] = [
  {
    heading: "Logistics, not a ranking",
    paragraphs: [
      "Buying metal through a screen is identity of the dealer, payment, shipping, and what happens if a parcel never arrives. This page is a watch-for list. It does not rank vendors.",
    ],
  },
  {
    heading: "What to watch",
    paragraphs: [
      "Who they are: a name, a place, a history you can check without their own FAQ. How you pay: some methods are cheap and reverse; some are final. How they ship: insured, signature, discreet, and to an address you control. What the invoice says: product, weight, fineness, serials if any, and the [premium](/gold-silver/premium-over-spot) you actually paid.",
      "If they will only “store it for you” and never ship, you have the [storage](/gold-silver/storage) problem in another costume. If the price is an outlier, you have the [fakes](/gold-silver/spotting-fakes) problem in another costume.",
    ],
  },
];

const warehouses: Section[] = [
  {
    heading: "A receipt that starts to move",
    paragraphs: [
      "Paper money, in this cluster, does not begin as a theory. It begins as a warehouse note: metal is left with a goldsmith, a mint, or a public bank, and a receipt says so. The holder can come back for the same weight. That is a claim, not yet a currency.",
      "Banking starts when the receipt itself is used to pay. The metal stays in the vault; the paper moves. At that moment the note is money in use, even if the law still calls it a deposit receipt.",
    ],
  },
  {
    heading: "From private vaults to public books",
    paragraphs: [
      "Late-medieval and early-modern Europe already knew deposit banking in Italian cities. London goldsmiths, in the seventeenth century, issued receipts that circulated among merchants. The next step was a public institution whose money was a book entry everyone had to use for large payments — the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam).",
    ],
  },
];

const amsterdam: Section[] = [
  {
    heading: "A public deposit bank, 1609",
    paragraphs: [
      "The Bank of Amsterdam (Wisselbank) was set up by the city to take in coin, credit a deposit, and let merchants settle in bank guilders. Bills of exchange on Amsterdam were paid through its books. For a long time its reputation was that it did not lend: a florin banco was a claim on metal in the vault, not on a loan book.",
      "A public bank can be a warehouse with better accounting. It can also become a lender in secret. Amsterdam did both, in sequence.",
    ],
  },
  {
    heading: "The concealed lending",
    paragraphs: [
      "From the late seventeenth century, and more clearly in the eighteenth, the bank made advances to the city and to the Dutch East India Company that were not advertised as the old warehouse model. When that lending became public knowledge in the 1780s–1790s, the agio collapsed and the institution never recovered its old role.",
    ],
  },
];

const england: Section[] = [
  {
    heading: "A charter for a war, 1694",
    paragraphs: [
      "The Bank of England was a private corporation with a public job: lend to the Crown, in the Nine Years’ War, against a stream of taxes, and issue notes. It was not a copy of Amsterdam. It was born as war finance with a note issue attached.",
      "The charter was renewed because the state still needed the machine. Over the eighteenth century its notes became the ordinary paper of London.",
    ],
  },
  {
    heading: "Restriction, resumption",
    paragraphs: [
      "In 1797, under the Revolutionary and Napoleonic wars, convertibility of notes into gold was restricted. It returned in the 1820s. That cycle — suspend for war, resume later — is the English version of a pattern this map meets again in 1914.",
    ],
  },
];

const assignats: Section[] = [
  {
    heading: "Paper on confiscated land",
    paragraphs: [
      "Assignats were notes of the French Revolution, first issued in 1789–90, supposed to be backed by the sale of confiscated church and émigré land — the *biens nationaux*. The land was real. The promise was that paper would be retired as land was sold. Quantity rose faster than retirement. Confidence did not keep up.",
      "This is a different episode from [John Law](/history/banks-paper/john-law). Law is 1720 and a royal bank-plus-company. Assignats are a revolutionary fiscal instrument with a land story.",
    ],
  },
  {
    heading: "How the paper died",
    paragraphs: [
      "As the wars and the Revolution demanded more, new assignats were printed. Prices in assignats ran away; metal went to a premium and then to hiding. By 1795–96 the paper was not a unit anyone would hold. The Directory returned toward metal.",
    ],
  },
];

const whyMarkets: Section[] = [
  {
    heading: "Selection, not a decree",
    paragraphs: [
      "Before states stamped coins, traders already used gold and silver as money. Cattle, grain, shells, and copper had their ranges. For high-value, long-distance settlement, two metals kept winning: scarce enough not to be planted, durable enough not to rot, divisible enough to make change.",
      "Coinage is a later technology for verifying metal. The metal came first.",
    ],
  },
  {
    heading: "What the properties actually do",
    paragraphs: [
      "Durability means the unit can sit for a generation. Divisibility means a debt can be paid without slaughtering an ox. Homogeneity means one ounce is like another, once refined. Scarcity means a king cannot harvest a new stock from a field.",
    ],
  },
];

const lydia: Section[] = [
  {
    heading: "The stamp",
    paragraphs: [
      "Lydia, in western Anatolia, is the conventional starting point for struck coinage in the seventh–sixth centuries BCE. Early pieces were electrum — a gold–silver mix — with a punch and, later, a type. Croesus is the name attached to separating gold and silver issues. The invention is not the metal. It is the stamp.",
      "A stamp cuts the cost of verifying weight and fineness. You still need to trust the issuer. You no longer need to weigh every lump in a market of strangers.",
    ],
  },
];

const greece: Section[] = [
  {
    heading: "Silver as a language",
    paragraphs: [
      "Greek city-states turned mines and mints into a commercial network. Athens’ Laurion silver and the owl tetradrachm are the familiar face: a recognised weight of silver that could move across the Aegean without a letter of introduction.",
      "Control of a mine was fiscal power. Laurion helped fund Athenian fleets.",
    ],
  },
];

const rome: Section[] = [
  {
    heading: "Two metals, one state",
    paragraphs: [
      "Rome ran gold and silver together: the aureus and the denarius as the famous pair, with bronze for small change. When the mint ratio and the market ratio drift, the “wrong” metal leaves circulation.",
    ],
  },
  {
    heading: "Slow, then obvious, debasement",
    paragraphs: [
      "Silver fineness in the denarius and later the antoninianus fell as wars and donatives outran the mines. The third-century crisis made the coinage a fiscal instrument. When spending outruns metal, the coin is lightened.",
    ],
  },
];

const solidus: Section[] = [
  {
    heading: "A gold coin that keeps its weight",
    paragraphs: [
      "Constantine’s solidus (early fourth century) was a gold coin of tightly held weight and fineness. It outlasted the western empire as the Byzantine nomisma. Continuity of weight is the story, not a romance of Rome.",
    ],
  },
];

const earlyUs: Section[] = [
  {
    heading: "A republic that named both metals",
    paragraphs: [
      "The Coinage Act of 1792 wrote gold and silver into United States law and fixed a mint ratio (fifteen to one). Which metal actually stayed in circulation was decided by the market ratio, not by the preamble.",
      "When world prices moved, Gresham’s pattern appeared: the legally overvalued metal stayed; the other was exported or hoarded. The 1834 change toward a gold-friendlier ratio is part of the same arithmetic.",
    ],
  },
];

const jackson: Section[] = [
  {
    heading: "A bank fight before the Fed",
    paragraphs: [
      "Andrew Jackson’s war on the Second Bank of the United States (charter fight, 1832 veto, removal of deposits) is American politics and monetary history at once. The Bank was a federally chartered corporation that issued notes and held government funds. Jackson treated it as a concentrated power.",
      "Federal deposits moved to state “pet” banks. The Specie Circular (1836) required gold and silver for public land. The Panic of 1837 followed. The later central-bank statute is 1913 — the [Panic of 1907](/history/20th-century/panic-1907-fed).",
    ],
  },
];

const greenbacks: Section[] = [
  {
    heading: "Paper as a war measure",
    paragraphs: [
      "The Union financed the Civil War in part with United States Notes — greenbacks — made legal tender in 1862. They were not redeemable in gold at the time. Gold traded at a premium to paper in a free gold market in New York.",
      "Whether to contract the greenbacks, whether to resume gold payments, and at what parity, dominated postwar politics. The Resumption Act of 1875 set a date (1879).",
    ],
  },
];

const crime1873: Section[] = [
  {
    heading: "What the act did",
    paragraphs: [
      "The Coinage Act of 1873 omitted the standard silver dollar from the list of coins to be minted. In later agrarian politics that omission became the “Crime of 1873”: a conspiracy to demonetize silver. In the Treasury’s telling it was a clarification toward gold, aligned with Europe. The statute is the fact.",
      "Silver producers and debtors wanted “free silver” — unlimited coinage at sixteen to one. William Jennings Bryan’s 1896 campaign is the loud face of a fight that started in this act.",
    ],
  },
];

const roadBack: Section[] = [
  {
    heading: "Resumption, then a gold statute",
    paragraphs: [
      "Specie payments resumed in 1879: greenbacks could again be treated as claims on gold at par, in practice. The Gold Standard Act of 1900 defined the dollar in gold. The United States entered the twentieth century as a gold-standard country in law. The next cluster starts with the [Panic of 1907](/history/20th-century/panic-1907-fed).",
    ],
  },
];

const potosi: Section[] = [
  {
    heading: "A mountain that moved the world’s silver",
    paragraphs: [
      "Cerro Rico at Potosí (in today’s Bolivia), worked from the 1540s, became the great silver source of the early modern Spanish empire. Output flooded Spain, Europe, and — via the Manila galleon — China.",
      "The [world map](/maps) is the visual companion. Production and reserves sit there, not on this page.",
    ],
  },
];

const pieceOfEight: Section[] = [
  {
    heading: "A coin that crossed oceans",
    paragraphs: [
      "The Spanish dollar — the eight-real piece, the piece of eight — was a silver coin of roughly 27 grams that circulated from the Americas to Europe to East Asia. The United States dollar was defined, in the 1790s, with this coin in mind.",
    ],
  },
];

const bimetallism: Section[] = [
  {
    heading: "Two metals, one legal unit",
    paragraphs: [
      "Bimetallism is the attempt to keep gold and silver in the same monetary system at a fixed mint ratio. When the market ratio moves, Gresham’s pattern appears. The statute does not defeat arbitrage.",
      "The American political event is the [Crime of 1873](/history/america/crime-of-1873). The mechanics are on this page.",
    ],
  },
];

const silverThursday: Section[] = [
  {
    heading: "A squeeze, then a rule change",
    paragraphs: [
      "In 1979–80 Nelson Bunker Hunt and William Herbert Hunt, with partners, built a very large position in silver bullion and futures. The price ran toward $50 an ounce in January 1980. In late March, after exchange and dealer rule changes that raised margins and limited buys, the price collapsed. “Silver Thursday” (27 March 1980) is the name of the break.",
    ],
  },
];

const silverIndustry: Section[] = [
  {
    heading: "Two jobs at once",
    paragraphs: [
      "Silver is still money in memory: coins, bars, a hedge people name in the same breath as gold. It is also an industrial input — photography for a long twentieth century, then electronics, then photovoltaics. Those two jobs pull the metal in different directions. This page names the split. It does not forecast which job wins.",
    ],
  },
];

const bodies: Record<string, Section[]> = {
  "banks-paper/john-law": johnLaw,
  "20th-century/panic-1907-fed": panic1907,
  "20th-century/weimar-1923": weimar,
  "20th-century/bretton-woods-nixon-1971": nixon,
  "20th-century/classical-gold-standard-end": classicalGold,
  "20th-century/1933-gold-recall": goldRecall1933,
  "sound-money/what-is-sound-money": whatIsSoundMoney,
  "sound-money/hard-money-vs-fiat": hardMoneyVsFiat,
  "sound-money/inflation-purchasing-power": inflation,
  "sound-money/backed-money": backedMoney,
  "gold-silver/bars-vs-coins": barsVsCoins,
  "gold-silver/premium-over-spot": premiumOverSpot,
  "gold-silver/storage": storage,
  "gold-silver/spotting-fakes": spottingFakes,
  "gold-silver/beginner-checklist": beginnerChecklist,
  "gold-silver/buying-online": buyingOnline,
  "banks-paper/warehouses-to-public-banks": warehouses,
  "banks-paper/bank-of-amsterdam": amsterdam,
  "banks-paper/bank-of-england": england,
  "banks-paper/assignats": assignats,
  "ancient/why-markets-chose-gold-silver": whyMarkets,
  "ancient/lydia-first-coins": lydia,
  "ancient/greece-silver-trade": greece,
  "ancient/rome-denarius-aureus": rome,
  "ancient/solidus-continuity": solidus,
  "america/early-us-coinage": earlyUs,
  "america/jackson-and-the-bank": jackson,
  "america/greenbacks-civil-war": greenbacks,
  "america/crime-of-1873": crime1873,
  "america/road-back-gold": roadBack,
  "silver/potosi": potosi,
  "silver/piece-of-eight": pieceOfEight,
  "silver/bimetallism": bimetallism,
  "silver/silver-thursday": silverThursday,
  "silver/monetary-and-industry": silverIndustry,
};

export function getBody(cluster: string, slug: string): Section[] | null {
  return bodies[`${cluster}/${slug}`] ?? null;
}
