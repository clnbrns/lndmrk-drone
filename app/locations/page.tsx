import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { locations } from '@/lib/locations';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Drone Photography Service Areas | DFW & North Texas | LNDMRK Drone',
  description:
    'LNDMRK Drone serves Fort Worth, Southlake, Keller, Arlington, Aledo, Weatherford, Granbury, Grapevine, Burleson, Mansfield, Benbrook, Haslet, Justin, and all of Parker County. FAA-certified aerial photography.',
  path: '/locations',
});

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
        ]}
      />

      <HeroSection
        eyebrow="Service Area"
        title="Drone Photography Across DFW & North Texas"
        subtitle="Based in Fort Worth. Serving the full DFW Metroplex, Parker County, and beyond. FAA Part 107 certified with no travel fees within 30 miles."
        ctaLabel="Book a Flight"
        ctaHref="/contact"
      />

      <section className="bg-brand-surface py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              Where We Fly
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Markets We Serve
            </h2>
            <p className="text-brand-muted max-w-xl mx-auto">
              Click any market below to learn more about our drone services in that city or region.
              Don't see your area?{' '}
              <Link href="/contact" className="text-brand-teal hover:text-brand-accent transition-colors">
                Contact us
              </Link>{' '}
              — we travel for the right project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="block bg-brand-card border border-brand-border rounded-xl p-6 hover:border-brand-teal/40 transition-colors group"
              >
                <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-2">
                  {loc.region}
                </p>
                <h3 className="text-brand-text font-bold text-lg mb-1 group-hover:text-brand-teal transition-colors">
                  {loc.city}, {loc.state} →
                </h3>
                <p className="text-brand-muted text-sm">{loc.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service radius note */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Based in Fort Worth. Flying Everywhere.</h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-6">
            Our primary service area covers the DFW Metroplex and surrounding counties with no travel surcharge within approximately 30 miles of Fort Worth. For locations beyond that radius — and for national or destination projects — we travel for the right scope.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { zone: 'No Travel Fee', desc: 'Fort Worth, Tarrant County, and most locations within 30 miles' },
              { zone: 'Small Travel Fee', desc: 'Parker County, Hood County, Denton County, and outlying DFW suburbs' },
              { zone: 'Quote-Based Travel', desc: 'Outside DFW, statewide Texas, and national or destination projects' },
            ].map((zone) => (
              <div key={zone.zone} className="bg-brand-surface border border-brand-border rounded-xl p-5">
                <span className="block w-5 h-0.5 bg-brand-accent mb-3" aria-hidden="true" />
                <p className="text-brand-text font-semibold text-sm mb-1">{zone.zone}</p>
                <p className="text-brand-muted text-xs leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Don't See Your City?"
        subtext="We cover more of North Texas than this list. Reach out and we'll confirm availability for your location."
        ctaLabel="Ask About Your Area"
        ctaHref="/contact"
      />
    </>
  );
}
