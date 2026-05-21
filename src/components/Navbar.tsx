"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#equipo", label: "Equipo" },
  { href: "#investigacion", label: "Estudio" },
  { href: "#descripcion", label: "¿Qué es?" },
  { href: "#niveles", label: "Niveles" },
  { href: "#cim", label: "CIM" },
  { href: "#costos", label: "Costos" },
  { href: "#objetivo", label: "Objetivo" },
  { href: "#foda", label: "FODA" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0c1a1a]/90 backdrop-blur-xl shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <PawPrint className="w-7 h-7 text-teal-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg text-white">
              TAOP <span className="gradient-text">KIT PRO</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-xs xl:text-sm text-teal-200/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-teal-200 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0c1a1a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-teal-100 hover:text-teal-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
