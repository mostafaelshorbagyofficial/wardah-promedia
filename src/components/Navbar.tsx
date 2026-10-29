import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CONTENT } from '../data/content';
import { Menu, X, Globe, ExternalLink, Play } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#promedia-intro', label: t.agency },
    { href: '#promedia-video', label: lang === 'ar' ? 'فيديو البرومو' : 'Showreel' },
    { href: '#fb-portfolio', label: t.clients },
    { href: '#wardah-proposal', label: t.wardah },
    { href: '#wardah-vision', label: t.vision },
    { href: '#brand-analysis', label: t.analysis },
    { href: '#experience-dev', label: t.experience },
    { href: '#gcc-strategy', label: t.gcc },
    { href: '#influencer-directory', label: t.influencers },
    { href: '#campaign-concepts', label: t.campaigns },
    { href: '#execution-roadmap', label: t.roadmap },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e8e0d5] py-2.5 sm:py-3'
          : 'bg-[#faf8f5]/90 backdrop-blur-sm border-b border-[#e8e0d5]/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logos: Wardah & ProMedia */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Wardah Prominent Browser Branding */}
          <a
            href="#wardah-proposal"
            className="flex items-center gap-2.5 group min-h-[44px] min-w-[44px]"
            title="Wardah Egypt Restaurant & Cafe"
          >
            <img
              src="/assets/logo/wardah-logo.png"
              alt="Wardah Restaurant & Cafe"
              width="40"
              height="40"
              className="h-8 sm:h-9 w-auto rounded-full object-contain bg-white p-0.5 border border-[#c5384a]/30 shadow-sm transition-transform group-hover:scale-105"
            />
            <div className="text-left rtl:text-right hidden sm:block">
              <span className="block text-xs font-black tracking-wider text-[#1a202c] uppercase">Wardah</span>
              <span className="block text-[10px] text-[#c5384a] font-medium">Restaurant & Cafe</span>
            </div>
          </a>

          <div className="h-5 w-[1px] bg-[#e8e0d5]"></div>

          {/* ProMedia Agency Partner */}
          <a
            href="#promedia-intro"
            className="flex items-center gap-2 group min-h-[44px] items-center"
            title="ProMedia Agency"
          >
            <img
              src="/assets/logo/promedia-logo.png"
              alt="ProMedia"
              width="90"
              height="32"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-3.5 text-xs lg:text-sm font-semibold text-[#334155]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#c5384a] transition-colors py-2 px-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5384a] scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-center"></span>
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Video Scroll Trigger */}
          <a
            href="#promedia-video"
            title={lang === 'ar' ? 'انتقل إلى فيديو البرومو' : 'Jump to Showreel'}
            className="min-h-[40px] px-3 py-2 rounded-full text-xs font-bold bg-[#c5384a]/10 hover:bg-[#c5384a]/15 text-[#c5384a] border border-[#c5384a]/25 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden md:inline">{lang === 'ar' ? 'البرومو' : 'Showreel'}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-white hover:bg-[#f5f0e8] text-[#1a202c] border border-[#e8e0d5] shadow-sm transition-all active:scale-95"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-[#c49348]" />
            <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Contact CTA */}
          <a
            href="#contact-closing"
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center px-4 py-2 rounded-full text-xs font-bold bg-[#c5384a] hover:bg-[#b02a3a] text-white shadow-md shadow-[#c5384a]/20 transition-all active:scale-95"
          >
            <span>{CONTENT[lang].nav.contact}</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl bg-white hover:bg-[#f5f0e8] text-[#1a202c] border border-[#e8e0d5] xl:hidden focus:outline-none active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-[#e8e0d5] px-4 pt-3 pb-6 mt-2 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center px-3 py-2.5 rounded-xl bg-[#faf8f5] hover:bg-[#f5f0e8] text-[#1a202c] font-semibold active:bg-[#c5384a]/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#e8e0d5] flex items-center justify-between">
            <a
              href="#promedia-video"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] inline-flex items-center gap-2 text-xs font-bold text-[#c5384a] bg-[#c5384a]/10 px-3.5 py-2.5 rounded-xl"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{lang === 'ar' ? 'فيديو البرومو المباشر' : 'Direct Agency Showreel'}</span>
            </a>

            <a
              href="http://www.pro-media.com"
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs text-[#64748b] hover:text-[#1a202c] px-2 py-2 font-medium"
            >
              <span>pro-media.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
