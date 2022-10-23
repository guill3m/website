import Link from './Link'

import styles from '../styles/components/ExperienceList.module.css'

type ExperienceListProps = {
  items: {
    city?: string,
    date: string,
    description?: string,
    title: string,
    titleUnion?: string,
    url?: string,
    where?: string,
  }[],
}

export default function ExperienceList ({
  items,
}: ExperienceListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item, idx) => (
        <li className={styles.item} key={idx}>
          <strong>
            <em>{item.title}</em>
            {item.titleUnion === undefined ? ' at ' : ` ${item.titleUnion} `}
            {item.where && (
              <em>
                {item.url
                  ? (
                    <Link href={item.url}>
                      {item.where}
                    </Link>
                    )
                  : item.where}
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
          <em>
            {item.city && `${item.city}, `}
            {item.date}.
          </em>
        </li>
      ))}
    </ul>
  )
}
