import { DemoPresets } from "@/components/demo-presets";

const features = [
  { icon: "🎨", title: "Gradiente animado Prism", desc: "Preset Prism pronto para uso, com cores, velocidade e distorção totalmente customizáveis via config." },
  { icon: "⚡", title: "Performance nativa", desc: "Renderização em WebGL com shaders otimizados, leve mesmo em dispositivos móveis." },
  { icon: "🧩", title: "Copy & paste", desc: "Sem dependências pesadas. Copie o componente, cole no seu projeto e customize como quiser." },
  { icon: "🌗", title: "Dark mode nativo", desc: "Todos os componentes já vêm prontos para temas claro e escuro, sem trabalho extra." },
  { icon: "♿", title: "Acessibilidade em primeiro lugar", desc: "Contraste, foco e navegação por teclado testados em todos os componentes da biblioteca." },
  { icon: "🛠️", title: "Totalmente tipado", desc: "API em TypeScript, com autocompletar e validações que evitam erros antes mesmo do build." },
];

const testimonials = [
  { quote: "Trocamos nosso hero estático pelo AnimatedGradient e o tempo de permanência na landing page aumentou 34%.", name: "Marina Silva", role: "Head de Produto, Nimbus" },
  { quote: "A melhor parte é não precisar de nenhuma dependência extra. Copiei, colei e já estava funcionando.", name: "Rafael Costa", role: "Engenheiro Frontend, Plasma Co" },
  { quote: "Componentes lindos, leves e com ótima acessibilidade. Virou padrão em todos os nossos projetos.", name: "Bianca Alves", role: "Design Lead, Vortex Labs" },
];

const plans = [
  {
    name: "Free",
    price: "R$0",
    period: "/mês",
    desc: "Perfeito para projetos pessoais e testes.",
    items: ["Acesso a todos os componentes", "Uso em projetos ilimitados", "Atualizações da comunidade"],
    cta: "Começar grátis",
    featured: false,
  },
  {
    name: "Pro",
    price: "R$49",
    period: "/mês",
    desc: "Para times que precisam de suporte prioritário.",
    items: ["Tudo do plano Free", "Suporte prioritário", "Presets e temas exclusivos", "Acesso antecipado a novidades"],
    cta: "Assinar Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    desc: "Para empresas com necessidades específicas.",
    items: ["Tudo do plano Pro", "SLA dedicado", "Onboarding assistido", "Faturamento customizado"],
    cta: "Falar com vendas",
    featured: false,
  },
];

const faqs = [
  { q: "Preciso instalar alguma dependência para usar o Spell UI?", a: "Não. Os componentes são feitos para copiar e colar diretamente no seu projeto React/Next.js, sem dependências externas obrigatórias." },
  { q: "O AnimatedGradient funciona bem em dispositivos móveis?", a: "Sim, a renderização é otimizada e reduz automaticamente a complexidade da animação em telas menores e dispositivos com menos recursos." },
  { q: "Posso customizar as cores do preset Prism?", a: "Sim, o preset aceita uma configuração customizada de cores, velocidade e intensidade através da prop config, ou você pode partir de um config \"custom\" totalmente seu." },
  { q: "Existe suporte a dark mode?", a: "Todos os componentes já possuem suporte nativo a temas claro e escuro, sem necessidade de configuração adicional." },
];

function SectionHead({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-xl text-center">
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-cyan-400">{eyebrow}</span>
      <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight">{title}</h2>
      {lede && <p className="mt-4 text-muted">{lede}</p>}
    </div>
  );
}

export function Logos() {
  const names = ["Nimbus", "Vortex Labs", "Plasma Co", "Prism", "Lumen", "Pulse Inc."];
  return (
    <section className="border-b border-border py-12">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="mb-6 text-center text-sm uppercase tracking-wide text-muted">
          Usado por times em empresas de todos os tamanhos
        </p>
        <div className="flex flex-wrap justify-center gap-12 font-semibold text-muted opacity-70">
          {names.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHead
          eyebrow="Recursos"
          title="Tudo que você precisa para criar interfaces marcantes"
          lede="Componentes leves, acessíveis e fáceis de customizar, construídos para acelerar o seu fluxo de trabalho."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-violet-500">
              <div className="mb-4 text-2xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Demo() {
  return (
    <section id="demo" className="border-y border-border bg-white/[0.02] py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHead
          eyebrow="Demonstração"
          title="Veja o preset Prism em ação"
          lede="O componente AnimatedGradient renderizando o preset Prism, ao vivo."
        />
        <DemoPresets />
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHead eyebrow="Depoimentos" title="Times de todo o mundo confiam no Spell UI" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-white/[0.03] p-7">
              <p className="mb-5 text-[15px]">"{t.quote}"</p>
              <div className="flex flex-col">
                <strong className="text-sm">{t.name}</strong>
                <span className="text-sm text-muted">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-white/[0.02] py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHead eyebrow="Preços" title="Um plano para cada estágio do seu projeto" lede="Comece de graça. Faça upgrade quando seu produto crescer." />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.featured
                  ? "border-violet-500 bg-gradient-to-b from-violet-500/10 to-transparent"
                  : "border-border bg-white/[0.03]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold text-white">
                  Mais popular
                </span>
              )}
              <h3 className="mb-3 text-lg font-semibold">{p.name}</h3>
              <p className="mb-2 text-4xl font-bold">
                {p.price}
                <span className="text-sm font-medium text-muted">{p.period}</span>
              </p>
              <p className="mb-6 text-sm text-muted">{p.desc}</p>
              <ul className="mb-7 flex flex-col gap-2.5">
                {p.items.map((i) => (
                  <li key={i} className="text-sm">✔ {i}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-auto rounded-full px-4 py-2.5 text-center text-sm font-semibold ${
                  p.featured
                    ? "bg-gradient-to-br from-violet-500 to-pink-400 text-white"
                    : "border border-border hover:bg-white/5"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHead eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-border bg-white/[0.03] p-5">
              <summary className="cursor-pointer list-none text-[15px] font-semibold">{f.q}</summary>
              <p className="mt-3 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="border-t border-border bg-gradient-to-br from-violet-500/15 to-cyan-400/10">
      <div className="mx-auto max-w-[1180px] px-6 py-24 text-center">
        <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-bold">Pronto para dar vida à sua interface?</h2>
        <p className="mx-auto mb-8 max-w-md text-muted">
          Junte-se a milhares de desenvolvedores construindo produtos mais bonitos com Spell UI.
        </p>
        <a
          href="#pricing"
          className="inline-block rounded-full bg-gradient-to-br from-violet-500 to-pink-400 px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Começar gratuitamente
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/[0.02] pb-6 pt-16">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-6 pb-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
            Spell<span className="font-medium text-muted">UI</span>
          </a>
          <p className="mt-3 max-w-[240px] text-sm text-muted">Componentes animados para produtos que se destacam.</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">Produto</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted">
            <a href="#features" className="hover:text-foreground">Recursos</a>
            <a href="#demo" className="hover:text-foreground">Demonstração</a>
            <a href="#pricing" className="hover:text-foreground">Preços</a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">Empresa</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted">
            <a href="#" className="hover:text-foreground">Sobre</a>
            <a href="#" className="hover:text-foreground">Blog</a>
            <a href="#" className="hover:text-foreground">Carreiras</a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">Legal</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted">
            <a href="#" className="hover:text-foreground">Privacidade</a>
            <a href="#" className="hover:text-foreground">Termos</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1180px] border-t border-border px-6 pt-6 text-sm text-muted">
        © 2026 Spell UI. Todos os direitos reservados.
      </div>
    </footer>
  );
}
