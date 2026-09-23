"use client";

import { PrinterIcon } from "./icons";

export function PrintButton({ documentTitle }: { documentTitle: string }) {
  const print = () => {
    const previous = document.title;
    const restore = () => {
      document.title = previous;
      window.removeEventListener("afterprint", restore);
    };
    document.title = documentTitle;
    window.addEventListener("afterprint", restore);
    window.print();
  };

  return (
    <button type="button" className="btn btn-ghost" onClick={print}>
      <PrinterIcon />
      Salvar perfil como PDF
    </button>
  );
}
