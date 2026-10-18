export interface PortfolioCollageImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
  shape?: 'rect' | 'arch-top' | 'arch-full';
  role?: 'landscape-back' | 'vertical-center' | 'arch-right';
}

export interface PortfolioCollageSet {
  id: string;
  category: string;
  instagramUrl: string;
  description: string;
  images: [PortfolioCollageImage, PortfolioCollageImage, PortfolioCollageImage]; // Exactly 3 attached photos
}

export const PORTFOLIO_COLLAGE_SETS: PortfolioCollageSet[] = [
  {
    id: 'set-weddings',
    category: 'WEDDINGS',
    instagramUrl: 'https://www.instagram.com/_heartful___/',
    description: 'Timeless ceremonies, quiet porch moments, and sweeping alpine vows.',
    images: [
      {
        id: 'w-1',
        src: '/src/assets/images/collage_porch_bench_1792329769670.jpg',
        alt: 'Bride and groom sitting close on sunlit veranda bench',
        caption: 'Cotswold Veranda',
        objectPosition: 'center 35%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'w-2',
        src: '/src/assets/images/about_editorial_bride_1792326982445.jpg',
        alt: 'Fine art bridal lace portrait with natural window lighting',
        caption: 'Morning Light',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'w-3',
        src: '/src/assets/images/collage_wedding_arch_1792329749561.jpg',
        alt: 'Bride and groom framed by natural stone arch overlooking mountain peaks',
        caption: 'Alpine Archway',
        objectPosition: 'center 30%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-prewedding',
    category: 'PRE-WEDDING',
    instagramUrl: 'https://www.instagram.com/_heartful___/',
    description: 'Cinematic sunset lake rowboats, coastal highways, and heartfelt stillness.',
    images: [
      {
        id: 'pw-1',
        src: '/src/assets/images/collage_prewedding_vintage_1792329768764.jpg',
        alt: 'Couple leaning on vintage motorcycle with vibrant wildflower bouquet',
        caption: 'Wildflowers & Highway',
        objectPosition: 'center 35%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'pw-2',
        src: '/src/assets/images/hero_cinematic_couple_1792326980733.jpg',
        alt: 'Couple standing atop golden sunset ridge with floating veil',
        caption: 'Golden Hour Peak',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'pw-3',
        src: '/src/assets/images/mission_couple_intimate_1792327002399.jpg',
        alt: 'Intimate embrace portrait at dusk in wild grass',
        caption: 'Embrace in the Wild Grass',
        objectPosition: 'center 30%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-events',
    category: 'EVENTS',
    instagramUrl: 'https://www.instagram.com/_heartful___/',
    description: 'Candlelit long-table dinners, live acoustic serenades, and spirited celebrations.',
    images: [
      {
        id: 'ev-1',
        src: '/src/assets/images/collage_events_celebration_1792329769600.jpg',
        alt: 'Atmospheric candlelit evening banquet with guests toasting champagne',
        caption: 'Tuscan Olive Grove Toast',
        objectPosition: 'center 45%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'ev-2',
        src: '/src/assets/images/portfolio_event_reception_1792327003671.jpg',
        alt: 'Twilight dinner laughter and wine glasses',
        caption: 'Candlelit Reverie',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'ev-3',
        src: '/src/assets/images/blog_church_ceremony_1792327922746.jpg',
        alt: 'Cathedral hall ceremony gathering',
        caption: 'Historic Chancel',
        objectPosition: 'center 35%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-ads-brands',
    category: 'ADS & BRAND FILMS',
    instagramUrl: 'https://www.instagram.com/_heartful___/',
    description: 'Commercial productions, brand visual identity, and cinematic director setups.',
    images: [
      {
        id: 'ad-1',
        src: '/src/assets/images/services_commercial_brand_1792326982776.jpg',
        alt: 'Creative director monitoring commercial shot on monitor',
        caption: 'Director Monitor & Framing',
        objectPosition: 'center 40%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'ad-2',
        src: '/src/assets/images/collage_brand_cinematic_rig_1792329829912.jpg',
        alt: 'Director with professional cinema camera rig filming model in warehouse studio',
        caption: 'Studio Silk Campaign',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'ad-3',
        src: '/src/assets/images/collage_wedding_arch_1792329749561.jpg',
        alt: 'Architectural stone arch framing',
        caption: 'Alpine Location Scouting',
        objectPosition: 'center 30%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-dance',
    category: 'DANCE PROGRAMS',
    instagramUrl: 'https://www.instagram.com/_heartful___/',
    description: 'Theatrical stage lighting, atmospheric mist, and expressive contemporary choreography.',
    images: [
      {
        id: 'dp-1',
        src: '/src/assets/images/services_dance_stage_1792326982367.jpg',
        alt: 'Stage performance lighting and dramatic haze',
        caption: 'Proscenium Atmosphere',
        objectPosition: 'center 35%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'dp-2',
        src: '/src/assets/images/collage_dance_duo_1792329830526.jpg',
        alt: 'Contemporary dance duo suspended mid-air in theatrical light',
        caption: 'Synchronized Gravity',
        objectPosition: 'center 40%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'dp-3',
        src: '/src/assets/images/collage_dance_stage_arch_1792329770389.jpg',
        alt: 'Solo expressive dancer in amber fabric under dramatic warm spotlight',
        caption: 'Amber Flight in the Mist',
        objectPosition: 'center 30%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  }
];
