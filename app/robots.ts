import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

import siteMetadata from '../lib/siteMetadata'

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
