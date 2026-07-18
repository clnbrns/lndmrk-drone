import { NextResponse } from 'next/server';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import { audiences } from '@/lib/audiences';
import { blogSlugs } from '@/lib/blogSlugs';

const BASE_URL = 'https://www.lndmrkdrone.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_SUBMIT_SECRET = process.env.INDEXNOW_SUBMIT_SECRET;

// All URLs to submit to Bing/IndexNow — derived from the same data files as the sitemap
const ALL_URLS = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/blog',
  '/contact',
  '/locations',
  ...services.map((svc) => `/services/${svc.slug}`),
  ...locations.map((loc) => `/locations/${loc.slug}`),
  ...audiences.map((aud) => `/for/${aud.slug}`),
  ...blogSlugs.map((slug) => `/blog/${slug}`),
].map((path) => `${BASE_URL}${path}`);

/**
 * POST /api/indexnow
 * Pings Bing's IndexNow endpoint with all site URLs.
 * Requires the x-indexnow-secret header matching INDEXNOW_SUBMIT_SECRET env var.
 * Requires INDEXNOW_KEY env var (get from Bing Webmaster Tools).
 *
 * Usage: curl -X POST https://www.lndmrkdrone.com/api/indexnow \
 *   -H "x-indexnow-secret: YOUR_SUBMIT_SECRET"
 */
export async function POST(request: Request) {
  // Authenticate the request — reject anyone without the shared secret
  const submittedSecret = request.headers.get('x-indexnow-secret');
  if (!INDEXNOW_SUBMIT_SECRET || submittedSecret !== INDEXNOW_SUBMIT_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY not set. Add it to Vercel environment variables.' },
      { status: 500 }
    );
  }

  const payload = {
    host: 'www.lndmrkdrone.com',
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
    });
  }

  const text = await res.text();
  return NextResponse.json(
    { error: 'IndexNow submission failed', status: res.status, body: text },
    { status: 500 }
  );
}

// GET is disabled — no need to expose site structure or setup instructions publicly
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
