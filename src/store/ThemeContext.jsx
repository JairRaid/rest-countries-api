import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkTheme");
    return storedTheme === null
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : JSON.parse(storedTheme);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  function toggleDarkMode() {
    localStorage.setItem("darkTheme", !darkMode);
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkTheme", JSON.stringify(newValue));
      return newValue;
    });
  }

  const ctxValue = { darkMode, toggleDarkMode };
  return <ThemeContext value={ctxValue}>{children}</ThemeContext>;
};

export const useTheme = () => useContext(ThemeContext);
