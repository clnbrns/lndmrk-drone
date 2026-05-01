import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
      },
      // OpenAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Anthropic
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // Google AI
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Meta
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Common Crawl (training data)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Cohere
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // Microsoft / Bing / Copilot
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'msnbot',
        allow: '/',
      },
      // Apple
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      // Apify / scraping platforms used by AI pipelines
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
    ],
    sitemap: 'https://lndmrkdrone.com/sitemap.xml',
    host: 'https://lndmrkdrone.com',
  };
}
