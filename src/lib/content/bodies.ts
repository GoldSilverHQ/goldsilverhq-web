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
      "John Law’s System fused a note-issuing bank with a rising colonial trading company under the Regency of Philippe d’Orléans. In **1719–1720** notes and shares inflated together. The bust of **1720** was a paper-and-shares collapse under a court seeking relief from war debt.",
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
      "The two instruments were different. A **bank note** was a promise to pay in coin, subject to the bank’s rules and reserves. A **share** was ownership in the company, priced in the market and fed by dividends, privileges, and speculation. Law’s danger was fusion. When the same political machine pushed both, a rise in shares felt like proof that notes were sound — and plentiful notes made shares easier to bid up.",
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
      "**1729:** Law dies in Venice.",
    ],
  },
  {
    heading: "What the Regency left behind",
    paragraphs: [
      "Law’s **1720** leaves a narrow lesson. Fusing a note-issuing bank with a rising equity story can inflate both until metal drains and confidence snaps. The Mississippi Bubble was paper and shares under Regency debt politics, and it broke in a single year.",
      "France remembered. For most of the century the word *banque* carried the smell of the rue Quincampoix. When the Revolution needed money seventy years later, it issued [assignats](/history/banks-paper/assignats) tied to confiscated church and émigré land rather than to a trading company — a different paper, under a different regime, that failed on its own terms.",
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
      "None of this needs a hero. A private coalition acted as a temporary last resort because statute had not built one. That fact later shaped the politics of reform. A country that had needed one man’s library to keep the Exchange open was a country ready to argue for a public facility — even if it argued for years about who should control it.",
    ],
  },
  {
    heading: "A short timeline, 1907–1913",
    paragraphs: ["The Fed came after the panic, not before it."],
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
      "Jekyll Island was a drafting meeting in the commission years, not the law. The statute is the December 1913 Act. Morgan’s rescue was a private stand-in for a public facility that did not yet exist, and nobody at the time wanted the next October to depend on one man’s library again.",
    ],
  },
  {
    heading: "A lender built for the wrong year",
    paragraphs: [
      "The regional Reserve Banks opened in **November 1914**. By then war had already closed the peacetime gold window across Europe. The Fed was designed for a trust-company run on Fifth Avenue, and it arrived in time for the [end of the classical gold standard](/history/20th-century/classical-gold-standard-end) — a different kind of crisis, on a different scale.",
      "The order of events runs one way. The Fed did not cause Knickerbocker’s run. Knickerbocker’s run helped make a Fed look necessary to Congress. Six years separate a crowd on the pavement from a signature at the White House, and in between sit a stopgap statute, a commission, a meeting on an island, and hearings on a Money Trust.",
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
      "It is a documented extreme, not a script every paper currency has to finish. The paper mark died because a stop was missing and a government kept spending through the gap. When the Rentenmark put a stop back, the spiral stopped within weeks.",
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
      "**1933** and **1971** were different acts. In 1933 the United States ordered private citizens to turn in monetary gold and then raised the official gold price for government accounting. In 1971 private Americans were already outside the official gold channel. What closed was foreign official redemption of dollars for US gold.",
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
      "The last of those official prices outlived the system it belonged to. The Treasury still carries its gold at **$42.22** an ounce — an [official gold book value](/markets/official-gold-book-value) that no holder, foreign or domestic, can present a dollar against.",
    ],
  },
];


const classicalGold: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In the first days of August **1914**, as armies mobilized, the peacetime gold window closed across Europe. Britain’s Currency and Bank Notes Act of **6 August** put Treasury notes of one pound and ten shillings into daily use and made Bank of England notes legal tender more broadly. Gold exports were blocked or licensed. The mark, the franc, and other gold names remained on coins and accounts. The public could no longer test those names at the teller.",
      "Before that summer, major currencies were convertible into gold at fixed rates in peacetime — the classical gold standard. Convertibility, gold shipment, and London settlement held the order together. What came after the war was not the same system with a pause. It was a different architecture.",
    ],
  },
  {
    heading: "The peacetime promise",
    paragraphs: [
      "Before **1914** the international monetary system was a set of practices, not a single treaty. A currency on the classical gold standard was convertible into a defined weight of gold. Notes and deposits were claims that could, in ordinary times, be turned into coin or bullion at a published mint price. Gold could be imported and exported.",
      "The parts of that promise stayed distinct. The mint price was the official gold definition of the unit. A note was a circulating promise to pay that gold. A deposit was a book claim that could be drawn as notes or coin. Convertibility was the ordinary test: the holder could still get metal at the window. Counterparties took the paper because they trusted that window, not because a conference had declared the paper to be gold.",
      "Membership was practice, not a club card. Britain had been on gold, in the modern sense, since the early nineteenth century. Germany, France, and others joined as they defined their units in gold and opened the window. The United States did so after resumption and the Gold Standard Act of **1900**. The map was several national promises, mutually convertible because each promise pointed at the same metal.",
    ],
  },
  {
    heading: "Gold points and London settlement",
    paragraphs: [
      "That convertibility, plus the cost of shipping metal, produced gold points. Sterling’s mint par against the dollar sat near **$4.86**. If sterling cheapened far enough, a New York house could take gold in London and ship it home more cheaply than paying the market rate. If sterling dearened, gold moved the other way. The band was mint par plus freight, insurance, and interest while the metal was at sea — a few cents either side of $4.86.",
      "Inside the points, bills and credits did the settling. Outside them, gold actually moved. A broken promise showed up as a drain. A central bank that lost gold had to attract it back or lose the right to call its paper a gold claim.",
      "London was the centre. Sterling bills financed trade far from Britain. The Bank of England’s Bank rate was the price of credit in that market. Raise the rate, and balances and metal were pulled toward Threadneedle Street. Lower it, and gold could leave. Quieter “gold devices” — the price paid for bars, the terms of advances — moved the cost of taking metal by a few pennies. They did not abolish the points. People and foreigners could still ask for gold.",
    ],
  },
  {
    heading: "The real constraint",
    paragraphs: [
      "Textbooks later called this the “rules of the game”: lose gold, tighten; gain gold, ease. Real central banks did not always play that cleanly. They sterilised flows, used gold devices, and protected domestic credit when they could. The constraint still mattered. A bank that promised gold on demand could not expand without limit if people and foreigners were free to take the metal. Close the window, or block the ship, and the same note is wartime paper that still spends if the public will hold it.",
      "The United States entered the century with a gold dollar and, after **1913**, a new central bank. The classical system around that Fed was already older than the Fed. **1907** had been a trust-banking liquidity failure; metal still defined the unit. The break with convertibility came from war, not from that panic.",
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
      "Britain’s **1925** return at the pre-war sterling–dollar parity reused a number. It did not rebuild the world of **1913**. In **1931** Britain left gold again. Other interwar “gold standards” were pegs, exchange controls, and official gold — a different architecture wearing a familiar name.",
      "Where the wartime stop never returned, paper could run for the Treasury. Germany’s mark later collapsed into hyperinflation — war finance first, then a unit that ceased to work as money. That was not a pause in the classical system. The peacetime machine of convertibility, gold points, and London settlement had ended in the summer of **1914**.",
    ],
  },
];


const goldRecall1933: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **5 April 1933**, Franklin Roosevelt signed Executive Order **6102**. Most gold coin, gold bullion, and gold certificates in private American hands had to be delivered to a Federal Reserve Bank, a member bank, or a Treasury agent — at **$20.67 an ounce**, by a deadline printed as **1 May**. The week before inauguration, gold had already been leaving banks. A national bank holiday had stopped ordinary payments. The order made the call formal.",
      "The Gold Reserve Act of **1934** then vested title to monetary gold in the United States and reset the official price from **$20.67** to **$35** an ounce. The public claim on gold at the old mint price was removed. Official gold became a Treasury asset, not circulating money.",
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
    heading: "A short timeline",
    paragraphs: ["The holiday, the order, the contracts, the statute, then the new official price. Not a single weekend."],
    list: [
      "**6 March 1933.** National bank holiday. Gold payments and exports already constrained.",
      "**9 March 1933.** Emergency Banking Act. Presidential authority over gold in the emergency.",
      "**5 April 1933.** Order 6102: deliver gold coin, bullion, and gold certificates at $20.67.",
      "**1 May 1933.** Delivery deadline in the order. Licenses and exemptions continue.",
      "**12 May 1933.** Thomas Amendment: authority to cut the gold content of the dollar.",
      "**5 June 1933.** Joint Resolution voids gold clauses in contracts.",
      "**30 January 1934.** Gold Reserve Act. Title vests in the United States. Official price $35.",
      "**1934–1974.** Domestic monetary gold holding remains restricted. The official window for foreign governments stays open at $35 until 1971.",
    ],
  },
  {
    heading: "The stated rationale",
    paragraphs: [
      "The contemporaneous justification was Depression emergency: stop hoarding, reopen banks, expand the money stock, and raise the domestic price level. Officials argued that gold in private hoards and in bank vaults as coin blocked recovery, and that a higher official gold price would cheapen the dollar in gold terms.",
      "Whether that program worked as advertised is a later argument among economists. The sequence itself is not in dispute: holiday, order, delivery, gold-clause resolution, statute, new official price.",
    ],
  },
  {
    heading: "Not 1914, not 1971",
    paragraphs: [
      "The [classical gold standard](/history/20th-century/classical-gold-standard-end) ended as a working international system in **1914**, when war finance blocked gold shipment and protected notes from internal drains. That break is about convertibility and metal movement among countries. It is not a domestic recall of coin from American households.",
      "The **1933–34** sequence is a United States statute story. Private monetary gold rights are removed. Title to official gold vests in the Treasury. The official price moves from $20.67 to $35. Americans lose a public claim they had still possessed after **1914**.",
      "Bretton Woods, in **1944**, defined the dollar against gold at **$35** for official convertibility. Ordinary people in the United States did not redeem paper at the Treasury window. On **15 August 1971** the [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) closed the remaining window: foreign official holders could no longer present dollars and demand US gold at the posted price.",
      "Three different breaks, then. **1914** ends classical convertibility under war. **1933–34** removes the US public claim and revalues official gold. **1971** ends official dollar–gold convertibility for foreign holders. The shared lesson — gold stops being a right you can test — is not identity of the three events.",
    ],
  },
  {
    heading: "After 1933",
    paragraphs: [
      "Americans could not legally hold monetary gold for decades. Licenses covered industry, dentistry, and art. The prohibition lasted until the end of **1974**, when statute again allowed citizens to hold gold bullion. Restoration of private holding did not restore a public convertibility contract. The $35 official price was already a bookkeeping fossil. The metal had a market. The dollar did not have a public gold window.",
      "Between **1934** and **1971** the official price still mattered for foreign official holders and for Treasury accounts. It did not matter as a price at which an American could walk in with a note and walk out with coin. When the window finally closed in **1971**, it was the $35 price the **1934** Act had set that could no longer be honoured.",
      "Americans kept the paper. The metal went to the Treasury at $20.67 an ounce and reappeared on its books at $35. The notes in their wallets looked the same as before. What those notes could be exchanged for had changed by law.",
    ],
  },
];

const whatIsSoundMoney: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A note can clear the till on Monday and still fail a harder test: can the issuer create more of it by decision alone? Sound money is money whose supply cannot be expanded at will by a political authority. The unit is costly to produce, or it is bound by a contract that can actually be enforced — typically **redeemability**: a holder can present the note and demand a known weight of metal. The point is not nostalgia for coins. It is whether the unit of account stays honest over long periods.",
    ],
  },
  {
    heading: "A working definition",
    paragraphs: [
      "If a treasury or a central bank can create more units without a matching real cost, the money is not sound in this sense. It may still circulate. It may still be legal tender. Circulation is not the test. The test is whether the issuer can dilute the stock as a matter of policy.",
      "Historically the constraint was the cost of mining and minting gold and silver, or a redeemability rule that let holders present paper and take a known weight of metal. When that stop is gone, the unit can still work as a medium of exchange. It no longer passes the test.",
      "Three money jobs sit in the background of the definition: medium of exchange, unit of account, and store of value. Sound money is the claim that the third job is not optional packaging. A unit that clears today’s till but cannot be held across years without political permission to dilute it fails the store-of-value half of the idea.",
      "Money that fails the test has a name of its own. The line between [hard money versus fiat](/sound-money/hard-money-vs-fiat) runs exactly here: one kind is costly to produce, the other exists because law and habit say it does.",
    ],
  },
  {
    heading: "Where the phrase comes from",
    paragraphs: [
      "Older English used “sound” in two related ways: the ring of a good coin (as against a counterfeit or a clipped piece), and sound as in healthy, not debased. Both senses survive. A sound coin rang true. A sound monetary standard did not quietly lighten the unit.",
      "Nineteenth-century writers used the phrase for metal standards and for convertibility rules that kept paper honest. Debates over free silver, bank notes, and gold clauses all leaned on that vocabulary: was the unit honest, or was it a political instrument dressed as money?",
      "The phrase later migrated into textbooks, hard-money pamphlets, and modern glossaries, and picked up slogans along the way. Under the slogans the claim is still a testable one: who may create the unit, and at what cost.",
      "Crypto writers now borrow the adjective for tokens with capped issuance schedules. That argument is about code rather than metal and statute. It is a different argument, with its own history.",
    ],
  },
  {
    heading: "The test: issuer discretion",
    paragraphs: [
      "Ask one question of any unit: can the issuer expand the stock as policy, without a matching real cost or an enforceable redeemability contract? If yes, the money fails — even when it is popular, even when it is legal tender, even when it once had a gold story attached.",
      "A gold coin can fail in practice through clipping, through a false mint ratio, or through a statute that ends public convertibility. Those are failures of the stop, not proofs that the definition was wrong. The definition names a constraint. It does not guarantee that every gold standard was well run.",
      "Paper that is redeemable on demand in a defined weight of metal can pass while the contract holds. When the window closes, the same note becomes, for practical purposes, discretionary paper. That happened across Europe in the summer of **1914**, when war shut the gold window, and again on **15 August 1971**, when the [Nixon shock](/history/20th-century/bretton-woods-nixon-1971) suspended the last official promise to turn dollars into gold.",
      "The test is institutional, not aesthetic. A beautiful coin with a false weight fails. An ugly note with a working redeemability window can pass while the window is open. Look at the stop, not the branding on the face.",
    ],
  },
  {
    heading: "Metal, paper, and the stop",
    paragraphs: [
      "Metal entered money because markets needed a costly, recognisable, divisible stock. Stamps and statutes came later. Paper entered as a claim on metal, or as a warehouse receipt, long before it became a free-standing unit.",
      "Sound money is not “only coins forever.” It is the presence of a stop that the issuer cannot casually repeal for fiscal convenience. Mining cost is one stop. A public convertibility contract is another. Gold sitting in a vault, with no holder able to claim it, is not a stop at all — which is why the word [“backed”](/sound-money/backed-money) needs such care.",
      "Wartime suspensions, gold recalls, and closed windows are the same event seen in different years: the stop being removed. Each left the notes in circulation. Each changed what the notes were.",
    ],
  },
  {
    heading: "The stop, not nostalgia",
    paragraphs: [
      "The definition does not claim that gold and silver never changed in price, or that every gold standard was well run. Metal money can be debased by clipping, by mint ratio tricks, and by suspending convertibility. Relative prices still move under a hard unit. Sound money constrains one source of a general rise in prices; it does not freeze bread against rent.",
      "Nor does a metal stop promise a fixed stock. The gold rushes in California and Australia around **1850**, and in South Africa after **1886**, added to the world’s gold and moved prices with it. What the miners could not do was add metal by decree. Every new ounce had to be found, dug, crushed, and refined before it could be coined.",
    ],
  },
  {
    heading: "Where the test was failed",
    paragraphs: [
      "The definition earns its keep in dated cases. In Germany in **1923**, a paper mark created against Treasury bills stopped working as money by November. In **1933** the United States ordered private gold delivered and then revalued the official ounce. In **1971** foreign governments lost the right to present dollars for gold. In each case the notes kept circulating. What the holder could demand for them did not survive.",
      "Those episodes are told in full, with their statutes and their numbers, in [Sound Money History](/history). What falls on the holder when the unit weakens is the subject of [inflation and purchasing power](/sound-money/inflation-purchasing-power).",
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
      "Hard is not a synonym for “never changes price.” An ounce of gold can buy more or less bread. The hardness is on the supply side: expanding the stock takes real resources. That is why markets settled on gold and silver long before stamps and statutes finished the story.",
      "A redeemable note that is a claim on a defined weight of metal can sit in the hard category while the contract holds. The hardness is the metal stop, not the paper in the wallet. Drop the stop and the same paper migrates into the fiat column without changing its ink.",
      "Scarcity alone is not enough. A rare collectible can be scarce and still not be money. Hard money couples costly production with monetary use — settlement, pricing, and holding balances — under rules that make new units expensive to create.",
    ],
  },
  {
    heading: "Fiat money",
    paragraphs: [
      "Fiat money is a claim created by a state or a bank, accepted because of law and habit. The Latin *fiat* is “let it be done.” The unit exists because an authority says it does, and because people need it for taxes, debts, and daily settlement.",
      "Fiat can be well managed or badly managed. Management is a separate question. The distinction is the stop. If the issuer can expand the stock as policy, the money is fiat even when it once had a gold story attached.",
      "Legal tender rules, tax acceptance, and clearing habit keep fiat useful. Usefulness is not hardness. A convenient unit can still be discretionary paper. Central-bank independence, inflation targets, and fiscal rules are management tools inside fiat; they are not a return to mining-cost constraints.",
    ],
  },
  {
    heading: "Both can circulate",
    paragraphs: [
      "Circulation does not decide the category. People have used salt, cigarettes, paper notes, bank deposits, and gold coin. A circulating fiat unit can be more convenient than coin. A hard unit can be hoarded and disappear from the till. The question is the constraint, not the popularity.",
      "When convertibility is suspended, a note that was a claim on metal becomes, for practical purposes, fiat. That is what happened across Europe in [1914](/history/20th-century/classical-gold-standard-end), and to the dollar’s last official gold link in [1971](/history/20th-century/bretton-woods-nixon-1971). The paper did not change color overnight. The stop did.",
      "The United States had already lived through the reverse. During the Civil War, paper greenbacks issued to pay for the fighting traded below gold in New York for years — the story of [greenbacks and the Civil War](/history/america/greenbacks-civil-war). **Resumption** in **1879** brought it back to **par** — one paper dollar again worth one gold dollar in the market. That was war paper and statute, not proof that paper always equals metal.",
      "Gresham’s pattern — bad money driving good money out of the till when legal ratios misprice metals — is a circulation fact under hard regimes. It does not turn the undervalued metal into fiat. It shows that statute and market ratio can disagree while both metals remain costly to produce.",
    ],
  },
  {
    heading: "Where the line blurs",
    paragraphs: [
      "Gold-exchange systems, as after Bretton Woods, backed some currencies with dollars and dollars with official gold — not with coin in the public’s hand. The vocabulary of “gold” survived longer than the public claim.",
      "Bank deposits that settle in fiat are claims on a banking system, not ounces. Covering a note issue with government bonds is a claim on a tax office, not metal backing. Most of the confusion gathers around the word [“backed”](/sound-money/backed-money).",
      "Hard money is not “assets I like,” and fiat is not “money I dislike.” The line is production cost and issuer discretion. It is not a ranking of virtue. A well-run fiat regime can be stable for years. A mismanaged gold regime can still debase the coin.",
    ],
  },
  {
    heading: "Failures on each side",
    paragraphs: [
      "Hard money fails by debasement, by false mint ratios, by clipping, and by suspending convertibility. The metal can still exist while the unit stops being honest. [Bimetallism](/history/silver/bimetallism) — a system that makes both gold and silver legal money at a fixed mint ratio — shows how a legal ratio can push one metal out of circulation without abolishing either metal. The [Crime of 1873](/history/america/crime-of-1873) shows how statute can redefine which metal the unit points at.",
      "Fiat fails by over-issue relative to the goods and claims it is asked to measure, by broken fiscal stops, and by loss of confidence that collapses demand for balances. Germany in **1923** is the extreme case: a paper mark issued for the Treasury until nobody would hold it, told in full in [Weimar 1923](/history/20th-century/weimar-1923).",
      "Both categories can finance wars, pay taxes, and clear trade. The category names the stop. What holders feel when the unit weakens, under either label, is a fall in [purchasing power](/sound-money/inflation-purchasing-power).",
    ],
  },
  {
    heading: "Costly production versus law and habit",
    paragraphs: [
      "Put the two side by side and the difference is the path of the next unit. A new ounce of gold starts as ore underground. It has to be found, dug, crushed, refined, and assayed before it can settle anything, and every one of those steps costs labour and capital. A new unit of fiat starts as a decision, and the cost of carrying it out is close to nothing.",
      "The digging never stops, and its pace can be counted. Ounces of silver leaving the ground for every ounce of gold make a mining-ratio clock, and it runs well below the price ratio traders quote as the [gold–silver ratio](/markets/gold-silver-ratio). The gap between the two numbers is a reminder that even hard money has a supply, only one that no treasury can vote into being.",
      "Everything else follows from that difference. One kind of money can be lost, stolen, or debased by the people who handle it, but not multiplied by them. The other can be managed well for a generation and then, when a budget or a war demands it, multiplied by the institution that issues it.",
    ],
  },
];

const inflation: Section[] = [
  {
    heading: "",
    paragraphs: [
      "If the same hour of work buys less bread, less rent, or less metal over years, the unit has weakened — even when no wheelbarrow appears in the street. Inflation is a decline in the purchasing power of the unit. Prices are the visible surface. Hyperinflation is a special case, not the definition.",
    ],
  },
  {
    heading: "What inflation measures",
    paragraphs: [
      "The underlying question is whether the stock of money is growing faster than the goods and claims it is asked to measure. An hour of work is a useful check. If the same hour buys less across years, the unit has weakened. That can happen with or without a dramatic crisis.",
      "Consumer-price indexes and wholesale indexes are measurement tools. They are not the definition. The definition is purchasing-power erosion of the unit. Indexes help document that erosion; they do not invent it. Basket choice, quality adjustments, and base years matter for reading a series — they do not rewrite the idea.",
      "[Weimar 1923](/history/20th-century/weimar-1923) is the extreme, and it is tempting to paste it onto every mild rise in a price index. Ordinary inflation and hyperinflation share a channel when the money stock is discretionary; they do not share a severity or a timeline. A two-percent annual rise and a fifty-percent monthly rise are different animals.",
    ],
  },
  {
    heading: "Money stock and prices",
    paragraphs: [
      "Prices can rise because goods are scarce, because demand shifts, or because more units chase the same things. Hard-money writers emphasise the last channel. A complete account of any year needs all three. What matters for money is the last one: a unit that can be issued without cost turns it into a policy choice.",
      "Sound money does not make relative prices stand still. It constrains one source of a general rise. Harvest failures, war damage, and demand shifts still move particular prices under a hard unit. A gold standard that holds convertibility can still see wartime scarcity lift food prices without rewriting the unit.",
      "When the issuer can expand the stock as policy, a fiscal gap can be closed with new units. Tax arrives later in weaker money. Real cash balances fall; people spend faster; velocity rises. That feedback is the mechanical core of severe inflation episodes — a mechanism, not a morality play.",
    ],
  },
  {
    heading: "Purchasing power as the check",
    paragraphs: [
      "Ask what a unit buys over time: a basket of goods, an hour of common labor, a weight of metal. If the basket shrinks for the same nominal wage, purchasing power fell. If metal rises sharply in the unit while the metal’s mining cost did not jump overnight, the unit may be the thing that weakened.",
      "Premiums, taxes, and local scarcity still matter for any single price. The purchasing-power check is about the unit across many goods, not one headline. Whether the issuer can expand the stock as policy is the dividing line between [hard money and fiat](/sound-money/hard-money-vs-fiat).",
      "Greenbacks during the American Civil War traded at a gold premium in New York. That premium was the market’s measure of paper against metal — a wartime purchasing-power gap, quoted daily, that anyone holding greenbacks could read. Resumption later closed it; the history is in [greenbacks and the Civil War](/history/america/greenbacks-civil-war).",
      "Interest rates and bond prices move with inflation expectations too. A lender who expects the unit to weaken asks for more of it back. That is a second-order effect. The first-order object is still what the unit buys.",
    ],
  },
  {
    heading: "Hyperinflation is a case",
    paragraphs: [
      "Hyperinflation is usually marked when prices rise on the order of **50% or more in a month**. It is a phase, not a synonym for every inflation. Germany crossed that line in mid-**1922**; the paper mark then ceased to work as a store of value or a unit of account by autumn **1923**.",
      "The cartoons — wheelbarrows, wallpaper notes — are evidence of velocity and refusal to hold balances. They are not the cause. In Germany the chain ran from war finance and a missing gold stop to fiscal gaps and a central bank that turned Treasury paper into marks.",
      "Assignats in revolutionary France and Law’s **1720** System are other paper collapses with their own dates and instruments. Rhyme teaches mechanism. Merging them erases centuries. Each belongs to its own regime and its own decade.",
      "Stabilisation after hyperinflation usually needs three things at once: a new unit, a fiscal stop, and a credible refusal to print for the treasury. Germany’s Rentenmark in November **1923** had all three. Without the second and third, a new name on the note only restarts the clock.",
    ],
  },
  {
    heading: "Not every rise is printing",
    paragraphs: [
      "It would be too neat to call every price rise “only printing.” Scarcity and demand shifts are real, and a war or a failed harvest can lift prices under the hardest money ever minted. What the money-stock channel explains is the rise that keeps going after the scarcity passes, because the unit itself is being multiplied.",
      "The two can be told apart over time. A shortage lifts some prices and then eases. A weakening unit lifts nearly all of them and does not ease, because the thing being measured has changed.",
    ],
  },
  {
    heading: "The slow case and the fast one",
    paragraphs: [
      "Most inflation is slow. A few percent a year is hard to feel in a week and easy to feel across a working life: a saver who holds the unit for thirty years at three percent a year ends up with well under half of the purchasing power he started with. Nobody queues at a bank for that. It shows up in wages that have to be renegotiated and savings that have to be put somewhere else.",
      "The fast case is rarer and louder. It is the one people remember, and it is the one that ends with a new unit. Both run through the same channel. What separates them is how quickly the holder notices, and how quickly he stops holding.",
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
      "When writers say a currency is “backed by the full faith and credit” of a government, they name a tax and legal-tender story. That can be a strong fiscal claim. It is not metal backing.",
      "The word “backed” sells confidence. The useful question is the mechanism. Without a presentment right, confidence is a story about the issuer — not a metal contract the holder can enforce at a teller window on a working day.",
    ],
  },
  {
    heading: "Three easy confusions",
    paragraphs: [
      "First: covering a note issue with government bonds is not metal backing. It is a claim on a tax office. Second: a gold-exchange standard, as after [Bretton Woods](/history/20th-century/bretton-woods-nixon-1971), backed some currencies with dollars and dollars with official gold — not with coin in the public’s hand. Third: the [Rentenmark](/history/20th-century/weimar-1923) was “backed” by mortgages. That was an accounting and political device to stop the press, not a pile of gold at the teller window.",
      "The official book value of U.S. gold — still carried at a statutory dollar price far from the market — is another trap for the word. The [official gold book value](/markets/official-gold-book-value) is an accounting convention, not a sign that anyone can redeem anything at that price.",
      "Central-bank reserve totals answer “how much metal does the state hold?” They do not answer “can a private holder present notes and take metal?” A rising chart of [central-bank gold reserves](/markets/central-bank-gold-reserves) can sit beside a purely fiat domestic unit without contradiction.",
    ],
  },
  {
    heading: "Redeemability in practice",
    paragraphs: [
      "Under a working gold or silver standard, banks and treasuries published rules for convertibility: which notes, which weights, which offices. The public test was the window. When the window closed for war or emergency, the note’s legal name might still say “gold.” The contract had changed.",
      "The [1933 U.S. gold recall](/history/20th-century/1933-gold-recall) shows the other side: even a gold dollar can have the public claim removed by statute. Citizens lost monetary gold rights years before the **1971** close of the gold window for foreign official holders.",
      "Bretton Woods then limited the remaining gold link to official holders at **$35** an ounce. Retail Americans were not walking into a Treasury window for coin. Calling that era “gold-backed money” without naming who could redeem is how the slogan swallows the contract.",
      "Warehouse receipts and early bank notes started as claims on deposited metal. That is how paper money began. When the receipt stops being payable in metal on demand, the instrument has changed category even if the engraved language lags behind.",
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
    heading: "Why the vault still matters",
    paragraphs: [
      "Reserves are useful to states. They settle debts between governments, defend exchange rates, and reassure creditors in a crisis. None of that is nothing. It is simply a different thing from a public right to present a note and take metal.",
      "The difference shows up when it is tested. A holder with a contract can walk to the window. A holder with a slogan can only read about the vault. The same tonnes of gold can sit behind both arrangements; only one of them puts the key in the holder’s hand.",
    ],
  },
  {
    heading: "What the word used to mean",
    paragraphs: [
      "For most of the nineteenth century, “backed” was not a slogan at all. A note was backed if it could be exchanged for coin, and the bank that issued it could be run if it could not pay. Each step of the twentieth century — the wartime suspensions of **1914**, the American recall of **1933**, the closing of the official window in **1971** — kept the word and removed a holder from the contract.",
      "By the end, the word described a feeling about the issuer rather than a right against it. Pinning it back to its older meaning — who can present what, for how much — is what makes the history of those years readable. [What is sound money?](/sound-money/what-is-sound-money) names the constraint; [hard money vs fiat](/sound-money/hard-money-vs-fiat) names the cost of production behind it.",
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
      "Before public banks, paper money is a warehouse receipt: a claim check on deposited metal. Banking begins when that paper pays a debt without the metal leaving the vault. A city giro, a war bank’s notes, a regency’s shares, a revolution’s land paper — each of those later machines grew from that handoff.",
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
      "That civic answer is older than London goldsmith notes. Barcelona’s Taula de Canvi dates from **1401**. Venice opened the Banco della Piazza di Rialto in **1587** after private-bank failures. Amsterdam’s Wisselbank, in **1609**, became the model public deposit bank. Public tables and private goldsmiths are parallel answers to the same custody problem, not a single national ladder.",
      "London’s path ran through the mint and then through goldsmiths. After the Tower seizure of **1640**, merchants no longer treated a royal warehouse as a safe one. After the Restoration, goldsmiths took the custom. They issued running-cash notes: receipts that could be endorsed onward.",
      "Those notes were still, in form, claims on metal left with a private keeper. In practice the goldsmiths also lent. The float — the metal that stayed while the paper moved — became a loan book. In **1672** the Stop of the Exchequer suspended payments on much of that royal debt. Goldsmith-bankers who had treated the Exchequer as a safe asset discovered that a sovereign borrower can close a window too.",
    ],
  },
  {
    heading: "When the receipt starts to move",
    paragraphs: [
      "What changes everything is circulation without movement of the metal. Once a third party accepts the ticket in payment, the issuer has issued money in use, even if the law still calls it a deposit receipt. The vault need not empty. The paper does the paying.",
      "As long as redemption is ordinary, the ticket remains a claim. People hold it because it is lighter than coin, not because they have given up on coin. When issue outruns what the window can pay, the same paper becomes a bet on the keeper. That is the quiet shift from warehouse to bank. It does not require a theory of fiat. It requires a queue the till cannot meet.",
      "Three instruments sit close together here. A **warehouse receipt** is a claim on identified metal. A **bank note** is a promise to pay, often against a mixed reserve and a loan book. A **public-bank balance** is a book entry the city or the state has made hard to refuse for large settlement. The first can become the second without a revolution. The second becomes the third when settlement is pulled onto a public ledger.",
    ],
  },
  {
    heading: "Why a public bank",
    paragraphs: [
      "Private keepers solved a storage problem and then a payment problem. They did not, by themselves, give a whole market one book everyone had to use. Worn and foreign coin made large bills of exchange a fight over which pile counted. A public deposit bank could take in mixed specie, credit a standard bank money, and force wholesale payments through its books.",
      "Amsterdam built that table. The [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam), the Wisselbank of **1609**, long had a reputation for not lending — a florin banco as a claim on metal, not on a loan. Concealed lending, made public in the **1780s–1790s**, eventually broke that reputation.",
      "England’s later public machine was different again. The Bank of England, chartered in **1694**, was born as war finance with a note issue attached, not as a city giro table. It would stop paying gold for its notes in **1797** and resume only in the **1820s**.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The order is European, not a single national ladder."],
    list: [
      "**1401.** Barcelona’s Taula de Canvi: an early civic deposit table.",
      "**1587.** Venice’s Banco della Piazza di Rialto, after private-bank failures.",
      "**1609.** Bank of Amsterdam: public deposit money for the bill market.",
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
      "Each of those failures kept its own date. [John Law’s](/history/banks-paper/john-law) Mississippi System broke in **1720**: notes and shares under a French regency. The assignats ran from **1789** to **1796**: revolutionary paper with a land story. Germany’s mark in **1923** was a twentieth-century collapse after war, reparations, and extreme monetization. The mechanisms rhyme. The regimes, the promises, and the centuries do not.",
      "All of them rested on the habit the goldsmiths taught London: a slip of paper could settle a debt while the metal stayed where it was. The ticket stayed good exactly as long as the window paid.",
    ],
  },
];

const amsterdam: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On the Dam in the early seventeenth century, a bill drawn on Amsterdam could still turn into an argument over metal: foreign dollars, clipped pieces, worn domestic coin — which pile counted as payment? In **1609** the city opened a public answer. Mixed specie went into the Wisselbank. A standard bank guilder came out on the books. Large settlement moved by **giro** — a debit and a credit — while the vault stayed shut.",
      "That civic ledger sat between a [warehouse receipt](/history/banks-paper/warehouses-to-public-banks) and the note-issuing banks that came later. The **agio** — the premium of bank money over street coin — is how the market priced the unit while the reputation held. Concealed lending is how the reputation later broke.",
    ],
  },
  {
    heading: "Why a civic ledger",
    paragraphs: [
      "Amsterdam was a bill-of-exchange market. Large debts among merchants were written on the city. Payment still meant assembling a pile of coin and haggling over quality. Private cashiers already kept money and made transfers. Failures and quality fights still reached the wholesale market.",
      "The city answered with a public deposit bank. An ordinance of **31 January 1609** created the Amsterdamsche Wisselbank. Mixed specie went in. A standard credit came out. Large bills drawn on Amsterdam were to be settled through its books. The point was not to invent a national paper currency. It was to give the bill market one ledger everyone had to use.",
    ],
  },
  {
    heading: "How giro money settles",
    paragraphs: [
      "Giro is settlement by transfer of a balance. The depositor does not collect coin and cart it across the Dam. He orders the bank to debit his account and credit another. The metal stays. The books move. For a bill falling due, that is payment.",
      "The instruments were different things. A **warehouse receipt** is a claim on identified metal. A **giro balance** is a book credit at a public table, transferable to another account-holder. A **bank note** is a circulating promise to pay, typically issued by a later corporation with a loan book. Amsterdam’s ordinary machine is the second. It does not need a printed note walking the street. It needs a merchant with an account, or a cashier who has one, and a rule that large bills clear on those books.",
      "Convertibility still mattered. Coin could be withdrawn, subject to fees and to the bank’s rules. Fees made leaving the metal in, and paying on the books, the cheaper habit. As long as the window was ordinary, the florin banco was a convenient claim on a civic vault.",
      "From **1683** the bank issued receipts for coin left on deposit. The receipt was a claim on those coins. The bank balance was a transferable credit in banco. To take the original metal out, a holder needed the receipt. To pay a bill, he needed only the balance. The two claims could be sold apart. That split made bank money a settlement unit even when a given bag of coin stayed put. It was still not a circulating note. It was a more complete giro.",
    ],
  },
  {
    heading: "Florin banco and the agio",
    paragraphs: [
      "Bank money and current money were not the same pile. Current coin in daily circulation was worn, mixed, and often light. Banco was the credit on the Wisselbank’s books, written as a full-weight guilder. Because banco was better money for large settlement, it usually stood at a premium — the **agio** — over current coin. The premium often sat near **four to five percent** while the reputation held. The agio was quoted. Merchants treated it as information about the unit.",
      "A florin banco, on the advertised model, was a claim on metal in the vault, not on a loan. That is why Adam Smith could still describe the bank, in **1776**, as a place that took in coin and did not lend. The later books would show the reputation running ahead of the vault.",
      "None of this made Amsterdam a modern central bank. There was no national note issue. There was no statutory duty to backstop a private banking field. The Wisselbank was a municipal giro table for the bill market. It could be leaned on by the city that owned it, and in time it was.",
    ],
  },
  {
    heading: "Concealed lending",
    paragraphs: [
      "A public bank can be a warehouse with better accounting. It can also become a lender in secret. Amsterdam did both, in sequence.",
      "From the late seventeenth century, and more clearly in the eighteenth, the bank made advances to the city of Amsterdam and to the Dutch East India Company that were not advertised as the old warehouse model. Overdrafts against the vault are still loans. They were not posted as the florin banco’s public story. For decades the agio and the reputation could live together because the market still treated banco as metal-quality money.",
      "War strained the concealment. In the Fourth Anglo-Dutch War, **1780–1784**, lending to the Company and the city rose. The coin stock no longer matched the deposit book. When that lending became public knowledge in the **1780s–1790s**, the agio collapsed. Bank money went from a premium to a discount. The institution never recovered its old role as the settlement unit of the entrepôt.",
      "French occupation in **1795** found a bank that had already lost the trust that made giro as good as a full vault. Liquidation was completed in **1819**. Reputation, concealed fiscal use of the metal, then a quoted premium that died when the books were known: the Wisselbank’s end was its own.",
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
      "London built a different machine. The [Bank of England](/history/banks-paper/bank-of-england), chartered in **1694**, was war finance with a note issue attached, not a city giro table. It was built for a crown’s borrowing, not for a city’s bill market.",
      "For most of two centuries the florin banco was quoted above the coin it claimed. When the city’s loans became known, the premium went to a discount, and the table that had settled the bill market of Europe never recovered its place.",
    ],
  },
];

const england: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In **February 1797**, the Bank of England stopped paying gold for its notes. An Order in Council closed the window; the Restriction Act made the suspension statute. The notes stayed in London’s tills. The pound kept its name. Holders could no longer test that name in coin at Threadneedle Street. Gold went to a premium against paper. It would be more than twenty years before the window opened again.",
      "The machine that could close a window had been built for war a century earlier. In **1694**, during the Nine Years’ War, a private corporation was chartered to lend about **£1.2 million** to the Crown and to issue notes. Where the [Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) had been a city ledger for mixed coin, London’s bank began as a war loan with circulating paper attached.",
    ],
  },
  {
    heading: "Not a city giro table",
    paragraphs: [
      "Amsterdam’s Wisselbank, opened in **1609**, was a municipal ledger for the bill market: mixed coin in, bank money out, bills settled by giro. For a long time its reputation was that it did not lend. Its concealed lending, and the collapse of the agio, came much later.",
      "London in the 1690s had a different problem. William III was at war with Louis XIV. The Crown needed a large loan at once. Goldsmith running-cash notes already circulated; the Stop of the Exchequer in **1672** had shown that a sovereign can close a window. The **1694** statute created a company whose first asset was a loan to the state, and whose liabilities included notes the public could pass.",
      "The paper came in kinds. A **giro balance** is a book credit at a public table. A **goldsmith note** is a private claim on metal left with a keeper. A **Bank of England note** is a circulating promise to pay, issued by a chartered corporation that has already lent to the Crown. The habit of paying with paper came from the warehouse and goldsmith path. The 1694 machine is war finance with that habit attached.",
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
      "Restriction was an English bank closing the gold window while its notes remained everyday money. The notes did not collapse. Prices rose and gold stood at a premium, but the pound stayed the pound, and the public kept paying with Bank paper through the long war with France.",
    ],
  },
  {
    heading: "Resumption in the 1820s",
    paragraphs: [
      "Cash payments did not return with the first peace. After Waterloo the question was when, and at what gold definition, the Bank would pay again. Peel’s Act of **1819** set a path back to convertibility. Full gold payout on notes resumed in **1821**, two years ahead of the Act’s final date.",
      "The cycle was England’s own: suspend for war, keep the notes in use, resume later at the old metal unit. A claim treated as money had lost its metal stop and then got it back — because the issuer survived the war and chose to pay.",
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
      "France tried two other answers in the same century. [John Law](/history/banks-paper/john-law) fused a note-issuing bank with a trading company, and the System broke in **1720**. The revolutionary [assignats](/history/banks-paper/assignats) of the **1790s** tied paper to seized land and died in **1796**. Neither came back to metal at the old unit. London did, in **1821**.",
    ],
  },
];

const assignats: Section[] = [
  {
    heading: "",
    paragraphs: [
      "By **1795**, shops in revolutionary France quoted two worlds: a paper price that moved by the week, and a coin price people preferred. Assignats — notes first issued in **1789–90**, supposedly retired by sales of seized church and émigré land — still filled drawers. They no longer filled the role of money. The Directory was already returning toward metal.",
      "The land was real. The promise was that paper would come back in as land went out. Quantity rose faster than retirement. Seventy years after [John Law and the Mississippi Bubble](/history/banks-paper/john-law), France was again paying its way in paper — this time without a bank, and with land instead of a trading company as the advertised backing.",
    ],
  },
  {
    heading: "What an assignat was",
    paragraphs: [
      "The National Assembly inherited a broken treasury. In **November 1789** it placed church property at the disposal of the nation. That stock — later enlarged by émigré estates — became the biens nationaux. The first assignats, decreed in **December 1789**, were large, interest-bearing paper: more a state claim to be paid from land sales than a daily note.",
      "Set beside the other paper of the century, the difference is plain. A **warehouse receipt** is a claim on identified metal at a window. A **Bank of England note** is a circulating promise to pay coin, subject to the Bank’s rules. A **Law note** was a bank promise fused with a rising company share. An **assignat** was a state liability whose advertised stop was land to be sold, not coin to be paid on demand. You could not walk to a vault and demand a posted weight. You were told the land was there, and that sales would retire the paper.",
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
      "Law’s System had fused a note-issuing bank with a colonial trading company under the Regency; notes and Mississippi shares inflated together and broke in **1720**. The assignats had no Banque Royale and no rue Quincampoix. They were revolutionary state paper with a land story, issued under a different regime and for a different war.",
      "Across the Channel, the [Bank of England](/history/banks-paper/bank-of-england) stopped paying gold for its notes in **1797**. Those notes stayed everyday English money, and resumption in the **1820s** brought the window back. The same wars strained both treasuries. England suspended and resumed. France’s paper died.",
      "When Germany’s mark collapsed in [1923](/history/20th-century/weimar-1923), commentators reached back for the assignats. The parallel holds in mechanism — issue that outruns any real limit — and in little else: the century, the regime, and the promise printed on the paper were all different.",
    ],
  },
];

const whyMarkets: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Long before anyone struck a coin, traders in Mesopotamia settled large debts in silver by weight. They counted in shekels, and a shekel was a weight, not a coin. Along the Levant, ingots, rings, and cut pieces changed hands as hacksilver — metal taken by the scale. Egyptian gold did the same work at a higher value. Nobody had decreed any of it. The two metals had won a long contest against everything else people tried.",
      "Coinage came much later, as a faster way to check the metal. The metal came first. The stamp came second.",
    ],
  },
  {
    heading: "Cattle, grain, shells, copper",
    paragraphs: [
      "Plenty of things have been money close to home. Cattle settled a fine in a village that already priced in livestock. Grain paid a tax at harvest, if the collector took it before it spoiled. Cowries moved along coasts. Copper and bronze served as small change in more than one ancient economy. When the trade is near and everyone knows the goods, people use what is at hand.",
      "Distance breaks those goods. An ox cannot settle a debt two seas away. Grain rots. Shells vary. Copper is useful, so it gets used up, and it is bulky for a large payment. A unit that has to travel, wait a year, and still be accepted by a stranger who never saw where it came from needs different qualities.",
      "A ruler can name what his tax office will take. That is power over a till. It does not make a distant trader hold the named thing overnight. When a unit failed in the hand — too heavy, too perishable, too easy to fake, too easy to grow — trade drifted to something else. Again and again, it drifted to gold and silver.",
    ],
  },
  {
    heading: "Six things the metal had to do",
    paragraphs: [
      "Economists later wrote the reasons down as six properties. Each one describes a job a payment has to do when the other side is a stranger and the money may sit for a year.",
      "**Durability** means the unit can sit for a generation. Gold does not rot and does not rust in ordinary air. Silver tarnishes; the metal remains. Grain, cattle, and cloth do not offer that pause. A store of value is first a store: the thing must still be there.",
      "**Divisibility** means a debt can be paid without slaughtering an ox. Metal can be cut, weighed, and recast. The same stuff settles a large claim and leaves a remainder. A live animal or a finished cloth is ruined by being divided. Change is how a unit works at more than one size of payment.",
      "**Homogeneity** means one ounce is like another, once refined. Cattle are not interchangeable. Shells vary. Mixed copper is a guess. When pieces of the same fineness are alike, weight becomes a language. The scale replaces the argument about which cow or which lump.",
      "**Scarcity** means a king cannot harvest a new stock from a field. Gold and silver are costly to find and to refine. The stock can grow — mines open, and one mountain would later flood a century with silver — but it does not appear because a treasury needs it this afternoon. Scarcity here means costly expansion, not a pile that never changes.",
      "**Recognizability** is how cheaply a stranger can tell the stuff from a look-alike. Color, weight in the hand, the streak on a touchstone, the ring of a good piece: crude tests, and enough for metal to move without a letter of introduction. At a distance the test has to be cheaper than hiring an assayer for every bargain.",
      "**Portability** is value per weight. Gold especially: a small mass settles a large debt. Silver is heavier for the same purchasing power, which is why it became the everyday metal of Mediterranean trade while gold stayed the metal of large sums. Both still beat cattle on a ship and grain in a wagon.",
      "The six work together. A durable metal that cannot be divided is jewelry. A scarce metal no stranger can recognize is a rumor. A portable metal a king can plant is a season’s money. Gold and silver were the overlap that survived contact with people who did not share a temple, a harvest, or a law.",
    ],
  },
  {
    heading: "Two metals, two jobs",
    paragraphs: [
      "Gold and silver were never the same instrument. Gold packs more value into a smaller weight. It suited tribute, treasuries, and large settlements. Silver sat closer to daily trade: enough value to be worth carrying, enough bulk that ordinary payments did not come down to dust. Ancient economies often used both, with copper or bronze underneath for the smallest change. That was a habit of scale, not yet a legal ratio.",
      "Much later, governments would write a fixed ratio between the two into law, and then watch the pattern that carries Gresham’s name when the market ratio moved: the metal the law overvalued stayed in circulation, and the other left. That fight was about metals already in use. Traders had the split long before any state named it. It came from the properties themselves — the same durability and sameness, a different value per weight.",
    ],
  },
  {
    heading: "Metal first, mint later",
    paragraphs: [
      "Paying by weight is slow. Scales, touchstones, and arguments about fineness are the price of using anonymous metal in a market of strangers. A stamp is a claim about weight and fineness. It does not create the metal. It cuts the cost of checking it.",
      "In Lydia, in western Anatolia, in the seventh and sixth centuries BCE, someone struck a lump of electrum — a natural mix of gold and silver — with a punch, and later with a design. That is the conventional start of struck coinage. The invention was the mark, not the ore. You still had to trust whoever made the mark. You no longer had to weigh every lump.",
      "The stamp moved trust. It did not abolish it. When the design was honest, coin traveled farther than hacksilver. When the coin was lightened, people went back to the scale or hoarded the better pieces. Greek silver, Roman debasement, and a gold coin that held its weight for centuries all came after the mint. None of them is where metal became money.",
      "Neither is **1971**, when the United States stopped redeeming dollars in gold for foreign treasuries. By then gold had been money for thousands of years. The warehouse receipt — paper claiming a pile of coin somewhere else — came long after people trusted the pile. Gold and silver were in the bag before either existed.",
    ],
  },
  {
    heading: "Then the mark",
    paragraphs: [
      "So the order runs like this. Markets chose the metal. Then a mint put a mark on it, so strangers could skip the scale. [Lydia and the first coins](/history/ancient/lydia-first-coins) is where that punch lands. The rest of [ancient money](/history/ancient) — Athens’ silver owls, Rome’s thinning denarius, Constantine’s solidus — runs on a choice traders had already made.",
    ],
  },
];

const lydia: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In a market of strangers in western Anatolia, a lump of electrum still started an argument at the scale. How much gold was in it? How much silver? Then someone struck the lump with a punch, and later with a recognisable design, and a buyer could check the king’s mark instead of every grain. That happened in Lydia, in the **seventh and sixth centuries BCE**. It is the conventional starting point for struck coinage. Croesus is the royal name later attached to separate gold and silver issues. The ore was old. The stamp was new.",
      "Traders had been settling in metal by weight for a long time already — that is the story of [why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver). Lydia did not invent monetary gold and silver. It made them cheaper to check.",
    ],
  },
  {
    heading: "Where and when",
    paragraphs: [
      "Western Anatolia sat on the trade routes between the Aegean and the interior of Asia Minor. Lydia’s kings controlled river gold and electrum sources that made a local mint possible. Archaeology and the literary tradition place the first true coins in this zone in the later seventh century BCE, with wider use in the sixth.",
      "Claims about the exact first year vary with the dig and with how one defines a coin. The broad agreement is narrower: Lydia is where struck pieces carrying a state or royal mark became a habit of payment, not a one-off curiosity. Ionian cities nearby adopted the practice and adapted it. The Aegean learned the stamp.",
      "Lydia was not the birth of money. Mesopotamian silver accounts and Levantine hacksilver already measured value by weight. Lydia was the birth of a portable claim about that weight — a design you could recognise without opening every bag to the scale.",
    ],
  },
  {
    heading: "Electrum, punch, and type",
    paragraphs: [
      "Early Lydian pieces were often electrum: gold and silver mixed, sometimes from river metal whose ratio was hard to read by eye. A blank was prepared. A punch or die left a mark. Later issues carried a clearer type — a design that named the issuer and implied a standard.",
      "Electrum’s mixed nature made the stamp especially useful. Without a trusted mark, every lump invited an argument about assay. With a mark, the buyer still trusted the king or the city, but the trust was concentrated: check the type, not every grain. The stamp moved the cost of verification. It did not abolish trust.",
      "Weights and denominations changed over time. Small pieces settled everyday trade; larger ones settled bigger claims. The metal remained the substance. The type was the shortcut. Numismatists still argue over how early blanks were cast or cut and how soon a true reverse die appears. The monetary point is simpler: a repeatable mark turned an anonymous alloy into a circulating claim.",
      "Hoards and find-spots show the pieces moving well beyond the palace. That circulation is the test. A royal souvenir that never leaves the treasury is not a new way of paying. Lydia is remembered because the habit stuck.",
    ],
  },
  {
    heading: "Croesus and separate gold and silver",
    paragraphs: [
      "Tradition credits **Croesus**, in the mid-sixth century BCE, with issuing pure gold and pure silver coins rather than only electrum. Whether or not every detail of that story holds, the logic is clear. Separating the metals makes fineness easier to state and to check. Electrum hid a ratio. A gold coin or a silver coin announces what is in it.",
      "Separate issues also point toward a world in which gold and silver do different jobs — large sums and everyday trade — under named standards. The later Greek silver networks and Rome’s pairing of the aureus and the denarius grow out of that habit. Lydia wrote no mint ratio into law. It showed a state choosing what its stamp would promise.",
      "When Persia conquered Lydia, the habit did not vanish. Imperial coinage absorbed the technology and spread it. The stamp traveled with power. Subject cities and provincial mints learned that a typed piece could carry tax and trade farther than unmarked bullion — as long as people believed the type.",
    ],
  },
  {
    heading: "What the stamp changed, and what it did not",
    paragraphs: [
      "A stamp cuts the cost of checking weight and fineness among strangers. You still have to trust the issuer. You no longer have to weigh every lump, if the type is honest and familiar. When that trust holds, coin travels farther than anonymous hacksilver.",
      "When the type was lightened or the alloy cheated, people went back to the scale, discounted the coin, or hoarded the better pieces. A stamp is a claim, and claims can fail. Greece’s silver network, Rome’s slow debasement, and a later gold coin that held its weight are all stories about what happens after the mint exists. None of them shows that metal needed a king before it could be money.",
      "Metal first. Stamp second. A king could speed adoption by demanding taxes in his coin. He could not make a distant trader treat a bad alloy as good gold. The market still tested the coin in the hand.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Before coinage:** Silver and gold already settle debts by weight — shekels, hacksilver, ingots — across the Near East.",
      "**Later 7th century BCE:** Struck electrum pieces appear in the Lydian and Ionian zone; punches and early types.",
      "**6th century BCE:** Typed coin in wider use; the Croesus tradition of separate gold and silver issues.",
      "**After Lydia’s fall:** Persian and Greek mints carry the stamp into larger monetary networks.",
    ],
  },
  {
    heading: "A cheaper check, not a new metal",
    paragraphs: [
      "From Lydia the stamp spread west across the Aegean. In Athens it met a silver mine, and the result was a coin strangers trusted from Sicily to the Black Sea — [Greece: silver and trade](/history/ancient/greece-silver-trade) follows it. Every later chapter of [ancient money](/history/ancient) starts from the same Lydian idea: a mark that saves the buyer a trip to the scale.",
      "Coins were a way of checking metal. Paper claims on metal, and governments promising to redeem them, were still more than two thousand years away.",
    ],
  },
];

const greece: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A stranger in an Aegean port could accept a familiar Athenian owl faster than a lump of anonymous bullion. Greek city-states turned mines and mints into a commercial network, and Athens gave it a face: silver from **Laurion**, struck into the owl **tetradrachm**, a known weight that crossed the sea without a letter of introduction. Whoever held the mine held fiscal power. Laurion helped pay for fleets and public life.",
      "The stamp itself came from the east — [Lydia and the first coins](/history/ancient/lydia-first-coins) is where the punch first hit metal. Greece shows what happened when many city mints and many trade routes came to share one metal language.",
    ],
  },
  {
    heading: "City mints, not one empire mint",
    paragraphs: [
      "Classical Greece was a world of poleis — cities with their own laws, their own gods, and often their own coin. Aeginetan turtles, Corinthian pegasi, and Athenian owls were different types on related silver habits. Weight standards differed: Aeginetan, Attic, and others. Traders learned the types the way later merchants learned foreign coins — by familiarity, and by the scale when familiarity failed.",
      "Colonies and trading posts carried Greek coin habits around the Black Sea, into southern Italy and Sicily, and along the Levantine coast. Silver was not only Athenian. Athens is simply the best-documented case, because Laurion and the Athenian empire left a thicker written trail.",
      "The network was the point. A trader in a port could take a known tetradrachm faster than unmarked bullion. That is Lydia’s logic at Mediterranean scale. Exchange tables and money-changers still mattered where standards differed; the typed coin narrowed the argument to which city’s silver you held.",
    ],
  },
  {
    heading: "Laurion and Athenian fiscal power",
    paragraphs: [
      "The Laurion mines, in the south of Attica, produced silver that Athens coined and spent. Ancient accounts tie Laurion to naval power — above all to the decision, after a rich strike in the early fifth century BCE, to build a large fleet. Tonnage figures are debated. The chain is not: mine, mint, pay, ships and citizens.",
      "A city with its own silver could pay without waiting for taxes in kind. Coin wages and coin payments built a public economy that looked different from a palace handing out grain. Laurion was a strategic asset.",
      "Enslaved labour, underground galleries, and refining workshops made the district an industrial landscape by ancient standards. Output rose and fell with the veins, with war, and with management. When production dropped or war cut off the mines, Athens felt it in the treasury. Silver supply was policy as much as geology.",
      "Other Greek regions had mines too. Laurion is remembered because of what Athens did with it: a democracy that coined its mountain into sea power and public pay.",
    ],
  },
  {
    heading: "The Attic owl tetradrachm",
    paragraphs: [
      "The Athenian tetradrachm — Athena on one side, an owl and an olive sprig on the other — became a widely trusted silver piece of roughly **seventeen grams** on the Attic standard. Its design stayed stable enough that markets from the Aegean to the Near East recognised it. That recognition was infrastructure.",
      "The owl was shorthand for a claim: this much silver, this fineness, this city’s reputation. Counterfeits existed, and so did testing. The type still lowered the cost of checking compared with unmarked metal. Later imitations and eastern copies show how far the design traveled as a brand of silver weight.",
      "Fame was not monopoly. Other cities coined. Persian sigloi, and later Alexander’s coinage, circulated in the same silver world. The owl simply ties mine, mint, and Mediterranean circulation together in one object.",
      "A stable design mattered as much as a beautiful one. A merchant who saw the same Athena and the same owl year after year could price a cargo without a fresh assay on every bag. That is Lydia’s lesson at commercial scale.",
    ],
  },
  {
    heading: "Trade, tribute, and what silver did",
    paragraphs: [
      "Silver paid mercenaries, bought timber and grain, and settled balances between cities. Tribute under Athenian leadership arrived in coin or was converted into it. Temples stored wealth; markets spent it. The metal moved as public finance and as private trade at once.",
      "Gold existed, and mattered for large reserves and for dealings with the east. But everyday Greek money talk was silver talk. Silver’s value per weight suited commercial trade; gold packed more value into less mass. Greece built its network on the everyday metal.",
      "Ports from Sicily to the Black Sea priced cargoes in familiar silver weights. That shared language sits between Lydia’s stamp and Rome’s two-metal state. The Aegean taught strangers to settle in typed silver before a single empire tried to run gold and silver together under fiscal strain.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Archaic period:** Greek cities adopt coinage after the Lydian and Ionian habit; several weight standards in use.",
      "**Early 5th century BCE:** Laurion wealth tied to Athenian naval expansion in the literary tradition.",
      "**Mid-5th century BCE:** Owl tetradrachms circulate widely; tribute and trade settle in silver.",
      "**4th century BCE and after:** Macedonian and Hellenistic coinages overlay and extend the silver language.",
    ],
  },
  {
    heading: "A typed silver language",
    paragraphs: [
      "Laurion and the owl turned a mine and a design into a settlement language for the whole Mediterranean. The next test of that language came in Rome, where one state ran gold and silver side by side and, under the pressure of paying armies, slowly thinned the silver — [Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus).",
      "Two thousand years later another mountain, on another continent, would flood the world with silver on a scale Athens never saw. That is [Potosí](/history/silver/potosi).",
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
      "After Rome’s silver had been washed thin, pay tables and tax assessments still needed a coin strangers would trust overnight. In the early **fourth century**, Constantine gave them one. The **solidus** was a gold coin of tightly held weight and fineness — about **1/72 of a Roman pound**, roughly **4.5 grams**. It outlasted the western empire and lived on in Constantinople as the **nomisma**. What made it famous was not its beauty. It was that the weight stayed put.",
      "The silver side of that story is [Rome: denarius and aureus](/history/ancient/rome-denarius-aureus), where the mint lightened the everyday coin under fiscal pressure. The solidus is the opposite case: a gold unit defended as a standard for centuries.",
    ],
  },
  {
    heading: "What Constantine changed",
    paragraphs: [
      "In the 310s Constantine’s mints settled on the gold solidus. The tetrarchs before him had experimented with gold; Constantine’s coin is the one that stuck as the empire’s premier gold unit.",
      "Gold had already been the metal of large payments while silver turned into tokens. The solidus made that order explicit and durable. Accounts, taxes, and payments to the elite could refer to a coin whose metal content people trusted. Bronze and reformed base coins still handled small change under other names.",
      "The setting was imperial consolidation after civil war. A stable gold unit supported a state that collected and spent across an enormous territory.",
      "Pay tables that could name a reliable gold piece cut through the confusion left by silver coins that no longer meant what their designs claimed. That practical usefulness is why the solidus outlived the slogans of restoration and became the empire’s reference gold coin for centuries.",
    ],
  },
  {
    heading: "Weight and fineness as the product",
    paragraphs: [
      "What set the solidus apart from the late antoninianus was not a handsome type. It was discipline about mass and purity. A merchant or a tax official could treat the coin as a known quantity of gold. That is Lydia’s logic again — only now the promise was a gold weight held for generations.",
      "The pressure to debase never disappears in a state that needs money. The solidus is famous because, for long periods, Byzantine authorities treated its standard as something to defend. When later debasements and reforms came, they were measured against the memory of that hard gold coin.",
      "Silver and base coins could still be adjusted for local pay. The solidus had a different job: the large, trusted settlement piece, the metal people reached for after silver’s reputation had burned in the third century.",
      "Fractions — the semissis, the tremissis, and later related issues — let the gold standard work at more than one size of payment without abandoning the fixed weight. The full solidus stayed the reference.",
    ],
  },
  {
    heading: "From Rome to Byzantium: the nomisma",
    paragraphs: [
      "As imperial power centered on Constantinople, the solidus continued in Greek as the nomisma, with related denominations. Western kingdoms minted their own gold at times, often imitating familiar types. The eastern empire kept the solidus alive as a working standard for Mediterranean and Near Eastern trade.",
      "Foreigners gave good Byzantine gold names that signaled trust. The medieval “bezant” of western sources is that reputation traveling. Across changing dynasties, the coin’s weight stayed credible enough to price contracts and tribute.",
      "Byzantine finances were not frozen; they had their own crises. But the ancient story of money ends on a coin that kept its metal, not on a bank or a note.",
      "Trade routes still needed a settlement metal strangers would accept overnight. For centuries the nomisma filled that role, because the mint’s promise stayed close to the metal in the hand — the opposite of the washed silver of the third century.",
    ],
  },
  {
    heading: "Coin, not a receipt",
    paragraphs: [
      "A lasting gold weight does not mean Rome never fell. The collapse of the west and the survival of the east are separate facts from the mint’s scales. A gold standard can outlast a capital, and this one outlasted Rome itself by the better part of a thousand years.",
      "The two fail in different ways. A coin can be clipped or debased, and the cheat shows up on the scale; Rome’s washed silver had taught everyone to look. A receipt can be issued beyond the metal behind it, and nobody sees that until enough holders ask for the metal on the same day. The late empire had cheated in the first way. Later centuries would learn the second.",
      "A solidus is a coin you hold. A receipt is a claim on a coin you are not holding. Receipts, public banks, and banknotes arrive with the merchants and deposit banks of later centuries — the story picks up in [warehouses to public banks](/history/banks-paper/warehouses-to-public-banks).",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Early 4th century:** Constantine establishes the solidus as the premier gold unit, about 1/72 of a pound.",
      "**4th–5th centuries:** The gold solidus frames elite and fiscal payments while the memory of third-century silver lingers.",
      "**Byzantine centuries:** The nomisma carries the weight tradition forward; western traders call it the bezant.",
    ],
  },
  {
    heading: "Weight held, then the ticket",
    paragraphs: [
      "Rome thinned its silver until a wash over bronze stood where a denarius had been. Constantine answered with gold, and the weight held — for longer than the western empire itself. That is where [ancient money](/history/ancient) ends: on a coin whose metal still matched its face.",
      "What comes next in [Sound Money History](/history) is a different instrument. Merchants started trusting a piece of paper that said the gold was somewhere else — the long story of [banks and paper](/history/banks-paper).",
    ],
  },
];

const earlyUs: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **2 April 1792**, Congress wrote gold and silver into United States law and fixed a mint ratio of **fifteen to one**. The dollar could be paid in either metal at that legal relation. Which metal actually stayed in circulation was decided by the market ratio abroad, not by the preamble. When world prices moved, Gresham’s pattern appeared: the legally overvalued metal stayed; the other was exported or hoarded.",
      "The statute did not invent American money. It named a unit for a republic that already paid in Spanish dollars, wrote gold beside that silver at a fixed legal price, and left the world market to decide what actually circulated. Within a dozen years the Mint had stopped striking its two headline coins. Forty-two years later Congress moved the ratio.",
    ],
  },
  {
    heading: "What the Coinage Act of 1792 did",
    paragraphs: [
      "The Coinage Act of **1792** established a Mint, housed in Philadelphia under its first director, David Rittenhouse, and defined the dollar in both gold and silver. A silver dollar was to contain **371.25 grains** of pure silver. Gold coins were set so that fifteen ounces of pure silver equaled one ounce of pure gold at the Mint. That **15:1** ratio was the legal bridge between the two metals.",
      "The Act also named smaller silver coins and gold eagles, half-eagles, and quarter-eagles. Copper cents and half-cents covered small change. The design was bimetallic in law: either metal could settle a dollar debt at the posted weights. The statute did not invent money. It named a unit and a ratio for a republic that already traded in Spanish dollars and foreign coin.",
      "Hamilton’s Report on the Establishment of a Mint (1791) had argued for a bimetallic dollar and for a ratio close to market practice. The 1792 Act is the legislative result. Later politics would treat “bimetallism” as a slogan. In 1792 it was a mint board: two metals, one legal unit, a fixed conversion.",
    ],
  },
  {
    heading: "The Spanish dollar in the background",
    paragraphs: [
      "The early United States did not invent its silver weight from blank paper. The Spanish eight-real piece — the [piece of eight](/history/silver/piece-of-eight) — had long been the common dollar of Atlantic trade. American contracts and statutes often meant that coin when they said “dollar.” The 1792 silver weight sat close to that familiar piece.",
      "Foreign coin remained legal tender for years. The Mint was slow to supply enough domestic pieces. Circulation was a mix of Spanish and other foreign silver, scarce gold, and bank notes of uneven quality. The statute named an American unit. Daily payment still used what was in the bag.",
      "Potosí silver and Spanish minting had already made a global silver coin. The United States adopted a dollar that traders already understood, then wrote gold beside it at a fixed ratio — the [bimetallism](/history/silver/bimetallism) that American politics would fight over for the rest of the century.",
    ],
  },
  {
    heading: "Mint ratio versus market ratio",
    paragraphs: [
      "A mint ratio is a legal price: how many ounces of silver equal one ounce of gold at the Mint. A market ratio is what traders actually pay in London, Amsterdam, or Paris. When the two drift, arbitrage follows. The metal that is cheaper at the Mint relative to the world is brought in for coinage. The metal that is dearer at the Mint is melted, exported, or hoarded.",
      "That is Gresham’s pattern in mint dress: the legally overvalued metal stays in circulation; the undervalued metal leaves. A preamble cannot outvote the price of silver in London.",
      "Through the early nineteenth century, silver often looked cheap at 15:1 relative to European gold–silver prices. Gold tended to leave. The republic’s circulating coin leaned silver. The legal bridge still said both metals. The till said otherwise.",
      "The Mint felt the arbitrage at once. New, full-weight American silver dollars were shipped to the West Indies and swapped for worn Spanish pieces, which came back to be recoined. Gold eagles were worth more as metal abroad than as coin at home, and they were melted or exported. By **1804** the Mint had stopped striking both the silver dollar and the eagle. Coining the headline pieces had become a subsidy to the traders who carried them away.",
    ],
  },
  {
    heading: "The 1834 correction",
    paragraphs: [
      "In **1834** Congress cut the pure gold in the ten-dollar eagle from **247.5** grains to **232** and left the silver dollar alone. The mint ratio moved to roughly **16:1**. The intent was gold-friendlier: to bring gold back into circulation by making an ounce of gold buy more silver at the Mint than before.",
      "After 1834, gold coins became more common in domestic use. Silver dollars and smaller silver still mattered, but the legal tilt had shifted. The arithmetic was the same as in 1792 — a fixed ratio meeting a moving market — only the numbers changed. When Congress left the standard silver dollar off the coin list in [1873](/history/america/crime-of-1873), a system that already leaned gold made the omission easy to frame as clarification.",
      "1834 did not end silver politics. Subsidiary silver and later “free silver” campaigns still filled the century. What it showed was that Congress could rewrite the bridge when circulation failed the preamble.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**1791:** Hamilton’s mint report argues for a bimetallic dollar and a practical gold–silver ratio.",
      "**2 April 1792:** Coinage Act; Mint established; silver dollar at 371.25 grains pure; gold at 15:1.",
      "**1790s–1820s:** Foreign silver (especially Spanish dollars) remains central to circulation; gold often scarce at 15:1.",
      "**1804:** Mint stops striking silver dollars and gold eagles as both leave the country.",
      "**1834:** Pure gold in the eagle cut from 247.5 to 232 grains; mint ratio moves to ~16:1; gold returns more readily to the till.",
      "**1873:** Coinage Act drops the standard silver dollar from free coinage.",
    ],
  },
  {
    heading: "The bridge and the till",
    paragraphs: [
      "Congress could name the dollar in two metals and post a ratio between them. It could not make merchants in Havana or London honour that ratio. In 1792 the law said gold and silver. For forty years the till said Spanish silver, and gold went abroad.",
      "The dollar’s weight came from the Spanish piece that had crossed the Atlantic long before the republic. The ratio came from Hamilton’s arithmetic. What circulated was decided by the gap between the two, and by 1834 Congress had learned to move the ratio rather than argue with the market.",
    ],
  },
];

const jackson: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In **1832**, Congress sent Andrew Jackson a bill to recharter the Second Bank of the United States years before the charter expired. He vetoed it. The veto message attacked the Bank as unconstitutional privilege and foreign-tinged power. The presidential campaign that autumn made the Bank the issue. Jackson won. The federal center would not be renewed on that bill.",
      "What followed came in sequence: federal deposits moved to state “pet” banks, the Specie Circular of **1836** required gold and silver for public land, and the Panic of **1837** hit American banks and commerce. The quarrel was over who would hold the government’s money and who would issue the country’s paper. The United States would not have a federal central bank again until **1913**.",
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
      "Congress passed a recharter bill in **1832**, well before the **1836** expiry. Biddle and his allies in Congress, Henry Clay among them, chose the timing to force the question before the election. Jackson’s veto message of **10 July 1832** was politics as much as jurisprudence. It made the Bank the issue of the **1832** presidential campaign.",
      "Jackson won reelection. The veto stood. Biddle still ran the existing institution until the charter ran out, but the political verdict had landed: the federal center would not be renewed by that Congress and that President.",
      "The veto stopped recharter. Removing the deposits was a separate executive move, and it starved the Bank of the government’s cash. It was not easy even for Jackson. One Treasury secretary was moved to the State Department and his successor was dismissed for refusing the order before Roger Taney, installed at the Treasury, began the removal in **September 1833**.",
    ],
  },
  {
    heading: "Pet banks and the Specie Circular",
    paragraphs: [
      "After the veto fight, Jackson’s Treasury began removing federal deposits from the Second Bank and placing them in selected state banks — the “pet banks” of contemporary abuse. The government’s money no longer sat in one federally chartered vault. It sat in a scattered set of state institutions whose note issue and lending the administration preferred to the Bank’s discipline.",
      "Biddle answered by contracting the Bank’s loans through **1833–34**, arguing prudence while critics called it a deliberate squeeze to prove the Bank indispensable. Credit tightened in the commercial cities. The contraction won Biddle no recharter. It hardened the view that one private corporation held too much power over the country’s money.",
      "Land sales in the West were booming. Speculators often paid with bank paper. In **1836** the Specie Circular ordered that public lands be paid for in gold and silver. The rule was a hard-money brake on paper land fever. It also drained specie from banks that had been extending credit against land notes.",
      "The mix — deposit removal, state-bank expansion, then a sudden specie demand for land — belongs in any account of the mid-1830s. Whether one blames Jackson, Biddle, state banks, or the land boom depends on the historian. The sequence does not.",
    ],
  },
  {
    heading: "Panic of 1837 and the aftermath",
    paragraphs: [
      "In **1837** a financial panic hit American banks and commerce. Specie payments were suspended in many places. Failures spread. The causes were several: international credit conditions, cotton prices, land speculation, and the domestic banking scramble after the Bank war. No single villain explains it. The panic followed the deposit and specie sequence by months, not decades.",
      "The Second Bank’s federal charter expired. Biddle’s institution continued for a time under a Pennsylvania charter and then failed in the early **1840s**. The United States entered a long stretch without a federally chartered central bank. The Independent Treasury system later tried to keep federal money out of banks altogether. State banks and note chaos filled the gap until the Civil War’s national banking acts — and until the [greenback](/history/america/greenbacks-civil-war) war finance of the **1860s**.",
      "Seventy years later the [Panic of 1907](/history/20th-century/panic-1907-fed) reopened the question of a central bank at full volume, and that time Congress built one. The Federal Reserve was a different institution, answering a trust-company run rather than Jackson’s veto message.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["Veto first, then deposits, then specie, then panic."],
    list: [
      "**1816:** Second Bank of the United States chartered for twenty years.",
      "**1832:** Congress passes recharter; Jackson vetoes; Jackson reelected with the Bank as a campaign issue.",
      "**1833–34:** Federal deposits removed from the Bank to state “pet” banks; Biddle contracts the Bank’s loans.",
      "**1836:** Specie Circular — gold and silver required for public-land purchases; Bank’s federal charter expires.",
      "**1837:** Panic; widespread suspension of specie payments.",
      "**1913:** Federal Reserve Act — after the Panic of 1907.",
    ],
  },
  {
    heading: "Who holds the government’s money",
    paragraphs: [
      "The Bank war was fought over a charter, but the stake was custody. Whoever held the Treasury’s balances could lend on them, and whoever issued the country’s most trusted notes could discipline everyone else’s. Jackson took both away from Biddle and scattered them among state banks.",
      "The Specie Circular then asked those banks for metal they had lent out as paper. A year later the country was in panic, and for most of the next generation the federal government kept its money in its own vaults.",
    ],
  },
];

const greenbacks: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In **February 1862**, Congress authorized United States Notes — greenbacks — as legal tender for most public and private debts. Banks had already suspended specie payments at the end of **1861**. Gold still priced customs and foreign exchange. In New York a gold market posted the premium of coin over paper. When Union fortunes looked dark, that premium widened.",
      "Greenbacks were a suspension of the metallic dollar for war finance, not a theory that paper had replaced metal forever. After Appomattox the fight shifted: whether to contract the greenback stock, whether to resume gold payments, and at what parity. The Specie Payment Resumption Act of **1875** set a date — **1 January 1879**. Between the Legal Tender Act and that morning lay seventeen years of war, argument, and a Treasury slowly building gold.",
    ],
  },
  {
    heading: "Why the Union issued greenbacks",
    paragraphs: [
      "War spending outran ordinary tax and bond finance. The Treasury needed a currency the public and contractors would accept when gold coin was scarce in daily Union payments. Congress authorized United States Notes — demand notes at first, then the familiar green-backed legal-tender notes.",
      "Legal tender meant creditors had to accept the notes for most public and private debts, with exceptions such as customs duties and interest on some bonds, which stayed closer to gold. The notes were obligations of the United States. They were not warehouse receipts for a named pile of coin. Convertibility into gold was suspended for the duration of the emergency.",
      "The Confederacy issued its own flood of paper; that story ends in collapse with the regime. The Union greenback is the paper that survived the war and then dominated peacetime politics.",
    ],
  },
  {
    heading: "Gold premium and the New York gold room",
    paragraphs: [
      "Once greenbacks were legal tender and gold was still the international and customs metal, two prices appeared. Goods and contracts quoted in “currency” (paper) diverged from prices in gold. In New York a gold market — informal, then more organized — posted the premium of gold over greenbacks.",
      "When Union fortunes looked dark, the premium widened: more greenbacks were needed to buy a gold dollar. When military and fiscal news improved, the premium narrowed. Importers who needed gold for duties watched that market daily. The worst of it came in the summer of **1864**, with Grant stalled before Petersburg and Confederate raiders near Washington: it took roughly **$2.85** in greenbacks to buy one gold dollar.",
      "The premium is the record that greenbacks were not “as good as gold” during the war. They were a forced paper unit beside a gold unit that still priced customs and foreign exchange. Wage earners felt it as lost [purchasing power](/sound-money/inflation-purchasing-power): the same paper dollar bought less of anything tied to gold or imports, and wages were slow to catch up.",
    ],
  },
  {
    heading: "Legal tender cases and postwar politics",
    paragraphs: [
      "After the war, debtors liked paying in cheaper paper. Creditors wanted gold or contraction of the note issue. The Supreme Court’s Legal Tender Cases flipped and then settled. *Hepburn v. Griswold* (**1870**) held the notes could not be forced on creditors for debts contracted before the Act. A year later, with two new justices on the bench, *Knox v. Lee* reversed that. *Juilliard v. Greenman* (**1884**) extended the power to peacetime.",
      "Politics split along familiar lines. “Hard money” voices wanted a rapid return to specie and a smaller greenback stock. Greenback Party and agrarian voices wanted more paper, or at least no contraction that would raise the real burden of debts. Bondholders who had lent in gold terms watched every Treasury signal.",
      "National banking acts during and after the war created a federal note framework beside the greenback. The two paper stocks were not the same instrument: bank notes under national charter, United States Notes as direct Treasury obligations. Public argument often mashed them into one “paper money” complaint. The split mattered when resumption came: it was the Treasury’s own notes that had to be redeemed.",
      "The greenback was no longer only a war tool. It was a peacetime unit whose quantity and convertibility would decide winners and losers on every farm mortgage and railroad bond.",
    ],
  },
  {
    heading: "Resumption Act of 1875",
    paragraphs: [
      "The Specie Payment Resumption Act committed the Treasury to redeem United States Notes in coin on and after **1 January 1879**. The Act also allowed gradual reduction of the greenback circulation toward a floor of **$300 million**, and it authorized gold accumulation to make the promise credible.",
      "Resumption did not happen overnight in **1865**. It took a decade of politics, surplus fiscal conditions in some years, and a Treasury that actually built a gold reserve. John Sherman, Treasury secretary from **1877**, sold bonds for gold to fill it. Opponents tried to repeal or soften the commitment. In **1878** Congress stopped further retirement of greenbacks with about **$347 million** still outstanding — but the date held. When the day came, greenbacks traded at par with gold; the wartime premium was gone. The paper note became again a claim on coin at a one-to-one practical rate.",
      "Full legal definition of the dollar as a gold unit waited until the [Gold Standard Act of 1900](/history/america/road-back-gold). Resumption restored the practice; the **1900** statute wrote the definition. Between them sat the silver fight that began with the [Coinage Act of 1873](/history/america/crime-of-1873).",
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
      "The Union paid for much of its war in a note that promised no metal on any date. The gold room in New York priced that promise every day, and the price moved with the battle news. When peace came, the notes did not disappear. They became the ordinary money of farm mortgages and railroad bonds, and every question about their quantity was a question about who owed whom.",
      "Congress answered with a date rather than an open-ended promise. It named **1 January 1879**, let the Treasury gather gold, and held to the day while the arguments continued. On that morning a greenback was worth a gold dollar again.",
    ],
  },
];

const crime1873: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **12 February 1873**, Congress revised the Mint’s list of coins and left the standard silver dollar off the free-coinage roster. Gold became the effective standard for the dollar’s large unit. Subsidiary silver — dimes, quarters, halves — continued under regulated coinage. The statute did not abolish silver metal. It ended free coinage of the old silver dollar as a full legal peer of gold.",
      "In later agrarian politics that omission became the **“Crime of 1873”**: a conspiracy to demonetize silver and enrich creditors. In the Treasury’s and many economists’ telling it was a clarification toward gold, aligned with Europe’s move after Germany’s gold shift in the early 1870s. What sits on the statute book is the Coinage Act of **1873** and its list. The name “crime” is the political memory that organized a generation of American fight.",
    ],
  },
  {
    heading: "Why silver was already under pressure",
    paragraphs: [
      "World silver supply rose in the late nineteenth century — Nevada’s Comstock and other Western mines among the sources — while several European states moved toward gold. Germany’s shift after unification dumped silver onto the market. The gold–silver market ratio moved away from older mint habits. Silver’s gold price fell.",
      "The United States had already tilted gold-friendlier in [1834](/history/america/early-us-coinage). Greenback war finance had suspended specie. By the early 1870s, officials drafting a mint revision treated the silver dollar as a coin little used in large payments and awkward beside a gold unit. Dropping free coinage of that dollar looked, to them, like housekeeping.",
      "Housekeeping in a mint statute can still reprice every farm debt. Under [bimetallism](/history/silver/bimetallism), a mint that coins either metal freely at a fixed ratio gives the cheaper one a floor. When silver could no longer be coined freely into full-weight dollars, silver producers lost that floor, and debtors lost a path to inflate the unit with cheaper metal. That is why a quiet omission became a loud crime in memory.",
      "The timing explains the quiet. In **1873** the silver in a standard dollar was still worth a little more than a dollar in gold, so almost no one brought silver to the Mint to be coined into dollars. Dropping the coin cost nothing that year. Within three years silver had fallen far enough that coining it into dollars would have paid, and the door was already shut.",
    ],
  },
  {
    heading: "Crime or clarification?",
    paragraphs: [
      "The “crime” charge held that the Act was slipped through without honest debate — that silver’s friends in Congress did not see the demonetization coming. Historians still argue how open the drafting was and how much Western silver interests understood at the time. What is not in dispute: the standard silver dollar left the free-coinage list, and gold’s primacy hardened.",
      "The clarification charge held that the United States was joining a gold-standard world, that bimetallism at a stale ratio invited arbitrage, and that subsidiary silver was enough for small change. Europe’s gold turn is real context. It does not erase the domestic distributional fight that followed.",
      "Some of the loudest accusers had voted for the bill. Senator William Stewart of Nevada, a silver-state man, supported it in **1873** and later denounced it as a crime. That is less proof of conspiracy than evidence of how little the omission seemed to matter while silver was dear. The word “crime” arrived after the price fell.",
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
      "After 1896 the path ran toward the [Gold Standard Act of 1900](/history/america/road-back-gold), which defined the dollar in gold in law.",
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
      "**1900:** Gold Standard Act — dollar defined in gold.",
    ],
  },
  {
    heading: "After the nickname",
    paragraphs: [
      "A revision of the Mint’s coin list, passed with little notice while silver was still dear, became within a few years the founding grievance of a political movement. The statute changed which metal could be brought to the Mint and turned into dollars without limit. The nickname turned that change into a story about who had been robbed.",
      "Congress spent the next two decades buying silver without restoring free coinage. Bryan carried the grievance to the edge of the White House in **1896** and lost. By **1900** the dollar was gold in law, and the silver dollar that had been dropped from the list in **1873** was a coin, not a standard.",
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
      "For more than two centuries, merchants across the Atlantic and the Pacific priced cargo in one familiar silver coin: the Spanish dollar — the eight-real piece, the **piece of eight**. Sailors cut it into bits for change. Asian markets took it as settlement metal. When the young United States named its own dollar in the **1790s**, this coin was already the one Americans carried.",
      "One silver piece of roughly **twenty-seven grams** became a world unit of account long before any modern reserve currency. Much of its metal came out of one mountain, [Potosí](/history/silver/potosi). Its name and weight went on into [early U.S. coinage](/history/america/early-us-coinage).",
    ],
  },
  {
    heading: "Eight reales, one recognisable weight",
    paragraphs: [
      "Spanish colonial mints struck the **real de a ocho** — eight reales — as a large silver coin of roughly **27 grams**, about **0.87 troy ounces** of fine silver on the familiar later reckoning, with variation by mint and by wear. It carried the arms of the Habsburg or Bourbon kings, a mint mark, and a date. Pieces from Mexico City, Potosí, Lima, and other American mints went out into Atlantic and Pacific trade.",
      "“Piece of eight” is the English name. “Spanish dollar” is the commercial name that stuck in North America and the Caribbean. Neither name describes a new metal. Both name a familiar weight of silver that strangers could recognise without a letter of credit from a local prince.",
      "Cut pieces — bits of eight — were everyday arithmetic. Two bits made a quarter dollar, as later American slang still remembers. The whole coin stayed the large settlement piece. Divisible in practice, not only on paper, it traveled well.",
    ],
  },
  {
    heading: "From American mints to world ports",
    paragraphs: [
      "Colonial silver did not stay in the Andes or in New Spain. It went onto the fleets, to Seville and Cádiz, and into European payments. Across the Pacific, the **Manila galleon** carried it toward China and the wider Asian silver market. Ports that never saw Cerro Rico still received its metal as coin.",
      "In the Caribbean and British North America, where local coin was scarce, Spanish dollars were ordinary money. Contracts, wages, and taxes often meant that coin when they said “dollar.” In East Asia, after earlier paper experiments had failed or been abandoned, trade absorbed Spanish silver as settlement metal. A coin from a Spanish American mint could close a deal in Canton or Manila because both the metal and the design were known.",
      "There were rivals — Dutch and Portuguese coins, later British trade dollars. The Spanish piece won on volume and familiarity. Money has network effects: the coin you can spend tomorrow is the coin you accept today.",
    ],
  },
  {
    heading: "Why one silver coin travelled",
    paragraphs: [
      "A world coin is not a metaphor. It is a repeated claim about weight and fineness that markets actually use. The piece of eight rested on three facts. Spanish American mines supplied silver at imperial scale. Colonial and home mints stamped a design people recognised. And the trade routes already priced goods in that coin.",
      "Trust still mattered. Clipped, plugged, and counterfeit pieces sent people back to scales and assays. Familiarity lowered the cost of checking; it did not end checking. When a mint lightened the coin or a buyer doubted it, discounting returned, and Gresham’s pattern with it. For generations, though, the claim held across oceans.",
      "Athens’ [owl](/history/ancient/greece-silver-trade) had been a silver network at Mediterranean scale. The piece of eight was the same idea stretched around the planet — a different century, and a far larger volume of metal.",
    ],
  },
  {
    heading: "The United States inherits the habit",
    paragraphs: [
      "The Coinage Act of **1792** defined an American silver dollar whose weight sat close to the Spanish coin Americans already used. Hamilton and Congress did not invent the dollar from nothing. They wrote a law around a commercial habit. Gold sat beside silver at a fixed mint ratio — the start of American [bimetallism](/history/silver/bimetallism).",
      "The United States took over a unit traders understood, then spent the next century fighting over whether gold, silver, or paper would rule it. The piece of eight is the coin it inherited. The Crime of 1873 was a later American fight over the law.",
      "Spanish dollars kept circulating in the United States for decades after independence. Laws and mint output took time to replace a coin the whole Atlantic already knew. Foreign silver stayed legal tender in the United States until **1857**.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The coin settled an empire’s trade for generations before national coinages finished replacing it."],
    list: [
      "**1490s–1500s:** Spanish conquest and early colonial mining; silver begins to enter Atlantic payments.",
      "**1540s onward:** Potosí and other American mines feed colonial mints; eight-real pieces become the empire’s coin.",
      "**1565–1815:** The Manila galleon links Acapulco silver to Asian demand for settlement metal.",
      "**17th–18th centuries:** Spanish dollars are common money in the Caribbean and British North America.",
      "**1792:** The U.S. Coinage Act defines a dollar near the Spanish silver weight, with gold beside silver at a mint ratio.",
      "**19th century:** National coinages and gold standards gradually displace the Spanish dollar as an everyday unit.",
    ],
  },
  {
    heading: "One coin, several later fights",
    paragraphs: [
      "The Spanish dollar faded as national mints and gold standards took over. The fights it left behind did not. The mountain that fed so much of its metal is [Potosí](/history/silver/potosi). The American dollar that copied its weight is [early U.S. coinage](/history/america/early-us-coinage). The problem of keeping two metals in one money is [bimetallism](/history/silver/bimetallism).",
      "Those threads run through the rest of [silver in history](/history/silver): a mountain, a coin, a law, a market break, and an industry.",
    ],
  },
];

const silverThursday: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **27 March 1980** — Silver Thursday — silver futures crashed as forced selling hit a market already strained by higher margins and limits on new long positions. Two months earlier, in January, silver had printed near **$49.45** an ounce. January was the run. March was the unwind.",
      "Through **1979** and into **1980**, Nelson Bunker Hunt and William Herbert Hunt, with partners, had built an enormous position in silver bullion and futures. Then the exchange and the dealers changed the rules. Margins went up. New longs were restricted. The price collapsed. The story is positions, rules, dated prices, and a break.",
    ],
  },
  {
    heading: "Who held what",
    paragraphs: [
      "The Hunt group and associated interests accumulated physical silver and long futures on a scale that mattered in a market much thinner than gold’s. Contemporary estimates put their holdings in the hundreds of millions of ounces once metal and paper are counted together. Exact tallies still vary by source, and by how one treats warehouse receipts and forward claims. What does not vary is the concentration: a small circle of names sat on a large share of deliverable and paper silver.",
      "Motives in the public record mixed fear of inflation after the **1970s**, distrust of paper claims, and a bet that silver’s memory as money still counted. Whatever drove them, a concentrated long position ran into a physical and futures market that could not absorb unlimited demand at the old price without a violent move.",
      "Partners and financing mattered when the break came. As margins rose and prices fell, the brokers who had lent against the position wanted more capital. When it did not come, they sold.",
    ],
  },
  {
    heading: "The January 1980 run",
    paragraphs: [
      "Silver’s nearby extreme in the Hunt-era run came on **18 January 1980**, at **$49.45**. London’s afternoon gold fix printed **$850** on **21 January**. Put those two prices side by side and the gold–silver ratio that week sat near **17.2** — the arithmetic is on the [gold–silver ratio](/markets/gold-silver-ratio) page.",
      "The January peak and Silver Thursday are different days. January was the run. March was the unwind. The average silver price for all of **1980** sits far below the January extreme; a year’s average and a peak week answer different questions.",
      "Physical tightness, pressure on futures deliveries, and speculators piling in behind the Hunts all fed the January price. A concentrated long can bid up a thin market. It can also invite the rule book to answer.",
    ],
  },
  {
    heading: "What changed at the exchange",
    paragraphs: [
      "COMEX and the dealers around it raised margin requirements and restricted new long positions — rules that made it harder to add longs while shorts and liquidation stayed open. Liquidity everyone had assumed on the way up was missing on the way down. The Hunts’ brokers demanded more capital. Forced selling followed.",
      "People still argue over what those changes were. Some call them prudence; others call them a rescue of the shorts. The sequence is not in dispute: the rules changed, margin pressure rose, the longs were liquidated, and the price broke. The venue that listed the contracts had changed the terms on which new buyers could bid.",
      "Dealers and banks sat in the middle. When variation margin and credit lines turned against the longs, the position could no longer be held at its old size. Silver Thursday is the day the break became public.",
    ],
  },
  {
    heading: "27 March 1980 and the aftermath",
    paragraphs: [
      "On **27 March 1980** silver futures crashed as the liquidation hit. The January peak was gone. Brokers and the Hunt interests negotiated under intense pressure. Lawsuits, congressional hearings, and exchange post-mortems followed in the months and years after.",
      "The break did not erase silver’s industrial use or its memory as money. It did show how fast a concentrated position in futures and bullion can meet a rule book and a credit limit — faster than any argument about silver as money can answer. Silver markets still carry **1980** as a dated memory: the January high as a historical price.",
      "Silver Thursday is a different kind of silver story from the [Crime of 1873](/history/america/crime-of-1873) or [bimetallism](/history/silver/bimetallism). **1873** was a line dropped from a coinage law. Bimetallism was the problem of a fixed legal ratio between two metals. **1980** was a private position meeting an exchange’s response.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["A run in January. Rule pressure in March. The break on the 27th."],
    list: [
      "**1970s:** Inflation and a weak dollar; private interest in monetary metals rises.",
      "**1979:** Hunt-group buying of silver bullion and futures becomes a market-moving fact.",
      "**18 January 1980:** Silver’s nearby extreme, about **$49.45**.",
      "**21 January 1980:** London gold PM fix at **$850** — the peak-week pair behind the ratio arithmetic.",
      "**Late March 1980:** Margin hikes and limits on new longs; liquidation pressure builds.",
      "**27 March 1980:** Silver Thursday — a sharp break as forced selling hits.",
      "**After 1980:** Litigation, hearings, and a lasting memory of concentration meeting a rule change.",
    ],
  },
  {
    heading: "A squeeze, a rule book, a dated break",
    paragraphs: [
      "What the record holds is a concentrated long, a set of new margin and position rules at COMEX, a January peak, and a break on **27 March 1980**. Silver was already an industrial metal by then; that side of its story is [monetary history and industry](/history/silver/monetary-and-industry).",
      "Silver Thursday gets retold as a trading lesson. The record itself is information: who held what, which rules changed, and on which day the price broke. What anyone should do with silver today is a different question — the one [information versus advice](/sound-money/information-not-advice) is about.",
    ],
  },
];

const bimetallism: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A government can write a law saying so many ounces of silver equal one ounce of gold at the Mint. The market does not have to agree. **Bimetallism** is the attempt to keep both metals in one monetary system at a **fixed mint ratio**: the mint stands ready to coin either metal into full-weight money at that legal rate. When the **market ratio** — the price of gold in silver out in trade — drifts away from the legal one, Gresham’s pattern appears. A law does not repeal arbitrage.",
      "In the United States the loudest fight over this was the [Crime of 1873](/history/america/crime-of-1873). The arithmetic started at the founding, with [early U.S. coinage](/history/america/early-us-coinage). The price ratio itself, with no legal number attached, is tracked on the [gold–silver ratio](/markets/gold-silver-ratio) page.",
    ],
  },
  {
    heading: "Mint ratio versus market ratio",
    paragraphs: [
      "A **mint ratio** is a law: so many units of silver equal one unit of gold at the Mint. The Coinage Act of **1792** used **fifteen to one**. Later American practice, and the free-silver campaigns, often spoke of **sixteen to one**. Those numbers were statutes or political demands. They were not geology.",
      "A **market ratio** is two prices divided on a given date: the price of gold over the price of silver, or what one metal fetches in the other. Mines, industry, war, and demand for money all move it. The Mint’s number can sit still while the market’s number moves.",
      "When the two come apart, the Mint is overpaying for one metal. People bring the overvalued metal to be coined, and melt or export the undervalued one. The coins in circulation skew toward a single metal. Neither metal has failed. It is arithmetic under a fixed legal price.",
    ],
  },
  {
    heading: "Gresham’s pattern at the mint",
    paragraphs: [
      "“Bad money drives out good” is the slogan. Under bimetallism the mechanism is sharper. The metal the Mint overvalues relative to the market tends to stay in coin; the metal it undervalues tends to leave circulation. “Bad” and “good” mean mispriced by law, not better or worse metal.",
      "States could change the mint ratio, stop coining one metal freely, or drift onto a gold or silver standard in practice while keeping the other metal as small change. Europe’s late-nineteenth-century turn to gold and America’s **1834** correction in gold’s favor are examples. The Crime of 1873 was a different move — the United States dropped free coinage of the standard silver dollar rather than rewriting the ratio — but the same pressures were behind it.",
      "A fight over a mint ratio is a different animal from a warehouse receipt that outruns its metal, or from the 1980 Hunt squeeze. It is a quarrel between a law and a price.",
    ],
  },
  {
    heading: "Europe’s gold turn and the Latin Monetary Union",
    paragraphs: [
      "Several European states entered the nineteenth century with silver or two-metal habits and left it closer to gold. After unification in the early **1870s**, Germany moved to gold and sold silver onto the market, putting pressure on other mints. France and its partners in the **Latin Monetary Union**, founded in **1865**, tried to coordinate gold and silver coinage across borders. It was a treaty about fineness and circulation, not a single central bank.",
      "As silver’s price in gold fell and the major trading states came to prefer gold for large payments, fixed ratios grew harder to defend. Silver could survive as small change with limited legal-tender status while the main unit went to gold. That European turn sits behind America’s 1873 politics without being the same thing.",
      "Union members still faced Gresham’s arithmetic whenever the market ratio drifted from the mint ratio. Coordinating coin designs does not freeze the world price of silver. The pressure was the same everywhere: a world market for silver, creditors and large-payment systems that preferred gold, and mint ratios that no longer matched trade.",
    ],
  },
  {
    heading: "America’s version of the same problem",
    paragraphs: [
      "The United States wrote gold and silver into law in **1792** at fifteen to one. When the world ratio drifted, the undervalued metal left. In **1834** Congress moved the ratio in gold’s favor. After the Civil War’s greenbacks and the long fight to resume gold payments, the Coinage Act of 1873 dropped free coinage of the standard silver dollar. Free silver at sixteen to one became the farmers’ demand. It peaked with William Jennings Bryan’s campaign of **1896**.",
      "Every one of those laws was fighting over the same mechanism: two metals, one legal unit, and a ratio the market would not hold still.",
      "In **1900** the United States defined the dollar in gold by statute. The campaign to remonetize silver cooled. Silver’s memory as money, and its growing use in industry, carried on. The lesson of the mint ratio stayed: a legal number is not a market price, and renaming the fight does not stop the arbitrage.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The legal number can sit still for decades. The market price of silver rarely does."],
    list: [
      "**1792:** U.S. Coinage Act — gold and silver at a **15:1** mint ratio.",
      "**1834:** The U.S. ratio is corrected in gold’s favor.",
      "**1865:** The Latin Monetary Union begins coordinating coin standards among its members.",
      "**Early 1870s:** Germany shifts to gold; the world silver price comes under pressure.",
      "**1873:** U.S. Coinage Act drops free coinage of the standard silver dollar.",
      "**1878–1890:** The Bland–Allison and Sherman silver-purchase compromises.",
      "**1896:** Bryan’s free-silver campaign; the gold side wins the election.",
      "**1900:** U.S. Gold Standard Act — the dollar is defined in gold.",
    ],
  },
  {
    heading: "Law versus the scale",
    paragraphs: [
      "Bimetallism comes down to a law and a price. The law says fifteen or sixteen to one. The market says whatever gold and silver fetch that week. When they disagree, one metal goes to the mint and the other goes abroad or into the melting pot.",
      "The same quotient still prints every day, with no law behind it now — it is the [gold–silver ratio](/markets/gold-silver-ratio). The American politics of the old legal ratio run through the [Crime of 1873](/history/america/crime-of-1873), and the wider arc through [silver in history](/history/silver).",
    ],
  },
];

const potosi: Section[] = [
  {
    heading: "",
    paragraphs: [
      "From the **1540s**, Cerro Rico — the “rich hill” above Potosí, in today’s Bolivia — poured silver into a Spanish imperial machine that reached across two oceans. Ore left the mountain for the mint, the fleet, Seville, and European payments. Via the **Manila galleon** it also went to China, where silver was the settlement metal of a far larger commercial world.",
      "A single mountain set the silver supply of an age. Much of that silver reached the world as one coin, the [piece of eight](/history/silver/piece-of-eight).",
    ],
  },
  {
    heading: "Discovery and the colonial machine",
    paragraphs: [
      "Indigenous and Spanish accounts place the great silver discoveries at Potosí in the **1540s**. The crown organised extraction, refining, the mita labour draft, and a mint. Mercury amalgamation — the patio process and its later refinements — raised recovery from poorer ores. By the later sixteenth and early seventeenth centuries, output reached a scale contemporaries treated as a wonder and economic historians still treat as a turning point in world silver supply.",
      "Potosí was not the only American mine. New Spain, in today’s Mexico, and other Andean sites mattered too. But Cerro Rico became the symbol and, for long periods, the largest single source. A city grew at high altitude around the mountain, and the finances of the Spanish empire ran partly on it. Ore in a mountain is not yet money in a port. It took refining, forced labour, and a mint mark to make it that.",
      "Annual tonnage series differ from one reconstruction to the next. The direction does not. Silver from Potosí and mines like it flooded Eurasian payments for generations. Geology plus imperial organisation produced a monetary fact: a stock of silver large enough that later mint ratios and Asian settlement habits had to live with it.",
    ],
  },
  {
    heading: "Why the silver moved",
    paragraphs: [
      "Spain needed silver to pay armies, to service debts, and to keep a sprawling fiscal machine from seizing up. Europe needed a money metal already priced in every port. China, after its earlier paper money had collapsed or been abandoned, took silver as the unit that actually arrived in trade.",
      "American silver did three jobs at once: imperial finance, European liquidity, and Asian settlement. Those jobs pulled the metal across the Atlantic and the Pacific. The mountain did not choose where its silver went. Ships, taxes, and trade balances did.",
      "Historians still argue over how much Potosí silver raised European prices, how much stayed in Spain, and how much leaked north to the Dutch and the English. Those are real scholarly fights. The route is clearer: mine, mint, fleet, and out into the payments of Europe and Asia. When those ounces arrived as coin, what most people held was the piece of eight.",
    ],
  },
  {
    heading: "The Manila galleon and Asian demand",
    paragraphs: [
      "From the late sixteenth century, the **Manila galleon** linked Acapulco to Manila, carrying American silver west and Asian goods east. China’s demand for silver to settle trade and pay taxes made Spanish American ounces welcome across East Asia. Silver that never saw Seville still left the Americas.",
      "That Pacific leg matters. Silver’s early-modern history is not only a story of European inflation. It is a redistribution of monetary metal across two oceans, from a New World mountain into the ledgers of Europe and Asia.",
      "When Asian demand, European wars, or failing mines shifted, the same routes carried different volumes. The galleon was infrastructure. The mountain was supply. Together they set a world silver stock that later mint ratios and gold standards had to live with.",
    ],
  },
  {
    heading: "What the flood changed, and what it did not",
    paragraphs: [
      "A sudden rise in silver supply changes relative prices, the economics of minting, and the political value of owning mines. It does not invent money. Mediterranean and Asian silver habits were far older — Athens had coined the silver of Laurion two thousand years before, on a much smaller scale, in [Greece: silver and trade](/history/ancient/greece-silver-trade). Potosí was that old habit at early-modern volume, run by a global empire.",
      "Nor did the flood settle the ratio between the two metals once and for all. Later centuries still saw Gresham’s pattern under [bimetallism](/history/silver/bimetallism), Europe’s turn to gold, and America’s long silver question. More silver in the world was one input into those fights, not the whole story.",
      "Potosí is where the silver came from. The piece of eight is what it became. Bimetallism is the trouble it caused in law, and Silver Thursday, centuries later, a break in a very different kind of market.",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: ["The mountain’s fame was early-modern. Silver’s politics outlasted it."],
    list: [
      "**1540s:** Large-scale silver working at Potosí begins; a colonial mint and labour regime follow.",
      "**Later 16th–early 17th centuries:** Peak decades of Cerro Rico’s output and fame in imperial finance.",
      "**1565 onward:** The Manila galleon links American silver to Asian demand for settlement metal.",
      "**17th–18th centuries:** American silver remains central to Spanish finance and world trade; other mines share the load.",
      "**19th century:** Independence, new mining technology, and later strikes such as the Comstock shift the geography of supply; Potosí’s dominance fades.",
    ],
  },
  {
    heading: "Flow, not romance",
    paragraphs: [
      "It is easy to tell Potosí as a legend of fabulous wealth. The record is harder and plainer: forced labour at altitude, mercury in the refining yards, a mint, a fleet, and a stream of silver that changed how Europe and China paid their bills.",
      "Most of that silver reached the world stamped as the [piece of eight](/history/silver/piece-of-eight). What came after — the mint-ratio fights, the 1980 squeeze, the industrial demand — runs through the rest of [silver in history](/history/silver).",
    ],
  },
];

const silverIndustry: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A vault ounce and a paste ounce carry the same chemical symbol and answer different questions. Silver is still money in memory: coins, bars, a hedge people name in the same breath as gold. It is also an industrial input — photography for a long twentieth century, then electronics, then photovoltaics. Those two jobs pull the metal in different directions.",
      "Mine supply is ounces leaving the ground — a flow that feeds both the monetary stock and the factories, not a list of companies to buy. The pace of that flow against gold’s is tracked on the [gold–silver ratio](/markets/gold-silver-ratio) page and the desk’s [Stocks & flows](/desk) tab.",
      "Where the bar-and-coin ounces go, country by country, is a separate question, answered by [physical silver demand by country](/markets/physical-silver-demand-by-country). This is the longer history of the two jobs.",
    ],
  },
  {
    heading: "Monetary memory",
    paragraphs: [
      "For most of recorded monetary history, silver was the everyday money where gold was the large unit — or the main unit where gold was scarce. Coins, plate, and bullion settled taxes and trade. That memory survives in language, in bullion markets, and in political slogans long after most states stopped using silver as the standard for the large unit.",
      "America’s silver question after **1873**, Europe’s turn to gold, and the piece of eight’s career around the world are monetary stories. They explain why people still reach for silver when they talk about hard money. They say nothing about how many ounces a solar factory will need next year.",
      "Monetary demand is a story about stock and trust: coins, bars, exchange-traded products, private hoards. Industrial demand is a story about flow into products. Blur the two and you get slogans about a “shortage” that never say which job is tight. Official-sector silver, where modern surveys list it at all, is usually a rounding line beside those two — nothing like the central banks’ gold.",
    ],
  },
  {
    heading: "Photography’s long century",
    paragraphs: [
      "Silver-halide photography consumed large quantities of silver through the nineteenth and twentieth centuries. Film, photographic paper, and X-ray plates locked the metal into images. Hospitals, newsrooms, and family albums all ran on it. Some was recovered and recycled. Much of it still left the monetary stock for good.",
      "Digital imaging cut that line sharply from the late twentieth century on. The point is not nostalgia for film. It is that one industrial use can dominate silver’s flow for a century and then shrink — without erasing silver’s memory as money.",
      "That is why the survey tables separate fabrication from investment. Photography was one chapter of fabrication. It was never the whole industrial book, and it was never bar-and-coin demand.",
    ],
  },
  {
    heading: "Electronics, then photovoltaics",
    paragraphs: [
      "Silver conducts electricity better than any other metal and does not fail easily, which made it a standard input in electronics — contacts, pastes, and related uses. In the twenty-first century, **photovoltaic** silver paste for solar cells became one of the largest fabrication lines in survey tallies such as the World Silver Survey. Brazing, soldering, and chemistry share the rest.",
      "Industrial demand responds to technology and to thrifting: when prices rise, or when engineering allows, manufacturers put less silver into each unit. A high fabrication total is not a permanent floor under the price. It is a dated flow into products.",
      "In many years that second job is large in ounces next to investment demand, and it is a different kind of demand from a coin in a drawer. Jewelry and silverware are further fabrication lines, counted apart from monetary bars in any survey that keeps the jobs straight.",
    ],
  },
  {
    heading: "Which series the headline means",
    paragraphs: [
      "When a headline says “silver demand,” it helps to ask which series: coin-and-bar investment, jewelry, industrial fabrication, or official-sector lines. The country page ranks the investment side and adds a **2025** table for jewelry fabrication. The ratio page explains a dated price quotient, and keeps the mining clock separate so ounces mined are never mistaken for a price.",
      "The dual role is the fact to hold on to. Silver kept its identity as money while picking up industrial identities. Bars, coins, and premiums — the handling side — belong to [gold and silver in practice](/gold-silver). A fabrication survey is not a shopping guide.",
      "Mining cost is also part of why silver and gold were money in the first place. A unit that is expensive to produce is hard to multiply at will — the core of the argument in [hard money vs fiat](/sound-money/hard-money-vs-fiat).",
    ],
  },
  {
    heading: "A short timeline",
    paragraphs: [],
    list: [
      "**Before 1800:** Silver is chiefly a monetary and ornamental metal.",
      "**1800s–1900s:** Photography and other chemical and industrial uses grow beside coinage and plate.",
      "**Late 19th century:** Political fights over silver as money in America and Europe, while industrial use rises.",
      "**20th century:** Electronics and photography; most states leave silver as the standard for the large unit.",
      "**1980:** The Hunt squeeze — a market event in a metal that already had industrial demand ([Silver Thursday](/history/silver/silver-thursday)).",
      "**21st century:** Photovoltaics and electronics become major fabrication lines; investment demand is tracked separately.",
    ],
  },
  {
    heading: "Two jobs, two series",
    paragraphs: [
      "Silver entered the modern age with two identities. One is a memory of money that runs from Athens to the Spanish dollar. The other is a working metal that went into film, then circuits, then solar panels. A fabrication ounce and a vault ounce share a chemical symbol without sharing a demand series. Each job keeps its own clock: the monetary one counts in centuries, the industrial one in product cycles.",
      "The monetary side of that story — [Potosí](/history/silver/potosi), the [piece of eight](/history/silver/piece-of-eight), [bimetallism](/history/silver/bimetallism), and [Silver Thursday](/history/silver/silver-thursday) — runs through [silver in history](/history/silver).",
    ],
  },
];

const officialGoldBookValue: Section[] = [
  {
    heading: "",
    paragraphs: [
      "The United States Treasury still values its gold at **$42.22** per **fine troy ounce** (a troy ounce is the precious-metal ounce, about 31.1 grams; fine means pure metal content). That is the **book value**: the last official dollar price of gold written into U.S. law, in **1973**, and never changed since. It is not the market price quoted in London or on the U.S. futures market (**COMEX**), and nobody can hand the Treasury $42.22 and take away an ounce.",
    ],
  },
  {
    heading: "Book versus spot",
    paragraphs: [
      "Two numbers sit on the same pile of metal. **Spot** is the market price: a London afternoon fix, a COMEX nearby future, or another dated quote in dollars per troy ounce. **Book** is the value written into the U.S. government’s accounts. The Treasury’s Status Report of U.S. Treasury-Owned Gold, and the Federal Reserve’s H.4.1 gold-stock line, still use the statutory rate of **$42.2222** per fine troy ounce — usually shortened to $42.22.",
      "The stock itself is large and slow-moving. Treasury reports on the order of **261.5 million** fine troy ounces of official gold, held mainly as “deep storage” at Fort Knox, West Point, and Denver, with a smaller working stock at the Mint. At the book rate that stock is about **$11.041 billion**. At a market price of two thousand dollars an ounce, the same ounces are worth more than half a trillion. The metal is the same; only the price used to count it differs.",
      "Gold certificates issued by the Treasury to the Federal Reserve Banks match that book stock. The certificate is a claim inside the government, not a public window. No citizen, and no foreign government, can present dollars and demand those ounces at $42.22. The [1971 gold-window close](/history/20th-century/bretton-woods-nixon-1971) ended that right for foreign official holders. The book rate survived as an accounting leftover.",
    ],
  },
  {
    heading: "How the official price got to $42.22",
    paragraphs: [
      "The Gold Reserve Act of **1934** reset the official U.S. gold price from $20.67 to **$35** an ounce after the [1933 recall](/history/20th-century/1933-gold-recall). Bretton Woods then used that $35 par for official dollar–gold convertibility. The market price and the official par were meant to stay near each other. After the mid-1960s they did not.",
      "On **15 August 1971** the United States suspended convertibility for foreign official holders. In **December 1971** the Smithsonian Agreement raised the official par to **$38**. The Par Value Modification Act of **31 March 1972** (Public Law 92-268) wrote that $38 figure into U.S. law. A further devaluation followed. Public Law **93-110** of **21 September 1973** set the par at **$42.2222** per fine troy ounce.",
      "That 1973 statute is the last official U.S. gold price. When the market floated, Congress did not raise the book rate again. Spot left $42.22 behind, and the Treasury went on carrying the same ounces at the same statutory dollars. H.4.1’s gold-stock line still prints in that book unit, not in market dollars.",
    ],
  },
  {
    heading: "Market price as a multiple of the official price",
    paragraphs: [
      "Each row divides a market price — a named day’s London price, or this site’s LBMA/COMEX **year average** — by the two official prices: **$35**, the par from 1934 to 1971, and **$42.22**, the book rate since 1973. For years before September 1973, the $42.22 column is a later yardstick applied backward, not a par that existed at the time.",
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
      "The 1973 statute was already behind the market in the year it was passed, and by 2024 the average price was more than fifty-six times the book rate. Both numbers are correct at once, because they answer different questions: one is an accounting entry, the other is what the metal fetches.",
    ],
  },
  {
    heading: "What the book number is for",
    paragraphs: [
      "Government accounts need a dollar figure for every asset. After 1973 the United States chose not to mark official gold to the market on the main Treasury gold line, so the book stays at $42.22. Market-value figures — ounces times spot — appear in commentary and on this site’s [desk](/desk). They are useful, but they are a calculation, not the statute.",
      "Other countries handle gold differently. Some central banks revalue gold toward market prices on their own balance sheets; some keep a historical cost. The IMF’s International Financial Statistics report physical gold and a dollar value used for reserve arithmetic. How those conventions shape reserve figures is covered in [central-bank gold reserves](/markets/central-bank-gold-reserves).",
    ],
  },
  {
    heading: "Two ledgers, one stock",
    paragraphs: [
      "When a headline says the United States holds about **$11 billion** in gold, it is using the book rate. When another puts the figure above a trillion dollars, it is multiplying the same **261.5 million** ounces by a market price — at the July 2026 London price of **$4,026.60**, about **$1.05 trillion**. Neither headline is wrong. Knowing which price sits behind the number is the whole trick.",
      "How $35 and then $42.22 became law, and why convertibility ended, is told in [Sound Money History](/history), starting from the 1971 episode linked above.",
    ],
  },
];

const centralBankGoldReserves: Section[] = [
  {
    heading: "",
    paragraphs: [
      "When a headline says a central bank bought ten tonnes of gold last month, the number comes from a reserve report: a stock of gold in tonnes or ounces, filed with the IMF or published by the bank itself. From those reports come the figures people quote — how much gold a country holds, what share of its reserves that gold makes up, how it compares with the size of the economy, and who bought or sold in a given month. It is not a shopping list. Central banks buy and sell under statute, sanctions, and reserve rules that have nothing to do with a household’s savings.",
      "The sections below explain each kind of figure, then follow a few countries through their own books: China’s published stock, Poland’s buying spree, Canada’s reserve table, which now reads **Gold: 0**, and the Bank of England’s gold auctions of **1999–2002**.",
    ],
  },
  {
    heading: "How gold enters the reserve statement",
    paragraphs: [
      "The IMF’s International Financial Statistics and related reserve templates ask members to report official gold holdings. The physical quantity is the durable fact: tonnes or troy ounces of monetary gold. A dollar value is then attached so gold can sit beside foreign-currency assets, **SDRs** (Special Drawing Rights — an IMF reserve asset), and IMF reserve positions in one reserve total.",
      "That dollar value is a reporting convention. Some authorities mark gold near a market price when they compute gold’s **share** of reserves. Others keep a historical or statutory cost on their own books — the U.S. [official book value](/markets/official-gold-book-value) of $42.22 is the extreme case. A high gold share can mean a large inherited stock, a small foreign-currency book, a mark-to-market revaluation, or recent buying. The share alone does not tell you which.",
      "World official gold, compiled from those country books plus IMF and ECB lines, is on the order of **36,000 tonnes** in recent year-end snapshots used on this site (about **35,908 tonnes** at end-2025 in the compiled desk). The United States remains the largest single reported stock, **8,133.5 tonnes** in the July **2026** World Gold Council / IMF book used in the GDP table below. Germany, Italy, and France hold large legacy European stocks. China’s published official figure — dated in the holdings section below — sits above **2,300 tonnes** and is widely treated as a floor, not a full count. Russia’s July **2026** line in that same compilation is **2,276.8 tonnes**.",
    ],
  },
  {
    heading: "Gold as a share of FX and gold reserves",
    paragraphs: [
      "Tonnes and share answer different questions. The share used here is gold valued near a market price, divided by foreign-exchange reserves plus that gold value — the World Gold Council’s usual construction from the IMF’s “total reserves minus gold” line and an end-period LBMA gold price. It is not based on the U.S. statutory **$42.22** book.",
      "Two published world figures sit a year apart and should not be joined into a trend line. In the Council’s **2025** reserve-manager survey, the prompt stated that gold accounted for **19 percent** of total reported reserves — foreign exchange plus gold — in **Q3 2024**. The Council’s market primer dated **1 April 2026**, using IMF COFER and IFS, puts gold at **26 percent** of total global allocated reserves by **Q3 2025**. Different bases, different dates: two prints, not one spliced series.",
      "The same primer splits the **2025** average by group: about **30 percent** at developed-market central banks, about **15 percent** at emerging-market central banks, against about **4 percent** for emerging markets in **2010**. Country books show why a world average is a blend. China’s stock is large in tonnes and still small as a share of a very large reserve book: **4 percent** at end-**2023**, **5 percent** at end-**2024**, and **8.9 percent** of China’s foreign-exchange reserves in **May 2026**, per the World Gold Council notes cited in the China section. Narodowy Bank Polski’s first-quarter **2026** statement put gold at **29.4 percent** of Poland’s official reserve assets at the end of **March 2026**. Poland’s share is higher because its foreign-currency book is smaller, not because it holds more gold than China.",
    ],
    table: {
      caption:
        "Gold’s share of foreign-exchange reserves plus gold at a market value. Each row keeps its own date and source.",
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
      "A rising share can mean more tonnes, a higher gold price on an unchanged stock, or a smaller foreign-currency book. The share alone cannot tell them apart; the tonnes figure can.",
    ],
  },
  {
    heading: "Official gold relative to GDP",
    paragraphs: [
      "A third way to size a gold stock is against the whole economy. Take the reported official gold, value it at a named market price, and divide by that country’s nominal GDP. A large vault beside a large economy can look light on this measure; a smaller vault beside a smaller economy can look heavy. It measures weight against output, not the size of the vault.",
      "The country set below is short and labeled. Tonnes are the World Gold Council compilation drawn from IMF International Financial Statistics, dated **3 September 2026**, with country books through **31 July 2026** where those books have appeared — the same July compilation the year-to-date buyer table uses. Market value uses the LBMA Gold Price PM of **$4,026.60** an ounce on **31 July 2026**, the end-month London price that matches that holdings month, and **32,150.7466** troy ounces per tonne. Nominal GDP is the IMF World Economic Outlook **April 2026** current-price dollar line for calendar **2025**. Portugal’s **2025** line in that vintage is still an IMF estimate; the vintage’s latest actual year for Portugal is **2024**.",
      "On that arithmetic, Portugal’s **382.7 tonnes** are about **14.30 percent** of its **$346.412 billion** 2025 GDP. Switzerland’s **1,039.9 tonnes** are about **12.90 percent** of **$1,043.544 billion**. Italy’s **2,451.8 tonnes** are about **12.45 percent** of **$2,550.111 billion**. Russia’s **2,276.8 tonnes** are about **11.39 percent** of **$2,587.938 billion**. France (**2,437.0 tonnes**, **9.36 percent** of **$3,368.925 billion**) and Germany (**3,349.5 tonnes**, **8.59 percent** of **$5,048.059 billion**) sit in the same European neighborhood. The United States has by far the largest stock, **8,133.5 tonnes**, yet it is only about **3.42 percent** of **$30,767.075 billion**. Japan’s **846.0 tonnes** are about **2.47 percent** of **$4,435.163 billion**. China’s July book of **2,366.3 tonnes** is about **1.56 percent** of **$19,626.247 billion**.",
      "The same July compilation puts Poland at **640.2 tonnes**, about **8.00 percent** of its **$1,035.586 billion** 2025 GDP — close to Germany. Later months stay out of this division: Poland’s August stock of **648 tonnes** and China’s August SAFE print of **76.73 million ounces**, about **2,387 tonnes**, appear in their own sections below. Mixing them into a July calculation would produce a percentage no source published.",
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
      "This percentage is not gold’s share of reserves; that is the table above. Change the gold price or the GDP year and every row moves: a higher gold price lifts every country’s figure, and a faster-growing economy pulls its own figure down.",
    ],
  },
  {
    heading: "Vaults and where the bars sit",
    paragraphs: [
      "Reported gold is not always in the reporting capital. For much of the postwar period, European and other official holders kept bars at the Federal Reserve Bank of New York, the Bank of England, and the Banque de France. Custody was a service; title stayed with the owner. Location still matters for politics and for logistics: a bar in New York is not a bar in Frankfurt.",
      "The 2010s brought a documented repatriation wave. The Deutsche Bundesbank’s 2013–2017 programme moved gold from New York and Paris to Frankfurt (300 tonnes from the New York Fed and 374 tonnes from the Banque de France under that plan). De Nederlandsche Bank announced in 2014 that it would bring 122 tonnes from New York to Amsterdam. Austria, Hungary, and others published their own transfers. The Bank of England remains a major custodian for official gold that has not been called home.",
      "A central bank can hold gold at home, at a foreign central bank, or split between the two. What it reports to the IMF is ownership of monetary gold, not the address of the vault.",
    ],
  },
  {
    heading: "Recent official purchases, dated",
    paragraphs: [
      "After years of modest net official demand, the World Gold Council’s annual tallies show a sharp rise in net buying by central banks in the early 2020s. The compiled world net figures used on this site’s desk are **1,080 tonnes** in 2022, **1,050.8 tonnes** in 2023, and **1,092.4 tonnes** in 2024, with a still-open 2025 line. Those are official-sector nets — purchases minus sales — not private investment flows.",
      "Country lines in the same compiled series, drawn from IMF-reported changes, include **China** (large 2023 additions, then smaller 2024–2025 increments), **Türkiye** (heavy two-way activity across several years), **India**, **Kazakhstan**, **Uzbekistan**, **Czechia** (a multi-year buying programme announced in 2023), and **Poland** (covered at more length below). Singapore, Brazil, and Azerbaijan appear as notable 2024–2025 lines. Russia’s large reported additions sit mainly in 2016–2019 in that series.",
      "Each line is a reported change in official gold for a calendar year. The monthly picture for 2026, buyers first and then sellers, follows.",
    ],
  },
  {
    heading: "Reported net buyers, YTD through August 2026",
    paragraphs: [
      "The World Gold Council’s latest monthly compilation of publicly reported official changes — drawn from IMF International Financial Statistics and national central-bank releases — runs through **31 July 2026**. In the weeks after that note, a few buyers published August stocks of their own. The table shows both: the latest national figure, and the July figure from the Council beside it.",
      "Reported world purchases in that July compilation were about **130 tonnes**. That is the sum of published country lines. It is not the Council’s broader Gold Demand Trends estimate, which also tries to capture unreported official buying. Kazakhstan’s August stock has not yet appeared in a matching national or WGC monthly line, so that row stays on July.",
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
      "The same World Gold Council monthly compilation — through **31 July 2026**, published **3 September 2026** — also names the largest reported official reductions. Like the buyer figures, each tonne is a change on a central bank’s published books, not a private investment flow.",
      "Two countries dominate the year-to-date sales list. The Central Bank of the Republic of Türkiye sold **1 tonne** in July, bringing reported year-to-date sales to **85 tonnes**. The Central Bank of Russia sold **6 tonnes** in July, bringing reported year-to-date sales to **50 tonnes** and its July stock to **2,277 tonnes** — the same July book the GDP table rounds to **2,276.8 tonnes**. Jordan and Uzbekistan each reported a **1-tonne** July reduction in that note; Uzbekistan is still a net buyer for the year, as the table above shows. No August seller total has been published yet.",
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
      "Türkiye’s book has moved in both directions in recent years, so a sale there is one entry in a long two-way record. Russia’s reported sales come after the heavy additions of 2016–2019 noted above.",
    ],
  },
  {
    heading: "Brown’s Bottom: the UK gold sales of 1999–2002",
    paragraphs: [
      "The best-documented official gold sale of recent decades is British. Traders later nicknamed it **Brown’s Bottom**, after Gordon Brown, then Chancellor of the Exchequer, and the price level at which the sales took place.",
      "On **7 May 1999**, HM Treasury announced a restructuring of the United Kingdom’s foreign-currency and gold reserves. The Bank of England, acting as the Treasury’s agent, then ran **17** uniform-price auctions from **July 1999** to **March 2002**. Approximately **395 tonnes** of gold were sold. The [Bank of England Quarterly Bulletin for Summer 2003](https://www.bankofengland.co.uk/-/media/boe/files/quarterly-bulletin/2003/an-analysis-of-the-uk-gold-auctions-1999-2002.pdf) records that the stock then stood around **715 tonnes**, with a medium-term aim of around **300 tonnes**. At each of the first eleven auctions, **25 tonnes** were offered; at each of the last six, **20 tonnes** were offered.",
      "The same Bank article puts the average auction price at around **$275** an ounce — **$274.9** in the footnote that also names the programme’s revenue at approximately **$3.5 billion**. HM Treasury’s later [GOV.UK disclosure](https://www.gov.uk/government/publications/the-sale-of-part-of-the-uk-gold-reserves-1999-2002), published **31 March 2010**, uses the same tonne, auction-count, and dollar-proceeds figures, and adds a contemporaneous sterling figure of about **£1.9 billion**. The proceeds stayed inside the reserves, reinvested in dollar, euro, and yen interest-bearing assets.",
      "The Treasury’s stated aim was to restructure the reserves — less gold, more foreign currency — so the portfolio held a larger share in interest-bearing currencies. The reserves did not shrink; their mix changed.",
      "The auction clearing price was a market price: dollars per ounce actually paid by successful bidders. It is not a statutory book rate. The U.S. leftover par of **$42.22**, explained under [official gold book value](/markets/official-gold-book-value), is a reporting convention on another ledger. One number is what the auctions fetched; the other is what a Treasury line still writes for ounces it never sold.",
    ],
  },
  {
    heading: "",
    callout: {
      label: "Not a central bank",
      paragraphs: [
        "Tether is a private issuer. It does not report gold to the IMF as official reserve assets, so it has no row in the official tables above. Two gold figures appear under its name, and they measure different things. Tether Gold (XAU₮) is a token whose bars are vaulted for token holders: an independent attestation as of **30 June 2026** put that stock at **707,747.139 fine troy ounces**, about **22.01 tonnes**, owned by the holders, not by the company. Separately, Tether’s 3 August 2026 note said Tether International SA de CV bought about **27.1 tonnes** of gold in the first half of 2026 for its own reserve book. That half-year purchase is a company statement. No official August year-to-date figure for it has been published.",
      ],
    },
    paragraphs: [],
  },
  {
    heading: "China: reported holdings since 2000",
    paragraphs: [
      "China reports official gold as a stock of monetary gold. The People’s Bank of China and the State Administration of Foreign Exchange (SAFE) publish the figure — in tonnes in some announcements, in fine troy ounces on the monthly official-reserve-assets table. The World Gold Council’s country book then carries that stock through IMF International Financial Statistics. These are the figures China reports, not a count of every bar in the country.",
      "For long stretches the published number did not move. At the end of **2000** the IMF/WGC series sat at about **395 tonnes**. In **April 2009**, SAFE’s Hu Xiaolian stated that China had adjusted the stock twice already this century — from **394 tonnes** to **500 tonnes** in **2001**, then to **600 tonnes** in **2003** — and that the stock had then reached **1,054 tonnes**. That **600-tonne** book is the WGC **2005** line. The **1,054-tonne** figure held, in the WGC/IMF book, through **2010** and on to early **2015**.",
      "In **July 2015** the PBoC said the stock at the end of **June 2015** was **1,658 tonnes** (**53.31 million ounces**). Monthly SAFE reporting followed. The WGC year-end **2015** line is **1,760 tonnes**. A later pause left the book near **1,948 tonnes** — **62.64 million ounces** at the end of **October 2019**, per PBoC data carried by Xinhua — and the WGC **2020** year-end line is **1,950 tonnes**.",
      "Reported buying resumed and produced the large **2023** addition. The World Gold Council’s Gold Demand Trends for full-year **2023** put the stock at **2,235 tonnes** after about **225 tonnes** of reported buying, the largest single year of published Chinese additions in the IMF series back to **1977**. Full-year **2024** put the stock at **2,280 tonnes** after **44 tonnes** of reported buying. The WGC/IMF year-end **2025** line is **2,306 tonnes**.",
      "The 2026 monthly figures are the same series the year-to-date table above uses. A World Gold Council China note dated **12 June 2026**, citing SAFE, put May’s stock at **2,332 tonnes** after a **10-tonne** month. SAFE’s official-reserve-assets table published **7 September 2026** printed **76.73 million ounces** at the end of **August 2026** — about **2,387 tonnes**. Against the **2,306-tonne** end-2025 line, that is about **+81 tonnes** year-to-date; the table above rounds the same SAFE/WGC compilation to **80 tonnes** through August.",
    ],
    table: {
      caption:
        "Published official Chinese gold stock. Tonnes are the figure named in the source, not a private estimate.",
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
      "The long flat stretches are part of the record: years with no reported change, then a jump announced all at once, as in **2009** and **2015**. A later month can still revise a rounded tonne.",
    ],
  },
  {
    heading: "Poland: from 103 tonnes to 648",
    paragraphs: [
      "Narodowy Bank Polski (NBP) has been Europe’s most visible gold buyer of the 2020s, and its public statements make the build-up easy to follow.",
      "At the end of **2017** NBP’s reported gold stock was about **103 tonnes**. In **2018–2019** the bank bought on the order of **126 tonnes**, taking the stock to about **229 tonnes** by end-2019. In **July 2019** NBP announced that it would transfer **100 tonnes** from the Bank of England to vaults in Poland — a custody move, not a purchase. Title was already Polish; the bars changed address.",
      "Buying then resumed in size. IMF-based annual changes in the compiled desk put Poland at about **+34 tonnes** in 2022, **+130 tonnes** in 2023, and **+90 tonnes** in 2024, with further additions in **2025**. The desk’s latest Poland stock line of **550 tonnes** is the year-end-2025 starting point implied by later official additions, not the 2026 stock.",
      "NBP’s first-quarter 2026 balance-of-payments note put the gold stock at **581.6 tonnes** at the end of **March 2026**, then **29.4 percent** of official reserve assets (valued at **PLN 319.5 billion** on that statement). The World Gold Council’s Gold Demand Trends for the second quarter, compiled from IMF and central-bank reports through **30 June 2026**, puts the stock at **632 tonnes** after about **+51 tonnes** in the quarter and about **+82 tonnes** in the first half. The Council’s 3 September 2026 monthly compilation, through **31 July 2026**, puts the stock at **640 tonnes**, after about **+8 tonnes** in July and about **+90 tonnes** year-to-date.",
      "On **10 September 2026**, NBP’s president stated that the stock at the end of **August 2026** was **648 tonnes**, valued at **PLN 344.8 billion** at then-current prices. That is about **+8 tonnes** in August and about **+98 tonnes** year-to-date against the desk’s **550-tonne** end-2025 starting point: **550 + 90** reaches the end-July **640**; **550 + 98** reaches the end-August **648**.",
      "The same WGC notes record NBP’s public stock aim of **700 tonnes**, with gold then about **28 percent** of total reserves. An earlier NBP communications line had named a reserve-share aim in the region of **20 percent**; the March 2026 statement already sat above that share. Governor Adam Glapiński’s remarks in this period treated gold as a long-term reserve asset, not as a trading book.",
    ],
  },
  {
    heading: "Canada: Gold: 0 on the official book",
    paragraphs: [
      "Canada’s reserve table is unusual among large economies: its gold line reads zero, the end of a sell-down that ran for decades.",
      "Finance Canada’s monthly Official International Reserves tables still print **Gold: 0**. The [release dated 6 August 2026](https://www.canada.ca/en/department-finance/services/publications/monthly-official-international-reserves/2026/08.html), covering **31 July 2026**, puts total official international reserves at **US$127,038 million** and lists the gold cell as **0**. Earlier 2026 monthly tables in the same series, including June and May, show the same. The Bank of Canada’s weekly international-reserves snapshot uses the same **Gold: 0** line.",
      "Contemporary reporting of the close-out — including [CBC’s March 2016 coverage](https://www.cbc.ca/news/business/gold-canada-reserves-1.3475818) of Finance Canada’s monthly figures — put the peak stock in the **1960s** at more than **1,000 tonnes**. By **2003** the published stock was about **3.4 tonnes**. The last disposals were coin sales: Finance Canada’s [February 2016 Official International Reserves](https://www.canada.ca/en/department-finance/news/2016/03/official-international-reserves.html) footnote records **21,851** ounces of gold coins sold for settlement in February, with holdings at **77** ounces on **29 February 2016**. CBC’s reporting of the same Finance releases names earlier coin sales of **41,106** ounces in December and **32,860** ounces in January. The February table already showed the gold value as **0** in millions of U.S. dollars — the remaining ounces were too few to register at that scale.",
      "The other G7 books tell a different story. The same July **2026** World Gold Council / IMF compilation used in the GDP table above still shows large reported stocks for the United States (**8,133.5 tonnes**), Germany (**3,349.5 tonnes**), Italy (**2,451.8 tonnes**), France (**2,437.0 tonnes**), and Japan (**846.0 tonnes**), while Canada’s reserves are held almost entirely in foreign currencies and other non-gold assets.",
    ],
  },
  {
    heading: "Reading a reserve headline",
    paragraphs: [
      "Most reserve headlines come down to one of four figures: a stock in tonnes, a share of reserves, a ratio to GDP, or a change over a month or a year. A rising share can be new buying or simply a higher gold price. A repatriation moves bars without changing who owns them. A sale like the **1999–2002** UK auction programme swaps gold for currency inside the same reserves. Canada’s printed **Gold: 0** is what a long sell-down looks like once it is finished. Asking which of these a number is usually settles what it means.",
      "The U.S. figure of **$42.22** is a separate accounting convention, explained under [official gold book value](/markets/official-gold-book-value). The **1971** end of dollar–gold convertibility, which set the stage for all of this, is told in [Sound Money History](/history).",
    ],
  },
];

const goldSilverRatio: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Divide the price of an ounce of gold by the price of an ounce of silver and you get the gold–silver ratio: how many ounces of silver buy one ounce of gold on that day. In September **2026** it stood near **68**. In January **1980** it briefly touched about **17**; in late April **2011**, about **31.5**. The ratio moves because both prices move, and it means exactly what the two prices meant on the day they were taken — no more.",
      "The same phrase, ounces of silver per ounce of gold, is also used for three different counts: market price, mine output, and London vault stocks. They give very different answers, near **68**, near **7**, and near **3**. This page explains all three, starting with the price ratio. The mine figures are world totals from survey books, not a list of mining companies, and nothing here is a miner pick.",
    ],
  },
  {
    heading: "What the ratio measures",
    paragraphs: [
      "Call gold G and silver S, both in the same currency per troy ounce. The ratio is G ÷ S. If gold is $2,000 and silver is $25, the ratio is 80: eighty ounces of silver have the same dollar value as one ounce of gold at that pair of prices. Change either price and the ratio changes. There is no hidden third input.",
      "The two prices must be taken at the same time. A London gold afternoon fix set against a COMEX silver future from another session is a mixed snapshot. This site’s [desk](/desk) shows a live ratio from matching live prices. This page uses **named prints** and **year averages** so the arithmetic can be checked. This site’s published year-average price series is an LBMA/COMEX annual average for each metal; dividing those two averages gives a year-average ratio, which is not the same as any single day’s figure.",
      "Governments once wrote a ratio into law as well: the **mint ratio**, a legal number of silver units per gold unit. The Coinage Act of 1792 used 15 to 1; later statutes used 16 to 1. When the legal ratio and the market ratio drifted apart, the metal the law overvalued stayed in coin and the other tended to disappear from circulation — the old bimetallic problem, told under [bimetallism](/history/silver/bimetallism).",
    ],
  },
  {
    heading: "Mining ratio vs market ratio",
    paragraphs: [
      "The market ratio is one price divided by another. A mining ratio is one year’s mine output of silver divided by the same year’s mine output of gold. Both can be spoken as “ounces of silver per ounce of gold,” but they are different quotients: the first uses two dollar prices, the second two production totals.",
      "This site’s homepage mining-ratio card shows about **7.1**. That figure is Silver Institute / Metals Focus World Silver Survey 2026 mine supply of **844.1 million ounces** (2026F) divided by this site’s World Gold Council–based 2026e gold mine pace of **3,708 tonnes**. USGS Mineral Commodity Summaries 2026 prints a matching 2025e pair — **3,300 tonnes** of gold and **26,000 tonnes** of silver — about **7.9** ounces of silver per ounce of gold by mass. The USGS gold total sits below the World Gold Council mine figure this site uses for the card, so the two official mine ratios land near seven and near eight. The desk’s Stocks & flows mine-output tile shows the same USGS pair. Much of the world’s silver is mined as a byproduct of other metals, which is part of why the mining ratio stays in this range.",
      "The market is somewhere else entirely. On **10 September 2026**, COMEX December gold closed at **$4,364.50** and COMEX December silver at **$64.28** — two futures from the same session on the same exchange. Divide them and the market ratio is **67.9**, near **68**. The next session’s pair can move a point either way.",
      "People sometimes read the distance between a mine ratio near **7** and a market ratio near **68** as a sign that silver is cheap. That reading mixes two different divisions. Gold’s price answers mostly to demand for a large stock that is rarely used up; silver’s also answers to factories that consume it. Nothing ties the price ratio to the mine ratio, so the gap is not a fair-value gap, and the mine ratio is not a mean the market ratio is bound to drift toward. Who actually buys and uses silver, country by country, is covered in [physical silver demand by country](/markets/physical-silver-demand-by-country).",
    ],
  },
  {
    heading: "London vault holdings — a custody inventory",
    paragraphs: [
      "The third count is metal sitting in London vaults. The London Bullion Market Association’s [London vault holdings](https://www.lbma.org.uk/prices-and-data/london-vault-data) series counts gold and silver in London commercial vaults, plus the Bank of England’s gold (the Bank does not hold silver). The figure is month-end, published one month in arrears, and covers metal inside the M25: wholesale bars, coins, kilo bars, and small bars. It does not count jewellery, household metal, or smaller vaults outside the London clearing system, so it is not a world aboveground census.",
      "The [August 2026 print](https://www.lbma.org.uk/articles/london-gold-and-silver-vault-data-for-august-2026), published 7 September 2026, names **9,632 tonnes** of gold and **28,431 tonnes** of silver. Using the LBMA’s stated conversion — 1 gram = 0.0321507465 troy ounces — those tonnes become about **310 million ounces** of gold and about **914 million ounces** of silver. Divide the silver by the gold and the vault ratio is about **3.0** ounces of silver per ounce of gold.",
    ],
    list: [
      "**Gold 9,632 tonnes** — about **310 million ounces**.",
      "**Silver 28,431 tonnes** — about **914 million ounces**.",
      "**Vault ratio ~3.0** — ounces of silver per ounce of gold in the same custody inventory.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "London is one settlement hub. Metal in New York, Shanghai, Zurich, or a household safe is outside this count, and the next month’s figure can move. Three counts, three answers — about **3** in London vaults, about **7** in mine output, about **68** in the market — and each is correct for what it measures.",
    ],
  },
  {
    heading: "What the ratio does not tell you",
    paragraphs: [
      "The ratio is not a natural law. Geology, mine supply, industrial use, and monetary demand all push on the two prices, and none of them fixes “the” ratio. A 15 in a mint statute, or a 17 on a January 1980 trading day, does not bind any later market.",
      "A high ratio means gold’s dollar price is large relative to silver’s on that date; a low one means the opposite. It does not, by itself, say that silver is behind or due to catch up. The year averages below run from under 30 to above 80 since 1971, with no fixed level the ratio keeps returning to.",
      "Nor does the ratio measure industrial tightness on its own. Silver has a large fabrication use; gold’s fabrication use is small relative to its monetary stock. A squeeze in one metal can move the ratio without saying anything about the other metal’s value.",
    ],
  },
  {
    heading: "1980 and 2011 as anchors",
    paragraphs: [
      "Two well-documented peaks are the usual reference points.",
      "In **January 1980** the London gold PM fix reached **$850** on 21 January. Silver’s nearby extreme in that same month, used on this site’s 1980 desk print, is **$49.45** on 18 January. Those two prices give $850 ÷ $49.45 = **17.2** — a peak-week snapshot during the Hunt brothers’ silver run, whose collapse is told as [Silver Thursday](/history/silver/silver-thursday). The **1980 year averages** on this site are $612.56 gold and $20.98 silver → **29.2**. The January spike and the year average are different snapshots of the same year.",
      "In **2011** the London gold PM fix reached **$1,895** on 6 September. Silver’s 2011 year average on this site is $35.12; gold’s is $1,571.52 → a year-average ratio of **44.7**. Late April is a different moment again: the London silver fix reached **$48.70** on 28 April while gold’s PM fix was **$1,535.50**, and that pair compressed the ratio to **31.5** — the figure commentary rounds to **30:1**. Which “2011 ratio” someone means depends on the date they picked.",
    ],
  },
  {
    heading: "What a 30:1 ratio meant in 2011",
    paragraphs: [
      "On any given day the ratio is still gold’s dollar price divided by silver’s. On **28 April 2011** the London gold PM fix was **$1,535.50** and the London silver fix was **$48.70**. Those two London prices give $1,535.50 ÷ $48.70 = **31.5**. The day’s two gold fixes averaged **$1,533.25**; that mean divided by the same silver fix is **31.48**, the year’s low on public London-fix ratio tables. “Thirty to one” is the rounded shorthand for that April moment, not a year average. The prices can be checked on a [2011 London-fix archive](http://www.321gold.com/archives/fix2011.html) and on a [daily London-fix ratio table](https://taxfreegold.co.uk/goldsilverratio2011.html) compiled from LBMA gold and silver fixes. A contemporaneous [April 2011 report](https://www.coinnews.net/2011/04/29/gold-jumps-8-1-in-april-with-record-close-silver-prices-soar-28-3/) named the same pair.",
      "This site’s **2011 year averages** remain $1,571.52 gold and $35.12 silver → **44.7**, a twelve-month mean rather than the April low. On **6 September 2011** the London gold PM fix was **$1,895** against a London silver fix of **$41.85**: $1,895 ÷ $41.85 = **45.3**. Silver had already fallen from its April high, so gold’s September peak came with a higher ratio, not a second 30:1. One year, one definition, three figures: April’s **31.5**, September’s **45.3**, and the year-average **44.7**.",
      "What 30:1 meant in 2011 is that, for a few London sessions in late April, silver’s price was unusually high next to gold’s. The run did not last: by September the ratio was back above **45**. Buying of bars and coins and industrial use were both strong that year, but neither changes the arithmetic of the ratio itself; country-by-country demand, from later survey years, is in [physical silver demand by country](/markets/physical-silver-demand-by-country).",
      "The April 2011 low is a date in the record, like the January 1980 figure near **17.2**. Neither is a level that later prices are bound to revisit.",
    ],
  },
  {
    heading: "Year-average snapshots from the same series",
    paragraphs: [
      "Using only this site’s published year-average prices, so both metals share a method, here are a few more dated ratios.",
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
      "The year-average ratio sat near 29 in two different decades and near 84–86 in two recent years. The January 1980 figure near 17 is a peak-week pair, not a year; April 2011 near **31.5** is a single London session, not the 2011 year average of **44.7**. The labels matter as much as the numbers.",
    ],
  },
  {
    heading: "Reading a ratio you see quoted",
    paragraphs: [
      "The useful questions are always the same: which two prices, from which market, on which date — a fix, a futures close, or a year average? A comparison of 1980 with 2011 means little until someone says which 1980 and which 2011. A mint ratio is a law, a mining ratio is ounces mined, a market ratio is a price quotient, and a vault ratio is ounces held in one custody count; most confusion about “the ratio” comes from swapping one for another.",
      "Silver’s older legal ratio is the story of [bimetallism](/history/silver/bimetallism), and the **1980** squeeze is told in [Silver Thursday](/history/silver/silver-thursday). Silver’s double life as money and industrial metal is traced in [monetary history and industry](/history/silver/monetary-and-industry), and the argument over whether the cost of mining should limit money is taken up in [hard money vs fiat](/sound-money/hard-money-vs-fiat). [Physical silver demand by country](/markets/physical-silver-demand-by-country) covers who buys and uses the metal; the desk’s [Stocks & flows](/desk) tab shows live mine output and above-ground stocks. Other market figures, including the U.S. [official gold book value](/markets/official-gold-book-value), are collected under [markets](/markets).",
    ],
  },
];

const physicalSilverDemandByCountry: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Americans bought far fewer silver bars and coins in **2024** than the year before — **64.9 million ounces**, down 46 percent — while Indian buyers took **59.8 million**, up 21 percent. Those figures come from the World Silver Survey, the annual book researched by Metals Focus for the Silver Institute, and they are the usual source when someone ranks countries by silver demand.",
      "But “silver demand by country” can mean several different lists: bars and coins bought, coins struck at a mint, silver used in factories, silver made into jewelry, and old silver coming back as scrap. The countries at the top change completely from one list to the next. The sections below take each list in turn, starting with the **2024** bar-and-coin table and then the **2025** tables from World Silver Survey 2026. Mine production is a different ranking again and is not kept here; world mine totals appear near the end and on the desk’s [Stocks & flows](/desk) tab.",
    ],
  },
  {
    heading: "What the bar-and-coin ranking counts",
    paragraphs: [
      "The usual ranking is bars and bullion-style coins attributed to a country, net of some dealer-stock swings, and excluding commemorative coins. Metals Focus publishes that table in the World Silver Survey. “United States, 2024, **64.9 million ounces**” means identified U.S. bar-and-coin buying in that year, after those adjustments.",
      "The country is where the buyer is, not where the metal came from. Silver coined in Ottawa or Perth can be bought in the United States. Indian bar demand can be metal that arrived as imports. A ranking of bar-and-coin buying is a map of buyers, not a map of mines.",
      "Two world totals for the same year sit side by side. This site’s desk uses **190.9 million ounces** of world **coin and net bar demand** for calendar **2024** (World Silver Survey 2025): coin fabrication plus net bar purchases. The country table’s global total for the same year is **183.3 million ounces**. The difference is mechanical — the country series drops commemorative coins and adjusts for dealer inventories — so the two figures are not in conflict.",
    ],
  },
  {
    heading: "What the bar-and-coin ranking leaves out",
    paragraphs: [
      "Industrial use is much bigger. In the same 2024 survey, industrial demand was **680.5 million ounces** — photovoltaics, electronics, brazing, and the rest. That metal is consumed in products; it never becomes a bar in a drawer. A country that makes a lot of solar paste can be small on the investment table. World Silver Survey 2026’s **2025** industrial figures — world **657.4 million ounces**, with its own country ranking — appear further down.",
      "Jewelry and silverware are separate too. In the same 2024 survey those two world lines were about **208.7** and **54.2** million ounces. Jewelry has its own **2025** country table below — world **189.3 million ounces** in World Silver Survey 2026 — and silverware was **42.1 million ounces** in 2025. Official-sector silver is tiny by comparison: **1.5 million ounces** in the 2024 world book.",
      "Funds and futures are outside the ranking as well. Indian silver exchange-traded product holdings rose by about **25 million ounces** in 2024, to **38.6 million ounces** at year-end. That inflow is metal held by vault-backed funds, not India’s **59.8 million ounces** of bar-and-coin investment. A futures position is a different instrument again.",
    ],
  },
  {
    heading: "2024 country snapshots",
    paragraphs: [
      "From the World Silver Survey 2025 physical-investment table, in million troy ounces, with the change from 2023. The world total peaked at **337.6** in 2022, fell to **238.2** in 2023, and dropped again to **183.3** in 2024.",
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
      "Four countries — the United States, India, Germany, and Australia — account for most of the identified world total, on the order of four-fifths in recent Metals Focus commentary on the same series.",
    ],
  },
  {
    heading: "How the named countries differ",
    paragraphs: [
      "The United States has been the largest physical-investment market in most years of the 2010–2024 series. The exceptions are **2018** and **2019**, when India was larger. Cumulative U.S. net purchases over 2010–2024 are on the order of **1.5 billion ounces**. Coins take a larger share of U.S. buying than elsewhere — sovereign bullion coins first, then bars. 2024’s **64.9** is a drop from the 2021–2023 plateau near **120–138**.",
      "India’s line is mostly bars. Cumulative 2010–2024 bar-and-coin demand in that series is about **840 million ounces**. 2024’s rebound followed a late-July cut in the Indian import duty on bullion, from **15 percent** to **6 percent**, which lowered the rupee price after it had already reached nearly **Rs. 100,000** per kilogram. 2020’s **8.7** shows how quickly the line can collapse when the rupee price spikes and people sell metal back instead. Exchange-traded funds sit beside that physical line; they do not replace it.",
      "Germany is the largest European silver-investment market in the same book, and the sharpest recent swing. Identified German buying averaged about **48.5 million ounces** a year in 2020–2022, then fell to **13.3** in 2023 and **9.9** in 2024 after an end-2022 margin-tax change on some non-EU bullion coins, a 2023 VAT change on some silver products, and selling back as euro prices crossed **€800** per kilogram. Australia’s 2024 **9.3** is another second-year decline with higher buybacks. Those are tax, price, and inventory facts — not a ranking of national character.",
    ],
  },
  {
    heading: "Where the coins were struck (2025)",
    callout: {
      label: "Minted here is not bought here",
      paragraphs: [
        "This table counts where silver was struck, not where it was bought. Metal coined in Ottawa or Llantrisant is often sold in the United States, so Canada and the United Kingdom can rank high here and much lower on the buyer table.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026 prints a separate **coins and medals** table for calendar **2025**. World fabrication in that series was **87.9 million ounces**, down 7 percent from 2024’s **94.7**. That world total matches the survey’s 2025 **coin fabrication** line in the coin-and-net-bar figures; it is a different number from the 2024 country physical-investment total of **183.3**.",
      "The five largest 2025 country lines, in million troy ounces, with the change from 2024:",
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
    heading: "Where factories used silver (2025)",
    callout: {
      label: "Factory use is not bar buying",
      paragraphs: [
        "This is where silver went into electronics, solar panels, brazing alloys and solders, and other industrial products. China ranks first here and is small on the bar-and-coin table; the United States ranks first there and second here.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026 prints an industrial-demand table by country for calendar **2025**. World industrial use was **657.4 million ounces**, down 3 percent from the same book’s **679.0** for 2024 — the first contraction since the pandemic, after four years of growth.",
      "The five largest 2025 country lines, in million troy ounces. These are ounces consumed in products.",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Industrial demand by country, calendar 2025. Million troy ounces — factory use, not bars bought or coins struck.",
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
      "China’s **282.9** is about **43 percent** of the 2025 world industrial total (282.9 ÷ 657.4), yet the bar-and-coin table has China at just **5.5** in 2024. That gap is the reason to keep the tables apart. East Asia as a whole was **384.6** in 2025, down 4 percent; the survey attributes most of that regional loss to photovoltaic silver, where East Asian powder makers dominate. China’s own industrial line still rose 3 percent, and electrical and electronics inside China rose 5 percent, to **221.8 million ounces**.",
      "Japanese industrial fabrication fell **27 percent**, to **68.8**. The survey names fierce competition from Chinese silver-powder manufacturers as the main reason. Japan’s electrical-and-electronics line fell **32 percent**, to **53.7**. The United States was **125.5**, down 1 percent from **126.9**; Germany **31.0**, down 2 percent; the United Kingdom **21.6**, up 5 percent.",
    ],
  },
  {
    heading: "Where those factory ounces went",
    paragraphs: [
      "The same World Silver Survey 2026 book splits the **657.4 million ounce** industrial total by sector. Electrical and electronics came to **449.5 million ounces**, of which photovoltaics were **186.6**. Subtract one from the other and electrical and electronics excluding photovoltaics is **262.9**. Brazing alloys and solders were **50.5**; other industrial uses **157.4**. Photography is a separate demand line — **24.2 million ounces** in 2025 — and is not inside the 657.4 total.",
      "Solar is large, but it is not the whole factory floor. Electronics other than solar remain the single largest industrial use.",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Industrial demand by sector, calendar 2025. Shares are the printed million-ounce cells divided by 657.4, then rounded. Photovoltaics sit inside electrical and electronics in the survey; the ex-PV row is that total minus photovoltaics.",
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
      "Against the same book’s 2024 figures, electrical and electronics fell 2 percent, photovoltaics fell 6 percent, other industrial fell 7 percent, and brazing alloys and solders rose 1 percent. The survey names photovoltaic thrifting and substitution — manufacturers using less silver per panel, or other metals — and a slower pace of ethylene-oxide catalyst additions as the main losses. Automotive and aerospace strength supported the small brazing gain.",
    ],
  },
  {
    heading: "Where jewelry was made (2025)",
    callout: {
      label: "Jewelry made here is not bars bought here",
      paragraphs: [
        "This is where silver was made into jewelry. India ranks first here and second on the bar-and-coin table; China ranks first on the industrial table and fourth here.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026 prints a jewelry table by country for calendar **2025**. World jewelry fabrication was **189.3 million ounces**, down 8 percent from the same book’s **205.1** for 2024. (The **208.7 million ounce** jewelry figure for 2024 earlier on this page comes from the previous year’s survey; the two editions revised the same year.)",
      "The five largest 2025 country lines, in million troy ounces:",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Jewelry fabrication by country, calendar 2025. Million troy ounces — workshops, not bars bought, coins struck, or factory use.",
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
      "India’s **70.3** is about **37 percent** of the 2025 world jewelry total (70.3 ÷ 189.3), against **59.8** on India’s 2024 bar-and-coin line. Indian fabrication fell 20 percent, to its lowest level in that book since 2021, as high rupee prices and sharp swings during the year cut rural buying and pushed makers toward lighter pieces. The survey credits gold-plated silver and organized retail with limiting a steeper drop.",
      "Thailand made **28.5**, up 24 percent, its highest since 2011; the survey attributes the rise to exports to India, which doubled in volume and overtook the United States as Thailand’s largest jewelry buyer. Italy made **18.0**, down 12 percent; Europe as a whole was **27.6**, down 10 percent, with the survey naming tariff-driven Italian export losses and weaker end-market sales. China made **16.2**, up 5 percent after three down years, helped by shoppers switching from gold and by new product lines. The United States made **10.3**, down 9 percent; the same book puts U.S. jewelry consumption down just over 20 percent in fine-ounce terms. Silverware remains a separate line — **42.1 million ounces** in 2025, down 21 percent.",
    ],
  },
  {
    heading: "Where recycled silver comes from (2025)",
    callout: {
      label: "Scrap coming back is not new buying",
      paragraphs: [
        "Recycling is metal returning from old products. A country can scrap a lot of industrial silver while buying few bars, and jewelry scrap can rise in a year when new jewelry falls, because the two lines measure opposite directions of travel.",
      ],
    },
    paragraphs: [
      "World Silver Survey 2026 prints a recycling-by-source table for calendar **2025**. World recycling was **197.6 million ounces**, up 2 percent on the year and a thirteen-year high in that series. That total happens to sit close to the 2024 bar-and-coin figure of **183.3** and the 2025 jewelry figure of **189.3**, but it counts something else entirely: silver returning to the market, not ounces leaving a mine and not ounces bought or fabricated.",
      "The five source lines, in million troy ounces:",
    ],
    table: {
      caption:
        "World Silver Survey 2026, Metals Focus for the Silver Institute. Recycling by source, calendar 2025. Million troy ounces — old silver returning, not bars bought or new fabrication.",
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
      "Industrial scrap, at **110.1**, is the largest source — a little more than half of the world total. The survey records a slight dip in that line and names lower e-scrap yields, meaning less silver recovered from each tonne of discarded electronics, as the reason factory scrap did not rise with the rest. Jewelry scrap came to **38.2** and silverware scrap to **28.3**; both of those old-metal lines rose. Photographic scrap, a legacy of film processing and X-ray plates, was **16.2**; coin scrap, mostly old coins melted down, was **4.7**.",
      "Scrap is secondary supply. A jewelry-scrap ounce is metal coming back from old pieces; a jewelry-fabrication ounce is metal going into new ones. An industrial-scrap ounce is recovered from spent products; an industrial-fabrication ounce is consumed in new ones. Scrap runs on a different clock from mining: the scrap clock follows products reaching the end of their lives, while the mine clock on the [gold–silver ratio](/markets/gold-silver-ratio) page follows ore coming out of the ground.",
    ],
  },
  {
    heading: "World mine output: flat for a decade",
    paragraphs: [
      "Behind all these tables, world mine output has barely moved. The U.S. Geological Survey’s [Mineral Commodity Summaries 2016](https://apps.usgs.gov/minerals-information-archives/mcs/mcs2016.pdf) put world silver mine production at **27,300 tonnes** for 2015. [Mineral Commodity Summaries 2026](https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-silver.pdf) prints **25,300 tonnes** for 2024 and **26,000 tonnes** (estimated) for 2025. A decade on, the world total is still in the mid-20,000s of tonnes, largely because so much silver is mined as a byproduct of other metals rather than for its own sake. The [gold–silver ratio](/markets/gold-silver-ratio) page sets that output beside gold’s, and the desk’s [Stocks & flows](/desk) tab shows it live.",
    ],
  },
  {
    heading: "The different world totals",
    paragraphs: [
      "Before comparing countries, it helps to know which world total a figure belongs to:",
    ],
    list: [
      "**190.9 million ounces** (2024): coin and net bar demand — coins struck plus net bar purchases.",
      "**183.3** (2024): country physical investment — bars and bullion coins, by the buyer’s country.",
      "**87.9** (2025): coins and medals fabrication — silver struck at mints.",
      "**657.4** (2025): industrial fabrication — silver consumed in products.",
      "**189.3** (2025): jewelry fabrication — silver made into jewelry.",
      "**197.6** (2025): recycling — old silver returning to market.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Official gold stocks are covered in [central-bank gold reserves](/markets/central-bank-gold-reserves). Silver’s history as money beside its industrial use is told in [silver: monetary history and industry](/history/silver/monetary-and-industry). Other market figures on this site are collected under [markets](/markets).",
    ],
  },
];

/** Blog: COMEX 1980 silver rules — longer site essay than the X Article. */
const exchangesChangeSilverRules: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Most people treat “the silver price” as a fact of nature — one number, one market, one meaning. A futures screen is less polite. It can keep printing a price after the exchange has already changed the claim that price is allowed to represent.",
      "In January **1980**, the New York Commodity Exchange — COMEX — switched silver futures to liquidation-only trading. Traders could close positions they already held. They could not freely open or expand new long bets the way they had during the prior run-up. The Chicago Board of Trade adopted a similar restriction. Those rule changes did not invent silver, and they did not erase it. They changed which paper claims the venues would still allow to form.",
      "Exchange mechanics on one side, metal that gets used up on the other, and a plain reminder that paper is a promise. The March break that followed is [Silver Thursday](/history/silver/silver-thursday). What follows here is the January rule book: what liquidation-only closed, what had already been tightened, and why a printed price and a deliverable ounce are not the same sentence.",
    ],
  },
  {
    heading: "What liquidation-only closed",
    paragraphs: [
      "A silver futures contract is a dated claim. Someone is long, someone is short, and the exchange stands between them with margin and a rule book. In an ordinary month a trader who wants more exposure opens a new long. Open interest — the stock of contracts still open — can grow. When the contract nears expiry, the holder takes metal, settles in cash, or rolls the position into a later month. None of those choices is a mine. They are ways of dealing with a promise that has a date on it.",
      "Liquidation-only shut the door that lets new speculative longs in. Existing longs could sell out. Shorts could buy back. What the venue would not freely permit was a fresh long that made the pile of open claims larger. The ticker symbol did not change. The permission behind the next trade did.",
      "The Chicago Board of Trade’s similar restriction mattered because silver futures were not a one-building market. A curb on one exchange that left the other wide open would have invited the same bets to change address. A similar curb on both kept the paper from simply walking across town. The metal in warehouses and in the ground was not relocated by that decision. The right to write a new long was.",
      "Call the step risk management, call it emergency market structure, or call it the moment the game board changed. Those are arguments about motive. The mechanical fact is narrower: one direction stayed open, the direction that closes what was already written. The direction that adds a new long did not.",
    ],
  },
  {
    heading: "What January had already tightened",
    paragraphs: [
      "Liquidation-only was not the first screw turned that month. Earlier in January **1980**, COMEX had already tightened position limits and raised margin requirements. A position limit caps how large one interest is allowed to stand. Margin is the cash the clearing house requires against an open contract. Raise the margin, and a position that was financeable on Monday can demand more cash on Tuesday. Those tools slow a market. They do not, by themselves, forbid a new long from being opened inside the cap, if the trader can post the cash.",
      "Liquidation-only was the harder step. It aimed at the growth of open interest through new speculative longs. It pushed the book toward unwind rather than toward a larger set of claims. The worry attached to that step was March delivery: more paper arriving at the delivery window than metal the system could comfortably handle. Deliverable supply, margins, and position concentration were what exchanges and regulators were watching. A committee vote does not move ore. It does change how many new promises can be written against whatever metal the contract still points at.",
      "The backdrop was the Hunt-era silver episode. Large concentrated long positions had pushed prices far above prior norms. Nelson Bunker Hunt and William Herbert Hunt, with partners, had built a position in bullion and futures on a scale the market could not treat as one more speculator among many. Exact ounce counts still vary by source, and by whether warehouse receipts and forward claims are folded in. What does not vary is the concentration: a small circle of names sat on a large share of the paper and the metal the paper could demand. When margins rise against a position that large, the brokers who financed it ask for more capital. That pressure is credit. The January curb was the rule book answering before March’s delivery window arrived.",
    ],
  },
  {
    heading: "A high-forties print, then a reversal",
    paragraphs: [
      "Silver’s printed price had spiked into the high forties. The nearby extreme recorded for that January run is **$49.45** on **18 January 1980**. That figure is a print, not a statute. It sits in the same month as the position limits, the higher margins, and the liquidation-only curb. A screen full of forties can look like a fact about silver itself. It was also a fact about which claims the exchange was still willing to let grow.",
      "In the days after the curb, the printed price reversed sharply. The exchange had not repealed the ounce. It had changed who could still bid for more paper exposure. A price that falls after new longs are restricted is not, by itself, proof that the metal became more abundant overnight. It is evidence that the demand the rule book would still accept had been cut. Shorts covering and longs closing are both trades. A new speculative long was no longer an ordinary one.",
      "March **1980** is a different day from that January curb. The broader unwind climaxed in what markets still call Silver Thursday. On **27 March 1980** silver futures broke under forced selling, in a market already living with higher margins and limits on new longs. January was the run and the rule change. March was the close. Folding both into a single afternoon makes the sequence harder to read: first the permission changed, then the book was unwound.",
    ],
  },
  {
    heading: "Motives, boards, and what courts left standing",
    paragraphs: [
      "Lawsuits and commentary argued for years about motives and conflicts on exchange boards. People with positions, people with seats, and people who cleared trades do not become neutral because a market is under stress. Some accounts treat the curb as prudence. Others treat it as a rescue of the shorts. The **1980** record keeps both arguments alive because it refuses a single motive that explains every vote.",
      "Courts that examined those fights did not turn “conflicted motives” into a simple cartoon of a rigged tape. A board can contain interested parties. That fact does not, by itself, convert every print after the curb into a fiction, and it does not erase the rule change. What remains usable for a reader of metals is narrower and harder. When the venue rewrites the rules, the meaning of the quote changes even if the ticker symbol stays the same.",
      "That is the sentence worth keeping. It does not require a villain, and it does not require a defence of the board. It requires only the order of events: limits and margins, then liquidation-only, then a sharp reversal in the printed price, then a March unwind the market still dates as Silver Thursday.",
    ],
  },
  {
    heading: "Metal that gets used up",
    paragraphs: [
      "Industrial silver leaves a futures conversation in a way a roll does not. It gets soldered into electronics, plated onto contacts, burned into panels. Once it is consumed at product scale, that ounce is not waiting patiently for next month’s delivery window. It is in a device. Getting it back is a recycling problem with its own clock, not a click that moves a position from March to May. Silver’s double life as money and as an industrial metal is the longer story under [monetary history and industry](/history/silver/monetary-and-industry).",
      "Paper silver does the opposite move. A contract is opened, marked to a price, cash-settled, or rolled into the next expiry. Rolling is a calendar trick. It keeps leverage alive across months. It is not a mine, and it does not refine an ounce. It does not put metal back into a vault that factories have already drawn down. The paper book can look continuous on a screen while the metal side of the market is disappearing into products.",
      "The two clocks are easy to mash together because both get discussed under the word silver. One clock follows contracts and margin calls. The other follows ore, energy, refining, and the products that lock silver into forms that are slow to return. A liquidation-only rule speaks only to the first clock. It does not smelt anything, and it does not unsolder a circuit board.",
    ],
  },
  {
    heading: "Two claims under one headline",
    paragraphs: [
      "So “the silver price” is at least two claims sharing a headline. Physical silver answers to rock, energy, refining, and industrial chemistry. Paper silver answers to margin, expiry, position limits, and — on rare historical days — whether the exchange will still let a trader add a long.",
      "A quote can look abundant because contracts are easy to write. An abundance of contracts is not an abundance of metal that can be delivered, or reclaimed from products, on the day the promise comes due. The **1980** liquidation-only episode is the case where that split stopped being a classroom distinction. The exchange did not need to deny that silver existed. It only needed to change which paper claims could still be written.",
      "Paper silver is a promise. The promise can be honoured in metal, closed out for cash, or shut off for new longs when the rule book moves. Physical silver is the ounce that a vault or a factory actually has to find. Treating the two as one fact of nature is how a screen price gets mistaken for a stock of metal. The January curb is useful because it separates them in public: the screen kept its symbol, and the permission behind the next long did not.",
    ],
  },
  {
    heading: "Close",
    paragraphs: [
      "When exchanges change the silver rules, they are not editing geology. They are editing the claim. The metal still answers to chemistry. The screen answers to the rule book — and in January **1980** the rule book moved first.",
      "COMEX switched silver futures to liquidation-only trading. The Chicago Board of Trade adopted a similar restriction. Earlier that month, position limits and higher margins had already tightened the same market. The printed price, which had reached the high forties, reversed after the curb. In March the unwind climaxed on Silver Thursday, **27 March 1980**.",
      "None of that tells a reader what to hold. It is a dated description of how a quote can outlive the permission that gave it its meaning.",
      "A shorter version of this note first appeared as an [X Article](https://x.com/i/article/2103033593492537345).",
    ],
  },
];

/** Blog: LTCM 1998 — longer site essay than the X Article (anti-cannibalization). */
const ltcm1998Consortium: Section[] = [
  {
    heading: "",
    paragraphs: [
      "By late September **1998**, Long-Term Capital Management was no longer a quiet hedge fund with Nobel names on the letterhead. It was a leveraged portfolio markets could not ignore. Russia’s August devaluation and debt moratorium had blown out credit spreads worldwide. Positions meant to diversify moved together. Losses stacked.",
      "And on **23 September**, after meetings at the Federal Reserve Bank of New York, fourteen banks and brokerage firms agreed to put about **$3.6 billion** of their own capital into the fund — private money, Fed facilitation, no public check.",
      "That sentence is the whole public claim of the evening. Everything else — bailout or fire drill, prudence or precedent — is argument built on those facts. This note stays with the sequence: how the book was built, how August broke it, who sat in the room, and what the New York Fed did and did not do.",
    ],
  },
  {
    heading: "A fund built on borrowed certainty",
    paragraphs: [
      "Long-Term Capital Management L.P. opened in **1994** under **John Meriwether**, the former Salomon Brothers bond chief. Its strategy hunted temporary price gaps between related securities and financed those bets with borrowed money. Early years looked brilliant. Federal Reserve History notes returns of about **20 percent** in **1994**, **43 percent** in **1995**, **41 percent** in **1996**, and **17 percent** in **1997**.",
      "By end-**1997** the fund — often shortened to LTCM after the full name is clear — held roughly **thirty dollars of debt for every dollar of capital**, and had returned capital to investors without shrinking the book. Leverage up, cushion down. The model assumed that related prices would keep behaving as they had in the quiet years: spreads mean-revert, correlations stay in their lanes, and a shock in one market does not drag every other market with it.",
      "Those assumptions are ordinary risk-model language. They are not a guarantee. When the world stops mean-reverting, borrowed certainty becomes a fire-sale schedule.",
    ],
  },
  {
    heading: "August 1998 breaks the math",
    paragraphs: [
      "August **1998** changed the arithmetic. Russia’s shock sent investors into safer paper. Spreads LTCM had bet would narrow instead widened. Positions that were supposed to hedge one another moved the same way. The fund lost about **44 percent** of its value in August alone.",
      "On **2 September**, partners told investors the year-to-date hole through **31 August** was about **52 percent**. That is not a quiet mark-to-market note. It is a partner letter saying the cushion is gone and the leverage still sits on top of what remains.",
      "A fund that size does not unwind into empty air. It unwinds into other balance sheets — banks, brokers, and anyone holding the other side of the same relative-value trades. The question for September was no longer whether LTCM had been clever in **1995**. It was whether closing the book all at once would smash prices for people who had never traded with the fund.",
    ],
  },
  {
    heading: "The New York Fed’s room — introductions, not a check",
    paragraphs: [
      "On **18 September**, LTCM contacted New York Fed President **William McDonough**. A New York Fed team visited on **20 September**, joined by a Treasury official. What they saw was a web of counterparties and positions large enough that a simultaneous close could hit markets already strained by August.",
      "Meetings followed on **22 September**. On the morning of **23 September**, talks paused when a separate investor group — reported as led by **Warren Buffett** — floated an alternative buyout. That offer missed its midday deadline. Talks resumed.",
      "By about **6:00 p.m.**, fourteen firms had agreed to put up roughly **$3.625 billion** for about **90 percent** ownership. Two firms declined. Partners kept a thin residual claim under creditor oversight. By end-**1999** the consortium’s capital had been returned as positions were wound down.",
      "McDonough later told Congress the risk was not only losses for LTCM’s counterparties. A rush to close related positions could hit other investors through market moves and seize up credit in a market already spooked by August. He also insisted that **not one penny of public money** was spent or committed.",
    ],
  },
  {
    heading: "Bailout, fire prevention, or both",
    paragraphs: [
      "Critics still call the episode a bailout. Supporters call it fire prevention. The **1998** record keeps both arguments alive because it refuses to pretend the choice was simple.",
      "The New York Fed made the introductions and stayed for the talks. Fourteen creditors wrote the check. Private capital closed the deal in a public room. That is neither a blank Treasury cheque nor a story in which the central bank stayed home.",
      "The distinction matters for how institutions are remembered. A public rescue spends public money. A convened private rescue spends private money under official windows and clocks. Both can change incentives. Only one appears on the fiscal ledger. LTCM’s September evening was the second kind — and the argument about soft bailouts begins exactly there.",
    ],
  },
  {
    heading: "An older American rhyme",
    paragraphs: [
      "American financial history already knew a version of the locked room. In the [Panic of 1907](/history/20th-century/panic-1907-fed), J.P. Morgan and other bankers decided who still had a till when trust companies ran and the Clearing House window was not open to everyone. Congress later turned that improvisation into a permanent statute — the Federal Reserve.",
      "**1998** is not **1907**. LTCM was a hedge fund, not a Fifth Avenue trust company. The New York Fed already existed. Gold was not the settlement backstop it had been in Morgan’s New York. The rhyme is institutional, not identical: when markets seize, someone gathers creditors, ranks who can still be saved, and decides whether the close will be orderly or simultaneous.",
      "In **1907** the gatherer was a private house acting as a last window. In **1998** the gatherer was a regional Fed bank that refused to write the cheque and still set the table. Readers who want the earlier sequence can open that History page. This note stays with LTCM’s September.",
    ],
  },
  {
    heading: "What leverage does when correlations fail",
    paragraphs: [
      "The mechanical lesson does not need a moral. Relative-value strategies borrow against the claim that related prices will stay related. When a sovereign shock sends every risk asset the same way, diversification on paper becomes concentration in the crash. Thirty-to-one leverage turns a bad month into a capital event.",
      "Returning capital to investors while keeping the book large made the cushion thinner just before the storm. That choice looked efficient in **1997**. It looked different after August **1998**. Leverage is not a personality trait. It is a schedule of forced sales when marks move against you.",
      "None of that is a tip about funds, banks, or metals. It is dated plumbing: how a book was financed, how a shock hit, and how a room of creditors answered.",
    ],
  },
  {
    heading: "Fiat credit and the stop that is not metal",
    paragraphs: [
      "LTCM’s crisis sat inside a [fiat](/sound-money/hard-money-vs-fiat) credit system — claims and marks, not a mint ratio. The New York Fed’s role was coordination among private balance sheets, not a redeemability window into a fixed weight of gold. That is a different stop from Newton’s Mint arithmetic or a classical gold convertibility rule.",
      "When the stop is confidence and clearing rather than metal, the last room can look like facilitation: gather the people who still have capital, keep the fire sale from becoming a general seizure, and leave the cheque to the creditors. Whether that is wise is a standing debate. Whether public money funded LTCM’s September deal is not. On the record McDonough defended, it did not.",
    ],
  },
  {
    heading: "Close",
    paragraphs: [
      "On this day in **1998**, private capital closed the deal in a public room. The New York Fed convened and facilitated. It did not fund the rescue.",
      "Fourteen firms put about **$3.6 billion** into a wounded hedge fund so the close would not smash everyone else’s marks at once. Partners kept a thin claim. By the end of the next year the consortium’s capital had come back as the book was wound down.",
      "Everything else — prudence, precedent, or soft bailout — is argument built on that evening’s facts.",
      "A shorter version of this note first appeared as an [X Article](https://x.com/i/article/2102821638521688064).",
    ],
  },
];

/** Blog: Newton 1717 — longer site essay than the X Article (anti-cannibalization). */
const newton1717Guinea: Section[] = [
  {
    heading: "",
    paragraphs: [
      "On **21 September 1717**, the Master of the Royal Mint answered a problem that sounded almost absurd: gold was pouring into England, and silver coins were disappearing from everyday change.",
      "The man writing the report was **Isaac Newton** — already famous for gravity, optics, and calculus. In his day job he ran the Mint. The Treasury had asked him, on **12 August**, for a plain statement of England’s gold and silver coins, the ratio between them, and what to do about silver that kept getting melted or shipped abroad. His answer, dated from the Mint Office that September, is one of the cleanest monetary diagnoses ever put on paper.",
      "England had not formally declared a pure gold standard. On paper it still ran a [bimetallic](/history/silver/bimetallism) system: gold guineas and silver shillings were both money. In practice the legal value of the guinea — then **21 shillings and 6 pence** — made gold too dear relative to silver compared with much of Europe. Merchants noticed. They brought gold in. They took silver out.",
    ],
  },
  {
    heading: "Two metals, one wrong price",
    paragraphs: [
      "Bimetallism is not a slogan. It is a mint board: two metals, one legal unit, a **fixed mint ratio**. When that legal number drifts away from the **market ratio** — the gold price of silver in trade — Gresham’s pattern appears. The metal the Mint overvalues stays in coin; the metal it undervalues leaves as bullion or foreign payment. **1717** is England’s high-clarity case of that arithmetic.",
      "Newton put the numbers in front of the Lords of the Treasury without romance. A troy pound of standard gold was cut into **44½** guineas. A troy pound of standard silver was cut into **62** shillings. At a guinea of **£1 1s 6d**, that mint schedule implied roughly **15.07** units of fine silver per unit of fine gold. Exportable silver bullion, he noted, usually traded a few pence per ounce above coined silver. On that basis, a guinea was worth only about **20s 8d** in silver bullion — not **21s 6d**.",
      "The gap was small in shillings and large in consequences. A few pence of overvaluation, repeated across every pound of gold imported, was enough to pull metal one way and push coin the other.",
    ],
  },
  {
    heading: "England against Europe — and against Asia",
    paragraphs: [
      "Newton then compared England with its trading partners. In France the usual proportion was about **15 to 1**. In Holland markets, guineas changed hands as if they were worth roughly **20s 7½d**. Across Italy, Germany, and the North, the implied guinea value clustered a little lower still. Spain and Portugal rated gold higher at home, which kept gold there and pushed Spanish silver out into Europe — silver that had long moved as the familiar [piece of eight](/history/silver/piece-of-eight) across Atlantic and Pacific routes.",
      "Asia made the pressure worse. In China and Japan, Newton wrote, a pound of fine gold was worth only about nine or ten pounds of fine silver; in East India, about twelve. That cheap gold relative to silver pulled European silver eastward whenever ships loaded for the Indies. England’s Mint ratio was not a closed island. It sat inside a world silver current that already ran from American mines through European ports toward Asian settlement.",
      "His conclusion was blunt:",
    ],
    callout: {
      label: "Newton, Mint report, 21 September 1717",
      paragraphs: [
        "“It is the demand for exportation which hath raised the price of exportable Silver about 2d. or 3d. in the ounce above that of Silver in coyn, and have thereby created a temptation to export or melt down the silver coyn rather then give 2d. or 3d. for forreign silver.”",
      ],
    },
  },
  {
    heading: "What a guinea was worth on Newton’s map",
    paragraphs: [
      "The report’s comparative table is easier to hold as a short list than as prose. Before the December cut, England’s legal guinea sat above what Newton’s bullion math and Europe’s markets implied:",
    ],
    table: {
      caption: "Implied guinea values around the 1717 debate (Newton’s comparisons).",
      headers: ["Reference", "About"],
      rows: [
        ["England’s legal rate (before the cut)", "21s 6d"],
        ["Newton’s bullion math", "about 20s 8d"],
        ["France (~15:1)", "about 20s 8½d"],
        ["Holland market", "about 20s 7½d"],
        ["Spain / Portugal (after the usual premium)", "about 20s 9d"],
        ["England after the December 1717 proclamation", "21s"],
      ],
    },
  },
  {
    heading: "The question behind the numbers",
    paragraphs: [
      "Newton did not stop at ratios. He asked whether the country should keep paying a premium to gold importers while its circulating silver drained away:",
    ],
    callout: {
      label: "Newton, same report, 1717",
      paragraphs: [
        "“Must the Nation pay 38 or 40 shillings too much for every Pound Weight of Gold imported? Must all Our Silver be Exported to enrich the Merchants and is there no remedy?”",
      ],
    },
  },
  {
    heading: "The December cut — and what it did not finish",
    paragraphs: [
      "His proposed remedy was to lower the guinea — take about **10d** or **12d** off its legal price so England’s gold–silver proportion matched Europe’s, or at least take **6d** off immediately and watch the effect. Leave things alone, he warned, and gold would fall anyway once silver grew scarce enough that people demanded a premium to pay in silver.",
      "On **22 December 1717**, a royal proclamation cut the guinea to **21 shillings**. That was not the full **10–12d** cut Newton had floated as the clean European alignment, but it was the decisive public step. The guinea at **21s**, and the associated gold price of **£3 17s 10½d** per standard ounce, became the long-running English gold reference — interrupted mainly by wartime suspensions — deep into the classical gold-standard era.",
      "Parliament’s half-step matters for the story. Officials wanted to keep a workable bimetallic face while stopping the silver drain. The first cut eased the overvaluation of gold; a second cut was talked about and then feared — because expecting another drop could itself freeze silver in private hands. England’s path toward gold as the large-value standard was therefore not a single decree. It was Mint arithmetic, a proclamation, and decades of practice leaning the same way.",
    ],
  },
  {
    heading: "The Mint, the Bank, and the silver already in motion",
    paragraphs: [
      "Newton’s Mint Office was not inventing England’s money from a blank page. Public credit and note issue had already sat beside coin since the Bank of England’s war-finance charter of **1694**. **1717** is still a coin-ratio story — paper growing beside metal, and metal itself fighting over which ounce the law would favour.",
      "Nor did Britain invent the silver outflow in **1717**. Spanish American silver — much of it coined as pieces of eight — had been flowing toward Asia for generations. Potosí-class supply and Asian settlement demand were older than Newton’s report. What he did was measure England’s place in that current and tell ministers that **Mint arithmetic**, not merchant greed alone, was feeding the local drain.",
      "The wider statute machine and the Spanish dollar that counterparties often held are older than this report. Newton’s job here is narrower: the English Mint’s error relative to trade.",
    ],
  },
  {
    heading: "Official prices against market ratios",
    paragraphs: [
      "The **1717** episode is not a quaint coin story. It is an early case of official prices fighting market ratios. When a government names a fixed gold–silver relationship that the outside world does not share, the undervalued metal leaves and the overvalued metal arrives. Newton described the mechanism the way a physicist describes a force: demand for export raises bullion above coin, coin gets melted or shipped, and the circulating medium thins.",
      "By lowering the guinea, the state reduced the official overvaluation of gold. Silver’s exit pressure eased at the margin. Over the following decades England’s monetary practice leaned harder on gold. Historians still argue how cleanly to date a “gold standard,” but Newton’s report is a landmark on that path: a working scientist diagnosing a monetary peg that did not match the trade of the world.",
      "Later American statutes would write their own mint ratios — **15:1** in **1792**, then gold-friendlier corrections, then the long silver fight after **1873**. Those are different instruments in different countries. The family resemblance is the same: a legal number is not a market equilibrium. A market print of gold over silver, without a mint claim, is just a dated quotient — useful as arithmetic, useless as a tip.",
    ],
  },
  {
    heading: "What the rhyme is — and is not",
    paragraphs: [
      "The metals still trade as market prices, not as Newton’s shillings. The rhyme is institutional, not a tip.",
      "Fixed ratios break. A legal or policy link between two monies that ignores relative demand invites drains, premia, and sudden corrections — whether the link is bimetallic coin, a currency-board peg, or an exchange-rate band.",
      "Asia still matters for silver’s global bid, though today’s channels run through industry, investment, and East–West flows as well as eighteenth-century Indies fleets. Local official stories do not repeal that bid.",
      "Gold’s official status can outlast the paperwork that created it. The guinea cut of **1717** helped set a gold reference that outlived Newton by centuries. Modern central-bank gold holdings rhyme with a long habit of treating gold as a hard reference when paper arrangements strain — without pretending history is a trading signal.",
      "Newton’s report remains useful because it refuses mystique. He did not moralize silver into virtue or gold into vice. He counted. He compared. He asked what England was paying for a ratio that the rest of the trading world did not honor.",
    ],
  },
  {
    heading: "Close",
    paragraphs: [
      "In **1717**, the Master of the Mint told the Treasury that England’s silver was not vanishing by accident. It was leaving because gold’s official price was wrong relative to silver.",
      "Three months later the guinea was cut to **21 shillings**. The coins in people’s pockets changed. The country’s monetary gravity shifted a little further toward gold.",
      "Newton’s other laws made him immortal. This one made him useful.",
      "A shorter version of this note first appeared as an [X Article](https://x.com/i/article/2102003835015155712).",
    ],
  },
];

const bodies: Record<string, Section[]> = {
  "blog/when-exchanges-change-the-silver-rules": exchangesChangeSilverRules,
  "blog/ltcm-1998-consortium": ltcm1998Consortium,
  "blog/newton-1717-guinea": newton1717Guinea,
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
      "Coins get clipped. Banks write receipts that begin as claims on metal and end as notes people are told to trust. Legislatures rename mint ratios, suspend convertibility, or recall gold from private hands. Crowds form at doors that cannot pay.",
    ],
  },
  {
    heading: "From metal in the hand to paper that floats",
    paragraphs: [
      "The story does not start with a modern central bank. Traders settled in gold and silver by weight; a stamp cut the cost of checking that metal; a warehouse ticket began to pay a debt while the bullion stayed in the vault. Paper is late. Fiat — money that exists by law and habit rather than by redeemability into a known weight — is later still.",
      "Lydia, Greece, and Rome turned the stamp into a fiscal tool long before any national bank. Centuries later the receipt becomes a note: Amsterdam’s public bank, the Bank of England’s war charter, [John Law’s **1720** System](/history/banks-paper/john-law), and the French assignats. A paper collapse in Regency France is not Weimar, and Weimar is not **1971**.",
    ],
  },
  {
    heading: "One republic, one white metal, one crowded century",
    paragraphs: [
      "Inside the United States the fight was often a statute fight: what the dollar is. From the **1792** coinage law through Jackson’s bank war, Civil War greenbacks, the silver question after **1873**, and a gold definition in **1900**, Congress kept rewriting the unit — then handed off before the Fed. Silver has its own gravity. A mountain at [Potosí](/history/silver/potosi) poured the metal into Atlantic and Pacific trade; a global coin, mint-ratio fights, and the **1980** squeeze followed. None of that is a footnote to gold.",
      "The crowded modern century opens with a private rescue after **1907**, a new central bank, and classical gold’s wartime end. [Weimar **1923**](/history/20th-century/weimar-1923) shows what happens when the printing press outruns the stop. The **1933** US gold recall, Bretton Woods, and the [**1971** gold-window close](/history/20th-century/bretton-woods-nixon-1971) close the official promise — similar mechanisms in different years, under different laws.",
    ],
  },
];

/** Pillar hub /sound-money — rendered by the sound-money index route. */
export const soundMoneyHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "People argue about gold, paper, and “backing” with words that slip. One speaker means a coin that is costly to dig. Another means a note you can present for metal. A third means a vault photo beside a slogan. The argument goes nowhere until the words hold still.",
      "Sound money is the oldest of those words. It means a unit whose supply cannot be expanded at will by the issuer — usually because metal is costly to produce, or because paper is legally redeemable for a known weight of metal. Most of the rest follows from that one test.",
    ],
  },
  {
    heading: "A unit nobody can simply make more of",
    paragraphs: [
      "[What is sound money?](/sound-money/what-is-sound-money) starts with a note that clears the till on Monday and asks a harder question of it: can whoever issued it create more by decision alone? Circulation is not the test. A unit can pay for groceries today and still fail, if the issuer may dilute the stock as policy.",
      "Older English carried the same idea in two senses. A sound coin rang true when it was dropped on a counter; a clipped or plated one did not. A sound standard was healthy, not quietly lightened. Both senses point at the same fear: a unit worth less than its face claims.",
    ],
  },
  {
    heading: "Dug from the ground, or declared by law",
    paragraphs: [
      "[Hard money vs fiat](/sound-money/hard-money-vs-fiat) splits money that is costly to produce from **fiat** — money that exists by law and habit, from the Latin *fiat*, “let it be done.” Nobody mines a new ounce of gold with a vote. A treasury can create a new note with a signature.",
      "Circulation does not decide that category either. A well-run fiat regime can be stable for years; a mismanaged gold regime can still debase the coin. And the same engraved note can change sides overnight. When a convertibility window closes, a claim on metal becomes paper that exists because the law says so. The ink does not change. The stop does.",
    ],
  },
  {
    heading: "What the unit still buys",
    paragraphs: [
      "[Inflation and purchasing power](/sound-money/inflation-purchasing-power) measures the damage in plain terms: what an hour of work buys across years. Prices are the surface. The object is the unit itself. Hyperinflation, when prices rise by half or more in a single month, is the extreme case, not the everyday meaning.",
      "Scarcity, war, and a bad harvest move prices under any money. What sound money constrains is one source of a general rise — a stock the issuer can expand whenever a budget runs short.",
    ],
  },
  {
    heading: "Backed by what, and for whom",
    paragraphs: [
      "The word most often abused is “backed.” [What “backed” means](/sound-money/backed-money) separates **redeemability** — present the note, take a known weight of metal — from a vault total that no holder can claim. A contract can be tested at a window. A slogan cannot.",
      "Governments hold gold for many reasons. None of them makes a note convertible unless the law gives the holder the right to present it. Across the twentieth century that right narrowed step by step — suspended by war in **1914**, taken from American citizens in **1933**, withdrawn from foreign governments in **1971** — while the word “gold” stayed in the story.",
    ],
  },
  {
    heading: "The dates behind the words",
    paragraphs: [
      "The words matter because of what happened to them. In **1923** the German paper mark stopped working as money. In **1933** Americans were ordered to hand in their gold coin. In **1971** the last official promise to turn dollars into gold was suspended. Weimar, the gold recall, and Nixon are told in full in [Sound Money History](/history), each with its own laws and its own numbers.",
      "Every one of those stories turns on the same few questions: what the unit was, who could make more of it, and whether anyone could still take it to a window and walk out with metal.",
    ],
  },
];

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
      "The U.S. Treasury still values its gold at **$42.22** an ounce, a price written into law in **1973** and never updated. On **31 July 2026** the London market price was **$4,026.60**. Both numbers are correct, and they answer different questions. Many of the figures quoted about gold and silver work that way: a price, a ratio, or a country ranking that means something precise and gets repeated as if it meant something else.",
      "The live [desk](/desk) shows prices and ratios as they move. The articles here take a few of those numbers apart — where each comes from, who publishes it, and what it counts.",
    ],
  },
  {
    heading: "The numbers behind the headlines",
    paragraphs: [
      "[Official gold book value](/markets/official-gold-book-value) explains the **$42.22**: how the official price climbed from $35 to its last statutory level after the **1971** gold-window close, why the Treasury still counts its roughly **261.5 million** ounces at that rate, and what you get when you divide a market price by it.",
      "[Central-bank gold reserves](/markets/central-bank-gold-reserves) explains how central banks report gold — tonnes held, gold’s share of reserves, gold measured against GDP, and dated purchases and sales. It follows China’s published stock, Poland’s buying, Canada’s reserve table that now reads **Gold: 0**, and the Bank of England’s gold auctions of **1999–2002**.",
      "The [gold–silver ratio](/markets/gold-silver-ratio) is gold’s price divided by silver’s. The same phrase, ounces of silver per ounce of gold, is also used for mine output and for metal in London vaults, and those three counts give very different answers: near **68**, near **7**, and near **3** in 2026. The article also dates the famous lows, about **17** in January **1980** and the “30:1” of late April **2011**.",
      "[Physical silver demand by country](/markets/physical-silver-demand-by-country) ranks countries by bars and coins bought in **2024** — the United States first at **64.9 million ounces**, India close behind at **59.8** — and sets beside it the **2025** tables for industrial use, jewelry, coin minting, and recycled scrap. China tops the factory table and barely registers on the bar-and-coin one.",
    ],
  },
  {
    heading: "Where the numbers come from",
    paragraphs: [
      "Prices are the London (**LBMA**) and U.S. futures (**COMEX**) figures shown on the desk. Reserve figures come from IMF statistics, national central banks, and World Gold Council compilations. Silver demand comes from the World Silver Survey, researched by Metals Focus for the Silver Institute; mine output from the U.S. Geological Survey and the same survey. Every figure carries its date and source, because a July number and an August number from different books do not mix.",
      "Mine supply is ounces leaving the ground in a year, and it is a separate count again. The desk’s [Stocks & flows](/desk) tab shows mine output and above-ground metal beside these articles. No page here names a miner or a stock; the mine figures are geology, not picks.",
      "How $35 became $42.22, and what closed in **1971**, is told in [Sound Money History](/history). Whether the cost of mining should limit money is taken up in [hard money vs fiat](/sound-money/hard-money-vs-fiat), and silver’s double life as money and industrial metal in [monetary history and industry](/history/silver/monetary-and-industry). Buying, storing, and checking bars and coins is covered under [gold and silver in practice](/gold-silver).",
    ],
  },
];

/** Cluster hub /history/20th-century — rendered by the cluster route from Cluster.sections. */
export const twentiethCenturyHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In October **1907**, New York trust companies faced a run, and J. P. Morgan’s group organized private support because no Federal Reserve yet existed to do it. Sixty-four years later, on **15 August 1971**, the United States closed the last official promise that foreign governments could still turn dollars into gold at **$35** an ounce — the **gold window**.",
      "Between those two dates the rules of money changed faster, and more violently, than in the centuries before. A private rescue became a central bank. A peacetime gold standard ended in a war. A German mark stopped working as money. American citizens handed in their gold. A postwar system tied the world to the dollar and the dollar to gold, then let go. Most readers still live inside what that century built.",
    ],
  },
  {
    heading: "From a private rescue to a central bank",
    paragraphs: [
      "Congress answered **1907** with emergency currency legislation in **1908** and the Federal Reserve Act in **1913**. [The Panic of 1907 and the Fed](/history/20th-century/panic-1907-fed) follows that road: a trust-banking liquidity crisis, bankers improvising a lender of last resort, and the political fight that turned the improvisation into law. The Fed came after **1907**, not before it.",
      "A year after the new bank opened, war broke the older order around it. Before **1914**, major currencies were convertible into gold at fixed rates in peacetime, and gold moved between London, Paris, Berlin, and New York when the rates slipped. In the summer of **1914** the belligerents blocked gold exports and protected their notes. [The end of the classical gold standard](/history/20th-century/classical-gold-standard-end) tells how that machine stopped, and why the “returns to gold” of the **1920s** reused the name without rebuilding it.",
    ],
  },
  {
    heading: "Paper without a stop",
    paragraphs: [
      "Germany’s mark collapsed in **1923** under war debts, reparations, and extreme paper issue. By that autumn it no longer did the daily work of money: it bought less by the hour, and wages paid at noon were spent before supper. [Weimar 1923](/history/20th-century/weimar-1923) is that collapse, with its own causes, dates, and institutions. It was not a little inflation that got out of hand.",
      "Ten years later the United States left gold by a different road. In **1933** it recalled private monetary gold, and it later revalued official gold from **$20.67** to **$35** an ounce for the government’s own accounts. [The 1933 gold recall](/history/20th-century/1933-gold-recall) is the moment American citizens lost their monetary gold rights — nearly four decades before **1971**.",
    ],
  },
  {
    heading: "Thirty-five dollars an ounce",
    paragraphs: [
      "At Bretton Woods in **1944** the Allies rebuilt a **gold-exchange** system. Other countries pegged to the dollar and held dollars as reserves, and those dollars were supposed to be convertible into gold at **$35** an ounce for official holders. The promise held while the United States had gold to spare and the rest of the world wanted dollars more than metal. Through the **1960s** the strain showed.",
      "[Bretton Woods and Nixon 1971](/history/20th-century/bretton-woods-nixon-1971) follows the system from its founding to the Sunday evening of **15 August 1971**, when the window closed for foreign official holders.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "Paper had lost trust before. [John Law’s System](/history/banks-paper/john-law) broke in France in **1720**, and the revolutionary assignats in the **1790s** — the same kind of failure under different laws, in a different century. Weimar was not **1720** again, and **1971** did not invent paper money. The older chapters of [Sound Money History](/history) begin with coins and warehouse receipts.",
    ],
  },
];

/** Cluster hub /history/america — rendered by the cluster route from Cluster.sections. */
export const americaHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "What is a dollar? Congress kept answering. In **1792** it said gold and silver both, at a fixed ratio. Andrew Jackson answered by killing a national bank. The Civil War answered with **greenbacks** — paper dollars made legal tender for the war — that floated below gold in New York until resumption. After **1873** the country argued over silver as if the Mint’s list of coins were a crime. In **1900** a statute defined the dollar in gold alone.",
      "In the young republic, the unit was argued out in public law. Congress named a **mint ratio** (the official exchange between gold and silver coins), chartered or killed a bank, made paper legal tender, dropped a silver dollar from free coinage, then defined the dollar in gold. Markets answered with **Gresham’s pattern** — when law prices two monies wrong, the overvalued “bad” money stays in the till and the undervalued “good” money leaves — and with gold premiums and drains on the Treasury’s reserve.",
    ],
  },
  {
    heading: "Fifteen to one",
    paragraphs: [
      "The [Coinage Act of 1792](/history/america/early-us-coinage) wrote both metals into law at **fifteen to one**: **bimetallism**, gold and silver legal at a fixed ratio. The Spanish dollar, the silver coin Americans already carried, shaped the weight of the new silver dollar. When the mint ratio and the world ratio drifted apart, the undervalued metal left the country or went to the melting pot. Gold was the metal the law undervalued, and gold coin was the one that went missing.",
      "In **1834** Congress cut the gold in the ten-dollar eagle and moved the ratio to roughly **16:1**. Gold coin came back into domestic use. The general mechanics of two metals under one law are told in the silver chapter’s [bimetallism](/history/silver/bimetallism) article. The American arithmetic starts here.",
    ],
  },
  {
    heading: "A bank war before any central bank",
    paragraphs: [
      "[Jackson and the Bank](/history/america/jackson-and-the-bank) is the fight over the Second Bank of the United States: the **1832** veto, federal deposits moved to state “pet banks,” the Specie Circular that demanded gold or silver for public land, and the Panic of **1837**. When the Second Bank’s federal charter ran out, the country went on without a federally chartered central bank for the rest of the century.",
      "Jackson’s war was over a charter and the government’s deposits. It was not an argument about the Federal Reserve, which did not exist until **1913**.",
    ],
  },
  {
    heading: "Paper dollars for a war",
    paragraphs: [
      "Union finance after **1862** needed more than taxes and bonds could raise. [Greenbacks and the Civil War](/history/america/greenbacks-civil-war) follows the legal-tender notes Congress issued to pay for it. They spent at face value in shops but floated below gold in New York, where a gold premium quoted the market’s doubt every trading day.",
      "The Resumption Act set a date: **1 January 1879**. By then the premium was gone, and the Treasury resumed paying coin for its notes. War paper had been a suspension, not a permanent theory of money.",
    ],
  },
  {
    heading: "The silver question",
    paragraphs: [
      "The [Crime of 1873](/history/america/crime-of-1873) was a Coinage Act that left the standard silver dollar off the list of coins the Mint would strike freely for anyone who brought metal. Officials called it a clarification toward gold. When silver prices fell and western mines kept producing, farmers and miners called it a crime against the debtor.",
      "Free silver became a movement. The Bland–Allison Act and the Sherman Silver Purchase Act required the Treasury to purchase silver without restoring free coinage. William Jennings Bryan carried the cause into the **1896** presidential campaign and lost.",
    ],
  },
  {
    heading: "Back to gold",
    paragraphs: [
      "A Treasury that buys silver and pays gold needs enough gold. In the early **1890s** holders who doubted the reserve presented their claims, and gold outflows became ordinary public-finance news. The panic year **1893** brought repeal of the Sherman purchases; the Cleveland administration sold bonds for gold to defend what was left.",
      "[The road back toward the gold standard](/history/america/road-back-gold) runs from resumption in **1879**, through that strain, to the Gold Standard Act of **1900**, which defined the dollar as **25.8 grains** of gold nine-tenths fine. Seven years later a run on New York trust companies opened the next argument: the [Panic of 1907](/history/20th-century/panic-1907-fed), and the central bank Congress built in answer to it.",
    ],
  },
  {
    heading: "Jackson’s bank is not the Fed",
    paragraphs: [
      "The American arguments over credit and paper are easy to fold into one. They were not one. Jackson’s bank war was a charter-and-deposit fight in the **1830s**. Greenbacks were Civil War legal tender. The Fed was a **1913** answer to the trust-company panic of **1907**. They share a question — who may create money, and on what promise — but not an institution or a century.",
      "The same goes for the metal. **1873** was a Mint list. **1900** was a gold definition. **1971**, when the gold window closed for foreign governments, belongs to a different world. The [twentieth century](/history/20th-century) picks up where the Gold Standard Act left off.",
    ],
  },
];

/** Cluster hub /history/silver — rendered by the cluster route from Cluster.sections. */
export const silverHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "A mountain in the Andes poured silver into the world’s payments for centuries. A Spanish coin priced cargo from the Caribbean to East Asia. Governments tried to freeze gold and silver together in one unit at a fixed **mint ratio**. In **1980** a concentrated private position met an exchange rule book and broke. Later the same metal went into photographic film, electronics, and solar cells.",
      "Gold gets the famous stories. Silver did much of the paying, and its history runs on its own clock: early-modern empire, the mint statutes of the nineteenth century, a futures market in the twentieth, and factories that still buy the metal today.",
    ],
  },
  {
    heading: "The silver mountain",
    paragraphs: [
      "From the **1540s**, Cerro Rico above [Potosí](/history/silver/potosi) fed a chain of mine, mint, fleet, and Seville. Part of the flow went west across the Pacific on the Manila galleon, toward Asian markets that wanted silver more than Europe’s goods. The story is not only a European price rise. It is a two-ocean redistribution of monetary metal, driven by forced labor at the mine and by demand on the far side of the world.",
      "Mercury amalgamation raised recovery from poorer ores, and output in the later sixteenth and early seventeenth centuries reached a scale contemporaries treated as a wonder. Spain needed the silver to pay armies and service debts. Europe needed a money metal already priced in every port. China, after abandoning earlier experiments with paper, took silver as the unit that actually arrived in trade. The mountain did not choose where its ore went. Ships, taxes, and trade balances did.",
    ],
  },
  {
    heading: "A coin the world could read",
    paragraphs: [
      "That silver reached most of its users as the [piece of eight](/history/silver/piece-of-eight): roughly **27 grams** of Spanish American silver, a **typed coin** whose stamp named a trusted weight and fineness. Merchants who could not read Spanish could read the coin. It settled trade in the Caribbean, in Canton, and in the ports between, and for generations it was the silver many counterparties actually held when the ounces from Potosí arrived.",
      "The early United States defined its dollar with that coin in mind. [Early U.S. coinage](/history/america/early-us-coinage) follows the inheritance arithmetic from the Spanish dollar to the Coinage Act of **1792**.",
    ],
  },
  {
    heading: "Two metals under one law",
    paragraphs: [
      "**Bimetallism** made gold and silver both legal money at a fixed mint ratio. The trouble is that the market ratio moves and the statute does not. When the two drift apart, the metal the law undervalues leaves circulation — Gresham’s pattern — and a country that meant to use both ends up using one. [Bimetallism](/history/silver/bimetallism) follows that arithmetic through Europe’s turn to gold, the Latin Monetary Union, and the United States.",
      "America’s loudest version of the fight came after the [Crime of 1873](/history/america/crime-of-1873), when a coinage law dropped the standard silver dollar and free silver became a political movement. The statute politics sit with the rest of the American story; the mechanism is the same.",
    ],
  },
  {
    heading: "Silver Thursday",
    paragraphs: [
      "In **1979–80** Nelson Bunker Hunt and William Herbert Hunt, with partners, built a position in silver bullion and futures large enough to matter in a market much thinner than gold’s. Inflation fear after the **1970s** and distrust of paper claims ran through the public record of their motives. In January **1980** the nearby price printed near **$50** an ounce.",
      "Then the exchange changed its rules: higher margins and limits on **new long** (buy) contracts. The brokers who had financed the position asked for more capital, and forced selling did the rest. On **27 March 1980** the market broke. [Silver Thursday](/history/silver/silver-thursday) follows the position, the rule book, and the unwind — January was the run, March the collapse.",
    ],
  },
  {
    heading: "Money in memory, metal in factories",
    paragraphs: [
      "Over the twentieth century silver left most of the world’s coins, but not its buyers. Photography needed it, then electronics, then photovoltaic cells. [Silver: monetary history and industry](/history/silver/monetary-and-industry) follows the metal’s second life: remembered as money, measured in fabrication surveys as an industrial input.",
      "Those are different measurements. A mint ratio is a law. A market gold–silver ratio is a pair of prices on a named date. Industrial fabrication is metal flowing into products. Current survey figures and the ratio itself are covered under [Markets](/markets).",
    ],
  },
  {
    heading: "Not one lesson about printing",
    paragraphs: [
      "Potosí is early-modern supply under empire. **1873** is a U.S. Mint list and the free-silver politics that followed. **1980** is a private concentration in futures and bullion, and an exchange changing its rules. Each is a different century and a different failure — not one crisis, and not one lesson about “printing.”",
      "The American side of the silver fight continues in the [America chapter](/history/america). The rest of the story of money, from Lydia’s first coins to **1971**, starts at [Sound Money History](/history).",
    ],
  },
];

/** Cluster hub /history/banks-paper — rendered by the cluster route from Cluster.sections. */
export const banksPaperHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "In seventeenth-century London, a merchant could leave coin with a goldsmith and walk out with a note. He could come back later for the same weight of metal. More often he signed the note over to someone else, and it paid a debt while the coin stayed in the strongroom. Paper money begins there: as a receipt for metal, a claim check.",
      "Over the next two centuries the receipt turned into something else. Notes circulated because a bank or a state said they would, and the window that once paid metal became optional, delayed, or shut. Along the way, paper lost the public’s trust more than once — in Paris in **1720**, and again in revolutionary France in the **1790s**.",
    ],
  },
  {
    heading: "A receipt, then a note",
    paragraphs: [
      "A warehouse receipt is not yet a currency. It is a named claim on a named pile of metal. Banking, in the sense these histories use the word, starts when the receipt itself is used to pay. The metal stays in the vault; the paper moves. Counterparties accept the note because they trust the warehouse, not because a statute has declared the paper to be money.",
      "Convertibility is the test. If the holder can still get coin at the window, the note is a convenient claim. If the window closes, limits payout, or pays in more paper, the note has become a bank or state liability whose value depends on policy and confidence.",
    ],
  },
  {
    heading: "Goldsmiths and a public bank",
    paragraphs: [
      "Late-medieval and early-modern Europe stored metal with people whose business was to keep it. Italian deposit banks already knew the warehouse model. London goldsmiths issued running-cash notes that merchants endorsed onward. As long as redemption was ordinary, the paper was a ticket, not a rival unit. Once the ticket paid a debt, the issuer had a float — metal it held but did not have to hand back today. [From warehouses to public banks](/history/banks-paper/warehouses-to-public-banks) follows that handoff.",
      "In **1609** Amsterdam created the **Wisselbank** (exchange bank) to take in mixed coin, credit a standard bank guilder, and let merchants settle by book entry (**giro**). For a long time its reputation was that it did not lend: a **florin banco** was a claim on metal in the vault. Bank money usually traded at a premium — the **agio** — over worn street coin. Later the bank made concealed advances to the city and the Dutch East India Company. When that lending became public in the **1780s–1790s**, the agio collapsed. [The Bank of Amsterdam](/history/banks-paper/bank-of-amsterdam) tells how a public bank lost its name.",
    ],
  },
  {
    heading: "A war loan that became English money",
    paragraphs: [
      "[The Bank of England](/history/banks-paper/bank-of-england) was not a copy of Amsterdam. In **1694**, during the Nine Years’ War, a private corporation was chartered to lend to the Crown and to issue notes. Subscribers put up about **£1.2 million** as a war loan. Over the eighteenth century those notes became the ordinary paper of London: national money grown from war finance, not from a city warehouse ticket.",
      "In **1797**, with France at war with Britain, the Bank stopped paying gold for its notes — the **Restriction**. Gold payout returned in the **1820s** with **resumption**. The notes kept circulating through both.",
    ],
  },
  {
    heading: "Paris, 1720",
    paragraphs: [
      "France after Louis XIV carried heavy public debts. [John Law](/history/banks-paper/john-law), a Scottish financier with the Regent’s ear, fused a note-issuing bank with a colonial trading company. In **1716** he founded the Banque Générale, later the Banque Royale, alongside the company that became the Compagnie des Indes. Notes supported demand for shares; rising shares supported confidence in notes. Through **1719** privileges widened and prices soared while coin drained out of circulation. In **1720** the System broke, and both legs failed together.",
    ],
  },
  {
    heading: "Paper on confiscated land",
    paragraphs: [
      "Seven decades later, revolutionary France issued [assignats](/history/banks-paper/assignats): paper supposedly secured by confiscated church and émigré lands, the biens nationaux. The land was real. The quantity of paper rose far faster than any land was sold to retire it. By **1795–96** the assignat was not a unit anyone wanted to hold.",
      "Law’s System was a royal bank bolted to a trading company. The assignats were a revolutionary fiscal instrument with a land story. Germany’s mark in **1923**, a twentieth-century collapse after war and reparations, is another case again. The mechanism rhymes — paper that stops being a trusted claim — but the dates, the regimes, and the window that failed are different each time.",
    ],
  },
  {
    heading: "",
    paragraphs: [
      "The twentieth-century end of the story — Weimar, the **1933** gold recall, and the **1971** gold-window close — is told in the [20th-century chapter](/history/20th-century). The coins that came before any receipt are in [ancient money](/history/ancient).",
    ],
  },
];

/** Cluster hub /history/ancient — rendered by the cluster route from Cluster.sections. */
export const ancientHubBody: Section[] = [
  {
    heading: "",
    paragraphs: [
      "Before any mint, traders settled in gold and silver by weight. Then, in Lydia in western Anatolia, in the seventh century BCE, someone punched a mark into a lump of **electrum** — a natural gold–silver mix — and the cost of checking metal fell. The metal came first. The stamp came second.",
      "From Lydia the stamp spread to the Greek cities and to Rome, and it became a tool of states: a way to pay fleets and armies, and, when spending outran the mines, a way to lighten the coin. The history of sound money does not begin with a gold window closing in **1971**. It begins here, with metal in the hand and a mark that said what it was.",
    ],
  },
  {
    heading: "Why two metals kept winning",
    paragraphs: [
      "Many things have been money in a local range: cattle, grain, shells, copper. For high-value, long-distance settlement, gold and silver kept winning. The selection was a trade result, not a decree that invented money from nothing. A king can name a unit. He cannot force a distant counterparty to accept a unit that fails in the hand.",
      "Portability is value per weight. Durability is survival across a generation: gold does not rot; silver tarnishes but does not disappear. Divisibility is the ability to make change without destroying the good — metal can be cut and recast. Recognizability is how cheaply a stranger can tell the stuff from a look-alike. Scarcity sits under all four. A metal that could be planted like wheat would not stay a unit for long. [Why markets chose gold and silver](/history/ancient/why-markets-chose-gold-silver) follows those properties through the record.",
    ],
  },
  {
    heading: "What a stamp does",
    paragraphs: [
      "A coin is a piece of metal plus a mark. The mark is a claim about weight and fineness. It is not the money itself. The invention of coinage was a cut in the cost of verification, not the birth of monetary metal.",
      "The stamp does not abolish trust. It moves it. You no longer weigh every lump in a market of strangers; you decide whether the issuer’s type is honest enough for the trade. Early Lydian pieces carried a punch and, later, a type, and Croesus is the name attached to separating gold and silver issues. [Lydia and the first coins](/history/ancient/lydia-first-coins) tells that beginning. When a type was trusted, coin travelled farther than anonymous metal. When it was debased, people went back to weighing, or hoarded the better pieces.",
    ],
  },
  {
    heading: "Owls, fleets, and a lighter denarius",
    paragraphs: [
      "Greek city-states turned mines and mints into a commercial network. Athens’ Laurion silver and the owl tetradrachm are the familiar face: a recognized weight of silver that could move across the Aegean without a letter of introduction. Control of a mine was fiscal power; Laurion silver helped pay for a fleet. [Greece: silver and trade](/history/ancient/greece-silver-trade) follows that network.",
      "Rome ran gold and silver together — the aureus and the denarius, with bronze for small change. Debasement of the silver coin was gradual, then obvious, and in the third-century crisis the coinage became a fiscal instrument. The lesson is fiscal, not moral: when spending outruns metal, the coin gets lighter. [Rome: denarius, aureus, slow debasement](/history/ancient/rome-denarius-aureus) tells how.",
    ],
  },
  {
    heading: "A gold coin that held its weight",
    paragraphs: [
      "Constantine’s solidus, struck from the early fourth century, was a gold coin of tightly held weight and fineness. It outlasted the western empire and carried on for centuries as the Byzantine nomisma. [After Rome: the solidus and early continuity](/history/ancient/solidus-continuity) is the story of a unit that kept its weight while the state around it changed.",
    ],
  },
  {
    heading: "Paper comes later",
    paragraphs: [
      "A coin is metal you can hold. A warehouse receipt is a claim on metal someone else is holding. Banking begins when that claim check pays a debt and the metal stays in the vault — a handoff that belongs to a later Europe and to [banks and paper](/history/banks-paper). Lydia’s punch is a mark on metal. Amsterdam’s florin banco is a ledger credit against a vault. John Law’s **1720** notes fused bank paper with company shares. Each is a different machine.",
      "The Nixon gold-window close of **1971** is a late chapter in the same long argument, not its beginning. The whole run of it, from these coins onward, starts at [Sound Money History](/history).",
    ],
  },
];
