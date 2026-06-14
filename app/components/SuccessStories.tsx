import Image from "next/image";
import Reveal from "./Reveal";

const EVENTS = [
  {
    num: "01",
    title: "Sunday Yangon Tazaungtaing Festival",
    desc: "A grand public festival bringing thousands together in celebration of Myanmar's cultural heritage and community spirit.",
    img: "/sunday.jpg",
  },
  {
    num: "02",
    title: "100 Plus Yangon Active Run 2018",
    desc: "A city-wide active run event powered by 100 Plus, engaging health-conscious participants across Yangon.",
    img: "/100plus.jpg",
  },
  {
    num: "03",
    title: "Aung La Nsang One Championship Live Show",
    desc: "A live entertainment spectacle featuring Myanmar's champion Aung La Nsang, thrilling thousands of passionate fans.",
    img: "/aungla.jpg",
  },
  {
    num: "04",
    title: "29th SEA Games Men's Football",
    desc: "Proud organizers of Myanmar's historic SEA Games football campaign, creating an electric and unforgettable atmosphere.",
    img: "/football.jpg",
  },
];

const ARTISTS = [
  { name: "Sai Sai Kham Hlaing", img: "/celebrities/saisai.jpg" },
  { name: "Ye Lay",              img: "/celebrities/yelay.jpg" },
  { name: "Naw Naw",             img: "/celebrities/nawnaw.jpg" },
  { name: "Thar Dee Lu",         img: "/celebrities/thardelu.jpg" },
  { name: "Wunna",               img: "/celebrities/wanna.jpg" },
  { name: "Aung Htet",           img: "/celebrities/aunghtet.jpg" },
  { name: "Phyo Pyae Sone",      img: "/celebrities/phyopyaesone.jpg" },
  { name: "Zai Pyae",            img: "/celebrities/zwepyae.jpg" },
  { name: "Hel Lay",             img: "/celebrities/heylay.jpg" },
  { name: "Ni Ni Khin Zaw",      img: "/celebrities/ninikhinzaw.jpg" },
  { name: "Yadanar My",          img: "/celebrities/YadanarMy.jpg" },
  { name: "Eain Chit",           img: "/celebrities/EainChit.jpg" },
  { name: "Wine Lay",            img: "/celebrities/winelay.webp" },
  { name: "Sophia",              img: "/celebrities/sophiya.jpg" },
];


export default function SuccessStories() {
  return (
    <section id="success" className="px-1 py-16 sm:py-24">
      <Reveal>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          Client &amp; Success Stories
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-heading text-[30px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[48px]">
          Events that moved thousands
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-foreground/55 sm:text-[15px]">
          Thousands of people participated in BMB Entertainment events — filled with excitement,
          applause, and unforgettable moments across Myanmar.
        </p>
      </Reveal>

      {/* Events grid */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:mt-16 sm:grid-cols-2">
        {EVENTS.map((e, i) => (
          <Reveal key={e.num} delay={i * 80}>
            <article className="group relative cursor-default overflow-hidden rounded-3xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]" style={{ minHeight: 260 }}>
              {/* Background image */}
              <Image
                src={e.img}
                alt={e.title}
                fill
                sizes="50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient overlay — heavy at bottom for text readability */}
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/80" />

              {/* Number — top left */}
              <span className="absolute left-6 top-5 font-mono text-3xl font-bold text-white/40">
                {e.num}
              </span>

              {/* Text — pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {e.desc}
                </p>
              </div>

              {/* bottom accent line */}
              <div className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-brand-blue-light to-white/50 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </article>
          </Reveal>
        ))}
      </div>

      {/* Featured artists marquee */}
      <Reveal delay={140}>
        <div className="mt-10">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50">
            Featured Artists
          </p>
          <div className="marquee overflow-hidden">
            <div className="marquee-track flex gap-4" style={{ width: "max-content" }}>
              {[...ARTISTS, ...ARTISTS].map((a, i) => (
                <div
                  key={i}
                  className="group relative shrink-0 overflow-hidden rounded-2xl"
                  style={{ width: 280, height: 360 }}
                >
                  <Image
                    src={a.img}
                    alt={a.name}
                    fill
                    sizes="160px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* name overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-3 pb-3 pt-8">
                    <p className="text-[11px] font-semibold leading-tight text-white">
                      {a.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
