import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Camera, Film } from 'lucide-react';
import { PortfolioItem } from '../data/content';

interface MediaLightboxProps {
  item: PortfolioItem;
  allItems: PortfolioItem[];
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  item,
  allItems,
  onClose,
  onNavigate
}) => {
  const [isPlaying, setIsPlaying] = useState(item.type === 'video');
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);

  const currentIndex = allItems.findIndex((p) => p.id === item.id);
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : allItems[allItems.length - 1];
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : allItems[0];

  useEffect(() => {
    setIsPlaying(item.type === 'video');
    setProgress(25);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(prevItem);
      if (e.key === 'ArrowRight') onNavigate(nextItem);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNavigate, prevItem, nextItem]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#151413]/90 backdrop-blur-xl text-[#F8F6F1] animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div 
        className="relative w-full h-full max-w-7xl mx-auto flex flex-col justify-between p-4 sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Translucent Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 px-2">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.25em] text-[#D8C8B8]">
              {item.category}
            </span>
            <span className="text-white/30">/</span>
            <span className="text-xs text-white/70 font-light">
              {currentIndex + 1} of {allItems.length}
            </span>
            {item.type === 'video' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest bg-white/15 backdrop-blur-md border border-white/20 text-[#EDE3D8]">
                <Film className="w-2.5 h-2.5" />
                <span>Cinematic Reel</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 rounded-full transition-all duration-200 focus:outline-none"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Media Presentation */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Navigation Arrows in Frosted Glass */}
          <button
            onClick={() => onNavigate(prevItem)}
            className="absolute left-2 sm:left-4 z-20 p-3.5 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md border border-white/15 transition-all duration-300 transform hover:scale-105 shadow-xl focus:outline-none"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => onNavigate(nextItem)}
            className="absolute right-2 sm:right-4 z-20 p-3.5 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md border border-white/15 transition-all duration-300 transform hover:scale-105 shadow-xl focus:outline-none"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Media Frame */}
          <div className="relative max-w-5xl max-h-[68vh] w-full flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* If video: custom atmospheric video player HUD simulation with Glass Dock */}
            {item.type === 'video' && (
              <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none rounded-xl">
                <div className="flex items-center justify-between text-xs text-white/90 drop-shadow-md">
                  <span className="tracking-widest font-mono text-[11px] px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15">4K CINEMA MASTER · {item.duration || '3:45'}</span>
                  <span className="tracking-widest uppercase text-[10px] bg-red-600/80 backdrop-blur-md px-2.5 py-0.5 rounded-full font-bold border border-red-500/30">REC · 24FPS</span>
                </div>

                {/* Center Glass Play/Pause button */}
                <div className="flex-1 flex items-center justify-center pointer-events-auto">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/40 border border-white/50 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 transform hover:scale-110 shadow-2xl"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                  </button>
                </div>

                {/* Bottom Timeline Controls in Frosted Glass Dock */}
                <div className="pointer-events-auto flex flex-col gap-2 bg-black/60 backdrop-blur-md p-3.5 border border-white/15 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-white/70">01:14</span>
                    <div 
                      className="flex-1 h-1.5 bg-white/20 rounded-full cursor-pointer relative"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = ((e.clientX - rect.left) / rect.width) * 100;
                        setProgress(Math.max(0, Math.min(100, percent)));
                      }}
                    >
                      <div 
                        className="h-full bg-[#EDE3D8] rounded-full relative" 
                        style={{ width: `${progress}%` }}
                      >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-white/70">{item.duration || '03:45'}</span>
                    
                    <button 
                      onClick={() => setIsMuted(!isMuted)} 
                      className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-[10px] text-white/60 tracking-wider">
                    {isPlaying ? "Playing Heartful Films cinema edit preview" : "Paused"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Details Footer with Glass Accents */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-4 items-end px-2">
          <div className="md:col-span-8">
            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-1">
              {item.title}
            </h3>
            <p className="font-editorial italic text-sm sm:text-base text-[#D8C8B8] mb-2">
              "{item.tagline}"
            </p>
            <p className="text-xs text-white/70 max-w-2xl font-light line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end justify-center text-xs text-white/60 gap-1.5 font-mono text-[11px]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#EDE3D8]">
              <Camera className="w-3.5 h-3.5" />
              <span>{item.cameraSpecs}</span>
            </div>
            <span>{item.location} · {item.year}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
