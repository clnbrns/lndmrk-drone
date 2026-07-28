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
  {
    src: '/images/portfolio/real-estate-harwell-lake-road-overview.jpg',
    alt: 'Straight-down aerial overview of a future homesite on Harwell Lake Road showing the existing house, driveway, well, and surrounding oak tree lines',
    caption: 'Future Homesite — Harwell Lake Road',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-harwell-lake-road-windmill.jpg',
    alt: 'Aerial drone photo of a historic Aermotor windmill with a 33-foot tower standing in a pasture surrounded by oak trees',
    caption: 'Historic Aermotor Windmill — Harwell Lake Road',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-harwell-lake-road-sunset.jpg',
    alt: 'Golden hour aerial drone photo over a lake on a North Texas ranch property with warm light across the water and tree canopy',
    caption: 'Golden Hour — Harwell Lake Road Ranch',
    category: 'Real Estate',
    featured: true,
  },

  // ── Film & Media ───────────────────────────────────────────────────────────
  {
    src: '/images/portfolio/film-landmark-kingfisher-towers.jpg',
    alt: 'Aerial drone photo of Kingfisher Towers rooftop penthouse and infinity garden rising above a city skyline',
    caption: 'Kingfisher Towers — Rooftop Penthouse',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-landmark-bangalore-palace.jpg',
    alt: 'Aerial drone photo of Bangalore Palace with formal gardens, symmetrical landscaping, and turrets from above',
    caption: 'Bangalore Palace — Aerial Overview',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-landmark-stadium-aerial.jpg',
    alt: 'High-altitude aerial drone photo of a major stadium with running track, grass field, and surrounding city',
    caption: 'Major Stadium — High-Altitude Aerial',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-landmark-tennis-stadium.jpg',
    alt: 'Aerial drone photo of a professional tennis stadium with blue courts, canopy roof, and surrounding tree canopy',
    caption: 'Tennis Venue — Venue Aerial',
    category: 'Film & Media',
  },
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
    src: '/images/portfolio/construction-luxury-home-pool-progress.jpg',
    alt: 'Aerial progress photo of luxury home construction with freshly filled pool, grading work, and modern white exterior under build',
    caption: 'Luxury Home Build — Pool Progress',
    category: 'Construction',
    featured: true,
  },
  {
    src: '/images/portfolio/construction-pool-overhead-progress.jpg',
    alt: 'Straight-down overhead aerial of newly filled pool during luxury home construction with stone coping and surrounding dirt',
    caption: 'Pool Construction — Overhead Progress',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-pool-putting-green-progress.jpg',
    alt: 'Aerial progress photo of backyard with pool and putting green turf installed, house still under construction',
    caption: 'Pool & Putting Green — In Progress',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-pool-putting-green-angled.jpg',
    alt: 'Angled aerial of luxury home backyard construction showing pool and putting green nearing completion beside modern home',
    caption: 'Pool & Putting Green — Near Completion',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-pool-putting-green-complete-2.jpg',
    alt: 'Aerial drone photo of completed luxury backyard with pool, putting green turf, and modern farmhouse under final construction',
    caption: 'Pool & Putting Green — Completed',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-backyard-batting-cage.jpg',
    alt: 'Overhead aerial of custom backyard batting cage with artificial turf, pitching machine, and netting beside residential home',
    caption: 'Backyard Batting Cage — Overhead',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-backyard-batting-cage-2.jpg',
    alt: 'Aerial drone photo of backyard batting cage with artificial turf and black netting at golden hour beside stone home',
    caption: 'Backyard Batting Cage — Evening',
    category: 'Construction',
  },
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

  // ── BearcatTurf — ArtDocks Dallas ──────────────────────────────────────────
  {
    src: '/images/portfolio/construction-bearcat-turf-dallas-skyline.jpg',
    alt: 'Aerial drone photo of BearcatTurf ArtDocks installation in Dallas with glowing mural walls and Dallas skyline visible in the rain at dusk',
    caption: 'BearcatTurf — ArtDocks Dallas, TX',
    category: 'Construction',
    featured: true,
  },
  {
    src: '/images/portfolio/construction-bearcat-turf-corridor-overhead.jpg',
    alt: 'Straight-down overhead aerial of the BearcatTurf ArtDocks courtyard showing the full artificial turf corridor between mural-covered buildings',
    caption: 'ArtDocks — Turf Corridor Overhead',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-bearcat-turf-mural-alley-twilight.jpg',
    alt: 'Ground-level aerial of the ArtDocks mural alley at twilight with glowing lights, vibrant murals, and deep blue evening sky',
    caption: 'ArtDocks — Mural Alley at Twilight',
    category: 'Construction',
    featured: true,
  },
  {
    src: '/images/portfolio/construction-bearcat-turf-mural-alley-wide.jpg',
    alt: 'Wide aerial view looking down the ArtDocks mural alleyway with BearcatTurf artificial turf, colorful art murals, and seating at dusk',
    caption: 'ArtDocks — Full Alley View',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-bearcat-artdocks-overhead.jpg',
    alt: 'Overhead drone shot of the ArtDocks outdoor venue showing the full turf courtyard, mural walls, and entrance sign',
    caption: 'ArtDocks — Venue Overhead',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-bearcat-turf-mural-wall-dusk.jpg',
    alt: 'Aerial close-up of the ArtDocks mural wall at dusk showing vivid painted murals lit by ground-level uplighting',
    caption: 'ArtDocks — Mural Wall Detail',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-bearcat-turf-entrance-view.jpg',
    alt: 'Aerial view from the entrance of the ArtDocks mural alleyway looking down the turf corridor with murals flanking both sides at dusk',
    caption: 'ArtDocks — Entrance Perspective',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-bearcat-turf-installation-progress.jpg',
    alt: 'Daytime aerial progress photo of BearcatTurf artificial turf installation at ArtDocks Dallas with turf being laid and Dallas skyline visible',
    caption: 'ArtDocks — Installation in Progress',
    category: 'Construction',
  },

  // ── Government & Public Safety ─────────────────────────────────────────────
  {
    src: '/images/portfolio/government-school-playground-2.jpg',
    alt: 'Aerial drone photo of school or daycare building with bright green shade structure over playground equipment and turf',
    caption: 'School Campus — Playground & Turf',
    category: 'Government & Public Safety',
  },
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

  // ── Real Estate (additional) ───────────────────────────────────────────────
  {
    src: '/images/portfolio/real-estate-home-pool-turf.jpg',
    alt: 'Overhead aerial of single family home with freeform pool, hot tub, artificial turf lawn, and pergola in Texas suburb',
    caption: 'Custom Home — Pool & Turf',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-suburban-neighborhood.jpg',
    alt: 'High-altitude aerial of large Texas suburban neighborhood with curving streets, hundreds of homes, and lake in background',
    caption: 'Suburban Development — DFW Area',
    category: 'Real Estate',
  },

  // ── Film & Media (additional) ──────────────────────────────────────────────
  {
    src: '/images/portfolio/film-texas-sunset-suburban.jpg',
    alt: 'Dramatic wide aerial photo of a vivid red and orange Texas sunset over a suburban neighborhood with open fields',
    caption: 'Texas Sunset — DFW Area',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-aledo-water-tower.jpg',
    alt: 'Aerial drone photo of the Aledo Texas water tower with the small town and surrounding countryside visible in the background',
    caption: 'Aledo, TX — Water Tower',
    category: 'Film & Media',
  },

  // ── Events (additional) ───────────────────────────────────────────────────
  {
    src: '/images/portfolio/events-aledo-stadium-sunset.jpg',
    alt: 'Stunning aerial photo of Aledo Bearcats football stadium lit up at night under a dramatic red and orange sunset sky',
    caption: 'Aledo Bearcats Stadium — Sunset',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-tcu-amon-carter-stadium.jpg',
    alt: 'Aerial drone photo of Amon G. Carter Stadium at TCU in Fort Worth showing full bowl, field, and surrounding campus',
    caption: 'Amon G. Carter Stadium — TCU',
    category: 'Events',
    featured: true,
  },

  {
    src: '/images/portfolio/mapping-lake-marina-aerial.jpg',
    alt: 'High-altitude aerial of Texas lake marina showing boat slips, docks, shoreline development, and Hill Country landscape',
    caption: 'Lake Marina — Hill Country, TX',
    category: 'Film & Media',
  },

  // ── Film & Media (Austin, Houston, Costa Rica, Texas Lakes) ───────────────
  {
    src: '/images/portfolio/film-austin-congress-avenue-skyline.jpg',
    alt: 'Aerial drone photo looking down Congress Avenue toward Lady Bird Lake with downtown Austin skyscrapers on either side',
    caption: 'Austin, TX — Congress Avenue Aerial',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-austin-frost-bank-tower.jpg',
    alt: 'Close aerial of Austin Frost Bank Tower with its distinctive crystalline spire rising above downtown skyline and Lady Bird Lake',
    caption: 'Austin, TX — Frost Bank Tower',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-houston-skyline-night-2.jpg',
    alt: 'Wide night aerial of Houston city skyline with colorful building lights reflecting off bayou and freeway interchange',
    caption: 'Houston Skyline — Night Wide Aerial',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-beach-resort-cove-2.jpg',
    alt: 'Low aerial of Costa Rica beach resort cove with turquoise water, dark sand beach, hillside villas, and tropical vegetation',
    caption: 'Costa Rica — Beach Resort Cove',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-texas-lake-sunset-vertical.jpg',
    alt: 'Vertical aerial at sunset over a wide Texas lake with glowing orange sky reflecting off calm water and wooded shoreline',
    caption: 'Texas Lake — Sunset Vertical',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-texas-lake-sunset.jpg',
    alt: 'Wide aerial at sunset over a broad Texas lake with pink and orange sky, calm water, and distant shoreline development',
    caption: 'Texas Lake — Sunset Aerial',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-cabo-beach-peninsula-vertical.jpg',
    alt: 'Vertical aerial of Cabo San Lucas beach peninsula with turquoise Pacific waves, resort hotels, and rocky coastline',
    caption: 'Cabo San Lucas — Beach Peninsula',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-cabo-beach-waves-overhead.jpg',
    alt: 'Overhead aerial of Cabo beach with turquoise breaking waves, white sand, and beach umbrella rows along shoreline',
    caption: 'Cabo San Lucas — Beach Overhead',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-texas-hill-country-lake-canyon.jpg',
    alt: 'Aerial drone photo of Texas Hill Country lake canyon with pink granite bluffs, cedar trees, and blue-green water',
    caption: 'Hill Country Lake — Canyon Aerial',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-texas-hill-country-lake-canyon-2.jpg',
    alt: 'Wide aerial of Texas Hill Country lake with rugged limestone and granite canyon walls, cedar-covered bluffs, and open lake beyond',
    caption: 'Hill Country Lake — Canyon Wide',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-fort-worth-skyline-trains.jpg',
    alt: 'Aerial drone photo of Fort Worth skyline with large grain elevator silos and extensive rail yard in the foreground',
    caption: 'Fort Worth — Skyline & Rail Yard',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-destin-beach-vertical.jpg',
    alt: 'Vertical aerial of Destin Florida beach with emerald green Gulf water, white sand, and scattered beachgoers along shoreline',
    caption: 'Destin, FL — Beach Vertical',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-destin-beach-sunset.jpg',
    alt: 'Vertical aerial of Destin Florida beach at sunset with warm golden light over resort condos and emerald Gulf water',
    caption: 'Destin, FL — Beach Sunset',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-destin-gulf-floaties-overhead.jpg',
    alt: 'Overhead aerial of two people floating on pink flamingo pool floats in brilliant turquoise Gulf of Mexico water',
    caption: 'Destin, FL — Gulf Floaties Overhead',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-destin-beach-resort-vertical.jpg',
    alt: 'Vertical aerial of Destin beach resort strip with white sand, emerald Gulf water, and high-rise condos along coastline',
    caption: 'Destin, FL — Resort Strip Vertical',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-destin-gulf-flamingo-float.jpg',
    alt: 'Aerial of person on pink flamingo pool float in turquoise Gulf water with Destin beach and resort skyline in background',
    caption: 'Destin, FL — Gulf Flamingo Float',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-destin-emerald-coast-wide.jpg',
    alt: 'Wide aerial of Destin Florida Emerald Coast with white sand dunes, turquoise Gulf, freshwater lake, and forest stretching to horizon',
    caption: 'Destin, FL — Emerald Coast Wide',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-destin-30a-coastline-vertical.jpg',
    alt: 'Vertical aerial of Destin 30A coastline with brilliant emerald Gulf water, white sand beach, and residential dune development',
    caption: 'Destin / 30A — Coastline Vertical',
    category: 'Film & Media',
  },

  // ── Events (Dallas, Houston, Boise, Aledo) ────────────────────────────────
  {
    src: '/images/portfolio/events-american-airlines-center-dallas.jpg',
    alt: 'Aerial drone photo of American Airlines Center arena in downtown Dallas at blue hour with city skyline and surrounding buildings',
    caption: 'American Airlines Center — Dallas',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-mavs-ballpark-dallas-setup.jpg',
    alt: 'Aerial drone photo at dusk of Mavs Ballpark baseball field being set up with event crew visible and downtown Dallas skyline behind',
    caption: 'Mavs Ballpark — Event Setup',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-mavs-ballpark-dallas-night.jpg',
    alt: 'Night aerial of Mavs Ballpark baseball field lit up with stadium lights and full downtown Dallas skyline illuminated behind',
    caption: 'Mavs Ballpark — Night Aerial',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-tcu-amon-carter-stadium-overhead.jpg',
    alt: 'Overhead vertical aerial of Amon G. Carter Stadium at TCU in Fort Worth showing full bowl and football field from directly above',
    caption: 'Amon G. Carter Stadium — Overhead',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-houston-nrg-stadium-astrodome.jpg',
    alt: 'Aerial drone photo of NRG Stadium and historic Astrodome dome side by side with Houston skyline visible in the background',
    caption: 'NRG Stadium & Astrodome — Houston',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-houston-astrodome-vertical.jpg',
    alt: 'Vertical aerial of historic Houston Astrodome dome with downtown Houston skyline and city landscape stretching to the horizon',
    caption: 'Houston Astrodome — Vertical Aerial',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-hill-country-baseball-complex.jpg',
    alt: 'Wide aerial of Texas Hill Country baseball resort complex with four full diamonds, grandstands, pond, and cedar-covered hills',
    caption: 'Hill Country Baseball Complex',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-hill-country-baseball-complex-2.jpg',
    alt: 'Aerial drone photo of Hill Country baseball resort showing four red-clay diamonds with grandstands, pond, and Palo Pinto mountains',
    caption: 'Hill Country Baseball Complex — Wide',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-destin-beach-resort-skyline.jpg',
    alt: 'Wide aerial from Gulf of Mexico looking toward Destin Florida beach with resort hotels, white sand, and turquoise water',
    caption: 'Destin, FL — Resort Skyline from Gulf',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-idaho-state-capitol-boise.jpg',
    alt: 'Aerial drone photo of Idaho State Capitol building in Boise with snow-capped mountains and city skyline in the background',
    caption: 'Idaho State Capitol — Boise, ID',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-idaho-state-capitol-boise-vertical.jpg',
    alt: 'Vertical aerial of Idaho State Capitol with formal gardens, Boise cityscape, and snow-capped mountains beyond under dramatic clouds',
    caption: 'Idaho State Capitol — Vertical',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-boise-state-broncos-stadium.jpg',
    alt: 'Aerial drone photo of Boise State Broncos Albertsons Stadium with famous blue turf field, campus, and snow-capped mountains',
    caption: 'Boise State Broncos Stadium',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-boise-state-broncos-stadium-overhead.jpg',
    alt: 'Overhead aerial of Boise State Albertsons Stadium showing blue turf field with "BOISE STATE" end zone and surrounding campus',
    caption: 'Boise State Stadium — Overhead',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-homecoming-parade.jpg',
    alt: 'Aerial drone photo of Aledo High School Bearcat Regiment marching band leading homecoming parade through neighborhood streets',
    caption: 'Aledo HS — Homecoming Parade',
    category: 'Events',
  },

  // ── Real Estate (additional backyards) ────────────────────────────────────
  {
    src: '/images/portfolio/real-estate-home-pool-putting-green-hill-country.jpg',
    alt: 'Aerial drone photo of Texas Hill Country home with freeform pool, covered patio, putting green, and fire pit in manicured backyard',
    caption: 'Hill Country Home — Pool & Putting Green',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-backyard-turf-putting-green.jpg',
    alt: 'Overhead aerial of modern backyard with artificial turf, putting green, circular fire pit seating area, swing set, and decorative planters',
    caption: 'Custom Backyard — Turf & Putting Green',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-home-pool-basketball.jpg',
    alt: 'Aerial drone photo of luxury home backyard with rectangular pool, basketball hoop float, covered patio, and artificial turf lawn',
    caption: 'Luxury Home — Pool & Basketball',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-backyard-putting-green-deck.jpg',
    alt: 'Aerial drone photo of suburban home backyard with artificial turf, putting green, elevated deck with outdoor furniture',
    caption: 'Custom Backyard — Putting Green & Deck',
    category: 'Real Estate',
  },

  // ── Construction (additional) ──────────────────────────────────────────────
  {
    src: '/images/portfolio/construction-backyard-turf-complete.jpg',
    alt: 'Aerial drone photo of completed backyard turf installation beside brick home with iron fence and cedar tree backdrop',
    caption: 'Backyard Turf — Completed Install',
    category: 'Construction',
  },

  // ── Real Estate — Luxury Estate (sports complex) ──────────────────────────
  {
    src: '/images/portfolio/real-estate-luxury-estate-turf-field-overhead.jpg',
    alt: 'Overhead aerial of Spanish-style luxury estate with full soccer turf field, basketball court, and pool with spa at dusk',
    caption: 'Luxury Estate — Sports Complex Overhead',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-luxury-estate-turf-basketball-wide.jpg',
    alt: 'Wide aerial of luxury estate with soccer turf field, basketball court, and pool against open Texas landscape at dusk',
    caption: 'Luxury Estate — Turf & Courts Wide',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-luxury-estate-pool-spa-turf.jpg',
    alt: 'Aerial close of luxury pool with attached spa, artificial turf surround, stone stepping pads, and pergola beside estate',
    caption: 'Luxury Estate — Pool & Spa',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-luxury-estate-turf-basketball.jpg',
    alt: 'Aerial of luxury estate turf soccer field and basketball court with people playing and pool visible beside red-tile home',
    caption: 'Luxury Estate — Turf Field in Use',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-luxury-estate-pool-spa.jpg',
    alt: 'Angled aerial of luxury pool and spa beside Spanish-style home with turf lawn, pergola, and outdoor seating',
    caption: 'Luxury Estate — Pool & Spa Angle',
    category: 'Real Estate',
  },

  // ── Real Estate — Plunge Pool + Putting Green ─────────────────────────────
  {
    src: '/images/portfolio/real-estate-backyard-plunge-pool-putting-green.jpg',
    alt: 'Aerial of custom backyard with round plunge pool, putting green with flags, fire pit, and cedar-lined stone retaining walls',
    caption: 'Custom Backyard — Plunge Pool & Putting Green',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-backyard-plunge-pool-putting-green-2.jpg',
    alt: 'Second angle aerial of backyard plunge pool and putting green with stone retaining walls and covered patio behind',
    caption: 'Custom Backyard — Plunge Pool Angle',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-backyard-plunge-pool-fire-pit.jpg',
    alt: 'Low aerial of backyard with fire pit surrounded by turf, circular plunge pool with stone wall, and putting green flags',
    caption: 'Custom Backyard — Fire Pit & Plunge Pool',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-backyard-plunge-pool-wide.jpg',
    alt: 'Wide aerial of home with completed backyard featuring plunge pool, putting green, fire pit, turf, and stone retaining walls',
    caption: 'Custom Backyard — Full Overview',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-home-pool-cowboys-star.jpg',
    alt: 'Overhead aerial of home pool with Dallas Cowboys star mosaic on pool floor, hot tub, and manicured backyard',
    caption: 'Custom Pool — Dallas Cowboys Star',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-backyard-pool-sport-court-putting-green.jpg',
    alt: 'Overhead aerial of backyard with lagoon pool, hot tub, blue pickleball sport court, putting green, and turf lawn',
    caption: 'Custom Backyard — Pool, Sport Court & Putting Green',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-home-pool-hot-tub-turf.jpg',
    alt: 'Overhead aerial of home backyard with freeform pool, attached hot tub, turf lawn, and pergola beside suburban home',
    caption: 'Custom Home — Pool, Hot Tub & Turf',
    category: 'Real Estate',
  },
  {
    src: '/images/portfolio/real-estate-costa-rica-luxury-villa.jpg',
    alt: 'Aerial drone photo of modern luxury villa on Costa Rica hillside with infinity pool, floor-to-ceiling glass, and ocean views',
    caption: 'Luxury Villa — Costa Rica Hillside',
    category: 'Real Estate',
    featured: true,
  },
  {
    src: '/images/portfolio/real-estate-dfw-suburban-neighborhood-2.jpg',
    alt: 'Aerial drone photo of DFW suburban neighborhood with curving streets, hundreds of homes, green space, and retention pond',
    caption: 'Suburban Development — DFW Area',
    category: 'Real Estate',
  },

  // ── Construction — Plunge Pool + Estate Build ─────────────────────────────
  {
    src: '/images/portfolio/construction-backyard-plunge-pool-putting-green-progress.jpg',
    alt: 'Aerial progress photo of backyard construction with crew installing putting green beside round plunge pool on dirt site',
    caption: 'Backyard Build — Plunge Pool Progress',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-backyard-plunge-pool-complete-overview.jpg',
    alt: 'Aerial overview of completed backyard with round plunge pool, putting green, and stone retaining walls beside home',
    caption: 'Backyard Build — Plunge Pool Complete',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-townhome-turf-yards-aerial.jpg',
    alt: 'Aerial drone photo of modern townhome development with uniform artificial turf front yards, stepping stone paths, and agave planters',
    caption: 'Townhome Development — Turf Yards',
    category: 'Construction',
    featured: true,
  },
  {
    src: '/images/portfolio/construction-townhome-turf-yards-vertical.jpg',
    alt: 'Vertical overhead aerial of modern townhomes with matching turf yards, concrete stepping pads, and contemporary architecture',
    caption: 'Townhome Development — Overhead',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-backyard-batting-cage-3.jpg',
    alt: 'Aerial drone photo of backyard batting cage with artificial turf, pitching machine, red home plate, and black netting beside stone home',
    caption: 'Backyard Batting Cage — Spring',
    category: 'Construction',
  },
  {
    src: '/images/portfolio/construction-backyard-batting-cage-4.jpg',
    alt: 'Higher aerial of backyard batting cage with turf and netting showing full layout beside stone home with cedar trees',
    caption: 'Backyard Batting Cage — Wide Aerial',
    category: 'Construction',
  },

  // ── Events — Dallas, Aledo, Baseball ──────────────────────────────────────
  {
    src: '/images/portfolio/events-aledo-bearcat-baseball-2.jpg',
    alt: 'Overhead vertical aerial of Aledo Bearcat Baseball field showing "A" mascot logo and "BEARCAT BASEBALL" text in green outfield',
    caption: 'Aledo Bearcat Baseball — Overhead',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-homecoming-parade-crowd.jpg',
    alt: 'Aerial drone photo of Aledo homecoming parade float with large crowd lined up along suburban street at dusk',
    caption: 'Aledo — Homecoming Parade Crowd',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-homecoming-parade-wide.jpg',
    alt: 'Wide aerial of Aledo homecoming parade with float vehicles, crowds, and school campus parking lot in background',
    caption: 'Aledo — Homecoming Parade Wide',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-baseball-complex-night-2.jpg',
    alt: 'Night aerial drone photo of baseball complex with three lit diamonds, stadium lights, and city lights visible in distance',
    caption: 'Baseball Complex — Night Aerial',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-youth-baseball-team-huddle.jpg',
    alt: 'Overhead aerial of youth baseball team in yellow jerseys huddled together beside dugout fence on green turf field',
    caption: 'Youth Baseball — Team Huddle Overhead',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-baseball-pitcher-mound-aerial.jpg',
    alt: 'Vertical aerial of baseball pitcher standing on mound with crowd in grandstands visible along first base line',
    caption: 'Baseball — Pitcher on Mound Aerial',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-baseball-field-sunset-vertical.jpg',
    alt: 'Vertical aerial of baseball field at sunset with team logo on outfield grass and suburban community surrounding the park',
    caption: 'Baseball Field — Sunset Vertical',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-farrington-field-colonnade.jpg',
    alt: 'Aerial drone photo of Farrington Field monumental limestone colonnade entrance with Fort Worth skyline in background',
    caption: 'Farrington Field — Colonnade Entrance',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-farrington-field-vertical.jpg',
    alt: 'Vertical aerial of Farrington Field stadium with red turf field and Fort Worth downtown skyline beyond under blue skies',
    caption: 'Farrington Field — Vertical',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-bearcat-baseball-snow-overhead.jpg',
    alt: 'Overhead aerial of Aledo Bearcat Baseball field completely covered in snow with grandstands and suburban neighborhood around it',
    caption: 'Bearcat Baseball — Snow Day Overhead',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-bearcat-baseball-snow-wide.jpg',
    alt: 'Wide aerial of Aledo Bearcat Baseball stadium covered in snow at sunset with stadium lights and surrounding neighborhood',
    caption: 'Bearcat Baseball — Snow Day Wide',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-bearcat-baseball-scoreboard-snow.jpg',
    alt: 'Low aerial of Aledo Bearcat Baseball scoreboard in snow at sunset showing "BEARCAT BASEBALL" sign with outfield wall',
    caption: 'Bearcat Baseball — Scoreboard in Snow',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-stadium-snow-wide.jpg',
    alt: 'Wide aerial of Aledo football stadium and practice fields completely covered in snow at sunset with school campus behind',
    caption: 'Aledo Stadium — Snow Day Wide',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-aledo-stadium-snow-goalposts.jpg',
    alt: 'Aerial of snow-covered Aledo stadium with yellow goalposts in foreground, orange seating section, and press box visible',
    caption: 'Aledo Stadium — Goalposts in Snow',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-stadium-snow-campus.jpg',
    alt: 'High aerial of Aledo stadium, practice fields, and school campus all blanketed in snow at golden sunset hour',
    caption: 'Aledo Stadium — Campus in Snow',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-stadium-snow-campus-wide.jpg',
    alt: 'Wide aerial at sunset showing Aledo school campus, stadium, and surrounding neighborhood all covered in snow',
    caption: 'Aledo Stadium — Snow Day Campus Wide',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-stadium-snow-press-box.jpg',
    alt: 'Aerial close of Aledo stadium press box tower with Bearcat mural, snow-covered seating, and frozen campus beyond',
    caption: 'Aledo Stadium — Press Box in Snow',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-aledo-bearcat-baseball-sunset.jpg',
    alt: 'Aerial drone photo of Aledo Bearcat Baseball field at sunset with players warming up on diamond and fans in grandstands',
    caption: 'Aledo Bearcat Baseball — Sunset Game',
    category: 'Events',
    featured: true,
  },
  {
    src: '/images/portfolio/events-mavs-ballpark-dallas-game.jpg',
    alt: 'Aerial drone photo of Mavs Ballpark during daytime game with players on field, crowd in grandstands, and Dallas skyline behind',
    caption: 'Mavs Ballpark — Game Day',
    category: 'Events',
  },
  {
    src: '/images/portfolio/events-mural-district-turf-install.jpg',
    alt: 'Aerial of colorful mural art district courtyard with crew installing artificial turf between painted warehouse walls',
    caption: 'Mural Art District — Turf Installation',
    category: 'Events',
  },

  // ── Film & Media — Dallas Night, Costa Rica ───────────────────────────────
  {
    src: '/images/portfolio/film-dallas-reunion-tower-2.jpg',
    alt: 'Aerial drone photo of Dallas Reunion Tower up close with downtown skyline, blue skies, and surrounding urban landscape',
    caption: 'Downtown Dallas — Reunion Tower Close',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-dallas-downtown-night-vertical.jpg',
    alt: 'Vertical night aerial of downtown Dallas with Main Street lights, Ferris wheel, neon signs, and glowing skyscrapers',
    caption: 'Downtown Dallas — Night Vertical',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-dallas-downtown-night-wide.jpg',
    alt: 'Wide night aerial of downtown Dallas with colorful building facades, Ferris wheel, and city grid stretching to the horizon',
    caption: 'Downtown Dallas — Night Wide',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-black-sand-cove.jpg',
    alt: 'Aerial drone photo of secluded Costa Rica black sand cove with resort bungalows on tropical hillside and turquoise water',
    caption: 'Costa Rica — Black Sand Cove',
    category: 'Film & Media',
    featured: true,
  },
  {
    src: '/images/portfolio/film-costa-rica-boats-turquoise-vertical.jpg',
    alt: 'Vertical aerial of white fishing boats anchored on brilliant turquoise Costa Rica water near a dark sand beach',
    caption: 'Costa Rica — Boats on Turquoise Water',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-resort-cove-wide.jpg',
    alt: 'Wide aerial of Costa Rica resort cove with dark sand beach, turquoise water, tropical hillside, and bungalow villas',
    caption: 'Costa Rica — Resort Cove Wide',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-turquoise-water-abstract.jpg',
    alt: 'Overhead abstract aerial of brilliant turquoise Pacific Ocean water with light refracting through clear shallow surface',
    caption: 'Costa Rica — Turquoise Water Abstract',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-waves-dark-sand.jpg',
    alt: 'Overhead aerial of waves washing onto dark sand Costa Rica beach with a single submerged rock visible in clear water',
    caption: 'Costa Rica — Waves & Dark Sand',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-palm-trees-cove.jpg',
    alt: 'Low aerial looking through tropical palm trees toward Costa Rica cove with dark sand beach and blue Pacific beyond',
    caption: 'Costa Rica — Palm Trees & Cove',
    category: 'Film & Media',
  },
  {
    src: '/images/portfolio/film-costa-rica-dark-sand-cove-wide.jpg',
    alt: 'Wide aerial of Costa Rica dark sand cove with tropical hills, rocky shoreline, and open Pacific Ocean',
    caption: 'Costa Rica — Dark Sand Cove Wide',
    category: 'Film & Media',
  },

  // ── Government & Public Safety (additional) ───────────────────────────────
  {
    src: '/images/portfolio/government-school-building-overview.jpg',
    alt: 'Aerial drone photo of school campus building with flat roof, HVAC units, bus parking lot, and artificial turf on sides',
    caption: 'School Campus — Building Overview',
    category: 'Government & Public Safety',
  },
  {
    src: '/images/portfolio/government-school-playground-under-construction.jpg',
    alt: 'Overhead aerial of playground area under construction showing green equipment installed on bare dirt within octagon safety border',
    caption: 'School Playground — Under Construction',
    category: 'Government & Public Safety',
  },
  {
    src: '/images/portfolio/government-school-campus-playground-aerial.jpg',
    alt: 'Aerial drone photo of school campus with new playground, sand surface, and adjacent turf field beside urban streetscape',
    caption: 'School Campus — Playground Aerial',
    category: 'Government & Public Safety',
  },
  {
    src: '/images/portfolio/government-school-playground-complete.jpg',
    alt: 'Aerial drone photo of completed school building with green shade structure over new playground and artificial turf lawn',
    caption: 'School Campus — Playground Complete',
    category: 'Government & Public Safety',
    featured: true,
  },
];

export const portfolioCategories = [
  'All',
  'Real Estate',
  'Film & Media',
  'Events',
  'Construction',
  'Government & Public Safety',
];
