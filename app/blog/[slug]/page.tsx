import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata, BASE_URL } from '@/lib/metadata';

interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  date: string;
  author: string;
  authorTitle: string;
  authorBio: string;
  category: string;
  readTime: string;
  content: React.ReactNode;
  faqs?: { q: string; a: string }[];
  relatedSlugs: string[];
}

const relatedPostsData: Record<string, { title: string; excerpt: string; href: string }> = {
  'drone-shots-before-you-build': {
    title: 'The 12 Drone Shots to Capture Before You Build on Raw Land',
    excerpt: 'The mission plan architects and land planners actually ask for — altitudes, angles, and why each shot matters.',
    href: '/blog/drone-shots-before-you-build',
  },
  'aerial-photography-tips': {
    title: '10 Aerial Photography Tips That Will Instantly Improve Your Drone Shots',
    excerpt: 'Field-tested tips on timing, altitude, composition, and settings for better aerial photography.',
    href: '/blog/aerial-photography-tips',
  },
  'real-estate-drone-guide': {
    title: 'The Complete Guide to Drone Photography for Real Estate Listings',
    excerpt: 'Everything real estate agents and developers need to know before booking a drone shoot.',
    href: '/blog/real-estate-drone-guide',
  },
  'faa-part-107-explained': {
    title: 'FAA Part 107 Explained: What It Means for Commercial Drone Operations',
    excerpt: 'What Part 107 requires, why it matters, and what to ask when hiring a drone company.',
    href: '/blog/faa-part-107-explained',
  },
  'do-drone-photos-help-sell-homes': {
    title: 'Do Drone Photos Actually Help Sell Homes? What the Data Says',
    excerpt: 'NAR data, buyer perspectives, and the property types where aerial photography moves the needle most.',
    href: '/blog/do-drone-photos-help-sell-homes',
  },
};

const posts: BlogPost[] = [
  {
    slug: 'drone-shots-before-you-build',
    title: 'The 12 Drone Shots to Capture Before You Build on Raw Land',
    metaTitle: '12 Drone Shots to Capture Before You Build on Raw Land',
    metaDesc:
      'Buying acreage or planning a custom home? These are the 12 drone shots architects and land planners actually ask for — altitudes, angles, and why each one matters.',
    date: '2026-07-18',
    author: 'Colin Burns',
    authorTitle: 'Lead Pilot & Founder, LNDMRK Drone',
    authorBio:
      'Colin Burns is the founder of LNDMRK Drone and an FAA Part 107 certified commercial drone pilot with 3+ years of experience in aerial photography and videography across Texas and beyond.',
    category: 'Guides',
    readTime: '10 min read',
    relatedSlugs: ['aerial-photography-tips', 'faa-part-107-explained'],
    content: (
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>
          Most drone photography is made to <em>sell</em> land. This guide is about drone photography
          made to help you <em>decide what to do with it</em>.
        </p>
        <p>
          Recently, a client preparing to build on several acres in North Texas sent me a brief that
          began with one of the best instructions I've ever received: <em>think like an architect, a
          landscape architect, and a future visitor — not just someone making a beautiful promotional
          video.</em>
        </p>
        <p>
          That's exactly the right way to think about aerial imagery before construction. Long before
          a house is designed, the land is already answering questions: Where should the house sit?
          Which trees are worth designing around? Where does the sun rise over the property line?
          What will you actually see from the front porch?
        </p>
        <p>
          Here are the 12 shots that answer those questions — the same mission plan I fly for{' '}
          <Link href="/for/land-buyers" className="text-brand-teal hover:text-brand-accent transition-colors">
            land buyers
          </Link>
          , architects, and{' '}
          <Link href="/for/custom-home-builders" className="text-brand-teal hover:text-brand-accent transition-colors">
            custom home builders
          </Link>
          .
        </p>
        <h2 className="text-2xl font-bold text-brand-text">1. The High-Altitude Overview (the Most Important Shot)</h2>
        <p>From 250–350 feet, capture the entire property in a single frame:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Straight-down (orthographic) photos</li>
          <li>Oblique views from all four compass directions</li>
          <li>The full tract plus any adjacent parcels</li>
          <li>
            The property's relationship to the road, neighboring homes, tree lines, and existing
            structures
          </li>
        </ul>
        <p>
          This becomes your <strong className="text-brand-text">master planning image</strong> — the
          one you'll draw on, measure against, and return to for every decision that follows. If you
          only budget for one flight, this is it.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">2. The Slow &ldquo;Arrival&rdquo; Flight</h2>
        <p>
          Start at the road and fly slowly toward the future house site, following the path a guest
          would drive or walk. This is the view every visitor will experience, and it's almost
          impossible to evaluate from the ground. A single uncut arrival flight tells you more about
          entrance design and driveway alignment than a dozen still photos.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">3. Hover Shots Over the Future House Site</h2>
        <p>
          This is often the most valuable footage of the whole mission. Hover directly above the spot
          where the house might sit at <strong className="text-brand-text">15, 30, 60, and 100 feet</strong>,
          rotating a full 360° at each height. Those four altitudes roughly correspond to porch
          height, rooftop height, treetop height, and planning height — and together they let you
          evaluate:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The best front porch view</li>
          <li>Sunrise and sunset orientation</li>
          <li>Privacy from neighbors</li>
          <li>Which trees to preserve</li>
          <li>Sightlines to pastures, ponds, or other features</li>
        </ul>
        <p>
          Later, a designer can composite a rendering of the future house directly into these frames.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">4. Signature Trees</h2>
        <p>
          If the property has a heritage oak or any tree worth designing around, give it its own
          sequence: directly overhead, orbits at 30, 60, and 100 feet, and a low cinematic pass
          beneath the canopy. On many properties, one great tree becomes the emotional center of the
          whole site plan — document it like it matters.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">5. Groves and Secondary Building Sites</h2>
        <p>
          Any area that might someday hold a guest cabin, barn, or studio deserves overheads, oblique
          angles, flights under the canopy, and views both outward (toward the rest of the property)
          and inward (what it feels like to stand there). This footage answers a question that's hard
          to judge on foot: will a second structure complement the landscape or compete with the main
          home?
        </p>
        <h2 className="text-2xl font-bold text-brand-text">6. The Relationship Between Parcels</h2>
        <p>
          If the property includes multiple tracts, fly from one to the other{' '}
          <strong className="text-brand-text">without cutting the video</strong>. A continuous flight
          reveals the visual connection, walking routes, fencing opportunities, and whether the
          parcels read as one estate or two separate pieces of land.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">7. Existing Structures — Wells, Windmills, Barns</h2>
        <p>
          Old structures are often assets in disguise. Capture close-ups, medium shots, wide landscape
          shots, and an orbit. A working windmill or weathered barn can become a historical landmark
          of the property rather than something to demolish — but only if you've documented it well
          enough to design around it.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">8. The Golden Hour Flight</h2>
        <p>
          Every property has an hour when it looks its best, and in Texas that's usually the last hour
          of daylight. Long shadows reveal terrain. Tree silhouettes show structure. Grass turns gold.
          This is the footage you'll want for the memory as much as the planning.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">9. Winter and Summer Canopy (Fly Twice)</h2>
        <p>
          Leaf-off conditions reveal terrain, drainage patterns, fence lines, and house visibility.
          Leaf-on conditions show shade, privacy, and beauty. If you're serious about a property,
          budget for two visits in opposite seasons — the land tells a different story in each.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">10. Mapping Passes: Orthomosaic, Contours, and 3D Terrain</h2>
        <p>
          Overlapping top-down photos can be processed into an{' '}
          <strong className="text-brand-text">orthomosaic map</strong>, an elevation model, a contour
          map, and a 3D terrain model. Even if you don't need them on day one, you'll be glad to have
          them when planning utilities, drainage, fencing, and building placement. This is the
          difference between guessing at grade and knowing it.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">11. Low-Level &ldquo;Walking Height&rdquo; Flights</h2>
        <p>
          Fly at 6–8 feet — human eye level — along the paths people will actually take: entrance to
          the house site, house site to the garden, house site to the pasture. High-altitude shots
          plan the property; walking-height footage lets you <em>experience</em> it before anything is
          built.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">12. Future Estate Views (the Dream Shots)</h2>
        <p>
          Stand where the future porch will be and fly outward toward everything the owners will
          someday look at: the trees, the pasture, the sunset. These shots aren't for planning —
          they're for conviction. They're how a piece of raw land starts to feel like home.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">One More Thing: Ask for the Raw Footage</h2>
        <p>
          Whoever flies your property, ask for{' '}
          <strong className="text-brand-text">
            4K video in a flat color profile (D-Log or equivalent) and the original files
          </strong>{' '}
          — not just an edited highlight reel. The polished reel is great for sharing, but the raw
          footage is what lets you pause on any frame, measure relationships, and build conceptual
          overlays months later. (This is standard in every LNDMRK mission — you get everything the
          drone captured.)
        </p>
        <p>
          Planning to build? LNDMRK Drone flies land-planning missions across North Texas —
          high-altitude overviews, homesite hover studies, orthomosaic mapping, and raw 4K delivery.{' '}
          <Link href="/contact" className="text-brand-teal hover:text-brand-accent transition-colors">
            Get in touch
          </Link>{' '}
          to plan your mission.
        </p>
      </div>
    ),
    faqs: [
      {
        q: 'How high should a drone fly for a full-property overview?',
        a: "250–350 feet captures most residential acreage in a single frame while staying under the FAA's 400-foot ceiling for Part 107 operations.",
      },
      {
        q: 'What is an orthomosaic map?',
        a: 'A single, distortion-corrected top-down image stitched from hundreds of overlapping drone photos — accurate enough to measure distances and plan building placement, at far higher resolution than satellite imagery.',
      },
      {
        q: 'Why photograph a property in both winter and summer?',
        a: 'Bare trees reveal terrain, drainage, and sightlines; full canopy shows shade and privacy. Together they give you the complete picture no single visit can.',
      },
      {
        q: 'Do I need a licensed pilot for this?',
        a: 'Yes — any drone work performed for a business purpose in the U.S. requires an FAA Part 107 certified remote pilot.',
      },
    ],
  },
  {
    slug: 'aerial-photography-tips',
    title: '10 Aerial Photography Tips That Will Instantly Improve Your Drone Shots',
    metaTitle: '10 Aerial Photography Tips for Better Drone Shots',
    metaDesc:
      'Improve your drone photography with these 10 field-tested aerial photography tips: golden hour timing, altitude choices, composition rules, and camera settings.',
    date: '2026-03-15',
    author: 'Colin Burns',
    authorTitle: 'Lead Pilot & Founder, LNDMRK Drone',
    authorBio:
      'Colin Burns is the founder of LNDMRK Drone and an FAA Part 107 certified commercial drone pilot with 3+ years of experience in aerial photography and videography across Texas and beyond.',
    category: 'Photography',
    readTime: '8 min read',
    relatedSlugs: ['real-estate-drone-guide', 'faa-part-107-explained'],
    content: (
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>
          Great aerial photography isn't just about owning the right drone — it's about understanding how
          light, altitude, movement, and composition work differently from above. After thousands of commercial
          flights, here are the ten principles our team returns to on every shoot.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">1. Fly During Golden Hour (Not Noon)</h2>
        <p>
          The one-hour window after sunrise and before sunset transforms flat, ordinary scenes into something
          cinematic. At noon, shadows are directly below subjects, textures flatten out, and colors look washed
          out. At golden hour, long shadows create depth and texture across rooftops, fields, and landscapes.
          Schedule exterior shoots accordingly — your clients will notice the difference immediately.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">2. Altitude Changes Compression, Not Just Perspective</h2>
        <p>
          Flying higher doesn't just make things look smaller — it changes the visual relationship between
          elements in the frame. Low altitudes (50–150 ft) emphasize foreground subjects with context behind
          them. High altitudes (300–400 ft) compress space and make patterns and geometry emerge — ideal for
          agriculture, mapping, and large-scale site documentation.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">3. Slow Down More Than You Think</h2>
        <p>
          The most common mistake in drone video is moving too fast. A slow, deliberate reveal — even at
          3–5 mph — feels cinematic. Fast movement looks amateur. Use slow mode on your aircraft and apply
          additional speed reductions in post if needed. If a move feels almost too slow while flying, it's
          probably exactly right.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">4. Use ND Filters to Control Shutter Speed</h2>
        <p>
          For video, follow the 180-degree shutter rule (shutter speed = 2× frame rate). In bright daylight,
          this means you need neutral density filters to avoid over-exposure and the sterile, clinical look of
          high shutter speed footage. Match your ND to the conditions: ND16 for overcast, ND64–ND256 for
          full sun. Photo shooters benefit from ND filters too for longer exposures of moving water and
          cloud blur during blue hour.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">5. Shoot in Log for Maximum Editing Latitude</h2>
        <p>
          Most modern drone cameras offer a flat, log color profile (D-Log M on DJI platforms). Always shoot
          log for any footage that will be color-graded. It retains far more highlight and shadow detail than
          standard color profiles and gives your colorist room to work. For simple real estate photo deliverables
          where RAW files aren't required, JPEG with custom white balance is acceptable.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">6. Plan Your Flight Path Before You Take Off</h2>
        <p>
          Amateur operators improvise. Professional operators arrive at a location, study it, identify the best
          angles and altitudes, plan the sequence of shots, check for obstacles and airspace restrictions, and
          then fly. Use your drone manufacturer's planning app or a tool like DroneDeploy to pre-visualize
          shots. A planned 20-minute flight produces better results than an improvised 2-hour session.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">7. Check Wind Conditions at Altitude, Not Just Ground Level</h2>
        <p>
          Wind at 300 feet is often significantly stronger and more turbulent than at ground level. Use a
          forecasting tool like UAV Forecast or Windy that provides wind data at multiple altitudes. Even
          calm-seeming days can be unsuitable above 200 feet. Flying in excessive wind degrades image quality,
          risks aircraft control, and shortens battery life substantially.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">8. Rule of Thirds Applies from Above Too</h2>
        <p>
          Most drone pilots default to centering their subject. Don't. Apply compositional rules — rule of
          thirds, leading lines, natural frames — and think about what's in the foreground, middle ground, and
          background even when shooting from directly above. A winding road, river, or coastline leading from
          a corner to your main subject creates far more visual interest than a centered top-down shot.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">9. Bracket Your Exposures for Real Estate Photos</h2>
        <p>
          Real estate photography demands high dynamic range — bright skies over shadowed foreground elements
          create challenging exposures. Shoot bracketed exposures (typically 3–5 frames at ±2 EV) and blend in
          post using HDR software or manual masking. The sky shouldn't be blown out and the shadow areas
          shouldn't be crushed — both are instant quality signals to experienced buyers and agents.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">10. Always Have a Plan B for Weather</h2>
        <p>
          Book shoots with a weather contingency in mind. Communicate your rescheduling policy upfront, monitor
          conditions 72 hours in advance, and have a secondary date blocked if possible. Clients are
          understanding about weather delays — they're less understanding when you arrive at a shoot you should
          have postponed and deliver substandard results. Know when to call it.
        </p>
      </div>
    ),
    faqs: [
      {
        q: 'What is the best time of day to fly for aerial photography?',
        a: 'The golden hour — approximately 1 hour after sunrise and 1 hour before sunset — provides the most flattering light for aerial photography. The low angle of the sun creates long shadows and warm tones that make any location look more dramatic.',
      },
      {
        q: 'What ND filter strength do I need for drone video?',
        a: 'For filming at 24fps in bright sun (following the 180-degree shutter rule at 1/50s), you\'ll typically need an ND64 or ND128. Overcast days may require only ND8 or ND16. Carry a range and check exposure before each flight.',
      },
      {
        q: 'How do I avoid jello effect and vibration in drone footage?',
        a: 'Jello effect is typically caused by propeller vibration resonating through the camera mount. Ensure your props are balanced and not damaged, verify your gimbal is calibrated, and keep aircraft speed moderate. Some can be corrected in post with rolling shutter correction.',
      },
    ],
  },
  {
    slug: 'real-estate-drone-guide',
    title: 'The Complete Guide to Drone Photography for Real Estate Listings',
    metaTitle: 'Drone Photography for Real Estate Listings: A Complete Guide',
    metaDesc:
      'Everything real estate agents and property developers need to know about aerial drone photography for listings — from what\'s included to what it costs and how to prepare.',
    date: '2026-02-28',
    author: 'Colin Burns',
    authorTitle: 'Lead Pilot & Founder, LNDMRK Drone',
    authorBio:
      'Colin Burns is the founder of LNDMRK Drone and an FAA Part 107 certified commercial drone pilot with 3+ years of experience in aerial photography and videography across Texas and beyond.',
    category: 'Real Estate',
    readTime: '12 min read',
    relatedSlugs: ['aerial-photography-tips', 'faa-part-107-explained'],
    content: (
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>
          Aerial photography has moved from a luxury add-on to an expected element of any serious property
          listing. Listings with drone photos sell faster, attract more showings, and routinely command higher
          prices than ground-photo-only listings at the same price point. Here&apos;s everything you need to know
          before booking your first real estate drone shoot.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">Why Aerial Photography Works for Real Estate</h2>
        <p>
          Ground-level photography, no matter how skilled the photographer, has a fundamental limitation: it
          can&apos;t show context. Buyers want to understand a property&apos;s relationship to its surroundings — how
          close it is to the water, how large the lot really is, what the neighborhood looks like, whether there&apos;s
          a highway hidden just behind the tree line. Aerial photography answers all of those questions in a
          single frame.
        </p>
        <p>
          Studies consistently show that listings using aerial photos receive significantly more online engagement
          and shorter days-on-market than comparable listings without them. For properties over $400,000,
          aerial coverage is essentially table stakes — high-end buyers expect it.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">What a Real Estate Drone Shoot Includes</h2>
        <p>
          A standard real estate aerial photography package typically includes exterior still photos from multiple
          altitudes and angles, a neighborhood context overview, and optionally a video flyover. Here&apos;s a
          breakdown of what each element adds:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-brand-text">Exterior stills (multiple angles):</strong> Show the full property from above and at oblique angles that reveal architecture and landscaping.</li>
          <li><strong className="text-brand-text">Lot boundary overview:</strong> A direct overhead shot showing the full property footprint — essential for acreage listings.</li>
          <li><strong className="text-brand-text">Neighborhood context:</strong> Wide shots showing proximity to amenities, water, parks, or city centers that add value.</li>
          <li><strong className="text-brand-text">Video flyover:</strong> A 60–90 second edited video with music, suitable for Zillow, MLS video fields, and social media.</li>
          <li><strong className="text-brand-text">Twilight photos:</strong> Premium add-on shot at golden hour or blue hour for maximum visual impact on luxury listings.</li>
        </ul>
        <h2 className="text-2xl font-bold text-brand-text">How to Prepare the Property</h2>
        <p>
          Unlike interior photography, aerial preparation is mostly about the exterior and surroundings. Before
          your shoot date:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Mow the lawn and clear yard clutter (hoses, toys, trash bins)</li>
          <li>Move all vehicles out of the driveway and away from the front of the property</li>
          <li>Close all garage doors and ensure exterior light fixtures are clean</li>
          <li>Trim back any overgrown hedges obstructing the structure</li>
          <li>Ensure pool and water features are clean if applicable</li>
        </ul>
        <h2 className="text-2xl font-bold text-brand-text">Pricing: What to Expect</h2>
        <p>
          Real estate drone photography pricing varies by market, package scope, and turnaround requirements.
          Contact us for a custom quote based on your specific listing and location.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-brand-text">Photo-only package</strong></li>
          <li><strong className="text-brand-text">Photo + video package</strong></li>
          <li><strong className="text-brand-text">Twilight/golden hour add-on</strong></li>
          <li><strong className="text-brand-text">Rush same-day delivery</strong></li>
        </ul>
        <h2 className="text-2xl font-bold text-brand-text">FAA Compliance: What You Should Verify</h2>
        <p>
          Always confirm that your drone photographer holds an FAA Part 107 Remote Pilot Certificate before
          booking. Unlicensed commercial drone photography is a federal violation that can expose the property
          owner, agent, and operator to fines. Ask to see the certificate number and verify it&apos;s current.
          Also confirm the operator carries liability insurance and can provide a certificate of insurance
          naming your brokerage if required.
        </p>
        <p>
          Learn more in our full guide:{' '}
          <Link href="/blog/faa-part-107-explained" className="text-brand-teal hover:text-brand-accent transition-colors">
            FAA Part 107 Explained: What It Means for Commercial Drone Operations
          </Link>
          .
        </p>
      </div>
    ),
    faqs: [
      {
        q: 'Does drone photography really help sell properties faster?',
        a: 'Studies consistently show that listings with aerial photography sell faster and generate more online engagement than comparable listings without aerial photos. For properties with significant land, water access, or location advantages, aerial imagery is particularly effective at communicating value to remote buyers.',
      },
      {
        q: 'Can drones fly over occupied residential neighborhoods?',
        a: 'Yes, within FAA regulations. Part 107 permits drone operations over moving vehicles and people in some circumstances, and over residential areas is generally permitted at appropriate altitudes. Pilots must always prioritize safety and respect local ordinances.',
      },
    ],
  },
  {
    slug: 'do-drone-photos-help-sell-homes',
    title: 'Do Drone Photos Actually Help Sell Homes? What the Data Says',
    metaTitle: 'Do Drone Photos Help Sell Homes? The Data',
    metaDesc:
      'Do drone photos actually help sell homes faster and for more money? We look at NAR survey data, buyer behavior research, and which property types benefit most from aerial photography.',
    date: '2026-04-17',
    author: 'Colin Burns',
    authorTitle: 'Lead Pilot & Founder, LNDMRK Drone',
    authorBio:
      'Colin Burns is the founder of LNDMRK Drone and an FAA Part 107 certified commercial drone pilot with 3+ years of experience in aerial photography and videography across Texas and beyond.',
    category: 'Real Estate',
    readTime: '7 min read',
    relatedSlugs: ['real-estate-drone-guide', 'faa-part-107-explained'],
    content: (
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>
          First-time homebuyers and agents ask this question constantly: do drone photos actually move the
          needle, or are they just a nice-to-have that makes the listing look polished? It&apos;s a fair
          question — aerial photography costs money, and sellers want to know if it comes back to them at
          the closing table.
        </p>
        <p>
          The short answer is yes, and the data is more lopsided than most people expect. Here&apos;s what
          the research shows and where aerial photography makes the biggest difference.
        </p>

        <h2 className="text-2xl font-bold text-brand-text">What the NAR Data Shows</h2>
        <p>
          The National Association of Realtors tracks technology adoption among its members every year. In
          its{' '}
          <a
            href="https://www.nar.realtor/drones"
            className="text-brand-teal hover:text-brand-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            2025 REALTOR Technology Survey
          </a>
          , drone photography ranked as the third most popular technology among real estate professionals,
          with 52% of REALTORS reporting they use drone photography or video in their listings. That&apos;s not
          a niche tool anymore — it&apos;s a mainstream expectation in most markets.
        </p>
        <p>
          Research cited by NAR found that homes marketed with aerial photography are 68% more likely to
          sell than comparable listings using ground-level photos only. That figure tracks with what agents
          report anecdotally: listings that sit on the market often see a surge in showings after aerial
          photos are added. The aerial perspective answers questions buyers have been quietly asking while
          scrolling past the listing.
        </p>

        <h2 className="text-2xl font-bold text-brand-text">What Buyers Are Actually Asking</h2>
        <p>
          In online buyer communities, the most common frustration with listing photos isn&apos;t the quality
          of the interior shots — it&apos;s that they can&apos;t answer basic location and context questions.
          How big is the lot, really? What&apos;s directly behind the property? How close is the highway, the
          commercial strip, the neighbors? Is there any green space nearby?
        </p>
        <p>
          Drone photos answer all of those questions directly. A single overhead shot can show lot size,
          setback from the street, what&apos;s behind the fence, and how the neighborhood is laid out around
          the property. For buyers who are relocating or shopping remotely — an increasingly common
          situation — aerial imagery can be the difference between scheduling a showing and moving on.
        </p>
        <p>
          The buyers who benefit most from aerial photography are also the buyers agents most want to
          attract: out-of-state relocators, move-up buyers evaluating lot size and usable land, and
          buyers cross-shopping multiple neighborhoods who need to quickly understand the surrounding
          context. These are serious, motivated buyers who are doing their homework online before they
          ever call an agent.
        </p>

        <h2 className="text-2xl font-bold text-brand-text">Which Properties Benefit Most</h2>
        <p>
          Aerial photography isn&apos;t equally valuable for every listing. Here&apos;s where it makes the biggest
          measurable difference:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-2">
          <li>
            <strong className="text-brand-text">Large lots and acreage:</strong> Ground photography simply cannot
            communicate lot size. An overhead shot that shows the full property footprint is worth more than
            ten ground-level photos for any listing over half an acre.
          </li>
          <li>
            <strong className="text-brand-text">Waterfront and view properties:</strong> The value proposition
            of a lake lot, golf course view, or greenbelt backing is invisible from street level. Aerial
            photography makes it the headline of every listing photo.
          </li>
          <li>
            <strong className="text-brand-text">Properties with location advantages:</strong> Close to a park,
            trail system, or amenity center? An aerial shot showing that proximity communicates it better than
            any description.
          </li>
          <li>
            <strong className="text-brand-text">Listings that have been sitting:</strong> A property that&apos;s been
            on the market for 30+ days often needs a reset. New aerial photos change the visual narrative
            and can generate a fresh wave of showing requests without a price reduction.
          </li>
          <li>
            <strong className="text-brand-text">New construction and luxury homes:</strong> Buyers in the
            upper price tiers expect aerial coverage. Submitting a luxury listing without it signals that
            the marketing effort isn&apos;t commensurate with the price point.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-text">Where It Matters Less</h2>
        <p>
          In the interest of being straightforward: aerial photography has the least impact on small urban
          condos and townhomes with no lot to speak of, on properties where the surrounding context is
          negative (dense commercial, industrial adjacency), or in very price-sensitive markets where
          buyers are focused almost entirely on interior condition and price per square foot.
        </p>
        <p>
          That said, even in those cases, aerial photography can still add value — a condo with a rooftop
          terrace, a townhome with a rare private yard, or a property near walkable amenities can all
          benefit from a well-executed aerial shot that highlights the specific advantage.
        </p>

        <h2 className="text-2xl font-bold text-brand-text">The Compliance Factor Agents Overlook</h2>
        <p>
          One thing worth noting for agents who are considering hiring a drone photographer: FAA Part 107
          certification is required for all commercial drone operations in the United States. This isn&apos;t
          a formality — it&apos;s a federal requirement, and flying commercially without it carries significant
          fines.
        </p>
        <p>
          When 52% of REALTORS are using drone photography, there&apos;s real pressure to cut corners on
          cost, and some unlicensed operators are willing to undercut certified professionals on price.
          Before booking anyone, ask to see the pilot&apos;s FAA Remote Pilot Certificate number and verify
          it&apos;s current. Ask whether they carry commercial liability insurance. The certification isn&apos;t
          just a regulatory box — it means the pilot passed a knowledge test covering airspace, weather,
          emergency procedures, and operating rules. That matters when the aircraft is flying over your
          client&apos;s $700,000 property.
        </p>
        <p>
          Read more:{' '}
          <Link href="/blog/faa-part-107-explained" className="text-brand-teal hover:text-brand-accent transition-colors">
            FAA Part 107 Explained: What It Means for Commercial Drone Operations
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-brand-text">The Bottom Line</h2>
        <p>
          Drone photos help sell homes. The data backs it up, the adoption numbers confirm it&apos;s now an
          industry standard, and buyer behavior explains why: people want context, and aerial photography
          is the most efficient way to deliver it. For any listing with significant land, a notable
          location advantage, or a price point where buyers have options, skipping aerial coverage is a
          marketing gap that will show up in days-on-market.
        </p>
        <p>
          If you&apos;re an agent in the DFW area and want to talk through whether aerial photography makes
          sense for a specific listing,{' '}
          <Link href="/contact" className="text-brand-teal hover:text-brand-accent transition-colors">
            get in touch
          </Link>
          . We turn around most real estate shoots within 24 hours.
        </p>
      </div>
    ),
    faqs: [
      {
        q: 'How much more likely are homes with drone photos to sell?',
        a: 'Research cited by the National Association of Realtors found that homes marketed with aerial photography are 68% more likely to sell than comparable listings using only ground-level photos. The NAR\'s 2025 Technology Survey also found that 52% of REALTORS now use drone photography, making it the third most popular technology in the industry.',
      },
      {
        q: 'Is aerial photography worth it for smaller or lower-priced homes?',
        a: 'It depends on the property\'s specific advantages. For homes with a large lot, a notable location feature (waterfront, park-adjacent, greenbelt), or listings that have been sitting on the market, aerial photography typically pays off. For small urban condos or properties where the surrounding context isn\'t a selling point, the ROI is lower — though it still adds a professional presentation layer.',
      },
      {
        q: 'How quickly can I get drone photos for a listing?',
        a: 'LNDMRK Drone turns around most real estate aerial photography within 24 hours of the shoot. Rush same-day delivery is available for urgent listing deadlines. Contact us to check availability for your specific listing date.',
      },
    ],
  },
  {
    slug: 'faa-part-107-explained',
    title: 'FAA Part 107 Explained: What It Means for Commercial Drone Operations',
    metaTitle: 'FAA Part 107 Certification Explained | Commercial Drone Operations',
    metaDesc:
      'What is FAA Part 107? A plain-English guide to the commercial drone certification rules, what they require, and why it matters when hiring a drone photography company.',
    date: '2026-02-10',
    author: 'Colin Burns',
    authorTitle: 'Lead Pilot & Founder, LNDMRK Drone',
    authorBio:
      'Colin Burns is the founder of LNDMRK Drone and an FAA Part 107 certified commercial drone pilot with 3+ years of experience in aerial photography and videography across Texas and beyond.',
    category: 'Regulations',
    readTime: '10 min read',
    relatedSlugs: ['aerial-photography-tips', 'real-estate-drone-guide'],
    content: (
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>
          If you&apos;ve hired or researched hiring a drone company, you&apos;ve probably seen &ldquo;FAA Part 107
          certified&rdquo; used as a credential. But what does it actually mean, what does it require, and why
          should you care? This guide answers those questions in plain English.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">What Is FAA Part 107?</h2>
        <p>
          Title 14 of the Code of Federal Regulations Part 107 — universally called &ldquo;Part 107&rdquo; — is the
          set of FAA rules that govern commercial unmanned aircraft operations in the United States. It came into
          effect in August 2016, replacing a patchwork of exemptions that previously governed commercial drone
          use.
        </p>
        <p>
          Under Part 107, anyone operating a drone commercially — meaning any flight from which they receive
          compensation, directly or indirectly — must hold a Remote Pilot Certificate issued by the FAA.
          &ldquo;Commercial&rdquo; is interpreted very broadly: flying a drone to take photos you post on your
          real estate brokerage&apos;s website is commercial operation.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">What Does Part 107 Certification Require?</h2>
        <p>
          To obtain a Part 107 Remote Pilot Certificate, an applicant must:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Be at least 16 years old</li>
          <li>Pass the FAA&apos;s Aeronautical Knowledge Test (AKT) at an approved testing center</li>
          <li>Pass a TSA background check</li>
          <li>Register their drone(s) with the FAA</li>
        </ul>
        <p>
          The knowledge test covers airspace classification, weather, emergency procedures, radio communications,
          loading and performance, and drone-specific operational rules. It&apos;s not trivial — passing rates hover
          around 70%. Certificate holders must pass a recurrent knowledge test every 24 months to remain current.
        </p>
        <h2 className="text-2xl font-bold text-brand-text">Key Part 107 Operating Rules</h2>
        <p>
          Part 107 sets the baseline rules for commercial drone operations. The most important ones:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-brand-text">Maximum altitude:</strong> 400 feet above ground level (AGL) in uncontrolled airspace; lower limits apply near airports</li>
          <li><strong className="text-brand-text">Visual Line of Sight (VLOS):</strong> The pilot must maintain unaided visual contact with the aircraft at all times</li>
          <li><strong className="text-brand-text">Daylight only:</strong> Operations are limited to civil twilight (30 minutes before sunrise to 30 minutes after sunset) without a waiver</li>
          <li><strong className="text-brand-text">No operations over people:</strong> Standard Part 107 prohibits flight over people not involved in the operation (waivers and Category certifications provide exceptions)</li>
          <li><strong className="text-brand-text">Controlled airspace:</strong> Flights in Classes B, C, D, and E airspace surface areas require prior authorization (via LAANC or FAA DroneZone)</li>
        </ul>
        <h2 className="text-2xl font-bold text-brand-text">Waivers: When the Rules Can Be Modified</h2>
        <p>
          The FAA grants waivers to specific Part 107 rules for operators who can demonstrate they can
          conduct the operation safely. Common waivers include:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-brand-text">Night operations waiver:</strong> Allows flights after civil twilight with appropriate lighting</li>
          <li><strong className="text-brand-text">Over-people waiver:</strong> Allows flight over crowds and non-participating persons</li>
          <li><strong className="text-brand-text">Beyond Visual Line of Sight (BVLOS) waiver:</strong> Allows operations beyond the pilot&apos;s unaided line of sight</li>
        </ul>
        <h2 className="text-2xl font-bold text-brand-text">What to Ask When Hiring a Drone Company</h2>
        <p>
          Before booking any commercial drone service, verify:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Does every pilot hold a current FAA Part 107 Remote Pilot Certificate? (Ask for the certificate number and check it at <a href="https://amsrvs.registry.faa.gov/" className="text-brand-teal hover:text-brand-accent transition-colors" target="_blank" rel="noopener noreferrer">FAA Airmen Inquiry</a>)</li>
          <li>Is the company&apos;s aircraft registered with the FAA?</li>
          <li>Do they carry commercial liability insurance? Can they provide a certificate?</li>
          <li>Do they obtain proper airspace authorizations for flights near airports?</li>
          <li>Do they have any relevant waivers for your specific project requirements?</li>
        </ul>
        <p>
          Our pilot at LNDMRK Drone holds a current Part 107 certificate and we are happy to provide
          documentation upon request. Questions?{' '}
          <Link href="/contact" className="text-brand-teal hover:text-brand-accent transition-colors">
            Contact us
          </Link>
          .
        </p>
      </div>
    ),
    faqs: [
      {
        q: 'Is it illegal to hire an unlicensed drone photographer for commercial work?',
        a: 'Hiring an unlicensed drone operator for commercial work violates FAA regulations. Both the operator and potentially the client can face civil penalties. The FAA has issued fines exceeding $30,000 for commercial operations without Part 107 certification.',
      },
      {
        q: 'Can a hobbyist drone pilot legally fly for pay if they use their personal drone?',
        a: 'No. The distinction is use, not ownership. Any flight from which someone receives compensation — including real estate photos, event coverage, or any other paid work — requires a Part 107 Remote Pilot Certificate regardless of who owns the aircraft.',
      },
      {
        q: 'How do I verify that a drone pilot\'s certificate is current?',
        a: 'The FAA\'s online Airmen Inquiry tool allows you to search by name and verify that a pilot holds a current Remote Pilot Certificate. Ask the operator for their certificate number and legal name before your flight.',
      },
    ],
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDesc,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = post.relatedSlugs.map((s) => relatedPostsData[s]).filter(Boolean);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LNDMRK Drone',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
            {post.category}
          </p>
          <h1 className="text-4xl font-bold text-brand-text leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-3 text-brand-muted text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Article body */}
        <article>{post.content}</article>

        {/* Author bio */}
        <aside className="mt-14 p-6 bg-brand-surface border border-brand-border rounded-xl">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-full bg-brand-card border border-brand-border flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <svg className="w-7 h-7 text-brand-faint" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
            <div>
              <p className="text-brand-text font-bold">{post.author}</p>
              <p className="text-brand-teal text-sm mb-2">{post.authorTitle}</p>
              <p className="text-brand-muted text-sm">{post.authorBio}</p>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && <FaqSection faqs={post.faqs} />}

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-brand-surface py-16" aria-labelledby="related-posts-heading">
          <div className="max-w-3xl mx-auto px-6">
            <h2 id="related-posts-heading" className="text-2xl font-bold text-brand-text mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block bg-brand-card border border-brand-border rounded-xl p-5 hover:bg-brand-bg transition-colors"
                >
                  <h3 className="text-brand-text font-semibold mb-2 hover:text-brand-accent transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-brand-muted text-sm">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection
        heading="Need Professional Drone Services?"
        subtext="Get a free quote for your project. We respond within one business day."
      />
    </>
  );
}
