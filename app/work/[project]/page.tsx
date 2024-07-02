import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
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
  parent: ResolvingMetadata,
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

export default async function ProjectPage({ params }: Readonly<Props>) {
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

  const twoColumnsImages = project.imageColumns === 2

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
          <Image
            alt={image.alt}
            className={twoColumnsImages ? styles.twoCol : undefined}
            key={image.src}
            placeholder="blur"
            priority={idx === 0 || (twoColumnsImages && idx === 1)}
            sizes={
              twoColumnsImages
                ? '(min-width: 1325px) 640px, (min-width: 600px) calc((100vw - 5rem) / 2), calc(100vw - 4rem)'
                : '(min-width: 1325px) 1300px, calc(100vw - 4rem)'
            }
            src={require(`@guill3m/website-img${image.src}`)}
          />
        ))}
      </article>
    </>
  )
}
