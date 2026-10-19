import brideEditorial from '../assets/images/portfolio/wedding4.webp';

import servicesCommercial from '../assets/images/ads-shoot.webp';
import servicesDance from '../assets/images/dance.webp';

import celebrity1 from '../assets/images/portfolio/celebrity1.webp';
import heroCouple from '../assets/images/portfolio/wedding5.webp';
import missionCouple from '../assets/images/portfolio/wedding6.webp';
import portfolioEventReception from '../assets/images/portfolio/dance2.webp';
import bouquetDetail from '../assets/images/about-wedding.webp';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image?: string;
  description: string;
  features: string[];
  deliverables: string[];
  investmentKicker: string;
  comingSoon?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Events' | 'Ads & Brands' | 'Dance Programs';
  type: 'photo' | 'video';
  image: string;
  videoUrl?: string;
  year: string;
  location: string;
  aspect: 'landscape' | 'portrait' | 'square';
  tagline: string;
  description: string;
  cameraSpecs: string;
  duration?: string;
}

export const BRAND_INFO = {
  name: "Heartful Films",
  tagline: "Every story deserves to be felt.",
  instagramUrl: "https://www.instagram.com/_heartful___/",
  instagramHandle: "@_heartful___",
  phonePlaceholder: "+91 96561 06421",
  phonePlaceholder2: "+91 94971 22130",
  emailPlaceholder: "soon",
  locationPlaceholder: "Kachani, Karakulam P. O, Trivandrum",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Cinematic Wedding Films & Fine Art Photography",
    category: "Weddings",
    image: brideEditorial,
    description: "Intimate ceremonies, grand destination weddings, and quiet fleeting glance between vows. We capture the true pulse of your day without stiff posing or intrusive staging.",
    features: [
      "Wedding photography & fine art editorial coverage",
      "Cinematic wedding films with bespoke sound design",
      "Couple portraits & golden hour pre-wedding films",
      "Full speech and ceremony archival audio capture"
    ],
    deliverables: [
      "Signature 4K Highlight Film (6-8 min)",
      "Full Ceremony & Speeches Documentary Edit",
      "Curated high-resolution digital photo gallery (600+ edited images)",
      "Sneak peek gallery within 72 hours"
    ],
    investmentKicker: "Custom bespoke collections available"
  },
  {
    id: "premium-photoshoots",
    title: "Premium Photoshoots",
    subtitle: "Celebrity, Editorial & Luxury Portrait Photography",
    category: "Photoshoots",
    image: celebrity1,
    description: "Editorial-grade photoshoots for celebrities, artists, and brands — styled studio and location portraits with cinematic lighting and magazine-ready finishing.",
    features: [
      "Celebrity, influencer & artist portrait sessions",
      "Editorial, fashion & magazine-style shoots",
      "Studio and on-location creative direction",
      "Professional styling, lighting & retouching"
    ],
    deliverables: [
      "High-resolution retouched photo gallery",
      "Curated hero frames for press & social media",
      "Vertical crops optimized for reels & stories",
      "Commercial usage licensing on request"
    ],
    investmentKicker: "Half-day and full-day photoshoot packages"
  },
  {
    id: "ads-brands",
    title: "Ads & Brand Films",
    subtitle: "Commercial Video Production & Visual Storytelling",
    category: "Ads & Brands",
    image: servicesCommercial,
    description: "We collaborate with passionate founders, artisans, and premium brands to craft visual narratives that elevate products into emotive brand experiences.",
    features: [
      "Commercial photography for editorial & e-commerce",
      "Promotional brand films & founder storytelling",
      "Creative direction, shot listing, and color grading",
      "Product showcase & lifestyle visual campaigns"
    ],
    deliverables: [
      "Main commercial brand film (60-90 sec)",
      "Bite-sized advertising cuts (15s & 30s)",
      "High-resolution commercial image library",
      "Commercial broadcast and digital licensing"
    ],
    investmentKicker: "Tailored to campaign scope and licensing"
  },
  {
    id: "dance-stage",
    title: "Dance & Stage Programs",
    subtitle: "Performance Coverage & Expressive Stage Cinema",
    category: "Dance Programs",
    image: servicesDance,
    description: "Movement is pure emotion. We specialize in capturing the rhythm, lighting, costume fluidity, and stage presence of live dance recitals, theatre, and cultural performances.",
    features: [
      "Dance performance coverage & stage cinematography",
      "Low-light stage photography with zero flash disruption",
      "Cinematic highlight reels set to performance score",
      "Rehearsal, backstage, and artist preparation documentary"
    ],
    deliverables: [
      "Complete multi-camera stage performance recording",
      "Cinematic artistic showreel highlighting key solos",
      "Action-shot performance photo gallery",
      "Artist and troupe promotional media kit"
    ],
    investmentKicker: "School, academy, and individual artist packages"
  },
  {
    id: "digital-marketing-content",
    title: "Digital Marketing Content",
    subtitle: "Social-First Content & Campaign Creative",
    category: "Digital Marketing",
    description: "Scroll-stopping social content built for modern brands. We plan and produce short-form reels, product films, and campaign creatives designed to grow reach, engagement, and conversions.",
    features: [
      "Short-form reels & vertical video for Instagram, YouTube & Facebook",
      "Product, lifestyle and founder-led brand content",
      "Monthly content calendars with creative direction",
      "Ad creatives, thumbnails & performance marketing assets"
    ],
    deliverables: [
      "Batch of edited short-form reels (per package)",
      "Curated social photo set ready to post",
      "Platform-optimized crops, captions & thumbnail frames",
      "Content scheduling and campaign rollout support"
    ],
    investmentKicker: "Monthly retainers & campaign packages",
    comingSoon: true
  },
  {
    id: "interior-shoot",
    title: "Interior Shoot",
    subtitle: "Architectural & Interior Space Photography",
    category: "Interiors",
    description: "Clean, architectural photography that makes spaces feel as good on screen as they do in person. Ideal for homes, resorts, cafés, showrooms, and real-estate listings.",
    features: [
      "Residential, hospitality & commercial interior coverage",
      "Wide architectural composition and detail framing",
      "Natural and mixed-light balance with careful styling",
      "Optional walkthrough video and aerial exteriors"
    ],
    deliverables: [
      "High-resolution edited photo gallery",
      "Wide, square and vertical crops for listings & social",
      "Detail shots of materials, textures and finishes",
      "Commercial usage licensing on request"
    ],
    investmentKicker: "Per-space and full-property packages",
    comingSoon: true
  },
  {
    id: "baby-shoot",
    title: "Baby Shoot",
    subtitle: "Newborn, Toddler & Family Portraits",
    category: "Baby & Family",
    description: "Gentle, patient sessions that preserve the earliest chapters of your family's story — from tiny newborn details to playful toddler milestones, captured in studio or at home.",
    features: [
      "Newborn, milestone, cake-smash & toddler sessions",
      "Studio setups with props and soft, safe lighting",
      "At-home lifestyle sessions for relaxed family frames",
      "Parent, sibling and candid family group portraits"
    ],
    deliverables: [
      "Softly retouched high-resolution gallery",
      "Curated thank-you, announcement & announcement cards",
      "Custom photo album and print-ready files",
      "Sneak peek selection within 48 hours"
    ],
    investmentKicker: "Studio and at-home session packages",
    comingSoon: true
  },
  {
    id: "corporate",
    title: "Corporate",
    subtitle: "Corporate Films, Headshots & Event Coverage",
    category: "Corporate",
    description: "Polished corporate storytelling for teams and companies — from leadership headshots and culture films to conferences, launches, and internal events, delivered with a professional finish.",
    features: [
      "Corporate brand and culture films",
      "Professional team & leadership headshots",
      "Conference, launch and event coverage",
      "Interview, testimonial and product explainer videos"
    ],
    deliverables: [
      "Edited corporate brand or highlight film",
      "Consistent headshot library for web & LinkedIn",
      "Event photo and video highlight package",
      "Commercial usage licensing on request"
    ],
    investmentKicker: "Custom corporate retainers & project quotes",
    comingSoon: true
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "clara-and-julian",
    title: "Clara & Julian — Southern Highlands",
    category: "Weddings",
    type: "video",
    image: heroCouple,
    year: "2025",
    location: "Highland Valley",
    aspect: "landscape",
    duration: "4:32",
    tagline: "Whispers in the golden mountain breeze.",
    description: "An intimate highland elopement bathed in twilight gold. Clara and Julian chose to exchange vows on the crest of an open mountain ridge as the wind danced through the veil.",
    cameraSpecs: "Cinema 35mm Prime · 4K 10-bit · Natural Light & Ambient Audio"
  },
  {
    id: "the-lace-veil",
    title: "The Quiet Morning — Heirloom Portraits",
    category: "Weddings",
    type: "photo",
    image: brideEditorial,
    year: "2025",
    location: "Provence Manor",
    aspect: "portrait",
    tagline: "Timeless textures of heirloom lace and soft morning silence.",
    description: "Before the bustle of the ceremony, the quiet reflection of the bridal morning captured with soft diffused light pouring through antique mullioned windows.",
    cameraSpecs: "50mm f/1.2 · ISO 200 · Diffused North Light"
  },
  {
    id: "golden-meadow-vows",
    title: "Embrace in the Wild Grass",
    category: "Weddings",
    type: "photo",
    image: missionCouple,
    year: "2025",
    location: "Cotswold Hills",
    aspect: "square",
    tagline: "A gentle kiss under late autumn sunshine.",
    description: "An effortless sunset portrait session walking across open grasslands, embracing the unscripted warmth of real connection.",
    cameraSpecs: "50mm f/1.4 · Golden Hour Flare Preservation"
  },
  {
    id: "rhythm-of-dusk",
    title: "Soleil — Contemporary Ballet",
    category: "Dance Programs",
    type: "video",
    image: servicesDance,
    year: "2025",
    location: "Lyric Theatre",
    aspect: "landscape",
    duration: "3:18",
    tagline: "Suspended in motion under the warm spotlight.",
    description: "Soloist performance captured with high frame rate cinema cameras, capturing the floating silk drape and athletic grace against dramatic stage amber lighting.",
    cameraSpecs: "Dual Camera Cinema Rig · 4K 120fps · Soundboard Audio Master"
  },
  {
    id: "studio-artisan",
    title: "The Maker's Craft — Brand Film",
    category: "Ads & Brands",
    type: "video",
    image: servicesCommercial,
    year: "2025",
    location: "Northlight Studios",
    aspect: "landscape",
    duration: "2:45",
    tagline: "Behind the lens with bespoke creators.",
    description: "A commercial brand documentary exploring the artistry of industrial craftsmanship, recorded in a sun-drenched timber warehouse.",
    cameraSpecs: "Anamorphic Primes · 2.39:1 Cinema Ratio · Custom Score"
  },
  {
    id: "candlelight-gathering",
    title: "Summer Solstice Gala Dinner",
    category: "Events",
    type: "photo",
    image: portfolioEventReception,
    year: "2025",
    location: "Villa Bellafiore",
    aspect: "landscape",
    tagline: "Glasses raised under fairy lights and olive groves.",
    description: "An open-air evening feast celebrating 25 years of family heritage. Unrehearsed laughter, candlelight reflections, and genuine joy.",
    cameraSpecs: "35mm f/1.4 · Low Light Ambient Candlelight Capture"
  },
  {
    id: "botanical-whispers",
    title: "Hands & Wild Eucalyptus",
    category: "Weddings",
    type: "photo",
    image: bouquetDetail,
    year: "2025",
    location: "Tuscan Estate",
    aspect: "square",
    tagline: "The small sacred details that anchor memory.",
    description: "Intertwined fingers, heirloom gold bands, and raw silk trailing from hand-gathered florals. Subtle elegance preserved forever.",
    cameraSpecs: "85mm Macro f/1.8 · Warm Backlight"
  },
  {
    id: "stage-harmonics",
    title: "The Stage in Motion — Classical Recital",
    category: "Dance Programs",
    type: "photo",
    image: servicesDance,
    year: "2025",
    location: "National Concert Hall",
    aspect: "landscape",
    tagline: "Elegance frozen in the golden spotlight.",
    description: "Capturing the intense expression and dynamic extension of classical ballet dancers during a live stage program.",
    cameraSpecs: "70-200mm f/2.8 · Low Noise Sensor · 1/800s Shutter"
  },
  {
    id: "minimalist-campaign",
    title: "Aura & Form — Creative Direction",
    category: "Ads & Brands",
    type: "photo",
    image: servicesCommercial,
    year: "2025",
    location: "Atelier Studio",
    aspect: "landscape",
    tagline: "Clean architectural lighting and textural storytelling.",
    description: "Commercial still photography focusing on natural light, material authenticity, and understated luxury.",
    cameraSpecs: "Medium Format 100MP · Soft Diffuser · Studio Warm Tungsten"
  }
];
