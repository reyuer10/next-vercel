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
              <p className="">Technologies & Tools</p>
            </div>
            <div className=" p-4 space-y-18 ">
              <div className="flex items-center justify-evenly">
                <img height={70} width={70} src="/logo/c_sharp.png" alt="" />
                <img height={70} width={70} src="/logo/js.png" alt="" />
                <img height={70} width={70} src="/logo/php.png" alt="" />
                <img height={70} width={70} src="/logo/python.png" alt="" />
                <img height={70} width={70} src="/logo/react.png" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img height={70} width={70} src="/logo/typescript.png" alt="" />
                <img height={70} width={70} src="/logo/prisma.png" alt="" />
                <img height={70} width={70} src="/logo/next.png" alt="" />
                <img height={70} width={70} src="/logo/node_js.png" alt="" />
                <img height={70} width={70} src="/logo/express.webp" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img
                  height={70}
                  width={70}
                  src="/logo/postgre-sql.png"
                  alt=""
                />
                <img height={70} width={70} src="/logo/mysql_v2.png" alt="" />
                <img height={90} width={90} src="/logo/mssql.svg" alt="" />
                <img height={70} width={70} src="/logo/github.png" alt="" />
                <img height={70} width={70} src="/logo/vercel.png" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img height={70} width={70} src="/logo/linux.png" alt="" />
                <img height={70} width={70} src="/logo/vmware.png" alt="" />
                <img height={70} width={70} src="/logo/docker.png" alt="" />
                <img height={70} width={70} src="/logo/npm.svg" alt="" />
                <img height={70} width={70} src="/logo/pnpm.png" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img
                  height={70}
                  width={70}
                  src="/logo/jsonwebtoken.svg"
                  alt=""
                />
                <img height={70} width={70} src="/logo/nginx.png" alt="" />
                <img
                  height={100}
                  width={100}
                  src="/logo/hostinger.png"
                  alt=""
                />
                <img height={70} width={70} src="/logo/axios.png" alt="" />
                <img height={70} width={70} src="/logo/tailwind.png" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img height={70} width={70} src="/logo/ubuntu.png" alt="" />
                <img height={70} width={70} src="/logo/winscp.png" alt="" />
                <img height={70} width={70} src="/logo/shadcn.png" alt="" />
                <img height={70} width={70} src="/logo/chatgpt.webp" alt="" />
                <img height={70} width={70} src="/logo/claude.png" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img height={70} width={70} src="/logo/manus.png" alt="" />
                <img height={70} width={70} src="/logo/zustand.png" alt="" />
                <img height={70} width={70} src="/logo/xampp.png" alt="" />
                <img height={90} width={90} src="/logo/phpmyadmin.png" alt="" />
                <img height={70} width={70} src="/logo/redux.png" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img height={70} width={70} src="/logo/lucid.svg" alt="" />
                <img height={70} width={70} src="/logo/vscode.webp" alt="" />
                <img height={70} width={70} src="/logo/vs-studio.png" alt="" />
                <img height={70} width={70} src="/logo/svg-repo.webp" alt="" />
                <img height={70} width={70} src="/logo/git.svg" alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <img height={70} width={70} src="/logo/postman.svg" alt="" />
                <img height={70} width={70} src="/logo/zod.webp" alt="" />
                <img height={70} width={70} src="/logo/react-native.png" />
                <img height={70} width={70} src="/logo/vite.png" alt="" />
                <img height={70} width={70} src="/logo/css.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
