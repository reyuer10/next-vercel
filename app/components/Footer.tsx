interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <div
      className={`bg-[#171e2d] border-t-[0.5px] border-zinc-600 h-[50vh] text-zinc-500 text-[14px] py-4`}
    >
      <div className="h-[80%] flex justify-between  gap-x-4 w-[80%] mx-auto">
        <div className="py-4 w-[calc(100%/3)]">
          <img className=" w-[20vh]" src="/img/logo/nodex.png" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            laborum ipsam facilis veritatis doloribus tempora impedit laudantium
            aspernatur porro amet?
          </p>
        </div>
        <div className="w-[calc(100%/3)] py-4 ">
          <p className=" font-semibold tracking-wide text-white">Platform</p>
        </div>
        <div className="w-[calc(100%/3)] py-4 ">
          <p className=" font-semibold tracking-wide text-white">
            Join Our Community
          </p>
        </div>
      </div>
      <div className="h-[20%] border-t-[0.5px] border-zinc-600 flex items-center justify-center">
        <p>© 2026 NodeX. All rights reserved.</p>
      </div>
    </div>
  );
}
