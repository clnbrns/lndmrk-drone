import { JsonLd } from './JsonLd';

interface Faq {
  q: string;
  a: string;
}

export function FaqSection({ faqs, heading = 'Frequently Asked Questions' }: { faqs: Faq[]; heading?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="bg-brand-bg py-20">
      <JsonLd data={schema} />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-brand-text mb-10 text-center">{heading}</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-brand-surface border border-brand-border rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none text-brand-text font-medium hover:text-brand-accent transition-colors">
                <span>{faq.q}</span>
                <span
                  className="ml-4 text-brand-teal text-xl leading-none transition-transform group-open:rotate-45 flex-shrink-0"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-brand-muted leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
