import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const speed = 55; // pixels per second
    let frame = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;

      const half = el.scrollWidth / 2;
      if (half > 0) {
        let next = el.scrollLeft + (speed * dt) / 1000;
        if (next >= half) next -= half;
        if (next <= 0) next += half;
        el.scrollLeft = next;
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [sets.length]);

  // Manual nudge functions for users who want to jump forward or backward
  const handleNudge = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 600;
    scrollContainerRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'auto'
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
        className="w-full overflow-x-auto no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex w-max">
          {/* Primary Sequence */}
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
          Click any photograph to view in high resolution
        </span>
      </div>

    </div>
  );
};
