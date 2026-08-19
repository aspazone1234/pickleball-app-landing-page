import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { HERO_SLIDES, CONTACT } from "../../data/content";

const lineAnim = (delay) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
});

const MANIFESTO = [
  { num: "01", title: "The Courts", text: "15 dedicated pickleball courts across two arenas — open 24×7." },
  { num: "02", title: "The Academy", text: "AP Pickleball Academy: learn the sport, sharpen technique, compete." },
  { num: "03", title: "The Culture", text: "Play hard, then chill at TCD Cafe or party at Bollywood Vibes." },
];

const Paddle = () => (
  <svg viewBox="0 0 222 340" className="w-full h-auto" aria-hidden="true">
    <rect x="96" y="218" width="30" height="108" rx="14" fill="#0F172A" />
    <rect x="101" y="232" width="20" height="82" rx="9" fill="#1E293B" />
    <ellipse cx="111" cy="126" rx="98" ry="118" fill="#E63946" />
    <ellipse cx="111" cy="126" rx="83" ry="103" fill="#0F172A" />
    <ellipse cx="111" cy="126" rx="83" ry="103" fill="none" stroke="#8ECAE6" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 7" />
    <text x="111" y="116" textAnchor="middle" fill="#FFFFFF" style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: "40px", letterSpacing: "0.04em" }}>AP</text>
    <text x="111" y="152" textAnchor="middle" fill="#8ECAE6" style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: "22px", letterSpacing: "0.32em" }}>CLUB</text>
    <circle cx="111" cy="180" r="5" fill="#E63946" />
  </svg>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const ballY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-screen court-grid overflow-hidden pt-[72px]">
      {/* Paddle + spinning pickleball ornament */}
      <motion.div style={{ y: ballY }} data-testid="hero-paddle"
        className="absolute right-[-14px] top-[84px] w-[130px] opacity-80 sm:opacity-100 sm:right-6 sm:top-24 sm:w-[230px] lg:right-16 lg:w-[270px] pointer-events-none z-0"
        aria-hidden="true">
        <motion.div
          animate={{ rotate: [10, 20, 10], y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative drop-shadow-[0_30px_50px_rgba(15,23,42,0.3)]"
        >
          <Paddle />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="pickleball absolute -top-4 -left-8 w-16 h-16 sm:-top-7 sm:-left-14 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
          />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="pt-16 sm:pt-24">
          <motion.p {...lineAnim(0.35)} className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#E63946] mb-6">
            <MapPin size={14} /> Ahmedabad · Gandhinagar — Open 24×7
          </motion.p>

          <h1 className="heading uppercase leading-[0.88] tracking-tighter text-[#0F172A] text-4xl sm:text-5xl lg:text-6xl xl:text-[6.5rem]">
            <span className="block overflow-hidden py-1"><motion.span {...lineAnim(0.45)} className="block">Where Gujarat</motion.span></span>
            <span className="block overflow-hidden py-1"><motion.span {...lineAnim(0.58)} className="block">Comes to <span className="text-[#E63946]">Dink,</span></motion.span></span>
            <span className="block overflow-hidden py-1"><motion.span {...lineAnim(0.71)} className="block text-outline">Drive & Smash.</motion.span></span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8 }} className="flex flex-wrap gap-4">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="hero-book-cta"
                className="pill-btn bg-[#E63946] text-white px-8 py-3.5" aria-label="Book your game now">
                Book Your Game
              </a>
              <a href="#branches" data-testid="hero-branches-cta"
                className="pill-btn border-2 border-[#0F172A] text-[#0F172A] px-8 py-3.5 hover:bg-[#0F172A] hover:text-white" aria-label="Find our branches">
                Find a Branch
              </a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
              className="text-sm text-[#475569] max-w-xs leading-relaxed">
              Gujarat's home of pickleball since 2021. Two arenas, 15 dedicated courts, open round the clock.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 items-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 1.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div data-testid="hero-slider" className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(15,23,42,0.25)] h-[300px] sm:h-[380px]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={slide}
                  src={HERO_SLIDES[slide].src}
                  alt={HERO_SLIDES[slide].alt}
                  data-testid={`hero-slide-img-${slide}`}
                  style={{ y: imgY }}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                {HERO_SLIDES.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} data-testid={`hero-slide-dot-${i}`}
                    aria-label={`Show slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? "w-8 bg-[#E63946]" : "w-3 bg-white/60 hover:bg-white"}`} />
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-[#0F172A] text-white text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full rotate-[-2deg] z-10">
              Est. 2021 — Gujarat's First
            </div>
          </motion.div>

          <div className="col-span-12 md:col-span-5 space-y-4">
            {MANIFESTO.map((m, i) => (
              <motion.div key={m.num}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`manifesto-item-${m.num}`}
                className="flex items-start gap-4 bg-white/70 backdrop-blur border border-[#0F172A]/10 rounded-2xl p-5 hover:border-[#E63946]/40 transition-colors duration-300"
              >
                <span className="chapter-num text-[#E63946]">{m.num}</span>
                <div>
                  <h3 className="heading text-lg uppercase text-[#0F172A]">{m.title}</h3>
                  <p className="text-sm text-[#475569] mt-1">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.a href="#reviews" aria-label="Scroll to reviews" data-testid="hero-scroll-hint"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#0F172A]/50 hover:text-[#E63946] transition-colors">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};
