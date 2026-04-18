export interface PortfolioItem {
  src: string;
  alt: string;
  caption?: string;
  category: string;
  featured?: boolean;
}

/**
 * Portfolio gallery — all drone photos organized by category.
 * Add new entries here after dropping images into /public/images/portfolio/.
 */
export const portfolioItems: PortfolioItem[] = [
  // ── Real Estate ────────────────────────────────────────────────────────────
  {
    src: '/images/portfolio/real-estate-luxury-villa-hillside.jpg',
    alt: 'Aerial drone photo of modern luxury villa with infinity pool on a hillside overlooking a tropical coastline',
    caption: 'Luxury Villa — Coastal Hillside',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-beach-resort-cove.jpg',
    alt: 'Aerial drone photo of a beach resort nestled in a dark sand cove with turquoise water, palm trees, and hillside villas',
    caption: 'Beach Resort — Private Cove',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-mediterranean-estate.jpg',
    alt: 'Aerial view of luxury Mediterranean estate with large pool, manicured grounds, and red tile roof in Texas Hill Country',
    caption: 'Luxury Estate — Hill Country, TX',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-fort-worth-home.jpg',
    alt: 'Aerial drone photo of custom home with lush green lawn, stone retaining walls, and putting green in Fort Worth suburb',
    caption: 'Custom Home — Fort Worth, TX',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-luxury-sports-court.jpg',
    alt: 'Aerial view of luxury home with private soccer field, pool, basketball court, and red tile roof at dusk',
    caption: 'Luxury Home with Sports Complex',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-luxury-sports-court-2.jpg',
    alt: 'Overhead aerial of luxury home with private sports field, swimming pool, and basketball court',
    caption: 'Luxury Home — Private Athletic Facilities',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-lake-property.jpg',
    alt: 'Aerial drone photo of Texas lake property with limestone bluffs, residential development, and glass-still water reflections',
    caption: 'Lake Property — Texas Hill Country',
    category: 'Real Estate',
  },

  // ── Film & Media ───────────────────────────────────────────────────────────
  {
    src: '/images/portfolio/film-houston-skyline-night.jpg',
    alt: 'Night aerial drone photo of the Houston city skyline with colorful building lights, highway traffic, and ferris wheel',
    caption: 'Houston Skyline — Night Aerial',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-houston-skyline-night-vertical.jpg',
    alt: 'Vertical night aerial of downtown Houston skyline with glowing skyscrapers, highway interchange, and city lights',
    caption: 'Houston Skyline — Night Vertical',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-cove-palms.jpg',
    alt: 'Aerial drone photo looking through tropical palm trees toward a secluded ocean cove with rocky cliffs and blue water',
    caption: 'Tropical Coastline — Pacific Cove',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-costa-rica-beach-cove.jpg',
    alt: 'Aerial view of a dramatic dark sand beach cove with turquoise breaking waves, rocky coastline, and distant islands',
    caption: 'Pacific Coastline — Dark Sand Cove',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-turquoise-water-overhead.jpg',
    alt: 'Straight-down overhead aerial of brilliant turquoise ocean water with light patterns and surface reflections',
    caption: 'Turquoise Water — Overhead Abstract',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-beach-waves-overhead.jpg',
    alt: 'Overhead aerial drone photo of waves washing onto a dark sand beach with a single rock visible in clear shallow water',
    caption: 'Waves & Shore — Overhead',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-boats-turquoise-water.jpg',
    alt: 'Straight-down aerial of approximately 15 white fishing boats anchored on brilliant turquoise water near a beach shoreline',
    caption: 'Fishing Fleet — Turquoise Bay',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-dallas-reunion-tower.jpg',
    alt: 'Cinematic aerial photo of Dallas Reunion Tower rising above downtown Dallas skyline with blue skies and clouds',
    caption: 'Downtown Dallas — Reunion Tower',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-new-orleans-dusk.jpg',
    alt: 'Aerial drone photo of New Orleans skyline at dusk with purple and pink sunset sky, city lights, and French Quarter streets',
    caption: 'New Orleans at Dusk',
    category: 'Film & Media',
    featured: true,
  },

  // ── Events ─────────────────────────────────────────────────────────────────
  {
    src: '/images/portfolio/events-mavs-ballpark-dallas.jpg',
    alt: 'Aerial drone photo of Mavs Ballpark baseball field with the Dallas skyline including American Airlines Center in the background',
    caption: 'Mavs Ballpark — Dallas, TX',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-mural-district-courtyard.jpg',
    alt: 'Aerial oblique view of an outdoor mural art district courtyard with colorful murals on warehouse walls and artificial turf installation',
    caption: 'Mural Art District — Venue Setup',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-resort-cove-golden-hour.jpg',
    alt: 'Aerial drone photo at golden hour of a beach resort on a dark sand cove with rocky foreshore, waves, and hillside villas',
    caption: 'Beach Resort — Golden Hour',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-farrington-field-skyline.jpg',
    alt: 'Aerial drone photo of Farrington Field stadium in Fort Worth with the downtown Fort Worth skyline in the background',
    caption: 'Farrington Field — Fort Worth ISD',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-farrington-field-overhead.jpg',
    alt: 'Overhead aerial view of Farrington Field stadium showing full football field with track and FWISD branding',
    caption: 'Farrington Field — Overhead View',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-baseball-fields-night.jpg',
    alt: 'Night aerial drone photo of three baseball diamonds lit by stadium lights with city lights visible in the background',
    caption: 'Baseball Complex — Night Aerial',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-hill-country-resort-pool.jpg',
    alt: 'Aerial view of Texas Hill Country sports resort with pool, cabanas, baseball fields, and Palo Pinto mountains in background',
    caption: 'Hill Country Sports Resort',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-hill-country-resort-baseball.jpg',
    alt: 'Aerial drone photo of baseball diamond with B logo, covered grandstands, players on field, and Hill Country landscape',
    caption: 'Hill Country Resort — Baseball',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-bearcat-baseball.jpg',
    alt: 'Overhead aerial of Aledo Bearcat Baseball field showing Bearcat logo on green outfield grass and diamond from directly above',
    caption: 'Aledo Bearcat Baseball — Overhead',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-destin-beach-aerial.jpg',
    alt: 'Aerial drone photo of Destin Florida beach with emerald green Gulf water, white sand, and resort hotels along shoreline',
    caption: 'Destin, FL — Emerald Coast Aerial',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-banana-boats-destin.jpg',
    alt: 'Overhead aerial drone photo of banana boats being towed on turquoise Gulf of Mexico water near Destin beach resort',
    caption: 'Destin, FL — Water Sports Aerial',
    category: 'Events',
  },

  // ── Construction ───────────────────────────────────────────────────────────
  {
    src: '/images/portfolio/construction-putting-green-complete.jpg',
    alt: 'Aerial drone photo of completed custom backyard with putting green, plunge pool, covered patio, and stone retaining walls',
    caption: 'Backyard Build — Completed',
    category: 'Construction',
    featured: true,
  },
  {
    src: '/images/portfolio/construction-backyard-turf-install.jpg',
    alt: 'Aerial progress photo of backyard renovation showing crew installing artificial turf, plunge pool, and stone hardscape',
    caption: 'Backyard Build — Progress Monitoring',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-baseball-academy.jpg',
    alt: 'Aerial drone photo of baseball academy construction site with grading equipment, compacted soil, and completed indoor facility',
    caption: 'PCo Baseball Academy — Site Grading',
    category: 'Construction',
  },

  // ── Government & Public Safety ─────────────────────────────────────────────
  {
    src: '/images/portfolio/government-school-playground.jpg',
    alt: 'Aerial view of school campus showing new playground with artificial turf, sail shade structures, and natural play elements',
    caption: 'School Campus — Playground Documentation',
    category: 'Government & Public Safety',
  },
  {
    src: '/images/portfolio/government-school-playground-overhead.jpg',
    alt: 'Overhead aerial of school courtyard playground with green turf, nature play path, shade sails, and urban surroundings',
    caption: 'School Campus — Overhead Survey',
    category: 'Government & Public Safety',
  },

  // ── Mapping & Surveying ────────────────────────────────────────────────────
  {
    src: '/images/portfolio/mapping-lake-marina-aerial.jpg',
    alt: 'High-altitude aerial survey of Texas lake marina showing boat slips, docks, shoreline development, and Hill Country landscape',
    caption: 'Lake Marina — Aerial Survey',
    category: 'Mapping & Surveying',
  },
];

export const portfolioCategories = [
  'All',
  'Real Estate',
  'Film & Media',
  'Events',
  'Construction',
  'Government & Public Safety',
  'Mapping & Surveying',
];
