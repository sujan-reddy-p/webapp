"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ProfileControlsProps = {
  current: "recruiter" | "visitor";
};

export function ProfileControls({ current }: ProfileControlsProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const selected = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(selected);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="profile-controls fixed right-4 top-4 z-[70] flex items-center rounded-full border p-1 shadow-2xl backdrop-blur-xl sm:right-7 sm:top-6">
      <a href="/recruiter" aria-current={current === "recruiter" ? "page" : undefined} data-cursor="GO" className="profile-control-link rounded-full px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] sm:px-4">Recruiter</a>
      <a href="/explore" aria-current={current === "visitor" ? "page" : undefined} data-cursor="GO" className="profile-control-link rounded-full px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] sm:px-4">Visitor</a>
      <span className="mx-1 h-5 w-px bg-current opacity-15" />
      <button type="button" onClick={toggleTheme} data-cursor="THEME" className="grid size-8 place-items-center rounded-full transition-colors" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
        {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      </button>
    </div>
  );
}
