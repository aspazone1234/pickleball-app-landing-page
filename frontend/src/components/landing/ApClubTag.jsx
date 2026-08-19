import { motion } from "framer-motion";
import { ASSETS } from "../../data/content";

export const ApClubTag = ({ variant = "light", className = "", delay = 0.25 }) => {
  const onDark = variant === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      data-testid="ap-club-tag"
      className={`inline-flex items-center gap-3 rounded-full pl-1.5 pr-4 py-1.5 backdrop-blur transition-colors duration-300 ${
        onDark
          ? "bg-white/[0.07] border border-white/15 hover:border-white/35"
          : "bg-[#0F172A]/[0.04] border border-[#0F172A]/12 hover:border-[#0F172A]/30"
      } ${className}`}
    >
      <img
        src={ASSETS.apClubLogo}
        alt="AP Club logo"
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shrink-0 ring-1 ring-white/20"
      />
      <span className="leading-tight">
        <span className={`block text-[9px] font-bold tracking-[0.22em] uppercase ${onDark ? "text-white/45" : "text-[#0F172A]/45"}`}>
          A venture of
        </span>
        <span className={`block text-xs sm:text-sm font-bold tracking-tight ${onDark ? "text-white" : "text-[#0F172A]"}`}>
          AP Club <span className={onDark ? "text-white/45 font-medium" : "text-[#0F172A]/45 font-medium"}>· Endless Experiences</span>
        </span>
      </span>
    </motion.div>
  );
};
