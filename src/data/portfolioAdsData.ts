/**
 * Ads & Commercial Films portfolio.
 *
 * Add projects here as they become available, e.g.:
 *
 * {
 *   id: 'brand-campaign-2026',
 *   title: 'Campaign Name',
 *   brand: 'Brand Name',
 *   videoUrl: adVideo,                       // imported from '../assets/video/...'
 *   posterUrl: adPoster,                     // optional still frame
 *   instagramUrl: 'https://www.instagram.com/...',
 *   description: 'Short project description',
 *   alt: 'Accessible description of the film',
 * }
 *
 * The section is hidden automatically while this array is empty.
 */
import Gardenia from '../assets/video/Ads/CONVENTION_CENTRE_AD_OPTIMIZED.mp4';
import carAd from '../assets/video/Ads/CAR_AD_OPTIMIZED.mp4';
import danceSchoolAd from '../assets/video/Ads/DANCE_SCHOOL_AD_OPTIMIZED.mp4';
import politicalAd from '../assets/video/Ads/POLITICAL_AD_OPTIMIZED.mp4';
import shortFilmAd from '../assets/video/Ads/SHORT_FILM_AD_OPTIMIZED.mp4';

export interface PortfolioAd {
  id: string;
  title: string;
  brand?: string;
  videoUrl: string;
  posterUrl?: string;
  instagramUrl?: string;
  description?: string;
  alt?: string;
}

export const portfolioAdsData: PortfolioAd[] = [
  {
    id: 'gardenia-convention-centre',
    title: 'Gardenia Convention Centre',
    brand: 'Gardenia Convention Centre',
    videoUrl: Gardenia,
    alt: 'Gardenia Convention Centre commercial film',
  },
  {
    id: 'car-commercial',
    title: 'Car Commercial',
    brand: 'Automotive Campaign',
    videoUrl: carAd,
    alt: 'Cinematic car commercial film',
  },
  {
    id: 'dance-school',
    title: 'Dance School',
    brand: 'Dance Academy',
    videoUrl: danceSchoolAd,
    alt: 'Dance school promotional film',
  },
  {
    id: 'political-campaign',
    title: 'Political Campaign',
    brand: 'Election Campaign',
    videoUrl: politicalAd,
    alt: 'Political campaign film',
  },
  {
    id: 'short-film',
    title: 'Short Film',
    brand: 'Heartful Films',
    videoUrl: shortFilmAd,
    alt: 'Cinematic short film',
  },
];
