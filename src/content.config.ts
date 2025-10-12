import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const project = defineCollection({
	loader: glob({
		base: 'src/content/project',
		pattern: '*.mdx',
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			excerpt: z.string(),
			date: z.object({
				month: z.number().min(1).max(12),
				year: z.number().min(2000).max(new Date().getFullYear()),
			}),
			featured: z.boolean(),
			thumbnail: image(),
		}),
})

export const collections = {
	project,
}
