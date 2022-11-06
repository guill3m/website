const { withAxiom } = require('next-axiom')

const securityHeaders = [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
    ],
  },
]

const plausibleAnalyticsProxyRewrites = [
  {
    source: '/stats.js',
    destination: 'https://plausible.io/js/script.outbound-links.js',
  },
  {
    source: '/api/event/',
    destination: 'https://plausible.io/api/event',
  },
]

const robotsRewrite = {
  source: '/robots.txt',
  destination: '/api/robots/',
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    appDir: true,
    legacyBrowsers: false,
  },
  async headers () {
    return [
      ...securityHeaders,
    ]
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites () {
    return [
      ...plausibleAnalyticsProxyRewrites,
      robotsRewrite,
    ]
  },
  trailingSlash: true,
}

module.exports = withAxiom(nextConfig)
