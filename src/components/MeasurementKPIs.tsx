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
    <TrendingUp className="w-5 h-5 text-[#c49348]" />,
    <Bookmark className="w-5 h-5 text-[#c5384a]" />,
    <Compass className="w-5 h-5 text-[#326084]" />,
    <PhoneCall className="w-5 h-5 text-[#8e799f]" />,
    <BarChart3 className="w-5 h-5 text-emerald-600" />,
    <Repeat2 className="w-5 h-5 text-blue-600" />
  ];

  return (
    <section id="measurement-kpis" className="py-24 bg-white text-[#1a202c] relative border-t border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#326084]/10 border border-[#326084]/20 text-xs font-bold text-[#326084] uppercase mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a202c] mb-5 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal mb-6">
            {t.subtitle}
          </p>

          {/* Prominent Transparent Notice */}
          <div className="p-4 rounded-xl bg-[#fefce8] border border-[#fef08a] text-xs sm:text-sm text-[#713f12] text-left rtl:text-right flex items-start gap-3 max-w-2xl mx-auto shadow-sm">
            <AlertCircle className="w-5 h-5 text-[#ca8a04] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">{t.disclaimer}</p>
          </div>
        </div>

        {/* 6 KPI Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.indicators.map((indicator, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e8e0d5] hover:border-[#c5384a]/40 hover:shadow-wardah-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#e8e0d5] flex items-center justify-center mb-5 shadow-xs">
                  {kpiIcons[idx]}
                </div>

                <h3 className="text-lg font-bold text-[#1a202c] mb-2">
                  {indicator.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {indicator.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e8e0d5] flex items-center gap-2 text-xs text-[#c5384a] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5384a]" />
                <span>{lang === 'ar' ? 'مؤشر أداء مرتبط بالعائد الفعلي' : 'Commercial Intent Metric'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
