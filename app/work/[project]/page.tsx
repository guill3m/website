import { Metadata } from 'next'
import { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface'
import { notFound } from 'next/navigation'
import { Article, WithContext } from 'schema-dts'

import RichText from '../../../components/rich-text'
import { getAllProjectPaths, getProject } from '../../../lib/get-data'
import siteMetadata from '../../../lib/site-metadata'

import styles from './page.module.css'

type Props = {
  params: {
    project: string
  }
}

export const dynamicParams = false

export async function generateStaticParams() {
  const projectPaths = await getAllProjectPaths()

  return projectPaths.map((path) => ({
    project: path,
  }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph
  const project = await getProject(params.project)
  const url = `/work/${project.path}/`

  return {
    alternates: {
      canonical: url,
    },
    title: `${project.title} - Work - Guillem Andreu`,
    description: project.excerpt,
    openGraph: {
      images: [
        {
          alt: project.thumbnail.alt,
          url: `${siteMetadata.cdnUrl}${project.thumbnail.src}`,
        },
      ],
      locale: parentOpenGraph?.locale,
      siteName: parentOpenGraph?.siteName,
      title: `${project.title}: ${project.subtitle}`,
      type: 'article',
      url,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const project = params?.project ? await getProject(params.project) : null

  if (!project) {
    notFound()
  }

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Person',
      name: siteMetadata.author.name,
      url: siteMetadata.url,
      sameAs: [
        `https://twitter.com/${siteMetadata.author.twitter}`,
        `https://www.linkedin.com/in/${siteMetadata.author.linkedin}`,
        `https://www.instagram.com/${siteMetadata.author.instagram}/`,
      ],
    },
    url: `${siteMetadata.url}/${project.path}/`,
    image: {
      '@type': 'ImageObject',
      url: `${siteMetadata.cdnUrl}${project.thumbnail.src}`,
    },
    headline: `${project.title}: ${project.subtitle}`,
    description: project.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteMetadata.url,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.project}>
        <h1>{project.title}.</h1>
        <h2>{project.subtitle}.</h2>
        <RichText field={project.description} />
        {project.images.map((image, idx) => (
          <img
            alt={image.alt}
            className={project.imageColumns === 2 ? styles.twoCol : undefined}
            key={idx}
            src={`${siteMetadata.cdnUrl}${image.src}`}
          />
        ))}
      </article>
    </>
  )
}
