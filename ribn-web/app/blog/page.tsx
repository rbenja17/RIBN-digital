import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog — RIBN Digital | Recursos sobre desarrollo web",
  description:
    "Artículos sobre diseño web, SEO, estrategia digital y precios de páginas web en Argentina. Recursos gratuitos para emprendedores y marcas personales.",
  openGraph: {
    title: "Blog — RIBN Digital",
    description:
      "Artículos sobre diseño web, SEO, estrategia digital y precios de páginas web en Argentina.",
    url: "https://ribn.digital/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      {/* ═══════════════════════════════════════════
          HERO — Blog Header
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 sm:pt-40 pb-16 relative z-10">
          <ScrollReveal>
            <p className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cyan-400/80 font-semibold mb-8">
              <span className="w-12 h-[2px] bg-cyan-400/50" />
              Blog &amp; Recursos
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-white max-w-3xl mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Ideas para hacer crecer{" "}
              <span className="text-gradient">tu negocio digital.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
              Guías prácticas, análisis de costos y estrategias probadas para
              emprendedores que quieren profesionalizar su presencia online.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          POSTS GRID
          ═══════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.1}>
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    category={post.category}
                    readingTime={post.readingTime}
                    index={i}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="text-center py-20">
                <p className="text-zinc-500 text-lg">
                  Próximamente nuevos artículos. ¡Volvé pronto!
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </main>
  );
}
