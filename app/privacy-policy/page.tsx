import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'LNDMRK Drone privacy policy — how we collect, use, and protect your information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-10">
        <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-brand-text mb-4">Privacy Policy</h1>
        <p className="text-brand-muted">Last updated: [PLACEHOLDER: Month Day, Year]</p>
      </header>

      <div className="prose prose-invert max-w-none space-y-8 text-brand-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">1. Information We Collect</h2>
          <p>
            LNDMRK Drone (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you provide
            directly to us when you use our website or contact us for services. This may include your name, email
            address, phone number, business name, and project details submitted through our contact form.
          </p>
          <p className="mt-3">
            We also automatically collect certain technical information when you visit our site, including IP address,
            browser type, pages visited, and referral source, through standard web server logs and analytics tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send project updates, invoices, and delivery notifications</li>
            <li>Improve our website and services through aggregate analytics</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
          <p className="mt-3">
            We do not sell, trade, or rent your personal information to third parties. [PLACEHOLDER: Add any
            specific third-party services used, e.g., CRM, email marketing, payment processor.]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">3. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your browsing experience and
            analyze site traffic. You can control cookie settings through your browser preferences. Disabling cookies
            may limit certain functionality on our site.
          </p>
          <p className="mt-3">[PLACEHOLDER: List specific analytics or advertising tools used, e.g., Google Analytics, Facebook Pixel.]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">4. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes described in this policy,
            comply with our legal obligations, and resolve disputes. Project files and deliverables are retained for
            [PLACEHOLDER: X months/years] after project completion unless a different period is agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">5. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing
            of your personal information. To exercise these rights, contact us at{' '}
            <a href="mailto:hello@lndmrkdrone.com" className="text-brand-teal hover:text-brand-accent transition-colors">
              hello@lndmrkdrone.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The date at the top of this page reflects the most
            recent revision. Continued use of our website after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">7. Contact</h2>
          <p>
            Questions about this policy? Contact us at{' '}
            <a href="mailto:hello@lndmrkdrone.com" className="text-brand-teal hover:text-brand-accent transition-colors">
              hello@lndmrkdrone.com
            </a>{' '}
            or [PLACEHOLDER: mailing address].
          </p>
        </section>
      </div>
    </article>
  );
}
