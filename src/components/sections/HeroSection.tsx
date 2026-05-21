"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../Animations";
import { PawPrint, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-14"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-pet.png"
          alt="Mascota feliz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a1a]/80 via-[#0c1a1a]/60 to-[#0c1a1a]" />
      </div>

      {/* Floating paws decoration */}
      <PawPrint className="hidden sm:block absolute top-20 left-[10%] w-12 h-12 text-teal-400/20 animate-float" />
      <PawPrint className="hidden sm:block absolute top-40 right-[15%] w-8 h-8 text-amber-400/20 animate-float-delayed" />
      <PawPrint className="hidden sm:block absolute bottom-40 left-[20%] w-10 h-10 text-teal-300/15 animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <FadeIn delay={0.2}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full glass-card mb-6 md:mb-8"
          >
            <PawPrint className="w-4 h-4 text-teal-400" />
            <span className="text-xs sm:text-sm text-teal-200 tracking-wider uppercase font-medium">
              Cuidado integral para mascotas
            </span>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">TAOP</span>{" "}
            <span className="text-white">KIT</span>{" "}
            <span className="gradient-text-coral">PRO</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-sm sm:text-lg md:text-xl text-teal-100/80 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Descubre la primera <strong className="text-white font-medium">solución integral</strong> que revolucionará el cuidado de tu mascota. 
            Combinamos <span className="text-amber-300">productos personalizados</span>, <span className="text-teal-300">asesoría confiable</span> y una 
            organización perfecta en un solo sistema.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#descripcion"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40 hover:scale-105"
            >
              Explorar Proyecto
            </a>
            <a
              href="#niveles"
              className="px-8 py-3 glass-card text-teal-200 font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Niveles del Producto
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-teal-400/60" />
      </motion.div>
    </section>
  );
}
