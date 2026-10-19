import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import type { PortfolioAd } from '../data/portfolioAdsData';

interface PortfolioAdsCarouselProps {
  ads: PortfolioAd[];
  autoPlayInterval?: number;
}

export const PortfolioAdsCarousel: React.FC<PortfolioAdsCarouselProps> = ({
  ads,
  autoPlayInterval = 5000
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [gap, setGap] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [ads.length]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      setViewportWidth(viewport.clientWidth);
      const firstSlide = slideRefs.current[0];
      if (firstSlide) setSlideWidth(firstSlide.offsetWidth);
      if (trackRef.current) {
        const gapValue = parseFloat(window.getComputedStyle(trackRef.current).columnGap);
        setGap(Number.isFinite(gapValue) ? gapValue : 0);
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [ads.length]);

  const goTo = useCallback(
    (index: number) => {
      if (ads.length === 0) return;
      setActiveIndex(((index % ads.length) + ads.length) % ads.length);
    },
    [ads.length]
  );

  useEffect(() => {
    if (ads.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ads.length);
    }, autoPlayInterval);
    return () => window.clearInterval(timer);
  }, [ads.length, autoPlayInterval, activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, ads.length, slideWidth]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) {
      goTo(activeIndex + (delta < 0 ? 1 : -1));
    }
  };

  if (ads.length === 0) return null;

  const trackOffset = (viewportWidth - slideWidth) / 2 - activeIndex * (slideWidth + gap);

  return (
    <div className="relative w-full select-none border-t border-[#D8C8B8]/50 pt-12 sm:pt-16 lg:pt-20 mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <span className="inline-block text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#8D7163] mb-2">
            Commercial &amp; Brand Storytelling
          </span>
          <h3 className="font-display-title text-2xl sm:text-3xl lg:text-4xl text-[#292724]">
            Ads &amp; Commercial Films
          </h3>
        </div>
        <p className="text-sm sm:text-base text-[#6B5D52] max-w-md">
          Brand campaigns and commercial films, directed and filmed by Heartful Films.
        </p>
      </div>

      <div
        ref={viewportRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 items-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{ transform: `translate3d(${trackOffset}px, 0, 0)` }}
        >
          {ads.map((ad, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={ad.id}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className={`shrink-0 w-[78%] sm:w-[64%] lg:w-[56%] transition-[opacity,transform] duration-700 ease-out ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.96]'
                }`}
                onClick={() => {
                  if (!isActive) goTo(index);
                }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#292724] shadow-[0_18px_50px_-24px_rgba(41,39,36,0.55)]">
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    src={ad.videoUrl}
                    poster={ad.posterUrl}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={ad.alt ?? ad.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 bg-[#292724] transition-opacity duration-700 ${
                      isActive ? 'opacity-0' : 'opacity-45'
                    }`}
                  />

                  {ad.instagramUrl && (
                    <a
                      href={ad.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${ad.title} on Instagram`}
                      className={`absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-[#292724] transition-opacity duration-500 hover:bg-white ${
                        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div
                  className={`mt-4 px-1 transition-all duration-700 ${
                    isActive ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  {ad.brand && (
                    <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8D7163] mb-1">
                      {ad.brand}
                    </p>
                  )}
                  <h4 className="font-editorial text-lg sm:text-xl lg:text-2xl text-[#292724]">
                    {ad.title}
                  </h4>
                  {ad.description && (
                    <p className="mt-1 text-sm text-[#6B5D52] max-w-xl">{ad.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous commercial film"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D8C8B8] text-[#292724] hover:bg-[#EDE3D8] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {ads.map((ad, index) => (
            <button
              key={`${ad.id}-dot`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${ad.title}`}
              aria-current={index === activeIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-[#8D7163]' : 'w-1.5 bg-[#D8C8B8]'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next commercial film"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D8C8B8] text-[#292724] hover:bg-[#EDE3D8] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
