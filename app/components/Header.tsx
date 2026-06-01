"use client";

import { ChevronDown, Moon, Sun } from "lucide-react";
import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { usePathname, useRouter } from "next/navigation";
import { exploreData } from "../data/explore";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isExploreHover, setIsExploreHover] = useState(false);
  const exploreCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openExploreMenu = () => {
    if (exploreCloseTimer.current) {
      clearTimeout(exploreCloseTimer.current);
      exploreCloseTimer.current = null;
    }
    setIsExploreHover(true);
  };

  const closeExploreMenu = () => {
    exploreCloseTimer.current = setTimeout(() => {
      setIsExploreHover(false);
    }, 120);
  };

  const handleScrollPage = (locatePathName: string) => {
    if (path !== "/") {
      router.push("/");
      const timeOut = setTimeout(() => {
        const el = document.getElementById(locatePathName);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);

      return () => clearTimeout(timeOut);
    }
    const el = document.getElementById(locatePathName);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${isDarkMode ? "bg-[#172033]" : "bg-white"} flex items-center justify-between px-4 z-20  fixed h-[100px] w-full shadow-md`}
    >
      <button
        onClick={() => {
          const el = document.getElementById("main");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className=" cursor-pointer"
      >
        {isDarkMode ? (
          <img className="w-[15vh]" src="/img/logo/nodex.png" alt="" />
        ) : (
          <img className="w-[15vh]" src="/img/logo/nodex_dark.png" alt="" />
        )}
      </button>
      <div className="flex items-center space-x-8">
        <button
          onClick={() => handleScrollPage("what-we-offer")}
          className={`
            text-[14px] font-medium cursor-pointer
            ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}`}
        >
          What we offer
        </button>
        <button
          onClick={() => handleScrollPage("our-recent-work")}
          className={`
            text-[14px] font-medium cursor-pointer
            ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}`}
        >
          Our recent work
        </button>
        <button
          onClick={() => handleScrollPage("agile")}
          className={`
            text-[14px] font-medium cursor-pointer
            ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}`}
        >
          Our Agile Development Process
        </button>
        <div
          onMouseEnter={openExploreMenu}
          onMouseLeave={closeExploreMenu}
          className={`
            group relative text-[14px] flex items-center space-x-2 font-medium cursor-pointer
            ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}`}
        >
          <p>Explore</p>
          <ChevronDown
            className={`transition-transform duration-200 ${isExploreHover ? "rotate-180" : ""}`}
            size={20}
            strokeWidth={2.3}
          />
          <div
            onMouseEnter={openExploreMenu}
            onMouseLeave={closeExploreMenu}
            className={`
            ${isExploreHover ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}
            absolute left-0 top-full mt-3 w-[320px] rounded-xl border border-gray-200 bg-white p-2 text-[14px] shadow-xl transition-all duration-200 z-50`}
          >
            {exploreData.map((p) => {
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    router.push(p.path);
                    setIsExploreHover(false);
                  }}
                  className="block w-full text-left cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100"
                >
                  <p className=" font-bold">{p.primaryTitle}</p>
                  <p className="text-[12px] text-gray-500">
                    {p.secondaryTitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className=" cursor-pointer">
          {isDarkMode ? (
            <Sun color="#b5ad9e" />
          ) : (
            <Moon color="#172033" strokeWidth={1.5} />
          )}
        </button>
        <button
          className={`${isDarkMode ? "bg-[#cbc7b0] text-[#172033]" : "bg-[#172033] text-white"} font-semibold cursor-pointer text-[14px] px-4 py-2 rounded-lg  `}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
