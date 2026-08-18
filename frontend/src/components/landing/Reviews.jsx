import { Star, ExternalLink } from "lucide-react";
import { REVIEWS } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 star rating">
    {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-[#FBBC04] text-[#FBBC04]" />)}
  </div>
);

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.7 2.9c2.3-2.1 3.7-5.1 3.7-8.6z"/>
    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2-3.2 0-6-2.1-6.9-5.1L1.3 17.2C3.2 21.2 7.3 24 12 24z"/>
    <path fill="#FBBC04" d="M5.1 14.3c-.3-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.3 6.8C.5 8.4 0 10.1 0 12s.5 3.6 1.3 5.2l3.8-2.9z"/>
    <path fill="#EA4335" d="M12 4.7c2.3 0 3.8 1 4.6 1.8L20 3.3C18 1.3 15.2 0 12 0 7.3 0 3.2 2.8 1.3 6.8l3.8 2.9C6 6.8 8.8 4.7 12 4.7z"/>
  </svg>
);

export const Reviews = () => (
  <section id="reviews" data-testid="reviews-section" className="py-24 sm:py-32 bg-[#F8F9FA]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-12 gap-10 items-start">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28">
          <SectionHead chapter="01" sub="What players say" title={<>Loved on<br />Google</>} />
          <Reveal delay={0.15}>
            <div data-testid="google-rating-card" className="bg-white border border-[#0F172A]/10 rounded-2xl p-8 shadow-[0_8px_30px_rgb(15,23,42,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <GoogleG />
                <span className="text-sm font-semibold text-[#475569]">Google Reviews</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="heading text-7xl text-[#0F172A] leading-none">4.9</span>
                <div className="pb-1">
                  <Stars />
                  <p className="text-xs text-[#64748B] mt-1.5">500+ reviews across both branches</p>
                </div>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=AP+Pickleball+Club+Ahmedabad" target="_blank" rel="noopener noreferrer"
                data-testid="see-more-google-btn"
                className="pill-btn bg-[#E63946] text-white w-full justify-center mt-8 py-3 inline-flex items-center gap-2"
                aria-label="See more reviews on Google">
                See More on Google <ExternalLink size={15} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-8 grid sm:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1} className={i % 2 === 1 ? "sm:mt-10" : ""}>
              <div data-testid={`review-card-${i}`} className="bg-white border border-[#0F172A]/10 rounded-2xl p-7 h-full shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(15,23,42,0.1)] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: r.color }}>
                      {r.initials}
                    </span>
                    <div>
                      <p className="font-bold text-[#0F172A] text-sm">{r.name}</p>
                      <p className="text-xs text-[#94A3B8]">{r.time}</p>
                    </div>
                  </div>
                  <GoogleG />
                </div>
                <Stars />
                <p className="text-sm text-[#475569] leading-relaxed mt-3">"{r.text}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
