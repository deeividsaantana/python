// Conteúdo do portfólio. Para atualizar cargo, disponibilidade, experiências,
// certificados, métricas ou links, edite apenas este arquivo.

export const profile = {
  name: "Deivid Santana",
  initials: "DS",
  role: "Suporte de TI, operação e desenvolvimento.",
  currentPosition: "Auxiliar Técnico N1/N2",
  currentCompany: "Renea Infraestrutura",
  location: "Suzano, SP",
  availability: {
    status: "Disponível para oportunidades",
    workModes: "Presencial, híbrido ou home office",
  },
  intro:
    "Sou Auxiliar Técnico na Renea Infraestrutura e graduando em Análise e Desenvolvimento de Sistemas. Transformo necessidades da rotina de obra em soluções digitais — como o Sistema RENEA, usado no dia a dia da operação.",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/deivid-santana-546b45297",
  github: "https://github.com/deeividsaantana",
  repository: "https://github.com/deeividsaantana/projeto-sistemadecontrole",
};

export const displayUrl = (url: string) => url.replace(/^https:\/\/(www\.)?/, "");

export const project = {
  name: "Sistema RENEA",
  summary:
    "Aplicação web para controle de equipamentos, combustível, materiais, tickets de jazida, apontamentos e presença, utilizada na operação do Complexo Alto do Tietê.",
  context:
    "A operação de uma obra de infraestrutura depende de registros de equipamentos, abastecimentos, materiais e equipes. O Sistema RENEA reúne esses registros em uma única aplicação web.",
  participation:
    "Desenvolvimento individual, a partir das necessidades que observo na operação da obra. O sistema evolui por versões, sem reescrita e sem remover funcionalidades que já estão em uso.",
  features: [
    {
      title: "Combustível inteligente",
      text: "Digitação por prefixo de frota, auditoria de registros e importação/exportação em Excel.",
    },
    {
      title: "Leitura assistida de abastecimento",
      text: "PDF ou foto do comprovante convertidos em dados estruturados, com conferência humana antes de salvar.",
    },
    {
      title: "Parte diária de equipamentos",
      text: "Lançamentos, indicadores e exportação em PDF no padrão do formulário utilizado em campo.",
    },
    {
      title: "Tickets de liberação",
      text: "Liberação e recebimento vinculados, assinatura digital, histórico e impressão em duas vias.",
    },
    {
      title: "Migração do legado SGE",
      text: "Consulta e migração controlada de bancos Access antigos, preservando o histórico.",
    },
    {
      title: "Links públicos operacionais",
      text: "Tickets, apontamentos e presença por link direto, com rascunho isolado por aparelho.",
    },
  ],
  // Decisões conferidas no README, na documentação de design e no código do repositório.
  decisions: [
    {
      title: "Conferência humana antes de gravar",
      text: "Dados lidos de PDF ou foto aparecem para revisão. Só entram no registro depois de conferidos.",
    },
    {
      title: "Dado ausente não vira zero",
      text: "Princípio adotado no projeto: campo sem informação aparece como pendente, em vez de receber um número que ninguém mediu.",
    },
    {
      title: "Documento sem duplicidade",
      text: "Na leitura de abastecimento, o arquivo não fica guardado: o sistema grava os dados revisados, o nome do arquivo e uma impressão digital SHA-256, usada para impedir que o mesmo comprovante seja importado duas vezes.",
    },
    {
      title: "Evoluir sem quebrar o que funciona",
      text: "Cada versão preserva dados, histórico e funcionalidades existentes. A migração para Supabase é incremental, com o Firebase ainda como base padrão.",
    },
  ],
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Firebase",
    "Supabase (migração incremental, em andamento)",
    "ExcelJS",
    "jsPDF",
    "Node.js + Express",
    "Playwright",
  ],
  // Retrato do repositório. Não é atualizado automaticamente.
  metrics: {
    asOf: "22/09/2026",
    items: [
      { value: "444", label: "commits no repositório", source: "conferido" },
      { value: "15", label: "módulos na navegação principal", source: "conferido" },
      { value: "v3.5.0", label: "versão atual do ERP", source: "conferido" },
      { value: "8,9 mil+", label: "registros migrados", source: "informado" },
    ],
  },
};

export const about = {
  lead: "Conheço a rotina da operação e desenvolvo soluções para organizá-la.",
  paragraphs: [
    "Comecei em suporte técnico, com montagem, formatação e manutenção de computadores e atendimento de helpdesk para usuários internos.",
    "Hoje atuo na Renea Infraestrutura, organizando as informações operacionais da obra do Complexo Alto do Tietê — registros de equipamentos, abastecimentos, materiais e equipes.",
    "Em paralelo à graduação em Análise e Desenvolvimento de Sistemas, desenvolvo o Sistema RENEA a partir das necessidades que encontro nessa rotina. Estar perto da operação mostra o que o sistema precisa resolver; o desenvolvimento é a forma de resolver.",
  ],
  path: [
    { label: "Suporte técnico", text: "Usuários, equipamentos e helpdesk" },
    { label: "Operação de obra", text: "Informações operacionais do dia a dia" },
    { label: "Desenvolvimento", text: "Sistema RENEA, usado na operação" },
  ],
};

export type SkillTag = "experiência" | "RENEA" | "certificação";

export const skills: { title: string; items: { name: string; tag?: SkillTag; note?: string }[] }[] = [
  {
    title: "Suporte e infraestrutura",
    items: [
      { name: "Suporte N1/N2", tag: "experiência" },
      { name: "Helpdesk", tag: "experiência" },
      { name: "Montagem e manutenção de hardware", tag: "experiência" },
      { name: "Redes" },
      { name: "Gestão de infraestrutura de TI", tag: "certificação" },
      { name: "Cibersegurança", tag: "certificação" },
    ],
  },
  {
    title: "Desenvolvimento",
    items: [
      { name: "React", tag: "RENEA" },
      { name: "TypeScript", tag: "RENEA" },
      { name: "Vite", tag: "RENEA" },
      { name: "Tailwind CSS", tag: "RENEA" },
      { name: "Chart.js" },
      { name: "ExcelJS", tag: "RENEA" },
      { name: "jsPDF", tag: "RENEA" },
    ],
  },
  {
    title: "Dados e cloud",
    items: [
      { name: "Firebase", tag: "RENEA" },
      { name: "Supabase", tag: "RENEA", note: "migração em andamento" },
      { name: "Amazon Web Services", tag: "certificação" },
      { name: "SQL Azure", tag: "certificação" },
      { name: "Migração de dados legados", tag: "RENEA", note: "legado SGE" },
    ],
  },
];

export const experience = [
  {
    company: "Renea Infraestrutura S.A.",
    role: "Auxiliar Técnico N1/N2",
    period: "jun 2026 — atual",
    current: true,
    location: undefined as string | undefined,
    activities: [
      "Controle e organização de informações operacionais da obra.",
      "Desenvolvimento paralelo do Sistema RENEA para digitalizar processos.",
    ],
  },
  {
    company: "Innovapack Embalagens",
    role: "Aprendiz de TI",
    period: "jun 2024 — out 2025",
    current: false,
    location: "Itaquaquecetuba, SP",
    activities: [
      "Helpdesk e suporte a usuários internos.",
      "Montagem e manutenção de microcomputadores.",
    ],
  },
];

export const education = {
  course: "Análise e Desenvolvimento de Sistemas",
  institution: "Universidade de Mogi das Cruzes",
  period: "fev 2026 — previsão de conclusão em jun 2028",
  status: "Em andamento",
};

export const certifications = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google, via Coursera",
    id: "5BGYYYVBU5O6",
    topics: "Suporte técnico e gestão de Service Desk",
    expired: undefined as string | undefined,
  },
  {
    name: "Cyber Security",
    issuer: "FIAP",
    id: "aff732841716e5bf739131df58c65e82",
    topics: "Cibersegurança e IT as a Service",
    expired: undefined as string | undefined,
  },
  {
    name: "Gestão de Infraestrutura de TI",
    issuer: "FIAP",
    id: "cedd956c826aa1d9d96069b3dc732d8f",
    topics: undefined as string | undefined,
    expired: undefined as string | undefined,
  },
  {
    name: "Cloud Fundamentals",
    issuer: "FIAP",
    id: "c79701c887933ce37135d1572f9f7f98",
    topics: "Amazon Web Services e SQL Azure",
    expired: "ago 2025",
  },
];
