/**
 * Calendar years from 1545 through 1980 that are not already an episode page.
 * Quiet years describe the regime already in force. Event years name one statute
 * or break that the longer articles already date. No forecasts, no advice.
 * Pictures are public domain or CC0. A shared picture says so in the caption.
 */

export type HistoryYearFill = {
  title: string;
  summary: string;
  paragraphs: readonly string[];
  more?: { href: string; title: string };
  image: { alt: string; caption: string; credit: string };
  /** Key for the shared master JPEG. Not a URL. */
  master: string;
};

const PD = "Public domain.";
const CC0 = "CC0.";

const MORE = {
  coinage: { href: "/history/america/early-us-coinage", title: "Early U.S. coinage" },
  assignats: { href: "/history/banks-paper/assignats", title: "Assignats" },
  bank: { href: "/history/banks-paper/bank-of-england", title: "Bank of England" },
  jackson: { href: "/history/america/jackson-and-the-bank", title: "Jackson and the Bank" },
  greenbacks: { href: "/history/america/greenbacks-civil-war", title: "Greenbacks and the Civil War" },
  crime: { href: "/history/america/crime-of-1873", title: "The Crime of 1873" },
  road: { href: "/history/america/road-back-gold", title: "The road back to gold" },
  panic: { href: "/history/20th-century/panic-1907-fed", title: "Panic of 1907 and the Fed" },
  classical: {
    href: "/history/20th-century/classical-gold-standard-end",
    title: "Classical gold standard’s wartime end",
  },
  weimar: { href: "/history/20th-century/weimar-1923", title: "Weimar hyperinflation" },
  recall: { href: "/history/20th-century/1933-gold-recall", title: "1933 U.S. gold recall" },
  nixon: { href: "/history/20th-century/bretton-woods-nixon-1971", title: "Nixon shock 1971" },
  warehouses: { href: "/history/banks-paper/warehouses-to-public-banks", title: "Warehouses to public banks" },
  amsterdam: { href: "/history/banks-paper/bank-of-amsterdam", title: "Bank of Amsterdam" },
  law: { href: "/history/banks-paper/john-law", title: "John Law and the Mississippi Bubble" },
  potosi: { href: "/history/silver/potosi", title: "Potosí — the silver mountain" },
  piece: { href: "/history/silver/piece-of-eight", title: "The piece of eight" },
} as const;

function fill(
  title: string,
  summary: string,
  paragraphs: readonly [string, string],
  image: HistoryYearFill["image"],
  master: string,
  more?: HistoryYearFill["more"],
): HistoryYearFill {
  return { title, summary, paragraphs, image, master, ...(more ? { more } : {}) };
}

const CONTINENTAL = {
  alt: "Obverse of a two-dollar Continental currency note dated February 17, 1776.",
  caption: "Two-dollar Continental note, emission of 17 February 1776. Not a new printing of this year.",
  credit: PD,
};

const ASSIGNAT = {
  alt: "Assignat of 100 livres dated 29 September 1790.",
  caption: "Assignat of 100 livres, 29 September 1790. French paper of that issue, not a note of this year.",
  credit: CC0,
};

const GUINEA = {
  alt: "Gold guinea of George III.",
  caption:
    "Guinea of George III, struck in 1777. A gold coin of the reign in which the Bank stopped paying gold. Not struck in the year of this page.",
  credit: CC0,
};

const BANK_NOTE = {
  alt: "One-thousand-dollar note of the Bank of the United States, payable 15 December 1840.",
  caption:
    "Note of the Bank of the United States, payable 15 December 1840. The second charter began in 1816. The note is not dated to the year of this page.",
  credit: PD,
};

const SOVEREIGN_1821 = {
  alt: "Gold sovereign of George IV.",
  caption:
    "Gold sovereign of George IV. Britain has been paying gold for Bank notes since 1821. Not a United States coin, and not a statute of this year.",
  credit: CC0,
};

const CLASSIC = {
  alt: "Classic Head half eagle of 1834.",
  caption: "Classic Head half eagle, 1834. The type followed that year’s change in the eagle’s gold content. Not a new law of this page’s year, unless the page is 1834.",
  credit: PD,
};

const GREENBACK = {
  alt: "United States Note of 1862, a greenback.",
  caption: "United States Note, 1862. Legal-tender paper of the war. Not a new issue of this year.",
  credit: PD,
};

const EAGLE_1875 = {
  alt: "Double eagle of 1875, Carson City.",
  caption: "Double eagle, 1875. A gold coin of the resumption statute’s year. Not from the year of this page when the page is later.",
  credit: PD,
};

const MORGAN = {
  alt: "Morgan silver dollar of 1878, Carson City.",
  caption: "Morgan dollar, 1878, the silver design that followed Bland–Allison. Not a new silver statute of this page’s year.",
  credit: PD,
};

const TREASURY_1890 = {
  alt: "Ten-dollar Treasury note of 1890.",
  caption: "Ten-dollar Treasury note of 1890, issued for the Sherman silver purchases.",
  credit: PD,
};

const CERT_1900 = {
  alt: "Ten-thousand-dollar gold certificate, series of 1900.",
  caption: "Ten-thousand-dollar gold certificate, series of 1900. Not a new definition of the dollar in the year of this page.",
  credit: PD,
};

const FRN = {
  alt: "Twenty-dollar Federal Reserve note, series of 1914.",
  caption: "Twenty-dollar Federal Reserve note, series of 1914. Not a statute of the year of this page.",
  credit: PD,
};

const SOVEREIGN_1925 = {
  alt: "Gold sovereign of George V.",
  caption: "Gold sovereign of George V. Not, by itself, the 1925 parity, and not a statute of the year of this page.",
  credit: CC0,
};

const NOTE_1931 = {
  alt: "Bank of England five-pound note, 1931.",
  caption: "Bank of England five-pound note, 1931. Britain is already off gold. The note is not from the year of this page.",
  credit: PD,
};

const CERT_1934 = {
  alt: "One-hundred-dollar gold certificate, series of 1934.",
  caption:
    "One-hundred-dollar gold certificate, series of 1934. Official paper after the Gold Reserve Act. The public could not redeem it in gold. Not from the year of this page.",
  credit: PD,
};

const EAGLE_1907 = {
  alt: "United States double eagle of 1907.",
  caption: "United States double eagle, 1907. Not a coin of the year of this page, and not a photograph of the Gold Pool.",
  credit: PD,
};

type Band = {
  from: number;
  to: number;
  build: (year: number) => HistoryYearFill;
};

const POTOSI = {
  alt: "1758 panorama of Potosí with Cerro Rico behind the city.",
  caption:
    "Potosí and Cerro Rico, in a panorama of 1758. Silver working began in the 1540s. This picture is not from the year of the page.",
  credit: CC0,
};

const PIECE = {
  alt: "1771 Mexican pillar dollar of eight reales, obverse and reverse.",
  caption:
    "Pillar dollar of eight reales, Mexico, 1771. A later striking of the Spanish dollar. Not a coin of the year of this page.",
  credit: PD,
};

const AMSTERDAM = {
  alt: "The old town hall on the Dam in Amsterdam.",
  caption: "The old town hall on the Dam, home of the Wisselbank. Not a picture dated to the year of this page.",
  credit: PD,
};

const BANK_ENGLAND = {
  alt: "Print of the Bank of England in London.",
  caption: "Print of the Bank of England. The charter is 1694. The print is not a picture of the year of this page.",
  credit: CC0,
};

const LAW = {
  alt: "Portrait of John Law.",
  caption: "Portrait of John Law. The Banque Générale is 1716. The collapse is 1720. This is not a picture of the bust.",
  credit: PD,
};

const LAW_PRINT = {
  alt: "1720 satirical print of Mississippi Company shareholders in flight.",
  caption: "Satire of 1720, the year the Mississippi notes and shares broke. Not a new collapse in the year of this page.",
  credit: CC0,
};

const BANDS: readonly Band[] = [
  {
    from: 1546,
    to: 1586,
    build: (year) =>
      fill(
        "Cerro Rico already open",
        `In ${year} Potosí’s silver working is already underway. Eight-real pieces are becoming empire coin. Amsterdam’s public bank is not open yet.`,
        [
          "Major silver working at Cerro Rico began in the 1540s. Ore moved to a colonial mint, then into the fleet and into Eurasian payments. This year does not open a new mine on these pages.",
          "The eight-real piece is the coin face of that silver. Venice’s Banco della Piazza di Rialto opens in 1587, after private-bank failures. The Wisselbank is 1609.",
        ],
        POTOSI,
        "potosi",
        MORE.potosi,
      ),
  },
  {
    from: 1587,
    to: 1587,
    build: () =>
      fill(
        "Venice’s public bank",
        "Venice opens the Banco della Piazza di Rialto after private-bank failures. Potosí silver is already in the trade. Amsterdam’s Wisselbank is 1609.",
        [
          "In 1587 Venice opened a public deposit table, the Banco della Piazza di Rialto, after private banks had failed. It is a civic answer to custody, not a national note issue.",
          "Potosí silver is already moving into coin. The piece of eight is that coin’s English name. The Bank of Amsterdam, the model public ledger on these pages, is still 1609.",
        ],
        PIECE,
        "piece-of-eight",
        MORE.warehouses,
      ),
  },
  {
    from: 1588,
    to: 1608,
    build: (year) =>
      fill(
        "Spanish dollar, no Wisselbank yet",
        `In ${year} Venice’s public bank is already open. Potosí silver is still moving into the piece of eight. The Wisselbank is 1609.`,
        [
          "The Banco della Piazza di Rialto has been open since 1587. These pages do not give it a new statute this year.",
          "Spanish American mints are still striking the eight-real piece, the Spanish dollar of Atlantic trade. Amsterdam’s public deposit bank opens in 1609. The Bank of England is 1694.",
        ],
        PIECE,
        "piece-of-eight",
        MORE.piece,
      ),
  },
  {
    from: 1610,
    to: 1639,
    build: (year) =>
      fill(
        "Bank money on the Dam",
        `In ${year} the Wisselbank is already open. Mixed coin goes in. A bank guilder is credited on the books. The receipt split is 1683.`,
        [
          "Amsterdam opened the public deposit bank in 1609. Large settlement moved by giro, a debit and a credit, while the vault stayed shut. The advertised model was a claim on metal, not a loan book.",
          "Receipts that let the balance and the metal claim be sold apart are 1683. London’s seizure of mint deposits is 1640. The Bank of England is 1694. This page is the city ledger, not those later machines.",
        ],
        AMSTERDAM,
        "amsterdam",
        MORE.amsterdam,
      ),
  },
  {
    from: 1640,
    to: 1640,
    build: () =>
      fill(
        "Mint deposits seized",
        "Charles I seizes merchants’ bullion stored in the Tower mint. A royal warehouse is not a safe warehouse.",
        [
          "In 1640 the Crown took merchants’ bullion from the Tower mint. The stated need was cash for war. Depositors who thought the royal warehouse was safe learned that a sovereign can close a window.",
          "These pages place London’s later shift toward goldsmith running-cash notes after the Restoration, and they do not give that shift its own year. The Stop of the Exchequer is 1672. Amsterdam’s Wisselbank is already open.",
        ],
        {
          ...PIECE,
          caption:
            "Pillar dollar of eight reales, Mexico, 1771. The 1640 fact is the seizure of bullion at the Tower mint, not this coin.",
        },
        "piece-of-eight",
        MORE.warehouses,
      ),
  },
  {
    from: 1641,
    to: 1671,
    build: (year) =>
      fill(
        "After the Tower seizure",
        `In ${year} the 1640 seizure is already past. The Stop of the Exchequer is 1672. The Wisselbank is open. The Bank of England is not.`,
        [
          "Charles I had already taken merchants’ bullion from the Tower mint. These pages do not date the later goldsmith shift beyond the articles’ phrase: after the Restoration.",
          "When goldsmith running-cash notes come, they are receipts that can be endorsed while the metal stays put. The Stop of the Exchequer, which suspends payments on much of that royal debt, is 1672. It is not this year.",
        ],
        PIECE,
        "piece-of-eight",
        MORE.warehouses,
      ),
  },
  {
    from: 1672,
    to: 1672,
    build: () =>
      fill(
        "Stop of the Exchequer",
        "Payments stop on much of the royal debt that goldsmith-bankers had treated as a safe asset.",
        [
          "In 1672 the Stop of the Exchequer suspended payments on much of that debt. Goldsmith-bankers who had funded the Crown discovered that a sovereign borrower can close a window too.",
          "Their notes had been claims on metal left with a private keeper, and also a loan book. Amsterdam’s receipt split is 1683. The Bank of England’s charter is 1694. This page is the Stop.",
        ],
        {
          ...PIECE,
          caption:
            "Pillar dollar of eight reales, Mexico, 1771. The 1672 fact is the Stop of the Exchequer, not this coin.",
        },
        "piece-of-eight",
        MORE.warehouses,
      ),
  },
  {
    from: 1673,
    to: 1682,
    build: (year) =>
      fill(
        "Sovereign window already shut",
        `In ${year} the Stop of the Exchequer is already past. Amsterdam has not yet issued the 1683 receipts. The Bank of England is 1694.`,
        [
          "The 1672 Stop suspended payments on much of the royal debt sitting in goldsmith books. That closure is not a new statute on this page.",
          "From 1683 the Wisselbank will issue receipts for coin left on deposit, so the balance and the metal claim can be sold apart. That is not this year. London’s public note-issuing charter is 1694.",
        ],
        AMSTERDAM,
        "amsterdam",
        MORE.amsterdam,
      ),
  },
  {
    from: 1683,
    to: 1683,
    build: () =>
      fill(
        "Wisselbank receipts",
        "The bank issues receipts for coin on deposit. The balance and the metal claim can be sold apart.",
        [
          "In 1683 the Wisselbank issued receipts for coin left on deposit. To take the original metal out, a holder needed the receipt. To pay a bill, the balance was enough.",
          "That split is still not a Bank of England note. London’s charter is 1694: a war loan with a note issue, not a city giro. The later collapse of the agio is the 1780s, not this year.",
        ],
        AMSTERDAM,
        "amsterdam",
        MORE.amsterdam,
      ),
  },
  {
    from: 1684,
    to: 1693,
    build: (year) =>
      fill(
        "Receipts already in use",
        `In ${year} a Wisselbank receipt is already a claim on the coins, and the balance is a separate credit. The Bank of England does not exist yet.`,
        [
          "Since 1683 the receipt and the bank balance have been two claims. They can be sold apart. Giro settlement does not require the bag of coin to move.",
          "This is not a London note. The Bank of England is chartered in 1694. The agio’s collapse, when concealed lending becomes public, is the 1780s.",
        ],
        AMSTERDAM,
        "amsterdam",
        MORE.amsterdam,
      ),
  },
  {
    from: 1695,
    to: 1707,
    build: (year) =>
      fill(
        "Bank of England already chartered",
        `In ${year} the 1694 charter is in force: a war loan and notes. The six-partner limit on other note-issuing banks is 1708.`,
        [
          "The Bank of England was chartered in 1694, during the Nine Years’ War, to lend to the Crown and to issue notes. Those notes are already a different machine from Amsterdam’s giro.",
          "From 1708 no other English bank with more than six partners may issue notes. That rule is not yet in force. John Law’s Banque Générale is 1716. The stop on gold payout is 1797.",
        ],
        BANK_ENGLAND,
        "bank-england",
        MORE.bank,
      ),
  },
  {
    from: 1708,
    to: 1708,
    build: () =>
      fill(
        "Six-partner note rule",
        "No other English bank with more than six partners may issue notes. Country banks with fewer partners still can. Law’s bank is 1716.",
        [
          "From 1708 statute kept a second Bank of England from appearing. Private country issue stood. The joint-stock note field in England belonged to the bank chartered in 1694.",
          "This is not Amsterdam’s giro, and it is not Paris. Law founds the Banque Générale in 1716. Notes there are payable in coin under stated rules. That bank is not this year.",
        ],
        BANK_ENGLAND,
        "bank-england",
        MORE.bank,
      ),
  },
  {
    from: 1709,
    to: 1715,
    build: (year) =>
      fill(
        "Note monopoly already in force",
        `In ${year} the six-partner rule is already law. The Bank of England’s charter dates from 1694. Law’s Banque Générale is 1716.`,
        [
          "Since 1708 no other English bank with more than six partners has been allowed to issue notes. Country banks below that line still can. There is no new charter this year.",
          "John Law’s bank in Paris is 1716. The Mississippi break is 1720. England’s stop on gold payout is 1797. Amsterdam is still the giro table, not this note issue.",
        ],
        BANK_ENGLAND,
        "bank-england",
        MORE.bank,
      ),
  },
  {
    from: 1716,
    to: 1716,
    build: () =>
      fill(
        "Banque Générale",
        "Law founds a bank whose notes are payable in coin under stated rules. The Mississippi collapse is 1720.",
        [
          "In 1716 John Law founded the Banque Générale. The notes were a convenient claim on metal, not metal itself. The crown later takes a closer grip, and the bank is reorganized as the Banque Royale.",
          "The share mania and the break belong to 1719 and 1720, not to this founding year. England’s six-partner rule is already in force. This is not the Bank of England, and it is not the assignats.",
        ],
        LAW,
        "law-portrait",
        MORE.law,
      ),
  },
  {
    from: 1717,
    to: 1717,
    build: () =>
      fill(
        "Mississippi privileges widen",
        "The company’s privileges and debt conversion widen. The Banque Royale is dated to 1718–19. The bust is 1720.",
        [
          "Through 1719 the Mississippi company’s privileges widen, and debt-conversion schemes pull more rentiers into shares. 1717 sits inside that widening. The notes of 1716 are already in circulation.",
          "These pages date the Banque Royale to 1718–19, when the crown takes a closer grip. Peak mania is late 1719. The break is 1720. This is not England’s Bank, and it is not the assignats of the 1790s.",
        ],
        LAW,
        "law-portrait",
        MORE.law,
      ),
  },
  {
    from: 1718,
    to: 1718,
    build: () =>
      fill(
        "Banque Royale",
        "The crown takes a closer grip on Law’s bank. Notes and share demand reinforce each other. The break is still 1720.",
        [
          "In 1718–19 the Banque Générale is reorganized as the Banque Royale. Note issue and demand for Mississippi shares reinforce each other. The notes had been a claim on coin under stated rules.",
          "Peak prices sit in late 1719 and early 1720. The collapse is 1720. England is still on the 1694 charter and the 1708 note rule. Do not merge this with the assignats.",
        ],
        LAW,
        "law-portrait",
        MORE.law,
      ),
  },
  {
    from: 1719,
    to: 1719,
    build: () =>
      fill(
        "Shares and notes rise together",
        "Late this year, Mississippi shares and Banque Royale notes inflate together. The bust is 1720, not this page.",
        [
          "In 1719 the company’s privileges are still widening, and debt conversion is pulling rentiers into shares. Peak mania sits in late 1719 and early 1720. Prices that multiplied then had to find new buyers.",
          "The break — share crash, strained convertibility, flight into metal — is 1720. This page stops at the rise. It is not the assignats, and it is not Germany in 1923.",
        ],
        LAW,
        "law-portrait",
        MORE.law,
      ),
  },
  {
    from: 1721,
    to: 1774,
    build: (year) =>
      fill(
        "After the Mississippi break",
        `In ${year} Law’s notes and shares have already broken. The Bank of England’s charter still stands. The Spanish dollar is still Atlantic money. England has not stopped gold payout.`,
        [
          "The Mississippi System broke in 1720. Share prices fell, notes lost credibility, and holders who could fled into metal. That collapse is not repeated as a new event this year. It is not the assignats of the 1790s.",
          "The Bank of England, chartered in 1694, is still the English note issuer under the six-partner rule of 1708. Its stop on gold payout is 1797. Amsterdam’s agio does not collapse until the lending becomes public in the 1780s. Spanish dollars remain common money in the Caribbean and British North America.",
        ],
        year >= 1758
          ? { ...PIECE, caption: PIECE.caption }
          : LAW_PRINT,
        year >= 1758 ? "piece-of-eight" : "law-print",
        year >= 1758 ? MORE.piece : MORE.law,
      ),
  },
  {
    from: 1775,
    to: 1775,
    build: () =>
      fill(
        "Continental paper authorized",
        "Continental currency is first authorized this year. The two-dollar note that promises Spanish milled dollars, or gold or silver, is dated 17 February 1776.",
        [
          "The war is already being paid in part with Continental paper. Authorization is this year. The printed promise on the two-dollar note — two Spanish milled dollars, or the value in gold or silver — is the emission of 17 February 1776.",
          "Spanish dollars are still the familiar silver piece of Atlantic trade. The United States coinage statute is 1792. England has not stopped gold payout. That stop is 1797.",
        ],
        {
          ...CONTINENTAL,
          caption:
            "Two-dollar Continental note, emission of 17 February 1776. Authorization is 1775. This note is not a 1775 printing.",
        },
        "continental",
        MORE.piece,
      ),
  },
  {
    from: 1777,
    to: 1789,
    build: (year) =>
      fill(
        "Continental paper",
        `In ${year} there is no new American coinage statute. The Continental note of 17 February 1776 still promised Spanish milled dollars, or gold or silver.`,
        [
          "The two-dollar note of 17 February 1776 promises the bearer two Spanish milled dollars, or the value in gold or silver. The promise is already printed. This year does not add a coinage law.",
          "The bimetallic dollar in statute is the Coinage Act of 1792. This page does not date the end of the war, and it does not price the note.",
        ],
        CONTINENTAL,
        "continental",
        MORE.coinage,
      ),
  },
  {
    from: 1791,
    to: 1791,
    build: () =>
      fill(
        "Hamilton’s mint report",
        "Hamilton’s 1791 report argues for a dollar in gold and silver. The Coinage Act that writes it into law is 1792.",
        [
          "Alexander Hamilton’s Report on the Establishment of a Mint argued for a bimetallic dollar, at a ratio close to market practice. The argument is the report. It is not yet the statute.",
          "Congress wrote both metals into the dollar in the Coinage Act of 2 April 1792, at fifteen ounces of silver to one ounce of gold at the Mint. The law could fix that ratio. The market did not have to keep it.",
        ],
        {
          alt: "Portrait of Alexander Hamilton.",
          caption: "Alexander Hamilton. The mint report is 1791. The Coinage Act is the next year.",
          credit: PD,
        },
        "hamilton",
        MORE.coinage,
      ),
  },
  {
    from: 1793,
    to: 1796,
    build: (year) =>
      fill(
        "Bimetallic dollar in force",
        `In ${year} the Coinage Act of 1792 is already law, at a mint ratio of 15 to 1. France is still on the assignats. England has not stopped gold payout.`,
        [
          "The Coinage Act of 2 April 1792 made gold and silver legal tender at a fixed mint ratio: fifteen ounces of pure silver to one ounce of pure gold. That statute is already in force. It does not change again until 1834.",
          "In France the assignats of 1790 are still the revolutionary paper. In England the Bank has not yet stopped paying gold. That stop is February 1797.",
        ],
        ASSIGNAT,
        "assignat",
        MORE.assignats,
      ),
  },
  {
    from: 1798,
    to: 1809,
    build: (year) =>
      fill(
        "Bank not paying gold",
        `In ${year} the Bank of England is still not paying gold for its notes. The stop began in February 1797. The Bullion Report is 1810.`,
        [
          "In February 1797 an Order in Council told the Bank of England to stop paying gold for its notes. The Bank Restriction Act made that suspension statute. Notes stayed in circulation. Holders could not test the pound in coin at the Bank.",
          `That is still the regime in ${year}. The Bullion Report, which argues from the gold premium that the paper pound had depreciated, is 1810. Full gold payout is 1821.`,
        ],
        GUINEA,
        "guinea",
        MORE.bank,
      ),
  },
  {
    from: 1810,
    to: 1810,
    build: () =>
      fill(
        "Bullion Report",
        "The Bullion Report argues from the gold premium that the paper pound had depreciated. Resumption is not this year.",
        [
          "The Bullion Report of 1810 measured Bank notes against gold coin. The premium of gold over paper was the report’s evidence that the pound had depreciated. It argued for a return to cash payments.",
          "The Bank is still not paying gold. Peel’s Act, which sets the path back, is 1819. Full payout is 1821. This report is not that resumption.",
        ],
        {
          ...GUINEA,
          caption:
            "Guinea of George III, struck in 1777. The 1810 report measured notes against gold coin. This piece is not an 1810 striking.",
        },
        "guinea",
        MORE.bank,
      ),
  },
  {
    from: 1811,
    to: 1811,
    build: () =>
      fill(
        "First Bank ends",
        "The charter of the First Bank of the United States runs out in 1811. England is still not paying gold. The Second Bank is 1816.",
        [
          "The First Bank of the United States was chartered in 1791. That charter ends in 1811. There is no federally chartered successor this year.",
          "In England the Restriction is still in force. The Bank is not paying gold. The Second Bank of the United States is chartered in 1816, after the War of 1812. This page is the end of the first charter, not that later bank.",
        ],
        GUINEA,
        "guinea",
        MORE.jackson,
      ),
  },
  {
    from: 1812,
    to: 1815,
    build: (year) =>
      fill(
        "Restriction still in force",
        `In ${year} the Bank of England is still not paying gold. The Second Bank of the United States has not been chartered. That charter is 1816.`,
        [
          "England’s gold window has been shut since February 1797. It is still shut. This page does not narrate the war.",
          "The United States has no federally chartered bank this year. The First Bank’s charter ended in 1811. The Second Bank is 1816. Peel’s Act is 1819. Full payout is 1821.",
        ],
        GUINEA,
        "guinea",
        MORE.bank,
      ),
  },
  {
    from: 1816,
    to: 1816,
    build: () =>
      fill(
        "Second Bank chartered",
        "Congress charters the Second Bank of the United States for twenty years. It is not a modern central bank.",
        [
          "In 1816 Congress chartered the Second Bank of the United States for twenty years. Its notes circulated. It presented state-bank notes for specie.",
          "This is not a modern central bank. There is no Federal Reserve until 1913. The veto of a new charter is 1832. The existing charter runs to 1836.",
        ],
        {
          ...BANK_NOTE,
          caption:
            "Note of the Bank of the United States, payable 15 December 1840. The charter began in 1816. The note is not dated 1816.",
        },
        "bank-note",
        MORE.jackson,
      ),
  },
  {
    from: 1817,
    to: 1818,
    build: (year) =>
      fill(
        "Second Bank open, window still shut",
        `In ${year} the Second Bank of the United States is already chartered. England has not yet passed Peel’s Act. Full gold payout is 1821.`,
        [
          "The Second Bank was chartered in 1816 for twenty years. It is operating. The fight over a new charter is still years away.",
          "In England the Restriction continues. Peel’s Act of 1819 sets the path back to convertibility. Full payout of gold for Bank notes is 1821, not this year.",
        ],
        GUINEA,
        "guinea",
        MORE.bank,
      ),
  },
  {
    from: 1819,
    to: 1819,
    build: () =>
      fill(
        "Peel’s Act",
        "Peel’s Act sets the path back to convertibility. Full gold payout is 1821, not this year.",
        [
          "Peel’s Act of 1819 set a timetable for the Bank of England to resume paying gold for its notes. The wartime stop of 1797 had already lasted more than twenty years.",
          "The Act is the path. It is not the day the window reopens. Full payout is 1821.",
        ],
        {
          ...GUINEA,
          caption:
            "Guinea of George III, struck in 1777. Peel’s Act of 1819 pointed back to gold coin. Full payout is 1821. This piece is not the Act.",
        },
        "guinea",
        MORE.bank,
      ),
  },
  {
    from: 1820,
    to: 1820,
    build: () =>
      fill(
        "Path back to gold",
        "Peel’s Act has set the path. The Bank of England is not yet paying gold in full. That resumption is 1821.",
        [
          "Peel’s Act of 1819 is already law. It named the return to cash payments. It did not complete it.",
          "Full gold payout on Bank of England notes is 1821. In the United States the mint ratio is still the 1792 statute. The 1834 change is later.",
        ],
        GUINEA,
        "guinea",
        MORE.bank,
      ),
  },
  {
    from: 1822,
    to: 1831,
    build: (year) =>
      fill(
        "England paying gold again",
        `In ${year} the Bank of England is paying gold for its notes again. The United States is still on the 1792 mint ratio.`,
        [
          "Full gold payout resumed in 1821. The pound can be tested in coin. That resumption is already in force. It is not a new statute this year.",
          "The United States still defines the dollar in gold and silver at the 1792 ratio of 15 to 1. At that ratio gold often left and silver stayed. The change toward roughly 16 to 1 is 1834. Jackson’s veto of a new Bank charter is 1832.",
        ],
        SOVEREIGN_1821,
        "sovereign-1821",
        MORE.coinage,
      ),
  },
  {
    from: 1833,
    to: 1833,
    build: () =>
      fill(
        "Deposits leave the Bank",
        "The 1832 veto stands. In 1833 and 1834 the Treasury moves federal deposits from the Second Bank to state banks.",
        [
          "Jackson vetoed a new charter in 1832. In 1833 and 1834 the Treasury removed federal deposits from the Second Bank and placed them with selected state banks, later called pet banks.",
          "The charter itself has not expired. That date is 1836. The Specie Circular is also 1836. The mint-ratio change is 1834. This year is the removal of deposits.",
        ],
        {
          ...BANK_NOTE,
          caption:
            "Note of the Bank of the United States, payable 15 December 1840. Federal deposits are leaving this bank. The note is not dated 1833.",
        },
        "bank-note",
        MORE.jackson,
      ),
  },
  {
    from: 1834,
    to: 1834,
    build: () =>
      fill(
        "Mint ratio moves",
        "Congress changes the gold content of the eagle. The mint ratio moves from 15 to 1 toward roughly 16 to 1.",
        [
          "In 1834 Congress reduced the gold content of the eagle. The official mint ratio moved from the 1792 relationship of 15 to 1 toward roughly 16 to 1, a gold-friendlier standard.",
          "The law could change the ratio. It did not decide which metal the market would keep. The Second Bank’s charter is still alive until 1836.",
        ],
        {
          alt: "Classic Head half eagle of 1834.",
          caption: "Classic Head half eagle, 1834, the gold type that followed the change in the eagle’s gold content.",
          credit: PD,
        },
        "classic-head",
        MORE.coinage,
      ),
  },
  {
    from: 1835,
    to: 1835,
    build: () =>
      fill(
        "New ratio, old charter",
        "The 1834 mint ratio is already in force. The Second Bank’s charter runs one more year. The Specie Circular is 1836.",
        [
          "Congress changed the gold content of the eagle in 1834. That ratio, toward roughly 16 to 1, is the law this year. It is not a new statute.",
          "The Second Bank’s federal charter expires in 1836. The Specie Circular, requiring gold and silver for public land, is also 1836. Neither has happened yet.",
        ],
        {
          ...CLASSIC,
          caption: "Classic Head half eagle, 1834. The type is that year’s change in the gold coin, not a new law of 1835.",
        },
        "classic-head",
        MORE.jackson,
      ),
  },
  {
    from: 1836,
    to: 1836,
    build: () =>
      fill(
        "Specie Circular",
        "Public land must be paid in gold or silver. The Second Bank’s federal charter expires the same year.",
        [
          "The Specie Circular of 1836 required gold and silver for purchases of public land. Paper from state banks was not enough for that payment.",
          "The same year, the federal charter of the Second Bank expired. It had been granted for twenty years in 1816. This page does not pick a villain for what followed.",
        ],
        {
          alt: "Gobrecht silver dollar of 1836.",
          caption: "Gobrecht silver dollar of 1836, a silver coin of the year public land had to be paid in gold or silver.",
          credit: PD,
        },
        "gobrecht",
        MORE.jackson,
      ),
  },
  {
    from: 1837,
    to: 1837,
    build: () =>
      fill(
        "Panic",
        "A panic year. Specie payments were suspended in many places. The causes were several, not one slogan.",
        [
          "In 1837 specie payments were suspended in many places. The scramble followed, by months, the removal of federal deposits and the Specie Circular. It did not follow by decades, and it was not a single cause.",
          "International credit, cotton, land sales, and the bank scramble all sit in the record. This page does not choose one of them. It is not the Panic of 1907.",
        ],
        {
          alt: "1837 print titled The Times, showing a bank that has stopped specie payments.",
          caption:
            "Print of 1837 titled The Times. A bank in the picture has stopped specie payments. This page does not adopt the print’s politics.",
          credit: PD,
        },
        "panic-1837",
        MORE.jackson,
      ),
  },
  {
    from: 1838,
    to: 1860,
    build: (year) =>
      fill(
        "No federal bank yet",
        `In ${year} there is no federally chartered central bank. United States Notes have not been authorized. That statute is February 1862.`,
        [
          "The Second Bank’s federal charter ended in 1836. In 1837 specie payments were suspended in many places. No successor federal bank is chartered this year. The Federal Reserve is 1913.",
          "United States Notes are not yet legal tender. That authorization is the Legal Tender Act of February 1862. This page does not date an Independent Treasury law.",
        ],
        {
          ...CLASSIC,
          caption: "Classic Head half eagle, 1834. The type is that year’s change in the gold coin, not a new law of this year.",
        },
        "classic-head",
        MORE.jackson,
      ),
  },
  {
    from: 1861,
    to: 1861,
    build: () =>
      fill(
        "Specie suspension",
        "In December, banks suspend specie payments. Gold still prices customs and foreign exchange. Greenbacks are next February.",
        [
          "In December 1861 banks suspended specie payments. Gold coin still priced customs duties and foreign exchange. The paper used day to day was no longer the same thing as that gold.",
          "United States Notes are authorized in February 1862. This page is the suspension, not the Legal Tender Act.",
        ],
        {
          alt: "Five-dollar demand note of 1861.",
          caption: "Five-dollar demand note, 1861. Legal-tender greenbacks are authorized the next February.",
          credit: PD,
        },
        "demand-1861",
        MORE.greenbacks,
      ),
  },
  {
    from: 1863,
    to: 1872,
    build: (year) =>
      fill(
        "Greenbacks below gold",
        `In ${year} United States Notes are legal tender. The Treasury is not redeeming them in gold on demand. The Act that names a resumption date is still 1875.`,
        [
          "The Legal Tender Act of February 1862 authorized United States Notes as legal tender. The Treasury would not redeem that paper in gold on demand. In the market the notes traded below gold.",
          `That is still the regime in ${year}. The Specie Payment Resumption Act, which names 1 January 1879, has not been passed. It is 1875.`,
        ],
        GREENBACK,
        "greenback",
        MORE.greenbacks,
      ),
  },
  {
    from: 1874,
    to: 1874,
    build: () =>
      fill(
        "Silver dollar already off the list",
        "The standard silver dollar is already off the coinage list. The statute that names a resumption date has not been passed. That Act is 1875.",
        [
          "The Coinage Act of 1873 left the standard silver dollar off the list of coins the Mint would strike. That change is already law. This page does not rename it.",
          "The Specie Payment Resumption Act is the next year. It will name 1 January 1879. Payments have not resumed, and the date is not yet statute.",
        ],
        {
          alt: "Nineteenth-century cartoon about the trade dollar and the silver question after 1873.",
          caption: "Trade-dollar cartoon of the silver question after 1873. The resumption statute is still a year away.",
          credit: PD,
        },
        "silver-question",
        MORE.crime,
      ),
  },
  {
    from: 1875,
    to: 1875,
    build: () =>
      fill(
        "Resumption Act",
        "The Specie Payment Resumption Act names 1 January 1879. This is not the day payments resume.",
        [
          "The Specie Payment Resumption Act of 1875 set the date: 1 January 1879. On that later day the United States was to resume specie payments on United States Notes.",
          "Naming the date is not the resumption. The gap between greenbacks and gold is still open. The operational close of that gap is 1879.",
        ],
        {
          alt: "Double eagle of 1875, Carson City.",
          caption: "Double eagle of 1875, a gold coin of the year the Act named 1 January 1879. The coin is not the Act.",
          credit: PD,
        },
        "eagle-1875",
        MORE.road,
      ),
  },
  {
    from: 1876,
    to: 1877,
    build: (year) =>
      fill(
        "Resumption date already named",
        `In ${year} the law has already named 1 January 1879. Specie payments have not resumed. Bland–Allison is 1878.`,
        [
          "The Specie Payment Resumption Act of 1875 named 1 January 1879. That date is still in the future. The Treasury is not yet treating United States Notes as gold at par.",
          "Bland–Allison, the limited silver-purchase law, is 1878. It has not been passed. The statute that defines the dollar as 25.8 grains of gold is 1900.",
        ],
        {
          ...EAGLE_1875,
          caption: "Double eagle of 1875. The resumption date is already named. The coin is not from this year, and payments have not resumed.",
        },
        "eagle-1875",
        MORE.road,
      ),
  },
  {
    from: 1878,
    to: 1878,
    build: () =>
      fill(
        "Bland–Allison",
        "The Treasury must make limited silver purchases and coin them. This is not free coinage at 16 to 1.",
        [
          "The Bland–Allison Act of 1878 required the Treasury to purchase a fixed, limited amount of silver each month and to coin it into dollars. The standard silver dollar, dropped in 1873, was struck again under that duty.",
          "Limited purchases are not free coinage at 16 to 1. Specie payments on greenbacks resume the next year, on 1 January 1879. The dollar is not yet defined as a gold unit in the 1900 statute.",
        ],
        {
          alt: "Morgan silver dollar of 1878, Carson City.",
          caption: "Morgan dollar, 1878. A silver dollar of the Bland–Allison year.",
          credit: PD,
        },
        "morgan-1878",
        MORE.crime,
      ),
  },
  {
    from: 1880,
    to: 1889,
    build: (year) =>
      fill(
        "Gold and greenbacks at par",
        `In ${year} specie payments have resumed. Greenbacks and gold are at par in practice. The statute that defines the dollar as gold is still 1900.`,
        [
          "On 1 January 1879 the United States resumed specie payments. United States Notes and gold were treated as par in practice. That resumption is already in force.",
          "Bland–Allison’s limited silver purchases are also already law. They are not free coinage at 16 to 1. Defining the dollar as 25.8 grains of gold, nine-tenths fine, waits until the Gold Standard Act of 1900.",
        ],
        MORGAN,
        "morgan-1878",
        MORE.road,
      ),
  },
  {
    from: 1890,
    to: 1890,
    build: () =>
      fill(
        "Sherman Silver Purchase Act",
        "The Treasury must purchase more silver than under Bland–Allison. This is still not free coinage at 16 to 1.",
        [
          "The Sherman Silver Purchase Act of 1890 raised the Treasury’s silver purchases above the Bland–Allison amount. Notes issued to pay for that silver could be used to draw gold.",
          "Holders who doubted the gold line could drain the Treasury’s gold. The Act is not free coinage at 16 to 1. The purchase duty is repealed in the panic year 1893.",
        ],
        {
          ...TREASURY_1890,
          caption: "Ten-dollar Treasury note of 1890, paper issued for the Sherman silver purchases.",
        },
        "treasury-1890",
        MORE.road,
      ),
  },
  {
    from: 1891,
    to: 1892,
    build: (year) =>
      fill(
        "Sherman purchases continue",
        `In ${year} the Sherman purchase duty is in force. It is not free coinage at 16 to 1. Repeal comes in the panic year 1893.`,
        [
          "The Sherman Silver Purchase Act of 1890 is still the law. The Treasury is still under that purchase duty, and the notes issued for it can draw gold.",
          "This is not an open mint at 16 to 1. The duty is repealed in 1893. The statute that defines the dollar as gold is 1900.",
        ],
        {
          ...TREASURY_1890,
          caption:
            "Ten-dollar Treasury note of 1890. The purchase duty that issued these notes is still in force. The note is not a new law of this year.",
        },
        "treasury-1890",
        MORE.road,
      ),
  },
  {
    from: 1893,
    to: 1893,
    build: () =>
      fill(
        "Sherman duty repealed",
        "A panic year. The Sherman silver-purchase duty is repealed. This page does not pick a side.",
        [
          "1893 is the panic year in which the Sherman Silver Purchase Act’s duty to purchase silver was repealed. The notes of 1890 had been a way to draw gold from the Treasury.",
          "Repeal ended that purchase obligation. It did not define the dollar as a gold unit. That statute is 1900. This page does not choose a cause or a faction.",
        ],
        {
          alt: "Puck cover of 13 September 1893, titled Out of the silver flood.",
          caption:
            "Puck, 13 September 1893. The cartoon treats repeal of the Sherman purchase duty as a rescue. This page does not.",
          credit: PD,
        },
        "silver-flood",
        MORE.road,
      ),
  },
  {
    from: 1894,
    to: 1895,
    build: (year) =>
      fill(
        "Purchase duty already repealed",
        `In ${year} the Sherman purchase duty is already repealed. Bryan’s free-silver campaign is 1896. The gold-dollar statute is 1900.`,
        [
          "The duty to purchase silver under the Sherman Act was repealed in 1893. It is not revived this year.",
          "William Jennings Bryan’s campaign for free silver is 1896. The Gold Standard Act, defining the dollar as 25.8 grains, nine-tenths fine, is 1900.",
        ],
        {
          ...TREASURY_1890,
          caption: "Ten-dollar Treasury note of 1890. The purchase duty that issued these notes was repealed in 1893.",
        },
        "treasury-1890",
        MORE.road,
      ),
  },
  {
    from: 1896,
    to: 1896,
    build: () =>
      fill(
        "Cross of gold",
        "Bryan’s campaign attacks a gold-only dollar. The Republican ticket defends it. Bryan loses. This page is not a brief for either side.",
        [
          "In 1896 William Jennings Bryan ran on free silver. The cross-of-gold speech attacked a gold-only standard. The Republican ticket defended the gold dollar. Bryan lost.",
          "He did not invent the silver question. The standard silver dollar had been off the list since 1873, and the Sherman duty had been repealed in 1893. The statute that defines the dollar as gold is 1900. This page takes neither side.",
        ],
        {
          alt: "Portrait of William Jennings Bryan, 1896.",
          caption: "William Jennings Bryan, 1896.",
          credit: PD,
        },
        "bryan-1896",
        MORE.crime,
      ),
  },
  {
    from: 1897,
    to: 1899,
    build: (year) =>
      fill(
        "Gold dollar not yet the statute",
        `In ${year} Bryan has lost. The dollar is not yet defined as gold in the 1900 Act. The Sherman purchase duty stays repealed.`,
        [
          "The 1896 election kept the gold dollar as the political line. It did not write the definition into the Gold Standard Act. That Act is 1900: 25.8 grains, nine-tenths fine.",
          "The Sherman purchase duty was repealed in 1893 and has not returned. Specie payments have been in force since 1879. New gold supplies in these years expanded the world gold stock. This page does not turn that into a forecast.",
        ],
        {
          ...EAGLE_1875,
          caption:
            "Double eagle of 1875, a gold coin of the standard the 1896 election defended. The statute is 1900. The coin is not from this year.",
        },
        "eagle-1875",
        MORE.road,
      ),
  },
  {
    from: 1901,
    to: 1906,
    build: (year) =>
      fill(
        "Dollar defined in gold",
        `In ${year} the dollar is already defined as 25.8 grains of gold, nine-tenths fine. There is no Federal Reserve. The panic is 1907.`,
        [
          "The Gold Standard Act of 1900 defined the dollar in gold: 25.8 grains, nine-tenths fine. That definition is in force. This year does not rewrite it.",
          "There is no central bank. The Federal Reserve Act is 1913, after the panic of 1907. The classical gold window is still open.",
        ],
        CERT_1900,
        "gold-cert-1900",
        MORE.road,
      ),
  },
  {
    from: 1908,
    to: 1908,
    build: () =>
      fill(
        "Aldrich-Vreeland",
        "Groups of national banks may issue emergency currency against more than government bonds. The same law funds a monetary commission. The Fed is 1913.",
        [
          "The Aldrich-Vreeland Act of 1908 let groups of national banks issue emergency currency against assets other than only government bonds. It was a response to the scramble of 1907.",
          "The same law funded a National Monetary Commission. It did not create the Federal Reserve, and it did not redefine the dollar. The Federal Reserve Act is 1913.",
        ],
        {
          ...CERT_1900,
          caption:
            "Ten-thousand-dollar gold certificate, series of 1900. The 1908 law is emergency notes, not a new definition of the dollar.",
        },
        "gold-cert-1900",
        MORE.panic,
      ),
  },
  {
    from: 1909,
    to: 1912,
    build: (year) =>
      fill(
        "Emergency notes, no Fed yet",
        `In ${year} Aldrich-Vreeland is already law. The Federal Reserve does not exist. The classical gold window is still open.`,
        [
          "National banks can already issue emergency currency under the 1908 Act. That is not a central bank.",
          "The Federal Reserve Act is signed on 23 December 1913. Until August 1914 the peacetime gold practices — convertibility and gold shipment — are still in place.",
        ],
        {
          ...CERT_1900,
          caption: "Ten-thousand-dollar gold certificate, series of 1900. Not a note of this year, and not a Federal Reserve note.",
        },
        "gold-cert-1900",
        MORE.panic,
      ),
  },
  {
    from: 1915,
    to: 1917,
    build: (year) =>
      fill(
        "Gold window already shut",
        `In ${year} the classical gold window has been closed since 1914. It is not rebuilt. Britain’s return to a pre-war parity is 1925.`,
        [
          "In 1914 war finance suspended convertibility and gold shipment. That peacetime order has not been restored.",
          "The Federal Reserve already exists. Britain’s return to the pre-war sterling parity is 1925. The Genoa sketch of a gold-exchange system is 1922. Neither has happened.",
        ],
        {
          ...FRN,
          caption: "Twenty-dollar Federal Reserve note, series of 1914. The classical gold window is already shut. The note is not a new statute of this year.",
        },
        "frn-1914",
        MORE.classical,
      ),
  },
  {
    from: 1918,
    to: 1918,
    build: () =>
      fill(
        "The old machine does not return",
        "Fighting ends. What does not return is the pre-1914 gold standard: several centres, private convertibility, and gold that moved when the points were hit.",
        [
          "The fighting ends in 1918. The classical gold standard does not resume with it. That standard had been several centres, private convertibility, and gold that moved when the gold points were hit.",
          "What comes later is a different architecture: Genoa’s gold-exchange sketch in 1922, and Britain’s return to a pre-war parity in 1925. This year is the end of the war, not those later pegs.",
        ],
        {
          ...FRN,
          caption: "Twenty-dollar Federal Reserve note, series of 1914. Wartime paper, not a photograph of 1918.",
        },
        "frn-1914",
        MORE.classical,
      ),
  },
  {
    from: 1919,
    to: 1921,
    build: (year) =>
      fill(
        "Pre-war gold order still absent",
        `In ${year} the war is over. The pre-1914 gold machine has not returned. Britain’s parity restoration is 1925.`,
        [
          "After 1918 the old arrangement — several centres, private convertibility, gold moving at the points — did not come back. It is still absent.",
          "Britain restores a pre-war sterling parity in 1925. That is not this year, and it is not the pre-1914 system. Genoa’s gold-exchange sketch is 1922.",
        ],
        FRN,
        "frn-1914",
        MORE.classical,
      ),
  },
  {
    from: 1922,
    to: 1922,
    build: () =>
      fill(
        "Genoa",
        "Genoa sketches a gold-exchange system: hold currencies that are themselves convertible into gold, instead of holding gold. Not the old machine.",
        [
          "The Genoa conference of 1922 sketched a gold-exchange standard. Countries could hold currencies that were themselves convertible into gold, rather than holding gold.",
          "That is not the pre-1914 machine. It is also not Britain’s 1925 return to a pre-war parity. The German mark’s collapse is the next year.",
        ],
        {
          alt: "Delegates photographed at the Genoa conference, 1922.",
          caption: "The Genoa conference, 1922.",
          credit: PD,
        },
        "genoa-1922",
        MORE.classical,
      ),
  },
  {
    from: 1924,
    to: 1924,
    build: () =>
      fill(
        "Mark stopped, parity not restored",
        "The paper mark stopped working in 1923. Britain has not restored the pre-war gold parity. That return is 1925.",
        [
          "In 1923 the German mark lost practical use as a unit. The Rentenmark is the stop that followed. That collapse is already in the past.",
          "Britain has not yet restored gold convertibility at the pre-war parity. That return is 1925. It will reuse the old number. It will not rebuild the pre-1914 order.",
        ],
        {
          ...SOVEREIGN_1925,
          caption:
            "Gold sovereign of George V. Britain has not yet restored a pre-war gold parity. That return is 1925. The coin is not a 1924 statute.",
        },
        "sovereign-1925",
        MORE.weimar,
      ),
  },
  {
    from: 1926,
    to: 1930,
    build: (year) =>
      fill(
        "Sterling on the restored parity",
        `In ${year} Britain is on the gold parity restored in 1925. The pre-1914 order was not rebuilt. The exit is 1931.`,
        [
          "In 1925 Britain returned to gold at the pre-war parity. That parity is in force. The several centres and the private gold points of 1913 did not return with it.",
          "Britain leaves gold in 1931. The United States has not recalled private monetary gold. That order is 1933.",
        ],
        {
          ...SOVEREIGN_1925,
          caption: "Gold sovereign of George V. Britain is on the parity restored in 1925. The coin is not a new law of this year.",
        },
        "sovereign-1925",
        MORE.classical,
      ),
  },
  {
    from: 1932,
    to: 1932,
    build: () =>
      fill(
        "Britain already off gold",
        "Britain left gold in 1931. The United States has not recalled private monetary gold. That order is 1933.",
        [
          "In 1931 Britain left the parity restored in 1925. Sterling is already off gold. The exit is not repeated this year.",
          "The American recall of most private monetary gold is Executive Order 6102 in 1933. The official price change to $35 is the Gold Reserve Act of 1934. Neither is this year.",
        ],
        NOTE_1931,
        "note-1931",
        MORE.classical,
      ),
  },
  {
    from: 1935,
    to: 1935,
    build: () =>
      fill(
        "Gold Clause Cases",
        "The Supreme Court upholds the 1933 resolution that voided gold clauses in contracts.",
        [
          "On 5 June 1933 a joint resolution of Congress declared gold clauses against public policy. A promise to pay in gold, or in a sum measured by gold, was to be discharged in legal tender. The Supreme Court upheld that main line in the Gold Clause Cases of 1935.",
          "The official price is already $35, set on 30 January 1934. The public still cannot redeem currency in gold. Private monetary gold remains restricted.",
        ],
        {
          alt: "The Supreme Court in session on 7 June 1937.",
          caption: "The Supreme Court in session, 7 June 1937. The Gold Clause Cases were decided in 1935. The photograph is not from 1935.",
          credit: PD,
        },
        "court-1937",
        MORE.recall,
      ),
  },
  {
    from: 1936,
    to: 1943,
    build: (year) =>
      fill(
        "Official price $35",
        `In ${year} the official gold price is $35. The Treasury does not redeem currency in gold for the public. Bretton Woods has not been signed.`,
        [
          "The Gold Reserve Act of 1934 set the official price at $35 an ounce and barred the Treasury from redeeming currency in gold for the public. That rule is in force.",
          "Private holding of monetary gold is still restricted. The restriction runs through the end of 1974. The Bretton Woods agreement, which keeps $35 for official holders, is 1944.",
        ],
        CERT_1934,
        "gold-cert-1934",
        MORE.recall,
      ),
  },
  {
    from: 1945,
    to: 1960,
    build: (year) =>
      fill(
        "Bretton Woods in force",
        `In ${year} other currencies are pegged to the dollar, and the dollar is defined at $35 for official holders. Private Americans cannot redeem at the Treasury.`,
        [
          "Bretton Woods was negotiated in 1944. Member currencies were pegged to the dollar. The dollar was defined against gold at $35 a troy ounce for official holders. That system is in force.",
          "Ordinary Americans do not redeem paper at the Treasury. The London Gold Pool, which tries to hold the free-market price near $35, starts in 1961. It has not started.",
        ],
        CERT_1934,
        "gold-cert-1934",
        MORE.nixon,
      ),
  },
  {
    from: 1961,
    to: 1967,
    build: (year) =>
      fill(
        "Gold Pool",
        `In ${year} the London Gold Pool is trying to hold the free-market price near $35. The official window is still open. The pool collapses in March 1968.`,
        [
          "From 1961 the London Gold Pool sold gold into the market when the price rose, trying to hold the free-market price near the official $35. That attempt is underway.",
          "The pool collapses in March 1968. Until 15 August 1971, foreign official holders can still convert dollars at the Treasury. Private Americans cannot.",
        ],
        {
          ...CERT_1934,
          caption:
            "One-hundred-dollar gold certificate, series of 1934. The pool is trying to hold the free price near the $35 on this kind of official paper. Not a photograph of the pool.",
        },
        "gold-cert-1934",
        MORE.nixon,
      ),
  },
  {
    from: 1968,
    to: 1968,
    build: () =>
      fill(
        "Two-tier gold market",
        "The London Gold Pool collapses in March. The official price stays for central banks. The free price can move away from $35.",
        [
          "In March 1968 the London Gold Pool collapsed. The effort to hold the free-market price near $35 stopped. A two-tier market followed: an official price for central banks, and a free price that could move away from $35.",
          "The foreign official window at the Treasury is still open. It closes on 15 August 1971. Private Americans are still barred from monetary gold.",
        ],
        {
          ...EAGLE_1907,
          caption: "United States double eagle, 1907. Not a photograph of the Gold Pool, and not a coin of 1968.",
        },
        "double-eagle-1907",
        MORE.nixon,
      ),
  },
  {
    from: 1969,
    to: 1970,
    build: (year) =>
      fill(
        "Two tiers, window still open",
        `In ${year} the Gold Pool has already collapsed. The free price can leave $35. The official window for foreign treasuries closes on 15 August 1971.`,
        [
          "Since March 1968 there have been two prices: an official price for central banks, and a free-market price. The pool is not reconstituted.",
          "Foreign official holders can still convert dollars into gold at the Treasury. That window closes on 15 August 1971. Private holding of monetary gold is still restricted.",
        ],
        {
          ...EAGLE_1907,
          caption: "United States double eagle, 1907. Not a coin of this year. The official window is still open. The pool is not.",
        },
        "double-eagle-1907",
        MORE.nixon,
      ),
  },
  {
    from: 1972,
    to: 1972,
    build: () =>
      fill(
        "Smithsonian pegs",
        "The official gold price has moved from $35 to $38. A March statute writes $38 into United States law. Major currencies have not yet floated.",
        [
          "In December 1971 the Smithsonian Agreement reset the official dollar price of gold from $35 to $38 and tried to rebuild exchange-rate pegs. The Par Value Modification Act of 31 March 1972 wrote that $38 figure into United States law.",
          "Major currencies have not yet floated. That break is 1973, when the official price is $42.22. Private Americans still cannot hold monetary gold. That bar lasts through the end of 1974.",
        ],
        {
          ...CERT_1934,
          caption:
            "One-hundred-dollar gold certificate, series of 1934. Paper of the earlier $35 definition, not a 1972 object. The official price this year is $38.",
        },
        "gold-cert-1934",
        MORE.nixon,
      ),
  },
  {
    from: 1973,
    to: 1973,
    build: () =>
      fill(
        "Currencies float",
        "Major currencies float. The official dollar price of gold is $42.22. Private gold holding is still restricted.",
        [
          "In 1973 the major currencies moved to floating rates. The Smithsonian pegs did not hold. The official dollar price of gold was $42.22. A September statute set the par at $42.2222 a fine troy ounce.",
          "That official price is not a market print, and it is not a promise the public can redeem. Private holding of monetary gold stays restricted until the end of 1974. The foreign official window has been shut since 15 August 1971.",
        ],
        {
          ...CERT_1934,
          caption: "One-hundred-dollar gold certificate, series of 1934. In 1973 the official price is $42.22. The note is not from 1973.",
        },
        "gold-cert-1934",
        MORE.nixon,
      ),
  },
  {
    from: 1975,
    to: 1979,
    build: (year) =>
      fill(
        "Private holding, no window",
        `In ${year} private bullion holding is legal again. Public convertibility is not. The foreign official window closed in 1971.`,
        [
          "At the end of 1974, statute again allowed Americans to hold gold bullion. That private right is in force. It did not restore a public contract to redeem paper in gold.",
          "The official window for foreign treasuries closed on 15 August 1971. Silver Thursday, the March 1980 break in a concentrated silver position, has not happened.",
        ],
        {
          ...EAGLE_1907,
          caption: "United States double eagle, 1907. Private holding of a pre-1933 gold coin is legal again. The coin is not from this year.",
        },
        "double-eagle-1907",
        MORE.recall,
      ),
  },
];

/** A filled year inside 1776–1980, or undefined when that year already has its own page. */
export function historyYearFill(year: number): HistoryYearFill | undefined {
  const band = BANDS.find((row) => year >= row.from && year <= row.to);
  return band?.build(year);
}
