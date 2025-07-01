import type { ComponentProps } from 'astro/types'
import {
	experimental_AstroContainer as AstroContainer,
	type ContainerRenderOptions,
} from 'astro/container'

type AstroComponentFactory = Parameters<AstroContainer['renderToString']>[0]

type ComponentContainerRenderOptions<C extends AstroComponentFactory> = Omit<
	ContainerRenderOptions,
	'props'
> & {
	// @ts-expect-error ComponentProps expects a type that extends a function of arity 1, but AstroComponentFactory is a function of arity 3
	props?: ComponentProps<C>
}

export async function renderAstroComponent<C extends AstroComponentFactory>(
	Component: C,
	options: ComponentContainerRenderOptions<C>,
) {
	const container = await AstroContainer.create()
	const result = await container.renderToString(Component, options)

	const template = document.createElement('template')
	template.innerHTML = result

	return template.content
}
