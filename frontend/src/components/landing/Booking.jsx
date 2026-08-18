import { Smartphone, Globe, MessageCircle, Apple, Play } from "lucide-react";
import { BOOKING_WAYS, CONTACT, ASSETS } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";

const PhoneFrame = ({ children, tilt }) => (
  <div className={`phone-frame ${tilt}`}>
    <div className="phone-notch" />
    <div className="flex-1 overflow-hidden rounded-[1.4rem] bg-white flex flex-col">{children}</div>
  </div>
);

const AppScreen = () => (
  <>
    <div className="px-3 pt-6 pb-2 text-[9px] text-[#94A3B8] font-semibold">App Store</div>
    <div className="px-3 flex gap-2 items-center">
      <img src={ASSETS.logo} alt="AP app icon" className="w-10 h-10 rounded-xl border border-[#0F172A]/10 object-contain bg-white" />
      <div>
        <p className="text-[10px] font-bold text-[#0F172A] leading-tight">AP Pickleball Club</p>
        <p className="text-[8px] text-[#94A3B8]">Sports · Ahmedabad</p>
      </div>
    </div>
    <div className="px-3 mt-2"><span className="bg-[#2563EB] text-white text-[8px] font-bold px-3 py-1 rounded-full">GET</span></div>
    <div className="px-3 mt-3 grid grid-cols-3 gap-1 text-center text-[7px] text-[#64748B]">
      <div className="border-r border-[#0F172A]/10"><p className="font-bold text-[9px] text-[#0F172A]">4.8★</p>Rating</div>
      <div className="border-r border-[#0F172A]/10"><p className="font-bold text-[9px] text-[#0F172A]">4+</p>Age</div>
      <div><p className="font-bold text-[9px] text-[#0F172A]">EN</p>Language</div>
    </div>
    <div className="mx-3 mt-3 rounded-lg bg-[#F1F5F9] flex-1 mb-3 p-2">
      <p className="text-[8px] font-bold text-[#0F172A]">What's New</p>
      <p className="text-[7px] text-[#64748B] mt-1">Instant slot booking & performance improvements</p>
    </div>
  </>
);

const WebScreen = () => (
  <>
    <div className="mx-3 mt-6 rounded-full bg-[#F1F5F9] px-3 py-1 text-[8px] text-[#475569] flex items-center gap-1">
      <span className="text-[#16A34A]">🔒</span> appickleballclub.com
    </div>
    <div className="mx-3 mt-2 h-14 rounded-lg overflow-hidden">
      <img src={ASSETS.hero} alt="Court preview" className="w-full h-full object-cover" />
    </div>
    <div className="mx-3 mt-2 flex gap-1">
      {["Court 1", "Court 2", "Court 3"].map((c, i) => (
        <span key={c} className={`text-[7px] font-bold px-2 py-1 rounded-full ${i === 0 ? "bg-[#0F172A] text-white" : "bg-[#F1F5F9] text-[#64748B]"}`}>{c}</span>
      ))}
    </div>
    <div className="mx-3 mt-2 grid grid-cols-6 gap-1 text-center">
      {[17, 18, 19, 20, 21, 22].map((d) => (
        <span key={d} className={`text-[8px] font-bold rounded-full py-1 ${d === 20 ? "bg-[#E63946] text-white" : "text-[#475569]"}`}>{d}</span>
      ))}
    </div>
    <div className="mx-3 mt-2 mb-3 flex-1 rounded-lg bg-[#F1F5F9] p-2">
      <p className="text-[8px] font-bold text-[#0F172A]">Slots Available</p>
      <div className="mt-1 space-y-1">
        <div className="bg-white rounded px-2 py-1 text-[7px] text-[#475569] flex justify-between"><span>7:00 – 8:00 PM</span><span className="text-[#16A34A] font-bold">Open</span></div>
        <div className="bg-white rounded px-2 py-1 text-[7px] text-[#475569] flex justify-between"><span>8:00 – 9:00 PM</span><span className="text-[#16A34A] font-bold">Open</span></div>
      </div>
    </div>
  </>
);

const WhatsAppScreen = () => (
  <>
    <div className="bg-[#075E54] px-3 pt-6 pb-2 flex items-center gap-2">
      <img src={ASSETS.logo} alt="AP club avatar" className="w-6 h-6 rounded-full bg-white object-contain" />
      <div>
        <p className="text-[9px] font-bold text-white leading-tight">AP Pickleball Club</p>
        <p className="text-[7px] text-white/70">{CONTACT.whatsapp}</p>
      </div>
    </div>
    <div className="flex-1 bg-[#ECE5DD] p-2 space-y-2">
      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-2 py-1 text-[8px] text-[#0F172A] ml-auto w-fit max-w-[80%]">Hi 👋 <span className="text-[6px] text-[#64748B] ml-1">8:16 PM ✓✓</span></div>
      <div className="bg-white rounded-lg rounded-tl-none px-2 py-1.5 text-[8px] text-[#0F172A] w-fit max-w-[85%]">
        <p className="font-bold">Book Your Game 🎾</p>
        <p className="mt-0.5 text-[#475569]">Ready to book? Click below to start!</p>
        <p className="mt-1 text-center text-[#2563EB] font-bold border-t border-[#0F172A]/10 pt-1">Book a Slot</p>
      </div>
    </div>
  </>
);

const icons = { app: Smartphone, website: Globe, whatsapp: MessageCircle };
const screens = { app: AppScreen, website: WebScreen, whatsapp: WhatsAppScreen };
const tilts = ["md:-rotate-3 md:translate-y-4", "md:-translate-y-3", "md:rotate-3 md:translate-y-4"];
const hrefs = { app: "https://apps.apple.com/in/app/ap-pickleball-club/id1669408798", website: CONTACT.websiteUrl, whatsapp: CONTACT.whatsappUrl };

export const Booking = () => (
  <section id="booking" data-testid="booking-section" className="py-24 sm:py-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 court-grid opacity-50 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative">
      <SectionHead chapter="02" sub="Booking made easy" title={<>3 Ways to<br /><span className="text-[#E63946]">Book Online</span></>} />

      <div className="grid md:grid-cols-3 gap-10 md:gap-6">
        {BOOKING_WAYS.map((w, i) => {
          const Icon = icons[w.id];
          const Screen = screens[w.id];
          return (
            <Reveal key={w.id} delay={i * 0.15}>
              <a href={hrefs[w.id]} target="_blank" rel="noopener noreferrer" data-testid={`booking-way-${w.id}`}
                className="group block text-center" aria-label={`Book via ${w.label}`}>
                <span className="pill-btn bg-[#E63946] text-white px-7 py-2.5 inline-flex items-center gap-2 text-sm group-hover:-translate-y-1">
                  <Icon size={16} /> {w.label}
                </span>
                <p className="heading text-[#1A1E89] text-lg mt-3 tracking-tight">{w.sub}</p>
                {w.id === "app" && (
                  <span className="flex justify-center gap-3 mt-1 text-[#0F172A]/70">
                    <Apple size={16} /> <Play size={15} />
                  </span>
                )}
                <div className="mt-6 flex justify-center">
                  <PhoneFrame tilt={tilts[i]}><Screen /></PhoneFrame>
                </div>
                <p className="text-sm text-[#475569] mt-6 max-w-[260px] mx-auto leading-relaxed">{w.detail}</p>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
