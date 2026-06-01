import { facebookIcon } from "../icon/footer";

export default function Footer() {
  return (
    <div
      className={`bg-[#171e2d] border-t-[0.5px] border-zinc-600 h-[50vh] text-zinc-500 text-[14px] py-4`}
    >
      <div className="h-[80%] flex justify-between  gap-x-8 w-[80%] mx-auto">
        <div className="py-4 w-[calc(100%/4)] space-y-4">
          <div>
            <img 
            className="h-[15vh]"
            src="/img/logo/nodex.png" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              laborum ipsam facilis veritatis doloribus tempora impedit
              laudantium aspernatur porro amet?
            </p>
          </div>
        </div>
        <div className="w-[calc(100%/4)] flex flex-col items-start py-4 space-y-3">
          <button className=" cursor-pointer font-semibold tracking-wide text-white">
            Home
          </button>
          <button className=" cursor-pointer">What we offer</button>
          <button className=" cursor-pointer">Our recent work</button>
          <button className=" cursor-pointer">
            Our Agile Development Process
          </button>
        </div>
        <div className="w-[calc(100%/4)] py-4 ">
          <p className=" font-semibold tracking-wide text-white">Platform</p>
        </div>
        <div className="w-[calc(100%/4)] py-4 ">
          <p className=" font-semibold tracking-wide text-white">
            Join Our Community
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://www.facebook.com/nodexsystems")
            }
            className="cursor-pointer"
          >
            {facebookIcon}
          </button>
        </div>
      </div>
      <div className="h-[20%] border-t-[0.5px] border-zinc-600 flex items-center justify-center">
        <p>© 2026 NodeX. All rights reserved.</p>
      </div>
    </div>
  );
}
