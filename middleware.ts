import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Generate a cryptographically random nonce for this request.
  // Using crypto.randomUUID() (available in the Edge runtime) encoded as base64
  // gives 128 bits of entropy — well above the 128-bit minimum recommended by the CSP spec.
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const csp = [
    "default-src 'self'",
    // 'nonce-...' replaces 'unsafe-inline' — only scripts carrying this nonce are allowed.
    // External GTM and Meta Pixel domains are still whitelisted for their loader scripts.
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://connect.facebook.net`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://www.facebook.com",
    "connect-src 'self' https://graph.facebook.com https://www.google-analytics.com",
    "frame-ancestors 'none'",
  ].join('; ');

  // Forward the nonce to Server Components via a request header.
  // layout.tsx reads x-nonce and passes it to <Script nonce={nonce}>.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  // Set the CSP on the response so the browser enforces it.
  response.headers.set('content-security-policy', csp);
  return response;
}

export const config = {
  matcher: [
    {
      // Run on all pages except Next.js internals and static assets.
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        // Skip prefetch requests — they don't render HTML.
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
