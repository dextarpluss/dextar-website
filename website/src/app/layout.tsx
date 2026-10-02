import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieConsent from "@/components/CookieConsent/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dextar++ | Tecnologia, Logística, WMS e Inteligência Artificial",
    template: "%s | Dextar++",
  },
  description:
    "Tecnologia, automação e inteligência para operações mais ágeis, seguras e eficientes. Especialistas em WMS, Integrações e Inteligência Artificial Aplicada.",
  keywords: [
    "WMS",
    "Logística",
    "Automação Logística",
    "Integração ERP",
    "Inteligência Artificial Operacional",
    "Dextar",
    "Gestão de Armazém",
    "Winthor",
  ],
  authors: [{ name: "Dextar Soluções em Tecnologia" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dextar.com.br",
    title: "Dextar++ | Logística que pensa à frente",
    description:
      "Tecnologia, automação e inteligência para operações mais ágeis, seguras e eficientes.",
    siteName: "Dextar++",
    images: [
      {
        url: "/images/brand/DEXTAR_logo_oficial_claro.png",
        width: 1200,
        height: 630,
        alt: "Dextar++ Tecnologia para operações mais inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dextar++ | Logística que pensa à frente",
    description:
      "Tecnologia, automação e inteligência para operações mais ágeis, seguras e eficientes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
