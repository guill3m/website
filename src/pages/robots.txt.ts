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

export const getRobotsTxt = (
	sitemapURL: URL,
	disallowedBots: string[],
): string => `
User-Agent: *
Disallow:

${
	disallowedBots.length > 0
		? `${disallowedBots
				.map((disallowedBot) => `User-Agent: ${disallowedBot}`)
				.join('\n')}
Disallow: /`
		: ''
}

Sitemap: ${sitemapURL.href}
`

/* v8 ignore next 4 */
export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL('/sitemap-index.xml', site)
	return new Response(getRobotsTxt(sitemapURL, aiBots))
}
