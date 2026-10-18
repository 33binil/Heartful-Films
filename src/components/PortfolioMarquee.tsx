import React, { useState, useRef } from 'react';
import { Pause, Play, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PortfolioCollageSet, PortfolioCollageImage } from '../data/portfolioCollageData';
import { PortfolioCollage } from './PortfolioCollage';

interface PortfolioMarqueeProps {
  sets: PortfolioCollageSet[];
  onImageClick?: (image: PortfolioCollageImage) => void;
}

export const PortfolioMarquee: React.FC<PortfolioMarqueeProps> = ({
  sets,
  onImageClick
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isSlowSpeed, setIsSlowSpeed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Manual nudge functions for users who want to jump forward or backward
  const handleNudge = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 600;
    scrollContainerRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      
      {/* Editorial Control Toolbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-6 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left Side Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs text-[#8D7163]">
          <span className="w-2 h-2 rounded-full bg-[#8D7163] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Continuous Editorial Feed · {sets.length} Collage Collections
          </span>
        </div>

        {/* Right Side Interactive Marquee Controls */}
        <div className="flex items-center gap-3">
          {/* Pause / Play Toggle */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-[#292724] text-[10px] uppercase tracking-[0.2em] font-medium border border-white/80 shadow-xs transition-all cursor-pointer"
            aria-label={isPaused ? "Resume marquee scroll" : "Pause marquee scroll"}
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-[#8D7163] fill-current" />
                <span>Resume Feed</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-[#8D7163]" />
                <span>Pause Feed</span>
              </>
            )}
          </button>

          {/* Speed Toggle */}
          <button
            onClick={() => setIsSlowSpeed(!isSlowSpeed)}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-[#292724] text-[10px] uppercase tracking-[0.2em] font-medium border border-white/80 shadow-xs transition-all cursor-pointer"
            aria-label="Toggle marquee speed"
          >
            <span>Speed: {isSlowSpeed ? 'Slow' : 'Normal'}</span>
          </button>

          {/* Manual Left/Right Chevrons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleNudge('left')}
              className="w-8 h-8 rounded-full bg-white/70 hover:bg-white text-[#292724] flex items-center justify-center border border-white/80 shadow-xs transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNudge('right')}
              className="w-8 h-8 rounded-full bg-white/70 hover:bg-white text-[#292724] flex items-center justify-center border border-white/80 shadow-xs transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* 
        Marquee Viewport:
        Left and right soft gradient masks to gently fade the entry and exit 
      */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div 
          className={`animate-marquee-portfolio ${
            isSlowSpeed ? 'animate-marquee-slow' : ''
          } ${isPaused ? 'animate-marquee-paused' : ''}`}
        >
          {/* Primary Sequence (1..5) */}
          {sets.map((set, idx) => (
            <PortfolioCollage
              key={`${set.id}-track-1`}
              set={set}
              index={idx}
              onImageClick={onImageClick}
            />
          ))}

          {/* Duplicate Sequence for Seamless Infinite Looping (No gaps or jumps) */}
          {sets.map((set, idx) => (
            <PortfolioCollage
              key={`${set.id}-track-2`}
              set={set}
              index={idx}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>

      {/* Bottom Hint Indicator */}
      <div className="text-center pt-3">
        <span className="text-[10px] text-[#8D7163]/80 uppercase tracking-[0.25em] font-light">
          Hover over any collage to pause · Click photograph to view in high resolution
        </span>
      </div>

    </div>
  );
};
