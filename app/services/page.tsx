import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Drone Photography & Videography Services',
  description:
    'Explore LNDMRK Drone\'s full range of aerial services: real estate, construction, film, inspection, events, and government. FAA Part 107 certified, fully insured.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      <HeroSection
        eyebrow="All Services"
        title="Drone Photography & Videography Services"
        subtitle="Six specialized aerial service lines covering every industry. FAA Part 107 certified pilot based in Fort Worth, TX."
        bgImage="/images/portfolio/real-estate-luxury-estate-pool-spa-turf.jpg"
        bgImageAlt="Aerial drone photo of luxury estate with pool, spa, and turf"
      />

      <section className="bg-brand-bg py-20" aria-labelledby="services-list-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="services-list-heading" className="sr-only">
            All Drone Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc) => (
              <ServiceCard
                key={svc.slug}
                icon={svc.icon}
                title={svc.title}
                desc={svc.shortDesc}
                href={`/services/${svc.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why LNDMRK */}
      <section className="bg-brand-surface py-20" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="why-heading" className="text-3xl font-bold text-brand-text mb-4 text-center">
            Why Choose LNDMRK Drone?
          </h2>
          <p className="text-brand-muted text-center max-w-xl mx-auto mb-12">
            We combine technical precision with a storyteller's eye to deliver aerial content that
            doesn't just look good — it drives results for your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'FAA Part 107 Certified', desc: 'Our pilot holds a current FAA Remote Pilot Certificate and follows all regulations on every commercial flight.' },
              { title: 'Fully Insured', desc: 'Commercial liability coverage on every project. Certificates of insurance provided to clients and venues on request.' },
              { title: 'Fast Turnaround', desc: 'Most deliverables are ready within 24–48 hours. Rush delivery is available when timelines are tight.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-card border border-brand-border rounded-xl p-6">
                <span className="block w-6 h-0.5 bg-brand-accent mb-4" aria-hidden="true" />
                <h3 className="text-brand-text font-semibold mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal link to blog */}
      <section className="bg-brand-bg py-14 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-muted mb-4">
            Looking to learn more before booking? Explore our{' '}
            <Link href="/blog" className="text-brand-teal hover:text-brand-accent transition-colors">
              aerial photography resources and guides
            </Link>{' '}
            or read about{' '}
            <Link href="/blog/faa-part-107-explained" className="text-brand-teal hover:text-brand-accent transition-colors">
              what FAA Part 107 means for commercial drone operations
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
