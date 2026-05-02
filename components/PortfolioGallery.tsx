'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { portfolioItems, portfolioCategories, type PortfolioItem } from '@/lib/portfolio';
import { Lightbox } from '@/components/Lightbox';

interface PortfolioGalleryProps {
  maxItems?: number;
  heading?: string;
  showFilter?: boolean;
  featuredOnly?: boolean;
}

function PhotoTile({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      onClick={onClick}
      aria-label={`View photo: ${item.caption ?? item.alt}`}
    >
      {/* Shimmer placeholder — visible until image loads */}
      {!loaded && (
        <div className="absolute inset-0 shimmer" aria-hidden="true" />
      )}

      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />

      {/* Hover caption overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
        {item.caption && (
          <div>
            <p className="text-white text-sm font-semibold leading-snug">{item.caption}</p>
            <p className="text-white/70 text-xs mt-0.5 uppercase tracking-wider">{item.category}</p>
          </div>
        )}
      </div>

      {/* Expand icon hint */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      </div>
    </button>
  );
}

export function PortfolioGallery({
  maxItems = 9,
  heading = 'Our Work',
  showFilter = false,
  featuredOnly = false,
}: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = portfolioItems
    .filter((item) => !featuredOnly || item.featured)
    .filter((item) => activeCategory === 'All' || item.category === activeCategory)
    .slice(0, maxItems);

  const hasPhotos = portfolioItems.length > 0;

  const closeLightbox = () => setSelectedIndex(null);
  const prevPhoto = () => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextPhoto = () => setSelectedIndex((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));

  return (
    <>
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
                  onClick={() => { setActiveCategory(cat); setSelectedIndex(null); }}
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
                <PhotoTile
                  key={i}
                  item={item}
                  onClick={() => setSelectedIndex(i)}
                />
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

          {/* View more */}
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

      {/* Lightbox */}
      {selectedIndex !== null && filtered[selectedIndex] && (
        <Lightbox
          item={filtered[selectedIndex]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filtered.length - 1}
          counter={`${selectedIndex + 1} / ${filtered.length}`}
        />
      )}
    </>
  );
}
