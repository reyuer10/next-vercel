
interface RecentWorkProps {
  isDarkMode: boolean;
}

export default function RecentWork({ isDarkMode }: RecentWorkProps) {
  return (
    <>
      <div
        id="our-recent-work"
        className={`
        h-screen p-4
        ${isDarkMode ? "text-white" : " text-[#181f30]"}`}
      >
        <div className="flex items-center mx-auto w-[80%] h-[50%]">
          <p className="text-[36px] font-semibold">Our Recent Work</p>
        </div>
        <div className="h-[50%] w-[80%] mx-auto">
          <div className="h-[85%] flex items-center">
            <div className="w-[65%] pr-16 space-y-4">
              <p className="text-xl font-semibold">
                Baccarat Scoreboard System
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem excepturi neque amet maxime. Inventore veritatis
                accusantium voluptas facere eligendi, magnam nisi dolore ratione
                aliquam corrupti magni ut in omnis est quis assumenda nobis
                mollitia id rerum ipsa dicta quod. Minus architecto consequatur
                consectetur dolor repellendus nostrum quidem delectus fugit
                expedita?
              </p>
            </div>
            <div className="w-[35%]">
              <img
                className={`w-[50vh] transition-opacity duration-700`}
                src="/system/baccarat.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`
        h-screen p-4
        ${isDarkMode ? "text-white" : " text-[#181f30]"}`}
      >
        <div className="h-[50%] w-[80%] mx-auto">
          <div className="h-[85%] flex items-center">
            <div className="w-[35%]">
              {/* <img
                className={`w-[50vh] transition-opacity duration-700`}
                src="/system/baccarat.png"
              /> */}
            </div>
            <div className="w-[65%] pr-16 space-y-4 text-right">
              <p className="text-xl font-semibold">
                Human Resources Information System
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem excepturi neque amet maxime. Inventore veritatis
                accusantium voluptas facere eligendi, magnam nisi dolore ratione
                aliquam corrupti magni ut in omnis est quis assumenda nobis
                mollitia id rerum ipsa dicta quod. Minus architecto consequatur
                consectetur dolor repellendus nostrum quidem delectus fugit
                expedita?
              </p>
            </div>
          </div>
        </div>
        {/* <div className="h-[50%] w-[80%] mx-auto border">
          <div className="h-[85%] flex items-center">
            <div className="w-[65%] pr-16 space-y-4">
              <p className="text-xl font-semibold">
                Human Resources Information System
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem excepturi neque amet maxime. Inventore veritatis
                accusantium voluptas facere eligendi, magnam nisi dolore ratione
                aliquam corrupti magni ut in omnis est quis assumenda nobis
                mollitia id rerum ipsa dicta quod. Minus architecto consequatur
                consectetur dolor repellendus nostrum quidem delectus fugit
                expedita?
              </p>
            </div>
            <div className="w-[35%]">
              <img
                className={`w-[50vh] transition-opacity duration-700`}
                src="/system/baccarat.png"
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
