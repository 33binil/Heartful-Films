import React from 'react';
import { motion } from 'motion/react';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="w-full bg-[#EDE3D8]/50 py-20 md:py-28 px-6 border-b border-[#D8C8B8]/40 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 rounded-full bg-white/40 blur-3xl -z-10 pointer-events-none" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto p-8 sm:p-14 md:p-16 rounded-3xl bg-white/45 backdrop-blur-md border border-white/80 shadow-[0_12px_36px_rgba(41,39,36,0.04)] text-center flex flex-col items-center"
      >
        {/* Small Heading in Glass Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs mb-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#8D7163] font-semibold">
            MORE THAN JUST MEMORIES
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#292724] font-normal tracking-wide mb-6 text-balance">
          Stories Captured With Heart.
        </h2>

        {/* Hairline Divider */}
        <div className="w-12 h-px bg-[#8D7163]/40 mb-6" />

        {/* Description */}
        <p className="text-[#292724]/85 text-base md:text-lg leading-relaxed font-light max-w-2xl text-balance">
          From the quiet emotions of a wedding day to the energy of live events and the creativity of brand films, we turn real moments into timeless visual stories.
        </p>
      </motion.div>
    </section>
  );
};
