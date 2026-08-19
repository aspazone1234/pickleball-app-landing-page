import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS, CONTACT, BRANCHES } from "../../data/content";
import { Reveal } from "./Reveal";
import { MiniBall } from "./Doodles";

export const Footer = () => (
  <footer data-testid="footer-section" className="bg-[#0F172A] noise-overlay pt-24 pb-10 relative overflow-hidden">
    <MiniBall className="absolute top-16 right-[6%] w-12 h-12 sm:w-16 sm:h-16 opacity-60" />
    <div className="max-w-7xl mx-auto px-6 relative">
      <Reveal>
        <div className="flex items-end gap-5 sm:gap-8">
          <img src={ASSETS.apClubLogo} alt="AP Club logo" data-testid="footer-apclub-logo"
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-2xl object-cover shrink-0 ring-1 ring-white/15 mb-2 sm:mb-4" />
          <div>
            <h2 className="heading uppercase text-white leading-[0.85] tracking-tighter text-[15vw] sm:text-[11vw] lg:text-[9rem] select-none">
              AP <span className="text-[#E63946]">Club.</span>
            </h2>
            <p data-testid="footer-apclub-tagline" className="heading uppercase text-[#8ECAE6] tracking-[0.2em] text-xs sm:text-lg mt-2">
              Endless Experiences
            </p>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-4 gap-10 mt-16 border-t border-white/10 pt-12">
        <div>
          <img src={ASSETS.logo} alt="AP Pickleball Club logo" className="h-16 w-auto mb-4" />
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Gujarat's home of pickleball. Two arenas, 15 dedicated courts, open 24×7 — play, train, compete, connect.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8ECAE6] mb-5">Get in touch</p>
          <div className="space-y-3 text-sm text-white/70">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
              <MessageCircle size={15} className="text-[#E63946]" /> {CONTACT.whatsapp}
            </a>
            <a href={`tel:${CONTACT.phone.replace(/ /g, "")}`} data-testid="footer-phone" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
              <Phone size={15} className="text-[#E63946]" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
              <Mail size={15} className="text-[#E63946]" /> {CONTACT.email}
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8ECAE6] mb-5">Explore</p>
          <div className="space-y-3 text-sm text-white/70">
            <Link to="/contact" data-testid="footer-contact-link" className="block hover:text-white transition-colors w-fit">Contact Us</Link>
            <Link to="/bollywood-vibes" data-testid="footer-bollywood-link" className="block hover:text-white transition-colors w-fit">Bollywood Vibes</Link>
            <Link to="/tcd-cafe" data-testid="footer-tcd-link" className="block hover:text-white transition-colors w-fit">TCD Cafe</Link>
            <a href={CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer" data-testid="footer-website" className="block hover:text-white transition-colors w-fit">
              {CONTACT.website}
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8ECAE6] mb-5">Follow us</p>
          <div className="space-y-3 text-sm text-white/70">
            {BRANCHES.map((b) => (
              <a key={b.id} href={b.instaUrl} target="_blank" rel="noopener noreferrer" data-testid={`footer-insta-${b.id}`}
                className="flex items-center gap-3 hover:text-white transition-colors w-fit">
                <Instagram size={15} className="text-[#E63946]" /> {b.insta}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>© {new Date().getFullYear()} AP Pickleball Club · Ahmedabad × Gandhinagar · Open 24×7</p>
        <p>Play. Train. Compete. Connect.</p>
      </div>
    </div>
  </footer>
);
