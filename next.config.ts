import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking — site must not be embedded in iframes
          { key: 'X-Frame-Options', value: 'DENY' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Don't send full URL in Referer headers to third parties
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features accessed by third-party scripts
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Content Security Policy
          // unsafe-inline required for inline <Script> blocks (GA4, Meta Pixel)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://www.facebook.com",
              "connect-src 'self' https://graph.facebook.com https://www.google-analytics.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
