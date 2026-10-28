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
    <Utensils className="w-5 h-5 text-amber-400" />,
    <Home className="w-5 h-5 text-[#1a8b9d]" />,
    <Users className="w-5 h-5 text-[#d9384e]" />,
    <Compass className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="content-strategy" className="py-24 bg-[#141211] text-white relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 uppercase mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Content Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1d1916] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                  {pillarIcons[idx]}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {pillar.name}
                </h3>
                <p className="text-xs text-amber-400 font-semibold mb-3">
                  {pillar.nameAr}
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                {lang === 'ar' ? 'ركيزة محتوى دائمة' : 'Core Content Pillar'}
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Channel Distribution Framework */}
        <div className="p-8 rounded-3xl bg-[#1b1715] border border-amber-500/20">
          <div className="flex items-center gap-2.5 mb-6">
            <Share2 className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.channelsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.channels.map((chan, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <h4 className="text-base font-bold text-amber-300 mb-2">
                  {chan.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
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
