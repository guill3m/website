import { beforeEach, describe, expect, test } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'

import Link from '../../src/components/link.astro'

type LocalTestContext = {
	container: AstroContainer
}

describe('Link component', () => {
	beforeEach<LocalTestContext>(async (context) => {
		context.container = await AstroContainer.create()
	})

	describe('internal link', () => {
		test<LocalTestContext>('default', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'Internal link',
				},
				props: {
					href: '/test/',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('in a new tab', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'Internal link in new tab',
				},
				props: {
					href: '/test/',
					target: '_blank',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with rel', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'Internal link',
				},
				props: {
					href: '/test/',
					rel: 'nofollow',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with additional attributes', async ({
			container,
		}) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'Internal link',
				},
				props: {
					class: 'link',
					'data-testid': 'test internal',
					id: 'the-link',
					href: '/test/',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with HTML content', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: '<em>Internal</em> link',
				},
				props: {
					href: '/test/',
				},
			})

			expect(result).toMatchSnapshot()
		})
	})

	describe('external link', () => {
		test<LocalTestContext>('default', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'External link',
				},
				props: {
					href: 'https://www.test.com',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with rel', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'External link',
				},
				props: {
					href: 'https://www.test.com',
					rel: 'nofollow',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with additional attributes', async ({
			container,
		}) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'External link',
				},
				props: {
					class: 'link',
					'data-testid': 'test external',
					id: 'the-link',
					href: 'https://www.test.com',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with overwritten aria-label', async ({
			container,
		}) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'External link',
				},
				props: {
					ariaLabel: 'Link that opens in a new tab',
					href: 'https://www.test.com',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with HTML content', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: '<em>External</em> link',
				},
				props: {
					href: 'https://www.test.com',
				},
			})

			expect(result).toMatchSnapshot()
		})
	})

	describe('without href', () => {
		test<LocalTestContext>('default', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'Link without href',
				},
				props: {},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with additional attributes', async ({
			container,
		}) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'Link without href',
				},
				props: {
					class: 'link',
					'data-testid': 'test non-href',
					id: 'the-link',
				},
			})

			expect(result).toMatchSnapshot()
		})

		test<LocalTestContext>('with HTML content', async ({ container }) => {
			const result = await container.renderToString(Link, {
				slots: {
					default: 'Link <em>without href</em>',
				},
				props: {},
			})

			expect(result).toMatchSnapshot()
		})
	})
})
