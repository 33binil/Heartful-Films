import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Camera, Film, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem;
  allServices: ServiceItem[];
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  allServices,
  onClose,
  onSelectService,
  onInquireService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1d1b19]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F8F6F1]/95 backdrop-blur-xl border border-white/80 shadow-[0_24px_64px_rgba(0,0,0,0.22)] rounded-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with glass pill switcher */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#D8C8B8]/60">
          {/* Service Switcher Tabs as Translucent Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {allServices.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectService(item)}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap font-medium ${
                  service.id === item.id
                    ? 'bg-[#292724] text-white shadow-xs'
                    : 'bg-white/60 text-[#8D7163] hover:text-[#292724] hover:bg-white border border-white/60'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#292724] hover:text-[#8D7163] hover:bg-black/5 rounded-full transition-colors ml-4 focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Image & Highlight */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-[#EDE3D8] border border-white/80 shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] uppercase tracking-widest font-medium">
                  {service.category}
                </div>
              </div>

              <div className="p-4 bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl shadow-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8D7163] font-semibold block mb-1">
                  Pricing & Inquiries
                </span>
                <p className="text-xs text-[#292724]/80 leading-relaxed font-light">
                  {service.investmentKicker}. Each production is uniquely scoped to match your vision, location, and aesthetic preferences.
                </p>
              </div>
            </div>

            {/* Right Details */}
            <div className="md:col-span-7 flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold mb-1">
                Heartful Films Signature Offering
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl uppercase text-[#292724] font-light tracking-wide mb-2">
                {service.title}
              </h3>
              <p className="font-editorial italic text-base text-[#8D7163] mb-6">
                {service.subtitle}
              </p>

              <p className="text-sm text-[#292724]/85 leading-relaxed font-light mb-6">
                {service.description}
              </p>

              {/* Scope & Focus */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-[0.25em] text-[#292724] font-semibold mb-3">
                  Scope & Focus
                </h4>
                <ul className="space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#292724]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8D7163] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables in Glass Container */}
              <div className="mb-8 p-5 bg-white/75 backdrop-blur-md border border-white/90 rounded-xl shadow-xs">
                <h4 className="text-xs uppercase tracking-[0.25em] text-[#292724] font-semibold mb-3">
                  Standard Inclusions & Deliverables
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#292724]">
                      <Check className="w-3.5 h-3.5 text-[#8D7163] shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Booking CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={() => onInquireService(service.title)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#292724] hover:bg-[#8D7163] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#portfolio"
                  onClick={onClose}
                  className="text-xs uppercase tracking-[0.2em] text-[#8D7163] hover:text-[#292724] transition-colors"
                >
                  View sample works
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
