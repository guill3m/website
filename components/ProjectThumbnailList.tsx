import Link from 'next/link'

import { ProjectThumbnailInterface } from '../types/Project'

import styles from '../styles/components/ProjectThumbnailList.module.css'

export interface ProjectThumbnailListInterface {
  items: ProjectThumbnailInterface[],
}

function ProjectThumbnailList ({
  items,
}: ProjectThumbnailListInterface) {
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
              <span>
                {project.title}
              </span>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default ProjectThumbnailList
