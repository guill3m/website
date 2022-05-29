const contentSecurityPolicy = `
  default-src 'self';
  font-src assets.guillemandreu.com;
`

const securityHeaders = [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
      },
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
