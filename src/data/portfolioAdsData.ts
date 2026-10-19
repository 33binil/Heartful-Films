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
 *
 * NOTE ON GOOGLE DRIVE SOURCES:
 * A Google Drive share URL (and its /uc?export=download variant) is not a
 * direct media URL, so it cannot be played by the carousel's HTML <video>
 * element. The original Drive URL is kept below for reference; to enable
 * playback, upload/export the film to a direct MP4/WebM URL (or integrate the
 * Drive /preview URL in an iframe). As of this entry, the Drive download
 * endpoint returns an HTML page for this file rather than video content.
 */
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
    // Google Drive file ID: 1cvbSLWRSil5OE2KuO0Q2P8EX18bQCQrm
    // Not directly playable by an HTML <video> element (see note above).
    videoUrl:
      'https://drive.google.com/file/d/1cvbSLWRSil5OE2KuO0Q2P8EX18bQCQrm/view?usp=drive_link',
    alt: 'Gardenia Convention Centre commercial film',
  },
];
