import { custom, game, network } from "../data/what-we-offer";

interface OfferProps {
  isDarkMode: boolean;
}

const groups = [
  {
    title: "Custom Web Application Development",
    summary: "Websites and systems built around how your business works.",
    items: custom,
  },
  {
    title: "Gaming Systems Development",
    summary: "Real-time game platforms with the back office to run them.",
    items: game,
  },
  {
    title: "Network & Infrastructure",
    summary: "Servers, security and connectivity set up to stay online.",
    items: network,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Offer({ isDarkMode }: OfferProps) {
  const gold = isDarkMode ? "#d9bb63" : "#a98428";

  const theme = {
    heading: isDarkMode ? "text-[#eef1f7]" : "text-[#181f30]",

    muted: isDarkMode ? "text-[#aab2c5]" : "text-[#5a6376]",

    card: isDarkMode
      ? "bg-[#141b30] border-[#2a344d]"
      : "bg-white border-[#e5e9f0]",

    item: isDarkMode
      ? "bg-[#1d2940] border-[#344158]"
      : "bg-[#f8f9fc] border-[#edf0f4]",

    divider: isDarkMode ? "border-[#344158]" : "border-[#e9edf3]",
  };

  const totalServices = groups.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  return (
    <section
      id="what-we-offer"
      className={`scroll-mt-24 px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-28 ${theme.heading}`}
    >
      <div className="mx-auto max-w-6xl">
        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="mb-12 sm:mb-16">
          <div
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: gold }}
          >
            <span className="h-[2px] w-8" style={{ backgroundColor: gold }} />
            What we offer
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Solutions Built
                <br />
                <span style={{ color: gold }}>Around Your Needs.</span>
              </h2>

              <p
                className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${theme.muted}`}
              >
                From custom web applications to gaming systems and
                infrastructure, we deliver practical technology solutions
                designed to support your business operations.
              </p>
            </div>

            {/* Service Count */}
            <div
              className={`flex w-fit shrink-0 items-center gap-4 rounded-xl border p-4 ${theme.card}`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold"
                style={{
                  backgroundColor: isDarkMode ? "#3a3424" : "#f7f0dc",
                  color: gold,
                }}
              >
                {String(totalServices).padStart(2, "0")}
              </div>

              <div>
                <p className="text-2xl font-bold">{totalServices}</p>
                <p className={`text-xs ${theme.muted}`}>Service offerings</p>
              </div>
            </div>
          </div>

          {/* Gold Divider */}
          <div
            className="mt-10 h-[2px] w-full"
            style={{
              background: `linear-gradient(to right, ${gold}, transparent)`,
            }}
          />
        </div>

        {/* =====================================
            SERVICE CARDS
        ===================================== */}

        <div className="mb-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: gold }}
          >
            Our capabilities
          </p>

          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Areas of Expertise
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {groups.map((group, index) => (
            <article
              key={group.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${theme.card}`}
            >
              {/* Top Accent */}
              <div
                className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: gold }}
              />

              {/* Card Header */}
              <div className="mb-7 flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-extrabold"
                  style={{
                    backgroundColor: isDarkMode ? "#3a3424" : "#f7f0dc",
                    color: gold,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${theme.muted}`}
                  style={{
                    backgroundColor: isDarkMode ? "#27344a" : "#f1f3f7",
                  }}
                >
                  {group.items.length} Services
                </span>
              </div>

              {/* Category */}
              <h4 className="min-h-[64px] text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                {group.title}
              </h4>

              <p
                className={`mt-3 min-h-[60px] text-sm leading-7 ${theme.muted}`}
              >
                {group.summary}
              </p>

              {/* Divider */}
              <div className={`my-6 border-t ${theme.divider}`} />

              {/* Service List */}
              <ul className="flex flex-1 flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.id}
                    className={`flex items-start gap-3 rounded-lg border p-3 transition-colors duration-200 ${theme.item}`}
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: isDarkMode ? "#3a3424" : "#f7f0dc",
                        color: gold,
                      }}
                    >
                      <CheckIcon />
                    </span>

                    <span className="text-sm font-medium leading-6">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Card Footer */}
              <div className={`mt-7 border-t pt-5 ${theme.divider}`}>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: gold }}
                  >
                    Our services
                  </span>

                  <span className={`text-xs ${theme.muted}`}>
                    {String(group.items.length).padStart(2, "0")} offerings
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================
            BOTTOM MESSAGE
        ===================================== */}

        <div className="mt-16 text-center sm:mt-20">
          <div
            className="mx-auto mb-6 h-1 w-12 rounded-full"
            style={{ backgroundColor: gold }}
          />

          <h3 className="text-2xl font-bold sm:text-3xl">
            Have a Project in Mind?
          </h3>

          <p
            className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${theme.muted}`}
          >
            Let's turn your ideas into practical, reliable, and meaningful
            software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
