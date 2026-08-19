import { motion } from "framer-motion";
import { ASSETS, CONTACT } from "../../data/content";

export const PaddleSVG = ({ withLogo = false, faceColor = "#0F172A", rimColor = "#E63946", handleColor, className = "" }) => (
  <svg viewBox="0 0 220 336" className={className} aria-hidden="true">
    <rect x="91" y="250" width="38" height="78" rx="14" fill={handleColor || faceColor} />
    <rect x="97" y="262" width="26" height="56" rx="10" fill="#1E293B" opacity="0.85" />
    <path d="M20 96 C20 34 60 6 110 6 C160 6 200 34 200 96 L200 184 C200 232 170 254 134 261 L86 261 C50 254 20 232 20 184 Z" fill={rimColor} />
    <path d="M33 98 C33 44 68 19 110 19 C152 19 187 44 187 98 L187 180 C187 221 162 242 130 248 L90 248 C58 242 33 221 33 180 Z" fill={faceColor} />
    {withLogo && (
      <image href={ASSETS.logoBadge} x="40" y="87" width="140" height="92" />
    )}
  </svg>
);

export const MiniBall = ({ className = "" }) => (
  <div className={`pickleball ball-spin pointer-events-none ${className}`} aria-hidden="true" />
);

export const MiniPaddle = ({ className = "", light = false }) => (
  <PaddleSVG
    className={`pointer-events-none ${className}`}
    faceColor={light ? "#1E293B" : "#0F172A"}
    rimColor={light ? "#8ECAE6" : "#E63946"}
  />
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" className="w-7 h-7 fill-current" aria-hidden="true">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export const FloatingWhatsApp = () => (
  <motion.a
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
    href={CONTACT.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="floating-whatsapp-btn"
    aria-label="Book a court on WhatsApp"
    className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_14px_38px_rgba(37,211,102,0.6)] transition-all duration-300"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    <WhatsAppIcon />
  </motion.a>
);
