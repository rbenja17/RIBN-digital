import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata = {
  title: "Trabajos — RIBN",
  description:
    "Proyectos seleccionados. Cada caso de estudio refleja nuestro enfoque en diseño profesional y resultados de negocio.",
};

export default function TrabajosPage() {
  return (
    <main className="pt-16">
      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 relative z-10">
          <ScrollReveal>
            <p className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-semibold mb-10">
              <span className="w-12 h-[2px] bg-cyan-400/50" />
              Portfolio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-10"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Casos de{" "}
              <span className="text-gradient">Estudio.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-16 h-px bg-white/10 mb-10" />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-zinc-400 leading-relaxed font-light max-w-2xl">
              Cada proyecto es una colaboración enfocada en resultados. Diseñamos
              sitios que no solo se ven profesionales, sino que{" "}
              <strong className="text-white font-medium">
                funcionan como herramientas de negocio
              </strong>
              . Estos son algunos de nuestros trabajos recientes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROJECTS — Full-size cards
          ═══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] relative">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-cyan-500/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 relative z-10">
          {/* Project 01 — Coach en Línea (Full width) */}
          <ScrollReveal>
            <div id="cecilia" className="mb-8 flex items-end justify-between scroll-mt-32">
              <div className="flex items-center gap-4">
                <span
                  className="text-5xl md:text-6xl font-bold text-white/[0.04]"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  01
                </span>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    Coach en Línea (Cecilia)
                  </h2>
                  <p className="text-sm text-zinc-600 mt-1">
                    Coaching Ontológico · Desarrollo Personal
                  </p>
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-2">
                {["Coaching Ontológico", "Lead Generation", "Diseño UI/UX"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-zinc-500 border border-white/[0.06] px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ProjectCard
              title="Coach en Línea (Cecilia)"
              description="Landing Page · Optimización de Conversión"
              imageSrc="/projects/cecilia.webp"
              mockupType="browser"
            />
          </ScrollReveal>

          {/* Description below card */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-32">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                  El Desafío
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Cecilia necesitaba centralizar su oferta de coaching ontológico
                  y procesos vocacionales en una plataforma profesional que
                  proyectara autoridad y facilitara el agendamiento de sesiones.
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                  La Solución
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Diseñamos una landing page clara y enfocada en una sola acción:
                  contactar. Arquitectura de información limpia que clarifica la
                  propuesta de valor y guía al visitante hacia el formulario de
                  contacto sin distracciones.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Metrics — Cecilia */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-4">
              {[
                { label: "Rendimiento", value: 98, suffix: "/100" },
                { label: "Accesibilidad", value: 90, suffix: "/100" },
                { label: "SEO", value: 100, suffix: "/100" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-6 rounded-xl border border-white/[0.04] bg-white/[0.01]"
                >
                  <p
                    className="text-3xl md:text-5xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="text-xs text-zinc-600 uppercase tracking-[0.15em]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-600/60 text-center mb-32 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span>
              Métricas auditadas y verificadas con Google PageSpeed Insights
            </p>
          </ScrollReveal>

          {/* Project 02 — Vir Cassino (Full width) */}
          <ScrollReveal>
            <div id="vircassino" className="mb-8 flex items-end justify-between scroll-mt-32">
              <div className="flex items-center gap-4">
                <span
                  className="text-5xl md:text-6xl font-bold text-white/[0.04]"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  02
                </span>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    Vir Cassino
                  </h2>
                  <p className="text-sm text-zinc-600 mt-1">
                    Coaching para Emprendedoras
                  </p>
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-2">
                {[
                  "Marca Personal",
                  "Desarrollo Web",
                  "Arquitectura de Conversión",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-zinc-500 border border-white/[0.06] px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ProjectCard
              title="Vir Cassino"
              description="Landing Page · Diseño Estratégico"
              imageSrc="/projects/vircassino.webp"
              mockupType="browser"
            />
          </ScrollReveal>

          {/* Description below card */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                  El Desafío
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Vir tenía una presencia fuerte en redes pero carecía de una web
                  que transmitiera el mismo nivel de cercanía y profesionalismo.
                  Necesitaba diferenciar claramente sus servicios y facilitar el
                  contacto directo.
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                  La Solución
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Creamos una landing page empática y estructurada. Secciones
                  estratégicas para cada servicio, validación social con
                  testimonios reales y un CTA integrado con WhatsApp para
                  maximizar la conversión.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Metrics — Vir */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-4">
              {[
                { label: "Rendimiento", value: 99, suffix: "/100" },
                { label: "First Paint", value: 0.8, suffix: "s", isDecimal: true },
                { label: "SEO Score", value: 100, suffix: "/100" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-6 rounded-xl border border-white/[0.04] bg-white/[0.01]"
                >
                  <p
                    className="text-3xl md:text-5xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {metric.isDecimal ? (
                      <>{metric.value}{metric.suffix}</>
                    ) : (
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    )}
                  </p>
                  <p className="text-xs text-zinc-600 uppercase tracking-[0.15em]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-600/60 text-center mb-8 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span>
              Métricas auditadas y verificadas con Google PageSpeed Insights
            </p>
          </ScrollReveal>
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
                ¿Querés ver tu proyecto{" "}
                <span className="text-gradient">acá?</span>
              </h2>
              <p className="text-lg text-zinc-400 font-light mb-10">
                Contanos qué necesitás y te mostramos cómo podemos ayudarte.
              </p>
              <Link
                href="/contacto"
                className="btn-glow inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-base font-semibold"
              >
                Comenzar mi proyecto
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
