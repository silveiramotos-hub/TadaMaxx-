import React, { useState } from 'react';
import { PRODUCT_IMAGE_PATH } from '../data/tadamaxxData';

interface ProductBottleVisualProps {
  bottles?: 1 | 2 | 3;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const ProductBottleVisual: React.FC<ProductBottleVisualProps> = ({
  bottles = 1,
  size = 'md',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const renderSingleBottle = (extraClasses: string, keyLabel: string) => {
    if (imgError) {
      return (
        <div
          key={keyLabel}
          className={`flex flex-col items-center justify-between rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#1F1F23] via-[#141417] to-[#09090B] p-4 text-center shadow-2xl ${extraClasses}`}
        >
          <div className="h-4 w-16 rounded-sm bg-zinc-200/90" />
          <div className="my-auto py-3">
            <p className="text-[10px] font-semibold tracking-wider text-[#D4AF37]">FORÇA MÁXIMA</p>
            <p className="font-display text-xl font-bold tracking-tight text-white">TadaMaxx</p>
            <p className="mt-1 text-[9px] text-zinc-300">Taurina + L-Arginina + Tadalafila 8 mg</p>
          </div>
          <div className="h-2 w-full rounded-full bg-[#DC2626]/70" />
        </div>
      );
    }

    return (
      <img
        key={keyLabel}
        src={PRODUCT_IMAGE_PATH}
        alt="Frasco Original TadaMaxx — Força Máxima: Taurina + L-Arginina + Tadalafila 8 mg"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`object-contain select-none drop-shadow-[0_22px_38px_rgba(0,0,0,0.85)] ${extraClasses}`}
      />
    );
  };

  if (size === 'hero') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Subtle studio backlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 m-auto h-72 w-72 rounded-full bg-radial from-[#D4AF37]/25 via-[#DC2626]/15 to-transparent blur-3xl sm:h-96 sm:w-96"
        />

        {/* Secondary bottle subtly offset in background for depth */}
        <div className="relative flex items-center justify-center py-4">
          {renderSingleBottle(
            'hidden sm:block w-44 md:w-52 -mr-14 opacity-60 scale-90 -rotate-6 transition-transform duration-300',
            'hero-bg-left'
          )}
          {renderSingleBottle(
            'relative z-10 w-56 sm:w-64 md:w-72 animate-float-slow transition-transform duration-300',
            'hero-main'
          )}
          {renderSingleBottle(
            'hidden sm:block w-44 md:w-52 -ml-14 opacity-60 scale-90 rotate-6 transition-transform duration-300',
            'hero-bg-right'
          )}
        </div>
      </div>
    );
  }

  const heightMap = {
    sm: 'h-32',
    md: 'h-44 sm:h-48',
    lg: 'h-52 sm:h-56',
  };

  const baseHeight = heightMap[size];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-36 w-36 rounded-full bg-radial from-[#D4AF37]/20 via-[#DC2626]/10 to-transparent blur-2xl"
      />
      {bottles === 1 && (
        <div className="relative z-10 flex items-center justify-center">
          {renderSingleBottle(`${baseHeight} w-auto transition-transform duration-200 group-hover:scale-105`, 'b1')}
        </div>
      )}

      {bottles === 2 && (
        <div className="relative z-10 flex items-end justify-center">
          {renderSingleBottle(
            `${baseHeight} w-auto -mr-6 scale-95 -rotate-6 opacity-90 transition-transform duration-200 group-hover:-translate-x-1`,
            'b2-left'
          )}
          {renderSingleBottle(
            `${baseHeight} relative z-10 w-auto scale-105 transition-transform duration-200 group-hover:scale-110`,
            'b2-right'
          )}
        </div>
      )}

      {bottles === 3 && (
        <div className="relative z-10 flex items-end justify-center">
          {renderSingleBottle(
            `${baseHeight} w-auto -mr-8 scale-90 -rotate-8 opacity-85 transition-transform duration-200 group-hover:-translate-x-1.5`,
            'b3-left'
          )}
          {renderSingleBottle(
            `${baseHeight} relative z-20 w-auto scale-105 transition-transform duration-200 group-hover:scale-110`,
            'b3-center'
          )}
          {renderSingleBottle(
            `${baseHeight} w-auto -ml-8 scale-90 rotate-8 opacity-85 transition-transform duration-200 group-hover:translate-x-1.5`,
            'b3-right'
          )}
        </div>
      )}
    </div>
  );
};
