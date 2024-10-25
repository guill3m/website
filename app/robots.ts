import type { MetadataRoute } from 'next'

import { headers } from 'next/headers'

import siteMetadata from '@/helpers/site-metadata'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get('host')

  if (host === siteMetadata.host) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: ' ',
        },
        // AI bots, see: https://github.com/ai-robots-txt/ai.robots.txt
        {
          userAgent: [
            'AI2Bot',
            'Amazonbot',
            'anthropic-ai',
            'Apple-Extended',
            'Bytespider',
            'CCBot',
            'ChatGPT-User',
            'Claude-Web',
            'ClaudeBot',
            'cohere-ai',
            'Diffbot',
            'FacebookBot',
            'FriendlyCrawler',
            'Google-Extended',
            'GPTBot',
            'ICC-Crawler',
            'ImagesiftBot',
            'img2dataset',
            'ISSCyberRiskCrawler',
            'Kangaroo Bot',
            'Meta-ExternalAgent',
            'Meta-ExternalFetcher',
            'omgili',
            'PetalBot',
            'Scrapy',
            'Sidetrade indexer bot',
            'Timpibot',
            'VelenPublicWebCrawler',
            'Webzio-Extended',
            'YouBot',
          ],
          disallow: '/',
        },
      ],
      sitemap: `${siteMetadata.url}/sitemap.xml`,
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
