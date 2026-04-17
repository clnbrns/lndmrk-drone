import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { BASE_URL } from '@/lib/metadata';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="bg-brand-surface border-b border-brand-border">
        <ol className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center gap-1.5 text-sm">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i < items.length - 1 ? (
                <>
                  <Link
                    href={item.href}
                    className="text-brand-muted hover:text-brand-text transition-colors"
                  >
                    {item.label}
                  </Link>
                  <span className="text-brand-faint" aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span className="text-brand-text font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
