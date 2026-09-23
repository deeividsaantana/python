"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "./icons";

type Props = { value: string; targetId: string; label: string };
type State = "idle" | "copied" | "failed";

function selectTarget(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const range = document.createRange();
  range.selectNodeContents(el);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

export function CopyButton({ value, targetId, label }: Props) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    window.clearTimeout(timer.current);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard indisponível");
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      selectTarget(targetId);
      setState("failed");
    }
    timer.current = window.setTimeout(() => setState("idle"), 4000);
  };

  return (
    <>
      <button type="button" className="copy-btn" onClick={copy} aria-label={`Copiar identificador de ${label}`}>
        <CopyIcon />
        {state === "copied" ? "Copiado" : "Copiar"}
      </button>
      <span className="copy-status" role="status" aria-live="polite" data-state={state}>
        {state === "copied" && "Identificador copiado."}
        {state === "failed" && "Não foi possível copiar automaticamente. O identificador foi selecionado — use Ctrl+C."}
      </span>
    </>
  );
}
