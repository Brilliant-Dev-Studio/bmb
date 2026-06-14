"use client";

import type React from "react";
import Image from "next/image";
import { CalendarDays, Users, Star } from "lucide-react";
import Reveal from "./Reveal";

const BENTO: (
  | { type: "image"; src: string; alt: string }
  | { type: "stat"; icon: React.ReactNode; value: string; label: string; desc: string }
)[] = [
  { type: "image", src: "/aboutus1.jpg", alt: "BMB Event" },
  {
    type: "stat",
    icon: <CalendarDays className="h-5 w-5" />,
    value: "100+",
    label: "Events Held",
    desc: "From city marathons to live concerts, we've produced unforgettable large-scale experiences.",
  },
  { type: "image", src: "/about2.jpg", alt: "BMB Entertainment" },
  {
    type: "stat",
    icon: <Users className="h-5 w-5" />,
    value: "22",
    label: "Team Members",
    desc: "A dedicated crew of creative and strategic professionals behind every campaign.",
  },
  { type: "image", src: "/about3.jpg", alt: "BMB Production" },
  {
    type: "stat",
    icon: <Star className="h-5 w-5" />,
    value: "10+",
    label: "Years Experience",
    desc: "A decade of media buying, branding, and entertainment excellence across Myanmar.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-1 py-16 sm:py-24">
      {/* Label */}
      <Reveal>
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          About Us
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
          We blend{" "}
          <span className="inline-flex items-center gap-1 align-middle">
            <span className="inline-block overflow-hidden rounded-full" style={{ width: 44, height: 44 }}>
              <Image src="/hero1.jpg" alt="" width={44} height={44} className="h-full w-full object-cover" />
            </span>
          </span>{" "}
          creativity &amp; strategy to{" "}
          <br className="hidden sm:block" />
          build brands that last
        </h2>
      </Reveal>

      {/* Bento grid */}
      <Reveal delay={100}>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {BENTO.map((cell, i) =>
            cell.type === "image" ? (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
                style={{ aspectRatio: "371/272" }}
              >
                <Image
                  src={cell.src}
                  alt={cell.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#f7f5f3] p-6 text-center sm:rounded-3xl sm:p-8"
                style={{ aspectRatio: "371/272" }}
              >
                {/* Pill badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm sm:px-5 sm:py-3">
                  <span className="text-foreground/70">{cell.icon}</span>
                  <span className="text-base font-bold text-foreground sm:text-lg">{cell.value}</span>
                </div>

                {/* Text */}
                <div>
                  <p className="font-heading text-base font-bold text-foreground sm:text-lg">
                    {cell.label}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/45">
                    {cell.desc}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </Reveal>
    </section>
  );
}
