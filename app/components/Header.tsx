"use client";

import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { usePathname, useRouter } from "next/navigation";
import { exploreData } from "../data/explore";

const navItems = [
  { label: "What we offer", id: "what-we-offer" },
  { label: "Our recent work", id: "our-recent-work" },
  // { label: "Our Agile Development Process", id: "agile" },
];

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement | null>(null);

  // Close the Explore dropdown on outside click, and everything on Escape
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(e.target as Node)
      ) {
        setIsExploreOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExploreOpen(false);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setIsExploreOpen(false);
    setIsMobileOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeMenus();
    const go = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    if (path !== "/") {
      router.push("/");
      setTimeout(go, 500);
      return;
    }
    go();
  };

  const goToPage = (target: string) => {
    closeMenus();
    router.push(target);
  };

  const bg = isDarkMode ? "bg-[#172033]" : "bg-white";
  const text = isDarkMode ? "text-zinc-400" : "text-[#172033]";
  const divider = isDarkMode ? "border-zinc-700" : "border-gray-200";
  const hover = isDarkMode ? "hover:bg-[#1d2940]" : "hover:bg-gray-100";
  const subText = isDarkMode ? "text-zinc-500" : "text-gray-500";
  const contactBtn = isDarkMode
    ? "bg-[#cbc7b0] text-[#172033]"
    : "bg-[#172033] text-white";

  return (
    <header className={`fixed left-0 top-0 z-10 w-full shadow-md ${bg}`}>
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:h-[100px] md:px-6">
        <button
          type="button"
          onClick={() => scrollToSection("main")}
          className="shrink-0 cursor-pointer"
          aria-label="Go to top"
        >
          <img
            className="h-9 w-auto md:h-12"
            src={
              isDarkMode ? "/img/logo/nodex.png" : "/img/logo/nodex_dark.png"
            }
            alt="nXde"
          />
        </button>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer text-[14px] font-medium ${text}`}
            >
              {item.label}
            </button>
          ))}

          <div ref={exploreRef} className="relative">
            <button
              type="button"
              onMouseEnter={() => setIsExploreOpen(true)}
              onMouseLeave={() => setIsExploreOpen(false)}
              aria-expanded={isExploreOpen}
              aria-haspopup="true"
              className={`flex cursor-pointer items-center gap-2 text-[14px] font-medium ${text}`}
            >
              Explore
              <ChevronDown
                className={`transition-transform duration-200 ${isExploreOpen ? "rotate-180" : ""}`}
                size={20}
                strokeWidth={2.3}
              />
            </button>

            <div
              className={`absolute right-0 top-full z-50 mt-3 w-[320px] rounded-xl border p-2 text-[14px] shadow-xl transition-all duration-200
                ${bg} ${divider}
                ${isExploreOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
            >
              {exploreData.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  tabIndex={isExploreOpen ? 0 : -1}
                  onClick={() => goToPage(p.path)}
                  className={`block w-full cursor-pointer rounded-lg px-3 py-2 text-left ${hover} ${isDarkMode ? "text-zinc-200" : "text-[#172033]"}`}
                >
                  <p className="font-bold">{p.primaryTitle}</p>
                  <p className={`text-[12px] ${subText}`}>{p.secondaryTitle}</p>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="cursor-pointer p-1"
          >
            {isDarkMode ? (
              <Sun color="#b5ad9e" />
            ) : (
              <Moon color="#172033" strokeWidth={1.5} />
            )}
          </button>

          <button
            type="button"
            className={`hidden cursor-pointer rounded-lg px-4 py-2 text-[14px] font-semibold sm:block ${contactBtn}`}
          >
            Contact Us
          </button>

          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            className={`cursor-pointer p-1 lg:hidden ${text}`}
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet panel */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          className={`absolute left-0 top-full max-h-[calc(100dvh-4rem)] w-full overflow-y-auto border-t px-4 pb-6 pt-2 shadow-lg md:max-h-[calc(100dvh-100px)] lg:hidden ${bg} ${divider}`}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`w-full cursor-pointer border-b py-3 text-left text-base font-medium ${divider} ${text}`}
              >
                {item.label}
              </button>
            ))}

            <p
              className={`pb-1 pt-4 text-xs font-semibold tracking-wide ${subText}`}
            >
              Explore
            </p>
            {exploreData.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goToPage(p.path)}
                className={`w-full cursor-pointer rounded-lg px-2 py-2 text-left ${hover}`}
              >
                <p
                  className={`font-bold ${isDarkMode ? "text-zinc-200" : "text-[#172033]"}`}
                >
                  {p.primaryTitle}
                </p>
                <p className={`text-xs ${subText}`}>{p.secondaryTitle}</p>
              </button>
            ))}

            <button
              type="button"
              className={`mt-5 w-full cursor-pointer rounded-lg px-4 py-3 text-base font-semibold sm:hidden ${contactBtn}`}
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
