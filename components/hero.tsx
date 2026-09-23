import AnimatedGradient from "@/registry/spell-ui/animated-gradient";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border">
      <AnimatedGradient config={{ preset: "Prism" }} />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(8,9,12,0.25)_0%,rgba(8,9,12,0.9)_75%)]" />

      <div className="relative z-[2] mx-auto max-w-[1180px] px-6 py-16 text-center">
        <span className="mb-6 inline-block rounded-full border border-border bg-white/5 px-4 py-1.5 text-sm text-muted">
          ✨ Gradiente animado com o preset Prism
        </span>

        <h1 className="mx-auto max-w-4xl text-[clamp(2.4rem,6vw,4.4rem)] font-bold leading-[1.05] tracking-tight">
          Interfaces que{" "}
          <span className="bg-gradient-to-br from-violet-500 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            respiram
          </span>{" "}
          movimento e cor.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Spell UI é um conjunto de componentes React copy-and-paste, com animações
          fluidas e performáticas, para você construir landing pages e produtos
          que realmente chamam atenção — sem reinventar a roda.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href="#pricing"
            className="rounded-full bg-gradient-to-br from-violet-500 to-pink-400 px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Começar agora — é grátis
          </a>
          <a
            href="#demo"
            className="rounded-full border border-border px-7 py-3.5 text-base font-semibold transition-colors hover:bg-white/5"
          >
            Ver demonstração ↓
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-12">
          {[
            ["12k+", "Desenvolvedores"],
            ["48", "Componentes"],
            ["4.9/5", "Avaliação média"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col items-center">
              <strong className="text-2xl font-bold">{n}</strong>
              <span className="text-sm text-muted">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
