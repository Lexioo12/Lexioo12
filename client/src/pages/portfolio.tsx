import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import ArtworkGallery from "@/components/portfolio/ArtworkGallery";
import TankSetup from "@/components/portfolio/TankSetup";
import Contact from "@/components/portfolio/Contact";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import Lightbox from "@/components/portfolio/Lightbox";

export default function Portfolio() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Font Awesome
    const fontAwesome = document.createElement("link");
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    fontAwesome.rel = "stylesheet";
    document.head.appendChild(fontAwesome);

    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-tanki-dark text-tanki-light overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <ArtworkGallery />
      <TankSetup />
      <Contact />
      <Lightbox />
      
      {/* Footer */}
      <footer className="py-12 bg-tanki-dark border-t border-tanki-orange/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="radar-blip"></div>
              <span className="font-orbitron font-bold text-tanki-orange">KEEP-CRY</span>
            </div>
            
            <div className="text-center text-tanki-light/60 text-sm">
              <p>© 2024 Keep-Cry. Fan content, not officially affiliated with Tanki Online.</p>
              <p className="mt-1">Built with passion for the Tanki community.</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="social-icon text-xl">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="social-icon text-xl">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-icon text-xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
