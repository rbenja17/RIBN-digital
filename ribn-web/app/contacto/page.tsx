import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contacto — RIBN",
  description:
    "Iniciá tu proyecto con RIBN. Escribinos y te respondemos en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden">
        {/* Orbs */}
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Editorial intro */}
            <div>
              <ScrollReveal>
                <p className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-semibold mb-10">
                  <span className="w-12 h-[2px] bg-cyan-400/50" />
                  Contacto
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1
                  className="text-5xl md:text-6xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}
                >
                  Iniciá tu{" "}
                  <span className="text-gradient">proyecto.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="w-12 h-px bg-white/10 mb-8" />
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-lg text-zinc-400 leading-relaxed font-light mb-12">
                  Contanos sobre tu proyecto y te respondemos en menos de 24
                  horas. Sin compromisos, sin letra chica.
                </p>
              </ScrollReveal>

              {/* Contact info */}
              <ScrollReveal delay={0.4}>
                <div className="space-y-8 pt-8 border-t border-white/[0.06]">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:hola@ribn.digital"
                      className="text-white hover:text-cyan-400 transition-colors duration-300"
                    >
                      hola@ribn.digital
                    </a>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-2">
                      Respuesta
                    </p>
                    <p className="text-zinc-400">
                      Dentro de las próximas 24 horas
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-2">
                      Ubicación
                    </p>
                    <p className="text-zinc-400">
                      Buenos Aires, Argentina
                      <br />
                      <span className="text-zinc-600">
                        Trabajamos de forma remota
                      </span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-8 md:p-10">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
