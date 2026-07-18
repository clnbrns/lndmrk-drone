export interface ServiceFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  eyebrow: string;
  icon: string;
  intro: string;
  featuresHeading: string;
  features: ServiceFeature[];
  industries?: string[];
  faqs: ServiceFaq[];
  relatedSlugs: [string, string];
}

export const services: Service[] = [
  {
    slug: 'real-estate',
    title: 'Real Estate Aerial Photography',
    shortDesc: 'Make listings sell faster with stunning aerial photos and video tours.',
    metaTitle: 'Aerial Real Estate Photography & Drone Listing Photos',
    metaDesc:
      'Professional aerial real estate photography and drone listing photos. Show properties from their best angle and sell faster with FAA-certified pilots. Book online.',
    h1: 'Aerial Real Estate Photography That Sells Properties Faster',
    eyebrow: 'Real Estate',
    icon: '🏡',
    intro:
      'Buyers make decisions in seconds. Aerial photography gives every listing a commanding first impression — showcasing the full property, surrounding landscape, and neighborhood context that ground-level photos simply cannot capture. Our FAA-certified pilots deliver print-ready photos and cinematic video tours within 48 hours.',
    featuresHeading: "What's Included",
    features: [
      {
        icon: '📷',
        title: 'Exterior Aerial Stills',
        desc: 'High-resolution photos from multiple altitudes and angles, edited and delivered in MLS-ready formats.',
      },
      {
        icon: '🌆',
        title: 'Neighborhood Context',
        desc: 'Wide-angle overviews showing proximity to parks, schools, waterfronts, and amenities that add value.',
      },
      {
        icon: '🌙',
        title: 'Twilight Photography',
        desc: 'Golden-hour and blue-hour aerial shots that give luxury listings a cinematic edge over the competition.',
      },
      {
        icon: '🎬',
        title: 'Video Flyover Tours',
        desc: '4K cinematic flyover videos edited with music and branding, ready for MLS, Zillow, and social media.',
      },
      {
        icon: '🗺️',
        title: 'Lot & Site Overview',
        desc: 'High-altitude overhead aerials that clearly show lot boundaries, acreage, and site layout for buyers evaluating larger properties.',
      },
      {
        icon: '⚡',
        title: '48-Hour Turnaround',
        desc: 'Edited files delivered within two business days — or next-day rush delivery when listings can\'t wait.',
      },
    ],
    faqs: [
      {
        q: 'How far in advance should I book a real estate drone shoot?',
        a: 'We recommend booking 3–5 days in advance for standard shoots. Rush bookings (next-day) are available for an additional fee depending on schedule availability.',
      },
      {
        q: 'What weather conditions affect drone flights?',
        a: 'We require wind speeds below 25 mph and visibility above 3 miles. We monitor conditions daily and will reschedule at no charge if weather is unsuitable on your shoot date.',
      },
      {
        q: 'Do you need access to the property interior?',
        a: 'No — aerial photography is entirely exterior. We only need gate codes or access information if the property is behind a secured entrance.',
      },
      {
        q: 'Do you provide RAW image files?',
        a: 'Standard packages include color-corrected high-resolution JPEGs. RAW files are available as an add-on for clients who require them for custom editing.',
      },
      {
        q: 'What is the typical turnaround time for edited photos?',
        a: 'Standard turnaround is 24–48 business hours after the shoot. Rush delivery within the same day is available for urgent listings.',
      },
    ],
    relatedSlugs: ['ranch-land-photography', 'film-and-media'],
  },
  {
    slug: 'construction',
    title: 'Construction Drone Photography',
    shortDesc: 'Track site progress, document milestones, and reduce rework with aerial insight.',
    metaTitle: 'Construction Drone Photography & Site Progress Monitoring',
    metaDesc:
      'Construction drone photography for site progress monitoring, pre-construction surveys, and as-built documentation. Reduce rework and disputes. FAA-certified.',
    h1: 'Construction Drone Photography & Site Progress Monitoring',
    eyebrow: 'Construction',
    icon: '🏗️',
    intro:
      'Construction projects move fast and documentation lags behind. Our construction drone photography services give project managers, owners, and contractors a reliable aerial record at every phase — from ground-breaking to final inspection. Recurring flight packages keep your stakeholders informed and your timeline accountable.',
    featuresHeading: 'Use Cases',
    features: [
      {
        icon: '🔭',
        title: 'Pre-Construction Surveys',
        desc: 'Establish a precise baseline of existing conditions before any earthwork begins, protecting against future disputes.',
      },
      {
        icon: '📅',
        title: 'Progress Tracking',
        desc: 'Scheduled weekly or bi-weekly flights produce time-lapse-ready image sets that show project velocity at a glance.',
      },
      {
        icon: '📋',
        title: 'As-Built Documentation',
        desc: 'Capture finished conditions from above for record drawings, punch lists, and owner handover packages.',
      },
      {
        icon: '📸',
        title: 'Before & After Documentation',
        desc: 'Side-by-side aerial comparisons at each project phase — powerful for client presentations, social media, and portfolio marketing.',
      },
      {
        icon: '⚠️',
        title: 'Safety & Compliance',
        desc: 'Inspect hard-to-reach areas without putting workers at height, and document site conditions from above.',
      },
      {
        icon: '📊',
        title: 'Stakeholder Reporting',
        desc: 'Polished aerial image sets and video updates that keep owners, lenders, and HOAs informed without requiring a site visit.',
      },
    ],
    industries: [
      'Residential Development',
      'Commercial Construction',
      'Infrastructure & Roads',
      'Industrial Facilities',
      'Land Development',
      'Government & Municipal Projects',
    ],
    faqs: [
      {
        q: 'How often should we schedule drone flights for a construction project?',
        a: 'Most clients fly weekly or bi-weekly. For large infrastructure projects, daily coverage is available. We offer subscription packages that lock in a lower per-flight rate for recurring work.',
      },
      {
        q: 'Can you fly near active construction equipment and workers?',
        a: 'Yes — our pilots are trained to operate safely around active job sites. We coordinate with your site superintendent before each flight to establish safe flight corridors.',
      },
      {
        q: 'What file formats do you deliver for construction documentation?',
        a: 'We deliver high-resolution JPEG and TIFF photo sets, organized by date and flight phase. Video progress updates are delivered as MP4 files. All files are named and organized for easy handoff to your project management platform.',
      },
      {
        q: 'Can you provide recurring weekly or monthly coverage?',
        a: 'Yes — recurring packages are our most popular construction offering. We lock in a set flight schedule and lower per-visit rate so you have consistent documentation throughout the build without re-booking each time.',
      },
      {
        q: 'Can you obtain permits to fly in controlled airspace near urban sites?',
        a: 'Yes. We are experienced with LAANC authorization and FAA airspace waivers. Urban site flights are routine for our team — we handle all airspace coordination.',
      },
    ],
    relatedSlugs: ['construction-progress-documentation', 'inspection'],
  },
  {
    slug: 'film-and-media',
    title: 'Drone Videography & Aerial Cinematography',
    shortDesc: 'Cinematic 4K aerial footage for commercials, film, TV, events, and social media.',
    metaTitle: 'Drone Videography & Aerial Cinematography | Commercial Drone Filming',
    metaDesc:
      'Professional drone videography and aerial cinematography for commercials, film, TV, events, and social media. 4K footage with FAA Part 107 certified pilots. Request a quote.',
    h1: 'Drone Videography & Aerial Cinematography',
    eyebrow: 'Film & Media',
    icon: '🎬',
    intro:
      'An aerial perspective transforms ordinary footage into something cinematic. Whether you\'re producing a national commercial, a feature film, a corporate brand video, or viral social content, our drone cinematography team delivers technically precise, visually stunning footage that elevates every production.',
    featuresHeading: 'Project Types',
    features: [
      {
        icon: '📺',
        title: 'Commercials & Advertising',
        desc: 'Brand-safe 4K aerial footage for TV spots, digital ads, and OOH campaigns, with insurance certificates on file for all major networks.',
      },
      {
        icon: '🎥',
        title: 'Film & Television',
        desc: 'Cinema-grade aerial sequences coordinated with your production team, including pre-vis, tech scouts, and script breakdowns.',
      },
      {
        icon: '🏢',
        title: 'Corporate & Brand Video',
        desc: 'Aerial establishing shots, facility overviews, and executive profiles that communicate scale and professionalism.',
      },
      {
        icon: '📱',
        title: 'Social Media Content',
        desc: 'Vertical and square cuts optimized for Instagram Reels, TikTok, and YouTube Shorts alongside standard widescreen masters.',
      },
      {
        icon: '🏎️',
        title: 'Automotive & Product',
        desc: 'Dynamic tracking shots and reveal moves for vehicle launches, product showcases, and lifestyle campaigns.',
      },
      {
        icon: '🌀',
        title: 'FPV Drone Footage',
        desc: 'High-energy first-person-view sequences for action sports, music videos, and content requiring extreme motion.',
      },
    ],
    industries: [
      'Advertising Agencies',
      'Film & TV Production Companies',
      'Corporate Marketing Teams',
      'Tourism & Hospitality',
      'Sports & Entertainment',
      'Automotive Brands',
    ],
    faqs: [
      {
        q: 'Do you provide both a pilot and a dedicated camera operator?',
        a: 'For complex productions, we deploy a two-person crew: a licensed remote pilot in command and a dedicated camera operator managing gimbal, exposure, and framing. Solo operator setups are available for smaller shoots.',
      },
      {
        q: 'What insurance coverage do you carry?',
        a: 'We carry commercial general liability and hull insurance on every production. Certificates of Insurance naming your production company can be issued within 24 hours for most shoots.',
      },
      {
        q: 'Are your pilots FAA Part 107 certified?',
        a: 'Yes. All of our remote pilots hold FAA Part 107 Remote Pilot Certificates and maintain current flight reviews. We carry copies of all certifications on every shoot.',
      },
      {
        q: 'What aircraft and camera systems do you operate?',
        a: 'Our primary production platform is the DJI Inspire 3 with Zenmuse X9 cinema camera. We also operate the Mavic 3 Cine for run-and-gun work and can source custom payload solutions including RED and Sony camera integrations for high-end productions.',
      },
      {
        q: 'What file formats and color spaces do you deliver?',
        a: 'We deliver ProRes 4K in a Log color profile (D-Log M or CinemaDNG) for maximum grading latitude. H.264/H.265 deliverables and color-graded masters are also available based on your post-production workflow.',
      },
    ],
    relatedSlugs: ['real-estate', 'events'],
  },
  {
    slug: 'inspection',
    title: 'Drone Inspection Services',
    shortDesc: 'Safe, efficient aerial inspection of wind turbines, pipelines, bridges, cell towers, and roofs.',
    metaTitle: 'Drone Inspection Services | Aerial Infrastructure Inspection',
    metaDesc:
      'Professional drone inspection services for wind turbines, pipelines, bridges, cell towers, and roofs. Thermal imaging available. Safer and more cost-effective than rope access.',
    h1: 'Drone Inspection Services for Infrastructure & Industrial Assets',
    eyebrow: 'Inspection',
    icon: '🔍',
    intro:
      'Traditional inspection methods put workers at risk and cost significantly more than drone alternatives. Our aerial inspection team uses high-resolution cameras, thermal imaging sensors, and structured inspection methodologies to deliver detailed asset condition reports — without scaffolding, rope access, or extended shutdowns.',
    featuresHeading: 'Asset Types We Inspect',
    features: [
      {
        icon: '💨',
        title: 'Wind Turbines',
        desc: 'Blade surface inspection capturing leading-edge erosion, cracks, lightning damage, and coating defects at sub-mm resolution.',
      },
      {
        icon: '🛢️',
        title: 'Pipelines & Storage Tanks',
        desc: 'Corrosion mapping, weld inspection, and thermal anomaly detection across above-ground pipeline and tank infrastructure.',
      },
      {
        icon: '🌉',
        title: 'Bridges & Structures',
        desc: 'Deck, pier, and bearing inspection with detailed visual documentation and change detection against prior inspection imagery.',
      },
      {
        icon: '📡',
        title: 'Telecommunications Towers',
        desc: 'Antenna mounts, coax, structural members, and grounding systems inspected without climber deployment.',
      },
      {
        icon: '🏠',
        title: 'Roofing & Buildings',
        desc: 'Thermal moisture surveys and visual roof inspections for commercial and industrial facilities with PDF defect reports.',
      },
      {
        icon: '☀️',
        title: 'Solar Panels',
        desc: 'Thermal imaging identifies underperforming cells, soiling, delamination, and bypass diode failures across utility-scale arrays.',
      },
    ],
    faqs: [
      {
        q: 'Is drone inspection safer than rope access or scaffolding?',
        a: 'Significantly so. Drone inspections eliminate working-at-height risks entirely for the inspection team. The only person at risk is the remote pilot on the ground, who follows strict operational safety protocols.',
      },
      {
        q: 'Do you offer thermal imaging for infrastructure inspections?',
        a: 'Yes. We operate calibrated radiometric thermal cameras (FLIR-based) capable of detecting temperature differentials as small as 0.05°C. Thermal data is delivered as radiometric TIFFs alongside RGB imagery.',
      },
      {
        q: 'What does a typical inspection report include?',
        a: 'Reports include geolocated high-resolution images, annotated defect maps, severity classifications (per industry standard), thermal imagery where applicable, and a written summary with recommended remediation actions.',
      },
      {
        q: 'Can you fly around tall structures in controlled or restricted airspace?',
        a: 'Yes. We routinely operate under LAANC authorizations near airports and obtain FAA waivers for nighttime, over-people, or special operations. Structure-adjacent flights are planned with buffer zones and spotter protocols.',
      },
      {
        q: 'What certifications do your inspection pilots carry?',
        a: 'All pilots hold FAA Part 107 certificates. For specialized assets (wind turbines, bridges), we follow ASTM E3125 and client-specific inspection protocols and can work under the direction of a licensed professional engineer.',
      },
    ],
    relatedSlugs: ['roof-inspections', 'commercial-building-inspections'],
  },
  {
    slug: 'events',
    title: 'Event Drone Photography & Videography',
    shortDesc: 'Stunning aerial coverage for weddings, concerts, sports events, and resorts.',
    metaTitle: 'Event Drone Photography & Wedding Aerial Photography',
    metaDesc:
      'Event drone photography and videography for weddings, concerts, sports, and tourism. Aerial coverage that captures the full scale and emotion of your event.',
    h1: 'Event Drone Photography & Aerial Videography',
    eyebrow: 'Events',
    icon: '🎉',
    intro:
      'No camera angle conveys the scale and energy of a live event like an aerial perspective. From intimate outdoor weddings to stadium concerts and championship sporting events, our event drone team captures the moments, the crowds, and the venue in a way no ground crew can. Every event package includes a pre-flight site survey, day-of coordination with your event team, and fast delivery of edited content.',
    featuresHeading: 'Event Types',
    features: [
      {
        icon: '💍',
        title: 'Weddings & Celebrations',
        desc: 'Breathtaking aerial portraits of the couple, ceremony venue, and reception — delivered as stills and a cinematic highlight reel.',
      },
      {
        icon: '🎵',
        title: 'Concerts & Festivals',
        desc: 'Crowd overheads, stage reveals, and wide venue shots that make every festival and concert look like a cultural moment.',
      },
      {
        icon: '🏆',
        title: 'Sports Events',
        desc: 'Dynamic tracking shots, overhead plays, and crowd atmosphere coverage for marathons, motorsports, golf, and team sports.',
      },
      {
        icon: '🏨',
        title: 'Tourism & Resorts',
        desc: 'Property showcases, amenity overviews, and destination content for hotels, resorts, and tourism boards.',
      },
      {
        icon: '🏢',
        title: 'Corporate & Brand Events',
        desc: 'Conference overheads, outdoor activations, and product launch aerials for brand and comms teams.',
      },
      {
        icon: '🎓',
        title: 'Graduations & Ceremonies',
        desc: 'Aerial photography of outdoor ceremonies on campus or public grounds, capturing the full pageantry of the occasion.',
      },
    ],
    faqs: [
      {
        q: 'How far in advance should I book event drone coverage?',
        a: 'For weekend events during peak season (May–October), we recommend booking 4–6 weeks in advance. Weekday events and off-season bookings are often available with shorter notice.',
      },
      {
        q: 'What happens if weather is bad on the event day?',
        a: 'We monitor conditions up to 72 hours before the event. If conditions are unsafe, we will contact you immediately to discuss options: rescheduling, ground-only coverage, or a partial refund depending on the situation.',
      },
      {
        q: 'Will there be a drone operator on site throughout the event?',
        a: 'Yes. Your booking includes a dedicated pilot and (for video packages) a camera operator who stays on site for the agreed coverage window, coordinating directly with your event coordinator.',
      },
      {
        q: 'Are there restrictions on flying over crowds?',
        a: 'FAA regulations restrict flight directly over crowds of people without a waiver. We plan flight paths that capture crowd atmosphere from compliant angles and can obtain FAA waivers for events that require direct overhead coverage.',
      },
      {
        q: 'How quickly can I receive the final edited photos and video?',
        a: 'Edited photos are delivered within 48–72 hours. Video highlight reels are typically delivered within 5–7 business days. Rush editing is available for social media turnaround within 24 hours.',
      },
    ],
    relatedSlugs: ['film-and-media', 'real-estate'],
  },
  {
    slug: 'government-and-public-safety',
    title: 'Government & Public Safety Drone Services',
    shortDesc: 'Aerial support for emergency response, traffic management, urban planning, and disaster documentation.',
    metaTitle: 'Government Drone Services & Public Safety Aerial Photography',
    metaDesc:
      'Government drone services for emergency response, traffic management, urban planning, and disaster documentation. Fully compliant, FAA-certified, and ready for rapid deployment.',
    h1: 'Government & Public Safety Drone Services',
    eyebrow: 'Government & Public Safety',
    icon: '🏛️',
    intro:
      'Government agencies and public safety organizations need aerial data they can trust — on time, on budget, and in full compliance with federal and state regulations. LNDMRK Drone provides aerial photography, mapping, and situational awareness services to municipalities, emergency management agencies, utilities, and public safety departments across the Dallas-Fort Worth Metroplex and North Texas.',
    featuresHeading: 'Use Cases',
    features: [
      {
        icon: '🚨',
        title: 'Emergency Response',
        desc: 'Rapid deployment for search and rescue, wildfire monitoring, flood assessment, and incident command situational awareness.',
      },
      {
        icon: '🚦',
        title: 'Traffic Management',
        desc: 'Overhead traffic pattern analysis, incident documentation, and infrastructure monitoring for transportation agencies.',
      },
      {
        icon: '🏙️',
        title: 'Urban Planning',
        desc: 'Aerial documentation and change detection for planners, zoning boards, and infrastructure departments.',
      },
      {
        icon: '🌊',
        title: 'Disaster Documentation',
        desc: 'Post-event aerial surveys document damage extent for FEMA reporting, insurance claims, and recovery planning.',
      },
      {
        icon: '🔒',
        title: 'Facility Security Surveys',
        desc: 'Perimeter mapping and vulnerability assessments for critical infrastructure, correctional facilities, and public buildings.',
      },
      {
        icon: '📡',
        title: 'Communications Support',
        desc: 'Aerial relay platforms and reconnaissance support for law enforcement operations and large public events.',
      },
    ],
    industries: [
      'Municipal Government',
      'Emergency Management Agencies',
      'Law Enforcement',
      'Fire & Rescue Services',
      'Transportation Departments',
      'Utilities & Public Works',
    ],
    faqs: [
      {
        q: 'Do your pilots have security clearances or background checks?',
        a: 'All of our pilots undergo background checks before joining the team. For projects requiring specific clearance levels, we work with the contracting agency to meet any additional vetting requirements.',
      },
      {
        q: 'Can you operate night-time missions?',
        a: 'Yes. We hold FAA Part 107 night waivers and operate anti-collision lighting systems that meet all regulatory requirements for night UAS operations.',
      },
      {
        q: 'How do you handle airspace waivers for restricted government airspace?',
        a: 'We have extensive experience filing FAA Part 107 waivers and coordinating with ATC facilities. For emergency operations, we coordinate via LAANC or direct coordination with the controlling facility for expedited authorization.',
      },
      {
        q: 'How quickly can you deploy for emergency or time-sensitive operations?',
        a: 'For contracted agency clients, we target a 4-hour deployment window for emergency activations within the DFW Metroplex. Standing retainer agreements with priority scheduling are available for agencies requiring guaranteed response times.',
      },
      {
        q: 'How is sensitive government data handled and stored?',
        a: 'Data is transferred via encrypted connections and stored on secure, access-controlled servers. We do not share, publish, or retain government imagery beyond the agreed contract period. Custom data handling agreements are available.',
      },
    ],
    relatedSlugs: ['inspection', 'construction'],
  },
  {
    slug: 'ranch-land-photography',
    title: 'Ranch & Land Aerial Photography',
    shortDesc: 'Show every fence line, tank, and pasture in one frame — aerial media for acreage listings.',
    metaTitle: 'Ranch & Land Aerial Photography in North Texas',
    metaDesc:
      'Drone photography for ranches, farms & acreage across North Texas. Show every fence line, tank, and pasture in one frame. FAA-certified, 48-hour delivery.',
    h1: 'Ranch & Land Aerial Photography in North Texas',
    eyebrow: 'Ranch & Land',
    icon: '🌾',
    intro:
      "You can't sell 200 acres with photos taken from a truck window. Buyers evaluating land want to see the whole property at once — terrain, water, access, fencing, and improvements in proper relation to each other. One high-altitude aerial answers questions that forty ground photos can't. We serve Parker, Wise, Hood, Johnson, Denton, Tarrant, and surrounding counties — and travel for the right ranch.",
    featuresHeading: 'What Your Listing Gets',
    features: [
      {
        icon: '🗺️',
        title: 'Full-Property Aerials',
        desc: 'The whole parcel in one frame, plus detail passes over tanks, creeks, barns, and pens.',
      },
      {
        icon: '📐',
        title: 'Boundary-Line Overlays',
        desc: 'Property lines drawn on the aerial from your survey or plat, so buyers instantly understand what they are looking at.',
      },
      {
        icon: '🎬',
        title: 'Cinematic Video Tour',
        desc: 'A 60–90 second flyover cut for MLS, LandsofTexas, and social media.',
      },
      {
        icon: '🌅',
        title: 'Golden-Hour Scheduling',
        desc: 'Texas land sells at sunset — we schedule flights for the light that flatters the property.',
      },
      {
        icon: '💧',
        title: 'Water & Improvement Passes',
        desc: 'Dedicated coverage of stock tanks, creeks, wells, barns, arenas, and outbuildings that drive land value.',
      },
      {
        icon: '⚡',
        title: '48-Hour Turnaround',
        desc: 'Edited, listing-ready files delivered before your property goes live.',
      },
    ],
    industries: [
      'Ranch & Land Brokerages',
      'Farm & Ranch Sellers',
      'Recreational Land',
      'Equestrian Properties',
      'Hunting Properties',
      'Land Developers',
    ],
    faqs: [
      {
        q: 'How much does ranch photography cost?',
        a: 'Pricing depends on property size and deliverables — boundary overlays and video tours are quoted per listing. Send us your acreage and county through the contact form and we will return a same-day quote. Volume pricing is available for brokerages marketing multiple properties.',
      },
      {
        q: 'Can you show property lines on the photos?',
        a: 'Yes. Provide a survey or plat and we overlay accurate boundary lines on your aerials — the single most requested deliverable for land listings.',
      },
      {
        q: 'How large a property can you cover?',
        a: 'We photograph everything from small homesteads to multi-thousand-acre working ranches. Large properties may take multiple flights, which we plan into a single visit.',
      },
      {
        q: 'Do you travel outside the DFW area?',
        a: 'Yes. We regularly cover listings across North Texas and will travel statewide for larger ranch properties. Travel is quoted up front with no surprises.',
      },
    ],
    relatedSlugs: ['real-estate', 'film-and-media'],
  },
  {
    slug: 'roof-inspections',
    title: 'Drone Roof Inspections',
    shortDesc: 'Independent roof documentation for insurance claims, home purchases, and facility planning.',
    metaTitle: 'Independent Drone Roof Inspections | Fort Worth & DFW',
    metaDesc:
      'Unbiased drone roof inspections in Fort Worth & DFW for insurance claims, home purchases & facility planning. We document — we don\'t sell roofs. 24-hour reports.',
    h1: "Drone Roof Inspections That Aren't Trying to Sell You a Roof",
    eyebrow: 'Roof Inspections',
    icon: '🏠',
    intro:
      "Free roof inspections in DFW usually come from companies that profit when they find damage. LNDMRK is different: we're a licensed aerial documentation company, not a roofing contractor. You get complete, high-resolution evidence of your roof's actual condition — every slope, ridge, valley, and penetration — and no sales pitch afterward.",
    featuresHeading: 'When Independent Documentation Matters',
    features: [
      {
        icon: '🌩️',
        title: 'Insurance Claims',
        desc: 'Timestamped, high-resolution imagery of hail and wind damage, organized by roof section in the format adjusters work with.',
      },
      {
        icon: '🔑',
        title: 'Pre-Purchase Inspections',
        desc: "Know the roof's real condition before closing, from someone with no stake in the answer.",
      },
      {
        icon: '🏢',
        title: 'Facility & Portfolio Owners',
        desc: 'Scheduled condition surveys for capital planning across your properties.',
      },
      {
        icon: '🤝',
        title: 'Contractors & Adjusters',
        desc: 'A certified Part 107 pilot on call when you need documentation flights at scale.',
      },
      {
        icon: '📋',
        title: 'Organized 24-Hour Reports',
        desc: 'Complete photo coverage delivered within 24 hours as an organized, shareable report.',
      },
      {
        icon: '🪜',
        title: 'No One on Your Roof',
        desc: 'Steep, high, or fragile roofs are no problem — nobody climbs, and nobody gets hurt on your property.',
      },
    ],
    faqs: [
      {
        q: 'Why pay when roofers inspect for free?',
        a: 'A free inspection is a sales call. When the result feeds an insurance claim, a real-estate negotiation, or a legal file, you need documentation from a party with nothing to gain — that is what we provide.',
      },
      {
        q: 'Will this work for my insurance claim?',
        a: 'Our imagery is timestamped, geotagged, and organized by roof section — the format adjusters work with. We do not assess claim value; we give you evidence nobody can argue with.',
      },
      {
        q: 'How fast can you fly after a storm?',
        a: 'Usually within 24–48 hours, weather permitting. After major hail events we prioritize by scheduling order — book early.',
      },
      {
        q: 'Do you inspect commercial roofs?',
        a: 'Yes — flat, membrane, metal, and steep-slope commercial roofs, including recurring condition surveys for facility managers. See our commercial building inspection service for portfolio programs.',
      },
    ],
    relatedSlugs: ['commercial-building-inspections', 'inspection'],
  },
  {
    slug: 'commercial-building-inspections',
    title: 'Commercial Building Inspections',
    shortDesc: 'Aerial roof, façade & envelope surveys for property managers — no lifts, no disruption.',
    metaTitle: 'Commercial Building Drone Inspections | DFW',
    metaDesc:
      'Drone inspections for commercial roofs, façades & facilities across DFW. Scheduled condition surveys for property managers — no lifts, no ladders, no disruption.',
    h1: 'Commercial Building Inspections Without the Lift Rental',
    eyebrow: 'Commercial Inspections',
    icon: '🏢',
    intro:
      "A boom lift, a crew, and a closed parking lot — or one certified pilot and an hour of flight time. LNDMRK documents commercial roofs, façades, and building envelopes across DFW with high-resolution aerial imagery, so your maintenance decisions are based on what's actually up there.",
    featuresHeading: 'For Property & Facility Managers',
    features: [
      {
        icon: '📅',
        title: 'Scheduled Condition Surveys',
        desc: 'Quarterly or annual flights that build a visual maintenance record for capital planning and budgeting.',
      },
      {
        icon: '🌩️',
        title: 'Storm-Damage Response',
        desc: 'Post-event documentation across your whole portfolio, prioritized and delivered fast for claims.',
      },
      {
        icon: '🧱',
        title: 'Façade & Envelope Imaging',
        desc: 'Masonry, glazing, flashing, and drainage at every elevation — without scaffolding.',
      },
      {
        icon: '✅',
        title: 'Pre- & Post-Work Verification',
        desc: 'Confirm contractor work was completed as billed, with before-and-after imagery.',
      },
      {
        icon: '🗂️',
        title: 'Reports That Fit Your Workflow',
        desc: 'Photo sets organized by building and elevation, with side-by-side comparisons against prior surveys.',
      },
      {
        icon: '🚷',
        title: 'Zero Tenant Disruption',
        desc: 'No site shutdown, no lifts, no one on the roof — most inspections finish inside an hour.',
      },
    ],
    industries: [
      'Property Management',
      'Facility Management',
      'Commercial Real Estate',
      'HOAs & Community Associations',
      'Insurance & Claims',
      'Roofing & Restoration Contractors',
    ],
    faqs: [
      {
        q: 'What does a commercial inspection cost?',
        a: 'Pricing depends on building size and scope. Portfolio and recurring-schedule pricing brings the per-building cost down significantly — request a facility quote for a same-day number.',
      },
      {
        q: 'Do you carry insurance we can verify?',
        a: 'Yes — we are FAA Part 107 certified and fully insured, with certificates of insurance provided on request, naming your entity as additional insured if required.',
      },
      {
        q: 'Can you inspect an occupied property?',
        a: 'Yes. Flights require no site shutdown, no lifts, and no one on the roof — most inspections finish inside an hour with zero tenant disruption.',
      },
      {
        q: 'How quickly do we get deliverables?',
        a: 'Organized photo sets and condition summaries are delivered within 48 hours of flight, shareable with owners, boards, insurers, and contractors.',
      },
    ],
    relatedSlugs: ['roof-inspections', 'inspection'],
  },
  {
    slug: 'construction-progress-documentation',
    title: 'Construction Progress Documentation',
    shortDesc: 'Recurring flights from fixed waypoints — consistent progress records for owners & lenders.',
    metaTitle: 'Monthly Construction Progress Photos | DFW',
    metaDesc:
      'Recurring drone progress documentation for DFW construction sites. Same angles, every month — for owners, lenders & marketing. FAA-certified, 48-hour delivery.',
    h1: 'Every Milestone, Documented From the Same Angle',
    eyebrow: 'Construction Progress',
    icon: '🗓️',
    intro:
      'Progress documentation only works when it is consistent. LNDMRK flies your site on a fixed schedule — same GPS waypoints, same angles, same altitudes — so month 14 lines up perfectly with month 1. Owners see progress, lenders release draws, and disputes get settled by the photo record instead of memory.',
    featuresHeading: 'Documentation Packages',
    features: [
      {
        icon: '📅',
        title: 'Monthly Progress Flights',
        desc: 'Repeatable aerial sets from fixed waypoints, delivered within 48 hours of each flight.',
      },
      {
        icon: '🏦',
        title: 'Draw-Inspection Support',
        desc: 'Dated imagery packaged for lender verification requirements.',
      },
      {
        icon: '🎉',
        title: 'Milestone & Topping-Out Media',
        desc: 'Cinematic photo and video for marketing, investor decks, and groundbreaking-to-ribbon-cutting timelapse.',
      },
      {
        icon: '🔭',
        title: 'Pre-Construction Site Conditions',
        desc: 'Document existing conditions before you break ground — and before the claims start.',
      },
      {
        icon: '🗄️',
        title: 'Organized Photo Archive',
        desc: 'The entire record organized by date, so any month is retrievable in seconds.',
      },
      {
        icon: '🛫',
        title: 'Airspace Handled',
        desc: "LAANC authorizations near DFW's controlled airspace secured before every flight — routine for our team.",
      },
    ],
    industries: [
      'General Contractors',
      'Developers',
      'Construction Lenders',
      'Owners & Owner Reps',
      'Architecture & Engineering',
      'Marketing & Investor Relations',
    ],
    faqs: [
      {
        q: 'How is recurring documentation priced?',
        a: 'By flight, with rates dropping on a standing schedule. Multi-site programs are quoted as a portfolio — request portfolio pricing with your site count and flight cadence.',
      },
      {
        q: 'Can you fly near DFW or Alliance airspace?',
        a: 'Yes. We secure LAANC authorizations for controlled airspace — a routine part of operating in the Metroplex, handled before every flight.',
      },
      {
        q: 'What if weather cancels a flight?',
        a: 'We monitor conditions and automatically reschedule within the same window, so your monthly record never has a gap.',
      },
      {
        q: 'How do stakeholders access the imagery?',
        a: 'Deliverables arrive as organized, dated photo sets ready for your project management platform, plus polished updates suitable for owners, lenders, and HOAs.',
      },
    ],
    relatedSlugs: ['construction', 'commercial-building-inspections'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(relatedSlugs: [string, string]): Service[] {
  return relatedSlugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
