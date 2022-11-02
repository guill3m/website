import ProjectThumbnailList from '../../components/ProjectThumbnailList'
import { getAllProjectThumbnails } from '../../lib/getData'

import styles from './page.module.css'

export default async function WorkPage () {
  const projectThumbnails = await getAllProjectThumbnails()

  return (
    <article className={styles.work}>
      <h1>My work.</h1>
      <ProjectThumbnailList items={projectThumbnails} />
    </article>
  )
}
