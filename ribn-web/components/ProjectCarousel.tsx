"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      const next = prev + newDirection;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  const project = projects[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 600 : -600,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -600 : 600,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative">
      {/* Carousel container with side padding for arrows */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => paginate(-1)}
          className="carousel-arrow hidden lg:flex absolute -left-20 z-20 w-14 h-14 rounded-full border border-white/[0.08] items-center justify-center text-zinc-500 transition-all duration-500 hover:scale-110 hover:text-white hover:border-transparent hover:shadow-[0_0_25px_rgba(138,43,226,0.3),0_0_50px_rgba(0,240,255,0.15)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(138,43,226,0.0), rgba(0,240,255,0.0))",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, rgba(138,43,226,0.15), rgba(0,240,255,0.1))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, rgba(138,43,226,0.0), rgba(0,240,255,0.0))";
          }}
        >
          <ArrowLeft size={22} />
        </button>

        {/* Slides */}
        <div className="overflow-hidden rounded-2xl w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                href={project.href}
                mockupType="browser"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => paginate(1)}
          className="carousel-arrow hidden lg:flex absolute -right-20 z-20 w-14 h-14 rounded-full border border-white/[0.08] items-center justify-center text-zinc-500 transition-all duration-500 hover:scale-110 hover:text-white hover:border-transparent hover:shadow-[0_0_25px_rgba(138,43,226,0.3),0_0_50px_rgba(0,240,255,0.15)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,240,255,0.0), rgba(138,43,226,0.0))",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, rgba(0,240,255,0.1), rgba(138,43,226,0.15))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, rgba(0,240,255,0.0), rgba(138,43,226,0.0))";
          }}
        >
          <ArrowRight size={22} />
        </button>
      </div>

      {/* Navigation — centered below */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Dots */}
        <div className="flex items-center gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <span className="text-xs text-zinc-600 tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>

        {/* Mobile arrows (visible only on small screens) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
