import { beforeEach, describe, expect, test } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'

import PageMetadata from '../../src/components/page-meta.astro'

type LocalTestContext = {
	container: AstroContainer
	request: Request
}

describe('Page Metadata component', () => {
	beforeEach<LocalTestContext>(async (context) => {
		context.container = await AstroContainer.create()
		context.request = new Request(`https://test.dev/example/`)
	})

	test<LocalTestContext>('minimal props', async ({ container, request }) => {
		const result = await container.renderToString(PageMetadata, {
			props: {
				title: 'Test page',
			},
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with non-localised alternate', async ({
		container,
		request,
	}) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with external non-localised alternate', async ({
		container,
		request,
	}) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with external non-localised alternate as URL object', async ({
		container,
		request,
	}) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with localised alternate', async ({
		container,
		request,
	}) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with default localised alternate', async ({
		container,
	}) => {
		const result = await container.renderToString(PageMetadata, {
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
	})

	test<LocalTestContext>('with overwritten title and description', async ({
		container,
		request,
	}) => {
		const result = await container.renderToString(PageMetadata, {
			props: {
				title: 'Test page',
				meta: {
					title: 'Meta title',
					description: 'Meta description',
				},
			},
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with OpenGraph properties', async ({
		container,
		request,
	}) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with overwritten title and description and OpenGraph properties', async ({
		container,
		request,
	}) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('with image', async ({ container, request }) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})

	test<LocalTestContext>('all props', async ({ container, request }) => {
		const result = await container.renderToString(PageMetadata, {
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
			request,
		})

		expect(result).toMatchSnapshot()
	})
})
