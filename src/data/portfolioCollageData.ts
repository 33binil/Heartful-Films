import porchBench from '../assets/images/portfolio/wedding1.webp';
import brideEditorial from '../assets/images/portfolio/wedding2.webp';
import weddingArch from '../assets/images/portfolio/wedding3.webp';
import preweddingVintage from '../assets/images/portfolio/wedding4.webp';
import heroCouple from '../assets/images/portfolio/wedding5.webp';
import missionCouple from '../assets/images/portfolio/wedding6.webp';
import eventsCelebration from '../assets/images/portfolio/dance1.webp';
import portfolioEventReception from '../assets/images/portfolio/dance2.webp';
import blogChurchCeremony from '../assets/images/portfolio/dance3.webp';
import photoshoot1 from '../assets/images/portfolio/photoshoot1.webp';
import photoshoot2 from '../assets/images/portfolio/photoshoot2.webp';
import photoshoot3 from '../assets/images/portfolio/photoshoot3.webp';
import celebrity1 from '../assets/images/portfolio/celebrity1.webp';
import celebrity2 from '../assets/images/portfolio/celebrity2.webp';
import celebrity3 from '../assets/images/portfolio/celebrity3.webp';

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
    instagramUrl: 'https://www.instagram.com/reel/DXq0sg9Df-o/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Timeless ceremonies, quiet porch moments, and sweeping alpine vows.',
    images: [
      {
        id: 'w-1',
        src: porchBench,
        alt: 'Bride and groom sitting close on sunlit veranda bench',
        caption: 'Cotswold Veranda',
        objectPosition: 'center 35%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'w-2',
        src: brideEditorial,
        alt: 'Fine art bridal lace portrait with natural window lighting',
        caption: 'Morning Light',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'w-3',
        src: weddingArch,
        alt: 'Bride and groom framed by natural stone arch overlooking mountain peaks',
        caption: 'Alpine Archway',
        objectPosition: 'center 30%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-tamil-wedding',
    category: 'TAMIL-WEDDING',
    instagramUrl: 'https://www.instagram.com/p/DbVdvIzFE6v/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Cinematic sunset lake rowboats, coastal highways, and heartfelt stillness.',
    images: [
      {
        id: 'pw-1',
        src: preweddingVintage,
        alt: 'Couple leaning on vintage motorcycle with vibrant wildflower bouquet',
        caption: 'Wildflowers & Highway',
        objectPosition: 'center 35%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'pw-2',
        src: heroCouple,
        alt: 'Couple standing atop golden sunset ridge with floating veil',
        caption: 'Golden Hour Peak',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'pw-3',
        src: missionCouple,
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
    category: 'CLASSICAL-DANCE-EVENT',
    instagramUrl: 'https://www.instagram.com/p/DVTZmo3D094/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Candlelit long-table dinners, live acoustic serenades, and spirited celebrations.',
    images: [
      {
        id: 'ev-1',
        src: eventsCelebration,
        alt: 'Atmospheric candlelit evening banquet with guests toasting champagne',
        caption: 'Tuscan Olive Grove Toast',
        objectPosition: 'center 45%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'ev-2',
        src: portfolioEventReception,
        alt: 'Twilight dinner laughter and wine glasses',
        caption: 'Candlelit Reverie',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'ev-3',
        src: blogChurchCeremony,
        alt: 'Cathedral hall ceremony gathering',
        caption: 'Historic Chancel',
        objectPosition: 'center 35%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'photoshoot',
    category: 'PHOTOSHOOT',
    instagramUrl: 'https://www.instagram.com/reel/DTkqzFukpPV/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Capturing motion with clarity, precision and creativity.',
    images: [
      {
        id: 'ad-1',
        src: photoshoot1,
        alt: 'Creative director monitoring commercial shot on monitor',
        caption: 'Director Monitor & Framing',
        objectPosition: 'center 40%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'ad-2',
        src: photoshoot2,
        alt: 'Director with professional cinema camera rig filming model in warehouse studio',
        caption: 'Studio Silk Campaign',
        objectPosition: 'center 30%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'ad-3',
        src: photoshoot3,
        alt: 'Architectural stone arch framing',
        caption: 'Alpine Location Scouting',
        objectPosition: 'center 30%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'celebrity-reel-shoot',
    category: 'CELEBRITY SHOOT',
    instagramUrl: 'https://www.instagram.com/_heartful___/',
    description: 'Theatrical stage lighting, atmospheric mist, and expressive contemporary choreography.',
    images: [
      {
        id: 'dp-1',
        src: celebrity1,
        alt: 'Stage performance lighting and dramatic haze',
        caption: 'Proscenium Atmosphere',
        objectPosition: 'center 35%',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'dp-2',
        src: celebrity2,
        alt: 'Contemporary dance duo suspended mid-air in theatrical light',
        caption: 'Synchronized Gravity',
        objectPosition: 'center 40%',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'dp-3',
        src: celebrity3,
        alt: 'Solo expressive dancer in amber fabric under dramatic warm spotlight',
        caption: 'Amber Flight in the Mist',
        objectPosition: 'center 30%',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  }
];
