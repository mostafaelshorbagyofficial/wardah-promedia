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
      className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-[#11141a] via-[#1a1614] to-[#141211] border-t border-amber-500/20 overflow-hidden"
    >
      {/* Decorative Floral Watercolor Aura derived from Wardah Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] bg-gradient-to-tr from-[#d9384e]/15 via-[#d9822b]/15 to-[#1a8b9d]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Proposal Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider mb-6 sm:mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.badge}</span>
        </div>

        {/* Official Wardah Restaurant & Cafe Logo */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="relative group p-3 sm:p-6 bg-[#211c19]/90 rounded-2xl sm:rounded-3xl border border-amber-500/30 shadow-2xl shadow-black/80 backdrop-blur-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d9384e] via-[#d9822b] to-[#1a8b9d] rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-[#1c1816] rounded-xl sm:rounded-2xl p-3 sm:p-6">
              <img
                src="/assets/logo/wardah-logo.png"
                alt="Wardah Restaurant & Cafe Official Logo"
                width="360"
                height="360"
                loading="lazy"
                decoding="async"
                className="h-28 sm:h-44 md:h-52 w-auto object-contain mx-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </div>
        </div>

        {/* Exact Required Proposal Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-4 uppercase px-2">
          {t.title}
        </h2>

        <p className="text-base sm:text-2xl md:text-3xl font-light text-amber-100/90 tracking-wide mb-4 font-serif px-2">
          {t.subtitle}
        </p>

        <div className="inline-block px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-base font-semibold text-gray-300 mb-6 sm:mb-8">
          {t.preparedBy}
        </div>

        <p className="max-w-2xl mx-auto text-xs sm:text-base text-gray-400 leading-relaxed font-normal mb-8 sm:mb-10 px-2">
          {t.intro}
        </p>

        {/* Section Navigation Hint */}
        <div className="flex justify-center">
          <a
            href="#wardah-vision"
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors active:scale-95"
          >
            <span>{lang === 'ar' ? 'استكشف استراتيجية وردة المتكاملة' : 'Explore Wardah Comprehensive Strategy'}</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
