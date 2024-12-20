import type { ProjectThumbnail } from '../types/project'

import Image from 'next/image'

import Link from '@/components/link'

import styles from './project-thumbnail-list.module.scss'

type ProjectThumbnailListProps = {
  items: ProjectThumbnail[]
}

export default function ProjectThumbnailList({
  items,
}: Readonly<ProjectThumbnailListProps>) {
  return (
    <ul className={styles.list}>
      {items.map((project) => (
        <li key={project.path}>
          <article>
            <Link href={`/work/${project.path}/`}>
              <Image
                alt={project.thumbnail.alt}
                placeholder="blur"
                sizes="(min-width: 744px) calc((100vw - 4rem) / 3), calc(100vw - 4rem)"
                src={require(`@guill3m/website-img${project.thumbnail.src}`)}
              />
              <span>{project.title}</span>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
