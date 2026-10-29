import React, { useState, useMemo, useEffect } from 'react';
import { Language, CreatorCandidate, CreatorPlatform } from '../types';
import { CONTENT } from '../data/content';
import {
  FEATURED_FOOD_INFLUENCERS,
  MINI_INFLUENCERS_TOP3,
  UGC_CREATORS
} from '../data/influencers';
import {
  ExternalLink,
  Users,
  Star,
  Search,
  TrendingUp,
  Camera,
  HeartHandshake,
  Info,
  ArrowUpRight,
  Maximize2,
  X,
  CheckCircle2
} from 'lucide-react';

interface InfluencerDirectoryProps {
  lang: Language;
}

// Crisp inline SVGs for social platforms
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const YouTubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const InfluencerDirectory: React.FC<InfluencerDirectoryProps> = ({ lang }) => {
  const t = CONTENT[lang].influencers;
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'mini' | 'ugc'>('all');
  const [ugcSearchQuery, setUgcSearchQuery] = useState('');
  const [ugcPlatformFilter, setUgcPlatformFilter] = useState<'all' | CreatorPlatform>('all');

  // Accessible Lightbox State
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [lightboxImage]);

  const getPlatformIcon = (platform: CreatorPlatform, size = "w-4 h-4") => {
    switch (platform) {
      case 'instagram':
        return <InstagramIcon className={`${size} text-[#c5384a]`} />;
      case 'facebook':
        return <FacebookIcon className={`${size} text-[#1877F2]`} />;
      case 'tiktok':
        return <TikTokIcon className={`${size} text-[#000000]`} />;
      case 'youtube':
        return <YouTubeIcon className={`${size} text-[#FF0000]`} />;
    }
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Filtered UGC creators list (up to 10 creators)
  const filteredUgcCreators = useMemo(() => {
    return UGC_CREATORS.filter((creator) => {
      if (ugcPlatformFilter !== 'all' && creator.platform !== ugcPlatformFilter) return false;
      if (ugcSearchQuery.trim()) {
        const q = ugcSearchQuery.toLowerCase().trim();
        const matchName = creator.nameAr.toLowerCase().includes(q) || creator.nameEn.toLowerCase().includes(q);
        const matchHandle = creator.handle.toLowerCase().includes(q);
        const matchCat = creator.categoryAr.toLowerCase().includes(q) || creator.categoryEn.toLowerCase().includes(q);
        if (!matchName && !matchHandle && !matchCat) return false;
      }
      return true;
    });
  }, [ugcSearchQuery, ugcPlatformFilter]);

  return (
    <section id="influencer-directory" className="py-20 sm:py-28 bg-[#faf8f5] text-[#1a202c] relative border-t border-[#e8e0d5]">
      {/* Decorative Floral Watercolor Aura */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#c5384a]/6 via-[#c49348]/6 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#326084]/6 via-[#8e799f]/6 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5384a]/10 border border-[#c5384a]/20 text-xs font-bold text-[#c5384a] uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1a202c] mb-4 tracking-tight px-2">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] leading-relaxed font-normal mb-5 px-2">
            {t.subtitle}
          </p>

          <div className="inline-flex items-start gap-2.5 text-xs text-[#713f12] bg-[#fefce8] p-4 rounded-xl border border-[#fef08a] max-w-2xl mx-auto text-start rtl:text-right shadow-xs">
            <Info className="w-4 h-4 text-[#ca8a04] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">{t.disclaimer}</p>
          </div>
        </div>

        {/* Section Navigation Quick Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 sm:mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
              activeTab === 'all'
                ? 'bg-[#1a202c] text-white shadow-md'
                : 'bg-white border border-[#e8e0d5] text-[#475569] hover:bg-[#f5f0e8]'
            }`}
          >
            {t.tabs.all}
          </button>
          <button
            onClick={() => setActiveTab('featured')}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-2 ${
              activeTab === 'featured'
                ? 'bg-[#c5384a] text-white shadow-md shadow-[#c5384a]/20'
                : 'bg-white border border-[#e8e0d5] text-[#c5384a] hover:bg-[#fdf2f4]'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'أبرز مؤثري الطعام (4)' : 'Featured Food Influencers (4)'}</span>
          </button>
          <button
            onClick={() => setActiveTab('mini')}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-2 ${
              activeTab === 'mini'
                ? 'bg-[#326084] text-white shadow-md shadow-blue-800/20'
                : 'bg-white border border-[#e8e0d5] text-[#326084] hover:bg-[#eef5fa]'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'مؤثرو الطعام المختارون (3)' : 'Mini Influencers (3)'}</span>
          </button>
          <button
            onClick={() => setActiveTab('ugc')}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-2 ${
              activeTab === 'ugc'
                ? 'bg-[#c49348] text-white shadow-md shadow-amber-700/20'
                : 'bg-white border border-[#e8e0d5] text-[#b45309] hover:bg-[#fdf7ee]'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? `صُنّاع المحتوى (${UGC_CREATORS.length})` : `UGC Creators (${UGC_CREATORS.length})`}</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* 1. FEATURED FOOD INFLUENCERS — EXACTLY FOUR (IN SPECIFIED ORDER) */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'featured') && (
          <div className="mb-20 sm:mb-24">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-[#e8e0d5]">
              <div>
                <span className="text-xs font-black text-[#c5384a] tracking-widest uppercase block mb-1">
                  01 • {lang === 'ar' ? 'النخبة الأبرز للطعام' : 'FEATURED FOOD INFLUENCERS'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a202c]">
                  {lang === 'ar' ? 'أبرز مؤثري الطعام' : 'Featured Food Influencers'}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
                  {lang === 'ar'
                    ? 'أربعة صناع محتوى بارزون بالترتيب المحدد (الزوزات، عمرو الهادي، الشيف محمد صلاح، الإكسلانس) مع صورهم الأصلية وإحصاءاتهم المعتمدة.'
                    : 'The four designated food creators in exact order (El Zuzzat, Amr El Hady, Chef Mohamed Salah, El Exlance) with verified local portraits and audience stats.'}
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#c5384a]/10 text-[#c5384a] border border-[#c5384a]/20">
                {lang === 'ar' ? '4 مؤثري طعام معتمدين' : '4 Designated Creators'}
              </span>
            </div>

            {/* 4 Premium Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_FOOD_INFLUENCERS.map((creator, index) => {
                const orderNum = `0${index + 1}`;
                const isElZuzzat = creator.id === 'el-zuzzat';
                const creatorName = lang === 'ar' ? creator.nameAr : creator.nameEn;

                return (
                  <div
                    key={creator.id}
                    className={`p-6 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between group shadow-sm relative overflow-hidden ${
                      isElZuzzat
                        ? 'border-[#c5384a]/50 ring-2 ring-[#c5384a]/20 shadow-md hover:shadow-xl'
                        : 'border-[#e8e0d5] hover:border-[#c5384a]/50 hover:shadow-wardah-card'
                    }`}
                  >
                    <div>
                      {/* Top Order Badge & Category Pill */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center font-mono ${
                            isElZuzzat ? 'bg-[#c5384a] text-white shadow-sm' : 'bg-[#c5384a]/10 text-[#c5384a]'
                          }`}>
                            {orderNum}
                          </span>
                          {isElZuzzat && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c49348]/15 text-[#92400e] text-[10px] font-bold border border-[#c49348]/30">
                              <Star className="w-3 h-3 fill-[#c49348] text-[#c49348]" />
                              <span>{lang === 'ar' ? 'أولوية أولى' : 'Top Priority'}</span>
                            </span>
                          )}
                        </div>

                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#faf8f5] text-[#334155] border border-[#e8e0d5] truncate max-w-[150px]">
                          {lang === 'ar' ? creator.roleAr?.split('•')[0] || 'مؤثر طعام' : creator.roleEn?.split('•')[0] || 'Food Influencer'}
                        </span>
                      </div>

                      {/* Photo Container with Accessible Lightbox Trigger */}
                      <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[4/4] bg-[#f5f0e8] border border-[#e8e0d5] shadow-xs group-hover:border-[#c5384a]/40 transition-colors">
                        <img
                          src={creator.image}
                          alt={creatorName}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />

                        {/* Click-to-Enlarge Lightbox Trigger Overlay Button */}
                        <button
                          type="button"
                          onClick={() => setLightboxImage({ src: creator.image || '', title: creatorName })}
                          className="absolute inset-0 w-full h-full bg-black/0 group-hover:bg-black/25 flex items-center justify-center transition-all cursor-zoom-in"
                          title={lang === 'ar' ? 'انقر لتكبير صورة البروفايل بدقة كاملة' : 'Click to enlarge portrait in full view'}
                          aria-label={`Enlarge portrait of ${creatorName}`}
                        >
                          <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 px-3 py-1.5 rounded-xl bg-white/95 text-[#1a202c] text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white">
                            <Maximize2 className="w-3.5 h-3.5 text-[#c5384a]" />
                            <span>{lang === 'ar' ? 'تكبير الصورة' : 'Enlarge Photo'}</span>
                          </div>
                        </button>
                      </div>

                      {/* Creator Details */}
                      <div className="mb-4">
                        <h4 className="text-base sm:text-lg font-black text-[#1a202c] group-hover:text-[#c5384a] transition-colors leading-snug">
                          {creatorName}
                        </h4>
                        <p className="text-xs text-[#64748b] font-mono mt-0.5">
                          {creator.handle}
                        </p>
                        <p className="text-xs text-[#475569] mt-2 line-clamp-2 leading-relaxed">
                          {lang === 'ar' ? creator.categoryAr : creator.categoryEn}
                        </p>
                      </div>

                      {/* Prominent Combined Audience Banner */}
                      <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-br from-[#fdf2f4] to-[#fbf0f2] border border-[#fbdde1]">
                        <span className="text-[10px] font-bold text-[#c5384a] uppercase tracking-wider block mb-0.5">
                          {t.combinedAudienceLabel}
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-[#7d1d32] font-mono tracking-tight">
                          {creator.combinedAudience}
                        </div>
                        <span className="text-[10px] text-[#9a3412] mt-0.5 block leading-tight">
                          {lang === 'ar' ? creator.combinedAudienceNoteAr : creator.combinedAudienceNoteEn}
                        </span>
                      </div>

                      {/* Platform-by-Platform Breakdown (Interactive clickable chips) */}
                      <div className="mb-4">
                        <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider block mb-2">
                          {lang === 'ar' ? 'تفصيل المنصات الرسمية:' : 'Official Platforms:'}
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {creator.platforms?.map((p, idx) => (
                            <a
                              key={idx}
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`${p.platform}: ${p.count}`}
                              className="px-2 py-1.5 rounded-lg bg-[#faf8f5] hover:bg-[#f5f0e8] border border-[#e8e0d5] flex items-center justify-between text-[11px] group/chip transition-colors min-h-[36px]"
                            >
                              <div className="flex items-center gap-1.5 overflow-hidden">
                                {getPlatformIcon(p.platform, "w-3 h-3 flex-shrink-0")}
                                <span className="capitalize text-[#475569] font-medium truncate text-[10px]">
                                  {p.platform}
                                </span>
                              </div>
                              <span className="font-bold text-[#1a202c] text-[10px] font-mono">
                                {p.count}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Social Profile Links (Kept Separate Beneath Image and Statistics) */}
                    <div className="pt-3 border-t border-[#f0ebe3] flex flex-col gap-2">
                      <a
                        href={creator.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1a202c] hover:bg-[#c5384a] transition-all duration-200 active:scale-95 shadow-xs"
                      >
                        {getPlatformIcon(creator.platform, "w-3.5 h-3.5 text-white")}
                        <span>{lang === 'ar' ? `فتح حساب ${creator.platform}` : `Open ${creator.platform}`}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {creator.secondaryLink && (
                        <a
                          href={creator.secondaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full min-h-[38px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#1877F2] bg-[#1877F2]/10 hover:bg-[#1877F2]/20 transition-all active:scale-95"
                        >
                          <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                          <span>{lang === 'ar' ? 'الملف الإضافي (Facebook)' : 'Secondary Profile (Facebook)'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Combined Audience Disclaimer Note */}
            <div className="mt-6 text-center">
              <p className="text-[11px] text-[#64748b] bg-white px-4 py-2.5 rounded-xl border border-[#e8e0d5] inline-block shadow-xs">
                {t.combinedAudienceNote}
              </p>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 2. MINI INFLUENCERS — EXACTLY THREE (IN SPECIFIED ORDER)         */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'mini') && (
          <div className="mb-20 sm:mb-24">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-[#e8e0d5]">
              <div>
                <span className="text-xs font-black text-[#326084] tracking-widest uppercase block mb-1">
                  02 • {lang === 'ar' ? 'مؤثرو الطعام المختارون' : 'MINI INFLUENCERS'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a202c]">
                  {lang === 'ar' ? 'مؤثرو الطعام المختارون' : 'Mini Influencers'}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
                  {lang === 'ar'
                    ? 'ثلاثة صناع محتوى مختارون بعناية (نسمة خضر، شيماء ومسعود، محمود زيزو) بنسب وصول وتفاعل نوعي متميز في مجتمع الطعام.'
                    : 'Exactly three selected creators (Nesma Khedr, Shaimaa & Masoud, Mahmoud Zizo) with verified high engagement in dining communities.'}
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#326084]/10 text-[#326084] border border-[#326084]/20">
                {lang === 'ar' ? '3 صناع محتوى مختارون' : '3 Selected Creators'}
              </span>
            </div>

            {/* 3 Compact Editorial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MINI_INFLUENCERS_TOP3.map((creator, index) => {
                const orderNum = `0${index + 1}`;
                const creatorName = lang === 'ar' ? creator.nameAr : creator.nameEn;

                return (
                  <div
                    key={creator.id}
                    className="p-6 rounded-3xl bg-white border border-[#e8e0d5] hover:border-[#326084]/50 hover:shadow-wardah-card transition-all duration-300 flex flex-col justify-between group shadow-sm"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-xl bg-[#326084]/10 text-[#326084] font-black text-xs flex items-center justify-center font-mono">
                          {orderNum}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#eef5fa] text-[#326084] border border-[#dce9f2]">
                          {getPlatformIcon(creator.platform, "w-3.5 h-3.5")}
                          <span>{creator.followers}</span>
                        </span>
                      </div>

                      {/* Photo with Lightbox Trigger */}
                      <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[4/3] bg-[#f5f0e8] border border-[#e8e0d5] shadow-xs group-hover:border-[#326084]/40 transition-colors">
                        <img
                          src={creator.image}
                          alt={creatorName}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />

                        {/* Lightbox Trigger Overlay */}
                        <button
                          type="button"
                          onClick={() => setLightboxImage({ src: creator.image || '', title: creatorName })}
                          className="absolute inset-0 w-full h-full bg-black/0 group-hover:bg-black/25 flex items-center justify-center transition-all cursor-zoom-in"
                          title={lang === 'ar' ? 'تكبير الصورة' : 'Click to enlarge portrait'}
                          aria-label={`Enlarge portrait of ${creatorName}`}
                        >
                          <div className="opacity-0 group-hover:opacity-100 transition-all px-3 py-1.5 rounded-xl bg-white/95 text-[#1a202c] text-xs font-bold shadow-md flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#326084]" />
                            <span>{lang === 'ar' ? 'معاينة' : 'Enlarge'}</span>
                          </div>
                        </button>
                      </div>

                      <div className="mb-3">
                        <h4 className="text-base sm:text-lg font-black text-[#1a202c] group-hover:text-[#326084] transition-colors leading-snug">
                          {creatorName}
                        </h4>
                        <p className="text-xs text-[#64748b] font-mono mt-0.5">
                          {creator.handle}
                        </p>
                      </div>

                      {/* Audience Note */}
                      <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8e0d5] mb-4">
                        <span className="text-[11px] font-bold text-[#326084] block mb-0.5">
                          {lang === 'ar' ? 'الجمهور المسجل:' : 'Reference Audience:'}
                        </span>
                        <p className="text-xs font-semibold text-[#1a202c]">
                          {lang === 'ar' ? creator.combinedAudienceNoteAr : creator.combinedAudienceNoteEn}
                        </p>
                      </div>

                      <p className="text-xs text-[#475569] mb-4 line-clamp-2 leading-relaxed">
                        {lang === 'ar' ? creator.categoryAr : creator.categoryEn}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {creator.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#faf8f5] text-[#334155] border border-[#e8e0d5]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links — Kept Separate Beneath Image and Stats */}
                    <div className="pt-3 border-t border-[#f0ebe3] flex flex-col gap-2">
                      <a
                        href={creator.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#326084] hover:bg-[#23435c] transition-all active:scale-95 shadow-xs"
                      >
                        {getPlatformIcon(creator.platform, "w-3.5 h-3.5 text-white")}
                        <span>{t.card.viewProfile}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {creator.secondaryLink && (
                        <a
                          href={creator.secondaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full min-h-[38px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#1a202c] bg-[#faf8f5] hover:bg-[#e8e0d5] border border-[#e8e0d5] transition-all active:scale-95"
                        >
                          <TikTokIcon className="w-3.5 h-3.5" />
                          <span>{lang === 'ar' ? 'حساب TikTok' : 'TikTok Profile'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 3. UGC CREATORS — REAL CREATORS NETWORK (UP TO 10 CREATORS)      */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'ugc') && (
          <div>
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-[#e8e0d5]">
              <div>
                <span className="text-xs font-black text-[#c49348] tracking-widest uppercase block mb-1">
                  03 • {lang === 'ar' ? 'صُنّاع المحتوى' : 'UGC CREATORS'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a202c]">
                  {lang === 'ar' ? 'صُنّاع المحتوى' : 'UGC Creators'}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
                  {lang === 'ar'
                    ? 'شبكة صناع محتوى حقيقيين من بيانات المشروع مع روابط مباشرة لحساباتهم المعتمدة دون ادعاء أرقام وصول افتراضية.'
                    : 'Real creator network from project records with direct profile links to demonstrate available creator ecosystem.'}
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#c49348]/10 text-[#92400e] border border-[#c49348]/20">
                {UGC_CREATORS.length} {lang === 'ar' ? 'صانع محتوى' : 'Creators'}
              </span>
            </div>

            {/* UGC Search & Platform Filter Bar */}
            <div className="mb-6 p-4 rounded-2xl bg-white border border-[#e8e0d5] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#94a3b8] absolute start-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={ugcSearchQuery}
                  onChange={(e) => setUgcSearchQuery(e.target.value)}
                  placeholder={t.filters.searchPlaceholder}
                  className="w-full min-h-[44px] ps-9 pe-3 py-2 rounded-xl text-xs bg-[#faf8f5] border border-[#e8e0d5] text-[#1a202c] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#c49348] focus:bg-white transition-colors"
                />
              </div>

              {/* Platform Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {(['all', 'instagram', 'facebook'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setUgcPlatformFilter(p)}
                    className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 flex-shrink-0 flex items-center gap-1.5 ${
                      ugcPlatformFilter === p
                        ? 'bg-[#1a202c] text-white font-bold'
                        : 'bg-[#faf8f5] text-[#475569] hover:bg-[#e8e0d5]'
                    }`}
                  >
                    {p !== 'all' && getPlatformIcon(p, "w-3 h-3")}
                    <span>{p === 'all' ? t.filters.allPlatforms : p.charAt(0).toUpperCase() + p.slice(1)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* UGC Compact Profile Grid — 3 Cards per row on Desktop */}
            {filteredUgcCreators.length === 0 ? (
              <div className="p-10 text-center rounded-2xl bg-white border border-[#e8e0d5]">
                <p className="text-xs text-[#64748b]">
                  {lang === 'ar' ? 'لا توجد نتائج مطابقة لخيارات البحث' : 'No creators matched your search query'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUgcCreators.map((creator) => {
                  const initials = getInitials(creator.nameEn);
                  const creatorName = lang === 'ar' ? creator.nameAr : creator.nameEn;
                  return (
                    <div
                      key={creator.id}
                      className="p-4 rounded-2xl bg-white border border-[#e8e0d5] hover:border-[#c49348]/40 hover:shadow-sm transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        {creator.image ? (
                          <div
                            onClick={() => setLightboxImage({ src: creator.image || '', title: creatorName })}
                            className="w-12 h-12 rounded-xl overflow-hidden border border-[#e8e0d5] flex-shrink-0 cursor-zoom-in"
                            title={lang === 'ar' ? 'تكبير الصورة' : 'Click to enlarge'}
                          >
                            <img
                              src={creator.image}
                              alt={creatorName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e0d5] flex items-center justify-center text-xs font-black text-[#78350f] flex-shrink-0">
                            {initials}
                          </div>
                        )}

                        <div className="overflow-hidden">
                          <h5 className="text-xs font-bold text-[#1a202c] group-hover:text-[#c49348] transition-colors truncate">
                            {creatorName}
                          </h5>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            {getPlatformIcon(creator.platform, "w-3 h-3 flex-shrink-0")}
                            <span className="text-[10px] text-[#64748b] font-mono truncate">
                              {creator.handle}
                            </span>
                          </div>
                          {creator.followers && (
                            <span className="text-[10px] font-bold text-[#b45309]">
                              {creator.followers}
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={creator.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] min-w-[44px] p-2 rounded-xl bg-[#faf8f5] hover:bg-[#c49348] hover:text-white text-[#475569] flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs"
                        title={t.card.viewProfile}
                        aria-label={`Open profile of ${creatorName}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </div>

      {/* ============================================================== */}
      {/* ACCESSIBLE LIGHTBOX / IMAGE VIEWER                             */}
      {/* ============================================================== */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl max-h-[92vh] w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header with Visible Close Button */}
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#e8e0d5]">
              <div className="flex items-center gap-2 overflow-hidden">
                <CheckCircle2 className="w-4 h-4 text-[#c5384a] flex-shrink-0" />
                <h4 className="text-sm sm:text-base font-bold text-[#1a202c] truncate">
                  {lightboxImage.title}
                </h4>
              </div>

              <button
                onClick={() => setLightboxImage(null)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#faf8f5] hover:bg-[#c5384a] text-[#475569] hover:text-white transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Body */}
            <div className="overflow-auto max-h-[75vh] w-full flex items-center justify-center rounded-2xl bg-[#f5f0e8] p-2">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Lightbox Footer Note */}
            <div className="w-full pt-3 mt-3 text-center border-t border-[#f0ebe3]">
              <p className="text-[11px] text-[#64748b]">
                {lang === 'ar'
                  ? 'صورة أصلية معتمدة محلياً من ملفات المشروع | اضغط زر الإغلاق أو مفتاح Escape للعودة'
                  : 'Original verified local project asset | Tap close or press Escape to return'}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
