export type Callout = { label: string; paragraphs: string[] };
export type SectionTable = { caption?: string; headers: string[]; rows: string[][] };
export type SectionFigure = {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  width?: number;
  height?: number;
};
export type Section = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  callout?: Callout;
  table?: SectionTable;
  /** Mid-article figure — not the Querformat titlebild/hero. */
  figure?: SectionFigure;
};

const johnLaw: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On the rue Quincampoix in late **1719**, Paris priced a dream: Mississippi Company shares that multiplied while Banque Royale notes poured into the same crowd. Rentiers, servants, and foreign visitors pressed for subscriptions. Coin still mattered in the till. For a season, paper and equity felt like the same fortune.",
      "John Law’s System fused a note-issuing bank with a rising colonial trading company under the Regency of Philippe d’Orléans. In **1719–1720** notes and shares inflated together. The bust of **1720** was a paper-and-shares collapse under a court seeking relief from war debt — not France’s later [assignats](/history/banks-paper/assignats), and not “France printed [Weimar](/history/20th-century/weimar-1923).”",
    ],
  },
  {
    heading: "A Scot at the Regent’s table",
    paragraphs: [
      "John Law (**1671–1729**) was a Scottish financier and monetary theorist. He argued that carefully issued paper, tied to sound assets and trade, could expand credit beyond scarce coin. After exile and years on the Continent, he gained the ear of the French Regent in the years after Louis XIV’s death.",
      "France carried heavy public debts from long wars. Tax revenues strained. Coin was hoarded or exported when confidence slipped. Law offered a modern-sounding fix: a bank that issued notes, and a company that could absorb state debt while developing colonial trade around the Mississippi basin and Louisiana.",
      "His early proposals stressed order, reserves, and commerce — a reform of credit, not a carnival from day one. Political need and market mania then outran those restraints. The System grew by stages — bank notes, company shares, debt conversion, monopoly privileges — until the pieces locked together and broke.",
    ],
  },
  {
    heading: "Bank notes and company shares",
    paragraphs: [
      "In **1716** Law founded the Banque Générale. It was later reorganized as the Banque Royale when the crown took a closer grip. The bank issued notes payable in coin under stated rules. Those notes circulated as a convenient claim on metal, not as metal itself.",
      "Alongside the bank stood the company later known as the Mississippi Company — first the Compagnie d’Occident, then the Compagnie des Indes after mergers with other trading privileges. It held rights over colonial trade and related monopolies. The state used the company to refinance debt. Creditors were steered into shares instead of older claims on the treasury.",
      "Keep the instruments distinct. A **bank note** was a promise to pay in coin, subject to the bank’s rules and reserves. A **share** was ownership in the company, priced in the market and fed by dividends, privileges, and speculation. Law’s danger was fusion. When the same political machine pushed both, a rise in shares felt like proof that notes were sound — and plentiful notes made shares easier to bid up.",
    ],
  },
  {
    heading: "How the bubble inflated",
    paragraphs: [
      "Through **1719** the company’s privileges widened. Debt-conversion schemes pulled more rentiers into shares. Share prices rose with extraordinary speed. New issues and subscriptions absorbed paper wealth that had nowhere else to go under the Regent’s policy mix.",
      "Note issue expanded as the System tried to keep credit easy and share markets firm. Luxury spending rose in Paris. Speculators crowded the rue Quincampoix. Foreign visitors described a city obsessed with subscriptions and price talk.",
      "Metal moved the wrong way for a durable note system. Coin and bullion were drawn into the whirl, then driven out as people preferred to hold or export hard money while spending the paper. When confidence is high, notes displace coin in daily use. When confidence cracks, coin leaves circulation or leaves the country. The note becomes a claim on a thinning reserve. Law’s System leaned on confidence longer than on metal.",
      "Peak mania sits in late **1719** and early **1720**. Prices that had multiplied then struggled to find new buyers. Controls on coin, forced relations between notes and shares, and shifting decrees signaled strain rather than mastery. Peak and bust belong to that narrow window.",
    ],
  },
  {
    heading: "The collapse of 1720",
    paragraphs: [
      "In **1720** the System broke. Share prices fell from their peak. Bank notes lost credibility as convertibility and coin rules shifted under emergency decrees. Holders who could fled into metal and foreign exchange. Shops relearned to distrust paper that had been mandatory or privileged only weeks before.",
      "Law’s political protection evaporated as losses spread through the rentier class and the court. He left France. The Regency was left with ruined paper fortunes and a long memory of “paper systems.” Later French politics would invent new paper under new names. The **1720** scar remained part of public caution.",
      "What had inflated as a joint note-and-share machine deflated as both legs failed together. The Banque Royale’s paper could not be defended once the company’s equity story died and coin fled.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["Bank, company, mania, bust — in that order."],
    list: [
      "**1716:** Banque Générale founded; notes payable in coin under stated rules.",
      "**1717–19:** Compagnie d’Occident / Mississippi privileges widen; debt conversion into shares.",
      "**1718–19:** Banque Royale; note issue and share demand reinforce each other.",
      "**Late 1719–early 1720:** Share mania peaks on the rue Quincampoix.",
      "**1720:** Collapse — share crash, strained convertibility, flight into metal; Law leaves France.",
      "**1790s (later chapter):** [Assignats](/history/banks-paper/assignats) — revolutionary land paper, not this System.",
    ],
  },
  {
    heading: "Paper and shares, not land and not Weimar",
    paragraphs: [
      "Do not merge this episode with the French [assignats](/history/banks-paper/assignats) of the **1790s**. Assignats were revolutionary paper tied to confiscated church and émigré lands, issued decades later under a different regime and war finance. Do not merge it with Germany’s **1923** hyperinflation either. [Weimar](/history/20th-century/weimar-1923) was a twentieth-century collapse of a national paper mark — one cautionary parallel among many, not the same event or the same century.",
      "John Law’s **1720** leaves a narrower documentary lesson. Fusing a note-issuing bank with a rising equity story can inflate both until metal drains and confidence snaps. The Mississippi Bubble was paper-and-shares under Regency debt politics. It was not Weimar, and it was not the assignats. The [banks and paper](/history/banks-paper) chapter keeps those dates apart.",
    ],
  },
];

const panic1907: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **22 October 1907**, depositors lined Fifth Avenue at the Knickerbocker Trust Company and kept lining up until the till could not meet the crowd. The trust suspended payments. Within two days, call money — the overnight credit that clears Wall Street — spiked toward twenty-five percent and higher, and the New York Stock Exchange nearly shut for want of cash to settle trades. Gold still defined the dollar. What failed was cash at the door.",
      "The Panic of 1907 was a liquidity crisis centered on New York trust companies. Private bankers, led by J. Pierpont Morgan’s group, organized emergency support because no public central bank existed. The Federal Reserve did not cause that October. Congress created the Fed afterward, in **1913**, in part because the panic showed how thin the country’s crisis plumbing was.",
    ],
  },
  {
    heading: "How the run began",
    paragraphs: [
      "The week had already cracked around a failed copper corner linked to F. Augustus Heinze and Charles Morse. Banks and trusts tied to those names looked weak. Depositors did not wait for slow audits. They wanted notes they could spend that day.",
      "Knickerbocker’s suspension turned fear into a route map. Runs moved to other trusts and into the call-money market that funded broker loans. A crowd forms. Payment slows. Rumor names the next door. Without a backstop that can lend against good assets, solvent firms can fail for lack of cash in the hour they need it.",
      "That is ordinary panic mechanics — and it is why the episode still matters. The United States had no standing public lender of last resort with a legal duty to supply emergency liquidity to the whole banking field. Metal still settled contracts in the wider monetary order. Access to cash at the point of panic did not.",
    ],
  },
  {
    heading: "Why the trusts were the weak point",
    paragraphs: [
      "National banks in New York belonged to the Clearing House. Members could pledge good paper and borrow cash overnight through that club. Trust companies took deposits and made loans, but many sat outside the Clearing House. They had no automatic seat at the table that recycled liquidity during a run.",
      "That gap decided who survived the first days. When Knickerbocker’s condition looked bad, Clearing House support was refused. The line then moved to other trusts. Institutions inside the club had a path to emergency cash. Trusts outside it became the panic’s weak point.",
      "Trusts had grown quickly in the years before 1907. They offered deposit-like liabilities and competed for business that looked like banking. Regulation and mutual aid did not keep pace. In a calm year the gap stayed invisible. In October it became the map of the crisis.",
      "So 1907 is not a story that “gold failed.” Metal still defined the monetary unit. The plumbing failed. Trusts held large runnable liabilities without the same mutual support that national banks could tap through the Clearing House.",
    ],
  },
  {
    heading: "A private last resort",
    paragraphs: [
      "In the crisis weeks, Morgan’s library at 219 Madison Avenue became a private command post. Bankers met, books were checked, and pools were pledged. Some firms received support. Knickerbocker stayed closed. Gold imports and Treasury deposits helped at the margins.",
      "The documentary point is institutional, not hagiographic: a private coalition acted as a temporary last resort because statute had not built one. That fact later shaped the politics of reform. A country that had needed one man’s library to keep the Exchange open was a country ready to argue for a public facility — even if it argued for years about who should control it.",
    ],
  },
  {
    heading: "A short timeline, 1907–1913",
    paragraphs: ["The sequence is created-after, not before. The Fed was built in the wake of 1907. It was not the institution that produced the panic."],
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
    heading: "What Congress built afterward",
    paragraphs: [
      "Aldrich-Vreeland (**1908**) was the first legislative answer. Groups of national banks could issue emergency currency against assets other than only government bonds. The same law funded a National Monetary Commission to study a permanent system.",
      "The commission toured Europe and studied banks that already had a legal last window. The Aldrich Plan that followed imagined a central reserve association with banker influence and elastic note issue. Public politics rejected a design that looked too much like Wall Street’s private club with a federal seal.",
      "The Federal Reserve Act of **1913** created regional Federal Reserve Banks and a federal board structure. Member banks could discount commercial paper and receive Reserve notes. The public brief was elastic currency and a lender of last resort for banks, so an October run would not depend on one private library.",
      "Jekyll Island belongs in the record as a drafting episode in the commission era. It is not the law itself. The statute is the December 1913 Act. Morgan’s 1907 rescue belongs as a private substitute for a missing public facility — stated as fact, not as hero worship, and not as proof that one man should own the last window forever.",
    ],
  },
  {
    heading: "Where the century turns next",
    paragraphs: [
      "After 1913 the next hinge in this chapter is the wartime break with classical gold convertibility. World War I suspended or strained gold-standard rules among major powers. The Fed’s early years therefore sit between a private panic rescue and the wider end of the classical gold order.",
      "Read 1907 as the trust-banking liquidity crisis that made a US central bank politically possible. Then open the [end of the classical gold standard](/history/20th-century/classical-gold-standard-end) for the next monetary hinge. The Fed did not cause Knickerbocker’s run. Knickerbocker’s run helped make the Fed’s creation look necessary to Congress.",
      "This page stays on that dated claim — trusts, Clearing House gaps, private rescue, then a 1913 statute. It does not sell metal, forecast prices, or turn a panic into a brief for or against the Fed. Neighbor articles carry Weimar, the 1933 gold recall, and the [1971 gold-window close](/history/20th-century/bretton-woods-nixon-1971) on their own dates.",
    ],
  },
];


const weimar: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In the autumn of **1923**, a German mark could buy less by the hour than it had bought that morning. Wages paid at noon were spent before supper. Café prices rose between the first course and the bill. By November a U.S. dollar — about **4.2 marks** before the First World War — was quoted at roughly **4.2 trillion paper marks**. Notes did not vanish. People stopped holding them, and stopped pricing in them.",
      "Weimar hyperinflation is that collapse of the German paper mark as money in **1922–23**. The wheelbarrow cartoons are not invented, and they are not the cause. The sequence is older: war finance without a gold stop, a fiscal gap after Versailles, a Reichsbank that created marks against Treasury bills, then the Ruhr occupation. Printing is the mechanism. The start is the missing constraint.",
    ],
  },
  {
    heading: "War finance without a stop",
    paragraphs: [
      "Germany paid for the First World War largely by borrowing and expanding the note issue, not by taxation on a wartime scale. [Gold convertibility ended with the war in 1914](/history/20th-century/classical-gold-standard-end). The mark kept its gold name; it lost the stop that had made the name honest. By the armistice the stock of paper was already several times the pre-war circulation. Controlled wartime prices hid part of the pressure. The black market did not.",
      "Peace did not restore the old constraint. The republic inherited domestic war debt, social claims, and reparations payable in gold or in kind. Tax collection was weak. The Reichsbank discounted Treasury bills — it created marks so the government could pay. Inflation was already visible in **1919–1921**. That was still ordinary, if severe, inflation.",
      "Hyperinflation is a later phase: roughly when prices rise about **50%** or more in a month. Germany crossed that line in **mid-1922**. Once expectations broke, the fiscal problem and the money problem fed each other. Tax arrived in marks worth less than when the liability was assessed. The gap was closed with more paper. Real cash balances collapsed. Velocity exploded: nobody would hold the unit. That is the mechanical core, not a morality play about “Germans printing money.”",
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
    heading: "The Ruhr and the final spiral",
    paragraphs: [
      "On **11 January 1923** French and Belgian troops occupied the Ruhr, Germany’s industrial core. Berlin called for passive resistance: do not cooperate; the Reich will cover wages. Production in the occupied zone fell. Tax from the region dried up. The wage and subsidy bill was met, again, by paper created through the Reichsbank.",
      "There was a short intervention in the foreign-exchange market in early 1923. Reserves were not large enough. When support ended, the slide resumed. By autumn, wholesale prices could rise on the order of **20% in a day** at the peak. At that speed the “money supply” is not a stock anyone holds. It is a hot potato. C. H. Bresciani-Turroni’s contemporary account is still the place historians send readers for the monthly tables.",
      "That is what it means for money to die as a unit: the notes remain in pockets and drawers, but contracts, wages, and shopkeepers abandon the paper mark for foreign currency, gold units, or goods.",
    ],
  },
  {
    heading: "How far the dollar rate ran",
    paragraphs: [
      "Pre-war parity: about **4.2 marks per U.S. dollar**. By late 1922 the rate was already in the thousands. Through 1923 it moved through millions and billions into trillions. On the November stabilisation the official rate was set at **4.2 trillion paper marks per dollar** — twelve zeros relative to the gold-mark parity.",
      "Everyday prices followed. A loaf of bread that cost a fraction of a mark before the war was in the hundreds of billions of marks by November 1923. Postage, tram fares, and café bills were revised so often that a price at the start of a meal was not the price at the end. Banknotes were overprinted with new face values because new plates could not keep up.",
      "Exact multipliers differ by series — wholesale, retail, exchange. The qualitative fact does not: the paper mark ceased to work as a store of value or a unit of account.",
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
    heading: "How the Rentenmark stopped it",
    paragraphs: [
      "Stabilisation needed two things together: a stop to marks created for the Treasury, and a unit people would accept. Mid-October 1923 decrees established the Deutsche Rentenbank. Rentenmarks entered circulation from **15 November 1923**. Conversion: **one trillion paper marks to one Rentenmark**. On **20 November** the exchange rate was held at 4.2 Rentenmarks per dollar.",
      "The notes were called “backed” by mortgages forced onto agricultural and industrial property. A holder could not walk to a window and demand a weight of gold. The mortgages were a legal charge on land and plant — a way to make the new issue look limited — not coin in a vault with a public claim on it.",
      "The Reichsbank was barred from discounting government bills as before. Rudolf Havenstein, the Reichsbank president of the inflation years, died on 20 November. Hjalmar Schacht, as currency commissioner and then Reichsbank head, enforced the new line. Contemporaries called the halt a miracle. The narrower fact: once the public believed the press would not run for the Treasury, the old paper was scaled by a trillion and set aside.",
      "In 1924 the Reichsmark succeeded the Rentenmark. The Dawes Plan rearranged reparations and credit. Those are sequels. The hyperinflation of the paper mark ended in November 1923.",
    ],
  },
  {
    heading: "Printing was the channel, not the whole cause",
    paragraphs: [
      "Printing is how the stock expanded. It is not a complete cause. A government that can tax and that faces a hard stop — gold convertibility, a currency board, a public that will not accept more notes — cannot do this for long. Weimar had a fiscal gap it would not close, a central bank that monetised Treasury paper, a lost war, reparations, and then the Ruhr. Remove the stop, keep the spending, and the unit fails.",
      "It is a documented extreme, not a script every paper currency has to finish. Open the [1933 gold recall](/history/20th-century/1933-gold-recall) or the [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) for later American hinges — different years, different laws, different claims. This page stays with the German mark’s death and the Rentenmark halt. It does not sell metal or turn 1923 into a forecast.",
    ],
  },
];

const nixon: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On Sunday evening, **15 August 1971**, President Richard Nixon told the country the United States would no longer convert dollars into gold for foreign official holders. The postwar deal negotiated at **Bretton Woods** in **1944** had pegged other currencies to the dollar, and the dollar to gold at **$35** an ounce for those holders. That night the last official gold promise in the system was suspended.",
      "The act did not invent fiat money overnight. Private Americans had already been barred from monetary gold under the [1933 recall](/history/20th-century/1933-gold-recall). Bretton Woods did not fail in a single night either. Pressure had built for years. What ended was the official gold window — the channel through which foreign treasuries and central banks could still present dollars and demand US gold at the posted price.",
    ],
  },
  {
    heading: "The gold window, not a retail counter",
    paragraphs: [
      "Nixon’s New Economic Policy mixed a ninety-day wage and price freeze with a temporary import surcharge. The line that mattered for money was simpler: suspend convertibility of the dollar into gold for foreign official holders.",
      "That suspension is often called the closing of the gold window. The window was not a teller for citizens. It was the official redemption channel under Bretton Woods rules. Closing it meant the dollar was no longer redeemable in metal for the partners who had treated dollars as claims on US gold.",
      "The shock was a policy choice under stress, not a sudden discovery that gold had vanished from history. The administration framed the move as temporary. It was not reversed.",
    ],
  },
  {
    heading: "How Bretton Woods actually worked",
    paragraphs: [
      "Bretton Woods was negotiated in **1944** at Bretton Woods, New Hampshire. Member currencies were pegged to the US dollar within narrow bands. The dollar itself was defined against gold at thirty-five dollars per troy ounce.",
      "That design made the system a **gold-exchange** standard, not a classical gold standard. Most countries held dollars as reserves. They treated those dollars as claims that could, in theory, be turned into US gold. Ordinary people in the United States did not redeem paper for coin at the Treasury window. Their private gold rights had already been removed in 1933.",
      "Under the classical gold standard before 1914, national currencies were convertible into gold for a wider set of holders, and settlement often moved metal directly between countries. Bretton Woods put the dollar in the middle. Gold sat behind the dollar for official partners. The rest of the world sat behind the dollar peg.",
      "At thirty-five dollars an ounce, one dollar was defined as one thirty-fifth of an ounce of gold. If a foreign central bank held one billion dollars of official claims, those claims implied a right to about **28.6 million ounces** of US gold at the posted rate — if convertibility still worked. When claims grew faster than the gold stock, the board stopped matching the vault.",
    ],
  },
  {
    heading: "Why the window came under pressure",
    paragraphs: [
      "Economist Robert Triffin stated the contradiction in plain English. The world needed more dollars to trade and hold as reserves. Those dollars came from US deficits and capital outflows. The more dollars foreigners held, the larger the official claims on US gold. If the United States supplied enough dollars for growth, confidence in convertibility weakened. If it tightened enough to protect the gold stock, the world shorted dollars. That trap is the Triffin dilemma.",
      "From **1961 to 1968** the London Gold Pool tried to hold the free-market gold price near thirty-five dollars. Major central banks sold gold into the market when the price rose. The pool collapsed in **March 1968**. A two-tier market followed. The official price remained for central-bank transactions. The free market price could move away from thirty-five.",
      "Pressure did not stop there. In **May 1971** West Germany let the Deutsche Mark float. France converted dollars into gold in earlier years and kept pressing the convertibility rule. By August 1971 US gold stocks were far smaller than outstanding official dollar claims. The window could not pay every claim at thirty-five dollars if many holders presented paper at once.",
      "Keep **1933** and **1971** labeled. In 1933 the United States ordered private citizens to turn in monetary gold and then raised the official gold price for government accounting. In 1971 private Americans were already outside the official gold channel. What closed was foreign official redemption of dollars for US gold.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The August decision sits at the end of a long mismatch between dollar claims and US gold — not as a surprise invented that weekend."],
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
    heading: "Camp David and the Sunday speech",
    paragraphs: [
      "The Camp David weekend framed the announcement. Treasury Secretary John Connally and Under Secretary Paul Volcker were central voices on the gold and exchange decisions. The public speech mixed domestic inflation politics with the external dollar problem. Wage and price controls addressed the home front. The surcharge pressed trading partners. The gold suspension addressed the mismatch between dollar claims and US gold.",
      "The key legal and monetary fact remained narrow. Foreign official holders could no longer present dollars and receive gold at the fixed official price. The dollar stayed the world’s main reserve currency in practice. Its last official gold anchor did not.",
    ],
  },
  {
    heading: "What the temporary close became",
    paragraphs: [
      "The administration called the suspension temporary. Temporary became permanent. In December 1971 the Smithsonian Agreement tried to rebuild pegs. The official gold price moved from thirty-five to thirty-eight dollars an ounce. Further adjustment took the official price to **$42.22**. Pegs still failed under market pressure.",
      "By **1973** major currencies floated against one another. The post-war gold-exchange system had ended. What remained was a dollar-centered fiat order without official convertibility into US gold. The 1971 decision closed a window that had already been under strain since the 1960s. It did not erase gold from history. It ended Bretton Woods as a working convertibility regime.",
      "Open the [official gold book value](/markets/official-gold-book-value) page if you wonder why **$42.22** still appears on a Treasury line. Open [Weimar 1923](/history/20th-century/weimar-1923) only as a different documentary extreme — not as the same hinge. This page stays with Bretton Woods and the closed window. It does not sell metal or forecast prices.",
    ],
  },
];


const classicalGold: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In the first days of August **1914**, as armies mobilized, the peacetime gold window closed across Europe. Britain’s Currency and Bank Notes Act of **6 August** put Treasury notes of one pound and ten shillings into daily use and made Bank of England notes legal tender more broadly. Gold exports were blocked or licensed. The mark, the franc, and other gold names remained on coins and accounts. The public could no longer test those names at the teller.",
      "Before that summer, major currencies were convertible into gold at fixed rates in peacetime — the classical gold standard. This article follows the [Panic of 1907](/history/20th-century/panic-1907-fed): that page is a US liquidity crisis and a new central bank; this page is the peacetime gold order those years still sat inside, and the wartime break that ended it. What came after was not the same system with a pause. It was a different architecture.",
    ],
  },
  {
    heading: "Convertibility, mint price, and practice",
    paragraphs: [
      "Before **1914** the international monetary system was a set of practices, not a single treaty. A currency on the classical gold standard was convertible into a defined weight of gold. Notes and deposits were claims that could, in ordinary times, be turned into coin or bullion at a published mint price. Gold could be imported and exported.",
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
    heading: "Rules of the game — and the real constraint",
    paragraphs: [
      "Textbooks later called this the “rules of the game”: lose gold, tighten; gain gold, ease. Real central banks did not always play that cleanly. They sterilised flows, used gold devices, and protected domestic credit when they could. The constraint still mattered. A bank that promised gold on demand could not expand without limit if people and foreigners were free to take the metal. Close the window, or block the ship, and the same note is wartime paper that still spends if the public will hold it.",
      "The United States entered the century with a gold dollar and, after **1913**, a new central bank — the sequel to the [Panic of 1907](/history/20th-century/panic-1907-fed). The classical system around that Fed was already older than the Fed. **1907** was a trust-banking liquidity failure. Metal still defined the unit. The break with convertibility came from war, not from **1907**.",
    ],
  },
  {
    heading: "Why 1914 ended it",
    paragraphs: [
      "The First World War made convertibility and free gold movement incompatible with war finance. Governments needed to spend faster than tax and genuine borrowing would allow. Gold exports were blocked or licensed. Notes were protected from internal drains. Stock exchanges closed. The peacetime machine assumed ships, open windows, and a public that would take paper because it could still test the paper.",
      "Britain’s Currency and Bank Notes Act of **6 August 1914** is one legal marker. Similar suspensions ran across the belligerents that summer and autumn. England’s Restriction in **1797** was an earlier wartime stop of gold payout, with resumption in the **1820s**. **1914** is another wartime stop. What did not return after **1918** was the old machine: several centres, private convertibility, gold that moved when the points were hit.",
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
      "After **1918** many countries tried to “return to gold.” They reused the word. They did not restore the old machinery. Genoa asked members to hold gold-convertible currencies as reserves. That is a gold-*exchange* design: one or two convertible centres, and a ring of claims on those centres. It is not several windows with gold moving between them when the points are hit.",
      "Britain’s **1925** return at the pre-war sterling–dollar parity reused a number. It did not rebuild the **1913** world. In **1931** Britain left gold again. Other interwar “gold standards” were pegs, exchange controls, and official gold — a different architecture wearing a familiar name.",
      "Where the wartime stop never returned, paper could run for the Treasury. [Weimar hyperinflation](/history/20th-century/weimar-1923) is the European extreme of that break — war finance first, then a mark that ceased to work as money. That is not a pause in the classical system.",
      "Keep the later American hinges on their own dates. The [1933 gold recall](/history/20th-century/1933-gold-recall) removes the public claim on gold at the old mint price. The [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) is **1971**: the last official gold window on the dollar, for foreign official holders. Neither is **1914**. Mixing the three makes all three unreadable.",
      "This article stays with the peacetime classical order and its wartime end — after the [Panic of 1907](/history/20th-century/panic-1907-fed), before Weimar, **1933**, and **1971**. It does not sell metal or forecast prices.",
    ],
  },
];


const goldRecall1933: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **5 April 1933**, Franklin Roosevelt signed Executive Order **6102**. Most gold coin, gold bullion, and gold certificates in private American hands had to be delivered to a Federal Reserve Bank, a member bank, or a Treasury agent — at **$20.67 an ounce**, by a deadline printed as **1 May**. The week before inauguration, gold had already been leaving banks. A national bank holiday had stopped ordinary payments. The order made the call formal.",
      "The Gold Reserve Act of **1934** then vested title to monetary gold in the United States and reset the official price from **$20.67** to **$35** an ounce. The public claim on gold at the old mint price was removed. Official gold became a Treasury asset, not circulating money. That is a different claim from the [wartime end of classical convertibility in 1914](/history/20th-century/classical-gold-standard-end), and a different claim from the [1971 close of the gold window](/history/20th-century/bretton-woods-nixon-1971) for foreign official holders.",
    ],
  },
  {
    heading: "What Order 6102 required",
    paragraphs: [
      "The order required persons in the United States to deliver most gold coin, gold bullion, and gold certificates. Payment was at the official price then in force: **$20.67 an ounce**. Later licenses and exemptions matter more than that May date alone.",
      "It did not take every ounce in private hands. Exceptions covered industry, profession, art, small personal amounts, and rare coins. Failure to deliver the monetary gold it covered was a federal offence. Compliance was incomplete; the legal requirement still stood. Title and the official price changed by statute the next January.",
    ],
  },
  {
    heading: "The bank holiday and the power to call gold",
    paragraphs: [
      "On **6 March 1933** a national bank holiday stopped ordinary payments. Gold exports and gold payments were constrained with the banks themselves. The Emergency Banking Act of **9 March 1933** ratified the holiday and gave the President broad power over gold, silver, and foreign exchange during the emergency.",
      "That March statute is the legal floor under Order 6102. The order used a power Congress had just written. Banks reopened under license. Gold that had been a customer’s coin became, by stages, a thing the Treasury could call in.",
      "In May, the Thomas Amendment to the Agricultural Adjustment Act added another lever: the President could reduce the gold content of the dollar by as much as fifty percent. The public still faced a delivery order at $20.67. The statute already contemplated a lighter gold dollar. That is not yet the $35 price.",
    ],
  },
  {
    heading: "Gold clauses, then the Gold Reserve Act",
    paragraphs: [
      "On **5 June 1933** a Joint Resolution of Congress declared gold clauses against public policy. A promise to pay in gold coin, or in a sum measured by gold, was to be discharged in legal tender. The Supreme Court later upheld the main line of that policy in the Gold Clause Cases of **1935**. Once gold could be called in, gold-denominated private contracts could not stand as a parallel unit.",
      "The Gold Reserve Act of **30 January 1934** vested title to monetary gold in the United States. Federal Reserve Banks transferred their gold to the Treasury and received gold certificates in exchange. The Treasury was forbidden to redeem currency in gold for the public. The President set a new official dollar price of **$35 an ounce** — a devaluation of the gold dollar by statute, not a market print.",
      "At $20.67, one dollar had been a known weight of fine gold. At $35, that weight was cut. The same official stock, marked to the new price, produced a book profit on the Treasury’s accounts. Part of that increment funded the Exchange Stabilization Fund. The metal did not multiply. Official gold is then a government asset at an official price — not a pile the public can test at a window.",
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
      "Whether that program worked as advertised is a later argument. The documentary sequence stays: holiday, order, delivery, gold-clause resolution, statute, new official price.",
    ],
  },
  {
    heading: "Not 1914, not 1971",
    paragraphs: [
      "The [classical gold standard](/history/20th-century/classical-gold-standard-end) ended as a working international system in **1914**, when war finance blocked gold shipment and protected notes from internal drains. That break is about convertibility and metal movement among countries. It is not a domestic recall of coin from American households.",
      "The **1933–34** sequence is a United States statute story. Private monetary gold rights are removed. Title to official gold vests in the Treasury. The official price moves from $20.67 to $35. Americans lose a public claim they had still possessed after **1914**.",
      "Bretton Woods, in **1944**, defined the dollar against gold at **$35** for official convertibility. Ordinary people in the United States did not redeem paper at the Treasury window. On **15 August 1971** the [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) closed the remaining window: foreign official holders could no longer present dollars and demand US gold at the posted price.",
      "Keep three different breaks distinct: **1914** ends classical convertibility under war. **1933–34** removes the US public claim and revalues official gold. **1971** ends official dollar–gold convertibility for foreign holders. The shared lesson — gold stops being a right you can test — is not identity of the three events.",
    ],
  },
  {
    heading: "After 1933",
    paragraphs: [
      "Americans could not legally hold monetary gold for decades. Licenses covered industry, dentistry, and art. The prohibition lasted until the end of **1974**, when statute again allowed citizens to hold gold bullion. Restoration of private holding did not restore a public convertibility contract. The $35 official price was already a bookkeeping fossil. The metal had a market. The dollar did not have a public gold window.",
      "Between **1934** and **1971** the official price still mattered for foreign official holders and for Treasury accounts. It did not matter as a price at which an American could walk in with a note and walk out with coin. This episode is a domestic recall and a revaluation for government accounting. [1971](/history/20th-century/bretton-woods-nixon-1971) is the close of an official foreign window built on the $35 price the **1934** Act had set.",
      "Read this as the middle turning point of the twentieth-century chapter: after classical gold’s wartime end, before Bretton Woods and **1971**. Statute took the public’s monetary gold rights and rewrote the official ounce. It did not invent paper money, sell metal, or forecast prices.",
    ],
  },
];

const whatIsSoundMoney: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A note can clear the till on Monday and still fail a harder test: can the issuer create more of it by decision alone? Sound money, on this site, is money whose supply cannot be expanded at will by a political authority. The unit is costly to produce, or it is bound by a contract that can actually be enforced — typically **redeemability**: a holder can present the note and demand a known weight of metal. The point is not nostalgia for coins. It is whether the unit of account stays honest over long periods.",
    ],
  },
  {
    heading: "A working definition",
    paragraphs: [
      "If a treasury or a central bank can create more units without a matching real cost, the money is not sound in this sense. It may still circulate. It may still be legal tender. Circulation is not the test. The test is whether the issuer can dilute the stock as a matter of policy.",
      "Historically the constraint was the cost of mining and minting gold and silver, or a redeemability rule that let holders present paper and take a known weight of metal. When that stop is gone, the unit can still work as a medium of exchange. It no longer passes the sound-money test used on this site.",
      "Three money jobs sit in the background of the definition: medium of exchange, unit of account, and store of value. Sound money is the claim that the third job is not optional packaging. A unit that clears today’s till but cannot be held across years without political permission to dilute it fails the store-of-value half of the idea.",
      "Related definitions: [hard money versus fiat](/sound-money/hard-money-vs-fiat), [inflation and purchasing power](/sound-money/inflation-purchasing-power), and [what “backed” means](/sound-money/backed-money). Cases and statutes live on [Sound Money History](/history).",
    ],
  },
  {
    heading: "Where the phrase comes from",
    paragraphs: [
      "Older English used “sound” in two related ways: the ring of a good coin (as against a counterfeit or a clipped piece), and sound as in healthy, not debased. Both senses survive. A sound coin rang true. A sound monetary standard did not quietly lighten the unit.",
      "Nineteenth-century writers used the phrase for metal standards and for convertibility rules that kept paper honest. Debates over free silver, bank notes, and gold clauses all leaned on that vocabulary: was the unit honest, or was it a political instrument dressed as money? This site keeps that older job — a name for a constrained unit — not a brand for every asset someone prefers.",
      "The vocabulary later migrated into textbooks, hard-money pamphlets, and modern glossaries. Along the way it picked up slogans. This site strips the slogan back to a testable claim about issuer discretion and cost of production.",
      "The phrase is also used in crypto glossaries. That is a different search. This site uses it for metal-constrained money and for the ideas needed to read the history. A token with a capped schedule may borrow the adjective; it is not the documentary object of these pages.",
    ],
  },
  {
    heading: "The test: issuer discretion",
    paragraphs: [
      "Ask one question of any unit: can the issuer expand the stock as policy, without a matching real cost or an enforceable redeemability contract? If yes, the money fails the sound-money test here — even when it is popular, even when it is legal tender, even when it once had a gold story attached.",
      "A gold coin can fail in practice through clipping, through a false mint ratio, or through a statute that ends public convertibility. Those are failures of the stop, not proofs that the definition was wrong. The definition names a constraint. It does not guarantee that every gold standard was well run.",
      "Paper that is redeemable on demand in a defined weight of metal can qualify while the contract holds. When the window closes, the same note becomes, for practical purposes, discretionary paper. That hinge is why [1914](/history/20th-century/classical-gold-standard-end) and [1971](/history/20th-century/bretton-woods-nixon-1971) matter to the vocabulary on these pages.",
      "The test is institutional, not aesthetic. A beautiful coin with a false weight fails. An ugly note with a working redeemability window can pass while the window is open. Look at the stop, not the branding on the face.",
    ],
  },
  {
    heading: "Metal, paper, and the stop",
    paragraphs: [
      "Metal entered money because markets needed a costly, recognisable, divisible stock — the story told on [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver). Stamps and statutes came later. Paper entered as a claim on metal or as a warehouse receipt before it became a free-standing unit.",
      "Sound money, on this site, is not “only coins forever.” It is the presence of a stop that the issuer cannot casually repeal for fiscal convenience. Mining cost is one stop. A public convertibility contract is another. A slogan that gold sits in a vault without a holder’s claim is not a stop — that confusion lives on [what “backed” means](/sound-money/backed-money).",
      "When history pages show wartime suspensions, gold recalls, or closed windows, they are documenting the stop being removed. The idea page only names what was removed.",
    ],
  },
  {
    heading: "The stop, not nostalgia",
    paragraphs: [
      "The definition does not claim that gold and silver never changed in price, or that every gold standard was well run. Metal money can be debased by clipping, by mint ratio tricks, and by suspending convertibility. Relative prices still move under a hard unit. Sound money constrains one source of a general rise in prices; it does not freeze bread against rent.",
      "These pages answer what the words mean — not a buying brief, not a campaign to restore metal money, and not a forecast. [Information versus advice](/sound-money/information-not-advice) is the standing line for the whole site.",
      "Weimar, Nixon, and the Fed belong in history, not pasted onto a definition. Mixing definitions with dated events makes both harder to follow.",
    ],
  },
  {
    heading: "Definitions first, then dates",
    paragraphs: [
      "These pages stay on meaning. [Hard money vs fiat](/sound-money/hard-money-vs-fiat) splits costly production from law-and-habit claims. [Inflation and purchasing power](/sound-money/inflation-purchasing-power) names the decline of what the unit buys. [What “backed” means](/sound-money/backed-money) separates redeemability from reserve slogans. The overview sits under [Sound Money](/sound-money).",
      "When the definition is clear and you want dates, leave these pages: [Weimar 1923](/history/20th-century/weimar-1923), the [1933 gold recall](/history/20th-century/1933-gold-recall), and the [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) are documentary articles, not glossary entries. [Sound Money History](/history) holds the chapters. Markets figures and practice pages answer different questions — meaning here, events there, figures and handling elsewhere.",
    ],
  },
];

const hardMoneyVsFiat: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The same engraved note can change category overnight when a convertibility window closes. Hard money is costly to produce. Fiat money is a claim created by a state or bank, accepted because of law and habit. Both can circulate. They fail in different ways. Circulation does not decide the category.",
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
      "Fiat can be well managed or badly managed. That is not the distinction on this page. The distinction is the stop. If the issuer can expand the stock as policy, the money is fiat in the language used here even when it once had a gold story attached.",
      "Legal tender rules, tax acceptance, and clearing habit keep fiat useful. Usefulness is not hardness. A convenient unit can still be discretionary paper. Central-bank independence, inflation targets, and fiscal rules are management tools inside fiat; they are not a return to mining-cost constraints.",
    ],
  },
  {
    heading: "Both can circulate",
    paragraphs: [
      "Circulation does not decide the category. People have used salt, cigarettes, paper notes, bank deposits, and gold coin. A circulating fiat unit can be more convenient than coin. A hard unit can be hoarded and disappear from the till. The question on this page is the constraint, not the popularity.",
      "When convertibility is suspended, a note that was a claim on metal becomes, for practical purposes, fiat. That is why [1914](/history/20th-century/classical-gold-standard-end) and [1971](/history/20th-century/bretton-woods-nixon-1971) matter to the names. The paper did not change color overnight. The stop did.",
      "Wartime greenbacks in the United States floated below gold until **resumption** brought the paper dollar back to **par** with gold in practice (one paper dollar again worth the same as one gold dollar in the market). That episode is war paper and statute, not a proof that “paper always equals metal.” Read it on [greenbacks and the Civil War](/history/america/greenbacks-civil-war).",
      "Gresham’s pattern — bad money driving good money out of the till when legal ratios misprice metals — is a circulation fact under hard regimes. It does not turn the undervalued metal into fiat. It shows that statute and market ratio can disagree while both metals remain costly to produce.",
    ],
  },
  {
    heading: "Where the line blurs",
    paragraphs: [
      "Gold-exchange systems, as after [Bretton Woods](/history/20th-century/bretton-woods-nixon-1971), backed some currencies with dollars and dollars with official gold — not with coin in the public’s hand. The vocabulary of “gold” survived longer than the public claim.",
      "Bank deposits that settle in fiat are claims on a banking system, not ounces. Covering a note issue with government bonds is a claim on a tax office, not metal backing. Those confusions belong next to [what “backed” means](/sound-money/backed-money).",
      "Do not confuse hard money with “assets I like,” or fiat with “money I dislike.” The line used here is production cost and issuer discretion, stated as definitions for reading history — not as a ranking of virtue. A well-run fiat regime can be stable for years. A mismanaged gold regime can still debase the coin.",
    ],
  },
  {
    heading: "Failures on each side",
    paragraphs: [
      "Hard money fails by debasement, by false mint ratios, by clipping, and by suspending convertibility. The metal can still exist while the unit stops being honest. **[Bimetallism](/history/silver/bimetallism)** — a system that makes both gold and silver legal money at a fixed mint ratio — shows how a legal ratio can push one metal out of circulation without abolishing either metal. The [Crime of 1873](/history/america/crime-of-1873) shows how statute can redefine which metal the unit points at.",
      "Fiat fails by over-issue relative to the goods and claims it is asked to measure, by broken fiscal stops, and by loss of confidence that collapses demand for balances. [Weimar 1923](/history/20th-century/weimar-1923) is the extreme documentary case on this site — a history page, not a definition rewrite.",
      "Both categories can finance wars, pay taxes, and clear trade. The category names the stop. The history pages name the episodes. [Inflation and purchasing power](/sound-money/inflation-purchasing-power) names what holders feel when the unit weakens under either label.",
    ],
  },
  {
    heading: "Costly production versus law and habit",
    paragraphs: [
      "This page only splits costly production from law-and-habit claims. Related definitions: [what is sound money?](/sound-money/what-is-sound-money), [inflation and purchasing power](/sound-money/inflation-purchasing-power), [what “backed” means](/sound-money/backed-money). The overview sits under [Sound Money](/sound-money).",
      "For events, leave these definitions. For dated market figures — including the mining-ratio clock that counts ounces leaving the ground — use [Markets](/markets) and the [gold–silver ratio](/markets/gold-silver-ratio). For handling metal, use [gold and silver in practice](/gold-silver). Keep Weimar, Nixon, and greenbacks as linked cases, not as pasted timelines that turn a definition into a history index.",
    ],
  },
];

const inflation: Section[] = [
  {
    heading: "",
    paragraphs: [
      "If the same hour of work buys less bread, less rent, or less metal over years, the unit has weakened — even when no wheelbarrow appears in the street. Inflation, here, is a decline in the purchasing power of the unit. Prices are the visible surface. Hyperinflation is a special case, not the definition.",
    ],
  },
  {
    heading: "What inflation is on this site",
    paragraphs: [
      "The underlying question is whether the stock of money is growing faster than the goods and claims it is asked to measure. An hour of work is a useful check. If the same hour buys less across years, the unit has weakened. That can happen with or without a dramatic crisis.",
      "Consumer-price indexes and wholesale indexes are measurement tools. They are not the definition. The definition is purchasing-power erosion of the unit. Indexes help document that erosion; they do not invent it. Basket choice, quality adjustments, and base years matter for reading a series — they do not rewrite the idea.",
      "This page stays on the idea. [Weimar 1923](/history/20th-century/weimar-1923) is the documentary extreme. Do not paste Weimar into every mild rise in a price index. Ordinary inflation and hyperinflation share a channel when money stock is discretionary; they do not share a severity or a timeline. A two-percent annual rise and a monthly fifty-percent rise are not the same documentary object.",
    ],
  },
  {
    heading: "Money stock and prices",
    paragraphs: [
      "Prices can rise because goods are scarce, because demand shifts, or because more units chase the same things. Hard-money writers emphasise the last channel. A complete account of any year needs all three. This site only needs the distinction: a unit that can be issued without cost makes the last channel a policy choice.",
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
      "Interest rates and bond prices can move with inflation expectations — a separate topic. Here the claim stays narrow: purchasing power of the unit is the object; prices are the surface.",
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
    heading: "Purchasing power, not a forecast",
    paragraphs: [
      "This page does not forecast next year’s index. It is not a recommendation to buy or sell metal, bonds, or anything else. [Information versus advice](/sound-money/information-not-advice) is the standing line.",
      "It does not claim that every price rise is “only printing.” Scarcity and demand shifts are real. The job here is to keep the money-stock channel visible when the unit can be issued without a stop.",
      "Sound money names the constraint on [what is sound money?](/sound-money/what-is-sound-money). Inflation names what happens to purchasing power when the unit weakens — under any regime. Dated metal figures live on [Markets](/markets), not here.",
    ],
  },
  {
    heading: "The idea, then the extreme case",
    paragraphs: [
      "Read with [hard money vs fiat](/sound-money/hard-money-vs-fiat) and [backed money](/sound-money/backed-money). For the extreme case, open [Weimar hyperinflation](/history/20th-century/weimar-1923). The overview sits under [Sound Money](/sound-money).",
      "History articles stay documentary. This page only fixes the idea: purchasing power of the unit, prices as surface, hyperinflation as a case. When a reader asks “what does inflation mean?” stay here. When they ask “what happened in 1923?” leave for history.",
    ],
  },
];

const backedMoney: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A vault photograph and a teller window are not the same claim. “Backed” is used loosely. A note that is legally redeemable in a defined weight of metal is one thing: a contract. A currency said to be “supported by” gold sitting in a vault, with no public claim on it, is another: a slogan, or at best a reserve-management fact.",
    ],
  },
  {
    heading: "A contract, or a slogan",
    paragraphs: [
      "Redeemability is testable. Either a holder can demand the metal at a known price, or they cannot. Reserves on a balance sheet, without that right, do not make the unit hard.",
      "A classical convertibility rule said: present the note, take the weight. The vault mattered because the public claim could empty it. A modern central-bank gold pile without that claim is a portfolio fact. It is not the same contract.",
      "When writers say a currency is “backed by the full faith and credit” of a government, they name a tax and legal-tender story. That can be a strong fiscal claim. It is not metal backing in the sense this page uses.",
      "The word “backed” sells confidence. This site asks for the mechanism. Without a presentment right, confidence is a story about the issuer — not a metal contract the holder can enforce at a teller window on a working day.",
    ],
  },
  {
    heading: "Three easy confusions",
    paragraphs: [
      "First: covering a note issue with government bonds is not metal backing. It is a claim on a tax office. Second: a gold-exchange standard, as after [Bretton Woods](/history/20th-century/bretton-woods-nixon-1971), backed some currencies with dollars and dollars with official gold — not with coin in the public’s hand. Third: the [Rentenmark](/history/20th-century/weimar-1923) was “backed” by mortgages. That was an accounting and political device to stop the press, not a pile of gold at the teller window.",
      "Official book value of U.S. gold — still carried at a statutory dollar price far from the market — is another trap for the word. The figure is an accounting convention. Read it on [official gold book value](/markets/official-gold-book-value), not as proof of public redeemability.",
      "Central-bank reserve totals answer “how much metal does the state hold?” They do not answer “can a private holder present notes and take metal?” Keep [central-bank gold reserves](/markets/central-bank-gold-reserves) under Markets. A rising reserve tonne chart can sit beside a pure fiat domestic unit without contradiction.",
    ],
  },
  {
    heading: "Redeemability in practice",
    paragraphs: [
      "Under a working gold or silver standard, banks and treasuries published rules for convertibility: which notes, which weights, which offices. The public test was the window. When the window closed for war or emergency, the note’s legal name might still say “gold.” The contract had changed.",
      "The [1933 U.S. gold recall](/history/20th-century/1933-gold-recall) shows the other side: even a gold dollar can have the public claim removed by statute. Citizens lost monetary gold rights years before the **1971** close of the gold window for foreign official holders.",
      "Bretton Woods then limited the remaining gold link to official holders at **$35** an ounce. Retail Americans were not walking into a Treasury window for coin. Calling that era “gold-backed money” without naming who could redeem is how the slogan swallows the contract.",
      "Warehouse receipts and early bank notes started as claims on deposited metal — the banks-and-paper opening story. When the receipt stops being payable in metal on demand, the instrument has changed category even if the engraved language lags behind.",
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
    heading: "Policing the word",
    paragraphs: [
      "This page only polices the word “backed.” It is not a brief to restore a gold window, not a forecast of exchange rates, and not investment advice. [Information versus advice](/sound-money/information-not-advice) is the standing line.",
      "Reserves are useful for states. This site only refuses to rename them as public convertibility when the public has no claim. A vault total without a presentment right is still useful accounting — it is not the older contract.",
      "[What is sound money?](/sound-money/what-is-sound-money) names the constraint. [Hard money vs fiat](/sound-money/hard-money-vs-fiat) names production cost.",
    ],
  },
  {
    heading: "Meaning first, then the statute cases",
    paragraphs: [
      "Read next with [what is sound money?](/sound-money/what-is-sound-money) and [hard money vs fiat](/sound-money/hard-money-vs-fiat). Dated cases: [1933 gold recall](/history/20th-century/1933-gold-recall), [Bretton Woods and Nixon 1971](/history/20th-century/bretton-woods-nixon-1971), [Weimar / Rentenmark](/history/20th-century/weimar-1923). The overview sits under [Sound Money](/sound-money).",
      "When a desk figure looks like “backing,” check whether the page is markets accounting or a redeemability story. Markets cover dated facts. Practice covers handling metal. Do not let a vault photo rewrite a contract that does not exist. A clear word for “backed” makes every later history page easier to read.",
    ],
  },
];
const barsVsCoins: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A bar and a coin can share the same metal, the same fineness, and the same troy-ounce arithmetic. What differs is the object: how the metal was formed, what stamp a stranger can read, and how much work it takes to turn the object back into a later bid. That is a comparison of form factor — fabrication, premium, and resale friction. It is an educational comparison. It is not a shop, and it is not a recommendation.",
      "The [Gold & Silver in Practice](/gold-silver) overview already names form as the first handling decision. The paragraphs below stay on that decision. They do not rank a product, name a quantity, or treat a mint design as a reason to hold metal.",
    ],
  },
  {
    heading: "What the comparison measures",
    paragraphs: [
      "The useful question is not which form wins. It is what the comparison is measuring. A poured kilo bar, a one-ounce minted bar, and a government bullion coin can all be .999 or .9999 fine gold or silver. They are not the same object in commerce. Weight and fineness describe the metal. Form describes the work done to the metal and the market that later has to accept it.",
      "Size is part of form. A large wholesale bar spreads fabrication and assay cost over many ounces. A one-ounce piece carries that cost on a single ounce. Calling the first “a bar” and the second “a coin” without naming the weight empties the comparison. Small minted bars sit closer to coins on cost and on how easily they change hands. Name the size, or the comparison is empty.",
      "Bullion and collectibles are different markets. A proof, a commemorative, or a scarce date is priced as an object with a story. These paragraphs stay on bullion: metal as metal, with a common stamp. Mixing the two is how a fabrication premium turns into a narrative price. Nothing here ranks collectibles, and nothing here says bullion is the right holding.",
    ],
  },
  {
    heading: "Minting, casting, pouring",
    paragraphs: [
      "Fabrication is the work that turns refined metal into a countable piece. The two common shop-floor paths are pouring — casting — and striking, which is minting. A poured bar is melted, poured into a mold, cooled, and stamped with weight, fineness, and a maker’s name. Larger bars often carry a serial. The economics are simple: one mold, one stamp, many ounces.",
      "A minted piece starts as a blank of known weight. Dies strike a design. Edges may be reeded. The mint’s job is repeatability: thousands of objects that match a published spec for diameter, thickness, and weight. That is more work per ounce than a pour. Dies wear. Inspection is tighter. The extra cost is not a moral grade. It is labor and equipment spread over fewer ounces.",
      "Government mints and private refiners both do this work. A sovereign coin usually carries a face value far below the metal and a design the public already knows — Maple Leaf, Krugerrand, Philharmonic, and the rest. A private bar usually carries a refiner’s stamp and, above a certain size, a serial. Neither path is “more metal.” The difference is how much fabrication was spent per ounce, and how much of that spend is later recoverable when a counterparty has to believe the stamp without melting the piece.",
    ],
  },
  {
    heading: "Premium as a price of form",
    paragraphs: [
      "Spot is a screen price for a paper ounce. The object in hand was poured or struck, shipped, insured, and offered by someone who must later bid for it. The gap is the [premium over spot](/gold-silver/premium-over-spot). It is a price of form and of liquidity. It is not automatically a trick, and it is not a tip.",
      "A large bar often prints a smaller premium per ounce because fabrication and assay were spread. A common bullion coin often prints a larger premium because more work sat on each ounce and because the design is easy to name. A thin product with a fat ask and a poor bid is expensive twice: once when it leaves a dealer, again when it returns. The number that matters later is the bid, not only the ask.",
      "Premiums move. Mint capacity, transport, and how common a stamp is all change the gap. A familiar coin can cheapen when many are offered and widen when they are scarce at retail. A large bar can sit near spot and still be awkward if the only later buyer wants a melt or a brand they do not know. Compare the gap to the form, not to a story about purity.",
    ],
  },
  {
    heading: "Recognition and resale friction",
    paragraphs: [
      "Recognition is the cost of convincing the next counterparty that the object is what the stamp says. A widely struck government coin is a type a stranger can name without a laboratory. That is why the extra fabrication often survives into the later bid: the next desk already knows the diameter, the design, and the usual fakes. A private bar is weight and a maker. If the maker is known and the serial can be checked, the friction is low. If the maker is unknown, or the bar is large enough that a desk would rather melt than inventory it, the friction rises.",
      "Resale friction is that cost in time and in haircut. Dividing a holding is part of it. Ten one-ounce coins can leave in ones. A single large bar cannot. Storage density runs the other way: bars pack more metal into less space. None of those facts picks a winner. They are the mechanics of later sale. A coin’s face value does not make it rent money in most places; the face is a legal label far below the metal.",
      "Counterfeits exist for popular coins and for small bars with famous stamps. That is an authenticity problem, not a form ranking. A common type is easier to check against a published spec and easier for a fake to copy. High-level filters — weight, dimensions, a counterparty who will still be there next year — belong with the other handling notes. The form comparison only needs the friction: recognition is a cost that some objects have already paid in fabrication.",
    ],
  },
  {
    heading: "Information only",
    paragraphs: [
      "The comparison measures form factor: how the metal was made, what that work costs per ounce, how the premium prices that work and that liquidity, and how much friction a later sale carries. It does not measure which object anyone ought to hold. It does not rank a dealer. It does not name a quantity.",
      "These paragraphs inform. They do not advise a purchase. If someone acts, they do so on their own judgment and, where needed, with a licensed adviser in their jurisdiction. Return to [Gold & Silver in Practice](/gold-silver) for the handling menu — form, premium, storage, authenticity, and starting size — as mechanics, not as a shop. If the next question is the gap between the screen and the object, open [premium over spot](/gold-silver/premium-over-spot).",
    ],
  },
];

const premiumOverSpot: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A dealing screen prints a price for an ounce that no one has to ship. The object on a counter was poured or struck, branded, insured, and offered by a desk that must later bid for it. The gap is the premium over spot — the price of form, brand, mint, and liquidity. It is a documentary measure of that markup. It is not a shopping tip, and it is not a forecast of which premiums are cheap.",
      "The [Gold & Silver in Practice](/gold-silver) overview already names premium as one handling fact among form, storage, authenticity, and starting size. These paragraphs stay on that fact. They do not rank a product.",
    ],
  },
  {
    heading: "What the premium measures",
    paragraphs: [
      "Spot is a reference print for a paper ounce. In the gold and silver trade the usual references are the London Bullion Market Association prices — the LBMA Gold Price and the LBMA Silver Price — and the nearby futures prints that move with them. Those numbers describe unallocated metal of a published specification. They do not describe a one-ounce coin in a flip, or a cast bar in a retail safe.",
      "The dealer’s ask is the price of a specific object: a named form, a named weight, a named stamp. Subtract the spot reference from that ask and the remainder is the premium. Both sides of the comparison can be .999 or .9999 fine. The premium measures the work and the market around the ounce, not a second chemistry.",
      "The later number is the bid: what a desk will pay for that same object today. An ask far above spot can still be a clean quote for a common coin. A bid close to spot can still be a poor exit if the object is awkward to name. The spread between ask and bid is part of the physical market. Reading only the ask is reading only half the tape.",
    ],
  },
  {
    heading: "Why a premium exists",
    paragraphs: [
      "Fabrication is the first cost. Refined metal must be poured or struck into a countable piece, stamped with weight and fineness, and — above a certain size — given a serial. Dies, molds, inspection, and assay do not disappear because the screen already has a number. A large bar spreads that work. A small piece concentrates it.",
      "Distribution is the second. The object has to leave a mint, sit in insured transit, and arrive at a desk that will still be there when someone wants the same stamp back. Freight, insurance, and capital tied up in transit are not in the LBMA print. They are in the ask.",
      "Inventory is the third. A dealer who shows a coin or a bar has already paid for it, or borrowed to hold it, and must carry the metal through a quiet week. The bid–ask is how that book is funded. A wide ask with a thin bid can mean the desk does not want more of that stamp. A tight pair can mean the stamp is easy to turn. Neither reading is a tip.",
      "Recognition is the fourth. A stamp a stranger can name without a laboratory is easier to bid for. A government mint mark, a well-known refiner, a common weight — those facts reduce the next counterparty’s checking cost. Brand and mint are part of liquidity: how quickly the object can change hands without a melt. Liquidity has a price. The premium is where that price often shows up.",
    ],
  },
  {
    heading: "Form and size",
    paragraphs: [
      "Form and size change the gap because they change how much work sits on each ounce and how easy the object is to name later. A wholesale bar can print a smaller premium per ounce because fabrication and assay were spread. A common bullion coin can print a larger one because more work sat on a single ounce and because the design is already in the public vocabulary. Small minted bars sit between those poles. The comparison of those objects lives on [gold bars vs coins](/gold-silver/bars-vs-coins). This page only needs the price consequence: the premium moves with the form.",
      "Silver often shows a larger percentage gap than gold for the same reason of scale. Striking or pouring a one-ounce silver piece costs labor that is a bigger share of a cheaper ounce. That is arithmetic of fabrication, not a verdict that silver is dear or gold is cheap.",
      "Premiums also move. Mint capacity, transport, and how common a stamp is all change the gap. A familiar coin can tighten when many are offered and widen when retail stock is thin. A large bar can sit near the London print and still be awkward if the only later buyer wants a melt or a brand they do not know. Those moves describe supply of objects, not a signal that the metal itself has become a bargain.",
    ],
  },
  {
    heading: "What the premium is not",
    paragraphs: [
      "The premium is not a measure of whether gold or silver is fairly valued. Spot already is a market print for the paper ounce. Adding fabrication and a dealer’s book does not produce a second, truer price of the metal. It produces the price of a particular object. Treating a low premium as proof that metal is cheap, or a high premium as proof that metal is dear, confuses the object with the ounce.",
      "The premium is not a timing tip. A narrow gap does not say it is time to acquire metal. A wide gap does not say it is time to wait. Those sentences would be advice. Premiums can be wide when objects are scarce at retail and tight when they are plentiful. That is inventory and mint runs — not a forecast of the next print, and not a rule for when a holding is cheap.",
      "The premium is not a morality tale about dealers, and not a ranking of brands. A large markup can be the ordinary cost of a small, well-known coin. A small markup can sit on a bar that is hard to move. Neither fact picks a winner. Neither fact names a shop. Compare the gap to the form and to the later bid — not to a story about purity, and not to a shopping list.",
    ],
  },
  {
    heading: "Information only",
    paragraphs: [
      "The premium over spot measures the markup of an object above a London or screen reference: form, brand, mint, and the liquidity of a physical book. It does not measure fair value of the metal. It does not say which gap is cheap.",
      "These paragraphs inform. They do not advise a purchase. If someone acts, they do so on their own judgment and, where needed, with a licensed adviser in their jurisdiction. Return to [Gold & Silver in Practice](/gold-silver) for the handling menu — form, premium, storage, authenticity, and starting size — as mechanics, not as a shop. If the next question is the object rather than the gap, open [gold bars vs coins](/gold-silver/bars-vs-coins).",
    ],
  },
];

const storage: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Metal that has already been poured or struck still has to sit somewhere. The place it sits is a menu of access, cost, and counterparty — home, an allocated vault, or an unallocated claim. Those three arrangements are not grades of the same product. They are different facts about who can reach the object, what it costs to keep it there, and whose books stand between the holder and the metal. This page describes that menu. It is not a recommendation.",
      "The [Gold & Silver in Practice](/gold-silver) overview already names storage as access versus cost versus counterparty. The paragraphs below stay on that trade-off. They do not pick a shelf.",
    ],
  },
  {
    heading: "Access, cost, counterparty",
    paragraphs: [
      "Access is how quickly the object can be reached and moved. Home access is immediate: the metal is in a room the household already occupies. Vault access is scheduled — hours, identification, a release. A claim that is only a line on a statement has no object to reach until a counterparty delivers one.",
      "Cost is what is paid, or not paid, to keep the arrangement in place. Home storage has no vault invoice. It still has a lock, a place, and the work of keeping both quiet. A vault invoices for space, insurance, and handling. An unallocated or pool account often invoices less because the operator is not setting aside a named bar for each name. A lower fee is a different product, not a verdict.",
      "Counterparty is whose failure stands between the holder and the metal. At home that counterparty is the household: fire, theft, a forgotten combination, a safe that advertises itself. In a vault it is the operator, the insurer, and the law of the place. On an unallocated book it is the claim itself — a promise to deliver metal, not a named pile. Storage is the trade-off among those three facts. It is not a score that picks a winner.",
    ],
  },
  {
    heading: "Home",
    paragraphs: [
      "Home storage keeps the metal in the household’s control. There is no vault fee and no auditor. The operational risk sits with the object: fire, flood, theft, a move that leaves a drawer behind, and the forgetfulness of a combination or a hiding place. A visible safe is also a sign. A hiding place no one else can find is also a place no one else can recover.",
      "Insurance, where it exists for household metal, is a contract with limits — not a second vault. Neighbours, visitors, and repair people change who knows the house. None of those facts is an argument against home storage, and none is an argument for a vault. They are the practical household risks that come with control.",
    ],
  },
  {
    heading: "Allocated and unallocated",
    paragraphs: [
      "Allocated storage, done as the word is used in the bullion trade, identifies specific bars or coins as belonging to a named holder. The metal is segregated. A bar list, a serial, a weight, a fineness, and a vault location should be nameable. Identifiable bars and coins are the test. If the paperwork cannot name the pieces, the word “allocated” is only a label.",
      "Unallocated storage, and the pool accounts that work the same way, is a claim on a stack. The operator owes metal of a published specification. The operator does not set aside a named bar for that name. The book is easier to run — ounces in, ounces out — and easier to confuse with a bank deposit. It is not a deposit of objects. If you cannot point to a bar list, you have a claim, not a stack.",
      "The two words are used loosely. A statement that says “allocated” and then lists only a weight is a claim with a flattering adjective. Segregation is the fact, not the adjective. Pooled metal can sit in a real vault and still not be anyone’s identifiable pile.",
    ],
  },
  {
    heading: "Documentation and segregation",
    paragraphs: [
      "The paperwork is where the menu becomes checkable. An allocated arrangement should say whose name is on the metal, where it sits, how it is identified, and what happens if the operator fails. Serials, bar lists, vault confirmations, and a statement of segregation are the ordinary documents. They make the claim inspectable; they do not make the metal safer.",
      "Segregation means the objects are not mixed into the operator’s inventory and not treated as a loan the operator can re-pledge at will. The contract either says that or it does not. Jurisdiction, the custodian, and the limits of any insurance sit in the same file. They are part of the counterparty, not a romance about security.",
    ],
  },
  {
    heading: "What storage is not",
    paragraphs: [
      "Storage is not a vendor list. No vault, no insurer, and no dealer is ranked here. A name that appears in a contract is a fact about that contract, not a recommendation of the name.",
      "Storage is not a search for a preferred place to keep metal, and not buy or sell advice. Home, allocated, and unallocated are different products. Calling one of them preferable would be a pick. This page does not pick. It does not say which arrangement is cheap, which is safe, or which a household ought to use. A vault invoice is not a reason to hold gold or silver.",
    ],
  },
  {
    heading: "Form and the place it sits",
    paragraphs: [
      "The object and the place talk to each other. A large wholesale bar is dense and awkward to move; a vault that handles bars by serial is built for that density. A common bullion coin is easier to recognise in a household drawer and easier to carry in ones. Small minted bars sit between those poles. The comparison of those objects — fabrication, premium, and resale friction — lives on [gold bars vs coins](/gold-silver/bars-vs-coins). The custody consequence is simpler: the form you hold and the place it sits are one decision in two sentences.",
      "Premium is part of that same split. A coin that paid more fabrication per ounce does not become a different metal at home. A bar that printed a smaller gap to spot does not become allocated because someone said the word. Form prices the work in the object. Storage prices the arrangement around it. A seller who will “store it for you” and never ship has only moved the custody question into another costume.",
    ],
  },
  {
    heading: "Information only",
    paragraphs: [
      "Storage measures access, cost, and counterparty: home control and household risk, identifiable allocated bars or coins, and an unallocated or pool claim that is not a stack. It does not measure which arrangement anyone ought to use. It does not rank a vendor.",
      "These paragraphs inform. They do not advise a purchase. If someone acts, they do so on their own judgment and, where needed, with a licensed adviser in their jurisdiction. Return to [Gold & Silver in Practice](/gold-silver) for the handling menu — form, premium, storage, authenticity, and starting size — as mechanics, not as a shop. If the next question is the object rather than the place, open [gold bars vs coins](/gold-silver/bars-vs-coins).",
    ],
  },
];

const spottingFakes: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Counterfeits exist, especially of popular coins and of small bars with famous stamps. Authenticity starts with a counterparty you can still find in a year, and with specs — weight and dimensions — checked against a published figure. It does not start with a home laboratory, and it is not a guarantee. These paragraphs are a filter for the obvious. They are not a test manual.",
      "The [Gold & Silver in Practice](/gold-silver) overview already names authenticity as a filter, not a laboratory course. The paragraphs below stay on that filter. They do not rank a dealer or name a gadget.",
    ],
  },
  {
    heading: "A filter, not a laboratory",
    paragraphs: [
      "A filter asks whether this object fails an obvious check against a known spec or a known desk. A laboratory asks whether the metal is what the stamp claims, to a stated tolerance, under a method that can damage a good piece if it is done badly. This page is the first of those two jobs. It is not the second.",
      "It is also not a shop. It does not name vendors. It does not tell anyone to acquire metal, or to refuse a piece on the strength of a blog paragraph. A piece that matches weight and dimensions can still be plated, filled, or struck from the wrong alloy. A piece that fails them is only a reason to stop treating the stamp as settled. The gap between those two facts is why a filter is not a guarantee.",
    ],
  },
  {
    heading: "Counterparty before gadgets",
    paragraphs: [
      "The first defence is the desk, not the scale. A counterparty you can still find in a year has a name, a place, and a history that can be checked without their own FAQ. They will still answer a question after the parcel arrives. A stranger at a table, a social-media account, or a one-week shopfront has none of that. Gadgets do not replace that fact.",
      "Common products help the same way. A widely struck government coin or a well-known small bar has a published weight, a published diameter, and a public vocabulary of usual copies. An obscure commemorative or a private pour with no serial has fewer published figures to check against. Popularity also attracts copies. That is not a ranking of products. It is why a common type is easier to filter and easier to fake.",
      "A later custody arrangement does not repair a weak desk. Metal that has already been accepted still has to sit somewhere — home, an allocated vault, or an unallocated claim. That menu of access, cost, and counterparty lives on [storing gold and silver](/gold-silver/storage). Authenticity is the prior filter: whose books you trusted, and whether the object matches the spec, before the place it sits is even a question.",
    ],
  },
  {
    heading: "Weight, dimensions, edge, reed, stamp",
    paragraphs: [
      "Weight is the cheapest published number. Mints and refiners print a troy weight and a tolerance. A scale that can resolve a tenth of a gram will show a piece that is light or heavy against that figure. A piece that is far off is not yet proven fake. It is no longer a piece you treat as settled on the stamp alone.",
      "Dimensions are the next published numbers: diameter, thickness, and sometimes a shape. A minted coin is a repeatable object. A poured bar is less so, but a famous small bar still has a length and a width in a public spec. A piece that is the right weight and the wrong size is a different alloy or a different object. The two checks together only remove the crude copies.",
      "The edge, the reeding, and the stamp are visual filters on the same idea. Reeding that is uneven, a stamp that is soft or crowded, a colour that is trying too hard — those are reasons to compare against a known genuine piece of the same product if one is at hand. Colour is the weakest of the four. Lighting and wear change it. None of these looks is conclusive. They are a filter for the obvious.",
    ],
  },
  {
    heading: "A price far below the market",
    paragraphs: [
      "A quote far below everyone else’s print is information. It is not a bargain, and it is not a reason to acquire metal. Spot is a screen price for a paper ounce. The object on a counter carries fabrication, shipping, and a dealer’s book. An ask that undercuts that whole field by a wide margin has to be explained by something other than generosity.",
      "The explanation may be a distressed sale, a thin market, or a stamp that is not the metal. This page does not decide which. It only names the reading: treat the outlier as a warning, not a bargain. A high ask is not proof of honesty. A low ask is not proof of a fake. Nothing here is buy or sell advice. The price is one more filter: a reason to stop, not a verdict.",
    ],
  },
  {
    heading: "When a professional is needed",
    paragraphs: [
      "A professional is needed when a fake would matter — when a loss would change a household’s or a firm’s books. Weight and a ruler do not close that case. A desk that will still be there next year also does not close it if the object itself is the question.",
      "Assay offices, refiners, and some dealers run tests that this page will not describe. Sending a piece out costs time and a fee. Keeping a doubtful piece without that step costs the risk that the stamp is theatre. A blog post is not that step. A scale is not that step. If a plated bar or a filled coin would matter, use a professional. No page on this site replaces that test.",
    ],
  },
  {
    heading: "What a filter does not teach",
    paragraphs: [
      "These paragraphs do not teach acid tests, X-ray fluorescence, ultrasound, specific-gravity baths, or magnet tricks as a home method. A wrong test can damage a good piece. A right test, done without a method, can still be misread. Publishing a how-to would turn a filter into a manual.",
      "The omission is deliberate. Popular coins and famous small bars attract copies that already know the amateur checks. A list of kitchen procedures would be incomplete the day it was posted. The professional’s job is the test. This page’s job is the prior filter: counterparty, specs, and the obvious fail."
    ],
  },
  {
    heading: "Information only",
    paragraphs: [
      "Authenticity starts with counterparty and specs — weight and dimensions — not a home laboratory and not a guarantee. The checks above are a filter for the obvious. They are not a test manual, not a vendor list, and not a promise that copies will all be found.",
      "These paragraphs inform. They do not advise a purchase. If someone acts, they do so on their own judgment and, where needed, with a licensed adviser in their jurisdiction. Return to [Gold & Silver in Practice](/gold-silver) for the handling menu — form, premium, storage, authenticity, and starting size — as mechanics, not as a shop. If the next question is where an accepted object sits, open [storing gold and silver](/gold-silver/storage).",
    ],
  },
];

const beginnerChecklist: Section[] = [
  {
    heading: "",
    paragraphs: [
      "First ounces are not a shop list. They are a process of four decisions — form, counterparty, storage location, documentation — a menu of mechanics, not a purchase recommendation. Skip any one and the others get expensive: an object with no place to sit, a drawer with no record, a quote from a desk that will not answer next year.",
      "The [Gold & Silver in Practice](/gold-silver) overview names starting size as that process. The paragraphs below stay on the four decisions. They do not name a quantity, rank a dealer, or treat a first holding as a reason to act.",
    ],
  },
  {
    heading: "Process instead of a shop list",
    paragraphs: [
      "A shop list is a set of objects. A process is a sequence. Form, then seller, then storage, then record-keeping — in that order, because each later decision is cheaper if the earlier one has already been named. The temptation is to start with a quote. A quote is the last number, not the first fact. A price without a form is a screen ounce. A parcel without a place is metal in transit toward a question you have not answered.",
      "Form is the object: bar or coin, and the size. Seller is the counterparty — a name, a place, a history that can be checked without their own FAQ. Storage is the place the object lives once it exists. Record-keeping is what you write down so the other three facts can still be found later: invoices, serials, a note of location that is not only the same drawer as the metal. None of those four steps is a reason to acquire metal.",
    ],
  },
  {
    heading: "Form and size before the price screen",
    paragraphs: [
      "The useful first question is not what the screen prints. It is what object you are even comparing to that print. A poured kilo, a one-ounce minted bar, and a government bullion coin can share a fineness and still not be the same object in commerce. Weight and fineness describe the metal. Form describes the work done to it. Size is part of form: a large bar spreads fabrication; a one-ounce piece carries that cost alone. Calling the first “a bar” and the second “a coin” without naming the weight empties the comparison.",
      "The comparison of those objects lives on [gold bars vs coins](/gold-silver/bars-vs-coins). This checklist only needs the sequence: name the form and the size before you look at a quote. Otherwise you are comparing a paper ounce to a story about purity. Bullion and collectibles are different markets. A proof or a scarce date is priced as an object with a story. These paragraphs stay on bullion: metal as metal, with a common stamp. Mixing the two is how a fabrication gap turns into a narrative price. Nothing here ranks collectibles.",
    ],
  },
  {
    heading: "Premium and bid/ask as facts, not tips",
    paragraphs: [
      "Spot is a screen price for a paper ounce. The object in hand was poured or struck, shipped, insured, and offered by someone who must later bid for it. The gap is the premium over spot — a price of form and of liquidity, not a tip, and not a forecast of which gaps are cheap.",
      "The later number is the bid: what a desk will pay for that same object today. Reading only the ask is reading only half the tape. A thin product with a fat ask and a poor bid is expensive twice. Premiums move with mint capacity and how common a stamp is. Those moves describe supply of objects, not a signal that metal has become a bargain. This page does not teach when a premium is cheap. It only names ask and bid as facts beside the form.",
    ],
  },
  {
    heading: "Choose storage location before shipping",
    paragraphs: [
      "Metal that has already been named still has to sit somewhere. The place it sits is a menu of access, cost, and counterparty — home, an allocated vault, or an unallocated claim. Choose that place before a parcel is in the post. A box on a van is not a storage decision. It is a delay until the object is already moving.",
      "Home keeps the metal near and the operational risk on the household. A vault is distant and on them. Allocated storage identifies specific bars or coins. Unallocated or pool accounts are a claim on a stack, not a named pile. The full menu lives on [storing gold and silver](/gold-silver/storage). This checklist only needs the sequence: name the place before the object ships. A seller who will “store it for you” and never ship has only moved the custody question into another costume. Documentation belongs here too — invoices, serials, a note of where the metal sits, written somewhere that is not only the same drawer. The paperwork does not make the metal safer. It makes the other three facts checkable.",
    ],
  },
  {
    heading: "Authenticity filters only as stop-rules",
    paragraphs: [
      "Counterfeits exist, especially of popular coins and of small bars with famous stamps. Authenticity on this page is a stop-rule, not a laboratory course. A filter asks whether this object fails an obvious check — a desk you cannot find next year, a weight or diameter that does not match a published spec, a quote far below everyone else’s print. Those are reasons to stop treating the stamp as settled. They are not a verdict, and not a home test manual.",
      "The first defence is the counterparty, not the scale. Gadgets do not replace a name and a history you can check without their own FAQ. Weight and dimensions catch the crude copies. A price far below the field is a warning, not a bargain. A piece that matches the spec can still be plated; a piece that fails it is only a reason to stop. A blog post does not replace a test. If a fake would matter, a professional is the next step. Spotting fakes is the longer filter for the obvious. Here the filter is only a reason to halt the process.",
    ],
  },
  {
    heading: "What this checklist is not",
    paragraphs: [
      "This checklist is not a dealer ranking. No name, no shop, and no “best” desk appears here. A counterparty is a fact about a process, not a recommended vendor. It is not a shopping list, and it is not buy or sell advice. It does not say anyone ought to acquire gold or silver. It does not name a quantity or a first product. “First ounces” names the process of four decisions. It is not a cue to act.",
      "It is also not a forecast. Nothing here says metal is cheap or dear, or that a premium is a signal. Treating form, seller, storage, and records as a reason to hold metal would turn a menu into a pitch.",
    ],
  },
  {
    heading: "Information only",
    paragraphs: [
      "The checklist measures a process: form, counterparty, storage location, and documentation. It does not measure which object anyone ought to hold. It does not rank a dealer. These paragraphs inform. They do not advise a purchase. If someone acts, they do so on their own judgment and, where needed, with a licensed adviser in their jurisdiction. Return to [Gold & Silver in Practice](/gold-silver) for the handling menu — form, premium, storage, authenticity, and starting size — as mechanics, not as a shop.",
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
      "In **1640**, Charles I seized merchants’ bullion stored in the Tower mint. The Crown needed cash for war. Depositors who thought a royal warehouse was safe learned that a sovereign can close a window. After the Restoration, London’s custom shifted toward goldsmiths — private keepers whose running-cash notes could be endorsed onward while the metal stayed put.",
      "Before public banks, paper money is a warehouse receipt: a claim check on deposited metal. Banking, on this site, starts when that paper pays a debt without the metal leaving the vault. Later articles on [banks and paper](/history/banks-paper) — Amsterdam, the Bank of England, [John Law](/history/banks-paper/john-law), [assignats](/history/banks-paper/assignats) — depend on that handoff. They are not this article, and they are not one another.",
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
      "That civic answer is older than London goldsmith notes. Barcelona’s Taula de Canvi dates from **1401**. Venice opened the Banco della Piazza di Rialto in **1587** after private-bank failures. Amsterdam’s Wisselbank, in **1609**, is this chapter’s model public deposit bank. Public tables and private goldsmiths are parallel answers to the same custody problem, not a single national ladder.",
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
      "That is the handoff this chapter is built on. The next article is the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam), the Wisselbank of **1609**. For a long time its reputation was that it did not lend — a florin banco as a claim on metal, not on a loan. Later concealed lending, made public in the **1780s–1790s**, belongs on that page. It is not 1720, and it is not this hinge.",
      "England’s later public machine was different again. The Bank of England, chartered in **1694**, was born as war finance with a note issue attached, not as a city giro table. Restriction in **1797** and resumption in the **1820s** wait on their own stop.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The order is European, not a single national ladder."],
    list: [
      "**1401.** Barcelona’s Taula de Canvi: an early civic deposit table.",
      "**1587.** Venice’s Banco della Piazza di Rialto, after private-bank failures.",
      "**1609.** Bank of Amsterdam: public deposit money for the bill market — the next page in this chapter.",
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
      "Keep the disasters on their own dates. John Law’s Mississippi System is **1720**: notes and shares under a French regency. Assignats are **1789–1796**: revolutionary paper with a land story. Germany’s mark in **1923** is a twentieth-century collapse after war, reparations, and extreme monetization. Similar mechanisms can teach; merging dates erases what changed. Weimar belongs in the twentieth-century chapter, not here.",
      "This article’s first step is the [banks and paper](/history/banks-paper) path: from private claim-check to the door of a public bank. Read the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) next. Then the Bank of England, then Law, then the assignats. Law’s **1720**, the assignats of the **1790s**, and Germany’s **1923** mark share a mechanism under different regimes — keep the dates.",
    ],
  },
];

const amsterdam: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On the Dam in the early seventeenth century, a bill drawn on Amsterdam could still turn into an argument over metal: foreign dollars, clipped pieces, worn domestic coin — which pile counted as payment? In **1609** the city opened a public answer. Mixed specie went into the Wisselbank. A standard bank guilder came out on the books. Large settlement moved by **giro** — a debit and a credit — while the vault stayed shut.",
      "That civic ledger sits between a warehouse receipt and later note-issuing banks. It follows [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks). The **agio** — the premium of bank money over street coin — is how the market priced the unit while the reputation held. Concealed lending is how the reputation later broke. It is not yet a note-issuing war bank, and it is not a modern central bank.",
    ],
  },
  {
    heading: "Why a civic ledger",
    paragraphs: [
      "Amsterdam was a bill-of-exchange market. Large debts among merchants were written on the city. Payment still meant assembling a pile of coin and haggling over quality. Private cashiers already kept money and made transfers. Failures and quality fights still reached the wholesale market.",
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
      "French occupation in **1795** found a bank that had already lost the trust that made giro as good as a full vault. Liquidation was completed in **1819**. That is a Dutch public-bank story: reputation, concealed fiscal use of the metal, then a quoted premium that died when the books were known. It is not **1720**. It is not the assignats.",
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
    heading: "One book the market had to use",
    paragraphs: [
      "Once a whole market pays on one public book, the issuer can be leaned on. The city can borrow against the vault and still call the credit a warehouse claim. Later machines in this chapter do not copy Amsterdam. They use the habit it taught: book or paper money as settlement, with metal in the background until it is not.",
      "The next dated article is the [Bank of England](/history/banks-paper/bank-of-england): a **1694** war-finance charter with a note issue attached, not a city giro table. Law’s Mississippi System is **1720**. Assignats are **1789–1796**. Germany’s mark in **1923** is a later parallel in another chapter. Similar mechanisms can teach; merging dates erases which claim failed.",
      "This page is Amsterdam’s civic ledger only — after [warehouses to public banks](/history/banks-paper/warehouses-to-public-banks), before London, Law, and the [assignats](/history/banks-paper/assignats). It is not Law’s **1720**, not the **1790s** land paper, and not Germany’s **1923** mark. The [banks and paper](/history/banks-paper) chapter keeps those dates apart.",
    ],
  },
];

const england: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In **February 1797**, the Bank of England stopped paying gold for its notes. An Order in Council closed the window; the Restriction Act made the suspension statute. The notes stayed in London’s tills. The pound kept its name. Holders could no longer test that name in coin at Threadneedle Street. Gold went to a premium against paper. That wartime stop is England’s own cycle — not Amsterdam’s giro table, not Law’s **1720**, and not the assignats.",
      "The machine that could close a window had been built for war a century earlier. In **1694**, during the Nine Years’ War, a private corporation was chartered to lend about **£1.2 million** to the Crown and to issue notes. It follows the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) on the banks-and-paper path: mixed coin and giro settlement there; here, a war loan with circulating paper attached.",
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
      "Cash payments did not return with the first peace. After Waterloo the question was when, and at what gold definition, the Bank would pay again. Peel’s Act of **1819** set a path back to convertibility. Full gold payout on notes resumed in **1821**. That is the resumption these pages mean when they say the **1820s**.",
      "The cycle is England’s own: suspend for war, keep the notes in use, resume later at the old metal unit. The shared lesson — a claim treated as money can lose its metal stop — is not identity of the events. This cycle is not **1720**, not the assignats, and not **1923**.",
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
    heading: "War finance with a note attached",
    paragraphs: [
      "Once notes are the ordinary cash of a capital, the issuer can be leaned on. A crown can borrow against a charter. Later machines in this chapter do not copy London. They use the habit it taught: a great state’s daily money can be a bank’s paper.",
      "Keep the disasters on their own dates. The next dated article is [John Law and the Mississippi Bubble](/history/banks-paper/john-law): a **1720** note-and-share System, not an English restriction. Assignats are **1789–1796**. Germany’s mark in **1923** is a later parallel in another chapter.",
      "This page is London’s war-finance charter only — after the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam), before Law and the [assignats](/history/banks-paper/assignats). It is not Law’s **1720**, not the **1790s** land paper, and not Germany’s **1923** mark. The [banks and paper](/history/banks-paper) chapter keeps those dates apart.",
    ],
  },
];

const assignats: Section[] = [
  {
    heading: "",
    paragraphs: [
      "By **1795**, shops in revolutionary France quoted two worlds: a paper price that moved by the week, and a coin price people preferred. Assignats — notes first issued in **1789–90**, supposedly retired by sales of seized church and émigré land — still filled drawers. They no longer filled the role of money. The Directory was already returning toward metal.",
      "The land was real. The promise was that paper would come back in as land went out. Quantity rose faster than retirement. This article follows [John Law and the Mississippi Bubble](/history/banks-paper/john-law): Law is **1720** and a royal bank-plus-company. Assignats are a later fiscal instrument with a land story. They are not the same event. They are not England’s Restriction. They are not Weimar.",
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
      "In **April 1792** France went to war. Armies, contractors, and the later levée en masse were paid in new assignats. Revolution at home and war abroad used the same press. The Terror’s **Maximum** (**1793–94**) tried to freeze prices in paper. Controls can hide a price for a time. They do not retire paper. After Thermidor the Maximum was repealed. The hidden price became the street price.",
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
    heading: "Land on the advertisement, press in the till",
    paragraphs: [
      "Once a state can pay in its own land-tied slip, the issuer can be leaned on. The Revolution needed a till. The wars needed a larger one. The biens nationaux were the advertised limit. The press was the actual one.",
      "Do not merge this episode with [John Law](/history/banks-paper/john-law). Law’s System fused a note-issuing bank with a colonial trading company under the Regency. Notes and Mississippi shares inflated together and broke in **1720**. Assignats have no Banque Royale and no rue Quincampoix. They are revolutionary state paper with a land story, issued decades later under a different regime and a different war.",
      "Do not merge it with the [Bank of England](/history/banks-paper/bank-of-england) Restriction either. In **1797** the Bank stopped paying gold for its notes. The notes stayed everyday English money. Resumption in the **1820s** brought the window back. Restriction is a suspend-and-resume cycle. Assignats are a paper that died. The dates sit near each other because the same wars strained both treasuries. The machines do not.",
      "Do not merge it with Germany’s **1923** hyperinflation. [Weimar](/history/20th-century/weimar-1923) was a twentieth-century collapse of a national paper mark — a later parallel, not the same event or the same century. The prior French episode is Law. Assignats are revolutionary land paper only. The [banks and paper](/history/banks-paper) chapter keeps those dates apart.",
    ],
  },
];

const whyMarkets: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Long before a punch hit electrum in western Anatolia, traders already settled large debts in gold and silver by weight. Cattle paid a fine inside a village that already priced in livestock. Grain paid a tax if the collector took it before it spoiled. Cowries moved along coasts. Copper and bronze filled the till for small change. Each of those goods worked in a range. For a payment that had to travel, wait, and still be accepted by a stranger, the range closed. Two metals kept winning.",
      "The selection is a trade result — durability, divisibility, scarcity and homogeneity, recognizability and portability — not a decree that invented money from nothing. A king can name a unit. He cannot force a distant counterparty to accept a unit that fails in the hand. Coinage is a later technology for verifying metal. The metal came first. The stamp came second.",
    ],
  },
  {
    heading: "Selection, not a decree",
    paragraphs: [
      "Many things have been money close to home. Cattle settle a fine inside a community that already prices in cattle. Grain can pay a tax at harvest if the collector takes it before it spoils. Cowries have moved along coasts. Copper and bronze served as everyday small change in more than one ancient economy. People use what is at hand when the trade is near and the counterparties already know the stuff.",
      "Those goods fail as distance and value rise. An ox cannot settle a debt two seas away. Grain rots. Shells vary. Copper is useful, therefore consumed, and bulky for a large payment. A unit that must travel, wait, and still be accepted by someone who did not raise it needs different properties.",
      "Gold and silver were already that unit by weight long before a punch hit electrum in western Anatolia. In Mesopotamia, silver measured accounts in shekels — a weight, not yet a coin. Ingots, rings, and cut pieces moved in the Levant as hacksilver: metal taken by the scale, not by a type. Egyptian gold did the same work at a higher value. Markets had a settlement metal. They did not wait for a king to invent money by stamping it.",
      "A statute can name what taxes will accept. That is power over a till, not proof that distant traders will hold the named thing overnight. When a unit fails in the hand — too heavy, too perishable, too easy to fake, too easy to plant — the trade finds another. Gold and silver kept being found.",
    ],
  },
  {
    heading: "What the properties actually do",
    paragraphs: [
      "The six properties are mechanisms. They are what a settlement good has to do when the other party is a stranger and the payment may sit for a year.",
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
      "A later age would write a legal ratio between the two and then watch Gresham’s pattern when the market ratio moved: the legally overvalued metal stays in the till; the other leaves. That fight is about metals already in use. Traders had the split before any republic named it. No decree created two jobs. The split is in the properties: the same durability and homogeneity, different value per weight.",
    ],
  },
  {
    heading: "Metal first, mint later",
    paragraphs: [
      "Payment by weight is slow. Scales, touchstones, and arguments about fineness are the cost of using anonymous metal in a market of strangers. A stamp is a claim about that weight and that fineness. It does not create the metal. It cuts the cost of checking it.",
      "Lydia, in western Anatolia, is the conventional starting point for struck coinage in the seventh and sixth centuries BCE. Early pieces were electrum — a gold–silver mix — with a punch and, later, a type. The invention is the mark, not the ore. You still need to trust the issuer. You no longer need to weigh every lump. [Lydia and the first coins](/history/ancient/lydia-first-coins) follows that punch from electrum to a typed piece.",
      "The stamp relocates trust. It does not abolish it. When the type is honest, coin travels farther than hacksilver. When the type is lightened, people return to the scale or hoard the better pieces. Greece’s silver network, Rome’s debasement, and a gold unit that keeps its weight come after the mint exists. They are not the origin of the metal as money.",
      "The Nixon gold-window close of **1971** is a late official hinge: a government stopped redeeming dollars in metal for foreign treasuries. It is not when gold and silver became money. A warehouse receipt is later still in another sense — paper that claims a pile of coin, after people already trusted the pile. Gold and silver were the stuff in the bag long before either machine existed.",
    ],
  },
  {
    heading: "After the metal, the mark",
    paragraphs: [
      "None of this is a pitch to hold metal. It is why traders kept returning to the same two. [Ancient money](/history/ancient) follows that order from here: settlement metal first, then a stamp that made the metal cheaper to check among strangers. [Lydia and the first coins](/history/ancient/lydia-first-coins) is where a punch hits electrum in western Anatolia. Coinage is verification. It is not the birth of monetary metal.",
    ],
  },
];

const lydia: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In a market of strangers in western Anatolia, a lump of electrum still invited an argument at the scale. Then a punch — later a recognisable type — let a buyer check the king’s mark instead of every grain. Lydia, in the **seventh and sixth centuries BCE**, is the conventional starting point for struck coinage. Croesus is the royal name later attached to separating gold and silver issues. The invention is not the ore. It is the stamp.",
      "Traders already settled in metal by weight — the selection told on [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver). Lydia cuts the cost of verifying that metal. It does not invent monetary gold and silver. It invents a cheaper check.",
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
      "Weights and denominations evolve. Small pieces settle everyday trade; larger pieces settle bigger claims. The metal remains the substance. The type is the shortcut. Numismatists still argue over how early blanks were cast or cut and how quickly a true reverse die appears. For these pages the monetary fact is enough: a repeatable mark turns anonymous alloy into a circulating claim.",
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
      "Metal first. Stamp second. That order is the hinge of this chapter. A king can accelerate adoption by requiring taxes in his coin. He cannot force a distant counterparty to treat a bad alloy as good gold. Markets still test the hand.",
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
      "**Next in this chapter:** [Greece: silver and trade](/history/ancient/greece-silver-trade) — Laurion and the Attic owl.",
    ],
  },
  {
    heading: "A cheaper check, not a new metal",
    paragraphs: [
      "None of this is a pitch to hold metal or to collect electrum. It is why a punch on already-monetary metal became the first struck-coin habit: a lower cost of checking what traders already used by weight. [ancient money](/history/ancient) keeps that order. [Why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) is the selection that came first. [Greece: silver and trade](/history/ancient/greece-silver-trade) is what a typed silver network looks like once the stamp exists.",
      "Keep **1971** and warehouse receipts as later hinges. Coinage is verification. It is not the birth of monetary metal, and it is not a modern convertibility window.",
    ],
  },
];

const greece: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A stranger in an Aegean port could accept a known Athenian owl faster than anonymous bullion. Greek city-states turned mines and mints into a commercial network. Athens’ **Laurion** silver and the owl **tetradrachm** are the familiar face: a recognised weight of silver that could move across the sea without a letter of introduction. Control of a mine was fiscal power. Laurion helped fund fleets and public life.",
      "The stamp already exists — [Lydia and the first coins](/history/ancient/lydia-first-coins) is that punch. Greece shows what a silver standard looks like when city mints and trade routes share a metal language. It is not a collector catalogue, and it is not a modern mining prospectus.",
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
      "Other Greek regions had mines too. Laurion’s fame is the Athens story: a democracy that coined its mountain into sea power and public pay. This chapter uses that story because the literary trail is thick, not because silver began in Attica.",
    ],
  },
  {
    heading: "The Attic owl tetradrachm",
    paragraphs: [
      "The Athenian tetradrachm — Athena on the obverse, owl and olive on the reverse — became a widely trusted silver piece of roughly **seventeen grams** in the Attic standard. Its type was stable enough that markets from the Aegean to the Near East recognised it. That recognition is monetary infrastructure.",
      "“Owl” is shorthand for a claim: this much silver, this fineness, this city’s reputation. Counterfeits existed; so did testing. The type still lowered verification cost compared with unmarked metal. Later imitations and eastern copies show how far the design traveled as a brand of silver weight.",
      "Do not confuse fame with monopoly. Other cities coined. Persian sigloi and later Alexander’s types enter the same silver world. The owl is the teaching example for this chapter because it ties mine, mint, and Mediterranean circulation in one object.",
      "Stability of type mattered as much as beauty. A merchant who saw the same Athena and owl year after year could price without a fresh assay on every bag. That is Lydia’s lesson at commercial scale.",
    ],
  },
  {
    heading: "Trade, tribute, and what silver did",
    paragraphs: [
      "Silver paid mercenaries, bought timber and grain, and settled balances between cities. Tribute under Athenian hegemony arrived in coin or was converted into it. Temples stored wealth; markets spent it. The metal moved as both public finance and private trade.",
      "Gold existed and mattered for large stores and eastern contacts, but everyday Greek monetary talk is silver talk. That matches the property split named on the opener: silver’s value-per-weight suited commercial scale; gold packed more value into less mass. Greece’s place on this site is the silver network.",
      "Ports from Sicily to the Black Sea priced cargoes in familiar silver weights. That shared language sits between Lydia’s stamp and Rome’s two-metal state: the Aegean taught strangers to settle in typed silver before one empire tried to run gold and silver together under fiscal stress.",
      "Centuries later, Potosí would flood Eurasia with silver at empire scale — same metal, different volume and century. Open [Potosí](/history/silver/potosi) for that flood; this page stays with Laurion and the Attic owl.",
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
      "**Next in this chapter:** [Rome: denarius and aureus](/history/ancient/rome-denarius-aureus) — two metals, then lightened silver.",
    ],
  },
  {
    heading: "A typed silver language",
    paragraphs: [
      "None of this is investment advice or a pitch to hold metal. It is how a mine and a type became a Mediterranean settlement language. [ancient money](/history/ancient) keeps the chapter order. [Lydia and the first coins](/history/ancient/lydia-first-coins) is the stamp that made typed silver possible. [Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus) is what happens when one state runs two metals under fiscal stress.",
      "A much later silver flood — different century, different volume — is [Potosí](/history/silver/potosi). Laurion and Cerro Rico are not the same mountain.",
    ],
  },
];

const rome: Section[] = [
  {
    heading: "",
    paragraphs: [
      "By the worst years of the third century, many coins that still passed as silver were bronze underneath. A wash kept a familiar face on the metal. A soldier paid in that piece held something that looked like the old money and spent like a token. Rome had not started there.",
      "For a long time the state ran two metals at once. The gold **aureus** covered large payments and stores. The silver **denarius** covered wages, taxes, and ordinary trade. Bronze, and orichalcum with it, covered the smallest change. Different metals for different sizes of payment.",
    ],
  },
  {
    heading: "A gold coin, a silver wage",
    paragraphs: [
      "The denarius had been Rome’s workhorse silver unit since the Republic. Under the early empire it was meant to stay a stable silver coin. Augustus and the Julio-Claudians inherited the weights and the tariffs and adjusted them. Pay tables still named how an aureus stood to a denarius. Traders and goldsmiths watched a different number: what the metal itself would bring.",
      "Soldiers’ pay, grain contracts, and tax demands all moved through these units. The coin in the hand was public finance.",
    ],
  },
  {
    heading: "The official rate and the metal",
    paragraphs: [
      "A treasury can post how many denarii equal an aureus. Traders and goldsmiths watch the price of the metal, which does not have to match the figure in the accounts. When silver is cheap against that official rate, silver coin is the easier thing to spend or to carry back to the mint, and gold tends to be hoarded or exported. When silver is dear, the sorting turns. The better metal leaves the street. The worse coin stays in the prices people actually pay. Later writers gave that pattern Gresham’s name.",
      "Rome went further than a drift between two honest coins. The mint watered the silver piece. The name on the type stayed. The metal inside it fell. A unit still called silver had become a token.",
    ],
  },
  {
    heading: "The silver thinned, then the wash",
    paragraphs: [
      "Silver fineness in the denarius declined through the first and second centuries. Wars, donatives — cash gifts from the emperor — and the ordinary cost of administration pressed the treasury. Nero’s reforms are the early famous change of weight and alloy. Later reigns took the same step. Each cut could be described as temporary. Together they left a lighter, baser denarius.",
      "In the third century the **antoninianus** spread as a common coin. On the tariff it was often treated as a double denarius. It was struck with a silver wash, and the silver in it fell sharply across the decades. By the worst years of the crisis many of these pieces were bronze cores under that wash. They looked like silver money. They behaved like tokens a paymaster could force into circulation.",
      "Prices counted in that coin rose. People discounted the bad pieces. When a bargain had to settle in something real, they asked for better coin or for bullion, and they changed what a contract would accept. What the state owed, reckoned in coin, had outrun the honest metal it could put into coin, so the mint stretched the stock it had. No single emperor emptied the standard in an afternoon. The lightening was repeated, reign after reign, because paying people now was what political survival required.",
      "Hoards from those years still mix better coins with worse ones. Markets sorted what the mint had blurred. Silver worth keeping went into bags. Washed pieces stayed in the price of the street.",
    ],
  },
  {
    heading: "Armies that had to be paid now",
    paragraphs: [
      "Civil war, the frontiers, and armies that answered to more than one commander arrived at the same table. Troops wanted coin before the next march. Usurpers and the emperors they challenged bought loyalty the same way. Metal from the mines, and metal taken as booty, did not show up on the payroll’s day. Inside a system that still counted pay in coin, the lever at hand was debasement: less silver in the piece that kept the old name.",
      "Aurelian, and reformers after him, tried to put the types back in order. Diocletian’s edict on prices, and the changes under Constantine, belong with that later repair. Before the repair, the split was already plain. Once the silver unit no longer meant what its face claimed, anyone who could choose moved toward gold, toward a piece they still recognised, or toward payment in kind. The aureus had sat above the denarius for large sums all along. As the silver coin failed, that gold piece was where trust in a large payment went.",
      "It is too neat to say the empire fell because prices rose, as if the mint were the only cause. Military strain, political strain, and the size of the population sat beside the treasury. What the coinage had become, in those years, was emergency finance. Silver took the loss.",
      "A soldier paid in the baser coin still needed real goods. The official tariff said one thing. The discount in the market said another. A metal coinage can fail as a unit of account on that gap alone. Nobody had to issue a paper note for it to happen.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Republic through the early empire.** The denarius is the silver workhorse. The aureus is the gold unit. Bronze is the small change.",
      "**First and second centuries.** The silver in the denarius is reduced by stages. A reform now and then resets expectations, and only for a while.",
      "**Third century.** The antoninianus spreads. Its silver content collapses. The pressure of military pay is sharpest here.",
      "**Late third century into the early fourth.** Attempts to restabilise the coinage. Gold’s place grows, as the large unit people will still trust.",
    ],
  },
  {
    heading: "The face and the metal",
    paragraphs: [
      "What was left was a name that had run ahead of the metal. Gold and silver had shared one state’s pay tables. Spending ran past what the mines and the booty could fill. The coin that was lightened was the silver one, until a wash over bronze stood where a denarius had been. The aureus was still the gold coin for a large payment, once silver no longer matched its face.",
    ],
  },
];

const solidus: Section[] = [
  {
    heading: "",
    paragraphs: [
      "After silver had been washed thin, pay tables and tax assessments still needed a piece strangers would trust overnight. Constantine’s **solidus**, in the early **fourth century**, was a gold coin of tightly held weight and fineness — roughly **1/72 of a Roman pound**, about **4.5 grams** in the classic account. It outlasted the western empire as the Byzantine **nomisma**. Continuity of weight is the story, not a romance of Rome and not a sequel about paper.",
      "It follows [Rome: denarius and aureus](/history/ancient/rome-denarius-aureus), where silver was lightened under fiscal pressure. The solidus is the contrasting hinge: a gold unit defended as a standard for centuries. It is not the [Nixon gold-window close](/history/20th-century/bretton-woods-nixon-1971), and it is not the birth of the warehouse receipt.",
    ],
  },
  {
    heading: "What Constantine changed",
    paragraphs: [
      "In the 310s Constantine’s minting settled on that gold solidus. Earlier tetrarchic gold experiments existed; Constantine’s type is the one that stuck as the empire’s premier gold unit.",
      "Gold had already been the metal of large payments when silver tokenised. The solidus made that hierarchy explicit and durable: accounts, taxes, and elite payments could reference a coin whose metal content was meant to be trusted. Bronze and reformed base issues still handled small change under other names.",
      "The political context is imperial consolidation after civil war. A stable gold unit supported a state that collected and spent across a huge territory. The documentary claim is monetary technique, not hagiography of Constantine.",
      "Pay tables that could name a reliable gold piece reduced the chaos left by silver that no longer meant what its type claimed. That administrative usefulness is why the solidus outlived slogans about restoration and became the empire’s reference gold coin for long stretches.",
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
      "This is not a claim that nothing changed in Byzantine fiscal history. It is a claim that the ancient chapter closes on metallic continuity, not the invention of modern central banking.",
      "Trade routes still needed a settlement metal strangers would accept overnight. The nomisma filled that role for long stretches because the mint’s promise stayed close to the metal in the hand — the opposite lesson from washed silver of the third century.",
    ],
  },
  {
    heading: "Coin, not a receipt",
    paragraphs: [
      "Continuity of a gold weight is not a romance that “Rome never fell because the solidus lived.” Western political collapse and eastern survival are separate facts from mint metrology. A gold standard can outlast a capital.",
      "A solidus is coin you can hold. A receipt is a claim on coin you are not holding. Warehouse receipts, public banks, and note issue live on [banks and paper](/history/banks-paper), beginning with [warehouses to public banks](/history/banks-paper/warehouses-to-public-banks). Keep them distinct.",
      "The Nixon shock ends a twentieth-century convertibility practice. It does not begin monetary history, and it does not explain Constantine’s mint. Keep that modern hinge in the twentieth-century chapter where it belongs.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Early 4th century:** Constantine’s solidus established as the premier gold unit (~1/72 lb).",
      "**4th–5th centuries:** Gold solidus frames elite and fiscal payments as silver’s third-century damage lingers in memory.",
      "**Byzantine centuries:** Nomisma continues the weight tradition; “bezant” fame in external trade language.",
      "Ancient coinage ends on metallic continuity; paper and banks open on the next chapter.",
      "Later hinges only, labeled elsewhere: assignats, Weimar, Fed, Nixon.",
    ],
  },
  {
    heading: "Weight held, then the ticket",
    paragraphs: [
      "None of this is a pitch to hold metal or to treat Byzantine types as an investment thesis. It is why a gold unit that keeps its weight became the ancient chapter’s closing hinge after silver was lightened. [ancient money](/history/ancient) keeps the chapter. [Rome: denarius and aureus](/history/ancient/rome-denarius-aureus) is the fiscal lightening that came first. [banks and paper](/history/banks-paper) is where the story leaves the coin for a ticket.",
      "[Sound Money History](/history) holds the five-chapter overview. The ancient path ends when the story leaves the coin for a ticket — not before. Weight held is the last metallic claim. Paper begins only after that coin.",
    ],
  },
];

const earlyUs: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **2 April 1792**, Congress wrote gold and silver into United States law and fixed a mint ratio of **fifteen to one**. The dollar could be paid in either metal at that legal relation. Which metal actually stayed in circulation was decided by the market ratio abroad, not by the preamble. When world prices moved, Gresham’s pattern appeared: the legally overvalued metal stayed; the other was exported or hoarded.",
      "This page is the opening statute of the America chapter — not a romance of founding fathers, and not a pitch to hold coin. It names the mint ratio, the Spanish silver that shaped the dollar, and the 1834 correction. The later silver fight of [1873](/history/america/crime-of-1873) and the gold statute of [1900](/history/america/road-back-gold) sit downstream.",
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
      "That continuity matters for these pages. Potosí silver and Spanish minting had already made a global silver coin. The United States adopted a dollar that traders already understood, then wrote gold beside it at a fixed ratio. [Bimetallism](/history/silver/bimetallism) carries the mechanics of two metals under one law. This page carries the American opening.",
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
      "**Later in this chapter:** Jackson’s bank war, greenbacks, the Coinage Act of 1873, resumption, Gold Standard Act 1900.",
    ],
  },
  {
    heading: "The statute, not a pitch",
    paragraphs: [
      "This page stays with the Coinage Act of **1792**, the Spanish dollar habit behind it, and the **1834** ratio correction — documentary mint arithmetic, not a collector guide and not a price target for either metal. The market decided which metal stayed; the statute only named the bridge.",
      "Next in this chapter: [Jackson and the Bank](/history/america/jackson-and-the-bank). The silver question’s loud American event is the [Crime of 1873](/history/america/crime-of-1873). For the coin that shaped the dollar: [piece of eight](/history/silver/piece-of-eight). The America overview sits under [America & gold/silver politics](/history/america).",
    ],
  },
];

const jackson: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In **1832**, Congress sent Andrew Jackson a bill to recharter the Second Bank of the United States years before the charter expired. He vetoed it. The veto message attacked the Bank as unconstitutional privilege and foreign-tinged power. The presidential campaign that autumn made the Bank the issue. Jackson won. The federal center would not be renewed on that bill.",
      "What followed was monetary politics in sequence: federal deposits moved to state “pet” banks, the Specie Circular of **1836** required gold and silver for public land, and the Panic of **1837** hit American banks and commerce. This is a documentary account of charter, veto, deposits, specie rule, and panic — not a sermon for or against central banks, and not the [Panic of 1907](/history/20th-century/panic-1907-fed). The Federal Reserve statute is **1913**. Jackson’s fight is an earlier American argument over who holds the government’s money and who issues the country’s paper.",
    ],
  },
  {
    heading: "What the Second Bank was",
    paragraphs: [
      "The First Bank of the United States (**1791–1811**) had already shown the pattern: a federal charter, mixed public and private ownership, note issue, and a role as the government’s fiscal agent. After the War of 1812, Congress chartered the Second Bank in **1816**, with a twenty-year term. Nicholas Biddle became its dominant president. The Bank’s notes circulated widely. It also restrained state banks by presenting their notes for specie.",
      "Supporters called that discipline sound. Opponents called it a monopoly over credit and politics. The Bank was not a modern central bank with a dual mandate and open-market operations. It was a privileged corporation with a federal seal, a large capital, and the Treasury’s account. That was enough to make it a national issue.",
      "By the early **1830s** the charter’s end was in sight. Biddle and allies pressed for early recharter. Jackson and the Democratic coalition framed the Bank as a threat to equal rights and hard money. The fight was about power and specie as much as about balance sheets.",
    ],
  },
  {
    heading: "The 1832 veto and the election",
    paragraphs: [
      "Congress passed a recharter bill in **1832**, well before the **1836** expiry. Jackson’s veto message was politics as much as jurisprudence. It made the Bank the issue of the **1832** presidential campaign.",
      "Jackson won reelection. The veto stood. Biddle still ran the existing institution until the charter ran out, but the political verdict had landed: the federal center would not be renewed by that Congress and that President.",
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
      "In **1837** a financial panic hit American banks and commerce. Specie payments were suspended in many places. Failures spread. The causes were several: international credit conditions, cotton prices, land speculation, and the domestic banking scramble after the Bank war. This account does not pick a single villain. It notes that the panic followed the deposit and specie sequence by months, not decades.",
      "The Second Bank’s federal charter expired. Biddle’s institution continued for a time under a Pennsylvania charter and then failed in the early **1840s**. The United States entered a long stretch without a federally chartered central bank. The Independent Treasury system later tried to keep federal money out of banks altogether. State banks and note chaos filled the gap until the Civil War’s national banking acts — and until the [greenback](/history/america/greenbacks-civil-war) war finance of the **1860s**.",
      "The next time a national liquidity panic forces a central-bank debate at full volume is [1907](/history/20th-century/panic-1907-fed). That episode creates the Fed. It does not replay Jackson’s veto. Keep the centuries labeled.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["Veto first, then deposits, then specie, then panic."],
    list: [
      "**1816:** Second Bank of the United States chartered for twenty years.",
      "**1832:** Congress passes recharter; Jackson vetoes; Jackson reelected with the Bank as a campaign issue.",
      "**1833–34:** Federal deposits removed from the Bank to state “pet” banks.",
      "**1836:** Specie Circular — gold and silver required for public-land purchases; Bank’s federal charter expires.",
      "**1837:** Panic; widespread suspension of specie payments.",
      "**1913 (later chapter):** Federal Reserve Act — after the Panic of 1907, not as a sequel to Jackson’s veto message.",
    ],
  },
  {
    heading: "A bank war, not a Fed brief",
    paragraphs: [
      "Charter, veto, pet banks, Specie Circular, and the Panic of **1837** are the spine — not investment advice, not a brief to “end the Fed,” and not a biography of Jackson. Early unit arithmetic sits under [early U.S. coinage](/history/america/early-us-coinage). War paper sits under [greenbacks and the Civil War](/history/america/greenbacks-civil-war). The later liquidity hinge is the [Panic of 1907](/history/20th-century/panic-1907-fed).",
    ],
  },
];

const greenbacks: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In **February 1862**, Congress authorized United States Notes — greenbacks — as legal tender for most public and private debts. Banks had already suspended specie payments at the end of **1861**. Gold still priced customs and foreign exchange. In New York a gold market posted the premium of coin over paper. When Union fortunes looked dark, that premium widened.",
      "Greenbacks were a suspension of the metallic dollar for war finance, not a theory that paper had replaced metal forever. After Appomattox the fight shifted: whether to contract the greenback stock, whether to resume gold payments, and at what parity. The Specie Payment Resumption Act of **1875** set a date — **1 January 1879**. Issue, premium, and the road to that date are the spine here. The [Crime of 1873](/history/america/crime-of-1873) and the [Gold Standard Act of 1900](/history/america/road-back-gold) are neighbors, not the same statute.",
    ],
  },
  {
    heading: "Why the Union issued greenbacks",
    paragraphs: [
      "War spending outran ordinary tax and bond finance. The Treasury needed a currency the public and contractors would accept when gold coin was scarce in daily Union payments. Congress authorized United States Notes — demand notes at first, then the familiar green-backed legal-tender notes.",
      "Legal tender meant creditors had to accept the notes for most public and private debts, with exceptions such as customs duties and interest on some bonds, which stayed closer to gold. The notes were obligations of the United States. They were not warehouse receipts for a named pile of coin. Convertibility into gold was suspended for the duration of the emergency.",
      "The Confederacy issued its own flood of paper; that story ends in collapse with the regime. This account stays with the Union greenback — the paper that survived the war and then dominated peacetime politics.",
    ],
  },
  {
    heading: "Gold premium and the New York gold room",
    paragraphs: [
      "Once greenbacks were legal tender and gold was still the international and customs metal, two prices appeared. Goods and contracts quoted in “currency” (paper) diverged from prices in gold. In New York a gold market — informal, then more organized — posted the premium of gold over greenbacks.",
      "When Union fortunes looked dark, the premium widened: more greenbacks were needed to buy a gold dollar. When military and fiscal news improved, the premium narrowed. Importers who needed gold for duties watched that market daily. Ordinary wage earners felt the premium as higher currency prices for goods tied to gold or imports.",
      "The premium is the documentary proof that greenbacks were not “as good as gold” during the war. They were a forced paper unit beside a gold unit that still priced customs and foreign exchange. [Inflation as purchasing-power erosion](/sound-money/inflation-purchasing-power) is the definition page for that squeeze. This article is the wartime instrument.",
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
      "Resumption did not happen overnight in **1865**. It took a decade of politics, surplus fiscal conditions in some years, and a Treasury that actually built a gold reserve. Opponents tried to repeal or soften the commitment; the date held. When the day came, greenbacks traded at par with gold; the wartime premium was gone. The paper note became again a claim on coin at a one-to-one practical rate.",
      "Full legal definition of the dollar as a gold unit waited until the [Gold Standard Act of 1900](/history/america/road-back-gold). Resumption was the operational hinge. The **1900** statute was the label. Between them sat the silver fight that begins with the [Coinage Act of 1873](/history/america/crime-of-1873).",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["War paper first, then the dated path back to specie."],
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
    heading: "War paper, then a dated return",
    paragraphs: [
      "Greenbacks as inconvertible war paper, a gold premium, and a path back to specie on **1 January 1879** are the claim — not a price target and not a tip to hold paper or metal. Earlier bank politics sit under [Jackson and the Bank](/history/america/jackson-and-the-bank). The next silver statute is the [Crime of 1873](/history/america/crime-of-1873). The related definition is [inflation and purchasing power](/sound-money/inflation-purchasing-power).",
    ],
  },
];

const crime1873: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **12 February 1873**, Congress revised the Mint’s list of coins and left the standard silver dollar off the free-coinage roster. Gold became the effective standard for the dollar’s large unit. Subsidiary silver — dimes, quarters, halves — continued under regulated coinage. The statute did not abolish silver metal. It ended free coinage of the old silver dollar as a full legal peer of gold.",
      "In later agrarian politics that omission became the **“Crime of 1873”**: a conspiracy to demonetize silver and enrich creditors. In the Treasury’s and many economists’ telling it was a clarification toward gold, aligned with Europe’s move after Germany’s gold shift in the early 1870s. The documentary fact is the Coinage Act of **1873** and its list. The name “crime” is the political memory that organized a generation of American fight.",
    ],
  },
  {
    heading: "Why silver was already under pressure",
    paragraphs: [
      "World silver supply rose in the late nineteenth century — Nevada’s Comstock and other Western mines among the sources — while several European states moved toward gold. Germany’s shift after unification dumped silver onto the market. The gold–silver market ratio moved away from older mint habits. Silver’s gold price fell.",
      "The United States had already tilted gold-friendlier in [1834](/history/america/early-us-coinage). Greenback war finance had suspended specie. By the early 1870s, officials drafting a mint revision treated the silver dollar as a coin little used in large payments and awkward beside a gold unit. Dropping free coinage of that dollar looked, to them, like housekeeping.",
      "Housekeeping in a mint statute can still reprice every farm debt. When silver could no longer be coined freely into full-weight dollars, silver producers lost a floor, and debtors lost a path to inflate the unit with cheaper metal. That is why a quiet omission became a loud crime in memory. The general mechanism of two metals under one law sits under [bimetallism](/history/silver/bimetallism); this page stays with the American statute and the fight that followed.",
    ],
  },
  {
    heading: "Crime or clarification?",
    paragraphs: [
      "The “crime” charge held that the Act was slipped through without honest debate — that silver’s friends in Congress did not see the demonetization coming. Historians still argue how open the drafting was and how much Western silver interests understood at the time. What is not in dispute: the standard silver dollar left the free-coinage list, and gold’s primacy hardened.",
      "The clarification charge held that the United States was joining a gold-standard world, that bimetallism at a stale ratio invited arbitrage, and that subsidiary silver was enough for small change. Europe’s gold turn is real context. It does not erase the domestic distributional fight that followed.",
      "These pages do not referee the moral word “crime.” They record the Act, the nickname, and the politics that nickname organized. Readers who want the mint-ratio arithmetic open [bimetallism](/history/silver/bimetallism). Readers who want the American hinge stay here, then walk [America & gold/silver politics](/history/america) for the chapter arc.",
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
    paragraphs: ["The nickname came later. The Mint list changed first."],
    list: [
      "**1871–73:** Germany and others move toward gold; world silver price under pressure.",
      "**12 February 1873:** Coinage Act omits free coinage of the standard silver dollar.",
      "**1878:** Bland–Allison Act — limited Treasury silver purchases and coinage.",
      "**1890:** Sherman Silver Purchase Act — larger silver purchases; later linked to gold-reserve strain.",
      "**1893:** Sherman Act repealed amid crisis; gold standard politics intensify.",
      "**1896:** Bryan’s free-silver campaign; gold side wins the election.",
      "**1900:** Gold Standard Act — dollar defined in gold (next page in this chapter).",
    ],
  },
  {
    heading: "After the nickname",
    paragraphs: [
      "The Act, the “crime” label, free silver, and Bryan are the documentary spine of this page — not a bullion pitch, not a remonetization brief, and not a target for today’s metal ratio. Earlier unit arithmetic sits under [early U.S. coinage](/history/america/early-us-coinage). War paper sits under [greenbacks](/history/america/greenbacks-civil-war). The road after the silver fight is [resumption and the 1900 gold statute](/history/america/road-back-gold).",
      "Return to [America & gold/silver politics](/history/america) for the chapter overview, or open [bimetallism](/history/silver/bimetallism) when the next question is the mint-ratio machine rather than the American statute fight.",
    ],
  },
];

const roadBack: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On the morning of **1 January 1879**, a United States Note presented at a Treasury window could again be paid in gold at face. The wartime premium that had marked greenbacks below coin was gone. Paper and metal met at par in the markets that mattered. The country was back on specie payments in practice — twenty-one years after Congress had first flooded the Union with legal-tender paper for the Civil War.",
      "The full legal sentence came later. The **Gold Standard Act of 1900** defined the dollar as **25.8 grains** of gold nine-tenths fine. Between those two dates sat silver-purchase laws that strained the gold reserve, a panic year that forced repeal, and a presidential campaign that nearly put free silver in the White House. Resumption opened the road. The **1900** statute named where it ended.",
    ],
  },
  {
    heading: "The date Congress named",
    paragraphs: [
      "The Specie Payment Resumption Act of **1875** had set the day. Redemption of United States Notes in coin would begin on and after **1 January 1879**. That commitment alone did not close the premium. The Treasury had to build a gold reserve, and politics had to leave the date standing when opponents tried to soften or repeal it.",
      "When the day arrived, greenbacks traded at par with gold. The paper note was again a convenient claim on the metallic dollar, not a rival unit trading at a discount. That is an operational gold standard for the government’s notes — coin for paper at face, in the windows that counted. It is not yet the full statutory definition of **1900**. Redemption worked in practice before the law wrote the grain weight into the code.",
      "Resumption sat beside the silver question from the start. Bland–Allison purchases, and later Sherman purchases, meant the Treasury dealt in silver while promising gold. A note at par with gold in January could still face a run if silver policy later looked like a second unit fighting the first. Credibility rested on the gold reserve, not on the nickname of the standard.",
    ],
  },
  {
    heading: "Silver bought, gold drained",
    paragraphs: [
      "Bland–Allison (**1878**) and Sherman (**1890**) required silver purchases that expanded silver coin or silver-backed notes. Holders who doubted the Treasury’s gold line could present claims and drain gold. In the early **1890s** gold outflows and reserve scares were ordinary public-finance news. The panic year **1893** brought repeal of the Sherman purchase duty.",
      "The Cleveland administrations’ gold-bond sales and defense of the reserve belong on this road. So does the political cost. Defenders of gold looked like Wall Street’s allies. Silver advocates looked like inflationists to the gold camp. The mechanism was simpler than the slogans. A Treasury that buys silver and pays gold needs enough gold — or enough credibility — to survive the presentation of notes.",
      "Bryan’s **1896** defeat reduced the odds of free silver at sixteen to one. New gold supplies in the late 1890s — large finds that expanded the world gold stock — eased monetary stringency. The political path cleared for a statute that said gold without the same fear of an immediate silver flood. The Crime of 1873 carried the nickname and the free-silver demand. The reserve arithmetic that made a gold statute feel safe enough to pass is the rest of this story.",
    ],
  },
  {
    heading: "The Sound Money Law of 1900",
    paragraphs: [
      "The Gold Standard Act of **14 March 1900** defined the dollar as **25.8 grains** of gold nine-tenths fine — the familiar gold-dollar parity — and put the commitment in clear statutory language. Silver remained in subsidiary and limited roles. After decades of greenback argument and silver argument, the unit of the dollar was gold in law.",
      "A gold standard in that sense is a legal definition and a redemption practice for the government’s money. It is not a promise that banks never fail, or that prices never move. International gold-standard practice among major economies was already the late-nineteenth-century norm. The Act aligned the United States’ legal text with that order. Domestic politics had spent a generation asking whether silver would share the stage. The Act answered with gold as the definition of the dollar.",
    ],
    figure: {
      src: "/images/history/america/road-back-gold-1900-cartoon.jpg",
      alt: "1900 Puck cartoon “The Survival of the Fittest”: a gold-standard gladiator with a “Sound Money Law of 1900” sword stands over a silver-standard fighter whose “16 TO 1” sword is broken.",
      caption:
        "“The Survival of the Fittest” (Puck, 1900) — gold standard after the Sound Money Law of 1900; silver’s “16 to 1” broken.",
      credit: "Public domain — copyright 1900, Keppler & Schwarzmann; term expired.",
      width: 1280,
      height: 1369,
    },
  },
  {
    heading: "The door to 1907",
    paragraphs: [
      "The gold statute closes the nineteenth-century fight over the American unit. The Federal Reserve Act, the 1933 gold recall, and the later close of the gold window belong later, with their own mechanisms and dates.",
      "Greenbacks were back at par. Silver politics had been contained enough for a gold definition in statute. Then the story stops. The Panic of **1907** is about trust-company plumbing and a missing lender of last resort — not a replay of the Mint list of 1873. The public central bank Jackson’s century did not build arrives afterward, in **1913**.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1875.** Specie Payment Resumption Act; redemption date set for 1879.",
      "**1878–90.** Bland–Allison and Sherman silver-purchase frameworks.",
      "**1 January 1879.** Specie payments resume; greenbacks at par with gold.",
      "**1893.** Panic; Sherman Silver Purchase Act repealed.",
      "**1896.** Bryan loses; gold-standard politics strengthened.",
      "**14 March 1900.** Gold Standard Act; dollar defined in gold.",
      "**1907 into 1913.** Panic of 1907; Federal Reserve Act follows.",
    ],
  },
  {
    heading: "Gold in the statute, then the handoff",
    paragraphs: [
      "From resumption in **1879** to the grain weight written in **1900**, the American dollar returned to gold payments and then to a gold definition in law. Silver had contested that road for a generation. The statute closed the contest for the unit. What came next was a different crisis — liquidity in **1907**, and a public central bank the nineteenth-century republic had not built.",
    ],
  },
];

const pieceOfEight: Section[] = [
  {
    heading: "",
    paragraphs: [
      "For more than two centuries, merchants across the Atlantic and Pacific priced cargo in one familiar silver piece: the Spanish dollar — the eight-real coin, the **piece of eight**. Sailors cut it into bits for change. Asian markets took it as settlement metal. When the early United States named a dollar in the **1790s**, this coin was already in the room.",
      "The claim here is narrow and documentary. One typed silver piece of roughly **twenty-seven grams** became a global unit of account long before any modern reserve currency. The hole in the ground that fed so much of that metal is [Potosí](/history/silver/potosi). The American mint arithmetic that inherited the dollar habit is [early U.S. coinage](/history/america/early-us-coinage). The chapter overview sits under [silver in history](/history/silver).",
    ],
  },
  {
    heading: "Eight reales, one recognisable weight",
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
    heading: "Why a typed silver piece travelled",
    paragraphs: [
      "A global coin is not a metaphor. It is a repeated claim about weight and fineness that markets actually use. The piece of eight combined three facts: Spanish American mines supplied silver at empire scale; colonial and metropolitan mints stamped a recognisable type; and commercial routes already priced goods in that type.",
      "Trust still mattered. Clipped, plugged, and counterfeit pieces forced scales and assays. Familiarity lowered the cost of checking; it did not abolish checking. When a mint lightened the coin or a counterparty doubted the type, Gresham’s pattern and discounting returned. The stamp is a claim. Claims can fail. The piece of eight’s success was that, for long stretches, the claim held across oceans.",
      "Keep the stories labeled. [Greece’s owl](/history/ancient/greece-silver-trade) is an earlier silver network at Mediterranean scale. Potosí is early-modern volume. The piece of eight is the coin face of that volume. Laurion and the Spanish dollar are different centuries and different volumes.",
    ],
  },
  {
    heading: "The United States inherits the habit",
    paragraphs: [
      "The [Coinage Act of 1792](/history/america/early-us-coinage) defined a silver dollar whose weight sat close to the Spanish piece Americans already used. Hamilton and Congress did not invent the dollar from blank paper. They wrote a statute beside a commercial habit. Gold sat beside silver at a fixed mint ratio — the opening of American [bimetallism](/history/silver/bimetallism).",
      "That continuity is the hinge between this chapter and the America path. Spanish silver had already made a global coin. The United States adopted a unit traders understood, then fought for a century over whether gold, silver, or paper would rule the large unit. The piece of eight is the inherited face. The Crime of 1873 is a later American statute fight.",
      "After independence, Spanish dollars continued to circulate in the United States for decades. Statute and mint output took time to replace a coin the Atlantic already knew. The documentary point is inheritance, not nostalgia.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The type’s job was empire-scale settlement before national coinages finished replacing it."],
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
    heading: "One coin, several later fights",
    paragraphs: [
      "This page is the Spanish dollar as a circulating global silver unit — not a collector catalogue, not a bullion pitch, and not a claim that one historical coin should be remonetized. The mountain that fed so much of the metal is [Potosí](/history/silver/potosi). American inheritance is [early U.S. coinage](/history/america/early-us-coinage). Two-metal mechanics live under [bimetallism](/history/silver/bimetallism). Keep **1980** and industrial silver on their own pages.",
      "Return to [silver in history](/history/silver) when you want the chapter’s full arc rather than this one coin face.",
    ],
  },
];

const silverThursday: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **27 March 1980** — Silver Thursday — silver futures crashed as liquidation hit a market already strained by higher margins and limits on new long positions. Months earlier, in January, the nearby extreme used on this site’s desk had printed near **$49.45** an ounce. The January market was the run. March was the unwind.",
      "In **1979–80** Nelson Bunker Hunt and William Herbert Hunt, with partners, built a very large position in silver bullion and futures. After exchange and dealer rule changes raised margins and restricted new longs, the price collapsed. Positions, rules, dated prints, and the March break are the spine — not a forecast, not a stock story, and not a brief for repeating the trade. [Information versus advice](/sound-money/information-not-advice) is the standing line. The market quotient that uses **1980** as an arithmetic anchor sits on the [gold–silver ratio](/markets/gold-silver-ratio) fact page — a different article.",
    ],
  },
  {
    heading: "Who held what",
    paragraphs: [
      "The Hunt group and associated interests accumulated physical silver and long futures on a scale that mattered for a market thinner than gold’s. Contemporary estimates put the controlling interest in hundreds of millions of ounces when paper and metal are counted together — exact tallies still vary by source and by how one treats warehouse receipts and forward claims. The documentary fact is concentration: a small circle of names sat on a large share of deliverable and paper silver.",
      "Motivation in the public record mixed inflation fear after the **1970s**, distrust of paper claims, and a bet that silver’s monetary memory still mattered. This account does not psychoanalyse the Hunts. It records that a concentrated long met a physical and futures market that could not absorb unlimited demand at the old tape without a sharp print move.",
      "Partners and financing arrangements mattered when the break came. Brokers who had financed the position demanded more capital as margins rose and prices fell. Forced selling is a plumbing fact, not a morality play.",
    ],
  },
  {
    heading: "The January 1980 run",
    paragraphs: [
      "Silver’s nearby extreme in the Hunt-era run, used on this site’s desk print, is **$49.45** on **18 January 1980**. London gold’s PM fix printed **$850** on **21 January**. Those two named prints give a gold–silver ratio near **17.2** for that peak week — arithmetic on the [ratio page](/markets/gold-silver-ratio), narrative here.",
      "The January market print is not Silver Thursday. January is the run. March is the unwind. Keep the labels on the dates. Year-average silver for **1980** on this site’s published year-average price series is much lower than the January extreme; a year average and a peak-week print answer different questions.",
      "Physical tightness, futures delivery pressure, and speculative follow-on buying all fed the print. A concentrated long can bid a thin market. It can also invite a rule book response. That response is the next section.",
    ],
  },
  {
    heading: "What changed at the exchange",
    paragraphs: [
      "COMEX and related dealers tightened margin requirements and restricted new long positions — famously moving toward rules that made it harder to add longs while shorts and liquidation remained possible. Liquidity that had been assumed on the way up was not there on the way down. The Hunts’ brokers demanded more capital. Forced selling followed.",
      "Exchange rule changes are not a free-market parable and not a conspiracy slogan. They are the institutional fact of **1980**’s silver break: a venue that had listed the contracts altered the terms under which new speculative demand could bid. Whether one judges those changes as prudence or as a rescue of shorts is politics. The documentary sequence is rule change → margin pressure → liquidation → collapse of the print.",
      "Dealer and bank counterparties sat in the middle. When variation margin and credit lines moved against the longs, the position could not be held at the old size. Silver Thursday names the day the break became public theater.",
    ],
  },
  {
    heading: "27 March 1980 and the aftermath",
    paragraphs: [
      "**27 March 1980** saw silver futures crash as liquidation hit. The January extreme was gone. Brokers and the Hunt interests negotiated under intense pressure. Lawsuits, congressional attention, and exchange post-mortems followed in the months and years after.",
      "The break did not erase silver’s industrial or monetary memory. It did show that a concentrated futures-and-bullion position can meet a rule book and a credit constraint faster than a narrative about remonetization can answer. Later silver markets still use **1980** as a dated print memory. This site’s desk treats the January high as a historical print, not a target.",
      "Silver Thursday is not the [Crime of 1873](/history/america/crime-of-1873) and not [bimetallism](/history/silver/bimetallism). **1873** is a Mint list. Bimetallism is a mint-ratio statute problem. **1980** is a concentrated private position and an exchange response. Three silver stories; three turning points.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["Run in January. Rule pressure in March. Break on the 27th."],
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
    heading: "A squeeze, a rule book, a dated break",
    paragraphs: [
      "Positions, COMEX margin and long limits, the January prints, and the **27 March 1980** break are the claim — not a recommendation to purchase or sell the metal, not a price target, and not a stock tip about any company tied to the Hunts or to COMEX. Dual role of the metal sits under [monetary history and industry](/history/silver/monetary-and-industry). Market quotient arithmetic sits under the [gold–silver ratio](/markets/gold-silver-ratio). The standing line remains [information versus advice](/sound-money/information-not-advice).",
    ],
  },
];

const bimetallism: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A government can write a law that says so many ounces of silver equal one ounce of gold at the Mint — and markets can refuse to freeze that number. **Bimetallism** is the attempt to keep both metals in the same monetary system at a **fixed mint ratio**. The mint stands ready to coin both into full-weight money at that legal number. When the **market ratio** — the gold price of silver in trade — drifts away, Gresham’s pattern appears. The statute does not defeat arbitrage.",
      "This page carries that general machine. The loud American political event is the [Crime of 1873](/history/america/crime-of-1873). The opening American arithmetic is [early U.S. coinage](/history/america/early-us-coinage). The market quotient without a mint claim lives on the [gold–silver ratio](/markets/gold-silver-ratio) fact page. The chapter overview sits under [silver in history](/history/silver).",
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
      "Keep the stories labeled. A mint-ratio fight is not a warehouse-receipt story from [banks and paper](/history/banks-paper), and it is not the 1980 Hunt squeeze. Different centuries, different instruments.",
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
      "Open the America articles for the statute narrative. This page only states the mechanism those statutes were fighting over: two metals, one legal unit, a ratio that markets will not freeze.",
      "After **1900** the United States defined the dollar in gold in statute. Silver’s political fight cooled as a remonetization campaign. Silver’s monetary memory and industrial job continued — the next articles in this chapter. The mint-ratio lesson remains: a legal number is not a market equilibrium, and renaming the fight does not repeal arbitrage.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The legal number can sit still for decades. The trade price of silver rarely does."],
    list: [
      "**1792:** U.S. Coinage Act — gold and silver at **15:1** mint ratio.",
      "**1834:** U.S. gold-friendlier ratio correction.",
      "**1865:** Latin Monetary Union begins coordinating coin standards among members.",
      "**Early 1870s:** German gold shift; world silver price under pressure.",
      "**1873:** U.S. Coinage Act omits free coinage of the standard silver dollar.",
      "**1878–1890:** Bland–Allison and Sherman silver-purchase compromises (America chapter).",
      "**1896:** Bryan free-silver campaign; gold side wins the election.",
      "**1900:** U.S. Gold Standard Act — dollar defined in gold.",
    ],
  },
  {
    heading: "Law versus the scale",
    paragraphs: [
      "Mint ratio, market ratio, and Gresham under a two-metal statute are the documentary spine here — not a brief for remonetizing silver, not a target for today’s gold–silver quotient, and not a pitch to hold either metal. The American statute fight lives under the [Crime of 1873](/history/america/crime-of-1873). Opening arithmetic sits under [early U.S. coinage](/history/america/early-us-coinage). The market quotient without a mint claim sits on the [gold–silver ratio](/markets/gold-silver-ratio).",
      "Return to [silver in history](/history/silver) for the chapter’s mountain-to-industry arc.",
    ],
  },
];

const potosi: Section[] = [
  {
    heading: "",
    paragraphs: [
      "From the **1540s**, Cerro Rico at Potosí — in today’s Bolivia — poured silver into a Spanish imperial machine that reached two oceans. Ore left the mountain for the mint, the fleet, Seville, European payments, and — via the **Manila galleon** — China, where silver was the settlement metal of a much larger commercial system.",
      "The lesson is flow, not romance: a mountain can set the silver stock of an age. Today’s country-by-country production and reserves picture sits on the [world map](/maps), not here. The coin face of the flow is the [piece of eight](/history/silver/piece-of-eight). The chapter overview is [silver in history](/history/silver).",
    ],
  },
  {
    heading: "Discovery and the colonial machine",
    paragraphs: [
      "Indigenous and Spanish accounts place major silver discoveries at Potosí in the **1540s**. The crown organised extraction, refining, mita labour drafts, and a mint. Mercury amalgamation (the patio process and later refinements) raised recovery from poorer ores. Output in the later sixteenth and early seventeenth centuries reached a scale that contemporaries treated as a wonder and that modern economic historians still treat as a hinge in global silver supply.",
      "Potosí was not the only American mine — New Spain (Mexico) and other Andean sites mattered — but Cerro Rico became the symbol and, for long stretches, the largest single source. A city grew at altitude around the mountain. The fiscal machine of the Spanish empire ran in part on that altitude. Without refining, labour, and a mint mark, ore in a mountain is not yet money in a port.",
      "Exact annual tonnage series vary by reconstruction. The documentary claim this chapter needs is directional: Potosí-class American silver flooded Eurasian payments for generations. Geology plus empire organisation produced a monetary fact — a stock large enough that later mint ratios and Asian settlement habits had to live with it.",
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
      "That Pacific leg matters for the chapter’s claim. Silver history is not only a European inflation story. It is a two-ocean redistribution of monetary metal from a New World mountain into Old World and Asian ledgers. The [piece of eight](/history/silver/piece-of-eight) is what many counterparties actually handled when the ounces arrived as coin.",
      "When Asian silver demand, European wars, or mine exhaustion shifted, the same routes carried different volumes. The galleon is infrastructure. The mountain is supply. Together they set a global silver stock that later mint ratios and gold standards had to live with.",
    ],
  },
  {
    heading: "What the flood changed — and what it did not",
    paragraphs: [
      "A sudden rise in silver supply changes relative prices, mint economics, and the political value of controlling mines. It does not invent money. Mediterranean and Asian silver habits already existed — [Greece’s Laurion network](/history/ancient/greece-silver-trade) is an earlier rhyme at smaller scale. Potosí is early-modern volume under a global empire.",
      "Nor does a silver flood permanently freeze a mint ratio. Later centuries still saw Gresham under [bimetallism](/history/silver/bimetallism), Europe’s gold turn, and America’s silver question. More silver in the world stock is one input into those fights. It is not the whole statute story.",
      "Keep the hinges labeled. Potosí is the hole in the ground. The piece of eight is the coin. Bimetallism is the legal ratio problem. Silver Thursday is a 1980 futures-and-bullion break. Industrial silver is a twentieth-century second job. One mountain does not swallow the chapter.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The mountain’s fame was early-modern. The metal’s later politics did not end when Cerro Rico’s monopoly faded."],
    list: [
      "**1540s:** Major Potosí silver working begins; colonial mint and labour regimes follow.",
      "**Later 16th–early 17th centuries:** Peak decades of Cerro Rico fame and output in empire finance.",
      "**1565 onward:** Manila galleon system links American silver to Asian settlement demand.",
      "**17th–18th centuries:** American silver remains central to Spanish fiscal and global trade flows; other mines share the load.",
      "**19th century:** Independence, new mining technology, and later Comstock-class strikes shift the geography of supply — Potosí’s monopoly fame fades; silver’s monetary politics continue.",
    ],
  },
  {
    heading: "Flow, not romance",
    paragraphs: [
      "Cerro Rico as a global silver source — flow, mint, fleet, and Asian demand — is the documentary spine here. This is not a mining prospectus, not a travel brochure, and not a claim that today’s silver price “should” remember Potosí. The coin face is the [piece of eight](/history/silver/piece-of-eight). Present geography sits on the [world map](/maps). An earlier silver network is [Greece: silver and trade](/history/ancient/greece-silver-trade).",
      "Return to [silver in history](/history/silver) for the chapter’s full path from mountain to industry.",
    ],
  },
];

const silverIndustry: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A vault ounce and a paste ounce can print the same chemical symbol and still answer different questions. Silver is still money in memory: coins, bars, a hedge people name in the same breath as gold. It is also an industrial input — photography for a long twentieth century, then electronics, then photovoltaics. Those two jobs pull the metal in different directions. This page names the split. It does not forecast which job wins.",
      "Mine supply is ounces leaving the ground — a flow into both monetary stock and fabrication. It is not a list of companies to buy, and it is not this article’s country-by-country demand table. The mining clock lives on the [gold–silver ratio](/markets/gold-silver-ratio) page and the desk’s [Stocks & flows](/desk) tab.",
      "Monetary narrative articles in this chapter are [Potosí](/history/silver/potosi), the [piece of eight](/history/silver/piece-of-eight), [bimetallism](/history/silver/bimetallism), and [Silver Thursday](/history/silver/silver-thursday). Country rankings of bar-and-coin offtake live under [physical silver demand by country](/markets/physical-silver-demand-by-country) — a markets fact page, not this history article. The chapter overview sits under [silver in history](/history/silver).",
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
      "Survey tables under Markets separate fabrication from investment offtake for that reason. Photography is one fabrication chapter. It is not the whole industrial book, and it is not bar-and-coin demand. Readers who want dated country investment lines should open the markets pages, not treat this history article as a substitute table.",
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
    heading: "Which series the headline means",
    paragraphs: [
      "When a headline says “silver demand,” ask which series: coin-and-bar investment, jewelry, industrial fabrication, or official-sector lines. The [physical silver demand by country](/markets/physical-silver-demand-by-country) page explains the investment ranking and a **2025** jewelry-fabrication table. The [gold–silver ratio](/markets/gold-silver-ratio) page explains a dated price quotient — and labels the mining-ratio clock so ounces mined are not mistaken for a price. Neither page is a history of Potosí or of 1980.",
      "The documentary fact is the dual role: silver kept a monetary identity while acquiring industrial identities. Practice — bars, coins, premiums — lives under [gold and silver in practice](/gold-silver). Mixing a fabrication survey with a how-to produces a pitch. Keeping the label produces a claim you can check.",
      "Cross-links to America stay where statute politics need them ([Crime of 1873](/history/america/crime-of-1873), [bimetallism](/history/silver/bimetallism)). Cross-links to markets stay where current survey arithmetic lives. This article does not reprint those tables. If a sentence cannot say whether it means money-stock demand or fabrication flow, it is not ready to publish.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Pre-1800s:** Silver primarily a monetary and ornamental metal in the stories these pages tell.",
      "**1800s–1900s:** Photography and other chemical/industrial uses grow beside coinage and plate.",
      "**Late 19th century:** Political fights over silver as money (America chapter; bimetallism) while industrial use rises.",
      "**20th century:** Electronics and remaining photographic use; most states leave silver as the large-unit standard.",
      "**21st century:** Photovoltaics and electronics as major fabrication lines in survey books; investment offtake tracked separately.",
      "**1980:** Hunt-era squeeze — a monetary-market event on a metal that already had industrial demand ([Silver Thursday](/history/silver/silver-thursday)).",
    ],
  },
  {
    heading: "Two jobs, two series",
    paragraphs: [
      "None of this is a forecast of industrial tightness, a solar investment case, a miner pick, or a reason to purchase or sell the metal. It is the documentary naming of silver’s dual monetary and industrial role. A fabrication ounce and a vault ounce can share a chemical symbol without sharing a demand series.",
      "[Silver in history](/history/silver) holds the chapter. Earlier monetary articles are [Potosí](/history/silver/potosi), the [piece of eight](/history/silver/piece-of-eight), [bimetallism](/history/silver/bimetallism), and [Silver Thursday](/history/silver/silver-thursday). Markets companions stay where current survey arithmetic lives: [physical silver demand by country](/markets/physical-silver-demand-by-country) and the [gold–silver ratio](/markets/gold-silver-ratio). If mining cost as a constraint on the unit is the idea behind the visit, open [hard money vs fiat](/sound-money/hard-money-vs-fiat).",
    ],
  },
];

const officialGoldBookValue: Section[] = [
  {
    heading: "",
    paragraphs: [
      "After **1971**, the gold window for foreign official holders was closed — and the U.S. books still carried the same ounces at a leftover legal price. United States official gold is still carried on the Treasury books at **$42.22** per **fine troy ounce** (a troy ounce is the precious-metal ounce, about 31.1 grams; fine means pure metal content). That **book value** is a leftover **legal par** — the last official dollar price of gold written into statute — not the market price you see quoted in London or on futures markets (**COMEX**). It is not a forecast, and it is not a price anyone can present metal against today.",
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
      "The divisions below are arithmetic only: a named spot, or this site’s LBMA/COMEX **year average** from this site’s published year-average price series, divided by the two official pars. They do not say gold is cheap or dear. They do not project a path. $35 is the 1934–1971 official par. $42.22 is the 1973–present book rate. For years before September 1973, the $42.22 column is a later yardstick applied backward, not a par that then existed.",
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
    heading: "Two ledgers, one stock",
    paragraphs: [
      "Official gold on the U.S. books is a government asset at a frozen par. Spot is a market print. The gap is a fact of two ledgers — not a secret price, a floor, or a target, and not a reason to buy or sell metal. This page does not say the Treasury “should” revalue gold.",
      "The other fact pages under [gold and silver markets](/markets) cover how central banks report gold in reserves, what the gold–silver ratio measures, and what country rankings of physical silver demand measure. For the statute story that produced $35 and then $42.22, open the 1971 episode linked above. The narrative stays there. The leftover book rate stays here.",
    ],
  },
];

const centralBankGoldReserves: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A reserve manager’s published book can rise by tens of tonnes in a quarter while a private holder still cannot present a note and take metal. Central banks report gold as part of official reserve assets. The public figures are a stock in tonnes or ounces, sometimes a share of foreign-exchange reserves, sometimes official gold marked at a market price and divided by nominal GDP, and dated purchases or sales. This page records how those reports work, where metal is often stored, and which official buyers and sellers have been named in recent IMF and World Gold Council tallies — including a short Canada section on a printed **Gold: 0** line, plus one dated official sale from **1999–2002**. It is not a shopping list.",
    ],
  },
  {
    heading: "How gold enters the reserve statement",
    paragraphs: [
      "The IMF’s International Financial Statistics and related reserve templates ask members to report official gold holdings. The physical quantity is the durable fact: tonnes or troy ounces of monetary gold. A dollar value is then attached so gold can sit beside foreign-currency assets, **SDRs** (Special Drawing Rights — an IMF reserve asset), and IMF reserve positions in one reserve total.",
      "That dollar value is a reporting convention. Some authorities mark gold near a market price when they compute gold’s **share** of reserves. Others keep a historical or statutory cost on their own books — the U.S. [official book value](/markets/official-gold-book-value) at $42.22 is the extreme case. A high gold share can mean a large inherited stock, a small foreign-currency book, a mark-to-market revaluation, or recent buying. The share alone does not name a policy.",
      "World official gold, compiled from those country books plus IMF and ECB lines, is on the order of **36,000 tonnes** in recent year-end snapshots used on this site (about **35,908 tonnes** at end-2025 in the compiled desk). The United States remains the largest single reported stock, **8,133.5 tonnes** in the July **2026** World Gold Council / IMF book used in the GDP table below. Germany, Italy, and France hold large legacy European stocks. China’s published official figure — dated in the holdings section below — sits above **2,300 tonnes** and is widely treated as a floor, not a full geological census. Russia’s July **2026** line in that same compilation is **2,276.8 tonnes**.",
    ],
  },
  {
    heading: "Gold as a share of FX and gold reserves",
    paragraphs: [
      "A tonne stock and a reserve share are different jobs. The share used here is gold marked near a market price, divided by foreign-exchange reserves plus that gold value — the World Gold Council’s usual construction from the IMF’s “total reserves minus gold” line and an end-period LBMA gold price. It is not the U.S. statutory **$42.22** book. It is not a claim about the next quarter’s percentage.",
      "Two published world snapshots sit a year apart and must stay labeled. In the Council’s **2025** reserve-manager survey, the prompt stated that gold accounted for **19 percent** of total reported reserves — foreign exchange plus gold — in **Q3 2024**. The Council’s market primer dated **1 April 2026**, using IMF COFER and IFS, puts gold at **26 percent** of total global allocated reserves by **Q3 2025**. Those are two prints, not one spliced series.",
      "The same primer splits the **2025** average by group: about **30 percent** at developed-market central banks, about **15 percent** at emerging-market central banks, against about **4 percent** for emerging markets in **2010**. Country books show why a world average is a blend. China’s stock is large in tonnes and still small as a share of a very large reserve book: **4 percent** at end-**2023**, **5 percent** at end-**2024**, and **8.9 percent** of China’s foreign-exchange reserves in **May 2026**, per the World Gold Council notes cited in the China section. Narodowy Bank Polski’s first-quarter **2026** statement, dated in the Poland section below, put gold at **29.4 percent** of official reserve assets at the end of **March 2026**. That is a smaller foreign-currency book and a different inheritance — not a larger gold mountain than China’s.",
    ],
    table: {
      caption:
        "Gold’s share of foreign-exchange reserves plus gold at a market value. Each row keeps its own clock and label.",
      headers: ["Dated print", "Share", "Whose reserves", "Source"],
      rows: [
        ["Q3 2024", "**19%**", "World reported FX + gold", "WGC CBGR Survey 2025 prompt"],
        ["Q3 2025", "**26%**", "World allocated FX + gold", "WGC primer, 1 April 2026 (IMF COFER / IFS)"],
        ["2010", "**~4%**", "Emerging-market average", "WGC primer, 1 April 2026"],
        ["2025", "**15%**", "Emerging-market average", "WGC primer, 1 April 2026"],
        ["2025 (DM)", "**30%**", "Developed-market average", "WGC primer, 1 April 2026"],
        ["End-2023", "**4%**", "China", "WGC Gold Demand Trends, FY 2023"],
        ["End-2024", "**5%**", "China", "WGC Gold Demand Trends, FY 2024"],
        ["May 2026", "**8.9%**", "China", "WGC, 12 June 2026, citing SAFE"],
        ["March 2026", "**29.4%**", "Poland", "NBP Q1 2026 balance-of-payments note"],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "A rising share can be more tonnes, a higher gold price on an unchanged stock, or a smaller foreign-currency book. The mechanism remains the dated report.",
    ],
  },
  {
    heading: "Official gold relative to GDP",
    paragraphs: [
      "A tonne stock and a reserve share still sit inside the reserve book. Official gold relative to GDP is a different division. Take the reported official gold stock, mark it at a named market price, and divide by that country’s nominal GDP. A large published vault can sit beside a large economy and look light on this clock. A smaller published stock can sit beside a smaller economy and look heavy. The job is the quotient, not a league table of vaults.",
      "The country set below is short and labeled. Tonnes are the World Gold Council compilation drawn from IMF International Financial Statistics, dated **3 September 2026**, with country books through **31 July 2026** where those books have appeared. That is the same July compilation the year-to-date buyer table uses. It is not the later August SAFE and NBP prints in the China and Poland sections. Market value uses the LBMA Gold Price PM of **$4,026.60** an ounce on **31 July 2026** — the end-month London print that matches that holdings month — and **32,150.7466** troy ounces per tonne. Nominal GDP is the IMF World Economic Outlook **April 2026** current-price dollar line for calendar **2025**. Portugal’s **2025** line in that vintage is still an IMF estimate; the vintage’s latest actual year for Portugal is **2024**.",
      "On that arithmetic, Portugal’s **382.7 tonnes** are about **14.30 percent** of its **$346.412 billion** 2025 GDP line. Switzerland’s **1,039.9 tonnes** are about **12.90 percent** of **$1,043.544 billion**. Italy’s **2,451.8 tonnes** are about **12.45 percent** of **$2,550.111 billion**. Russia’s **2,276.8 tonnes** are about **11.39 percent** of **$2,587.938 billion**. France (**2,437.0 tonnes**, **9.36 percent** of **$3,368.925 billion**) and Germany (**3,349.5 tonnes**, **8.59 percent** of **$5,048.059 billion**) sit in the same European neighborhood. The United States remains the largest published stock, **8,133.5 tonnes**, and about **3.42 percent** of **$30,767.075 billion**. Japan’s **846.0 tonnes** are about **2.47 percent** of **$4,435.163 billion**. China’s July book of **2,366.3 tonnes** is about **1.56 percent** of **$19,626.247 billion**.",
      "The same July compilation puts Poland at **640.2 tonnes**, about **8.00 percent** of its **$1,035.586 billion** 2025 GDP line — a mid-table print on this clock, kept off the table so it does not become a third Poland narrative. A later August NBP stock of **648 tonnes** belongs in the Poland section below. China’s August SAFE print of **76.73 million ounces**, about **2,387 tonnes**, belongs in the China holdings table. Do not splice those later months into this GDP quotient.",
    ],
    table: {
      caption:
        "Market value of reported official gold at the 31 July 2026 LBMA Gold Price PM ($4,026.60/oz), divided by 2025 current-price GDP from IMF WEO April 2026. Tonnes are the WGC / IMF IFS compilation dated 3 September 2026 (country books through 31 July 2026). Portugal’s 2025 GDP line in that WEO vintage is still an IMF estimate.",
      headers: ["Country", "Official tonnes", "2025 GDP", "Gold / GDP"],
      rows: [
        ["Portugal", "**382.7**", "$346.412 bn", "**14.30%**"],
        ["Switzerland", "**1,039.9**", "$1,043.544 bn", "**12.90%**"],
        ["Italy", "**2,451.8**", "$2,550.111 bn", "**12.45%**"],
        ["Russian Federation", "**2,276.8**", "$2,587.938 bn", "**11.39%**"],
        ["France", "**2,437.0**", "$3,368.925 bn", "**9.36%**"],
        ["Germany", "**3,349.5**", "$5,048.059 bn", "**8.59%**"],
        ["United States", "**8,133.5**", "$30,767.075 bn", "**3.42%**"],
        ["Japan", "**846.0**", "$4,435.163 bn", "**2.47%**"],
        ["China", "**2,366.3**", "$19,626.247 bn", "**1.56%**"],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "The percentage is market value of reported official gold divided by that 2025 GDP line. It is not gold’s share of foreign-exchange reserves. It is not a claim about a later year’s GDP, and it is not a reason to copy a reserve manager. Change the gold print or the GDP vintage and the percentage moves. The mechanism remains the dated division.",
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
      "Each line is a reported change in official gold, dated to a calendar year. It is not a recommendation, a miner pick, or a claim that private holders should copy a reserve manager. Central banks buy and sell under statute, sanctions, and reserve-composition rules that do not apply to a household. The largest reported 2026 country additions, month by month, sit in the next section. Reported net official sales from the same July compilation sit immediately after that table.",
    ],
  },
  {
    heading: "Reported net buyers, YTD through August 2026",
    paragraphs: [
      "The World Gold Council’s latest monthly compilation of publicly reported official changes — drawn from IMF International Financial Statistics and national central-bank releases — runs through **31 July 2026**. In the weeks after that note, a few named buyers published August stocks. The table keeps those two clocks in separate columns. A tonne here is a reported change in official monetary gold on the published books. It is not a private investment flow.",
      "Reported world purchases in that July compilation were about **130 tonnes**. That headline is the sum of published country lines. It is not the Council’s broader Gold Demand Trends estimate, which also tries to capture unreported official buying. Kazakhstan’s August stock has not yet appeared in a matching national or WGC monthly line, so that row stays on July.",
    ],
    table: {
      caption:
        "Reported net official gold additions in 2026, through the latest month each line can support. Figures are rounded whole tonnes.",
      headers: ["Country", "Reported tonnes", "Through", "Source"],
      rows: [
        [
          "Poland",
          "**98**",
          "August 2026",
          "NBP president, 10 September 2026 (**648 t** stock); WGC July **90 t**",
        ],
        [
          "China",
          "**80**",
          "August 2026",
          "SAFE official reserve assets, 7 September 2026 (**76.73 million oz**); WGC July **60 t**",
        ],
        [
          "Uzbekistan",
          "**48**",
          "August 2026",
          "CBU reserves, 7 September 2026 (**14.11 million oz** as of 1 September); WGC July **40 t**",
        ],
        [
          "Kazakhstan",
          "**29**",
          "July 2026",
          "WGC monthly (IMF IFS and NBK), through 31 July 2026",
        ],
        [
          "Czech Republic",
          "**14**",
          "August 2026",
          "CNB gold page (**85.8 t** at end-August); WGC July **12 t**",
        ],
      ],
    },
  },
  {
    heading: "Reported net official sellers, YTD through July 2026",
    paragraphs: [
      "The same World Gold Council monthly compilation — drawn from IMF International Financial Statistics and national central-bank releases, through **31 July 2026** and published **3 September 2026** — also names the largest reported official reductions. The buyer table above keeps later August prints on a few named accumulators. This seller table stays on that July book. A tonne here is a reported change in official monetary gold on the published books. It is not a private investment flow.",
      "Two country lines dominate the published year-to-date sales list. The Central Bank of the Republic of Türkiye sold **1 tonne** in July, bringing reported year-to-date sales to **85 tonnes**. The Central Bank of Russia sold **6 tonnes** in July, bringing reported year-to-date sales to **50 tonnes** and the July stock to **2,277 tonnes** — the same July book the GDP table rounds to **2,276.8 tonnes**. Jordan and Uzbekistan each reported a **1-tonne** July reduction in that note; Uzbekistan remains a year-to-date buyer on the table above. This page does not invent an August seller total.",
    ],
    table: {
      caption:
        "Reported net official gold reductions in 2026, through 31 July 2026. Figures are rounded whole tonnes.",
      headers: ["Country", "Reported tonnes", "Through", "Source"],
      rows: [
        [
          "Türkiye",
          "**85**",
          "July 2026",
          "WGC monthly (IMF IFS and CBRT), through 31 July 2026",
        ],
        [
          "Russia",
          "**50**",
          "July 2026",
          "WGC monthly (IMF IFS and CBR), through 31 July 2026",
        ],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "The table does not rank sellers as an investment case. It records reported official changes, dated to the July compilation. Türkiye’s book has been two-way in recent years; a reported sale is still a dated official-book change, not a private export census.",
    ],
  },
  {
    heading: "Brown’s Bottom (1999–2002): a dated official gold sale",
    paragraphs: [
      "The later market nickname **Brown’s Bottom** names a dated HM Treasury and Bank of England official sale, not a private-flow lesson. This is not a separate URL. It is a subsection of how a reserve book can reduce gold and raise foreign-currency assets — the same composition job the year-to-date seller table records for a different decade.",
      "On **7 May 1999**, HM Treasury announced a restructuring of the United Kingdom’s foreign-currency and gold reserves. The Bank of England, acting as the Treasury’s agent, then ran **17** uniform-price auctions from **July 1999** to **March 2002**. Approximately **395 tonnes** of gold were sold. The [Bank of England Quarterly Bulletin for Summer 2003](https://www.bankofengland.co.uk/-/media/boe/files/quarterly-bulletin/2003/an-analysis-of-the-uk-gold-auctions-1999-2002.pdf) records that the stock then stood around **715 tonnes**, with a medium-term aim of around **300 tonnes**. At each of the first eleven auctions, **25 tonnes** were offered; at each of the last six, **20 tonnes** were offered.",
      "The same Bank article puts the average auction price at around **$275** an ounce — **$274.9** in the footnote that also names the programme’s revenue at approximately **$3.5 billion**. HM Treasury’s later [GOV.UK disclosure](https://www.gov.uk/government/publications/the-sale-of-part-of-the-uk-gold-reserves-1999-2002), published **31 March 2010**, uses the same tonne, auction-count, and dollar-proceeds figures, and adds a contemporaneous sterling print of about **£1.9 billion**. Those proceeds stayed inside the reserves. They were reinvested in dollar, euro, and yen interest-bearing assets.",
      "The Treasury’s stated aim was to restructure the reserve holdings — gold down, foreign-currency assets up — so the portfolio held a larger share in currencies. That is a reserve-composition sentence from the official book. It is not a private-flow tip, and it is not a later market verdict on the sale.",
      "The auction clearing price was a market sale print — a dated dollar per ounce paid by successful bidders. It is not a statutory book rate. The U.S. leftover par of **$42.22** on [official gold book value](/markets/official-gold-book-value) is a reporting convention on another ledger. Do not mix the two. One number is what the auctions allotted. The other is what a Treasury line still writes for ounces it did not sell.",
      "Read those sentences as a dated official-sector record. They do not say a private reader should follow HM Treasury. They do not rank the sale against later prices as an investment case. They show one reserve manager reducing a reported gold stock, raising a foreign-currency book, and stating a composition aim — the same report facts this page tracks for official buyers and sellers as a whole.",
    ],
  },
  {
    heading: "",
    callout: {
      label: "Not a central bank",
      paragraphs: [
        "Tether is a private issuer. It does not report gold to the IMF as official reserve assets, so it is not a row in the official tables above. Two published gold figures sit under that name and must stay labeled. Tether Gold (XAU₮) is a token whose bars are vaulted for token holders: an independent attestation as of **30 June 2026** put that stock at **707,747.139 fine troy ounces**, about **22.01 tonnes**, owned by the holders, not by the company. Separately, Tether’s 3 August 2026 note said Tether International SA de CV bought about **27.1 tonnes** of gold in the first half of 2026 for its own reserve book. That H1 purchase is a company statement. No official August year-to-date purchase total has been published, and this page does not invent one.",
      ],
    },
    paragraphs: [
      "The official tables do not rank buyers or sellers as an investment case. They record reported official changes, dated to the month each line can support. A private issuer’s reserve book is a different instrument, kept off the official tables.",
    ],
  },
  {
    heading: "China: reported holdings since 2000",
    paragraphs: [
      "China reports official gold as a stock of monetary gold. The People’s Bank of China and the State Administration of Foreign Exchange publish the figure — in tonnes in some announcements, in fine troy ounces on the monthly official-reserve-assets table. The World Gold Council’s country book then carries that stock through IMF International Financial Statistics. What follows is that published book, dated. It is not a survey of every bar in the country.",
      "For long stretches the book did not move in public. At the end of **2000** the IMF/WGC series sat at about **395 tonnes**. In **April 2009**, SAFE’s Hu Xiaolian stated that China had adjusted the stock twice already this century — from **394 tonnes** to **500 tonnes** in **2001**, then to **600 tonnes** in **2003** — and that the stock had then reached **1,054 tonnes**. That **600-tonne** book is the WGC **2005** line. The **1,054-tonne** print held, in the WGC/IMF book, through **2010** and on to early **2015**.",
      "In **July 2015** the PBoC said the stock at the end of **June 2015** was **1,658 tonnes** (**53.31 million ounces**). Monthly SAFE reporting followed. The WGC year-end **2015** line is **1,760 tonnes**. A later pause left the book near **1,948 tonnes** — **62.64 million ounces** at the end of **October 2019**, per PBoC data carried by Xinhua — and the WGC **2020** year-end line is **1,950 tonnes**.",
      "Buying that was visible again in the IMF book then produced the large **2023** addition. The World Gold Council’s Gold Demand Trends for full-year **2023** put the stock at **2,235 tonnes** after about **225 tonnes** of reported buying, the largest single year of published Chinese additions in the IMF series back to **1977**. Full-year **2024** put the stock at **2,280 tonnes** after **44 tonnes** of reported buying. The WGC/IMF year-end **2025** line is **2,306 tonnes**.",
      "The 2026 monthly book is the same series the year-to-date table above uses. A World Gold Council China note dated **12 June 2026**, citing SAFE, put May’s stock at **2,332 tonnes** after a **10-tonne** month. SAFE’s official-reserve-assets table published **7 September 2026** printed **76.73 million ounces** at the end of **August 2026** — about **2,387 tonnes**. Against the **2,306-tonne** end-2025 line, that is about **+81 tonnes** year-to-date; the table above rounds the same SAFE/WGC compilation to **80 tonnes** through August.",
    ],
    table: {
      caption:
        "Published official Chinese gold stock. Tonnes are the print named in the source, not a private estimate.",
      headers: ["Dated print", "Reported tonnes", "Source"],
      rows: [
        ["End-2000", "**395**", "WGC / IMF IFS (PBoC later cited **394 t** before the 2001 step)"],
        ["2003", "**600**", "PBoC (Hu Xiaolian, April 2009); WGC **2005** line is the same book"],
        ["April 2009", "**1,054**", "PBoC / SAFE; WGC **2010** line holds this plateau"],
        ["End-June 2015", "**1,658**", "PBoC, July 2015 (**53.31 million oz**)"],
        ["End-2015", "**1,760**", "WGC / IMF IFS"],
        ["October 2019", "**1,948**", "PBoC, **62.64 million oz** (Xinhua, 7 November 2019)"],
        ["End-2020", "**1,950**", "WGC / IMF IFS"],
        ["End-2023", "**2,235**", "WGC Gold Demand Trends, FY 2023"],
        ["End-2024", "**2,280**", "WGC Gold Demand Trends, FY 2024 (**+44 t** reported)"],
        ["End-2025", "**2,306**", "WGC / IMF IFS"],
        ["May 2026", "**2,332**", "WGC, 12 June 2026, citing SAFE (**+10 t** in May)"],
        ["August 2026", "**2,387**", "SAFE, **76.73 million oz**, 7 September 2026"],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "Read the table as a sequence of published official prints. The gaps are part of the record: years with no public change, then a step. A later month can revise a rounded tonne. These sentences do not say a private reader should follow the PBoC.",
    ],
  },
  {
    heading: "Poland: a short documentary block",
    paragraphs: [
      "Narodowy Bank Polski is the named European buyer of the early 2020s. This is not a separate URL. It is a subsection of how official gold is reported and accumulated.",
      "At the end of **2017** NBP’s reported gold stock was about **103 tonnes**. In **2018–2019** the bank bought on the order of **126 tonnes**, taking the stock to about **229 tonnes** by end-2019. In **July 2019** NBP announced that it would transfer **100 tonnes** from the Bank of England to vaults in Poland — a custody move, not a purchase. Title was already Polish; the bars changed address.",
      "Buying resumed in size. IMF-based annual changes in the compiled desk put Poland at about **+34 tonnes** in 2022, **+130 tonnes** in 2023, and **+90 tonnes** in 2024, with further additions in **2025**. The desk’s latest Poland stock line of **550 tonnes** is the year-end-2025 starting point implied by later official additions: it is not the 2026 stock.",
      "NBP’s first-quarter 2026 balance-of-payments note put the gold stock at **581.6 tonnes** at the end of **March 2026**, then **29.4 percent** of official reserve assets (valued at **PLN 319.5 billion** on that statement). The World Gold Council’s Gold Demand Trends for the second quarter, compiled from IMF and central-bank reports through **30 June 2026**, puts the stock at **632 tonnes** after about **+51 tonnes** in the quarter and about **+82 tonnes** in the first half. The Council’s 3 September 2026 monthly compilation, through **31 July 2026**, puts the stock at **640 tonnes**, after about **+8 tonnes** in July and about **+90 tonnes** year-to-date.",
      "On **10 September 2026**, NBP’s president stated that the stock at the end of **August 2026** was **648 tonnes**, valued at **PLN 344.8 billion** at then-current prices. That is about **+8 tonnes** in August and about **+98 tonnes** year-to-date against the desk’s **550-tonne** end-2025 starting point: **550 + 90** reaches the end-July **640**; **550 + 98** reaches the end-August **648**.",
      "The same WGC notes record NBP’s public stock aim of **700 tonnes**, with gold then about **28 percent** of total reserves. An earlier NBP communications line had named a reserve-share aim in the region of **20 percent**; the March 2026 NBP statement already sat above that share. Governor Adam Glapiński’s remarks in this period treated gold as a reserve asset, not as a trading book.",
      "Read those sentences as a dated official-sector record. They do not say a private reader should follow NBP. They do not rank Poland against other buyers as an investment case. They show one central bank raising a reported gold stock, moving metal home, and stating a reserve-share and then a **700-tonne** stock aim — the same custody and report facts this page tracks for the official sector as a whole.",
    ],
  },
  {
    heading: "Canada: Gold: 0 on the official book",
    paragraphs: [
      "Canada’s official gold line is a dated wind-down that ends at a printed zero. This is not a separate URL. It is a subsection of how official gold is reported — including a reserve book that no longer carries a gold stock.",
      "Finance Canada’s monthly Official International Reserves tables still print **Gold: 0**. The [release dated 6 August 2026](https://www.canada.ca/en/department-finance/services/publications/monthly-official-international-reserves/2026/08.html), covering **31 July 2026**, puts total official international reserves at **US$127,038 million** and lists the gold cell as **0**. Earlier 2026 monthly prints in the same series — including the June and May tables — carry the same gold cell. The Bank of Canada’s weekly international-reserves snapshot uses the same **Gold: 0** line. That is the current official book.",
      "The zero is the end of a multi-decade rundown. Contemporary reporting of the close-out — including [CBC’s March 2016 coverage](https://www.cbc.ca/news/business/gold-canada-reserves-1.3475818) of Finance Canada’s monthly print — put the peak stock in the **1960s** at more than **1,000 tonnes**. By **2003** the published stock was about **3.4 tonnes**. The last large disposals were coin sales: Finance Canada’s [February 2016 Official International Reserves](https://www.canada.ca/en/department-finance/news/2016/03/official-international-reserves.html) footnote records **21,851** ounces of gold coins sold for settlement in February, with holdings at **77** ounces on **29 February 2016**. Contemporaneous CBC reporting of the same Finance prints names earlier coin sales of **41,106** ounces in December and **32,860** ounces in January. The February table already printed the gold valuation line as **0** in millions of U.S. dollars — the residual ounces rounded under that million-dollar clock.",
      "Read those sentences as a dated official-sector record. The printed zero is a quantity and valuation line on Canada’s reserve statement. It is not a later market verdict, and it is not a private-flow instruction.",
      "The contrast with other G7 books on this page is light and labeled. The same July **2026** World Gold Council / IMF compilation used in the GDP table above still shows large reported stocks for the United States (**8,133.5 tonnes**), Germany (**3,349.5 tonnes**), Italy (**2,451.8 tonnes**), France (**2,437.0 tonnes**), and Japan (**846.0 tonnes**). Canada’s Finance Canada table sits beside those books with a gold cell of **0**. That is a difference of published official stocks, not a ranking of policy outcomes.",
      "Read the Canada block the same way as the China and Poland sections: a dated official book. These sentences do not say a private reader should follow Ottawa. They do not say Canada was wrong. They show one reserve statement that once carried a large gold stock and now prints **Gold: 0** — the same report facts this page tracks for the official sector as a whole.",
    ],
  },
  {
    heading: "Composition, custody, and clocks",
    paragraphs: [
      "A rising official stock is a change in a reserve composition. It is not a price target. A reported official sale is the same kind of fact as a reported official purchase: a dated change in a reserve book, not a private-flow instruction. The **1999–2002** UK auction programme above is one such dated official-sale clock. A repatriation is a change in custody. It is not proof that a foreign vault failed. A high gold share of reserves can be an old European inheritance, a smaller foreign-currency book, a mark-to-market revaluation, or a new emerging-market programme. China’s published tonnes, gold’s world reserve share, and official gold relative to GDP are three jobs: a quantity on one book, a market-value fraction of reserve assets, and a market-value fraction of a year’s output. Canada’s printed **Gold: 0** is a fourth dated fact on the same report clock: a country book that no longer carries a gold stock. The mechanism is the report: quantity, sometimes value, sometimes location, and — on the GDP clock — a named price over a named GDP vintage.",
      "These pages stay on current metal-market facts. How $42.22 became the U.S. book rate sits on [official gold book value](/markets/official-gold-book-value). What the gold–silver ratio measures is the third topic. Identified bar-and-coin offtake by country is the fourth. Narrative — 1907, 1933, 1971 — lives under [Sound Money History](/history). How a person stores a coin lives under [gold and silver in practice](/gold-silver). The [markets hub](/markets) holds the four topics together. None of those pages is a stock tip. Neither is this one.",
    ],
  },
];

const goldSilverRatio: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On a named day, two prints share a clock: divide gold’s dollar price by silver’s and you get how many ounces of silver equal one ounce of gold at that pair. The gold–silver ratio is that dated snapshot. It is not a fair-value claim. Three contemporaneous clocks can be written as ounces of silver per ounce of gold: the market price, mine output, and London vault stocks. They are three different divisions. This page keeps the market quotient, then labels the other two so they are not mistaken for it.",
      "Mine supply is how much metal leaves the ground in a survey year. It is not a list of mining companies, not a stock tip, and not a reason the market ratio “should” match the mine book.",
    ],
  },
  {
    heading: "What the ratio measures",
    paragraphs: [
      "Call gold G and silver S, both in the same currency per troy ounce. The ratio is G ÷ S. If gold is $2,000 and silver is $25, the ratio is 80. Eighty ounces of silver then have the same dollar value as one ounce of gold at that pair of prints. Change either print and the ratio changes. There is no third hidden input.",
      "The two prices must share a clock. A London gold PM fix against a COMEX silver nearby from another session is a mixed snapshot. This site’s [desk](/desk) shows a live ratio from the same live prices. This page uses **named prints** and **year averages** so the arithmetic can be checked. This site’s published year-average price series is an LBMA/COMEX annual average for each metal; dividing those two averages gives a year-average ratio, which is not the same as any single day’s print.",
      "Historically, states also wrote a **mint ratio**: a legal number of silver units per gold unit. The Coinage Act of 1792 used 15 to 1. Later statutes used 16 to 1. That legal ratio is a mint rule. It is not the market ratio. When the two diverge, the legally overvalued metal tends to stay in coin and the other tends to leave — the ordinary bimetallic problem, told as narrative under [bimetallism](/history/silver/bimetallism). This page keeps the market quotient.",
    ],
  },
  {
    heading: "Mining ratio vs market ratio",
    paragraphs: [
      "The market ratio is one price divided by another. A mining ratio is one mine-supply total divided by another. Both can be spoken as “ounces of silver per ounce of gold.” They are still two different quotients. The first uses two dated dollar prints. The second uses two mine-production books for a stated year. The hole in the ground does not set the tape, and the tape does not rewrite the mine book.",
      "This site’s homepage mining-ratio card prints about **7.1**. That figure is Silver Institute / Metals Focus World Silver Survey 2026 mine supply of **844.1 million ounces** (2026F) divided by this site’s World Gold Council–based 2026e gold mine pace of **3,708 tonnes**. USGS Mineral Commodity Summaries 2026 prints a same-book 2025e pair — **3,300 tonnes** of gold and **26,000 tonnes** of silver — about **7.9** ounces of silver per ounce of gold by mass. The USGS gold total sits below the World Gold Council mine book this site uses for the card, so the two official mine-supply quotients land near seven and near eight. Neither figure is a price. The desk’s Stocks & flows mine-output tile prints the same USGS pair as a geology fact — a byproduct relationship in the mine book, not fair value and not a company screen.",
      "A dated market print sits far from that mine-supply neighborhood. On **10 September 2026**, COMEX December gold closed at **$4,364.50** and COMEX December silver at **$64.28**. Those two nearby futures share a session and a venue. Divide them and the market ratio is **67.9** — near **68**, with silver in the mid-sixties. Name the clock: COMEX December nearby closes, 10 September 2026. The next session’s pair can move a point without changing the definition.",
      "Keep three labels on the table. A **mint ratio** is a legal number of silver units per gold unit — fifteen to one in the Coinage Act of 1792, later sixteen to one. A **mining ratio** is ounces mined per ounce mined in a survey year. A **market ratio** is gold’s dollar print divided by silver’s dollar print at a named pair of prices. The mint number is a statute story, told under [bimetallism](/history/silver/bimetallism). Mine supply is how much metal leaves the ground. The market number is the job of this page, under the [markets](/markets) hub. [Physical silver demand by country](/markets/physical-silver-demand-by-country) is the neighbor that counts identified bars and coins taken off the shelf — offtake, not holes in the ground, and not a price quotient. The same page also labels **2025** industrial fabrication as a factory table, so a solar-paste ounce is not mistaken for a bar, and **2025** jewelry fabrication as a workshop table. Recycling on that page is a scrap clock — secondary supply from old products — not this page’s mine clock.",
      "The gap between a mine-supply ratio near **7** and a market ratio near **68** is a fact about two different divisions. It is not a fair-value gap. It is not a mean that later tapes owe a return to. It does not say silver is behind, gold is ahead, or that either metal should catch up. Mine supply, industrial use, and monetary demand all affect the two prices. None of them is entitled to set the other quotient. The market ratio remains one dated pair of prints.",
    ],
  },
  {
    heading: "London vault holdings — a custody inventory",
    paragraphs: [
      "A third contemporaneous clock is the metal sitting in London custody. The London Bullion Market Association’s [London vault holdings](https://www.lbma.org.uk/prices-and-data/london-vault-data) series counts gold and silver in London commercial vaults, plus the Bank of England’s gold (the Bank does not hold silver). The print is month-end, published one month in arrears, and covers metal inside the M25: wholesale bars, coins, kilo bars, and small bars. It does not count jewellery, household metal, or smaller vaults outside the London clearing system. It is not a world aboveground census.",
      "The dated [August 2026 print](https://www.lbma.org.uk/articles/london-gold-and-silver-vault-data-for-august-2026), published 7 September 2026, names **9,632 tonnes** of gold and **28,431 tonnes** of silver. Using the LBMA’s stated conversion — 1 gram = 0.0321507465 troy ounces — those tonnes become about **310 million ounces** of gold and about **914 million ounces** of silver. Divide the silver stock by the gold stock and the vault ratio is about **3.0** ounces of silver per ounce of gold. Name the clock: LBMA London Vault Holdings Data, August 2026.",
    ],
    list: [
      "**Gold 9,632 tonnes** — about **310 million ounces**.",
      "**Silver 28,431 tonnes** — about **914 million ounces**.",
      "**Vault ratio ~3.0** — ounces of silver per ounce of gold in that same book.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "That **3.0** is a custody inventory ratio. It is not the mining ratio near **7** on the homepage card. It is not the market ratio near **68** on the 10 September 2026 COMEX nearby pair. London is one settlement hub. Metal in New York, Shanghai, Zurich, or a household safe is outside this book. The next month’s print can move without rewriting the definition.",
      "The gap between a vault ratio near **3**, a mine-supply ratio near **7**, and a market ratio near **68** is a fact about three clocks. It is not a fair-value gap. It is not a mean. It does not say silver is scarce in London, gold is plentiful, or that either metal should catch up. A custody book records what those vaults held on a named day. The market ratio remains one dated pair of prints.",
    ],
  },
  {
    heading: "A dated pair, not a mean",
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
      "In **2011** the London gold PM fix printed **$1,895** on 6 September. Silver’s 2011 year average on this site is $35.12; gold’s is $1,571.52 → a year-average ratio of **44.7**. Late April is a different clock: the London silver fix printed **$48.70** on 28 April while gold’s PM fix was **$1,535.50**, and that pair compressed to **31.5** — the tape public commentary rounds to **30:1**. The next section names those prints and the September pair. “The 2011 ratio” without a clock is a blur.",
    ],
  },
  {
    heading: "What a 30:1 ratio meant in 2011",
    paragraphs: [
      "On a named day the ratio is still gold’s dollar price divided by silver’s. On **28 April 2011** the London gold PM fix printed **$1,535.50** and the London silver fix printed **$48.70**. Those two London prints give $1,535.50 ÷ $48.70 = **31.5**. The day’s two gold fixes averaged **$1,533.25**; that mean divided by the same silver fix is **31.48**, the year’s low on public London-fix ratio tables. “Thirty to one” is the rounded shorthand for that April tape. It is not a year average, and it is not a level a later tape owes. Check the prints on a [2011 London-fix archive](http://www.321gold.com/archives/fix2011.html) and on a [daily London-fix ratio table](https://taxfreegold.co.uk/goldsilverratio2011.html) compiled from LBMA gold and silver fixes. A contemporaneous [April 2011 report](https://www.coinnews.net/2011/04/29/gold-jumps-8-1-in-april-with-record-close-silver-prices-soar-28-3/) named the same pair.",
      "This site’s **2011 year averages** remain $1,571.52 gold and $35.12 silver → **44.7** — a twelve-month mean, not the April low. On **6 September 2011** the London gold PM fix printed **$1,895** against a London silver fix of **$41.85**. $1,895 ÷ $41.85 = **45.3**. Silver had already left the April high, so gold’s September peak sat beside a higher ratio, not a second 30:1. Three 2011 snapshots share one definition and three clocks: April’s **31.5**, September’s **45.3**, and the year-average **44.7**.",
      "What 30:1 meant then is market history. For a few London sessions in late April, silver’s dollar print was large relative to gold’s. Physical offtake and industrial use were both live that year; they do not rewrite the quotient. Identified bars and coins by country live on [physical silver demand by country](/markets/physical-silver-demand-by-country) — a later survey table, not this April pair. The four current-fact pages sit under [markets](/markets). A mint ratio of fifteen or sixteen to one is a statute story under [bimetallism](/history/silver/bimetallism). A January 1980 tape near **17.2** is a different peak-week pair, told as [Silver Thursday](/history/silver/silver-thursday).",
      "A ratio near 30 in April 2011 does not name a destined return. It does not say silver is behind, gold is ahead, or that either metal should catch up. It records how many ounces of silver equalled one ounce of gold at those two prints. Name the prices, name the date, divide. That is the claim.",
    ],
  },
  {
    heading: "Year-average snapshots from the same series",
    paragraphs: [
      "Using only this site’s published year-average prices — so both metals share a method — a few more dated quotients sit in one table. Again: arithmetic, not a path.",
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
      "Those six rows show that a year-average ratio can sit near 29 in two different decades and near 84–86 in two later years without that fact implying a return trip. The 1980 January print near 17 is a third kind of snapshot: a peak-week pair, not a year. April 2011 near **31.5** is a fourth kind: an intra-year London pair, not the 2011 year average of **44.7**. Keep the labels on the numbers.",
    ],
  },
  {
    heading: "Name the prints, keep the clocks apart",
    paragraphs: [
      "Name the two prices, the venue or series, and the date. Say whether you used a fix, a nearby future, or a year average. Then divide. If you compare 1980 to 2011, say which 1980 and which 2011. Official gold’s leftover U.S. book rate is a different fact, on [official gold book value](/markets/official-gold-book-value). Central-bank tonnes are a third fact. Identified bar-and-coin offtake by country is a fourth, on [physical silver demand by country](/markets/physical-silver-demand-by-country) — industrial fabrication as a factory table, and jewelry fabrication as a workshop table, sit on that same page. A **2025** recycling-by-source table there is scrap returning from use, not ounces leaving the ground. The [markets](/markets) hub holds the four topics. Live mine-output and above-ground prints sit on the desk’s [Stocks & flows](/desk) tab.",
      "History’s job is the older legal ratio and the 1980 squeeze narrative. This page’s job is the market quotient — what the ratio measures when both prices share a clock. The homepage mining-ratio card’s job is ounces mined per ounce mined. London vault stocks are a third contemporaneous clock — custody inventory, not a price and not a mine book. Practice’s job is bars, coins, and premiums. Mixing those jobs produces slogans. Keeping them apart produces a number you can check.",
      "Nothing here is a reason to prefer one metal. Nothing here is a mean, a band, or a catch-up clock. Nothing here is a miner pick or a price target. The gold–silver ratio measures a dated pair of prints. That is the claim, and that is the stop.",
      "If you want the older legal ratio — **bimetallism**, both metals legal at a fixed mint ratio — as a statute fight, open [bimetallism](/history/silver/bimetallism). If you want the 1980 squeeze as a narrative, open [Silver Thursday](/history/silver/silver-thursday). If you want silver’s monetary memory beside its industrial job, open [monetary history and industry](/history/silver/monetary-and-industry). If mining cost as a constraint on the unit is the idea you meant, open [hard money vs fiat](/sound-money/hard-money-vs-fiat). Those pages explain their own claims. They do not rewrite the definition on this page. A mint ratio is a law. A mining ratio is ounces mined. A market ratio is a price quotient. A vault ratio is ounces held in a named custody book. Keep the four labeled when you move between History, the homepage card, Markets, and the London print.",
    ],
  },
];

const physicalSilverDemandByCountry: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In **2024**, identified U.S. bar-and-coin offtake fell hard while India’s line rose — two national markets, one survey table, no shared path. Country rankings of physical silver demand count identified retail and investment purchases of bars and coins in a calendar year. They answer which national markets took metal off the retail shelf. They do not rank mines, factories, or paper claims. This page records what those rankings measure, a dated 2024 country table from the same World Silver Survey vintage this site already uses for world coin-and-bar demand, and — labeled separately — a 2025 industrial-fabrication table, a 2025 coins-and-medals mint table, a 2025 jewelry-fabrication table, and a 2025 recycling-by-source table from World Silver Survey 2026.",
      "A mine-production ranking is a different list, and this site does not keep one here. Ounces leaving the ground live on the homepage mining-ratio card, the [gold–silver ratio](/markets/gold-silver-ratio) mining block, and the desk’s [Stocks & flows](/desk) tab. This page stays with buyers, mints, factories, jewelry workshops, and — labeled separately — scrap sources.",
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
    heading: "Buyer, mint, and factory addresses",
    paragraphs: [
      "It does not measure industrial fabrication. In the same 2024 survey vintage this page uses for the investment ranking, industrial demand was **680.5 million ounces** — photovoltaics, electronics, brazing, and the rest. That metal is consumed in products. It is not a bar in a household drawer. A country that fabricates a lot of solar paste can be small on the investment table. World Silver Survey 2026’s **2025** industrial book — world **657.4 million ounces**, with its own country ranking — sits in a separate block below. It is a factory address, not a substitute for the investment ranking.",
      "It does not treat jewelry or silverware as the investment ranking. In the same 2024 survey vintage this page uses for bar-and-coin offtake, those two world lines were about **208.7** and **54.2** million ounces. Jewelry has its own **2025** country table below — World Silver Survey 2026’s workshop book, world **189.3 million ounces**. Silverware remains a different line in that later book (**42.1 million ounces** in 2025). Neither is a bar in a household drawer. It does not measure official-sector silver, a rounding line of **1.5 million ounces** in the 2024 world book, not a central-bank gold story.",
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
    heading: "2025 industrial fabrication by country — a third table",
    callout: {
      label: "Industrial fabrication ≠ investment offtake",
      paragraphs: [
        "Industrial fabrication is a third World Silver Survey job. The 2024 ranking above is a buyer address: which national markets took identified bars and coins. The coins-and-medals block is a mint address: where silver was struck. Industrial demand is a factory address: where silver went into electrical and electronics, photovoltaics, brazing alloys and solders, and other industrial uses. Jewelry fabrication, below, is a fourth job — a workshop address. China can sit first on the industrial table and remain small on the investment table. The United States can sit first on the investment table and second on the industrial table. Those are two jobs, not a disagreement. Do not read an industrial line as a substitute ranking, and do not treat any of the four tables as a country shopping list.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026, researched by Metals Focus for the Silver Institute, prints an **Industrial Demand by Country** table for calendar **2025**. World industrial fabrication in that series was **657.4 million ounces**, down 3 percent from the same book’s **679.0** for 2024. That is the first post-pandemic contraction in the industrial line after four years of growth. It is not this page’s 2024 country physical-investment total of **183.3**, and it is not the 2025 coins-and-medals fabrication total of **87.9**.",
      "The five largest 2025 country lines in that industrial table sit below. Figures are million troy ounces. They are fabrication ounces consumed in products. They do not replace the 2024 investment ranking or the 2025 mint ranking.",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Industrial demand by country, calendar 2025. Million troy ounces. Factory address — not bar-and-coin offtake, and not coins-and-medals minting.",
      headers: ["Country", "2025", "2024", "Y/Y"],
      rows: [
        ["China", "**282.9**", "275.4", "+3%"],
        ["United States", "**125.5**", "126.9", "−1%"],
        ["Japan", "**68.8**", "94.8", "−27%"],
        ["Germany", "**31.0**", "31.6", "−2%"],
        ["United Kingdom", "**21.6**", "20.5", "+5%"],
        ["World industrial", "**657.4**", "679.0", "−3%"],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "China’s **282.9** is about **43 percent** of the 2025 world industrial total — 282.9 ÷ 657.4. The same survey vintage this page uses for physical investment still prints China at **5.5** in 2024. That is the labeling point. East Asia as a whole printed **384.6** in 2025, down 4 percent; the survey attributes most of that regional loss to photovoltaic silver, where East Asian powder makers dominate. China’s own industrial line still rose 3 percent. Electrical and electronics inside China rose 5 percent, to **221.8 million ounces**.",
      "Japanese industrial fabrication fell **27 percent**, to **68.8**. The survey names fierce competition from Chinese silver-powder manufacturers as the main driver of that Japanese drop. Japan’s electrical-and-electronics line in the same book fell **32 percent**, to **53.7**. The United States printed **125.5**, down 1 percent from **126.9**. Germany printed **31.0**, down 2 percent. The United Kingdom printed **21.6**, up 5 percent. Those are factory facts. They do not rewrite the U.S. or Indian investment lines above.",
    ],
  },
  {
    heading: "Where 2025 industrial ounces went",
    paragraphs: [
      "The same World Silver Survey 2026 book splits the **657.4 million ounce** industrial total by sector. Electrical and electronics printed **449.5 million ounces**, of which photovoltaics were **186.6**. Subtract those two printed cells and electrical and electronics excluding photovoltaics is **262.9**. Brazing alloys and solders printed **50.5**. Other industrial printed **157.4**. Photography is a separate demand line in that book — **24.2 million ounces** in 2025 — and is not inside the 657.4 industrial total.",
      "Rounded shares of 657.4 sit in the table below. Photovoltaics are large. They are not the whole factory floor. Electrical and electronics excluding solar remain the single largest industrial slice.",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Breakdown of industrial demand by sector, calendar 2025. Shares are the printed million-ounce cells divided by 657.4, then rounded. Photovoltaics sit inside the electrical-and-electronics total in the survey; the ex-PV row is that total minus the photovoltaics line.",
      headers: ["Industrial slice", "Million ounces", "Share of 657.4"],
      rows: [
        ["Electrical & electronics, excluding PV", "**262.9**", "**40%**"],
        ["Photovoltaics", "**186.6**", "**28%**"],
        ["Other industrial", "**157.4**", "**24%**"],
        ["Brazing alloys & solders", "**50.5**", "**8%**"],
        ["World industrial", "**657.4**", "**100%**"],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "Against the same book’s 2024 cells, electrical and electronics fell 2 percent, photovoltaics fell 6 percent, other industrial fell 7 percent, and brazing alloys and solders rose 1 percent. The survey names photovoltaic thrifting and substitution, and a slower pace of ethylene-oxide catalyst additions, as the main industrial losses. Automotive and aerospace strength supported the small brazing gain. None of those sentences is a path for 2026.",
    ],
  },
  {
    heading: "2025 jewelry fabrication by country — a fourth table",
    callout: {
      label: "Jewelry fabrication ≠ investment offtake",
      paragraphs: [
        "Jewelry fabrication is a fourth World Silver Survey job. The 2024 ranking above is a buyer address. Coins-and-medals is a mint address. Industrial demand is a factory address. Jewelry is a workshop address: where silver was fabricated into jewelry in a calendar year. India can sit first on the jewelry table and second on the investment table. China can sit first on the industrial table and fourth on the jewelry table. Those are different jobs, not a disagreement. Do not treat any of the four tables as a country shopping list.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026, researched by Metals Focus for the Silver Institute, prints a **Jewelry Fabrication by Country** table for calendar **2025**. World jewelry fabrication in that series was **189.3 million ounces**, down 8 percent from the same book’s **205.1** for 2024. The **208.7 million ounce** jewelry line cited earlier on this page is the older World Silver Survey 2025 vintage for 2024. The two 2024 cells are two vintages, not a disagreement. The **189.3** is not this page’s 2024 country physical-investment total of **183.3**, not the 2025 coins-and-medals total of **87.9**, and not the 2025 industrial total of **657.4**.",
      "The five largest 2025 country lines in that jewelry table sit below. Figures are million troy ounces. They are fabrication ounces into jewelry. They do not replace the buyer, mint, or factory rankings.",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Jewelry fabrication by country, calendar 2025. Million troy ounces. Workshop address — not bar-and-coin offtake, not coins-and-medals minting, and not industrial fabrication.",
      headers: ["Country", "2025", "2024", "Y/Y"],
      rows: [
        ["India", "**70.3**", "87.9", "−20%"],
        ["Thailand", "**28.5**", "22.9", "+24%"],
        ["Italy", "**18.0**", "20.5", "−12%"],
        ["China", "**16.2**", "15.4", "+5%"],
        ["United States", "**10.3**", "11.3", "−9%"],
        ["World jewelry", "**189.3**", "205.1", "−8%"],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "India’s **70.3** is about **37 percent** of the 2025 world jewelry total — 70.3 ÷ 189.3. The same 2024 investment vintage this page uses still prints India at **59.8**. That is the labeling point. Fabrication fell 20 percent, to the lowest level in that jewelry book since 2021, as rupee prices and intra-year volatility cut rural offtake and pushed fabricators toward lighter pieces. The survey names gold-plated silver and organized retail as supports that limited a steeper drop. Those are workshop facts. They do not rewrite India’s bar line.",
      "Thailand printed **28.5**, up 24 percent, the highest in that book since 2011. The survey attributes the rise to exports to India, which doubled in volume and overtook the United States as Thailand’s largest jewelry buyer. Italy printed **18.0**, down 12 percent; Europe as a whole printed **27.6**, down 10 percent, with the survey naming tariff-driven Italian export losses and weaker end-market sales. China printed **16.2**, up 5 percent after three down years, with the survey naming gold substitution and product innovation. The United States printed **10.3**, down 9 percent; the same book puts U.S. jewelry consumption down just over 20 percent in fine-ounce terms. Silverware remains a different line — **42.1 million ounces** in that 2026 book for 2025, down 21 percent. None of those sentences is a path for 2026.",
    ],
  },
  {
    heading: "Where recycled silver comes from (2025)",
    callout: {
      label: "Scrap sources ≠ offtake ≠ fabrication",
      paragraphs: [
        "Recycling is a fifth World Silver Survey job, and it is a supply book. The 2024 ranking above is a buyer address. Coins-and-medals is a mint address. Industrial demand is a factory address. Jewelry is a workshop address. Scrap names where metal came back from old products in a calendar year. Industrial scrap can be large while a country sits small on the investment table. Jewelry scrap can rise in a year jewelry fabrication falls. Those are different jobs, not a disagreement. Do not read a scrap line as a buyer ranking, and do not treat the source table as a shopping list.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026, researched by Metals Focus for the Silver Institute, prints a recycling-by-source table for calendar **2025**. World recycling in that series was **197.6 million ounces**, up 2 percent from the same book’s prior year and a thirteen-year high in that series. The **197.6** is not this page’s 2024 country physical-investment total of **183.3**, not the 2025 coins-and-medals total of **87.9**, not the 2025 industrial total of **657.4**, and not the 2025 jewelry total of **189.3**. It is metal returning to the market. It is not ounces leaving a mine.",
      "The five source lines in that recycling table sit below. Figures are million troy ounces. They are secondary-supply ounces. They do not replace the buyer, mint, factory, or workshop rankings.",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Recycling by source, calendar 2025. Million troy ounces. Secondary supply — not bar-and-coin offtake, not coins-and-medals minting, not industrial fabrication, and not jewelry fabrication.",
      headers: ["Source", "2025"],
      rows: [
        ["Industrial", "**110.1**"],
        ["Jewelry", "**38.2**"],
        ["Silverware", "**28.3**"],
        ["Photographic", "**16.2**"],
        ["Coin", "**4.7**"],
        ["World recycling", "**197.6**"],
      ],
    },
  },
  {
    heading: "",
    paragraphs: [
      "Industrial scrap printed **110.1** — the largest source line, a little more than half of the 2025 world recycling total. The survey records a slight dip in that industrial line, and names lower e-scrap yields as the reason the factory scrap book did not rise with the rest. Jewelry scrap printed **38.2** and silverware scrap **28.3**; both of those old-metal lines rose in the same book. Photographic scrap printed **16.2**. Coin scrap printed **4.7**. Those five printed cells sit under the world **197.6**. They are source facts from World Silver Survey 2026. They do not rewrite India’s bar line, China’s factory line, or the USGS mine book.",
      "Scrap is secondary **supply**. It is not a buyer ranking and not a fabrication ranking. A jewelry-scrap ounce is metal coming back from old pieces; a jewelry-fabrication ounce is metal going into new pieces. An industrial-scrap ounce is metal recovered from spent products; an industrial-fabrication ounce is metal consumed in new products. The mine clock on the [gold–silver ratio](/markets/gold-silver-ratio) page counts ounces leaving the ground. This scrap table counts ounces returning from use. Keep the two clocks labeled. The [markets](/markets) hub holds the four fact pages together. None of those sentences is a path for a later year.",
    ],
  },
  {
    heading: "Mine supply on the USGS book — not a new boom",
    paragraphs: [
      "Jewelry ounces leave the mine book and enter a workshop. The mine book itself has not been racing ahead. The U.S. Geological Survey’s [Mineral Commodity Summaries 2016](https://apps.usgs.gov/minerals-information-archives/mcs/mcs2016.pdf) printed world silver mine production of **27,300 tonnes** for 2015. [Mineral Commodity Summaries 2026](https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-silver.pdf) prints **25,300 tonnes** for 2024 and **26,000 tonnes** (estimated) for 2025. A decade later the USGS world total is still in the mid-20,000s of tonnes — a byproduct fact, not a dedicated jewelry pipeline, and not a COMEX story. The mining clock lives on the [gold–silver ratio](/markets/gold-silver-ratio) page and the desk’s [Stocks & flows](/desk) tab. The scrap clock — metal returning from use — sits in the recycling table above. Those are two supply books. This page’s demand addresses remain a different job. The [markets](/markets) hub holds the four fact pages together.",
    ],
  },
  {
    heading: "Label the series before the country",
    paragraphs: [
      "Name the series, the year, and whether you are looking at coin-and-net-bar demand (world **190.9** in 2024), the country physical-investment table (world **183.3**), coins-and-medals fabrication (world **87.9** in 2025), industrial fabrication (world **657.4** in 2025), jewelry fabrication (world **189.3** in 2025), or recycling by source (world **197.6** in 2025). Then read the country as a demand address, a mint address, a factory address, or a workshop address — and read a scrap line as a supply source, not a buyer. Do not swap those jobs. A mine-production ranking is a different list, and this site does not keep one here — the mining clock lives on the [gold–silver ratio](/markets/gold-silver-ratio) page and the desk’s [Stocks & flows](/desk) tab. Official gold stocks live on [central-bank gold reserves](/markets/central-bank-gold-reserves). A pair of metal prices, and a dated London vault inventory, live on the [gold–silver ratio](/markets/gold-silver-ratio).",
      "When silver’s two roles need a narrative home, open [silver: monetary history and industry](/history/silver/monetary-and-industry). Practice’s job is bars, coins, and premiums. The [markets](/markets) hub holds the fact pages. Mixing a country ranking with a how-to produces a pitch. Keeping the label produces a figure you can check.",
      "Nothing here is a reason to buy silver in a named country. Nothing here is a miner pick. Nothing here is a mean, a band, or a clock that says one country’s line must return to 2022. The investment ranking measures identified bar-and-coin offtake by country in a dated survey year. The industrial table measures fabrication into products. The jewelry table measures fabrication into jewelry. The recycling table measures metal returning from old products — secondary supply, not offtake. Those are the claims, and that is the stop.",
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
      "In the autumn of **1923**, a German mark could buy less by the hour than it had bought that morning. Half a century later, on **15 August 1971**, the United States closed the last official promise that foreign governments could still turn dollars into gold at a fixed price. Those two dates are not the beginning of money. They are late chapters in a much older argument: what a unit is, who may create it, and what happens when the stop fails.",
      "This history follows that argument as a documentary record. Coins are clipped or lightened. Banks write receipts that begin as claims on metal and end as notes people are told to trust. Legislatures rename mint ratios, suspend convertibility, or recall gold from private hands. Crowds form at doors that cannot pay. Each article sticks to a dated claim — who acted, what rule changed, what broke, and what followed — so a curious adult can leave able to explain the hinge in plain English.",
    ],
  },
  {
    heading: "From metal in the hand to paper that floats",
    paragraphs: [
      "The story does not start with a modern central bank. It starts when traders settled in gold and silver by weight, then when a stamp cut the cost of checking that metal, then when a warehouse ticket began to pay a debt while the metal stayed in the vault. Paper is late. Fiat — money that exists by law and habit rather than by redeemability into a known weight — is later still.",
      "The [ancient money](/history/ancient) stretch asks why markets chose two metals and how Lydia, Greece, and Rome turned stamps into fiscal tools — begin with [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) if the selection itself is the fog. [Banks and paper](/history/banks-paper) follows the receipt that becomes a note: Amsterdam’s public bank, the Bank of England’s war charter, [John Law’s **1720** System](/history/banks-paper/john-law), and the French assignats. Keep those centuries labeled. A paper collapse in Regency France is not Weimar, and Weimar is not **1971**.",
    ],
  },
  {
    heading: "One republic, one white metal, one crowded century",
    paragraphs: [
      "Inside the United States the fight was often a statute fight: what the dollar is. The [America chapter](/history/america) runs from the **1792** coinage law through Jackson’s bank war, Civil War greenbacks, the [silver question after **1873**](/history/america/crime-of-1873), and a gold definition in **1900** — then hands off before the Fed. Silver needs its own stretch too. The [silver chapter](/history/silver) follows a mountain at [Potosí](/history/silver/potosi), a global coin, mint-ratio mechanics, the **1980** squeeze, and the metal’s later industrial job — not as a footnote to gold stories.",
      "The densest modern door is the [twentieth century](/history/20th-century): private rescue after **1907**, a new central bank, classical gold’s wartime end, [Weimar **1923**](/history/20th-century/weimar-1923), the **1933** US gold recall, Bretton Woods, and the [**1971** gold-window close](/history/20th-century/bretton-woods-nixon-1971). If you live downstream of that close, the century chapter is the natural entry. If you want the slower on-ramp — metal before paper — ancient coinage or banks and paper walk forward into the same argument.",
    ],
  },
  {
    heading: "Four hinges, five stretches",
    paragraphs: [
      "You do not need every page on day one. The mark that bought less by the hour has its own article: [Weimar **1923**](/history/20th-century/weimar-1923). The closed gold window has [Bretton Woods and Nixon **1971**](/history/20th-century/bretton-woods-nixon-1971). An earlier paper System that fused notes and shares sits at [John Law **1720**](/history/banks-paper/john-law). The mountain that poured silver into world payments sits at [Potosí](/history/silver/potosi). Each hinge opens a dated claim; the chapter around it shows what sat before and after.",
      "Five stretches hold the rest of the path — [ancient money](/history/ancient), [banks and paper](/history/banks-paper), [America](/history/america), [silver](/history/silver), and the [twentieth century](/history/20th-century). Chapter pages introduce a stretch; the articles do the dated work. Similar mechanisms can teach; merging **1720** into **1923**, or **1933** into **1971**, blurs what actually changed.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "These pages state what happened and how the money rule worked. They do not sell metal, forecast prices, or turn a panic into a pitch. Definitions of sound money live under [Sound Money](/sound-money); current figures under [Markets](/markets). History keeps the dated claims.",
    ],
  },
];

/** Pillar hub /sound-money — rendered by the sound-money index route. */
export const soundMoneyHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "People argue about gold, paper, and “backing” with words that slip. One speaker means a coin that is costly to dig. Another means a note you can present for metal. A third means a vault photo beside a slogan. Before the history articles can do their work, the vocabulary has to hold still.",
      "Sound money, on this site, means a unit whose supply cannot be expanded at will by the issuer — usually because metal is costly to produce, or because paper is legally redeemable for a known weight of metal. These pages define that claim and its neighbors. They do not sell metal, collect emails, or forecast prices.",
    ],
  },
  {
    heading: "Four words that keep slipping",
    paragraphs: [
      "[What is sound money?](/sound-money/what-is-sound-money) states the working definition: a unit whose stock cannot be expanded at will — the test is whether the issuer can create more by decision alone. Circulation is not the test. A unit can clear today’s till and still fail the sound-money claim if the issuer may dilute the stock as policy.",
      "[Hard money vs fiat](/sound-money/hard-money-vs-fiat) splits money that is costly to produce from **fiat** (money that exists by law and habit: Latin *fiat*, “let it be done”). Circulation does not decide that category either. A well-run fiat regime can be stable for years. A mismanaged gold regime can still debase the coin.",
      "[Inflation and purchasing power](/sound-money/inflation-purchasing-power) names the decline in what the unit buys; hyperinflation is a case, not the everyday meaning. Prices are the surface; purchasing power of the unit is the object. [What “backed” means](/sound-money/backed-money) separates **redeemability** — present the note, demand a known weight of metal — from a vault slogan with no public claim. A short fifth page states the media line: [information versus advice](/sound-money/information-not-advice).",
    ],
  },
  {
    heading: "When the fog clears",
    paragraphs: [
      "The word most often abused is “backed.” [What “backed” means](/sound-money/backed-money) is the door if that slogan is the fog; [hard money vs fiat](/sound-money/hard-money-vs-fiat) if the split is cost of production versus law and habit; [inflation and purchasing power](/sound-money/inflation-purchasing-power) if the question is what the unit still buys; [what is sound money?](/sound-money/what-is-sound-money) if you want the summary claim after the neighbors. Landing on any one page is fine; each links the rest. The bodies carry the weight of the definitions.",
      "When the vocabulary is clear, leave for [Sound Money History](/history). Weimar and Nixon belong there, not on this definitions page. Definition pages may link a dated case once — a greenback premium, a gold recall, a closed window — without pasting the whole timeline onto a glossary entry. Similar crises can teach the same mechanism; they are still different years and different laws.",
      "Current figures live under [Markets](/markets): book values, reserve lines, ratios, and country offtake. Handling bars and coins lives under [gold and silver in practice](/gold-silver). Mixing definition with tips produces a pitch. Keeping the label produces a word you can reuse on every later page. When the next question is “what happened?” rather than “what does this word mean?”, the history shelf is the continuation.",
      "These pages answer what the words mean for adults who want the vocabulary straight before they open a dated article. They are not a remonetization brief, a metal shopping list, or a forecast dressed as a glossary. Weimar, the Fed, greenbacks, and Nixon stay as dated events under History — linked once as cases when a definition needs an example, never retold in full here. Meaning first; events elsewhere; figures and handling on their own pages. That split is the whole job of this overview page.",
    ],
  },
];

/** Pillar hub /gold-silver — rendered by the gold-silver index route. */
export const practiceHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A one-ounce coin on a table is metal you can weigh. The number on a dealing screen is a paper ounce. Between those two facts sit fabrication, a premium, a place the object lives, and a later buyer who must believe the stamp. People who handle physical gold and silver already live in that gap. These pages name the usual decisions — form, premium, storage, authenticity, and starting size — as mechanics. They are an educational menu. They are not a shop, and they are not a recommendation.",
      "The older question is why two metals kept winning in trade. That story lives on [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver): portability, durability, divisibility, recognizability — metal before the mint. The vocabulary that must stay still before any handling note — hard, fiat, backed, and the line that information is not advice — lives under [Sound Money](/sound-money). Dated events stay under [Sound Money History](/history). Current figures stay under [Markets](/markets). This overview only describes how an object already moves through commerce.",
    ],
  },
  {
    heading: "Handling is not a history of money",
    paragraphs: [
      "History answers what happened when a mint lightened a coin, a bank wrote a receipt, or a statute closed a gold window. Markets answers what a leftover book rate, a reserve line, or a gold–silver quotient measures on a named date. Sound money answers what the words mean before those stories and figures can stay honest. Handling is a fourth job. It is the object: weight and fineness, a maker’s mark, a gap above a screen price, a vault or a drawer, a counterparty who may or may not still answer the phone next year.",
      "Mixing the jobs produces a pitch. A history of Lydia is not a reason to prefer a Maple Leaf. A Treasury book value of **$42.22** is not a bid for a cast bar. A definition of sound money is not a first-ounces checklist. Weimar, the Fed, and **1971** belong on the history shelf. Country offtake tables and official reserve lines belong on Markets. If a word is slipping — “backed,” “hard,” “advice” — the definition pages are the stop, not a storage note.",
      "This overview stays on the handling shelf. When the next question is a date, leave for History. When it is a caption on the tape, leave for Markets. When a word is the question, leave for Sound Money. The paragraphs below only name how people already move metal through form, price, custody, and authenticity — not a quantity, and not a dealer ranking.",
    ],
  },
  {
    heading: "Form, premium, storage, authenticity, size",
    paragraphs: [
      "Form is the first split. A bar is weight and fineness with a maker’s stamp. Larger bars spread minting and assay cost over more ounces, so the premium above the screen is often lower. Storage is denser. Resale of a large bar can mean finding a counterparty who will assay or who already trusts the brand and serial. A bullion coin is a government or mint product with a face value far below the metal. The extra cost often buys recognizability: a stranger can name the type without a laboratory. Small minted bars sit closer to coins on premium. The slogan “bars versus coins” is empty until you name the size. Numismatic and proof pieces are a different market. These notes stay on bullion — metal as metal. Mixing collectibles into a first holding is how a premium becomes a story instead of a fabrication cost.",
      "Premium is the gap between the screen and the object. Spot is a paper ounce. The product in hand was cast or struck, shipped, insured, and sold by someone who must later bid for it. That difference is not automatically a trick. It is fabrication, distribution, and the bid–ask of a physical market. A coin can carry a large premium and still be a clean product. A bar can sit near spot and still be hard to resell. The number that matters later is the dealer’s buy price — the bid — not only the ask. A thin product with a fat ask and a poor bid is expensive twice. Compare the gap to the form trade-off, not to a morality tale about purity.",
      "Storage is access versus cost versus counterparty. Home keeps the metal near and the operational risk on the household: fire, theft, forgetfulness, a safe that advertises itself. There is no vault fee and no auditor. A vault is distant and on them. Allocated storage, done properly, identifies bars or coins as yours; you should be able to name what you own. Pooled or unallocated accounts are easier to run and easier to confuse with a bank deposit. If you cannot point to a bar list, you have a claim, not a pile. A seller who will “store it for you” and never ship has only moved the custody question into another costume. This overview describes the menu. It does not pick a shelf.",
      "Authenticity is a filter, not a laboratory course. Counterfeits exist, especially of popular coins and of small bars with famous stamps. The first defense is a counterparty you can still find in a year, a product common enough to be known, and a check of weight and dimensions against the published spec. Weigh it. Measure it. Look at the edge, the reeding, and the stamp. None of that is conclusive. A price far below everyone else is information: treat it as a warning, not a bargain. A wrong test can damage a good piece. If a fake would matter, use a professional. No page on this site replaces that test.",
      "Starting size is a process, not a slogan. First ounces are four decisions: what form, from whom, where the metal lives, and what you write down. Skip any one and the others get expensive. Decide the form and the size before looking at a quote. Know the premium and the bid, not only the ask. Choose storage before a parcel moves. Keep invoices, serials, and a note of location that is not only the same drawer as the metal. Stay off collectibles until bullion is understood. If the channel is remote, the watch-fors are identity of the dealer, payment finality, shipping, and the empty-box case — logistics, not a vendor ranking. None of those steps is a reason to acquire metal. They are the decisions people already face when metal moves.",
    ],
  },
  {
    heading: "Six existing notes",
    paragraphs: [
      "Six pages already sit under this heading. This overview names their jobs so a reader can open one without treating the list as a course, a shop, or a recommendation to hold metal.",
    ],
    list: [
      "[Gold bars vs coins](/gold-silver/bars-vs-coins) — Fabrication, recognition, size; bullion versus collectibles.",
      "[Premium over spot](/gold-silver/premium-over-spot) — Screen price versus product in hand; bid as well as ask.",
      "[Storing gold and silver](/gold-silver/storage) — Access, cost, counterparty; home, allocated, unallocated.",
      "[Spotting fakes](/gold-silver/spotting-fakes) — High-level filter only; counterparty and specs before gadgetry.",
      "[Beginner checklist](/gold-silver/beginner-checklist) — Named decisions; still not a recommendation.",
      "[Buying online](/gold-silver/buying-online) — Remote identity, payment, shipping, invoice; no vendor list.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "These pages inform. They do not advise a purchase, name a quantity, or rank a dealer. They do not turn a premium, a vault menu, or a first-ounces list into a cue to act. If someone acts, they do so on their own judgment and, where needed, with a licensed adviser in their jurisdiction. The standing line lives with the vocabulary under [Sound Money](/sound-money). Why two metals were chosen for trade lives on [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver). Handling stays here. History, definitions, and market numbers stay on their own pages.",
    ],
  },
];

/** Pillar hub /markets — rendered by the markets index route. */
export const marketsHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The live [desk](/desk) prints prices and ratios like a clock. A few of those numbers still carry a statute, a survey method, or an official bookkeeping leftover. These pages explain those captions — why a Treasury line can show gold at **$42.22**, how central banks report gold in reserves, what the gold–silver ratio measures, and what a country ranking of bar-and-coin silver demand actually counts.",
      "Mine supply is ounces leaving the ground in a survey year. The [gold–silver ratio](/markets/gold-silver-ratio) page keeps that mining clock apart from the market price quotient. [Physical silver demand by country](/markets/physical-silver-demand-by-country) ranks buyers, factories, and jewelry workshops, not holes in the ground. The same page labels a **2025** recycling-by-source table — scrap returning from use, not the mine clock. The desk’s [Stocks & flows](/desk) tab shows above-ground metal and mine output beside those articles. No page here names a miner, a ticker, a target, or a reason to prefer one metal.",
      "Narrative from coinage to **1971** lives under [Sound Money History](/history). Handling bars and coins lives under [gold and silver in practice](/gold-silver).",
    ],
  },
  {
    heading: "Four captions that need a page",
    paragraphs: [
      "A **book value** is the dollar figure a government still writes into its books for gold — often a leftover legal rate, not the market price. A reserve line is how much gold a central bank reports holding. A ratio is one price divided by another at a named time. A country line is how much bar-and-coin silver buyers in that country took off the shelf in a survey year (**offtake** = that identified purchase volume).",
      "[Official gold book value](/markets/official-gold-book-value) continues the story if you have just read **1971** and wonder why **$42.22** still appears on a U.S. Treasury line. [Central-bank gold reserves](/markets/central-bank-gold-reserves) continues if you have just looked at the desk’s country bars — including a short Poland section, a short Canada **Gold: 0** section, and a short **1999–2002** UK official-sale section on that same page. [The gold–silver ratio](/markets/gold-silver-ratio) defines the quotient, labels three contemporaneous clocks — market price, mine output, and London vault stocks — and pins the market number to **1980** and April **2011** (~30:1 as a named tape, not a target) — useful if you have just seen the **gold–silver ratio (GSR)** on the live prices or the homepage mining-ratio card. [Physical silver demand by country](/markets/physical-silver-demand-by-country) defines the bar-and-coin ranking against a **2024** World Silver Survey table, and labels separate **2025** industrial-fabrication, jewelry-fabrication, and recycling-by-source tables from World Silver Survey 2026.",
      "Four doors, four jobs: [official gold book value](/markets/official-gold-book-value) for the statutory **$42.22** versus market arithmetic; [central-bank gold reserves](/markets/central-bank-gold-reserves) for how gold is reported in foreign-exchange reserves and dated official purchases and sales; [gold–silver ratio](/markets/gold-silver-ratio) for the quotient and its three clocks; [physical silver demand by country](/markets/physical-silver-demand-by-country) for identified offtake, fabrication, and scrap-source tables — and for what those rankings do not measure.",
    ],
  },
  {
    heading: "Where the numbers come from",
    paragraphs: [
      "Figures come from public official series and from the same London (**LBMA**) and U.S. futures (**COMEX**) averages shown on the desk. When a page divides the market price by **$35** or by **$42.22**, that is arithmetic on named prints. When it cites a World Gold Council or IMF-based annual net, that is a dated official-sector line. When it cites a World Silver Survey country line, that is identified retail offtake, not a mine ranking. None of those operations is a forecast.",
      "Two facts can look alike and still answer different questions. The U.S. **$42.22** line is a frozen legal rate. A central bank’s reserve share may use a market-related dollar value. Mixing them produces a slogan. Keeping them labeled produces a figure you can check. For definitions of sound money, hard money, and “backed,” use [Sound Money](/sound-money) — [hard money vs fiat](/sound-money/hard-money-vs-fiat) is the clean door if mining cost as a constraint on the unit is the question you meant. For Weimar, the Fed, or the Nixon shock as stories, use History. Silver’s dual monetary and industrial job sits under [monetary history and industry](/history/silver/monetary-and-industry).",
    ],
  },
];

/** Cluster hub /history/20th-century — rendered by the cluster route from Cluster.sections. */
export const twentiethCenturyHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In October **1907**, New York trust companies faced a liquidity panic and J. P. Morgan’s group organized private support because no Federal Reserve yet existed. Sixty-four years later, on **15 August 1971**, the United States closed the last official promise that foreign governments could still turn dollars into gold at a fixed price — the **gold window**. Between those dates sit a new central bank, the wartime end of classical gold, a German mark that ceased to work as money, a US recall of private monetary gold, and a postwar dollar system built on official convertibility at **$35** an ounce.",
      "This chapter is that crowded modern door. Earlier chapters stretch across long spans of mint practice and statute fights. Here the regime changes pack into a shorter run of calendar time — and into the world most readers still live inside.",
    ],
  },
  {
    heading: "The century in one arc",
    paragraphs: [
      "Congress answered **1907** with emergency currency legislation in **1908** and the Federal Reserve Act in **1913**. World War I then broke the classical gold standard’s peacetime convertibility among major powers. Germany’s mark collapsed in **1923** under war, reparations, and extreme paper issue. In **1933** the United States recalled private monetary gold and revalued official gold for government accounting. Bretton Woods in **1944** rebuilt a **gold-exchange** system: other countries held dollars, and those dollars were supposed to be convertible into gold at **$35** an ounce for official holders. On **15 August 1971** that official gold window closed.",
      "Private crisis management becomes public central banking. Gold convertibility ends for wartime, returns in flawed forms, then ends again for US citizens and later for foreign official dollar holders. Paper money does not merely “inflate a little”; in Weimar it loses daily function. Official prices and windows matter because they are the legal hinges, not metaphors.",
    ],
  },
  {
    heading: "Five dated claims",
    paragraphs: [
      "The [Panic of **1907** and the Fed](/history/20th-century/panic-1907-fed) opens the century’s plumbing: a trust-banking liquidity crisis and the political road to the Federal Reserve — created after **1907**, not before. The [end of the classical gold standard](/history/20th-century/classical-gold-standard-end) follows: how peacetime convertibility broke under World War I, and what “gold standard” still meant in the years that followed.",
      "[Weimar **1923**](/history/20th-century/weimar-1923) is the German mark’s collapse into hyperinflation — a paper-money catastrophe with its own causes, dates, and institutional setting. The [**1933** gold recall](/history/20th-century/1933-gold-recall) is the US private gold recall and official revaluation: citizens lose monetary gold rights years before **1971**. [Bretton Woods and Nixon **1971**](/history/20th-century/bretton-woods-nixon-1971) closes the arc — the dollar system at **$35** an ounce, and the **15 August 1971** close of the gold window for foreign official holders.",
      "Calendar order is the century’s sequence. Any hinge is a valid door — Weimar, **1933**, or **1971** — and the neighbors show what sat before and after.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "When you want an earlier case of paper losing trust, open [John Law and the Mississippi Bubble (1720)](/history/banks-paper/john-law) in Banks & paper — same kind of mechanism, different century. Do not treat **1720** and **1923** as one continuous event, or Weimar and Nixon as one print job. Return to [Sound Money History](/history) for ancient coinage, banks-paper, America, or silver.",
      "This overview does not retell every article in full. It does not turn **1907** into a personality cult, and it does not treat **1971** as a sudden invention of paper money. The claim stays sharp: from private rescue to central bank to paper collapse to gold recall to the gold-window close.",
    ],
  },
];

/** Cluster hub /history/america — rendered by the cluster route from Cluster.sections. */
export const americaHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "What is a dollar? In **1792** Congress answered with both gold and silver at a fixed mint ratio. Andrew Jackson answered by fighting a national bank. The Civil War answered with **greenbacks** — paper dollars made legal tender for the war — that floated below gold in New York until resumption. After **1873** the country argued over silver as if the Mint list were a crime. In **1900** statute defined the dollar in gold. The Federal Reserve (**1913**) and the later gold breaks of **1933** and **1971** belong in the [20th-century chapter](/history/20th-century). This chapter stops at the handoff.",
      "The [Crime of 1873](/history/america/crime-of-1873) is the silver-politics door; [greenbacks](/history/america/greenbacks-civil-war) is the war-paper door; the [road back toward gold](/history/america/road-back-gold) is the bridge into **1907**. Jackson’s bank war, Civil War greenbacks, and the **1913** Fed are related arguments about credit and paper — not one institution.",
    ],
  },
  {
    heading: "The claim: what the dollar is",
    paragraphs: [
      "America’s monetary fights are statute fights. Congress names a **mint ratio** (the official exchange between gold and silver coins), charters or kills a bank, makes paper legal tender, omits a silver dollar from free coinage, then defines the dollar in gold. Markets answer with **Gresham’s pattern** — when law prices two monies wrong, the “bad” (overvalued) money stays in the till and the “good” (undervalued) money leaves — plus gold premiums and reserve drains. Inside one republic, the unit’s metal and paper rules were contested in public law.",
      "This overview is not a pitch to hold metal, not a price target, and not a brief for bringing gold or silver back into today’s money. It follows the American argument from **bimetallism** (both metals legal at a fixed mint ratio) to the **1900** gold statute — then a clean stop so the next chapter can open with **1907**.",
    ],
  },
  {
    heading: "From 1792 to 1900",
    paragraphs: [
      "The [Coinage Act of 1792](/history/america/early-us-coinage) wrote gold and silver into law at **fifteen to one**. The Spanish dollar shaped the silver weight. When the mint ratio and the world ratio drifted, the undervalued metal left. **1834** moved the ratio gold-friendlier. That is the opening arithmetic.",
      "[Jackson and the Bank](/history/america/jackson-and-the-bank) is the fight over the Second Bank: **1832** veto, pet banks, Specie Circular, Panic of **1837**. The country then lived a long stretch without a federally chartered central bank. That is not **1913**. Keep the centuries labeled.",
      "[Greenbacks](/history/america/greenbacks-civil-war) financed the Union after **1862**. Legal tender paper floated below gold in New York until the Resumption Act’s date — **1 January 1879** — restored par in practice. War paper is a suspension, not a permanent theory of money.",
      "The [Coinage Act of 1873](/history/america/crime-of-1873) omitted free coinage of the standard silver dollar. Agrarian politics called it a crime; officials called it clarification toward gold. Free silver, Bland–Allison, Sherman, and Bryan’s **1896** campaign are that fight’s volume. The mechanics of two metals under one law also sit on [bimetallism](/history/silver/bimetallism).",
      "The [road back toward gold](/history/america/road-back-gold) closes the chapter: resumption in **1879**, Gold Standard Act in **1900**, then handoff to the [Panic of 1907](/history/20th-century/panic-1907-fed). Open the article for the reserve strain and the statute’s grains.",
    ],
  },
  {
    heading: "Three fights, three centuries",
    paragraphs: [
      "Jackson’s bank war is a charter and deposit fight before any Federal Reserve. Greenbacks are Civil War legal tender. The Fed is a **1913** answer to **1907** trust-company plumbing. Three related arguments about credit and paper are not one institution and not one century.",
      "Likewise: **1873** is a Mint list; **1900** is a gold definition; **1971** is a foreign official gold-window close in another chapter. Similar mechanisms can teach; merging the dates erases what actually changed.",
    ],
  },
  {
    heading: "Five doors into the republic’s unit",
    paragraphs: [
      "Five full narratives carry the claim. [Early U.S. coinage](/history/america/early-us-coinage) opens with the **1792** mint ratio, Spanish-dollar inheritance, and the **1834** gold-friendlier correction — Gresham at the Mint. [Jackson and the Bank](/history/america/jackson-and-the-bank) is the Second Bank, **1832** veto, pet banks, Specie Circular, and Panic of **1837** — not the Fed. [Greenbacks and the Civil War](/history/america/greenbacks-civil-war) is legal-tender war paper, the gold premium, the Resumption Act, and specie payments in **1879**.",
      "[The Crime of **1873** and the silver question](/history/america/crime-of-1873) is the Coinage Act that omitted the silver dollar, free silver, and Bryan **1896**. [The road back toward the gold standard](/history/america/road-back-gold) is resumption, silver-purchase strain, the Gold Standard Act **1900**, and the handoff to **1907**. Calendar order is the on-ramp; any hinge is a valid door.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Return to [Sound Money History](/history) for the other chapters. For the modern door after **1900**, open the [twentieth-century overview](/history/20th-century). Links to [bimetallism](/history/silver/bimetallism) stay where the general two-metal mechanics help. Calendar order is the on-ramp — early coinage, Jackson, greenbacks, **1873**, road back to gold — but any hinge is a valid door into the republic’s argument over the unit.",
    ],
  },
];

/** Cluster hub /history/silver — rendered by the cluster route from Cluster.sections. */
export const silverHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A mountain in the Andes poured silver into the world’s payments for centuries. A Spanish coin priced cargo from the Caribbean to East Asia. Law tried to freeze gold and silver in one unit at a fixed **mint ratio**. In **1980** a concentrated private position met an exchange rule book and broke. Later the same metal fed photography, electronics, and solar cells. Gold histories often treat silver as a supporting actor. This chapter reverses that habit.",
      "The [piece of eight](/history/silver/piece-of-eight) is the global-coin door; [bimetallism](/history/silver/bimetallism) is the mint-ratio door; [Silver Thursday](/history/silver/silver-thursday) is the **1980** break. American statute politics stay on the [America chapter](/history/america); link across, do not merge the stories. This is not a markets fact table and not a pitch to hold silver.",
    ],
  },
  {
    heading: "The claim: silver is not a gold footnote",
    paragraphs: [
      "Five articles carry the claim. Potosí set a global silver stock. The piece of eight carried that stock as a **typed coin** (a coin whose stamp named a trusted weight and fineness). **Bimetallism** tried to freeze gold and silver in one legal unit at a fixed mint ratio. Silver Thursday showed a concentrated private position meeting an exchange rule book. Industrial demand then gave the metal a second job beside monetary memory.",
      "Each article keeps its own century so a mountain, a mint statute, and a **1980** futures break are not read as one shared lesson about “printing.” Documentary only — no remonetization brief, no price target. The chapter exists because silver’s monetary and industrial arc will not fit as a sidebar in gold stories, and because a mint ratio, a market gold–silver quotient, and a fabrication survey measure different things.",
    ],
  },
  {
    heading: "Mountain, coin, statute, squeeze, dual role",
    paragraphs: [
      "[Potosí](/history/silver/potosi) is Cerro Rico from the **1540s**: mine, mint, fleet, Seville, and the Manila galleon toward Asian settlement demand. Flow, not romance. Silver history is not only a European inflation story; it is a two-ocean redistribution of monetary metal. For today’s country-by-country production and reserves picture, open the [world map](/maps).",
      "The [piece of eight](/history/silver/piece-of-eight) is the coin face — roughly **27 grams** of Spanish American silver that priced cargo from the Caribbean to East Asia. The early United States defined a dollar with that habit in mind; open [early U.S. coinage](/history/america/early-us-coinage) for the inheritance arithmetic.",
      "[Bimetallism](/history/silver/bimetallism) is mint ratio versus market ratio and Gresham under a two-metal statute. America’s loud event is the [Crime of 1873](/history/america/crime-of-1873). Keep mechanics here and statute politics there.",
      "[Silver Thursday](/history/silver/silver-thursday) is **27 March 1980**: the Hunt brothers’ concentrated position, January prints near **$50**, then margin hikes, limits on **new long** (buy) contracts, and a March break. Facts only — [information versus advice](/sound-money/information-not-advice).",
      "[Monetary history and industry](/history/silver/monetary-and-industry) names the split: money in memory, industrial input in fabrication surveys. Country investment rankings and ratio arithmetic live under [markets](/markets), not as reprints here.",
    ],
  },
  {
    heading: "Three silver stories, three hinges",
    paragraphs: [
      "Potosí is early-modern supply under empire. **1873** is a U.S. Mint list and a free-silver politics. **1980** is a private futures-and-bullion concentration plus an exchange response. Three silver centuries are not one crisis and not one lesson about “printing.”",
      "Likewise: a mint ratio is a law; a market gold–silver quotient is a dated pair of prints; industrial fabrication is a flow into products. Similar mechanisms can teach; merging them erases which instrument failed. Keep America’s statute volume on the America chapter and silver’s mechanism volume here, even when both pages talk about the same metal.",
    ],
  },
  {
    heading: "Five doors along the white-metal arc",
    paragraphs: [
      "Five full narratives. [Potosí](/history/silver/potosi) is Cerro Rico, the Manila galleon, and silver flow into Eurasian payments. The [piece of eight](/history/silver/piece-of-eight) is the Spanish dollar as a circulating global silver unit and the U.S. dollar’s inheritance. [Bimetallism](/history/silver/bimetallism) is fixed mint ratio, market-ratio drift, and Gresham — with a link to the [Crime of **1873**](/history/america/crime-of-1873).",
      "[Silver Thursday / Hunt Brothers **1980**](/history/silver/silver-thursday) is the concentrated position, the rule changes, and the **27 March 1980** break — facts only. [Silver: monetary history and industry](/history/silver/monetary-and-industry) names monetary memory versus photography, electronics, and photovoltaics. Flow → coin → statute mechanics → modern break → dual role — or enter at any hinge.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Return to [Sound Money History](/history) for the other chapters. Links to America stay where statute politics help — especially the [Crime of 1873](/history/america/crime-of-1873) beside [bimetallism](/history/silver/bimetallism). Links to [markets](/markets) stay where current survey and ratio facts live. For bars, coins, and premiums, use [gold and silver in practice](/gold-silver). The ordered silver door is the point — mountain, coin, statute, squeeze, and dual role as five dated claims, not one merged slogan about the white metal.",
    ],
  },
];

/** Cluster hub /history/banks-paper — rendered by the cluster route from Cluster.sections. */
export const banksPaperHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Paper money begins as a metal warehouse receipt — a claim check. Someone deposits coin or bullion; a goldsmith, a mint, or a public bank writes a paper that says the metal is there. The holder can return and collect the same weight. This chapter follows that receipt until it is no longer a warehouse claim: until notes circulate because a bank or a state says they will, and the window that once paid metal is optional, delayed, or gone.",
      "The long articles are [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks), the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam), and [John Law and the Mississippi Bubble](/history/banks-paper/john-law). Walk warehouses → Amsterdam → Bank of England → Law → assignats. Law’s **1720**, the assignats of the **1790s**, and Germany’s **1923** mark all show paper losing trust — under different regimes and dates.",
    ],
  },
  {
    heading: "The claim: a receipt, then a note",
    paragraphs: [
      "A warehouse receipt is not yet a currency. It is a named claim on a named pile of metal. Banking, in the sense these pages use the word, starts when the receipt itself is used to pay. The metal stays in the vault; the paper moves. Counterparties accept the check because they trust the warehouse, not because a statute has declared the paper to be money.",
      "Convertibility is the test. If the holder can still get coin at the window, the note is a convenient claim. If the window closes, limits payout, or pays in more paper, the note has become a bank or state liability whose value depends on policy and confidence. That sequence — receipt, circulating note, then a window that can fail — is the chapter’s claim. It is not a morality play about “printing,” and not a pitch to buy metal.",
    ],
  },
  {
    heading: "Warehouses to assignats",
    paragraphs: [
      "Late-medieval and early-modern Europe stored metal with people whose business was to keep it. Italian deposit banks already knew the warehouse model. London goldsmiths, in the seventeenth century, issued running-cash notes that merchants endorsed onward. As long as redemption was ordinary, the paper was a ticket, not a rival unit. The turning point is circulation without movement of the metal: once the ticket pays a debt, the issuer has a float. [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks) names that handoff.",
      "In **1609** Amsterdam created the **Wisselbank** (exchange bank) to take in mixed coin, credit a standard bank guilder, and let merchants settle by book entry (**giro**). For a long time its reputation was that it did not lend: a **florin banco** was a claim on metal in the vault. Bank money usually traded at a premium — the **agio** — over worn street coin. Later the bank made concealed advances to the city and the Dutch East India Company. When that lending became public in the **1780s–1790s**, the agio collapsed. That is a Dutch public-bank story. It is not **1720**, and it is not the assignats. The [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) page is that article.",
      "The [Bank of England](/history/banks-paper/bank-of-england) was not a copy of Amsterdam. In **1694**, during the Nine Years’ War, a private corporation was chartered to lend to the Crown and to issue notes. Subscribers put up about **£1.2 million** as a war loan. Over the eighteenth century those notes became the ordinary paper of London: national money grown from war finance, not from a city warehouse ticket alone. In **1797** the Bank stopped paying gold for its notes (**Restriction**); gold payout returned in the **1820s** (**resumption**). That English suspend–resume cycle is not the Mississippi Bubble, and it is not Weimar.",
      "France after Louis XIV faced heavy public debts. [John Law](/history/banks-paper/john-law) fused a note-issuing bank with a colonial trading company. In **1716** he founded the Banque Générale, later the Banque Royale, alongside the company that became the Compagnie des Indes. Notes supported share demand; shares supported confidence in notes. Through **1719** privileges widened and prices soared. Coin drained. In **1720** the System broke. Open [John Law and the Mississippi Bubble](/history/banks-paper/john-law) for the instruments and the dates.",
      "Decades later, revolutionary France issued [assignats](/history/banks-paper/assignats): paper supposedly tied to confiscated church and émigré lands, the biens nationaux. The land was real. Quantity rose faster than retirement. By **1795–96** the paper was not a unit anyone would hold. Law is **1720** and a royal bank-plus-company. Assignats are a revolutionary fiscal instrument with a land story. Keep them apart so **1720** does not swallow **1790**.",
    ],
  },
  {
    heading: "Three paper collapses — keep the dates",
    paragraphs: [
      "Three paper disasters share a mechanism. They are not one event. Law’s Mississippi System is a **1720** fusion of bank notes and company shares in Regency France. Assignats are **1789–1796** revolutionary paper on confiscated land. Germany’s mark in **1923** is a twentieth-century collapse after war, reparations, and extreme monetization. Weimar lives on the [20th-century chapter](/history/20th-century), not here.",
      "Paper can cease to be a trusted claim on metal. Merging the cases erases dates, regimes, and which window actually failed. Weimar is not “France printed again.” The Nixon gold-window close of **1971** is not the invention of paper money. Those turning points have their own articles.",
    ],
  },
  {
    heading: "Five doors from receipt to note",
    paragraphs: [
      "[From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks) is where a receipt for metal starts to circulate — banking begins when the ticket pays a debt. The [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) is the **1609** Wisselbank as public deposit money, then concealed lending and a lost reputation. The [Bank of England](/history/banks-paper/bank-of-england) is the **1694** war-finance charter, notes that became English money, then restriction and resumption.",
      "[John Law and the Mississippi Bubble](/history/banks-paper/john-law) is the **1720** note-and-share System under the Regency — the long narrative of this chapter. [Assignats](/history/banks-paper/assignats) is revolutionary paper supposedly tied to land, **1789–1796** — not a second Law, and not Weimar. Linear order is the on-ramp; Law first if **1720** is the hinge you need.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Return to [Sound Money History](/history) for the other chapters. Use the twentieth-century chapter for **1907**, Weimar, and **1971**; keep those dates off this chapter except as a labeled later case. Linear order is the on-ramp: warehouses, Amsterdam, Bank of England, Law, assignats — or open Law first if **1720** is the hinge you need.",
    ],
  },
];

/** Cluster hub /history/ancient — rendered by the cluster route from Cluster.sections. */
export const ancientHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Markets chose gold and silver because they were tradeable: portable, durable, divisible, and recognizable. Struck coinage from Lydia through Greece to Rome is a later technology for verifying metal. The metal came first. The stamp came second. Sound-money history does not begin when a gold window closed in **1971**.",
      "This chapter is the on-ramp: why two metals kept winning, how a stamp lowered the cost of checking them, and what happened when a state lightened the coin. Paper receipts — warehouse tickets that become notes — wait on [banks and paper](/history/banks-paper). Read metal and coin first.",
    ],
  },
  {
    heading: "The claim: metal first, stamp second",
    paragraphs: [
      "A coin is a piece of metal plus a mark. The mark is a claim about weight and fineness. It is not the money itself. Before any mint, traders already settled in gold and silver by weight. The invention of coinage is a cut in verification cost, not the birth of monetary metal.",
      "That order matters for this history. If you start the story in **1971**, you start at a late official window. If you start it with a warehouse receipt, you start after people already trusted a named pile of coin. This chapter sits earlier. It asks why gold and silver were the pile, and what a stamp did to that pile.",
      "The stamp does not abolish trust. It relocates it. You no longer weigh every lump in a market of strangers. You decide whether the issuer’s type is honest enough for the trade. When the type is trusted, coin travels farther than anonymous metal. When it is debased, people return to weight or hoard the better pieces.",
    ],
  },
  {
    heading: "Why markets chose gold and silver",
    paragraphs: [
      "Many things have been money in a local range: cattle, grain, shells, copper. For high-value, long-distance settlement, two metals kept winning. The selection is a trade result, not a decree that invented money from nothing. A king can name a unit. He cannot force a distant counterparty to accept a unit that fails in the hand.",
      "Portability is value per weight. Durability is survival across a generation: gold does not rot; silver tarnishes but does not disappear. Divisibility is the ability to make change without destroying the good — metal can be cut and recast. Recognizability is how cheaply a stranger can tell the stuff from a look-alike. Scarcity sits under all four. A metal that can be planted like wheat cannot stay a unit for long.",
      "None of this is a pitch to hold metal. It is why traders kept returning to the same two. [Why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) is the long article for those properties.",
    ],
  },
  {
    heading: "Lydia to the solidus",
    paragraphs: [
      "Lydia, in western Anatolia, is the conventional starting point for struck coinage in the seventh and sixth centuries BCE. Early pieces were electrum — a gold–silver mix — with a punch and, later, a type. Croesus is the name attached to separating gold and silver issues. The invention is the stamp that cut the cost of verifying metal. You still needed to trust the issuer. You no longer needed to weigh every lump. [Lydia and the first coins](/history/ancient/lydia-first-coins) is that stop.",
      "Greek city-states turned mines and mints into a commercial network. Athens’ Laurion silver and the owl tetradrachm are the familiar face: a recognised weight of silver that could move across the Aegean without a letter of introduction. Control of a mine was fiscal power. Laurion helped fund fleets. [Greece: silver and trade](/history/ancient/greece-silver-trade) places that network.",
      "Rome ran gold and silver together: the aureus and the denarius as the famous pair, with bronze for small change. When the mint ratio and the market ratio drift, the legally overvalued metal stays and the other leaves. Debasement of the silver coin was gradual, then obvious. The third-century crisis made the coinage a fiscal instrument. The lesson is fiscal, not moral: when spending outruns metal, the coin is lightened. [Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus) is that stop.",
      "Constantine’s solidus, in the early fourth century, was a gold coin of tightly held weight and fineness. It outlasted the western empire as the Byzantine nomisma. Continuity of weight is the story, not a romance of Rome. [After Rome: the solidus and early continuity](/history/ancient/solidus-continuity) carries that continuity. It is not a sequel about paper, and it is not **1971**.",
    ],
  },
  {
    heading: "Paper comes later",
    paragraphs: [
      "A coin is metal you can hold. A warehouse receipt is a claim on metal you are not holding. Banking, in the sense the next chapter uses the word, starts when that claim-check pays a debt and the metal stays in the vault. That handoff is not ancient coinage. It lives on [banks and paper](/history/banks-paper).",
      "Keep the stamp and the receipt distinct. Lydia’s punch is a verification mark on **electrum** (a natural gold–silver mix). Amsterdam’s florin banco is a ledger credit against a vault. Much later, John Law’s **1720** notes in France fused bank paper with company shares — a different machine, in [banks and paper](/history/banks-paper). Those later machines share a lesson — a claim can cease to be trusted — but they are not this chapter.",
      "Do not start this history in **1971** either. The Nixon gold-window close is a late official turning point in another chapter. It is not the invention of money, and it is not the first time a state spent past its metal. Return to [Sound Money History](/history) for that modern door. Use this chapter for the older order: metal, then stamp, then — much later — paper.",
    ],
  },
  {
    heading: "Five doors before paper",
    paragraphs: [
      "[Why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) is the long narrative — selection by trade: portability, durability, divisibility, recognizability; metal before the mint. [Lydia and the first coins](/history/ancient/lydia-first-coins) is electrum, a stamp, and a lower cost of verifying metal in western Anatolia. [Greece: silver and trade](/history/ancient/greece-silver-trade) is Laurion and the Attic owl — silver as a Mediterranean language.",
      "[Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus) is two metals under one state — when spending outran metal, the coin was lightened. [After Rome: the solidus and early continuity](/history/ancient/solidus-continuity) is Constantine’s gold unit keeping its weight into Byzantium — continuity, not romance. When the story leaves the coin for a ticket, open [banks and paper](/history/banks-paper). Keep **1720**, the **1790s**, **1923**, and **1971** off this chapter except as labeled later cases.",
    ],
  },
];
