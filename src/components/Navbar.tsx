"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, PawPrint, X } from "lucide-react";

const primaryLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#equipo", label: "Equipo" },
  { href: "#investigacion", label: "Estudio" },
  { href: "#descripcion", label: "Producto" },
  { href: "#foda", label: "FODA" },
];

const moreLinks = [
  { href: "#niveles", label: "Niveles" },
  { href: "#cim", label: "CIM" },
  { href: "#costos", label: "Costos" },
  { href: "#objetivo", label: "Objetivo" },
  { href: "#segmentacion", label: "Segmentación" },
  { href: "#referencias", label: "Referencias" },
];

const allLinks = [...primaryLinks, ...moreLinks];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const current = [...allLinks].reverse().find((link) => {
        const section = document.querySelector(link.href);
        if (!section) return false;
        return section.getBoundingClientRect().top <= 140;
      });

      if (current) setActiveHash(current.href);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = (href: string) => {
    setActiveHash(href);
    setMobileOpen(false);
    setMoreOpen(false);
  };

  const linkClass = (href: string) =>
    `px-3.5 py-2 text-xs xl:text-sm rounded-full transition-all duration-200 ${
      activeHash === href
        ? "bg-teal-400/20 text-white border border-teal-300/20"
        : "text-teal-100/70 border border-transparent hover:text-white hover:bg-white/5"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3 md:px-4"
      >
        <div
          className={`max-w-6xl mx-auto h-14 md:h-16 rounded-full border px-3 md:px-4 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-[#071414]/90 border-teal-300/20 backdrop-blur-2xl shadow-2xl shadow-black/30"
              : "bg-[#071414]/60 border-white/10 backdrop-blur-xl"
          }`}
        >
          <a href="#hero" onClick={() => closeMenus("#hero")} className="flex items-center gap-2 group shrink-0">
            <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-teal-500/10 border border-teal-400/20 flex items-center justify-center">
              <PawPrint className="w-4 h-4 md:w-5 md:h-5 text-teal-300 group-hover:rotate-12 transition-transform" />
            </span>
            <span className="font-bold text-sm sm:text-base md:text-lg text-white leading-none">
              TAOP <span className="gradient-text">KIT PRO</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => closeMenus(link.href)} className={linkClass(link.href)}>
                {link.label}
              </a>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                className={`inline-flex items-center gap-1.5 ${linkClass(moreLinks.some((link) => link.href === activeHash) ? activeHash : "#more")}`}
                aria-expanded={moreOpen}
                aria-label="Abrir más secciones"
              >
                Más
                <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-[#071414]/95 backdrop-blur-2xl p-2 shadow-2xl shadow-black/35"
                  >
                    {moreLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => closeMenus(link.href)}
                        className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                          activeHash === link.href
                            ? "bg-teal-400/10 text-white"
                            : "text-teal-100/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            className="lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-teal-100 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => {
              setMobileOpen((open) => !open);
              setMoreOpen(false);
            }}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[#071414]/98 backdrop-blur-2xl px-4 pt-24 pb-8"
          >
            <div className="max-w-sm mx-auto grid gap-2">
              {allLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.035 }}
                  onClick={() => closeMenus(link.href)}
                  className={`rounded-2xl px-5 py-3.5 text-base font-semibold border transition-colors ${
                    activeHash === link.href
                      ? "bg-teal-400/10 border-teal-300/20 text-white"
                      : "border-white/10 text-teal-100/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
