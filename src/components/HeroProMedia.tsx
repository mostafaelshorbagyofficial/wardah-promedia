import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { ArrowDown, Sparkles, TrendingUp, Film, CheckCircle2 } from 'lucide-react';

interface HeroProMediaProps {
  lang: Language;
}

export const HeroProMediaProps: React.FC<HeroProMediaProps> = ({ lang }) => {
  const t = CONTENT[lang].hero;

  return (
    <section id="promedia-intro" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#14181f] via-[#1a202c] to-[#14181f]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#e84d58]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Official Agency Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#e84d58] animate-pulse"></span>
            <span>{t.badge}</span>
          </div>

          {/* Prominent ProMedia Logo Display */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="px-5 py-3.5 sm:px-7 sm:py-4 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md hover:border-[#e84d58]/40 transition-colors duration-300 inline-flex items-center justify-center">
              <img
                src="/assets/logo/promedia-logo.png"
                alt="PRO MEDIA Logo"
                className="w-[150px] sm:w-[190px] md:w-[230px] h-auto object-contain mx-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Positioning Tagline */}
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-widest text-[#e84d58] uppercase mb-4 px-2">
            {t.tagline}
          </p>

          {/* Strategic Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 sm:mb-6 leading-tight px-2">
            {t.headline}
          </h1>

          {/* Subheadline & Narrative */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-normal mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
            {t.subheadline}
          </p>

          {/* Navigation Action Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <a
              href="#promedia-video"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#e84d58] hover:bg-[#de4b55] shadow-lg shadow-[#e84d58]/25 transition-all duration-200 active:scale-95"
            >
              <Film className="w-4 h-4" />
              <span>{lang === 'ar' ? 'مشاهدة الفيديو التعريفي أدناه' : 'Watch Agency Showreel Below'}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#fb-portfolio"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-gray-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-200 active:scale-95"
            >
              <span>{t.exploreClients}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#wardah-proposal"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#f8a5b0] bg-[#c5384a]/20 hover:bg-[#c5384a]/30 border border-[#c5384a]/40 transition-all duration-200 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#f8a5b0]" />
              <span>{t.jumpToWardah}</span>
            </a>
          </div>

          {/* ========================================================= */}
          {/* DIRECT IN-PAGE VIDEO PLAYER (NO INTERMEDIARY SCREEN/MODAL) */}
          {/* ========================================================= */}
          <div id="promedia-video" className="mb-14 sm:mb-16 max-w-4xl mx-auto scroll-mt-24">
            <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-white/20 via-[#e84d58]/30 to-white/5 shadow-2xl">
              <div className="bg-[#0e1217] rounded-[14px] sm:rounded-[22px] overflow-hidden border border-white/10">
                {/* Video Header Bar */}
                <div className="px-4 py-3 bg-[#161b24] border-b border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e84d58]"></span>
                    <span className="font-bold text-white tracking-wide">
                      {lang === 'ar' ? 'البرومو التعريفي لشركة برو ميديا — استوديوهات الإنتاج' : 'ProMedia Official Agency Showreel & Production'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 hidden sm:inline">
                    79s • Local MP4
                  </span>
                </div>

                {/* Direct Responsive HTML5 Video Element */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  <video
                    src="/assets/promo/promedia-promo.mp4"
                    poster="/assets/promo/promedia-promo-poster.jpg"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    <p className="text-xs text-gray-400 p-4">
                      {lang === 'ar' ? 'متصفحك لا يدعم تشغيل الفيديو المباشر.' : 'Your browser does not support inline video playback.'}
                    </p>
                  </video>
                </div>

                {/* Video Meta Caption */}
                <div className="px-4 py-2.5 bg-[#12161f] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-400 text-center sm:text-left rtl:sm:text-right">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{lang === 'ar' ? 'مشغل فيديو محلي فوري — بدون وسيط أو إعلانات' : 'Direct local video player — instant in-page playback'}</span>
                  </div>
                  <span className="text-gray-400">
                    {lang === 'ar' ? 'تحكم كامل بالصوت والتشغيل والشاشة الكاملة' : 'Full playback, volume, and fullscreen controls'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* High-Impact Numerical Credentials Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-8 border-t border-white/10">
            {t.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all text-center"
              >
                <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1 tracking-tight">
                  <span className="text-[#e84d58]">{stat.value}</span>
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Ecosystem Pillars Bar */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2 text-white font-bold">
              <TrendingUp className="w-4 h-4 text-[#e84d58]" />
              <span>{lang === 'ar' ? 'ركائز منظومة برو ميديا:' : 'ProMedia Core Pillars:'}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {lang === 'ar' ? 'المحتوى الإبداعي' : 'Creative Content'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {lang === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {lang === 'ar' ? 'الإنتاج السينمائي' : 'Video Production'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {lang === 'ar' ? 'إدارة المؤثرين' : 'Creator Growth'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
