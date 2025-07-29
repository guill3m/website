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
				'**/pages/**/*.astro',
				...coverageConfigDefaults.exclude,
			],
			provider: 'v8',
			reporter: ['text', 'text-summary'],
		},
		projects: [
			{
				extends: true,
				test: {
					environment: 'happy-dom',
					include: ['tests/**/*.browser.test.{ts,js}'],
					name: 'browser',
					setupFiles: ['./tests/setup.browser.ts'],
				},
			},
			{
				extends: true,
				test: {
					environment: 'node',
					include: ['tests/**/*.node.test.{ts,js}'],
					name: 'node',
				},
			},
		],
	},
})
