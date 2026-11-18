import { facebookIcon } from "../icon/footer";

const links = [
  { label: "Home", id: "main" },
  { label: "What we offer", id: "what-we-offer" },
  { label: "Our recent work", id: "our-recent-work" },
  // { label: "Our Agile Development Process", id: "agile-process" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t-[0.5px] border-zinc-600 bg-[#171e2d] text-sm text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12 md:py-16">
        <div className="space-y-4">
          <img
            src="/img/logo/nodex.png"
            alt="nXde"
            className="h-16 w-auto sm:h-20"
          />
          <p className="max-w-sm leading-relaxed">
            Custom web applications, gaming systems and network infrastructure,
            built in short sprints and maintained after launch.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col items-start gap-3">
          <p className="font-semibold tracking-wide text-white">Explore</p>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-3">
          <p className="font-semibold tracking-wide text-white">
            Join Our Community
          </p>
          <a
            href="https://www.facebook.com/nodexsystems"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="nXde on Facebook"
            className="inline-block transition-colors hover:text-white"
          >
            {facebookIcon}
          </a>
        </div>
      </div>

      <div className="border-t-[0.5px] border-zinc-600 px-5 py-5 text-center sm:px-8">
        <p>© 2026 NodeX. All rights reserved.</p>
      </div>
    </footer>
  );
}
