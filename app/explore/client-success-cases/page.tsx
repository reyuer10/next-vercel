
"use client";

import Footer from "@/app/components/Footer";
import { useTheme } from "@/app/context/ThemeProvider";
import type { ReactNode } from "react";

interface SuccessCase {
  client: string;
  system: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  logo?: ReactNode;
}

/* =========================================
   DRAGON ROYALE LOGO
========================================= */

function DragonRoyaleLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 622 432"
      role="img"
      aria-label="Dragon Royale logo"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        transform="translate(0 293.472)"
        d="M 182.024 27.31 L 182.024 0.481 L 198.469 0.481 C 209.095 0.481 216.403 4.376 216.403 13.895 C 216.403 23.464 209.095 27.311 198.469 27.311 L 182.024 27.311 Z M 198.517 22.695 C 204.672 22.695 210.586 20.771 210.586 13.896 C 210.586 7.068 204.672 5.097 198.517 5.097 L 187.506 5.097 L 187.506 22.696 L 198.517 22.696 Z M 250.325 27.31 L 243.594 18.079 L 233.015 18.079 L 233.015 27.311 L 227.533 27.311 L 227.533 0.481 L 246.141 0.481 C 253.065 0.481 256.239 5.145 256.239 9.28 C 256.239 12.597 253.978 15.916 249.458 17.358 L 256.623 27.311 L 250.323 27.311 Z M 233.016 5.097 L 233.016 13.464 L 244.843 13.464 C 248.931 13.464 250.517 11.541 250.517 9.28 C 250.517 7.068 248.931 5.097 244.843 5.097 Z M 290.594 21.925 L 273.862 21.925 L 270.448 27.311 L 264.342 27.311 L 282.227 0 L 300.114 27.311 L 294.007 27.311 Z M 276.795 17.262 L 287.612 17.262 L 282.227 8.751 Z M 326.719 17.646 L 326.719 13.031 L 341.576 13.031 C 341.672 13.608 341.721 14.281 341.721 14.858 C 341.481 22.695 333.836 27.792 323.979 27.792 C 312.343 27.792 304.795 21.973 304.795 13.799 C 304.795 5.578 312.535 0 323.785 0 C 328.69 0 333.739 0.721 337.73 2.549 L 337.73 7.501 C 334.94 6.155 331.047 4.665 324.509 4.665 C 316.718 4.665 310.611 7.693 310.611 13.799 C 310.611 19.473 316.237 23.127 323.931 23.127 C 329.652 23.127 334.461 21.396 335.614 17.646 L 326.72 17.646 Z M 369.652 27.791 C 358.065 27.791 350.276 22.214 350.276 13.896 C 350.276 5.626 358.065 0 369.652 0 C 381.24 0 389.126 5.578 389.126 13.896 C 389.126 22.215 381.576 27.792 369.652 27.792 Z M 369.652 4.664 C 361.863 4.664 356.092 8.079 356.092 13.895 C 356.092 19.762 361.912 23.175 369.652 23.175 C 377.442 23.175 383.307 19.762 383.307 13.896 C 383.307 8.078 377.394 4.665 369.652 4.665 Z M 405.478 9.521 L 405.478 27.31 L 399.997 27.31 L 399.997 0 L 426.778 18.656 L 426.778 0.481 L 432.259 0.481 L 432.259 27.792 L 405.478 9.52 Z M 75.154 137.487 L 59.442 112.881 C 56.328 113.474 52.919 113.771 49.213 113.771 L 8.894 113.771 L 8.894 137.488 L 0 137.488 L 0 54.773 L 52.475 54.773 C 72.93 54.773 83.158 69.597 83.158 84.272 C 83.158 94.648 77.822 105.025 67.594 110.213 L 85.086 137.487 Z M 8.894 61.89 L 8.894 106.657 L 51.14 106.657 C 66.409 106.657 73.82 95.687 73.82 84.273 C 73.82 73.008 66.26 61.89 51.14 61.89 Z M 159.056 138.97 C 125.555 138.97 100.207 123.257 100.207 96.131 C 100.207 69.301 125.555 53.292 159.056 53.292 C 192.409 53.292 218.053 69.004 218.053 96.131 C 218.053 123.257 192.706 138.97 159.056 138.97 Z M 159.056 60.999 C 131.336 60.999 109.546 72.71 109.546 96.131 C 109.546 119.552 131.485 131.411 159.056 131.411 C 186.777 131.411 208.715 119.552 208.715 96.131 C 208.715 72.71 186.628 60.999 159.055 60.999 Z M 273.48 92.87 L 312.911 54.773 L 324.918 54.773 L 277.632 100.726 L 277.632 137.488 L 269.33 137.488 L 269.33 100.726 L 222.192 54.773 L 234.051 54.773 Z M 396.147 113.326 L 337.298 113.326 L 321.585 137.488 L 311.653 137.488 L 366.797 53.292 L 421.939 137.487 L 411.859 137.487 Z M 342.19 105.766 L 391.255 105.766 L 366.797 68.116 Z M 441.257 137.487 L 441.257 54.774 L 450.15 54.774 L 450.15 130.075 L 518.189 130.075 L 518.189 137.487 L 441.256 137.487 Z M 538.827 137.487 L 538.827 54.774 L 621.541 54.774 L 621.541 61.889 L 547.868 61.889 L 547.868 90.646 L 609.535 90.646 L 609.535 97.91 L 547.868 97.91 L 547.868 130.225 L 621.541 130.225 L 621.541 137.488 L 538.828 137.488 Z"
      />

      <path
        fill="rgb(255, 133, 2)"
        transform="translate(198.319 0)"
        d="M 108.8 241.576 C 103.304 241.574 97.905 240.127 93.145 237.38 L 15.69 192.657 C 5.981 187.05 0 176.69 0 165.477 L 0 76.042 C 0 64.891 6 54.503 15.655 48.928 L 93.147 4.194 C 97.9 1.449 103.311 0 108.799 0 C 114.287 0 119.7 1.45 124.452 4.194 L 201.943 48.928 C 211.6 54.503 217.598 64.892 217.598 76.041 L 217.598 165.523 C 217.598 176.67 211.602 187.06 201.947 192.635 C 197.194 195.381 191.802 196.828 186.312 196.833 C 176.484 196.833 167.107 192.14 161.226 184.283 L 123.333 133.651 C 123.318 133.632 123.296 133.621 123.273 133.621 L 106.596 133.621 C 98.116 133.621 92.869 126.47 92.869 119.845 C 92.869 116.937 93.81 114.133 95.59 111.734 C 98.204 108.215 102.22 106.196 106.604 106.196 C 110.988 106.196 115.001 108.215 117.617 111.735 L 127.716 125.347 L 128.197 125.327 C 136.959 124.947 143.992 122.427 149.103 117.835 C 154.874 112.64 157.579 106.183 157.144 98.643 C 156.852 91.618 154.286 85.855 149.521 81.53 C 144.496 76.793 137.645 74.383 129.17 74.383 L 64.217 74.383 L 64.217 169.913 C 64.217 171.418 62.997 172.638 61.492 172.638 L 55.42 172.638 C 55.4 172.638 55.38 172.63 55.366 172.616 C 55.351 172.602 55.343 172.582 55.343 172.562 L 55.343 69.078 C 55.343 67.4 56.704 66.039 58.382 66.039 L 128.474 66.039 C 140.095 66.039 149.564 69.328 156.616 75.811 C 163.581 82.231 166.897 90.308 166.748 100.505 C 166.621 108.586 163.81 115.787 158.39 121.911 C 153.002 127.851 146.277 131.214 138.406 131.9 L 133.009 132.291 C 132.981 132.293 132.956 132.31 132.944 132.335 C 132.933 132.361 132.936 132.391 132.953 132.413 L 167.729 179.005 C 172.015 184.748 178.855 188.175 186.026 188.175 C 190.014 188.175 193.954 187.116 197.42 185.115 C 204.468 181.03 208.811 173.505 208.824 165.359 L 208.824 76.205 C 208.811 68.057 204.466 60.532 197.417 56.447 L 120.205 11.875 C 116.742 9.877 112.799 8.82 108.799 8.82 C 104.8 8.82 100.856 9.877 97.394 11.875 L 20.222 56.426 C 13.138 60.515 8.775 68.072 8.775 76.251 L 8.775 165.36 C 8.788 173.507 13.132 181.031 20.18 185.116 L 97.393 229.701 C 100.862 231.702 104.796 232.756 108.801 232.758 C 112.806 232.756 116.739 231.702 120.208 229.701 L 156.613 208.682 C 157.448 208.199 158.43 208.27 159.308 208.669 C 161.388 209.613 167.951 212.267 167.951 212.267 L 124.455 237.382 C 119.695 240.129 114.296 241.575 108.8 241.577 Z M 106.612 114.809 C 104.948 114.809 103.41 115.58 102.391 116.926 C 101.072 118.672 100.967 121.05 102.127 122.905 C 103.12 124.51 104.96 125.394 106.847 125.394 L 117.023 125.394 C 117.052 125.393 117.078 125.377 117.091 125.351 C 117.104 125.326 117.101 125.295 117.085 125.272 L 110.853 116.93 C 109.854 115.593 108.281 114.806 106.612 114.809 Z"
      />
    </svg>
  );
}

/* =========================================
   PROJECT DATA
========================================= */

const cases: SuccessCase[] = [
  {
    client: "Dragon Royale Casino",
    system: "Baccarat Scoreboard System",
    summary:
      "Dragon Royale needed table-side screens that show every round as it happens. We built a live scoreboard that displays results, road patterns, table limits and betting totals, and updates after each hand.",
    image: "/client/baccarat.jpeg",
    imageAlt:
      "Dragon Royale baccarat scoreboard running on a table-side screen",
    logo: <DragonRoyaleLogo className="h-14 w-auto" />,
  },
];

/* =========================================
   PAGE
========================================= */

export default function Page() {
  const { isDarkMode } = useTheme();

  const colors = {
    page: isDarkMode
      ? "bg-[#111827] text-[#F3F4F6]"
      : "bg-[#F8F9FC] text-[#172033]",

    heading: isDarkMode
      ? "text-[#F3F4F6]"
      : "text-[#172033]",

    muted: isDarkMode
      ? "text-[#9CA9BD]"
      : "text-[#697386]",

    card: isDarkMode
      ? "bg-[#192235] border-[#29364D]"
      : "bg-white border-[#E5E9F0]",

    panel: isDarkMode
      ? "bg-[#202C41]"
      : "bg-[#F5F6F9]",

    border: isDarkMode
      ? "border-[#344158]"
      : "border-[#E5E9F0]",

    gold: isDarkMode ? "#D9BB63" : "#A98428",
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${colors.page}`}
    >
      {/* Fixed Header Spacer */}
      <div className="h-16 md:h-[100px]" />

      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">

        {/* =====================================
            HERO SECTION
        ===================================== */}

        <section className="mb-14 sm:mb-20">

          <div
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: colors.gold }}
          >
            <span
              className="h-[2px] w-8"
              style={{ backgroundColor: colors.gold }}
            />
            Our portfolio
          </div>

          <div className="max-w-3xl">

            <h1
              className={`text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${colors.heading}`}
            >
              Client Success
              <br />
              <span style={{ color: colors.gold }}>
                Stories.
              </span>
            </h1>

            <p
              className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${colors.muted}`}
            >
              Real systems. Real operations. Meaningful results.
              Explore the solutions we've developed to help
              businesses improve their everyday operations.
            </p>

          </div>

          {/* Gold Divider */}
          <div
            className="mt-10 h-[2px] w-full"
            style={{
              background: `linear-gradient(to right, ${colors.gold}, transparent)`,
            }}
          />

        </section>

        {/* =====================================
            PROJECTS SECTION
        ===================================== */}

        <section aria-label="Featured projects">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: colors.gold }}
              >
                Selected work
              </p>

              <h2
                className={`mt-2 text-2xl font-bold sm:text-3xl ${colors.heading}`}
              >
                Featured Projects
              </h2>
            </div>

            <span className={`text-sm ${colors.muted}`}>
              {String(cases.length).padStart(2, "0")} Projects
            </span>

          </div>

          <div className="space-y-8">

            {cases.map((item, index) => (

              <article
                key={item.client}
                className={`group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.card}`}
              >

                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* =================================
                      PROJECT IMAGE
                  ================================= */}

                  <div className="relative min-h-[250px] overflow-hidden bg-[#151D30] sm:min-h-[350px] lg:min-h-[430px]">

                    {item.image ? (

                      <img
                        src={item.image}
                        alt={
                          item.imageAlt ??
                          `${item.client} ${item.system}`
                        }
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    ) : (

                      <div className="absolute inset-0 flex items-center justify-center">

                        <span className="text-sm text-white/50">
                          Project image coming soon
                        </span>

                      </div>

                    )}

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent" />

                    {/* Project Number */}
                    <div className="absolute bottom-5 left-5">

                      <span className="rounded-md border border-white/20 bg-black/40 px-3 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  </div>

                  {/* =================================
                      PROJECT INFORMATION
                  ================================= */}

                  <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">

                    {/* Client Logo */}
                    {item.logo && (

                      <div className="mb-8 flex h-24 w-fit min-w-32 items-center justify-center rounded-xl border border-[#E5E9F0] bg-white px-6 py-4">

                        {item.logo}

                      </div>

                    )}

                    {/* Client Name */}
                    <p
                      className="mb-3 text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.gold }}
                    >
                      Client / {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${colors.heading}`}
                    >
                      {item.client}
                    </h3>

                    {/* System */}
                    <p
                      className="mt-3 text-base font-semibold sm:text-lg"
                      style={{ color: colors.gold }}
                    >
                      {item.system}
                    </p>

                    {/* Divider */}
                    <div
                      className={`my-6 border-t ${colors.border}`}
                    />

                    {/* Description */}
                    <p
                      className={`text-sm leading-8 sm:text-base ${colors.muted}`}
                    >
                      {item.summary}
                    </p>

                    {/* Project Details */}
                    <div className="mt-8 flex flex-wrap gap-2">

                      <span
                        className={`rounded-md border px-3 py-2 text-xs font-medium ${colors.border} ${colors.muted}`}
                      >
                        Software Development
                      </span>

                      <span
                        className={`rounded-md border px-3 py-2 text-xs font-medium ${colors.border} ${colors.muted}`}
                      >
                        Custom System
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =====================================
            BOTTOM SECTION
        ===================================== */}

        <section className="mt-20 text-center sm:mt-28">

          <div
            className="mx-auto mb-6 h-1 w-12 rounded-full"
            style={{ backgroundColor: colors.gold }}
          />

          <h2
            className={`text-2xl font-bold sm:text-3xl ${colors.heading}`}
          >
            Built Around Real Business Needs.
          </h2>

          <p
            className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${colors.muted}`}
          >
            Every project is an opportunity to create practical,
            reliable, and meaningful software solutions.
          </p>

        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
