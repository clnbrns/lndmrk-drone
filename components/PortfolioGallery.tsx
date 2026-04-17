'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { portfolioItems, portfolioCategories, type PortfolioItem } from '@/lib/portfolio';

interface PortfolioGalleryProps {
  maxItems?: number;
  heading?: string;
  /** If true, show category filter tabs */
  showFilter?: boolean;
  /** If true, only show items with featured: true */
  featuredOnly?: boolean;
}

function PhotoTile({ item }: { item: PortfolioItem }) {
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        {item.caption && (
          <div>
            <p className="text-white text-sm font-semibold leading-snug">{item.caption}</p>
            <p className="text-white/70 text-xs mt-0.5 uppercase tracking-wider">{item.category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function PortfolioGallery({
  maxItems = 9,
  heading = 'Our Work',
  showFilter = false,
  featuredOnly = false,
}: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = portfolioItems
    .filter((item) => !featuredOnly || item.featured)
    .filter((item) => activeCategory === 'All' || item.category === activeCategory)
    .slice(0, maxItems);

  const hasPhotos = portfolioItems.length > 0;

  return (
    <section className="bg-brand-bg py-20" aria-labelledby="portfolio-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            {heading}
          </h2>
          {hasPhotos && (
            <p className="text-brand-muted max-w-md mx-auto text-sm">
              A selection of aerial photography and videography from across the DFW area and beyond.
            </p>
          )}
        </div>

        {/* Category filter */}
        {showFilter && hasPhotos && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-accent text-black'
                    : 'border border-brand-border text-brand-muted hover:border-brand-teal hover:text-brand-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {hasPhotos ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <PhotoTile key={i} item={item} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] bg-brand-card border border-brand-border rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3"
              >
                <svg className="w-10 h-10 text-brand-faint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span className="text-brand-faint text-xs font-medium uppercase tracking-widest">Coming soon</span>
              </div>
            ))}
          </div>
        )}

        {/* View more link — only show when there are more photos than displayed */}
        {hasPhotos && portfolioItems.length > maxItems && (
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-block border border-brand-teal text-brand-teal font-semibold px-7 py-3 rounded-lg hover:bg-brand-teal hover:text-black transition-colors text-sm uppercase tracking-wide"
            >
              View All {portfolioItems.length} Photos →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
