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
    <footer className="bg-[#f5f0e8] text-[#64748b] py-10 sm:py-12 border-t border-[#e8e0d5] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-[#e8e0d5]">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/assets/logo/wardah-logo.png"
              alt="Wardah Restaurant & Cafe"
              width="36"
              height="36"
              className="h-9 w-auto rounded-full bg-white p-0.5 border border-[#c5384a]/30 shadow-xs"
            />
            <div className="h-4 w-[1px] bg-[#e8e0d5]"></div>
            <img
              src="/assets/logo/promedia-logo.png"
              alt="ProMedia"
              width="70"
              height="26"
              className="h-7 w-auto object-contain"
            />
          </div>

          <div className="text-center md:text-left rtl:md:text-right px-2">
            <p className="font-bold text-[#1a202c] text-xs sm:text-sm">{t.tagline}</p>
            <p className="text-[10px] sm:text-[11px] text-[#64748b] mt-0.5">{t.note}</p>
          </div>

          <a
            href="http://www.pro-media.com"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 text-[#475569] hover:text-[#c5384a] font-semibold transition-colors"
          >
            <span>{t.officialWebsite}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#64748b] text-center sm:text-left rtl:sm:text-right">
          <p className="text-[11px] sm:text-xs">{t.rights}</p>
          <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-[#475569]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Strict Local Assets Architecture • Production Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
