import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Check, Copy, ExternalLink, AlertCircle, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO } from '../data/content';

interface ContactSectionProps {
  initialProjectType?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  eventDate: string;
  location: string;
  message: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: initialProjectType || 'Weddings',
    eventDate: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid phone number.';
    }

    if (!formData.projectType) {
      errs.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please tell us a little more about your story (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });

      try {
        const stored = JSON.parse(localStorage.getItem('heartful_inquiries') || '[]');
        stored.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('heartful_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('Could not cache inquiry', err);
      }
    }, 450);
  };

  const generateMailto = () => {
    if (!submittedData) return '#';
    const subject = encodeURIComponent(`Heartful Films Inquiry — ${submittedData.projectType} — ${submittedData.name}`);
    const body = encodeURIComponent(
      `Hello Heartful Films,\n\nI would love to inquire about your photography & cinematography services.\n\n` +
      `Name: ${submittedData.name}\n` +
      `Email: ${submittedData.email}\n` +
      `Phone: ${submittedData.phone}\n` +
      `Project Type: ${submittedData.projectType}\n` +
      `Estimated Date: ${submittedData.eventDate || 'Not yet fixed'}\n` +
      `Location: ${submittedData.location || 'TBD'}\n\n` +
      `Our Vision / Message:\n${submittedData.message}\n\nWarmly,\n${submittedData.name}`
    );
    return `mailto:${BRAND_INFO.emailPlaceholder}?subject=${subject}&body=${body}`;
  };

  const copyInquirySummary = () => {
    if (!submittedData) return;
    const text = 
      `Heartful Films Inquiry Summary:\n` +
      `Client: ${submittedData.name}\n` +
      `Email: ${submittedData.email}\n` +
      `Phone: ${submittedData.phone}\n` +
      `Project: ${submittedData.projectType}\n` +
      `Date: ${submittedData.eventDate || 'Flexible'}\n` +
      `Notes: ${submittedData.message}`;
    
    navigator.clipboard.writeText(text);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2500);
  };

  return (
    <section id="contact" className="w-full bg-[#F8F6F1] py-24 md:py-36 border-t border-[#D8C8B8]/60 relative overflow-hidden">
      {/* Background Subtle Ambient Highlights */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#EDE3D8]/60 blur-3xl -z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D8C8B8]/30 blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xs mb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-semibold">
              Booking & Availability
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#292724] font-normal tracking-wide uppercase mb-4 text-balance">
            Let's Make Something Meaningful.
          </h2>
          <div className="w-12 h-px bg-[#8D7163]/40 mx-auto mb-4" />
          <p className="font-editorial italic text-lg sm:text-xl text-[#8D7163] text-balance">
            Have a wedding, event, or creative project in mind? We'd love to hear your story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Glass Info Cards & Contact Placeholders */}
          <motion.div 
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl uppercase text-[#292724] tracking-wide mb-3 font-light">
                Direct Contact
              </h3>
              <p className="text-xs sm:text-sm text-[#292724]/75 font-light leading-relaxed mb-8">
                We accept a limited number of weddings and creative productions each season to ensure every project receives our complete creative presence and meticulous attention.
              </p>

              {/* Glass Contact Placeholders Card */}
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgba(41,39,36,0.04)] space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center bg-white/80 text-[#8D7163] shadow-xs shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8D7163] font-medium block">
                      Inquiries Email (Placeholder)
                    </span>
                    <a 
                      href={`mailto:${BRAND_INFO.emailPlaceholder}`}
                      className="text-xs sm:text-sm text-[#292724] hover:text-[#8D7163] transition-colors"
                    >
                      {BRAND_INFO.emailPlaceholder}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center bg-white/80 text-[#8D7163] shadow-xs shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8D7163] font-medium block">
                      Direct Telephone (Placeholder)
                    </span>
                    <a 
                      href={`tel:${BRAND_INFO.phonePlaceholder}`}
                      className="text-xs sm:text-sm text-[#292724] hover:text-[#8D7163] transition-colors"
                    >
                      {BRAND_INFO.phonePlaceholder}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center bg-white/80 text-[#8D7163] shadow-xs shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8D7163] font-medium block">
                      Studio & Travel (Placeholder)
                    </span>
                    <span className="text-xs sm:text-sm text-[#292724]">
                      {BRAND_INFO.locationPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center bg-white/80 text-[#8D7163] shadow-xs shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8D7163] font-medium block">
                      Official Instagram
                    </span>
                    <a 
                      href={BRAND_INFO.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-[#292724] hover:text-[#8D7163] underline underline-offset-4 transition-colors inline-flex items-center gap-1 font-medium"
                    >
                      {BRAND_INFO.instagramHandle}
                      <ExternalLink className="w-3 h-3 text-[#8D7163]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Timeframe Glass Card */}
            <div className="p-5 rounded-2xl bg-[#EDE3D8]/50 backdrop-blur-sm border border-white/70 shadow-xs">
              <span className="text-[10px] uppercase tracking-widest text-[#8D7163] font-semibold block mb-1">
                Response Timeframe
              </span>
              <p className="text-xs text-[#292724]/80 font-light">
                We review every inquiry personally and typically respond within 24–48 hours with full pricing guides and date availability.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Luminous Glass Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white/75 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-3xl border border-white/90 shadow-[0_16px_48px_rgba(41,39,36,0.06)]"
          >
            
            {submittedData ? (
              /* Success / Receipt View */
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#EDE3D8]/70 border border-[#8D7163] flex items-center justify-center text-[#8D7163] mb-4 shadow-xs">
                  <Check className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8D7163] font-medium block mb-1">
                    Inquiry Received
                  </span>
                  <h3 className="font-editorial text-3xl uppercase text-[#292724] font-normal">
                    Thank you, {submittedData.name}.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292724]/80 mt-2 font-light">
                    Your inquiry for <strong className="font-medium text-[#292724]">{submittedData.projectType}</strong> has been logged. We will reach out to <strong className="font-medium">{submittedData.email}</strong> shortly.
                  </p>
                </div>

                {/* Receipt Box */}
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/90 text-xs space-y-2.5 text-[#292724]/90 shadow-xs">
                  <div className="flex justify-between border-b border-[#D8C8B8]/40 pb-2">
                    <span className="text-[#8D7163] uppercase tracking-wider text-[10px]">Project</span>
                    <span className="font-medium">{submittedData.projectType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D8C8B8]/40 pb-2">
                    <span className="text-[#8D7163] uppercase tracking-wider text-[10px]">Phone</span>
                    <span>{submittedData.phone}</span>
                  </div>
                  {submittedData.eventDate && (
                    <div className="flex justify-between border-b border-[#D8C8B8]/40 pb-2">
                      <span className="text-[#8D7163] uppercase tracking-wider text-[10px]">Date</span>
                      <span>{submittedData.eventDate}</span>
                    </div>
                  )}
                  <div className="pt-1">
                    <span className="text-[#8D7163] uppercase tracking-wider text-[10px] block mb-1.5">Vision Note</span>
                    <p className="font-light italic bg-white/80 p-3 rounded-xl border border-[#EDE3D8] text-[#292724]">
                      "{submittedData.message}"
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={generateMailto()}
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#292724] hover:bg-[#8D7163] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-full shadow-md text-center inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    onClick={copyInquirySummary}
                    className="w-full sm:w-auto px-6 py-3.5 bg-white/70 hover:bg-white text-[#292724] border border-[#292724]/30 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-full shadow-xs inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    {copiedReceipt ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-700" />
                        <span>Summary Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-[#D8C8B8]/40">
                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Weddings',
                        eventDate: '',
                        location: '',
                        message: ''
                      });
                    }}
                    className="text-xs uppercase tracking-[0.2em] text-[#8D7163] hover:text-[#292724] underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* The Form with Refined Translucent Inputs */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#292724] mb-2">
                    Your Name <span className="text-[#8D7163]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Eleanor Vance & Thomas Reed"
                    className={`w-full px-4 py-3.5 bg-white/70 backdrop-blur-xs rounded-xl border text-xs sm:text-sm text-[#292724] placeholder-[#8D7163]/50 focus:outline-none focus:bg-white transition-all duration-200 shadow-2xs ${
                      errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#D8C8B8]/70 focus:border-[#8D7163] focus:ring-2 focus:ring-[#8D7163]/15'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#292724] mb-2">
                      Email Address <span className="text-[#8D7163]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="eleanor@example.com"
                      className={`w-full px-4 py-3.5 bg-white/70 backdrop-blur-xs rounded-xl border text-xs sm:text-sm text-[#292724] placeholder-[#8D7163]/50 focus:outline-none focus:bg-white transition-all duration-200 shadow-2xs ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#D8C8B8]/70 focus:border-[#8D7163] focus:ring-2 focus:ring-[#8D7163]/15'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#292724] mb-2">
                      Phone Number <span className="text-[#8D7163]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3.5 bg-white/70 backdrop-blur-xs rounded-xl border text-xs sm:text-sm text-[#292724] placeholder-[#8D7163]/50 focus:outline-none focus:bg-white transition-all duration-200 shadow-2xs ${
                        errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#D8C8B8]/70 focus:border-[#8D7163] focus:ring-2 focus:ring-[#8D7163]/15'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type & Event Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#292724] mb-2">
                      Type of Project <span className="text-[#8D7163]">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white/70 backdrop-blur-xs rounded-xl border border-[#D8C8B8]/70 text-xs sm:text-sm text-[#292724] focus:outline-none focus:bg-white focus:border-[#8D7163] focus:ring-2 focus:ring-[#8D7163]/15 transition-all shadow-2xs"
                    >
                      <option value="Weddings">Wedding Photography & Films</option>
                      <option value="Premium Photoshoots">Premium & Celebrity Photoshoots</option>
                      <option value="Events">Event Coverage & Videography</option>
                      <option value="Ads & Brands">Ads & Brand Video Production</option>
                      <option value="Dance Programs">Dance & Stage Program Coverage</option>
                      <option value="Couple Portraits">Pre-Wedding / Couple Session</option>
                      <option value="Other">Other Creative Visual Project</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#292724] mb-2">
                      Estimated Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white/70 backdrop-blur-xs rounded-xl border border-[#D8C8B8]/70 text-xs sm:text-sm text-[#292724] focus:outline-none focus:bg-white focus:border-[#8D7163] focus:ring-2 focus:ring-[#8D7163]/15 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#292724] mb-2">
                    Tell Us Your Story & Vision <span className="text-[#8D7163]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Share your planned venue or location, estimated guest count, style preferences, or any specific moments you care about most..."
                    className={`w-full px-4 py-3.5 bg-white/70 backdrop-blur-xs rounded-xl border text-xs sm:text-sm text-[#292724] placeholder-[#8D7163]/50 focus:outline-none focus:bg-white transition-all duration-200 shadow-2xs ${
                      errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#D8C8B8]/70 focus:border-[#8D7163] focus:ring-2 focus:ring-[#8D7163]/15'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button with Micro-Interaction */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#292724] hover:bg-[#8D7163] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-lg border border-[#292724] flex items-center justify-center gap-3 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#EDE3D8]" />
                        <span>PREPARING YOUR INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND AN ENQUIRY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>
                  <p className="text-[10px] text-center text-[#8D7163] tracking-wider uppercase mt-3">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
