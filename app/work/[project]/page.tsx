import { notFound } from 'next/navigation'

import RichText from '../../../components/RichText'
import { getAllProjectPaths, getProject } from '../../../lib/getData'
import siteMetadata from '../../../lib/siteMetadata'

import styles from './page.module.css'

export const dynamicParams = false

export async function generateStaticParams () {
  const projectPaths = await getAllProjectPaths()

  return projectPaths.map((path) => ({
    project: path,
  }))
}

type PageProps = {
  params?: Partial<{
    project: string,
  }>,
}

export default async function ProjectPage ({
  params,
}: PageProps) {
  const project = params?.project ? await getProject(params.project) : null

  if (!project) {
    notFound()
    return null
  }

  return (
    <>
      <script type='application/ld+json'>
        {JSON.stringify({
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
        })}
      </script>
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
