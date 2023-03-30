import { headers } from 'next/headers'

import siteMetadata from '../../lib/siteMetadata'

export async function GET () {
  const headersList = headers()
  const host = headersList.get('host')

  if (host === siteMetadata.host) {
    return new Response(`User-agent: *
Allow: /
Sitemap: https://www.guillemandreu.com/sitemap.xml
`, {
      status: 200,
    })
  } else {
    return new Response(`User-agent: *
Disallow: /
`, {
      status: 200,
    })
  }
}
