import React, { useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onBookClick?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onBookClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Booking announcement" 
      className="bg-[#EDE3D8]/80 backdrop-blur-md text-[#292724] border-b border-[#D8C8B8]/50 py-2.5 px-4 transition-all duration-300 relative z-50 shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] tracking-[0.25em] uppercase font-medium">
        <div className="w-6 hidden md:block" />
        
        <div className="flex-1 text-center flex items-center justify-center gap-2 flex-wrap">
          <span className="opacity-90">NOW BOOKING — WEDDINGS, EVENTS & CREATIVE PROJECTS</span>
          <a
            href="#contact"
            onClick={(e) => {
              if (onBookClick) {
                e.preventDefault();
                onBookClick();
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/50 hover:bg-white/80 backdrop-blur-xs border border-white/60 rounded-full transition-all duration-300 text-[10px] tracking-widest text-[#292724] font-semibold ml-2 shadow-xs transform hover:-translate-y-0.5"
          >
            <span>Inquire Now</span>
            <ArrowRight className="w-3 h-3 text-[#8D7163]" />
          </a>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="text-[#8D7163] hover:text-[#292724] p-1.5 hover:bg-white/40 rounded-full transition-all ml-2 focus:outline-none focus:ring-1 focus:ring-[#8D7163]"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
