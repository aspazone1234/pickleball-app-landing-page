import { Instagram, Play } from "lucide-react";
import { MEDIA, BRANCHES } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

export const InstagramMedia = () => (
  <section id="instagram" data-testid="instagram-section" className="py-24 sm:py-32 bg-[#F8F9FA]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <SectionHead chapter="04" sub="From the courts" title={<>Life at<br />AP Club</>} />
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          {BRANCHES.map((b) => (
            <a key={b.id} href={b.instaUrl} target="_blank" rel="noopener noreferrer"
              data-testid={`insta-profile-${b.id}`}
              className="group flex items-center gap-3 bg-white border border-[#0F172A]/10 rounded-full pl-2 pr-6 py-2 hover:border-[#E63946]/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(15,23,42,0.04)]"
              aria-label={`Follow ${b.insta} on Instagram`}>
              <span className="w-10 h-10 rounded-full insta-gradient flex items-center justify-center text-white">
                <Instagram size={18} />
              </span>
              <span>
                <span className="block font-bold text-sm text-[#0F172A]">{b.insta}</span>
                <span className="block text-xs text-[#94A3B8]">Follow · {b.city}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {MEDIA.map((m, i) => (
          <Reveal key={i} delay={(i % 3) * 0.1} className={`${m.span}`}>
            <div data-testid={`media-tile-${i}`} className="group relative overflow-hidden rounded-2xl h-64 md:h-full min-h-[240px] cursor-pointer">
              <img src={m.src} alt={m.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              {m.video && (
                <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white" aria-label="Video content">
                  <Play size={16} className="fill-white" />
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <p className="text-white font-bold text-sm">{m.label}</p>
                <p className="text-white/70 text-xs font-semibold">{m.handle}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
