import React from 'react';
import { X, Shield, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { WHATSAPP_CHANNELS } from '../data/tadamaxxData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#111114] p-6 text-zinc-200 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar Política de Privacidade"
          className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-medium text-[#D4AF37]">
          <Shield className="h-4 w-4" />
          <span>Sigilo Absoluto & Conformidade LGPD</span>
        </div>
        <h2 id="privacy-modal-title" className="mt-1 font-display text-2xl font-bold text-white">
          POLÍTICA DE PRIVACIDADE E SEGURANÇA — TADAMAXX OFICIAL
        </h2>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-300">
          <p>
            A sua privacidade e discrição são prioridades absolutas do <strong>TadaMaxx Oficial</strong>. Todas as informações coletadas neste site são utilizadas exclusivamente para processamento logístico, emissão fiscal sigilosa e envio do código de rastreio do seu pedido.
          </p>
          <h3 className="font-display text-base font-bold text-white">
            01. Sigilo na Entrega e Faturamento
          </h3>
          <p>
            Todos os pedidos são despachados em embalagem parda lacrada de alta resistência, sem qualquer menção ao nome comercial TadaMaxx ou à natureza do produto no exterior da caixa. Na fatura do cartão ou comprovante bancário, a descrição aparece de forma neutra e discreta.
          </p>
          <h3 className="font-display text-base font-bold text-white">
            02. Proteção de Dados (LGPD)
          </h3>
          <p>
            Utilizamos criptografia SSL de 256 bits em todas as comunicações. Não comercializamos, alugamos ou compartilhamos seus dados de contato (nome, CPF, endereço ou WhatsApp) com terceiros não envolvidos na entrega do seu pedido.
          </p>
          <h3 className="font-display text-base font-bold text-white">
            03. Garantia de 30 Dias e Suporte Oficial
          </h3>
          <p>
            Para solicitações relacionadas à Garantia de 30 Dias, rastreamento ou dúvidas sobre o uso do produto, entre em contato exclusivamente pelos nossos canais oficiais: e-mail{' '}
            <a href="mailto:suporte@lojadocabo.com" className="text-[#D4AF37] underline">
              suporte@lojadocabo.com
            </a>{' '}
            ou pelos telefones de atendimento 71 98382-1218, 71 99954-5088 e 71 99117-1830.
          </p>
        </div>

        <div className="mt-6 flex justify-end border-t border-zinc-800 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-[#09090B] transition-opacity hover:opacity-90"
          >
            Entendi e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export const WhatsAppModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-[#111114] p-6 text-zinc-100 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar canais de WhatsApp"
          className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
          <MessageCircle className="h-4 w-4" />
          <span>Atendimento Oficial e Sigiloso</span>
        </div>
        <h2 id="whatsapp-modal-title" className="mt-1 font-display text-2xl font-bold text-white">
          FALE COM UM ESPECIALISTA NO WHATSAPP
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Tire dúvidas sobre a fórmula (Tadalafila 8mg + Taurina + L-Arginina) ou faça seu pedido com Frete Grátis:
        </p>

        <div className="mt-5 space-y-3">
          {WHATSAPP_CHANNELS.map((channel) => (
            <a
              key={channel.phone}
              href={`https://wa.me/${channel.phone}?text=${encodeURIComponent(
                'Olá! Vim pelo Site Oficial do TadaMaxx e gostaria de atendimento sobre os kits com Frete Grátis.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#09090B] p-4 transition-colors hover:border-emerald-500/60 hover:bg-zinc-900/80"
            >
              <div>
                <p className="text-xs font-medium text-emerald-400">{channel.role}</p>
                <p className="mt-0.5 font-mono text-lg font-bold text-white tabular-nums">
                  {channel.display}
                </p>
                <p className="text-xs text-zinc-400">{channel.label}</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white whitespace-nowrap">
                <span>Iniciar Chat</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-3 text-xs text-zinc-300">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#D4AF37]" />
            <span>E-mail Oficial de Suporte:</span>
          </span>
          <a
            href="mailto:suporte@lojadocabo.com"
            className="font-mono font-semibold text-[#D4AF37] hover:underline"
          >
            suporte@lojadocabo.com
          </a>
        </div>
      </div>
    </div>
  );
};
