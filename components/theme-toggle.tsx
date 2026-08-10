"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    if (!window.localStorage.getItem("portfolio-theme-hint-seen")) {
      setShowHint(true);
      window.localStorage.setItem("portfolio-theme-hint-seen", "true");
      const timer = window.setTimeout(() => setShowHint(false), 4200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-cursor="THEME"
      className={`theme-toggle grid size-10 place-items-center rounded-full border shadow-xl backdrop-blur-xl${showHint ? " theme-toggle-attention" : ""}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      {showHint && <span className="theme-toggle-hint">Switch theme</span>}
    </button>
  );
}
