import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroProMediaProps } from './components/HeroProMedia';
import { PortfolioFB } from './components/PortfolioFB';
import { WardahTransition } from './components/WardahTransition';
import { WardahVision } from './components/WardahVision';
import { BrandAnalysis } from './components/BrandAnalysis';
import { ExperienceDevelopment } from './components/ExperienceDevelopment';
import { GCCStrategy } from './components/GCCStrategy';
import { InfluencerDirectory } from './components/InfluencerDirectory';
import { CampaignConcepts } from './components/CampaignConcepts';
import { ContentStrategy } from './components/ContentStrategy';
import { Roadmap90Days } from './components/Roadmap90Days';
import { MeasurementKPIs } from './components/MeasurementKPIs';
import { WhyProMedia } from './components/WhyProMedia';
import { NextStepsClosing } from './components/NextStepsClosing';
import { Footer } from './components/Footer';
import { MediaModal } from './components/MediaModal';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  // Media Modal state for high-res portfolio screenshot inspection
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>('');
  const [modalTitle, setModalTitle] = useState<string>('');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleInspectImage = (src: string, title: string) => {
    setModalSrc(src);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#faf8f5] text-[#1a202c] font-sans selection:bg-[#c5384a]/20 selection:text-[#c5384a] ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Primary Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      <main>
        {/* Section 01: ProMedia Introduction with Direct In-Page Video Player */}
        <HeroProMediaProps
          lang={lang}
        />

        {/* Section 02 & 03: Food & Beverage Clients & Work */}
        <PortfolioFB
          lang={lang}
          onInspectImage={handleInspectImage}
        />

        {/* Section 04: Transition to Wardah Egypt */}
        <WardahTransition
          lang={lang}
        />

        {/* Section 05: The Vision */}
        <WardahVision
          lang={lang}
        />

        {/* Section 06: Brand Analysis & Market Opportunities */}
        <BrandAnalysis
          lang={lang}
        />

        {/* Section 07: Experience Development */}
        <ExperienceDevelopment
          lang={lang}
        />

        {/* Section 08: GCC Audience Strategy */}
        <GCCStrategy
          lang={lang}
        />

        {/* Section 09: Influencer Marketing (Priority El Zuzzat First, Group A, Group B) */}
        <InfluencerDirectory
          lang={lang}
        />

        {/* Section 10: Campaign Concepts */}
        <CampaignConcepts
          lang={lang}
        />

        {/* Section 11: Content & Digital Strategy */}
        <ContentStrategy
          lang={lang}
        />

        {/* Section 12: 90-Day Execution Roadmap */}
        <Roadmap90Days
          lang={lang}
        />

        {/* Section 13: Measurement & KPIs Framework */}
        <MeasurementKPIs
          lang={lang}
        />

        {/* Section 14: Why ProMedia? */}
        <WhyProMedia
          lang={lang}
        />

        {/* Section 15: Next Steps & Closing */}
        <NextStepsClosing
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Shared Media Modal for High-Resolution Asset Inspection */}
      <MediaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mediaType="image"
        src={modalSrc}
        title={modalTitle}
      />
    </div>
  );
};

export default App;
