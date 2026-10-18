import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AnnouncementBarProps {
  onBookClick?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onBookClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isVisible]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVisible(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="announcement-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8 bg-[#292724]/45 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Booking announcement"
          onClick={() => setIsVisible(false)}
        >
          <motion.aside
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#F8F6F1] border border-[#D8C8B8]/70 rounded-2xl shadow-[0_24px_60px_rgba(41,39,36,0.28)] px-7 sm:px-10 py-10 sm:py-12 text-center"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-[#8D7163] hover:text-[#292724] p-2 hover:bg-[#EDE3D8]/70 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#8D7163]"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-semibold text-[#8D7163] bg-[#EDE3D8]/70 border border-[#D8C8B8]/60 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Announcement</span>
            </span>

            <h2 className="font-editorial text-2xl sm:text-3xl uppercase text-[#292724] font-light leading-snug mb-4">
              Now Booking
            </h2>

            <p className="text-[11px] tracking-[0.25em] uppercase text-[#8D7163] font-medium mb-7">
              Weddings, Events &amp; Creative Projects
            </p>

            <p className="font-editorial italic text-base text-[#292724]/75 mb-8 max-w-sm mx-auto">
              Let's collaborate to capture the stillness, laughter, and celebration of your special day.
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsVisible(false);
                onBookClick?.();
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#292724] text-white hover:bg-[#8D7163] rounded-full text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-sm cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
