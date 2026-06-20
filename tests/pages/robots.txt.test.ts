import { describe, expect, test } from 'vitest'
import { getRobotsTxt } from '../../src/pages/robots.txt'

describe('robots.txt', () => {
	test('with exclusions', () => {
		const robotsString = getRobotsTxt(
			new URL('sitemap-index.xml', 'https://www.test.com'),
			['AiBot', 'BadBot'],
		)

		expect(robotsString).toMatchSnapshot()
		expect(robotsString).toContain(
			'User-Agent: AiBot\nUser-Agent: BadBot\nDisallow: /',
		)
		expect(robotsString).toContain(
			'Sitemap: https://www.test.com/sitemap-index.xml',
		)
	})

	test('without exclusions', () => {
		const robotsString = getRobotsTxt(
			new URL('sitemap-index.xml', 'https://www.test.com'),
			[],
		)

		expect(robotsString).toMatchSnapshot()
		expect(robotsString).not.toContain('Disallow: /')
		expect(robotsString).toContain(
			'Sitemap: https://www.test.com/sitemap-index.xml',
		)
	})
})
