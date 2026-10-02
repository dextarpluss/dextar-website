export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  isMainPillar: boolean;
  badge: string;
  iconName: string;
  features: string[];
}

export interface IntelligenceCapability {
  title: string;
  name: string;
  description: string;
  tagline: string;
  badgeColor: "purple" | "cyan" | "blue";
  exampleInsight?: {
    observed: string;
    importance: string;
    basePeriod: string;
  };
}

export interface WmsFlowStep {
  step: number;
  title: string;
  description: string;
  highlight: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientName: string;
  segment: string;
  solutionUsed: string;
  scenario: string;
  challenge: string;
  solution: string;
  integrations: string[];
  results: string[];
  isValidated: boolean;
  validationNotice?: string;
}

export interface Article {
  slug: string;
  title: string;
  category: "Operação & WMS" | "ERP & Integrações" | "IA Aplicada" | "Gestão & Dados";
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  author: string;
}

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: "wms",
    title: "WMS Dextar++",
    subtitle: "Gestão e execução do armazém",
    description:
      "Controle total do armazém do recebimento à expedição. Conecta pessoas, estoque, endereços e sistemas em um fluxo contínuo e auditável.",
    slug: "/wms",
    isMainPillar: true,
    badge: "Pilar Principal",
    iconName: "warehouse",
    features: [
      "Recebimento e conferência de entrada",
      "Armazenagem e direcionamento inteligente",
      "Reposição preventiva e corretiva de picking",
      "Separação orientada por coletores e RF",
      "Conferência cega e tratamento de divergências",
      "Carregamento e liberação de expedição",
    ],
  },
  {
    id: "integracoes",
    title: "Integrações",
    subtitle: "Conectividade entre sistemas corporativos",
    description:
      "Conectamos seu ERP, WMS, e-commerce, transportadoras e APIs proprietárias eliminando ilhas de informação e retrabalho.",
    slug: "/integracoes",
    isMainPillar: true,
    badge: "Pilar Principal",
    iconName: "network",
    features: [
      "Arquitetura de barramento e APIs REST/Web Services",
      "Integração especialista com ERP TOTVS Winthor [VALIDAR]",
      "Rastreabilidade e log de reprocessamento",
      "Sincronização em tempo real de estoque e pedidos",
    ],
  },
  {
    id: "intelligence",
    title: "Dextar Intelligence++",
    subtitle: "Inteligência artificial aplicada à operação",
    description:
      "Camada de inteligência contextual que transforma dados operacionais em análises, recomendações e automações guiadas.",
    slug: "/intelligence",
    isMainPillar: true,
    badge: "Pilar Principal",
    iconName: "brain",
    features: [
      "Insight++ para detecção de desvios e anomalias",
      "Análise++ estruturada de produtividade e gargalos",
      "Recomendação++ contextual de ações operacionais",
      "Assistente++ interativo com dados autorizados",
    ],
  },
  {
    id: "agendamento",
    title: "Agendamento",
    subtitle: "Organização de janelas operacionais",
    description:
      "Planejamento e controle de janelas de recebimento e expedição para evitar filas de veículos e gargalos de doca.",
    slug: "/solucoes#agendamento",
    isMainPillar: false,
    badge: "Complementar",
    iconName: "calendar",
    features: [
      "Gestão de grades de horários por doca",
      "Portal de agendamento de fornecedores",
      "Notificações automáticas e controle de pontualidade",
    ],
  },
  {
    id: "entregas",
    title: "Gestão de Entregas",
    subtitle: "Visibilidade da distribuição",
    description:
      "Acompanhamento em tempo real do status de transporte, ocorrências e comprovantes digitais de entrega.",
    slug: "/solucoes#entregas",
    isMainPillar: false,
    badge: "Complementar",
    iconName: "truck",
    features: [
      "Rastreabilidade de cargas e rotas",
      "Registro de canhoto digital e ocorrências",
      "Indicadores de pontualidade (OTIF)",
    ],
  },
  {
    id: "especiais",
    title: "Projetos Especiais",
    subtitle: "Software e automação sob medida",
    description:
      "Desenvolvimento focado em desafios logísticos e operacionais complexos que exigem soluções customizadas.",
    slug: "/solucoes#especiais",
    isMainPillar: false,
    badge: "Sob Medida",
    iconName: "code",
    features: [
      "Automação de processos operacionais específicos",
      "Integração com hardwares de automação/coletores",
      "Consultoria técnica e arquitetura de software",
    ],
  },
];

export const INTELLIGENCE_CAPABILITIES: IntelligenceCapability[] = [
  {
    title: "Insight++",
    name: "Insight++",
    tagline: "Identifica o que merece atenção",
    description:
      "Monitora dados operacionais contínuos e destaca padrões atípicos, desvios de produtividade ou riscos potenciais de ruptura.",
    badgeColor: "purple",
    exampleInsight: {
      observed: "Taxa de divergência na conferência do corredor B aumentou 14% nas últimas 4 horas.",
      importance: "Risco de atraso no carregamento da rota metropolitana das 16h.",
      basePeriod: "Comparado à média história das últimas 4 semanas no mesmo turno.",
    },
  },
  {
    title: "Análise++",
    name: "Análise++",
    tagline: "Organiza e interpreta cenários",
    description:
      "Sintetiza volumes massivos de movimentações em diagnósticos claros sobre acurácia de estoque, ocupação e tempos de ciclo.",
    badgeColor: "purple",
  },
  {
    title: "Recomendação++",
    name: "Recomendação++",
    tagline: "Sugere possíveis ações com evidência",
    description:
      "Recomenda reordenamento de picking, rebalanceamento de ondas de separação ou remanejamento de operadores.",
    badgeColor: "cyan",
  },
  {
    title: "Assistente++",
    name: "Assistente++",
    tagline: "Interação contextual segura",
    description:
      "Permite consultar o status de operações e pedidos em linguagem natural, respeitando rigorosamente os níveis de permissão.",
    badgeColor: "cyan",
  },
  {
    title: "Automação++",
    name: "Automação++",
    tagline: "Executa fluxos orientados e validados",
    description:
      "Executa rotinas repetitorias pré-aprovadas com total auditabilidade, rastreabilidade e governança corporativa.",
    badgeColor: "blue",
  },
];

export const WMS_FLOW_STEPS: WmsFlowStep[] = [
  {
    step: 1,
    title: "Recebimento",
    description: "Entrada de notas, conferência cega físico x fiscal, registro de avarias e divergências.",
    highlight: "Conferência ágil com coletores",
  },
  {
    step: 2,
    title: "Armazenagem",
    description: "Direcionamento automático por regras de giro, peso, volume e compatibilidade de produto.",
    highlight: "Otimização de espaço e rotas",
  },
  {
    step: 3,
    title: "Reposição",
    description: "Abastecimento contínuo do picking por estratégia preventiva e alerta de estoque mínimo.",
    highlight: "Zero espera no fluxo de picking",
  },
  {
    step: 4,
    title: "Separação",
    description: "Execução orientada por coletores móveis, minimizando deslocamentos e erros de item.",
    highlight: "Rastreabilidade por lote/validade",
  },
  {
    step: 5,
    title: "Conferência",
    description: "Validação final esperado vs expedido antes da embalagem e paletização.",
    highlight: "Tratamento prévio de corte parcial/total",
  },
  {
    step: 6,
    title: "Carregamento",
    description: "Sequenciamento por rota, conferência de embarque e liberação para faturamento.",
    highlight: "Garantia de embarque correto",
  },
];

export const METHOD_STEPS = [
  {
    number: "01",
    title: "Entender",
    description: "Análise profunda da operação real, gargalos atuais, sistemas legados e objetivos de negócio.",
  },
  {
    number: "02",
    title: "Desenhar",
    description: "Arquitetura da solução, mapeamento de integrações, definição do escopo e cronograma de implantação.",
  },
  {
    number: "03",
    title: "Executar",
    description: "Configuração do sistema, integração com ERP, treinamento das equipes e acompanhamento go-live.",
  },
  {
    number: "04",
    title: "Evoluir",
    description: "Acompanhamento de resultados, ajustes finos operacionais e ativação incremental de inteligência.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "operacao-distribuicao-multicanal",
    title: "Otimização da operação de armazém e separação rastreável",
    clientName: "Operador Logístico Regional",
    segment: "Distribuição e Atacado",
    solutionUsed: "WMS Dextar++ & Integrações ERP",
    scenario: "Operação com alto volume de SKUs e conferência manual sujeita a divergências no faturamento.",
    challenge: "Reduzir o tempo de ciclo de separação e eliminar erros de expedição mantendo a acurácia de lote.",
    solution: "Implantação do WMS Dextar++ integrado ao ERP corporativo com direcionamento por coletores móveis.",
    integrations: ["ERP TOTVS Winthor [VALIDAR]", "Coletores Android RF", "Impressoras de Etiqueta Zebra"],
    results: [
      "Rastreabilidade ponta a ponta de lote e validade",
      "Redução drástica de divergências na conferência final",
      "Visualização em tempo real do status das ondas de separação",
    ],
    isValidated: true,
    validationNotice: "Exemplo conceitual baseado no escopo padronizado do WMS Dextar++.",
  },
  {
    slug: "integracao-erp-wms-alta-disponibilidade",
    title: "Conectividade em tempo real entre ERP corporativo e operação móvel",
    clientName: "Distribuidor Farma / Cosméticos",
    segment: "Distribuição Especializada",
    solutionUsed: "Dextar Integrações",
    scenario: "Desencontro de informações entre o faturamento e a separação física do estoque no galpão.",
    challenge: "Garantir sincronização instantânea de pedidos e saldos sem sobrecarregar o banco de dados do ERP.",
    solution: "Camada middleware de integração com barramento resiliente e mecanismo de reprocessamento automático.",
    integrations: ["APIs RESTful", "Web Services SOAP/JSON", "Bancos Oracle / SQL Server"],
    results: [
      "Sincronização contínua de pedidos e notas",
      "Notificação imediata de bloqueios ou falta de saldo",
      "Log auditável de todas as transações realizadas",
    ],
    isValidated: true,
    validationNotice: "Caso de uso arquitetural padronizado.",
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    slug: "como-preparar-o-armazem-para-wms",
    title: "Como preparar a estrutura do armazém antes de implantar um WMS",
    category: "Operação & WMS",
    excerpt: "Endereçamento físico, codificação de produtos e organização de processos: os pré-requisitos fundamentais para o sucesso do projeto.",
    content: `A implantação de um WMS (Warehouse Management System) é um divisor de águas para qualquer operação logística. No entanto, o software não corrige sozinhos problemas de organização física. 
    
    Antes da virada de chave, três pilares precisam estar perfeitamente estruturados:
    
    1. **Codificação e Padronização:** Todos os produtos, embalagens e unidades logísticas devem possuir identificação única e legível por código de barras.
    2. **Endereçamento Lógico do Armazém:** Ruas, prédios, níveis e vãos organizados com sinalização clara para direcionar operadores com eficiência.
    3. **Mapeamento do Fluxo Físico:** Definição clara das zonas de recebimento, picking, pulmão e expedição.`,
    publishDate: "28 de Setembro de 2026",
    readTime: "5 min de leitura",
    author: "Equipe Técnica Dextar",
  },
  {
    slug: "integracao-erp-wms-sem-gargalos",
    title: "Integração ERP + WMS: evitando falhas na troca de dados operacionais",
    category: "ERP & Integrações",
    excerpt: "Entenda por que a arquitetura de integração é tão crítica quanto as funcionalidades individuais dos sistemas.",
    content: `Em uma operação logística de alta cadência, o ERP é o cérebro financeiro e fiscal, enquanto o WMS é o motor operacional. Quando a comunicação entre eles falha, a operação para.
    
    Para garantir resiliência:
    - **Evite chamadas síncronas bloqueantes:** Utilize filas e processamento assíncrono.
    - **Implemente reprocessamento automático:** Falhas temporárias de rede não podem perder dados de pedidos.
    - **Defina a autoridade do dado:** O ERP determina a demanda; o WMS determina a realidade física.`,
    publishDate: "20 de Setembro de 2026",
    readTime: "6 min de leitura",
    author: "Arquitetura de Sistemas Dextar",
  },
  {
    slug: "ia-aplicada-a-logistica-alem-do-hype",
    title: "IA Aplicada à Logística: como separar promessas irrealistas de resultados concretos",
    category: "IA Aplicada",
    excerpt: "Como a camada de inteligência (Insight++ e Recomendação++) apoia gestores em decisões diárias sem cair no clichê da autonomia cega.",
    content: `Inteligência Artificial na logística não significa robôs humanoides conversando no galpão. Significa algoritmos identificando que determinado corredor está prestes a virar um gargalo de separação.
    
    No ecossistema Dextar Intelligence++, a IA atua como **inteligência aumentada**:
    - **Insight++:** Aponta desvios de padrão na acurácia e produtividade.
    - **Recomendação++:** Apresenta sugestões embasadas para o gestor validar.
    - **Governança:** A decisão final e o controle permanecem sob responsabilidade operacional.`,
    publishDate: "15 de Setembro de 2026",
    readTime: "7 min de leitura",
    author: "Dextar Intelligence Lab",
  },
];
