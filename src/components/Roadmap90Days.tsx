import React, { useState } from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Calendar, Clock } from 'lucide-react';

interface Roadmap90DaysProps {
  lang: Language;
}

export const Roadmap90Days: React.FC<Roadmap90DaysProps> = ({ lang }) => {
  const t = CONTENT[lang].roadmap;
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <section id="execution-roadmap" className="py-20 sm:py-24 bg-[#181513] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight px-2">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal mb-5 px-2">
            {t.subtitle}
          </p>

          <p className="text-xs text-gray-400 italic px-2">
            {t.disclaimer}
          </p>
        </div>

        {/* Interactive Phase Navigation Buttons — Touch Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {t.phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPhase(idx)}
              className={`min-h-[56px] p-4 sm:p-5 rounded-2xl text-left rtl:text-right transition-all duration-200 border active:scale-98 ${
                selectedPhase === idx
                  ? 'bg-amber-500/15 border-amber-500 shadow-lg shadow-amber-500/15'
                  : 'bg-[#211c19] border-white/5 hover:border-white/20'
              }`}
            >
              <span className="inline-block text-xs font-mono font-bold text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 mb-2">
                {phase.period}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {phase.name}
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                {phase.tag}
              </p>
            </button>
          ))}
        </div>

        {/* Detailed View of Active Phase */}
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#211c19] border border-amber-500/30 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {t.phases[selectedPhase].period}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                {t.phases[selectedPhase].name}
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 self-start sm:self-auto">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>30-Day Milestone Execution</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {t.phases[selectedPhase].points.map((point, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3 sm:gap-4 hover:border-amber-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-normal">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <span>{lang === 'ar' ? 'يتم مراجعة مخرجات كل مرحلة قبل الانتقال للمرحلة التالية' : 'Each phase outputs are audited prior to proceeding'}</span>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                disabled={selectedPhase === 0}
                onClick={() => setSelectedPhase(Math.max(0, selectedPhase - 1))}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white active:scale-95"
              >
                {lang === 'ar' ? 'السابق' : 'Previous'}
              </button>
              <button
                disabled={selectedPhase === 2}
                onClick={() => setSelectedPhase(Math.min(2, selectedPhase + 1))}
                className="min-h-[44px] px-5 py-2 rounded-xl bg-amber-500 text-black font-bold disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
              >
                {lang === 'ar' ? 'التالي' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
