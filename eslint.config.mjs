// @ts-check

import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			'.astro/*',
			'.vscode/*',
			'dist/*',
			'node_modules/*',
			'**/package-lock.json',
			'public/*',
		],
	},
	js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs['jsx-a11y-strict'],
]
