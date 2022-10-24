import Meta from '../../components/Meta'
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
  return (
    <>
      <Meta
        title='Work - Guillem Andreu'
        description='Here is a list of some of the projects I have done or I’m currently working on.'
      />
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
