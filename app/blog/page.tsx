import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Drone Photography Blog & Aerial Photography Resources',
  description:
    'Tips, guides, and industry insights on drone photography, aerial videography, FAA regulations, and how to get the most from your drone project.',
  path: '/blog',
});

const posts = [
  {
    slug: 'aerial-photography-tips',
    title: '10 Aerial Photography Tips That Will Instantly Improve Your Drone Shots',
    excerpt:
      'From choosing the right time of day to understanding how altitude affects compression, these field-tested tips apply whether you\'re shooting real estate or landscape.',
    date: '2026-03-15',
    author: '[PLACEHOLDER: Author Name]',
    category: 'Photography',
    readTime: '8 min read',
  },
  {
    slug: 'real-estate-drone-guide',
    title: 'The Complete Guide to Drone Photography for Real Estate Listings',
    excerpt:
      'Aerial photos make listings sell faster and for more money. Here\'s everything a real estate agent or property developer needs to know before booking a drone shoot.',
    date: '2026-02-28',
    author: '[PLACEHOLDER: Author Name]',
    category: 'Real Estate',
    readTime: '12 min read',
  },
  {
    slug: 'faa-part-107-explained',
    title: 'FAA Part 107 Explained: What It Means for Commercial Drone Operations',
    excerpt:
      'Not all drone operators are created equal. Here\'s what FAA Part 107 certification requires, why it matters for commercial work, and what questions to ask before hiring a drone company.',
    date: '2026-02-10',
    author: '[PLACEHOLDER: Author Name]',
    category: 'Regulations',
    readTime: '10 min read',
  },
  {
    slug: 'construction-drone-benefits',
    title: 'How Construction Teams Are Using Drones to Reduce Rework and Disputes',
    excerpt:
      '[PLACEHOLDER: Excerpt about construction drone photography benefits, progress tracking, and ROI for contractors and project managers. 2-3 sentences.]',
    date: '2026-01-22',
    author: '[PLACEHOLDER: Author Name]',
    category: 'Construction',
    readTime: '9 min read',
  },
  {
    slug: 'drone-mapping-accuracy',
    title: 'How Accurate Is Drone Mapping? A Plain-English Guide to Photogrammetry',
    excerpt:
      '[PLACEHOLDER: Excerpt explaining drone mapping accuracy, GCPs, RTK, and what accuracy levels are realistic for different applications. 2-3 sentences.]',
    date: '2026-01-08',
    author: '[PLACEHOLDER: Author Name]',
    category: 'Mapping',
    readTime: '11 min read',
  },
  {
    slug: 'hiring-drone-company',
    title: '7 Questions to Ask Before Hiring a Drone Photography Company',
    excerpt:
      '[PLACEHOLDER: Excerpt covering what to verify (FAA cert, insurance, experience, deliverable formats, equipment) before signing with a drone services provider. 2-3 sentences.]',
    date: '2025-12-14',
    author: '[PLACEHOLDER: Author Name]',
    category: 'Guides',
    readTime: '7 min read',
  },
];

const categories = ['All', 'Photography', 'Real Estate', 'Regulations', 'Construction', 'Mapping', 'Guides'];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        eyebrow="Resources"
        title="Drone Photography Blog & Aerial Resources"
        subtitle="Industry insights, technical guides, and practical tips from our team of FAA-certified aerial photographers."
      />

      <section className="bg-brand-bg py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Category filter (static UI — wire up with client component when ready) */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-accent text-black border-brand-accent'
                    : 'border-brand-border text-brand-muted hover:border-brand-teal hover:text-brand-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:bg-brand-card transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-brand-faint text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-brand-text font-bold text-lg mb-3 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-brand-faint">
                    <span>{post.author}</span>
                    <span className="mx-1.5">·</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brand-teal hover:text-brand-accent text-sm font-medium transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
