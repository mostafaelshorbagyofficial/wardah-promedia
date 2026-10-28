import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Award, CheckCircle, Shield, Sparkles, TrendingUp, Video } from 'lucide-react';

interface WhyProMediaProps {
  lang: Language;
}

export const WhyProMedia: React.FC<WhyProMediaProps> = ({ lang }) => {
  const t = CONTENT[lang].whyProMedia;

  return (
    <section id="why-promedia" className="py-24 bg-[#11141a] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e84d58]/10 border border-[#e84d58]/20 text-xs font-semibold text-[#e84d58] uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#181d26] border border-white/10 hover:border-[#e84d58]/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#e84d58]/10 text-[#e84d58] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e84d58] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400">
                <Shield className="w-3.5 h-3.5 text-[#e84d58]" />
                <span>{lang === 'ar' ? 'التزام مهني وتنفيذ متكامل' : 'Full-Spectrum Professional Execution'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ProMedia × Wardah Synergistic Partnership Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1c222b] via-[#241e1c] to-[#1c222b] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo/promedia-logo.png"
              alt="ProMedia Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-light text-gray-500">×</span>
            <img
              src="/assets/logo/wardah-logo.png"
              alt="Wardah Logo"
              className="h-12 w-auto rounded-full object-contain bg-white/10 p-1 border border-amber-500/30"
            />
          </div>

          <p className="text-sm text-gray-300 text-center sm:text-left rtl:sm:text-right max-w-xl font-medium">
            {lang === 'ar'
              ? 'شراكة إستراتيجية تجمع بين تميز التجربة والضيافة في وردة، وخبرة برو ميديا في الإنتاج الإبداعي والنمو التسويقي.'
              : 'A strategic partnership pairing Wardah’s hospitality excellence with ProMedia’s creative production and marketing growth expertise.'}
          </p>
        </div>
      </div>
    </section>
  );
};
