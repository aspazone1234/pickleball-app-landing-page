import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BRANCHES } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

export const Branches = () => (
  <section id="branches" data-testid="branches-section" className="py-24 sm:py-32 bg-[#0F172A] noise-overlay relative">
    <div className="max-w-7xl mx-auto px-6 relative">
      <SectionHead light chapter="02" sub="Two arenas, one club" title={<>Find Your<br />Home Court</>} />

      <div className="grid md:grid-cols-2 gap-8">
        {BRANCHES.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.15}>
            <div data-testid={`branch-card-${b.id}`}
              className="group bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden backdrop-blur hover:border-[#8ECAE6]/40 hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img src={b.img} alt={`${b.name} courts`} data-testid={`branch-photo-${b.id}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
                <p className="absolute top-4 left-5 text-xs font-bold tracking-[0.25em] uppercase text-[#8ECAE6] bg-[#0F172A]/60 backdrop-blur px-3 py-1.5 rounded-full">{b.tag}</p>
                <span className="absolute bottom-4 right-5 bg-[#E63946] text-white text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full">{b.courts}</span>
              </div>

              <div className="p-8 sm:p-9 flex-1 flex flex-col">
                <h3 className="heading text-3xl sm:text-4xl text-white uppercase leading-none">{b.name}</h3>
                <p className="text-[#E63946] font-bold text-sm mt-2 tracking-wide uppercase">{b.city}</p>

                <div className="mt-6 space-y-3.5 text-sm text-white/70 flex-1">
                  <p className="flex gap-3"><MapPin size={17} className="text-[#8ECAE6] shrink-0 mt-0.5" /> {b.address}</p>
                  <p className="flex gap-3 items-center"><Clock size={16} className="text-[#8ECAE6] shrink-0" /> {b.hours} — book any hour, any day</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" data-testid={`branch-directions-${b.id}`}
                    className="pill-btn bg-[#E63946] text-white px-6 py-3 inline-flex items-center gap-2"
                    aria-label={`Get directions to ${b.name}`}>
                    <Navigation size={15} /> Get Directions
                  </a>
                  <Link to="/contact" data-testid={`branch-contact-${b.id}`}
                    className="pill-btn border-2 border-white/30 text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-white hover:text-[#0F172A] hover:border-white"
                    aria-label={`Contact ${b.name}`}>
                    <Phone size={15} /> Contact Branch
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
