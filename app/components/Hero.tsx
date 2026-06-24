"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "@/public/hero1.jpg";
import hero2 from "@/public/hero2.jpg";
import hero3 from "@/public/hero3.jpg";
import hero4 from "@/public/hreo4.jpg";

function useIntroDone() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (document.documentElement.classList.contains("intro-done")) {
      setDone(true);
      return;
    }
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("intro-done")) {
        setDone(true);
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return done;
}

const SPONSOR_LOGOS = [
  { src: "/sponsers/100plus_logo.svg-removebg-preview.png", alt: "100Plus" },
  { src: "/sponsers/premier_logo-removebg-preview.png", alt: "Premier" },
  { src: "/sponsers/0003867.png", alt: "Sponsor" },
  { src: "/sponsers/Untitled design(39).png", alt: "Partner" },
];

const EVENT_CARDS = [
  { img: hero1, user: "BMBEntertainment", label: "100Plus Active Run", time: "2hr" },
  { img: hero2, user: "BMBEntertainment", label: "Tazaungtaing Festival", time: "5hr" },
  { img: hero3, user: "BMBEntertainment", label: "One Championship Live", time: "7hr" },
  { img: hero4, user: "BMBEntertainment", label: "SEA Games Football", time: "9hr" },
];

function DotsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
      strokeLinecap="round" className="h-4 w-4" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Hero() {
  const introDone = useIntroDone();

  return (
    <section className="overflow-hidden bg-[#f0f3f1] pt-[79px]">
      {/* ── Top: centred copy ── */}
      <div className="mx-auto max-w-3xl px-6 pb-10 pt-8 text-center sm:pt-12 sm:pb-12">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white px-2 py-1"
        >
          <span
            className="relative overflow-hidden rounded-full px-3 py-1 text-xs font-bold text-white"
            style={{
              background: "linear-gradient(180deg, #2756C5 0%, #1A3A8F 55%, #0E2260 100%)",
              boxShadow: "0 0 10px 2px rgba(26,58,143,0.4), 0 2px 4px rgba(26,58,143,0.3)",
            }}
          >
            <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/30 to-transparent" />
            <span className="relative">#001</span>
          </span>
          <span className="text-xs font-medium text-foreground/65">
            Entertainment &amp; Events Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-heading text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em] text-foreground"
        >
          Strengthen your brand<br className="hidden sm:block" />
          {" "}with BMB Entertainment
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-[14px] font-medium leading-relaxed text-foreground/40"
        >
          BMB Entertainment empowers brands with media buying, advertising,
          branding, event management, TV commercials, and live stream production.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {/* Our Work — glossy white */}
          <a
            href="#success"
            className="relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:brightness-95 active:scale-95"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #f0f0ee 55%, #e4e4e0 100%)",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18), 0 0 10px 1px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.08)",
            }}
          >
            <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/60 to-transparent" />
            <span className="relative">Our Work</span>
          </a>

          {/* Get in touch — glossy green */}
          <a
            href="#contact"
            className="relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(180deg, #2756C5 0%, #1A3A8F 50%, #0E2260 100%)",
              boxShadow: "0 0 12px 2px rgba(26,58,143,0.35), 0 2px 6px rgba(26,58,143,0.25)",
            }}
          >
            <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent" />
            <span className="relative">Get in touch</span>
          </a>
        </motion.div>
      </div>

      {/* ── Bottom: marquee event cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="marquee mt-6 overflow-hidden sm:mt-8"
      >
        <div className="marquee-track flex gap-3 sm:gap-4" style={{ width: "max-content" }}>
          {[...EVENT_CARDS, ...EVENT_CARDS].map((card, i) => (
            <div
              key={`${card.label}-${i}`}
              className="shrink-0 rounded-[20px] sm:rounded-[26px] bg-white p-1 sm:p-1.5"
              style={{ width: "clamp(220px, 28vw, 340px)" }}
            >
              <div className="relative overflow-hidden rounded-[16px] sm:rounded-[24px]" style={{ aspectRatio: "9/14" }}>
              <Image
                src={card.img}
                alt={card.label}
                fill
                sizes="22vw"
                priority={i < 2}
                className="object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />

              {/* Label at bottom */}
              <div className="absolute inset-x-0 bottom-0 px-3 pb-3 sm:px-4 sm:pb-4">
                <p className="text-[11px] font-semibold leading-tight text-white/90 sm:text-xs">
                  {card.label}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Sponsors marquee (left → right) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="marquee overflow-hidden py-6 sm:py-8"
      >
        <div className="marquee-track-reverse flex items-center gap-10 sm:gap-14" style={{ width: "max-content" }}>
          {[...SPONSOR_LOGOS, ...SPONSOR_LOGOS, ...SPONSOR_LOGOS, ...SPONSOR_LOGOS].map((s, i) => (
            <Image
              key={i}
              src={s.src}
              alt={s.alt}
              width={120}
              height={48}
              className="h-9 w-auto shrink-0 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
