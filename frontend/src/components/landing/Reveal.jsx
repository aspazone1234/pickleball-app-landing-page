import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ chapter, title, sub, light = false }) => (
  <div className="mb-14">
    <Reveal>
      <div className="flex items-center gap-4 mb-5">
        <span className={`chapter-num ${light ? "text-[#8ECAE6]" : "text-[#E63946]"}`}>{chapter}</span>
        <span className={`h-px w-16 ${light ? "bg-white/30" : "bg-[#0F172A]/20"}`} />
        {sub && <span className={`text-xs font-semibold tracking-[0.25em] uppercase ${light ? "text-white/50" : "text-[#64748B]"}`}>{sub}</span>}
      </div>
    </Reveal>
    <Reveal delay={0.1}>
      <h2 className={`heading text-4xl sm:text-5xl uppercase leading-[0.95] ${light ? "text-white" : "text-[#0F172A]"}`}>{title}</h2>
    </Reveal>
  </div>
);
