import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Método — RIBN",
  description:
    "Cómo profesionalizamos marcas y negocios digitales. El proceso RIBN en 3 fases.",
};

const steps = [
  {
    num: "01",
    title: "Diagnóstico y Estrategia",
    description:
      "Antes de escribir una línea de código, analizamos tu modelo de negocio, tu cliente ideal y el objetivo de conversión de la web. Definimos qué tiene que comunicar tu sitio, a quién le habla y qué acción queremos que tome el visitante.",
    details: [
      "Análisis de negocio y competencia",
      "Definición de público objetivo",
      "Estrategia de conversión",
      "Arquitectura de información",
    ],
  },
  {
    num: "02",
    title: "Arquitectura Visual",
    description:
      "Diseñamos interfaces minimalistas y asimétricas que capturan la atención y guían al usuario sin fricciones. Cada elemento tiene un propósito comercial: generar confianza, transmitir autoridad y llevar al visitante a la acción.",
    details: [
      "Diseño UI/UX premium",
      "Tipografía y paleta de marca",
      "Wireframes y prototipos",
      "Mobile-first responsive",
    ],
  },
  {
    num: "03",
    title: "Desarrollo y Lanzamiento",
    description:
      "Escribimos código limpio con la tecnología que mejor se adapte a tu proyecto. Sitios ultra rápidos, escalables y optimizados para SEO. Deploy profesional en infraestructura de primer nivel.",
    details: [
      "Tecnología a medida del proyecto",
      "SEO técnico optimizado",
      "Performance extrema (Core Web Vitals)",
      "Deploy profesional con dominio custom",
    ],
  },
];

export default function MetodoPage() {
  return (
    <main className="pt-16">
      {/* ═══════════════════════════════════════════
          HERO — Filosofía
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Orbs */}
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 relative z-10">
          <ScrollReveal>
            <p className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-semibold mb-10">
              <span className="w-12 h-[2px] bg-cyan-400/50" />
              Nuestra Filosofía
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-12"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              No hacemos plantillas.{" "}
              <span className="text-gradient">
                Construimos activos digitales.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-16 h-px bg-white/10 mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                RIBN nace con un objetivo claro:{" "}
                <strong className="text-white font-medium">
                  eliminar la brecha entre la calidad de tus servicios y cómo te
                  percibe el mundo digital.
                </strong>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                Entendemos la lógica de negocios. Por eso, no solo diseñamos
                sitios web; profesionalizamos marcas para que transmitan
                autoridad desde el primer segundo. Vimos que demasiados
                emprendedores excelentes tienen una presencia digital amateur que
                les hace perder ventas.{" "}
                <strong className="text-white font-medium">
                  Existimos para cerrar esa brecha.
                </strong>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EL MÉTODO — Sticky Scroll Layout
          ═══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: Sticky title */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-6">
                    El Proceso
                  </p>
                  <h2
                    className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white leading-[1.1] mb-6"
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                    }}
                  >
                    Nuestro
                    <br />
                    Método.
                  </h2>
                  <div className="w-12 h-px bg-white/10 mb-6" />
                  <p className="text-base text-zinc-500 leading-relaxed">
                    Un proceso claro, predecible y enfocado en resultados de
                    negocio. Tres fases que transforman tu idea en un activo
                    digital profesional.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* Right: Scrollable steps */}
            <div className="lg:col-span-8 space-y-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.15}>
                  <div className="group rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden hover:border-white/[0.12] transition-all duration-600">
                    {/* Big background number */}
                    <span
                      className="absolute -top-4 -right-2 text-[10rem] md:text-[14rem] font-bold text-[#0f0f0f] group-hover:text-[#141414] transition-colors duration-600 select-none leading-none pointer-events-none"
                      style={{
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                      }}
                    >
                      {step.num}
                    </span>

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-sm font-semibold text-cyan-400/60 mb-4 block">
                        Fase {step.num}
                      </span>
                      <h3
                        className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-[-0.02em]"
                        style={{
                          fontFamily: "var(--font-space-grotesk), sans-serif",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-base text-zinc-400 leading-relaxed mb-8 max-w-xl">
                        {step.description}
                      </p>

                      {/* Detail tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-[11px] text-zinc-600 border border-white/[0.06] px-3 py-1.5 rounded-full group-hover:border-white/[0.1] group-hover:text-zinc-500 transition-all duration-500"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-500/8 to-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                ¿Listo para profesionalizar{" "}
                <span className="text-gradient">tu marca?</span>
              </h2>
              <p className="text-lg text-zinc-400 font-light mb-10">
                Contanos sobre tu proyecto. Te respondemos en menos de 24 horas.
              </p>
              <Link
                href="/contacto"
                className="btn-glow inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-base font-semibold"
              >
                Iniciar un proyecto
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
