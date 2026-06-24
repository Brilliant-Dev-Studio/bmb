"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Target Audience Research",
    desc: "Expert analysis to identify and precisely pinpoint your target audiences and markets — finding exactly who needs your brand.",
  },
  {
    num: "02",
    title: "Thorough Analysis",
    desc: "In-depth analysis of your goals, competitors, and market conditions to build the right strategic foundation from day one.",
  },
  {
    num: "03",
    title: "Airtight Strategic Planning",
    desc: "A comprehensive, gap-free strategy that leaves no opportunity unaddressed — always kept current and adapted to market shifts.",
  },
  {
    num: "04",
    title: "Advanced Technology Execution",
    desc: "Supported from all sides with advanced technologies to execute your plan efficiently and deliver your desired outcomes.",
  },
];

export default function Approach() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="approach" className="px-1 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">

          {/* Left — sticky copy */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Approach &amp; Methodology
              </div>

              <h2 className="mt-5 font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
                A strategy with no gaps, results with no compromise
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-foreground/55 sm:text-[15px]">
                From research to execution, every step is designed to maximise your brand's impact and deliver measurable outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#success"
                  className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
                >
                  Our Work
                </a>
                <a
                  href="#services"
                  className="relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{
                    background: "linear-gradient(180deg,#2756C5 0%,#1A3A8F 50%,#0E2260 100%)",
                    boxShadow: "0 0 12px 2px rgba(26,58,143,0.3)",
                  }}
                >
                  <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent" />
                  <span className="relative">Explore Services</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-3">
              {STEPS.map((s, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group w-full rounded-2xl border border-foreground/8 bg-white px-6 py-5 text-left transition-all duration-300 hover:border-brand-blue/20 hover:shadow-[0_4px_20px_rgba(26,58,143,0.07)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-heading text-base font-semibold text-foreground sm:text-lg">
                        {s.title}
                      </span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300"
                        style={{
                          background: isOpen
                            ? "linear-gradient(180deg,#2756C5 0%,#1A3A8F 50%,#0E2260 100%)"
                            : "linear-gradient(180deg,#2756C5 0%,#1A3A8F 50%,#0E2260 100%)",
                          boxShadow: isOpen ? "0 0 10px 2px rgba(26,58,143,0.35)" : "none",
                        }}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </div>

                    {/* Expandable content */}
                    <div
                      className="overflow-hidden transition-all duration-400 ease-out"
                      style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
                    >
                      <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                        {s.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
