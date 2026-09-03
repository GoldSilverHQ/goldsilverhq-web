export type QuizChoice = {
  text: string;
  correct: boolean;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: QuizChoice[];
  explain: string;
  href: string;
  linkLabel: string;
};

export const QUIZ: QuizQuestion[] = [
  {
    id: "sound-money",
    prompt: "On this site, sound money is money that…",
    choices: [
      { text: "Always buys the same loaf of bread", correct: false },
      { text: "Cannot have its supply expanded at will by a political authority", correct: true },
      { text: "Must be a government-stamped coin", correct: false },
      { text: "Is whatever circulates the most", correct: false },
    ],
    explain:
      "The test is the stop on the issuer, not popularity or a frozen price. Metal money can still be debased or suspended. Circulation is not the category.",
    href: "/sound-money/what-is-sound-money",
    linkLabel: "What is sound money?",
  },
  {
    id: "hard-vs-fiat",
    prompt: "Hard money versus fiat: the distinction is…",
    choices: [
      { text: "Whether people accept it in a shop", correct: false },
      { text: "Whether it is costly to produce, versus created by law and habit", correct: true },
      { text: "Whether it is digital", correct: false },
      { text: "Whether the central bank is independent", correct: false },
    ],
    explain:
      "Both can circulate. Fiat can be well run or badly run. Hard is a supply-side constraint — mining, minting, a real cost — not a promise that prices stand still.",
    href: "/sound-money/hard-money-vs-fiat",
    linkLabel: "Hard money vs fiat",
  },
  {
    id: "backed",
    prompt: "“Backed by gold,” used strictly, means…",
    choices: [
      { text: "Gold sits in a vault somewhere", correct: false },
      { text: "The issuer mentions gold in a speech", correct: false },
      { text: "A holder can redeem the note for a defined weight of metal", correct: true },
      { text: "The country mines gold", correct: false },
    ],
    explain:
      "Redeemability is a contract you can test at a window. Reserves on a balance sheet, without that right, are a slogan or a reserve-management fact — not hardness.",
    href: "/sound-money/backed-money",
    linkLabel: "What “backed” means",
  },
  {
    id: "weimar",
    prompt: "Weimar hyperinflation is best started as…",
    choices: [
      { text: "A sudden shortage of bread", correct: false },
      { text: "War finance without a gold stop, then paper for a fiscal gap", correct: true },
      { text: "The introduction of the Rentenmark", correct: false },
      { text: "Nixon closing the gold window", correct: false },
    ],
    explain:
      "Printing is the mechanism. The start is the missing constraint: 1914 ended convertibility; the Reichsbank then monetised Treasury paper. The Rentenmark is how it stopped, in November 1923.",
    href: "/history/20th-century/weimar-1923",
    linkLabel: "Weimar 1923",
  },
  {
    id: "nixon",
    prompt: "On 15 August 1971 the United States…",
    choices: [
      { text: "Took gold coin from American households", correct: false },
      { text: "Suspended dollar convertibility into gold for foreign official holders", correct: true },
      { text: "Restored the classical gold standard", correct: false },
      { text: "Dropped the standard silver dollar", correct: false },
    ],
    explain:
      "Domestic gold holding had already been restricted in 1933. What ended in 1971 was a different claim: official holders presenting dollars at the Treasury window. That weekend is the Nixon shock.",
    href: "/history/20th-century/bretton-woods-nixon-1971",
    linkLabel: "Nixon shock 1971",
  },
  {
    id: "1933",
    prompt: "Executive Order 6102 (1933) is…",
    choices: [
      { text: "The same event as the Nixon shock", correct: false },
      { text: "A domestic gold recall — a different claim than the 1971 gold window", correct: true },
      { text: "The statute that created the Federal Reserve", correct: false },
      { text: "The Coinage Act that omitted the silver dollar", correct: false },
    ],
    explain:
      "6102 plus the Gold Reserve Act of 1934 removed the public claim on gold at $20.67 and reset the official price to $35. Foreign governments still had a window until 1971. Two claims, two decades.",
    href: "/history/20th-century/1933-gold-recall",
    linkLabel: "1933 gold recall",
  },
  {
    id: "ratio",
    prompt: "The 15 : 1 gold–silver figure on the clock is…",
    choices: [
      { text: "A price target for this year", correct: false },
      { text: "A historical mint ratio — not a forecast", correct: true },
      { text: "Today’s live market ratio", correct: false },
      { text: "The geological mine-output ratio", correct: false },
    ],
    explain:
      "Rome and nineteenth-century U.S. coinage used a legal mint ratio near 15 or 16 to 1. The live gold–silver ratio is a different number. Geology is a third. None of them is a recommendation.",
    href: "/history/silver/bimetallism",
    linkLabel: "Bimetallism",
  },
  {
    id: "premium",
    prompt: "Premium over spot is…",
    choices: [
      { text: "Always a dealer trick", correct: false },
      { text: "Fabrication, distribution, and bid–ask — not automatically a trick", correct: true },
      { text: "The gold–silver ratio", correct: false },
      { text: "The same thing as inflation", correct: false },
    ],
    explain:
      "Spot is a screen ounce. The product in hand is minted, shipped, and sold by someone who must bid it back. The number that matters later is the bid, not only the ask.",
    href: "/gold-silver/premium-over-spot",
    linkLabel: "Premium over spot",
  },
];

export function correctIndex(q: QuizQuestion) {
  return q.choices.findIndex((c) => c.correct);
}

export function scoreQuiz(answers: Array<number | null>) {
  let correct = 0;
  for (let i = 0; i < QUIZ.length; i++) {
    if (answers[i] === correctIndex(QUIZ[i])) correct += 1;
  }
  return { correct, total: QUIZ.length };
}

export function scoreLine(correct: number, total: number) {
  const pct = total ? correct / total : 0;
  if (pct === 1) return "Every stop on the map. Read the episodes anyway — the quiz is the outline.";
  if (pct >= 0.75) return "The categories are landing. The misses are where the history pages earn their keep.";
  if (pct >= 0.5) return "Half the map. The idea pillar and 20th-century cluster will tighten the rest.";
  return "Start with the definition pages, then one episode. The map is built for that order.";
}
