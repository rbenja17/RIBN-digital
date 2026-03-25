"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "Trabajos", href: "/trabajos" },
    { label: "Método", href: "/metodo" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-black pt-24 pb-12 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight text-white mb-6 inline-block"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              RIBN<span className="text-gradient">.</span>
            </Link>
            <p className="text-zinc-400 max-w-sm font-light leading-relaxed">
              No hacemos plantillas. Construimos activos digitales pensados para posicionar marcas y generar ventas reales.
            </p>
          </div>

          {/* Navigation Col */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-6 font-semibold">
              Navegación
            </p>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-6 font-semibold">
              Contacto
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hola@ribn.digital"
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  hola@ribn.digital
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ribn-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-cyan-400" />
                </a>
              </li>
              <li>
                <p className="text-zinc-600">
                  Buenos Aires, Argentina<br />
                  <span className="text-zinc-700 text-sm">Remote Worldwide</span>
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {currentYear} RIBN Digital. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <span className="hover:text-zinc-400 cursor-pointer transition-colors duration-300">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors duration-300">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
