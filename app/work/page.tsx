import type { Metadata } from 'next'
import { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface'

import ProjectThumbnailList from '../../components/ProjectThumbnailList'
import { getAllProjectThumbnails } from '../../lib/getData'

import styles from './page.module.css'

export async function generateMetadata (
  params: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph
  const title = 'Work - Guillem Andreu'
  const description = 'Here is a list of some of the projects I have done or I’m currently working on.'
  const url = '/work/'

  return {
    alternates: {
      canonical: url,
    },
    title,
    description,
    openGraph: {
      description,
      locale: parentOpenGraph?.locale,
      siteName: parentOpenGraph?.siteName,
      title,
      type: 'website',
      url,
    },
  }
}

export default async function WorkPage () {
  const projectThumbnails = await getAllProjectThumbnails()

  return (
    <article className={styles.work}>
      <h1>My work.</h1>
      <ProjectThumbnailList items={projectThumbnails} />
    </article>
  )
}
