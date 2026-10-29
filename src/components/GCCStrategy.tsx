import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Plane, Navigation, Users, RefreshCw, AlertCircle, Check } from 'lucide-react';

interface GCCStrategyProps {
  lang: Language;
}

export const GCCStrategy: React.FC<GCCStrategyProps> = ({ lang }) => {
  const t = CONTENT[lang].gcc;

  const stageIcons = [
    <Plane className="w-6 h-6 text-[#c49348]" />,
    <Navigation className="w-6 h-6 text-[#326084]" />,
    <Users className="w-6 h-6 text-[#c5384a]" />,
    <RefreshCw className="w-6 h-6 text-emerald-600" />
  ];

  return (
    <section id="gcc-strategy" className="py-24 bg-white text-[#1a202c] relative border-t border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c49348]/10 border border-[#c49348]/20 text-xs font-bold text-[#b45309] uppercase mb-4">
            <Plane className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a202c] mb-5 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal mb-6">
            {t.subtitle}
          </p>

          <p className="text-xs text-[#64748b] italic">
            {t.disclaimer}
          </p>
        </div>

        {/* 4-Stage Horizontal Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stages.map((stage, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e8e0d5] hover:border-[#c5384a]/40 hover:shadow-wardah-card transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#e8e0d5] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    {stageIcons[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white text-[#c5384a] border border-[#e8e0d5]">
                    {stage.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1a202c] mb-3 group-hover:text-[#c5384a] transition-colors">
                  {stage.name}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e8e0d5] flex items-center gap-2 text-xs font-bold text-[#c49348]">
                <Check className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'مسار مستهدف بدقة' : 'Key Touchpoint'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
