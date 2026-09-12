export const THEME_STORAGE_KEY = "gshq-theme";

export type ThemePreference = "light" | "dark";
export type ResolvedTheme = ThemePreference;

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark";
}

/** Resolve stored preference, falling back to prefers-color-scheme when unset. */
export function resolveTheme(
  stored: string | null | undefined,
  prefersDark = true,
): ResolvedTheme {
  if (isThemePreference(stored)) return stored;
  return prefersDark ? "dark" : "light";
}

export function applyThemeClass(theme: ResolvedTheme): void {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

/** Inline script for ScriptOnce — runs before paint to avoid FOUC. */
export function getThemeInitScript(storageKey = THEME_STORAGE_KEY): string {
  return `(function(){try{var k=${JSON.stringify(storageKey)};var s=localStorage.getItem(k);var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=(s==="light"||s==="dark")?s:(d?"dark":"light");var e=document.documentElement;e.classList.remove("light","dark");e.classList.add(t);e.style.colorScheme=t;}catch(e){}})();`;
}
