/**
 * External metal / bullion partner slots for `/partners`.
 *
 * Shop (`/shop`) = jewelry, PDFs, merch.
 * Partners (`/partners`) = external metal dealers / referral partners.
 *
 * Do not invent dealer names or live affiliate IDs. Fill `href` from a signed
 * deal; leave empty so the CTA stays disabled.
 */

export type PartnerListing = {
  id: string;
  /** Display name — use a placeholder until a real deal is signed. */
  name: string;
  blurb: string;
  /** Full external URL (affiliate or referral). Empty = CTA pending. */
  href?: string;
  /** Short geography / channel note, not a ranking. */
  note?: string;
};

export function partnerCtaHref(partner: PartnerListing): string | null {
  const url = partner.href?.trim();
  return url || null;
}

/**
 * Example layout only — replace with a real partner when a deal exists.
 * TODO(user): paste real partner name, blurb, and tracked href.
 */
export const EXAMPLE_PARTNERS: readonly PartnerListing[] = [
  {
    id: "partner-placeholder-01",
    name: "Example dealer",
    blurb:
      "Placeholder for an external bullion or coin counter we may list later. Not a recommendation. Not investment advice.",
    note: "External site · link pending",
  },
] as const;
