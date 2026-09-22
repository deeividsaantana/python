import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spell UI — Componentes animados para produtos modernos",
  description:
    "Biblioteca de componentes de UI animados, prontos para produção, para times que constroem produtos rápido.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
