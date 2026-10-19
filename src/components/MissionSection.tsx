import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import bouquetImage from '../assets/images/about_bouquet_detail_1792326982071.jpg';
import coupleImage from '../assets/images/story.webp';

export const MissionSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#EDE3D8]/40 overflow-hidden py-24 md:py-36">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          src={bouquetImage}
          alt="Heartful Films artistic atmosphere"
          className="w-full h-full object-cover filter brightness-[0.92] saturate-[0.8] blur-[2px]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Soft Translucent Scrim */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-[#EDE3D8]/80 backdrop-blur-[2px]" 
        />
      </div>

      {/* Foreground Content inside an Elegant Glass Sanctuary Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-14 md:p-16 rounded-3xl bg-white/55 backdrop-blur-md border border-white/80 shadow-[0_16px_48px_rgba(41,39,36,0.08)] text-center flex flex-col items-center"
        >
          
          {/* Small Kicker */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs mb-4"
          >
            <Sparkles className="w-3 h-3 text-[#8D7163]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8D7163] font-semibold">
              OUR APPROACH
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#292724] font-normal tracking-wide uppercase mb-6 leading-tight text-balance"
          >
            Every Story, Told With Feeling.
          </motion.h2>

          <div className="w-16 h-px bg-[#8D7163]/50 mb-6" />

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-editorial italic text-lg sm:text-2xl text-[#292724]/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance"
          >
            "Our goal is to create photographs and films that do more than show what happened. We want you to remember how it felt."
          </motion.p>

          {/* Circular Frame Vignette matching Reference Image with Rotating Dashed Halo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-[#D8C8B8] relative group cursor-pointer">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src={coupleImage}
                alt="Intimate couple portrait detail"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Rotating subtle dashed artistic aura */}
            <div 
              aria-hidden="true"
              className="absolute -inset-3.5 rounded-full border border-dashed border-[#8D7163]/30 pointer-events-none animate-spin-very-slow" 
            />
            
            {/* Subtle frosted glass outer halo */}
            <div className="absolute -inset-1.5 rounded-full border border-white/60 pointer-events-none" />
          </motion.div>

          {/* Floating Glass Manifesto Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-medium">
              Heartful Films Manifesto
            </span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
