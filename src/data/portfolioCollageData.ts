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
import wedding2_1 from '../assets/images/portfolio/wedding10.webp';
import wedding2_2 from '../assets/images/portfolio/wedding11.webp';
import wedding2_3 from '../assets/images/portfolio/wedding12.webp';
import wedding3_1 from '../assets/images/portfolio/wedding13.webp';
import wedding3_2 from '../assets/images/portfolio/wedding14.webp';
import wedding3_3 from '../assets/images/portfolio/wedding15.webp';
import temple1 from '../assets/images/portfolio/temple1.webp';
import temple2 from '../assets/images/portfolio/temple2.webp';
import temple3 from '../assets/images/portfolio/temple3.webp';
import temple4 from '../assets/images/portfolio/temple4.webp';
import temple5 from '../assets/images/portfolio/temple5.webp';
import temple6 from '../assets/images/portfolio/temple6.webp';
import paddyfield1 from '../assets/images/portfolio/feild1.webp';
import paddyfield2 from '../assets/images/portfolio/feild2.webp';
import paddyfield3 from '../assets/images/portfolio/feild3.webp';
import celebrityshoot1 from '../assets/images/portfolio/celebrity7.webp';
import celebrityshoot2 from '../assets/images/portfolio/celebrity8.webp';
import celebrityshoot3 from '../assets/images/portfolio/celebrity9.webp';



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
    instagramUrl: 'https://www.instagram.com/reel/DLr9hEOyHTC/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
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
      id: 'set-temple-traditional-1',
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
  {
    id: 'set-temple-traditional-2',
    category: 'CULTURE',
    instagramUrl: 'https://www.instagram.com/reel/C_2bfzByLGA/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'A visual celebration of temple traditions, cultural heritage, and the timeless beauty of Kerala.',
    images: [
    {
      id: 'tt-4',
      src: temple4,
      alt: 'Traditional temple atmosphere captured during a cultural reel shoot',
      caption: 'Sacred Traditions',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'landscape-back'
    },
    {
      id: 'tt-5',
      src: temple5,
      alt: 'Traditional Kerala attire captured in a temple setting',
      caption: 'Cultural Elegance',
      objectPosition: 'center center',
      shape: 'rect',
      role: 'vertical-center'
    },
    {
      id: 'tt-6',
      src: temple6,
      alt: 'A cinematic frame capturing the heritage and atmosphere of a Kerala temple',
      caption: 'Timeless Heritage',
      objectPosition: 'center center',
      shape: 'arch-top',
      role: 'arch-right'
     }
    ]
  },
  {
    id: 'set-paddy-field',
    category: 'PHOTOSHOOT',
    instagramUrl: 'https://www.instagram.com/reel/C_6Fe_TtF9d/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==',
    description: 'Romantic moments captured amidst lush green paddy fields, blending natural beauty with timeless storytelling.',
    images: [
      {
        id: 'pf-1',
        src: paddyfield1,
        alt: 'Romantic couple photoshoot surrounded by lush green paddy fields',
        caption: 'Fields of Love',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'pf-2',
        src: paddyfield2,
        alt: 'Couple sharing a beautiful moment in a traditional Kerala paddy field',
        caption: 'Nature & Romance',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'pf-3',
        src: paddyfield3,
        alt: 'Cinematic portrait captured against a scenic green paddy field',
        caption: 'A Timeless Story',
        objectPosition: 'center center',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-celebrity-shoot',
    category: 'PORTRAITS',
    instagramUrl: 'https://www.instagram.com/reel/C_cPMDTSlXa/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Striking portraits and cinematic moments capturing personality, presence, and star power.',
    images: [
      {
        id: 'cs-1',
        src: celebrityshoot1,
        alt: 'Celebrity portrait captured during a professional photoshoot',
        caption: 'Star Presence',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'cs-2',
        src: celebrityshoot2,
        alt: 'Editorial-style celebrity portrait highlighting personal style',
        caption: 'Beyond the Spotlight',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'cs-3',
        src: celebrityshoot3,
        alt: 'Cinematic celebrity portrait from a professional shoot',
        caption: 'Iconic Frames',
        objectPosition: 'center center',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-wedding-2',
    category: 'WEDDINGS',
    instagramUrl: 'https://www.instagram.com/reel/C_A3l8zPYCI/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Beautifully captured wedding moments filled with emotion, elegance, and the timeless joy of two souls becoming one.',
    images: [
      {
        id: 'w2-1',
        src: wedding2_1,
        alt: 'Bride and groom sharing a beautiful moment on their wedding day',
        caption: 'A Day to Remember',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'w2-2',
        src: wedding2_2,
        alt: 'Elegant bridal portrait capturing the beauty of the wedding celebration',
        caption: 'Bridal Elegance',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'w2-3',
        src: wedding2_3,
        alt: 'Cinematic wedding portrait capturing a timeless romantic moment',
        caption: 'Forever Together',
        objectPosition: 'center center',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
  {
    id: 'set-wedding-3',
    category: 'WEDDINGS',
    instagramUrl: '',
    description: 'An elegant collection of heartfelt wedding moments, intimate emotions, and beautiful memories captured to last a lifetime.',
    images: [
      {
        id: 'w3-1',
        src: wedding3_1,
        alt: 'Bride and groom captured in a romantic wedding portrait',
        caption: 'Moments of Forever',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'landscape-back'
      },
      {
        id: 'w3-2',
        src: wedding3_2,
        alt: 'Bride in an elegant bridal look during the wedding celebration',
        caption: 'The Bridal Story',
        objectPosition: 'center center',
        shape: 'rect',
        role: 'vertical-center'
      },
      {
        id: 'w3-3',
        src: wedding3_3,
        alt: 'Cinematic wedding portrait filled with emotion and elegance',
        caption: 'Eternal Promises',
        objectPosition: 'center center',
        shape: 'arch-top',
        role: 'arch-right'
      }
    ]
  },
];
