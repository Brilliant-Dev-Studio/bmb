"use client";

import { RefreshCw, BadgeCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS: { title: string; desc: string; icon: LucideIcon; gradient: string }[] = [
  {
    title: "Always Up-to-Date",
    desc: "We continuously update our skills with the latest trending technologies across media, advertising, and production.",
    icon: RefreshCw,
    gradient: "from-[#228a45]/10 via-[#1A6B35]/5 to-transparent",
  },
  {
    title: "Certified Professionals",
    desc: "Every team member holds relevant industry certificates, ensuring world-class standards in every project we deliver.",
    icon: BadgeCheck,
    gradient: "from-[#145229]/10 via-[#1A6B35]/5 to-transparent",
  },
  {
    title: "Unity & Responsibility",
    desc: "The BMB team moves forward together — each person fulfilling their role with full responsibility and dedication.",
    icon: Users,
    gradient: "from-[#228a45]/10 via-[#1A6B35]/5 to-transparent",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#f4f6f4] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1230px] px-5 sm:px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Team &amp; Expertise
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Experts from every field, moving as one
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-foreground/50 sm:text-[15px]">
            At BMB Entertainment, &ldquo;sesame does not make oil on one side.&rdquo; Our team of
            22 certified professionals works in unity — because great results come from great teamwork.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/8 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,107,53,0.1)] sm:p-8">

                  {/* gradient blob top-right */}
                  <div className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-radial ${p.gradient} blur-2xl transition-opacity duration-500 group-hover:opacity-70`} />

                  {/* Icon box */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 transition-all duration-300 group-hover:bg-brand-blue/15 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.8} />
                  </div>

                  {/* accent line */}
                  <div className="relative mt-6 h-0.5 w-10 rounded-full bg-brand-blue/30 transition-all duration-500 group-hover:w-16 group-hover:bg-brand-blue" />

                  <h3 className="relative mt-4 font-heading text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-brand-blue">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-foreground/55">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
