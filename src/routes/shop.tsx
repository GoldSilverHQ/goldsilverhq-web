import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";
import {
  defaultFourthwallVariant,
  fourthwallCheckoutUrl,
  loadFourthwallProducts,
  type FourthwallProduct,
} from "@/lib/shop/fourthwall";

export const Route = createFileRoute("/shop")({
  loader: async () => {
    try {
      return { merch: await loadFourthwallProducts() };
    } catch {
      return { merch: [] as FourthwallProduct[] };
    }
  },
  // Refetch the Fourthwall feed on each visit. Do not keep a stale catalog.
  staleTime: 0,
  headers: () => ({
    "Cache-Control": "private, no-store",
  }),
  head: () => ({
    meta: pageShareMeta({
      title: seoTitle("Shop"),
      description:
        "GoldSilverHQ Shop: Fourthwall merch from the live catalog, with reserved sections for Peter Stone jewelry and a rare-coins ebook. Commerce only — not investment advice.",
      imagePath: "/og.jpg",
    }),
  }),
  component: ShopPage,
});

function MerchCard({ product }: { product: FourthwallProduct }) {
  const initial = defaultFourthwallVariant(product);
  const [variantId, setVariantId] = useState(initial?.id ?? "");
  const variant = product.variants.find((item) => item.id === variantId) ?? initial;
  if (!variant) return null;

  const checkout = fourthwallCheckoutUrl(variant.id, variant.currency);
  const imageUrl = variant.imageUrl ?? product.imageUrl;

  return (
    <article className="shop-product flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product.title}
          className="h-auto w-full lg:w-[min(40rem,52%)]"
          loading="lazy"
        />
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col lg:max-w-sm lg:pt-2">
        <h3 className="font-display text-xl text-fg">{product.title}</h3>
        <p className="mt-2 text-sm text-muted">{variant.priceLabel}</p>
        {product.description ? (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
        ) : (
          <div className="flex-1" />
        )}
        {product.variants.length > 1 ? (
          <label className="mt-4 block text-sm text-muted">
            <span className="mb-1 block text-xs tracking-[0.12em] text-faint uppercase">Size</span>
            <select
              className="w-full rounded-sm border border-line bg-surface px-3 py-2 text-sm text-fg"
              value={variant.id}
              onChange={(event) => setVariantId(event.target.value)}
            >
              {product.variants.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label ? `${item.label} — ${item.priceLabel}` : item.priceLabel}
                </option>
              ))}
            </select>
          </label>
        ) : variant.label ? (
          <p className="mt-3 text-sm text-muted">{variant.label}</p>
        ) : null}
        {variant.inStock ? (
          <a
            href={checkout}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-5 inline-flex min-h-11 items-center justify-center rounded-sm px-4 text-sm font-semibold"
          >
            Checkout on Fourthwall
          </a>
        ) : (
          <p className="mt-5 border-t border-line pt-4 text-sm text-faint">
            {variant.availability || "Unavailable"}
          </p>
        )}
      </div>
    </article>
  );
}

function ReservedSlot({ id, title, body }: { id: string; title: string; body: string }) {
  return (
    <section id={id} className="shop-section mt-20 scroll-mt-24 border-t border-line pt-16">
      <h2 className="font-display text-3xl">{title}</h2>
      <p className="mt-3 max-w-prose text-muted">{body}</p>
      <p className="mt-8 text-sm tracking-[0.12em] text-faint uppercase">Not listed yet</p>
    </section>
  );
}

function ShopPage() {
  const { merch } = Route.useLoaderData();

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
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">Merch, jewelry, and a note.</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Fourthwall merch is listed from their public catalog. Peter Stone jewelry and a
              rare-coins ebook have their own sections and are not listed yet. Not a metals desk.
              Not investment advice.
            </p>
          </header>

          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" aria-label="Shop sections">
            <a href="#merch" className="hover:text-gold-soft">
              Merch
            </a>
            <a href="#jewelry" className="hover:text-gold-soft">
              Jewelry
            </a>
            <a href="#ebook" className="hover:text-gold-soft">
              Ebook
            </a>
          </nav>

          <section id="merch" className="shop-section mt-16 scroll-mt-24">
            <h2 className="font-display text-3xl">Merch — Fourthwall</h2>
            {merch.length > 0 ? (
              <>
                <p className="mt-3 max-w-prose text-muted">
                  Names and prices come from the public Fourthwall catalog on each visit. Checkout
                  opens on Fourthwall.
                </p>
                <div className="mt-10 flex flex-col gap-16">
                  {merch.map((product) => (
                    <MerchCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <p className="mt-3 max-w-prose text-muted">
                Nothing is in the public Fourthwall catalog right now.
              </p>
            )}
          </section>

          <ReservedSlot
            id="jewelry"
            title="Jewelry — Peter Stone"
            body="Reserved for Peter Stone jewelry. No pieces, prices, or links are listed yet."
          />

          <ReservedSlot
            id="ebook"
            title="Rare-coins ebook"
            body="Reserved for a rare-coins ebook. Nothing is listed yet."
          />

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
            . External metal dealers belong on{" "}
            <a href="/partners" className="text-gold hover:text-gold-soft">
              Partners
            </a>
            , not here. Shop does not rank dealers or recommend metal as an investment.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
