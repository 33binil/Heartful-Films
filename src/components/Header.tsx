import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VerticalRoseEmblem } from './FloralIcons';
import logoImage from '../assets/images/logo.jpg';

interface HeaderProps {
  currentPage?: 'home' | 'blog';
  onNavigate?: (page: 'home' | 'blog', sectionId?: string) => void;
  onInquireClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage = 'home',
  onNavigate,
  onInquireClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, target: 'home' | 'blog', sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target, sectionId);
    } else {
      if (target === 'blog') {
        window.location.hash = '#blog';
      } else if (sectionId) {
        window.location.hash = `#${sectionId}`;
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'About', page: 'home' as const, sectionId: 'about' },
    { label: 'Services', page: 'home' as const, sectionId: 'services' },
    { label: 'Portfolio', page: 'home' as const, sectionId: 'portfolio' },
    { label: 'Blog', page: 'blog' as const },
    { label: 'Contact', page: 'home' as const, sectionId: 'contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(41,39,36,0.04)] border-b border-white/50' 
          : 'bg-white/90 backdrop-blur-sm border-b border-[#EDE3D8]/70'
      }`}
    >
      {/* Main Navbar Bar (Height 76px) */}
      <div className="relative w-full h-[76px]">
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-10 flex items-center justify-between">
          
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-end pr-14 lg:pr-20">
            <a 
              href="#about"
              onClick={(e) => handleLinkClick(e, 'home', 'about')}
              className="text-[11px] lg:text-xs uppercase tracking-[0.28em] text-[#292724]/85 hover:text-[#292724] px-3.5 py-1.5 rounded-full hover:bg-black/5 transition-all duration-200 whitespace-nowrap font-medium"
            >
              About
            </a>
            <a 
              href="#services"
              onClick={(e) => handleLinkClick(e, 'home', 'services')}
              className="text-[11px] lg:text-xs uppercase tracking-[0.28em] text-[#292724]/85 hover:text-[#292724] px-3.5 py-1.5 rounded-full hover:bg-black/5 transition-all duration-200 whitespace-nowrap font-medium"
            >
              Services
            </a>
          </nav>

          {/* Spacer for Center Round Badge on Desktop */}
          <div className="hidden md:block w-44 lg:w-48 shrink-0" />

          {/* Right Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-start pl-14 lg:pl-20">
            <a 
              href="#portfolio"
              onClick={(e) => handleLinkClick(e, 'home', 'portfolio')}
              className="text-[11px] lg:text-xs uppercase tracking-[0.28em] text-[#292724]/85 hover:text-[#292724] px-3.5 py-1.5 rounded-full hover:bg-black/5 transition-all duration-200 whitespace-nowrap font-medium"
            >
              Portfolio
            </a>
            <a 
              href="#blog"
              onClick={(e) => handleLinkClick(e, 'blog')}
              className={`text-[11px] lg:text-xs uppercase tracking-[0.28em] px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap font-medium ${
                currentPage === 'blog'
                  ? 'bg-[#292724] text-white shadow-xs'
                  : 'text-[#292724]/85 hover:text-[#292724] hover:bg-black/5'
              }`}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                if (onInquireClick && currentPage === 'home') {
                  e.preventDefault();
                  onInquireClick();
                } else {
                  handleLinkClick(e, 'home', 'contact');
                }
              }}
              className="text-[11px] lg:text-xs uppercase tracking-[0.28em] text-[#292724]/85 hover:text-[#292724] px-3.5 py-1.5 rounded-full hover:bg-black/5 transition-all duration-200 whitespace-nowrap font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Bar Brand (left) and Toggle (right) */}
          <div className="flex md:hidden w-full items-center justify-between">
            <a 
              href="#"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <img
                src={logoImage}
                alt="Heartful Films logo"
                className="w-9 h-9 rounded-full object-cover border border-[#EDE3D8] shadow-xs"
              />
              <span className="flex flex-col">
                <span className="font-editorial text-2xl tracking-[0.18em] uppercase text-[#292724] font-light leading-tight">
                  Heartful
                </span>
                <span className="text-[9px] tracking-[0.35em] uppercase text-[#8D7163] font-medium -mt-0.5">
                  Films
                </span>
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#292724] hover:text-[#8D7163] rounded-full hover:bg-black/5 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Central Protruding Round Badge with Botanical Rose Illustration & Brand Name */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 pointer-events-auto z-30">
          <motion.div 
            whileHover={{ y: 2, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-44 lg:w-48 h-[118px] bg-white/95 backdrop-blur-md rounded-b-full border-b border-x border-[#EDE3D8] shadow-[0_8px_20px_rgba(41,39,36,0.06)] flex flex-col items-center justify-center pt-2 cursor-pointer group"
          >
            
            {/* Left Concave Transition Fillet */}
            <div className="absolute -left-3.5 top-[75px] w-3.5 h-3.5 overflow-hidden pointer-events-none">
              <svg className="w-3.5 h-3.5 text-white/95" viewBox="0 0 14 14" fill="none">
                <path d="M0 0 H14 V14 A14 14 0 0 1 0 0 Z" fill="currentColor" />
                <path d="M0 0 A14 14 0 0 0 14 14" stroke="#EDE3D8" strokeWidth="1" fill="none" />
              </svg>
            </div>

            {/* Right Concave Transition Fillet */}
            <div className="absolute -right-3.5 top-[75px] w-3.5 h-3.5 overflow-hidden pointer-events-none">
              <svg className="w-3.5 h-3.5 text-white/95" viewBox="0 0 14 14" fill="none">
                <path d="M14 0 H0 V14 A14 14 0 0 0 14 0 Z" fill="currentColor" />
                <path d="M14 0 A14 14 0 0 1 0 14" stroke="#EDE3D8" strokeWidth="1" fill="none" />
              </svg>
            </div>

            {/* Foreground Brand Name on the Round Badge */}
            <a 
              href="#" 
              onClick={(e) => handleLinkClick(e, 'home')}
              className="relative z-10 flex flex-col items-center justify-center text-center focus:outline-none cursor-pointer"
              aria-label="Heartful Films Home"
            >
              <span className="font-editorial text-xl lg:text-[18px] tracking-[0.24em] text-[#292724] uppercase font-light leading-none group-hover:text-[#8D7163] transition-colors mb-2">
                Heartful Films
              </span>
              <img
                src={logoImage}
                alt="Heartful Films logo"
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full object-cover border border-[#EDE3D8] shadow-xs mb-1.5"
              />
            </a>

          </motion.div>
        </div>

      </div>

      {/* Mobile Drawer with Glass Backing and Smooth AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#F8F6F1]/95 backdrop-blur-xl border-b border-[#D8C8B8] px-6 py-8 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={`#${item.sectionId || item.page}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  onClick={(e) => {
                    handleLinkClick(e, item.page, item.sectionId);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-editorial text-2xl tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                    item.page === currentPage && (item.page === 'blog' || !item.sectionId)
                      ? 'text-[#8D7163] font-medium'
                      : 'text-[#292724] hover:text-[#8D7163]'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-[#D8C8B8]/50 flex flex-col items-center gap-4">
                <a
                  href="#contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onInquireClick) onInquireClick();
                  }}
                  className="w-full max-w-xs py-3 px-6 bg-white/70 hover:bg-[#292724] hover:text-white backdrop-blur-md border border-[#292724]/40 text-xs tracking-[0.25em] uppercase font-medium text-center transition-all duration-300 rounded-full shadow-xs"
                >
                  Inquire Now
                </a>
                <a 
                  href="https://www.instagram.com/_heartful___/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs tracking-widest text-[#8D7163] uppercase hover:text-[#292724] transition-colors"
                >
                  Instagram @_heartful___
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
