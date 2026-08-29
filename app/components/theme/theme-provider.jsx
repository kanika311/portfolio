"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  mounted: false,
  toggleTheme: () => {},
});

function applyTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  document.documentElement.style.colorScheme = next;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored || "dark";
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(
    (event) => {
      const next = theme === "dark" ? "light" : "dark";
      const commit = () => {
        setTheme(next);
        localStorage.setItem("theme", next);
        applyTheme(next);
      };

      if (event && typeof document.startViewTransition === "function") {
        document.documentElement.style.setProperty("--theme-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--theme-y", `${event.clientY}px`);
        document.startViewTransition(commit);
        return;
      }

      commit();
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, mounted, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
