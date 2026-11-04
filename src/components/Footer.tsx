import React, { useState } from 'react';
import { Instagram, ArrowUp, Mail, Phone, MapPin, Lock, ShieldCheck, X, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import logoImage from '../assets/images/logo.jpg';

interface FooterProps {
  onNavigate?: (page: 'home' | 'blog', sectionId?: string) => void;
  onLockWebsite?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onLockWebsite }) => {
  const [showAdminLockModal, setShowAdminLockModal] = useState(false);
  const [adminPasskey, setAdminPasskey] = useState('');
  const [adminError, setAdminError] = useState('');
  const [isLocking, setIsLocking] = useState(false);

  const handleAdminLock = async (e: React.FormEvent) => {
    e.preventDefault();
    const validPasskeys = ['heartful@admin2026', 'admin2026', 'heartful'];
    if (!validPasskeys.includes(adminPasskey.trim())) {
      setAdminError('Invalid security passkey.');
      return;
    }

    setIsLocking(true);
    try {
      await fetch('/api/payment-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locked: true }),
      }).catch(() => {});
      localStorage.setItem('heartful_payment_locked', 'true');
      setShowAdminLockModal(false);
      if (onLockWebsite) {
        onLockWebsite();
      } else {
        window.location.reload();
      }
    } finally {
      setIsLocking(false);
    }
  };
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
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md shadow-xs overflow-hidden">
                <img
                  src={logoImage}
                  alt="Heartful Films logo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
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
                <a href={`tel:${BRAND_INFO.phonePlaceholder}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phonePlaceholder}
                </a>
                <span className="text-[#8D7163]">·</span>
                <a href={`tel:${BRAND_INFO.phonePlaceholder2}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phonePlaceholder2}
                </a>
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
            <button
              type="button"
              onClick={() => {
                setShowAdminLockModal(true);
                setAdminError('');
                setAdminPasskey('');
              }}
              className="inline-flex items-center gap-1.5 opacity-40 hover:opacity-100 hover:text-[#C5A880] transition-all cursor-pointer text-[10px] tracking-widest uppercase"
              title="Admin Payment Restriction Controls"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Lock</span>
            </button>
            <a 
              href={BRAND_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Follow @_heartful___
            </a>
          </div>
        </div>

      </div>

      {/* Admin Lock Confirmation Modal */}
      {showAdminLockModal && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setShowAdminLockModal(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[#161514] border border-[#3E3934] rounded-2xl p-6 sm:p-7 shadow-2xl text-left text-[#F8F6F1]"
          >
            <button
              type="button"
              onClick={() => setShowAdminLockModal(false)}
              className="absolute top-4 right-4 p-1.5 text-[#8F877E] hover:text-white transition-colors rounded-lg cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-xl text-[#F8F6F1]">Lock Website</h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8F877E]">
                  Payment Restriction Control
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A89F95] mb-4 leading-relaxed">
              Enter your security passkey to re-enable the <strong>Payment Pending</strong> full-screen overlay for all visitors.
            </p>

            <form onSubmit={handleAdminLock} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-[#7A736B] mb-1.5">
                  Security Passkey
                </label>
                <input
                  type="password"
                  value={adminPasskey}
                  onChange={(e) => {
                    setAdminPasskey(e.target.value);
                    if (adminError) setAdminError('');
                  }}
                  placeholder="Enter passkey..."
                  autoFocus
                  className="w-full bg-[#0E0D0C] border border-[#3E3934] focus:border-[#C5A880] rounded-xl px-4 py-2.5 text-sm text-[#F8F6F1] outline-none transition-colors"
                />
                {adminError && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{adminError}</span>
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  disabled={isLocking || !adminPasskey.trim()}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs uppercase tracking-[0.18em] font-medium transition-all cursor-pointer shadow-md"
                >
                  {isLocking ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>Activate Payment Lock</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdminLockModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#23201D] hover:bg-[#2F2B27] text-[#C8BFB5] text-xs uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};
