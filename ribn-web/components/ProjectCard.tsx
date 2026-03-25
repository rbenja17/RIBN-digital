"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  scrollDistance?: string;
  scrollDuration?: number;
  mockupType?: "browser" | "mobile";
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  href,
  scrollDistance = "-90%",
  scrollDuration = 14,
  mockupType = "browser",
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (mockupType === "mobile") {
    return (
      <MobileCard
        {...{
          title,
          description,
          imageSrc,
          scrollDistance,
          scrollDuration,
          className,
        }}
      />
    );
  }

  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`card-border-glow rounded-2xl overflow-hidden cursor-pointer group h-full transition-transform duration-700 ease-out hover:scale-[1.03] block ${className}`}
    >
      <div className="rounded-2xl bg-[#0a0a0a] overflow-hidden h-full">
        {/* Browser Mockup Frame */}
        <div className="aspect-[16/9] border-b border-white/[0.04] bg-[#050505] flex flex-col relative overflow-hidden">
          {/* Chrome Header */}
          <div className="flex items-center gap-2 px-5 pt-4 pb-3 shrink-0 relative z-10 bg-[#050505]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-4 h-5 bg-white/[0.04] rounded-md w-1/3 flex items-center justify-center">
              <div className="w-1/2 h-1 bg-white/[0.08] rounded-full" />
            </div>
          </div>

          {/* Viewport — hover is detected HERE (this div never moves) */}
          <div
            className="flex-1 overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="w-full origin-top"
              animate={
                isHovered
                  ? { y: scrollDistance, scale: 1.05 }
                  : { y: "0%", scale: 1 }
              }
              transition={
                isHovered
                  ? { duration: scrollDuration, ease: "linear" }
                  : { duration: 7, ease: "easeOut" }
              }
            >
              <Image
                src={imageSrc}
                alt={title}
                width={1400}
                height={1050}
                className="w-full h-auto block"
                priority
              />
            </motion.div>

            {/* Top fade */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-10" />
            {/* Bottom fade — hides the white edge */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
          </div>

          {/* Hover tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Project Info */}
        <div className="p-6 md:p-8 flex items-center justify-between">
          <div>
            <h3
              className="text-xl font-semibold text-white mb-1"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {title}
            </h3>
            <p className="text-sm text-zinc-600">{description}</p>
          </div>
          <span className="hidden sm:flex items-center gap-2 text-xs text-zinc-600 border border-white/[0.06] px-4 py-1.5 rounded-full group-hover:text-white group-hover:border-white/20 transition-all duration-500">
            Ver proyecto <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

/* ── Mobile variant ── */
function MobileCard({
  title,
  description,
  imageSrc,
  scrollDistance,
  scrollDuration,
  className,
}: Omit<ProjectCardProps, "mockupType">) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-border-glow rounded-2xl overflow-hidden cursor-pointer group h-full transition-transform duration-700 ease-out hover:scale-[1.03] ${className}`}
    >
      <div className="rounded-2xl bg-[#0a0a0a] overflow-hidden h-full">
        {/* Phone Mockup */}
        <div className="aspect-[9/14] border-b border-white/[0.04] bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
          <div className="w-[200px] bg-black border-[5px] border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 relative">
            {/* Dynamic Island */}
            <div className="h-7 flex justify-center pt-1.5 bg-black relative z-20">
              <div className="w-16 h-4 bg-black rounded-full border border-white/[0.06]" />
            </div>

            {/* Scrollable screen — hover on the viewport container */}
            <div
              className="overflow-hidden h-[320px] relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="w-full origin-top"
                animate={
                  isHovered
                    ? { y: scrollDistance, scale: 1.05 }
                    : { y: "0%", scale: 1 }
                }
                transition={
                  isHovered
                    ? { duration: scrollDuration, ease: "linear" }
                    : { duration: 7, ease: "easeOut" }
                }
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  width={600}
                  height={1000}
                  className="w-full h-auto block"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Info */}
        <div className="p-6">
          <h3
            className="text-xl font-semibold text-white mb-1"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-sm text-zinc-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
