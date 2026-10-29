import React, { useState, useMemo } from 'react';
import { Language, CreatorCandidate, CreatorTier, CreatorPlatform } from '../types';
import { CONTENT } from '../data/content';
import { PRIORITY_CREATOR, MEGA_CREATORS, MINI_CREATORS, UGC_CREATORS, CREATORS_LIST } from '../data/influencers';
import {
  Sparkles,
  ExternalLink,
  Users,
  Filter,
  CheckCircle2,
  Star,
  Award,
  Search,
  TrendingUp,
  Camera,
  HeartHandshake,
  Info
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

export const InfluencerDirectory: React.FC<InfluencerDirectoryProps> = ({ lang }) => {
  const t = CONTENT[lang].influencers;
  const [activeTier, setActiveTier] = useState<'all' | 'mega' | 'mini' | 'ugc'>('all');
  const [activePlatform, setActivePlatform] = useState<'all' | CreatorPlatform>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Actual counts based on true categorized data
  const counts = useMemo(() => ({
    all: CREATORS_LIST.length,
    mega: MEGA_CREATORS.length,
    mini: MINI_CREATORS.length,
    ugc: UGC_CREATORS.length
  }), []);

  // Filter creator candidates
  const filteredCreators = useMemo(() => {
    return CREATORS_LIST.filter((creator) => {
      // Tier filter
      if (activeTier === 'mega' && creator.tier !== 'mega') return false;
      if (activeTier === 'mini' && creator.tier !== 'mini') return false;
      if (activeTier === 'ugc' && creator.tier !== 'ugc') return false;

      // Platform filter
      if (activePlatform !== 'all' && creator.platform !== activePlatform) return false;

      // Search query filter (name, handle, category)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = creator.nameAr.toLowerCase().includes(q) || creator.nameEn.toLowerCase().includes(q);
        const matchHandle = creator.handle.toLowerCase().includes(q);
        const matchCategory = creator.categoryAr.toLowerCase().includes(q) || creator.categoryEn.toLowerCase().includes(q);
        if (!matchName && !matchHandle && !matchCategory) return false;
      }

      return true;
    });
  }, [activeTier, activePlatform, searchQuery]);

  const getPlatformIcon = (platform: CreatorPlatform, size = "w-4 h-4") => {
    switch (platform) {
      case 'instagram':
        return <InstagramIcon className={`${size} text-[#c5384a]`} />;
      case 'facebook':
        return <FacebookIcon className={`${size} text-[#1877F2]`} />;
      case 'tiktok':
        return <TikTokIcon className={`${size} text-[#000000]`} />;
    }
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="influencer-directory" className="py-20 sm:py-28 bg-[#faf8f5] text-[#1a202c] relative border-t border-[#e8e0d5]">
      {/* Decorative Floral Watercolor Aura */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#c5384a]/5 via-[#c49348]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#326084]/5 via-[#8e799f]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
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

          <div className="inline-flex items-start gap-2 text-xs text-[#713f12] bg-[#fefce8] p-3.5 rounded-xl border border-[#fef08a] max-w-2xl mx-auto text-start rtl:text-right shadow-sm">
            <Info className="w-4 h-4 text-[#ca8a04] flex-shrink-0 mt-0.5" />
            <span>{t.disclaimer}</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PRIORITY PLACEMENT CARD — EL ZUZZAT (TOP OF DIRECTORY)         */}
        {/* ============================================================== */}
        <div className="mb-14 sm:mb-16">
          <div className="relative p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#c5384a] via-[#c49348] to-[#326084] shadow-xl">
            <div className="bg-white rounded-[14px] sm:rounded-[22px] p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left rtl:sm:text-right">
                  {/* Priority Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#c5384a] via-[#b02a3a] to-[#7d1d32] flex items-center justify-center text-white text-2xl sm:text-3xl font-black shadow-lg shadow-[#c5384a]/20 flex-shrink-0">
                      EZ
                    </div>
                    <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#c49348] text-white flex items-center justify-center text-xs shadow-md">
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

        {/* ============================================================== */}
        {/* DIRECTORY FILTERS & CONTROLS                                    */}
        {/* ============================================================== */}
        <div className="mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-white border border-[#e8e0d5] shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* 3 Categories + All Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {/* ALL */}
            <button
              onClick={() => setActiveTier('all')}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                activeTier === 'all'
                  ? 'bg-[#1a202c] text-white shadow-md'
                  : 'bg-[#f5f0e8] text-[#475569] hover:bg-[#e8e0d5]'
              }`}
            >
              {t.tabs.all} ({counts.all})
            </button>

            {/* MEGA */}
            <button
              onClick={() => setActiveTier('mega')}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-1.5 ${
                activeTier === 'mega'
                  ? 'bg-[#c5384a] text-white shadow-md shadow-[#c5384a]/25'
                  : 'bg-[#fdf2f4] text-[#c5384a] hover:bg-[#fbdde1]'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t.tabs.mega}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${activeTier === 'mega' ? 'bg-white/20' : 'bg-[#c5384a]/10'}`}>
                {counts.mega}
              </span>
            </button>

            {/* MINI */}
            <button
              onClick={() => setActiveTier('mini')}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-1.5 ${
                activeTier === 'mini'
                  ? 'bg-[#326084] text-white shadow-md shadow-blue-800/20'
                  : 'bg-[#eef5fa] text-[#326084] hover:bg-[#dce9f2]'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{t.tabs.mini}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${activeTier === 'mini' ? 'bg-white/20' : 'bg-[#326084]/10'}`}>
                {counts.mini}
              </span>
            </button>

            {/* UGC */}
            <button
              onClick={() => setActiveTier('ugc')}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-1.5 ${
                activeTier === 'ugc'
                  ? 'bg-[#c49348] text-white shadow-md shadow-amber-600/20'
                  : 'bg-[#fdf7ee] text-[#b45309] hover:bg-[#f7ebd4]'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{t.tabs.ugc}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${activeTier === 'ugc' ? 'bg-white/20' : 'bg-[#c49348]/15'}`}>
                {counts.ugc}
              </span>
            </button>
          </div>

          {/* Search + Platform Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 text-[#94a3b8] absolute start-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.filters.searchPlaceholder}
                className="w-full min-h-[44px] ps-9 pe-3 py-2 rounded-xl text-xs bg-[#f5f0e8] border border-[#e8e0d5] text-[#1a202c] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#c5384a] focus:bg-white transition-colors"
              />
            </div>

            {/* Platform Filter */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {(['all', 'instagram', 'facebook', 'tiktok'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePlatform(p)}
                  className={`min-h-[44px] px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 flex-shrink-0 flex items-center gap-1.5 ${
                    activePlatform === p
                      ? 'bg-[#1a202c] text-white font-bold'
                      : 'bg-[#f5f0e8] text-[#475569] hover:bg-[#e8e0d5]'
                  }`}
                >
                  {p !== 'all' && getPlatformIcon(p, "w-3.5 h-3.5")}
                  <span>{p === 'all' ? t.filters.allPlatforms : p.charAt(0).toUpperCase() + p.slice(1)}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* CREATORS CARDS GRID                                            */}
        {/* ============================================================== */}
        {filteredCreators.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white border border-[#e8e0d5] shadow-sm">
            <Users className="w-12 h-12 text-[#94a3b8] mx-auto mb-3" />
            <h4 className="text-base font-bold text-[#1a202c] mb-1">
              {lang === 'ar' ? 'لا توجد نتائج مطابقة' : 'No matching creators found'}
            </h4>
            <p className="text-xs text-[#64748b]">
              {lang === 'ar' ? 'يرجى تجربة فلتر آخر أو كلمة بحث مختلفة' : 'Try adjusting your filters or search term'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredCreators.map((creator) => {
              const initials = getInitials(creator.nameEn);
              const isMega = creator.tier === 'mega';
              const isMini = creator.tier === 'mini';
              const isUgc = creator.tier === 'ugc';

              // Visual styling per category
              const tierBadge = isMega
                ? { label: 'MEGA', bg: 'bg-[#fdf2f4]', text: 'text-[#c5384a]', border: 'border-[#fbdde1]', avatar: 'from-[#c5384a] to-[#7d1d32]' }
                : isMini
                ? { label: 'MINI', bg: 'bg-[#eef5fa]', text: 'text-[#326084]', border: 'border-[#dce9f2]', avatar: 'from-[#326084] to-[#1b2a3a]' }
                : { label: 'UGC', bg: 'bg-[#fdf7ee]', text: 'text-[#b45309]', border: 'border-[#f7ebd4]', avatar: 'from-[#c49348] to-[#92400e]' };

              return (
                <div
                  key={creator.id}
                  className="p-5 rounded-2xl bg-white border border-[#e8e0d5] hover:border-[#c5384a]/40 hover:shadow-wardah-card transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Bar: Platform & Tier Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#faf8f5] text-[#475569] border border-[#e8e0d5]">
                        {getPlatformIcon(creator.platform)}
                        <span className="capitalize">{creator.platform}</span>
                      </span>

                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${tierBadge.bg} ${tierBadge.text} ${tierBadge.border}`}
                      >
                        {tierBadge.label}
                      </span>
                    </div>

                    {/* Creator Identity with Initial Avatar */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-sm flex-shrink-0 bg-gradient-to-br ${tierBadge.avatar}`}
                      >
                        {initials}
                      </div>

                      <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-[#1a202c] group-hover:text-[#c5384a] transition-colors truncate">
                          {lang === 'ar' ? creator.nameAr : creator.nameEn}
                        </h4>
                        <p className="text-xs text-[#64748b] font-mono truncate">{creator.handle}</p>
                      </div>
                    </div>

                    {/* Follower Count Card Display */}
                    <div className="mb-3">
                      {creator.followers ? (
                        <div className="px-3 py-1.5 rounded-xl bg-[#fdf2f4] border border-[#fbdde1] flex items-center justify-between">
                          <span className="text-[11px] font-medium text-[#c5384a]">
                            {t.card.userProvidedFollowers}
                          </span>
                          <span className="text-xs font-extrabold text-[#7d1d32] font-mono">
                            {creator.followers}
                          </span>
                        </div>
                      ) : (
                        <div className="px-3 py-1.5 rounded-xl bg-[#f5f0e8] border border-[#e8e0d5] flex items-center justify-between">
                          <span className="text-[11px] text-[#64748b]">
                            {t.card.unverifiedLabel}
                          </span>
                          <span className="text-[10px] font-semibold text-[#94a3b8]">
                            Audit Req.
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Category Description */}
                    <p className="text-xs text-[#475569] mb-4 line-clamp-2 leading-relaxed font-normal">
                      {lang === 'ar' ? creator.categoryAr : creator.categoryEn}
                    </p>
                  </div>

                  {/* Profile Action Link — 44px Touch Target */}
                  <div className="pt-3 border-t border-[#f0ebe3] flex items-center justify-between gap-2">
                    <a
                      href={creator.primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-[#1a202c] bg-[#f5f0e8] hover:bg-[#c5384a] hover:text-white transition-all active:scale-95"
                    >
                      <span>{t.card.viewProfile}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {creator.secondaryLink && (
                      <a
                        href={creator.secondaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={lang === 'ar' ? 'رابط المنصة الإضافية' : 'Secondary Platform Link'}
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-[#f5f0e8] hover:bg-[#e8e0d5] text-[#475569] transition-colors active:scale-95"
                      >
                        {creator.secondaryPlatform ? getPlatformIcon(creator.secondaryPlatform) : <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Footer Note regarding follower numbers & real profile photos */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#64748b] bg-white p-4 rounded-xl border border-[#e8e0d5] inline-block shadow-sm">
            {t.card.followerNote} • {lang === 'ar' ? 'الصور الشخصية مُصممة بنظام الرموز المعتمدة، وتُتاح الروابط الرسمية المباشرة لكل حساب للمعاينة الفورية.' : 'Avatars displayed via verified monogram badges; all cards contain direct clickable links to official profiles for live verification.'}
          </p>
        </div>

      </div>
    </section>
  );
};
