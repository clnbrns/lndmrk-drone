import Link from 'next/link';

interface CtaSectionProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaSection({
  heading = 'Ready to See Your World From Above?',
  subtext = 'Contact us for a free quote. We respond within one business day.',
  ctaLabel = 'Book a Flight',
  ctaHref = '/contact',
}: CtaSectionProps) {
  return (
    <section className="bg-brand-surface border-y border-brand-border">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">{heading}</h2>
        <p className="text-brand-muted text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
        <Link
          href={ctaHref}
          className="inline-block bg-brand-accent text-black font-semibold px-8 py-4 rounded-lg hover:bg-brand-accentdim transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
