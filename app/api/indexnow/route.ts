import { NextResponse } from 'next/server';

const BASE_URL = 'https://lndmrkdrone.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

// All URLs to submit to Bing/IndexNow
const ALL_URLS = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/blog',
  '/contact',
  '/locations',
  // Services
  '/services/real-estate',
  '/services/construction',
  '/services/film-and-media',
  '/services/inspection',
  '/services/events',
  '/services/government-and-public-safety',
  // Locations
  '/locations/fort-worth',
  '/locations/southlake',
  '/locations/keller',
  '/locations/arlington',
  '/locations/granbury',
  '/locations/aledo',
  '/locations/weatherford',
  '/locations/parker-county',
  '/locations/burleson',
  '/locations/mansfield',
  '/locations/grapevine',
  '/locations/benbrook',
  '/locations/haslet',
  '/locations/justin',
  // Blog
  '/blog/aerial-photography-tips',
  '/blog/real-estate-drone-guide',
  '/blog/faa-part-107-explained',
  '/blog/do-drone-photos-help-sell-homes',
  '/blog/construction-drone-benefits',
  '/blog/drone-mapping-accuracy',
  '/blog/hiring-drone-company',
].map((path) => `${BASE_URL}${path}`);

/**
 * POST /api/indexnow
 * Pings Bing's IndexNow endpoint with all site URLs.
 * Requires INDEXNOW_KEY env var (get from Bing Webmaster Tools).
 *
 * Usage: curl -X POST https://lndmrkdrone.com/api/indexnow
 * Or call from a deploy hook / GitHub Action after each push.
 */
export async function POST() {
  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY not set. Add it to Vercel environment variables.' },
      { status: 500 }
    );
  }

  const payload = {
    host: 'lndmrkdrone.com',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: ALL_URLS,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    return NextResponse.json({
      success: true,
      submitted: ALL_URLS.length,
      urls: ALL_URLS,
    });
  }

  const text = await res.text();
  return NextResponse.json(
    { error: 'IndexNow submission failed', status: res.status, body: text },
    { status: 500 }
  );
}

// GET returns instructions
export async function GET() {
  return NextResponse.json({
    info: 'IndexNow URL submission endpoint',
    usage: 'POST to this route to submit all URLs to Bing/IndexNow',
    urls_queued: ALL_URLS.length,
    setup: [
      '1. Sign up at https://www.bing.com/webmasters',
      '2. Add and verify lndmrkdrone.com',
      '3. Generate an IndexNow key in Bing Webmaster Tools',
      '4. Add INDEXNOW_KEY to Vercel environment variables',
      '5. Create a file at /public/<your-key>.txt containing just the key',
      '6. POST to /api/indexnow to submit all URLs',
    ],
  });
}
