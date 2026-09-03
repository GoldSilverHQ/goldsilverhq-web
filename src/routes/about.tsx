import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { pillars } from "@/lib/content/map";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GoldSilverHQ" },
      {
        name: "description",
        content:
          "GoldSilverHQ is educational media on sound money, monetary history, and physical metal. Not investment advice. BaFin-clean.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "About" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">About</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Media. Not a desk that sells you a bar.</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          GoldSilverHQ publishes educational media about sound money, monetary history, and how people handle
          physical gold and silver. The working copy is this site. The public voice is{" "}
          <a href="https://x.com/goldsilverhq" className="text-gold hover:text-gold-soft" target="_blank" rel="noreferrer">
            @GoldSilverHQ
          </a>
          .
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Nothing here is investment advice, a solicitation, or a personal recommendation. Markets move. Laws
          differ by country. If you act, you do so on your own judgment.
        </p>

        <h2 className="mt-12 font-display text-3xl">The three pillars</h2>
        <ol className="mt-6 grid gap-3">
          {pillars.map((p) => (
            <li key={p.id}>
              <a
                href={p.path}
                className="block rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="text-xs text-gold">{p.kicker}</p>
                <p className="mt-1 font-medium">{p.title}</p>
                <p className="mt-1 text-sm text-muted">{p.question}</p>
              </a>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 font-display text-3xl">What we will not do</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          <li>Park Weimar or Nixon stories in the idea pillar.</li>
          <li>Rank dealers or publish a buy list.</li>
          <li>Treat a historical mint ratio as a price target.</li>
          <li>Call a vault holding “backing” when the public has no claim on the metal.</li>
        </ul>

        <p className="mt-10 text-sm">
          <Link
            to="/sound-money/$slug"
            params={{ slug: "information-not-advice" }}
            className="text-gold hover:text-gold-soft"
          >
            Information vs investment advice →
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
