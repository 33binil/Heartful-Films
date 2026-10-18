import React from 'react';
import { ArrowUpRight, Camera } from 'lucide-react';
import { PortfolioCollageSet, PortfolioCollageImage } from '../data/portfolioCollageData';

interface PortfolioCollageProps {
  set: PortfolioCollageSet;
  index: number;
  onImageClick?: (image: PortfolioCollageImage) => void;
}

export const PortfolioCollage: React.FC<PortfolioCollageProps> = ({
  set,
  onImageClick
}) => {
  const [imgLandscape, imgVertical, imgArch] = set.images;

  return (
    <div className="flex flex-col shrink-0 w-[740px] sm:w-[840px] md:w-[920px] lg:w-[1060px] px-3 sm:px-5 md:px-6 lg:px-24">
      
      {/* 
        Artistic 3-Photo Composition:
        Compact attached layout on mobile and tablet; spacious gap layout on desktop
      */}
      <div 
        className="relative w-full h-[430px] sm:h-[470px] md:h-[500px] bg-transparent select-none group/canvas"
      >
        {/* 
          1. Photo 1 (Top-Left / Landscape Photo):
          Attached behind vertical on mobile/tablet; spaced out on desktop
        */}
        <div
          onClick={() => onImageClick && onImageClick(imgLandscape)}
          className="absolute top-[8%] left-[6%] w-[54%] h-[54%] lg:top-[12%] lg:left-[2%] lg:w-[40%] lg:h-[56%] bg-[#C9BCAD]/20 border-2 border-white shadow-[0_10px_28px_rgba(41,39,36,0.14)] rounded-xs overflow-hidden cursor-pointer z-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_16px_38px_rgba(41,39,36,0.22)] group"
          title={imgLandscape.caption || imgLandscape.alt}
        >
          <img
            src={imgLandscape.src}
            alt={imgLandscape.alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.98] contrast-[1.02]"
            style={{ objectPosition: imgLandscape.objectPosition || 'center center' }}
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white backdrop-blur-[1px]">
            {imgLandscape.caption && (
              <span className="font-editorial text-xs tracking-wide italic font-light drop-shadow-xs">
                {imgLandscape.caption}
              </span>
            )}
            <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#EDE3D8] font-medium mt-0.5">
              <Camera className="w-2.5 h-2.5" />
              <span>Inspect</span>
            </div>
          </div>
        </div>

        {/* 
          2. Photo 2 (Center / Tall Vertical Centerpiece):
          Overlapping landscape on mobile/tablet; spaced with clear gap on desktop
        */}
        <div
          onClick={() => onImageClick && onImageClick(imgVertical)}
          className="absolute top-[12%] left-[33%] w-[38%] h-[80%] lg:top-[6%] lg:left-[47%] lg:w-[26%] lg:h-[84%] bg-[#C9BCAD]/20 border-2 border-white shadow-[0_18px_45px_rgba(41,39,36,0.24)] rounded-xs overflow-hidden cursor-pointer z-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(41,39,36,0.34)] group"
          title={imgVertical.caption || imgVertical.alt}
        >
          <img
            src={imgVertical.src}
            alt={imgVertical.alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.98] contrast-[1.02]"
            style={{ objectPosition: imgVertical.objectPosition || 'center center' }}
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white backdrop-blur-[1px]">
            {imgVertical.caption && (
              <span className="font-editorial text-sm tracking-wide italic font-light drop-shadow-xs">
                {imgVertical.caption}
              </span>
            )}
            <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#EDE3D8] font-medium mt-0.5">
              <Camera className="w-2.5 h-2.5" />
              <span>Inspect</span>
            </div>
          </div>
        </div>

        {/* 
          3. Photo 3 (Right / Foreground Arched Silhouette):
          Attached beside vertical on mobile/tablet; spaced with clear gap on desktop
        */}
        <div
          onClick={() => onImageClick && onImageClick(imgArch)}
          className="absolute bottom-[8%] left-[69%] w-[25%] h-[68%] lg:bottom-[8%] lg:left-[78%] lg:w-[20%] lg:h-[72%] bg-[#C9BCAD]/20 border-2 border-white shadow-[0_12px_32px_rgba(41,39,36,0.16)] rounded-t-[70px] sm:rounded-t-[90px] md:rounded-t-[110px] rounded-b-xs overflow-hidden cursor-pointer z-5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_18px_42px_rgba(41,39,36,0.24)] group"
          title={imgArch.caption || imgArch.alt}
        >
          <img
            src={imgArch.src}
            alt={imgArch.alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.98] contrast-[1.02]"
            style={{ objectPosition: imgArch.objectPosition || 'center center' }}
          />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white backdrop-blur-[1px]">
            {imgArch.caption && (
              <span className="font-editorial text-xs tracking-wide italic font-light drop-shadow-xs">
                {imgArch.caption}
              </span>
            )}
            <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#EDE3D8] font-medium mt-0.5">
              <Camera className="w-2.5 h-2.5" />
              <span>Inspect</span>
            </div>
          </div>
        </div>

      </div>

      {/* 
        Category Label & Instagram Link Row:
        Left side: The portfolio category name with elegant letter spacing
        Right side: Minimal text link "View on Instagram ↗"
      */}
      <div className="flex items-center justify-between pt-4 pb-2 px-1 border-t border-[#8D7163]/25 mt-3">
        <div className="flex items-baseline gap-3">
          <h3 className="font-editorial text-base sm:text-lg md:text-xl tracking-[0.25em] uppercase text-[#292724] font-medium">
            {set.category}
          </h3>
          <span className="hidden sm:inline-block text-[10px] text-[#8D7163] tracking-[0.2em] uppercase font-light">
            — A Curated Story
          </span>
        </div>

        <a
          href={set.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#8D7163] hover:text-[#292724] transition-colors tracking-wider font-light group py-1"
          aria-label={`View ${set.category} collection on Instagram`}
        >
          <span className="border-b border-transparent group-hover:border-[#292724] transition-colors pb-0.5">
            View on Instagram
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

    </div>
  );
};
