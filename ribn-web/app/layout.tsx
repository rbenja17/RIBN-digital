import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ribn.digital"),
  title: "RIBN — Profesionalizamos tu presencia digital",
  description:
    "Desarrollo de landing pages y sitios web de alto rendimiento. Transformamos emprendimientos y marcas personales en activos digitales profesionales.",
  verification: {
    google: "Xv8qVPOoL1l6K3V4JL2-IntSRmDmz-Ao0gi-meOIoQU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} ${spaceGrotesk.variable}`}>
      <body className="antialiased overflow-x-hidden flex flex-col min-h-screen">
        {/* Film Grain Overlay */}
        <div className="grain-overlay" />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Navbar */}
        <Navbar />

        {/* Page Content with Transitions */}
        <div className="flex-1">
          <PageTransition>{children}</PageTransition>
        </div>

        {/* Persistent Footer */}
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

