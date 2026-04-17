import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { JsonLd } from '@/components/JsonLd';
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
  url: 'https://lndmrkdrone.com',
  telephone: '[PLACEHOLDER: phone]',
  email: 'hello@lndmrkdrone.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[PLACEHOLDER: street address]',
    addressLocality: '[PLACEHOLDER: city]',
    addressRegion: '[PLACEHOLDER: state]',
    postalCode: '[PLACEHOLDER: zip]',
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <HeroSection
        eyebrow="Work With Us"
        title="Get a Free Drone Photography Quote"
        subtitle="Tell us about your project. We respond within one business day with a custom quote."
      />

      <section className="bg-brand-surface py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                className="space-y-6"
                aria-label="Contact and quote request form"
                action="#"
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-brand-muted text-sm font-medium mb-2">
                      Full Name <span className="text-brand-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-brand-muted text-sm font-medium mb-2">
                      Email Address <span className="text-brand-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-brand-muted text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-brand-muted text-sm font-medium mb-2">
                      Service Needed <span className="text-brand-accent" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-teal transition-colors"
                    >
                      <option value="" disabled>Select a service…</option>
                      <option value="real-estate">Real Estate Aerial Photography</option>
                      <option value="construction">Construction Drone Photography</option>
                      <option value="mapping">Drone Mapping & Surveying</option>
                      <option value="agriculture">Agricultural Drone Photography</option>
                      <option value="film">Film & Media Cinematography</option>
                      <option value="inspection">Drone Inspection Services</option>
                      <option value="events">Event Drone Coverage</option>
                      <option value="government">Government & Public Safety</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-brand-muted text-sm font-medium mb-2">
                    Project Details <span className="text-brand-accent" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Location, project date, deliverables needed, timeline, any special requirements…"
                    className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-accent text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-accentdim transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <aside aria-label="Contact information">
              <h2 className="text-xl font-bold text-brand-text mb-6">Contact Info</h2>
              <address className="not-italic space-y-5">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Address</p>
                  <p className="text-brand-text text-sm">[PLACEHOLDER: Street Address]</p>
                  <p className="text-brand-text text-sm">[PLACEHOLDER: City, State ZIP]</p>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+15550000000" className="text-brand-text text-sm hover:text-brand-accent transition-colors">
                    [PLACEHOLDER: Phone Number]
                  </a>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:hello@lndmrkdrone.com" className="text-brand-text text-sm hover:text-brand-accent transition-colors">
                    hello@lndmrkdrone.com
                  </a>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-brand-text text-sm">Mon–Fri: 8am – 6pm</p>
                  <p className="text-brand-muted text-xs mt-1">Emergency / weekend shoots by arrangement.</p>
                </div>
              </address>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
