"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  index?: number;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  category,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="relative rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-6 sm:p-8 transition-all duration-500 hover:bg-[#0f0f0f] hover:border-white/[0.1] h-full flex flex-col">
        {/* Category Badge */}
        <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold bg-white/[0.04] text-cyan-400/80 border border-white/[0.06] mb-6">
          {category}
        </span>

        {/* Title */}
        <h3
          className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug group-hover:text-gradient transition-all duration-300"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1 line-clamp-3">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {readingTime}
            </span>
          </div>

          <span className="flex items-center gap-1 text-xs text-zinc-500 group-hover:text-cyan-400 transition-colors duration-300">
            Leer
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
