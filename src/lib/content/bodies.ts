export type Callout = { label: string; paragraphs: string[] };
export type Section = { heading: string; paragraphs: string[]; list?: string[]; callout?: Callout };

const johnLaw: Section[] = [
  {
    heading: "",
    paragraphs: [
      "John Law’s System in France fused a note-issuing bank with a rising colonial trading company. In 1719–1720 paper notes and Mississippi Company shares inflated together. The bust of 1720 was a paper-and-shares collapse under a regency seeking relief from war debt. It is not the same episode as France’s later assignats, and it is not “France printed Weimar.”",
    ],
  },
  {
    heading: "Who John Law was",
    paragraphs: [
      "John Law (1671–1729) was a Scottish financier and monetary theorist. He argued that a well-managed paper currency, backed by sound assets and careful issue, could expand trade beyond the limits of scarce coin. After exile and travel on the Continent, he gained the ear of the French Regent, Philippe d’Orléans, in the years after Louis XIV’s death.",
      "France faced heavy public debts from long wars. Tax revenues were strained. Coin was hoarded or exported when confidence slipped. Law offered a modern-sounding fix: a bank that issued notes, and a company that could absorb state debt while developing colonial trade, especially around the Mississippi basin and Louisiana.",
      "Law wrote and spoke as a reformer of credit, not as a carnival promoter in the first telling. His early proposals stressed order, reserves, and trade. The historical record then shows how political need and market mania outran those restraints. He was not a cartoon printer of endless paper from day one. His System grew by stages—bank notes, company shares, debt conversion, and monopoly privileges—until the pieces locked together and then broke.",
    ],
  },
  {
    heading: "The bank and the Mississippi Company",
    paragraphs: [
      "In 1716 Law founded the Banque Générale. It was later reorganized as the Banque Royale when the crown took a closer grip. The bank issued notes payable in coin under stated rules. Those notes circulated as a convenient claim on metal, not as metal itself.",
      "Alongside the bank stood the company later known as the Mississippi Company—first the Compagnie d’Occident, then the Compagnie des Indes after mergers with other trading privileges. It held rights over colonial trade and related monopolies. The state used the company to refinance debt. Creditors were steered into shares instead of older claims on the treasury.",
      "Bank and company became partners in one System. Notes supported share demand. Share enthusiasm supported confidence in notes. Offices, privileges, and propaganda tied the story of colonial wealth to the paper that funded it.",
      "Keep the instruments distinct. A **bank note** was a promise to pay in coin, subject to the bank’s rules and reserves. A **share** was ownership in the company, priced in the market and fed by dividends, privileges, and speculation. Law’s danger was fusion. When the same political machine pushed both, a rise in shares felt like proof that notes were sound—and plentiful notes made shares easier to bid up.",
    ],
  },
  {
    heading: "How the Mississippi Bubble inflated",
    paragraphs: [
      "Through 1719 the company’s privileges widened. Debt-conversion schemes pulled more rentiers into shares. Share prices rose with extraordinary speed. New issues and subscriptions absorbed paper wealth that had nowhere else to go under the Regent’s policy mix.",
      "Note issue expanded as the System tried to keep credit easy and share markets firm. For a time, paper seemed to create prosperity. Luxury spending rose in Paris. Speculators crowded the rue Quincampoix. Foreign visitors described a city obsessed with subscriptions and price talk.",
      "Metal moved the wrong way for a durable note system. Coin and bullion were drawn into the whirl, then increasingly driven out as people preferred to hold or export hard money while spending the paper. When confidence is high, notes displace coin in daily use. When confidence cracks, coin leaves circulation or leaves the country. The note becomes only a claim on a thinning reserve. Law’s System leaned on confidence longer than on metal.",
      "The peak of Mississippi share mania sits in late 1719 and early 1720. Prices that had multiplied then struggled to find new buyers at the top. Attempts to manage the market—controls on coin, forced relations between notes and shares, and shifting decrees—signaled strain rather than mastery. Peak and bust belong to that narrow window: mania cresting around the turn into 1720, collapse unfolding across 1720 as policy patches failed.",
    ],
  },
  {
    heading: "The collapse of 1720",
    paragraphs: [
      "In 1720 the System broke. Share prices fell from their peak. Bank notes lost credibility as convertibility and coin rules shifted under emergency decrees. Holders who could fled into metal and foreign exchange. Shops and markets relearned to distrust paper that had been mandatory or privileged only weeks before.",
      "Law’s political protection evaporated as losses spread through the rentier class and the court. He left France. The Regency was left with ruined paper fortunes and a long memory of “paper systems.” Later French politics would invent new paper under new names. The 1720 scar remained part of public caution.",
      "The bust was fast in market time. What had inflated as a joint note-and-share machine deflated as both legs failed together. The Banque Royale’s paper could not be defended once the company’s equity story died and coin fled.",
      "Do not merge this episode with the French assignats of the 1790s. Assignats were revolutionary paper tied to confiscated church and émigré lands, issued decades later under a different regime and war finance. Do not merge it with Germany’s 1923 hyperinflation either. Weimar was a twentieth-century collapse of a national paper mark after war, reparations, and extreme monetization—one cautionary rhyme among many, not the same event or the same century.",
      "John Law’s 1720 leaves a narrower documentary lesson. Fusing a note-issuing bank with a rising equity story can inflate both until metal drains and confidence snaps. The Mississippi Bubble was paper-and-shares under Regency debt politics. It was not Weimar, and it was not the assignats.",
    ],
  },
];

const panic1907: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The Panic of 1907 was a liquidity crisis centered on New York trust companies. Private bankers, led by J. Pierpont Morgan’s group, organized emergency support when no public central bank existed. The Federal Reserve did not cause 1907. Congress created the Fed afterward, in 1913, in part because that panic showed how thin the country’s crisis plumbing was.",
    ],
  },
  {
    heading: "What the Panic of 1907 was",
    paragraphs: [
      "In October 1907 a run hit the Knickerbocker Trust Company on Fifth Avenue in New York. Depositors lined up for cash. Clerks paid out until the till could not meet the line. On 22 October Knickerbocker suspended payments. Fear then moved to other trusts and to the call-money market that funded Wall Street loans.",
      "The week had already cracked around a failed copper corner linked to F. Augustus Heinze and Charles Morse. Banks and trusts tied to those names looked weak. Depositors did not wait for slow audits. They wanted notes they could spend that day.",
      "Call money—the overnight rate for brokers—spiked sharply. Reports put rates at twenty-five percent and higher as credit seized up. On 24 October the New York Stock Exchange nearly shut for want of cash to clear trades. Gold still settled contracts in the wider monetary order. What failed was access to cash at the point of panic. The United States had no standing public lender of last resort with a legal duty to supply emergency liquidity to the whole banking field.",
      "The scene at Knickerbocker was ordinary panic mechanics. A crowd forms. Payment slows. Rumor names the next door. Without a backstop that can lend against good assets, solvent firms can fail for lack of cash in the hour they need it.",
    ],
  },
  {
    heading: "Why the trusts were the weak point",
    paragraphs: [
      "National banks in New York belonged to the Clearing House. Members could pledge good paper and borrow cash overnight through that club. Trust companies took deposits and made loans, but many sat outside the Clearing House. They had no automatic seat at the table that recycled liquidity during a run.",
      "That gap mattered. A run on a trust was a crowd at a door with no club behind it. When Knickerbocker’s condition looked bad, Clearing House support was refused. The line then moved to other trusts. Institutions inside the club had a path to emergency cash. Trusts outside it became the panic’s weak point.",
      "Trusts had grown quickly in the years before 1907. They offered deposit-like liabilities and competed for business that looked like banking. Regulation and mutual aid did not keep pace with that growth. In a calm year the gap stayed invisible. In October it became the map of the crisis.",
      "The 1907 crisis was therefore not a simple story that “gold failed.” Metal still defined the monetary unit. The plumbing failed. Trusts held large runnable liabilities without the same mutual support that national banks could tap through the Clearing House.",
    ],
  },
  {
    heading: "A short timeline, 1907–1913",
    paragraphs: [],
    list: [
      "**Early October 1907:** Copper speculation tied to Heinze and Morse breaks; linked banks and trusts look fragile.",
      "**22 October 1907:** Knickerbocker Trust faces a run and suspends payments.",
      "**23–24 October 1907:** Runs spread among trusts; call money spikes; the Exchange nearly closes.",
      "**Late October 1907:** Morgan’s group and allied banks organize pools to support solvent firms, steady trust runs where possible, and keep the market open.",
      "**May 1908:** Aldrich-Vreeland Act allows emergency national-bank notes against broader collateral and creates the National Monetary Commission.",
      "**November 1910:** Senator Nelson Aldrich and a small group meet on Jekyll Island, Georgia, to draft a reserve-association plan. That meeting is design folklore, not a statute.",
      "**1912–1913:** Pujo hearings attack the “Money Trust”; political wrapping of reform shifts toward regional reserve banks.",
      "**23 December 1913:** President Woodrow Wilson signs the Federal Reserve Act.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "The sequence is created-after, not before. The Fed was built in the wake of 1907. It was not the institution that produced the panic.",
    ],
  },
  {
    heading: "What the Fed was built to do",
    paragraphs: [
      "In the crisis weeks, Morgan’s library at 219 Madison Avenue became a private command post. Bankers met, books were checked, and pools were pledged. Some firms received support. Knickerbocker stayed closed. Gold imports and Treasury deposits helped at the margins. The documentary point is institutional, not hagiographic: a private coalition acted as a temporary last resort because statute had not built one.",
      "Aldrich-Vreeland (1908) was the first legislative answer. Groups of national banks could issue emergency currency against assets other than only government bonds. The same law funded a National Monetary Commission to study a permanent system.",
      "The commission toured Europe and studied banks that already had a legal last window. The Aldrich Plan that followed imagined a central reserve association with banker influence and elastic note issue. Public politics rejected a design that looked too much like Wall Street’s private club with a federal seal.",
      "The Federal Reserve Act of 1913 created regional Federal Reserve Banks and a federal board structure. Member banks could discount commercial paper and receive Reserve notes. The public brief was elastic currency and a lender of last resort for banks, so an October run would not depend on one private library.",
      "Jekyll Island belongs in the record as a drafting episode in the commission era. It is not the law itself. The statute is the December 1913 Act. Morgan’s 1907 rescue belongs as a private substitute for a missing public facility—stated as fact, not as hero worship, and not as proof that one man should own the last window forever.",
    ],
  },
  {
    heading: "What came next on this cluster",
    paragraphs: [
      "After 1913 the next hinge on this cluster is the wartime break with classical gold convertibility. World War I suspended or strained gold-standard rules among major powers. The Fed’s early years therefore sit between a private panic rescue and the wider end of the classical gold order.",
      "Read 1907 as the trust-banking liquidity crisis that made a US central bank politically possible. Then read the classical gold standard’s end as the next monetary hinge. The Fed did not cause Knickerbocker’s run. Knickerbocker’s run helped make the Fed’s creation look necessary to Congress.",
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
    heading: "",
    paragraphs: [
      "On 15 August 1971 the United States suspended the dollar’s convertibility into gold for foreign official holders. That act did not invent fiat money overnight. It ended the last official gold link in the post-war dollar system. Private Americans had already been barred from monetary gold under the 1933 recall. Bretton Woods did not fail in a single night. Pressure had built for years.",
    ],
  },
  {
    heading: "What the Nixon shock was",
    paragraphs: [
      "President Richard Nixon announced a New Economic Policy on Sunday evening, 15 August 1971. The package included a ninety-day wage and price freeze. It also added a temporary import surcharge. The line that mattered for money was simpler. The United States would suspend convertibility of the dollar into gold for foreign official holders.",
      "That suspension is often called the closing of the gold window. The window was not a retail counter for citizens. It was the official channel through which foreign treasuries and central banks could present dollars and demand gold at the posted official price. Closing it meant the dollar was no longer redeemable in metal under Bretton Woods rules.",
      "The shock was a policy choice under stress, not a sudden discovery that gold had vanished from history. The administration framed the move as temporary. It was not reversed.",
    ],
  },
  {
    heading: "How Bretton Woods actually worked",
    paragraphs: [
      "Bretton Woods was negotiated in 1944 at Bretton Woods, New Hampshire. Member currencies were pegged to the US dollar within narrow bands. The dollar itself was defined against gold at the official rate of thirty-five dollars per troy ounce.",
      "That design made the system a gold-exchange standard, not a classical gold standard. Most countries held dollars as reserves. They treated those dollars as claims that could, in theory, be turned into US gold. Ordinary people in the United States did not redeem paper for coin at the Treasury window. Their private gold rights had already been removed in 1933.",
      "Under the classical gold standard before 1914, national currencies were convertible into gold for a wider set of holders, and settlement often moved metal directly between countries. Bretton Woods put the dollar in the middle. Gold sat behind the dollar for official partners. The rest of the world sat behind the dollar peg.",
      "For a stranger to the arithmetic, the official price was a fixed conversion board. At thirty-five dollars an ounce, one dollar was defined as one thirty-fifth of an ounce of gold. If a foreign central bank held one billion dollars of official claims, those claims implied a right to about 28.6 million ounces of US gold at the posted rate—if convertibility still worked. When claims grew faster than the gold stock, the board stopped matching the vault.",
    ],
  },
  {
    heading: "Why the gold window came under pressure",
    paragraphs: [
      "Economist Robert Triffin stated the contradiction in plain English. The world needed more dollars to trade and hold as reserves. Those dollars came from US deficits and capital outflows. The more dollars foreigners held, the larger the official claims on US gold. If the United States supplied enough dollars for growth, confidence in convertibility weakened. If it tightened enough to protect the gold stock, the world shorted dollars. That trap is the Triffin dilemma.",
      "From 1961 to 1968 the London Gold Pool tried to hold the free-market gold price near thirty-five dollars. Major central banks sold gold into the market when the price rose. The pool collapsed in March 1968. A two-tier market followed. The official price remained for central-bank transactions. The free market price could move away from thirty-five.",
      "Pressure did not stop there. In May 1971 West Germany let the Deutsche Mark float. France converted dollars into gold in earlier years and kept pressing the convertibility rule. By August 1971 US gold stocks were far smaller than outstanding official dollar claims. The window could not pay every claim at thirty-five dollars if many holders presented paper at once.",
      "This episode is distinct from the 1933 gold recall. In 1933 the United States ordered private citizens to turn in monetary gold and then raised the official gold price for government accounting. In 1971 private Americans were already outside the official gold channel. What closed was the foreign official redemption of dollars for US gold.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1944:** Bretton Woods agreement; dollar pegged at $35 per ounce for official convertibility.",
      "**1961–1968:** London Gold Pool defends the free-market price near $35; collapses in March 1968.",
      "**March 1968:** Two-tier gold market; official price and free price diverge in practice.",
      "**May 1971:** Deutsche Mark floats; European pressure on the dollar intensifies.",
      "**August 1971:** US gold reserves stand well below official foreign claims at $35.",
      "**13–15 August 1971:** Camp David meetings with John Connally, Paul Volcker, and other advisers.",
      "**15 August 1971:** Nixon announces the New Economic Policy; gold window suspended.",
      "**December 1971:** Smithsonian Agreement; official gold price raised to $38 per ounce.",
      "**1973:** Further devaluation to $42.22; major currencies move to floating rates.",
    ],
  },
  {
    heading: "15 August 1971",
    paragraphs: [
      "The Camp David weekend framed the announcement. Treasury Secretary John Connally and Under Secretary Paul Volcker were central voices on the gold and exchange decisions. The public speech mixed domestic inflation politics with the external dollar problem. Wage and price controls addressed the home front. The surcharge pressed trading partners. The gold suspension addressed the mismatch between dollar claims and US gold.",
      "The key legal and monetary fact remained narrow. Foreign official holders could no longer present dollars and receive gold at the fixed official price. The dollar stayed the world’s main reserve currency in practice. Its last official gold anchor did not.",
    ],
  },
  {
    heading: "What followed",
    paragraphs: [
      "The administration called the suspension temporary. Temporary became permanent. In December 1971 the Smithsonian Agreement tried to rebuild pegs. The official gold price moved from thirty-five to thirty-eight dollars an ounce. Further adjustment took the official price to $42.22. Pegs still failed under market pressure.",
      "By 1973 major currencies floated against one another. The post-war gold-exchange system had ended. What remained was a dollar-centered fiat order without official convertibility into US gold. The 1971 decision closed a window that had already been under strain since the 1960s. It did not erase gold from history. It ended Bretton Woods as a working convertibility regime.",
    ],
  },
];


const classicalGold: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The classical gold standard was a set of practices: convertibility, gold shipping, and interest rates that responded to reserve drains. The First World War suspended it. What came after was not the same system with a pause. It was a different architecture.",
      "This stop on the [20th century](/history/20th-century) shelf follows the [Panic of 1907](/history/20th-century/panic-1907-fed). That page is a US liquidity crisis and a new central bank. This page is the peacetime gold order those years still sat inside, and the wartime break that ended it.",
    ],
  },
  {
    heading: "What the classical gold standard was",
    paragraphs: [
      "Before 1914 the international monetary system was a set of practices, not a single treaty. A currency on the classical gold standard was convertible into a defined weight of gold. Notes and deposits were claims that could, in ordinary times, be turned into coin or bullion at a published mint price. Gold could be imported and exported.",
      "Keep the instruments distinct. A **mint price** is the official gold definition of the unit. A **note** is a circulating promise to pay that gold. A **deposit** is a book claim that can be drawn as notes or coin. Convertibility is the ordinary test: the holder can still get metal at the window. Counterparties take the paper because they trust that window, not because a conference has declared the paper to be gold.",
      "Membership was practice, not a club card. Britain had been on gold, in the modern sense, since the early nineteenth century. Germany, France, and others joined as they defined their units in gold and opened the window. The United States did so after resumption and the Gold Standard Act of **1900**. The map is several national promises, mutually convertible because each promise pointed at the same metal.",
    ],
  },
  {
    heading: "Gold points and London settlement",
    paragraphs: [
      "That convertibility, plus the cost of shipping metal, produced **gold points**. Sterling’s mint par against the dollar sat near **$4.86**. If sterling cheapened far enough, a New York house could take gold in London and ship it home more cheaply than paying the market rate. If sterling dearened, gold moved the other way. The band was mint par plus freight, insurance, and interest while the metal was at sea — a few cents either side of $4.86.",
      "Inside the points, bills and credits did the settling. Outside them, gold actually moved. A broken promise showed up as a drain. A central bank that lost gold had to attract it back or lose the right to call its paper a gold claim.",
      "London was the centre. Sterling bills financed trade far from Britain. The Bank of England’s Bank rate was the price of credit in that market. Raise the rate, and balances and metal were pulled toward Threadneedle Street. Lower it, and gold could leave. Quieter “gold devices” — the price paid for bars, the terms of advances — moved the cost of taking metal by a few pennies. They did not abolish the points. People and foreigners could still ask for gold.",
    ],
  },
  {
    heading: "How it actually worked",
    paragraphs: [
      "Textbooks later called this the “rules of the game”: lose gold, tighten; gain gold, ease. Real central banks did not always play that cleanly. They sterilised flows, used gold devices, and protected domestic credit when they could. The constraint still mattered. A bank that promised gold on demand could not expand without limit if people and foreigners were free to take the metal. Close the window, or block the ship, and the same note is wartime paper that still spends if the public will hold it.",
      "The United States entered the century with a gold dollar and, after 1913, a new central bank — the sequel to the [Panic of 1907](/history/20th-century/panic-1907-fed). The classical system around that Fed was already older than the Fed. 1907 was a trust-banking liquidity failure. Metal still defined the unit. The break with convertibility came from war, not from 1907.",
    ],
  },
  {
    heading: "Why 1914 ended it",
    paragraphs: [
      "The First World War made convertibility and free gold movement incompatible with war finance. Governments needed to spend faster than tax and genuine borrowing would allow. Gold exports were blocked or licensed. Notes were protected from internal drains. Stock exchanges closed. The peacetime machine assumed ships, open windows, and a public that would take paper because it could still test the paper.",
      "Britain’s Currency and Bank Notes Act of **6 August 1914** is one legal marker. Treasury notes of one pound and ten shillings entered daily use. Bank of England notes were made legal tender more broadly. Similar suspensions ran across the belligerents that summer and autumn. The mark, the franc, and other gold names remained on coins and accounts. The public could no longer test those names at the window.",
      "England’s Restriction in **1797** was a wartime stop of gold payout, with resumption in the **1820s**. 1914 is another wartime stop. What did not return after 1918 was the old machine: several centres, private convertibility, gold that moved when the points were hit.",
      "The United States, not yet in the war, stayed closer to gold than the European combatants. New York, not London, became the place dollars and gold accumulated. That does not mean the classical system survived. A standard that only some members still honour, while the rest fight on inconvertible paper, is no longer the pre-1914 order.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The order, not every local statute:"],
    list: [
      "**Before 1914.** Convertibility, gold shipment, gold points. London at the centre.",
      "**July–August 1914.** War. Gold exports blocked or licensed. Notes protected. The stop is gone for the belligerents.",
      "**6 August 1914.** Britain’s Currency and Bank Notes Act; Treasury notes; similar suspensions on the Continent.",
      "**1914–18.** War finance on inconvertible paper. Prices rise; the gold name remains on some coins and accounts.",
      "**1922, Genoa.** A gold-*exchange* sketch: hold currencies that are themselves gold-convertible, instead of gold. Not the old machine.",
      "**1925–1931.** Britain restores the pre-war gold parity, then leaves gold. Other “returns” reuse the word. The old private convertibility does not come back.",
    ],
  },
  {
    heading: "What came after was not a pause",
    paragraphs: [
      "After 1918 many countries tried to “return to gold.” They reused the word. They did not restore the old machinery. Genoa asked members to hold gold-convertible currencies as reserves. That is a gold-*exchange* design: one or two convertible centres, and a ring of claims on those centres. It is not several windows with gold moving between them when the points are hit.",
      "Britain’s 1925 return at the pre-war sterling–dollar parity reused a number. It did not rebuild the 1913 world. In **1931** Britain left gold again. Other interwar “gold standards” were pegs, exchange controls, and official gold — a different architecture wearing a familiar name.",
      "Where the wartime stop never returned, paper could run for the Treasury. [Weimar hyperinflation](/history/20th-century/weimar-1923) is the European extreme of that break — war finance first, then a mark that ceased to work as money. That is not a pause in the classical system.",
      "Keep the later American hinges on their own dates. The [1933 gold recall](/history/20th-century/1933-gold-recall) removes the public claim on gold at the old mint price. The [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) is 1971: the last official gold window on the dollar, for foreign official holders. Neither is 1914. Mixing the three makes all three unreadable.",
      "This episode’s job on the [20th century](/history/20th-century) shelf is the peacetime classical order and its wartime end. The prior stop is the [Panic of 1907](/history/20th-century/panic-1907-fed). Then Weimar, then 1933, then Bretton Woods and 1971.",
    ],
  },
];


const goldRecall1933: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In 1933 the United States required most domestic gold coin, bullion, and gold certificates to be delivered to the government. The Gold Reserve Act of **1934** then vested title to monetary gold in the United States and reset the official price from **$20.67** to **$35** an ounce. The public claim on gold at the old mint price was removed. Official gold became a Treasury asset, not circulating money.",
      "That is a different claim from the [wartime end of classical convertibility in 1914](/history/20th-century/classical-gold-standard-end). It is a different claim from the [1971 close of the gold window](/history/20th-century/bretton-woods-nixon-1971) for foreign official holders. Mixing the three makes all three unreadable.",
    ],
  },
  {
    heading: "What Order 6102 did",
    paragraphs: [
      "On **5 April 1933** Franklin Roosevelt signed Executive Order 6102. It required persons in the United States to deliver most gold coin, gold bullion, and gold certificates to a Federal Reserve Bank, a member bank, or an agent of the Treasury. Payment was at the official price then in force: **$20.67 an ounce**. The deadline printed on the order was **1 May 1933**. Later licenses and exemptions matter more than that date alone.",
      "The order did not take every ounce in private hands. Exceptions covered industry, profession, art, small personal amounts, and rare coins. Failure to deliver the monetary gold it covered was a federal offence. Compliance was incomplete; the legal requirement still stood. Title and the official price changed by statute the next January."
    ],
  },
  {
    heading: "The bank holiday and the power to call gold",
    paragraphs: [
      "The week before the inauguration, gold was already leaving banks. On **6 March 1933** a national bank holiday stopped ordinary payments. Gold exports and gold payments were constrained with the banks themselves. The Emergency Banking Act of **9 March 1933** ratified the holiday and gave the President broad power over gold, silver, and foreign exchange during the emergency.",
      "That March statute is the legal floor under Order 6102. The order used a power Congress had just written. Banks reopened under license. Gold that had been a customer’s coin became, by stages, a thing the Treasury could call in.",
      "In May, the Thomas Amendment to the Agricultural Adjustment Act added another lever: the President could reduce the gold content of the dollar by as much as fifty percent. The public still faced a delivery order at $20.67. The statute already contemplated a lighter gold dollar. That is not yet the $35 price.",
    ],
  },
  {
    heading: "Gold clauses, then the Gold Reserve Act",
    paragraphs: [
      "On **5 June 1933** a Joint Resolution of Congress declared gold clauses against public policy. A promise to pay in gold coin, or in a sum measured by gold, was to be discharged in legal tender. The Supreme Court later upheld the main line of that policy in the Gold Clause Cases of **1935**. Once gold could be called in, gold-denominated private contracts could not stand as a parallel unit.",
      "The Gold Reserve Act of **30 January 1934** vested title to monetary gold in the United States. Federal Reserve Banks transferred their gold to the Treasury and received gold certificates in exchange. The Treasury was forbidden to redeem currency in gold for the public. The President set a new official dollar price of **$35 an ounce** — a devaluation of the gold dollar by statute, not a market print.",
      "At $20.67, one dollar had been a known weight of fine gold. At $35, that weight was cut. The same official stock, marked to the new price, produced a book profit on the Treasury’s accounts. Part of that increment funded the Exchange Stabilization Fund. The metal did not multiply. Official gold is then a government asset at an official price — not a pile the public can test at a window."
    ],
  },
  {
    heading: "A short documentary sequence",
    paragraphs: ["The holiday, the order, the contracts, the statute, then the new official price. Not a single weekend."],
    list: [
      "**6 March 1933.** National bank holiday. Gold payments and exports already constrained.",
      "**9 March 1933.** Emergency Banking Act. Presidential authority over gold in the emergency.",
      "**5 April 1933.** Order 6102: deliver gold coin, bullion, and gold certificates at $20.67.",
      "**1 May 1933.** Delivery deadline in the order. Licenses and exemptions continue.",
      "**12 May 1933.** Thomas Amendment: authority to cut the gold content of the dollar.",
      "**5 June 1933.** Joint Resolution voids gold clauses in contracts.",
      "**30 January 1934.** Gold Reserve Act. Title vests in the United States. Official price $35.",
      "**1934–1974.** Domestic monetary gold holding remains restricted. The next official-window break is [1971](/history/20th-century/bretton-woods-nixon-1971), a different claim.",
    ],
  },
  {
    heading: "The stated rationale",
    paragraphs: [
      "The contemporaneous justification was Depression emergency: stop hoarding, reopen banks, expand the money stock, and raise the domestic price level. Officials argued that gold in private hoards and in bank vaults as coin blocked recovery, and that a higher official gold price would cheapen the dollar in gold terms.",
      "Whether that program worked as advertised is a later argument. This page stays on the documentary sequence: holiday, order, delivery, gold-clause resolution, statute, new official price."
    ],
  },
  {
    heading: "Not 1914, not 1971",
    paragraphs: [
      "The [classical gold standard](/history/20th-century/classical-gold-standard-end) ended as a working international system in **1914**, when war finance blocked gold shipment and protected notes from internal drains. That break is about convertibility and metal movement among countries. It is not a domestic recall of coin from American households.",
      "The 1933–34 sequence is a United States statute story. Private monetary gold rights are removed. Title to official gold vests in the Treasury. The official price moves from $20.67 to $35. Americans lose a public claim they had still possessed after 1914.",
      "Bretton Woods, in **1944**, defined the dollar against gold at **$35** for official convertibility. Ordinary people in the United States did not redeem paper at the Treasury window. On **15 August 1971** the [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) closed the remaining window: foreign official holders could no longer present dollars and demand US gold at the posted price.",
      "Keep the three files separate. **1914** ends classical convertibility under war. **1933–34** removes the US public claim and revalues official gold. **1971** ends official dollar–gold convertibility for foreign holders. A rhyme — gold stops being a right you can test — is not identity.",
    ],
  },
  {
    heading: "After 1933",
    paragraphs: [
      "Americans could not legally hold monetary gold for decades. Licenses covered industry, dentistry, and art. The prohibition lasted until the end of **1974**, when statute again allowed citizens to hold gold bullion. Restoration of private holding did not restore a public convertibility contract. The $35 official price was already a bookkeeping fossil. The metal had a market. The dollar did not have a public gold window.",
      "Between 1934 and 1971 the official price still mattered for foreign official holders and for Treasury accounts. It did not matter as a price at which an American could walk in with a note and walk out with coin. This episode is a domestic recall and a revaluation for government accounting. [1971](/history/20th-century/bretton-woods-nixon-1971) is the close of an official foreign window built on the $35 price the 1934 Act had set.",
      "Read this page as the middle hinge on the [twentieth-century cluster](/history/20th-century): after classical gold’s wartime end, before Bretton Woods and 1971. Statute took the public’s monetary gold rights and rewrote the official ounce. It did not invent paper money.",
    ],
  },
];

const whatIsSoundMoney: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Sound money is money whose supply cannot be expanded at will by a political authority. The unit is costly to produce, or it is bound by a contract that can actually be enforced — typically redeemability into a defined weight of metal. The point is not nostalgia for coins. It is whether the unit of account stays honest over long periods.",
    ],
  },
  {
    heading: "A working definition",
    paragraphs: [
      "If a treasury or a central bank can create more units without a matching real cost, the money is not sound in this sense. It may still circulate. It may still be legal tender. Circulation is not the test. The test is whether the issuer can dilute the stock as a matter of policy.",
      "Historically the constraint was the cost of mining and minting gold and silver, or a redeemability rule that let holders present paper and take a known weight of metal. When that stop is gone, the unit can still work as a medium of exchange. It no longer passes the sound-money test used on this map.",
      "Three money jobs sit in the background of the definition: medium of exchange, unit of account, and store of value. Sound money is the claim that the third job is not optional packaging. A unit that clears today’s till but cannot be held across years without political permission to dilute it fails the store-of-value half of the idea.",
      "Use this page as the entry to the other definition stops: [hard money versus fiat](/sound-money/hard-money-vs-fiat), [inflation and purchasing power](/sound-money/inflation-purchasing-power), and [what “backed” means](/sound-money/backed-money). Cases and statutes live on [Sound Money History](/history).",
    ],
  },
  {
    heading: "Where the phrase comes from",
    paragraphs: [
      "Older English used “sound” in two related ways: the ring of a good coin (as against a counterfeit or a clipped piece), and sound as in healthy, not debased. Both senses survive. A sound coin rang true. A sound monetary standard did not quietly lighten the unit.",
      "Nineteenth-century writers used the phrase for metal standards and for convertibility rules that kept paper honest. Debates over free silver, bank notes, and gold clauses all leaned on that vocabulary: was the unit honest, or was it a political instrument dressed as money? The map keeps that older job — a name for a constrained unit — not a brand for every asset someone prefers.",
      "The vocabulary later migrated into textbooks, hard-money pamphlets, and modern glossaries. Along the way it picked up slogans. This site strips the slogan back to a testable claim about issuer discretion and cost of production.",
      "The phrase is also used in crypto glossaries. That is a different search. This site uses it for metal-constrained money and for the ideas needed to read the history. A token with a capped schedule may borrow the adjective; it is not the documentary object of these pages.",
    ],
  },
  {
    heading: "The test: issuer discretion",
    paragraphs: [
      "Ask one question of any unit: can the issuer expand the stock as policy, without a matching real cost or an enforceable redeemability contract? If yes, the money fails the sound-money test here — even when it is popular, even when it is legal tender, even when it once had a gold story attached.",
      "A gold coin can fail in practice through clipping, through a false mint ratio, or through a statute that ends public convertibility. Those are failures of the stop, not proofs that the definition was wrong. The definition names a constraint. It does not guarantee that every gold standard was well run.",
      "Paper that is redeemable on demand in a defined weight of metal can qualify while the contract holds. When the window closes, the same note becomes, for practical purposes, discretionary paper. That hinge is why [1914](/history/20th-century/classical-gold-standard-end) and [1971](/history/20th-century/bretton-woods-nixon-1971) matter to the names on this pillar.",
      "The test is institutional, not aesthetic. A beautiful coin with a false weight fails. An ugly note with a working redeemability window can pass while the window is open. Look at the stop, not the branding on the face.",
    ],
  },
  {
    heading: "Metal, paper, and the stop",
    paragraphs: [
      "Metal entered money because markets needed a costly, recognisable, divisible stock — the story told on [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver). Stamps and statutes came later. Paper entered as a claim on metal or as a warehouse receipt before it became a free-standing unit.",
      "Sound money, on this map, is not “only coins forever.” It is the presence of a stop that the issuer cannot casually repeal for fiscal convenience. Mining cost is one stop. A public convertibility contract is another. A slogan that gold sits in a vault without a holder’s claim is not a stop — that confusion lives on [what “backed” means](/sound-money/backed-money).",
      "When history pages show wartime suspensions, gold recalls, or closed windows, they are documenting the stop being removed. The idea page only names what was removed.",
    ],
  },
  {
    heading: "What the definition is not",
    paragraphs: [
      "It is not a claim that gold and silver never changed in price, or that every gold standard was well run. Metal money can be debased by clipping, by mint ratio tricks, and by suspending convertibility. Relative prices still move under a hard unit. Sound money constrains one source of a general rise in prices; it does not freeze bread against rent.",
      "It is not a buying brief, a remonetization campaign, or a forecast. This pillar answers what the words mean. [Information versus advice](/sound-money/information-not-advice) is the standing line for the whole site.",
      "It is not a dump of Weimar, Nixon, or the Fed onto a definition page. Those are history jobs. Mixing the idea shelf with the event shelf makes both weaker for readers and for search.",
    ],
  },
  {
    heading: "How this page sits in the pillar",
    paragraphs: [
      "Pillar 1 is definitions only. [Hard money vs fiat](/sound-money/hard-money-vs-fiat) splits costly production from law-and-habit claims. [Inflation and purchasing power](/sound-money/inflation-purchasing-power) names the decline of what the unit buys. [What “backed” means](/sound-money/backed-money) separates redeemability from reserve slogans.",
      "The hub at [Sound Money](/sound-money) orients the shelf. History starts at [Sound Money History](/history). Markets figures and practice pages are other jobs. Keep the shelves labeled: meaning here, events there, figures and handling elsewhere.",
      "Open [hard money vs fiat](/sound-money/hard-money-vs-fiat) if you need the supply-side contrast. Open [backed money](/sound-money/backed-money) if a reserve claim is the confusion. Open [inflation](/sound-money/inflation-purchasing-power) if the question is purchasing power rather than the name of the unit. When the definition is clear and you want dates, leave this pillar: [Weimar 1923](/history/20th-century/weimar-1923), the [1933 gold recall](/history/20th-century/1933-gold-recall), and the [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) are documentary episodes, not glossary entries.",
    ],
  },
];

const hardMoneyVsFiat: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Hard money is costly to produce. Fiat money is a claim created by a state or bank, accepted because of law and habit. Both can circulate. They fail in different ways. Circulation does not decide the category.",
    ],
  },
  {
    heading: "Hard money",
    paragraphs: [
      "Hard money is money that is costly to produce. Historically that cost was mining and minting gold or silver. You cannot create a new ounce with a vote or a keystroke. You can steal it, debase the coin, or suspend convertibility — those are different failures — but the metal itself does not appear because a treasury needs it.",
      "Hard is not a synonym for “never changes price.” An ounce of gold can buy more or less bread. The hardness is on the supply side: expanding the stock takes real resources. That is why [markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) before stamps and statutes finished the story.",
      "A redeemable note that is a claim on a defined weight of metal can sit in the hard category while the contract holds. The hardness is the metal stop, not the paper in the wallet. Drop the stop and the same paper migrates into the fiat column without changing its ink.",
      "Scarcity alone is not enough. A rare collectible can be scarce and still not be money. Hard money couples costly production with monetary use — settlement, pricing, and holding balances — under rules that make new units expensive to create.",
    ],
  },
  {
    heading: "Fiat money",
    paragraphs: [
      "Fiat money is a claim created by a state or a bank, accepted because of law and habit. The Latin *fiat* is “let it be done.” The unit exists because an authority says it does, and because people need it for taxes, debts, and daily settlement.",
      "Fiat can be well managed or badly managed. That is not the distinction on this page. The distinction is the stop. If the issuer can expand the stock as policy, the money is fiat in this map’s language even when it once had a gold story attached.",
      "Legal tender rules, tax acceptance, and clearing habit keep fiat useful. Usefulness is not hardness. A convenient unit can still be discretionary paper. Central-bank independence, inflation targets, and fiscal rules are management tools inside fiat; they are not a return to mining-cost constraints.",
    ],
  },
  {
    heading: "Both can circulate",
    paragraphs: [
      "Circulation does not decide the category. People have used salt, cigarettes, paper notes, bank deposits, and gold coin. A circulating fiat unit can be more convenient than coin. A hard unit can be hoarded and disappear from the till. The question on this page is the constraint, not the popularity.",
      "When convertibility is suspended, a note that was a claim on metal becomes, for practical purposes, fiat. That is why [1914](/history/20th-century/classical-gold-standard-end) and [1971](/history/20th-century/bretton-woods-nixon-1971) matter to the names. The paper did not change color overnight. The stop did.",
      "Wartime greenbacks in the United States floated below gold until resumption restored par in practice. That episode is war paper and statute, not a proof that “paper always equals metal.” Read it on [greenbacks and the Civil War](/history/america/greenbacks-civil-war).",
      "Gresham’s pattern — bad money driving good money out of the till when legal ratios misprice metals — is a circulation fact under hard regimes. It does not turn the undervalued metal into fiat. It shows that statute and market ratio can disagree while both metals remain costly to produce.",
    ],
  },
  {
    heading: "Where the line blurs",
    paragraphs: [
      "Gold-exchange systems, as after [Bretton Woods](/history/20th-century/bretton-woods-nixon-1971), backed some currencies with dollars and dollars with official gold — not with coin in the public’s hand. The vocabulary of “gold” survived longer than the public claim.",
      "Bank deposits that settle in fiat are claims on a banking system, not ounces. Covering a note issue with government bonds is a claim on a tax office, not metal backing. Those confusions belong next to [what “backed” means](/sound-money/backed-money).",
      "Do not mash hard money with “assets I like,” or fiat with “money I dislike.” The map’s line is production cost and issuer discretion, stated as definitions for reading history — not as a ranking of virtue. A well-run fiat regime can be stable for years. A mismanaged gold regime can still debase the coin.",
    ],
  },
  {
    heading: "Failures on each side",
    paragraphs: [
      "Hard money fails by debasement, by false mint ratios, by clipping, and by suspending convertibility. The metal can still exist while the unit stops being honest. [Bimetallism](/history/silver/bimetallism) shows how a legal ratio can push one metal out of circulation without abolishing either metal. The [Crime of 1873](/history/america/crime-of-1873) shows how statute can redefine which metal the unit points at.",
      "Fiat fails by over-issue relative to the goods and claims it is asked to measure, by broken fiscal stops, and by loss of confidence that collapses demand for balances. [Weimar 1923](/history/20th-century/weimar-1923) is the extreme documentary case on this site — a history page, not a definition rewrite.",
      "Both categories can finance wars, pay taxes, and clear trade. The category names the stop. The history pages name the episodes. [Inflation and purchasing power](/sound-money/inflation-purchasing-power) names what holders feel when the unit weakens under either label.",
    ],
  },
  {
    heading: "How this page sits in the pillar",
    paragraphs: [
      "Parent hub: [Sound Money](/sound-money). Companion definitions: [what is sound money?](/sound-money/what-is-sound-money), [inflation and purchasing power](/sound-money/inflation-purchasing-power), [what “backed” means](/sound-money/backed-money).",
      "For events, leave this pillar. For dated market figures, use [Markets](/markets). For handling metal, use [gold and silver in practice](/gold-silver). This page only splits costly production from law-and-habit claims. Keep Weimar, Nixon, and greenbacks as linked cases, not as pasted timelines that turn a definition into a cluster hub.",
    ],
  },
];

const inflation: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Inflation, here, is a decline in the purchasing power of the unit. Prices are the visible surface. Hyperinflation is a special case, not the definition.",
    ],
  },
  {
    heading: "What inflation is on this site",
    paragraphs: [
      "The underlying question is whether the stock of money is growing faster than the goods and claims it is asked to measure. An hour of work is a useful check. If the same hour buys less bread, less rent, or less metal over years, the unit has weakened. That can happen with or without a dramatic crisis.",
      "Consumer-price indexes and wholesale indexes are measurement tools. They are not the definition. The definition is purchasing-power erosion of the unit. Indexes help document that erosion; they do not invent it. Basket choice, quality adjustments, and base years matter for reading a series — they do not rewrite the idea.",
      "This page stays on the idea. [Weimar 1923](/history/20th-century/weimar-1923) is the documentary extreme. Do not paste Weimar into every mild rise in a price index. Ordinary inflation and hyperinflation share a channel when money stock is discretionary; they do not share a severity or a timeline. A two-percent annual rise and a monthly fifty-percent rise are not the same documentary object.",
    ],
  },
  {
    heading: "Money stock and prices",
    paragraphs: [
      "Prices can rise because goods are scarce, because demand shifts, or because more units chase the same things. Hard-money writers emphasise the last channel. A complete account of any year needs all three. The map only needs the distinction: a unit that can be issued without cost makes the last channel a policy choice.",
      "Sound money does not make relative prices stand still. It constrains one source of a general rise. Harvest failures, war damage, and demand shifts still move particular prices under a hard unit. A gold standard that holds convertibility can still see wartime scarcity lift food prices without rewriting the unit.",
      "When the issuer can expand the stock as policy, a fiscal gap can be closed with new units. Tax arrives later in weaker money. Real cash balances fall; people spend faster; velocity rises. That feedback is the mechanical core of severe inflation episodes — stated as mechanism, not as a morality play.",
    ],
  },
  {
    heading: "Purchasing power as the check",
    paragraphs: [
      "Ask what a unit buys over time: a basket of goods, an hour of common labor, a weight of metal. If the basket shrinks for the same nominal wage, purchasing power fell. If metal rises sharply in the unit while the metal’s mining cost did not jump overnight, the unit may be the thing that weakened.",
      "Premiums, taxes, and local scarcity still matter for any single price. The purchasing-power check is about the unit across many goods, not one headline. [Hard money vs fiat](/sound-money/hard-money-vs-fiat) names which units make stock expansion a policy lever.",
      "Greenbacks during the American Civil War traded at a gold premium in New York. That premium was the market’s measure of paper versus metal — a wartime purchasing-power fact, documented on [greenbacks and the Civil War](/history/america/greenbacks-civil-war). Resumption later closed the gap in practice; the idea page only names what the gap measured.",
      "Interest rates and bond prices can move with inflation expectations. That is macro plumbing for another desk. Here the claim stays narrow: purchasing power of the unit is the object; prices are the surface.",
    ],
  },
  {
    heading: "Hyperinflation is a case",
    paragraphs: [
      "Hyperinflation is usually marked when prices rise on the order of **50% or more in a month**. It is a phase, not a synonym for every inflation. Germany crossed that line in mid-**1922**; the paper mark then ceased to work as a store of value or a unit of account by autumn **1923**.",
      "The cartoons — wheelbarrows, wallpaper notes — are evidence of velocity and refusal to hold balances. They are not the cause. The cause chain on the Weimar page is war finance, a missing gold stop, fiscal gaps, and monetisation of Treasury paper.",
      "Assignats in revolutionary France and Law’s **1720** System are other paper collapses with their own dates and instruments. Rhyme teaches mechanism. Merge erases centuries. Keep them on [banks and paper](/history/banks-paper), not as footnotes that rewrite this definition.",
      "Stabilisation after hyperinflation often needs a new unit, a fiscal stop, and a credible refusal to print for the treasury — the Rentenmark story on the Weimar page. That is history. The idea here is only that hyperinflation is inflation’s extreme phase, not its everyday meaning.",
    ],
  },
  {
    heading: "What this definition is not",
    paragraphs: [
      "It is not a forecast of next year’s index. It is not a recommendation to buy or sell metal, bonds, or anything else. [Information versus advice](/sound-money/information-not-advice) is the standing line.",
      "It is not a claim that every price rise is “only printing.” Scarcity and demand shifts are real. The map’s job is to keep the money-stock channel visible when the unit can be issued without a stop.",
      "It is not a substitute for [what is sound money?](/sound-money/what-is-sound-money). Sound money names the constraint. Inflation names what happens to purchasing power when the unit weakens — under any regime. It is also not a markets spoke: dated metal figures live on [Markets](/markets).",
    ],
  },
  {
    heading: "How this page sits in the pillar",
    paragraphs: [
      "Parent hub: [Sound Money](/sound-money). Read with [hard money vs fiat](/sound-money/hard-money-vs-fiat) and [backed money](/sound-money/backed-money). For the extreme case, open [Weimar hyperinflation](/history/20th-century/weimar-1923).",
      "History episodes stay documentary. This page only fixes the idea: purchasing power of the unit, prices as surface, hyperinflation as a case. When a reader asks “what does inflation mean?” stay here. When they ask “what happened in 1923?” leave for history.",
    ],
  },
];

const backedMoney: Section[] = [
  {
    heading: "",
    paragraphs: [
      "“Backed” is used loosely. A note that is legally redeemable in a defined weight of metal is one thing: a contract. A currency said to be “supported by” gold sitting in a vault, with no public claim on it, is another: a slogan, or at best a reserve-management fact.",
    ],
  },
  {
    heading: "A contract, or a slogan",
    paragraphs: [
      "Redeemability is testable. Either a holder can demand the metal at a known price, or they cannot. Reserves on a balance sheet, without that right, do not make the unit hard.",
      "A classical convertibility rule said: present the note, take the weight. The vault mattered because the public claim could empty it. A modern central-bank gold pile without that claim is a portfolio fact. It is not the same contract.",
      "When writers say a currency is “backed by the full faith and credit” of a government, they name a tax and legal-tender story. That can be a strong fiscal claim. It is not metal backing in the sense this page uses.",
      "The word “backed” sells confidence. The map asks for the mechanism. Without a presentment right, confidence is a story about the issuer — not a metal contract the holder can enforce at a teller window on a working day.",
    ],
  },
  {
    heading: "Three easy confusions",
    paragraphs: [
      "First: covering a note issue with government bonds is not metal backing. It is a claim on a tax office. Second: a gold-exchange standard, as after [Bretton Woods](/history/20th-century/bretton-woods-nixon-1971), backed some currencies with dollars and dollars with official gold — not with coin in the public’s hand. Third: the [Rentenmark](/history/20th-century/weimar-1923) was “backed” by mortgages. That was an accounting and political device to stop the press, not a pile of gold at the teller window.",
      "Official book value of U.S. gold — still carried at a statutory dollar price far from the market — is another trap for the word. The figure is an accounting convention. Read it on [official gold book value](/markets/official-gold-book-value), not as proof of public redeemability.",
      "Central-bank reserve totals answer “how much metal does the state hold?” They do not answer “can a private holder present notes and take metal?” Keep [central-bank gold reserves](/markets/central-bank-gold-reserves) on the markets shelf. A rising reserve tonne chart can sit beside a pure fiat domestic unit without contradiction.",
    ],
  },
  {
    heading: "Redeemability in practice",
    paragraphs: [
      "Under a working gold or silver standard, banks and treasuries published rules for convertibility: which notes, which weights, which offices. The public test was the window. When the window closed for war or emergency, the note’s legal name might still say “gold.” The contract had changed.",
      "The [1933 U.S. gold recall](/history/20th-century/1933-gold-recall) shows the other side: even a gold dollar can have the public claim removed by statute. Citizens lost monetary gold rights years before the **1971** close of the gold window for foreign official holders.",
      "Bretton Woods then limited the remaining gold link to official holders at **$35** an ounce. Retail Americans were not walking into a Treasury window for coin. Calling that era “gold-backed money” without naming who could redeem is how the slogan swallows the contract.",
      "Warehouse receipts and early bank notes started as claims on deposited metal — the banks-paper shelf’s opening story. When the receipt stops being payable in metal on demand, the instrument has changed category even if the engraved language lags behind.",
    ],
  },
  {
    heading: "Reserves without a public claim",
    paragraphs: [
      "A treasury can hold metal, foreign exchange, and securities while the domestic unit is pure fiat. The reserves may stabilise an exchange rate, satisfy creditors, or signal prudence. None of that restores redeemability for note holders unless law says so.",
      "Mortgage “backing,” land “backing,” and commodity baskets in propaganda often mean: we assigned an accounting cover so the new issue looks limited. The Rentenmark’s mortgages were that kind of device. Holders could not demand a farm at the teller window.",
      "Ask two questions of any “backed” claim: backed by what instrument, and who may present the claim? If the answer is “gold in a vault, for the central bank’s own books,” you have reserves. If the answer is “a defined weight, on demand, for the holder,” you have a contract.",
      "Fractional reserves against redeemable notes are a banking topic: the note is still a claim on metal, subject to run risk. That is not the same as a non-redeemable unit whose issuer merely owns some gold. Keep the claim structure straight before arguing ratios.",
    ],
  },
  {
    heading: "What this definition is not",
    paragraphs: [
      "It is not a brief to restore a gold window, and not a forecast of exchange rates. It is not investment advice. [Information versus advice](/sound-money/information-not-advice) is the standing line.",
      "It is not a claim that reserves are useless. Reserves are useful for states. The map only refuses to rename them as public convertibility when the public has no claim.",
      "It is not a dump of every gold statute onto one page. [What is sound money?](/sound-money/what-is-sound-money) names the constraint. [Hard money vs fiat](/sound-money/hard-money-vs-fiat) names production cost. This page only polices the word “backed.”",
    ],
  },
  {
    heading: "How this page sits in the pillar",
    paragraphs: [
      "Parent hub: [Sound Money](/sound-money). Read next with [what is sound money?](/sound-money/what-is-sound-money) and [hard money vs fiat](/sound-money/hard-money-vs-fiat). History hinges: [1933 gold recall](/history/20th-century/1933-gold-recall), [Bretton Woods and Nixon 1971](/history/20th-century/bretton-woods-nixon-1971), [Weimar / Rentenmark](/history/20th-century/weimar-1923).",
      "When a desk figure looks like “backing,” check whether the page is markets accounting or a redeemability story. This pillar stays on meaning. Markets stay on dated facts. Practice stays on handling metal. Do not let a vault photo rewrite a contract that does not exist.",
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
    heading: "",
    paragraphs: [
      "Before public banks, paper money is a warehouse receipt — a claim check on deposited metal. A goldsmith, a mint, or a private banker writes that the weight is there. The holder can return and collect the same coin or bullion. Banking, on this map, starts when that paper pays a debt without the metal leaving the vault.",
      "This episode is the hinge between a ticket and a note. Later stops on the [banks and paper](/history/banks-paper) shelf — Amsterdam, the Bank of England, John Law, assignats — depend on that handoff. They are not this episode, and they are not one another.",
    ],
  },
  {
    heading: "A claim check, not a currency",
    paragraphs: [
      "A warehouse note is a named claim on a named pile. Someone delivers coin or bullion. The keeper records a weight and a fineness. The paper says the metal can be collected. Until that paper circulates, it is a receipt: useful, portable, still a ticket to a vault.",
      "Convertibility is the ordinary test. If the holder can still get metal at the window, the paper is a convenient claim. Counterparties take it because they trust the warehouse, not because a statute has declared the slip to be money. The legal form is deposit. The economic fact is custody.",
      "That is narrower than later talk of “paper money.” A receipt does not yet replace the unit. It points at the unit. Gold and silver remain the thing being claimed. The paper is how merchants avoid carting mixed specie through the street each time a bill falls due.",
      "The keeper’s reputation is the whole machine at this stage. If the vault is honest and the window pays, the ticket is almost as good as coin. If the keeper lends the metal, or the sovereign seizes it, the ticket is only as good as the next rumour.",
    ],
  },
  {
    heading: "Private vaults, civic tables, goldsmiths",
    paragraphs: [
      "Late-medieval and early-modern Europe already knew the warehouse model in Italian cities. Money-changers and deposit bankers in Venice, Genoa, and Florence took in coin, kept accounts, and transferred balances for merchants who did not want to settle in bags. Private houses failed when loans and the vault got tangled. Cities then reached for a public table — a bank whose books the bill market had to use.",
      "That civic answer is older than London goldsmith notes. Barcelona’s Taula de Canvi dates from **1401**. Venice opened the Banco della Piazza di Rialto in **1587** after private-bank failures. Amsterdam’s Wisselbank, in **1609**, is this cluster’s model public deposit bank. Public tables and private goldsmiths are parallel answers to the same custody problem, not a single national ladder.",
      "London’s path ran through the mint and then through goldsmiths. In **1640** Charles I seized merchants’ bullion stored in the Tower mint. The Crown needed cash for war. Depositors learned that a royal warehouse was not a safe warehouse. After the Restoration, goldsmiths took the custom. They issued running-cash notes: receipts that could be endorsed onward.",
      "Those notes were still, in form, claims on metal left with a private keeper. In practice the goldsmiths also lent. The float — the metal that stayed while the paper moved — became a loan book. In **1672** the Stop of the Exchequer suspended payments on much of that royal debt. Goldsmith-bankers who had treated the Exchequer as a safe asset discovered that a sovereign borrower can close a window too.",
    ],
  },
  {
    heading: "When the receipt starts to move",
    paragraphs: [
      "The documentary hinge is circulation without movement of the metal. Once a third party accepts the ticket in payment, the issuer has issued money in use, even if the law still calls it a deposit receipt. The vault need not empty. The paper does the paying.",
      "As long as redemption is ordinary, the ticket remains a claim. People hold it because it is lighter than coin, not because they have given up on coin. When issue outruns what the window can pay, the same paper becomes a bet on the keeper. That is the quiet shift from warehouse to bank. It does not require a theory of fiat. It requires a queue the till cannot meet.",
      "Keep the instruments distinct. A **warehouse receipt** is a claim on identified metal. A **bank note** is a promise to pay, often against a mixed reserve and a loan book. A **public-bank balance** is a book entry the city or the state has made hard to refuse for large settlement. The first can become the second without a revolution. The second becomes the third when settlement is pulled onto a public ledger.",
    ],
  },
  {
    heading: "Why a public bank",
    paragraphs: [
      "Private keepers solved a storage problem and then a payment problem. They did not, by themselves, give a whole market one book everyone had to use. Worn and foreign coin made large bills of exchange a fight over which pile counted. A public deposit bank could take in mixed specie, credit a standard bank money, and force wholesale payments through its books.",
      "That is the handoff this cluster is built on. The next stop is the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam), the Wisselbank of **1609**. For a long time its reputation was that it did not lend — a florin banco as a claim on metal, not on a loan. Later concealed lending, made public in the **1780s–1790s**, belongs on that page. It is not 1720, and it is not this hinge.",
      "England’s later public machine was different again. The Bank of England, chartered in **1694**, was born as war finance with a note issue attached, not as a city giro table. Restriction in **1797** and resumption in the **1820s** wait on their own stop.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The order is European, not a single national ladder."],
    list: [
      "**1401.** Barcelona’s Taula de Canvi: an early civic deposit table.",
      "**1587.** Venice’s Banco della Piazza di Rialto, after private-bank failures.",
      "**1609.** Bank of Amsterdam: public deposit money for the bill market — the next page on this cluster.",
      "**1640.** Charles I seizes mint deposits in the Tower; London custom shifts toward goldsmiths.",
      "**Mid-seventeenth century.** Goldsmith running-cash notes circulate by endorsement; the receipt pays.",
      "**1672.** Stop of the Exchequer; private paper that funded the Crown meets a closed sovereign window.",
      "**1694.** Bank of England charter: war loan and notes — a different public machine from Amsterdam.",
    ],
  },
  {
    heading: "Why the handoff matters",
    paragraphs: [
      "Once notes and book money are public, the issuer can be leaned on. A city can borrow against the vault. A crown can borrow against a charter. A regency can fuse a note-issuing bank with a rising company. Revolutionary paper can be tied to confiscated land and issued faster than it is retired. The warehouse ticket made those later machines possible because the public had already learned to pay with paper claims.",
      "Keep the disasters on their own dates. John Law’s Mississippi System is **1720**: notes and shares under a French regency. Assignats are **1789–1796**: revolutionary paper with a land story. Germany’s mark in **1923** is a twentieth-century collapse after war, reparations, and extreme monetization. A rhyme teaches mechanism. A merge erases dates. Weimar does not belong here except as a labeled later rhyme.",
      "This episode’s job is the first step on the [banks and paper](/history/banks-paper) shelf: from private claim-check to the door of a public bank. Read the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) next. Then the Bank of England, then Law, then the assignats. Do not mash **1720**, the **1790s**, and **1923** into one print job.",
    ],
  },
];

const amsterdam: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The Bank of Amsterdam — the Wisselbank, opened in **1609** — turns metal deposits into public transferable balances. A merchant brings mixed coin. The city credits a bank guilder. Bills on Amsterdam settle by giro: a book entry, without the metal leaving the vault. That civic ledger sits between a warehouse receipt and later note-issuing banks. It is not a modern central bank.",
      "This stop on the [banks and paper](/history/banks-paper) shelf follows [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks). The prior page is the hinge from a private claim-check to a public table. This page is the table: giro as settlement, the agio, then concealed lending.",
    ],
  },
  {
    heading: "Why a civic ledger",
    paragraphs: [
      "Amsterdam in the early seventeenth century was a bill-of-exchange market. Large debts among merchants were written on the city. Payment still meant assembling a pile of coin — foreign dollars, clipped pieces, worn domestic issues — and arguing which pile counted. Private cashiers already kept money and made transfers. Failures and quality fights still reached the wholesale market.",
      "The city answered with a public deposit bank. An ordinance of **31 January 1609** created the Amsterdamsche Wisselbank. Mixed specie went in. A standard credit came out. Large bills drawn on Amsterdam were to be settled through its books. The point was not to invent a national paper currency. It was to give the bill market one ledger everyone had to use — the public-bank job named on the [warehouses](/history/banks-paper/warehouses-to-public-banks) page.",
    ],
  },
  {
    heading: "How giro money settles",
    paragraphs: [
      "Giro is settlement by transfer of a balance. The depositor does not collect coin and cart it across the Dam. He orders the bank to debit his account and credit another. The metal stays. The books move. For a bill falling due, that is payment.",
      "Keep the instruments distinct. A **warehouse receipt** is a claim on identified metal. A **giro balance** is a book credit at a public table, transferable to another account-holder. A **bank note** is a circulating promise to pay, typically issued by a later corporation with a loan book. Amsterdam’s ordinary machine is the second. It does not need a printed note walking the street. It needs a merchant with an account, or a cashier who has one, and a rule that large bills clear on those books.",
      "Convertibility still mattered. Coin could be withdrawn, subject to fees and to the bank’s rules. Fees made leaving the metal in, and paying on the books, the cheaper habit. As long as the window was ordinary, the florin banco was a convenient claim on a civic vault.",
      "From **1683** the bank issued receipts for coin left on deposit. The receipt was a claim on those coins. The bank balance was a transferable credit in banco. To take the original metal out, a holder needed the receipt. To pay a bill, he needed only the balance. The two claims could be sold apart. That split made bank money a settlement unit even when a given bag of coin stayed put. It is still not a Bank of England note. It is a more complete giro.",
    ],
  },
  {
    heading: "Florin banco and the agio",
    paragraphs: [
      "Bank money and current money were not the same pile. Current coin in daily circulation was worn, mixed, and often light. Banco was the credit on the Wisselbank’s books, written as a full-weight guilder. Because banco was better money for large settlement, it usually stood at a premium — the **agio** — over current coin. The premium often sat near **four to five percent** while the reputation held. The agio was quoted. Merchants treated it as information about the unit.",
      "A florin banco, on the advertised model, was a claim on metal in the vault, not on a loan. That is why Adam Smith could still describe the bank, in **1776**, as a place that took in coin and did not lend. The later books would show the reputation running ahead of the vault.",
      "None of this made Amsterdam a modern central bank. There was no national note issue. There was no statutory duty to backstop a private banking field. The Wisselbank was a municipal giro table for the bill market. It could be leaned on by the city that owned it. That fiscal temptation is the next section. It is not **1694** London.",
    ],
  },
  {
    heading: "Concealed lending",
    paragraphs: [
      "A public bank can be a warehouse with better accounting. It can also become a lender in secret. Amsterdam did both, in sequence.",
      "From the late seventeenth century, and more clearly in the eighteenth, the bank made advances to the city of Amsterdam and to the Dutch East India Company that were not advertised as the old warehouse model. Overdrafts against the vault are still loans. They were not posted as the florin banco’s public story. For decades the agio and the reputation could live together because the market still treated banco as metal-quality money.",
      "War strained the concealment. In the Fourth Anglo-Dutch War, **1780–1784**, lending to the Company and the city rose. The coin stock no longer matched the deposit book. When that lending became public knowledge in the **1780s–1790s**, the agio collapsed. Bank money went from a premium to a discount. The institution never recovered its old role as the settlement unit of the entrepôt.",
      "French occupation in **1795** found a bank that had already lost the trust that made giro as good as a full vault. Liquidation was completed in **1819**. That is a Dutch public-bank story: reputation, concealed fiscal use of the metal, then a quoted premium that died when the books were known. It is not 1720. It is not the assignats.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The order is Amsterdam’s, not a mash of later paper disasters."],
    list: [
      "**31 January 1609.** City ordinance: the Wisselbank takes in coin and credits bank money.",
      "**Seventeenth century.** Large bills on Amsterdam settle by giro; banco stands at an agio over worn current coin.",
      "**1683.** Receipts for deposited coin; balances and metal claims can be sold apart.",
      "**Late seventeenth–eighteenth century.** Concealed advances to the city and the Dutch East India Company.",
      "**1780–1784.** Fourth Anglo-Dutch War; lending against the vault rises.",
      "**1780s–1790s.** The lending becomes public; the agio collapses; the old role is gone.",
      "**1795–1819.** French occupation, then liquidation.",
    ],
  },
  {
    heading: "Why the civic ledger matters",
    paragraphs: [
      "Once a whole market pays on one public book, the issuer can be leaned on. The city can borrow against the vault and still call the credit a warehouse claim. Later machines on this shelf do not copy Amsterdam. They use the habit it taught: book or paper money as settlement, with metal in the background until it is not.",
      "The next dated stop is the [Bank of England](/history/banks-paper/bank-of-england): a **1694** war-finance charter with a note issue attached, not a city giro table. Law’s Mississippi System is **1720**. Assignats are **1789–1796**. Germany’s mark in **1923** is a later rhyme on another shelf. A rhyme teaches mechanism: a claim treated as metal-quality money can cease to be one. A merge erases dates.",
      "This episode’s job on the [banks and paper](/history/banks-paper) shelf is the model public deposit bank. The prior hinge is [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks). Then London, then Law, then the assignats. Do not mash **1720**, the **1790s**, and **1923** into one Dutch ledger.",
    ],
  },
];

const england: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The Bank of England — chartered in **1694** — is a private corporation with a public job: lend to the Crown in the Nine Years’ War, and issue notes. Subscribers put up about **£1.2 million** as a war loan. The paper that came back was a circulating promise to pay, not a city giro balance. This is not a copy of Amsterdam.",
      "This stop on the [banks and paper](/history/banks-paper) shelf follows the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam). The prior page is a civic deposit table: mixed coin in, bank money out, bills settled by giro. This page is a war-finance charter with a note issue attached.",
    ],
  },
  {
    heading: "Not a city giro table",
    paragraphs: [
      "Amsterdam’s Wisselbank, opened in **1609**, was a municipal ledger for the bill market: mixed coin in, bank money out, bills settled by giro. For a long time its reputation was that it did not lend. Concealed lending, and the later collapse of the agio, belong on that page.",
      "London in the 1690s had a different problem. William III was at war with Louis XIV. The Crown needed a large loan at once. Goldsmith running-cash notes already circulated; the Stop of the Exchequer in **1672** had shown that a sovereign can close a window. The **1694** statute created a company whose first asset was a loan to the state, and whose liabilities included notes the public could pass.",
      "Keep the instruments distinct. A **giro balance** is a book credit at a public table. A **goldsmith note** is a private claim on metal left with a keeper. A **Bank of England note** is a circulating promise to pay, issued by a chartered corporation that has already lent to the Crown. The habit of paying with paper came from the warehouse and goldsmith path. The 1694 machine is war finance with that habit attached.",
    ],
  },
  {
    heading: "A charter for a war, 1694",
    paragraphs: [
      "Parliament needed money for the Nine Years’ War. The scheme that became the Bank offered a subscription: about **£1.2 million** lent to the government, at interest, against a stream of taxes. The subscribers were incorporated as the Governor and Company of the Bank of England. The corporation could deal in bills and bullion, take deposits, and issue notes payable on demand in coin.",
      "William Paterson and others had argued for such a bank. The political fact is the charter: a private company received a public privilege because the fiscal need was urgent. The notes were the Bank’s own paper, accepted because the window paid and because London learned to treat that paper as cash.",
      "The charter was not a one-time gift. It was renewed because the state still needed the machine. Later renewals bought more loans, longer privileges, and a tighter hold on joint-stock note issue in England. The Bank’s life was fiscal from the start. That is why it is not an Amsterdam clone.",
    ],
  },
  {
    heading: "Notes become London paper",
    paragraphs: [
      "Over the eighteenth century those notes became the ordinary paper of London. A merchant could pay a debt with a Bank note without carting coin across the City. As long as redemption was ordinary, the note was a convenient claim on metal. The unit remained the pound. The paper was how it moved.",
      "Country banks issued their own notes outside London. In the capital, Bank of England paper crowded the field. Statute helped. From **1708** no other English bank with more than six partners could issue notes — a joint-stock monopoly that left private country issue standing, but kept a second Bank of England from appearing. The result was national money grown from a war loan, not from a city warehouse ticket alone.",
      "Convertibility was the ordinary test. Holders could present notes and ask for gold. Counterparties took the paper because they trusted that window. When the window is open, a note is a claim. When the window closes, the same note is a wartime unit that still spends if the public will hold it.",
    ],
  },
  {
    heading: "Restriction, 1797",
    paragraphs: [
      "War with revolutionary France strained the gold stock. Coin left for subsidies, for armies, and for hoards when invasion talk rose. In **February 1797** an Order in Council told the Bank to stop paying gold for its notes. The Bank Restriction Act of **1797** made that suspension statute. The notes stayed in circulation. The window did not.",
      "Restriction is a wartime English fact. The pound kept its name. The public could no longer test the name at the Bank. Gold went to a premium against notes. During the restriction the Bank issued small notes of **one and two pounds**. Coin had left daily trade; the paper filled the till. The Bullion Report of **1810** argued, from that premium, that the paper pound had depreciated.",
      "Do not merge this statute with John Law’s **1720** System, or with the assignats of the **1790s**. Restriction is an English bank closing the gold window while its notes remain everyday money. The dates sit near each other. The machines do not.",
    ],
  },
  {
    heading: "Resumption in the 1820s",
    paragraphs: [
      "Cash payments did not return with the first peace. After Waterloo the question was when, and at what gold definition, the Bank would pay again. Peel’s Act of **1819** set a path back to convertibility. Full gold payout on notes resumed in **1821**. That is the resumption this map means when it says the **1820s**.",
      "The cycle is England’s own: suspend for war, keep the notes in use, resume later at the old metal unit. A rhyme teaches mechanism — a claim treated as money can lose its metal stop. A merge erases dates. This cycle is not **1720**, not the assignats, and not **1923**.",
      "Resumption did not make the Bank a warehouse. The loan book and the note issue remained. What returned was the ordinary test at the window.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The order is England’s, not a mash of later paper disasters."],
    list: [
      "**1672.** Stop of the Exchequer; private paper that funded the Crown meets a closed sovereign window.",
      "**1694.** Bank of England charter: about £1.2 million as a war loan, with a note issue attached.",
      "**1708.** Joint-stock note-issue monopoly in England; Bank paper becomes the London standard.",
      "**Eighteenth century.** Bank notes become the ordinary paper of London.",
      "**February–May 1797.** Order in Council, then the Bank Restriction Act: gold payout on notes stops.",
      "**1810.** Bullion Report: notes trade at a discount to gold.",
      "**1819–1821.** Peel’s Act; cash payments resume. Restriction ends in the 1820s.",
    ],
  },
  {
    heading: "Why the war bank matters",
    paragraphs: [
      "Once notes are the ordinary cash of a capital, the issuer can be leaned on. A crown can borrow against a charter. Later machines on this shelf do not copy London. They use the habit it taught: a great state’s daily money can be a bank’s paper.",
      "Keep the disasters on their own dates. The next dated stop is [John Law and the Mississippi Bubble](/history/banks-paper/john-law): a **1720** note-and-share System, not an English restriction. Assignats are **1789–1796**. Germany’s mark in **1923** is a later rhyme on another shelf.",
      "This episode’s job on the [banks and paper](/history/banks-paper) shelf is the war-finance note bank. The prior stop is the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam). Then Law, then the assignats. Do not mash **1720**, the **1790s**, and **1923** into one London charter.",
    ],
  },
];

const assignats: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Assignats were notes of revolutionary France, first issued in **1789–90**, supposed to be retired from the sale of confiscated church and émigré land — the biens nationaux. The land was real. The promise was that paper would come back in as land went out. Quantity rose faster than retirement. By **1795–96** the paper was not a unit anyone would hold. The Directory returned toward metal.",
      "This stop on the [banks and paper](/history/banks-paper) shelf follows [John Law and the Mississippi Bubble](/history/banks-paper/john-law). Law is **1720** and a royal bank-plus-company. Assignats are a revolutionary fiscal instrument with a land story. They are not the same episode. They are not England’s Restriction. They are not Weimar.",
    ],
  },
  {
    heading: "What an assignat was",
    paragraphs: [
      "The National Assembly inherited a broken treasury. In **November 1789** it placed church property at the disposal of the nation. That stock — later enlarged by émigré estates — became the biens nationaux. The first assignats, decreed in **December 1789**, were large, interest-bearing paper: more a state claim to be paid from land sales than a daily note.",
      "Keep the instruments distinct. A **warehouse receipt** is a claim on identified metal at a window. A **Bank of England note** is a circulating promise to pay coin, subject to the Bank’s rules. A **Law note** was a bank promise fused with a rising company share. An **assignat** was a state liability whose advertised stop was land to be sold, not coin to be paid on demand. You could not walk to a vault and demand a posted weight. You were told the land was there, and that sales would retire the paper.",
      "The land story was the political sale. Metal was scarce in the till. Land was visible. If the paper was a claim on that land, the argument ran, it could not become worthless. Land can be real and still fail as a stop if issue is not retired and no window pays a fixed thing.",
    ],
  },
  {
    heading: "From bond to currency",
    paragraphs: [
      "In **April 1790** the paper was recast as circulating money. Interest was cut, then removed. Denominations fell until assignats could pay wages and buy bread. What had been a fiscal instrument for absorbing debt became the everyday unit.",
      "The Assembly treated quantity as a vote. **September 1790** added a large new issue and called the total a ceiling. The ceiling did not hold. Later years added more paper against the same land story, then against war. Once small notes exist, the state can pay in its own slip. Retirement becomes a hope about future sales, not a nightly burning that matches the press.",
      "Authorized totals moved from a few hundred million livres in the first decrees toward tens of billions by the mid-1790s. Series disagree on the last digit. The order does not: issue outran the sales meant to cancel it.",
    ],
  },
  {
    heading: "Quantity outran retirement",
    paragraphs: [
      "The advertised mechanism was simple. Sell a parcel of the biens nationaux. Take assignats in payment. Destroy those notes. The stock of paper falls as the stock of unsold land falls. In a clean ledger that could work.",
      "The ledger was not clean. Sales were slower than new decrees. Buyers paid in the same paper the state was still printing. Burning some notes while issuing more is not a stop. The land remained; the claim on it multiplied. A backing story without a hard limit on issue is a story.",
      "Prices in assignats rose. Metal went to a premium, then out of sight. Shops quoted two worlds: a paper price that moved, and a coin price that people preferred. That is the ordinary death of a unit — not a missing acre on a map, but a public that will not hold the slip.",
    ],
  },
  {
    heading: "War, the Maximum, and a dead unit",
    paragraphs: [
      "In **April 1792** France went to war. Armies, contractors, and the later levée en masse were paid in new assignats. Revolution at home and war abroad used the same press. The Terror’s **Maximum** (1793–94) tried to freeze prices in paper. Controls can hide a price for a time. They do not retire paper. After Thermidor the Maximum was repealed. The hidden price became the street price.",
      "By **1795** the assignat was failing as a store of value and as a unit of account. Markets reached for coin, barter, or foreign units. In **February 1796** the printing plates were destroyed in public. The Directory had already begun to live with metal again. A brief sequel, the mandats territoriaux, tried another land paper in **1796** and died in months. That is a postscript, not a second System.",
      "The paper did not vanish from drawers. It ceased to be money. France returned toward specie by abandoning the assignat, not by promising to redeem the same notes later at an old metal definition.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["Exact issue totals vary by series. The order does not."],
    list: [
      "**November 1789.** Church property placed at the nation’s disposal — the first biens nationaux.",
      "**December 1789.** First assignats: large, interest-bearing paper against future land sales.",
      "**April 1790.** Recast as circulating money; interest cut, then removed; smaller notes follow.",
      "**September 1790.** A large new issue; the Assembly calls the total a ceiling. The ceiling does not hold.",
      "**April 1792.** War; the press becomes war finance as well as land finance.",
      "**1793–94.** The Maximum tries to freeze paper prices; after Thermidor the controls go.",
      "**1795–February 1796.** The unit dies; plates destroyed; the Directory returns toward metal.",
      "**1796.** Mandats territoriaux: a short second land paper, then gone.",
    ],
  },
  {
    heading: "Not Law, not Restriction, not Weimar",
    paragraphs: [
      "Do not merge this episode with [John Law](/history/banks-paper/john-law). Law’s System fused a note-issuing bank with a colonial trading company under the Regency. Notes and Mississippi shares inflated together and broke in **1720**. Assignats have no Banque Royale and no rue Quincampoix. They are revolutionary state paper with a land story, issued decades later under a different regime and a different war.",
      "Do not merge it with the [Bank of England](/history/banks-paper/bank-of-england) Restriction either. In **1797** the Bank stopped paying gold for its notes. The notes stayed everyday English money. Resumption in the **1820s** brought the window back. Restriction is a suspend-and-resume cycle. Assignats are a paper that died. The dates sit near each other because the same wars strained both treasuries. The machines do not.",
      "Do not merge it with Germany’s 1923 hyperinflation. Weimar was a twentieth-century collapse of a national paper mark after war, reparations, and extreme monetization — a later rhyme, not the same event or the same century. A rhyme teaches mechanism. A merge erases dates.",
    ],
  },
  {
    heading: "Why this stop matters",
    paragraphs: [
      "Once a state can pay in its own land-tied slip, the issuer can be leaned on. The Revolution needed a till. The wars needed a larger one. The biens nationaux were the advertised limit. The press was the actual one.",
      "This episode’s job on the [banks and paper](/history/banks-paper) shelf is the revolutionary land paper. The prior French stop is [John Law and the Mississippi Bubble](/history/banks-paper/john-law). England’s Restriction, on the [Bank of England](/history/banks-paper/bank-of-england) page, is a labeled wartime rhyme, not a sequel. Do not mash **1720**, the **1790s**, and **1923** into one French print job.",
    ],
  },
];

const whyMarkets: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Before states stamped coins, traders already settled in gold and silver. Cattle, grain, shells, and copper had their ranges. For high-value, long-distance settlement, two metals kept winning. The selection is a trade result — durability, divisibility, scarcity and homogeneity, recognizability and portability — not a decree that invented money from nothing. A king can name a unit. He cannot force a distant counterparty to accept a unit that fails in the hand.",
      "Coinage is a later technology for verifying metal. The metal came first. The stamp came second.",
    ],
  },
  {
    heading: "Selection, not a decree",
    paragraphs: [
      "Many things have been money in a local range. Cattle settle a fine inside a community that already prices in cattle. Grain can pay a tax at harvest if the collector takes it before it spoils. Cowries have moved along coasts. Copper and bronze served as everyday small change in more than one ancient economy. People use what is at hand when the trade is near and the counterparties already know the stuff.",
      "Those goods fail as distance and value rise. An ox cannot settle a debt two seas away. Grain rots. Shells vary. Copper is useful, therefore consumed, and bulky for a large payment. A unit that must travel, wait, and still be accepted by someone who did not raise it needs different properties.",
      "Gold and silver were already that unit by weight long before a punch hit electrum in western Anatolia. In Mesopotamia, silver measured accounts in shekels — a weight, not yet a coin. Ingots, rings, and cut pieces moved in the Levant as hacksilver: metal taken by the scale, not by a type. Egyptian gold did the same work at a higher value. Markets had a settlement metal. They did not wait for a king to invent money by stamping it.",
      "A statute can name what taxes will accept. That is power over a till, not proof that distant traders will hold the named thing overnight. When it fails in the hand — too heavy, too perishable, too easy to fake, too easy to plant — the trade finds another. Gold and silver kept being found.",
    ],
  },
  {
    heading: "What the properties actually do",
    paragraphs: [
      "The properties are not a hymn. They are what a settlement good has to do when the other party is a stranger and the payment may sit for a year.",
      "**Durability** means the unit can sit for a generation. Gold does not rot and does not rust in ordinary air. Silver tarnishes; the metal remains. Grain, cattle, and cloth do not offer that pause. A store of value is first a store: the thing must still be there.",
      "**Divisibility** means a debt can be paid without slaughtering an ox. Metal can be cut, weighed, and recast. The same stuff settles a large claim and leaves a remainder. A live animal or a finished cloth is damaged by being divided. Change is how a unit works at more than one scale.",
      "**Homogeneity** means one ounce is like another, once refined. Cattle are not interchangeable. Shells vary. Mixed copper is a guess. When pieces of the same fineness are alike, weight becomes a language. The scale replaces the argument about which cow or which lump.",
      "**Scarcity** means a king cannot harvest a new stock from a field. Gold and silver are costly to find and to refine. The stock can grow — mines open; a mountain can later flood a century with silver — but it does not appear because a treasury needs it this afternoon. Scarcity here is costly expansion, not a promise that the pile never changes.",
      "**Recognizability** is how cheaply a stranger can tell the stuff from a look-alike. Color, weight in the hand, the streak, the ring of a good piece: crude tests, and enough for metal to move without a letter of introduction. At a distance the test has to be cheaper than hiring an assayer for every bargain.",
      "**Portability** is value per weight. Gold especially: a small mass settles a large debt. Silver is heavier for the same purchasing power, which is why it became the everyday metal of Mediterranean trade while gold stayed the large-value metal. Both still beat cattle on a ship and grain in a wagon.",
      "The six work together. A durable metal that cannot be divided is jewelry. A scarce metal no stranger can recognize is a rumor. A portable metal a king can plant is a season’s money. Gold and silver were the overlap that survived contact with people who did not share a temple, a harvest, or a statute.",
    ],
  },
  {
    heading: "Two metals, not one law",
    paragraphs: [
      "Gold and silver are not the same instrument. Gold packs more value into a smaller weight. It suits tribute, stores, and large settlement. Silver sits closer to daily trade: enough value to move, enough bulk that ordinary payments do not require dust. Ancient economies often used both, with copper or bronze underneath for the smallest change. That is a habit of scales, not yet a mint ratio written into a republic’s statute.",
      "Later pages will meet legal bimetallism — a fixed mint ratio, then Gresham’s pattern when the market ratio moves. That fight is not this episode. Traders already had two metals that did different jobs. No decree created that split. The split is in the properties: the same durability and homogeneity, different value per weight.",
    ],
  },
  {
    heading: "Metal first, mint later",
    paragraphs: [
      "Payment by weight is slow. Scales, touchstones, and arguments about fineness are the cost of using anonymous metal in a market of strangers. A stamp is a claim about that weight and that fineness. It does not create the metal. It cuts the cost of checking it.",
      "Lydia, in western Anatolia, is the conventional starting point for struck coinage in the seventh and sixth centuries BCE. Early pieces were electrum — a gold–silver mix — with a punch and, later, a type. The invention is the mark, not the ore. You still need to trust the issuer. You no longer need to weigh every lump. [Lydia and the first coins](/history/ancient/lydia-first-coins) is that stop.",
      "The stamp relocates trust. It does not abolish it. When the type is honest, coin travels farther than hacksilver. When the type is lightened, people return to the scale or hoard the better pieces. Greece’s silver network, Rome’s debasement, and a gold unit that keeps its weight come after the mint exists. They are not the origin of the metal as money.",
      "Do not start the story in **1971**. The Nixon gold-window close is a late official hinge, not the invention of money. Do not start it with a warehouse receipt either. Paper that claims a pile of coin comes after people already trusted the pile. This page is the pile: why gold and silver were the stuff in the bag.",
    ],
  },
  {
    heading: "Why this stop matters",
    paragraphs: [
      "None of this is a pitch to hold metal. It is why traders kept returning to the same two. The parent page is the [ancient money hub](/history/ancient): metal first, stamp second, then the path from Lydia to the solidus. The next hinge is [Lydia and the first coins](/history/ancient/lydia-first-coins) — electrum, a stamp, and a lower cost of verifying metal. Coinage is verification. It is not the birth of monetary metal.",
    ],
  },
];

const lydia: Section[] = [
  {
    heading: "A stamp on metal already money",
    paragraphs: [
      "Lydia, in western Anatolia, is the conventional starting point for struck coinage in the **seventh and sixth centuries BCE**. Early pieces were electrum — a natural or mixed gold–silver alloy — carrying a punch and, later, a recognisable type. Croesus is the royal name later attached to separating gold and silver issues. The invention is not the ore. It is the stamp.",
      "This page sits after [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver). Traders already settled in metal by weight. Lydia cuts the cost of verifying that metal in a market of strangers. It does not invent monetary gold and silver. It invents a cheaper check.",
    ],
  },
  {
    heading: "Where and when",
    paragraphs: [
      "Western Anatolia sat on trade routes between the Aegean and the interior of Asia Minor. Lydia’s kings controlled river gold and electrum sources that made a local mint possible. Archaeology and literary tradition place the first true coins in this zone in the later seventh century BCE, with wider use in the sixth.",
      "Exact first-year claims vary by dig and by how one defines “coin.” The documentary consensus is narrower: Lydia is where struck pieces with a state or royal mark become a habit of payment, not a one-off curiosity. Ionian cities nearby adopt and adapt the practice. The Aegean learns the stamp.",
      "Do not read Lydia as the birth of money. Mesopotamian silver accounts and Levantine hacksilver already measured value by weight. Lydia is the birth of a portable claim about that weight — a type you can recognise without opening every bag to the scale.",
    ],
  },
  {
    heading: "Electrum, punch, and type",
    paragraphs: [
      "Early Lydian pieces are often electrum: gold and silver mixed, sometimes from alluvial metal whose ratio was hard to read by eye. A blank is prepared. A punch or die leaves a mark. Later issues carry a clearer type — a design that names the issuer and implies a standard.",
      "Electrum’s mixed nature made the stamp especially useful. Without a trusted mark, every lump invited an assay argument. With a mark, the buyer still trusts the king or city, but the trust is concentrated: check the type, not every grain. The stamp relocates verification cost. It does not abolish trust.",
      "Weights and denominations evolve. Small pieces settle everyday trade; larger pieces settle bigger claims. The metal remains the substance. The type is the shortcut. Numismatists still argue over how early blanks were cast or cut and how quickly a true reverse die appears. For this map the monetary fact is enough: a repeatable mark turns anonymous alloy into a circulating claim.",
      "Hoards and find-spots show the pieces moving beyond the palace. That circulation is the test. A royal souvenir that never leaves the treasury is not yet the Aegean’s new payment habit. Lydia’s fame is that the habit stuck.",
    ],
  },
  {
    heading: "Croesus and separate gold and silver",
    paragraphs: [
      "Tradition credits **Croesus** (mid-sixth century BCE) with issuing pure gold and pure silver coins rather than only electrum. Whether every detail of that story is exact, the monetary logic is clear: separating the metals makes fineness easier to state and to check. Electrum hid a ratio. Gold and silver coins advertise what is in the piece.",
      "Separate issues also prepare a world in which gold and silver do different jobs — large-value and everyday — under named standards. Later Greek silver networks and Rome’s aureus–denarius pair sit downstream of that habit. Lydia does not write a modern mint ratio into statute. It shows a state choosing what the stamp promises.",
      "When Persia conquers Lydia, the minting habit does not vanish. Imperial coinage absorbs and extends the technology. The stamp travels with power. Subject cities and satrapal mints learn that a typed piece can move tax and trade farther than unmarked bullion — if the type is believed.",
    ],
  },
  {
    heading: "What the stamp changes — and what it does not",
    paragraphs: [
      "A stamp cuts the cost of verifying weight and fineness among strangers. You still need to trust the issuer. You no longer need to weigh every lump if the type is honest and familiar. Coin travels farther than anonymous hacksilver when that trust holds.",
      "When the type is lightened or the alloy cheated, people return to the scale, discount the coin, or hoard the better pieces. The stamp is a claim. Claims can fail. Greece’s silver network, Rome’s slow debasement, and a later gold unit that keeps its weight are all stories about what happens after the mint exists. They are not proofs that metal needed a king before it could be money.",
      "Metal first. Stamp second. That order is the hinge of this cluster. A king can accelerate adoption by requiring taxes in his coin. He cannot force a distant counterparty to treat a bad alloy as good gold. Markets still test the hand.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Before coinage:** Silver and gold already settle by weight (shekels, hacksilver, ingots) across the Near East.",
      "**Later 7th century BCE:** Struck electrum pieces appear in the Lydian–Ionian zone; punch and early types.",
      "**6th century BCE:** Wider use of typed coin; Croesus tradition of separate gold and silver issues.",
      "**After Lydia’s fall:** Persian and Greek mints carry the stamp technology into larger monetary networks.",
      "**Next on this shelf:** [Greece: silver and trade](/history/ancient/greece-silver-trade) — Laurion and the Attic owl.",
    ],
  },
  {
    heading: "Why this stop matters",
    paragraphs: [
      "None of this is a pitch to hold metal or to collect electrum. It is the documentary first stop for struck coinage: a lower cost of checking metal that was already money.",
      "Parent hub: [ancient money](/history/ancient). Previous stop: [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver). Next: [Greece: silver and trade](/history/ancient/greece-silver-trade). Keep **1971** and warehouse receipts off this page except as labeled later hinges.",
    ],
  },
];

const greece: Section[] = [
  {
    heading: "Silver as a Mediterranean language",
    paragraphs: [
      "Greek city-states turned mines and mints into a commercial network. Athens’ **Laurion** silver and the owl **tetradrachm** are the familiar face: a recognised weight of silver that could move across the Aegean without a letter of introduction. Control of a mine was fiscal power. Laurion helped fund fleets and public life.",
      "This page sits after [Lydia and the first coins](/history/ancient/lydia-first-coins). The stamp already exists. Greece shows what a silver standard looks like when city mints and trade routes share a metal language. It is not a collector catalogue, and it is not a modern mining prospectus.",
    ],
  },
  {
    heading: "City mints, not one empire mint",
    paragraphs: [
      "Classical Greece was a world of poleis — cities with their own laws, gods, and often their own coin. Aeginetan turtles, Corinthian pegasi, and Athenian owls are different types on related silver habits. Weight standards differed (Aeginetan, Attic, and others). Traders learned the types the way later merchants learned foreign coins: by familiarity and by the scale when familiarity failed.",
      "Colonies and trade posts carried Greek coin habits around the Black Sea, into Magna Graecia, and along Levantine coasts. Silver was not only Athenian. Athens is the best-documented fiscal story because Laurion and the empire leave a thicker literary trail.",
      "The network is the point. A stranger in a port could accept a known tetradrachm faster than anonymous bullion. That is Lydia’s stamp logic at Mediterranean scale. Exchange tables and money-changers still mattered when standards differed; the typed piece simply narrowed the argument to which city’s silver you held.",
    ],
  },
  {
    heading: "Laurion and Athenian fiscal power",
    paragraphs: [
      "The Laurion (Lavrion) mines in Attica produced silver that Athens coined and spent. Ancient accounts link Laurion output to naval power — notably the decision to build a large fleet from a rich strike in the early fifth century BCE. Exact tonnage figures are debated. The fiscal link is not: mine → mint → pay → ships and citizens.",
      "Owning or controlling a silver source meant the city could pay without waiting for tax in kind alone. Coin wages and coin payments made a public economy that looked different from a palace distributing grain. Laurion was a strategic asset, not a footnote for numismatists.",
      "Slave labour, galleries, and refining workshops made the district an industrial landscape by ancient standards. Output varied with veins, war, and management. When production fell or war disrupted the mines, Athens felt it in the till. Silver supply was policy as much as geology.",
      "Other Greek regions had mines too. Laurion’s fame is the Athens story: a democracy that coined its mountain into sea power and public pay. The cluster uses that story because the literary trail is thick, not because silver began in Attica.",
    ],
  },
  {
    heading: "The Attic owl tetradrachm",
    paragraphs: [
      "The Athenian tetradrachm — Athena on the obverse, owl and olive on the reverse — became a widely trusted silver piece of roughly **seventeen grams** in the Attic standard. Its type was stable enough that markets from the Aegean to the Near East recognised it. That recognition is monetary infrastructure.",
      "“Owl” is shorthand for a claim: this much silver, this fineness, this city’s reputation. Counterfeits existed; so did testing. The type still lowered verification cost compared with unmarked metal. Later imitations and eastern copies show how far the design traveled as a brand of silver weight.",
      "Do not confuse fame with monopoly. Other cities coined. Persian sigloi and later Alexander’s types enter the same silver world. The owl is the teaching example for this cluster because it ties mine, mint, and Mediterranean circulation in one object.",
      "Stability of type mattered as much as beauty. A merchant who saw the same Athena and owl year after year could price without a fresh assay on every bag. That is Lydia’s lesson at commercial scale.",
    ],
  },
  {
    heading: "Trade, tribute, and what silver did",
    paragraphs: [
      "Silver paid mercenaries, bought timber and grain, and settled balances between cities. Tribute under Athenian hegemony arrived in coin or was converted into it. Temples stored wealth; markets spent it. The metal moved as both public finance and private trade.",
      "Gold existed and mattered for large stores and eastern contacts, but everyday Greek monetary talk is silver talk. That matches the property split named on the opener: silver’s value-per-weight suited commercial scale; gold packed more value into less mass. Greece’s shelf on this map is the silver network.",
      "Ports from Sicily to the Black Sea priced cargoes in familiar silver weights. That shared language is why this stop sits between Lydia’s stamp and Rome’s two-metal state: the Aegean taught strangers to settle in typed silver before one empire tried to run gold and silver together under fiscal stress.",
      "A much later rhyme — Potosí flooding the early modern world with silver — is a different century and a different volume. The [Potosí](/history/silver/potosi) stop belongs on the silver cluster. Keep the hinge labeled if you cross-link; do not mash Laurion into the Spanish mountain.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Archaic period:** Greek cities adopt coinage after the Lydian–Ionian habit; multiple weight standards.",
      "**Early 5th century BCE:** Laurion wealth tied to Athenian naval expansion in literary tradition.",
      "**Classical pentekontaetia / empire years:** Owl tetradrachms circulate widely; tribute and trade in silver.",
      "**4th century BCE and after:** Macedonian and Hellenistic coinages overlay and extend the silver language.",
      "**Next on this shelf:** [Rome: denarius and aureus](/history/ancient/rome-denarius-aureus) — two metals, then lightened silver.",
    ],
  },
  {
    heading: "Why this stop matters",
    paragraphs: [
      "None of this is investment advice or a pitch to hold metal. It is how a mine and a type became a Mediterranean settlement language.",
      "Parent hub: [ancient money](/history/ancient). Previous: [Lydia and the first coins](/history/ancient/lydia-first-coins). Next: [Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus). Cross-shelf rhyme only: [Potosí](/history/silver/potosi).",
    ],
  },
];

const rome: Section[] = [
  {
    heading: "Two metals, one state",
    paragraphs: [
      "Rome ran gold and silver together: the **aureus** and the **denarius** as the famous pair, with bronze for small change. When the mint’s legal relation and the market’s metal prices drifted, the legally overvalued metal tended to stay in the till and the other tended to leave. Debasement of the silver coin was gradual, then obvious. The third-century crisis made the coinage a fiscal instrument. When spending outruns metal, the coin is lightened.",
      "This page is the fiscal stop on the ancient shelf — not a moral sermon about decadence, and not a pitch to hold bullion. It follows [Greece: silver and trade](/history/ancient/greece-silver-trade). It precedes [the solidus](/history/ancient/solidus-continuity). A much later American rhyme for mint-ratio arithmetic sits at [early U.S. coinage](/history/america/early-us-coinage); keep the centuries labeled.",
    ],
  },
  {
    heading: "Denarius and aureus in the early empire",
    paragraphs: [
      "The silver **denarius** had been Rome’s workhorse silver unit from the Republic onward. Under the early empire it was meant as a stable silver coin for pay, tax, and trade. The gold **aureus** sat above it for large payments and stores. Bronze and orichalcum pieces handled the smallest change. The system was multi-metallic in practice: different metals for different scales of payment.",
      "Augustus and the Julio-Claudians inherited and adjusted weights and tariffs. The documentary point for this map is the design: a gold coin, a silver coin, and base metal underneath — a state naming how the metals relate in pay tables even when markets move.",
      "Soldiers’ pay, grain contracts, and tax demands all touched these units. Coin was public finance in the hand.",
    ],
  },
  {
    heading: "Mint relation versus market metal",
    paragraphs: [
      "A state can post how many denarii equal an aureus in official accounts. Traders and goldsmiths watch the bullion market. When silver is cheap relative to the official bridge, silver coin is easier to bring to the mint or to spend; gold may be hoarded or exported. When silver is dear, the pattern flips. That is the same Gresham logic later written into modern bimetallism debates — not because Rome passed the Coinage Act of 1792, but because fixed official relations meet moving metal prices.",
      "Rome’s story on this page is not only that ratio drift. It is what happens when the silver coin itself is watered: the official name stays; the metal inside falls. Then the “silver” unit becomes a fiscal token wearing a familiar face.",
    ],
  },
  {
    heading: "Slow, then obvious, debasement",
    paragraphs: [
      "Silver fineness in the denarius declined over the first and second centuries as costs — wars, donatives, administration — pressed the treasury. Nero’s reforms are an early famous adjustment of weight and alloy. Later reigns repeated the pattern. Each step could be defended as temporary. The cumulative result was a lighter, baser denarius.",
      "In the third century the **antoninianus** (often called a double denarius in tariff) spread as a major silver-washed coin. Its silver content fell sharply over decades. By the worst years of the crisis, many pieces were bronze cores with a silver wash — a coin that looked like silver money and behaved like a forced token.",
      "Prices rose in coin terms. People discounted bad money, demanded better coin or bullion for real settlement, and revised contracts. The mechanism is fiscal: obligations in coin outran honest metal supply, so the mint stretched the metal. It is not a cartoon of one emperor “printing.” It is repeated lightening under political survival pressure.",
      "Hoards from the period show mixtures of better and worse pieces. Markets sorted what the mint blurred. That sorting is Gresham’s pattern in archaeological dress: good silver disappears into bags; washed tokens stay in the street price.",
    ],
  },
  {
    heading: "The third-century crisis as monetary pressure",
    paragraphs: [
      "Civil wars, frontier defense, and competing armies meant cash for troops now. Usurpers and legitimate emperors alike bought loyalty with coin. Mines and booty did not automatically match the payroll. Debasement was the available lever inside a metallic system that still used coin as the unit of pay.",
      "Aurelian and later reformers attempted to restore order to the coinage. Diocletian’s price edict and Constantinian reforms belong to the recovery and transformation that follow. This page’s hinge is the lesson already visible before the solidus: when the silver unit is gutted, trust moves toward gold and toward better-known pieces — or toward payment in kind.",
      "Do not flatten this into “Rome fell because of inflation” as a single cause. Military, political, and demographic stresses sit beside the mint. Do say that the coinage became an instrument of emergency finance, and that the silver unit paid the price first.",
      "Soldiers who received baser coin still needed real goods. Official tariffs and market discounts diverged. That gap is how a metallic system can fail as a unit of account without anyone inventing paper notes.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Republic–early empire:** Denarius as silver workhorse; aureus as gold unit; bronze for change.",
      "**1st–2nd centuries CE:** Gradual reductions in denarius silver; occasional reforms reset expectations briefly.",
      "**3rd century CE:** Antoninianus proliferates; silver content collapses; military pay pressure peaks.",
      "**Late 3rd–early 4th:** Attempts to restabilise coinage; gold’s role as the honest large unit grows.",
      "**Next on this shelf:** [After Rome: the solidus](/history/ancient/solidus-continuity) — a gold coin that keeps its weight.",
    ],
  },
  {
    heading: "Why this stop matters",
    paragraphs: [
      "None of this is a forecast for modern currency or a pitch to hold bullion. It is the documentary record of a bimetallic pay system meeting fiscal overload — and of silver lightened until the name outran the metal.",
      "Parent hub: [ancient money](/history/ancient). Previous: [Greece: silver and trade](/history/ancient/greece-silver-trade). Next: [solidus continuity](/history/ancient/solidus-continuity). Later mint-ratio rhyme: [early U.S. coinage](/history/america/early-us-coinage). Keep **1971** off this page.",
    ],
  },
];

const solidus: Section[] = [
  {
    heading: "A gold coin that keeps its weight",
    paragraphs: [
      "Constantine’s **solidus**, in the early **fourth century**, was a gold coin of tightly held weight and fineness. It outlasted the western empire as the Byzantine **nomisma**. Continuity of weight is the story, not a romance of Rome and not a sequel about paper.",
      "This page follows [Rome: denarius and aureus](/history/ancient/rome-denarius-aureus), where silver was lightened under fiscal pressure. The solidus is the contrasting hinge: a gold unit defended as a standard for centuries. It is not the [Nixon gold-window close](/history/20th-century/nixon-shock), and it is not the birth of the warehouse receipt.",
    ],
  },
  {
    heading: "What Constantine changed",
    paragraphs: [
      "In the 310s Constantine’s minting settled on a gold solidus at roughly **1/72 of a Roman pound** — about **4.5 grams** of gold in the classic account — struck at high purity. Earlier tetrarchic gold experiments existed; Constantine’s solidus is the type that stuck as the empire’s premier gold unit.",
      "Gold had already been the metal of large payments when silver tokenised. The solidus made that hierarchy explicit and durable: accounts, taxes, and elite payments could reference a coin whose metal content was meant to be trusted. Bronze and reformed base issues still handled small change under other names.",
      "The political context is imperial consolidation after civil war. A stable gold unit supported a state that collected and spent across a huge territory. The documentary claim is monetary technique, not hagiography of Constantine.",
      "Pay tables and tax assessments that could name a reliable gold piece reduced the chaos left by silver that no longer meant what its type claimed. That administrative usefulness is why the solidus outlived slogans about restoration and became the empire’s reference gold coin for long stretches.",
    ],
  },
  {
    heading: "Weight and fineness as the product",
    paragraphs: [
      "What made the solidus different from the late antoninianus was not a pretty type. It was discipline about mass and purity. A merchant or tax official could treat the coin as a known quantity of gold. That is the same verification logic as Lydia’s stamp — only now the promise is gold weight held for generations.",
      "Debasement pressure never vanishes in a fiscal state. The solidus tradition is famous because, for long stretches, Byzantine authorities treated the nomisma’s standard as something to defend. When later medieval debasements and reforms occur, they are measured against that memory of a hard gold unit.",
      "Silver and base coin could still be adjusted for local pay. The solidus’s job was the large, trusted settlement piece — the metal-first unit after silver’s reputation had been burned in the third century.",
      "Fractions and multiples (semissis, tremissis, and later related issues) let the gold standard work at more than one scale without abandoning the gram-weight idea. The hierarchy still pointed at the full solidus as the reference.",
    ],
  },
  {
    heading: "From Rome to Byzantium: the nomisma",
    paragraphs: [
      "As imperial power centered on Constantinople, the solidus continued under Greek administrative language as the nomisma (and related denominations). Western successor kingdoms minted their own gold at times, often imitating familiar types. The eastern empire kept the solidus tradition as a living standard of Mediterranean and Near Eastern trade.",
      "Foreigners called high-quality Byzantine gold by names that signaled trust — the medieval “bezant” in western sources is that reputation traveling. Continuity here means: a gold coin whose weight claim remained credible enough to price contracts and tribute across changing dynasties.",
      "This is not a claim that nothing changed in Byzantine fiscal history. It is a claim that the ancient cluster’s last stop is metallic continuity, not the invention of modern central banking.",
      "Trade routes still needed a settlement metal strangers would accept overnight. The nomisma filled that role for long stretches because the mint’s promise stayed close to the metal in the hand — the opposite lesson from washed silver of the third century.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a romance that “Rome never fell because the solidus lived.” Western political collapse and eastern survival are separate facts from mint metrology. Continuity of a gold weight standard can outlast a capital.",
      "This page is not paper money. Warehouse receipts, public banks, and note issue live on [banks and paper](/history/banks-paper), beginning with [warehouses to public banks](/history/banks-paper/warehouses-to-public-banks). A solidus is coin you can hold. A receipt is a claim on coin you are not holding. Do not mash them.",
      "This page is not **1971**. The Nixon shock ends a twentieth-century convertibility practice. It does not begin monetary history, and it does not explain Constantine’s mint. Keep that modern hinge on the twentieth-century shelf where it belongs.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Early 4th century:** Constantine’s solidus established as the premier gold unit (~1/72 lb).",
      "**4th–5th centuries:** Gold solidus frames elite and fiscal payments as silver’s third-century damage lingers in memory.",
      "**Byzantine centuries:** Nomisma continues the weight tradition; “bezant” fame in external trade language.",
      "**Cluster handoff:** Ancient shelf ends on metallic continuity; paper and banks open on the next hub.",
      "**Not on this page:** Assignats, Weimar, Fed, Nixon — labeled later hinges only.",
    ],
  },
  {
    heading: "Why this stop matters",
    paragraphs: [
      "None of this is a pitch to hold metal or to treat Byzantine types as an investment thesis. It is why a gold unit that keeps its weight became the ancient shelf’s closing hinge after silver was lightened.",
      "Parent hub: [ancient money](/history/ancient). Previous: [Rome: denarius and aureus](/history/ancient/rome-denarius-aureus). Next cluster door: [banks and paper](/history/banks-paper). Return to [Sound Money History](/history) for the five-cluster map. The ancient path ends when the story leaves the coin for a ticket — not before.",
    ],
  },
];

const earlyUs: Section[] = [
  {
    heading: "A republic that named both metals",
    paragraphs: [
      "The Coinage Act of **1792** wrote gold and silver into United States law and fixed a mint ratio of **fifteen to one**. The dollar was a unit that could be paid in either metal at that legal relation. Which metal actually stayed in circulation was decided by the market ratio abroad, not by the preamble. When world prices moved, Gresham’s pattern appeared: the legally overvalued metal stayed; the other was exported or hoarded.",
      "This page is the opening statute of the America cluster — not a romance of founding fathers, and not a pitch to hold coin. It names the mint ratio, the Spanish silver that shaped the dollar, and the 1834 correction. The later silver fight of [1873](/history/america/crime-of-1873) and the gold statute of [1900](/history/america/road-back-gold) sit downstream. Start here for the arithmetic that made those fights possible.",
    ],
  },
  {
    heading: "What the Coinage Act of 1792 did",
    paragraphs: [
      "Congress established a Mint and defined the dollar in both gold and silver. A silver dollar was to contain **371.25 grains** of pure silver. Gold coins were set so that fifteen ounces of pure silver equaled one ounce of pure gold at the Mint. That **15:1** ratio was the legal bridge between the two metals.",
      "The Act also named smaller silver coins and gold eagles, half-eagles, and quarter-eagles. Copper cents and half-cents covered small change. The design was bimetallic in law: either metal could settle a dollar debt at the posted weights. The statute did not invent money. It named a unit and a ratio for a republic that already traded in Spanish dollars and foreign coin.",
      "Hamilton’s Report on the Establishment of a Mint (1791) had argued for a bimetallic dollar and for a ratio close to market practice. The 1792 Act is the legislative result. Later politics would treat “bimetallism” as a slogan. In 1792 it was a mint board: two metals, one legal unit, a fixed conversion.",
    ],
  },
  {
    heading: "The Spanish dollar in the background",
    paragraphs: [
      "The early United States did not invent its silver weight from blank paper. The Spanish eight-real piece — the [piece of eight](/history/silver/piece-of-eight) — had long been the common dollar of Atlantic trade. American contracts and statutes often meant that coin when they said “dollar.” The 1792 silver weight sat close to that familiar piece.",
      "Foreign coin remained legal tender for years. The Mint was slow to supply enough domestic pieces. Circulation was a mix of Spanish and other foreign silver, scarce gold, and bank notes of uneven quality. The statute named an American unit. Daily payment still used what was in the bag.",
      "That continuity matters for this map. Potosí silver and Spanish minting had already made a global silver coin. The United States adopted a dollar that traders already understood, then wrote gold beside it at a fixed ratio. The [silver cluster](/history/silver/bimetallism) carries the mechanics of two metals under one law. This page carries the American opening.",
    ],
  },
  {
    heading: "Mint ratio versus market ratio",
    paragraphs: [
      "A mint ratio is a legal price: how many ounces of silver equal one ounce of gold at the Mint. A market ratio is what traders actually pay in London, Amsterdam, or Paris. When the two drift, arbitrage follows. The metal that is cheaper at the Mint relative to the world is brought in for coinage. The metal that is dearer at the Mint is melted, exported, or hoarded.",
      "That is Gresham’s pattern in mint dress: the legally overvalued metal stays in circulation; the undervalued metal leaves. The statute does not defeat the scale. [Bimetallism](/history/silver/bimetallism) is the general claim. Early U.S. coinage is the American instance.",
      "Through the early nineteenth century, silver often looked cheap at 15:1 relative to European gold–silver prices. Gold tended to leave. The republic’s circulating coin leaned silver. The legal bridge still said both metals. The till said otherwise.",
    ],
  },
  {
    heading: "The 1834 correction",
    paragraphs: [
      "In **1834** Congress changed the gold content of the eagle so that the mint ratio moved toward roughly **16:1**. The intent was gold-friendlier: to bring gold back into circulation by making an ounce of gold buy more silver at the Mint than before.",
      "After 1834, gold coins became more common in domestic use. Silver dollars and smaller silver still mattered, but the legal tilt had shifted. The arithmetic is the same as 1792 — a fixed ratio meeting a moving market — only the numbers changed. The later omission of the standard silver dollar in [1873](/history/america/crime-of-1873) sits on this path: once the system leaned gold, dropping free coinage of the silver dollar was easier to frame as clarification.",
      "Do not read 1834 as the end of silver politics. Subsidiary silver and later “free silver” campaigns still filled the century. Read it as a ratio change that showed the Mint could rewrite the bridge when circulation failed the preamble.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1791:** Hamilton’s mint report argues for a bimetallic dollar and a practical gold–silver ratio.",
      "**2 April 1792:** Coinage Act; Mint established; silver dollar at 371.25 grains pure; gold at 15:1.",
      "**1790s–1820s:** Foreign silver (especially Spanish dollars) remains central to circulation; gold often scarce at 15:1.",
      "**1834:** Gold content of the eagle adjusted; mint ratio moves toward ~16:1; gold returns more readily to the till.",
      "**Later on this cluster:** Jackson’s bank war, greenbacks, the Coinage Act of 1873, resumption, Gold Standard Act 1900.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a collector guide, not a bullion pitch, and not a price target for either metal. It is the statute that named both metals and a ratio — and the market arithmetic that decided which metal stayed.",
      "Parent hub: [America & gold/silver politics](/history/america). Next monetary fight on this shelf: [Jackson and the Bank](/history/america/jackson-and-the-bank). The silver question’s loud American event is the [Crime of 1873](/history/america/crime-of-1873). Cross-link for the coin that shaped the dollar: [piece of eight](/history/silver/piece-of-eight).",
    ],
  },
];

const jackson: Section[] = [
  {
    heading: "A bank fight before the Fed",
    paragraphs: [
      "Andrew Jackson’s war on the Second Bank of the United States is American politics and monetary history at once. The Bank was a federally chartered corporation that issued notes, held government deposits, and sat at the center of the country’s credit. Jackson treated it as concentrated power. His **1832** veto blocked recharter. Federal deposits moved to state “pet” banks. The Specie Circular of **1836** required gold and silver for public land. The Panic of **1837** followed.",
      "This page stays documentary: charter, veto, deposits, specie rule, panic. It is not a sermon for or against central banks, and it is not the [Panic of 1907](/history/20th-century/panic-1907-fed). The later Federal Reserve statute is **1913**. Jackson’s fight is an earlier American argument over who holds the government’s money and who issues the country’s paper.",
    ],
  },
  {
    heading: "What the Second Bank was",
    paragraphs: [
      "The First Bank of the United States (1791–1811) had already shown the pattern: a federal charter, mixed public and private ownership, note issue, and a role as the government’s fiscal agent. After the War of 1812, Congress chartered the Second Bank in **1816**, with a twenty-year term. Nicholas Biddle became its dominant president. The Bank’s notes circulated widely. It also restrained state banks by presenting their notes for specie.",
      "Supporters called that discipline sound. Opponents called it a monopoly over credit and politics. The Bank was not a modern central bank with a dual mandate and open-market operations. It was a privileged corporation with a federal seal, a large capital, and the Treasury’s account. That was enough to make it a national issue.",
      "By the early 1830s the charter’s end was in sight. Biddle and allies pressed for early recharter. Jackson and the Democratic coalition framed the Bank as a threat to equal rights and hard money. The fight was about power and specie as much as about balance sheets.",
    ],
  },
  {
    heading: "The 1832 veto and the election",
    paragraphs: [
      "Congress passed a recharter bill in **1832**, well before the 1836 expiry. Jackson vetoed it. His veto message attacked the Bank as unconstitutional, as a privilege for the wealthy, and as a foreign-influenced corporation. The message was politics as much as jurisprudence. It made the Bank the issue of the 1832 presidential campaign.",
      "Jackson won reelection. The veto stood. The Bank would not receive a new federal charter on that bill. Biddle still ran the existing institution until the charter ran out, but the political verdict had landed: the federal center would not be renewed by that Congress and that President.",
      "Do not confuse the veto with the later removal of deposits. The veto stopped recharter. The deposit removal was a separate executive move that starved the Bank of the government’s cash.",
    ],
  },
  {
    heading: "Pet banks and the Specie Circular",
    paragraphs: [
      "After the veto fight, Jackson’s Treasury began removing federal deposits from the Second Bank and placing them in selected state banks — the “pet banks” of contemporary abuse. The government’s money no longer sat in one federally chartered vault. It sat in a scattered set of state institutions whose note issue and lending the administration preferred to the Bank’s discipline.",
      "Land sales in the West were booming. Speculators often paid with bank paper. In **1836** the Specie Circular ordered that public lands be paid for in gold and silver. The rule was a hard-money brake on paper land fever. It also drained specie from banks that had been extending credit against land notes.",
      "The mix — deposit removal, state-bank expansion, then a sudden specie demand for land — belongs in any account of the mid-1830s. Whether one blames Jackson, Biddle, state banks, or the land boom depends on the historian. The documentary sequence does not.",
    ],
  },
  {
    heading: "Panic of 1837 and the aftermath",
    paragraphs: [
      "In **1837** a financial panic hit American banks and commerce. Specie payments were suspended in many places. Failures spread. The causes were several: international credit conditions, cotton prices, land speculation, and the domestic banking scramble after the Bank war. This page does not pick a single villain. It notes that the panic followed the deposit and specie sequence by months, not decades.",
      "The Second Bank’s federal charter expired. Biddle’s institution continued for a time under a Pennsylvania charter and then failed in the early 1840s. The United States entered a long stretch without a federally chartered central bank. The Independent Treasury system later tried to keep federal money out of banks altogether. State banks and note chaos filled the gap until the Civil War’s national banking acts — and until the [greenback](/history/america/greenbacks-civil-war) war finance of the 1860s.",
      "The next time a national liquidity panic forces a central-bank debate at full volume is [1907](/history/20th-century/panic-1907-fed). That episode creates the Fed. It does not replay Jackson’s veto. Keep the centuries labeled.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1816:** Second Bank of the United States chartered for twenty years.",
      "**1832:** Congress passes recharter; Jackson vetoes; Jackson reelected with the Bank as a campaign issue.",
      "**1833–34:** Federal deposits removed from the Bank to state “pet” banks.",
      "**1836:** Specie Circular — gold and silver required for public-land purchases; Bank’s federal charter expires.",
      "**1837:** Panic; widespread suspension of specie payments.",
      "**1913 (later cluster):** Federal Reserve Act — after the Panic of 1907, not as a sequel to Jackson’s veto message.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not investment advice, not a brief for “end the Fed,” and not a biography of Jackson. It is the Bank war as a monetary-political event: charter, veto, deposits, specie, panic — then a country without a federal central bank until a later century’s statute.",
      "Parent hub: [America & gold/silver politics](/history/america). Previous stop on the unit: [Early U.S. coinage](/history/america/early-us-coinage). Next war-finance hinge: [Greenbacks and the Civil War](/history/america/greenbacks-civil-war). Cross-link forward: [Panic of 1907 and the Fed](/history/20th-century/panic-1907-fed).",
    ],
  },
];

const greenbacks: Section[] = [
  {
    heading: "Paper as a war measure",
    paragraphs: [
      "The Union financed the Civil War in part with United States Notes — greenbacks — made legal tender by the Legal Tender Act of **1862**. They were not redeemable in gold at the time. Gold traded at a premium to paper in a free gold market in New York. Greenbacks were a suspension of the metallic dollar for war finance, not a theory that paper had replaced metal forever.",
      "After Appomattox the fight shifted: whether to contract the greenback stock, whether to resume gold payments, and at what parity. The Specie Payment Resumption Act of **1875** set a date — **1 January 1879**. This page covers issue, premium, and the road to that date. The [Crime of 1873](/history/america/crime-of-1873) and the [Gold Standard Act of 1900](/history/america/road-back-gold) are neighbors, not the same statute.",
    ],
  },
  {
    heading: "Why the Union issued greenbacks",
    paragraphs: [
      "War spending outran ordinary tax and bond finance. Banks suspended specie payments at the end of **1861**. The Treasury needed a currency the public and contractors would accept when gold coin was scarce in daily Union payments. Congress authorized United States Notes — demand notes at first, then the familiar green-backed legal-tender notes.",
      "Legal tender meant creditors had to accept the notes for most public and private debts, with exceptions such as customs duties and interest on some bonds, which stayed closer to gold. The notes were obligations of the United States. They were not warehouse receipts for a named pile of coin. Convertibility into gold was suspended for the duration of the emergency.",
      "The Confederacy issued its own flood of paper; that story ends in collapse with the regime. This page stays with the Union greenback — the paper that survived the war and then dominated peacetime politics.",
    ],
  },
  {
    heading: "Gold premium and the New York gold room",
    paragraphs: [
      "Once greenbacks were legal tender and gold was still the international and customs metal, two prices appeared. Goods and contracts quoted in “currency” (paper) diverged from prices in gold. In New York a gold market — informal, then more organized — posted the premium of gold over greenbacks.",
      "When Union fortunes looked dark, the premium widened: more greenbacks were needed to buy a gold dollar. When military and fiscal news improved, the premium narrowed. Importers who needed gold for duties watched that market daily. Ordinary wage earners felt the premium as higher currency prices for goods tied to gold or imports.",
      "The premium is the documentary proof that greenbacks were not “as good as gold” during the war. They were a forced paper unit beside a gold unit that still priced customs and foreign exchange. [Inflation as purchasing-power erosion](/sound-money/inflation-purchasing-power) is the idea-pillar label for that squeeze. This page is the wartime instrument.",
    ],
  },
  {
    heading: "Legal tender cases and postwar politics",
    paragraphs: [
      "After the war, debtors liked paying in cheaper paper. Creditors wanted gold or contraction of the note issue. Courts eventually upheld the constitutionality of legal-tender notes for debts, in a tangled set of Legal Tender Cases that flipped and then settled in favor of the power Congress had used.",
      "Politics split along familiar lines. “Hard money” voices wanted a rapid return to specie and a smaller greenback stock. Greenback Party and agrarian voices wanted more paper, or at least no contraction that would raise the real burden of debts. Bondholders who had lent in gold terms watched every Treasury signal.",
      "National banking acts during and after the war created a federal note framework beside the greenback. The two paper stocks were not the same instrument: bank notes under national charter, United States Notes as direct Treasury obligations. Public argument often mashed them into one “paper money” complaint. The documentary split still matters for how resumption was staged.",
      "The greenback was no longer only a war tool. It was a peacetime unit whose quantity and convertibility would decide winners and losers on every farm mortgage and railroad bond.",
    ],
  },
  {
    heading: "Resumption Act of 1875",
    paragraphs: [
      "The Specie Payment Resumption Act committed the Treasury to redeem United States Notes in coin on and after **1 January 1879**. The Act also allowed gradual reduction of the greenback circulation toward a floor, and it authorized gold accumulation to make the promise credible.",
      "Resumption did not happen overnight in 1865. It took a decade of politics, surplus fiscal conditions in some years, and a Treasury that actually built a gold reserve. Opponents tried to repeal or soften the commitment; the date held. When the day came, greenbacks traded at par with gold; the wartime premium was gone. The paper note became again a claim on coin at a one-to-one practical rate.",
      "Full legal definition of the dollar as a gold unit waited until the [Gold Standard Act of 1900](/history/america/road-back-gold). Resumption was the operational hinge. The 1900 statute was the label. Between them sat the silver fight that begins with the [Coinage Act of 1873](/history/america/crime-of-1873).",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**December 1861:** Banks suspend specie payments.",
      "**February 1862:** Legal Tender Act — United States Notes (greenbacks) authorized as legal tender.",
      "**1862–65:** Gold premium fluctuates with war news; greenbacks finance a large share of Union spending.",
      "**1865–75:** Postwar fight over contraction versus more paper; Legal Tender Cases in the courts.",
      "**January 1875:** Specie Payment Resumption Act; redemption date set for 1 January 1879.",
      "**1 January 1879:** Specie payments resume; greenbacks at par with gold in practice.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a price target, not a tip to hold paper or metal, and not a full fiscal history of the Civil War. It is greenbacks as inconvertible war paper, a gold premium, and a dated path back to specie.",
      "Parent hub: [America & gold/silver politics](/history/america). Earlier bank fight: [Jackson and the Bank](/history/america/jackson-and-the-bank). Next silver statute: [Crime of 1873](/history/america/crime-of-1873). Idea-pillar companion: [Inflation and purchasing power](/sound-money/inflation-purchasing-power).",
    ],
  },
];

const crime1873: Section[] = [
  {
    heading: "What the Coinage Act of 1873 did",
    paragraphs: [
      "The Coinage Act of **1873** revised the Mint’s list of coins. It omitted the standard silver dollar from the coins to be freely minted. Gold became the effective standard for the dollar’s large unit. Subsidiary silver — dimes, quarters, halves — continued under regulated coinage. The statute did not abolish silver metal. It ended free coinage of the old silver dollar as a full legal peer of gold.",
      "In later agrarian politics that omission became the **“Crime of 1873”**: a conspiracy to demonetize silver and enrich creditors. In the Treasury’s and many economists’ telling it was a clarification toward gold, aligned with Europe’s move after Germany’s gold shift in the early 1870s. The documentary fact is the statute’s list. The name “crime” is the political memory.",
      "This page separates those layers. Parent hub: [America & gold/silver politics](/history/america). Mechanics of two metals under one law: [bimetallism](/history/silver/bimetallism). The road after the silver fight: [resumption and the 1900 gold statute](/history/america/road-back-gold).",
    ],
  },
  {
    heading: "Why silver was already under pressure",
    paragraphs: [
      "World silver supply rose in the late nineteenth century — Nevada’s Comstock and other Western mines among the sources — while several European states moved toward gold. Germany’s shift after unification dumped silver onto the market. The gold–silver market ratio moved away from older mint habits. Silver’s gold price fell.",
      "The United States had already tilted gold-friendlier in [1834](/history/america/early-us-coinage). Greenback war finance had suspended specie. By the early 1870s, officials drafting a mint revision treated the silver dollar as a coin little used in large payments and awkward beside a gold unit. Dropping free coinage of that dollar looked, to them, like housekeeping.",
      "Housekeeping in a mint statute can still reprice every farm debt. When silver could no longer be coined freely into full-weight dollars, silver producers lost a floor, and debtors lost a path to inflate the unit with cheaper metal. That is why a quiet omission became a loud crime in memory.",
    ],
  },
  {
    heading: "Crime or clarification?",
    paragraphs: [
      "The “crime” charge held that the Act was slipped through without honest debate — that silver’s friends in Congress did not see the demonetization coming. Historians still argue how open the drafting was and how much Western silver interests understood at the time. What is not in dispute: the standard silver dollar left the free-coinage list, and gold’s primacy hardened.",
      "The clarification charge held that the United States was joining a gold-standard world, that bimetallism at a stale ratio invited arbitrage, and that subsidiary silver was enough for small change. Europe’s gold turn is real context. It does not erase the domestic distributional fight that followed.",
      "This map does not referee the moral word “crime.” It records the Act, the nickname, and the politics that nickname organized. Readers who want the general mechanism open [bimetallism](/history/silver/bimetallism). Readers who want the American statute stay here.",
    ],
  },
  {
    heading: "Free silver and the 16-to-1 demand",
    paragraphs: [
      "“Free silver” meant unlimited coinage of silver into dollars at a fixed mint ratio — famously **sixteen to one** with gold — without the limits that later compromise acts imposed. Silver producers wanted a Mint bid for their metal. Debtors wanted a larger money stock and a cheaper dollar relative to gold debts.",
      "Congress did not ignore silver entirely after 1873. The Bland–Allison Act (**1878**) and the Sherman Silver Purchase Act (**1890**) required Treasury purchases of silver and limited coinage or note issue against it. Those were compromises, not free coinage at 16:1. Markets still watched whether the Treasury could hold gold payments while it accumulated silver.",
      "The fight was national. Mining states, Southern and Western agrarians, and urban hard-money and creditor interests mapped onto parties and factions. The greenback generation’s paper fight and the silver generation’s metal fight were cousins: both asked whether the dollar would stay scarce relative to debts.",
    ],
  },
  {
    heading: "Bryan, 1896, and the cross of gold",
    paragraphs: [
      "William Jennings Bryan’s **1896** Democratic campaign is the loud face of the silver question. His “cross of gold” speech attacked a gold-only standard as crucifixion of the producing classes. The Republican ticket defended the gold dollar. Bryan lost. Gold discoveries and other conditions eased monetary stringency in the years that followed, but the political memory of 1873 did not vanish.",
      "Bryan did not invent the silver question. He inherited a fight that began with the Mint list of 1873 and ran through purchase acts, Treasury gold drains, and the language of crime. The campaign is the peak volume, not the first statute.",
      "After 1896 the path runs toward the [Gold Standard Act of 1900](/history/america/road-back-gold), which defined the dollar in gold in law. The Crime of 1873 is the silver hinge on the way there.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1871–73:** Germany and others move toward gold; world silver price under pressure.",
      "**12 February 1873:** Coinage Act omits free coinage of the standard silver dollar.",
      "**1878:** Bland–Allison Act — limited Treasury silver purchases and coinage.",
      "**1890:** Sherman Silver Purchase Act — larger silver purchases; later linked to gold-reserve strain.",
      "**1893:** Sherman Act repealed amid crisis; gold standard politics intensify.",
      "**1896:** Bryan’s free-silver campaign; gold side wins the election.",
      "**1900:** Gold Standard Act — dollar defined in gold (next page on this cluster).",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a bullion pitch, not a metal-ratio target, and not a brief for remonetization today. It is the 1873 Mint revision, the “crime” nickname, free silver, and Bryan — documentary only.",
      "Parent hub: [America & gold/silver politics](/history/america). Earlier unit: [Early U.S. coinage](/history/america/early-us-coinage). War paper neighbor: [Greenbacks](/history/america/greenbacks-civil-war). Next: [Road back toward gold](/history/america/road-back-gold). Cross-cluster: [Bimetallism](/history/silver/bimetallism).",
    ],
  },
];

const roadBack: Section[] = [
  {
    heading: "Resumption, then a gold statute",
    paragraphs: [
      "After greenbacks came a political and legal path back toward gold payments. Specie payments resumed on **1 January 1879**: United States Notes could again be treated as claims on gold at par in practice. The **Gold Standard Act of 1900** then defined the dollar in gold in statute. The United States entered the twentieth century as a gold-standard country in law.",
      "This overview stops before the Fed. The silver fight of [1873](/history/america/crime-of-1873) and the war paper of [1862–79](/history/america/greenbacks-civil-war) are the hinges behind resumption. The next cluster opens with the [Panic of 1907](/history/20th-century/panic-1907-fed). Do not drag 1913 or 1971 onto this page except as labeled forward links.",
    ],
  },
  {
    heading: "What resumption meant in 1879",
    paragraphs: [
      "Resumption meant the Treasury would pay coin for greenbacks at face value. The wartime gold premium — paper dollars trading below gold dollars — had to be closed by policy, fiscal conditions, and credibility, not by a speech alone. The Resumption Act of **1875** had named the date. The years between built a gold reserve and tested whether politics would let the date stand.",
      "When **1879** arrived, greenbacks and gold met at par in the markets that mattered. The paper note was again a convenient claim on the metallic dollar, not a rival depreciated unit. That is an operational gold standard for the government’s notes. It is not yet the full statutory sentence of 1900.",
      "Resumption also sat beside the silver question. Bland–Allison purchases and later Sherman purchases meant the Treasury dealt in silver while promising gold. The credibility of gold payments depended on the gold reserve, not on the nickname of the standard. A note at par with gold in January can still face a run if silver policy later looks like a second unit fighting the first.",
    ],
  },
  {
    heading: "Silver purchase acts and gold-reserve strain",
    paragraphs: [
      "Bland–Allison (**1878**) and Sherman (**1890**) required silver purchases that expanded silver coin or silver-backed notes. Holders who doubted the Treasury’s gold line could present claims and drain gold. In the early **1890s** gold outflows and reserve scares were part of public finance news. The panic year **1893** brought repeal of the Sherman purchase duty.",
      "The Cleveland administrations’ gold-bond sales and defense of the reserve are part of this road. So is the political cost: defenders of gold looked like Wall Street’s allies; silver advocates looked like inflationists to the gold camp. The documentary point is mechanical. A Treasury that buys silver and pays gold needs enough gold — or enough credibility — to survive presentation of notes.",
      "Bryan’s **1896** defeat reduced the odds of free silver at 16:1. New gold supplies in the late 1890s — including large finds that expanded the world gold stock — eased monetary stringency. The political path cleared for a statute that said gold without the same fear of an immediate silver flood. The [Crime of 1873](/history/america/crime-of-1873) page carries the nickname and the free-silver demand; this page carries the reserve arithmetic that made a gold statute feel safe enough to pass.",
    ],
  },
  {
    heading: "The Gold Standard Act of 1900",
    paragraphs: [
      "The Gold Standard Act defined the dollar as **25.8 grains** of gold nine-tenths fine — the familiar gold dollar parity — and put the gold commitment in clear statutory language. Silver remained in subsidiary and limited roles. The Act was the legal full stop after decades of greenback and silver argument.",
      "“Gold standard” here means a legal definition and a redemption practice for the government’s money, not a promise that banks never fail or that prices never move. It means the unit was gold in law. The America cluster’s arc — [1792 bimetallism](/history/america/early-us-coinage), bank war, greenbacks, 1873, resumption — lands on that sentence.",
      "International gold-standard practice among major economies was already the late-nineteenth-century norm. The 1900 Act aligned the United States’ legal text with that order. Domestic politics had spent a generation arguing whether silver would share the stage. The Act answered with gold as the definition of the dollar. The classical gold world’s wartime break comes later, on the [20th-century shelf](/history/20th-century/classical-gold-standard-end).",
    ],
  },
  {
    heading: "Where this cluster hands off",
    paragraphs: [
      "America’s shelf ends at the gold statute and the door to 1907. It does not narrate the Federal Reserve Act, the 1933 gold recall, or the 1971 gold-window close. Those are [20th-century](/history/20th-century) episodes with their own mechanisms and dates.",
      "Read this page as the bridge: greenbacks back to par, silver politics contained enough for a gold definition, then stop. Open [Panic of 1907 and the Fed](/history/20th-century/panic-1907-fed) for the next liquidity crisis and the public central bank Jackson’s century did not build. That panic is about trust-company plumbing and a missing lender of last resort — not a replay of 1873’s Mint list.",
      "Cross-links stay short. Silver mechanics live under [bimetallism](/history/silver/bimetallism). War paper detail lives under [greenbacks](/history/america/greenbacks-civil-war). The crime nickname lives under [1873](/history/america/crime-of-1873).",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1875:** Specie Payment Resumption Act; redemption date set for 1879.",
      "**1878–90:** Bland–Allison and Sherman silver-purchase frameworks.",
      "**1 January 1879:** Specie payments resume; greenbacks at par with gold.",
      "**1893:** Panic; Sherman Silver Purchase Act repealed.",
      "**1896:** Bryan loses; gold-standard politics strengthened.",
      "**14 March 1900:** Gold Standard Act; dollar defined in gold.",
      "**Next cluster:** Panic of 1907 → Federal Reserve Act 1913.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a recommendation to hold gold, not a convertibility target, and not a full history of the classical gold standard worldwide. It is the American road from greenback resumption to the 1900 gold statute — then a clean handoff to 1907.",
      "Parent hub: [America & gold/silver politics](/history/america). Previous silver hinge: [Crime of 1873](/history/america/crime-of-1873). War paper: [Greenbacks and the Civil War](/history/america/greenbacks-civil-war). Forward: [Panic of 1907 and the Fed](/history/20th-century/panic-1907-fed).",
    ],
  },
];

const pieceOfEight: Section[] = [
  {
    heading: "A coin that crossed oceans",
    paragraphs: [
      "The Spanish dollar — the eight-real piece, the **piece of eight** — was a silver coin of roughly **twenty-seven grams** that circulated from the Americas to Europe to East Asia for more than two centuries. Merchants priced cargo in it. Sailors cut it into bits for change. Asian markets took it as settlement metal. The early United States, when it named a dollar in the **1790s**, had this coin in mind.",
      "This page is the coin face of the silver cluster. The hole in the ground is [Potosí](/history/silver/potosi). The American mint arithmetic that inherited the dollar habit is [early U.S. coinage](/history/america/early-us-coinage). Parent hub: [silver in history](/history/silver). The claim here is narrow: one typed silver piece became a global unit of account long before any modern reserve currency.",
    ],
  },
  {
    heading: "What the piece was",
    paragraphs: [
      "Spanish colonial mints struck the **real de a ocho** — eight reales — as a large silver coin of roughly **27 grams** (about **0.87 troy ounces** of fine silver on familiar later reckoning, with mint and wear variation). The type carried the Habsburg or Bourbon arms, mint marks, and dates. Pieces from Mexico City, Potosí, Lima, and other American mints entered Atlantic and Pacific trade.",
      "“Piece of eight” is the English name. “Spanish dollar” is the commercial name that stuck in North America and the Caribbean. Neither name invents a new metal. Both name a familiar weight of silver that strangers could recognise without a letter of credit from a local prince.",
      "Subsidiary cuts — bits of eight — were everyday arithmetic. Two bits made a quarter of the dollar in later American slang. The parent coin stayed the large settlement piece. That divisibility in practice, not only in statute, helped the type travel.",
    ],
  },
  {
    heading: "From American mints to world ports",
    paragraphs: [
      "Colonial American silver did not stay in the Andes or New Spain. It moved to fleets, to Seville and Cádiz, into European payments, and — via the **Manila galleon** — toward China and the wider Asian silver market. The mountain story sits on [Potosí](/history/silver/potosi). This page keeps the coin: the piece that arrived as payment in ports that never saw Cerro Rico.",
      "In the Caribbean and British North America, Spanish dollars were ordinary money when local coin was scarce. Contracts, wages, and taxes often meant that coin when they said “dollar.” East Asian trade absorbed Spanish silver as a settlement metal after earlier paper experiments had failed or been abandoned. A typed piece from a Spanish American mint could close a deal in Canton or Manila because the metal and the type were known.",
      "Rival coins existed — Dutch, Portuguese, later British trade dollars. The Spanish eight-real piece won on volume and familiarity. Network effects matter in money: the coin you can spend tomorrow is the coin you accept today.",
    ],
  },
  {
    heading: "Why a typed silver piece worked as a global unit",
    paragraphs: [
      "A global coin is not a metaphor. It is a repeated claim about weight and fineness that markets actually use. The piece of eight combined three facts: Spanish American mines supplied silver at empire scale; colonial and metropolitan mints stamped a recognisable type; and commercial routes already priced goods in that type.",
      "Trust still mattered. Clipped, plugged, and counterfeit pieces forced scales and assays. Familiarity lowered the cost of checking; it did not abolish checking. When a mint lightened the coin or a counterparty doubted the type, Gresham’s pattern and discounting returned. The stamp is a claim. Claims can fail. The piece of eight’s success was that, for long stretches, the claim held across oceans.",
      "Keep the jobs labeled. [Greece’s owl](/history/ancient/greece-silver-trade) is an earlier silver network at Mediterranean scale. Potosí is early-modern volume. The piece of eight is the coin face of that volume. Do not mash Laurion into the Spanish dollar.",
    ],
  },
  {
    heading: "The United States inherits the habit",
    paragraphs: [
      "The [Coinage Act of 1792](/history/america/early-us-coinage) defined a silver dollar whose weight sat close to the Spanish piece Americans already used. Hamilton and Congress did not invent the dollar from blank paper. They wrote a statute beside a commercial habit. Gold sat beside silver at a fixed mint ratio — the opening of American [bimetallism](/history/silver/bimetallism).",
      "That continuity is the hinge between this cluster and the America shelf. Spanish silver had already made a global coin. The United States adopted a unit traders understood, then fought for a century over whether gold, silver, or paper would rule the large unit. The piece of eight is the inherited face. The Crime of 1873 is a later American statute fight.",
      "After independence, Spanish dollars continued to circulate in the United States for decades. Statute and mint output took time to replace a coin the Atlantic already knew. The documentary point is inheritance, not nostalgia.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1490s–1500s:** Spanish American conquest and early colonial mining; silver begins to enter Atlantic payments.",
      "**1540s onward:** Potosí and other American mines feed colonial mints; eight-real pieces become empire coin.",
      "**1565–1815 era:** Manila galleon links Acapulco silver to Asian settlement demand.",
      "**17th–18th centuries:** Spanish dollars common money in Caribbean and British North America.",
      "**1792:** U.S. Coinage Act defines a dollar near the Spanish silver weight; gold beside silver at a mint ratio.",
      "**19th century:** National coinages and gold standards gradually displace the Spanish dollar as everyday unit — the type’s global job fades; the metal story continues.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a collector catalogue, not a bullion pitch, and not a claim that one historical coin should be remonetized. It is the documentary stop for the Spanish dollar as a circulating global silver unit.",
      "Parent hub: [silver in history](/history/silver). Mountain: [Potosí](/history/silver/potosi). American inheritance: [early U.S. coinage](/history/america/early-us-coinage). Two-metal mechanics: [bimetallism](/history/silver/bimetallism). Keep **1980** and industrial silver on their own stops.",
    ],
  },
];

const silverThursday: Section[] = [
  {
    heading: "A squeeze, then a rule change",
    paragraphs: [
      "In **1979–80** Nelson Bunker Hunt and William Herbert Hunt, with partners, built a very large position in silver bullion and futures. The price ran toward **$50 an ounce** in January **1980**. In late March, after exchange and dealer rule changes that raised margins and limited new longs, the price collapsed. **Silver Thursday** — **27 March 1980** — is the name of the break.",
      "This page stays factual: positions, rules, the print, the break. It is not a forecast, not a stock story, and not a brief for repeating the trade. [Information versus advice](/sound-money/information-not-advice) is the standing line. Parent hub: [silver in history](/history/silver). The market quotient that uses 1980 as an arithmetic anchor sits on the [gold–silver ratio](/markets/gold-silver-ratio) fact page — a different job.",
    ],
  },
  {
    heading: "Who held what",
    paragraphs: [
      "The Hunt group and associated interests accumulated physical silver and long futures on a scale that mattered for a market thinner than gold’s. Contemporary estimates put the controlling interest in hundreds of millions of ounces when paper and metal are counted together — exact tallies still vary by source and by how one treats warehouse receipts and forward claims. The documentary fact is concentration: a small circle of names sat on a large share of deliverable and paper silver.",
      "Motivation in the public record mixed inflation fear after the 1970s, distrust of paper claims, and a bet that silver’s monetary memory still mattered. This page does not psychoanalyse the Hunts. It records that a concentrated long met a physical and futures market that could not absorb unlimited demand at the old tape without a sharp print move.",
      "Partners and financing arrangements mattered when the break came. Brokers who had financed the position demanded more capital as margins rose and prices fell. Forced selling is a plumbing fact, not a morality play.",
    ],
  },
  {
    heading: "The January 1980 run",
    paragraphs: [
      "Silver’s nearby extreme in the Hunt-era run, used on this site’s desk print, is **$49.45** on **18 January 1980**. London gold’s PM fix printed **$850** on **21 January**. Those two named prints give a gold–silver ratio near **17.2** for that peak week — arithmetic on the [ratio page](/markets/gold-silver-ratio), narrative here.",
      "The January tape is not Silver Thursday. January is the run. March is the unwind. Keep the labels on the dates. Year-average silver for **1980** on this site’s money-path series is much lower than the January extreme; a year average and a peak-week print answer different questions.",
      "Physical tightness, futures delivery pressure, and speculative follow-on buying all fed the print. A concentrated long can bid a thin market. It can also invite a rule book response. That response is the next section.",
    ],
  },
  {
    heading: "What changed at the exchange",
    paragraphs: [
      "COMEX and related dealers tightened margin requirements and restricted new long positions — famously moving toward rules that made it harder to add longs while shorts and liquidation remained possible. Liquidity that had been assumed on the way up was not there on the way down. The Hunts’ brokers demanded more capital. Forced selling followed.",
      "Exchange rule changes are not a free-market parable and not a conspiracy slogan. They are the institutional fact of 1980’s silver break: a venue that had listed the contracts altered the terms under which new speculative demand could bid. Whether one judges those changes as prudence or as a rescue of shorts is politics. The documentary sequence is rule change → margin pressure → liquidation → collapse of the print.",
      "Dealer and bank counterparties sat in the middle. When variation margin and credit lines moved against the longs, the position could not be held at the old size. Silver Thursday names the day the break became public theater.",
    ],
  },
  {
    heading: "27 March 1980 and the aftermath",
    paragraphs: [
      "**27 March 1980** — Silver Thursday — saw silver futures crash as liquidation hit a market already strained by higher margins and restricted new longs. The January extreme was gone. Brokers and the Hunt interests negotiated under intense pressure. Lawsuits, congressional attention, and exchange post-mortems followed in the months and years after.",
      "The break did not erase silver’s industrial or monetary memory. It did show that a concentrated futures-and-bullion position can meet a rule book and a credit constraint faster than a narrative about remonetization can answer. Later silver markets still use 1980 as a dated print memory. This site’s desk treats the January high as a historical print, not a target.",
      "Do not mash Silver Thursday into the [Crime of 1873](/history/america/crime-of-1873) or into [bimetallism](/history/silver/bimetallism). 1873 is a Mint list. Bimetallism is a mint-ratio statute problem. 1980 is a concentrated private position and an exchange response. Three silver stories; three hinges.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1970s:** Inflation and dollar weakness; private interest in monetary metals rises.",
      "**1979:** Hunt-group accumulation of silver bullion and futures becomes a market-moving fact.",
      "**18 January 1980:** Silver nearby extreme used on this site’s desk (~**$49.45**).",
      "**21 January 1980:** London gold PM **$850** — peak-week pair for ratio arithmetic.",
      "**Late March 1980:** Margin hikes and limits on new longs; liquidation pressure builds.",
      "**27 March 1980:** Silver Thursday — sharp break as forced selling hits.",
      "**After 1980:** Litigation, hearings, and a lasting cautionary memory of concentration plus rule change.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a recommendation to purchase or sell the metal, not a price target, and not a stock tip about any company tied to the Hunts or to COMEX. It is positions, rules, dated prints, and a March break — documentary only.",
      "Parent hub: [silver in history](/history/silver). Dual role of the metal: [monetary history and industry](/history/silver/monetary-and-industry). Market quotient: [gold–silver ratio](/markets/gold-silver-ratio). Standing line: [information versus advice](/sound-money/information-not-advice).",
    ],
  },
];

const bimetallism: Section[] = [
  {
    heading: "Two metals, one legal unit",
    paragraphs: [
      "Bimetallism is the attempt to keep gold and silver in the same monetary system at a **fixed mint ratio**. The mint stands ready to coin both metals into full-weight money at that legal number. When the **market ratio** — the gold price of silver in trade — moves away from the mint number, Gresham’s pattern appears. The statute does not defeat arbitrage.",
      "This page carries the general mechanics. The loud American political event is the [Crime of 1873](/history/america/crime-of-1873). The opening American arithmetic is [early U.S. coinage](/history/america/early-us-coinage). The market quotient without a mint claim lives on the [gold–silver ratio](/markets/gold-silver-ratio) fact page. Parent hub: [silver in history](/history/silver).",
    ],
  },
  {
    heading: "Mint ratio versus market ratio",
    paragraphs: [
      "A **mint ratio** is a law: so many units of silver equal one unit of gold at the Mint. The Coinage Act of **1792** used **fifteen to one**. Later U.S. practice and free-silver politics often spoke of **sixteen to one**. Those numbers are statutes or political demands. They are not geology.",
      "A **market ratio** is a quotient of two prices at a date: gold’s print divided by silver’s print, or the trade price of one metal in terms of the other. Mines, industrial use, war, and monetary demand move that quotient. The Mint’s number can sit still while the market moves.",
      "When the two diverge, one metal is legally overvalued at the Mint relative to the other. People bring the overvalued metal to be coined and melt or export the undervalued metal. The circulating coinage skews. That is not a moral failure of one metal. It is arithmetic under a fixed legal price.",
    ],
  },
  {
    heading: "Gresham’s pattern in mint dress",
    paragraphs: [
      "“Bad money drives out good” is the slogan. The mechanism under bimetallism is sharper: the metal that the Mint overvalues relative to the market tends to stay in coin; the metal the Mint undervalues tends to leave circulation. “Bad” and “good” here mean legally mispriced relative to trade, not moral labels.",
      "States can change the mint ratio, suspend free coinage of one metal, or move to a gold or silver standard in practice while keeping the other metal as subsidiary coin. Europe’s late-nineteenth-century gold turn and America’s **1834** gold-friendlier correction are examples of ratio politics. The [Crime of 1873](/history/america/crime-of-1873) is the American omission of free coinage of the standard silver dollar — a different instrument from rewriting 15:1 on the page, with the same family of pressures behind it.",
      "Keep the rhyme labeled. A mint-ratio fight is not a warehouse-receipt story from [banks and paper](/history/banks-paper), and it is not the 1980 Hunt squeeze. Different centuries, different instruments.",
    ],
  },
  {
    heading: "Europe’s gold turn and the Latin Monetary Union",
    paragraphs: [
      "Several European states entered the nineteenth century with bimetallic or silver habits and left it closer to gold. Germany’s shift after unification in the early **1870s** dumped silver onto the market and pressured other mints. France and partners in the **Latin Monetary Union** (from **1865**) tried to coordinate silver and gold coin standards across borders — a treaty about fineness and circulation, not a single central bank.",
      "When silver’s gold price fell and gold became the preferred large-value standard among major trading states, bimetallism’s fixed ratios became harder to defend. Subsidiary silver — small change with limited legal tender — could remain while the large unit went gold. That European context sits behind America’s 1873 politics without being identical to them.",
      "Union members still faced the same Gresham arithmetic when market and mint ratios drifted. Coordination of coin types does not freeze the world price of silver. This page does not retell every European statute. It names the pressure: a world market for silver, a gold preference among creditors and large-payment systems, and mint ratios that no longer matched trade.",
    ],
  },
  {
    heading: "America’s face of the same problem",
    paragraphs: [
      "The United States wrote gold and silver into law in **1792** at fifteen to one. When the world ratio drifted, the undervalued metal left. **1834** moved the U.S. ratio gold-friendlier. After the Civil War’s greenbacks and resumption fights, the [Coinage Act of 1873](/history/america/crime-of-1873) omitted free coinage of the standard silver dollar. Free silver at sixteen to one became the agrarian demand. Bryan’s **1896** campaign was the peak volume.",
      "Open the America episodes for the statute narrative. This page only states the mechanism those statutes were fighting over: two metals, one legal unit, a ratio that markets will not freeze. Cross-links stay short so the silver shelf and the America shelf do not dissolve into one megapage.",
      "After **1900** the United States defined the dollar in gold in statute. Silver’s political fight cooled as a remonetization campaign. Silver’s monetary memory and industrial job continued — the next stops on this cluster. The mint-ratio lesson remains: a legal number is not a market equilibrium, and renaming the fight does not repeal arbitrage.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1792:** U.S. Coinage Act — gold and silver at **15:1** mint ratio.",
      "**1834:** U.S. gold-friendlier ratio correction.",
      "**1865:** Latin Monetary Union begins coordinating coin standards among members.",
      "**Early 1870s:** German gold shift; world silver price under pressure.",
      "**1873:** U.S. Coinage Act omits free coinage of the standard silver dollar.",
      "**1878–1890:** Bland–Allison and Sherman silver-purchase compromises (America shelf).",
      "**1896:** Bryan free-silver campaign; gold side wins the election.",
      "**1900:** U.S. Gold Standard Act — dollar defined in gold.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a brief for remonetizing silver, not a target for today’s gold–silver quotient, and not a pitch to hold either metal. It is mint ratio, market ratio, and Gresham under a two-metal statute — documentary only.",
      "Parent hub: [silver in history](/history/silver). American statute hinge: [Crime of 1873](/history/america/crime-of-1873). Opening arithmetic: [early U.S. coinage](/history/america/early-us-coinage). Market quotient without a mint claim: [gold–silver ratio](/markets/gold-silver-ratio).",
    ],
  },
];

const potosi: Section[] = [
  {
    heading: "A mountain that moved the world’s silver",
    paragraphs: [
      "Cerro Rico at Potosí — in today’s Bolivia — was worked from the **1540s**. For a century and more it was the great silver source of the Spanish empire. Output did not stay in the Andes. It moved to the mint, to the fleet, to Seville, into European payments, and — via the **Manila galleon** — toward China, where silver was the settlement metal of a much larger commercial system.",
      "The lesson for this map is flow, not romance: a mountain can set the silver stock of two oceans. The [world map](/maps) is the visual companion. Production and reserves sit there, not on this page. The coin face of the flow is the [piece of eight](/history/silver/piece-of-eight). Parent hub: [silver in history](/history/silver).",
    ],
  },
  {
    heading: "Discovery and the colonial machine",
    paragraphs: [
      "Indigenous and Spanish accounts place major silver discoveries at Potosí in the **1540s**. The crown organised extraction, refining, mita labour drafts, and a mint. Mercury amalgamation (the patio process and later refinements) raised recovery from poorer ores. Output in the later sixteenth and early seventeenth centuries reached a scale that contemporaries treated as a wonder and that modern economic historians still treat as a hinge in global silver supply.",
      "Potosí was not the only American mine — New Spain (Mexico) and other Andean sites mattered — but Cerro Rico became the symbol and, for long stretches, the largest single source. A city grew at altitude around the mountain. The fiscal machine of the Spanish empire ran in part on that altitude. Without refining, labour, and a mint mark, ore in a mountain is not yet money in a port.",
      "Exact annual tonnage series vary by reconstruction. The documentary claim this cluster needs is directional: Potosí-class American silver flooded Eurasian payments for generations. Geology plus empire organisation produced a monetary fact — a stock large enough that later mint ratios and Asian settlement habits had to live with it.",
    ],
  },
  {
    heading: "Why the silver moved",
    paragraphs: [
      "Spain needed silver to pay armies, to service debts, and to keep a far-flung fiscal machine from seizing. Europe needed a money metal already priced in every port. China, after the collapse or abandonment of earlier paper experiments, took silver as the unit that actually arrived in trade.",
      "American silver therefore did three jobs at once: imperial finance, European liquidity, and Asian settlement. Those jobs pulled metal across the Atlantic and the Pacific. The mountain did not choose a destination. Ships, taxes, and trade balances did.",
      "Price-level and terms-of-trade debates among historians — how much Potosí silver raised European prices, how much stayed in Spain, how much leaked to northern Europe — are real scholarly fights. This page does not settle them. It records the flow path: mine → mint → fleet → Eurasian payments. The [piece of eight](/history/silver/piece-of-eight) is what many counterparties held when those ounces arrived as coin.",
    ],
  },
  {
    heading: "The Manila galleon and Asian demand",
    paragraphs: [
      "From the late sixteenth century, the **Manila galleon** linked Acapulco to Manila, carrying American silver westward and Asian goods eastward. Chinese demand for silver as a settlement and tax metal made Spanish American ounces welcome in East Asian trade. Silver that never saw Seville still left the Americas.",
      "That Pacific leg matters for the cluster’s claim. Silver history is not only a European inflation story. It is a two-ocean redistribution of monetary metal from a New World mountain into Old World and Asian ledgers. The [piece of eight](/history/silver/piece-of-eight) is what many counterparties actually handled when the ounces arrived as coin.",
      "When Asian silver demand, European wars, or mine exhaustion shifted, the same routes carried different volumes. The galleon is infrastructure. The mountain is supply. Together they set a global silver stock that later mint ratios and gold standards had to live with.",
    ],
  },
  {
    heading: "What the flood changed — and what it did not",
    paragraphs: [
      "A sudden rise in silver supply changes relative prices, mint economics, and the political value of controlling mines. It does not invent money. Mediterranean and Asian silver habits already existed — [Greece’s Laurion network](/history/ancient/greece-silver-trade) is an earlier rhyme at smaller scale. Potosí is early-modern volume under a global empire.",
      "Nor does a silver flood permanently freeze a mint ratio. Later centuries still saw Gresham under [bimetallism](/history/silver/bimetallism), Europe’s gold turn, and America’s silver question. More silver in the world stock is one input into those fights. It is not the whole statute story.",
      "Keep the hinges labeled. Potosí is the hole in the ground. The piece of eight is the coin. Bimetallism is the legal ratio problem. Silver Thursday is a 1980 futures-and-bullion break. Industrial silver is a twentieth-century second job. One mountain does not swallow the shelf.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1540s:** Major Potosí silver working begins; colonial mint and labour regimes follow.",
      "**Later 16th–early 17th centuries:** Peak decades of Cerro Rico fame and output in empire finance.",
      "**1565 onward:** Manila galleon system links American silver to Asian settlement demand.",
      "**17th–18th centuries:** American silver remains central to Spanish fiscal and global trade flows; other mines share the load.",
      "**19th century:** Independence, new mining technology, and later Comstock-class strikes shift the geography of supply — Potosí’s monopoly fame fades; silver’s monetary politics continue.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a mining prospectus, not a travel brochure, and not a claim that today’s silver price “should” remember Potosí. It is the documentary stop for Cerro Rico as a global silver source — flow, mint, fleet, and Asian demand.",
      "Parent hub: [silver in history](/history/silver). Coin face: [piece of eight](/history/silver/piece-of-eight). Visual companion: [world map](/maps). Earlier silver network rhyme: [Greece: silver and trade](/history/ancient/greece-silver-trade).",
    ],
  },
];

const silverIndustry: Section[] = [
  {
    heading: "Two jobs at once",
    paragraphs: [
      "Silver is still money in memory: coins, bars, a hedge people name in the same breath as gold. It is also an industrial input — photography for a long twentieth century, then electronics, then photovoltaics. Those two jobs pull the metal in different directions. This page names the split. It does not forecast which job wins.",
      "Parent hub: [silver in history](/history/silver). Monetary narrative stops on this shelf are [Potosí](/history/silver/potosi), the [piece of eight](/history/silver/piece-of-eight), [bimetallism](/history/silver/bimetallism), and [Silver Thursday](/history/silver/silver-thursday). Country rankings of bar-and-coin offtake live under [physical silver demand by country](/markets/physical-silver-demand-by-country) — a markets fact page, not this history stop.",
    ],
  },
  {
    heading: "Monetary memory",
    paragraphs: [
      "For most of recorded monetary history, silver was everyday money where gold was the large unit — or silver was the main unit where gold was scarce. Coins, plate, and bullion settled taxes and trade. That memory survives in language, in bullion markets, and in political slogans long after most states left silver as a standard for the large unit.",
      "America’s silver question after **1873**, Europe’s gold turn, and the piece-of-eight’s global career are monetary stories. They explain why people still reach for silver when they talk about hard money. They do not decide how many ounces a solar factory needs next year.",
      "Keep the label. Monetary demand is a stock-and-trust story: coins, bars, ETPs, and private hoards. Industrial demand is a flow-into-products story. Mixing the two without a label produces slogans about “shortage” that do not say which job is tight. A vault ounce and a paste ounce can print the same chemical symbol and still answer different questions. Official-sector silver, when it appears at all in modern survey books, is usually a rounding line beside those two larger jobs — not a second central-bank gold story.",
    ],
  },
  {
    heading: "Photography’s long century",
    paragraphs: [
      "Silver halide photography consumed large quantities of silver through the nineteenth and twentieth centuries. Film, paper, and X-ray plates locked metal into images. Recovery and recycling existed; much metal still left the monetary stock into industrial use.",
      "Digital imaging cut that fabrication line sharply from the late twentieth century onward. The documentary point is not nostalgia for film. It is that an industrial job can dominate silver’s flow for a century and then shrink — without erasing silver’s monetary memory.",
      "Survey tables on this site’s markets shelf separate fabrication from investment offtake for that reason. Photography is one fabrication chapter. It is not the whole industrial book, and it is not bar-and-coin demand. Readers who want dated country investment lines should open the markets spoke, not treat this history stop as a substitute table.",
    ],
  },
  {
    heading: "Electronics, then photovoltaics",
    paragraphs: [
      "Silver’s conductivity and reliability made it a standard input in electronics — contacts, pastes, and related uses. In the twenty-first century, **photovoltaic** silver paste became a major fabrication line in World Silver Survey–class tallies. Other industrial uses (brazing, soldering, chemistry) share the book.",
      "Industrial demand is sensitive to technology and to thrifting: manufacturers reduce silver loading per unit when prices rise or when engineering allows. A high fabrication total is not a permanent floor under a spot print. It is a dated flow into products.",
      "This page does not project solar build rates or electronics cycles. It records that silver’s second job is real, large in survey ounces relative to investment offtake in many years, and different in kind from a coin in a drawer. Jewelry and silverware are further fabrication and consumer lines — again labeled separately from monetary bars when honest survey books keep the jobs apart.",
    ],
  },
  {
    heading: "How to read the split",
    paragraphs: [
      "When a headline says “silver demand,” ask which series: coin-and-bar investment, jewelry, industrial fabrication, or official-sector lines. The [physical silver demand by country](/markets/physical-silver-demand-by-country) page explains the investment ranking. The [gold–silver ratio](/markets/gold-silver-ratio) page explains a dated price quotient. Neither page is a history of Potosí or of 1980.",
      "History’s job on this stop is the dual role as a narrative fact: silver kept a monetary identity while acquiring industrial identities. Practice’s job — bars, coins, premiums — lives under [gold and silver in practice](/gold-silver). Mixing a fabrication survey with a how-to produces a pitch. Keeping the label produces a claim you can check.",
      "Cross-links to America stay where statute politics need them ([Crime of 1873](/history/america/crime-of-1873), [bimetallism](/history/silver/bimetallism)). Cross-links to markets stay where current survey arithmetic lives. This episode does not reprint those tables. If a sentence cannot say whether it means money-stock demand or fabrication flow, it is not ready for this map.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Pre-1800s:** Silver primarily a monetary and ornamental metal in the stories this pillar tells.",
      "**1800s–1900s:** Photography and other chemical/industrial uses grow beside coinage and plate.",
      "**Late 19th century:** Political fights over silver as money (America shelf; bimetallism) while industrial use rises.",
      "**20th century:** Electronics and remaining photographic use; most states leave silver as the large-unit standard.",
      "**21st century:** Photovoltaics and electronics as major fabrication lines in survey books; investment offtake tracked separately.",
      "**1980:** Hunt-era squeeze — a monetary-market event on a metal that already had industrial demand ([Silver Thursday](/history/silver/silver-thursday)).",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page is not a forecast of industrial tightness, not a solar investment case, and not a reason to purchase or sell the metal. It is the documentary naming of silver’s dual monetary and industrial role. A fabrication ounce and a vault ounce can share a chemical symbol without sharing a demand series.",
      "Parent hub: [silver in history](/history/silver). Earlier monetary stops: [Potosí](/history/silver/potosi), [piece of eight](/history/silver/piece-of-eight), [bimetallism](/history/silver/bimetallism), [Silver Thursday](/history/silver/silver-thursday). Markets companions: [physical silver demand by country](/markets/physical-silver-demand-by-country), [gold–silver ratio](/markets/gold-silver-ratio).",
    ],
  },
];

const officialGoldBookValue: Section[] = [
  {
    heading: "",
    paragraphs: [
      "United States official gold is still carried on the Treasury books at **$42.22** a fine troy ounce. That figure is a statutory book value left from the last official dollar–gold par. It is not the London or COMEX print. It is not a forecast, and it is not a price anyone can present metal against today.",
    ],
  },
  {
    heading: "Book versus spot",
    paragraphs: [
      "Two numbers sit on the same pile of metal. **Spot** is the market print: a London PM fix, a COMEX nearby, or another dated quote in dollars per troy ounce. **Book** is the value written into the U.S. fiscal accounts. The Treasury’s Status Report of U.S. Treasury-Owned Gold, and the Federal Reserve’s H.4.1 gold-stock line, still use the statutory rate of **$42.2222** per fine troy ounce — usually shortened to $42.22.",
      "The stock itself is large and slow-moving. Treasury reports on the order of **261.5 million** fine troy ounces of official gold, held mainly as “deep storage” at Fort Knox, West Point, and Denver, with a smaller working stock at the Mint. At the book rate that stock is about **$11.041 billion**. At a market print of, say, two thousand dollars an ounce, the same ounces are a different arithmetic product. The ounces did not change. The unit of account did.",
      "Gold certificates issued by the Treasury to Federal Reserve Banks match that book stock. The certificate is an intra-government claim, not a public window. No citizen, and no foreign official holder, can present dollars and demand those ounces at $42.22. The [1971 gold-window close](/history/20th-century/bretton-woods-nixon-1971) ended official convertibility for foreign holders. The book rate survived as an accounting leftover.",
    ],
  },
  {
    heading: "How the official price got to $42.22",
    paragraphs: [
      "The Gold Reserve Act of **1934** reset the official U.S. gold price from $20.67 to **$35** an ounce after the [1933 recall](/history/20th-century/1933-gold-recall). Bretton Woods then used that $35 par for official dollar–gold convertibility. The market print and the official par were meant to stay near each other. After the mid-1960s they did not.",
      "On **15 August 1971** the United States suspended convertibility for foreign official holders. In **December 1971** the Smithsonian Agreement raised the official par to **$38**. The Par Value Modification Act of **31 March 1972** (Public Law 92-268) wrote that $38 figure into U.S. law. A further devaluation followed. Public Law **93-110** of **21 September 1973** set the par at **$42.2222** per fine troy ounce.",
      "That 1973 statute is the last official U.S. gold par. Congress did not raise the book rate again when the market floated. Spot left $42.22 behind. The Treasury continued to carry the same ounces at the same statutory dollars. H.4.1’s gold-stock line still prints in that book unit, not in market dollars.",
    ],
  },
  {
    heading: "A short arithmetic table",
    paragraphs: [
      "The divisions below are arithmetic only: a named spot, or this site’s LBMA/COMEX **year average** from the money-path series, divided by the two official pars. They do not say gold is cheap or dear. They do not project a path. $35 is the 1934–1971 official par. $42.22 is the 1973–present book rate. For years before September 1973, the $42.22 column is a later yardstick applied backward, not a par that then existed.",
    ],
    list: [
      "**1971 year average $40.62** (LBMA/COMEX series used on this site): $40.62 ÷ $35 = **1.16×**; $40.62 ÷ $42.22 = **0.96×**.",
      "**1973 year average $97.32**: $97.32 ÷ $35 = **2.78×**; $97.32 ÷ $42.22 = **2.31×**. The $42.22 par was written that September.",
      "**21 January 1980 London PM $850** (this site’s 1980 gold print): $850 ÷ $35 = **24.29×**; $850 ÷ $42.22 = **20.13×**. The 1980 **year average** was $612.56 → **17.50×** and **14.51×**.",
      "**2000 year average $279.11**: $279.11 ÷ $35 = **7.97×**; $279.11 ÷ $42.22 = **6.61×**.",
      "**6 September 2011 London PM $1,895**: $1,895 ÷ $35 = **54.14×**; $1,895 ÷ $42.22 = **44.88×**. The 2011 **year average** was $1,571.52 → **44.90×** and **37.22×**.",
      "**2020 year average $1,769.64**: $1,769.64 ÷ $35 = **50.56×**; $1,769.64 ÷ $42.22 = **41.91×**.",
      "**2024 year average $2,386**: $2,386 ÷ $35 = **68.17×**; $2,386 ÷ $42.22 = **56.51×**.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Read any row as a ratio of two published dollars, not as a valuation model. The Treasury still books the stock at the last statutory par. The market prints another number. Both can be true at once because they answer different questions.",
    ],
  },
  {
    heading: "What the book number is for",
    paragraphs: [
      "Fiscal accounts need a dollar figure for a government asset. After 1973 the United States chose not to mark official gold to the market on the main Treasury gold line. The book stays at $42.22. Market-value illustrations — ounces times spot — appear in commentary and on this site’s [desk](/desk). They are a different product. They do not rewrite the statute.",
      "Other official holders treat gold differently. Some central banks revalue gold toward market prices on their own balance sheets. Some keep a historical cost. The IMF’s International Financial Statistics report physical gold and a dollar value used for reserve arithmetic. Those are reporting conventions. They are not a U.S. statutory par, and they are not this page’s $42.22.",
      "Keep the jobs apart. [Sound Money History](/history) tells how $35 and $42.22 became law. This page only records that the book rate is still $42.22, that spot is a different series, and that dividing one by the other is arithmetic. How people handle bars and coins lives under [gold and silver in practice](/gold-silver), not here.",
    ],
  },
  {
    heading: "What this page is not",
    paragraphs: [
      "This page does not say the Treasury “should” revalue gold. It does not treat $42.22 as a secret price, a floor, or a target. It does not turn a book-to-spot multiple into a reason to buy or sell metal. Official gold on the U.S. books is a government asset at a frozen par. Spot is a market print. The gap is a fact of two ledgers.",
      "Return to [gold and silver markets](/markets) for the other fact pages on this pillar: how central banks report gold in reserves, what the gold–silver ratio measures, and what country rankings of physical silver demand measure. For the statute story that produced $35 and then $42.22, open the 1971 episode linked above. The narrative stays there. The leftover book rate stays here.",
    ],
  },
];

const centralBankGoldReserves: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Central banks report gold as part of official reserve assets. The public figures are a stock in tonnes or ounces, sometimes a share of foreign-exchange reserves, and dated purchases or sales. This page records how those reports work, where metal is often stored, and which official buyers have been named in recent IMF and World Gold Council tallies. It is not a shopping list.",
    ],
  },
  {
    heading: "How gold enters the reserve statement",
    paragraphs: [
      "The IMF’s International Financial Statistics and related reserve templates ask members to report official gold holdings. The physical quantity is the durable fact: tonnes or troy ounces of monetary gold. A dollar value is then attached so gold can sit beside foreign-currency assets, SDRs, and IMF reserve positions in one reserve total.",
      "That dollar value is a reporting convention. Some authorities mark gold near a market price when they compute gold’s **share** of reserves. Others keep a historical or statutory cost on their own books — the U.S. [official book value](/markets/official-gold-book-value) at $42.22 is the extreme case. A high gold share can mean a large inherited stock, a small foreign-currency book, a mark-to-market revaluation, or recent buying. The share alone does not name a policy.",
      "World official gold, compiled from those country books plus IMF and ECB lines, is on the order of **36,000 tonnes** in recent year-end snapshots used on this site (about **35,908 tonnes** at end-2025 in the compiled desk). The United States remains the largest single reported stock, about **8,133 tonnes**. Germany, Italy, and France hold large legacy European stocks. Russia and China report stocks above **2,300 tonnes** each; China’s published official figure is widely treated as a floor, not a full geological census.",
    ],
  },
  {
    heading: "Vaults and where the bars sit",
    paragraphs: [
      "Reported gold is not always in the reporting capital. For much of the postwar period, European and other official holders kept bars at the Federal Reserve Bank of New York, the Bank of England, and the Banque de France. Custody was a service. Title stayed with the owner. The location still matters for politics and for logistics: a bar in New York is not a bar in Frankfurt.",
      "The 2010s brought a documented repatriation wave. The Deutsche Bundesbank’s 2013–2017 programme moved gold from New York and Paris to Frankfurt (300 tonnes from the New York Fed and 374 tonnes from the Banque de France under that plan). De Nederlandsche Bank announced in 2014 that it would bring 122 tonnes from New York to Amsterdam. Austria, Hungary, and others published their own transfers. The Bank of England remains a major custodian for official gold that has not been called home.",
      "Storage preferences are facts about custody, not a ranking of vaults. A central bank can hold gold at home, at a foreign central bank, or split between the two. The report to the IMF is about ownership of monetary gold, not about which door a visitor would knock on.",
    ],
  },
  {
    heading: "Recent official purchases, dated",
    paragraphs: [
      "After years of modest net official demand, the World Gold Council’s annual tallies show a sharp rise in net central-bank buying in the early 2020s. The compiled world net figures used on this site’s desk are **1,080 tonnes** in 2022, **1,050.8 tonnes** in 2023, and **1,092.4 tonnes** in 2024, with a still-open 2025 line. Those are official-sector nets — purchases minus sales — not private investment flows.",
      "Country lines in the same compiled series, drawn from IMF-reported changes, include **China** (large 2023 additions, then smaller 2024–2025 increments), **Türkiye** (heavy two-way activity across several years), **India**, **Kazakhstan**, **Uzbekistan**, **Czechia** (a multi-year buying programme announced in 2023), and **Poland** (treated at more length below). Singapore, Brazil, and Azerbaijan appear as notable 2024–2025 lines. Russia’s large reported additions sit mainly in 2016–2019 in that series.",
      "Each line is a reported change in official gold, dated to a calendar year. It is not a recommendation, a miner pick, or a claim that private holders should copy a reserve manager. Central banks buy and sell under statute, sanctions, and reserve-composition rules that do not apply to a household.",
    ],
  },
  {
    heading: "Poland: a short documentary block",
    paragraphs: [
      "Narodowy Bank Polski is the named European buyer of the early 2020s. This is not a separate URL. It is a subsection of how official gold is reported and accumulated.",
      "At the end of **2017** NBP’s reported gold stock was about **103 tonnes**. In **2018–2019** the bank bought on the order of **126 tonnes**, taking the stock to about **229 tonnes** by end-2019. In **July 2019** NBP announced that it would transfer **100 tonnes** from the Bank of England to vaults in Poland — a custody move, not a purchase. Title was already Polish; the bars changed address.",
      "Buying resumed in size. IMF-based annual changes in the compiled desk put Poland at about **+34 tonnes** in 2022, **+130 tonnes** in 2023, and **+90 tonnes** in 2024, with further additions in **2025**. The desk’s latest Poland stock line of **550 tonnes** is the year-end-2025 starting point implied by later official additions: it is not the 2026 stock.",
      "NBP’s first-quarter 2026 balance-of-payments note put the gold stock at **581.6 tonnes** at the end of **March 2026**, then **29.4 percent** of official reserve assets (valued at **PLN 319.5 billion** on that statement). The World Gold Council’s Gold Demand Trends for the second quarter, compiled from IMF and central-bank reports through **30 June 2026**, puts the stock at **632 tonnes** after about **+51 tonnes** in the quarter and about **+82 tonnes** in the first half. The Council’s 3 September 2026 monthly compilation, through **31 July 2026**, puts the stock at **640 tonnes**, after about **+8 tonnes** in July and about **+90 tonnes** year-to-date. Those later lines reconcile with the desk’s **550**: **550 + 82** reaches the end-June **632**; **550 + 90** reaches the end-July **640**.",
      "The same WGC notes record NBP’s public stock aim of **700 tonnes**, with gold then about **28 percent** of total reserves. An earlier NBP communications line had named a reserve-share aim in the region of **20 percent**; the March 2026 NBP statement already sat above that share. Governor Adam Glapiński’s remarks in this period treated gold as a reserve asset, not as a trading book.",
      "Read those sentences as a dated official-sector record. They do not say a private reader should follow NBP. They do not rank Poland against other buyers as an investment case. They show one central bank raising a reported gold stock, moving metal home, and stating a reserve-share and then a **700-tonne** stock aim — the same custody and report facts this page tracks for the official sector as a whole.",
    ],
  },
  {
    heading: "What the figures do not say",
    paragraphs: [
      "A rising official stock is a change in a reserve composition. It is not a price target. A repatriation is a change in custody. It is not proof that a foreign vault failed. A high gold share can be an old European inheritance or a new emerging-market programme. The mechanism is the report: quantity, sometimes value, sometimes location.",
      "This pillar stays on current metal-market facts. The [markets hub](/markets) orients the four spokes. How $42.22 became the U.S. book rate is the first spoke. What the gold–silver ratio measures is the third. Identified bar-and-coin offtake by country is the fourth. Narrative — 1907, 1933, 1971 — lives under [Sound Money History](/history). How a person stores a coin lives under [gold and silver in practice](/gold-silver). None of those pages is a stock tip. Neither is this one.",
    ],
  },
];

const goldSilverRatio: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The gold–silver ratio is one market price divided by another. At a stated time, take the gold print in dollars per troy ounce and divide by the silver print in dollars per troy ounce. The result is how many ounces of silver equal one ounce of gold at those two prints. It is a dated snapshot. It is not a fair-value claim.",
    ],
  },
  {
    heading: "What the ratio measures",
    paragraphs: [
      "Call gold G and silver S, both in the same currency per troy ounce. The ratio is G ÷ S. If gold is $2,000 and silver is $25, the ratio is 80. Eighty ounces of silver then have the same dollar value as one ounce of gold at that pair of prints. Change either print and the ratio changes. There is no third hidden input.",
      "The two prices must share a clock. A London gold PM fix against a COMEX silver nearby from another session is a mixed snapshot. This site’s [desk](/desk) shows a live ratio from the same tape. This page uses **named prints** and **year averages** so the arithmetic can be checked. The money-path series on the site is an LBMA/COMEX annual average for each metal; dividing those two averages gives a year-average ratio, which is not the same as any single day’s print.",
      "Historically, states also wrote a **mint ratio**: a legal number of silver units per gold unit. The Coinage Act of 1792 used 15 to 1. Later statutes used 16 to 1. That legal ratio is a mint rule. It is not the market ratio. When the two diverge, the legally overvalued metal tends to stay in coin and the other tends to leave — the ordinary bimetallic problem, told as narrative under [bimetallism](/history/silver/bimetallism). This page keeps the market quotient.",
    ],
  },
  {
    heading: "What the ratio does not measure",
    paragraphs: [
      "The ratio does not measure a natural law. Geology, mine supply, industrial use, and monetary demand all affect the two prices. None of them is “the” ratio. A number near 15 in a mint statute, or near 17 on a January 1980 tape, does not bind a later tape.",
      "The ratio does not measure whether silver is behind or gold is ahead. It does not contain a mean that prices owe a return to. It does not forecast a catch-up. Those sentences are the ones this page will not make. A high ratio means gold’s dollar print is large relative to silver’s dollar print at that date. A low ratio means the opposite. That is the whole claim.",
      "The ratio also does not measure industrial tightness by itself. Silver has a large fabrication use; gold’s fabrication use is smaller relative to its monetary stock. A squeeze in one metal can move the quotient without saying anything about the other metal’s “true” value. Keep the definition narrow so the snapshot stays honest.",
    ],
  },
  {
    heading: "1980 and 2011 as anchors",
    paragraphs: [
      "Two well-documented peaks are the anchors on this page. They are dates, not destinies.",
      "In **January 1980** the London gold PM fix printed **$850** on 21 January. Silver’s nearby extreme in that same month, used on this site’s 1980 desk print, is **$49.45** on 18 January. Those two named prints give $850 ÷ $49.45 = **17.2**. That is a peak-week snapshot during the Hunt-era silver run, whose break is told as [Silver Thursday](/history/silver/silver-thursday). The **1980 year averages** on this site are $612.56 gold and $20.98 silver → **29.2**. The January tape and the year average are different snapshots. Both are arithmetic.",
      "In **2011** the London gold PM fix printed **$1,895** on 6 September. Silver’s 2011 year average on this site is $35.12; gold’s is $1,571.52 → a year-average ratio of **44.7**. April 2011 saw silver nearby prints in the high forties while gold was still below the September fix, so intra-year ratios ran from the mid-thirties into the forties depending on the day. The useful habit is to name the two prices and the date. “The 2011 ratio” without a clock is a blur.",
    ],
  },
  {
    heading: "Year-average snapshots from the same series",
    paragraphs: [
      "Using only this site’s money-path year averages — so both metals share a method — a few more dated quotients sit in one table. Again: arithmetic, not a path.",
    ],
    list: [
      "**1971:** $40.62 ÷ $1.39 = **29.2**.",
      "**1980:** $612.56 ÷ $20.98 = **29.2** (year average; January peak prints ≈ **17.2**, above).",
      "**2000:** $279.11 ÷ $4.95 = **56.4**.",
      "**2011:** $1,571.52 ÷ $35.12 = **44.7**.",
      "**2020:** $1,769.64 ÷ $20.55 = **86.1**.",
      "**2024:** $2,386 ÷ $28.27 = **84.4**.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Those six rows show that a year-average ratio can sit near 29 in two different decades and near 84–86 in two later years without that fact implying a return trip. The 1980 January print near 17 is a third kind of snapshot: a peak-week pair, not a year. Keep the labels on the numbers.",
    ],
  },
  {
    heading: "How to read a snapshot",
    paragraphs: [
      "Name the two prices, the venue or series, and the date. Say whether you used a fix, a nearby future, or a year average. Then divide. If you compare 1980 to 2011, say which 1980 and which 2011. The [markets hub](/markets) is the parent for this fact page. Official gold’s leftover U.S. book rate is a different fact, on [official gold book value](/markets/official-gold-book-value). Central-bank tonnes are a third fact. Identified bar-and-coin offtake by country is a fourth, on [physical silver demand by country](/markets/physical-silver-demand-by-country).",
      "History’s job is the older legal ratio and the 1980 squeeze narrative. This page’s job is the market quotient. Practice’s job is bars, coins, and premiums. Mixing the three produces slogans. Keeping them apart produces a number you can check.",
      "Nothing here is a reason to prefer one metal. Nothing here is a mean, a band, or a catch-up clock. The gold–silver ratio measures a dated pair of prints. That is the claim, and that is the stop.",
      "If you want the older legal ratio as a statute fight, open [bimetallism](/history/silver/bimetallism). If you want the 1980 squeeze as a narrative, open [Silver Thursday](/history/silver/silver-thursday). Those are history episodes. They explain how a mint number or a concentrated position entered the record. They do not rewrite the definition on this page. A mint ratio is a law. A market ratio is a quotient. Keep the two labeled when you move between pillars.",
    ],
  },
];

const physicalSilverDemandByCountry: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Country rankings of physical silver demand count identified retail and investment purchases of bars and coins in a calendar year. They answer which national markets took metal off the retail shelf. They do not rank mines, factories, or paper claims. This page records what those rankings measure and a dated 2024 country table from the same World Silver Survey vintage this site already uses for world coin-and-bar demand.",
    ],
  },
  {
    heading: "What a country ranking measures",
    paragraphs: [
      "The useful series is **physical investment**: bars and bullion-style coins attributed to a country, net of some dealer-stock swings, and excluding commemorative coins. Metals Focus publishes that table in the Silver Institute’s World Silver Survey. “United States, 2024, **64.9 million ounces**” means identified U.S. bar-and-coin offtake in that year, after those adjustments.",
      "The country is the demand address, not the mine. Silver coined in Ottawa or Perth can be bought in the United States. Indian bar demand can be metal that arrived as imports. A ranking of physical investment is a map of buyers, not a map of holes in the ground.",
      "Two published world totals sit next to each other and must stay labeled. This site’s desk already uses **190.9 million ounces** of world **coin and net bar demand** for calendar **2024** (World Silver Survey 2025). That series is coin fabrication plus net bar purchases. The country table’s global total for the same year is **183.3 million ounces**. The footnote is mechanical: the country series drops commemorative coins and adjusts dealer inventories. Do not treat 190.9 and 183.3 as a disagreement. They are two jobs.",
    ],
  },
  {
    heading: "What the ranking does not measure",
    paragraphs: [
      "It does not measure industrial fabrication. In the same 2024 survey, industrial demand was **680.5 million ounces** — photovoltaics, electronics, brazing, and the rest. That metal is consumed in products. It is not a bar in a household drawer. A country that fabricates a lot of solar paste can be small on the investment table.",
      "It does not measure jewelry or silverware — about **208.7** and **54.2** million ounces in 2024. It does not measure official-sector silver, a rounding line of **1.5 million ounces** in that same world book, not a central-bank gold story.",
      "It does not measure exchange-traded products, futures, or options. Indian silver ETP holdings rose by about **25 million ounces** in 2024, to **38.6 million ounces** at year-end. That inflow is a vault-backed fund holding. It is not India’s **59.8 million ounces** of bar-and-coin investment. A futures position is a different instrument again. Paper and funds sit outside the country ranking.",
      "The ranking also does not measure whether silver is cheap, dear, behind gold, or due a return to an older ratio. A high U.S. line means U.S. buyers took more identified bars and coins that year. A falling German line means identified German offtake fell. That is the whole claim.",
    ],
  },
  {
    heading: "2024 country snapshots",
    paragraphs: [
      "Using the World Silver Survey 2025 physical-investment table — so the country lines share a method — the 2024 snapshot and the one-year change sit below. Figures are million troy ounces. The 2022 world peak in the same series was **337.6**. The 2023 world total was **238.2**. 2024’s **183.3** is a further drop, not a path.",
    ],
    list: [
      "**United States 64.9** (2023: 120.8; **−46%**). Still the largest single country line. Lowest since 2019 in that series.",
      "**India 59.8** (2023: 49.3; **+21%**). The only major physical market higher in 2024. 2022 was 79.4; 2020 was 8.7.",
      "**Germany 9.9** (2023: 13.3; **−25%**). 2022 was 48.9. Europe as a whole printed **21.5** in 2024.",
      "**Australia 9.3** (2023: 12.4; **−25%**).",
      "**Canada 6.4** (2023: 7.9; **−18%**).",
      "**China 5.5** (2023: 6.2; **−10%**).",
      "**Other Europe 11.6**, **other East Asia 10.8**, **others 5.0**.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Four named countries — the United States, India, Germany, and Australia — still account for most of the identified world total, on the order of four-fifths in recent Metals Focus commentary on the same physical-investment series. Concentration is a fact about the table. It is not a reason to treat those four as a shopping list.",
    ],
  },
  {
    heading: "How the named countries differ",
    paragraphs: [
      "The United States has been the largest physical-investment market in most years of the 2010–2024 series. The exceptions in that book are **2018** and **2019**, when India printed the larger line. Cumulative U.S. net purchases over 2010–2024 are on the order of **1.5 billion ounces**. Coins take a larger share of U.S. offtake than in the rest of the world — sovereign bullion coins, then bars. 2024’s **64.9** is a drop from the 2021–2023 plateau near **120–138**.",
      "India’s line is mostly bars. Cumulative 2010–2024 bar-and-coin demand in that series is about **840 million ounces**. 2024’s rebound followed a late-July cut in the Indian import duty on bullion, from **15 percent** to **6 percent**, which lowered the rupee offer after the local price had already printed near **Rs. 100,000** per kilogram. 2020’s **8.7** shows the same table can collapse when the rupee price spikes and metal comes back to the counter. ETPs, as already labeled, sit beside that physical line. They do not replace it.",
      "Germany is the largest European silver-investment market in the same book, and the sharpest recent swing. Identified German offtake averaged about **48.5 million ounces** a year in 2020–2022, then fell to **13.3** in 2023 and **9.9** in 2024 after an end-2022 margin-tax change on some non-EU bullion coins, a 2023 VAT change on some silver products, and selling-back as euro prices crossed **€800** per kilogram. Australia’s 2024 **9.3** is another second-year decline with higher buybacks. Those are tax, price, and inventory facts — not a ranking of national character.",
    ],
  },
  {
    heading: "2025 coins and medals fabrication — a different table",
    callout: {
      label: "Fabrication countries ≠ investment offtake",
      paragraphs: [
        "Mint and medal fabrication is a different World Silver Survey job from the bar-and-coin buyer table. The ranking above is a demand address: which national markets took identified bars and coins. Coins-and-medals fabrication is a mint address: where silver was struck. Metal coined in Ottawa or Llantrisant can be bought in the United States. Canada and the United Kingdom can sit high on the mint table while remaining smaller on the buyer table. That is the point of keeping the two jobs labeled. Do not read a fabrication line as a substitute ranking, and do not treat either table as a country shopping list.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026, researched by Metals Focus for the Silver Institute, prints a separate **coins and medals fabrication** table for calendar **2025**. World fabrication in that series was **87.9 million ounces**, down 7 percent from 2024’s **94.7**. That world total matches the survey’s 2025 **coin fabrication** line in the coin-and-net-bar book. It is not this page’s 2024 country physical-investment total of **183.3**.",
      "The five largest 2025 country lines in that mint table sit below. They are fabrication ounces. They do not replace the 2024 investment ranking above.",
    ],
    list: [
      "**India 18.4** (2024: 14.8; **+25%**).",
      "**United States 15.7** (2024: 28.5; **−45%**).",
      "**Canada 11.4** (2024: 14.1; **−19%**).",
      "**United Kingdom 9.8** (2024: 6.8; **+44%**).",
      "**Australia 8.3** (2024: 10.0; **−17%**).",
    ],
  },
  {
    heading: "How to read a country line",
    paragraphs: [
      "Name the series, the year, and whether you are looking at coin-and-net-bar demand (world **190.9** in 2024), the country physical-investment table (world **183.3**), or coins-and-medals fabrication (world **87.9** in 2025). Then read the country as a demand address or as a mint address. Do not swap the two. A mine-production ranking is a different list, and this site does not keep one here. Official gold stocks live on [central-bank gold reserves](/markets/central-bank-gold-reserves). A pair of metal prices lives on the [gold–silver ratio](/markets/gold-silver-ratio).",
      "The [markets hub](/markets) is the parent for this fact page. History’s job, when silver’s two roles need a narrative shelf, is [silver: monetary history and industry](/history/silver/monetary-and-industry). Practice’s job is bars, coins, and premiums. Mixing a country ranking with a how-to produces a pitch. Keeping the label produces a figure you can check.",
      "Nothing here is a reason to buy silver in a named country. Nothing here is a miner pick. Nothing here is a mean, a band, or a clock that says one country’s line must return to 2022. The ranking measures identified bar-and-coin offtake by country in a dated survey year. That is the claim, and that is the stop.",
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
  "markets/official-gold-book-value": officialGoldBookValue,
  "markets/central-bank-gold-reserves": centralBankGoldReserves,
  "markets/gold-silver-ratio": goldSilverRatio,
  "markets/physical-silver-demand-by-country": physicalSilverDemandByCountry,
};

export function getBody(cluster: string, slug: string): Section[] | null {
  return bodies[`${cluster}/${slug}`] ?? null;
}

/** Pillar hub /history — rendered by the history index route. */
export const historyHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "This pillar records what happened when money was metal, paper, or both. It is a documentary path through coinage, banks, crises, and statute—not a glossary of sound-money definitions, and not a sales page.",
    ],
  },
  {
    heading: "What this pillar is",
    paragraphs: [
      "**/history** collects narrative episodes and cluster hubs about monetary regimes. Each episode sticks to a dated claim: who acted, what rule changed, what broke, and what followed. The tone is documentary. The aim is a readable record for adults who want cause and sequence without slogans.",
      "Pages here treat money as an institutional fact. Coins are clipped or debased. Banks issue notes against reserves or against hope. Legislatures change mint ratios, suspend convertibility, or recall metal. Crowds run on doors that cannot pay. The pillar’s job is to put those events in order and keep the mechanisms clear.",
      "The coverage spans ancient coinage and debasement, early banks and paper experiments, American monetary statutes and panics, silver’s long political fight, and the twentieth-century arc that ends with the 1971 gold-window close. Internal links let a reader walk a century without losing the hinge dates. Cluster hubs introduce a shelf; episodes do the dated work. This top hub only maps the path.",
    ],
  },
  {
    heading: "What this pillar is not",
    paragraphs: [
      "This pillar is not **/sound-money**. The sound-money section explains concepts, definitions, and frameworks. History tells events. Overlap exists—both care about gold, silver, and paper—but the jobs differ. If you want “what sound money means,” use the sound-money hub. If you want “what happened in 1720, 1907, or 1971,” stay here.",
      "History pages also avoid buy language, price forecasts, and product calls. They state facts, mechanisms, and aftermath. They do not tell you what to purchase. They do not turn a panic into a pitch. BaFin-clean documentary voice means the record stands without a call to action.",
      "Nor is this pillar a dump of disconnected trivia. Thin lists without mechanism do not count as episodes. Each full page should leave a reader able to explain the hinge in plain English.",
    ],
  },
  {
    heading: "How the five clusters form a path",
    paragraphs: ["Read the clusters as a path, not as five essay dumps side by side:"],
    list: [
      "**/history/ancient** — Coinage, debasement, and early metallic money as political tools. Start here for weight, purity, and state power over the unit.",
      "**/history/banks-paper** — Note-issuing banks, bubbles, and paper experiments before modern central banking. Law’s Mississippi System sits on this shelf.",
      "**/history/america** — US statutes, banks, greenbacks, and silver politics inside one republic’s monetary fights.",
      "**/history/silver** — Silver’s monetary and political arc where it needs its own shelf rather than a footnote in gold stories.",
      "**/history/20th-century** — The dense modern door: panic and Fed, classical gold’s end, Weimar, 1933, Bretton Woods and 1971.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "A new reader can start in ancient coinage and walk forward in time. A modern reader can enter through the twentieth-century cluster and step back only when an older rhyme is needed. Cross-links exist so you are not trapped on one shelf. The path idea matters more than reading every page on day one.",
    ],
  },
  {
    heading: "How to read an episode",
    paragraphs: [
      "Each episode opens with a tight claim. Section headings keep the story in order: setting, mechanism, pressure, timeline, decision, aftermath. Related links point to one or two neighbors—usually the cluster hub and the next hinge—not a pile of weak matches.",
      "When a page names a bank, a law, or an official price, it does so to fix the mechanism. Official gold prices, note rules, and statute dates are part of the record. They are not trading signals. Brief lists appear when a timeline helps; paragraphs carry the argument. Sentences stay short where possible so the mechanism stays visible.",
      "If two episodes rhyme—paper collapses, gold suspensions, lender-of-last-resort politics—the text will say so once and then keep the centuries apart. Merging 1720 into 1923, or 1933 into 1971, blurs what actually changed. Rhyme is not identity.",
      "Search titles on this site name the event in catalogue style. They are not punch openings. The body does the explaining; the title does the filing.",
    ],
  },
  {
    heading: "Where to enter the modern story",
    paragraphs: [
      "For the modern door, start at **/history/20th-century**. That cluster hub lines up private rescue after 1907, the Fed’s creation, the end of classical gold, Weimar, the 1933 US gold recall, and the 1971 close of the dollar’s gold window. From there, open any single episode, or return to this hub and choose another cluster.",
      "You do not need to retell Weimar or Nixon on this hub page. Those stories live in their episodes. This page only orients: five clusters as a path, episodes as dated claims, and the twentieth century as the densest entrance for readers who live downstream of 1971.",
      "If you prefer a slower on-ramp, begin with **/history/ancient** or **/history/banks-paper**, then move forward when the mechanism is clear. Either route is valid. What matters is finishing with a chain of dated claims rather than a pile of slogans. The path is the point—money’s history as linked events, from coinage toward that modern close.",
    ],
  },
];

/** Pillar hub /sound-money — rendered by the sound-money index route. */
export const soundMoneyHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "This pillar answers what sound money *means* — not what happened in 1923 or 1971, and not how to buy a bar. History has its own pillar. Practice has its own pillar. Markets has its own pillar. Keep the shelves labeled.",
    ],
  },
  {
    heading: "What this pillar is",
    paragraphs: [
      "Pillar 1 is a definition shelf. The four long stops fix vocabulary: [what is sound money?](/sound-money/what-is-sound-money), [hard money vs fiat](/sound-money/hard-money-vs-fiat), [inflation and purchasing power](/sound-money/inflation-purchasing-power), and [what “backed” means](/sound-money/backed-money). A short fifth page states the standing media line: [information versus advice](/sound-money/information-not-advice).",
      "The tone is documentary. The aim is a readable glossary for adults who want the words straight before they open a dated episode. No page here is a remonetization brief, a metal shopping list, or a forecast. The claim is narrow on purpose: meaning first, events elsewhere.",
      "Search titles stay catalogue-plain so they file cleanly. The bodies carry the weight. This hub only orients the shelf so a reader landing on any one definition can see the neighbors without turning the idea pillar into a history cluster.",
    ],
  },
  {
    heading: "What this pillar is not",
    paragraphs: [
      "This pillar is not [Sound Money History](/history). Weimar, the Fed, greenbacks, and Nixon live as events on the history shelf. Idea pages may link those episodes once as cases. They do not retell the timelines. A rhyme teaches mechanism; a pasted timeline erases the job split.",
      "This pillar is not [Markets](/markets) and not [gold and silver in practice](/gold-silver). Dated figures and handling metal are other jobs. Mixing definition with tips produces a pitch. Keeping the label produces a word you can reuse on every later page.",
      "It is also not a capture shelf. List-building CTAs are paused on the site. Do not expect a signup form here. The map may still name later monetization as an open decision; the live pages do not.",
    ],
  },
  {
    heading: "The definition stops",
    paragraphs: ["Each line is a job description. Open the page for the full mechanism. This hub does not reprint every paragraph."],
    list: [
      "[What is sound money?](/sound-money/what-is-sound-money) — Working definition: a unit whose stock cannot be expanded at will; issuer-discretion test.",
      "[Hard money vs fiat](/sound-money/hard-money-vs-fiat) — Costly production versus law-and-habit claims; circulation does not decide the category.",
      "[Inflation and purchasing power](/sound-money/inflation-purchasing-power) — Decline in what the unit buys; hyperinflation as a case, not the everyday meaning.",
      "[What “backed” means](/sound-money/backed-money) — Redeemability contract versus reserve slogan; who may present the claim.",
      "[Information vs advice](/sound-money/information-not-advice) — Short BaFin-clean media line; not a definition stop of the same length.",
    ],
  },
  {
    heading: "Flavio reading order on this shelf",
    paragraphs: [
      "Long-tail clarity first, then the entry definition, then this hub as orientation. A practical path for newcomers is [backed money](/sound-money/backed-money) (the word most often abused), then [hard money vs fiat](/sound-money/hard-money-vs-fiat), then [inflation](/sound-money/inflation-purchasing-power), then [what is sound money?](/sound-money/what-is-sound-money) as the summary entry. Searchers who land on the entry page can still fan out sideways.",
      "When the vocabulary is clear, leave for history. Do not park Weimar or Nixon on this hub. One light link per case is enough. The history pillar’s five clusters already hold the dated claims; this shelf only prepares the reader to recognize the stops when they appear.",
    ],
  },
  {
    heading: "How to use this hub",
    paragraphs: [
      "Start anywhere on the four definition pages if you already know the confusion. Return here when you need the shelf map. Use [Sound Money History](/history) when you want dated claims. Use [Markets](/markets) when you want figures. Use practice when you want handling metal.",
      "Related links on each definition page stay short — usually this hub plus neighbor stops and at most one history hinge. That is the ledger: definition to hub, hub to history once, no spaghetti.",
      "This hub’s job is orientation only. It does not pretend the disclaimer page is a sixth thick essay, and it does not turn Pillar 1 into a history cluster. Read the index, open one definition, then leave when the next question is “what happened?” rather than “what does this word mean?”",
    ],
  },
];

/** Pillar hub /markets — rendered by the markets index route. */
export const marketsHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "This pillar records current metal-market facts: how official gold is booked, how central banks report gold in reserves, what the gold–silver ratio measures, and what country rankings of physical silver demand measure. It is not Sound Money History, and it is not a how-to for buying metal.",
    ],
  },
  {
    heading: "What this pillar is",
    paragraphs: [
      "**/markets** holds dated figures and definitions that sit on today’s tape and today’s official books. A book value is a statute leftover. A reserve line is a reported stock. A ratio is one price divided by another at a named time. A country line is identified bar-and-coin offtake. The tone is documentary. The aim is a readable record for adults who want the arithmetic without a pitch.",
      "The four spokes do different jobs. [Official gold book value](/markets/official-gold-book-value) explains why the United States still carries Treasury gold at $42.22 an ounce while spot prints another number. [Central-bank gold reserves](/markets/central-bank-gold-reserves) explains how gold appears in foreign-exchange reserves, where bars are often stored, and which official buyers have been named in recent tallies — including a short Poland block on that same page. [The gold–silver ratio](/markets/gold-silver-ratio) defines the quotient and pins it to 1980 and 2011 snapshots. [Physical silver demand by country](/markets/physical-silver-demand-by-country) defines the bar-and-coin ranking and pins it to a 2024 World Silver Survey table. This hub only orients those four.",
      "Numbers on this pillar come from public official series and from the same LBMA/COMEX averages this site already uses on the [desk](/desk). When a page divides spot by $35 or by $42.22, that is arithmetic on named prints. When a page cites a World Gold Council or IMF-based annual net, that is a dated official-sector line. When a page cites a World Silver Survey country line, that is identified retail offtake, not a mine ranking. None of those operations is a forecast.",
    ],
  },
  {
    heading: "What this pillar is not",
    paragraphs: [
      "This pillar is not [Sound Money History](/history). History tells what happened: coinage, banks, 1933, 1971. Markets uses those dates only when a leftover rule or a named peak still sits on a current ledger. The narrative stays on the history shelf. If you want Weimar, the Fed, or the Nixon shock as a story, go there. If you want the leftover $42.22 book rate as a present fact, stay here.",
      "This pillar is not [gold and silver in practice](/gold-silver). Practice is how people handle bars, coins, premiums, storage, and fakes. Markets does not tell you how to buy an ounce. It does not rank dealers. It does not publish a first-ounces checklist. Those pages have their own hub.",
      "This pillar is also not a tips desk. No page here names a miner, a target, or a reason to prefer one metal. BaFin-clean documentary voice means the figures stand without a call to action. The live tape on the desk is a clock. These pages are why a few of those numbers have a statute or a definition attached.",
    ],
  },
  {
    heading: "The four spokes",
    paragraphs: ["Each line is a job description. Open the page for the full mechanism. This hub does not reprint every table."],
    list: [
      "[Official gold book value](/markets/official-gold-book-value) — Statutory $42.22 versus spot; short arithmetic of named year averages and peak prints divided by $35 and by $42.22.",
      "[Central-bank gold reserves](/markets/central-bank-gold-reserves) — How gold is reported in FX reserves; vault and custody preferences; dated official purchases; Poland as a short documentary subsection, not its own URL.",
      "[Gold–silver ratio](/markets/gold-silver-ratio) — Definition of the quotient; what it does not measure; 1980 and 2011 as named anchors; year-average snapshots from the same series.",
      "[Physical silver demand by country](/markets/physical-silver-demand-by-country) — Identified bar-and-coin offtake by country; what the ranking does not measure; 2024 World Silver Survey snapshots.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Read the four as a small shelf, not as a web. Book value is a U.S. accounting leftover from the last official par. Central-bank gold is an official-sector stock and flow. The ratio is a pair of market prints. Physical silver by country is a retail demand address. They share a pillar because they are current metal-market facts. They do not share a cause, and they do not share a trade.",
    ],
  },
  {
    heading: "How to read a markets page",
    paragraphs: [
      "Each spoke opens with a tight claim. Headings keep book, report, ratio, and country offtake in separate boxes. Related links stay short: this hub, one neighbor on the shelf, and at most one history page when a statute or a 1980 tape needs its narrative home. That is the ledger — spoke to hub, hub to history once, no spaghetti.",
      "When a page names a year-average gold price, it uses the same money-path series as the desk. When it names a London PM print, it says so. When it names an IMF- or WGC-based official net, it treats that as a reported change, not as a signal. When it names a World Silver Survey country line, it treats that as identified bar-and-coin offtake, not as a shopping list. Lists appear when a table of divisions helps; paragraphs carry the claim.",
      "If two facts rhyme — official gold on a book, official gold in a reserve statement — the text will say they are different jobs. The U.S. $42.22 line is a frozen par. A central bank’s reserve share may use a market-related dollar value. Mixing them produces a slogan. Keeping them labeled produces a figure you can check.",
    ],
  },
  {
    heading: "Where the other pillars sit",
    paragraphs: [
      "For the documentary path from coinage to 1971, start at [Sound Money History](/history). That pillar is narrative. This one is not. A single light link is enough: history is elsewhere. For definitions of sound money, hard money, and “backed,” use [Sound Money](/sound-money). For handling metal, use [gold and silver in practice](/gold-silver).",
      "You do not need to finish all four spokes on day one. Book value is the cleanest entry if you have just read 1971 and want to know why $42.22 still appears on a Treasury line. Central-bank reserves are the entry if you have just looked at the desk’s country bars. The ratio is the entry if you have just seen GSR on the tape and want the definition without a story about catch-up. Physical silver by country is the entry if you have just seen a bar-and-coin ranking and want the definition without a shopping list.",
      "This hub’s job is the orientation: four fact pages, not a history cluster, not a buying guide. The claim is narrow on purpose. Current metal-market facts live here. Narrative lives on history. Practice lives on gold-silver. Keep the shelves labeled.",
      "A reader who arrives from the tape can treat the spokes as captions. GSR on the clock is the ratio page. A country bar on the desk is the reserve page. A U.S. official-gold line that still looks too small in dollars is the book-value page. A country ranking of bars and coins is the physical-demand page. The captions do not replace the clock. They stop a figure from being read as a tip.",
    ],
  },
];

/** Cluster hub /history/20th-century — rendered by the cluster route from Cluster.sections. */
export const twentiethCenturyHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "One century closed the gold window. The path runs from a private rescue in 1907, through a new central bank, a paper collapse in Germany, a US gold recall in 1933, and the 1971 suspension of dollar convertibility into gold for foreign official holders. This cluster is the dense core of the history pillar’s modern story for gold, paper, and central banking.",
    ],
  },
  {
    heading: "The path in one paragraph",
    paragraphs: [
      "In October 1907 New York trusts faced a liquidity panic; J. P. Morgan’s group organized private support because no Federal Reserve yet existed. Congress answered with emergency currency legislation in 1908 and the Federal Reserve Act in 1913. World War I then broke the classical gold standard’s peacetime convertibility among major powers. Germany’s mark collapsed in 1923 under war, reparations, and extreme paper issue. In 1933 the United States recalled private monetary gold and revalued official gold for government accounting. Bretton Woods in 1944 rebuilt a gold-exchange system on a dollar pegged at thirty-five dollars an ounce for official holders. On 15 August 1971 that official gold window closed. The century’s monetary arc ends there for this cluster: private rescue, central bank, paper collapse, gold recall, then the Nixon suspension.",
    ],
  },
  {
    heading: "Why this cluster is the dense core",
    paragraphs: [
      "Earlier clusters spread across long spans. Ancient coinage covers centuries of mint practice. Banks-paper stretches from early note experiments to pre-modern bubbles. America and silver each hold statute fights that unfold over decades. The twentieth century packs regime changes into a shorter run of calendar time.",
      "Here, private crisis management becomes public central banking. Gold convertibility ends for wartime, returns in flawed forms, then ends again for US citizens and later for foreign official dollar holders. Paper money does not merely “inflate a little”; in Weimar it loses daily function. Official prices and windows matter because they are the legal hinges, not metaphors.",
      "That density is why this hub exists. Readers who want the modern door should start here rather than hunting isolated dates. The episodes are written so they can be read in order. Each page still stands alone with a dated claim and a short related set. Search titles stay catalogue-plain so they file cleanly; the bodies carry the documentary weight.",
      "Cross-links to **/history/banks-paper** appear only where an older paper rhyme helps. John Law’s 1720 note-and-share fusion is such a rhyme. It is not a merged century. Do not drag Regency France into Weimar, or Weimar into Nixon, as if they were one continuous print job. Keep the shelves labeled. A rhyme teaches mechanism; a merge erases dates.",
    ],
  },
  {
    heading: "Episode index",
    paragraphs: [],
    list: [
      "**/history/20th-century/panic-1907-fed** — Trust-banking liquidity crisis and the political road to the Federal Reserve; the Fed did not cause 1907; created after, not before.",
      "**/history/20th-century/classical-gold-standard-end** — How peacetime classical convertibility broke under World War I and what “gold standard” meant in the years that followed.",
      "**/history/20th-century/weimar-1923** — The German mark’s collapse into hyperinflation; a paper-money catastrophe with its own causes, dates, and institutional setting.",
      "**/history/20th-century/1933-gold-recall** — US private gold recall and official revaluation; citizens lose monetary gold rights years before 1971.",
      "**/history/20th-century/bretton-woods-nixon-1971** — Bretton Woods as a gold-exchange dollar system at $35 an ounce, and the 15 August 1971 close of the gold window for foreign official holders.",
    ],
  },
  {
    heading: "",
    paragraphs: ["Each line is a job description. Open the episode for the full mechanism. Do not expect this hub to reprint every timeline."],
  },
  {
    heading: "How to use this hub",
    paragraphs: [
      "Read the index top to bottom if you want the century’s sequence. Jump to Weimar or 1971 if you already know the hinge you need. Return to **/history** when you want ancient, banks-paper, America, or silver shelves. Use banks-paper for John Law when the rhyme clarifies paper-and-confidence dynamics; keep the centuries distinct in your head.",
      "This hub does not retell every episode in full. It does not turn 1907 into a personality cult, and it does not treat 1971 as a sudden invention of paper money. It fixes the path, names each page’s job, and keeps the claim sharp: from private rescue to central bank to paper collapse to gold recall to 1971.",
      "A practical reading order for newcomers is linear: 1907 and the Fed, then classical gold’s end, then Weimar, then 1933, then Bretton Woods and Nixon. Readers who already know one hinge can enter sideways and still use the index to see what sits before and after. Related links on each episode stay short—usually the cluster hub plus one neighbor—so the path does not dissolve into a web of weak matches.",
      "For orientation back to the whole pillar, use **/history**. For the Weimar mechanism in detail, open the Weimar episode linked above. For the gold-window close, open the Bretton Woods page. The cluster’s value is the ordered door—not a single megapage that tries to be all five stories at once.",
    ],
  },
];

/** Cluster hub /history/america — rendered by the cluster route from Cluster.sections. */
export const americaHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "This cluster is the American argument over the unit: two metals in **1792**, Jackson’s bank war, greenbacks as war paper, the silver question after **1873**, then a gold-standard statute in **1900**. The shelf stops before the Fed. **1907**, **1933**, and **1971** live on the [20th-century cluster](/history/20th-century).",
      "Start from the [history pillar](/history) for the five-cluster path. Read the America stops in calendar order, or enter at the hinge you need — [Crime of 1873](/history/america/crime-of-1873) for silver politics, [greenbacks](/history/america/greenbacks-civil-war) for war paper, [road back toward gold](/history/america/road-back-gold) for the handoff to 1907. Do not mash Jackson’s veto with the Federal Reserve Act.",
    ],
  },
  {
    heading: "The claim: what the dollar is",
    paragraphs: [
      "America’s monetary fights are statute fights. Congress names a mint ratio, charters or kills a bank, makes paper legal tender, omits a silver dollar from free coinage, then defines the dollar in gold. Markets answer with Gresham’s pattern, gold premiums, and reserve drains. The cluster’s claim is narrow: inside one republic, the unit’s metal and paper rules were contested in public law.",
      "This hub is not a pitch to hold metal, not a price target, and not a brief for remonetization. It is an ordered door from bimetallism to the 1900 gold statute — then a clean stop so the next shelf can open with 1907.",
    ],
  },
  {
    heading: "The path: 1792 to 1900",
    paragraphs: [
      "The [Coinage Act of 1792](/history/america/early-us-coinage) wrote gold and silver into law at **fifteen to one**. The Spanish dollar shaped the silver weight. When the mint ratio and the world ratio drifted, the undervalued metal left. **1834** moved the ratio gold-friendlier. That is the opening arithmetic.",
      "[Jackson and the Bank](/history/america/jackson-and-the-bank) is the fight over the Second Bank: **1832** veto, pet banks, Specie Circular, Panic of **1837**. The country then lived a long stretch without a federally chartered central bank. That is not **1913**. Keep the centuries labeled.",
      "[Greenbacks](/history/america/greenbacks-civil-war) financed the Union after **1862**. Legal tender paper floated below gold in New York until the Resumption Act’s date — **1 January 1879** — restored par in practice. War paper is a suspension, not a permanent theory of money.",
      "The [Coinage Act of 1873](/history/america/crime-of-1873) omitted free coinage of the standard silver dollar. Agrarian politics called it a crime; officials called it clarification toward gold. Free silver, Bland–Allison, Sherman, and Bryan’s **1896** campaign are that fight’s volume. The mechanics of two metals under one law also sit on [bimetallism](/history/silver/bimetallism).",
      "The [road back toward gold](/history/america/road-back-gold) closes the shelf: resumption in **1879**, Gold Standard Act in **1900**, then handoff to the [Panic of 1907](/history/20th-century/panic-1907-fed). This hub only places the bridge. Open the episode for the reserve strain and the statute’s grains.",
    ],
  },
  {
    heading: "Do not mash 1832, 1862, and 1913",
    paragraphs: [
      "Jackson’s bank war is a charter and deposit fight before any Federal Reserve. Greenbacks are Civil War legal tender. The Fed is a **1913** answer to **1907** trust-company plumbing. Three rhymes about credit and paper are not one institution and not one century.",
      "Likewise: **1873** is a Mint list; **1900** is a gold definition; **1971** is a foreign official gold-window close on another cluster. A rhyme teaches mechanism. A merge erases dates.",
    ],
  },
  {
    heading: "Episode index",
    paragraphs: [
      "Each line is a job description. All five episodes on this shelf are thickened narratives. This hub does not reprint every timeline.",
    ],
    list: [
      "[Early U.S. coinage / bimetallism](/history/america/early-us-coinage) — 1792 mint ratio, Spanish dollar background, 1834 gold-friendlier correction; Gresham at the Mint.",
      "[Jackson and the Bank](/history/america/jackson-and-the-bank) — Second Bank, 1832 veto, pet banks, Specie Circular, Panic of 1837; not the Fed.",
      "[Greenbacks and the Civil War](/history/america/greenbacks-civil-war) — Legal tender war paper, gold premium, Resumption Act, specie payments 1879.",
      "[The Crime of 1873 and the silver question](/history/america/crime-of-1873) — Coinage Act omits the silver dollar; free silver; Bryan 1896.",
      "[The road back toward the gold standard](/history/america/road-back-gold) — Resumption, silver-purchase strain, Gold Standard Act 1900; handoff to 1907.",
    ],
  },
  {
    heading: "How to use this hub",
    paragraphs: [
      "Read this page top to bottom if you want the republic’s unit from 1792 to 1900. Jump to [Crime of 1873](/history/america/crime-of-1873) if you already need the silver hinge. Jump to [road back toward gold](/history/america/road-back-gold) if you need the bridge into the twentieth century. Return to [Sound Money History](/history) for ancient coinage, banks-paper, silver, or the modern door.",
      "Cross-links to the [20th-century cluster](/history/20th-century) stay forward-only from the last episode and from Jackson’s light Fed pointer. Cross-links to [silver history](/history/silver/bimetallism) stay where bimetallism’s general mechanics help. Related links on each episode stay short so the path does not dissolve into a web of weak matches.",
      "This hub does not retell every stop at full length. It fixes the claim — the American argument over what the dollar is — and follows that argument until the 1900 gold statute. Linear order is the on-ramp: early coinage, Jackson, greenbacks, 1873, road back to gold. Readers who already know one hinge can enter sideways and still use the index to see what sits before and after.",
      "For orientation back to the whole pillar, use [Sound Money History](/history). For the modern door after 1900, use the twentieth-century hub linked above. The cluster’s value is the ordered door, not a single megapage that tries to be all five stories at once.",
    ],
  },
];

/** Cluster hub /history/silver — rendered by the cluster route from Cluster.sections. */
export const silverHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "This cluster is silver’s own shelf: a mountain, a global coin, a mint-ratio problem, a **1980** squeeze, then the metal’s dual monetary and industrial role. It is not a footnote to gold stories, and it is not a markets fact table.",
      "Start from the [history pillar](/history) for the five-cluster path. Read the silver stops as flow → coin → statute mechanics → modern break → dual role, or enter at the hinge you need — [piece of eight](/history/silver/piece-of-eight) for the global coin, [bimetallism](/history/silver/bimetallism) for mint ratios, [Silver Thursday](/history/silver/silver-thursday) for 1980. American statute volume stays on the [America cluster](/history/america); cross-link, do not merge.",
    ],
  },
  {
    heading: "The claim: silver is not a gold footnote",
    paragraphs: [
      "Gold histories often treat silver as a supporting actor. This shelf reverses that habit for five stops. Potosí set a global silver stock. The piece of eight carried that stock as a typed coin. Bimetallism tried to freeze gold and silver in one legal unit. Silver Thursday showed a concentrated private position meeting an exchange rule book. Industrial demand then gave the metal a second job beside monetary memory.",
      "This hub is not a pitch to hold silver, not a price target, and not a remonetization brief. It is an ordered door from early-modern flow to a dual-role present — documentary only.",
    ],
  },
  {
    heading: "The path: mountain to dual role",
    paragraphs: [
      "[Potosí](/history/silver/potosi) is Cerro Rico from the **1540s**: mine, mint, fleet, Seville, and the Manila galleon toward Asian settlement demand. Flow, not romance. The [world map](/maps) is the visual companion.",
      "The [piece of eight](/history/silver/piece-of-eight) is the coin face — roughly **27 grams** of Spanish American silver that priced cargo from the Caribbean to East Asia. The early United States defined a dollar with that habit in mind; open [early U.S. coinage](/history/america/early-us-coinage) for the inheritance arithmetic.",
      "[Bimetallism](/history/silver/bimetallism) is mint ratio versus market ratio and Gresham under a two-metal statute. America’s loud event is the [Crime of 1873](/history/america/crime-of-1873). Keep mechanics here and statute politics there.",
      "[Silver Thursday](/history/silver/silver-thursday) is **27 March 1980**: Hunt-era concentration, January prints near **$50**, then margin hikes, limits on new longs, and a March break. Facts only — [information versus advice](/sound-money/information-not-advice).",
      "[Monetary history and industry](/history/silver/monetary-and-industry) names the split: money in memory, industrial input in fabrication surveys. Country investment rankings and ratio arithmetic live under [markets](/markets), not as reprints on this hub.",
    ],
  },
  {
    heading: "Do not mash 1545, 1873, and 1980",
    paragraphs: [
      "Potosí is early-modern supply under empire. **1873** is a U.S. Mint list and a free-silver politics. **1980** is a private futures-and-bullion concentration plus an exchange response. Three silver centuries are not one crisis and not one lesson about “printing.”",
      "Likewise: a mint ratio is a law; a market gold–silver quotient is a dated pair of prints; industrial fabrication is a flow into products. A rhyme teaches mechanism. A merge erases the instrument.",
    ],
  },
  {
    heading: "Episode index",
    paragraphs: [
      "Each line is a job description. All five episodes on this shelf are thickened narratives. This hub does not reprint every timeline.",
    ],
    list: [
      "[Piece of eight](/history/silver/piece-of-eight) — Spanish dollar as a circulating global silver unit; U.S. dollar inheritance.",
      "[Silver Thursday / Hunt Brothers 1980](/history/silver/silver-thursday) — Concentrated position, rule changes, 27 March 1980 break; facts only.",
      "[Bimetallism](/history/silver/bimetallism) — Fixed mint ratio, market ratio drift, Gresham; link to Crime of 1873.",
      "[Potosí](/history/silver/potosi) — Cerro Rico, Manila galleon, silver flow into Eurasian payments.",
      "[Silver: monetary history and industry](/history/silver/monetary-and-industry) — Monetary memory versus photography, electronics, photovoltaics.",
    ],
  },
  {
    heading: "How to use this hub",
    paragraphs: [
      "Read this page top to bottom if you want silver’s shelf from mountain to dual role. Jump to [piece of eight](/history/silver/piece-of-eight) if you need the global coin. Jump to [bimetallism](/history/silver/bimetallism) if you need mint-ratio mechanics beside America’s [Crime of 1873](/history/america/crime-of-1873). Jump to [Silver Thursday](/history/silver/silver-thursday) if you need 1980. Return to [Sound Money History](/history) for ancient coinage, banks-paper, America, or the twentieth-century door.",
      "Cross-links to America stay where statute politics help. Cross-links to [markets](/markets) stay where current survey and ratio facts live. Related links on each episode stay short so the path does not dissolve into a web of weak matches.",
      "This hub does not retell every stop at full length. It fixes the claim — silver needs its own shelf — and follows that claim through five stops. Linear order on the write queue was long-tail first; the reading path can still follow calendar and mechanism. Readers who already know one hinge can enter sideways and use the index to see what sits before and after.",
      "For orientation back to the whole pillar, use [Sound Money History](/history). For bar-and-coin practice, use [gold and silver in practice](/gold-silver) — a different pillar with a different job. The cluster’s value is the ordered silver door, not a single megapage that tries to be mountain, statute, squeeze, and solar paste at once.",
    ],
  },
];

/** Cluster hub /history/banks-paper — rendered by the cluster route from Cluster.sections. */
export const banksPaperHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Paper money begins as a metal warehouse receipt — a claim check. Someone deposits coin or bullion; a goldsmith, a mint, or a public bank writes a paper that says the metal is there. The holder can return and collect the same weight. This cluster follows that receipt until it is no longer a warehouse claim: until notes circulate because a bank or a state says they will, and the window that once paid metal is optional, delayed, or gone.",
      "Start from the [history pillar](/history) for the five-cluster path. Long episodes on this shelf are [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks), the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam), and [John Law and the Mississippi Bubble](/history/banks-paper/john-law). Read the stops in order: warehouses, Amsterdam, the Bank of England, Law, then assignats. Do not mash 1720, the 1790s, and 1923 into one crisis.",
    ],
  },
  {
    heading: "The claim: a receipt, then a note",
    paragraphs: [
      "A warehouse receipt is not yet a currency. It is a named claim on a named pile of metal. Banking, in the sense this map uses the word, starts when the receipt itself is used to pay. The metal stays in the vault; the paper moves. Counterparties accept the check because they trust the warehouse, not because a statute has declared the paper to be money.",
      "Convertibility is the test. If the holder can still get coin at the window, the note is a convenient claim. If the window closes, limits payout, or pays in more paper, the note has become a bank or state liability whose value depends on policy and confidence. This hub is that sequence — not a morality play about “printing,” and not a pitch to buy metal.",
    ],
  },
  {
    heading: "The path: warehouses to assignats",
    paragraphs: [
      "Late-medieval and early-modern Europe stored metal with people whose business was to keep it. Italian deposit banks already knew the warehouse model. London goldsmiths, in the seventeenth century, issued running-cash notes that merchants endorsed onward. As long as redemption was ordinary, the paper was a ticket, not a rival unit. The hinge is circulation without movement of the metal: once the ticket pays a debt, the issuer has a float. [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks) is the episode that names that hinge.",
      "In **1609** Amsterdam created the Wisselbank to take in coin, credit a deposit, and let merchants settle in bank money. For a long time its reputation was that it did not lend: a florin banco was a claim on metal in the vault. Bank money often stood at an agio over worn current coin. Later the bank made concealed advances to the city and the Dutch East India Company. When that lending became public in the **1780s–1790s**, the agio collapsed. That is a Dutch public-bank story. It is not 1720, and it is not the assignats. The [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) page is that stop.",
      "The [Bank of England](/history/banks-paper/bank-of-england) was not a copy of Amsterdam. In **1694**, during the Nine Years’ War, a private corporation was chartered to lend to the Crown and to issue notes. Subscribers put up about **£1.2 million** as a war loan. Over the eighteenth century those notes became the ordinary paper of London: national money grown from war finance, not from a city warehouse ticket alone. In **1797** the Bank Restriction Act stopped gold payout on notes; resumption came in the **1820s**. Restriction is a wartime English statute. It is not the Mississippi Bubble, and it is not Weimar.",
      "France after Louis XIV faced heavy public debts. [John Law](/history/banks-paper/john-law) fused a note-issuing bank with a colonial trading company. In **1716** he founded the Banque Générale, later the Banque Royale, alongside the company that became the Compagnie des Indes. Notes supported share demand; shares supported confidence in notes. Through **1719** privileges widened and prices soared. Coin drained. In **1720** the System broke. That is a paper-and-shares collapse under a regency seeking relief from war debt. Open [John Law and the Mississippi Bubble](/history/banks-paper/john-law) for the instruments and the dates. This hub only places 1720 on the receipt-to-note path.",
      "Decades later, revolutionary France issued [assignats](/history/banks-paper/assignats): paper supposedly tied to confiscated church and émigré lands, the biens nationaux. The land was real. Quantity rose faster than retirement. By **1795–96** the paper was not a unit anyone would hold. Law is **1720** and a royal bank-plus-company. Assignats are a revolutionary fiscal instrument with a land story. Keep them apart so 1720 does not swallow 1790.",
    ],
  },
  {
    heading: "Do not mash 1720, 1790, and 1923",
    paragraphs: [
      "Three paper disasters rhyme. They are not one event. Law’s Mississippi System is a **1720** fusion of bank notes and company shares in Regency France. Assignats are **1789–1796** revolutionary paper on confiscated land. Germany’s mark in **1923** is a twentieth-century collapse after war, reparations, and extreme monetization. Weimar lives on the [20th-century cluster](/history/20th-century), not here.",
      "A rhyme teaches mechanism: paper can cease to be a trusted claim on metal. A merge erases dates, regimes, and the actual stop that failed. Weimar is not “France printed again.” The Nixon gold-window close of **1971** is not the invention of paper money. Those hinges have their own episodes.",
    ],
  },
  {
    heading: "Episode index",
    paragraphs: [
      "Each line is a job description. Warehouses, Amsterdam, and Law are the long narratives on this shelf. The Bank of England and assignats remain shorter map stops.",
    ],
    list: [
      "[From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks) — A receipt for metal starts to circulate; banking begins when the ticket pays a debt.",
      "[Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) — The 1609 Wisselbank as public deposit money, then concealed lending and a lost reputation.",
      "[Bank of England](/history/banks-paper/bank-of-england) — The 1694 war-finance charter, notes that became English money, then restriction and resumption.",
      "[John Law and the Mississippi Bubble](/history/banks-paper/john-law) — The 1720 note-and-share System under the Regency; the full episode on this cluster.",
      "[Assignats](/history/banks-paper/assignats) — Revolutionary paper supposedly tied to land, 1789–1796; not a second Law, and not Weimar.",
    ],
  },
  {
    heading: "How to use this hub",
    paragraphs: [
      "Read this page top to bottom if you want the receipt-to-note path. Jump to [John Law](/history/banks-paper/john-law) if you already need the 1720 mechanism in full. Return to [Sound Money History](/history) for ancient coinage, American statutes, silver, or the twentieth-century door. Use that later cluster for 1907, Weimar, and 1971; keep those dates off this shelf except as a labeled rhyme.",
      "This hub does not retell every stop at episode length. It fixes the claim — paper begins as a warehouse receipt — and follows that claim until bank and state notes are no longer warehouse claims. Linear order is the on-ramp: warehouses, Amsterdam, Bank of England, Law, assignats. Related links stay short: the parent pillar, and the thickened episodes.",
    ],
  },
];

/** Cluster hub /history/ancient — rendered by the cluster route from Cluster.sections. */
export const ancientHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Markets chose gold and silver because they were tradeable: portable, durable, divisible, and recognizable. Struck coinage from Lydia through Greece to Rome is a later technology for verifying metal. The metal came first. The stamp came second. Sound-money history does not begin when a gold window closed in 1971.",
      "Start from the [history pillar](/history) for the five-cluster path. This shelf is the on-ramp: why two metals kept winning, how a stamp lowered the cost of checking them, and what happened when a state lightened the coin. Paper receipts — warehouse tickets that become notes — wait on [banks and paper](/history/banks-paper). Read metal and coin first.",
    ],
  },
  {
    heading: "The claim: metal first, stamp second",
    paragraphs: [
      "A coin is a piece of metal plus a mark. The mark is a claim about weight and fineness. It is not the money itself. Before any mint, traders already settled in gold and silver by weight. The invention of coinage is a cut in verification cost, not the birth of monetary metal.",
      "That order matters for this pillar. If you start the story in 1971, you start at a late official window. If you start it with a warehouse receipt, you start after people already trusted a named pile of coin. This cluster sits earlier. It asks why gold and silver were the pile, and what a stamp did to that pile.",
      "The stamp does not abolish trust. It relocates it. You no longer weigh every lump in a market of strangers. You decide whether the issuer’s type is honest enough for the trade. When the type is trusted, coin travels farther than anonymous metal. When it is debased, people return to weight or hoard the better pieces."
    ],
  },
  {
    heading: "Why markets chose gold and silver",
    paragraphs: [
      "Many things have been money in a local range: cattle, grain, shells, copper. For high-value, long-distance settlement, two metals kept winning. The selection is a trade result, not a decree that invented money from nothing. A king can name a unit. He cannot force a distant counterparty to accept a unit that fails in the hand.",
      "Portability is value per weight. Durability is survival across a generation: gold does not rot; silver tarnishes but does not disappear. Divisibility is the ability to make change without destroying the good — metal can be cut and recast. Recognizability is how cheaply a stranger can tell the stuff from a look-alike. Scarcity sits under all four. A metal that can be planted like wheat cannot stay a unit for long.",
      "None of this is a pitch to hold metal. It is why traders kept returning to the same two. [Why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) is the long stop for those properties. This hub only names the selection."
    ],
  },
  {
    heading: "The path: Lydia to the solidus",
    paragraphs: [
      "Lydia, in western Anatolia, is the conventional starting point for struck coinage in the seventh and sixth centuries BCE. Early pieces were electrum — a gold–silver mix — with a punch and, later, a type. Croesus is the name attached to separating gold and silver issues. The invention is the stamp that cut the cost of verifying metal. You still needed to trust the issuer. You no longer needed to weigh every lump. [Lydia and the first coins](/history/ancient/lydia-first-coins) is that stop.",
      "Greek city-states turned mines and mints into a commercial network. Athens’ Laurion silver and the owl tetradrachm are the familiar face: a recognised weight of silver that could move across the Aegean without a letter of introduction. Control of a mine was fiscal power. Laurion helped fund fleets. [Greece: silver and trade](/history/ancient/greece-silver-trade) places that network.",
      "Rome ran gold and silver together: the aureus and the denarius as the famous pair, with bronze for small change. When the mint ratio and the market ratio drift, the legally overvalued metal stays and the other leaves. Debasement of the silver coin was gradual, then obvious. The third-century crisis made the coinage a fiscal instrument. The lesson is fiscal, not moral: when spending outruns metal, the coin is lightened. [Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus) is that stop.",
      "Constantine’s solidus, in the early fourth century, was a gold coin of tightly held weight and fineness. It outlasted the western empire as the Byzantine nomisma. Continuity of weight is the story, not a romance of Rome. [After Rome: the solidus and early continuity](/history/ancient/solidus-continuity) carries that continuity. It is not a sequel about paper, and it is not 1971.",
    ],
  },
  {
    heading: "Paper comes later",
    paragraphs: [
      "A coin is metal you can hold. A warehouse receipt is a claim on metal you are not holding. Banking, in the sense the next cluster uses the word, starts when that claim-check pays a debt and the metal stays in the vault. That handoff is not ancient coinage. It lives on [banks and paper](/history/banks-paper).",
      "Do not mash the stamp and the receipt. Lydia’s punch is a verification mark on electrum. Amsterdam’s florin banco is a ledger credit against a vault. Law’s 1720 notes are a System fused with shares. Those later machines rhyme — a claim can cease to be trusted — but they are not this shelf.",
      "Do not start this pillar in 1971 either. The Nixon gold-window close is a late official hinge on another cluster. It is not the invention of money, and it is not the first time a state spent past its metal. Return to the [history pillar](/history) for that modern door. Use this cluster for the older order: metal, then stamp, then — much later — paper.",
    ],
  },
  {
    heading: "Episode index",
    paragraphs: [
      "Each line is a job description. Why markets chose gold and silver is the long narrative on this shelf. Lydia, Greece, Rome, and the solidus remain first drafts. This hub is not pretending the later stops are sitemap-ready.",
    ],
    list: [
      "[Why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) — Selection by trade: portability, durability, divisibility, recognizability; metal before the mint.",
      "[Lydia and the first coins](/history/ancient/lydia-first-coins) — Electrum, a stamp, and a lower cost of verifying metal in western Anatolia.",
      "[Greece: silver and trade](/history/ancient/greece-silver-trade) — Laurion and the Attic owl; silver as a Mediterranean language.",
      "[Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus) — Two metals, one state; when spending outran metal, the coin was lightened.",
      "[After Rome: the solidus and early continuity](/history/ancient/solidus-continuity) — Constantine’s gold unit keeps its weight into Byzantium; continuity, not romance.",
    ],
  },
  {
    heading: "How to use this hub",
    paragraphs: [
      "Read this page top to bottom if you want the metal-then-stamp path. Jump to [Why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) if you already need the selection in full. Return to [Sound Money History](/history) for the five-cluster map. When the story leaves the coin for a ticket, open [banks and paper](/history/banks-paper). Keep 1720, the 1790s, 1923, and 1971 off this shelf except as labeled later hinges.",
      "This hub does not retell every stop at episode length. It does not treat 1971 as the beginning of monetary history. It fixes the claim — markets chose gold and silver for tradeability; coinage is metal first, stamp second — and orients the ancient cluster. Linear order is the on-ramp: why the metals, then Lydia, then Greece, then Rome, then the solidus. Related links stay short: the parent pillar, and the later paper cluster.",
    ],
  },
];
