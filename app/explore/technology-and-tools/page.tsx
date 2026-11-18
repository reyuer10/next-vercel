"use client";

import Footer from "@/app/components/Footer";
import { useTheme } from "@/app/context/ThemeProvider";

interface Tech {
  name: string;
  logo: string;
  size?: number;
}

interface TechGroup {
  title: string;
  items: Tech[];
}

const groups: TechGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", logo: "/logo/typescript.png" },
      { name: "JavaScript", logo: "/logo/js.png" },
      { name: "C#", logo: "/logo/c_sharp.png" },
      { name: "PHP", logo: "/logo/php.png" },
      { name: "Python", logo: "/logo/python.png" },
      { name: "CSS", logo: "/logo/css.png" },
    ],
  },
  {
    title: "Frameworks and libraries",
    items: [
      { name: "React", logo: "/logo/react.png" },
      { name: "Next.js", logo: "/logo/next.png" },
      { name: "React Native", logo: "/logo/react-native.png" },
      { name: "Node.js", logo: "/logo/node_js.png" },
      { name: "Express", logo: "/logo/express.webp" },
      { name: "Tailwind CSS", logo: "/logo/tailwind.png" },
      { name: "shadcn/ui", logo: "/logo/shadcn.png" },
      { name: "Lucide", logo: "/logo/lucid.svg" },
      { name: "Redux", logo: "/logo/redux.png" },
      { name: "Zustand", logo: "/logo/zustand.png" },
      { name: "Zod", logo: "/logo/zod.webp" },
      { name: "Axios", logo: "/logo/axios.png" },
      { name: "Prisma", logo: "/logo/prisma.png" },
      { name: "JSON Web Token", logo: "/logo/jsonwebtoken.svg" },
      { name: "Vite", logo: "/logo/vite.png" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", logo: "/logo/postgre-sql.png" },
      { name: "MySQL", logo: "/logo/mysql_v2.png" },
      { name: "SQL Server", logo: "/logo/mssql.svg", size: 64 },
      { name: "phpMyAdmin", logo: "/logo/phpmyadmin.png", size: 64 },
    ],
  },
  {
    title: "Servers and hosting",
    items: [
      { name: "Linux", logo: "/logo/linux.png" },
      { name: "Ubuntu", logo: "/logo/ubuntu.png" },
      { name: "VMware", logo: "/logo/vmware.png" },
      { name: "Docker", logo: "/logo/docker.png" },
      { name: "Nginx", logo: "/logo/nginx.png" },
      { name: "Hostinger", logo: "/logo/hostinger.png", size: 64 },
      { name: "Vercel", logo: "/logo/vercel.png" },
    ],
  },
  {
    title: "Developer tools",
    items: [
      { name: "Git", logo: "/logo/git.svg" },
      { name: "GitHub", logo: "/logo/github.png" },
      { name: "VS Code", logo: "/logo/vscode.webp" },
      { name: "Visual Studio", logo: "/logo/vs-studio.png" },
      { name: "Postman", logo: "/logo/postman.svg" },
      { name: "WinSCP", logo: "/logo/winscp.png" },
      { name: "XAMPP", logo: "/logo/xampp.png" },
      { name: "npm", logo: "/logo/npm.svg" },
      { name: "pnpm", logo: "/logo/pnpm.png" },
      { name: "SVG Repo", logo: "/logo/svg-repo.webp" },
    ],
  },
  {
    title: "AI assistants",
    items: [
      { name: "ChatGPT", logo: "/logo/chatgpt.webp" },
      { name: "Claude", logo: "/logo/claude.png" },
      { name: "Manus", logo: "/logo/manus.png" },
    ],
  },
];

export default function Page() {
  const { isDarkMode } = useTheme();

  const totalTechnologies = groups.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  const theme = {
    page: isDarkMode
      ? "bg-[#111827] text-[#F3F4F6]"
      : "bg-[#F8F9FC] text-[#172033]",

    heading: isDarkMode ? "text-[#F3F4F6]" : "text-[#172033]",

    muted: isDarkMode ? "text-[#9CA9BD]" : "text-[#697386]",

    card: isDarkMode
      ? "bg-[#192235] border-[#29364D]"
      : "bg-white border-[#E5E9F0]",

    item: isDarkMode
      ? "bg-[#202C41] border-[#344158] hover:border-[#D9BB63]"
      : "bg-[#FAFBFD] border-[#E9EDF3] hover:border-[#B99643]",

    divider: isDarkMode ? "border-[#344158]" : "border-[#EDF0F4]",

    logoBorder: isDarkMode ? "border-[#E5E7EB]" : "border-[#E5E7EB]",
  };

  const gold = isDarkMode ? "#D9BB63" : "#A98428";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme.page}`}
    >
      {/* Fixed Header Spacer */}
      <div className="h-16 md:h-[100px]" />

      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <div
            className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: gold }}
          >
            <span className="h-[2px] w-7" style={{ backgroundColor: gold }} />
            Our technology stack
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h1
                className={`text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${theme.heading}`}
              >
                Technologies
                <br />
                <span style={{ color: gold }}>& Tools.</span>
              </h1>

              <p
                className={`mt-5 max-w-xl text-base leading-8 sm:text-lg ${theme.muted}`}
              >
                The technologies, frameworks, and tools we use to design,
                develop, deploy, and maintain reliable software solutions.
              </p>
            </div>

            {/* Technology Count */}
            <div
              className={`flex w-fit items-center gap-4 rounded-xl border px-5 py-4 ${theme.card}`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold"
                style={{
                  backgroundColor: isDarkMode ? "#3A3424" : "#F7F0DC",
                  color: gold,
                }}
              >
                {totalTechnologies}
              </div>

              <div>
                <p className={`text-2xl font-bold ${theme.heading}`}>
                  {totalTechnologies}
                </p>
                <p className={`text-xs ${theme.muted}`}>Technologies & tools</p>
              </div>
            </div>
          </div>

          <div
            className="mt-10 h-[2px] w-full"
            style={{
              background: `linear-gradient(to right, ${gold}, transparent)`,
            }}
          />
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {groups.map((group, index) => {
            const groupId = `tech-${index}`;

            return (
              <section
                key={group.title}
                aria-labelledby={groupId}
                className={`rounded-2xl border p-5 shadow-sm transition-colors duration-300 sm:p-7 ${theme.card}`}
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <h2
                      id={groupId}
                      className={`text-xl font-bold tracking-tight sm:text-2xl ${theme.heading}`}
                    >
                      {group.title}
                    </h2>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.muted}`}
                    style={{
                      backgroundColor: isDarkMode ? "#27344A" : "#F1F3F7",
                    }}
                  >
                    {String(group.items.length).padStart(2, "0")} items
                  </span>
                </div>

                <div className={`mb-6 border-b ${theme.divider}`} />

                {/* Technology Items */}
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((tech) => (
                    <li key={tech.name}>
                      <div
                        className={`group flex min-h-[76px] items-center gap-3 rounded-xl border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${theme.item}`}
                      >
                        {/* Logo */}
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-white p-1.5 ${theme.logoBorder}`}
                        >
                          <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            loading="lazy"
                            style={{
                              maxHeight: tech.size
                                ? Math.min(tech.size, 36)
                                : 32,
                            }}
                            className="h-auto w-auto max-w-full object-contain"
                          />
                        </div>

                        {/* Technology Name */}
                        <span
                          className={`text-xs font-semibold leading-5 sm:text-sm ${theme.heading}`}
                        >
                          {tech.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center sm:mt-16">
          <p className={`text-sm leading-7 ${theme.muted}`}>
            Continuously learning, exploring, and adopting technologies to build
            better software.
          </p>

          <div
            className="mx-auto mt-5 h-1 w-12 rounded-full"
            style={{ backgroundColor: gold }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
