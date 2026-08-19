import { CupSoda, UtensilsCrossed, Armchair, Sparkles, Download, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { Reveal } from "../components/landing/Reveal";
import { ApClubTag } from "../components/landing/ApClubTag";
import { ASSETS, CONTACT } from "../data/content";

const HIGHLIGHTS = [
  { icon: CupSoda, title: "Mocktail Bar", text: "Colourful, layered, camera-ready mocktails — more mocktail bar than tea-and-coffee counter." },
  { icon: UtensilsCrossed, title: "Fresh Bites", text: "Pre-game fuel and post-match feasts. Loaded fries, sliders, sandwiches and more." },
  { icon: Armchair, title: "Courtside Hangout", text: "Comfy corners for friends and family while the rest of the gang finishes their rally." },
  { icon: Sparkles, title: "Pre-Party Zone", text: "Heading to Bollywood Vibes? Start (and end) the night at TCD." },
];

const MEDIA_SHOWCASE = [
  { src: ASSETS.tcdMocktails, label: "The mocktail lineup", span: "md:col-span-7" },
  { src: ASSETS.tcdFood, label: "Fresh from the kitchen", span: "md:col-span-5" },
  { src: ASSETS.tcdInterior, label: "Your table's waiting", span: "md:col-span-12" },
];

const menuWaUrl = `https://wa.me/918866677822?text=${encodeURIComponent("Hi! Could you share the TCD Cafe menu please? ☕🥤")}`;

export default function TcdCafePage() {
  return (
    <div data-testid="tcd-page" className="bg-[#FFF9F2] min-h-screen">
      <Navbar />

      <header className="relative pt-[72px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal>
              <p className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#E63946] mb-5">The cafe at AP Club</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading uppercase leading-[0.88] tracking-tighter text-[#0F172A] text-4xl sm:text-5xl lg:text-6xl">
                Eat. Sip.<br /><span className="text-[#E63946]">Chill.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[#475569] max-w-md mt-6 leading-relaxed">
                TCD Cafe is the food, mocktail and hangout heart of AP Club. Refuel between games, catch up with friends, or just chill while the rest of your crew plays on.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-9">
                <a href={menuWaUrl} target="_blank" rel="noopener noreferrer" data-testid="tcd-download-menu-btn"
                  className="pill-btn bg-[#E63946] text-white px-8 py-3.5" aria-label="Get the TCD Cafe menu on WhatsApp">
                  <Download size={17} /> Download Menu
                </a>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="tcd-whatsapp-btn"
                  className="pill-btn border-2 border-[#0F172A] text-[#0F172A] px-8 py-3.5 hover:bg-[#0F172A] hover:text-white">
                  <MessageCircle size={17} /> Say Hi on WhatsApp
                </a>
              </div>
            </Reveal>
            <div className="mt-8">
              <ApClubTag variant="light" delay={0.4} />
            </div>
          </div>
          <Reveal delay={0.25}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(15,23,42,0.2)] rotate-2">
                <img src={ASSETS.tcdMocktails} alt="Colourful mocktails at TCD Cafe" className="w-full h-[320px] sm:h-[420px] object-cover" data-testid="tcd-hero-image" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0F172A] text-white text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full rotate-[-2deg]">
                Mocktail Bar + Cafe
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div data-testid={`tcd-highlight-${i}`} className="bg-white border border-[#0F172A]/10 rounded-2xl p-7 h-full hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgb(15,23,42,0.1)] transition-all duration-300">
                <h.icon size={26} className="text-[#E63946] mb-4" />
                <h3 className="heading text-lg uppercase text-[#0F172A]">{h.title}</h3>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h2 className="heading uppercase text-[#0F172A] text-3xl sm:text-4xl leading-none mb-10">On the <span className="text-[#E63946]">Table</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {MEDIA_SHOWCASE.map((m, i) => (
              <Reveal key={i} delay={i * 0.1} className={m.span}>
                <div data-testid={`tcd-media-${i}`} className="group relative overflow-hidden rounded-2xl h-64 sm:h-80">
                  <img src={m.src} alt={m.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
                  <p className="absolute bottom-4 left-5 text-white font-bold text-sm">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-20 rounded-3xl bg-[#0F172A] noise-overlay relative p-10 sm:p-14 text-center overflow-hidden">
            <div className="relative">
              <h2 className="heading uppercase text-white text-3xl sm:text-4xl leading-none">Game over. <span className="text-[#8ECAE6]">Party on?</span></h2>
              <p className="text-white/60 max-w-md mx-auto mt-4 leading-relaxed">TCD is the perfect pre-party and post-party stop for Bollywood Vibes — mocktails first, dance floor next.</p>
              <Link to="/bollywood-vibes" data-testid="tcd-bv-link"
                className="pill-btn bg-[#E63946] text-white px-8 py-3.5 mt-8 inline-flex items-center gap-2">
                Explore Bollywood Vibes <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
