"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FadeIn } from "../Animations";
import { Target, TrendingUp, Users, HeartHandshake, Download, X, Maximize2, ZoomIn, ZoomOut, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function BuyerPersonaSection() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = [
    {
      src: "/buyer.jpg",
      alt: "Perfil de Buyer Persona - Parte 1",
      downloadName: "Buyer_Persona_1.jpg",
      label: "Descargar",
    },
    {
      src: "/buyerimg2.jpeg",
      alt: "Perfil de Buyer Persona - Parte 2",
      downloadName: "Buyer_Persona_2.jpeg",
      label: "Descargar",
    },
    {
      src: "/buyerimage3.jpeg",
      alt: "Perfil de Buyer Persona - Parte 3",
      downloadName: "Buyer_Persona_3.jpeg",
      label: "Descargar",
    },
  ];

  const currentImageInfo = images.find(img => img.src === zoomedImage);

  return (
    <section id="comprador" className="relative py-28 px-6 bg-[#071414] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm font-semibold text-purple-400 mb-6">
              <Users className="w-4 h-4" />
              Perfil del Cliente Ideal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Comprador
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8 items-stretch">
          <FadeIn className="w-full">
            <div className="glass-card-strong rounded-3xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Objetivo</h4>
              </div>
              <p className="text-teal-100/80 leading-relaxed text-lg">
                Mejorar el cuidado y la organización de las mascotas mediante kits personalizados e información confiable desde la página web, aumentando en un 30% los clientes de TAOP KIT PRO durante los próximos 12 meses.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <div key={index} className="glass-card rounded-3xl p-5 md:p-6 border border-white/10 flex flex-col items-center h-full">
                  <div 
                    className="relative w-full rounded-2xl overflow-hidden mb-6 border border-white/5 bg-black/40 flex-1 flex items-center justify-center cursor-pointer group"
                    onClick={() => setZoomedImage(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto max-h-[400px] object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-in-out group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <span className="bg-purple-500 text-white rounded-full p-3 shadow-lg flex items-center gap-2 font-semibold">
                         <Maximize2 className="w-5 h-5"/> Ampliar
                       </span>
                    </div>
                  </div>
                  <a
                    href={img.src}
                    download={img.downloadName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 w-full justify-center bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-full transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 text-sm"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>{img.label}</span>
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Render rest of the component layout... -> Meta cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 mt-4">
            <FadeIn delay={0.2} className="h-full">
              <div className="glass-card rounded-3xl p-6 md:p-8 h-full border border-white/5 flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">Meta 1</h5>
                <p className="text-teal-100/90 font-semibold mb-6">
                  Aumentar en un 40% el reconocimiento de TAOP KIT PRO en estudiantes y familias dueñas de mascotas durante los próximos 6 meses.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h6 className="text-sm uppercase tracking-wider text-teal-100/50 mb-4 font-semibold">Tácticas</h6>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                      <span>Publicar contenido educativo en redes sociales tres veces por semana durante los próximos 6 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                      <span>Compartir testimonios y experiencias reales de clientes dos veces al mes durante 6 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                      <span>Realizar alianzas con veterinarias y tiendas para mascotas durante los próximos 4 meses.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="glass-card rounded-3xl p-6 md:p-8 h-full border border-white/5 flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">Meta 2</h5>
                <p className="text-teal-100/90 font-semibold mb-6">
                  Incrementar en un 25% las ventas de kits personalizados a través de la página web durante los próximos 8 meses.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h6 className="text-sm uppercase tracking-wider text-teal-100/50 mb-4 font-semibold">Tácticas</h6>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                      <span>Crear promociones y descuentos para nuevos clientes cada mes durante los próximos 8 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                      <span>Diseñar kits personalizados según las necesidades de cada mascota durante todo el proceso de venta en los próximos 8 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                      <span>Optimizar el proceso de compra y pagos en la página web durante los primeros 3 meses del proyecto.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="h-full">
              <div className="glass-card rounded-3xl p-6 md:p-8 h-full border border-white/5 flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">Meta 3</h5>
                <p className="text-teal-100/90 font-semibold mb-6">
                  Lograr que el 80% de los clientes se sientan satisfechos con el servicio y vuelvan a comprar durante los próximos 12 meses.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h6 className="text-sm uppercase tracking-wider text-teal-100/50 mb-4 font-semibold">Tácticas</h6>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                      <span>Ofrecer asesoría personalizada antes y después de cada compra durante los próximos 12 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                      <span>Realizar seguimiento a la experiencia de los clientes una semana después de cada compra durante el próximo año.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                      <span>Implementar recompensas y descuentos para clientes frecuentes a partir del tercer mes del proyecto y mantenerlas durante los 12 meses.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Framed style with Portal) */}
      {mounted && createPortal(
        <AnimatePresence>
          {zoomedImage && currentImageInfo && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomedImage(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-[#0b1717] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col render-layer"
              >
                <TransformWrapper
                  initialScale={1}
                  minScale={0.5}
                  maxScale={4}
                  centerOnInit
                  wheel={{ step: 0.1 }}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      <div className="p-4 md:p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 z-10 relative">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                            <Maximize2 className="w-5 h-5 text-purple-400" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            Vista Ampliada
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          {/* Zoom Controls */}
                          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 mr-2 border border-white/10">
                            <button
                              onClick={() => zoomOut()}
                              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                              title="Alejar"
                            >
                              <ZoomOut className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => resetTransform()}
                              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                              title="Restablecer"
                            >
                              <RefreshCcw className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => zoomIn()}
                              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                              title="Acercar"
                            >
                              <ZoomIn className="w-4 h-4" />
                            </button>
                          </div>

                          <a
                            href={currentImageInfo.src}
                            download={currentImageInfo.downloadName}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full hidden md:flex items-center gap-2 transition-colors text-sm"
                          >
                            <Download className="w-4 h-4" />
                            Descargar
                          </a>
                          <button
                            onClick={() => setZoomedImage(null)}
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-rose-400 hover:text-rose-300 transition-colors ml-2"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-2 md:p-8 bg-black/40 flex items-center justify-center max-h-[75vh] overflow-hidden relative cursor-move">
                        <TransformComponent wrapperClass="w-full h-full flex items-center justify-center">
                          <img 
                            src={zoomedImage} 
                            alt={currentImageInfo.alt} 
                            className="max-w-full h-auto max-h-[70vh] object-contain rounded-xl drop-shadow-2xl"
                            draggable={false}
                          />
                        </TransformComponent>
                      </div>
                    </>
                  )}
                </TransformWrapper>

                <div className="p-4 border-t border-white/5 bg-black/20 text-center flex md:hidden justify-center">
                  <a
                    href={currentImageInfo.src}
                    download={currentImageInfo.downloadName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full flex items-center gap-2 text-sm justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Descargar Imagen
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
