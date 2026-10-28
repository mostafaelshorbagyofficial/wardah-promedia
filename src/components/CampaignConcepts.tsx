import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Sparkles, Mail, Flame, Heart, Music, CheckCircle2 } from 'lucide-react';

interface CampaignConceptsProps {
  lang: Language;
}

export const CampaignConcepts: React.FC<CampaignConceptsProps> = ({ lang }) => {
  const t = CONTENT[lang].campaigns;

  const conceptIcons = [
    <Mail className="w-6 h-6 text-amber-400" />,
    <Flame className="w-6 h-6 text-[#d9384e]" />,
    <Heart className="w-6 h-6 text-[#1a8b9d]" />,
    <Music className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section id="campaign-concepts" className="py-24 bg-[#181513] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 4 Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.concepts.map((concept, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#211c19] border border-amber-500/20 hover:border-amber-500/50 hover:bg-[#27211d] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {conceptIcons[idx]}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase tracking-wider">
                    {concept.tag}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {concept.title}
                  </h3>
                  <p className="text-sm font-semibold text-amber-400/90 mt-1">
                    {concept.nameAr}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {concept.desc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{lang === 'ar' ? 'مفهوم تسويقي إبداعي للإطلاق' : 'Creative Activation Concept'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
