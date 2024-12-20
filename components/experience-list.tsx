import Link from '@/components/link'

import styles from './experience-list.module.scss'

type ExperienceListProps = {
  items: {
    city?: string
    date: string
    description?: string
    title: string
    titleUnion?: string
    url?: string
    where?: string
  }[]
}

export default function ExperienceList({
  items,
}: Readonly<ExperienceListProps>) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li className={styles.item} key={item.date}>
          <strong  className={styles.title}>
            <em>{item.title}</em>
            {item.titleUnion === undefined ? ' at ' : ` ${item.titleUnion} `}
            {item.where && (
              <em>
                {item.url ? (
                  <Link href={item.url}>{item.where}</Link>
                ) : (
                  item.where
                )}
              </em>
            )}
          </strong>
          <br />
          {item.description && (
            <>
              <span>{item.description}</span>
              <br />
            </>
          )}
          <em className={styles.date}>
            {item.city && `${item.city}, `}
            {item.date}.
          </em>
        </li>
      ))}
    </ul>
  )
}
