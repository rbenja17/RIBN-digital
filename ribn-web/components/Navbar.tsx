"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/metodo", label: "Método" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo with Easter Egg */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white group/logo"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          RIBN
          <motion.span
            className="text-gradient inline-block"
            whileHover={{
              scale: [1, 1.6, 1],
              rotate: [0, -15, 15, 0],
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-[13px] font-medium text-black bg-white px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors duration-300"
          >
            Iniciar un proyecto
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center text-sm font-medium text-black bg-white px-5 py-3 rounded-full"
              >
                Iniciar un proyecto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
