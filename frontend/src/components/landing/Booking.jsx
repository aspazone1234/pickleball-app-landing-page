import { Smartphone, Globe, MessageCircle } from "lucide-react";
import { BOOKING_WAYS, CONTACT, ASSETS, APP_LINKS } from "../../data/content";
import { Reveal, SectionHead } from "./Reveal";
import { MiniBall } from "./Doodles";

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

const AppleLogo = () => (
  <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const PlayLogo = () => (
  <svg viewBox="0 0 512 512" className="w-5 h-5" aria-hidden="true">
    <path fill="#2196F3" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
    <path fill="#4CAF50" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
    <path fill="#FFC107" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
    <path fill="#F44336" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const StoreBadge = ({ href, icon, top, bottom, testId }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" data-testid={testId}
    className="inline-flex items-center gap-2.5 bg-[#0F172A] text-white rounded-xl px-4 py-2 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.25)] transition-all duration-300"
    aria-label={`${top} ${bottom}`}>
    {icon}
    <span className="text-left leading-tight">
      <span className="block text-[9px] opacity-70">{top}</span>
      <span className="block text-xs font-bold">{bottom}</span>
    </span>
  </a>
);

const icons = { app: Smartphone, website: Globe, whatsapp: MessageCircle };
const screens = { app: AppScreen, website: WebScreen, whatsapp: WhatsAppScreen };
const tilts = ["md:-rotate-3 md:translate-y-4", "md:-translate-y-3", "md:rotate-3 md:translate-y-4"];
const hrefs = { app: APP_LINKS.appStore, website: CONTACT.websiteUrl, whatsapp: CONTACT.whatsappUrl };

export const Booking = () => (
  <section id="booking" data-testid="booking-section" className="py-24 sm:py-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 court-grid opacity-50 pointer-events-none" />
    <MiniBall className="absolute top-16 right-[6%] w-9 h-9 sm:w-12 sm:h-12 opacity-70" />
    <div className="max-w-7xl mx-auto px-6 relative">
      <SectionHead chapter="03" sub="Booking made easy" title={<>3 Ways to<br /><span className="text-[#E63946]">Book Online</span></>} />

      <div className="grid md:grid-cols-3 gap-14 md:gap-6">
        {BOOKING_WAYS.map((w, i) => {
          const Icon = icons[w.id];
          const Screen = screens[w.id];
          return (
            <Reveal key={w.id} delay={i * 0.15}>
              <div className="group text-center" data-testid={`booking-way-${w.id}`}>
                <a href={hrefs[w.id]} target="_blank" rel="noopener noreferrer"
                  className="flex justify-center" aria-label={`Book via ${w.label}`} data-testid={`booking-mockup-link-${w.id}`}>
                  <PhoneFrame tilt={tilts[i]}><Screen /></PhoneFrame>
                </a>
                <div className="mt-8">
                  <a href={hrefs[w.id]} target="_blank" rel="noopener noreferrer" data-testid={`booking-cta-${w.id}`}
                    className="pill-btn bg-[#E63946] text-white px-7 py-2.5 inline-flex items-center gap-2 text-sm group-hover:-translate-y-1">
                    <Icon size={16} /> {w.label}
                  </a>
                  <p className="heading text-[#1A1E89] text-lg mt-3 tracking-tight">{w.sub}</p>
                  {w.id === "app" ? (
                    <div className="flex justify-center gap-3 mt-3">
                      <StoreBadge href={APP_LINKS.appStore} icon={<AppleLogo />} top="Download on the" bottom="App Store" testId="booking-appstore-badge" />
                      <StoreBadge href={APP_LINKS.playStore} icon={<PlayLogo />} top="Get it on" bottom="Google Play" testId="booking-playstore-badge" />
                    </div>
                  ) : (
                    <a href={hrefs[w.id]} target="_blank" rel="noopener noreferrer" data-testid={`booking-link-${w.id}`}
                      className="inline-block mt-3 heading text-lg text-[#E63946] tracking-tight underline decoration-2 underline-offset-4 hover:text-[#0F172A] transition-colors"
                      aria-label={`${w.label}: ${w.linkText}`}>
                      {w.linkText}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
