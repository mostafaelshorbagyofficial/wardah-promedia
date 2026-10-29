import React, { useState, useMemo } from 'react';
import { Language, CreatorCandidate, CreatorPlatform } from '../types';
import { CONTENT } from '../data/content';
import {
  PRIORITY_CREATOR,
  MEGA_INFLUENCERS_TOP4,
  MINI_INFLUENCERS_TOP4,
  UGC_CREATORS
} from '../data/influencers';
import {
  Sparkles,
  ExternalLink,
  Users,
  Star,
  Search,
  TrendingUp,
  Camera,
  HeartHandshake,
  Info,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface InfluencerDirectoryProps {
  lang: Language;
}

// Crisp inline SVGs for social platforms
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
  const [activeTab, setActiveTab] = useState<'all' | 'mega' | 'mini' | 'ugc'>('all');
  const [ugcSearchQuery, setUgcSearchQuery] = useState('');
  const [ugcPlatformFilter, setUgcPlatformFilter] = useState<'all' | CreatorPlatform>('all');

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

  // Filtered UGC creators list
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

          <div className="inline-flex items-start gap-2.5 text-xs text-[#713f12] bg-[#fefce8] p-4 rounded-xl border border-[#fef08a] max-w-2xl mx-auto text-start rtl:text-right shadow-sm">
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
            onClick={() => setActiveTab('mega')}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-2 ${
              activeTab === 'mega'
                ? 'bg-[#c5384a] text-white shadow-md shadow-[#c5384a]/20'
                : 'bg-white border border-[#e8e0d5] text-[#c5384a] hover:bg-[#fdf2f4]'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t.tabs.mega}</span>
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
            <span>{t.tabs.mini}</span>
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
            <span>{t.tabs.ugc} ({UGC_CREATORS.length})</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* 0. PRIORITY CANDIDATE — EL ZUZZAT (TOP FEATURED CARD)           */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'mega') && (
          <div className="mb-16 sm:mb-20">
            <div className="relative p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#c5384a] via-[#c49348] to-[#326084] shadow-xl">
              <div className="bg-white rounded-[14px] sm:rounded-[22px] p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  
                  <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left rtl:sm:text-right">
                    {/* Priority Photo with Verified Local Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-[#c5384a]/35 shadow-lg shadow-[#c5384a]/20 bg-[#f5f0e8] flex items-center justify-center">
                        <img
                          src={PRIORITY_CREATOR.image || "/assets/influencers/el-zuzzat.jpg"}
                          alt={lang === 'ar' ? PRIORITY_CREATOR.nameAr : PRIORITY_CREATOR.nameEn}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                          loading="eager"
                        />
                      </div>
                      <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#c49348] text-white flex items-center justify-center text-xs shadow-md border-2 border-white" title="Top Priority Candidate">
                        <Star className="w-3.5 h-3.5 fill-white" />
                      </span>
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#c5384a]/10 text-[#c5384a] border border-[#c5384a]/20 mb-2">
                        <Star className="w-3.5 h-3.5 fill-[#c5384a]" />
                        <span>{t.priorityBadge}</span>
                      </div>

                      <h3 className="text-xl sm:text-3xl font-black text-[#1a202c]">
                        {lang === 'ar' ? PRIORITY_CREATOR.nameAr : PRIORITY_CREATOR.nameEn}
                      </h3>
                      
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1">
                        <span className="text-xs sm:text-sm text-[#64748b] font-mono font-medium">
                          {PRIORITY_CREATOR.handle}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#c49348]/15 text-[#92400e] border border-[#c49348]/30">
                          {PRIORITY_CREATOR.followers}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#475569] mt-2.5 max-w-xl leading-relaxed">
                        {lang === 'ar' ? PRIORITY_CREATOR.notesAr : PRIORITY_CREATOR.notesEn}
                      </p>

                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mt-3.5">
                        {PRIORITY_CREATOR.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#f5f0e8] text-[#334155] border border-[#e8e0d5]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Priority Functional Direct Links — 44px Touch Targets */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                    <a
                      href={PRIORITY_CREATOR.primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#c5384a] to-[#d95a6c] hover:from-[#b02a3a] hover:to-[#c5384a] shadow-md shadow-[#c5384a]/25 transition-all active:scale-95"
                    >
                      <InstagramIcon className="w-4 h-4 text-white" />
                      <span>Instagram Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {PRIORITY_CREATOR.secondaryLink && (
                      <a
                        href={PRIORITY_CREATOR.secondaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-md shadow-blue-600/20 transition-all active:scale-95"
                      >
                        <FacebookIcon className="w-4 h-4 text-white" />
                        <span>Facebook Profile</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 1. MEGA INFLUENCERS — EXACTLY FOUR (PREMIUM EDITORIAL CARDS)     */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'mega') && (
          <div className="mb-20 sm:mb-24">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-[#e8e0d5]">
              <div>
                <span className="text-xs font-black text-[#c5384a] tracking-widest uppercase block mb-1">
                  01 • TIER ONE SELECTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a202c]">
                  {t.sections.megaTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
                  {t.sections.megaSubtitle}
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#c5384a]/10 text-[#c5384a] border border-[#c5384a]/20">
                4 Key Candidates
              </span>
            </div>

            {/* 4 Premium Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MEGA_INFLUENCERS_TOP4.map((creator, index) => {
                const orderNum = `0${index + 1}`;
                return (
                  <div
                    key={creator.id}
                    className="p-6 rounded-3xl bg-white border border-[#e8e0d5] hover:border-[#c5384a]/50 hover:shadow-wardah-card transition-all duration-300 flex flex-col justify-between group shadow-sm relative overflow-hidden"
                  >
                    {/* Top Order Badge & Platform Pill */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-xl bg-[#c5384a]/10 text-[#c5384a] font-black text-xs flex items-center justify-center font-mono">
                          {orderNum}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#faf8f5] text-[#334155] border border-[#e8e0d5]">
                          {creator.roleAr?.split('•')[0] || 'Mega Influencer'}
                        </span>
                      </div>

                      {/* Photo Container */}
                      <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[4/4] bg-[#f5f0e8] border border-[#e8e0d5] shadow-xs group-hover:border-[#c5384a]/30 transition-colors">
                        <img
                          src={creator.image}
                          alt={lang === 'ar' ? creator.nameAr : creator.nameEn}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Creator Details */}
                      <div className="mb-4">
                        <h4 className="text-base sm:text-lg font-black text-[#1a202c] group-hover:text-[#c5384a] transition-colors leading-snug">
                          {lang === 'ar' ? creator.nameAr : creator.nameEn}
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
                          {lang === 'ar' ? 'تفصيل المنصات الرسمية:' : 'Platform Breakdown:'}
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {creator.platforms?.map((p, idx) => (
                            <a
                              key={idx}
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`${p.platform}: ${p.count}`}
                              className="px-2 py-1.5 rounded-lg bg-[#faf8f5] hover:bg-[#f5f0e8] border border-[#e8e0d5] flex items-center justify-between text-[11px] group/chip transition-colors"
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

                    {/* Primary Direct Link Action */}
                    <div className="pt-3 border-t border-[#f0ebe3]">
                      <a
                        href={creator.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1a202c] hover:bg-[#c5384a] transition-all duration-200 active:scale-95 shadow-sm"
                      >
                        <span>{t.card.viewProfile}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Combined Audience Discreet Note */}
            <div className="mt-6 text-center">
              <p className="text-[11px] text-[#64748b] bg-white px-4 py-2.5 rounded-xl border border-[#e8e0d5] inline-block shadow-xs">
                {t.combinedAudienceNote}
              </p>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 2. MINI INFLUENCERS — EXACTLY FOUR (COMPACT FOCUSED CARDS)       */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'mini') && (
          <div className="mb-20 sm:mb-24">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-[#e8e0d5]">
              <div>
                <span className="text-xs font-black text-[#326084] tracking-widest uppercase block mb-1">
                  02 • HIGH-AFFINITY SELECTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a202c]">
                  {t.sections.miniTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
                  {t.sections.miniSubtitle}
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#326084]/10 text-[#326084] border border-[#326084]/20">
                4 Focused Creators
              </span>
            </div>

            {/* 4 Compact Editorial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MINI_INFLUENCERS_TOP4.map((creator, index) => {
                const orderNum = `0${index + 1}`;
                const initials = getInitials(creator.nameEn);
                return (
                  <div
                    key={creator.id}
                    className="p-5 rounded-2xl bg-white border border-[#e8e0d5] hover:border-[#326084]/50 hover:shadow-wardah-card transition-all duration-300 flex flex-col justify-between group shadow-sm"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-7 h-7 rounded-lg bg-[#326084]/10 text-[#326084] font-black text-xs flex items-center justify-center font-mono">
                          {orderNum}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#eef5fa] text-[#326084] border border-[#dce9f2]">
                          {getPlatformIcon(creator.platform, "w-3 h-3")}
                          <span>{creator.followers}</span>
                        </span>
                      </div>

                      {/* Photo or Monogram */}
                      <div className="mb-4">
                        {creator.image ? (
                          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#e8e0d5] shadow-xs mb-3">
                            <img
                              src={creator.image}
                              alt={lang === 'ar' ? creator.nameAr : creator.nameEn}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#326084] to-[#1b2a3a] text-white font-extrabold text-base flex items-center justify-center shadow-xs mb-3">
                            {initials}
                          </div>
                        )}

                        <h4 className="text-base font-bold text-[#1a202c] group-hover:text-[#326084] transition-colors leading-snug">
                          {lang === 'ar' ? creator.nameAr : creator.nameEn}
                        </h4>
                        <p className="text-xs text-[#64748b] font-mono mt-0.5">
                          {creator.handle}
                        </p>
                      </div>

                      <p className="text-xs text-[#475569] mb-4 line-clamp-3 leading-relaxed">
                        {lang === 'ar' ? creator.categoryAr : creator.categoryEn}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {creator.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#faf8f5] text-[#334155] border border-[#e8e0d5]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-3 border-t border-[#f0ebe3]">
                      <a
                        href={creator.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#1a202c] bg-[#f5f0e8] hover:bg-[#326084] hover:text-white transition-all active:scale-95"
                      >
                        <span>{t.card.viewProfile}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 3. UGC CREATORS — LINKS-FIRST DIRECTORY                          */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'ugc') && (
          <div>
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-[#e8e0d5]">
              <div>
                <span className="text-xs font-black text-[#c49348] tracking-widest uppercase block mb-1">
                  03 • ORGANIC & DINING CONTENT POOL
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a202c]">
                  {t.sections.ugcTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
                  {t.sections.ugcSubtitle}
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#c49348]/10 text-[#92400e] border border-[#c49348]/20">
                {UGC_CREATORS.length} Active Candidates
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
                {(['all', 'instagram', 'tiktok', 'facebook'] as const).map((p) => (
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

            {/* UGC Links-First Compact Profile Grid */}
            {filteredUgcCreators.length === 0 ? (
              <div className="p-10 text-center rounded-2xl bg-white border border-[#e8e0d5]">
                <p className="text-xs text-[#64748b]">
                  {lang === 'ar' ? 'لا توجد نتائج مطابقة لخيارات البحث' : 'No creators matched your search query'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {filteredUgcCreators.map((creator) => {
                  const initials = getInitials(creator.nameEn);
                  return (
                    <div
                      key={creator.id}
                      className="p-4 rounded-xl bg-white border border-[#e8e0d5] hover:border-[#c49348]/40 hover:shadow-sm transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#e8e0d5] flex items-center justify-center text-xs font-extrabold text-[#78350f] flex-shrink-0">
                          {initials}
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-xs font-bold text-[#1a202c] group-hover:text-[#c49348] transition-colors truncate">
                            {lang === 'ar' ? creator.nameAr : creator.nameEn}
                          </h5>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            {getPlatformIcon(creator.platform, "w-3 h-3 flex-shrink-0")}
                            <span className="text-[10px] text-[#64748b] font-mono truncate">
                              {creator.handle}
                            </span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={creator.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[36px] min-w-[36px] p-2 rounded-lg bg-[#faf8f5] hover:bg-[#c49348] hover:text-white text-[#475569] flex items-center justify-center flex-shrink-0 transition-colors"
                        title={t.card.viewProfile}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
