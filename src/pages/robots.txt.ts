import type { APIRoute } from 'astro'

// AI bots, see: https://github.com/ai-robots-txt/ai.robots.txt
const aiBots = [
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
]

const getRobotsTxt = (sitemapURL: URL) => `
User-Agent: *
Disallow:

${aiBots.map((aiBot) => `User-Agent: ${aiBot}`).join('\n')}
Disallow: /

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL('sitemap-index.xml', site)
	return new Response(getRobotsTxt(sitemapURL))
}
