"use client";

import { FadeIn } from "../Animations";
import { BookOpenText, ExternalLink } from "lucide-react";

type ReferenceItem = {
  text: string;
  href?: string;
};

const referencias: ReferenceItem[] = [
  {
    text: "Granados, M., Zapata, J. M., Farhang, Y., Torres, S., y grupo de trabajo. (2026). Desarrollo de producto: TAOP KIT PRO. Institución Universitaria de Envigado.",
  },
  {
    text: "Microsoft Forms. (2026). Encuesta sobre necesidades y cuidado de mascotas en estudiantes universitarios. Microsoft Corporation.",
    href: "https://forms.cloud.microsoft/",
  },
  {
    text: "American Veterinary Medical Association (AVMA). (s.f.). Pet care and animal welfare. Recuperado de https://www.avma.org",
    href: "https://www.avma.org",
  },
  {
    text: "World Small Animal Veterinary Association (WSAVA). (s.f.). Animal wellness and veterinary guidelines. Recuperado de https://wsava.org",
    href: "https://wsava.org",
  },
  {
    text: "Kotler, P., y Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.",
  },
  {
    text: "Stanton, W., Etzel, M., y Walker, B. (2007). Fundamentos de marketing (14.ª ed.). McGraw-Hill.",
  },
  {
    text: "Schiffman, L., y Wisenblit, J. (2015). Comportamiento del consumidor (11.ª ed.). Pearson Educación.",
  },
  {
    text: "Economipedia. (2022). Segmentación demográfica: definición y concepto. https://economipedia.com/definiciones/segmentacion-demografica.html",
    href: "https://economipedia.com/definiciones/segmentacion-demografica.html",
  },
  {
    text: "Economipedia. (2022). Segmentación de mercado. https://economipedia.com/definiciones/segmentacion-de-mercado.html",
    href: "https://economipedia.com/definiciones/segmentacion-de-mercado.html",
  },
  {
    text: "FromDoppler. (2025). Segmentación de mercado: qué es, tipos y cómo aplicarla paso a paso. https://www.fromdoppler.com/blog/segmentacion-de-mercado-que-es-tipos-y-como-aplicarla-paso-a-paso",
    href: "https://www.fromdoppler.com/blog/segmentacion-de-mercado-que-es-tipos-y-como-aplicarla-paso-a-paso",
  },
  {
    text: "FromDoppler. (2025). Tipos de segmentación de mercado. https://www.fromdoppler.com/blog/segmentacion-de-mercado-que-es-tipos-y-como-aplicarla-paso-a-paso",
    href: "https://www.fromdoppler.com/blog/segmentacion-de-mercado-que-es-tipos-y-como-aplicarla-paso-a-paso",
  },
  {
    text: "HubSpot. (2024). Segmentación demográfica: variables y ejemplos. https://blog.hubspot.es/marketing/segmentacion-demografica",
    href: "https://blog.hubspot.es/marketing/segmentacion-demografica",
  },
  {
    text: "HubSpot. (2024). Segmentación psicográfica: qué es y ejemplos. https://blog.hubspot.es/marketing/segmentacion-psicografica",
    href: "https://blog.hubspot.es/marketing/segmentacion-psicografica",
  },
  {
    text: "Investopedia. (2024). Behavioral segmentation. https://www.investopedia.com/terms/b/behavioral-segmentation.asp",
    href: "https://www.investopedia.com/terms/b/behavioral-segmentation.asp",
  },
  {
    text: "One.com. (2024). Guía para principiantes: público objetivo y segmentación. https://www.one.com/es-es/marketing-digital/guia-para-principiantes-publico-objetivo",
    href: "https://www.one.com/es-es/marketing-digital/guia-para-principiantes-publico-objetivo",
  },
];

export default function ReferenciasSection() {
  return (
    <section id="referencias" className="relative py-24 px-6 bg-gradient-to-b from-[#081212] via-[#071414] to-[#081212] dot-pattern">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Soporte Teórico
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Referencias (APA 7)</h2>
            <p className="text-teal-100/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Fuentes utilizadas para sustentar la investigación, segmentación y estrategia del proyecto.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="glass-card-strong rounded-3xl border border-white/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-amber-950/30 via-[#071414]/40 to-teal-950/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center">
                <BookOpenText className="w-5 h-5 text-amber-300" />
              </div>
              <div className="text-white font-extrabold">Listado de referencias</div>
            </div>

            <ol className="p-6 space-y-4 text-teal-100/75">
              {referencias.map((ref, idx) => {
                const content = (
                  <span className="text-sm leading-relaxed">{ref.text}</span>
                );

                return (
                  <li key={idx} className="pl-6 -indent-6">
                    <span className="mr-2 text-teal-300/50">{idx + 1}.</span>
                    {ref.href ? (
                      <a
                        href={ref.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors inline"
                      >
                        {content}
                        <ExternalLink className="inline-block w-4 h-4 ml-1 align-text-bottom text-teal-300/60" />
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

