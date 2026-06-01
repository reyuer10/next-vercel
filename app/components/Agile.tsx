interface AgileProps {
  isDarkMode: boolean;
}

export default function Agile({ isDarkMode }: AgileProps) {
  return (
    <div
      id="agile"
      className={`
     ${isDarkMode ? "text-white" : " text-[#181f30]"}
    h-screen w-[90%] text-[14px] mx-auto`}
    >
      <div className="h-[25%] flex items-end justify-center ">
        <p className="font-bold text-3xl text-center">
          Our Agile Development Process
        </p>
      </div>
      <div className=" h-[75%] py-4  flex flex-col justify-center items-center">
        <div className="h-[45%] z-10 w-full flex justify-evenly items-center">
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"}
            h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold">Planning</p>
            <div>
              <p className="font-bold float-right text-[20px] h-[40px] w-[40px] flex items-center justify-center rounded-full text-white bg-[#181f30]">
                1
              </p>
            </div>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold">Requirement Analysis</p>
            <p className="font-bold text-right">2</p>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold">Designing</p>
            <p className="font-bold text-right">3</p>
          </div>
        </div>
        <div className="h-[280px] absolute w-[60%] flex items-center justify-center border-4 border-dashed rounded-lg"></div>
        <div className="h-[45%] z-10 w-full flex justify-evenly items-center">
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold">Deployment</p>
            <p className="font-bold text-right">6</p>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold">Testing</p>
            <p className="font-bold text-right">5</p>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#181f30]" : "bg-white"} h-50 w-75 flex flex-col justify-between cursor-pointer rounded-lg p-4 border-[0.5px] border-dashed`}
          >
            <p className="font-bold">Implementation</p>
            <p className="font-bold text-right">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
