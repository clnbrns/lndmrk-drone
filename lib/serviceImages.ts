/**
 * Maps service slugs to their hero background photo and portfolio images.
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
  'mapping-and-surveying': {
    src: '/images/portfolio/mapping-lake-marina-aerial.jpg',
    alt: 'High-altitude aerial survey photo of lake marina and surrounding property',
  },
  'film-and-media': {
    src: '/images/portfolio/film-dallas-reunion-tower.jpg',
    alt: 'Cinematic aerial photo of Dallas Reunion Tower and downtown skyline',
  },
  'events': {
    src: '/images/portfolio/events-farrington-field-skyline.jpg',
    alt: 'Aerial drone photo of Farrington Field stadium with Fort Worth skyline',
  },
  'government-and-public-safety': {
    src: '/images/portfolio/government-school-playground.jpg',
    alt: 'Aerial documentation of school campus playground and grounds',
  },
  // agriculture and inspection: placeholder until photos are available
  'agriculture': {
    src: '/images/portfolio/mapping-lake-marina-aerial.jpg',
    alt: 'Aerial drone survey of land and property',
  },
  'inspection': {
    src: '/images/portfolio/construction-baseball-academy.jpg',
    alt: 'Aerial inspection photo of commercial facility and grounds',
  },
};
