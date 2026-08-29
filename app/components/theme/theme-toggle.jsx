"use client";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "./theme-provider";

function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="theme-toggle"
      disabled={!mounted}
    >
      <span className="theme-toggle-track" data-theme-active={isDark ? "dark" : "light"}>
        <span className="theme-toggle-icon theme-toggle-icon--sun" aria-hidden>
          <BsSunFill size={14} />
        </span>
        <span className="theme-toggle-icon theme-toggle-icon--moon" aria-hidden>
          <BsMoonStarsFill size={13} />
        </span>
        <span className="theme-toggle-knob" />
      </span>
    </button>
  );
}

export default ThemeToggle;
