export interface Location {
  slug: string;
  city: string;
  county: string;
  state: string;
  /** Short descriptor shown in eyebrow / badge */
  region: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  /** 2–3 sentences about why drone photography matters in this specific market */
  marketContext: string;
  /** 3 local proof points — landmarks, industries, or characteristics */
  proofPoints: { label: string; desc: string }[];
  /** Local FAQs specific to this market */
  faqs: { q: string; a: string }[];
  /** Portfolio image to use as hero (must exist in /public/images/portfolio/) */
  heroImage?: string;
  heroImageAlt?: string;
}

export const locations: Location[] = [
  // ── Tier 1 ─────────────────────────────────────────────────────────────────

  {
    slug: 'fort-worth',
    city: 'Fort Worth',
    county: 'Tarrant County',
    state: 'TX',
    region: 'DFW Metroplex',
    metaTitle: 'Drone Photography Fort Worth TX | Aerial Photo & Video | LNDMRK Drone',
    metaDesc:
      'Professional drone photography and videography in Fort Worth, TX. Real estate, construction, events, and film. FAA Part 107 certified. Same-week scheduling available.',
    h1: 'Drone Photography & Videography in Fort Worth, TX',
    intro:
      'LNDMRK Drone is based in Fort Worth — this is our home market. From Sundance Square to the Cultural District, from Alliance Corridor developments to Benbrook Lake, we know every corner of Cowtown from above. Fast response, no travel fees, and a pilot who has flown hundreds of commercial flights across Tarrant County.',
    marketContext:
      'Fort Worth\'s explosive growth — ranked among the fastest-growing large cities in the U.S. — has created surging demand for aerial photography across every sector. Real estate agents need drone photos to compete in a hot market. Contractors documenting major developments along the Walsh Ranch and Chisholm Trail corridors need recurring aerial records. Event venues from Dickies Arena to Farrington Field need aerial content that matches their scale.',
    proofPoints: [
      {
        label: 'Local Pilot, No Travel Fees',
        desc: 'We\'re based in Fort Worth — no mobilization charge for locations inside the city or immediate suburbs. Most clients are within 20 minutes of our base.',
      },
      {
        label: 'Tarrant County Airspace Experience',
        desc: 'We\'ve navigated LAANC authorizations around Meacham, Spinks, and Alliance airports. Urban Fort Worth flights are routine — we handle the airspace so you don\'t have to.',
      },
      {
        label: 'Every Industry, Every Neighborhood',
        desc: 'From high-end Westover Hills estates to Panther Island construction sites, from TCU events to Stockyards tourism content — we\'ve flown it.',
      },
    ],
    faqs: [
      {
        q: 'Are there drone restrictions near Fort Worth airports?',
        a: 'Yes — Fort Worth has multiple controlled airspace areas around Meacham International, Alliance, and the shared DFW Class B airspace. We handle all LAANC authorization and FAA coordination for every flight. You don\'t need to worry about permits — we manage it.',
      },
      {
        q: 'How quickly can you schedule a shoot in Fort Worth?',
        a: 'Being based in Fort Worth means we can typically schedule within 2–3 business days for standard shoots, and same-week for most requests. Rush bookings are available depending on current schedule.',
      },
      {
        q: 'Do you shoot downtown Fort Worth and Sundance Square?',
        a: 'Yes. Downtown Fort Worth falls within controlled airspace and requires LAANC authorization, which we obtain before every flight. We\'ve shot the Cultural District, the Near Southside, the Stockyards, and the central business district.',
      },
      {
        q: 'Can you cover events at Dickies Arena or Farrington Field?',
        a: 'Absolutely — event drone coverage at Fort Worth venues is one of our core services. We coordinate directly with venue management and obtain any required permits for drone operations at or near the facility.',
      },
    ],
    heroImage: '/images/portfolio/events-farrington-field-skyline.jpg',
    heroImageAlt: 'Aerial drone photo of Farrington Field stadium with Fort Worth skyline',
  },

  {
    slug: 'southlake',
    city: 'Southlake',
    county: 'Tarrant & Denton County',
    state: 'TX',
    region: 'Northeast Tarrant County',
    metaTitle: 'Drone Photography Southlake TX | Luxury Real Estate Aerial Photos | LNDMRK Drone',
    metaDesc:
      'Professional drone photography for Southlake, TX luxury real estate, estates, and events. FAA-certified pilot serving the Carroll ISD corridor and Southlake Town Square area.',
    h1: 'Drone Photography & Aerial Real Estate Photos in Southlake, TX',
    intro:
      'Southlake has the highest median home prices in DFW — and buyers at this level expect aerial photography, not as an upgrade, but as a baseline. LNDMRK Drone delivers cinematic drone photography and video for Southlake\'s luxury real estate market, estate properties, and corporate events, with the visual quality that matches what Southlake buyers expect.',
    marketContext:
      'With multi-million dollar estates, sprawling lots, and custom homes featuring resort-style pools, sports courts, and guest wings, Southlake properties demand a perspective that only aerial photography can provide. Standard ground photos miss the point entirely — the lot size, the landscape, the privacy, the lifestyle. Our drone photography captures all of it.',
    proofPoints: [
      {
        label: 'Luxury Real Estate Specialists',
        desc: 'We\'ve shot custom estates with sports complexes, pool cabanas, putting greens, and multi-acre grounds. We know how to make a $3M listing look like $3M.',
      },
      {
        label: 'Discreet, Professional Operations',
        desc: 'Southlake\'s HOA communities and gated neighborhoods require a professional, low-profile approach. We coordinate with property managers and provide COIs on request.',
      },
      {
        label: 'Twilight & Golden Hour Expertise',
        desc: 'Luxury listings shine at dusk. Our twilight aerial packages are designed specifically for high-end residential photography where lighting makes the difference.',
      },
    ],
    faqs: [
      {
        q: 'Do you serve gated communities and HOA-governed neighborhoods in Southlake?',
        a: 'Yes. We coordinate access in advance with HOA management or property representatives and provide Certificates of Insurance to any required parties. We\'re experienced working within gated communities throughout Tarrant and Denton counties.',
      },
      {
        q: 'Can you fly over private estates without disturbing neighbors?',
        a: 'We plan flight paths that stay within the subject property\'s airspace and use minimum-altitude, low-noise approaches where neighbor proximity is a concern. Discretion is built into how we operate.',
      },
      {
        q: 'What makes aerial photography worth it for a Southlake luxury listing?',
        a: 'At $2M+, buyers are comparing multiple properties online before ever visiting. Aerial photos show lot size, pool and outdoor living areas, the neighborhood context, and the surrounding landscape — information that\'s invisible in ground-level MLS photos. Listings with aerial photos get more online views and go under contract faster.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-luxury-sports-court.jpg',
    heroImageAlt: 'Aerial view of luxury home with private sports court, pool, and manicured grounds',
  },

  {
    slug: 'keller',
    city: 'Keller',
    county: 'Tarrant County',
    state: 'TX',
    region: 'North Tarrant County',
    metaTitle: 'Drone Photography Keller TX | Aerial Real Estate & Construction | LNDMRK Drone',
    metaDesc:
      'Drone photography and videography in Keller, TX. Real estate listing photos, construction progress, and event coverage. FAA-certified pilot based in Fort Worth.',
    h1: 'Drone Photography & Aerial Videography in Keller, TX',
    intro:
      'Keller is one of North Tarrant County\'s fastest-growing communities — and one of DFW\'s most competitive real estate markets. LNDMRK Drone provides professional drone photography for Keller real estate agents, custom homebuilders, and event venues, delivered with the speed and quality that a market this active demands.',
    marketContext:
      'Keller\'s combination of top-ranked schools, new construction neighborhoods, and established custom home communities creates strong demand for aerial photography across multiple categories. Real estate agents need drone shots to stand out in a crowded MLS. Builders tracking progress on custom homes and subdivision developments need regular aerial documentation.',
    proofPoints: [
      {
        label: 'New Construction Coverage',
        desc: 'Keller\'s active new construction market — from single custom homes to full subdivisions — benefits from aerial progress documentation at every phase.',
      },
      {
        label: 'MLS-Ready Turnaround',
        desc: 'Edited aerial photos delivered within 48 hours of the shoot — fast enough to hit the listing date your client is counting on.',
      },
      {
        label: 'Sports & Youth Events',
        desc: 'Keller ISD and its athletic facilities are a natural fit for drone event coverage. We\'ve covered youth sports, school events, and stadium aerials throughout North Tarrant County.',
      },
    ],
    faqs: [
      {
        q: 'How far in advance do I need to book for a Keller real estate shoot?',
        a: 'We recommend 3–5 days for standard bookings. Rush scheduling (1–2 days) is often available. Being Fort Worth-based means Keller shoots have no travel fee and we can fit them into available schedule windows quickly.',
      },
      {
        q: 'Can you shoot new construction neighborhoods in Keller?',
        a: 'Yes — new construction is one of our most common shoot types. We handle everything from individual spec home exteriors to community overview shots showing the full development from above.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-suburban-neighborhood.jpg',
    heroImageAlt: 'Aerial drone photo of suburban neighborhood with homes, streets, and green spaces',
  },

  {
    slug: 'arlington',
    city: 'Arlington',
    county: 'Tarrant County',
    state: 'TX',
    region: 'Mid-Cities / DFW',
    metaTitle: 'Drone Photography Arlington TX | Aerial Photo & Video | LNDMRK Drone',
    metaDesc:
      'Professional drone photography and videography in Arlington, TX. Real estate, events, commercial construction, and aerial film. FAA-certified. Serving the Entertainment District and beyond.',
    h1: 'Drone Photography & Videography in Arlington, TX',
    intro:
      'Arlington is the entertainment capital of North Texas — home to AT&T Stadium, Globe Life Field, Six Flags, and a booming commercial corridor that runs straight through the heart of DFW. LNDMRK Drone provides drone photography and videography for Arlington\'s real estate market, major event venues, corporate facilities, and media productions.',
    marketContext:
      'Few cities in Texas pack the visual density of Arlington\'s Entertainment District — and few clients in DFW need aerial content more urgently than the venues and brands that operate there. Beyond the stadiums, Arlington\'s I-20 corridor is one of the most active commercial development zones in Tarrant County, creating strong ongoing demand for construction documentation and corporate aerial photography.',
    proofPoints: [
      {
        label: 'Entertainment District Experience',
        desc: 'We\'ve navigated the complex airspace around the AT&T Stadium / Globe Life Field area. Event and commercial shoots near the Entertainment District require careful planning — we\'ve done it.',
      },
      {
        label: 'Commercial & Corporate Clients',
        desc: 'Arlington\'s corporate park and industrial corridor needs professional aerial photography for facilities, ground-breaking events, and marketing materials.',
      },
      {
        label: 'Real Estate Across All Price Points',
        desc: 'From entry-level neighborhoods near UTA to executive homes in the Viridian community, we shoot Arlington real estate at every level of the market.',
      },
    ],
    faqs: [
      {
        q: 'Can you fly near AT&T Stadium and Globe Life Field?',
        a: 'Those venues fall within complex airspace and are subject to Temporary Flight Restrictions (TFRs) during events. We check TFR status before every shoot and coordinate LAANC authorization for flights in the area. On event days, we plan accordingly or reschedule.',
      },
      {
        q: 'Do you cover commercial construction projects along I-20 in Arlington?',
        a: 'Yes. Commercial construction documentation is one of our core service lines. We offer recurring flight packages for developers and general contractors tracking progress on large commercial and industrial builds.',
      },
    ],
    heroImage: '/images/portfolio/events-mavs-ballpark-dallas.jpg',
    heroImageAlt: 'Aerial drone photo of professional baseball field with downtown skyline in background',
  },

  {
    slug: 'granbury',
    city: 'Granbury',
    county: 'Hood County',
    state: 'TX',
    region: 'Hood County / Lake Granbury',
    metaTitle: 'Drone Photography Granbury TX | Lake Property & Real Estate Aerial | LNDMRK Drone',
    metaDesc:
      'Drone photography in Granbury, TX and Lake Granbury. Aerial real estate photos for waterfront properties, lake homes, and Hood County listings. FAA-certified pilot from Fort Worth.',
    h1: 'Drone Photography & Lake Property Aerials in Granbury, TX',
    intro:
      'Granbury and Lake Granbury are 45 minutes southwest of Fort Worth — and some of the most photogenic drone territory in North Texas. Waterfront properties, Hill Country views, and historic downtown Granbury all benefit from an aerial perspective that ground photography simply cannot provide. LNDMRK Drone serves Hood County real estate agents and property owners with aerial photography tailored to the lake and rural luxury market.',
    marketContext:
      'Lake Granbury attracts buyers from DFW looking for weekend retreats, retirement properties, and full-time waterfront living. These buyers are comparing properties online before they ever visit — and aerial photography is often the deciding factor in which listings get a showing. A drone photo showing the lot\'s waterfront footage, dock access, and lake views sells in a way a ground photo never will.',
    proofPoints: [
      {
        label: 'Waterfront Property Specialists',
        desc: 'Lake homes require drone photography to show frontage, dock configuration, water access, and the lake itself. We know how to frame lake properties to maximize buyer impact.',
      },
      {
        label: 'Hood County Coverage at No Surcharge',
        desc: 'Our service area extends to Granbury and Hood County. Travel is factored into our quote with no hidden fees.',
      },
      {
        label: 'Rural Acreage & Ranch Properties',
        desc: 'Large acreage and ranch properties in Hood County benefit enormously from aerial photography — showing the full land extent, terrain, pond locations, and improvements that can\'t be seen from the road.',
      },
    ],
    faqs: [
      {
        q: 'Do you travel to Granbury and Hood County?',
        a: 'Yes. Granbury is approximately 45 miles from our Fort Worth base. We include Hood County in our service area — travel is factored into project quotes, typically a modest travel fee depending on scope.',
      },
      {
        q: 'Can you shoot over Lake Granbury itself?',
        a: 'Yes. Water operations are routine for drone photography. We frame shots to include the lake, dock, and shoreline from multiple angles to give buyers a complete picture of the waterfront asset.',
      },
      {
        q: 'Do you shoot rural acreage and ranch listings?',
        a: 'Absolutely — large acreage is where drone photography has the most impact. Buyers of rural and ranch properties need to see the full land extent, road access, water features, and improvements from above before they\'ll make the drive.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-lake-property.jpg',
    heroImageAlt: 'Aerial drone photo of Texas lake property with limestone bluffs and waterfront access',
  },

  // ── Tier 2 ─────────────────────────────────────────────────────────────────

  {
    slug: 'aledo',
    city: 'Aledo',
    county: 'Parker County',
    state: 'TX',
    region: 'Parker County',
    metaTitle: 'Drone Photography Aledo TX | Aerial Real Estate & Sports | LNDMRK Drone',
    metaDesc:
      'Drone photography in Aledo, TX. Real estate aerials, construction documentation, and sports/events coverage for Parker County. FAA-certified pilot based in Fort Worth.',
    h1: 'Drone Photography & Videography in Aledo, TX',
    intro:
      'Aledo is one of the fastest-growing communities in Parker County — a small town feel with a red-hot real estate market and one of the best high school football programs in Texas. LNDMRK Drone has extensive coverage of Aledo, including Bearcat Stadium, the homecoming parade, youth sports facilities, and the custom home builds spreading across the surrounding countryside.',
    marketContext:
      'Aledo ISD\'s reputation draws families from across the Metroplex, fueling strong demand for custom homes, new developments, and premium real estate photography. Bearcat Stadium and the athletic complex are natural subjects for aerial coverage. The area\'s acreage properties, custom homes with resort-style amenities, and new subdivision development all benefit from a bird\'s-eye perspective.',
    proofPoints: [
      {
        label: 'Extensive Aledo Portfolio',
        desc: 'We have more shots of Aledo than almost any other market — Bearcat Stadium, homecoming parades, baseball fields in snow, and custom home builds throughout the community.',
      },
      {
        label: 'Parker County Real Estate',
        desc: 'Aledo\'s custom home market features pools, sport courts, putting greens, and large lots — all of which show best from above.',
      },
      {
        label: 'School & Athletic Coverage',
        desc: 'Aledo ISD events, athletics, and campus aerials are a specialty. We\'ve documented Bearcat Stadium in multiple seasons and conditions.',
      },
    ],
    faqs: [
      {
        q: 'Do you have portfolio work in Aledo specifically?',
        a: 'Yes — Aledo is one of our most-documented markets. Our portfolio includes Bearcat Stadium aerials, homecoming parade coverage, snow-day campus shots, and real estate photography throughout the community. View our portfolio to see Aledo work.',
      },
      {
        q: 'Can you cover Aledo ISD events and athletics?',
        a: 'Yes. We\'ve covered Aledo High School events, Bearcat Stadium, and youth sports in the area. School and athletic event coverage is available on a per-event or season package basis.',
      },
    ],
    heroImage: '/images/portfolio/events-aledo-bearcat-baseball.jpg',
    heroImageAlt: 'Overhead aerial of Aledo Bearcat Baseball field showing logo on outfield grass',
  },

  {
    slug: 'weatherford',
    city: 'Weatherford',
    county: 'Parker County',
    state: 'TX',
    region: 'Parker County',
    metaTitle: 'Drone Photography Weatherford TX | Aerial Real Estate & Ranch | LNDMRK Drone',
    metaDesc:
      'Professional drone photography in Weatherford, TX. Real estate aerials, ranch and acreage listings, construction, and events in Parker County. FAA Part 107 certified.',
    h1: 'Drone Photography & Aerial Real Estate in Weatherford, TX',
    intro:
      'Weatherford is the heart of Parker County — a market where aerial photography earns its keep on every single listing. Ranch properties, rural acreage, custom homes on large lots, and equestrian estates are all dramatically better represented from above. LNDMRK Drone serves Weatherford and the surrounding Parker County area with professional drone photography built for the rural luxury and suburban growth market.',
    marketContext:
      'Weatherford sits at the intersection of Parker County\'s rural heritage and its accelerating suburban growth. Properties here range from historic downtown commercial to multi-hundred-acre ranch listings — and all of them benefit from aerial photography. The I-20 corridor is seeing active residential and commercial development that needs documentation.',
    proofPoints: [
      {
        label: 'Ranch & Acreage Specialists',
        desc: 'Large lot and ranch listings are where aerial photography creates the most value. We show the full extent of the land, terrain, water features, outbuildings, and road access.',
      },
      {
        label: 'Parker County Native Knowledge',
        desc: 'We know Parker County geography, common airspace considerations, and the specific visual elements that matter to buyers in this market.',
      },
      {
        label: 'Equestrian Property Photography',
        desc: 'Weatherford is the Cutting Horse Capital of the World. Arena layouts, barn configurations, turnout acreage, and facility overviews all photograph dramatically from above.',
      },
    ],
    faqs: [
      {
        q: 'Do you serve Weatherford and the surrounding Parker County area?',
        a: 'Yes. Weatherford is approximately 25 miles west of our Fort Worth base and within our primary service area. Most Parker County locations fall within our standard service radius.',
      },
      {
        q: 'Can you shoot equestrian properties and cutting horse facilities?',
        a: 'Absolutely. Aerial photography is particularly valuable for equestrian properties — showing arena size, pen layout, pasture acreage, and the full facility from above in a way ground photography cannot.',
      },
      {
        q: 'Do you shoot large ranch acreage listings?',
        a: 'Yes — large acreage is one of our most-requested shoot types. We cover the full property boundary, terrain features, water resources, and improvements so buyers can evaluate the land before making the drive.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-lake-property.jpg',
    heroImageAlt: 'Aerial drone photo of Texas property with Hill Country landscape and open acreage',
  },

  {
    slug: 'parker-county',
    city: 'Parker County',
    county: 'Parker County',
    state: 'TX',
    region: 'West DFW',
    metaTitle: 'Drone Photography Parker County TX | Aerial Real Estate & Ranch | LNDMRK Drone',
    metaDesc:
      'Professional drone photography serving all of Parker County, TX — Weatherford, Aledo, Willow Park, Hudson Oaks, Azle, and surrounding areas. Real estate, ranch, construction, and events.',
    h1: 'Drone Photography Services Across Parker County, TX',
    intro:
      'LNDMRK Drone serves all of Parker County — from Weatherford and Aledo to Willow Park, Hudson Oaks, Springtown, Azle, and the communities in between. Parker County\'s mix of rural ranch land, fast-growing suburban neighborhoods, and equestrian properties makes aerial photography one of the most impactful tools a real estate agent or property owner can use.',
    marketContext:
      'Parker County is one of the fastest-growing counties in Texas. The I-20 corridor from Fort Worth to Weatherford is seeing non-stop residential and commercial development, while the rural interior still holds thousands of acres of ranch land, equestrian properties, and luxury rural retreats. Every segment of that market benefits from professional aerial photography.',
    proofPoints: [
      {
        label: 'County-Wide Coverage',
        desc: 'We serve every city and community in Parker County — Weatherford, Aledo, Willow Park, Hudson Oaks, Springtown, Azle, Cool, and unincorporated areas throughout.',
      },
      {
        label: 'Rural & Ranch Expertise',
        desc: 'Large acreage, ranch listings, equestrian properties, and rural homesteads are where aerial photography has the most impact. We know how to shoot them.',
      },
      {
        label: 'Suburban Growth Markets',
        desc: 'The I-20 corridor is booming. New construction homes, subdivision development, and commercial builds along the highway all benefit from aerial documentation.',
      },
    ],
    faqs: [
      {
        q: 'Which Parker County cities and communities do you serve?',
        a: 'All of them — Weatherford, Aledo, Willow Park, Hudson Oaks, Springtown, Azle, Millsap, Brock, Cool, Reno, and unincorporated Parker County. If you\'re not sure whether your property is in our range, just reach out.',
      },
      {
        q: 'Is there a travel fee for Parker County locations?',
        a: 'Locations within about 30 miles of Fort Worth (including most of eastern Parker County) have no travel fee. For locations further west or in rural areas, a modest travel fee may apply — we\'ll confirm upfront when you request a quote.',
      },
      {
        q: 'Can you shoot large ranch properties in Parker County?',
        a: 'Yes — large ranch and acreage properties are among our most common shoot types in this area. We cover the full land extent, terrain, improvements, and features that buyers need to see before making the drive.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-fort-worth-home.jpg',
    heroImageAlt: 'Aerial drone photo of custom home with large lot in suburban Texas community',
  },

  {
    slug: 'burleson',
    city: 'Burleson',
    county: 'Johnson & Tarrant County',
    state: 'TX',
    region: 'South Tarrant County',
    metaTitle: 'Drone Photography Burleson TX | Aerial Real Estate & Construction | LNDMRK Drone',
    metaDesc:
      'Drone photography in Burleson, TX. Aerial real estate photos, construction documentation, and event coverage for Johnson and south Tarrant County. FAA-certified.',
    h1: 'Drone Photography & Aerial Real Estate in Burleson, TX',
    intro:
      'Burleson is one of the fastest-growing communities in the southern DFW Metroplex — a market with strong new construction activity, competitive real estate, and a growing commercial corridor. LNDMRK Drone serves Burleson with professional drone photography for real estate listings, homebuilders, contractors, and events throughout Johnson and south Tarrant County.',
    marketContext:
      'Burleson\'s location at the southern edge of Tarrant County — with easy access to Fort Worth and the I-35W corridor — has driven significant residential growth. Neighborhoods with larger lots, new construction homes, and custom builds all benefit from aerial photography that shows the community context buyers care about.',
    proofPoints: [
      {
        label: 'Growing Suburb Coverage',
        desc: 'Burleson\'s active real estate market needs drone photography to stand out. We deliver listing-ready aerials within 48 hours of your shoot.',
      },
      {
        label: 'New Construction Documentation',
        desc: 'Homebuilders and general contractors in Burleson can schedule recurring aerial progress flights to document builds from ground-break to certificate of occupancy.',
      },
      {
        label: 'Johnson County Service Area',
        desc: 'We serve all of Burleson and extend into Cleburne, Joshua, Crowley, and surrounding Johnson County communities.',
      },
    ],
    faqs: [
      {
        q: 'Do you cover Burleson and surrounding Johnson County towns?',
        a: 'Yes — our service area covers Burleson, Crowley, Joshua, Cleburne, Keene, and other Johnson County communities. Travel fees may apply for locations beyond our standard 30-mile radius.',
      },
      {
        q: 'How quickly can I get aerial photos for a Burleson listing?',
        a: 'Standard turnaround is 24–48 hours from shoot to delivery. We can often schedule Burleson shoots within 3–5 business days of booking.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-dfw-suburban-neighborhood-2.jpg',
    heroImageAlt: 'Aerial drone photo of suburban neighborhood development in DFW area',
  },

  {
    slug: 'mansfield',
    city: 'Mansfield',
    county: 'Tarrant County',
    state: 'TX',
    region: 'Southeast Tarrant County',
    metaTitle: 'Drone Photography Mansfield TX | Aerial Real Estate & Events | LNDMRK Drone',
    metaDesc:
      'Drone photography in Mansfield, TX. Aerial real estate photos, construction, and event coverage for Southeast Tarrant County. FAA-certified pilot based in Fort Worth.',
    h1: 'Drone Photography & Aerial Real Estate in Mansfield, TX',
    intro:
      'Mansfield is one of southeast Tarrant County\'s most desirable communities — known for top-rated schools, beautiful neighborhoods, and steady real estate demand. LNDMRK Drone serves Mansfield real estate agents, homebuilders, and event clients with professional drone photography that shows the community and properties at their best.',
    marketContext:
      'Mansfield\'s growth has been driven by its school district reputation, affordable luxury real estate relative to North Tarrant, and accessible location between Fort Worth and Arlington. It\'s a strong real estate market where aerial photography helps listings stand out against heavy MLS competition.',
    proofPoints: [
      {
        label: 'Competitive Market Advantage',
        desc: 'Aerial photos help Mansfield listings stand out in a busy MLS. Buyers browsing online click on listings with drone photos first.',
      },
      {
        label: 'School-Adjacent Properties',
        desc: 'Mansfield ISD attracts buyers specifically for the schools. Aerials showing neighborhood context, proximity to parks, and community features appeal directly to what those buyers want.',
      },
      {
        label: 'Fast Fort Worth Turnaround',
        desc: 'Located 25 miles from our Fort Worth base, Mansfield shoots are easy to schedule with quick turnaround and no long travel delays.',
      },
    ],
    faqs: [
      {
        q: 'Is Mansfield within your regular service area?',
        a: 'Yes — Mansfield is approximately 25 miles from our Fort Worth base and within our primary service area with no travel surcharge.',
      },
      {
        q: 'Can you shoot the Heritage High School area or Mansfield ISD facilities?',
        a: 'Yes. School and athletic facility aerials are available, subject to LAANC authorization where required and coordination with district administration for on-campus access.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-home-pool-turf.jpg',
    heroImageAlt: 'Aerial drone photo of suburban home with pool and turf backyard',
  },

  {
    slug: 'grapevine',
    city: 'Grapevine',
    county: 'Tarrant County',
    state: 'TX',
    region: 'North Tarrant County',
    metaTitle: 'Drone Photography Grapevine TX | Aerial Events, Real Estate & Tourism | LNDMRK Drone',
    metaDesc:
      'Drone photography in Grapevine, TX. Aerial coverage for events, wineries, Lake Grapevine, real estate, and tourism. FAA-certified pilot. Serving the Grapevine Historic District and beyond.',
    h1: 'Drone Photography, Events & Tourism Aerials in Grapevine, TX',
    intro:
      'Grapevine is one of the most visually compelling cities in DFW — a historic downtown, active winery district, Lake Grapevine waterfront, and premium real estate market all in one place. LNDMRK Drone serves Grapevine with aerial photography for tourism and hospitality clients, real estate agents, event venues, and commercial brands who want content that captures the city\'s unique appeal.',
    marketContext:
      'Grapevine\'s proximity to DFW Airport makes it a hub for tourism and hospitality brands needing professional aerial content. The GrapeFest and Christmas Capital of Texas events attract regional audiences and create demand for stunning aerial event photography. Lake Grapevine waterfront properties command premium prices and benefit directly from drone photography showing water access and views.',
    proofPoints: [
      {
        label: 'Tourism & Hospitality Expertise',
        desc: 'Wineries, resorts, boutique hotels, and tourism venues in Grapevine need cinematic aerial content. We shoot it with a marketer\'s eye — content that stops the scroll.',
      },
      {
        label: 'Lake Grapevine Waterfront',
        desc: 'Waterfront and lake-view properties are a specialty. We show dock access, water frontage, and the full lake perspective buyers of premium properties are looking for.',
      },
      {
        label: 'DFW Airport Airspace Management',
        desc: 'Grapevine sits within DFW\'s Class B airspace. Every flight requires LAANC authorization — something we handle routinely as part of our standard process.',
      },
    ],
    faqs: [
      {
        q: 'Can you fly in Grapevine given the proximity to DFW Airport?',
        a: 'Yes. Grapevine falls within DFW\'s Class B controlled airspace. We obtain LAANC authorization before every flight in the area — this is routine for us. The authorization process typically takes 24–48 hours to confirm.',
      },
      {
        q: 'Do you shoot winery and hospitality events in Grapevine?',
        a: 'Absolutely. Wineries, resort events, and tourism venues are a great fit for drone aerial photography. We produce content for social media, websites, and marketing campaigns — shot with the same storytelling eye we bring to every project.',
      },
      {
        q: 'Can you cover Lake Grapevine waterfront properties?',
        a: 'Yes. Lake Grapevine properties are among our favorite shoots — the water, the views, and the landscape all come together in ways that aerial photography captures beautifully.',
      },
    ],
    heroImage: '/images/portfolio/events-resort-cove-golden-hour.jpg',
    heroImageAlt: 'Aerial drone photo at golden hour of waterfront resort with lake views',
  },

  {
    slug: 'benbrook',
    city: 'Benbrook',
    county: 'Tarrant County',
    state: 'TX',
    region: 'Southwest Fort Worth',
    metaTitle: 'Drone Photography Benbrook TX | Aerial Real Estate & Lake Photos | LNDMRK Drone',
    metaDesc:
      'Drone photography in Benbrook, TX. Aerial real estate, Lake Benbrook waterfront, and construction photography. FAA-certified pilot based in Fort Worth.',
    h1: 'Drone Photography & Lake Benbrook Aerial Photos in Benbrook, TX',
    intro:
      'Benbrook sits just southwest of Fort Worth — a quiet, established community anchored by Lake Benbrook and characterized by custom homes, large lots, and a relaxed suburban feel. LNDMRK Drone is minutes away and serves Benbrook real estate agents, lakefront property owners, and local businesses with professional aerial photography that shows the community at its best.',
    marketContext:
      'Benbrook\'s appeal is its proximity to Fort Worth without the city\'s density. Lake Benbrook adds a waterfront dimension to the real estate market that aerial photography is perfectly suited to capture — shoreline footage, dock access, and water views that buyers can\'t evaluate from ground-level photos alone.',
    proofPoints: [
      {
        label: 'Minutes from Our Fort Worth Base',
        desc: 'Benbrook is one of our closest markets — fast scheduling, no travel fees, and a pilot who knows the local airspace.',
      },
      {
        label: 'Lake Benbrook Waterfront',
        desc: 'Waterfront and lake-view properties on Lake Benbrook benefit enormously from aerial photography showing shore access, lot configuration, and the water itself.',
      },
      {
        label: 'Established Neighborhood Expertise',
        desc: 'Benbrook\'s mature neighborhoods with large lots and custom homes are natural subjects for drone photography — showing the lot size and mature landscaping that buyers value.',
      },
    ],
    faqs: [
      {
        q: 'Is Benbrook in your service area?',
        a: 'Yes — Benbrook is minutes from our Fort Worth base, well within our standard service area with no travel surcharge.',
      },
      {
        q: 'Can you shoot Lake Benbrook waterfront properties?',
        a: 'Yes. Waterfront photography at Lake Benbrook is a great fit for drone work — we capture shoreline frontage, dock layouts, and the full lake context that sells waterfront listings.',
      },
    ],
    heroImage: '/images/portfolio/film-texas-lake-sunset.jpg',
    heroImageAlt: 'Aerial drone photo of Texas lake at sunset with shoreline and water reflections',
  },

  {
    slug: 'haslet',
    city: 'Haslet',
    county: 'Tarrant County',
    state: 'TX',
    region: 'North Fort Worth / Alliance Corridor',
    metaTitle: 'Drone Photography Haslet TX | Aerial Real Estate & Construction | LNDMRK Drone',
    metaDesc:
      'Drone photography in Haslet, TX. Real estate aerial photos, new construction documentation, and commercial coverage along the Alliance Corridor. FAA-certified.',
    h1: 'Drone Photography & New Construction Aerials in Haslet, TX',
    intro:
      'Haslet is at the center of one of the most active growth corridors in all of North Texas — the Alliance Airport area. New residential communities, industrial facilities, and commercial development are reshaping Haslet rapidly. LNDMRK Drone serves the Haslet and North Fort Worth corridor with aerial photography for real estate agents, developers, and contractors who need professional documentation to match the pace of growth.',
    marketContext:
      'The Alliance Corridor — anchored by AllianceTexas and Fort Worth Alliance Airport — is one of the largest commercial and logistics hubs in the country. Residential development is filling in rapidly around it. Haslet sits right in the middle, making it one of the most photographically active markets in Tarrant County for both residential real estate and commercial construction.',
    proofPoints: [
      {
        label: 'Alliance Corridor Coverage',
        desc: 'We\'ve shot commercial and industrial properties throughout the Alliance area. Large facilities and logistics developments photograph dramatically from the air.',
      },
      {
        label: 'New Community Development',
        desc: 'Haslet\'s fast-growing residential communities need aerial photography that shows the full scope of the development and neighborhood context buyers are evaluating.',
      },
      {
        label: 'Alliance Airport Airspace Experience',
        desc: 'Alliance Airport requires LAANC authorization for flights in the area. We handle all airspace coordination as a standard part of every shoot.',
      },
    ],
    faqs: [
      {
        q: 'Can you fly near Fort Worth Alliance Airport?',
        a: 'Yes. Alliance Airport has controlled airspace that requires LAANC authorization. We coordinate this for every shoot in the area — it\'s a routine part of our process for Alliance Corridor clients.',
      },
      {
        q: 'Do you serve commercial and industrial clients in the Alliance area?',
        a: 'Yes. Commercial and industrial facility photography — for marketing, annual reports, or construction documentation — is one of our core service types in the North Fort Worth area.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-dfw-suburban-neighborhood-2.jpg',
    heroImageAlt: 'Aerial drone photo of growing suburban development in North Texas',
  },

  {
    slug: 'justin',
    city: 'Justin',
    county: 'Denton County',
    state: 'TX',
    region: 'Northwest DFW',
    metaTitle: 'Drone Photography Justin TX | Aerial Real Estate & Ranch | LNDMRK Drone',
    metaDesc:
      'Drone photography in Justin, TX and northwest Denton County. Aerial real estate, ranch, and acreage photography. FAA-certified pilot serving Denton County.',
    h1: 'Drone Photography & Aerial Real Estate in Justin, TX',
    intro:
      'Justin sits at the northern edge of the DFW growth wave — a small community in Denton County where large-lot custom homes, ranch properties, and rural acreage meet a growing suburban real estate market. LNDMRK Drone serves Justin and northwest Denton County with aerial photography that shows land, lifestyle, and property value the way ground photos never can.',
    marketContext:
      'Justin\'s appeal is space — larger lots, rural character, and room to breathe that buyers priced out of closer-in suburbs are actively seeking. Properties here range from quarter-acre new builds to multi-hundred-acre ranch tracts, and aerial photography is often the only way to properly represent the full value of what\'s for sale.',
    proofPoints: [
      {
        label: 'Large Lot & Acreage Expertise',
        desc: 'Justin properties often sit on large lots or acreage. Aerial photography shows the full extent of the land — something buyers need to see before making a serious inquiry.',
      },
      {
        label: 'Rural Property Photography',
        desc: 'Ranch land, equestrian acreage, and rural homesteads in northwest Denton County benefit enormously from aerial perspectives that ground photography can\'t replicate.',
      },
      {
        label: 'Denton County Coverage',
        desc: 'We serve Justin and surrounding Denton County communities including Rhome, Boyd, Newark, and Aurora.',
      },
    ],
    faqs: [
      {
        q: 'Is Justin in your service area?',
        a: 'Yes. Justin is approximately 35–40 miles from our Fort Worth base in northwest Denton County. It\'s within our extended service area — a modest travel fee may apply depending on the project scope.',
      },
      {
        q: 'Do you shoot ranch and acreage properties near Justin?',
        a: 'Yes — rural acreage and ranch properties in northwest Denton County are a great fit for aerial photography. We cover the full land extent, improvements, and terrain features that buyers need to evaluate remotely.',
      },
    ],
    heroImage: '/images/portfolio/real-estate-suburban-neighborhood.jpg',
    heroImageAlt: 'Aerial drone photo of residential development with large lots in North Texas',
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
