import React from 'react';
import { Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { FloralEmblem } from './FloralIcons';

interface FooterProps {
  onNavigate?: (page: 'home' | 'blog', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e: React.MouseEvent, target: 'home' | 'blog', sectionId?: string) => {
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
        scrollToTop();
      }
    }
  };

  return (
    <footer className="w-full bg-[#201e1b] text-[#F8F6F1] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md shadow-xs">
                <FloralEmblem className="w-5 h-5 text-[#D8C8B8]" />
              </div>
              <span className="font-editorial text-2xl lg:text-3xl tracking-[0.16em] uppercase font-light text-white">
                Heartful Films
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#D8C8B8]/80 font-light leading-relaxed max-w-sm mb-6">
              Capturing the moments, emotions, and stories that stay with you forever. Visual storytelling across weddings, live events, brand productions, and dance stages.
            </p>

            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/15 text-xs uppercase tracking-[0.2em] text-[#D8C8B8] hover:text-white transition-all duration-300 shadow-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram: {BRAND_INFO.instagramHandle}</span>
            </a>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-[0.2em] text-[#EDE3D8]/80 font-light">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLink(e, 'home', 'about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Studio
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLink(e, 'home', 'services')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleLink(e, 'home', 'portfolio')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio Stories
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={(e) => handleLink(e, 'blog')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Editorial Blog
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLink(e, 'home', 'contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inquire & Book
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders & Availability (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold block mb-4">
              Studio & Bookings
            </span>
            <div className="space-y-3 text-xs text-[#EDE3D8]/80 font-light">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#8D7163]" />
                <span>{BRAND_INFO.emailPlaceholder}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#8D7163]" />
                <span>{BRAND_INFO.phonePlaceholder}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#8D7163]" />
                <span>{BRAND_INFO.locationPlaceholder}</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8D7163] font-medium block mb-1">
                Booking Status
              </span>
              <p className="text-xs text-[#EDE3D8]/90 font-light leading-relaxed">
                Now accepting calendar reservations for upcoming wedding seasons and commercial productions.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8C8B8]/60 font-light tracking-wider">
          <div>
            © {new Date().getFullYear()} Heartful Films. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={BRAND_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Follow @_heartful___
            </a>
            <span className="text-white/20">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 hover:text-white transition-all focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
