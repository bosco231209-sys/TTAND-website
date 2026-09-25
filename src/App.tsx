/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PathFunnel } from './components/PathFunnel.tsx';
import { FoundersMessage } from './components/FoundersMessage.tsx';
import { ServicesGrid } from './components/ServicesGrid.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { SuppliersGrid } from './components/SuppliersGrid.tsx';
import { LuxeSection } from './components/LuxeSection.tsx';
import { ConversionBanner } from './components/ConversionBanner.tsx';
import { FaqPage } from './components/FaqPage.tsx';
import { Footer } from './components/Footer.tsx';

// Interactive Functional Modals
import { WebinarModal } from './components/WebinarModal.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { CommissionCalculatorModal } from './components/CommissionCalculatorModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { DetailModal, DetailModalType } from './components/DetailModal.tsx';
import { useScrollReveal } from './hooks/useScrollReveal.ts';

export default function App() {
  useScrollReveal();

  const [isWebinarOpen, setIsWebinarOpen] = useState(false);
  const [webinarPath, setWebinarPath] = useState<'new' | 'experienced' | 'agency'>('new');
  
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [detailModal, setDetailModal] = useState<DetailModalType>(null);

  const [currentPage, setCurrentPage] = useState<'home' | 'faq'>('home');
  const [faqCategory, setFaqCategory] = useState<string>('all');

  // Handlers for launching modals
  const handleOpenWebinar = (path?: 'new' | 'experienced' | 'agency') => {
    if (path) setWebinarPath(path);
    setIsWebinarOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigateFaq = (category: string) => {
    setFaqCategory(category);
    setCurrentPage('faq');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#E85D04]/20 selection:text-[#E85D04]">
      {/* Top Navigation & Mega Menu */}
      <Navbar
        onOpenWebinar={handleOpenWebinar}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onNavigateSection={handleNavigateSection}
        onNavigateFaq={handleNavigateFaq}
        onGoHome={handleGoHome}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* SECTION 1: HERO */}
            <Hero
              onOpenWebinar={handleOpenWebinar}
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onNavigateSection={handleNavigateSection}
            />

            {/* SECTION 2: CHOOSE YOUR PATH (Audience Funnel) */}
            <PathFunnel
              onOpenWebinar={handleOpenWebinar}
              onSelectPathDetails={(path) => setDetailModal({ type: 'path', path })}
            />

            {/* SECTION 3: FOUNDER'S MESSAGE & CORE VALUE PROPOSITION */}
            <FoundersMessage />

            {/* SECTION 4: SERVICES OVERVIEW GRID */}
            <ServicesGrid
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onSelectServiceDetail={(serviceId) => setDetailModal({ type: 'service', serviceId })}
            />

            {/* SECTION 5: TESTIMONIALS & PROOF POINTS */}
            <Testimonials
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenStoriesModal={() => setDetailModal({ type: 'stories' })}
            />

            {/* SECTION 6: PREFERRED SUPPLIERS & COMMISSIONS */}
            <SuppliersGrid
              onOpenSuppliersModal={() => setDetailModal({ type: 'suppliers' })}
            />

            {/* SECTION 7: FEATURED LUXURY PROGRAM (LUXE) */}
            <LuxeSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenLuxeModal={() => setDetailModal({ type: 'luxe' })}
            />

            {/* SECTION 8: FINAL CONVERSION BANNER (CLOSING CTA) */}
            <ConversionBanner
              onOpenWebinar={handleOpenWebinar}
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </>
        ) : (
          <FaqPage
            onBackToHome={handleGoHome}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenWebinar={handleOpenWebinar}
            initialCategory={faqCategory}
          />
        )}
      </main>

      {/* SECTION 9: FOOTER ARCHITECTURE */}
      <Footer
        onOpenWebinar={handleOpenWebinar}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onNavigateSection={handleNavigateSection}
        onNavigateFaq={handleNavigateFaq}
      />

      {/* Modals & Interactive Overlays */}
      <WebinarModal
        isOpen={isWebinarOpen}
        initialPath={webinarPath}
        onClose={() => setIsWebinarOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <CommissionCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenConsultation={() => {
          setIsCalculatorOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(target) => {
          if (target === 'calculator') {
            setIsCalculatorOpen(true);
          } else {
            handleNavigateSection(target);
          }
        }}
      />

      <DetailModal
        modalData={detailModal}
        onClose={() => setDetailModal(null)}
        onOpenWebinar={handleOpenWebinar}
        onOpenConsultation={() => {
          setDetailModal(null);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
