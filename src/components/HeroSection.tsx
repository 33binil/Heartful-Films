import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import heroVideoDesktop from '../assets/video/HeartFul-Films-Optimized-v1.mp4';
import heroVideoMobile from '../assets/video/HeartFul-Films-mobile-Optimized-v1.mp4';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onCreateClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCreateClick
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const source = isMobile ? heroVideoMobile : heroVideoDesktop;
    if (video.src !== source) {
      const currentTime = video.currentTime;
      video.src = source;
      video.load();
      const playAfterLoad = () => {
        video.currentTime = currentTime;
        video.play().catch(() => {
          // Ignore autoplay errors (e.g. policy changes) but keep video loaded
        });
      };
      video.addEventListener('loadedmetadata', playAfterLoad, { once: true });
      return () => {
        video.removeEventListener('loadedmetadata', playAfterLoad);
      };
    }
  }, [isMobile]);
  return (
    <section className="relative w-full h-screen min-h-[600px] -mt-[76px] pt-[76px] overflow-hidden flex items-center justify-center bg-[#292724]">
      {/* High-Fidelity Cinematic Background — Local Auto-playing Looping Video */}
      <div className="absolute inset-0 overflow-hidden bg-[#292724]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            ref={videoRef}
            src={isMobile ? heroVideoMobile : heroVideoDesktop}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            aria-label="Heartful Films cinematic showreel"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.92] contrast-[1.02]"
            onError={(e) => {
              const video = e.currentTarget;
              if (video.src !== heroVideoDesktop) {
                video.src = heroVideoDesktop;
                video.load();
                video.play().catch(() => {});
              }
            }}
          />
        </motion.div>
      </div>

      {/* Measured Editorial Scrim Overlays */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-radial from-transparent via-[#292724]/20 to-[#292724]/50 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-gradient-to-t from-[#1d1b19]/80 via-transparent to-[#1d1b19]/35 pointer-events-none" 
      />

      {/* Hero Typography & Glass Elements with Staggered Entrance */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        
        {/* Floating Glassmorphic Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.15)] mb-6"
        >
          <Sparkles className="w-3 h-3 text-[#EDE3D8]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#EDE3D8] font-medium">
            EVERY STORY DESERVES TO BE FELT
          </span>
        </motion.div>

        {/* Central Display Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase font-light text-white mb-4 drop-shadow-md leading-tight text-balance"
        >
          Heartful Films
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial italic text-lg sm:text-xl md:text-2xl text-[#F8F6F1]/95 max-w-xl mx-auto font-light tracking-wide mb-10 drop-shadow-xs text-balance"
        >
          We capture the moments, emotions, and stories that stay with you forever.
        </motion.p>

        {/* Translucent Glass CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              if (onExploreClick) {
                e.preventDefault();
                onExploreClick();
              }
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/85 hover:bg-white text-[#292724] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 border border-white/80 backdrop-blur-md text-center shadow-[0_8px_25px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)] transform hover:-translate-y-0.5 active:translate-y-0 rounded-xs"
          >
            EXPLORE OUR WORK
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              if (onCreateClick) {
                e.preventDefault();
                onCreateClick();
              }
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 border border-white/40 backdrop-blur-md text-center shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:border-white/60 transform hover:-translate-y-0.5 active:translate-y-0 rounded-xs"
          >
            LET'S CREATE TOGETHER
          </a>
        </motion.div>
      </div>

      {/* Down indicator with glass disc */}
      <motion.a 
        href="#intro" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all flex flex-col items-center gap-2 focus:outline-none group cursor-pointer"
        aria-label="Scroll to introduction"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-light opacity-80 group-hover:opacity-100">Scroll</span>
        <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xs group-hover:bg-white/25 transition-all">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white" />
        </div>
      </motion.a>
    </section>
  );
};
