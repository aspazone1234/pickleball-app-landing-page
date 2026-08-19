import Marquee from "react-fast-marquee";

const items = ["15 Dedicated Courts", "2 Arenas", "4.9★ on Google", "Open 24 × 7", "AP Pickleball Academy", "Coaching & Leagues", "Est. 2021", "Ahmedabad × Gandhinagar"];

export const StatsMarquee = () => (
  <div data-testid="stats-marquee" className="bg-[#0F172A] py-5 border-y-4 border-[#E63946] overflow-hidden">
    <Marquee speed={35} gradient={false} autoFill>
      {items.map((t) => (
        <span key={t} className="flex items-center mx-8">
          <span className="heading text-white uppercase text-lg sm:text-xl tracking-wide">{t}</span>
          <span className="ml-16 w-3 h-3 rounded-full bg-[#E63946] inline-block" />
        </span>
      ))}
    </Marquee>
  </div>
);
