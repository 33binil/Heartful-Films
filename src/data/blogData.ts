import blogTraditionalWedding from '../assets/images/blog_traditional_wedding_1792327923485.jpg';
import bouquetDetail from '../assets/images/about_bouquet_detail_1792326982071.jpg';
import heroCouple from '../assets/images/hero_cinematic_couple_1792326980733.jpg';
import blogChurchCeremony from '../assets/images/blog_church_ceremony_1792327922746.jpg';
import brideEditorial from '../assets/images/about_editorial_bride_1792326982445.jpg';
import missionCouple from '../assets/images/mission_couple_intimate_1792327002399.jpg';
import portfolioEventReception from '../assets/images/portfolio_event_reception_1792327003671.jpg';

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
    id: "abhishek-and-saloni",
    title: "Abhishek & Saloni",
    coupleNames: "Abhishek & Saloni",
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
  {
    id: "aju-and-taniya",
    title: "Aju & Taniya",
    coupleNames: "Aju & Taniya",
    subtitle: "A Cathedral, a Veil, and Very Little Else",
    category: "Church Weddings",
    date: "September 2025",
    readTime: "5 min read",
    image: blogChurchCeremony,
    galleryImages: [
      blogChurchCeremony,
      brideEditorial,
      bouquetDetail
    ],
    location: "St. Mary's Cathedral & The Cloisters",
    excerpt: "Aju and Taniya's wedding was elegant in the way that only very simple things can be: a church, an antique lace veil, and a family that showed up in full presence to witness a lifelong promise...",
    fullStory: [
      "Some weddings do not wait for theatrical orchestration; they rest in the quiet resonance of stone and morning light. St. Mary's was bathed in cool morning shadows when Taniya stepped through the heavy timber doors, her veil catching the soft slant of east light.",
      "Aju waited by the altar in a tailored navy suit, eyes steady and quiet. When their hands met at the chancel steps, the entire hall fell into a profound, reverent hush.",
      "Following the ceremony, the pair walked together through the stone archways into the cloisters. We kept our distance with a 50mm prime lens, allowing the gentle rustle of the bridal gown and their shared laughter to unfold entirely unprompted."
    ],
    vowsOrQuote: "To love you without restraint, to hold your heart as sacred, and to choose you with every breath.",
    cameraNotes: "Captured on 50mm f/1.2 · Natural North Window Light · Dual Archival Audio Mics"
  },
  {
    id: "clara-and-julian",
    title: "Clara & Julian",
    coupleNames: "Clara & Julian",
    subtitle: "Highland Whispers & Golden Ridge Vows",
    category: "Elopements",
    date: "August 2025",
    readTime: "4 min read",
    image: heroCouple,
    galleryImages: [
      heroCouple,
      missionCouple
    ],
    location: "Southern Highland Ridge",
    excerpt: "The wind carried the scent of wild mountain thyme. Clara and Julian chose to exchange their vows overlooking a vast alpine valley as the setting sun cast long amber shadows across the hills...",
    fullStory: [
      "Perched high on an exposed mountain trail, the silence was only broken by the mountain wind and the quiet murmur of two voices making a covenant.",
      "Clara wore an unstructured gown with a cathedral veil that danced effortlessly in the breeze. Julian's tweed jacket caught the warm amber rays of golden hour, framing a composition that felt like a timeless European painting.",
      "We documented this elopement with a single cinema camera on a lightweight shoulder rig, ensuring the couple never felt performative or observed, but entirely enveloped in their vows."
    ],
    vowsOrQuote: "You are the quiet summit where my restless heart finds peace.",
    cameraNotes: "35mm Anamorphic Prime · 4K 24fps · Pure Golden Hour Illumination"
  },
  {
    id: "krishna-and-connor",
    title: "Krishna & Connor",
    coupleNames: "Krishna & Connor",
    subtitle: "Bridges of Belonging: A Tapestry of Traditions",
    category: "Cross-Cultural",
    date: "July 2025",
    readTime: "6 min read",
    image: missionCouple,
    galleryImages: [
      missionCouple,
      portfolioEventReception
    ],
    location: "Cotswold Hills & Heritage Manor",
    excerpt: "Every love story possesses a unique architecture, but for Krishna and Connor, it was a beautiful bridge spanning across cultures and continents, celebrated with laughter under ancient trees...",
    fullStory: [
      "Certain unions do not merely join two individuals; they bring entire worlds into dialogue. Krishna brought the vivid hues and soulful rituals of her ancestral heritage, while Connor brought the understated warmth of the English countryside.",
      "During the twilight reception, speeches were translated across three languages, culminating in a spontaneous dance on the lawn that lasted until the dew settled on the grass.",
      "Our team captured both the photographic stills and the signature cinematic highlight film, preserving the tears, toasts, and triumphant embrace as dusk settled over the hills."
    ],
    vowsOrQuote: "Where you go, I go. What is yours is mine, and where you stand, I will build our sanctuary.",
    cameraNotes: "Dual Operator · 35mm & 85mm Primes · Low Light Candlelight Sensor Tuning"
  },
  {
    id: "summer-solstice-banquet",
    title: "Under The Tuscan Olive Trees",
    coupleNames: "Villa Bellafiore Gala",
    subtitle: "Candlelight, Shared Bread, and 25 Years of Family",
    category: "Events & Dinners",
    date: "June 2025",
    readTime: "3 min read",
    image: portfolioEventReception,
    galleryImages: [
      portfolioEventReception,
      bouquetDetail
    ],
    location: "Villa Bellafiore, Florence",
    excerpt: "An open-air evening feast celebrating a quarter-century of friendship and heritage. Unrehearsed laughter, candle wax dripping on linen, and glasses raised high under fairy lights...",
    fullStory: [
      "Long wooden tables stretched through the center of an ancient olive grove, illuminated by hundreds of glass storm lanterns and festoon bulb canopies.",
      "The beauty of live event cinematography lies in anticipating human connection before it happens: the grandfather sharing a quiet joke with a grandchild, the spontaneous clinking of wine glasses, the sudden roar of laughter at a nostalgic story.",
      "We avoided harsh artificial flashes entirely, relying on custom low-light cinema sensors and high-speed primes to capture the natural glow of candlelight and genuine warmth."
    ],
    cameraNotes: "35mm f/1.4 Prime · ISO 3200 Native Dual ISO · Ambient Candlelight Only"
  }
];
