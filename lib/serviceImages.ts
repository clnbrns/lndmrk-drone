/**
 * Maps service slugs to their hero background photo.
 * Add/update paths here as you add new photos to public/images/.
 */
export const serviceHeroImages: Record<string, { src: string; alt: string }> = {
  'real-estate': {
    src: '/images/portfolio/real-estate-mediterranean-estate.jpg',
    alt: 'Aerial drone photo of luxury estate property showcasing grounds, pool, and architecture',
  },
  'construction': {
    src: '/images/portfolio/construction-putting-green-complete.jpg',
    alt: 'Aerial progress photo of completed backyard construction project',
  },
  'film-and-media': {
    src: '/images/portfolio/film-dallas-reunion-tower.jpg',
    alt: 'Cinematic aerial photo of Dallas Reunion Tower and downtown skyline',
  },
  'events': {
    src: '/images/portfolio/events-farrington-field-skyline.jpg',
    alt: 'Aerial drone photo of Farrington Field stadium with Fort Worth skyline',
  },
  'inspection': {
    src: '/images/portfolio/construction-baseball-academy.jpg',
    alt: 'Aerial inspection photo of commercial facility and grounds',
  },
  'government-and-public-safety': {
    src: '/images/portfolio/government-school-playground.jpg',
    alt: 'Aerial documentation of school campus playground and grounds',
  },
  'ranch-land-photography': {
    src: '/images/portfolio/film-texas-hill-country-lake-canyon.jpg',
    alt: 'High-altitude aerial photo of Texas land with lake, canyon, and open acreage',
  },
  'roof-inspections': {
    src: '/images/portfolio/real-estate-fort-worth-home.jpg',
    alt: 'Overhead drone photo of a Fort Worth home showing full roof condition',
  },
  'commercial-building-inspections': {
    src: '/images/portfolio/construction-bearcat-artdocks-overhead.jpg',
    alt: 'Overhead aerial photo of commercial building roof and surrounding facility',
  },
  'construction-progress-documentation': {
    src: '/images/portfolio/construction-bearcat-turf-installation-progress.jpg',
    alt: 'Aerial progress photo of active construction site installation underway',
  },
};
