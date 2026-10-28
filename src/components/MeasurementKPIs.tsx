import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { BarChart3, AlertCircle, CheckCircle2, TrendingUp, Compass, Bookmark, PhoneCall, Repeat2 } from 'lucide-react';

interface MeasurementKPIsProps {
  lang: Language;
}

export const MeasurementKPIs: React.FC<MeasurementKPIsProps> = ({ lang }) => {
  const t = CONTENT[lang].kpis;

  const kpiIcons = [
    <TrendingUp className="w-5 h-5 text-amber-400" />,
    <Bookmark className="w-5 h-5 text-[#d9384e]" />,
    <Compass className="w-5 h-5 text-[#1a8b9d]" />,
    <PhoneCall className="w-5 h-5 text-purple-400" />,
    <BarChart3 className="w-5 h-5 text-emerald-400" />,
    <Repeat2 className="w-5 h-5 text-blue-400" />
  ];

  return (
    <section id="measurement-kpis" className="py-24 bg-[#141211] text-white relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 uppercase mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal mb-6">
            {t.subtitle}
          </p>

          {/* Prominent Transparent Notice */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200 text-left rtl:text-right flex items-start gap-3 max-w-2xl mx-auto">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">{t.disclaimer}</p>
          </div>
        </div>

        {/* 6 KPI Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.indicators.map((indicator, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1d1916] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                  {kpiIcons[idx]}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {indicator.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {indicator.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ar' ? 'مؤشر أداء مرتبط بالعائد الفعلي' : 'Commercial Intent Metric'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
