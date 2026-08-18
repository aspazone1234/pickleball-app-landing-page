import { MapPin, Phone, Clock, Navigation, Instagram } from "lucide-react";
import { BRANCHES } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

export const Branches = () => (
  <section id="branches" data-testid="branches-section" className="py-24 sm:py-32 bg-[#0F172A] noise-overlay relative">
    <div className="max-w-7xl mx-auto px-6 relative">
      <SectionHead light chapter="03" sub="Two arenas, one club" title={<>Find Your<br />Home Court</>} />

      <div className="grid md:grid-cols-2 gap-8">
        {BRANCHES.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.15}>
            <div data-testid={`branch-card-${b.id}`}
              className="group bg-white/[0.04] border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur hover:border-[#8ECAE6]/40 hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8ECAE6] mb-4">{b.tag}</p>
              <h3 className="heading text-3xl sm:text-4xl text-white uppercase leading-none">{b.name}</h3>
              <p className="text-[#E63946] font-bold text-sm mt-2 tracking-wide uppercase">{b.city} · {b.courts}</p>

              <div className="mt-8 space-y-4 text-sm text-white/70 flex-1">
                <p className="flex gap-3"><MapPin size={17} className="text-[#8ECAE6] shrink-0 mt-0.5" /> {b.address}</p>
                <p className="flex gap-3 items-center"><Phone size={16} className="text-[#8ECAE6] shrink-0" /> {b.phone}</p>
                <p className="flex gap-3 items-center"><Clock size={16} className="text-[#8ECAE6] shrink-0" /> {b.hours}</p>
                <a href={b.instaUrl} target="_blank" rel="noopener noreferrer" data-testid={`branch-insta-${b.id}`}
                  className="flex gap-3 items-center text-white/70 hover:text-[#8ECAE6] transition-colors w-fit">
                  <Instagram size={16} className="text-[#8ECAE6] shrink-0" /> {b.insta}
                </a>
              </div>

              <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" data-testid={`branch-directions-${b.id}`}
                className="pill-btn bg-[#E63946] text-white px-7 py-3 mt-8 w-fit inline-flex items-center gap-2"
                aria-label={`Get directions to ${b.name}`}>
                <Navigation size={15} /> Get Directions
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
