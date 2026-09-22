"use client";

import { useState } from "react";

const links = [
  { href: "#features", label: "Recursos" },
  { href: "#demo", label: "Demonstração" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_14px_theme(colors.violet.500)]" />
          Spell<span className="font-medium text-muted">UI</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-white/5">
            Entrar
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-gradient-to-br from-violet-500 to-pink-400 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Começar grátis
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-5 bg-foreground" />
          <span className="h-0.5 w-5 bg-foreground" />
          <span className="h-0.5 w-5 bg-foreground" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-muted"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-br from-violet-500 to-pink-400 px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Começar grátis
          </a>
        </nav>
      )}
    </header>
  );
}
