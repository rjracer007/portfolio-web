import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estiven García | Desarrollo Web y Soluciones a Medida",
  description: "Desarrollo de aplicaciones web ultrarrápidas, menús digitales y portales interactivos para hacer crecer tu negocio local sin intermediarios.",
  authors: [{ name: "Estiven Garcia Piedrahita", url: "https://github.com/rjracer007" }],
  keywords: ["desarrollo web", "menú digital", "tiendas online", "nextjs", "software a medida", "Colombia", "inmobiliaria web"],
  openGraph: {
    title: "Estiven García | Desarrollo Web a Medida",
    description: "Aplicaciones web y tiendas online diseñadas para aumentar tus ventas sin comisiones a terceros.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}>{children}</body>
    </html>
  );
}
