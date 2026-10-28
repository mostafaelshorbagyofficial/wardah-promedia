import React, { useState } from 'react';
import { Language, PortfolioItem } from '../types';
import { CONTENT } from '../data/content';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import {
  ExternalLink,
  Phone,
  CheckCircle,
  Eye,
  MapPin,
  Users,
  Film,
  UtensilsCrossed
} from 'lucide-react';

interface PortfolioFBProps {
  lang: Language;
  onInspectImage: (src: string, title: string) => void;
}

export const PortfolioFB: React.FC<PortfolioFBProps> = ({ lang, onInspectImage }) => {
  const t = CONTENT[lang].clientsSection;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelAr: 'جميع العملاء (10)', labelEn: 'All Clients (10)' },
    { id: 'seafood', labelAr: 'مأكولات بحرية (2)', labelEn: 'Seafood (2)' },
    { id: 'dining', labelAr: 'مطاعم راقية (3)', labelEn: 'Fine Dining (3)' },
    { id: 'cafe_resort', labelAr: 'كافيهات ومنتجعات (3)', labelEn: 'Cafes & Resorts (3)' },
    { id: 'fast_casual', labelAr: 'وجبات سريعة وعائلية (2)', labelEn: 'Fast Casual (2)' }
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'seafood') return item.id === 'omar-effendi' || item.id === 'asmak-el-prince';
    if (activeCategory === 'dining') return item.id === 'mawlay' || item.id === 'folk-restaurant' || item.id === 'costa-blanca';
    if (activeCategory === 'cafe_resort') return item.id === 'il-campo' || item.id === 'blueview-cafe' || item.id === 'oliver-cafe';
    if (activeCategory === 'fast_casual') return item.id === '5-roosters' || item.id === 'puka';
    return true;
  });

  return (
    <section id="fb-portfolio" className="py-20 sm:py-24 bg-[#11141a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e84d58]/10 border border-[#e84d58]/20 text-xs font-semibold text-[#e84d58] uppercase mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight px-2">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-normal px-2">
            {t.subtitle}
          </p>

          {/* Category Filter Pills — Touch Friendly */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-[#e84d58] text-white shadow-md shadow-[#e84d58]/25 scale-102 font-bold'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                }`}
              >
                {lang === 'ar' ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#181d26] rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:border-[#e84d58]/40 hover:shadow-2xl hover:shadow-[#e84d58]/10 transition-all duration-300"
            >
              {/* Media Asset Preview Header with Reserved Aspect Ratio */}
              <div className="relative aspect-[4/5] bg-black/40 overflow-hidden">
                <img
                  src={item.image}
                  alt={lang === 'ar' ? item.nameAr : item.nameEn}
                  width="400"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#14181f]/85 backdrop-blur-md text-white border border-white/15">
                    {lang === 'ar' ? item.categoryAr : item.categoryEn}
                  </span>

                  {item.isVerified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-md">
                      <CheckCircle className="w-3 h-3 fill-blue-400 text-[#14181f]" />
                      <span>{t.verifiedClient}</span>
                    </span>
                  )}
                </div>

                {/* Tap-Friendly Floating Inspect Badge for Mobile & Desktop */}
                <div className="absolute bottom-3 right-3 left-3 flex justify-end">
                  <button
                    onClick={() => onInspectImage(item.image, lang === 'ar' ? item.nameAr : item.nameEn)}
                    aria-label={t.viewOriginalAsset}
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#14181f]/90 hover:bg-[#e84d58] border border-white/20 shadow-xl backdrop-blur-md transition-all active:scale-95"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{t.viewOriginalAsset}</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Brand Title */}
                  <div className="mb-2">
                    <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#e84d58] transition-colors leading-snug">
                      {lang === 'ar' ? item.nameAr : item.nameEn}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">{item.handle}</p>
                  </div>

                  {/* Followers & Posts stats bar */}
                  <div className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-white/5 text-xs text-gray-300 font-medium mb-3">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#e84d58]" />
                      <span className="font-bold text-white">{item.followers}</span>
                      <span className="text-gray-400">{lang === 'ar' ? 'متابع' : 'Followers'}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                    <div className="flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-bold text-white">{item.posts}</span>
                      <span className="text-gray-400">{lang === 'ar' ? 'منشور' : 'Posts'}</span>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="flex items-start gap-1.5 text-xs text-gray-400 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{lang === 'ar' ? item.locationAr : item.locationEn}</span>
                  </div>

                  {/* Strategic Highlights */}
                  <div className="space-y-1.5 mb-5">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      {t.keyMetrics}
                    </p>
                    {(lang === 'ar' ? item.highlightsAr : item.highlightsEn).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-gray-300">
                        <span className="text-[#e84d58] font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Links — Minimum 44px Touch Targets */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onInspectImage(item.image, lang === 'ar' ? item.nameAr : item.nameEn)}
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'تكبير اللقطة' : 'Enlarge'}</span>
                  </button>

                  {item.link.startsWith('tel:') ? (
                    <a
                      href={item.link}
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-[#e84d58] bg-[#e84d58]/10 hover:bg-[#e84d58]/20 transition-colors active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{item.link.replace('tel:', '')}</span>
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-colors active:scale-95"
                    >
                      <span>{t.viewLink}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
