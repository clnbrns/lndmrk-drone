import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { buildMetadata } from '@/lib/metadata';
import { BlogClient } from './BlogClient';

export const metadata: Metadata = buildMetadata({
  title: 'Drone Photography Blog & Aerial Photography Resources',
  description:
    'Tips, guides, and industry insights on drone photography, aerial videography, FAA regulations, and how to get the most from your drone project.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <HeroSection
        eyebrow="Resources"
        title="Drone Photography Blog & Aerial Resources"
        subtitle="Industry insights, technical guides, and practical tips from our team of FAA-certified aerial photographers."
        bgImage="/images/portfolio/events-aledo-stadium-sunset.jpg"
        bgImageAlt="Aerial drone photo of Aledo stadium at sunset"
      />

      <BlogClient />
    </>
  );
}
