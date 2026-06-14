"use client";

import { useEffect, useRef, useState } from "react";

const OTHER_AGENCIES = [
  {
    title: "Generic Strategies",
    desc: "One-size-fits-all campaigns that fail to address the specific needs and goals of your business.",
  },
  {
    title: "Limited Reach",
    desc: "Services that scratch the surface, missing key channels and leaving important audience segments untouched.",
  },
  {
    title: "Passive Approach",
    desc: "Waiting for results to come rather than actively hunting for opportunities on your behalf.",
  },
  {
    title: "Impersonal Service",
    desc: "Treating every client as just another account — no genuine dedication or personal investment in your success.",
  },
];

const WITH_BMB = [
  {
    title: "Personalized Dedication",
    desc: "We treat your business as if it were our own — with genuine care, active involvement, and full commitment to your success.",
  },
  {
    title: "Comprehensive Coverage",
    desc: "From media buying to live streaming, we cover every channel needed to maximize your brand's reach and impact.",
  },
  {
    title: "Opportunity Hunters",
    desc: "We proactively seek and fill the gaps in the market — actively locating vacant opportunities for your brand to win.",
  },
  {
    title: "One-Stop Success",
    desc: "BMB helps you achieve your desired goals in one fell swoop — no need to juggle multiple agencies or vendors.",
  },
];

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12.5l4.2 4.2L19 6.5" />
    </svg>
  );
}

function Item({
  title,
  desc,
  highlight,
  index,
  inView,
}: {
  title: string;
  desc: string;
  highlight: boolean;
  index: number;
  inView: boolean;
}) {
  return (
    <li
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start gap-3">
        {highlight ? (
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-blue text-white">
            <Check className="h-3.5 w-3.5" />
          </span>
        ) : (
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center text-foreground/35">
            <Check className="h-5 w-5" />
          </span>
        )}
        <h4 className="text-lg font-semibold leading-snug text-foreground">{title}</h4>
      </div>
      <p className="mt-2 pl-9 text-sm leading-relaxed text-foreground/55">{desc}</p>
    </li>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -25% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="why" ref={ref} className="px-1 py-16 sm:py-24">
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        Why choose us
      </div>
      <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light leading-[1.12] tracking-[-0.005em] sm:text-[48px]">
        Your business is our business
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-foreground/55 sm:text-[15px]">
        Clients who come to BMB Entertainment with trust and dedication are treated with the same
        commitment we give our own work — actively finding every opportunity for your brand to win.
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-2 rounded-[40px] border border-brand-blue/10 bg-brand-blue/5 p-2 sm:mt-14 sm:grid-cols-2">
        <div className="rounded-[30px] px-5 py-6 sm:px-7 sm:py-7">
          <h3 className="text-xl font-bold text-foreground">Other Agencies</h3>
          <ul className="mt-8 space-y-7">
            {OTHER_AGENCIES.map((item, i) => (
              <Item
                key={item.title}
                title={item.title}
                desc={item.desc}
                highlight={false}
                index={i}
                inView={inView}
              />
            ))}
          </ul>
        </div>
        <div className="rounded-[30px] bg-white px-5 py-6 sm:px-7 sm:py-7">
          <h3 className="text-xl font-bold text-foreground">With BMB Entertainment</h3>
          <ul className="mt-8 space-y-7">
            {WITH_BMB.map((item, i) => (
              <Item
                key={item.title}
                title={item.title}
                desc={item.desc}
                highlight
                index={i}
                inView={inView}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
