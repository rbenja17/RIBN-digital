import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════════
          HERO — Massive editorial typography + glow orbs
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 sm:pt-32 pb-24 relative z-10">
          <ScrollReveal>
            <p className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-semibold mb-10">
              <span className="w-12 h-[2px] bg-cyan-400/50" />
              Agencia de Desarrollo Web
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-[-0.03em] text-white max-w-4xl mb-10"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Profesionalizamos tu{" "}
              <span className="text-gradient">presencia digital.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-16 h-px bg-white/10 mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <ScrollReveal delay={0.3} className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-10">
                Desarrollo de landing pages y sitios web de alto rendimiento.
                Transformamos emprendimientos y marcas personales en{" "}
                <strong className="text-white font-medium">
                  activos digitales profesionales
                </strong>{" "}
                que generan confianza y convierten visitantes en clientes.
              </p>

              <Link
                href="/contacto"
                className="btn-glow inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-base font-semibold"
              >
                Iniciar un proyecto
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — What RIBN does
          ═══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-6">
              ¿Qué hacemos?
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white max-w-3xl mb-20 leading-[1.1]"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Tu negocio merece un sitio web que{" "}
              <span className="text-zinc-500">
                transmita profesionalismo.
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {[
              {
                num: "01",
                title: "Landing Pages",
                desc: "Páginas de aterrizaje optimizadas para convertir. Diseño limpio, copy persuasivo y velocidad extrema.",
              },
              {
                num: "02",
                title: "Sitios Web",
                desc: "Sitios multi-página profesionales con arquitectura moderna, SEO técnico y experiencia premium.",
              },
              {
                num: "03",
                title: "Consultoría UX",
                desc: "Auditorías de experiencia de usuario. Identificamos puntos de fuga y optimizamos tu funnel digital.",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.num} delay={i * 0.15}>
                <div className="bg-[#0a0a0a] p-6 sm:p-8 lg:p-12 group hover:bg-[#0f0f0f] transition-colors duration-500 h-full">
                  <span className="text-4xl font-bold text-white/[0.06] block mb-8 group-hover:text-cyan-500/20 transition-colors duration-500">
                    {service.num}
                  </span>
                  <h3
                    className="text-xl font-semibold text-white mb-4"
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE WORK — Bento Grid with browser mockups
          ═══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] relative">
        {/* Background accent */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4">
                  Proyectos Seleccionados
                </p>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}
                >
                  The Work
                </h2>
              </div>
              <Link
                href="/trabajos"
                className="text-sm text-zinc-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                Ver todos los proyectos
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Project Carousel */}
          <ScrollReveal delay={0.1}>
            <ProjectCarousel
              projects={[
                {
                  title: "Coach en Línea (Cecilia)",
                  description: "Landing Page · Optimización de Conversión",
                  imageSrc: "/projects/cecilia.webp",
                  href: "/trabajos#cecilia",
                },
                {
                  title: "Vir Cassino",
                  description: "Landing Page · Diseño Estratégico",
                  imageSrc: "/projects/vircassino.webp",
                  href: "/trabajos#vircassino",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA — Glowing premium card
          ═══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] relative overflow-hidden">
        {/* Glow behind card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-44 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/[0.06] bg-[#050505] p-6 sm:p-10 md:p-20 text-center relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-[80px] pointer-events-none" />

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1] relative z-10"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                ¿Listo para elevar
                <br />
                <span className="text-gradient">tu proyecto?</span>
              </h2>

              <p className="text-lg text-zinc-400 font-light mb-10 max-w-lg mx-auto relative z-10">
                Convierte visitantes en clientes con un sitio web que transmite
                profesionalismo desde el primer segundo.
              </p>

              <Link
                href="/contacto"
                className="btn-glow inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-base font-semibold relative z-10"
              >
                Solicitar Cotización
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
