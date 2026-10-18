import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Film, Play, LayoutGrid, Film as FilmIcon } from 'lucide-react';
import { PORTFOLIO_DATA, PortfolioItem } from '../data/content';
import { PORTFOLIO_COLLAGE_SETS, PortfolioCollageImage } from '../data/portfolioCollageData';
import { PortfolioMarquee } from './PortfolioMarquee';
import { MediaLightbox } from './MediaLightbox';

type CategoryFilter = 'All' | 'Weddings' | 'Events' | 'Ads & Brands' | 'Dance Programs';

export const PortfolioSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'marquee' | 'grid'>('marquee');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const categories: CategoryFilter[] = ['All', 'Weddings', 'Events', 'Ads & Brands', 'Dance Programs'];

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  // When an image in any collage is clicked, open the high-res MediaLightbox
  const handleCollageImageClick = (collageImg: PortfolioCollageImage) => {
    const item: PortfolioItem = {
      id: collageImg.id,
      title: collageImg.caption || collageImg.alt,
      category: 'Weddings',
      image: collageImg.src,
      type: 'photo',
      aspect: 'landscape',
      location: 'Heartful Films Collection',
      year: '2026',
      tagline: collageImg.caption || 'Captured with natural light and genuine emotion.',
      description: 'An authentic moment preserved through the editorial lens of Heartful Films.',
      cameraSpecs: 'Leica SL2-S · Summilux-M 35mm f/1.4 ASPH · Natural Ambient Light'
    };
    setActiveLightboxItem(item);
  };

  return (
    <section id="portfolio" className="w-full bg-[#EDE3D8]/35 py-24 md:py-36 border-t border-[#D8C8B8]/50 overflow-hidden">
      
      {/* Section Header with Motion Reveal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold">
              Selected Works & Visual Poetry
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#292724] font-normal tracking-wide uppercase mb-4">
            A Collection of Stories
          </h2>
          <div className="w-12 h-px bg-[#8D7163]/40 mx-auto mb-4" />
          <p className="font-editorial italic text-lg sm:text-xl text-[#8D7163]">
            Real moments. Honest emotions. Asymmetrical visual narratives worth revisiting.
          </p>
        </motion.div>

        {/* View Mode Switcher Pill */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="p-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xs flex items-center gap-1">
            <button
              onClick={() => setActiveView('marquee')}
              className={`px-4 sm:px-5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                activeView === 'marquee'
                  ? 'bg-[#292724] text-white shadow-xs'
                  : 'text-[#292724] hover:text-[#8D7163]'
              }`}
            >
              <FilmIcon className="w-3.5 h-3.5" />
              <span>Editorial Marquee (5 Sets)</span>
            </button>
            <button
              onClick={() => setActiveView('grid')}
              className={`px-4 sm:px-5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                activeView === 'grid'
                  ? 'bg-[#292724] text-white shadow-xs'
                  : 'text-[#292724] hover:text-[#8D7163]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Archive Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: Flagship Asymmetrical Collage Horizontal Marquee (Exact Reference Design) */}
      {activeView === 'marquee' && (
        <motion.div
          key="marquee-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <PortfolioMarquee
            sets={PORTFOLIO_COLLAGE_SETS}
            onImageClick={handleCollageImageClick}
          />
        </motion.div>
      )}

      {/* VIEW 2: Complementary Archive Grid with Category Filter & Video Players */}
      {activeView === 'grid' && (
        <motion.div
          key="grid-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 sm:px-6 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                    isActive ? 'text-[#F8F6F1]' : 'text-[#292724] hover:text-[#8D7163]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioPill"
                      className="absolute inset-0 bg-[#292724] rounded-full shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/60 hover:bg-white border border-white/80 rounded-full shadow-xs -z-20 transition-all" />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group relative cursor-pointer bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(41,39,36,0.06)] hover:shadow-[0_20px_48px_rgba(41,39,36,0.14)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative w-full aspect-4/3 overflow-hidden bg-[#EDE3D8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {item.type === 'video' && (
                      <div className="absolute top-4 right-4 z-10 flex items-center justify-center">
                        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-75" />
                        <div className="relative w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/40 group-hover:scale-110 shadow-lg transition-all duration-300">
                          <Play className="w-4 h-4 ml-0.5 fill-current" />
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b19]/90 via-[#1d1b19]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white backdrop-blur-[2px]">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#EDE3D8] mb-1">
                        {item.category} · {item.year}
                      </span>
                      <h3 className="font-editorial text-2xl uppercase tracking-wide font-light mb-1">
                        {item.title}
                      </h3>
                      <p className="font-editorial italic text-xs text-[#D8C8B8] mb-3 line-clamp-1">
                        "{item.tagline}"
                      </p>
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-white/90">
                        {item.type === 'video' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xs">
                            <Film className="w-3.5 h-3.5" />
                            <span>Watch Film ({item.duration})</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xs">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Photograph</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex items-center justify-between border-t border-[#EDE3D8]/80 bg-white/60 backdrop-blur-xs flex-1 min-h-[74px]">
                    <div className="flex flex-col min-w-0 pr-3">
                      <h4 className="font-editorial text-lg text-[#292724] font-medium tracking-tight truncate group-hover:text-[#8D7163] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-[#8D7163] font-light truncate">
                        {item.location}
                      </span>
                    </div>
                    <div className="px-2.5 py-0.5 rounded-full bg-[#EDE3D8]/60 border border-white/60 text-[9px] uppercase tracking-[0.2em] text-[#8D7163] font-semibold shrink-0">
                      {item.type === 'video' ? 'Film' : 'Stills'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <MediaLightbox
          item={activeLightboxItem}
          allItems={filteredItems}
          onClose={() => setActiveLightboxItem(null)}
          onNavigate={(nextItem) => setActiveLightboxItem(nextItem)}
        />
      )}
    </section>
  );
};
