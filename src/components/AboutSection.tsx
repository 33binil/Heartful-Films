import React from 'react';
import { motion } from 'motion/react';
import { BotanicalFlourish } from './FloralIcons';
import bouquetImage from '../assets/images/about_bouquet_detail_1792326982071.jpg';
import brideImage from '../assets/images/about_editorial_bride_1792326982445.jpg';

interface AboutSectionProps {
  onLearnMoreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="about" className="relative w-full bg-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Text Column (5 cols) with Motion Reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center relative z-10"
          >
            {/* Delicate Vertical Kicker & Line Accent */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8D7163] font-medium">
                Our Story & Philosophy
              </span>
              <div className="w-10 h-px bg-[#D8C8B8]" />
            </div>

            {/* Serif Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#292724] font-light italic tracking-tight mb-8 leading-[1.1]">
              Made of Moments
            </h2>

            {/* Prose Body */}
            <p className="text-[#292724]/80 text-base md:text-lg leading-relaxed font-light mb-8 max-w-lg">
              We believe the most beautiful stories are found in genuine emotions, fleeting moments, and the little details that make every experience unique. Through photography and cinematic films, we preserve those moments in a way that feels personal, natural, and timeless.
            </p>

            <p className="text-[#8D7163] text-sm md:text-base leading-relaxed font-light mb-10 max-w-lg">
              Whether documenting the quiet anticipation before walking down the aisle, the electric vitality of a stage dance, or the craft behind a brand, our lens is guided by presence, stillness, and heart.
            </p>

            {/* Learn More / Inquire link with subtle glass pill styling */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                onClick={(e) => {
                  if (onLearnMoreClick) {
                    e.preventDefault();
                    onLearnMoreClick();
                  }
                }}
                className="px-5 py-2.5 bg-[#F8F6F1] hover:bg-white text-xs uppercase tracking-[0.25em] font-medium text-[#292724] border border-[#D8C8B8]/70 hover:border-[#8D7163] hover:shadow-xs transition-all duration-300 rounded-full transform hover:-translate-y-0.5 active:translate-y-0"
              >
                View The Collection
              </a>
              <span className="text-[#D8C8B8]">·</span>
              <a
                href="#contact"
                className="inline-block text-xs uppercase tracking-[0.25em] text-[#8D7163] hover:text-[#292724] transition-colors"
              >
                Inquire For Dates
              </a>
            </div>

            {/* Subtle botanical line art illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-12 hidden md:block pointer-events-none"
            >
              <BotanicalFlourish className="w-40 h-28 text-[#8D7163]" />
            </motion.div>
          </motion.div>

          {/* Right Asymmetric Overlapping Photography Layout (7 cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-8 sm:pt-0">
            {/* Background decorative tone block */}
            <div 
              aria-hidden="true" 
              className="absolute right-0 top-0 w-3/4 h-full bg-[#F8F6F1]/80 backdrop-blur-xs -z-10 -mr-6 rounded-2xl border border-white/60 shadow-xs" 
            />

            <div className="relative w-full max-w-lg lg:max-w-none flex items-end justify-center lg:justify-end">
              
              {/* Overlapping Image 1: Offset Detail Shot (Hands / Bouquet) with Floating Motion */}
              <motion.div 
                initial={{ opacity: 0, y: 35, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative z-20 w-44 sm:w-56 md:w-64 -mr-12 sm:-mr-16 mb-12 sm:mb-20 shadow-[0_12px_36px_rgba(41,39,36,0.12)] transition-shadow duration-300 animate-subtle-float"
              >
                <div className="relative aspect-square overflow-hidden bg-[#EDE3D8] border border-white/80 rounded-xs group">
                  <img
                    src={bouquetImage}
                    alt="Fine art wedding botanical detail and rings"
                    className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Frosted Glass Label */}
                <div className="absolute -left-6 top-8 -rotate-90 origin-left">
                  <div className="px-3 py-1 bg-white/85 backdrop-blur-md border border-white/70 shadow-xs rounded-full">
                    <span className="text-[9px] uppercase tracking-[0.35em] text-[#8D7163] font-medium whitespace-nowrap">
                      Heirloom Details
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Tall Vertical Portrait: Bride in lace gown */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="relative z-10 w-64 sm:w-80 md:w-96 shadow-[0_16px_48px_rgba(41,39,36,0.16)] transition-shadow duration-300"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-[#EDE3D8] border border-white/80 rounded-xs">
                  <img
                    src={brideImage}
                    alt="Editorial bridal portrait with vintage lace dress"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Refined Frosted Glass Bottom Badge with handwritten cursive caption */}
                  <div className="absolute bottom-0 inset-x-0 bg-[#292724]/75 backdrop-blur-md border-t border-white/20 py-3.5 px-4 text-center shadow-lg">
                    <p className="font-script text-white text-xl sm:text-2xl tracking-wide select-none drop-shadow-xs">
                      Every frame holds a feeling.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
