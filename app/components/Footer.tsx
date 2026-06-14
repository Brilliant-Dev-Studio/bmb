import Image from "next/image";
import logo from "@/public/logo.png";
import Reveal from "./Reveal";

const MENU = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#success" },
  { label: "Team", href: "#team" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const CONTACT = [
  { label: "09969798234", href: "tel:09969798234" },
  { label: "bmb.entertainment@list.ru", href: "mailto:bmb.entertainment@list.ru" },
  {
    label: "No 79/81, Central Tower, Anawyahtar Street, Kyauktadat Tsp. Yangon, Myanmar",
    href: null,
  },
];

const linkClass =
  "text-sm text-foreground/55 transition-colors duration-200 hover:text-brand-blue";

const socialBtnClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/55 transition-all duration-200 hover:border-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-foreground/10 bg-foreground/[0.02]">
      <div className="mx-auto w-full max-w-[1230px] px-5 pb-10 pt-14 sm:px-6 sm:pt-16">
        <Reveal className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.4fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <Image src={logo} alt="BMB Entertainment" className="h-20 w-auto sm:h-24" />
            <p className="mt-6 text-sm leading-relaxed text-foreground/55">
              BMB Entertainment Co., Ltd — Strengthening your brand image with comprehensive
              media, advertising, and event management solutions in Myanmar.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBtnClass}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBtnClass}
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Menu</h3>
            <ul className="mt-5 space-y-3">
              {MENU.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-5 space-y-3">
              {CONTACT.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className={linkClass}>{c.label}</a>
                  ) : (
                    <span className="text-sm text-foreground/55">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-foreground/10 pt-8 text-sm text-foreground/55"
        >
          <span>© 2026 BMB Entertainment Co., Ltd.</span>
          <span className="h-1 w-1 rounded-full bg-brand-red" />
          <span>All rights reserved.</span>
        </Reveal>
      </div>
    </footer>
  );
}
