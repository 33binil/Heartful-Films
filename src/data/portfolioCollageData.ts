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
import celebrity1 from '../assets/images/portfolio/celebrity4.webp';
import celebrity2 from '../assets/images/portfolio/celebrity5.webp';
import celebrity3 from '../assets/images/portfolio/celebrity6.webp';
import classicalmusic1 from '../assets/images/portfolio/classicalmusic1.webp';
import classicalmusic2 from '../assets/images/portfolio/classicalmusic2.webp';
import classicalmusic3 from '../assets/images/portfolio/classicalmusic3.webp';
import mohiniyattam1 from '../assets/images/portfolio/mohiniyattam1.webp';
import mohiniyattam2 from '../assets/images/portfolio/mohiniyattam2.webp';
import mohiniyattam3 from '../assets/images/portfolio/mohiniyattam3.webp';
import wedding7 from '../assets/images/portfolio/wedding7.webp';
import wedding8 from '../assets/images/portfolio/wedding8.webp';
import wedding9 from '../assets/images/portfolio/wedding9.webp';
import temple1 from '../assets/images/portfolio/temple1.webp';
import temple2 from '../assets/images/portfolio/temple2.webp';
import temple3 from '../assets/images/portfolio/temple3.webp';


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
  },
  {
    id: 'set-classical-music',
    category: 'MUSIC',
    instagramUrl: 'https://www.instagram.com/reel/DWVIbw6k6Rw/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'An artistic visual journey capturing the elegance, rhythm, and timeless beauty of classical music.',
    images: [
      {
        id: 'cm-1',
        src: classicalmusic1,
        alt: 'Classical music album shoot - first photograph',
        caption: 'Musical Elegance',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'cm-2',
        src: classicalmusic2,
        alt: 'Classical music album shoot - second photograph',
        caption: 'Rhythm & Grace',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'cm-3',
        src: classicalmusic3,
        alt: 'Classical music album shoot - third photograph',
        caption: 'Timeless Melodies',
        objectPosition: 'center center',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
  id: 'set-mohiniyattam',
  category: 'DANCE',
  instagramUrl: 'https://www.instagram.com/p/DTSftdmEbrT/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  description: 'The graceful expressions, flowing movements, and timeless elegance of Kerala’s classical dance tradition.',
  images: [
    {
      id: 'm-1',
      src: mohiniyattam1,
      alt: 'Mohiniyattam dancer in a traditional Kerala costume',
      caption: 'Traditional Grace',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'landscape-back'
    },
    {
      id: 'm-2',
      src: mohiniyattam2,
      alt: 'Mohiniyattam dancer expressing classical elegance through movement',
      caption: 'Expressions of Art',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'vertical-center'
    },
    {
      id: 'm-3',
      src: mohiniyattam3,
      alt: 'Mohiniyattam classical dance portrait celebrating Kerala’s cultural heritage',
      caption: 'Heritage in Motion',
      objectPosition: 'center center',
      shape: 'arch-top',
      role: 'arch-right'
    }
  ]
},
{
  id: 'set-save-the-date',
  category: 'WEDDINGS',
  instagramUrl: 'https://www.instagram.com/reel/DInQUeRPwYW/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  description: 'A celebration of love, capturing romantic moments and the beautiful anticipation of a new beginning.',
  images: [
    {
      id: 'std-1',
      src: wedding7,
      alt: 'Romantic save the date couple photoshoot',
      caption: 'A Date to Remember',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'landscape-back'
    },
    {
      id: 'std-2',
      src: wedding8,
      alt: 'Couple sharing an intimate moment during their save the date shoot',
      caption: 'Moments of Love',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'vertical-center'
    },
    {
      id: 'std-3',
      src: wedding9,
      alt: 'Elegant save the date portrait celebrating the couple’s love story',
      caption: 'Forever Begins',
      objectPosition: 'center center',
      shape: 'arch-top',
      role: 'arch-right'
    }
  ]
},
{
  id: 'set-temple-traditional',
  category: 'CULTURE',
  instagramUrl: 'https://www.instagram.com/reel/DAAzWMqP3Ux/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  description: 'A visual celebration of temple traditions, cultural heritage, and the timeless beauty of Kerala.',
  images: [
    {
      id: 'tt-1',
      src: temple1,
      alt: 'Traditional temple atmosphere captured during a cultural reel shoot',
      caption: 'Sacred Traditions',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'landscape-back'
    },
    {
      id: 'tt-2',
      src: temple2,
      alt: 'Traditional Kerala attire captured in a temple setting',
      caption: 'Cultural Elegance',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'vertical-center'
    },
    {
      id: 'tt-3',
      src: temple3,
      alt: 'A cinematic frame capturing the heritage and atmosphere of a Kerala temple',
      caption: 'Timeless Heritage',
      objectPosition: 'center center',
      shape: 'arch-top',
      role: 'arch-right'
    }
  ]
},
];
