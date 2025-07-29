import { describe, expect, test } from 'vitest'
import { renderAstroComponent } from '../helpers'

import Link from '../../src/components/link.astro'

describe('Link component', () => {
	describe('internal link', () => {
		test('default', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'Internal link',
				},
				props: {
					href: '/test/',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('Internal link')
			expect(linkElement).not.toHaveAttribute('target')
			expect(linkElement).not.toHaveAttribute('rel')
			expect(linkElement).toHaveAccessibleName('Internal link')
		})

		test('in a new tab', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'Internal link in new tab',
				},
				props: {
					href: '/test/',
					target: '_blank',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('Internal link in new tab')
			expect(linkElement).toHaveAttribute('target', '_blank')
			expect(linkElement).not.toHaveAttribute('rel')
			expect(linkElement).toHaveAccessibleName(
				'Internal link in new tab (opens in a new tab)',
			)
		})

		test('with rel', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'Internal link',
				},
				props: {
					href: '/test/',
					rel: 'nofollow',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('Internal link')
			expect(linkElement).not.toHaveAttribute('target')
			expect(linkElement).toHaveAttribute('rel', 'nofollow')
			expect(linkElement).toHaveAccessibleName('Internal link')
		})

		test('with additional attributes', async () => {
			const result = await renderAstroComponent(Link, {
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
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('Internal link')
			expect(linkElement).not.toHaveAttribute('target')
			expect(linkElement).not.toHaveAttribute('rel')
			expect(linkElement).toHaveAttribute('data-testid', 'test internal')
			expect(linkElement).toHaveAttribute('id', 'the-link')
			expect(linkElement).toHaveClass('link')
			expect(linkElement).toHaveAccessibleName('Internal link')
		})

		test('with HTML content', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: '<em>Internal</em> link',
				},
				props: {
					href: '/test/',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('Internal link')
			expect(linkElement).not.toHaveAttribute('target')
			expect(linkElement).not.toHaveAttribute('rel')
			expect(linkElement).toHaveAccessibleName('Internal link')
			expect(linkElement).toContainHTML('<em>Internal</em> link')
		})
	})

	describe('external link', () => {
		test('default', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'External link',
				},
				props: {
					href: 'https://www.test.com',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('External link')
			expect(linkElement).toHaveAttribute('target', '_blank')
			expect(linkElement).toHaveAttribute('rel', 'noopener')
			expect(linkElement).toHaveAccessibleName(
				'External link (opens in a new tab)',
			)
		})

		test('with rel', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'External link',
				},
				props: {
					href: 'https://www.test.com',
					rel: 'nofollow',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('External link')
			expect(linkElement).toHaveAttribute('target', '_blank')
			expect(linkElement).toHaveAttribute('rel', 'nofollow noopener')
			expect(linkElement).toHaveAccessibleName(
				'External link (opens in a new tab)',
			)
		})

		test('with additional attributes', async () => {
			const result = await renderAstroComponent(Link, {
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
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('External link')
			expect(linkElement).toHaveAttribute('target', '_blank')
			expect(linkElement).toHaveAttribute('rel', 'noopener')
			expect(linkElement).toHaveAttribute('data-testid', 'test external')
			expect(linkElement).toHaveAttribute('id', 'the-link')
			expect(linkElement).toHaveClass('link')
			expect(linkElement).toHaveAccessibleName(
				'External link (opens in a new tab)',
			)
		})

		test('with overwritten aria-label', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'External link',
				},
				props: {
					ariaLabel: 'Link that opens in a new tab',
					href: 'https://www.test.com',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('External link')
			expect(linkElement).toHaveAttribute('target', '_blank')
			expect(linkElement).toHaveAttribute('rel', 'noopener')
			expect(linkElement).toHaveAccessibleName('Link that opens in a new tab')
		})

		test('with HTML content', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: '<em>External</em> link',
				},
				props: {
					href: 'https://www.test.com',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLAnchorElement)
			expect(linkElement).toHaveTextContent('External link')
			expect(linkElement).toHaveAttribute('target', '_blank')
			expect(linkElement).toHaveAttribute('rel', 'noopener')
			expect(linkElement).toHaveAccessibleName(
				'External link (opens in a new tab)',
			)
			expect(linkElement).toContainHTML('<em>External</em> link')
		})
	})

	describe('without href', () => {
		test('default', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'Link without href',
				},
				props: {},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLSpanElement)
			expect(linkElement).toHaveTextContent('Link without href')
		})

		test('with additional attributes', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'Link without href',
				},
				props: {
					class: 'link',
					'data-testid': 'test non-href',
					id: 'the-link',
				},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLSpanElement)
			expect(linkElement).toHaveTextContent('Link without href')
			expect(linkElement).toHaveAttribute('data-testid', 'test non-href')
			expect(linkElement).toHaveAttribute('id', 'the-link')
			expect(linkElement).toHaveClass('link')
		})

		test('with HTML content', async () => {
			const result = await renderAstroComponent(Link, {
				slots: {
					default: 'Link <em>without href</em>',
				},
				props: {},
			})
			const linkElement = result.firstChild

			expect(result).toMatchSnapshot()

			expect(linkElement).toBeInstanceOf(HTMLSpanElement)
			expect(linkElement).toHaveTextContent('Link without href')
			expect(linkElement).toContainHTML('Link <em>without href</em>')
		})
	})
})
