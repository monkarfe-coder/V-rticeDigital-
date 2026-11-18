export interface MetricItem {
  value: string;
  pillar: string;
  label: string;
  context: string;
  icon: 'store' | 'growth' | 'trust' | 'trophy';
}

export interface PricingPlan {
  id: string;
  name: string;
  priceInteger: string;
  priceCents: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
  isGold?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SegmentItem {
  id: string;
  title: string;
  description: string;
  icon: 'small' | 'medium' | 'large';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  outcome: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  result: string;
}

export const WHATSAPP_NUMBER = '5534997948468';
export const PHONE_DISPLAY = '(34) 99794-8468';
export const ADDRESS_DISPLAY = 'Rua Aracaju, 150';
export const CNPJ_DISPLAY = '69752105/0001-01';
export const DELIVERY_HIGHLIGHT = 'Criamos seu site em até 24hs!';
export const NATIONWIDE_HIGHLIGHT = 'Fornecemos para todo o Brasil';

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Olá, Vértice Digital! Quero solicitar um orçamento para criação de site (Nível Essencial).';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const HERO_IMAGE = '/src/assets/images/hero_vertice_studio_1794969324104.jpg';
export const FOUNDER_PORTRAIT_IMAGE =
  '/assets/aistudio/file_000000005648820e8ac65b5a4e91ff90_23cd2e21.png';
export const SERVICE_PERFORMANCE_IMAGE =
  '/src/assets/images/service_performance_ads_1794969325052.jpg';
export const SERVICE_BRANDING_IMAGE =
  '/src/assets/images/service_branding_social_1794969324778.jpg';
export const CASE_MEETING_IMAGE = '/src/assets/images/case_agency_meeting_1794969326033.jpg';

export const METRICS: MetricItem[] = [
  {
    value: '+40%',
    pillar: 'Mais clientes',
    label: 'Evolução de alcance',
    context: 'Mais pessoas encontrando seu negócio',
    icon: 'store',
  },
  {
    value: '+35%',
    pillar: 'Mais vendas',
    label: 'Potencial de contatos',
    context: 'Pedidos chegando direto no WhatsApp',
    icon: 'growth',
  },
  {
    value: '+60%',
    pillar: 'Mais credibilidade',
    label: 'Confiança no atendimento',
    context: 'Empresa bem apresentada no Google',
    icon: 'trust',
  },
  {
    value: '+50%',
    pillar: 'Seu negócio mais forte',
    label: 'Crescimento digital',
    context: 'Fornecemos para todo o Brasil',
    icon: 'trophy',
  },
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: 'Passo 01',
    title: 'Você escolhe o plano e envia seus dados',
    description:
      'Pelo WhatsApp ou formulário, você passa o nome do seu negócio, serviços, fotos e telefone.',
  },
  {
    step: 'Passo 02',
    title: 'Criamos seu site em até 24hs',
    description:
      'Montamos todas as seções organizadas (Sobre, Serviços, Contato) já prontas para celular e computador.',
  },
  {
    step: 'Passo 03',
    title: 'Seu negócio vai ao ar em todo o Brasil',
    description:
      'Publicamos seu endereço profissional conectado ao WhatsApp para você começar a receber clientes.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Básico',
    priceInteger: '250',
    priceCents: ',00',
    features: [
      'Site institucional (responsivo)',
      'Informações do seu negócio',
      'Contato por WhatsApp',
      'Design moderno',
    ],
    ctaLabel: 'Sua presença online começa aqui!',
  },
  {
    id: 'essencial',
    name: 'Essencial',
    priceInteger: '450',
    priceCents: ',00',
    features: [
      'Site institucional (responsivo)',
      'Páginas personalizadas (Sobre, Serviços, Contato)',
      'Integração com WhatsApp',
      'Formulário de contato',
    ],
    ctaLabel: 'Faça mais pela sua marca!',
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    priceInteger: '850',
    priceCents: ',00',
    features: [
      'Site completo e moderno',
      'Páginas ilimitadas',
      'Integração com redes sociais',
      'Blog ou Notícias',
      'SEO avançado',
    ],
    ctaLabel: 'Destaque seu negócio na internet!',
  },
  {
    id: 'gold',
    name: 'Gold',
    priceInteger: '1.200',
    priceCents: ',00',
    features: [
      'Tudo do plano Premium',
      'Loja virtual (e-commerce)',
      'Área de membros (clientes ou alunos)',
      'Recursos avançados (pagamentos, reservas)',
      'Suporte VIP',
    ],
    ctaLabel: 'Sua empresa no próximo nível!',
    isGold: true,
  },
];

export const PRICING_GUARANTEES = [
  { id: 'speed', label: 'Sites rápidos e responsivos', icon: 'zap' as const },
  { id: 'security', label: 'Segurança e confiabilidade', icon: 'shield' as const },
  { id: 'service', label: 'Atendimento personalizado', icon: 'handshake' as const },
  { id: 'support', label: 'Suporte contínuo', icon: 'rocket' as const },
];

export const BUSINESS_SEGMENTS: SegmentItem[] = [
  {
    id: 'pequenos',
    title: 'Pequenos Empreendedores',
    description: 'Dê o primeiro passo no digital!',
    icon: 'small',
  },
  {
    id: 'medios',
    title: 'Médios Empreendedores',
    description: 'Expanda seu alcance e aumente suas vendas!',
    icon: 'medium',
  },
  {
    id: 'grandes',
    title: 'Grandes Empreendedores',
    description: 'Potencialize seus resultados com soluções completas!',
    icon: 'large',
  },
];

export const ABOUT_DELIVERABLES = [
  'Criação de Sites Profissionais',
  'Lojas Virtuais (E-commerce)',
  'Marketing Digital',
  'Suporte Especializado',
  'Soluções Personalizadas para o seu negócio',
];

export const ABOUT_VALUES = [
  { id: 'qualidade', label: 'Qualidade em cada detalhe', icon: 'shield' as const },
  { id: 'transparencia', label: 'Transparência em todo o processo', icon: 'handshake' as const },
  { id: 'inovacao', label: 'Inovação sempre à frente', icon: 'lightbulb' as const },
  { id: 'crescimento', label: 'Foco no seu crescimento', icon: 'trending' as const },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'sites-institucionais',
    number: '01.',
    title: 'Site Institucional Responsivo',
    outcome:
      'Seu site funciona perfeitamente no celular, tablet e computador para o cliente entender seu negócio em segundos.',
    deliverable: 'Incluso no Plano Essencial',
  },
  {
    id: 'paginas-personalizadas',
    number: '02.',
    title: 'Páginas Sobre, Serviços e Contato',
    outcome:
      'Estrutura completa para contar sua história, explicar o que você vende e facilitar o contato sem confusão.',
    deliverable: 'Incluso no Plano Essencial',
  },
  {
    id: 'whatsapp-integrado',
    number: '03.',
    title: 'Integração Direta com WhatsApp',
    outcome:
      'Botões estratégicos e formulário validado que já chegam no seu WhatsApp com o pedido pronto para responder.',
    deliverable: 'Incluso no Plano Essencial',
  },
  {
    id: 'seo-google',
    number: '04.',
    title: 'Otimização para o Google (SEO)',
    outcome:
      'Código limpo e rápido com textos claros para ajudar quem pesquisa pelos seus serviços a encontrar sua empresa.',
    deliverable: 'Mais visibilidade orgânica',
  },
  {
    id: 'lojas-virtuais',
    number: '05.',
    title: 'Lojas Virtuais (Upgrade)',
    outcome:
      'Quando sua empresa quiser vender produtos online 24 horas por dia, você pode evoluir para catálogo e pagamentos.',
    deliverable: 'Disponível no Plano Gold',
  },
  {
    id: 'suporte-continuo',
    number: '06.',
    title: 'Suporte Especializado em Todo o Brasil',
    outcome:
      'Atendimento humano direto com nossa equipe para tirar dúvidas, ajustar textos e manter seu site sempre no ar.',
    deliverable: 'Atendimento próximo pelo WhatsApp',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'cliente-1',
    quote:
      'Antes a gente só conseguia cliente por indicação. Depois do site da Vértice Digital, todo dia chega pedido de orçamento no nosso WhatsApp.',
    name: 'Marcelo Rezende',
    role: 'Proprietário',
    company: 'Rezende Serviços',
    result: 'Mais orçamentos todo dia',
  },
  {
    id: 'cliente-2',
    quote:
      'O site ficou pronto rápido e abre perfeito no celular. Quem procura nossa clínica no Google já entra em contato sem complicação.',
    name: 'Patrícia Vasconcelos',
    role: 'Sócia-Fundadora',
    company: 'Clínica Vasconcelos',
    result: 'Mais agendamentos pelo Google',
  },
  {
    id: 'cliente-3',
    quote:
      'O processo foi direto ao ponto. Em pouco tempo meu negócio já tinha uma página organizada com todas as informações e botão de WhatsApp.',
    name: 'Eduardo Nogueira',
    role: 'Comerciante',
    company: 'Nogueira Casa & Design',
    result: 'Presença profissional no ar',
  },
  {
    id: 'cliente-4',
    quote:
      'Os clientes elogiam a facilidade de encontrar nosso endereço, serviços e contato tudo em um só lugar.',
    name: 'Fernanda Almeida',
    role: 'Proprietária',
    company: 'Espaço Almeida',
    result: 'Atendimento mais rápido',
  },
];
