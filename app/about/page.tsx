import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { CtaSection } from '@/components/CtaSection';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About LNDMRK Drone | FAA-Certified Aerial Photographers',
  description:
    'Meet the LNDMRK Drone team — FAA Part 107 certified pilots and visual storytellers with 8+ years of experience in aerial photography and drone videography.',
  path: '/about',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About LNDMRK Drone',
  description:
    'LNDMRK Drone is a team of FAA-certified pilots and visual storytellers specializing in aerial photography and videography.',
  url: 'https://lndmrkdrone.com/about',
  publisher: {
    '@type': 'Organization',
    name: 'LNDMRK Drone',
    url: 'https://lndmrkdrone.com',
  },
};

const teamMembers = [
  {
    name: '[PLACEHOLDER: First Last]',
    title: '[PLACEHOLDER: Lead Pilot & Founder]',
    bio: '[PLACEHOLDER: Brief bio describing experience, certifications (FAA Part 107), years in the industry, and area of specialty. 2-3 sentences.]',
    credentials: ['FAA Part 107', '[PLACEHOLDER: Certification]'],
  },
  {
    name: '[PLACEHOLDER: First Last]',
    title: '[PLACEHOLDER: Director of Photography]',
    bio: '[PLACEHOLDER: Brief bio describing cinematography background, equipment expertise, and notable projects. 2-3 sentences.]',
    credentials: ['FAA Part 107', '[PLACEHOLDER: Certification]'],
  },
  {
    name: '[PLACEHOLDER: First Last]',
    title: '[PLACEHOLDER: GIS & Mapping Specialist]',
    bio: '[PLACEHOLDER: Brief bio describing surveying or GIS background, software expertise (Pix4D, ArcGIS), and industry experience. 2-3 sentences.]',
    credentials: ['FAA Part 107', '[PLACEHOLDER: Certification]'],
  },
];

const timeline = [
  { year: '[PLACEHOLDER: Year]', event: 'LNDMRK Drone founded with a focus on aerial real estate photography in [PLACEHOLDER: city].' },
  { year: '[PLACEHOLDER: Year]', event: 'Expanded services to include construction monitoring and drone mapping.' },
  { year: '[PLACEHOLDER: Year]', event: 'Secured first commercial film production contract. Grew fleet to [PLACEHOLDER: N] aircraft.' },
  { year: '[PLACEHOLDER: Year]', event: 'Launched agricultural and inspection service lines. Reached 250 projects completed.' },
  { year: '[PLACEHOLDER: Year]', event: 'Expanded regional coverage. Crossed 500 projects and added government & public safety services.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={articleSchema} />

      <HeroSection
        eyebrow="Who We Are"
        title="Meet the LNDMRK Drone Team"
        subtitle="FAA-certified pilots and visual storytellers with over 8 years of experience capturing the world from above."
      />

      {/* Mission */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-text mb-6">Our Mission</h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-4">
            We founded LNDMRK Drone on a simple belief: every project deserves a perspective that
            elevates it. Whether that means a sweeping cinematic reveal for a film production or an
            accurate orthomosaic map for an engineering survey, we bring the same obsessive attention to
            craft and safety to every flight.
          </p>
          <p className="text-brand-muted text-lg leading-relaxed">
            Every pilot on our team holds an FAA Part 107 Remote Pilot Certificate and undergoes
            regular flight reviews and continuing education. We carry comprehensive liability insurance
            and maintain our equipment to the highest standards so our clients can focus on their
            projects — not the logistics of flying.
          </p>

          {/* E-E-A-T credentials */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '🛡️', label: 'FAA Part 107 Certified', desc: 'All pilots carry current Remote Pilot Certificates as required by federal law.' },
              { icon: '📋', label: 'Fully Insured', desc: '[PLACEHOLDER: $X]M commercial liability coverage. Certificates available upon request.' },
              { icon: '🏆', label: '500+ Projects', desc: 'Eight years of commercial aerial experience across [PLACEHOLDER: N] states.' },
            ].map((item) => (
              <div key={item.label} className="bg-brand-card border border-brand-border rounded-xl p-6">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-brand-text font-semibold mb-2">{item.label}</h3>
                <p className="text-brand-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-bg py-20" aria-labelledby="team-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="team-heading" className="text-3xl font-bold text-brand-text text-center mb-12">
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article key={member.name} className="bg-brand-surface border border-brand-border rounded-xl p-6">
                <div
                  className="w-20 h-20 rounded-full bg-brand-card border-2 border-brand-border mb-5 flex items-center justify-center text-3xl"
                  aria-label={`Photo placeholder for ${member.name}`}
                >
                  👤
                </div>
                <h3 className="text-brand-text font-bold text-lg">{member.name}</h3>
                <p className="text-brand-teal text-sm font-medium mb-3">{member.title}</p>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="text-xs bg-brand-card border border-brand-border text-brand-muted px-2.5 py-1 rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-surface py-20" aria-labelledby="history-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="history-heading" className="text-3xl font-bold text-brand-text mb-12 text-center">
            Company History
          </h2>
          <ol className="relative border-l border-brand-border space-y-8 ml-4">
            {timeline.map((item) => (
              <li key={item.year} className="ml-6">
                <span className="absolute -left-2.5 w-5 h-5 bg-brand-teal rounded-full border-2 border-brand-bg" />
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-1">
                  {item.year}
                </p>
                <p className="text-brand-muted">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection
        heading="Ready to Work With Us?"
        subtext="Tell us about your project. We'll get back to you within one business day."
      />
    </>
  );
}
