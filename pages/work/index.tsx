import Head from 'next/head'

import { ProjectThumbnailInterface } from '../../types/Project'
import ProjectThumbnailList from '../../components/ProjectThumbnailList'
import { getAllProjectThumbnails } from '../../lib/getData'

interface WorkPageInterface {
  projects: ProjectThumbnailInterface[],
}

const WorkPage = ({
  projects,
} : WorkPageInterface) => {
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
      <section>
        <ProjectThumbnailList items={projects} />
      </section>
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

export default WorkPage
