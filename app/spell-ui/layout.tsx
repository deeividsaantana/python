import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Spell UI — Componentes animados para produtos modernos",
  description:
    "Biblioteca de componentes de UI animados, prontos para produção, para times que constroem produtos rápido.",
};

export default function SpellUiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-background text-foreground font-sans antialiased">
      <Providers>{children}</Providers>
    </div>
  );
}
