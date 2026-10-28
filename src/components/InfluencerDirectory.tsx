import React, { useState } from 'react';
import { Language, CreatorCandidate, CreatorTier, CreatorPlatform } from '../types';
import { CONTENT } from '../data/content';
import { PRIORITY_CREATOR, CREATORS_LIST } from '../data/influencers';
import {
  Sparkles,
  ExternalLink,
  Users,
  Filter,
  CheckCircle,
  Star,
  Award,
  Video
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
  const [activeTab, setActiveTab] = useState<'all' | 'priority' | 'mega' | 'micro'>('all');
  const [activePlatform, setActivePlatform] = useState<'all' | CreatorPlatform>('all');

  // Filter creator candidates
  const filteredCreators = CREATORS_LIST.filter((creator) => {
    // Tier filter
    if (activeTab === 'priority') return false; // Handled separately in featured card
    if (activeTab === 'mega' && creator.tier !== 'mega') return false;
    if (activeTab === 'micro' && creator.tier !== 'micro_ugc') return false;

    // Platform filter
    if (activePlatform !== 'all' && creator.platform !== activePlatform) return false;

    return true;
  });

  const getPlatformIcon = (platform: CreatorPlatform) => {
    switch (platform) {
      case 'instagram':
        return <InstagramIcon className="w-4 h-4 text-pink-400" />;
      case 'facebook':
        return <FacebookIcon className="w-4 h-4 text-blue-400" />;
      case 'tiktok':
        return <TikTokIcon className="w-4 h-4 text-cyan-400" />;
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
    <section id="influencer-directory" className="py-20 sm:py-24 bg-[#141211] text-white relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight px-2">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal mb-5 px-2">
            {t.subtitle}
          </p>

          <p className="text-xs text-amber-300/80 bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/20 max-w-2xl mx-auto">
            {t.disclaimer}
          </p>
        </div>

        {/* ============================================================== */}
        {/* PRIORITY PLACEMENT CARD — EL ZUZZAT (MANDATORY FIRST POSITION) */}
        {/* ============================================================== */}
        <div className="mb-12 sm:mb-14">
          <div className="relative p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500 via-[#e84d58] to-[#1a8b9d] shadow-2xl">
            <div className="bg-[#1b1715] rounded-[14px] sm:rounded-[22px] p-5 sm:p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left rtl:sm:text-right">
                  {/* Priority Avatar */}
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-[#e84d58] flex items-center justify-center text-white text-xl sm:text-3xl font-black shadow-lg shadow-amber-500/20 flex-shrink-0">
                    EZ
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-2">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{t.priorityBadge}</span>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-black text-white">
                      {lang === 'ar' ? PRIORITY_CREATOR.nameAr : PRIORITY_CREATOR.nameEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-mono mt-0.5">
                      {PRIORITY_CREATOR.handle}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
                      {lang === 'ar' ? PRIORITY_CREATOR.notesAr : PRIORITY_CREATOR.notesEn}
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mt-3">
                      {PRIORITY_CREATOR.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Priority Functional Direct Links — Comfortable Touch Targets */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
                  <a
                    href={PRIORITY_CREATOR.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-lg shadow-pink-600/20 transition-all active:scale-95"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {PRIORITY_CREATOR.secondaryLink && (
                    <a
                      href={PRIORITY_CREATOR.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                    >
                      <FacebookIcon className="w-4 h-4" />
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
        {/* DIRECTORY FILTERS & CONTROLS — TOUCH FRIENDLY */}
        {/* ============================================================== */}
        <div className="mb-8 sm:mb-10 p-3 sm:p-4 rounded-2xl bg-[#1b1715] border border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Tier Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {t.tabs.all} ({CREATORS_LIST.length})
            </button>
            <button
              onClick={() => setActiveTab('mega')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                activeTab === 'mega'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {t.tabs.mega}
            </button>
            <button
              onClick={() => setActiveTab('micro')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                activeTab === 'micro'
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {t.tabs.micro}
            </button>
          </div>

          {/* Platform Filter */}
          <div className="flex items-center gap-1.5 sm:gap-2 justify-start md:justify-end overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs text-gray-400 flex items-center gap-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>{t.filters.platform}:</span>
            </span>
            {(['all', 'instagram', 'facebook', 'tiktok'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setActivePlatform(p)}
                className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 flex-shrink-0 ${
                  activePlatform === p
                    ? 'bg-white/20 text-white font-bold'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {p === 'all' ? t.filters.allPlatforms : p.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* CREATOR CANDIDATES CARDS GRID */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredCreators.map((creator) => {
            const initials = getInitials(creator.nameEn);
            const isMega = creator.tier === 'mega';

            return (
              <div
                key={creator.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#1d1916] border border-white/5 hover:border-amber-500/30 hover:bg-[#231e1a] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Top Bar: Platform & Tier Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/5 text-gray-300 border border-white/5">
                      {getPlatformIcon(creator.platform)}
                      <span className="capitalize">{creator.platform}</span>
                    </span>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isMega
                          ? 'bg-purple-500/15 text-purple-300 border border-purple-500/25'
                          : 'bg-teal-500/15 text-teal-300 border border-teal-500/25'
                      }`}
                    >
                      {isMega ? 'Mega Candidate' : 'Micro / UGC'}
                    </span>
                  </div>

                  {/* Creator Identity */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md flex-shrink-0 ${
                        isMega
                          ? 'bg-gradient-to-br from-purple-600 to-[#e84d58]'
                          : 'bg-gradient-to-br from-[#1a8b9d] to-amber-600'
                      }`}
                    >
                      {initials}
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                        {lang === 'ar' ? creator.nameAr : creator.nameEn}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono truncate">{creator.handle}</p>
                    </div>
                  </div>

                  {/* Follower Count (When User-Provided) */}
                  {creator.followers ? (
                    <div className="mb-3 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-center justify-between">
                      <span className="text-[11px] text-amber-300/80">{t.card.userProvidedFollowers}</span>
                      <span className="font-extrabold text-amber-300">{creator.followers}</span>
                    </div>
                  ) : (
                    <div className="mb-3 px-3 py-1.5 rounded-lg bg-white/5 text-[11px] text-gray-400">
                      {lang === 'ar' ? 'صانع محتوى مرشح للتدقيق' : 'Shortlisted Candidate Pool'}
                    </div>
                  )}

                  {/* Category / Specialization */}
                  <p className="text-xs text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                    {lang === 'ar' ? creator.categoryAr : creator.categoryEn}
                  </p>
                </div>

                {/* Direct Working Link Button — 44px Touch Target */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                  <a
                    href={creator.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-amber-500 hover:text-black transition-all active:scale-95"
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
                      className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors active:scale-95"
                    >
                      {creator.secondaryPlatform ? getPlatformIcon(creator.secondaryPlatform) : <ExternalLink className="w-3.5 h-3.5" />}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
