import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'LNDMRK Drone terms of service — the terms governing use of our website and aerial photography services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-10">
        <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-brand-text mb-4">Terms of Service</h1>
        <p className="text-brand-muted">Last updated: [PLACEHOLDER: Month Day, Year]</p>
      </header>

      <div className="space-y-8 text-brand-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using the LNDMRK Drone website (lndmrkdrone.com) or engaging our aerial photography and
            videography services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do
            not agree, do not use our site or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">2. Services</h2>
          <p>
            LNDMRK Drone provides commercial aerial photography, videography, mapping, and inspection services. The
            scope, deliverables, timeline, and pricing for each engagement are defined in a separate written agreement
            or quote accepted by the client before any work begins.
          </p>
          <p className="mt-3">
            All commercial drone operations are conducted under FAA Part 107 regulations. We reserve the right to
            decline or postpone any flight that we determine poses unacceptable safety or regulatory risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">3. Payment Terms</h2>
          <p>
            [PLACEHOLDER: Describe payment terms — e.g., deposit required to book, balance due upon delivery, accepted
            payment methods, late payment fees.] Invoices unpaid after [PLACEHOLDER: N] days may incur a late fee of
            [PLACEHOLDER: %] per month on the outstanding balance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">4. Cancellation and Rescheduling</h2>
          <p>
            Cancellations made more than [PLACEHOLDER: N] business days before the scheduled flight date will receive
            a full refund of any deposit paid. Cancellations within [PLACEHOLDER: N] business days may forfeit the
            deposit. Weather-related postponements are rescheduled at no charge.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">5. Intellectual Property & Licensing</h2>
          <p>
            Unless otherwise agreed in writing, LNDMRK Drone retains copyright in all aerial images, video footage,
            and derived data produced during a project. Upon full payment, the client receives a [PLACEHOLDER: define
            license — e.g., non-exclusive, perpetual, royalty-free license] to use the deliverables for the agreed
            purpose.
          </p>
          <p className="mt-3">
            Resale or sublicensing of deliverables to third parties requires prior written consent from LNDMRK Drone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, LNDMRK Drone&apos;s total liability for any claim arising from our
            services shall not exceed the total amount paid by the client for the specific engagement giving rise to
            the claim. We are not liable for indirect, incidental, or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Texas, without regard to conflict of
            law principles. Any disputes shall be resolved in the courts of Tarrant County, Texas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-text mb-3">8. Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:colinmburns@gmail.com" className="text-brand-teal hover:text-brand-accent transition-colors">
              colinmburns@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
