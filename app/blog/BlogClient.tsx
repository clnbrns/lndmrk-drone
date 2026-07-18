'use client';

import Link from 'next/link';
import { useState } from 'react';

const posts = [
  {
    slug: 'drone-shots-before-you-build',
    title: 'The 12 Drone Shots to Capture Before You Build on Raw Land',
    excerpt:
      'Buying acreage or planning a custom home? These are the 12 drone shots architects and land planners actually ask for — altitudes, angles, and why each one matters, from the high-altitude master planning image to walking-height flights along future paths.',
    date: '2026-07-18',
    author: 'Colin Burns',
    category: 'Guides',
    readTime: '10 min read',
  },
  {
    slug: 'do-drone-photos-help-sell-homes',
    title: 'Do Drone Photos Actually Help Sell Homes? What the Data Says',
    excerpt:
      'NAR survey data shows 52% of REALTORS now use drone photography and homes with aerial shots are 68% more likely to sell. Here\'s what the research means for your listing strategy.',
    date: '2026-04-17',
    author: 'Colin Burns',
    category: 'Real Estate',
    readTime: '7 min read',
  },
  {
    slug: 'aerial-photography-tips',
    title: '10 Aerial Photography Tips That Will Instantly Improve Your Drone Shots',
    excerpt:
      'From choosing the right time of day to understanding how altitude affects compression, these field-tested tips apply whether you\'re shooting real estate or landscape.',
    date: '2026-03-15',
    author: 'Colin Burns',
    category: 'Photography',
    readTime: '8 min read',
  },
  {
    slug: 'real-estate-drone-guide',
    title: 'The Complete Guide to Drone Photography for Real Estate Listings',
    excerpt:
      'Aerial photos make listings sell faster and for more money. Here\'s everything a real estate agent or property developer needs to know before booking a drone shoot.',
    date: '2026-02-28',
    author: 'Colin Burns',
    category: 'Real Estate',
    readTime: '12 min read',
  },
  {
    slug: 'faa-part-107-explained',
    title: 'FAA Part 107 Explained: What It Means for Commercial Drone Operations',
    excerpt:
      'Not all drone operators are created equal. Here\'s what FAA Part 107 certification requires, why it matters for commercial work, and what questions to ask before hiring a drone company.',
    date: '2026-02-10',
    author: 'Colin Burns',
    category: 'Regulations',
    readTime: '10 min read',
  },
  {
    slug: 'construction-drone-benefits',
    title: 'How Construction Teams Are Using Drones to Reduce Rework and Disputes',
    excerpt:
      'Drone photography has become one of the most cost-effective tools for construction project management — reducing disputes, catching rework early, and giving owners real-time visibility into progress. Here\'s how contractors across DFW are putting aerial documentation to work on every phase of the build.',
    date: '2026-01-22',
    author: 'Colin Burns',
    category: 'Construction',
    readTime: '9 min read',
  },
  {
    slug: 'drone-mapping-accuracy',
    title: 'How Accurate Is Drone Mapping? A Plain-English Guide to Photogrammetry',
    excerpt:
      'Modern drone mapping can achieve sub-inch horizontal accuracy — but only when the right ground control points and RTK workflows are in place. This guide explains what accuracy is actually achievable, what drives the variance, and how to spec a mapping project for your application.',
    date: '2026-01-08',
    author: 'Colin Burns',
    category: 'Mapping',
    readTime: '11 min read',
  },
  {
    slug: 'hiring-drone-company',
    title: '7 Questions to Ask Before Hiring a Drone Photography Company',
    excerpt:
      'Not every drone operator with a camera is qualified for commercial work. Before you sign a contract, here are the seven questions that separate professional operators from hobbyists — covering certification, insurance, equipment, deliverables, and experience.',
    date: '2025-12-14',
    author: 'Colin Burns',
    category: 'Guides',
    readTime: '7 min read',
  },
];

const categories = ['All', 'Photography', 'Real Estate', 'Regulations', 'Construction', 'Mapping', 'Guides'];

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-brand-bg py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                cat === activeCategory
                  ? 'bg-brand-accent text-black border-brand-accent'
                  : 'border-brand-border text-brand-muted hover:border-brand-teal hover:text-brand-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post) => (
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

        {filtered.length === 0 && (
          <p className="text-brand-muted text-center py-12">No posts in this category yet.</p>
        )}
      </div>
    </section>
  );
}
