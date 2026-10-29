import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Target, Compass, Sparkles, HeartHandshake, Film, Megaphone } from 'lucide-react';

interface WardahVisionProps {
  lang: Language;
}

export const WardahVision: React.FC<WardahVisionProps> = ({ lang }) => {
  const t = CONTENT[lang].vision;

  const pillarIcons = [
    <Compass className="w-6 h-6 text-[#c49348]" />,
    <HeartHandshake className="w-6 h-6 text-[#c5384a]" />,
    <Film className="w-6 h-6 text-[#326084]" />,
    <Megaphone className="w-6 h-6 text-[#8e799f]" />
  ];

  return (
    <section id="wardah-vision" className="py-24 bg-[#faf8f5] text-[#1a202c] relative border-t border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5384a]/10 border border-[#c5384a]/20 text-xs font-bold text-[#c5384a] uppercase mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a202c] mb-6 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            {t.lead}
          </p>
        </div>

        {/* Central Strategic Framework Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white border border-[#e8e0d5] text-center shadow-wardah-card">
          <span className="block text-xs font-bold text-[#c5384a] uppercase tracking-widest mb-2">
            {lang === 'ar' ? 'المعادلة الاستراتيجية المتكاملة' : 'Integrated Strategic Equation'}
          </span>
          <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-wide font-serif">
            {t.formula}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className="p-6 rounded-2xl bg-white border border-[#e8e0d5] hover:border-[#c5384a]/40 hover:shadow-wardah-card transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e0d5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillarIcons[idx]}
                  </div>
                  <span className="text-2xl font-black text-[#c5384a]/25 font-mono">
                    {pillar.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1a202c] mb-3 group-hover:text-[#c5384a] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ebe3] flex items-center gap-2 text-xs font-bold text-[#c5384a]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'ركيزة أساسية' : 'Core Pillar'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
