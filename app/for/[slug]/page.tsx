import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { ServiceCard } from '@/components/ServiceCard';
import { JsonLd } from '@/components/JsonLd';
import { audiences, getAudience } from '@/lib/audiences';
import { getRelatedServices } from '@/lib/services';
import { buildMetadata, BASE_URL } from '@/lib/metadata';

export function generateStaticParams() {
  return audiences.map((aud) => ({ slug: aud.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const aud = getAudience(slug);
  if (!aud) return {};
  return buildMetadata({
    title: aud.metaTitle,
    description: aud.metaDesc,
    path: `/for/${aud.slug}`,
  });
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const aud = getAudience(slug);
  if (!aud) notFound();

  const related = getRelatedServices(aud.relatedServiceSlugs);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: aud.title,
    description: aud.metaDesc,
    url: `${BASE_URL}/for/${aud.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'LNDMRK Drone',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: 'North Texas',
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: aud.title, href: `/for/${aud.slug}` },
        ]}
      />

      <HeroSection
        eyebrow={aud.eyebrow}
        title={aud.h1}
        subtitle={aud.intro}
        ctaLabel={aud.ctaLabel}
        ctaHref="/contact"
        secondaryCtaLabel="View All Services"
        secondaryCtaHref="/services"
        bgImage={aud.heroImage.src}
        bgImageAlt={aud.heroImage.alt}
      />

      {/* Content sections */}
      {aud.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`${i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-bg'} py-16`}
          aria-labelledby={`section-heading-${i}`}
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2
              id={`section-heading-${i}`}
              className="text-2xl font-bold text-brand-text mb-8 text-center"
            >
              {section.heading}
            </h2>
            {section.body && (
              <p className="text-brand-muted leading-relaxed max-w-3xl mx-auto text-center">
                {section.body}
              </p>
            )}
            {section.items && section.items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-brand-card border border-brand-border rounded-xl p-6"
                  >
                    <span className="block w-6 h-0.5 bg-brand-accent mb-4" aria-hidden="true" />
                    <h3 className="text-brand-text font-semibold mb-2">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Deliverables */}
      <section className="bg-brand-surface py-16" aria-labelledby="deliverables-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="block w-8 h-0.5 bg-brand-accent mx-auto mb-6" aria-hidden="true" />
          <h2 id="deliverables-heading" className="text-2xl font-bold text-brand-text mb-4">
            Deliverables built for your workflow
          </h2>
          <p className="text-brand-muted leading-relaxed">{aud.deliverables}</p>
          <p className="text-brand-faint text-sm mt-6">
            Serving North Texas · FAA Part 107 certified &amp; insured
          </p>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-brand-bg py-20" aria-labelledby="related-heading">
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
