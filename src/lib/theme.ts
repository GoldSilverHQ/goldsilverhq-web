export const THEME_KEY = "gshq-theme";
export type Theme = "dark" | "light";

export const THEME_EVENT = "gshq-theme";

export function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

export function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (isTheme(stored)) return stored;
  } catch {
    /* ignore */
  }
  return "dark";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f4efe4" : "#070605");
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function toggleTheme(current: Theme): Theme {
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}
