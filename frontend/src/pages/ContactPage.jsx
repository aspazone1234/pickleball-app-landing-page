import { MapPin, Clock, Navigation, Phone, Instagram, Mail, MessageCircle, Globe } from "lucide-react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { Reveal } from "../components/landing/Reveal";
import { BRANCHES, CONTACT } from "../data/content";

const BranchCard = ({ b, delay }) => (
  <Reveal delay={delay}>
    <div data-testid={`contact-branch-card-${b.id}`}
      className="bg-white border border-[#0F172A]/10 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(15,23,42,0.06)] h-full flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img src={b.img} alt={`${b.name} courts`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
        <span className="absolute bottom-4 left-5 bg-[#E63946] text-white text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full">{b.courts}</span>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h2 className="heading text-3xl uppercase text-[#0F172A] leading-none">{b.name}</h2>
        <p className="text-[#E63946] font-bold text-sm mt-2 tracking-wide uppercase">{b.city}</p>

        <div className="mt-6 space-y-4 text-sm text-[#475569] flex-1">
          <p className="flex gap-3"><MapPin size={17} className="text-[#E63946] shrink-0 mt-0.5" /> {b.address}</p>
          {b.phones.map((ph) => (
            <a key={ph} href={`tel:${ph.replace(/ /g, "")}`} data-testid={`contact-phone-${b.id}-${ph.replace(/[^0-9]/g, "")}`}
              className="flex gap-3 items-center hover:text-[#E63946] transition-colors w-fit">
              <Phone size={16} className="text-[#E63946] shrink-0" /> {ph}
            </a>
          ))}
          <p className="flex gap-3 items-center"><Clock size={16} className="text-[#E63946] shrink-0" /> {b.hours} — all days</p>
          <a href={b.instaUrl} target="_blank" rel="noopener noreferrer" data-testid={`contact-insta-${b.id}`}
            className="flex gap-3 items-center hover:text-[#E63946] transition-colors w-fit">
            <Instagram size={16} className="text-[#E63946] shrink-0" /> {b.insta}
          </a>
        </div>

        <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" data-testid={`contact-directions-${b.id}`}
          className="pill-btn bg-[#0F172A] text-white px-7 py-3 mt-8 w-fit inline-flex items-center gap-2"
          aria-label={`Get directions to ${b.name}`}>
          <Navigation size={15} /> Get Directions
        </a>
      </div>
    </div>
  </Reveal>
);

export default function ContactPage() {
  return (
    <div data-testid="contact-page" className="bg-[#F8F9FA] min-h-screen">
      <Navbar />

      <header className="bg-[#0F172A] noise-overlay relative pt-[72px]">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 relative">
          <Reveal>
            <p className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#8ECAE6] mb-5">Two arenas · Open 24×7</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading uppercase text-white leading-[0.9] tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
              Get In <span className="text-[#E63946]">Touch.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 max-w-md mt-6 leading-relaxed">
              Courts, coaching, academy or events — reach the branch closest to you. We're on the other side of the line, 24 hours a day.
            </p>
          </Reveal>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {BRANCHES.map((b, i) => (
            <BranchCard key={b.id} b={b} delay={i * 0.12} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-card"
              className="group bg-white border border-[#0F172A]/10 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(15,23,42,0.1)] transition-all duration-300">
              <span className="w-11 h-11 rounded-full bg-[#E63946]/10 text-[#E63946] flex items-center justify-center mb-4"><MessageCircle size={20} /></span>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#64748B]">WhatsApp Bookings</p>
              <p className="font-bold text-[#0F172A] mt-1.5">{CONTACT.whatsapp}</p>
            </a>
            <a href={`mailto:${CONTACT.email}`} data-testid="contact-email-card"
              className="group bg-white border border-[#0F172A]/10 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(15,23,42,0.1)] transition-all duration-300">
              <span className="w-11 h-11 rounded-full bg-[#E63946]/10 text-[#E63946] flex items-center justify-center mb-4"><Mail size={20} /></span>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#64748B]">Email us</p>
              <p className="font-bold text-[#0F172A] mt-1.5 break-all">{CONTACT.email}</p>
            </a>
            <a href={CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-website-card"
              className="group bg-white border border-[#0F172A]/10 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(15,23,42,0.1)] transition-all duration-300">
              <span className="w-11 h-11 rounded-full bg-[#E63946]/10 text-[#E63946] flex items-center justify-center mb-4"><Globe size={20} /></span>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#64748B]">Book online</p>
              <p className="font-bold text-[#0F172A] mt-1.5">{CONTACT.website}</p>
            </a>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
