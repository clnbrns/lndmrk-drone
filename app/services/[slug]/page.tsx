import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { ServiceCard } from '@/components/ServiceCard';
import { JsonLd } from '@/components/JsonLd';
import { services, getService, getRelatedServices } from '@/lib/services';
import { serviceHeroImages } from '@/lib/serviceImages';
import { buildMetadata, BASE_URL } from '@/lib/metadata';

export function generateStaticParams() {
  return services.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return buildMetadata({
    title: svc.metaTitle,
    description: svc.metaDesc,
    path: `/services/${svc.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const related = getRelatedServices(svc.relatedSlugs);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.metaDesc,
    url: `${BASE_URL}/services/${svc.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'LNDMRK Drone',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: '[PLACEHOLDER: Service Area]',
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: svc.title, href: `/services/${svc.slug}` },
        ]}
      />

      <HeroSection
        eyebrow={svc.eyebrow}
        title={svc.h1}
        subtitle={svc.intro}
        ctaLabel="Get a Quote"
        ctaHref="/contact"
        secondaryCtaLabel="View All Services"
        secondaryCtaHref="/services"
        bgImage={serviceHeroImages[svc.slug]?.src}
        bgImageAlt={serviceHeroImages[svc.slug]?.alt}
      />

      {/* Features grid */}
      <section className="bg-brand-surface py-20" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="features-heading" className="text-3xl font-bold text-brand-text mb-10 text-center">
            {svc.featuresHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {svc.features.map((feature) => (
              <div
                key={feature.title}
                className="bg-brand-card border border-brand-border rounded-xl p-6"
              >
                <span className="text-2xl mb-3 block">{feature.icon}</span>
                <h3 className="text-brand-text font-semibold mb-2">{feature.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served (if present) */}
      {svc.industries && svc.industries.length > 0 && (
        <section className="bg-brand-bg py-16" aria-labelledby="industries-heading">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 id="industries-heading" className="text-2xl font-bold text-brand-text mb-8">
              Industries Served
            </h2>
            <ul className="flex flex-wrap justify-center gap-3" role="list">
              {svc.industries.map((industry) => (
                <li
                  key={industry}
                  className="bg-brand-surface border border-brand-border rounded-full px-4 py-2 text-brand-muted text-sm"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Why choose us for this service */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-text mb-8 text-center">
            Why Choose LNDMRK Drone?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: '✅', label: 'FAA Part 107 Certified', desc: 'Compliant commercial operations on every flight.' },
              { icon: '🛡️', label: 'Fully Insured', desc: 'Liability certificates available for every project.' },
              { icon: '⚡', label: 'Fast Turnaround', desc: '24–48 hour delivery on most deliverables.' },
            ].map((item) => (
              <div key={item.label} className="text-center p-5">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="text-brand-text font-semibold mb-1">{item.label}</p>
                <p className="text-brand-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={svc.faqs} heading={`${svc.title} — Common Questions`} />

      {/* Related services */}
      <section className="bg-brand-surface py-20" aria-labelledby="related-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="related-heading" className="text-2xl font-bold text-brand-text mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {related.map((rel) => (
              <ServiceCard
                key={rel.slug}
                icon={rel.icon}
                title={rel.title}
                desc={rel.shortDesc}
                href={`/services/${rel.slug}`}
              />
            ))}
          </div>
          <p className="mt-8 text-brand-muted text-sm">
            <Link
              href="/services"
              className="text-brand-teal hover:text-brand-accent transition-colors"
            >
              ← View all drone services
            </Link>
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
