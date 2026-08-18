import { motion } from "framer-motion";
import { ASSETS, CONTACT } from "../../data/content";

const links = [
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#booking" },
  { label: "Branches", href: "#branches" },
  { label: "Media", href: "#instagram" },
  { label: "Ventures", href: "#ventures" },
];

export const Navbar = () => (
  <motion.header
    data-testid="main-navbar"
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#0F172A]/10"
  >
    <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
      <a href="#top" data-testid="nav-logo-link" className="flex items-center gap-3" aria-label="AP Pickleball Club home">
        <img src={ASSETS.logo} alt="AP Pickleball Club logo" className="h-12 w-auto drop-shadow-sm" />
        <span className="heading text-sm sm:text-base tracking-tight text-[#0F172A] uppercase hidden sm:block">
          AP Pickleball <span className="text-[#E63946]">Club</span>
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {links.map((l) => (
          <a key={l.href} href={l.href} data-testid={`nav-link-${l.label.toLowerCase()}`}
            className="text-sm font-semibold text-[#0F172A]/70 hover:text-[#E63946] transition-colors duration-200 tracking-wide">
            {l.label}
          </a>
        ))}
      </nav>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="nav-book-cta"
        className="pill-btn bg-[#E63946] text-white text-sm px-6 py-2.5" aria-label="Book a court on WhatsApp">
        Book a Court
      </a>
    </div>
  </motion.header>
);
