import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { JsonLd } from '@/components/JsonLd';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { services } from '@/lib/services';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'LNDMRK Drone | Aerial Photography & Videography',
  description:
    'Professional drone photography and videography for real estate, construction, events, and inspection. FAA-certified. Serving Dallas-Fort Worth, TX.',
  path: '/',
});

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '3+', label: 'Years of Experience' },
  { value: 'FAA', label: 'Part 107 Certified' },
  { value: 'Fully', label: 'Insured' },
];

const homeFaqs = [
  {
    q: 'What areas do you serve?',
    a: 'LNDMRK Drone is based in Fort Worth, TX and serves the Dallas-Fort Worth Metroplex and surrounding areas. For large-scale or long-term projects, we travel nationally.',
  },
  {
    q: 'Are you FAA certified?',
    a: 'Yes. Our pilot holds an FAA Part 107 Remote Pilot Certificate, which is required for all commercial drone operations in the United States. We carry a copy of the certification on every flight.',
  },
  {
    q: 'Do you carry liability insurance?',
    a: 'Yes. We carry commercial general liability insurance covering aerial operations. Certificates of insurance can be provided to clients, property owners, or venues upon request.',
  },
  {
    q: 'How do I get a quote for my project?',
    a: 'Use our contact form or call us directly. We typically respond within one business day with a custom quote based on your location, project scope, and deliverables required.',
  },
  {
    q: 'Can you fly in restricted or controlled airspace?',
    a: 'Yes — we are experienced with LAANC authorizations and FAA Part 107 airspace waivers. Urban projects near airports and controlled airspace are routine for our team.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LNDMRK Drone',
  description: 'Professional aerial photography and videography services.',
  url: 'https://www.lndmrkdrone.com',
  telephone: '+16829999240',
  email: 'colinmburns@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fort Worth',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <HeroSection
        badge="FAA Part 107 Certified"
        title="See the World From a New Altitude"
        subtitle="Cinematic drone footage and photography for real estate, construction, events, film, and inspection. Fully insured. Serving DFW & beyond."
        ctaLabel="Book a Flight"
        ctaHref="/contact"
        secondaryCtaLabel="View Our Work"
        secondaryCtaHref="/portfolio"
        bgVideo="/videos/reel-2.mp4"
        bgImage="/images/hero/farrington-field-skyline.jpg"
        bgImageAlt="Aerial drone photo of Farrington Field stadium with Fort Worth skyline"
      />

      {/* Trust signals */}
      <section className="bg-brand-surface border-y border-brand-border" aria-label="Company statistics">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-brand-accent mb-1">{stat.value}</p>
              <p className="text-brand-muted text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why LNDMRK — differentiator + proof points */}
      <section className="bg-brand-bg py-24" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-6">
          {/* Headline block */}
          <div className="text-center mb-16">
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Why LNDMRK
            </p>
            <h2 id="why-heading" className="text-3xl md:text-4xl font-extrabold text-brand-text mb-4 leading-tight">
              Not just a pilot with a camera.
              <br />
              <span className="text-brand-teal">A marketer with a drone.</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Drone services backed by 20 years of sales and marketing experience. Shot by someone
              who has led social media for major brands — we know what stops the scroll, what sells
              listings, and what makes clients look incredible.
            </p>
          </div>

          {/* Proof point grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                label: 'Marketing-First Eye',
                desc: 'Composition, timing, and storytelling informed by 20 years in brand marketing and social media. We shoot what performs, not just what\'s pretty.',
              },
              {
                label: 'FAA Part 107 Certified',
                desc: 'Licensed, insured, and compliant on every flight. Certificates of insurance available upon request for venues, HOAs, and general contractors.',
              },
              {
                label: '500+ Projects Delivered',
                desc: 'From single-listing shoots to multi-day commercial builds — real experience across real estate, events, construction, and film in the DFW Metroplex.',
              },
              {
                label: 'Fort Worth Based',
                desc: 'Local knowledge, fast turnaround, and boots on the ground. We know DFW — and we travel nationally for the right project.',
              },
            ].map((point) => (
              <div
                key={point.label}
                className="bg-brand-surface border border-brand-border rounded-xl p-7 hover:border-brand-teal/40 transition-colors"
              >
                <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
                  Proof Point
                </p>
                <h3 className="text-brand-text font-bold text-lg mb-2">{point.label}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-brand-surface py-20" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Services We Offer
            </h2>
            <p className="text-brand-muted max-w-xl mx-auto">
              From a single listing shoot to a recurring construction monitoring contract, we have an
              aerial solution for every industry.{' '}
              <Link href="/services" className="text-brand-teal hover:text-brand-accent transition-colors">
                View all services →
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Portfolio gallery — featured shots, 9 max */}
      <PortfolioGallery heading="Our Work" maxItems={9} featuredOnly={false} />

      {/* Testimonials */}
      <section className="bg-brand-surface py-20" aria-labelledby="testimonials-heading">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              Client Stories
            </p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-brand-text">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We listed a property that had sat on the market for 60 days with standard photos. LNDMRK came out, shot it from the air, and we had three offers within a week. The aerial footage showed the lot size and the neighborhood in a way ground photos just can't. We use them on every listing now.",
                name: 'Kristen A.',
                title: 'Realtor — Fort Worth, TX',
                stars: 5,
              },
              {
                quote:
                  "They shot both fields and the full resort grounds for us in one session — pool, cabanas, the works. The images ended up on our website, social media, and a regional tourism campaign. Every time we need aerial coverage for an event or a marketing push, LNDMRK is the first call we make.",
                name: 'Marcus W.',
                title: 'Director of Operations, Resort & Events Venue',
                stars: 5,
              },
              {
                quote:
                  "We brought them in to document a large backyard build — putting green, plunge pool, stone retaining walls. They captured progress shots throughout the project and the final reveal photos were stunning. Our client used them for their HOA presentation and it made our crew look incredible.",
                name: 'Derek C.',
                title: 'Owner, Outdoor Construction Company',
                stars: 5,
              },
            ].map((t, i) => (
              <figure key={i} className="bg-brand-card border border-brand-border rounded-xl p-6 flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-brand-muted text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-brand-border pt-4">
                  <p className="text-brand-text font-semibold text-sm">{t.name}</p>
                  <p className="text-brand-faint text-xs mt-0.5">{t.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={homeFaqs} heading="Common Questions" />
      <CtaSection />
    </>
  );
}
