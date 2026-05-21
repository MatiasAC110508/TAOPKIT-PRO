"use client";

import { useState, useEffect, useRef } from "react";
import { PawPrint, Menu, X, ChevronDown } from "lucide-react";
import { primaryLinks, moreLinks, allLinks } from "../data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateNavigationState = () => {
      frameRef.current = null;
      const nextIsScrolled = window.scrollY > 20;
      const sections = allLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setIsScrolled(previous => previous === nextIsScrolled ? previous : nextIsScrolled);
      if (current) {
        setActiveSection(previous => previous === current ? previous : current);
      }
    };

    const handleScroll = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateNavigationState);
      }
    };

    updateNavigationState();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-3 md:top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`
          flex items-center justify-between rounded-2xl md:rounded-full px-4 md:px-6 py-3 md:py-4 transition-all duration-300
          ${isScrolled
            ? "bg-[#0b1717]/90 md:bg-[#0b1717]/80 md:backdrop-blur-xl border border-teal-500/20 shadow-lg shadow-black/20"
            : "bg-transparent"}
        `}>
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => scrollTo('#hero')}>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <PawPrint className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-wide text-white">
              TAOP<span className="text-teal-400">KIT</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 bg-black/20 rounded-full p-1.5 border border-white/5">
            {primaryLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.href.substring(1)
                    ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                    : "text-teal-100/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </button>
            ))}

            {/* "More" Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${moreLinks.some(l => activeSection === l.href.substring(1)) || isMoreMenuOpen
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "text-teal-100/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                Más <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Content */}
              <div className={`
                absolute top-full right-0 mt-2 w-48 rounded-2xl bg-[#0b1717]/95 md:backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 origin-top-right
                ${isMoreMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
              `}>
                <div className="p-2 flex flex-col gap-1">
                  {moreLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                          ? "bg-teal-500/20 text-teal-300"
                          : "text-teal-100/70 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-[#0b1717]/95 md:backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 overflow-hidden
          ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-transparent"}
        `}>
          <div className="p-4 flex flex-col gap-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {allLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/20"
                    : "text-teal-100/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
