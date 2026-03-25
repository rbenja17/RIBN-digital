"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { damping: 25, stiffness: 200 });
  const springY = useSpring(trailY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    // Strict desktop-only detection
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const hasFineMouse = window.matchMedia("(pointer: fine)").matches;

    if (isTouchDevice || !hasFineMouse) {
      setIsDesktop(false);
      return;
    }

    setIsDesktop(true);
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const addHover = () => {
      document.querySelector(".cursor-dot")?.classList.add("cursor-hover");
      document.querySelector(".cursor-trail")?.classList.add("cursor-hover");
    };

    const removeHover = () => {
      document.querySelector(".cursor-dot")?.classList.remove("cursor-hover");
      document.querySelector(".cursor-trail")?.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", moveCursor);

    // Use MutationObserver to track dynamically added interactive elements
    const attachListeners = () => {
      const elements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, .card-border-glow, .carousel-arrow"
      );
      elements.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
      return elements;
    };

    const elements = attachListeners();

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [cursorX, cursorY, trailX, trailY]);

  // Don't render anything on touch devices
  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="cursor-trail fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
