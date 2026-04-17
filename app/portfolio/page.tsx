import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { CtaSection } from '@/components/CtaSection';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Portfolio | Aerial Photography & Videography Gallery',
  description:
    'Browse LNDMRK Drone\'s portfolio of aerial photography and videography — real estate, events, construction, film, government, and mapping projects across the DFW area.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        eyebrow="Our Work"
        title="Aerial Photography Portfolio"
        subtitle="A selection of drone photography and videography from real estate, events, construction, film, and more — across DFW and beyond."
        ctaLabel="Get a Quote"
        ctaHref="/contact"
        bgImage="/images/hero/farrington-field-skyline.jpg"
        bgImageAlt="Aerial drone photo of Farrington Field stadium with Fort Worth skyline"
      />

      <PortfolioGallery
        heading="All Projects"
        showFilter={true}
        featuredOnly={false}
        maxItems={100}
      />

      <CtaSection />
    </>
  );
}
