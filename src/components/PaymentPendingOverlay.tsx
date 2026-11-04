import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Copy, 
  Check, 
  Phone, 
  Lock, 
  Unlock, 
  AlertCircle, 
  ShieldCheck, 
  KeyRound, 
  X, 
  QrCode,
  ExternalLink
} from 'lucide-react';
import logoImage from '../assets/images/logo.jpg';

interface PaymentPendingOverlayProps {
  onUnlock: () => void;
  onRelock?: () => void;
}

export const PaymentPendingOverlay: React.FC<PaymentPendingOverlayProps> = ({
  onUnlock,
  onRelock,
}) => {
  const [copied, setCopied] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPasskey, setAdminPasskey] = useState('');
  const [adminError, setAdminError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const upiId = '8606479508@slc';
  const contactNumber = '+91 73060 43445';
  const cleanPhone = '+917306043445';

  const handleCopyUpi = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(upiId);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = upiId;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch (err) {
      console.error('Failed to copy UPI ID:', err);
    }
  };

  const handleAdminUnlock = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAdminError('');

    const validPasskeys = ['heartful@admin2026', 'admin2026', 'heartful'];
    const trimmed = adminPasskey.trim();

    if (!validPasskeys.includes(trimmed)) {
      setAdminError('Invalid security passkey. Please check and try again.');
      return;
    }

    setIsUpdating(true);
    try {
      // 1. Update backend persistent storage via Vite middleware
      await fetch('/api/payment-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locked: false }),
      }).catch((err) => {
        console.warn('Backend API notification skipped:', err);
      });

      // 2. Persist locally as immediate fallback
      localStorage.setItem('heartful_payment_locked', 'false');

      // 3. Trigger unlock in parent app
      setShowAdminModal(false);
      onUnlock();
    } catch (err) {
      console.error('Error during unlock:', err);
      setAdminError('Unable to update server status. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Prevent background scrolling while overlay is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[95] flex items-center justify-center overflow-y-auto bg-[#0C0B0A] text-[#F8F6F1] px-4 py-8 sm:px-6 sm:py-12 select-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 25%, rgba(141, 113, 99, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(197, 168, 128, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 20% 70%, rgba(41, 39, 36, 0.5) 0%, transparent 50%)
        `,
      }}
    >
      {/* Decorative ultra-fine noise & grid overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative w-full max-w-xl mx-auto my-auto z-10">
        {/* Main Payment Pending Card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl bg-[#141312]/90 backdrop-blur-2xl border border-[#2B2724] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] p-6 sm:p-10 text-center"
        >
          {/* Subtle top warm accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880]/80 to-transparent" />

          {/* Brand Logo & Status Indicator */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative mb-3.5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[#3E3934] shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
                <img
                  src={logoImage}
                  alt="Heartful Films"
                  className="w-full h-full object-cover filter brightness-95"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1C1A18] border border-[#3E3934] flex items-center justify-center text-[#E0A96D] shadow-md">
                <Lock className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Heading: PAYMENT PENDING */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0A96D]/10 border border-[#E0A96D]/25 text-[#E0A96D] text-[11px] sm:text-xs tracking-[0.28em] font-medium uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0A96D] animate-ping" />
              <span>Payment Pending</span>
            </div>
          </div>

          {/* Main Title: Website Access Temporarily Restricted */}
          <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F8F6F1] font-normal tracking-wide leading-tight mb-4">
            Website Access Temporarily Restricted
          </h1>

          {/* Description */}
          <div className="space-y-3 text-sm sm:text-[15px] text-[#A89F95] font-light leading-relaxed max-w-lg mx-auto mb-8">
            <p>
              The website development has been successfully completed. However, the pending payment has not yet been received.
            </p>
            <p className="text-[#C8BFB5]">
              To activate full website access, kindly complete the payment to the company using the UPI details provided below.
            </p>
          </div>

          {/* Payment Details Box */}
          <div className="rounded-xl bg-[#1C1A18]/80 border border-[#332F2A] p-4 sm:p-5 mb-6 text-left relative overflow-hidden">
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#2B2724]">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D7163] font-semibold">
                Official Payment Details
              </span>
              <button
                type="button"
                onClick={() => setShowQr(!showQr)}
                className="inline-flex items-center gap-1.5 text-[11px] text-[#C5A880] hover:text-white transition-colors cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>{showQr ? 'Hide QR' : 'Show UPI QR'}</span>
              </button>
            </div>

            {/* UPI ID Section with Copy Button */}
            <div className="mb-4">
              <label className="block text-[11px] uppercase tracking-[0.18em] text-[#7A736B] mb-1.5">
                UPI ID (Google Pay / PhonePe / Paytm / BHIM)
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-[#121110] border border-[#2F2B26] rounded-lg px-3.5 py-2.5 font-mono text-xs sm:text-sm text-[#F8F6F1] tracking-wide select-all overflow-x-auto whitespace-nowrap">
                  {upiId}
                </div>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  aria-label="Copy UPI ID"
                  className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-medium uppercase tracking-[0.15em] transition-all cursor-pointer whitespace-nowrap shadow-sm ${
                    copied
                      ? 'bg-emerald-600/90 text-white border border-emerald-500'
                      : 'bg-[#C5A880] hover:bg-[#D5B890] text-[#141312] border border-[#C5A880]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy UPI</span>
                    </>
                  )}
                </button>
              </div>

              {/* Copied visual feedback banner */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -4 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1.5 text-[11px] text-emerald-400 font-medium flex items-center gap-1"
                  >
                    <Check className="w-3 h-3 inline" />
                    <span>UPI ID copied to clipboard! Paste it into your UPI app to transfer.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Expandable UPI QR Code Card */}
            <AnimatePresence>
              {showQr && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 overflow-hidden border-t border-[#2B2724] pt-3 text-center"
                >
                  <p className="text-[11px] text-[#A89F95] mb-2">
                    Scan with any UPI App (GPay, PhonePe, Paytm, CRED)
                  </p>
                  <div className="inline-block p-2 bg-white rounded-xl shadow-lg">
                    {/* SVG standard dynamic UPI QR code rendered client-side */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                        `upi://pay?pa=${upiId}&pn=Heartful%20Films&cu=INR`
                      )}`}
                      alt="UPI QR Code for Payment"
                      className="w-36 h-36 mx-auto rounded"
                    />
                  </div>
                  <p className="text-[10px] text-[#7A736B] mt-1.5 font-mono">
                    Payee: Heartful Films ({upiId})
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Number Section */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-[#7A736B] mb-1.5">
                Contact Number (Calling & WhatsApp)
              </label>
              <div className="flex items-center justify-between bg-[#121110] border border-[#2F2B26] rounded-lg px-3.5 py-2.5">
                <span className="font-mono text-xs sm:text-sm text-[#F8F6F1] tracking-wider">
                  {contactNumber}
                </span>
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#E0A96D] uppercase tracking-[0.15em] font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="pt-2 pb-4 text-xs sm:text-[13px] text-[#8F877E] leading-relaxed border-t border-[#23201D]">
            <p className="mb-1">
              For payment confirmation or assistance, please contact us using the number provided above.
            </p>
            <p className="font-editorial italic text-sm text-[#A89F95]">
              Thank you for your cooperation.
            </p>
          </div>

          {/* Admin Control Bar & Unlock Action */}
          <div className="pt-4 border-t border-[#23201D] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#69635C]">
            <span className="tracking-[0.1em]">Status: Pending Verification</span>
            <button
              type="button"
              onClick={() => {
                setShowAdminModal(true);
                setAdminError('');
              }}
              className="inline-flex items-center gap-1.5 text-[#C5A880] hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#3E3934]"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Admin Website Unlock</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Admin Unlock Modal Dialog */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowAdminModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#161514] border border-[#3E3934] rounded-2xl p-6 sm:p-7 shadow-2xl text-left"
            >
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                className="absolute top-4 right-4 p-1.5 text-[#8F877E] hover:text-white transition-colors rounded-lg cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-[#F8F6F1]">Admin Access Portal</h3>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8F877E]">
                    Heartful Films Controls
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#A89F95] mb-4 leading-relaxed">
                Enter your administrative security passkey to mark the payment as received and remove the payment pending restriction from all visitor sessions.
              </p>

              <form onSubmit={handleAdminUnlock} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.15em] text-[#7A736B] mb-1.5">
                    Security Passkey
                  </label>
                  <input
                    type="password"
                    value={adminPasskey}
                    onChange={(e) => {
                      setAdminPasskey(e.target.value);
                      if (adminError) setAdminError('');
                    }}
                    placeholder="Enter passkey..."
                    autoFocus
                    className="w-full bg-[#0E0D0C] border border-[#3E3934] focus:border-[#C5A880] rounded-xl px-4 py-2.5 text-sm text-[#F8F6F1] outline-none transition-colors"
                  />
                  {adminError && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{adminError}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={isUpdating || !adminPasskey.trim()}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D5B890] disabled:opacity-50 text-[#141312] text-xs uppercase tracking-[0.18em] font-medium transition-all cursor-pointer shadow-md"
                  >
                    {isUpdating ? (
                      <span className="w-4 h-4 border-2 border-[#141312] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Unlock Website</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAdminModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#23201D] hover:bg-[#2F2B27] text-[#C8BFB5] text-xs uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
