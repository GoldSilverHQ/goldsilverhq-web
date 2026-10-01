import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { seoTitle } from "@/lib/content/map";
import {
  EXAMPLE_PARTNERS,
  partnerCtaHref,
  type PartnerListing,
} from "@/lib/partners/example-partners";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle("Partners"),
      description:
        "GoldSilverHQ Partners: example layout for external metal dealers. Not investment advice. Distinct from the Shop (jewelry and merch).",
      imagePath: "/og.jpg",
    }),
  }),
  component: PartnersPage,
});

function PartnerCard({ partner }: { partner: PartnerListing }) {
  const href = partnerCtaHref(partner);

  return (
    <article className="partners-card border-t border-line pt-8 first:border-t-0 first:pt-0">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Partner</p>
      <h3 className="mt-2 font-display text-2xl sm:text-3xl">{partner.name}</h3>
      <p className="mt-3 max-w-prose text-muted leading-relaxed">{partner.blurb}</p>
      {partner.note ? <p className="mt-3 text-sm text-faint">{partner.note}</p> : null}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="btn-gold mt-6 inline-flex min-h-11 items-center justify-center rounded-sm px-4 text-sm font-semibold"
        >
          Visit external partner site
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <p className="mt-6 text-sm text-faint">External link pending — layout only.</p>
      )}
    </article>
  );
}

function PartnersPage() {
  return (
    <SiteShell>
      <div className="partners-hub relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-silver)_12%,transparent),transparent_48%),linear-gradient(180deg,color-mix(in_oklab,var(--color-raised)_50%,transparent),transparent_42%)]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Partners" }]} />

          <header className="partners-hero mt-6 max-w-2xl">
            <p className="font-brand text-3xl tracking-tight sm:text-4xl">
              <span className="text-gold">Gold</span>
              <span className="text-silver">Silver</span>
              <span className="text-fg">HQ</span>
              <span className="text-muted"> Partners</span>
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">External metal partners.</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Example layout for listing a bullion or coin counter we work with later. This is not a
              dealer ranking, not a buy list, and not investment advice. Jewelry and merch live on{" "}
              <a href="/shop" className="text-gold hover:text-gold-soft">
                Shop
              </a>
              .
            </p>
          </header>

          <aside
            className="partners-disclosure mt-10 max-w-3xl border-l-2 border-silver/40 pl-4 text-sm leading-relaxed text-muted"
            aria-label="Partner disclosure"
          >
            <p>
              <span className="font-medium text-fg">Partner disclosure:</span> Links on this page may
              be referral or affiliate links to external sites. If you buy there, we may earn a
              commission — at no extra cost to you. We do not custody metal or execute trades.
            </p>
            <p className="mt-2">
              <span className="font-medium text-fg">Partner-Hinweis:</span> Links hier können
              Affiliate-/Empfehlungslinks zu externen Händlern sein. Bei einem Kauf darüber erhalten
              wir ggf. eine Provision — ohne Mehrkosten für Sie. Keine Anlageberatung; wir verwahren
              kein Metall und führen keine Trades aus.
            </p>
          </aside>

          <section className="partners-section mt-16 max-w-2xl">
            <h2 className="font-display text-3xl">Listed partners</h2>
            <p className="mt-3 text-muted">
              Placeholder slot below. Swap in a real partner name and external URL when a deal is
              signed — do not invent live dealer branding here.
            </p>
            <div className="mt-10 grid gap-12">
              {EXAMPLE_PARTNERS.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </section>

          <section className="mt-20 max-w-2xl border-t border-line pt-12">
            <h2 className="font-display text-2xl">Shop is separate</h2>
            <p className="mt-3 text-muted leading-relaxed">
              <a href="/shop" className="text-gold hover:text-gold-soft">
                Shop
              </a>{" "}
              covers Peter Stone jewelry plus future PDFs and merch. Partners is only for external
              metal-dealer relationships. Educational pages stay on Sound Money, History, and Markets.
            </p>
            <p className="mt-6 text-sm">
              <Link
                to="/sound-money/$slug"
                params={{ slug: "information-not-advice" }}
                className="text-gold hover:text-gold-soft"
              >
                Information vs investment advice →
              </Link>
            </p>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
