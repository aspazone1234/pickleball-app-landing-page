import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VENTURES } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

export const Ventures = () => (
  <section id="ventures" data-testid="ventures-section" className="py-24 sm:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHead chapter="05" sub="Beyond the courts" title={<>Our Other<br />Ventures</>} />

      <div className="space-y-10">
        {VENTURES.map((v, i) => (
          <Reveal key={v.name} delay={0.1}>
            <div data-testid={`venture-card-${i}`}
              className={`group grid md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="md:col-span-7 [direction:ltr] overflow-hidden rounded-2xl">
                <Link to={v.route} aria-label={`Open ${v.name} page`}>
                  <img src={v.img} alt={`${v.name} — ${v.type}`}
                    className="w-full h-[280px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
              </div>
              <div className="md:col-span-5 [direction:ltr]">
                <span className="chapter-num text-[#E63946]">{v.num}</span>
                <h3 className="heading text-4xl sm:text-5xl uppercase text-[#0F172A] leading-[0.95] mt-3">{v.name}</h3>
                <p className="text-sm font-bold tracking-[0.25em] uppercase mt-3" style={{ color: "#2563EB" }}>{v.type}</p>
                <p className="text-[#475569] leading-relaxed mt-5 max-w-md">{v.desc}</p>
                <Link to={v.route}
                  className="pill-btn border-2 border-[#0F172A] text-[#0F172A] px-7 py-3 mt-7 inline-flex items-center gap-2 group-hover:bg-[#0F172A] group-hover:text-white"
                  data-testid={`venture-link-${i}`} aria-label={`Explore ${v.name}`}>
                  Explore {v.name} <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
