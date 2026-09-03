import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { QUIZ, correctIndex, scoreLine, scoreQuiz } from "@/lib/content/quiz";

export function SoundMoneyQuiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Array<number | null>>(QUIZ.map(() => null));
  const done = step >= QUIZ.length;
  const q = QUIZ[step];
  const score = useMemo(() => scoreQuiz(answers), [answers]);

  function choose(i: number) {
    if (picked != null) return;
    setPicked(i);
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = i;
      return next;
    });
  }

  function next() {
    setPicked(null);
    setStep((s) => s + 1);
  }

  function reset() {
    setStep(0);
    setPicked(null);
    setAnswers(QUIZ.map(() => null));
  }

  if (done) {
    return (
      <section className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Result</p>
        <h2 className="mt-2 font-display text-4xl">
          {score.correct} <span className="text-muted">/ {score.total}</span>
        </h2>
        <p className="mt-3 max-w-prose text-lg text-muted">{scoreLine(score.correct, score.total)}</p>
        <ol className="mt-8 grid gap-3">
          {QUIZ.map((item, i) => {
            const right = correctIndex(item);
            const given = answers[i];
            const ok = given === right;
            return (
              <li key={item.id} className="rounded-lg bg-raised px-4 py-3 shadow-[var(--shadow-border)]">
                <p className="text-sm text-fg">
                  <span className={ok ? "text-gold" : "text-silver"}>{ok ? "Correct" : "Miss"}</span>
                  <span className="text-faint"> · </span>
                  {item.prompt}
                </p>
                <p className="mt-1 text-sm text-muted">{item.explain}</p>
                <a href={item.href} className="mt-2 inline-flex min-h-10 items-center text-sm text-gold hover:text-gold-soft">
                  {item.linkLabel} →
                </a>
              </li>
            );
          })}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <Button type="button" variant="ghost" asChild>
            <Link to="/history">Open the history map</Link>
          </Button>
        </div>
      </section>
    );
  }

  const revealed = picked != null;
  const right = correctIndex(q);

  return (
    <section className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
          Question {step + 1} of {QUIZ.length}
        </p>
        <p className="text-xs text-faint">Media only · not advice</p>
      </div>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl">{q.prompt}</h2>
      <ol className="mt-6 grid gap-2">
        {q.choices.map((choice, i) => {
          const selected = picked === i;
          const isRight = revealed && i === right;
          const isWrong = revealed && selected && i !== right;
          return (
            <li key={choice.text}>
              <button
                type="button"
                onClick={() => choose(i)}
                disabled={revealed}
                className={`flex min-h-12 w-full items-center rounded-lg px-4 py-3 text-left text-sm shadow-[var(--shadow-border)] transition-[box-shadow,background-color] ${
                  isRight
                    ? "bg-gold/15 shadow-[0_0_0_1px_var(--color-gold)]"
                    : isWrong
                      ? "bg-raised shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-silver)_50%,transparent)]"
                      : selected
                        ? "bg-raised"
                        : "bg-raised/60 hover:shadow-[var(--shadow-border-hover)]"
                }`}
              >
                <span className="mr-3 w-5 text-gold">{String.fromCharCode(65 + i)}</span>
                <span>{choice.text}</span>
              </button>
            </li>
          );
        })}
      </ol>
      {revealed ? (
        <div className="mt-6">
          <p className="text-sm text-muted">{q.explain}</p>
          <a href={q.href} className="mt-2 inline-flex min-h-10 items-center text-sm text-gold hover:text-gold-soft">
            {q.linkLabel} →
          </a>
          <div className="mt-5">
            <Button type="button" onClick={next}>
              {step === QUIZ.length - 1 ? "See score" : "Next question"}
            </Button>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-sm text-faint">Pick one. The explanation follows immediately.</p>
      )}
    </section>
  );
}
