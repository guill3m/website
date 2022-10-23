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

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
    newNextLinkBehavior: true,
  },
  async headers () {
    return [
      ...securityHeaders,
    ]
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig
