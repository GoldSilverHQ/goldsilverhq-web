import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { getStoredTheme, isTheme, THEME_EVENT, toggleTheme, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  return isTheme(current) ? current : getStoredTheme();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, (): Theme => "dark");
  const light = theme === "light";

  return (
    <button
      type="button"
      className="grid size-11 shrink-0 place-items-center rounded-full text-fg hover:bg-raised"
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={light}
      onClick={() => toggleTheme(theme)}
    >
      {light ? <Moon className="size-4" aria-hidden /> : <Sun className="size-4" aria-hidden />}
    </button>
  );
}
