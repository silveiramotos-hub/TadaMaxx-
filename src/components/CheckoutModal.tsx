import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Truck, CheckCircle2, Lock, CreditCard, QrCode, FileText, ArrowRight } from 'lucide-react';
import { KitOption, PRICING_KITS, WHATSAPP_CHANNELS } from '../data/tadamaxxData';
import { ProductBottleVisual } from './ProductBottleVisual';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedKit: KitOption | null;
  onClose: () => void;
  onSelectKit: (kit: KitOption) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedKit,
  onClose,
  onSelectKit,
}) => {
  const activeKit = selectedKit || PRICING_KITS[1];
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [errorMsg, setErrorMsg] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');

  useEffect(() => {
    if (isOpen) {
      setErrorMsg('');
      setOrderCompleted(false);
    }
  }, [isOpen, selectedKit]);

  if (!isOpen) return null;

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const formatCep = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim().length < 3) {
      setErrorMsg('Por favor, informe seu nome completo para emissão discreta.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Informe um WhatsApp/telefone válido com DDD para receber o rastreio.');
      return;
    }
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      setErrorMsg('Informe um CEP válido de 8 dígitos para confirmar o Frete Grátis.');
      return;
    }

    setErrorMsg('');
    const randomProtocol = `TMX-${Math.floor(100000 + Math.random() * 900000)}`;
    setProtocolNumber(randomProtocol);
    setOrderCompleted(true);
  };

  const paymentLabel =
    paymentMethod === 'pix'
      ? 'PIX (Envio Prioritário Imediato)'
      : paymentMethod === 'card'
      ? `Cartão de Crédito (${activeKit.installmentValue})`
      : 'Boleto Bancário à vista';

  const whatsappOrderUrl = `https://wa.me/${WHATSAPP_CHANNELS[0].phone}?text=${encodeURIComponent(
    `Olá! Quero finalizar meu pedido oficial do *TadaMaxx*:\n\n` +
      `• *Kit Escolhido:* ${activeKit.title} (${activeKit.bottles} ${
        activeKit.bottles === 1 ? 'Frasco' : 'Frascos'
      })\n` +
      `• *Valor Promocional:* ${activeKit.priceFormatted} + FRETE GRÁTIS\n` +
      `• *Forma de Pagamento:* ${paymentLabel}\n` +
      (fullName ? `• *Nome:* ${fullName}\n` : '') +
      (cep ? `• *CEP:* ${cep}\n` : '') +
      (protocolNumber ? `• *Protocolo:* ${protocolNumber}\n` : '') +
      `\nAguardo o link/chave oficial com envio 100% discreto!`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#111114] p-6 text-zinc-100 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de pedido"
          className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 text-xs font-medium text-[#D4AF37]">
            <Lock className="h-3.5 w-3.5" />
            <span>Ambiente Oficial Criptografado · Embalagem 100% Discreta</span>
          </div>
          <h2 id="checkout-modal-title" className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {orderCompleted ? 'PEDIDO RESERVADO COM SUCESSO!' : 'FINALIZAR PEDIDO COM FRETE GRÁTIS'}
          </h2>
        </div>

        {!orderCompleted ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Kit Switcher */}
            <div>
              <label className="block text-xs font-medium text-zinc-400">
                Selecione ou altere seu Kit Promocional:
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2.5">
                {PRICING_KITS.map((kit) => {
                  const isSelected = kit.id === activeKit.id;
                  return (
                    <button
                      key={kit.id}
                      type="button"
                      onClick={() => onSelectKit(kit)}
                      className={`flex flex-col items-start justify-between rounded-xl border p-3 text-left transition-all duration-150 ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                          : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <span className="text-xs font-semibold text-[#D4AF37]">
                        {kit.highlightLabel || 'Kit Inicial'}
                      </span>
                      <span className="mt-0.5 font-display text-base font-bold text-white whitespace-nowrap">
                        {kit.title}
                      </span>
                      <span className="mt-1 font-mono text-xs font-semibold tabular-nums text-zinc-200">
                        {kit.priceFormatted}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Kit Summary Banner */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-800/90 bg-[#09090B] p-4 sm:flex-row">
              <div className="flex items-center gap-4">
                <ProductBottleVisual
                  bottles={activeKit.bottles as 1 | 2 | 3}
                  size="sm"
                  className="w-24 shrink-0"
                />
                <div>
                  <p className="text-xs font-medium text-[#D4AF37]">{activeKit.subtitle}</p>
                  <p className="font-display text-xl font-bold text-white">
                    TadaMaxx — {activeKit.title}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Frete Grátis Expresso · Garantia Blindada de 30 Dias
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-xs text-zinc-500 line-through tabular-nums">{activeKit.oldPriceFormatted}</p>
                <p className="font-mono text-2xl font-bold text-[#D4AF37] tabular-nums">
                  {activeKit.priceFormatted}
                </p>
                <p className="text-xs text-zinc-400 tabular-nums">ou {activeKit.installmentValue}</p>
              </div>
            </div>

            {/* User Input Fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="checkout-name" className="block text-xs font-medium text-zinc-300">
                  Nome Completo (para etiqueta discreta)
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-[#09090B] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="checkout-phone" className="block text-xs font-medium text-zinc-300">
                  WhatsApp com DDD (para código de rastreio)
                </label>
                <input
                  id="checkout-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="(71) 99999-9999"
                  className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-[#09090B] px-4 py-3 font-mono text-sm text-white placeholder-zinc-500 tabular-nums focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="checkout-cep" className="block text-xs font-medium text-zinc-300">
                  CEP de Entrega (Frete Grátis Hoje)
                </label>
                <input
                  id="checkout-cep"
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(formatCep(e.target.value))}
                  placeholder="00000-000"
                  className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-[#09090B] px-4 py-3 font-mono text-sm text-white placeholder-zinc-500 tabular-nums focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            {cep.replace(/\D/g, '').length === 8 && (
              <div className="flex items-center justify-between rounded-lg border border-emerald-900/60 bg-emerald-950/30 px-4 py-2.5 text-xs text-emerald-300">
                <span className="flex items-center gap-2">
                  <Truck className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>CEP Elegível: Envio Expresso Discreto Liberado</span>
                </span>
                <span className="font-mono font-bold text-emerald-400">FRETE GRÁTIS (R$ 0,00)</span>
              </div>
            )}

            {/* Payment Selector */}
            <div>
              <label className="block text-xs font-medium text-zinc-300">
                Escolha a Forma de Pagamento:
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                    paymentMethod === 'pix'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-white'
                      : 'border-zinc-800 bg-[#09090B] text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <QrCode className="h-4 w-4 text-[#D4AF37]" />
                  <span>PIX Imediato</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                    paymentMethod === 'card'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-white'
                      : 'border-zinc-800 bg-[#09090B] text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <CreditCard className="h-4 w-4 text-[#D4AF37]" />
                  <span>Cartão até 12x</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                    paymentMethod === 'boleto'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-white'
                      : 'border-zinc-800 bg-[#09090B] text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <FileText className="h-4 w-4 text-[#D4AF37]" />
                  <span>Boleto</span>
                </button>
              </div>
            </div>

            {errorMsg && (
              <p className="rounded-lg border border-red-800/70 bg-red-950/50 px-4 py-2.5 text-xs font-medium text-red-300">
                {errorMsg}
              </p>
            )}

            {/* Submit & Direct Braip / WhatsApp */}
            <div className="space-y-3 pt-1">
              <a
                href={activeKit.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#B91C1C] px-6 py-4 font-display text-lg font-bold tracking-wide text-white shadow-lg transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] whitespace-nowrap"
              >
                <span>IR PARA O CHECKOUT OFICIAL BRAIP — {activeKit.priceFormatted}</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/90 px-4 py-3 text-xs font-semibold text-zinc-200 transition-colors hover:border-[#D4AF37] hover:text-white whitespace-nowrap"
              >
                <span>Prefere fechar direto pelo WhatsApp Oficial? Clique aqui</span>
              </a>
            </div>
          </form>
        ) : (
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-[#D4AF37]/40 bg-[#09090B] p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-xs font-medium text-zinc-400">
                    Protocolo Oficial: <span className="font-mono font-bold text-[#D4AF37]">{protocolNumber}</span>
                  </p>
                  <h3 className="font-display text-xl font-bold text-white">
                    Reserva Garantida para {fullName}
                  </h3>
                </div>
              </div>

              <div className="mt-4 space-y-2 border-t border-zinc-800 pt-4 text-sm text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Kit Selecionado:</span>
                  <span className="font-semibold text-white">TadaMaxx {activeKit.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Valor Total:</span>
                  <span className="font-mono font-bold text-[#D4AF37] tabular-nums">{activeKit.priceFormatted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Frete e Embalagem:</span>
                  <span className="font-semibold text-emerald-400">GRÁTIS · 100% Discreta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">CEP Destino:</span>
                  <span className="font-mono text-white tabular-nums">{cep}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Forma de Pagamento:</span>
                  <span className="text-white">{paymentLabel}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-display text-lg font-bold tracking-wide text-white transition-colors hover:bg-emerald-500 whitespace-nowrap"
              >
                <span>RECEBER CHAVE / LINK E RASTREIO NO WHATSAPP</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg border border-zinc-800 py-2.5 text-xs font-medium text-zinc-400 hover:text-white"
              >
                Voltar para a página oficial
              </button>
            </div>
          </div>
        )}

        {/* Footer Trust Row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            Garantia de 30 Dias
          </span>
          <span>·</span>
          <span>Remetente Neutro e Sigiloso</span>
          <span>·</span>
          <span>Selo Original Anti-Pirataria</span>
        </div>
      </div>
    </div>
  );
};
