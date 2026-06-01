"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleThemeMode = () => {
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
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
