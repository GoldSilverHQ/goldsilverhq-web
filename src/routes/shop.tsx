import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";
import {
  PETER_STONE_PRODUCTS,
  ctaHref,
  hasAffiliateTracking,
  peterStoneAffiliateId,
  type PeterStoneProduct,
} from "@/lib/shop/peter-stone";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle("Shop"),
      description:
        "GoldSilverHQ Shop: curated Peter Stone jewelry via affiliate links, plus PDFs and merch coming later. Commerce only — not investment advice.",
      imagePath: "/og.jpg",
    }),
  }),
  component: ShopPage,
});

function ProductPlate({ product }: { product: PeterStoneProduct }) {
  if (product.imageSrc) {
    return (
      <img
        src={product.imageSrc}
        alt={product.imageAlt ?? product.name}
        className="aspect-[4/5] w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="shop-product-plate relative aspect-[4/5] w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_oklab,var(--color-gold)_22%,transparent),transparent_55%),radial-gradient(ellipse_at_80%_90%,color-mix(in_oklab,var(--color-silver)_16%,transparent),transparent_50%),linear-gradient(165deg,var(--color-raised),var(--color-surface))]" />
      <div className="absolute inset-[12%] border border-[color-mix(in_oklab,var(--color-gold)_28%,transparent)]" />
      <p className="absolute inset-x-4 bottom-4 text-center text-[0.65rem] tracking-[0.18em] text-faint uppercase">
        Image pending
      </p>
    </div>
  );
}

function JewelryCard({ product }: { product: PeterStoneProduct }) {
  const href = ctaHref(product);
  const tracked = hasAffiliateTracking(product);

  return (
    <article className="shop-product flex flex-col">
      <ProductPlate product={product} />
      <div className="flex flex-1 flex-col pt-4">
        <h3 className="font-display text-xl text-fg">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.blurb}</p>
        {tracked && href ? (
          <a
            href={href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="btn-gold mt-5 inline-flex min-h-11 items-center justify-center rounded-sm px-4 text-sm font-semibold"
          >
            View at Peter Stone
          </a>
        ) : (
          <p className="mt-5 border-t border-line pt-4 text-sm text-faint">
            Affiliate link pending
            {peterStoneAffiliateId() ? " — paste dashboard URL into config" : ""}.
          </p>
        )}
      </div>
    </article>
  );
}

function ComingSoonBlock({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string;
}) {
  return (
    <section id={id} className="shop-section scroll-mt-24">
      <h2 className="font-display text-3xl">{title}</h2>
      <p className="mt-3 max-w-prose text-muted">{body}</p>
      <p className="mt-8 text-sm tracking-[0.12em] text-faint uppercase">Coming soon</p>
    </section>
  );
}

function ShopPage() {
  return (
    <SiteShell>
      <div className="shop-hub relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-gold)_14%,transparent),transparent_52%),linear-gradient(180deg,color-mix(in_oklab,var(--color-raised)_55%,transparent),transparent_40%)]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Shop" }]} />

          <header className="shop-hero mt-6 max-w-2xl">
            <p className="font-brand text-3xl tracking-tight sm:text-4xl">
              <span className="text-gold">Gold</span>
              <span className="text-silver">Silver</span>
              <span className="text-fg">HQ</span>
              <span className="text-muted"> Shop</span>
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">Jewelry, notes, and merch.</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              A small commerce corner — curated craft jewelry via Peter Stone’s affiliate program,
              with PDFs and merch to follow. Not a metals desk. Not investment advice.
            </p>
          </header>

          <aside
            className="shop-disclosure mt-10 max-w-3xl border-l-2 border-gold/50 pl-4 text-sm leading-relaxed text-muted"
            aria-label="Affiliate disclosure"
          >
            <p>
              <span className="font-medium text-fg">Affiliate disclosure:</span> Some links to Peter
              Stone are affiliate links. If you buy through them, we may earn a commission or store
              credit — at no extra cost to you. This page is jewelry and merch commerce only.
            </p>
            <p className="mt-2">
              <span className="font-medium text-fg">Affiliate-Hinweis:</span> Einige Links zu Peter
              Stone sind Affiliate-Links. Bei einem Kauf darüber erhalten wir ggf. eine Provision oder
              Gutschrift — ohne Mehrkosten für Sie. Schmuck-/Merch-Handel, keine Anlageberatung.
            </p>
          </aside>

          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" aria-label="Shop sections">
            <a href="#jewelry" className="hover:text-gold-soft">
              Jewelry
            </a>
            <a href="#pdfs" className="hover:text-gold-soft">
              PDFs
            </a>
            <a href="#merch" className="hover:text-gold-soft">
              Merch
            </a>
          </nav>

          <section id="jewelry" className="shop-section mt-16 scroll-mt-24">
            <h2 className="font-display text-3xl">Jewelry — Peter Stone</h2>
            <p className="mt-3 max-w-prose text-muted">
              Cultural and craft jewelry from{" "}
              <a
                href="https://www.peterstone.com/"
                className="text-gold hover:text-gold-soft"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peter Stone
              </a>
              . Placeholders until real product URLs and images are wired from the affiliate
              dashboard.
            </p>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {PETER_STONE_PRODUCTS.map((product) => (
                <JewelryCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <div className="mt-20 grid gap-16 border-t border-line pt-16 md:grid-cols-2">
            <ComingSoonBlock
              id="pdfs"
              title="PDFs"
              body="Guides and printable notes will land here. Structure reserved — nothing for sale yet."
            />
            <ComingSoonBlock
              id="merch"
              title="Merch"
              body="Site merch (non-investment apparel and objects) will appear here later."
            />
          </div>

          <p className="mt-16 max-w-prose text-sm text-faint">
            Educational pages stay on{" "}
            <Link to="/sound-money" className="text-gold hover:text-gold-soft">
              Sound Money
            </Link>
            ,{" "}
            <Link to="/history" className="text-gold hover:text-gold-soft">
              History
            </Link>
            , and{" "}
            <Link to="/markets" className="text-gold hover:text-gold-soft">
              Markets
            </Link>
            . Shop does not rank dealers or recommend metal as an investment.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
