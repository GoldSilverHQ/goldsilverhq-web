import { absoluteOgImageUrl, DEFAULT_OG_IMAGE_PATH } from "./og-cards.ts";
import { CANONICAL_ORIGIN } from "./phase1-sitemap-paths.mjs";

export type ShareMetaInput = {
  title: string;
  description: string;
  /** Route pathname used to pick a thick-page card, or omit for the default. */
  path?: string;
  /** Override image path (public). */
  imagePath?: string;
};

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

/**
 * Document title + description plus Open Graph / Twitter card tags.
 * BaFin-clean: educational framing only — callers must not pass buy CTAs.
 */
export function pageShareMeta({
  title,
  description,
  path,
  imagePath,
}: ShareMetaInput): MetaEntry[] {
  const image =
    imagePath ??
    (path ? absoluteOgImageUrl(path).replace(CANONICAL_ORIGIN, "") : DEFAULT_OG_IMAGE_PATH);
  const absoluteImage = image.startsWith("http")
    ? image
    : `${CANONICAL_ORIGIN}${image.startsWith("/") ? image : `/${image}`}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "GoldSilverHQ" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: absoluteImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    ...(path
      ? [{ property: "og:url", content: `${CANONICAL_ORIGIN}${path === "/" ? "" : path}` }]
      : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: absoluteImage },
  ];
}
