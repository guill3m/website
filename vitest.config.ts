/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config'
import node from '@astrojs/node'

export default getViteConfig(
	{
		test: {
			coverage: {
				enabled: true,
				include: ['src/**/*.astro', 'src/**/*.ts'],
				exclude: [
					'src/content.config.ts',
					'src/helpers/mdx-components.ts',
					'src/helpers/site-metadata.ts',
					'src/pages/**/*.astro',
				],
				reporter: ['text', 'text-summary'],
			},
		},
	},
	{
		// see https://github.com/withastro/astro/issues/15878
		adapter: node({ mode: 'standalone' }),
	},
)
