import { useState, type KeyboardEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { seoTitle } from "@/lib/content/map";
import { pageShareMeta } from "@/lib/seo/share-meta";
import {
  defaultFourthwallVariant,
  fourthwallProductUrl,
  loadFourthwallProducts,
  merchCategories,
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

  const productHref = product.productUrl
    ? fourthwallProductUrl(product.productUrl, variant.id)
    : null;
  const imageUrl = variant.imageUrl ?? product.imageUrl;
  const choiceLabel = product.variants.some((item) => item.label.includes(" · "))
    ? "Variant"
    : "Size";

  return (
    <article className="shop-product flex h-full flex-col rounded-md border border-line bg-surface p-3">
      {imageUrl ? (
        <img src={imageUrl} alt={product.title} className="h-auto w-full" loading="lazy" />
      ) : null}
      <div className="mt-3 flex min-w-0 flex-1 flex-col">
        <h3 className="font-display text-lg leading-snug text-fg">{product.title}</h3>
        <p className="mt-1 text-sm text-muted">{variant.priceLabel}</p>
        {product.description ? (
          <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
        ) : null}
        <div className="mt-auto pt-4">
          {product.variants.length > 1 ? (
            <label className="block text-sm text-muted">
              <span className="mb-1 block text-xs tracking-[0.12em] text-faint uppercase">
                {choiceLabel}
              </span>
              <select
                className="w-full rounded-sm border border-line bg-bg px-3 py-2 text-sm text-fg"
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
            <p className="text-sm text-muted">{variant.label}</p>
          ) : null}
          {variant.inStock && productHref ? (
            <a
              href={productHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-sm px-4 text-sm font-semibold"
            >
              View on Fourthwall
            </a>
          ) : variant.inStock ? null : (
            <p className="mt-3 border-t border-line pt-3 text-sm text-faint">
              {variant.availability || "Unavailable"}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function MerchTypeFilter({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = options.findIndex((item) => item.id === value);
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = options[(index + step + options.length) % options.length];
    if (!next) return;
    onChange(next.id);
    document.getElementById(`shop-type-${next.id}`)?.focus();
  }

  return (
    <div
      className="mt-6 inline-flex max-w-full flex-wrap gap-1 rounded-md border border-line bg-surface p-1"
      role="radiogroup"
      aria-label="Product type"
      onKeyDown={onKeyDown}
    >
      {options.map((item) => {
        const on = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="radio"
            id={`shop-type-${item.id}`}
            aria-checked={on}
            tabIndex={on ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={`min-h-11 rounded-sm px-3 text-sm font-medium transition-[color,background-color] duration-150 ${
              on ? "bg-gold text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function MerchPanel({ products }: { products: FourthwallProduct[] }) {
  const categories = merchCategories(products);
  const [typeId, setTypeId] = useState("all");
  const activeType =
    typeId !== "all" && categories.some((item) => item.id === typeId) ? typeId : "all";
  const visible =
    activeType === "all"
      ? products
      : products.filter((product) => product.categoryId === activeType);
  const typeOptions = [{ id: "all", label: "All" }, ...categories];

  return (
    <section
      id="shop-panel-merch"
      role="tabpanel"
      aria-labelledby="shop-tab-merch"
      className="shop-section mt-10"
    >
      <h2 className="font-display text-3xl">Merch — Fourthwall</h2>
      {products.length > 0 ? (
        <>
          <p className="mt-3 max-w-prose text-muted">
            Names and prices come from the public Fourthwall catalog on each visit. The product page
            opens on Fourthwall.
          </p>
          {categories.length > 0 ? (
            <MerchTypeFilter options={typeOptions} value={activeType} onChange={setTypeId} />
          ) : null}
          {visible.length > 0 ? (
            <ul className="mt-8 grid list-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((product) => (
                <li key={product.id} className="min-w-0">
                  <MerchCard product={product} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 text-muted">Nothing in this category yet.</p>
          )}
        </>
      ) : (
        <p className="mt-3 max-w-prose text-muted">
          Nothing is in the public Fourthwall catalog right now.
        </p>
      )}
    </section>
  );
}

type ShopCategory = "merch" | "jewelry" | "ebook";

const SHOP_CATEGORIES: { id: ShopCategory; label: string }[] = [
  { id: "merch", label: "Merch" },
  { id: "jewelry", label: "Jewelry" },
  { id: "ebook", label: "Ebook" },
];

function ComingSoon({ id, hidden }: { id: "jewelry" | "ebook"; hidden: boolean }) {
  return (
    <section
      id={`shop-panel-${id}`}
      role="tabpanel"
      aria-labelledby={`shop-tab-${id}`}
      hidden={hidden}
      className="shop-section mt-8"
    >
      <p className="text-lg text-fg">Coming soon</p>
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

          {category === "merch" ? <MerchPanel products={merch} /> : null}

          <ComingSoon id="jewelry" hidden={category !== "jewelry"} />

          <ComingSoon id="ebook" hidden={category !== "ebook"} />

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
