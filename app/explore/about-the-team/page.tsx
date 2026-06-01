"use client";

import Footer from "@/app/components/Footer";
import { useTheme } from "@/app/context/ThemeProvider";

export default function page() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`
    h-screen
      ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}
    `}
    >
      <div className="h-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="h-[100px]"></div>
          <div className="space-y-12 mb-20">
            <div className=" h-[100px] flex items-end justify-center text-[36px] font-bold">
              <p className="">About The Team</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
