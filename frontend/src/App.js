import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import ContactPage from "./pages/ContactPage";
import BollywoodVibesPage from "./pages/BollywoodVibesPage";
import TcdCafePage from "./pages/TcdCafePage";

const Home = () => (
  <div data-testid="home-page">
    <Navbar />
    <Hero />
    <StatsMarquee />
    <Reviews />
    <Branches />
    <Booking />
    <InstagramMedia />
    <Ventures />
    <Footer />
  </div>
);

const ScrollManager = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const t = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
          else el.scrollIntoView();
        }
      }, 400);
      return () => clearTimeout(t);
    }
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
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
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bollywood-vibes" element={<BollywoodVibesPage />} />
        <Route path="/tcd-cafe" element={<TcdCafePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
