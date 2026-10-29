import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Film, Layout, Utensils, Home, Users, Compass, Share2 } from 'lucide-react';

interface ContentStrategyProps {
  lang: Language;
}

export const ContentStrategy: React.FC<ContentStrategyProps> = ({ lang }) => {
  const t = CONTENT[lang].contentStrategy;

  const pillarIcons = [
    <Utensils className="w-5 h-5 text-[#c49348]" />,
    <Home className="w-5 h-5 text-[#326084]" />,
    <Users className="w-5 h-5 text-[#c5384a]" />,
    <Compass className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <section id="content-strategy" className="py-24 bg-white text-[#1a202c] relative border-t border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#326084]/10 border border-[#326084]/20 text-xs font-bold text-[#326084] uppercase mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a202c] mb-5 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Content Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e8e0d5] hover:border-[#c5384a]/40 hover:shadow-wardah-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#e8e0d5] flex items-center justify-center mb-5 shadow-xs">
                  {pillarIcons[idx]}
                </div>

                <h3 className="text-lg font-bold text-[#1a202c] mb-1">
                  {pillar.name}
                </h3>
                <p className="text-xs text-[#c5384a] font-bold mb-3">
                  {pillar.nameAr}
                </p>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e8e0d5] text-[11px] font-bold text-[#64748b] uppercase tracking-wider">
                {lang === 'ar' ? 'ركيزة محتوى دائمة' : 'Core Content Pillar'}
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Channel Distribution Framework */}
        <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#e8e0d5] shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <Share2 className="w-5 h-5 text-[#c49348]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a202c]">
              {t.channelsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.channels.map((chan, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-[#e8e0d5] shadow-xs">
                <h4 className="text-base font-bold text-[#c5384a] mb-2">
                  {chan.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {chan.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
