import { describe, expect, test } from 'vitest'
import { renderAstroComponent } from '../helpers'

import PageMetadata from '../../src/components/page-meta.astro'

describe('Page Metadata component', () => {
	test('minimal props', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		expect(result.querySelector('title')).toHaveTextContent(
			/^Test page - Guillem Andreu$/,
		)
		expect(result.querySelector('meta[property=og:title]')).toHaveAttribute(
			'content',
			'Test page - Guillem Andreu',
		)
		expect(result.querySelector('link[rel=canonical]')).toHaveAttribute(
			'href',
			'https://test.dev/example/',
		)
		expect(result.querySelector('meta[property=og:type]')).toHaveAttribute(
			'content',
			'website',
		)
	})

	test('with non-localised alternate', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					alternates: [
						{
							href: '/example-alt/',
						},
					],
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		const alternates = result.querySelectorAll('link[rel=alternate]')
		expect(alternates).toHaveLength(1)
		expect(alternates[0]).toHaveAttribute(
			'href',
			'https://test.dev/example-alt/',
		)
		expect(alternates[0]).not.toHaveAttribute('hreflang')
	})

	test('with external non-localised alternate', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					alternates: [
						{
							href: 'https://test-alt.dev/example/',
						},
					],
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		const alternates = result.querySelectorAll('link[rel=alternate]')
		expect(alternates).toHaveLength(1)
		expect(alternates[0]).toHaveAttribute(
			'href',
			'https://test-alt.dev/example/',
		)
		expect(alternates[0]).not.toHaveAttribute('hreflang')
	})

	test('with external non-localised alternate as URL object', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					alternates: [
						{
							href: new URL('/example/', 'https://test-alt.dev'),
						},
					],
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		const alternates = result.querySelectorAll('link[rel=alternate]')
		expect(alternates).toHaveLength(1)
		expect(alternates[0]).toHaveAttribute(
			'href',
			'https://test-alt.dev/example/',
		)
		expect(alternates[0]).not.toHaveAttribute('hreflang')
	})

	test('with localised alternate', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					alternates: [
						{
							href: '/de/example/',
							lang: 'de',
						},
					],
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		const alternates = result.querySelectorAll('link[rel=alternate]')
		expect(alternates).toHaveLength(3)
		expect(alternates[0]).toHaveAttribute('href', 'https://test.dev/example/')
		expect(alternates[0]).toHaveAttribute('hreflang', 'x-default')
		expect(alternates[1]).toHaveAttribute('href', 'https://test.dev/example/')
		expect(alternates[1]).toHaveAttribute('hreflang', 'en')
		expect(alternates[2]).toHaveAttribute(
			'href',
			'https://test.dev/de/example/',
		)
		expect(alternates[2]).toHaveAttribute('hreflang', 'de')
	})

	test('with default localised alternate', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					alternates: [
						{
							isDefault: true,
							href: '/example/',
							lang: 'en',
						},
						{
							href: '/es/example/',
							lang: 'es',
						},
					],
				},
				lang: 'de',
			},
			request: new Request(`https://test.dev/de/example/`),
		})

		expect(result).toMatchSnapshot()

		const alternates = result.querySelectorAll('link[rel=alternate]')
		expect(alternates).toHaveLength(4)
		expect(alternates[0]).toHaveAttribute('href', 'https://test.dev/example/')
		expect(alternates[0]).toHaveAttribute('hreflang', 'x-default')
		expect(alternates[1]).toHaveAttribute(
			'href',
			'https://test.dev/de/example/',
		)
		expect(alternates[1]).toHaveAttribute('hreflang', 'de')
		expect(alternates[2]).toHaveAttribute('href', 'https://test.dev/example/')
		expect(alternates[2]).toHaveAttribute('hreflang', 'en')
		expect(alternates[3]).toHaveAttribute(
			'href',
			'https://test.dev/es/example/',
		)
		expect(alternates[3]).toHaveAttribute('hreflang', 'es')
	})

	test('with overwritten title and description', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					title: 'Meta title',
					description: 'Meta description',
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		expect(result.querySelector('title')).toHaveTextContent(/^Meta title$/)
		expect(result.querySelector('meta[property=og:title]')).toHaveAttribute(
			'content',
			'Meta title',
		)
		expect(result.querySelector('meta[name=description]')).toHaveAttribute(
			'content',
			'Meta description',
		)
		expect(
			result.querySelector('meta[property=og:description]'),
		).toHaveAttribute('content', 'Meta description')
	})

	test('with OpenGraph properties', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					openGraph: {
						type: 'article',
						title: 'OpenGraph title',
						description: 'OpenGraph description',
					},
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		expect(result.querySelector('meta[property=og:type]')).toHaveAttribute(
			'content',
			'article',
		)
		expect(result.querySelector('title')).toHaveTextContent(
			/^Test page - Guillem Andreu$/,
		)
		expect(result.querySelector('meta[property=og:title]')).toHaveAttribute(
			'content',
			'OpenGraph title',
		)
		expect(
			result.querySelector('meta[property=og:description]'),
		).toHaveAttribute('content', 'OpenGraph description')
	})

	test('with overwritten title and description and OpenGraph properties', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					title: 'Meta title',
					description: 'Meta description',
					openGraph: {
						type: 'article',
						title: 'OpenGraph title',
						description: 'OpenGraph description',
					},
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		expect(result.querySelector('meta[property=og:type]')).toHaveAttribute(
			'content',
			'article',
		)
		expect(result.querySelector('title')).toHaveTextContent(/^Meta title$/)
		expect(result.querySelector('meta[property=og:title]')).toHaveAttribute(
			'content',
			'OpenGraph title',
		)
		expect(result.querySelector('meta[name=description]')).toHaveAttribute(
			'content',
			'Meta description',
		)
		expect(
			result.querySelector('meta[property=og:description]'),
		).toHaveAttribute('content', 'OpenGraph description')
	})

	test('with image', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					image: {
						alt: 'Alt text',
						src: '/assets/page-thumbnail.png',
						height: 300,
						width: 900,
					},
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()

		expect(result.querySelector('meta[property=og:image]')).toHaveAttribute(
			'content',
			'https://test.dev/assets/page-thumbnail.png',
		)
		expect(result.querySelector('meta[property=og:image:alt]')).toHaveAttribute(
			'content',
			'Alt text',
		)
		expect(
			result.querySelector('meta[property=og:image:height]'),
		).toHaveAttribute('content', '300')
		expect(
			result.querySelector('meta[property=og:image:width]'),
		).toHaveAttribute('content', '900')
	})

	test('all props', async () => {
		const result = await renderAstroComponent(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					canonical: new URL('https://production.dev/example/'),
					title: 'Meta title',
					description: 'Meta description',
					alternates: [
						{
							href: '/example-alt/',
						},
					],
					image: {
						alt: 'Alt text',
						src: '/assets/page-thumbnail.png',
						height: 300,
						width: 900,
					},
					openGraph: {
						type: 'article',
						title: 'OpenGraph title',
						description: 'OpenGraph description',
					},
				},
			},
			request: new Request(`https://test.dev/example/`),
		})

		expect(result).toMatchSnapshot()
	})
})
