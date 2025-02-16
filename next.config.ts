import type { NextConfig } from 'next'

const securityHeaders = [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Permissions-Policy',
        value:
          'camera=(), display-capture=(), geolocation=(), microphone=(), usb=()',
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

const umamiAnalyticsProxyRewrites = [
  {
    source: '/stats.js',
    destination: 'https://stats.guill3m.me/script.js',
  },
]

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  async headers() {
    return [...securityHeaders]
  },
  images: {
    imageSizes: [200, 250, 280, 320, 360, 385, 450, 515, 550, 600],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [...umamiAnalyticsProxyRewrites],
      afterFiles: [],
      fallback: [],
    }
  },
  trailingSlash: true,
}

export default nextConfig
