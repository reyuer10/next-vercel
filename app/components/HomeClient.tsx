"use client";

import { useEffect, useState } from "react";
import Offer from "./Offer";
import RecentWork from "./RecentWork";
import Agile from "./Agile";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeProvider";

export default function HomeClient() {
  const { isDarkMode, toggleTheme } = useTheme();
  // Primary Color - #1d2737
  //

  const [show, setShow] = useState({
    mainTitle: false,
    mainDesc: false,
    sideDescription: false,
  });

  useEffect(() => {
    const timerTitle = setTimeout(() => {
      setShow((prevShow) => ({ ...prevShow, mainTitle: true }));
    }, 1000);

    const timerMainDesc = setTimeout(() => {
      setShow((prevShow) => ({ ...prevShow, mainDesc: true }));
    }, 1500);

    const timerSideDesc = setTimeout(() => {
      setShow((prevShow) => ({ ...prevShow, sideDescription: true }));
    }, 3000);

    return () => {
      clearTimeout(timerTitle);
      clearTimeout(timerMainDesc);
      clearTimeout(timerSideDesc);
    };
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark-mode");
    if (isDarkMode) {
      setShow((prevShow) => ({
        ...prevShow,
        isDarkMode: JSON.parse(isDarkMode),
      }));
    }
  }, []);

  return (
    // bg-[url('/bg/sample_1.png')] bg-cover bg-center
    //
    <div
      className={`
    h-full w-full fixed overflow-y-scroll transition-colors
    ${isDarkMode ? "bg-linear-to-b from-[#151c27] via-[#181f30] to-[#151c27] text-[#cac6b1]" : ""}`}
    >
      <div id="main" className="h-screen flex items-center justify-center">
        <img
          className={`w-[80vh] transition-opacity duration-700
          ${show.mainTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
          src={isDarkMode ? "/img/logo/nodex.png" : "/img/logo/nodex_dark.png"}
        />
        <p
          className={` transition-opacity duration-300
            ${show.mainDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            ${isDarkMode ? "" : "text-[#181f30]"}
             absolute bottom-8 text-2xl tracking-widest`}
        >
          SYSTEMS & IT SOLUTIONS
        </p>
        <div className="absolute -right-53 bottom-60 overflow-hidden -rotate-90 bg-[#181f30] text-[#cac6b1] cursor-pointer ">
          <p
            role="button"
            onClick={() => {
              const el = document.getElementById("what-we-offer");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`
            transition-opacity duration-300 w-[500px] h-[50px] px-4 flex items-center
            ${show.sideDescription ? " opacity-100 animate-pulse" : "opacity-0"}     `}
          >
            Scroll down to Explore
          </p>
        </div>
      </div>

      <Offer isDarkMode={isDarkMode} />
      <RecentWork isDarkMode={isDarkMode} />
      <Agile isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}
