export interface AudienceSection {
  heading: string;
  body?: string;
  items?: { title: string; desc: string }[];
}

export interface Audience {
  slug: string;
  title: string;
  navLabel: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: AudienceSection[];
  deliverables: string;
  ctaLabel: string;
  heroImage: { src: string; alt: string };
  relatedServiceSlugs: [string, string];
}

export const audiences: Audience[] = [
  {
    slug: 'architects',
    title: 'Drone Site Documentation for Architects',
    navLabel: 'Architects',
    metaTitle: 'Drone Site Documentation for Architects | North Texas',
    metaDesc:
      'Orthographic top-downs, hover studies, orthomosaic and contour mapping, raw 4K flat-profile delivery — flown the way architects actually use it.',
    h1: "You don't need a highlight reel. You need data you can design from.",
    eyebrow: 'For Architects & Landscape Architects',
    intro:
      'Most drone operators fly for marketing. LNDMRK flies for site analysis — every mission is planned around the questions you\'ll be answering at your desk, not around what looks good on Instagram.',
    sections: [
      {
        heading: 'What a site-analysis mission includes',
        items: [
          {
            title: 'Orthographic top-downs at 250–350 ft',
            desc: 'True straight-down frames of the full parcel, plus oblique views from all four compass directions. Your master planning images.',
          },
          {
            title: 'Hover studies over candidate building sites',
            desc: '360° rotations at 15, 30, 60, and 100 ft, so you can evaluate view corridors, solar orientation, privacy, and tree preservation from porch height to planning height. Composite your massing model straight into the frames.',
          },
          {
            title: 'Orthomosaic, contour, and 3D terrain outputs',
            desc: 'Overlapping mapping passes processed into measurable products for utilities, drainage, grading, and placement studies.',
          },
          {
            title: 'Continuous connective flights',
            desc: 'Uncut passes between parcels, from entry to building site, at both eye level (6–8 ft) and canopy height, for sightline and sequence analysis.',
          },
          {
            title: 'Seasonal return flights',
            desc: 'Leaf-off documentation that reveals terrain, drainage, and neighboring structures the summer canopy hides.',
          },
        ],
      },
      {
        heading: 'Why it matters',
        body: 'A two-hour flight before schematic design routinely saves a site visit — and catches the things a site visit misses: how the parcel reads from above, where the true high point is, what the client will actually see from the second floor.',
      },
    ],
    deliverables:
      'Every mission delivers raw 4K footage in a flat color profile (D-Log) alongside any edited material — so you can pause on any frame, measure relationships, and build overlays. You get the original files, not just exports.',
    ctaLabel: 'Book a Site-Analysis Flight',
    heroImage: {
      src: '/images/portfolio/mapping-lake-marina-aerial.jpg',
      alt: 'High-altitude orthographic aerial photo of a lake and marina parcel for site analysis',
    },
    relatedServiceSlugs: ['ranch-land-photography', 'construction'],
  },
  {
    slug: 'custom-home-builders',
    title: 'Drone Services for Custom Home Builders',
    navLabel: 'Custom Home Builders',
    metaTitle: 'Drone Services for Custom Home Builders | North Texas',
    metaDesc:
      'Pre-construction site studies, driveway and entrance flythroughs, progress documentation, and finished-home cinematics — one pilot across the whole build.',
    h1: 'One pilot, the whole build — from raw land to reveal.',
    eyebrow: 'For Custom Home Builders',
    intro:
      'The most valuable drone flight on a custom build happens before you break ground. The second most valuable happens every month after.',
    sections: [
      {
        heading: 'Pre-construction',
        items: [
          {
            title: 'Homesite studies',
            desc: 'Hover rotations at 15/30/60/100 ft over candidate sites so you and your client can settle placement, orientation, and porch views before design dollars are spent.',
          },
          {
            title: 'Arrival flythroughs',
            desc: 'Slow, uncut flights from the road to the building site. The fastest way to align on driveway routing and entrance design, and the shot that sells the client on the vision.',
          },
          {
            title: 'Mapping passes',
            desc: 'Orthomosaic, contour, and 3D terrain products for grading, drainage, and utility planning.',
          },
          {
            title: 'Tree documentation',
            desc: 'Orbit studies of every tree worth saving, so preservation is a plan rather than an accident of the dozer path.',
          },
        ],
      },
      {
        heading: 'During construction',
        items: [
          {
            title: 'Monthly progress flights',
            desc: 'Repeatable positions and altitudes — a consistent visual record for the client, the lender, and your marketing.',
          },
          {
            title: 'Site condition documentation',
            desc: 'Drainage behavior after rain events, material staging, and site logistics, captured on every pass.',
          },
        ],
      },
      {
        heading: 'After completion',
        items: [
          {
            title: 'Finished-home cinematics',
            desc: 'Golden-hour aerials and walking-height (6–8 ft) approach shots for your portfolio and the client\'s keepsake. The before-and-after pairing with the pre-construction footage is marketing no competitor can fake.',
          },
        ],
      },
    ],
    deliverables:
      'Raw 4K flat-profile footage plus edited cuts, every time. Your team can pull frames, measure, and reuse the material for years.',
    ctaLabel: 'Get a Per-Project or Build-Long Quote',
    heroImage: {
      src: '/images/portfolio/construction-luxury-home-pool-progress.jpg',
      alt: 'Aerial progress photo of a luxury custom home under construction',
    },
    relatedServiceSlugs: ['construction-progress-documentation', 'real-estate'],
  },
  {
    slug: 'equestrian-properties',
    title: 'Drone Photography for Equestrian & Horse Properties',
    navLabel: 'Equestrian Properties',
    metaTitle: 'Drone Photography for Equestrian Properties | North Texas',
    metaDesc:
      'Pasture layout, fencing plans, barn siting, and estate cinematics for horse properties — aerial documentation flown by a pilot who plans around the animals.',
    h1: 'Horse properties are planned from above.',
    eyebrow: 'For Equestrian Properties',
    intro:
      'Pasture rotation, fencing runs, barn placement, sightlines from the house to the horses — every one of these is an aerial question. LNDMRK flies equestrian properties for owners who are planning them, improving them, or listing them.',
    sections: [
      {
        heading: 'For owners planning or improving',
        items: [
          {
            title: 'Full-property overviews',
            desc: 'Flights at 250–350 ft showing pasture shapes, tree shade coverage, water access, and how the tracts connect.',
          },
          {
            title: 'Fencing and cross-fencing studies',
            desc: 'Continuous flights along existing and proposed fence lines, with leaf-off winter flights that make every line visible.',
          },
          {
            title: 'Barn and arena siting',
            desc: 'Hover studies over candidate locations to check drainage, distance from the house, prevailing-breeze orientation, and the view of the horses from the kitchen window (the sightline everyone actually cares about).',
          },
          {
            title: 'Pasture visibility from the future homesite',
            desc: 'Rotations at porch height so you know you\'ll see the horses from the porch before the porch exists.',
          },
          {
            title: 'Contour and terrain mapping',
            desc: 'Measurable products for drainage, arena pads, and turnout planning.',
          },
        ],
      },
      {
        heading: 'For sellers and agents',
        body: 'Golden-hour estate cinematics, arrival flythroughs from the gate, and walking-height passes along the fence lines — the footage that makes an equestrian listing feel like an estate rather than acreage with a barn.',
      },
      {
        heading: 'Flying around horses, carefully',
        body: 'Every mission starts with a conversation about the animals: launch sites away from turnout, altitude floors over occupied pastures, and slow, predictable flight paths. If a horse says no, the horse wins and we re-plan.',
      },
    ],
    deliverables:
      'Raw 4K flat-profile footage and original files with every mission, plus edited cuts, stills, and mapping products as ordered.',
    ctaLabel: 'Plan a Flight',
    heroImage: {
      src: '/images/portfolio/real-estate-lake-property.jpg',
      alt: 'Aerial photo of open North Texas acreage with water access and mature trees',
    },
    relatedServiceSlugs: ['ranch-land-photography', 'real-estate'],
  },
  {
    slug: 'land-buyers',
    title: 'Drone Property Evaluation for Land Buyers',
    navLabel: 'Land Buyers',
    metaTitle: 'Drone Property Evaluation Before You Buy Land | North Texas',
    metaDesc:
      'See acreage the way you never can from the ground — full-property overviews, homesite hover studies, terrain and drainage mapping — before you sign.',
    h1: 'The most important flight happens before you sign.',
    eyebrow: 'For Land Buyers',
    intro:
      'Walking a property tells you what it feels like. Flying it tells you what it is. A one-hour drone mission during your due-diligence window answers questions that are invisible from the ground.',
    sections: [
      {
        heading: 'Questions a due-diligence flight answers',
        items: [
          {
            title: 'What does the whole parcel actually look like?',
            desc: 'A 300-ft overview shows the true shape of the land, its relationship to roads and neighbors, tree lines, and existing structures — in one frame.',
          },
          {
            title: 'Where could the house go?',
            desc: 'Hover studies at porch height (15 ft) through planning height (100 ft) over each candidate site show you the views, the privacy, and the sunrise/sunset orientation you\'d actually live with.',
          },
          {
            title: "What's the terrain doing?",
            desc: 'Mapping passes produce contour and 3D terrain models that reveal drainage patterns and grade — the things that turn a cheap parcel into an expensive build.',
          },
          {
            title: 'What are you not seeing?',
            desc: 'Winter (leaf-off) flights expose fence lines, neighboring rooftops, and low spots that summer canopy hides. If you\'re buying in summer, this is worth knowing about.',
          },
          {
            title: 'What would it feel like to live there?',
            desc: 'Walking-height flights at 6–8 ft along future paths — driveway to house site, house site to pasture — let you experience the property before you own it.',
          },
        ],
      },
      {
        heading: 'A note on access',
        body: "We fly only with the current owner's or listing agent's permission — usually a quick ask during an option period, and often something your agent can arrange same-week.",
      },
    ],
    deliverables:
      "Raw 4K footage of everything (flat color profile, original files), plus stills and any mapping products you ordered. If the deal falls through, the footage cost you a fraction of one survey. If it goes through, you've already started your site plan.",
    ctaLabel: 'Book a Due-Diligence Flight',
    heroImage: {
      src: '/images/portfolio/film-texas-hill-country-lake-canyon-2.jpg',
      alt: 'High-altitude aerial overview of Texas acreage with lake, canyon, and tree lines',
    },
    relatedServiceSlugs: ['ranch-land-photography', 'roof-inspections'],
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
