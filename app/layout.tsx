import type { Metadata, Viewport } from "next";
import { links, profile } from "@/content/profile";

const title = "Deivid Santana | Suporte de TI e Desenvolvimento";
const description =
  "Auxiliar Técnico N1/N2 na Renea Infraestrutura e graduando em Análise e Desenvolvimento de Sistemas em Suzano, SP. Desenvolvedor do Sistema RENEA, usado na operação do Complexo Alto do Tietê.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1017",
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.currentPosition,
  worksFor: { "@type": "Organization", name: "Renea Infraestrutura S.A." },
  homeLocation: { "@type": "Place", name: profile.location },
  sameAs: [links.linkedin, links.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
