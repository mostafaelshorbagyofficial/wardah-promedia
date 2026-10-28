import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Camera, Utensils, HeartHandshake, Moon, Repeat, Sparkles, CheckCircle2 } from 'lucide-react';

interface ExperienceDevelopmentProps {
  lang: Language;
}

export const ExperienceDevelopment: React.FC<ExperienceDevelopmentProps> = ({ lang }) => {
  const t = CONTENT[lang].experience;

  const icons = [
    <Camera className="w-6 h-6 text-[#d9384e]" />,
    <Utensils className="w-6 h-6 text-amber-400" />,
    <HeartHandshake className="w-6 h-6 text-[#1a8b9d]" />,
    <Moon className="w-6 h-6 text-purple-400" />,
    <Repeat className="w-6 h-6 text-emerald-400" />
  ];

  return (
    <section id="experience-dev" className="py-24 bg-[#141211] text-white relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
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

        {/* 5 Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.initiatives.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl bg-[#1d1916] border border-white/10 hover:border-amber-500/40 hover:bg-[#231e1a] transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 text-amber-400 border border-white/5">
                    INITIATIVE #{item.id}
                  </span>
                </div>

                <div className="mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-400/90 mt-0.5">
                    {item.nameAr}
                  </p>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{lang === 'ar' ? 'مقترح تطوير ميداني قابل للتطبيق' : 'Actionable In-Venue Concept'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
