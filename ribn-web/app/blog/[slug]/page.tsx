import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import TableOfContents from "@/components/TableOfContents";

// Generate static paths for all blog posts
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata for each blog post
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post no encontrado" };

    return {
      title: `${post.title} — RIBN Digital`,
      description: post.description,
      authors: [{ name: post.author }],
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        url: `https://ribn.digital/blog/${slug}`,
        siteName: "RIBN Digital",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
      },
      alternates: {
        canonical: `https://ribn.digital/blog/${slug}`,
      },
    };
  });
}

// Custom MDX components with RIBN styling
const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => {
    const id =
      typeof props.children === "string"
        ? props.children
            .toLowerCase()
            .replace(/[^a-záéíóúñü\s\d-]/g, "")
            .replace(/\s+/g, "-")
        : "";
    return (
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-6 tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        {...props}
      />
    );
  },
  h3: (props: React.ComponentProps<"h3">) => {
    const id =
      typeof props.children === "string"
        ? props.children
            .toLowerCase()
            .replace(/[^a-záéíóúñü\s\d-]/g, "")
            .replace(/\s+/g, "-")
        : "";
    return (
      <h3
        id={id}
        className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-4 tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        {...props}
      />
    );
  },
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-zinc-300 leading-[1.85] mb-6 text-[17px]" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="text-zinc-300 leading-[1.85] mb-6 ml-6 list-disc space-y-2 text-[17px]" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="text-zinc-300 leading-[1.85] mb-6 ml-6 list-decimal space-y-2 text-[17px]" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="text-zinc-300" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors duration-300"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-cyan-400/40 pl-6 my-8 italic text-zinc-400"
      {...props}
    />
  ),
  hr: () => <hr className="border-white/[0.06] my-12" />,
  table: (props: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-white/[0.06]">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="bg-white/[0.03]" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th
      className="text-left text-zinc-300 font-semibold px-4 py-3 border-b border-white/[0.06]"
      {...props}
    />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td
      className="text-zinc-400 px-4 py-3 border-b border-white/[0.04]"
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // JSON-LD Schema for BlogPosting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "RIBN Digital",
      url: "https://ribn.digital",
    },
    publisher: {
      "@type": "Organization",
      name: "RIBN Digital",
      url: "https://ribn.digital",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ribn.digital/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "es-AR",
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Reading Progress */}
      <ReadingProgressBar />

      <main className="relative">
        {/* Background Orbs */}
        <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 sm:pt-36 pb-20 relative z-10">
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} />
              Volver al blog
            </Link>
          </ScrollReveal>

          {/* Article Header */}
          <ScrollReveal delay={0.1}>
            <header className="max-w-3xl mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold bg-white/[0.04] text-cyan-400/80 border border-white/[0.06] mb-6">
                {post.category}
              </span>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.03em] mb-6"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                {post.title}
              </h1>

              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                {post.description}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500">
                <span className="flex items-center gap-2">
                  <User size={14} />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  {post.readingTime}
                </span>
              </div>
            </header>
          </ScrollReveal>

          <div className="w-full h-px bg-white/[0.06] mb-12" />

          {/* Content + TOC Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_240px] gap-12">
            {/* Article Content */}
            <ScrollReveal delay={0.2}>
              <article className="prose-ribn max-w-3xl">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                />
              </article>
            </ScrollReveal>

            {/* Table of Contents */}
            <TableOfContents />
          </div>

          {/* CTA at bottom */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mt-20 rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-[60px] pointer-events-none" />

              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                ¿Querés una web{" "}
                <span className="text-gradient">profesional?</span>
              </h2>
              <p className="text-zinc-400 mb-6 relative z-10">
                Hablemos sobre tu proyecto. Sin compromiso, sin letra chica.
              </p>
              <Link
                href="/contacto"
                className="btn-glow inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full text-sm font-semibold relative z-10"
              >
                Solicitar Cotización
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
