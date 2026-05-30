import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  handleToggle: () => void;
}

export default function Header({ isDarkMode, handleToggle }: HeaderProps) {
  return (
    <div
      className={`${isDarkMode ? "bg-[#172033]" : "bg-white"} flex items-center justify-between px-4 z-10  fixed h-[100px] w-full shadow-md`}
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
      <div className="space-x-8">
        <button
          onClick={() => {
            const el = document.getElementById("what-we-offer");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`
            text-[14px] font-medium cursor-pointer
            ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}`}
        >
          What we offer
        </button>
        <button
          onClick={() => {
            const el = document.getElementById("our-recent-work");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`
            text-[14px] font-medium cursor-pointer
            ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}`}
        >
          Our recent work
        </button>
        <button
          onClick={() => {
            const el = document.getElementById("our-recent-work");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`
            text-[14px] font-medium cursor-pointer
            ${isDarkMode ? "text-zinc-400" : "text-[#172033]"}`}
        >
          Our Agile Development Process
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={handleToggle} className=" cursor-pointer">
          {isDarkMode ? <Sun /> : <Moon color="#172033" strokeWidth={1.5} />}
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
