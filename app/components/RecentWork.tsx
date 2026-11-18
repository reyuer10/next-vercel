"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface RecentWorkProps {
  isDarkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  category: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    title: "Baccarat Scoreboard System",
    description:
      "A live scoreboard for casino tables that shows each round's results, road patterns, table limits and betting totals on a large display, updated as every hand is played.",
    image: "/system/baccarat.png",
    imageAlt: "Baccarat scoreboard displayed on a table-side screen",
    category: "Gaming Systems",
    technologies: ["Real-Time Systems", "WebSocket", "Dashboard"],
  },
  {
    title: "Human Resources Information System",
    description:
      "A web system for managing employee records, attendance, leave and payroll inputs in one place, with role-based access for HR staff and managers.",
    image: "/system/hris.png",
    imageAlt: "Human Resources Information System dashboard",
    category: "Business Applications",
    technologies: ["HR Management", "Database", "Role-Based Access"],
  },
];

/* =========================================
   ICONS
========================================= */

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/* =========================================
   IMAGE MODAL
========================================= */

interface PictureModalProps {
  project: Project | null;
  isDarkMode: boolean;
  onClose: () => void;
}

function PictureModal({ project, isDarkMode, onClose }: PictureModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const open = project !== null;

  useEffect(() => {
    setLoaded(false);
  }, [project?.image]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  if (!project?.image) return null;

  const surface = isDarkMode
    ? "bg-[#141b30] text-[#eef1f7] border-[#2a344d]"
    : "bg-white text-[#181f30] border-[#d9dde5]";

  const muted = isDarkMode ? "text-[#aab2c5]" : "text-[#5a6376]";

  const closeButton = isDarkMode
    ? "bg-[#eef1f7] text-[#181f30] hover:bg-white"
    : "bg-[#181f30] text-white hover:bg-[#252f49]";

  const imageBackdrop = isDarkMode ? "bg-[#0d1324]" : "bg-[#f3f4f8]";

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onKeyDown={onKeyDown}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close picture preview"
        className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} picture`}
        className={`relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${surface}`}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#d9bb63]">
              Project Preview
            </p>

            <h3 className="text-lg font-bold leading-snug sm:text-xl">
              {project.title}
            </h3>

            <p className={`mt-1 text-sm ${muted}`}>
              {project.imageAlt ?? "Project screenshot"}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close picture"
            className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bb63] ${closeButton}`}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Image */}
        <div
          className={`relative flex min-h-[200px] flex-1 items-center justify-center overflow-auto p-4 sm:p-7 ${imageBackdrop}`}
        >
          {!loaded && (
            <div
              className={`absolute text-sm ${muted}`}
              role="status"
              aria-live="polite"
            >
              Loading picture...
            </div>
          )}

          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            className={`h-auto max-h-[70vh] w-auto max-w-full object-contain transition-opacity duration-200 motion-reduce:transition-none ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* =========================================
   RECENT WORK SECTION
========================================= */

export default function RecentWork({ isDarkMode }: RecentWorkProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const gold = isDarkMode ? "#d9bb63" : "#a98428";

  const theme = {
    heading: isDarkMode ? "text-[#eef1f7]" : "text-[#181f30]",

    muted: isDarkMode ? "text-[#aab2c5]" : "text-[#5a6376]",

    card: isDarkMode
      ? "bg-[#141b30] border-[#2a344d]"
      : "bg-white border-[#e5e9f0]",

    panel: isDarkMode ? "bg-[#1d2940]" : "bg-[#f3f4f8]",

    divider: isDarkMode ? "border-[#344158]" : "border-[#e5e9f0]",

    button: isDarkMode
      ? "bg-[#eef1f7] text-[#181f30] hover:bg-white"
      : "bg-[#181f30] text-white hover:bg-[#252f49]",
  };

  return (
    <section
      id="our-recent-work"
      className={`scroll-mt-24 px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-28 ${theme.heading}`}
    >
      <div className="mx-auto max-w-6xl">
        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-12 sm:mb-16">
          <div
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: gold }}
          >
            <span className="h-[2px] w-8" style={{ backgroundColor: gold }} />
            Our recent work
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Ideas Into
                <br />
                <span style={{ color: gold }}>Working Systems.</span>
              </h2>

              <p
                className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${theme.muted}`}
              >
                A closer look at the applications and systems we've developed to
                solve real-world business and operational challenges.
              </p>
            </div>

            {/* Project Count */}
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
                {String(projects.length).padStart(2, "0")}
              </div>

              <div>
                <p className="text-2xl font-bold">{projects.length}</p>
                <p className={`text-xs ${theme.muted}`}>Featured projects</p>
              </div>
            </div>
          </div>

          <div
            className="mt-10 h-[2px] w-full"
            style={{
              background: `linear-gradient(to right, ${gold}, transparent)`,
            }}
          />
        </div>

        {/* =====================================
            PROJECTS
        ===================================== */}

        <div className="mb-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: gold }}
          >
            Selected projects
          </p>

          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Featured Work</h3>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.card}`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative flex min-h-[250px] items-center justify-center overflow-hidden p-5 sm:min-h-[350px] sm:p-8 ${theme.panel}`}
                >
                  {project.image ? (
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      aria-label={`View larger picture of ${project.title}`}
                      className="flex h-full w-full cursor-zoom-in items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bb63]"
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        loading="lazy"
                        className="max-h-[380px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </button>
                  ) : (
                    <div
                      className={`flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed text-sm ${theme.muted} ${theme.divider}`}
                    >
                      Screenshot coming soon
                    </div>
                  )}

                  {/* Project Number */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-md border border-white/20 bg-black/50 px-3 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Project Information */}
                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                  {/* Category */}
                  <p
                    className="mb-4 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: gold }}
                  >
                    {project.category}
                  </p>

                  {/* Title */}
                  <h4 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`mt-5 text-sm leading-8 sm:text-base ${theme.muted}`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies / Tags */}
                  {project.technologies && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-md border px-3 py-2 text-xs font-medium ${theme.divider} ${theme.muted}`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  {project.image && (
                    <div className="mt-8">
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className={`inline-flex cursor-pointer items-center gap-3 rounded-lg px-5 py-3 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bb63] ${theme.button}`}
                      >
                        View Project Picture
                        <ArrowUpRight />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center sm:mt-24">
          <div
            className="mx-auto mb-6 h-1 w-12 rounded-full"
            style={{ backgroundColor: gold }}
          />

          <h3 className="text-2xl font-bold sm:text-3xl">
            Every Project Starts With an Idea.
          </h3>

          <p
            className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${theme.muted}`}
          >
            We turn ideas into practical, reliable and meaningful technology
            solutions.
          </p>
        </div>
      </div>

      {/* Image Preview Modal */}
      <PictureModal
        project={activeProject}
        isDarkMode={isDarkMode}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
