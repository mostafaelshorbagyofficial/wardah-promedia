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
    <Plane className="w-6 h-6 text-amber-400" />,
    <Navigation className="w-6 h-6 text-[#1a8b9d]" />,
    <Users className="w-6 h-6 text-[#d9384e]" />,
    <RefreshCw className="w-6 h-6 text-emerald-400" />
  ];

  return (
    <section id="gcc-strategy" className="py-24 bg-[#181513] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 uppercase mb-4">
            <Plane className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal mb-6">
            {t.subtitle}
          </p>

          <p className="text-xs text-gray-400 italic">
            {t.disclaimer}
          </p>
        </div>

        {/* 4-Stage Horizontal Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stages.map((stage, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#211c19] border border-amber-500/15 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stageIcons[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300">
                    {stage.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {stage.name}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-amber-400">
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
