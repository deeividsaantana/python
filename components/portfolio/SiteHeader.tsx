"use client";

import { useEffect, useRef, useState } from "react";
import { LinkedInIcon } from "./icons";

const sections = [
  { href: "#projeto", label: "Projeto" },
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

type Props = { name: string; initials: string; linkedin: string };

export function SiteHeader({ name, initials, linkedin }: Props) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 821px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#topo">
          <span className="brand-mark" aria-hidden="true">{initials}</span>
          <span className="brand-name">{name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Seções">
          <ul>
            {sections.map((s) => (
              <li key={s.href}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-small btn-secondary" href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            LinkedIn<span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-icon" aria-hidden="true" data-open={open} />
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      <nav id="menu-mobile" className="mobile-nav" aria-label="Seções" hidden={!open}>
        <ul className="wrap">
          {sections.map((s) => (
            <li key={s.href}>
              <a href={s.href} onClick={close}>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" onClick={close}>
              <LinkedInIcon />
              Conectar no LinkedIn<span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
