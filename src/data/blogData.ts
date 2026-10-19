import blogTraditionalWedding from '../assets/images/portfolio/wedding1.webp';
import bouquetDetail from '../assets/images/portfolio/wedding2.webp';
import heroCouple from '../assets/images/portfolio/wedding3.webp';

export interface BlogPost {
  id: string;
  title: string;
  coupleNames: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  galleryImages: string[];
  location: string;
  excerpt: string;
  fullStory: string[];
  vowsOrQuote?: string;
  cameraNotes: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "jayesh-and-anamika",
    title: "Jayesh & Anamika",
    coupleNames: "Jayesh & Anamika",
    subtitle: "A Wedding Woven in Grandeur & Sacred Fire",
    category: "Traditional Weddings",
    date: "October 2025",
    readTime: "4 min read",
    image: blogTraditionalWedding,
    galleryImages: [
      blogTraditionalWedding,
      bouquetDetail,
      heroCouple
    ],
    location: "Kunnathur Heritage Estate",
    excerpt: "There is a quiet majesty when the sacred fire is lit. Between Abhishek and Saloni's vows beneath garlands of jasmine and red roses, every glance held generations of family warmth and unscripted laughter...",
    fullStory: [
      "There is a painted king on one of the courtyard walls at the heritage estate, and at some point during Abhishek and Saloni's celebrations, the bride paused beneath him — red silk, gold embroidery, and fragrant rose garlands cascading gently across the stone verandah.",
      "The ceremony was rich in sacred rites: the vermilion offering, the soft rustle of silk sarees, and the rhythmic beat of percussion echoing into the night sky illuminated by hundreds of floating oil lamps.",
      "As cinematographers, our intention was to blend into the shadows, framing the quiet unscripted moments: Saloni's grandmother touching her cheek with trembling fingers, Abhishek laughing softly as the garlands were exchanged, and the radiant shower of marigold petals caught suspended in mid-air by the cinema lights."
    ],
    vowsOrQuote: "In the presence of this fire, we promise to walk not in front or behind, but beside each other through every season.",
    cameraNotes: "Captured on 35mm Prime & 85mm Portrait · 4K 10-bit S-Log3 · Ambient Firelight & Warm Tungsten"
  },
];
