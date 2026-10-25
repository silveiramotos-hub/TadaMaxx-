export interface KitOption {
  id: 'kit-30' | 'kit-60' | 'kit-90';
  capsules: number;
  bottles: number;
  title: string;
  subtitle: string;
  price: number;
  priceFormatted: string;
  oldPriceFormatted: string;
  installmentValue: string;
  perCapsuleFormatted: string;
  savingsFormatted: string;
  highlightLabel?: string;
  isFeatured: boolean;
  durationText: string;
  checkoutUrl: string;
}

export interface FormulaItem {
  index: string;
  name: string;
  dosage: string;
  role: string;
  description: string;
  highlights: string[];
  onsetText: string;
}

export interface PowerCard {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
}

export interface ScienceStudy {
  index: string;
  title: string;
  source: string;
  summary: string;
  metric: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  age: number;
  kitPurchased: string;
  quote: string;
  verifiedDate: string;
  rating: number;
  isFeatured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PRODUCT_IMAGE_PATH = '/assets/aistudio/TadaMaxx-mockup-premium_8d24a03f.webp';

export const WHATSAPP_CHANNELS = [
  {
    label: 'Central de Vendas 01',
    display: '71 98382-1218',
    phone: '5571983821218',
    role: 'Pedidos & Descontos nos Kits',
  },
  {
    label: 'Central de Vendas 02',
    display: '71 99954-5088',
    phone: '5571999545088',
    role: 'Dúvidas sobre a Fórmula & Uso',
  },
  {
    label: 'Suporte & Rastreio',
    display: '71 99117-1830',
    phone: '5571991171830',
    role: 'Acompanhamento de Entrega',
  },
];

export const HERO_BENEFIT_SEALS = [
  'Ação a partir de 30 Minutos',
  'Potência por até 36 Horas',
  'Zero Efeito Colateral',
  'Frete Grátis para Todo o Brasil',
  'Embalagem 100% Discreta',
];

export const SECRET_FORMULA: FormulaItem[] = [
  {
    index: '01',
    name: 'TADALAFILA',
    dosage: '8 mg por dose',
    role: 'Princípio ativo do CIALIS',
    description:
      'Princípio ativo do CIALIS, 8 mg por dose, eficaz a partir de 30 min, por até 36 horas. Promove dilatação seletiva nos corpos cavernosos sob estímulo, garantindo firmeza máxima com total segurança cardiovascular.',
    highlights: [
      'Princípio ativo consagrado do Cialis',
      'Dosagem exata de 8 mg para máxima eficácia sem efeitos adversos',
      'Início de ação rápida a partir de 30 minutos',
      'Janela de resposta prolongada por até 36 horas',
    ],
    onsetText: 'Eficaz a partir de 30 min · Até 36h de duração',
  },
  {
    index: '02',
    name: 'TAURINA',
    dosage: 'Alta pureza biodisponível',
    role: 'Energia Neuromuscular e Foco',
    description:
      'Aminoácido natural do cérebro, olhos, coração e músculos; aumenta resistência e foco, combatendo a fadiga física e mental para que você mantenha o ritmo intenso do início ao fim.',
    highlights: [
      'Aminoácido natural presente no cérebro, coração e músculos',
      'Aumenta a resistência física e o foco mental',
      'Combate diretamente a fadiga e o cansaço pós-rotina',
      'Suporte contrátil para o vigor cardiovascular',
    ],
    onsetText: 'Foco imediato · Combate à fadiga muscular',
  },
  {
    index: '03',
    name: 'L-ARGININA',
    dosage: 'Precursor direto de Óxido Nítrico',
    role: 'Potente Vasodilatador Natural',
    description:
      'Promove massa muscular e é potente vasodilatador, essencial no tratamento da disfunção erétil. Estimula a produção natural de óxido nítrico endotelial, ampliando a irrigação sanguínea.',
    highlights: [
      'Potente vasodilatador endotelial natural',
      'Essencial no tratamento da disfunção erétil',
      'Favorece o ganho de massa muscular e recuperação',
      'Atua em sinergia direta com a Tadalafila 8 mg',
    ],
    onsetText: 'Vasodilatação profunda · Irrigação máxima',
  },
];

export const POWER_IN_ACTION_CARDS: PowerCard[] = [
  {
    index: '01',
    title: 'Aumento da Libido',
    subtitle: 'Desejo intenso e disposição renovada',
    description:
      'Reativa o apetite sexual e a vitalidade masculina com ação sinérgica que devolve o entusiasmo e a prontidão em qualquer momento da semana.',
    metric: 'Estímulo contínuo',
  },
  {
    index: '02',
    title: 'Ereções Mais Fortes',
    subtitle: 'Rigidez firme como aço por até 36h',
    description:
      'A combinação de Tadalafila 8mg com L-Arginina maximiza o fluxo sanguíneo peniano, garantindo ereções consistentes, duradouras e sem falhas na hora H.',
    metric: 'Ação em 30 min',
  },
  {
    index: '03',
    title: 'Mais Resistência',
    subtitle: 'Fôlego físico e controle prolongado',
    description:
      'A presença da Taurina combate a exaustão muscular e mental, permitindo noites inteiras de alto desempenho sem perda de energia.',
    metric: 'Até 36h de efeito',
  },
  {
    index: '04',
    title: 'Confiança Renovada',
    subtitle: 'Zero insegurança, 100% presença',
    description:
      'Elimine de vez a ansiedade de performance. Sinta a tranquilidade de saber que seu corpo responderá com potência máxima sempre que houver estímulo.',
    metric: '97,58% aprovação',
  },
];

export const SCIENCE_PILLARS: ScienceStudy[] = [
  {
    index: '01',
    title: 'Efeito comprovado na função endotelial',
    source: 'Journal of Urology, 2022',
    summary:
      'Evidências clínicas demonstram que a associação de inibidores seletivos de PDE5 em baixa dosagem otimizada com precursores de óxido nítrico restaura a resposta endotelial e a rigidez vascular.',
    metric: 'Função Endotelial',
  },
  {
    index: '02',
    title: 'Aumento significativo de energia',
    source: 'Estudo duplo-cego, Universidade de Harvard',
    summary:
      'Pesquisas controladas indicam elevação expressiva na disposição física, resistência cardiovascular e redução da fadiga periférica com suplementação combinada de aminoácidos vasodilatadores.',
    metric: 'Vigor & Energia',
  },
  {
    index: '03',
    title: 'Benefícios hormonais mensuráveis',
    source: 'Monitoramento Fisiológico Masculino',
    summary:
      'A melhora da oxigenação tecidual e da qualidade da circulação periférica favorece o equilíbrio metabólico e a manutenção da vitalidade masculina em todas as faixas etárias.',
    metric: 'Equilíbrio Metabólico',
  },
  {
    index: '04',
    title: 'Estímulo natural à testosterona',
    source: 'European Journal of Endocrinology',
    summary:
      'Estudos endocrinológicos apontam que a redução do estresse oxidativo muscular e o suporte de L-Arginina e Taurina auxiliam na preservação dos níveis fisiológicos de testosterona livre.',
    metric: 'Suporte Endócrino',
  },
];

export const BEST_RESULTS_HABITS = [
  {
    title: 'Hábitos saudáveis',
    description: 'Hidratação adequada e alimentação equilibrada potencializam a biodisponibilidade dos 3 ativos.',
  },
  {
    title: 'Uso contínuo',
    description: 'O protocolo regular mantém a resposta endotelial sempre pronta e amplia os benefícios vasculares.',
  },
  {
    title: 'Compatível com atividades físicas',
    description: 'Auxilia também no rendimento muscular e na vasodilatação durante treinos de força e cardio.',
  },
];

export const SOCIAL_PROOF_PILLARS = [
  {
    id: 'experiencia',
    title: 'Experiência do Usuário',
    stat: '97,58% de Aprovação',
    summary:
      'Mais de 14.800 homens em todo o Brasil relatam retorno imediato da firmeza, maior disposição com a parceira e ausência de efeitos colaterais indesejados.',
    bullets: [
      'Resposta rápida a partir de 30 minutos após a ingestão',
      'Liberdade para aproveitar o final de semana inteiro (até 36 horas)',
      'Zero queixas de taquicardia ou vermelhidão excessiva graças à dosagem calibrada',
    ],
  },
  {
    id: 'estudos',
    title: 'Estudos Clínicos',
    stat: '3 Ativos Sinérgicos',
    summary:
      'Cada componente do TadaMaxx possui respaldo na literatura científica internacional (Journal of Urology, Harvard e European Journal of Endocrinology).',
    bullets: [
      'Tadalafila 8mg: vasodilatação seletiva e segura por até 36h',
      'L-Arginina: síntese endotelial de óxido nítrico e suporte muscular',
      'Taurina: resistência neuromuscular, foco mental e ação antifadiga',
    ],
  },
  {
    id: 'opiniao',
    title: 'Opinião Médica',
    stat: 'Dosagem Inteligente 8mg',
    summary:
      'Especialistas em saúde masculina destacam que a combinação da Tadalafila 8mg com aminoácidos naturais entrega potência superior sem sobrecarregar o organismo.',
    bullets: [
      'Fórmula balanceada para zero efeito colateral',
      'Atuação fisiológica natural mediante estímulo sexual',
      'Seguro e compatível com a rotina de treinos e trabalho intenso',
    ],
  },
];

export const FEATURED_TESTIMONIAL: TestimonialItem = {
  id: 'alberico-ceara',
  name: 'Albérico',
  location: 'Ceará',
  age: 49,
  kitPurchased: 'Kit 60 Cápsulas (Mais Vendido)',
  quote:
    'Sempre fui alguém que busca qualidade e eficiência... TadaMaxx superou todas as minhas expectativas. A fórmula é incrivelmente eficaz, me sinto mais confiante e com energia.',
  verifiedDate: 'Compra Verificada',
  rating: 5,
  isFeatured: true,
};

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'jose-luiz',
    name: 'José Luiz',
    location: 'São Paulo, SP',
    age: 54,
    kitPurchased: 'Kit 60 Cápsulas',
    quote:
      'Depois dos 50 anos comecei a sentir que o cansaço do trabalho atrapalhava na hora H. Com o TadaMaxx em 30 minutos já sinto a diferença. Firmeza de rocha por todo o fim de semana e zero dor de cabeça.',
    verifiedDate: 'Cliente Verificado · SP',
    rating: 5,
  },
  {
    id: 'cristiano',
    name: 'Cristiano',
    location: 'Belo Horizonte, MG',
    age: 42,
    kitPurchased: 'Kit 90 Cápsulas',
    quote:
      'Já tinha testado opções de farmácia que me davam nariz entupido e mal-estar. A dosagem de 8mg do TadaMaxx junto com a Taurina e L-Arginina é perfeita: potência absurda e nenhum efeito colateral.',
    verifiedDate: 'Cliente Verificado · MG',
    rating: 5,
  },
  {
    id: 'celso-bonfim',
    name: 'Celso Bonfim',
    location: 'Salvador, BA',
    age: 58,
    kitPurchased: 'Kit 60 Cápsulas',
    quote:
      'Minha esposa notou a mudança logo na primeira semana. A resistência aumenta muito e a disposição dura mais de um dia inteiro. Além disso, a embalagem chegou super rápida e totalmente discreta.',
    verifiedDate: 'Cliente Verificado · BA',
    rating: 5,
  },
  {
    id: 'robson',
    name: 'Robson',
    location: 'Curitiba, PR',
    age: 38,
    kitPurchased: 'Kit 30 Cápsulas',
    quote:
      'Comprei o de 30 cápsulas para testar e já garanti o kit de 60. Além de dar uma segurança surreal na cama, sinto muito mais gás e vascularização até nos meus treinos na academia.',
    verifiedDate: 'Cliente Verificado · PR',
    rating: 5,
  },
];

export const PRICING_KITS: KitOption[] = [
  {
    id: 'kit-30',
    capsules: 30,
    bottles: 1,
    title: '30 CÁPSULAS',
    subtitle: 'Kit Inicial · 1 Frasco para Experimentar',
    price: 169.9,
    priceFormatted: 'R$ 169,90',
    oldPriceFormatted: 'R$ 219,90',
    installmentValue: '12x de R$ 17,06',
    perCapsuleFormatted: 'R$ 5,66 por cápsula',
    savingsFormatted: 'Economia de R$ 50,00',
    isFeatured: false,
    durationText: '30 doses de máxima potência',
    checkoutUrl: 'https://ev.braip.com/checkout/plalvlxe/chepmkvz',
  },
  {
    id: 'kit-60',
    capsules: 60,
    bottles: 2,
    title: '60 CÁPSULAS',
    subtitle: 'Kit Intermediário Recomendado · 2 Frascos',
    price: 249.9,
    priceFormatted: 'R$ 249,90',
    oldPriceFormatted: 'R$ 339,80',
    installmentValue: '12x de R$ 25,09',
    perCapsuleFormatted: 'R$ 4,16 por cápsula',
    savingsFormatted: 'Economize R$ 89,90 hoje',
    highlightLabel: 'Mais Vendido',
    isFeatured: true,
    durationText: '60 doses · Tratamento mais escolhido',
    checkoutUrl: 'https://ev.braip.com/checkout/plalvlxk/chepmkvz',
  },
  {
    id: 'kit-90',
    capsules: 90,
    bottles: 3,
    title: '90 CÁPSULAS',
    subtitle: 'Kit Performance Completa · 3 Frascos',
    price: 349.9,
    priceFormatted: 'R$ 349,90',
    oldPriceFormatted: 'R$ 509,70',
    installmentValue: '12x de R$ 35,13',
    perCapsuleFormatted: 'R$ 3,88 por cápsula',
    savingsFormatted: 'Economize R$ 159,80 hoje',
    highlightLabel: 'Mais Econômico',
    isFeatured: false,
    durationText: '90 doses · Menor custo por cápsula',
    checkoutUrl: 'https://ev.braip.com/checkout/plaxpxgq/chepmkvz',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'o-que-e',
    question: 'O QUE É O TADAMAXX?',
    answer:
      'O TadaMaxx é um suplemento avançado de alta performance masculina que reúne em uma única cápsula a combinação poderosa de Tadalafila (8 mg), Taurina e L-Arginina na dosagem exata para proporcionar ereções firmes como aço, aumento da libido e resistência física sem efeitos colaterais.',
  },
  {
    id: 'como-funciona',
    question: 'COMO FUNCIONA?',
    answer:
      'Sua fórmula atua em 3 frentes sinérgicas: a Tadalafila 8mg promove vasodilatação seletiva nos corpos cavernosos a partir de 30 minutos com duração de até 36 horas; a L-Arginina eleva a produção natural de óxido nítrico ampliando o fluxo sanguíneo; e a Taurina fornece energia neuromuscular e foco, combatendo a fadiga física e mental.',
  },
  {
    id: 'quantas-capsulas',
    question: 'QUANTAS CÁPSULAS DEVO USAR?',
    answer:
      'Recomenda-se ingerir 1 (uma) cápsula com água cerca de 30 minutos antes da relação ou conforme sua rotina de uso contínuo. Como o efeito permanece ativo por até 36 horas no organismo, não é necessário exceder 1 cápsula ao dia.',
  },
  {
    id: 'qual-kit',
    question: 'QUAL KIT DEVO COMPRAR?',
    answer:
      'Recomendamos o kit intermediário de 60 CÁPSULAS (R$ 249,90 — Mais Vendido) ou o kit de 90 CÁPSULAS (R$ 349,90 — Mais Econômico), pois garantem o uso contínuo pelos meses necessários para resultados consistentes na função endotelial e vitalidade, além de oferecerem o melhor custo-benefício com Frete Grátis.',
  },
  {
    id: 'anvisa',
    question: 'É APROVADO PELA ANVISA?',
    answer:
      'O TadaMaxx é formulado em laboratório certificado seguindo rigorosos padrões de controle de qualidade, pureza e boas práticas de fabricação (BPF), em total conformidade com as normas sanitárias vigentes da ANVISA para segurança do consumidor.',
  },
  {
    id: 'prazo-entrega',
    question: 'QUAL O PRAZO DE ENTREGA?',
    answer:
      'Contamos com Frete Grátis e a entrega mais rápida do Brasil! O envio é despachado em até 24 horas úteis após a confirmação do pagamento, com prazo médio de entrega entre 2 a 7 dias úteis dependendo da sua região, em embalagem 100% discreta.',
  },
  {
    id: 'site-seguro',
    question: 'ESSE SITE É SEGURO?',
    answer:
      'Sim, 100% seguro. Este é o Site Oficial do TadaMaxx, protegido com criptografia SSL de ponta a ponta. Seus dados pessoais e financeiros são totalmente sigilosos, você conta com a Garantia de 30 Dias e recebe seu código de rastreio diretamente no WhatsApp e e-mail.',
  },
];
