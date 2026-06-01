interface AgileProps {
  isDarkMode: boolean;
}

export default function Agile({ isDarkMode }: AgileProps) {
  return (
    <div
      id="agile"
      className={`
     ${isDarkMode ? "text-white" : " text-[#181f30]"}
    h-screen w-[90%] mx-auto`}
    >
      <div className="h-[25%] flex items-end">
        <p className="font-bold text-3xl">Our Agile Development Process</p>
      </div>
      <div className=" h-[75%] py-4  flex flex-col justify-center items-center">
        <div className="h-[45%] z-10 w-full flex justify-evenly items-center">
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold text-lg">Planning</p>
            <p className="font-bold text-[72px] text-right">1</p>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold text-lg">Requirement Analysis</p>
            <p className="font-bold text-[72px] text-right">2</p>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold text-lg">Designing</p>
            <p className="font-bold text-[72px] text-right">3</p>
          </div>
        </div>
        <div className="h-[280px] absolute w-[60%] flex items-center justify-center border-4 border-dashed rounded-lg"></div>
        <div className="h-[45%] z-10 w-full flex justify-evenly items-center">
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold text-lg">Deployment</p>
            <p className="font-bold text-[72px] text-right">6</p>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold text-lg">Testing</p>
            <p className="font-bold text-[72px] text-right">5</p>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold text-lg">Implementation</p>
            <p className="font-bold text-[72px] text-right">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
