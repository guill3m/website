/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
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
			// provider: 'v8',
			reporter: ['text', 'text-summary'],
		},
	},
})
