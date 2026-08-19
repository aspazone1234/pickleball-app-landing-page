import { Instagram, Play, BadgeCheck } from "lucide-react";
import { MEDIA, INSTA_PROFILES, ASSETS } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";
import { MiniBall, MiniPaddle } from "./Doodles";

const ProfileCard = ({ p, delay }) => (
  <Reveal delay={delay}>
    <div data-testid={`insta-profile-card-${p.id}`}
      className="bg-white border border-[#0F172A]/10 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgb(15,23,42,0.12)] transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center gap-4">
        <span className="insta-gradient p-[3px] rounded-full shrink-0">
          <span className="block w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white p-1.5">
            <img src={ASSETS.logo} alt={`${p.handle} avatar`} className="w-full h-full object-contain rounded-full" />
          </span>
        </span>
        <div className="min-w-0">
          <p className="font-bold text-[#0F172A] flex items-center gap-1.5 truncate">
            {p.handle} <BadgeCheck size={16} className="text-[#2563EB] shrink-0" />
          </p>
          <p className="text-xs text-[#94A3B8] mt-0.5">{p.city}</p>
        </div>
      </div>

      <p className="text-sm text-[#475569] mt-4 leading-relaxed">{p.bio}</p>

      <div className="grid grid-cols-3 gap-1.5 mt-5 rounded-xl overflow-hidden">
        {p.grid.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <img src={src} alt={`${p.handle} post ${i + 1}`} className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>

      <a href={p.url} target="_blank" rel="noopener noreferrer" data-testid={`insta-follow-btn-${p.id}`}
        className="pill-btn insta-gradient text-white w-full justify-center mt-6 py-3 text-sm inline-flex items-center gap-2"
        aria-label={`Follow ${p.handle} on Instagram`}>
        <Instagram size={16} /> Follow {p.handle}
      </a>
    </div>
  </Reveal>
);

export const InstagramMedia = () => (
  <section id="instagram" data-testid="instagram-section" className="py-24 sm:py-32 bg-[#F8F9FA] relative overflow-hidden">
    <MiniPaddle className="absolute -top-8 right-[4%] w-20 sm:w-28 rotate-[-18deg] opacity-[0.12]" />
    <MiniBall className="absolute bottom-24 left-[3%] w-9 h-9 sm:w-12 sm:h-12 opacity-60" />
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <SectionHead chapter="04" sub="Follow the club" title={<>Life at<br />AP Club</>} />
        <p className="text-[#475569] max-w-sm mb-14 text-sm leading-relaxed">
          Two arenas, two feeds, one obsession. Follow both branches on Instagram for match highlights, league updates and everything happening at the club.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {INSTA_PROFILES.map((p, i) => (
          <ProfileCard key={p.id} p={p} delay={i * 0.12} />
        ))}
      </div>

      <Reveal>
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#64748B] mb-6">Latest from the courts</p>
      </Reveal>

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
