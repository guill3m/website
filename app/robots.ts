import type { MetadataRoute } from 'next'

import { headers } from 'next/headers'

import siteMetadata from '@/helpers/site-metadata'

export default function robots(): MetadataRoute.Robots {
  const headersList = headers()
  const host = headersList.get('host')

  if (host === siteMetadata.host) {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
        },
        // AI bots
        {
          userAgent: 'CCBot',
          disallow: '/',
        },
        {
          userAgent: 'ChatGPT-User',
          disallow: '/',
        },
        {
          userAgent: 'GPTBot',
          disallow: '/',
        },
        {
          userAgent: 'Google-Extended',
          disallow: '/',
        },
        {
          userAgent: 'anthropic-ai',
          disallow: '/',
        },
        {
          userAgent: 'Claude-Web',
          disallow: '/',
        },
        {
          userAgent: 'Omgilibot',
          disallow: '/',
        },
        {
          userAgent: 'FacebookBot',
          disallow: '/',
        },
        {
          userAgent: 'Amazonbot',
          disallow: '/',
        },
        {
          userAgent: 'cohere-ai',
          disallow: '/',
        },
      ],
      sitemap: `${siteMetadata.url}/sitemap.xml`,
      host: siteMetadata.host,
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  }
}
