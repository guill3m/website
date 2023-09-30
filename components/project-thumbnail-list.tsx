import Link from './link'
import { ProjectThumbnail } from '../types/project'

import styles from './project-thumbnail-list.module.css'

type ProjectThumbnailListProps = {
  items: ProjectThumbnail[]
}

export default function ProjectThumbnailList({
  items,
}: ProjectThumbnailListProps) {
  return (
    <ul className={styles.list}>
      {items.map((project) => (
        <li key={project.path}>
          <article>
            <Link href={`/work/${project.path}/`}>
              <img
                alt={project.thumbnail.alt}
                src={`https://assets.guillemandreu.com${project.thumbnail.src}`}
              />
              <span>{project.title}</span>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
