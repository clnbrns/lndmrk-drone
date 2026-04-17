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
    metaTitle: 'Aerial Real Estate Photography & Drone Listing Photos | LNDMRK Drone',
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
        title: 'Lot & Site Mapping',
        desc: 'Overhead orthomosaic images that clearly show lot boundaries, acreage, and site layout.',
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
    relatedSlugs: ['film-and-media', 'events'],
  },
  {
    slug: 'construction',
    title: 'Construction Drone Photography',
    shortDesc: 'Track site progress, document milestones, and reduce rework with aerial insight.',
    metaTitle: 'Construction Drone Photography & Site Progress Monitoring | LNDMRK Drone',
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
        icon: '🗺️',
        title: '3D Site Mapping',
        desc: 'Photogrammetric surveys generate accurate 3D models, orthomosaics, and digital elevation models for site planning.',
      },
      {
        icon: '⚠️',
        title: 'Safety & Compliance',
        desc: 'Inspect hard-to-reach areas without putting workers at height, and document OSHA compliance from above.',
      },
      {
        icon: '📊',
        title: 'Earthwork Volume Reports',
        desc: 'Calculate cut-and-fill volumes from aerial data to verify contractor billing and reduce overruns.',
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
        q: 'What file formats do you deliver for construction surveys?',
        a: 'We deliver orthomosaic images (GeoTIFF), 3D point clouds (LAS/LAZ), digital elevation models, and PDF progress reports. All deliverables are compatible with AutoCAD, Revit, and leading construction management platforms.',
      },
      {
        q: 'Do you need ground control points (GCPs) for accurate mapping?',
        a: 'GCPs improve absolute accuracy to ±2–3 cm. We can place our own GCPs or work with survey control points you provide. RTK-equipped drones are also available for projects requiring sub-5 cm accuracy without GCPs.',
      },
      {
        q: 'Can you obtain permits to fly in controlled airspace near urban sites?',
        a: 'Yes. We are experienced with LAANC authorization and FAA airspace waivers. Urban site flights are routine for our team — we handle all airspace coordination.',
      },
    ],
    relatedSlugs: ['mapping-and-surveying', 'inspection'],
  },
  {
    slug: 'mapping-and-surveying',
    title: 'Drone Mapping & Aerial Surveying',
    shortDesc: 'Orthomosaic maps, digital elevation models, and 3D point clouds from certified pilots.',
    metaTitle: 'Drone Mapping Services & Aerial Surveying | 3D Photogrammetry | LNDMRK Drone',
    metaDesc:
      'Professional drone mapping services, aerial surveying, and 3D photogrammetry. Orthomosaic maps and digital elevation models for mining, agriculture, and civil engineering.',
    h1: 'Drone Mapping Services & Aerial Surveying',
    eyebrow: 'Mapping & Surveying',
    icon: '🗺️',
    intro:
      'Traditional surveying is expensive and time-consuming. Drone-based photogrammetry delivers survey-grade spatial data faster and at a fraction of the cost. We produce orthomosaic maps, digital elevation models, and 3D point clouds that integrate directly with GIS, CAD, and BIM workflows.',
    featuresHeading: 'Deliverables',
    features: [
      {
        icon: '🛰️',
        title: 'Orthomosaic Maps',
        desc: 'Geometrically corrected aerial imagery accurate to ±3 cm, delivered as GeoTIFF for direct GIS import.',
      },
      {
        icon: '⛰️',
        title: 'Digital Elevation Models',
        desc: 'DSMs and DTMs that accurately represent surface topography for drainage design, grading, and flood modeling.',
      },
      {
        icon: '☁️',
        title: '3D Point Clouds',
        desc: 'Dense point clouds in LAS/LAZ format compatible with AutoCAD, ArcGIS, and processing platforms like Pix4D.',
      },
      {
        icon: '📐',
        title: 'Volumetric Analysis',
        desc: 'Accurate cut-and-fill calculations and stockpile volume reports for mining, quarrying, and earthworks projects.',
      },
      {
        icon: '🌍',
        title: 'Contour Maps',
        desc: 'Generated contour lines at any interval overlaid on orthomosaics for civil engineering and land planning.',
      },
      {
        icon: '🏗️',
        title: '3D Mesh Models',
        desc: 'Textured 3D mesh models for visualization, stakeholder presentations, and BIM coordination.',
      },
    ],
    industries: [
      'Mining & Quarrying',
      'Agriculture & Forestry',
      'Civil Engineering',
      'Land Development',
      'Environmental Monitoring',
      'Oil & Gas',
    ],
    faqs: [
      {
        q: 'What accuracy can I expect from drone survey data?',
        a: 'With ground control points (GCPs), we achieve horizontal accuracy of ±2–3 cm and vertical accuracy of ±3–5 cm. RTK drone flights without GCPs achieve ±5 cm horizontal, ±10 cm vertical — suitable for most engineering applications.',
      },
      {
        q: 'What file formats are included in the deliverable package?',
        a: 'Standard deliverables include GeoTIFF orthomosaic, LAS point cloud, DEM in GeoTIFF or ASCII grid, and a PDF accuracy report. DXF contour files and Shapefile layers are available as add-ons.',
      },
      {
        q: 'Do we need to set up ground control points ourselves?',
        a: 'We can set up GCPs on your behalf as part of the service, or we can coordinate with your licensed surveyor to use existing control. RTK flights eliminate the need for GCPs on most projects.',
      },
      {
        q: 'How long does post-processing take after the flight?',
        a: 'Processing time depends on area size and resolution required. Typical projects of 100–500 acres are processed and delivered within 3–5 business days of the flight date.',
      },
      {
        q: 'How is pricing structured for large-area mapping projects?',
        a: 'Pricing is based on area (acres or square kilometers), required accuracy, number of deliverables, and mobilization. We provide fixed-price quotes after reviewing your project scope — contact us for a custom estimate.',
      },
    ],
    relatedSlugs: ['construction', 'agriculture'],
  },
  {
    slug: 'agriculture',
    title: 'Agricultural Drone Photography',
    shortDesc: 'Monitor crop health, analyze irrigation, and estimate yields with precision aerial data.',
    metaTitle: 'Agricultural Drone Photography & Crop Monitoring | LNDMRK Drone',
    metaDesc:
      'Agricultural drone photography for crop health monitoring, irrigation analysis, field mapping, and yield estimation. Data-driven decisions for modern farms.',
    h1: 'Agricultural Drone Photography & Crop Monitoring',
    eyebrow: 'Agriculture',
    icon: '🌾',
    intro:
      'Modern agriculture demands precision. Our agricultural drone services give growers, agronomists, and farm managers a bird\'s-eye view of crop health, irrigation performance, and field conditions — enabling faster intervention and measurable yield improvements. All flights are scheduled around optimal imaging windows for maximum data quality.',
    featuresHeading: 'Use Cases',
    features: [
      {
        icon: '🌿',
        title: 'Crop Health Monitoring',
        desc: 'NDVI and multispectral imagery identify stressed vegetation days before visible symptoms appear, enabling early intervention.',
      },
      {
        icon: '💧',
        title: 'Irrigation Analysis',
        desc: 'Thermal and RGB data reveal under- and over-irrigated zones so you can optimize water application and reduce waste.',
      },
      {
        icon: '🗺️',
        title: 'Field Mapping',
        desc: 'Accurate orthomosaic maps of fields, drainage, access roads, and infrastructure for planning and record-keeping.',
      },
      {
        icon: '📊',
        title: 'Yield Estimation',
        desc: 'Pre-harvest canopy analysis correlates with yield data to generate early estimates for logistics and marketing planning.',
      },
      {
        icon: '🐛',
        title: 'Pest & Disease Detection',
        desc: 'Detect localized infestations and disease spread early to target treatment and minimize chemical use.',
      },
      {
        icon: '🌱',
        title: 'Stand Count & Emergence',
        desc: 'High-resolution imagery at emergence quantifies plant stand and identifies replanting needs with GPS-precise locations.',
      },
    ],
    industries: [
      'Row Crops (Corn, Soy, Wheat)',
      'Specialty Crops & Orchards',
      'Viticulture & Vineyards',
      'Horticulture & Greenhouses',
      'Forestry & Timber',
      'Rangeland & Pasture',
    ],
    faqs: [
      {
        q: 'Do you use multispectral sensors for NDVI analysis?',
        a: 'Yes. We operate multispectral cameras (including the MicaSense RedEdge and similar systems) capable of capturing NIR, Red Edge, and thermal bands. RGB NDVI is also available as a lower-cost alternative for basic crop scouting.',
      },
      {
        q: 'When is the best time to fly for crop health imagery?',
        a: 'Solar noon ±2 hours on clear days provides the most consistent reflectance data. For thermal analysis, early morning flights before temperatures peak produce the most diagnostic results.',
      },
      {
        q: 'What data formats do agronomists and farm management software accept?',
        a: 'We deliver GeoTIFF orthomosaics, shapefiles of problem zones, and NDVI maps compatible with John Deere Operations Center, Climate FieldView, and most precision ag platforms.',
      },
      {
        q: 'How many acres can you cover in a single flight day?',
        a: 'Typical coverage is 500–1,500 acres per day depending on flight altitude, overlap settings, and sensor type. Large operations can be surveyed over consecutive days under a single mobilization.',
      },
      {
        q: 'Can drone data integrate with variable-rate application equipment?',
        a: 'Yes. We can generate prescription maps (shapefiles or ISO-XML) compatible with most VRA controllers for targeted fertilizer, irrigation, or pesticide applications.',
      },
    ],
    relatedSlugs: ['mapping-and-surveying', 'inspection'],
  },
  {
    slug: 'film-and-media',
    title: 'Drone Videography & Aerial Cinematography',
    shortDesc: 'Cinematic 4K aerial footage for commercials, film, TV, events, and social media.',
    metaTitle: 'Drone Videography & Aerial Cinematography | Commercial Drone Filming | LNDMRK Drone',
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
    metaTitle: 'Drone Inspection Services | Aerial Infrastructure Inspection | LNDMRK Drone',
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
        desc: 'Deck, pier, and bearing inspection with photogrammetric crack mapping and change detection against prior inspection data.',
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
    relatedSlugs: ['construction', 'government-and-public-safety'],
  },
  {
    slug: 'events',
    title: 'Event Drone Photography & Videography',
    shortDesc: 'Stunning aerial coverage for weddings, concerts, sports events, and resorts.',
    metaTitle: 'Event Drone Photography & Wedding Aerial Photography | LNDMRK Drone',
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
    metaTitle: 'Government Drone Services & Public Safety Aerial Photography | LNDMRK Drone',
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
        desc: 'Orthomosaic mapping, 3D modeling, and change detection for planners, zoning boards, and infrastructure departments.',
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
    relatedSlugs: ['inspection', 'mapping-and-surveying'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(relatedSlugs: [string, string]): Service[] {
  return relatedSlugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
