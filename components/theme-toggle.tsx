"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function subscribe(callback: () => void) {
  window.addEventListener("buzzit-theme-change", callback);
  return () => window.removeEventListener("buzzit-theme-change", callback);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("buzzit-theme");
    const initialTheme: Theme = storedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = initialTheme;
    window.dispatchEvent(new Event("buzzit-theme-change"));
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("buzzit-theme", nextTheme);
    window.dispatchEvent(new Event("buzzit-theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={className}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}