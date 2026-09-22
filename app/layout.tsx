import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const siteUrl = "https://spell-ui.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spell UI — Componentes animados para produtos modernos",
    template: "%s | Spell UI",
  },
  description:
    "Biblioteca de componentes de UI animados, prontos para produção, para times que constroem produtos rápido.",
  keywords: [
    "spell ui",
    "componentes react",
    "gradiente animado",
    "ui library",
    "next.js",
    "tailwind",
  ],
  authors: [{ name: "Spell UI" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Spell UI",
    title: "Spell UI — Componentes animados para produtos modernos",
    description:
      "Biblioteca de componentes de UI animados, prontos para produção, para times que constroem produtos rápido.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spell UI — Componentes animados para produtos modernos",
    description:
      "Biblioteca de componentes de UI animados, prontos para produção, para times que constroem produtos rápido.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Spell UI",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "Biblioteca de componentes de UI animados, prontos para produção, para times que constroem produtos rápido.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
