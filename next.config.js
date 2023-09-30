// @ts-check

const { withAxiom } = require('next-axiom')

const securityHeaders = [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Permissions-Policy',
        value:
          'camera=(), display-capture(), geolocation=(), microphone=(), usb()',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
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

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  async headers() {
    return [...securityHeaders]
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  async rewrites() {
    return [...plausibleAnalyticsProxyRewrites]
  },
  trailingSlash: true,
}

module.exports = withAxiom(nextConfig)
