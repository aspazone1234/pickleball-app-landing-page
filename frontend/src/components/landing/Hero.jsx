import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { ASSETS, CONTACT } from "../../data/content";

const lineAnim = (delay) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
});

const MANIFESTO = [
  { num: "01", title: "The Court", text: "International-standard surfaces, day & night." },
  { num: "02", title: "The Community", text: "Beginners to tournament players, one family." },
  { num: "03", title: "The Culture", text: "Play hard, dine well, celebrate louder." },
];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const ballY = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-screen court-grid overflow-hidden pt-[72px]">
      <motion.div style={{ y: ballY }} className="absolute -right-20 top-24 opacity-90 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="pickleball w-64 h-64 sm:w-96 sm:h-96"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="pt-16 sm:pt-24">
          <motion.p {...lineAnim(0.35)} className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#E63946] mb-6">
            <MapPin size={14} /> Ahmedabad · Gandhinagar — Gujarat
          </motion.p>

          <h1 className="heading uppercase leading-[0.88] tracking-tighter text-[#0F172A] text-4xl sm:text-5xl lg:text-6xl xl:text-[6.5rem]">
            <span className="block overflow-hidden py-1"><motion.span {...lineAnim(0.45)} className="block">Where Gujarat</motion.span></span>
            <span className="block overflow-hidden py-1"><motion.span {...lineAnim(0.58)} className="block">Comes to <span className="text-[#E63946]">Dink,</span></motion.span></span>
            <span className="block overflow-hidden py-1"><motion.span {...lineAnim(0.71)} className="block text-outline">Drive & Smash.</motion.span></span>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8 }} className="flex gap-4">
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
              Gujarat's home of pickleball since 2021. Two arenas, ten pro courts, one obsession.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 items-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 1.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(15,23,42,0.25)]">
              <motion.img style={{ y: imgY }} src={ASSETS.hero} alt="Pickleball player mid-rally at AP Pickleball Club"
                className="w-full h-[300px] sm:h-[380px] object-cover scale-110" data-testid="hero-image" />
            </div>
            <div className="absolute -top-4 -left-4 bg-[#0F172A] text-white text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full rotate-[-2deg]">
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
