import type { Metadata } from 'next';

export const BASE_URL = 'https://www.lndmrkdrone.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'LNDMRK Drone | Aerial Photography & Videography',
    template: '%s | LNDMRK Drone',
  },
  description:
    'LNDMRK Drone — professional aerial photography and videography for real estate, events, construction, agriculture, film, inspection, and government. FAA-certified. Fully insured.',
  openGraph: {
    siteName: 'LNDMRK Drone',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'LNDMRK Drone — aerial photography and videography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lndmrkdrone',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Root layout appends this via `title.template` to every child route's title.
// When a page's own title is already long, adding it pushes the SERP title
// past the ~60-character point where Google truncates — so once that'd happen,
// render the title as `absolute` instead, which opts that page out of the template.
const TITLE_SUFFIX = ' | LNDMRK Drone';
const MAX_TITLE_LENGTH = 60;

export function buildMetadata(overrides: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${BASE_URL}${overrides.path}`;
  const wouldTruncate = (overrides.title + TITLE_SUFFIX).length > MAX_TITLE_LENGTH;
  return {
    title: wouldTruncate ? { absolute: overrides.title } : overrides.title,
    description: overrides.description,
    alternates: { canonical: url },
    openGraph: {
      title: overrides.title,
      description: overrides.description,
      url,
      images: overrides.ogImage
        ? [{ url: overrides.ogImage, width: 1200, height: 630 }]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      title: overrides.title,
      description: overrides.description,
    },
  };
}
