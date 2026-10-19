import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA, ServiceItem } from '../data/content';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleOpenAllPackages = () => {
    setSelectedService(SERVICES_DATA[0]);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="w-full bg-[#F8F6F1] py-24 md:py-36 border-t border-[#D8C8B8]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xs mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold">
              Craft & Capabilities
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#292724] font-normal tracking-wide uppercase mb-4">
            Our Services
          </h2>
          <div className="w-12 h-px bg-[#8D7163]/40 mx-auto mb-4" />
          <p className="font-editorial italic text-lg sm:text-xl text-[#8D7163]">
            Thoughtfully captured. Beautifully remembered.
          </p>
        </motion.div>

        {/* Asymmetrical Editorial Composition with Motion Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Main Primary Visual Anchor: Weddings (5 cols, tall vertical) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div 
              onClick={() => handleOpenDetail(SERVICES_DATA[0])}
              className="group relative cursor-pointer aspect-3/4 sm:aspect-4/5 lg:aspect-3/4 overflow-hidden rounded-xs bg-[#EDE3D8] border border-white/80 shadow-[0_12px_36px_rgba(41,39,36,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(41,39,36,0.14)]"
            >
              <img
                src={SERVICES_DATA[0].image}
                alt="Weddings by Heartful Films"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Refined Glassmorphic Bottom Scrim */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-[#1d1b19]/90 via-[#1d1b19]/50 to-transparent backdrop-blur-[2px] transition-all duration-300 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#EDE3D8] font-light mb-1">
                  01 / Discipline
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl uppercase text-white font-light tracking-[0.15em] mb-2 drop-shadow-xs">
                  Weddings
                </h3>
                <p className="text-white/85 text-xs sm:text-sm font-light line-clamp-2 mb-4 drop-shadow-xs">
                  Cinematic films and fine art photography that feel authentic, emotional, and timeless.
                </p>
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/20 group-hover:bg-white/35 backdrop-blur-md border border-white/30 text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-all shadow-xs group-hover:translate-x-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Quick bullet highlights below main card in subtle glass bar */}
            <div className="mt-4 p-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-full shadow-xs hidden sm:block">
              <div className="flex items-center justify-around text-xs text-[#8D7163]">
                <span>Photography & 4K Cinema</span>
                <span className="opacity-40">·</span>
                <span>Pre-Wedding Films</span>
                <span className="opacity-40">·</span>
                <span>Heirloom Albums</span>
              </div>
            </div>
          </motion.div>

          {/* Right Asymmetric Stack: 3 Services (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Top row: 2 side-by-side services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Service 2: Premium Photoshoots */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleOpenDetail(SERVICES_DATA[1])}
                className="group relative cursor-pointer aspect-4/3 sm:aspect-square overflow-hidden rounded-xs bg-[#EDE3D8] border border-white/80 shadow-[0_8px_30px_rgba(41,39,36,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(41,39,36,0.12)]"
              >
                <img
                  src={SERVICES_DATA[1].image}
                  alt="Premium Photoshoots by Heartful Films"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#1d1b19]/90 via-[#1d1b19]/50 to-transparent backdrop-blur-[2px] transition-all duration-300 flex flex-col justify-end">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#EDE3D8] font-light mb-1">
                    02 / Discipline
                  </span>
                  <h3 className="font-editorial text-2xl uppercase text-white font-light tracking-[0.15em] mb-1 drop-shadow-xs">
                    Premium Photoshoots
                  </h3>
                  <p className="text-white/80 text-xs font-light line-clamp-2 mb-3">
                    Celebrity, editorial & luxury portrait sessions.
                  </p>
                  <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/20 group-hover:bg-white/35 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-[0.2em] font-medium transition-all shadow-xs group-hover:translate-x-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>

              {/* Service 3: Dance & Stage Programs */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleOpenDetail(SERVICES_DATA[3])}
                className="group relative cursor-pointer aspect-4/3 sm:aspect-square overflow-hidden rounded-xs bg-[#EDE3D8] border border-white/80 shadow-[0_8px_30px_rgba(41,39,36,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(41,39,36,0.12)]"
              >
                <img
                  src={SERVICES_DATA[3].image}
                  alt="Dance and Stage Programs by Heartful Films"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#1d1b19]/90 via-[#1d1b19]/50 to-transparent backdrop-blur-[2px] transition-all duration-300 flex flex-col justify-end">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#EDE3D8] font-light mb-1">
                    03 / Discipline
                  </span>
                  <h3 className="font-editorial text-2xl uppercase text-white font-light tracking-[0.15em] mb-1 drop-shadow-xs">
                    Dance Programs
                  </h3>
                  <p className="text-white/80 text-xs font-light line-clamp-2 mb-3">
                    Expressive stage cinema, low-light recitals & performances.
                  </p>
                  <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/20 group-hover:bg-white/35 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-[0.2em] font-medium transition-all shadow-xs group-hover:translate-x-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Wide Row: Ads & Brand Films */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleOpenDetail(SERVICES_DATA[2])}
              className="group relative cursor-pointer aspect-16/9 sm:aspect-21/9 overflow-hidden rounded-xs bg-[#EDE3D8] border border-white/80 shadow-[0_8px_30px_rgba(41,39,36,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(41,39,36,0.12)]"
            >
              <img
                src={SERVICES_DATA[2].image}
                alt="Commercial and Brand Films by Heartful Films"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-[#1d1b19]/90 via-[#1d1b19]/50 to-transparent backdrop-blur-[2px] transition-all duration-300 flex flex-col justify-end">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#EDE3D8] font-light mb-1">
                  04 / Discipline
                </span>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl uppercase text-white font-light tracking-[0.15em] mb-1 drop-shadow-xs">
                      Ads & Brand Films
                    </h3>
                    <p className="text-white/85 text-xs sm:text-sm font-light max-w-md drop-shadow-xs">
                      Commercial photography, brand narratives, and creative advertisements engineered to resonate.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-1.5 rounded-full bg-white/20 group-hover:bg-white/35 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xs whitespace-nowrap group-hover:translate-x-1">
                    <span>View Inclusions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Section Bottom CTA with Glass Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center pt-4"
        >
          <button
            onClick={handleOpenAllPackages}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/80 hover:bg-[#292724] hover:text-white text-[#292724] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 border border-white shadow-[0_4px_20px_rgba(141,113,99,0.12)] hover:shadow-[0_8px_25px_rgba(41,39,36,0.2)] rounded-full backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>

      {/* Services In-Depth Modal */}
      {isModalOpen && selectedService && (
        <ServiceDetailModal
          service={selectedService}
          allServices={SERVICES_DATA}
          onClose={() => setIsModalOpen(false)}
          onSelectService={(serv) => setSelectedService(serv)}
          onInquireService={(title) => {
            setIsModalOpen(false);
            if (onSelectServiceForBooking) {
              onSelectServiceForBooking(title);
            }
          }}
        />
      )}
    </section>
  );
};
