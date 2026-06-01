import { CircleCheck } from "lucide-react";
import { custom, game, network } from "../data/what-we-offer";

interface OfferProps {
  isDarkMode: boolean;
}

export default function Offer({ isDarkMode }: OfferProps) {
  return (
    <div
      id="what-we-offer"
      className={`
        ${isDarkMode ? "text-white" : "text-[#181f30]"}
        h-screen flex items-center justify-center`}
    >
      <div className="flex flex-col h-full w-full items-center">
        <div className="h-[30%] flex items-end">
          <p className="text-[36px] font-bold">What we offer</p>
        </div>
        <div className="h-[70%] flex items-center w-[90%] justify-evenly">
          <button
            className={`
                ${isDarkMode ? "bg-[#172033] " : ""}
                 border-[0.5px] border-gray-600 backdrop-blur-2xl cursor-pointer transition-all hover:scale-105 flex flex-col space-y-4 text-left h-[400px] w-[300px] p-4 rounded-2xl`}
          >
            <p className=" font-bold text-xl">
              Custom Web Application Development
            </p>
            <p
              className={`h-[1px] w-full ${isDarkMode ? "bg-zinc-700" : ""}`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #d4d4d8 0, #d4d4d8 6px, transparent 6px, transparent 8px)",
              }}
            ></p>
            <div className="text-[14px] space-y-2">
              {custom.map((c) => {
                return (
                  <div key={c.id} className=" flex items-start space-x-4">
                    <CircleCheck
                      className="shrink-0"
                      color={isDarkMode ? "#cac6b1" : "#172033"}
                      height={20}
                      width={20}
                      strokeWidth={1.5}
                    />
                    <p className="wrap-break-word leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </button>
          <button
            className={`
                ${isDarkMode ? "bg-[#172033] " : ""}
                 border-[0.5px] border-gray-600 backdrop-blur-2xl cursor-pointer transition-all hover:scale-105 flex flex-col space-y-4 text-left h-[400px] w-[300px] p-4 rounded-2xl`}
          >
            <p className=" font-bold text-xl">Gaming Systems Development</p>
            <p
              className={`h-[1px] w-full ${isDarkMode ? "bg-zinc-700" : ""}`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #d4d4d8 0, #d4d4d8 6px, transparent 6px, transparent 8px)",
              }}
            ></p>
            <div className="text-[14px] space-y-2">
              {game.map((c) => {
                return (
                  <div key={c.id} className=" flex items-start space-x-4">
                    <CircleCheck
                      className="shrink-0"
                      color={isDarkMode ? "#cac6b1" : "#172033"}
                      height={20}
                      width={20}
                      strokeWidth={1.5}
                    />
                    <p className="wrap-break-word leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </button>
          <button
            className={`
                ${isDarkMode ? "bg-[#172033] " : ""}
                 border-[0.5px] border-gray-600 backdrop-blur-2xl cursor-pointer transition-all hover:scale-105 flex flex-col space-y-4 text-left h-[400px] w-[300px] p-4 rounded-2xl`}
          >
            <p className=" font-bold text-xl">Network & Infrastructure</p>
            <p
              className={`h-[1px] w-full ${isDarkMode ? "bg-zinc-700" : ""}`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #d4d4d8 0, #d4d4d8 6px, transparent 6px, transparent 8px)",
              }}
            ></p>
            <div className="text-[14px] space-y-2">
              {network.map((c) => {
                return (
                  <div key={c.id} className=" flex items-start space-x-4">
                    <CircleCheck
                      className="shrink-0"
                      color={isDarkMode ? "#cac6b1" : "#172033"}
                      height={20}
                      width={20}
                      strokeWidth={1.5}
                    />
                    <p className="wrap-break-word leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </button>
          {/* <button className=" bg-[#172033] border-[0.5px] border-blue-400 backdrop-blur-2xl cursor-pointer transition-all hover:scale-105 flex text-left h-[400px] w-[300px] p-4 rounded-2xl">
              <p className=" font-bold text-white text-xl">Modern UI/UX</p>
            </button>
            <button className=" bg-[#172033] border-[0.5px] border-blue-400 backdrop-blur-2xl cursor-pointer transition-all hover:scale-105 flex text-left h-[400px] w-[300px] p-4 rounded-2xl">
              <p className=" font-bold text-white text-xl">
                Scalable Infrastructure
              </p>
            </button>
            <button className=" bg-[#172033] border-[0.5px] border-blue-400 backdrop-blur-2xl cursor-pointer transition-all hover:scale-105 flex text-left h-[400px] w-[300px] p-4 rounded-2xl">
              <p className=" font-bold text-white text-xl">
                Specialized Solutions
              </p>
            </button> */}
        </div>
      </div>
    </div>
  );
}
