import type { MetadataRoute } from 'next'

import { getAllProjectPaths } from '@/helpers/get-data'
import siteMetadata from '@/helpers/site-metadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectPaths = await getAllProjectPaths()

  const paths = [
    {
      url: `${siteMetadata.url}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${siteMetadata.url}/about/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteMetadata.url}/ai/`,
      lastModified: new Date('2024-10-25'),
      priority: 0.7,
    },
    {
      url: `${siteMetadata.url}/contact/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteMetadata.url}/privacy-policy/`,
      lastModified: new Date('2024-10-24'),
      priority: 0.6,
    },
    {
      url: `${siteMetadata.url}/work/`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ]

  projectPaths.forEach((projectPath) => {
    paths.push({
      url: `${siteMetadata.url}/work/${projectPath}/`,
      lastModified: new Date(),
      priority: 0.8,
    })
  })

  return paths.sort((a, b) => b.priority - a.priority)
}
