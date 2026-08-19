import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ASSETS, CONTACT } from "../../data/content";

const sectionLinks = [
  { label: "Reviews", href: "#reviews" },
  { label: "Courts", href: "#branches" },
  { label: "Book", href: "#booking" },
  { label: "Media", href: "#instagram" },
];

const pageLinks = [
  { label: "Bollywood Vibes", to: "/bollywood-vibes" },
  { label: "TCD Cafe", to: "/tcd-cafe" },
];

const SectionLink = ({ href, className, children, onNavigate, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onClick = (e) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + href);
    }
    onNavigate?.();
  };
  return (
    <a href={href} onClick={onClick} className={className} {...rest}>{children}</a>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <motion.header
      data-testid="main-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/85 border-b border-[#0F172A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-3">
        <Link to="/" data-testid="nav-logo-link" className="flex items-center gap-3 shrink-0" aria-label="AP Pickleball Club home" onClick={close}>
          <img src={ASSETS.logo} alt="AP Pickleball Club logo" className="h-11 w-auto drop-shadow-sm" />
          <span className="heading text-sm sm:text-base tracking-tight text-[#0F172A] uppercase hidden xl:block">
            AP Pickleball <span className="text-[#E63946]">Club</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {sectionLinks.map((l) => (
            <SectionLink key={l.href} href={l.href} data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm font-semibold text-[#0F172A]/70 hover:text-[#E63946] transition-colors duration-200 tracking-wide">
              {l.label}
            </SectionLink>
          ))}
          {pageLinks.map((l) => (
            <Link key={l.to} to={l.to} data-testid={`nav-page-link-${l.to.slice(1)}`}
              className="text-sm font-semibold text-[#0F172A]/70 hover:text-[#E63946] transition-colors duration-200 tracking-wide">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-2.5">
            <Link to="/contact" data-testid="nav-contact-btn"
              className="pill-btn bg-[#0F172A] text-white text-sm px-5 py-2.5" aria-label="Go to contact page">
              Contact Us
            </Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="nav-book-cta"
              className="pill-btn bg-[#E63946] text-white text-sm px-5 py-2.5" aria-label="Book a court on WhatsApp">
              Book a Court
            </a>
          </div>
          <button onClick={() => setOpen(!open)} data-testid="mobile-menu-button"
            className="lg:hidden w-11 h-11 rounded-full border border-[#0F172A]/15 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors"
            aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[#0F172A]/10"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {sectionLinks.map((l) => (
                <SectionLink key={l.href} href={l.href} onNavigate={close}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  className="heading uppercase text-2xl text-[#0F172A] py-2.5 border-b border-[#0F172A]/5 hover:text-[#E63946] transition-colors">
                  {l.label}
                </SectionLink>
              ))}
              {pageLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={close}
                  data-testid={`mobile-nav-page-link-${l.to.slice(1)}`}
                  className="heading uppercase text-2xl text-[#0F172A] py-2.5 border-b border-[#0F172A]/5 hover:text-[#E63946] transition-colors">
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-5">
                <Link to="/contact" onClick={close} data-testid="mobile-nav-contact-btn"
                  className="pill-btn bg-[#0F172A] text-white text-sm px-6 py-3 flex-1">
                  Contact Us
                </Link>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={close}
                  data-testid="mobile-nav-book-btn"
                  className="pill-btn bg-[#E63946] text-white text-sm px-6 py-3 flex-1">
                  Book a Court
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
