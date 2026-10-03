import { useState, type KeyboardEvent } from "react";
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

type ShopCategory = "merch" | "jewelry" | "ebook";

const SHOP_CATEGORIES: { id: ShopCategory; label: string }[] = [
  { id: "merch", label: "Merch" },
  { id: "jewelry", label: "Jewelry" },
  { id: "ebook", label: "Ebook" },
];

function ComingSoon({ id }: { id: "jewelry" | "ebook" }) {
  return (
    <section
      id={`shop-panel-${id}`}
      role="tabpanel"
      aria-labelledby={`shop-tab-${id}`}
      className="shop-section mt-8"
    >
      <p className="text-muted">Coming soon</p>
    </section>
  );
}

function ShopPage() {
  const { merch } = Route.useLoaderData();
  const [category, setCategory] = useState<ShopCategory>("merch");

  function onTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = SHOP_CATEGORIES.findIndex((item) => item.id === category);
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = SHOP_CATEGORIES[(index + step + SHOP_CATEGORIES.length) % SHOP_CATEGORIES.length];
    if (!next) return;
    setCategory(next.id);
    document.getElementById(`shop-tab-${next.id}`)?.focus();
  }

  return (
    <SiteShell>
      <div className="shop-hub relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-gold)_14%,transparent),transparent_52%),linear-gradient(180deg,color-mix(in_oklab,var(--color-raised)_55%,transparent),transparent_40%)]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Shop" }]} />

          <header className="shop-hero mt-6">
            <h1 className="font-brand text-3xl tracking-tight sm:text-4xl">
              <span className="text-gold">Gold</span>
              <span className="text-silver">Silver</span>
              <span className="text-fg">HQ</span>
              <span className="text-muted"> Shop</span>
            </h1>
          </header>

          <div
            className="mt-8 inline-flex flex-wrap gap-1 rounded-md border border-line bg-surface p-1"
            role="tablist"
            aria-label="Shop categories"
            onKeyDown={onTabKeyDown}
          >
            {SHOP_CATEGORIES.map((item) => {
              const on = item.id === category;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`shop-tab-${item.id}`}
                  aria-selected={on}
                  aria-controls={`shop-panel-${item.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setCategory(item.id)}
                  className={`min-h-11 rounded-sm px-4 text-sm font-medium transition-[color,background-color] duration-150 ${
                    on ? "bg-gold text-bg" : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {category === "merch" ? (
            <section
              id="shop-panel-merch"
              role="tabpanel"
              aria-labelledby="shop-tab-merch"
              className="shop-section mt-10"
            >
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
          ) : null}

          {category === "jewelry" ? <ComingSoon id="jewelry" /> : null}

          {category === "ebook" ? <ComingSoon id="ebook" /> : null}

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
