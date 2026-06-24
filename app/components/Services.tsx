"use client";

import { TvMinimalPlay, Megaphone, Palette, CalendarCheck, Radio, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES: {
  title: string;
  desc: string;
  icon: LucideIcon;
  pattern: string;
  accent: string;
}[] = [
  {
    title: "Media Buying & Planning",
    desc: "Strategic media placement across TV, digital, and print channels — reaching the right audience at the right time.",
    icon: BarChart3,
    pattern: "circles",
    accent: "#1A3A8F",
  },
  {
    title: "Advertising",
    desc: "Creative, impact-driven advertising campaigns designed to elevate your brand and deliver measurable results.",
    icon: Megaphone,
    pattern: "dots",
    accent: "#2756C5",
  },
  {
    title: "Branding",
    desc: "Comprehensive brand identity development — from visual design to messaging — that makes your business stand out.",
    icon: Palette,
    pattern: "grid",
    accent: "#0E2260",
  },
  {
    title: "Event Management",
    desc: "End-to-end event planning and execution, from corporate conferences to large-scale public events.",
    icon: CalendarCheck,
    pattern: "waves",
    accent: "#1A3A8F",
  },
  {
    title: "TV Commercial",
    desc: "Professional TV advertisement production that captures attention and communicates your brand story powerfully.",
    icon: TvMinimalPlay,
    pattern: "diagonal",
    accent: "#2756C5",
  },
  {
    title: "Live Stream Production",
    desc: "High-quality live broadcast shows and streaming productions that connect your brand with audiences in real time.",
    icon: Radio,
    pattern: "rings",
    accent: "#0E2260",
  },
];

function PatternBg({ type, color }: { type: string; color: string }) {
  const c = color + "18";
  if (type === "circles")
    return (
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90%" cy="10%" r="60" fill={c} />
        <circle cx="80%" cy="30%" r="30" fill={c} />
        <circle cx="95%" cy="50%" r="80" fill={c} />
      </svg>
    );
  if (type === "dots")
    return (
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill={c} />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    );
  if (type === "grid")
    return (
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke={c} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    );
  if (type === "waves")
    return (
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60 Q80 20 160 60 Q240 100 320 60 Q400 20 480 60" fill="none" stroke={c} strokeWidth="2" />
        <path d="M0 90 Q80 50 160 90 Q240 130 320 90 Q400 50 480 90" fill="none" stroke={c} strokeWidth="2" />
        <path d="M0 120 Q80 80 160 120 Q240 160 320 120 Q400 80 480 120" fill="none" stroke={c} strokeWidth="2" />
      </svg>
    );
  if (type === "diagonal")
    return (
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="diag" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 20L20 0" stroke={c} strokeWidth="1.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
    );
  // rings
  return (
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90%" cy="50%" r="50" fill="none" stroke={c} strokeWidth="1.5" />
      <circle cx="90%" cy="50%" r="80" fill="none" stroke={c} strokeWidth="1" />
      <circle cx="90%" cy="50%" r="110" fill="none" stroke={c} strokeWidth="0.8" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#f4f6f4] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1230px] px-5 sm:px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Services
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Comprehensive solutions for your brand&rsquo;s growth
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/8 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,58,143,0.1)] sm:p-8">
                  {/* SVG pattern bg */}
                  <div className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-60">
                    <PatternBg type={s.pattern} color={s.accent} />
                  </div>

                  {/* Icon */}
                  <div
                    className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: s.accent + "15" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: s.accent }} />
                  </div>

                  <h3 className="relative mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-foreground/55">{s.desc}</p>

                  {/* bottom accent */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{ background: `linear-gradient(to right, ${s.accent}, transparent)` }}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
