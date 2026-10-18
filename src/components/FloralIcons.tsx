import React from 'react';

export const FloralEmblem: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#8D7163]" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor" 
    strokeWidth="1.2"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Delicate fine-line floral branch matching reference image */}
    <path d="M50 85 C50 60 52 40 48 18" />
    <path d="M49 68 C43 62 38 60 30 63 C33 55 40 54 49 58" />
    <path d="M50 52 C57 46 62 44 70 47 C67 39 60 38 50 42" />
    <path d="M49 38 C42 32 37 30 29 33 C32 25 39 24 49 28" />
    <path d="M50 25 C56 20 60 18 67 21 C64 14 58 14 49 18" />
    {/* Blossom petal hints */}
    <circle cx="48" cy="18" r="3.5" fill="currentColor" fillOpacity="0.15" />
    <circle cx="29" cy="33" r="2.5" fill="currentColor" fillOpacity="0.15" />
    <circle cx="70" cy="47" r="2.5" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

export const BotanicalFlourish: React.FC<{ className?: string }> = ({ className = "w-36 h-28 text-[#D8C8B8]" }) => (
  <svg 
    viewBox="0 0 140 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor" 
    strokeWidth="1"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Wild rose line drawing like the editorial section illustration in the reference image */}
    <path d="M20 75 C45 70 70 60 100 35 C115 22 125 15 130 10" />
    <path d="M50 67 C40 60 35 50 38 40 C45 42 48 52 50 67" />
    <path d="M72 58 C70 45 74 35 84 32 C86 42 80 50 72 58" />
    <path d="M92 42 C98 32 108 28 116 32 C115 40 105 45 92 42" />
    {/* Blooming petals outline */}
    <path d="M35 38 C32 30 38 22 46 25 C50 20 58 22 60 28 C66 28 70 34 68 40 C62 45 52 44 48 41 C42 43 36 41 35 38Z" strokeWidth="0.8" />
    <path d="M46 29 C48 33 52 35 55 33" strokeWidth="0.8" />
    <path d="M50 36 C52 38 56 38 58 36" strokeWidth="0.8" />
  </svg>
);

export const VerticalRoseEmblem: React.FC<{ className?: string }> = ({ className = "w-20 h-28 text-[#9C8476]" }) => (
  <svg
    viewBox="0 0 120 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Top Rose Petals & Bloom (as seen in the navbar round cutout screenshot) */}
    {/* Center rose spiral & core */}
    <path d="M58 24 C56 18 64 16 67 20 C70 24 64 28 58 28 C52 28 49 22 55 17 C62 12 73 16 73 24 C73 32 62 36 54 34" />
    <path d="M52 20 C46 24 44 32 50 38 C56 43 68 42 74 36 C80 30 78 20 71 16" />
    <path d="M48 29 C41 33 40 43 47 50 C54 56 70 56 78 48 C84 41 82 28 74 23" />
    
    {/* Outer blooming rose petals */}
    <path d="M44 42 C36 48 37 59 46 66 C55 72 74 72 84 63 C92 55 90 42 81 36" />
    <path d="M48 64 C53 70 60 73 66 73 C73 73 80 69 83 62" />

    {/* Sepals and base of blossom */}
    <path d="M52 70 C48 76 44 80 39 82 C46 82 52 79 55 74" />
    <path d="M68 70 C72 76 77 80 82 81 C75 81 70 78 67 73" />

    {/* Central slender stem running vertically down */}
    <path d="M60 74 C59 95 61 125 59 155 C59 164 60 172 61 176" strokeWidth="1" />

    {/* Upper delicate thorn/node */}
    <path d="M60 88 C56 86 54 84 53 82" strokeWidth="0.75" />

    {/* Left leaf branching out */}
    <path d="M60 98 C50 94 40 98 34 107 C43 108 52 104 60 102" />
    <path d="M34 107 C44 102 52 100 60 98" strokeWidth="0.6" strokeDasharray="1 1" />

    {/* Right leaf branching out */}
    <path d="M60 114 C70 110 80 114 86 123 C77 124 68 120 60 118" />
    <path d="M86 123 C76 118 68 116 60 114" strokeWidth="0.6" strokeDasharray="1 1" />

    {/* Lower leaf accent near base */}
    <path d="M59 140 C52 143 46 150 44 158 C51 156 56 150 59 144" />
    <path d="M60 148 C66 151 72 157 74 165 C68 163 63 158 60 152" />
  </svg>
);

