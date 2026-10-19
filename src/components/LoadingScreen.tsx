import React from 'react';
import { motion } from 'motion/react';
import logoImage from '../assets/images/logo.jpg';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8F6F1]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center"
      >
        {/* Logo with a passing light glare */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-[#D8C8B8]/70 shadow-[0_18px_50px_-18px_rgba(41,39,36,0.35)]">
          <img
            src={logoImage}
            alt="Heartful Films logo"
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="loading-glare absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent mix-blend-screen" />
          </div>
        </div>

        {/* Minimal progress line */}
        <div className="relative mt-7 h-px w-24 overflow-hidden bg-[#D8C8B8]/60">
          <div className="loading-bar absolute inset-y-0 left-0 w-1/2 bg-[#8D7163]" />
        </div>

        <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-[#8D7163]">
          Heartful Films
        </p>
      </motion.div>
    </motion.div>
  );
};
