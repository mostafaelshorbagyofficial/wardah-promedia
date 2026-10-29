import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Sparkles, ArrowDown } from 'lucide-react';

interface WardahTransitionProps {
  lang: Language;
}

export const WardahTransition: React.FC<WardahTransitionProps> = ({ lang }) => {
  const t = CONTENT[lang].transition;

  return (
    <section
      id="wardah-proposal"
      className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-white via-[#faf8f5] to-[#f5f0e8] border-t border-[#e8e0d5] overflow-hidden"
    >
      {/* Decorative Floral Watercolor Aura derived from Wardah Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] bg-gradient-to-tr from-[#c5384a]/12 via-[#c49348]/12 to-[#326084]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Proposal Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5384a]/10 border border-[#c5384a]/25 text-xs sm:text-sm font-bold text-[#c5384a] uppercase tracking-wider mb-6 sm:mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#c5384a]" />
          <span>{t.badge}</span>
        </div>

        {/* Official Wardah Restaurant & Cafe Logo */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="relative group p-4 sm:p-7 bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d5] shadow-xl shadow-[#8b5c4a]/10">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#c5384a] via-[#c49348] to-[#326084] rounded-2xl sm:rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-300"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8">
              <img
                src="/assets/logo/wardah-logo.png"
                alt="Wardah Restaurant & Cafe Official Logo"
                width="360"
                height="360"
                loading="lazy"
                decoding="async"
                className="h-28 sm:h-44 md:h-52 w-auto object-contain mx-auto drop-shadow-md transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </div>
        </div>

        {/* Exact Required Proposal Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a202c] tracking-tight mb-3 sm:mb-4 uppercase px-2">
          {t.title}
        </h2>

        <p className="text-base sm:text-2xl md:text-3xl font-light text-[#c5384a] tracking-wide mb-4 font-serif px-2">
          {t.subtitle}
        </p>

        <div className="inline-block px-4 sm:px-5 py-2 rounded-full bg-white border border-[#e8e0d5] text-xs sm:text-base font-bold text-[#334155] shadow-sm mb-6 sm:mb-8">
          {t.preparedBy}
        </div>

        <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#475569] leading-relaxed font-normal mb-8 sm:mb-10 px-2">
          {t.intro}
        </p>

        {/* Section Navigation Hint */}
        <div className="flex justify-center">
          <a
            href="#wardah-vision"
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#c5384a] bg-[#c5384a]/10 hover:bg-[#c5384a]/20 border border-[#c5384a]/20 transition-all active:scale-95"
          >
            <span>{lang === 'ar' ? 'استكشف استراتيجية وردة المتكاملة' : 'Explore Wardah Comprehensive Strategy'}</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
