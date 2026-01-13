import type { APIRoute } from 'astro'

// AI bots, see: https://github.com/ai-robots-txt/ai.robots.txt
const aiBots = [
	'AddSearchBot',
	'AI2Bot',
	'aiHitBot',
	'Amazonbot',
	'anthropic-ai',
	'Applebot-Extended',
	'Awario',
	'bedrockbot',
	'Brightbot',
	'Bytespider',
	'CCBot',
	'ChatGLM-Spider',
	'ChatGPT-User',
	'Claude-Web',
	'ClaudeBot',
	'CloudVertexBot',
	'cohere-ai',
	'cohere-training-data-crawler',
	'Cotoyogi',
	'Crawl4AI',
	'Crawlspace',
	'Datenbank Crawler',
	'DeepSeekBot',
	'Diffbot',
	'Echobot Bot',
	'EchoboxBot',
	'FacebookBot',
	'facebookexternalhit',
	'Factset_spyderbot',
	'FirecrawlAgent',
	'FriendlyCrawler',
	'Google-Extended',
	'Google-Firebase',
	'GoogleOther',
	'GPTBot',
	'iAskBot',
	'iaskspider',
	'ICC-Crawler',
	'ImagesiftBot',
	'imageSpider',
	'img2dataset',
	'ISSCyberRiskCrawler',
	'Kangaroo Bot',
	'KunatoCrawler',
	'laion-huggingface-processor',
	'LAIONDownloader',
	'LCC',
	'meta-externalagent',
	'Meta-ExternalAgent',
	'meta-externalfetcher',
	'Meta-ExternalFetcher',
	'meta-webindexer',
	'MyCentralAIScraperBot',
	'netEstate Imprint Crawler',
	'OAI-SearchBot',
	'omgili',
	'OpenAI',
	'PanguBot',
	'Panscient',
	'PerplexityBot',
	'PetalBot',
	'Poseidon Research Crawler',
	'Scrapy',
	'SemrushBot-OCOB',
	'SemrushBot-SWA',
	'ShapBot',
	'Sidetrade indexer bot',
	'TikTokSpider',
	'Timpibot',
	'VelenPublicWebCrawler',
	'WARDBot',
	'webzio-extended',
	'Webzio-Extended',
	'WRTNBot',
	'YaK',
	'YandexAdditional',
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
