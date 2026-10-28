import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = CONTENT[lang].footer;

  return (
    <footer className="bg-[#0a0c10] text-gray-400 py-10 sm:py-12 border-t border-white/5 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/5">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/assets/logo/wardah-logo.png"
              alt="Wardah Restaurant & Cafe"
              width="36"
              height="36"
              className="h-8 w-auto rounded-full bg-white/5 p-0.5 border border-amber-500/30"
            />
            <div className="h-4 w-[1px] bg-white/20"></div>
            <img
              src="/assets/logo/promedia-logo.png"
              alt="ProMedia"
              width="70"
              height="26"
              className="h-7 w-auto object-contain"
            />
          </div>

          <div className="text-center md:text-left rtl:md:text-right px-2">
            <p className="font-semibold text-gray-300 text-xs sm:text-sm">{t.tagline}</p>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5">{t.note}</p>
          </div>

          <a
            href="http://www.pro-media.com"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            <span>{t.officialWebsite}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-center sm:text-left rtl:sm:text-right">
          <p className="text-[11px] sm:text-xs">{t.rights}</p>
          <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Strict Local Assets Architecture • Production Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
