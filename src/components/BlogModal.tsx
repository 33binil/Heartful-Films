import React, { useEffect, useState } from 'react';
import { X, Calendar, MapPin, Clock, Camera, ArrowRight, Share2, Check } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
  onInquire: (storyName: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onInquire }) => {
  const [activeImage, setActiveImage] = useState(post.image);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveImage(post.image);
  }, [post]);

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

  const copyStoryLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1d1b19]/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <article 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F8F6F1]/95 backdrop-blur-xl border border-white/80 shadow-[0_24px_64px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Frosted Glass */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#D8C8B8]/60">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8D7163]">
            <span>Journal</span>
            <span>/</span>
            <span className="font-semibold">{post.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyStoryLink}
              className="p-2 text-[#8D7163] hover:text-[#292724] hover:bg-black/5 rounded-full transition-colors"
              title="Copy Story Link"
            >
              {copied ? <Check className="w-4 h-4 text-green-700" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#292724] hover:text-[#8D7163] hover:bg-black/5 rounded-full transition-colors"
              aria-label="Close story"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Article Content */}
        <div className="p-6 sm:p-10 md:p-12">
          
          {/* Header Metadata & Titles */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs text-[11px] text-[#8D7163] uppercase tracking-[0.2em] mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {post.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#292724] font-normal italic tracking-wide mb-3">
              {post.coupleNames}
            </h1>
            <p className="font-editorial text-lg sm:text-xl text-[#8D7163] tracking-wide">
              {post.subtitle}
            </p>
          </div>

          {/* Primary Featured Image View */}
          <div className="mb-8">
            <div className="relative aspect-16/10 sm:aspect-21/10 overflow-hidden rounded-xl bg-[#EDE3D8] border border-white/80 shadow-md">
              <img
                src={activeImage}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnail switcher if gallery has multiple photos */}
            {post.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-1">
                {post.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-14 overflow-hidden rounded-lg border shrink-0 transition-all ${
                      activeImage === img ? 'border-[#292724] ring-2 ring-[#292724]/40 shadow-xs' : 'border-white/80 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quote Callout with Glass Backing */}
          {post.vowsOrQuote && (
            <div className="my-10 max-w-2xl mx-auto p-6 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl shadow-xs text-center">
              <p className="font-editorial italic text-xl sm:text-2xl text-[#292724] leading-relaxed">
                "{post.vowsOrQuote}"
              </p>
            </div>
          )}

          {/* Prose Story Body */}
          <div className="max-w-2xl mx-auto space-y-6 text-[#292724]/85 text-base sm:text-lg leading-relaxed font-light mb-12">
            {post.fullStory.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Camera Notes & Archival Specs in Glass Container */}
          <div className="max-w-2xl mx-auto p-6 bg-white/75 backdrop-blur-md border border-white/90 rounded-2xl shadow-xs mb-12 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center bg-[#F8F6F1] text-[#8D7163] shadow-xs shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8D7163] font-semibold block mb-1">
                Cinematography & Camera Notes
              </span>
              <p className="text-xs text-[#292724]/80 font-mono">
                {post.cameraNotes}
              </p>
            </div>
          </div>

          {/* Bottom Inquire Banner */}
          <div className="max-w-2xl mx-auto pt-8 border-t border-[#D8C8B8]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8D7163] font-medium block">
                Inspired by this visual story?
              </span>
              <p className="font-editorial text-xl text-[#292724]">
                Let us document your celebration.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(post.coupleNames);
              }}
              className="px-6 py-3.5 bg-[#292724] hover:bg-[#8D7163] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap transform hover:-translate-y-0.5"
            >
              <span>Inquire For Dates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </article>
    </div>
  );
};
