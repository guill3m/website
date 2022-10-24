import Head from 'next/head'

import ProjectThumbnailList from '../../components/ProjectThumbnailList'
import { getAllProjectThumbnails } from '../../lib/getData'
import { ProjectThumbnail } from '../../types/Project'

import styles from '../../styles/pages/Work.module.css'

type WorkPageProps = {
  projects: ProjectThumbnail[],
}

export default function WorkPage ({
  projects,
} : WorkPageProps) {
  const metaTitle = 'Work - Guillem Andreu'
  const metaDescription = 'Here is a list of some of the projects I have done or I’m currently working on.'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
      </Head>
      <article className={styles.work}>
        <h1>My work.</h1>
        <ProjectThumbnailList items={projects} />
      </article>
    </>
  )
}

export async function getStaticProps () {
  const projects = await getAllProjectThumbnails()

  return {
    props: {
      projects,
    },
  }
}
