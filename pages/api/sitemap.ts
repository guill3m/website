import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllProjectPaths } from '../../lib/getData'
import siteMetadata from '../../lib/siteMetadata'

type SitemapPath = {
  path: string,
  priority: string,
}

export default async function sitemap (
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { headers: { host } } = req

  if (host !== siteMetadata.host) {
    res.setHeader('Content-Type', 'text/plain')
    res.status(404).send('Not found')
    return
  }

  const projectPaths = await getAllProjectPaths()

  const paths: SitemapPath[] = [
    {
      path: '/',
      priority: '1.0',
    },
    {
      path: '/about/',
      priority: '0.9',
    },
    {
      path: '/contact/',
      priority: '0.9',
    },
    {
      path: '/privacy-policy/',
      priority: '0.7',
    },
    {
      path: '/work/',
      priority: '0.9',
    },
  ]

  projectPaths.forEach((projectPath) => {
    paths.push({
      path: `/work/${projectPath}/`,
      priority: '0.8',
    })
  })

  const urls: string[] = paths
    .sort((a, b) => Number(b.priority) - Number(a.priority))
    .map((path) => {
      return `<url><loc>${siteMetadata.url}${path.path}</loc><priority>${path.priority}</priority></url>`
    })

  const sitemapResponse = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.status(200).send(sitemapResponse)
}
