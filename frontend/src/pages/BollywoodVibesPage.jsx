import { Music, Disc3, PartyPopper, Download, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { Reveal } from "../components/landing/Reveal";
import { ASSETS, CONTACT } from "../data/content";

const OCCASIONS = [
  "DJ Nights", "Bollywood Theme Parties", "Birthday Parties", "Private Celebrations",
  "College & Youth Gatherings", "Corporate Events", "Themed Nights", "Night-Out Experiences",
];

const MEDIA_SHOWCASE = [
  { src: ASSETS.domeParty, label: "Inside the dome", span: "md:col-span-7" },
  { src: ASSETS.djCrowd, label: "Party all night", span: "md:col-span-5" },
  { src: ASSETS.bollywoodLights, label: "Neon nights", span: "md:col-span-12" },
];

const packagesWaUrl = `https://wa.me/918866677822?text=${encodeURIComponent("Hi! I'd like the Bollywood Vibes party packages details 🎉")}`;

export default function BollywoodVibesPage() {
  return (
    <div data-testid="bollywood-page" className="bg-[#0B1020] min-h-screen">
      <Navbar />

      <header className="relative pt-[72px] overflow-hidden">
        <img src={ASSETS.domeParty} alt="Bollywood Vibes dome party" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/80 via-[#0B1020]/60 to-[#0B1020]" />
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-36 relative">
          <Reveal>
            <p className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#F72585] mb-5">Music · Energy · Bollywood · Party</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading uppercase leading-[0.88] tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-white">
              Bollywood
              <span className="block" style={{ background: "linear-gradient(90deg,#F72585,#FFB703,#8ECAE6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Vibes.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/70 max-w-lg mt-6 leading-relaxed">
              An immersive DJ dome inside AP Club — 360° of Bollywood music, lights and party visuals. This is where the club goes from game mode to <b className="text-white">party mode</b>.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="heading text-xl sm:text-2xl text-[#FFB703] mt-8 uppercase tracking-tight">"Bollywood Vibes pe party all night!"</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href={packagesWaUrl} target="_blank" rel="noopener noreferrer" data-testid="bv-download-packages-btn"
                className="pill-btn text-white px-8 py-3.5" style={{ background: "linear-gradient(90deg,#F72585,#B5179E)" }}
                aria-label="Get party packages details on WhatsApp">
                <Download size={17} /> Download Party Packages
              </a>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="bv-book-btn"
                className="pill-btn border-2 border-white/40 text-white px-8 py-3.5 hover:bg-white hover:text-[#0B1020] hover:border-white">
                <MessageCircle size={17} /> Book Your Night
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Disc3, title: "The Immersive Dome", text: "An enclosed party dome with DJ-led entertainment, lasers and 360° visuals — far beyond any conventional venue." },
            { icon: Music, title: "Bollywood First", text: "High-energy Bollywood music, themed nights and DJ sets built for dancing till the lights come up." },
            { icon: PartyPopper, title: "Every Celebration", text: "Birthdays, private parties, corporate nights and college gatherings — the dome fits every occasion." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div data-testid={`bv-feature-${i}`} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 h-full hover:border-[#F72585]/50 transition-colors duration-300">
                <f.icon size={28} className="text-[#F72585] mb-5" />
                <h3 className="heading text-xl uppercase text-white">{f.title}</h3>
                <p className="text-sm text-white/60 mt-3 leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8ECAE6] mb-5">Perfect for</p>
            <div className="flex flex-wrap gap-3">
              {OCCASIONS.map((o) => (
                <span key={o} className="text-sm font-semibold text-white/80 border border-white/15 rounded-full px-5 py-2 hover:border-[#FFB703] hover:text-[#FFB703] transition-colors duration-300">
                  {o}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <h2 className="heading uppercase text-white text-3xl sm:text-4xl leading-none mb-10">Inside the <span className="text-[#F72585]">Dome</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {MEDIA_SHOWCASE.map((m, i) => (
              <Reveal key={i} delay={i * 0.1} className={m.span}>
                <div data-testid={`bv-media-${i}`} className="group relative overflow-hidden rounded-2xl h-64 sm:h-80">
                  <img src={m.src} alt={m.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 to-transparent" />
                  <p className="absolute bottom-4 left-5 text-white font-bold text-sm">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.04] p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 20%, #F7258533, transparent 45%), radial-gradient(circle at 80% 80%, #FFB70333, transparent 45%)" }} />
            <div className="relative">
              <h2 className="heading uppercase text-white text-3xl sm:text-4xl leading-none">Pre-party at <span className="text-[#FFB703]">TCD Cafe?</span></h2>
              <p className="text-white/60 max-w-md mx-auto mt-4 leading-relaxed">Fuel up on food and colourful mocktails before the dome — and wind down there after. It's all inside AP Club.</p>
              <Link to="/tcd-cafe" data-testid="bv-tcd-link"
                className="pill-btn bg-white text-[#0B1020] px-8 py-3.5 mt-8 inline-flex items-center gap-2">
                Visit TCD Cafe <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
