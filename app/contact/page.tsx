import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { JsonLd } from '@/components/JsonLd';
import { ContactForm } from '@/components/ContactForm';
import { GoldenHourWidget } from '@/components/GoldenHourWidget';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact | Get a Free Drone Photography Quote',
  description:
    'Contact LNDMRK Drone for a free aerial photography and videography quote. We respond within one business day. FAA-certified, fully insured.',
  path: '/contact',
});

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LNDMRK Drone',
  url: 'https://www.lndmrkdrone.com',
  telephone: '+16829999240',
  email: 'colinmburns@gmail.com',
  sameAs: ['https://share.google/CKrko9vjpQen706EY'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <HeroSection
        eyebrow="Work With Us"
        title="Get a Free Drone Photography Quote"
        subtitle="Tell us about your project. We respond within one business day with a custom quote."
        bgImage="/images/portfolio/construction-bearcat-turf-dallas-skyline.jpg"
        bgImageAlt="Aerial drone photo of BearcatTurf ArtDocks installation with Dallas skyline at dusk"
      />

      <section className="bg-brand-surface py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2" id="contact-form">
              <ContactForm />
            </div>

            {/* Contact info */}
            <aside aria-label="Contact information">
              <h2 className="text-xl font-bold text-brand-text mb-6">Contact Info</h2>
              <address className="not-italic space-y-5">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:colinmburns@gmail.com" className="text-brand-text text-sm hover:text-brand-accent transition-colors">
                    colinmburns@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-brand-text text-sm">Mon–Fri: 8am – 6pm</p>
                  <p className="text-brand-muted text-xs mt-1">Emergency / weekend shoots by arrangement.</p>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-brand-text text-sm">Within one business day</p>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-brand-text text-sm">DFW Metroplex & beyond</p>
                  <p className="text-brand-muted text-xs mt-1">National travel available for large projects.</p>
                </div>
              </address>

              <GoldenHourWidget />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
