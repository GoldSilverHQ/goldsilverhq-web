/**
 * Sound Money discovery links — short reader labels for the header flyout.
 * Existing `/sound-money/*` routes only (no new paths).
 * Disclaimer stays in the footer, not in this menu.
 */
export type SoundMoneyNavItem = {
  label: string;
  href: string;
};

export const SOUND_MONEY_SUBNAV: SoundMoneyNavItem[] = [
  { label: "What is sound money?", href: "/sound-money/what-is-sound-money" },
  { label: "Hard money vs fiat", href: "/sound-money/hard-money-vs-fiat" },
  { label: "Inflation & purchasing power", href: "/sound-money/inflation-purchasing-power" },
  { label: "What “backed” means", href: "/sound-money/backed-money" },
];

/** Header flyout: hub overview, then the definition pages. */
export const SOUND_MONEY_NAV_MENU: SoundMoneyNavItem[] = [
  { label: "Overview", href: "/sound-money" },
  ...SOUND_MONEY_SUBNAV,
];
