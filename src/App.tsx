import React, { useState } from 'react';
import {
  MessageCircle,
  ShieldCheck,
  Truck,
  ChevronDown,
  Lock,
  Award,
  Flame,
  Check,
  ArrowRight,
  PackageCheck,
  AlertTriangle,
  Star,
  Clock,
  Mail,
  Phone,
} from 'lucide-react';
import {
  HERO_BENEFIT_SEALS,
  SECRET_FORMULA,
  POWER_IN_ACTION_CARDS,
  SCIENCE_PILLARS,
  BEST_RESULTS_HABITS,
  SOCIAL_PROOF_PILLARS,
  FEATURED_TESTIMONIAL,
  TESTIMONIALS_LIST,
  PRICING_KITS,
  FAQ_ITEMS,
  WHATSAPP_CHANNELS,
  KitOption,
} from './data/tadamaxxData';
import { ProductBottleVisual } from './components/ProductBottleVisual';
import { CheckoutModal } from './components/CheckoutModal';
import { PrivacyModal, WhatsAppModal } from './components/LegalAndSupportModals';

export default function App() {
  const [selectedKit, setSelectedKit] = useState<KitOption | null>(PRICING_KITS[1]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);
  const [activeSocialProofTab, setActiveSocialProofTab] = useState<string>('experiencia');
  const [activeTimelineStage, setActiveTimelineStage] = useState<0 | 1 | 2>(0);

  const handleOpenCheckout = (kit: KitOption) => {
    setSelectedKit(kit);
    setIsCheckoutOpen(true);
  };

  const scrollToKits = () => {
    const el = document.getElementById('kits');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timelineStages = [
    {
      time: 'A partir de 30 Minutos',
      title: 'Absorção Rápida e Ativação Endotelial',
      detail:
        'A Tadalafila 8 mg e a L-Arginina iniciam a vasodilatação periférica seletiva. Mediante estímulo, o fluxo sanguíneo nos corpos cavernosos aumenta rapidamente.',
    },
    {
      time: '1 a 8 Horas',
      title: 'Pico de Rigidez, Energia e Foco',
      detail:
        'A Taurina atua no sistema neuromuscular reduzindo a fadiga física e mental, enquanto a sinergia vasodilatadora garante ereções firmes como aço e recuperação acelerada.',
    },
    {
      time: 'Até 36 Horas',
      title: 'Janela Prolongada de Potência e Confiança',
      detail:
        'O princípio ativo permanece biodisponível por até 36 horas, permitindo múltiplos momentos de prazer durante todo o final de semana com zero efeito colateral.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5]">
      {/* [TOP BARRA] Promotional Urgency Ribbon */}
      <div className="border-b border-[#D4AF37]/25 bg-gradient-to-r from-[#7F1D1D] via-[#991B1B] to-[#7F1D1D] px-4 py-2 text-center">
        <p className="mx-auto max-w-6xl text-xs font-bold tracking-wide text-white sm:text-sm">
          PROMOÇÃO APENAS HOJE, FRETE GRÁTIS COM A ENTREGA MAIS RÁPIDA DO BRASIL
        </p>
      </div>

      {/* Top Navigation Bar — Strictly 3-Zone Contract */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090B]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-3.5">
          {/* Zone 1: Brand Wordmark (single text element) */}
          <a
            href="#"
            className="font-display text-2xl font-bold tracking-tight text-[#D4AF37] whitespace-nowrap shrink-0"
          >
            TadaMaxx
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a
              href="#formula"
              className="transition-colors hover:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Fórmula
            </a>
            <a
              href="#beneficios"
              className="transition-colors hover:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Benefícios
            </a>
            <a
              href="#ciencia"
              className="transition-colors hover:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Ciência
            </a>
            <a
              href="#depoimentos"
              className="transition-colors hover:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Depoimentos
            </a>
            <a
              href="#kits"
              className="transition-colors hover:text-[#D4AF37] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              Kits
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={scrollToKits}
              className="rounded-lg bg-[#DC2626] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#B91C1C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* [HERO] Section */}
        <section className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-[#12100E] via-[#09090B] to-[#09090B] pt-10 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
              {/* Left Column: High-Conversion Copy & Primary CTA */}
              <div className="flex flex-col justify-center lg:col-span-7">
                {/* Metadata Kicker + Direct WhatsApp Action */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-400">
                  <span className="text-[#D4AF37] font-semibold">FÓRMULA AVANÇADA ORIGINAL</span>
                  <span aria-hidden="true">·</span>
                  <span>Tadalafila 8 mg + Taurina + L-Arginina</span>
                  <span aria-hidden="true">·</span>
                  <button
                    type="button"
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 underline-offset-4 hover:underline whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Atendimento WhatsApp</span>
                  </button>
                </div>

                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">
                  36 Horas com a Vara{' '}
                  <span className="bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#CA8A04] bg-clip-text text-transparent">
                    Dura como Aço!
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                  <strong className="font-semibold text-white">TadaMaxx</strong> é a combinação{' '}
                  <strong className="font-bold text-[#D4AF37]">PODEROSA</strong> da tadalafila, Taurina e L-arginina. Desenvolvido na dosagem exata para máxima rigidez, resistência física e confiança sem efeitos colaterais.
                </p>

                {/* Primary Hero CTA & WhatsApp Trigger */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={scrollToKits}
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#B91C1C] px-8 py-4 font-display text-lg font-bold tracking-wide text-white shadow-[0_10px_30px_rgba(220,38,38,0.35)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap shrink-0"
                  >
                    <span>QUERO MAIS PRAZER NA HORA H</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-5 py-4 text-sm font-semibold text-zinc-200 transition-colors hover:border-emerald-500/60 hover:text-white whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400" />
                    <span>WhatsApp Oficial</span>
                  </button>
                </div>

                {/* Selos de Benefícios (Clean unboxed metadata with typographic separators) */}
                <div className="mt-8 border-t border-zinc-800/80 pt-6">
                  <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                    BENEFÍCIOS E GARANTIAS OFICIAIS
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-300 sm:text-sm">
                    {HERO_BENEFIT_SEALS.map((seal, idx) => (
                      <React.Fragment key={seal}>
                        <span className="font-medium text-zinc-200">{seal}</span>
                        {idx < HERO_BENEFIT_SEALS.length - 1 && (
                          <span aria-hidden="true" className="text-[#D4AF37]">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Official Bottle Showcase */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800/90 bg-[#111114]/90 p-6 sm:p-8 lg:col-span-5">
                <ProductBottleVisual size="hero" className="w-full" />

                <div className="mt-4 w-full border-t border-zinc-800/80 pt-4 text-center">
                  <p className="font-display text-lg font-bold tracking-wide text-white">
                    FORÇA MÁXIMA · FÓRMULA TRIPLA AÇÃO
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400 tabular-nums">
                    <span className="text-[#D4AF37] font-semibold">Tadalafila 8 mg</span>
                    <span aria-hidden="true">·</span>
                    <span>Taurina Pura</span>
                    <span aria-hidden="true">·</span>
                    <span>L-Arginina Vasodilatadora</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Trust & Performance Strip Below Hero Split */}
            <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-zinc-800/90 bg-[#111114] p-6 sm:grid-cols-4">
              <div>
                <p className="font-mono text-2xl font-bold text-[#D4AF37] tabular-nums sm:text-3xl">
                  30 min
                </p>
                <p className="mt-1 text-xs text-zinc-400">Início rápido de absorção e resposta</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-white tabular-nums sm:text-3xl">
                  Até 36h
                </p>
                <p className="mt-1 text-xs text-zinc-400">Janela prolongada de potência ativa</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#D4AF37] tabular-nums sm:text-3xl">
                  8 mg
                </p>
                <p className="mt-1 text-xs text-zinc-400">Dosagem calibrada com zero efeito colateral</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-emerald-400 tabular-nums sm:text-3xl">
                  97,58%
                </p>
                <p className="mt-1 text-xs text-zinc-400">Índice de aprovação dos clientes no Brasil</p>
              </div>
            </div>
          </div>
        </section>

        {/* [FÓRMULA SECRETA] Section */}
        <section id="formula" className="border-b border-zinc-800/80 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                FÓRMULA SECRETA DE ALTA BIODISPONIBILIDADE
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A combinação perfeita entre os 3 ativos na dosagem certa para zero efeito colateral:
              </h2>
              <p className="mt-3 text-base text-zinc-400">
                Enquanto soluções comuns causam dor de cabeça e taquicardia por superdosagem isolada, o TadaMaxx equilibra a potência da Tadalafila 8 mg com dois aminoácidos nobres de suporte vascular e energético.
              </p>
            </div>

            {/* 3 Active Ingredient Cards */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {SECRET_FORMULA.map((item) => (
                <article
                  key={item.name}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#111114] p-7 transition-colors hover:border-[#D4AF37]/50"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-zinc-800/80 pb-4">
                      <span className="font-mono text-sm font-bold text-[#D4AF37] tabular-nums">
                        {item.index}. {item.role}
                      </span>
                      <span className="font-mono text-xs text-zinc-400 tabular-nums">
                        {item.dosage}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-bold tracking-wide text-white">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-zinc-800/60 pt-5 text-xs text-zinc-300">
                      {item.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-zinc-800/80 pt-4 text-xs font-medium text-[#D4AF37]">
                    {item.onsetText}
                  </div>
                </article>
              ))}
            </div>

            {/* Interactive Mechanism Timeline */}
            <div className="mt-12 rounded-2xl border border-zinc-800 bg-[#111114] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Como a Fórmula Age no Seu Corpo (30 Minutos até 36 Horas)
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400">
                    Clique em cada fase para conferir a atuação sinérgica dos 3 ativos:
                  </p>
                </div>

                {/* Interactive Segmented Buttons */}
                <div className="flex items-center gap-1.5 rounded-xl bg-[#09090B] p-1.5 border border-zinc-800">
                  {timelineStages.map((stage, idx) => (
                    <button
                      key={stage.time}
                      type="button"
                      onClick={() => setActiveTimelineStage(idx as 0 | 1 | 2)}
                      className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                        activeTimelineStage === idx
                          ? 'bg-[#D4AF37] text-[#09090B]'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {stage.time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-zinc-800/80 pt-6">
                <p className="font-mono text-xs font-semibold text-[#D4AF37] tabular-nums">
                  FASE 0{activeTimelineStage + 1} · {timelineStages[activeTimelineStage].time}
                </p>
                <h4 className="mt-1 font-display text-xl font-bold text-white">
                  {timelineStages[activeTimelineStage].title}
                </h4>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
                  {timelineStages[activeTimelineStage].detail}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* [PODER EM AÇÃO - 4 CARDS] Section */}
        <section id="beneficios" className="border-b border-zinc-800/80 bg-[#0D0D10] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                  PODER EM AÇÃO · RESULTADOS REAIS
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  4 Pilares de Performance Masculina Imediata
                </h2>
              </div>
              <p className="max-w-md text-sm text-zinc-400">
                Desenvolvido para homens que exigem potência máxima, controle absoluto e vigor prolongado sem abrir mão da segurança.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {POWER_IN_ACTION_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#131317] p-6 transition-colors hover:border-[#D4AF37]/50"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className="font-mono font-bold text-[#D4AF37] tabular-nums">
                        {card.index}. BENEFÍCIO
                      </span>
                      <span className="font-mono tabular-nums">{card.metric}</span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#D4AF37]">
                      {card.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-zinc-800/80 pt-3 text-xs text-zinc-400">
                    TadaMaxx Força Máxima
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* [SEÇÃO IMPACTO] Section */}
        <section className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-[#170B0B] via-[#0F090A] to-[#09090B] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
              {/* Left Column: High-Impact Copy */}
              <div className="flex flex-col justify-center lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#D4AF37]">
                  <Flame className="h-4 w-4 text-[#DC2626]" />
                  <span>ALTA PERFORMANCE SEM LIMITES</span>
                </div>

                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  🔥 TadaMaxx – Potência Máxima para Homens que Não Aceitam Limites! 🔥
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-300">
                  <p>
                    Chega de momentos de insegurança, cansaço acumulado ou falhas que abalam sua autoestima. O <strong className="text-white">TadaMaxx</strong> reúne uma <strong className="text-[#D4AF37]">fórmula avançada</strong> com <strong className="text-white">Tadalafila 8mg, L-Arginina e Taurina</strong> para transformar sua resposta física logo nos primeiros 30 minutos.
                  </p>
                  <p>
                    Enquanto a <strong className="text-white">Tadalafila 8mg</strong> mantém a capacidade erétil ativa por até 36 horas, a <strong className="text-white">L-Arginina</strong> expande a circulação sanguínea através do óxido nítrico e a <strong className="text-white">Taurina</strong> entrega explosão muscular e resistência mental para você dominar a hora H do início ao fim.
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-[#D4AF37]/35 bg-[#14110E] p-5">
                  <p className="font-display text-xl font-bold tracking-wide text-[#D4AF37] sm:text-2xl">
                    💪 Sinta a Diferença. Viva o Seu Máximo! 💪
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Surpreenda sua parceira com firmeza de aço, fôlego renovado e 36 horas de liberdade total.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={scrollToKits}
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#B91C1C] px-8 py-4 font-display text-lg font-bold tracking-wide text-white shadow-lg transition-transform duration-150 hover:scale-[1.02] whitespace-nowrap"
                  >
                    <span>QUERO MAIS PRAZER NA HORA H</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Intimate Happy Couple Editorial Visual + Product Showcase */}
              <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#111114] p-6 sm:p-8 lg:col-span-5">
                {/* Editorial Romantic Couple Canvas (Resilient High-Contrast SVG/CSS Composition) */}
                <div className="relative overflow-hidden rounded-xl border border-zinc-800/80 bg-gradient-to-br from-[#271111] via-[#141013] to-[#09090B] p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#D4AF37]/20 blur-3xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#DC2626]/20 blur-3xl"
                  />

                  {/* Intimate Couple Happy Silhouette & Passion Artwork */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <svg
                      viewBox="0 0 400 230"
                      className="h-48 w-full max-w-sm"
                      role="img"
                      aria-label="Casal feliz em sintonia e intimidade com TadaMaxx"
                    >
                      <defs>
                        <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.9" />
                          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.85" />
                          <stop offset="100%" stopColor="#92400E" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id="crimsonAura" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
                        </linearGradient>
                      </defs>

                      {/* Warm ambient halo behind the couple */}
                      <circle cx="200" cy="115" r="88" fill="url(#crimsonAura)" />
                      <circle
                        cx="200"
                        cy="115"
                        r="72"
                        fill="none"
                        stroke="url(#goldGlow)"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                      />

                      {/* Stylised embracing couple silhouette in gold/warm bronze */}
                      {/* Male profile & broad shoulders */}
                      <path
                        d="M125 210 C128 165, 148 142, 178 136 C168 124, 165 102, 174 86 C183 70, 204 68, 214 82 C219 89, 218 100, 212 110 C226 116, 238 135, 242 162 L246 210 Z"
                        fill="#1F1918"
                        stroke="url(#goldGlow)"
                        strokeWidth="2"
                      />
                      {/* Female profile embracing */}
                      <path
                        d="M188 210 C192 172, 206 148, 228 140 C218 128, 218 108, 228 95 C238 82, 258 84, 266 98 C274 112, 268 132, 254 142 C272 152, 284 176, 288 210 Z"
                        fill="#2A1617"
                        stroke="url(#goldGlow)"
                        strokeWidth="2"
                      />
                      {/* Connection spark / vitality pulse */}
                      <path
                        d="M196 52 L200 40 L204 52 L216 56 L204 60 L200 72 L196 60 L184 56 Z"
                        fill="#FDE68A"
                      />
                    </svg>

                    <p className="mt-2 font-display text-lg font-bold tracking-wide text-white">
                      CONEXÃO INTENSA E SATISFAÇÃO A DOIS
                    </p>
                    <p className="mt-1 text-xs text-zinc-300">
                      Mais confiança, firmeza e prazer compartilhado em todas as noites.
                    </p>
                  </div>
                </div>

                {/* Bottom Product & Formula Lockup inside Impact Card */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-zinc-800 pt-5">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#D4AF37]">SINERGIA 3 EM 1</p>
                    <p className="font-display text-lg font-bold text-white">
                      Tadalafila 8mg + L-Arginina + Taurina
                    </p>
                    <p className="text-xs text-zinc-400">
                      Zero efeitos colaterais · Absorção em 30 minutos
                    </p>
                  </div>
                  <ProductBottleVisual bottles={1} size="sm" className="w-20 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [CIÊNCIA] & [PROVA SOCIAL] Section */}
        <section id="ciencia" className="border-b border-zinc-800/80 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                RESPALDO CIENTÍFICO INTERNACIONAL
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                TadaMaxx: Ciência e Vitalidade a Serviço da Saúde Masculina
              </h2>
              <p className="mt-3 text-base text-zinc-400">
                Cada ativo da formulação foi selecionado com base em estudos clínicos de referência em urologia, saúde endotelial e fisiologia do exercício.
              </p>
            </div>

            {/* 4 Scientific Pillars */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {SCIENCE_PILLARS.map((study) => (
                <article
                  key={study.title}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#111114] p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-zinc-400">
                      <span className="font-mono font-bold text-[#D4AF37] tabular-nums">
                        {study.index}. {study.metric}
                      </span>
                      <span className="font-medium text-zinc-300">{study.source}</span>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
                      {study.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                      {study.summary}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-zinc-800/80 pt-3 text-xs text-zinc-400">
                    Referência Científica: <strong className="text-zinc-200">{study.source}</strong>
                  </div>
                </article>
              ))}
            </div>

            {/* Para Melhores Resultados Strip */}
            <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-[#12110E] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                    PROTOCOLO DE ALTA EFICÁCIA
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    Para Melhores Resultados:
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:flex-1 lg:pl-6">
                  {BEST_RESULTS_HABITS.map((habit) => (
                    <div
                      key={habit.title}
                      className="rounded-xl border border-zinc-800/90 bg-[#09090B] p-4"
                    >
                      <p className="font-display text-base font-bold text-white">
                        ✅ {habit.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                        {habit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* [PROVA SOCIAL] Benefícios Comprovados: Experiência do Usuário | Estudos Clínicos | Opinião Médica */}
            <div className="mt-16 rounded-2xl border border-zinc-800 bg-[#111114] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-zinc-800 pb-6 lg:flex-row lg:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                    TRIPLA VALIDAÇÃO DE QUALIDADE
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                    Benefícios Comprovados
                  </h3>
                </div>

                {/* Interactive Segmented Control for Social Proof Pillars */}
                <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-zinc-800 bg-[#09090B] p-1.5">
                  {SOCIAL_PROOF_PILLARS.map((pillar) => (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActiveSocialProofTab(pillar.id)}
                      className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                        activeSocialProofTab === pillar.id
                          ? 'bg-[#D4AF37] text-[#09090B]'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {pillar.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* All 3 Pillars Grid with Highlighted Active Pillar */}
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {SOCIAL_PROOF_PILLARS.map((pillar) => {
                  const isCurrent = pillar.id === activeSocialProofTab;
                  return (
                    <div
                      key={pillar.id}
                      onClick={() => setActiveSocialProofTab(pillar.id)}
                      className={`cursor-pointer rounded-xl border p-6 transition-all duration-150 ${
                        isCurrent
                          ? 'border-[#D4AF37] bg-[#09090B]'
                          : 'border-zinc-800/80 bg-[#09090B]/50 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#D4AF37]">{pillar.title}</span>
                        <span className="font-mono font-bold text-white tabular-nums">
                          {pillar.stat}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                        {pillar.summary}
                      </p>
                      <ul className="mt-4 space-y-2 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400">
                        {pillar.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* [DEPOIMENTOS] Section */}
        <section id="depoimentos" className="border-b border-zinc-800/80 bg-[#0D0D10] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                  QUEM USA, RECOMENDA
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Depoimentos Reais de Clientes Verificados
                </h2>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-[#111114] px-5 py-3">
                <span className="font-mono text-3xl font-bold text-[#D4AF37] tabular-nums">
                  97,58%
                </span>
                <div className="text-xs text-zinc-300">
                  <p className="font-bold text-white">Índice de Aprovação</p>
                  <p className="text-zinc-400">Avaliação média 4.9/5.0 em todo o Brasil</p>
                </div>
              </div>
            </div>

            {/* Card Destaque: Albérico, Ceará */}
            <div className="mt-10 rounded-2xl border border-[#D4AF37]/60 bg-gradient-to-br from-[#19150E] via-[#111114] to-[#111114] p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <span className="font-bold tracking-wider">DEPOIMENTO EM DESTAQUE</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-zinc-300">{FEATURED_TESTIMONIAL.kitPurchased}</span>
                </div>
                <div className="flex items-center gap-1 text-[#D4AF37]" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              <blockquote className="mt-6 font-display text-xl font-normal leading-relaxed text-white sm:text-2xl">
                “{FEATURED_TESTIMONIAL.quote}”
              </blockquote>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm">
                <div>
                  <span className="font-bold text-white">{FEATURED_TESTIMONIAL.name}</span>
                  <span className="mx-2 text-zinc-600">·</span>
                  <span className="text-[#D4AF37] font-medium">{FEATURED_TESTIMONIAL.location}</span>
                  <span className="mx-2 text-zinc-600">·</span>
                  <span className="text-zinc-400 tabular-nums">{FEATURED_TESTIMONIAL.age} anos</span>
                </div>
                <span className="text-xs font-medium text-emerald-400">
                  ✓ {FEATURED_TESTIMONIAL.verifiedDate}
                </span>
              </div>
            </div>

            {/* + 4 Depoimentos Grid (José Luiz, Cristiano, Celso Bonfim, Robson) */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {TESTIMONIALS_LIST.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#111114] p-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-400">{item.kitPurchased}</span>
                    </div>

                    <blockquote className="mt-4 text-sm leading-relaxed text-zinc-200">
                      “{item.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs">
                    <div>
                      <span className="font-bold text-white">{item.name}</span>
                      <span className="mx-1.5 text-zinc-600">·</span>
                      <span className="text-zinc-400">{item.location}</span>
                    </div>
                    <span className="font-medium text-emerald-400">✓ {item.verifiedDate}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* [KITS DE PREÇO] Section */}
        <section
          id="kits"
          className="scroll-mt-16 border-b border-zinc-800/80 bg-gradient-to-b from-[#09090B] via-[#130E0A] to-[#09090B] py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                OFERTA ESPECIAL DE HOJE · FRETE GRÁTIS PARA TODO O BRASIL
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Escolha o Melhor Kit Para Você
              </h2>
              <p className="mt-3 text-base text-zinc-300">
                Recomendamos o <strong className="text-[#D4AF37]">kit intermediário (60 Cápsulas)</strong> para garantir o ciclo contínuo com o melhor custo-benefício.
              </p>
            </div>

            {/* 3 Pricing Kit Cards */}
            <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
              {PRICING_KITS.map((kit) => {
                const isFeatured = kit.isFeatured;
                return (
                  <div
                    key={kit.id}
                    className={`group relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-200 ${
                      isFeatured
                        ? 'border-2 border-[#D4AF37] bg-gradient-to-b from-[#1A150D] via-[#121215] to-[#0D0D10] shadow-[0_20px_50px_rgba(212,175,55,0.14)] lg:-translate-y-2'
                        : 'border-zinc-800 bg-[#111114] hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      {/* Top Header / Highlight Kicker */}
                      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                        <span className="font-mono text-xs font-bold tracking-wider text-zinc-400">
                          {kit.bottles} {kit.bottles === 1 ? 'FRASCO ORIGINAL' : 'FRASCOS ORIGINAIS'}
                        </span>
                        {kit.highlightLabel ? (
                          <span
                            className={`text-xs font-bold tracking-wider ${
                              isFeatured ? 'text-[#D4AF37]' : 'text-emerald-400'
                            }`}
                          >
                            ★ {kit.highlightLabel.toUpperCase()}
                          </span>
                        ) : (
                          <span className="text-xs text-zinc-400">Experimentação</span>
                        )}
                      </div>

                      {/* Kit Title & Subtitle */}
                      <div className="mt-5 text-center">
                        <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {kit.title}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-zinc-400">{kit.subtitle}</p>
                      </div>

                      {/* Visual Mockup of 1, 2, or 3 Bottles */}
                      <div className="my-6 py-2">
                        <ProductBottleVisual
                          bottles={kit.bottles as 1 | 2 | 3}
                          size="md"
                        />
                      </div>

                      {/* Pricing Breakdown */}
                      <div className="rounded-xl border border-zinc-800/80 bg-[#09090B] p-5 text-center">
                        <p className="text-xs text-zinc-500">
                          De <span className="line-through tabular-nums">{kit.oldPriceFormatted}</span> por apenas:
                        </p>
                        <p className="mt-1 font-mono text-4xl font-bold tracking-tight text-[#D4AF37] tabular-nums">
                          {kit.priceFormatted}
                        </p>
                        <p className="mt-1 text-xs text-zinc-300 tabular-nums">
                          ou em até <strong className="text-white">{kit.installmentValue}</strong> no cartão
                        </p>
                        <div className="mt-3 flex items-center justify-center gap-2 border-t border-zinc-800/80 pt-3 text-xs text-zinc-400 tabular-nums">
                          <span>{kit.perCapsuleFormatted}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-semibold text-emerald-400">{kit.savingsFormatted}</span>
                        </div>
                      </div>

                      {/* Kit Features */}
                      <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                          <span>{kit.durationText}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                          <span>Tadalafila 8mg + Taurina + L-Arginina</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                          <span className="font-bold text-emerald-400">
                            FRETE GRÁTIS EXPRESSO
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                          <span>Embalagem 100% Discreta + Garantia 30 Dias</span>
                        </li>
                      </ul>
                    </div>

                    {/* Primary Kit CTA -> Direct Official Braip Checkout */}
                    <div className="mt-7 pt-2">
                      <a
                        href={kit.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-display text-lg font-bold tracking-wide transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap ${
                          isFeatured
                            ? 'bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#B91C1C] text-white shadow-[0_10px_25px_rgba(220,38,38,0.4)]'
                            : 'bg-[#D4AF37] text-[#09090B] hover:bg-[#E5C158]'
                        }`}
                      >
                        <span>COMPRAR AGORA</span>
                        <ArrowRight className="h-5 w-5" />
                      </a>

                      <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400">
                        <Truck className="h-4 w-4" />
                        <span>FRETE GRÁTIS · CHECKOUT SEGURO BRAIP</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* [DISCRIÇÃO] & [AVISO OFICIAL] Section */}
        <section className="border-b border-zinc-800/80 bg-[#0D0D10] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* [DISCRIÇÃO] Embalagem Totalmente Discreta + Selo Anti-Pirataria */}
              <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#111114] p-7 sm:p-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                    <PackageCheck className="h-4 w-4" />
                    <span>SIGILO TOTAL DO PEDIDO À ENTREGA</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    Embalagem Totalmente Discreta
                  </h3>
                  <p className="mt-2 font-display text-lg font-semibold text-[#D4AF37]">
                    “Nem o carteiro sabe o que está entregando”
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    Seu pedido é enviado em caixa parda lacrada e reforçada, sem qualquer logotipo, imagem ou referência ao TadaMaxx na parte externa. A nota e a fatura do cartão também utilizam razão social discreta para proteger 100% a sua privacidade.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-5">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 shrink-0 text-[#D4AF37]" />
                    <div>
                      <p className="font-display text-sm font-bold text-white">
                        SELO HOLOGRÁFICO ANTI-PIRATARIA
                      </p>
                      <p className="text-xs text-zinc-400">
                        Lote rastreável · Pureza laboratorial garantida
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    100% ORIGINAL
                  </span>
                </div>
              </div>

              {/* [AVISO OFICIAL] Anti-Marketplaces Warning + 30-Day Guarantee */}
              <div className="flex flex-col justify-between rounded-2xl border border-red-900/50 bg-gradient-to-br from-[#1A0D0E] via-[#111114] to-[#111114] p-7 sm:p-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
                    <AlertTriangle className="h-4 w-4" />
                    <span>COMUNICADO OFICIAL DE SEGURANÇA</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    Aviso Oficial Contra Falsificações
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                    A venda do <strong className="text-white">TadaMaxx</strong> só pode ser realizada através deste <strong className="text-[#D4AF37]">site oficial</strong>. Evite falsificações que colocam sua saúde em risco.
                  </p>
                  <p className="mt-3 rounded-xl border border-red-900/60 bg-red-950/30 p-4 text-xs font-semibold leading-relaxed text-red-200">
                    PROIBIDA A VENDA NO: Mercado Livre, Americanas, Submarino, Shoptime e Magalu. Não nos responsabilizamos por produtos adquiridos fora deste portal oficial.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 shrink-0 text-[#D4AF37]" />
                    <div>
                      <p className="font-display text-sm font-bold text-white">
                        SELO GARANTIA DE 30 DIAS
                      </p>
                      <p className="text-xs text-zinc-400">
                        Satisfação comprovada ou seu investimento protegido
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={scrollToKits}
                    className="text-xs font-bold text-[#D4AF37] underline-offset-4 hover:underline whitespace-nowrap"
                  >
                    Comprar com Segurança →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [FAQ - accordion] Section */}
        <section id="faq" className="border-b border-zinc-800/80 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                TIRE TODAS AS SUAS DÚVIDAS
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes (FAQ)
              </h2>
            </div>

            <div className="mt-10 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-[#111114]">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="p-5 sm:p-6">
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="font-display text-lg font-bold tracking-wide text-white sm:text-xl">
                        <span className="mr-2.5 font-mono text-sm text-[#D4AF37] tabular-nums">
                          0{idx + 1}.
                        </span>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#D4AF37] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-3.5 pr-6 text-sm leading-relaxed text-zinc-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* FAQ CTA: QUERO DURAR MAIS! */}
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={scrollToKits}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#B91C1C] px-10 py-4 font-display text-xl font-bold tracking-wide text-white shadow-[0_10px_30px_rgba(220,38,38,0.35)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap"
              >
                <span>QUERO DURAR MAIS!</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="mt-3 text-xs text-zinc-400">
                Clique acima para escolher seu Kit com Frete Grátis e Envio Imediato
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* [FOOTER] Quiet, Complete & Authoritative Official Footer */}
      <footer className="bg-[#060608] pt-16 pb-12 text-zinc-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 border-b border-zinc-800/80 pb-12 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand & Guarantee Column */}
            <div className="lg:col-span-4">
              <span className="font-display text-2xl font-bold tracking-tight text-[#D4AF37]">
                TadaMaxx
              </span>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Força Máxima para a saúde e vitalidade masculina. Combinação sinérgica de Tadalafila 8 mg, Taurina e L-Arginina com absorção rápida e até 36 horas de duração.
              </p>

              {/* Selo Garantia 30 Dias */}
              <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#111114] px-4 py-3">
                <ShieldCheck className="h-7 w-7 text-[#D4AF37]" />
                <div>
                  <p className="font-display text-sm font-bold text-white">
                    SELO GARANTIA 30 DIAS
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Compra 100% Segura e Protegida
                  </p>
                </div>
              </div>
            </div>

            {/* Canais de Atendimento */}
            <div className="lg:col-span-5">
              <h3 className="font-display text-sm font-bold tracking-wider text-white">
                CANAIS DE ATENDIMENTO OFICIAIS
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                Suporte rápido por e-mail ou WhatsApp em horário comercial:
              </p>

              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                  <span className="text-zinc-400">E-mail:</span>
                  <a
                    href="mailto:suporte@lojadocabo.com"
                    className="font-mono font-semibold text-white hover:text-[#D4AF37] underline-offset-4 hover:underline"
                  >
                    suporte@lojadocabo.com
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                  {WHATSAPP_CHANNELS.map((ch) => (
                    <a
                      key={ch.phone}
                      href={`https://wa.me/${ch.phone}?text=${encodeURIComponent(
                        'Olá! Preciso de atendimento sobre o TadaMaxx.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-[#111114] px-3 py-2 font-mono text-xs font-semibold text-zinc-200 tabular-nums transition-colors hover:border-emerald-500/60 hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{ch.display}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Flags (Pix / Boleto / Cartão) */}
            <div className="lg:col-span-3">
              <h3 className="font-display text-sm font-bold tracking-wider text-white">
                FORMAS DE PAGAMENTO
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                Processamento criptografado em até 12x:
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] font-bold text-zinc-200">
                <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#111114] py-2.5 text-emerald-400">
                  PIX
                </div>
                <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#111114] py-2.5">
                  BOLETO
                </div>
                <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#111114] py-2.5">
                  VISA
                </div>
                <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#111114] py-2.5">
                  MASTERCARD
                </div>
                <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#111114] py-2.5">
                  ELO
                </div>
                <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-[#111114] py-2.5">
                  HIPERCARD
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Row */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
            <p>© 2026 TadaMaxx - Todos os Direitos Reservados</p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="text-zinc-400 underline-offset-4 hover:text-white hover:underline"
              >
                Política de Privacidade
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setIsWhatsAppOpen(true)}
                className="text-zinc-400 underline-offset-4 hover:text-white hover:underline"
              >
                Central WhatsApp
              </button>
              <span aria-hidden="true">·</span>
              <a
                href="#kits"
                className="text-[#D4AF37] underline-offset-4 hover:underline"
              >
                Kits Oficiais
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        selectedKit={selectedKit}
        onClose={() => setIsCheckoutOpen(false)}
        onSelectKit={(kit) => setSelectedKit(kit)}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
}
