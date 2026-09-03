import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { SoundMoneyQuiz } from "@/components/SoundMoneyQuiz";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Sound money quiz — GoldSilverHQ" },
      {
        name: "description",
        content:
          "Eight questions on sound money, backing, Weimar, 1933, and the Nixon shock. Educational media. Not investment advice.",
      },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Quiz" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Sound money quiz</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Do the categories hold?</h1>
        <p className="mt-4 max-w-prose text-lg text-muted">
          Idea versus history versus practice. A correct answer is a definition or a date — not a trade.
        </p>
        <div className="mt-10">
          <SoundMoneyQuiz />
        </div>
      </div>
    </SiteShell>
  );
}
