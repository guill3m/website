/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import { coverageConfigDefaults } from 'vitest/config'

export default getViteConfig({
	test: {
		coverage: {
			enabled: true,
			exclude: [
				'astro.config.mjs',
				'**/content/config.ts',
				...coverageConfigDefaults.exclude,
			],
			provider: 'v8',
			reporter: ['text', 'text-summary'],
		},
		environment: 'happy-dom',
		setupFiles: ['./tests/setup.ts'],
	},
})
