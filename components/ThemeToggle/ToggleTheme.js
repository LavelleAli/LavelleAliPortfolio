"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ToggleTheme = () => {
  function toggleTheme() {
    const html = document.documentElement;
    const next = html.dataset.theme === "light" ? "dark" : "light";
    html.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="fixed flex items-center justify-center space-x-1 top-4 right-4 z-20 w-24 h-8 rounded-full border border-line bg-surface text-sun hover:border-skyblue transition-colors"
    >
      <FontAwesomeIcon icon={faMoon} className="text-xs light:inline-block" />
      <span
        className={`relative flex w-4 h-4 bg-white border rounded-full transition-transform duration-300  light:translate-x-5.5 translate-x-[-20.5px]`}
      ></span>
      <FontAwesomeIcon icon={faSun} className={`text-xs`} />
    </button>
  );
};

export default ToggleTheme;
