import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { CheckSquare, AlertCircle, Globe, ExternalLink } from 'lucide-react';

interface NextStepsClosingProps {
  lang: Language;
}

export const NextStepsClosing: React.FC<NextStepsClosingProps> = ({ lang }) => {
  const t = CONTENT[lang].nextSteps;

  return (
    <section id="contact-closing" className="py-20 sm:py-24 bg-[#0e1116] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 uppercase mb-4">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight px-2">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal px-2">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Operational Steps Timeline — Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-12 sm:mb-16">
          {t.steps.map((step) => (
            <div
              key={step.num}
              className="p-5 sm:p-6 rounded-2xl bg-[#14181f] border border-white/5 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-400 font-black text-base sm:text-lg flex items-center justify-center mb-3 sm:mb-4">
                  {step.num}
                </span>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-gray-400">
                MILESTONE #{step.num}
              </div>
            </div>
          ))}
        </div>

        {/* Formal Mandatory Proposal Disclaimer */}
        <div className="p-4 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/25 mb-12 sm:mb-16 text-xs sm:text-sm text-amber-200 text-left rtl:text-right flex items-start gap-3 sm:gap-4">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed font-normal">{t.disclaimer}</p>
        </div>

        {/* ProMedia Closing Banner & Verified Contact CTA */}
        <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1c222d] to-[#12161d] border border-white/10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#e84d58]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

          <div className="max-w-2xl mx-auto relative z-10">
            <div className="flex justify-center mb-5 sm:mb-6">
              <img
                src="/assets/logo/promedia-logo.png"
                alt="ProMedia Logo"
                width="180"
                height="60"
                className="h-10 sm:h-14 w-auto object-contain mx-auto drop-shadow-md"
              />
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3 px-2">
              {t.ctaTitle}
            </h3>

            <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-normal mb-6 sm:mb-8 px-2">
              {t.ctaSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="http://www.pro-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#e84d58] hover:bg-[#de4b55] shadow-lg shadow-[#e84d58]/25 transition-all active:scale-95"
              >
                <Globe className="w-4 h-4" />
                <span>{t.websiteBtn} (pro-media.com)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
