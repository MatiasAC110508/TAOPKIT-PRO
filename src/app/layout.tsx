import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAOP KIT PRO — Cuidado Integral para Mascotas",
  description:
    "Presentación de TAOP KIT PRO: solución integral personalizada para la higiene, salud y bienestar de tu mascota. Kit completo, práctico y funcional.",
  keywords: [
    "TAOP KIT PRO",
    "mascotas",
    "higiene mascotas",
    "kit mascota",
    "cuidado animal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
