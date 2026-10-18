/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp, ArrowLeft } from 'lucide-react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BlogSection } from './components/BlogSection';
import { MissionSection } from './components/MissionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Weddings');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll reading indicator at the very top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Ensure page always starts at top on refresh/reload; cleanup restore
  useEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    return () => {
      history.scrollRestoration = previous;
    };
  }, []);

  // Sync state with URL hash
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#blog') {
        setCurrentPage('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: 'home' | 'blog', sectionId?: string) => {
    if (page === 'blog') {
      setCurrentPage('blog');
      window.location.hash = '#blog';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage('home');
    if (sectionId) {
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(projectType);
    }
    if (currentPage !== 'home') {
      navigateTo('home', 'contact');
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToPortfolio = () => {
    if (currentPage !== 'home') {
      navigateTo('home', 'portfolio');
    } else {
      const portfolioElem = document.getElementById('portfolio');
      if (portfolioElem) {
        portfolioElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#292724] font-sans flex flex-col selection:bg-[#D8C8B8] selection:text-[#292724] relative">
      {/* Editorial Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#8D7163] origin-left z-50 pointer-events-none opacity-85"
        style={{ scaleX }}
      />

      {/* 2. Navigation Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onInquireClick={() => scrollToContact()} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* VIEW A: HOME SCREEN (Blog is hidden from Home Screen) */}
        {currentPage === 'home' && (
          <>
            {/* 3. Hero Section */}
            <HeroSection
              onExploreClick={scrollToPortfolio}
              onCreateClick={() => scrollToContact()}
            />

            {/* 4. Introduction Section */}
            <IntroSection />

            {/* 5. Editorial About Section with Asymmetrical Overlapping Layout */}
            <AboutSection onLearnMoreClick={scrollToPortfolio} />

            {/* 6. Services Section */}
            <ServicesSection 
              onSelectServiceForBooking={(serviceTitle) => scrollToContact(serviceTitle)} 
            />

            {/* 7. Portfolio Section with Category Filters & Lightbox */}
            <PortfolioSection />

            {/* 8. Mission Statement Section with Circular Vignette */}
            <MissionSection />

            {/* 9. Contact / Booking Section */}
            <ContactSection initialProjectType={selectedProjectType} />
          </>
        )}

        {/* VIEW B: DEDICATED BLOG PAGE (Shown when clicking Blog in Navbar) */}
        {currentPage === 'blog' && (
          <div className="w-full">
            {/* Return-to-Home Top Navigation Bar */}
            <div className="w-full bg-[#EDE3D8]/35 border-b border-[#D8C8B8]/50 py-3.5 px-6 sm:px-10">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8D7163] hover:text-[#292724] font-medium transition-colors cursor-pointer group py-1"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>Return to Home</span>
                </button>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#8D7163]">
                  <span className="hidden sm:inline">Heartful Films</span>
                  <span className="hidden sm:inline">/</span>
                  <span className="font-semibold text-[#292724]">Journal & Stories</span>
                </div>
              </div>
            </div>

            {/* Editorial Blog Section */}
            <BlogSection onInquireStory={(storyName) => scrollToContact(storyName)} />

            {/* Inquire Banner at Bottom of Blog Page */}
            <div className="w-full bg-[#EDE3D8]/30 border-t border-[#D8C8B8]/50 py-16 px-6 text-center">
              <div className="max-w-xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold block mb-2">
                  Unscripted & Heartfelt Storytelling
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl uppercase text-[#292724] font-light mb-3">
                  Have a Story to Tell?
                </h3>
                <p className="font-editorial italic text-base text-[#8D7163] mb-6">
                  Let's collaborate to capture the stillness, laughter, and celebration of your special day.
                </p>
                <button
                  onClick={() => scrollToContact()}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#292724] text-white hover:bg-[#8D7163] rounded-full text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <span>Inquire & Reserve Calendar</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Animated Back to Top Glass Pill */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-white/80 hover:bg-white text-[#292724] hover:text-[#8D7163] backdrop-blur-md border border-white/90 shadow-[0_8px_24px_rgba(41,39,36,0.12)] hover:shadow-[0_12px_32px_rgba(41,39,36,0.18)] transition-all cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
