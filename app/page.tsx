"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import RecentWork from "./components/RecentWork";

export default function page() {
  // Primary Color - #1d2737
  //

  const [show, setShow] = useState({
    mainTitle: false,
    mainDesc: false,
    sideDescription: false,
    isDarkMode: true,
  });

  const handleToggleThemeMode = () => {
    setShow((prevShow) => {
      localStorage.setItem("dark-mode", JSON.stringify(!prevShow.isDarkMode));

      return {
        ...prevShow,
        isDarkMode: !prevShow.isDarkMode,
      };
    });
  };

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
    ${show.isDarkMode ? "bg-linear-to-b from-[#151c27] via-[#181f30] to-[#151c27] text-[#cac6b1]" : ""}`}
    >
      <Header
        isDarkMode={show.isDarkMode}
        handleToggle={handleToggleThemeMode}
      />
      <div
        id="main"
        className="h-screen flex items-center justify-center relative"
      >
        <img
          className={`w-[80vh] transition-opacity duration-700
          ${show.mainTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
          src={
            show.isDarkMode ? "/img/logo/nodex.png" : "/img/logo/nodex_dark.png"
          }
        />
        <p
          className={` transition-opacity duration-300
            ${show.mainDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            ${show.isDarkMode ? "" : "text-[#181f30]"}
             absolute bottom-8 text-2xl tracking-widest`}
        >
          SYSTEMS & IT SOLUTIONS
        </p>
        <p
          role="button"
          onClick={() => {
            const el = document.getElementById("what-we-offer");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`
            transition-opacity duration-300
            ${show.sideDescription ? " opacity-100 animate-pulse" : "opacity-0"}   absolute -right-14 bottom-32 cursor-pointer  -rotate-90`}
        >
          Scroll down to Explore
        </p>
      </div>
      <Offer isDarkMode={show.isDarkMode} />
      <RecentWork isDarkMode={show.isDarkMode} />
      <Footer isDarkMode={show.isDarkMode} />
    </div>
  );
}
