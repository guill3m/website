// import Head from 'next/head'

import { PrismicRichText } from '@prismicio/react'
import Head from 'next/head'

import { getAllProjectPaths, getProject } from '../../lib/getData'
import siteMetadata from '../../lib/siteMetadata'
import ProjectInterface from '../../types/ProjectInterface'

import styles from '../../styles/pages/Project.module.css'

interface ProjectPageInterface {
  project: ProjectInterface,
}

const ProjectPage = ({
  project,
} : ProjectPageInterface) => {
  const metaTitle = `${project.title} - Work - Guillem Andreu`
  const schema = {
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
    url: `${siteMetadata.url}${project.path}`,
    image: {
      '@type': 'ImageObject',
      url: project.thumbnail.src,
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
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={project.excerpt} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={project.excerpt} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={`${siteMetadata.cdnUrl}${project.thumbnail.src}`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={`${siteMetadata.cdnUrl}${project.thumbnail.src}`} />
        <script type='application/ld+json'>
          {JSON.stringify(schema)}
        </script>
      </Head>
      <article className={styles.project}>
        <h1>{project.title}.</h1>
        <h2>{project.subtitle}.</h2>
        <PrismicRichText field={project.description}/>
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

export const getStaticPaths = async () => {
  const projectPaths = await getAllProjectPaths()
  const paths = projectPaths.map((path) => {
    return {
      params: {
        path,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps ({ params } : { params : { path: string }}) {
  const project = await getProject(params.path)

  return {
    props: {
      project,
    },
  }
}

export default ProjectPage
