// @ts-check

import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import cloudflare from '@astrojs/cloudflare'

const site = 'https://www.guillemandreu.com'

export default defineConfig({
	adapter: cloudflare({
		imageService: 'compile',
	}),
	env: {
		schema: {
			LASTFM_API_KEY: envField.string({
				context: 'server',
				access: 'secret',
			}),
			UMAMI_ANALYTICS_HOST: envField.string({
				context: 'client',
				access: 'public',
				optional: true,
			}),
			UMAMI_ANALYTICS_ID: envField.string({
				context: 'client',
				access: 'public',
				optional: true,
			}),
			UMAMI_ANALYTICS_SCRIPT: envField.string({
				context: 'client',
				access: 'public',
				optional: true,
			}),
		},
	},
	experimental: {
		preserveScriptOrder: true,
	},
	image: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lastfm.freetls.fastly.net',
				pathname: '/i/u/**',
			},
		],
	},
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date(),
			namespaces: {
				image: false,
				news: false,
				video: false,
				xhtml: false,
			},
			serialize(item) {
				switch (item.url) {
					case `${site}/`:
						item.priority = 1.0
						break
					case `${site}/about/`:
					case `${site}/contact/`:
					case `${site}/work/`:
						item.priority = 0.9
						break
					case `${site}/ai/`:
						item.priority = 0.7
						break
					case `${site}/privacy-policy/`:
						item.priority = 0.6
						break
					default:
						item.priority = 0.8
						break
				}
				return item
			},
		}),
	],
	prefetch: {
		prefetchAll: true,
	},
	site,
	trailingSlash: 'always',
	vite: {
		build: {
			cssCodeSplit: false,
		},
	},
})
