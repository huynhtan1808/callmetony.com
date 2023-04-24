const { get } = require('@vercel/edge-config');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Twitter Profile Picture
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'callmetony.com',
        pathname: '/**',
        
      },
    ],
  },
  experimental: {
    appDir: true,
  },

  redirects() {
    try {
      return get('redirects');
    } catch {
      return [
        {
          source: '/post/nhan-ma-pin-google-adsense',
          destination: '/blog',
          permanent: true,
        },
        {
          source: '/post/hoc-nexjs',
          destination: '/blog/hoc-nexjs',
          permanent: true,
        },
        {
          source: '/post/nextjs-sitemap-robots',
          destination: '/blog/nextjs-sitemap-robots',
          permanent: true,
        },
        {
          source: '/post/core-web-virals-anh-huong-google-rankings',
          destination: '/blog/core-web-virals-anh-huong-google-rankings',
          permanent: true,
        },
        {
          source: '/post/hoc-css-animations-bang-vi-du',
          destination: '/blog/hoc-css-animations-bang-vi-du',
          permanent: true,
        },
        {
          source: '/post/huong-dan-cho-nguoi-moi-bat-dau-ve-porfolio',
          destination: '/blog/huong-dan-cho-nguoi-moi-bat-dau-ve-porfolio',
          permanent: true,
        },
        {
          source: '/post/hoc-nextjs',
          destination: '/blog/hoc-nextjs',
          permanent: true,
        },
        {
          source: '/post/nen-chon-backend-nao',
          destination: '/blog/nen-chon-backend-nao',
          permanent: true,
        },
        {
          source: '/post/web-fonts-nam-2021',
          destination: '/blog/web-fonts-nam-2021',
          permanent: true,
        },
      ];
    }
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

module.exports = withContentlayer(nextConfig);
