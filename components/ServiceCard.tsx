import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

export function ServiceCard({ icon, title, desc, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-brand-surface border border-brand-border rounded-xl p-6 hover:bg-brand-card transition-colors"
    >
      <span className="block w-8 h-0.5 bg-brand-accent mb-4" aria-hidden="true" />
      <h3 className="text-brand-text font-semibold text-lg mb-2 group-hover:text-brand-accent transition-colors">
        {title}
      </h3>
      <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
      <span className="inline-block mt-4 text-brand-teal text-sm font-medium group-hover:text-brand-accent transition-colors">
        Learn more →
      </span>
    </Link>
  );
}
