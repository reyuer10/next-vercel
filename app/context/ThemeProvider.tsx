"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem("dark-mode", JSON.stringify(!prev));
      return !prev;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved) setIsDarkMode(JSON.parse(saved));
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
