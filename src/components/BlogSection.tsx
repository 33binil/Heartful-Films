import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { BlogModal } from './BlogModal';

interface BlogSectionProps {
  onInquireStory?: (storyName: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onInquireStory }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const index = Math.round(progress * (BLOG_POSTS.length - 1));
    setActiveSlide(Math.min(BLOG_POSTS.length - 1, Math.max(0, index)));
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      setActiveSlide(index);
    }
  };

  const scrollPrev = () => {
    scrollToIndex(Math.max(0, activeSlide - 1));
  };

  const scrollNext = () => {
    scrollToIndex(Math.min(BLOG_POSTS.length - 1, activeSlide + 1));
  };

  return (
    <section id="blog" className="w-full bg-[#F8F6F1] py-24 md:py-36 border-t border-[#D8C8B8]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Centered Quote matching Screenshot with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-block p-4 sm:px-8 sm:py-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_4px_20px_rgba(41,39,36,0.04)]">
            <p className="font-editorial italic text-base sm:text-lg text-[#8D7163] tracking-wide mb-1">
              "Photography is a love affair with life."
            </p>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D7163]/70 font-light">
              — Burk Uzzle
            </span>
          </div>
        </motion.div>

        {/* Dual Editorial Header with Motion Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#D8C8B8]/60">
          
          {/* Left Large Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xs mb-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold">
                Editorial Stories & Journals
              </span>
            </div>
            <h2 className="font-editorial text-5xl sm:text-6xl lg:text-7xl uppercase text-[#292724] font-light leading-[0.95] tracking-tight">
              READ<br />
              OUR BLOG
            </h2>
          </motion.div>

          {/* Right Poetic Quote & Translucent Glass Slider Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col md:items-end justify-between gap-6"
          >
            <div className="md:text-right max-w-sm">
              <p className="font-editorial italic text-base sm:text-lg text-[#292724]/80 leading-relaxed mb-1">
                "Your photography is a record of your living, for anyone who really sees."
              </p>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D7163] font-light block">
                — Paul Strand
              </span>
            </div>

            {/* Slider Arrow Buttons in Frosted Glass with Hover Motion */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                disabled={activeSlide === 0}
                className="w-11 h-11 rounded-full border border-white/80 hover:border-white bg-white/70 hover:bg-white text-[#292724] flex items-center justify-center backdrop-blur-md transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                aria-label="Previous story slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={activeSlide === BLOG_POSTS.length - 1}
                className="w-11 h-11 rounded-full border border-white/80 hover:border-white bg-white/70 hover:bg-white text-[#292724] flex items-center justify-center backdrop-blur-md transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                aria-label="Next story slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Horizontal Blog Carousel with Motion Hover */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start flex flex-col group cursor-pointer bg-white/60 backdrop-blur-xs hover:bg-white/90 p-4 rounded-2xl border border-white/80 hover:border-white shadow-[0_8px_30px_rgba(41,39,36,0.05)] hover:shadow-[0_20px_48px_rgba(41,39,36,0.12)] transition-shadow duration-500"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image Frame with Glass Category Tag */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-[#EDE3D8] border border-white/70 mb-5 shadow-xs">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/60 text-[#292724] text-[9px] uppercase tracking-widest font-semibold shadow-xs">
                  {post.category}
                </div>
              </div>

              {/* Title: Italic Serif */}
              <h3 className="font-editorial italic text-2xl sm:text-[26px] text-[#292724] font-normal tracking-wide group-hover:text-[#8D7163] transition-colors mb-1.5 px-1">
                {post.coupleNames}
              </h3>

              {/* Subtitle */}
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#8D7163] font-medium mb-3 line-clamp-1 px-1">
                {post.subtitle}
              </h4>

              {/* Excerpt */}
              <p className="text-xs sm:text-[13px] text-[#292724]/75 font-light leading-relaxed line-clamp-3 mb-4 px-1">
                {post.excerpt}
              </p>

              {/* READ MORE Link */}
              <div className="mt-auto pt-2 px-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] font-medium text-[#292724] group-hover:text-[#8D7163] border-b border-[#292724]/40 group-hover:border-[#8D7163] pb-0.5 transition-all">
                  <span>READ MORE</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {BLOG_POSTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                activeSlide === idx 
                  ? 'w-8 bg-[#292724]' 
                  : 'w-2 bg-[#D8C8B8]/80 hover:bg-[#8D7163]'
              }`}
              aria-label={`Go to story slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Full Story Modal */}
      {selectedPost && (
        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onInquire={(storyName) => {
            if (onInquireStory) {
              onInquireStory(`Inquiry inspired by ${storyName}`);
            }
          }}
        />
      )}
    </section>
  );
};
