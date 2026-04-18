import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { locations, getLocation } from '@/lib/locations';
import { buildMetadata, BASE_URL } from '@/lib/metadata';

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return buildMetadata({
    title: loc.metaTitle,
    description: loc.metaDesc,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LNDMRK Drone',
    description: `Professional drone photography and videography serving ${loc.city}, ${loc.state}.`,
    url: `${BASE_URL}/locations/${loc.slug}`,
    telephone: '+16829999240',
    email: 'colinmburns@gmail.com',
    areaServed: {
      '@type': 'City',
      name: loc.city,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Worth',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: loc.city, href: `/locations/${loc.slug}` },
        ]}
      />

      <HeroSection
        eyebrow={loc.region}
        badge="FAA Part 107 Certified"
        title={loc.h1}
        subtitle={loc.intro}
        ctaLabel="Book a Flight"
        ctaHref="/contact"
        secondaryCtaLabel="View Our Work"
        secondaryCtaHref="/portfolio"
        bgImage={loc.heroImage}
        bgImageAlt={loc.heroImageAlt}
      />

      {/* Market context */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6">
            Drone Photography in {loc.city}, {loc.state}
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-10">
            {loc.marketContext}
          </p>

          {/* Proof points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {loc.proofPoints.map((point) => (
              <div
                key={point.label}
                className="bg-brand-card border border-brand-border rounded-xl p-6"
              >
                <span className="block w-6 h-0.5 bg-brand-accent mb-4" aria-hidden="true" />
                <h3 className="text-brand-text font-semibold mb-2">{point.label}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services offered in this market */}
      <section className="bg-brand-bg py-20" aria-labelledby="services-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
            Services We Offer in {loc.city}
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-10">
            LNDMRK Drone is a Fort Worth-based FAA Part 107 certified operator serving {loc.city} and {loc.county} with the full range of commercial drone photography and videography services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Real Estate Aerial Photography',
                desc: 'Listing photos, video flyovers, twilight sessions, and lot overviews that sell properties faster.',
                href: '/services/real-estate',
              },
              {
                title: 'Construction Documentation',
                desc: 'Progress tracking, as-built photography, milestone documentation, and stakeholder reporting.',
                href: '/services/construction',
              },
              {
                title: 'Event Drone Coverage',
                desc: 'Aerial photography and video for sports events, corporate gatherings, weddings, and venue marketing.',
                href: '/services/events',
              },
              {
                title: 'Film & Media Production',
                desc: 'Cinematic 4K aerial footage for commercials, brand content, and social media.',
                href: '/services/film-and-media',
              },
              {
                title: 'Drone Inspection',
                desc: 'Aerial inspection of roofs, structures, towers, and commercial facilities.',
                href: '/services/inspection',
              },
              {
                title: 'Government & Public Safety',
                desc: 'Municipal projects, campus documentation, emergency management, and public safety support.',
                href: '/services/government-and-public-safety',
              },
            ].map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="block bg-brand-surface border border-brand-border rounded-xl p-5 hover:border-brand-teal/40 transition-colors group"
              >
                <h3 className="text-brand-text font-semibold mb-1 group-hover:text-brand-teal transition-colors">
                  {svc.title} →
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: 'FAA', label: 'Part 107 Certified' },
            { value: 'Fully', label: 'Insured' },
            { value: '48hr', label: 'Delivery Standard' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-brand-accent mb-1">{stat.value}</p>
              <p className="text-brand-muted text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection
        faqs={loc.faqs}
        heading={`Drone Photography in ${loc.city} — Common Questions`}
      />

      <CtaSection
        heading={`Ready to Book a Drone Shoot in ${loc.city}?`}
        subtext="Contact us for a free quote. We respond within one business day."
        ctaLabel="Book a Flight"
        ctaHref="/contact"
      />
    </>
  );
}
