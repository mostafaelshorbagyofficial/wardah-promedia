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
    <Compass className="w-6 h-6 text-amber-400" />,
    <HeartHandshake className="w-6 h-6 text-[#d9384e]" />,
    <Film className="w-6 h-6 text-[#1a8b9d]" />,
    <Megaphone className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section id="wardah-vision" className="py-24 bg-[#141211] text-white relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 uppercase mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {t.lead}
          </p>
        </div>

        {/* Central Strategic Framework Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#241e1b] via-[#2d221c] to-[#241e1b] border border-amber-500/30 text-center shadow-xl shadow-black/50">
          <span className="block text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
            {lang === 'ar' ? 'المعادلة الاستراتيجية المتكاملة' : 'Integrated Strategic Equation'}
          </span>
          <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide font-serif">
            {t.formula}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className="p-6 rounded-2xl bg-[#1d1916] border border-white/5 hover:border-amber-500/40 hover:bg-[#231e1a] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {pillarIcons[idx]}
                  </div>
                  <span className="text-2xl font-black text-amber-500/30 font-mono">
                    {pillar.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-amber-400/80">
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
