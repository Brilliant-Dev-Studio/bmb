"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#success" },
  { label: "Team", href: "#team" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="BMB Entertainment — home">
      <Image
        src={logo}
        alt="BMB Entertainment"
        priority
        className="h-10 w-auto sm:h-12"
      />
    </a>
  );
}

function GetInTouch({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95 ${className}`}
      style={{
        background: "linear-gradient(180deg, #228a45 0%, #1A6B35 50%, #145229 100%)",
        boxShadow: "0 0 12px 2px rgba(26,107,53,0.35), 0 2px 6px rgba(26,107,53,0.25)",
      }}
    >
      {/* Gloss shine overlay */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/30 to-transparent"
      />
      <span className="relative">Contact Us</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#f0f3f1] transition-[border-color] duration-300 ${
        scrolled ? "border-b border-foreground/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1230px] px-5 sm:px-6">
        <div className="flex h-[79px] items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative overflow-hidden text-sm font-medium text-foreground/90"
              >
                {/* current label — slides up on hover */}
                <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
                  {l.label}
                </span>
                {/* duplicate — starts below, slides up on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 block translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
                >
                  {l.label}
                </span>
              </a>
            ))}
          </nav>

          <GetInTouch className="hidden md:inline-flex" />

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-foreground/20 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-expo md:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <nav className="mt-5 flex flex-col gap-1 border-t border-foreground/15 pt-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  {l.label}
                </a>
              ))}
              <GetInTouch className="mt-3 self-start" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
