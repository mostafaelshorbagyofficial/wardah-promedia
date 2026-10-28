import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { ShieldCheck, AlertCircle, Lightbulb, Info } from 'lucide-react';

interface BrandAnalysisProps {
  lang: Language;
}

export const BrandAnalysis: React.FC<BrandAnalysisProps> = ({ lang }) => {
  const t = CONTENT[lang].analysis;

  return (
    <section id="brand-analysis" className="py-24 bg-[#181513] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 uppercase mb-4">
            <Info className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t.title}
          </h2>

          {/* Explicit Visible Disclaimer */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200 text-left rtl:text-right flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">{t.disclaimer}</p>
          </div>
        </div>

        {/* 3 Analysis Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Strengths */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#201b18] border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {t.columns[0].title}
                </h3>
              </div>

              <div className="space-y-4">
                {t.columns[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs font-semibold text-emerald-400">
              {lang === 'ar' ? 'ركائز يمكن البناء عليها فوراً' : 'Actionable Core Advantages'}
            </div>
          </div>

          {/* Column 2: Areas Requiring Review */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#201b18] border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {t.columns[1].title}
                </h3>
              </div>

              <div className="space-y-4">
                {t.columns[1].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs font-semibold text-amber-400">
              {lang === 'ar' ? 'تخضع للتدقيق في مرحلة التأسيس' : 'Audit Priority in Phase 1'}
            </div>
          </div>

          {/* Column 3: Opportunities */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#201b18] border border-rose-500/20 hover:border-rose-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {t.columns[2].title}
                </h3>
              </div>

              <div className="space-y-4">
                {t.columns[2].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs font-semibold text-rose-400">
              {lang === 'ar' ? 'محركات النمو الميداني والرقمي' : 'Key Growth Drivers'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
