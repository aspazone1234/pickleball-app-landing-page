import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { Navbar } from "./components/landing/Navbar";
import { Hero } from "./components/landing/Hero";
import { StatsMarquee } from "./components/landing/StatsMarquee";
import { Reviews } from "./components/landing/Reviews";
import { Booking } from "./components/landing/Booking";
import { Branches } from "./components/landing/Branches";
import { InstagramMedia } from "./components/landing/InstagramMedia";
import { Ventures } from "./components/landing/Ventures";
import { Footer } from "./components/landing/Footer";

const Home = () => (
  <div data-testid="home-page">
    <Navbar />
    <Hero />
    <StatsMarquee />
    <Reviews />
    <Booking />
    <Branches />
    <InstagramMedia />
    <Ventures />
    <Footer />
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        const el = document.querySelector(a.getAttribute("href"));
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -72 });
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
