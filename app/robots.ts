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
            'Applebot-Extended',
            'Bytespider',
            'CCBot',
            'ChatGPT-User',
            'Claude-Web',
            'ClaudeBot',
            'cohere-ai',
            'cohere-training-data-crawler',
            'Diffbot',
            'FacebookBot',
            'FriendlyCrawler',
            'Google-Extended',
            'GoogleOther',
            'GPTBot',
            'iaskspider/',
            'ICC-Crawler',
            'ImagesiftBot',
            'img2dataset',
            'ISSCyberRiskCrawler',
            'Kangaroo Bot',
            'Meta-ExternalAgent',
            'Meta-ExternalFetcher',
            'OAI-SearchBot',
            'omgili',
            'PanguBot',
            'PerplexityBot',
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
