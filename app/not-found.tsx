'use client'

import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <section className={styles['not-found']}>
      <h1>Not found.</h1>
      <p>
        <strong>Error 404.</strong> This page does not exist.
      </p>
    </section>
  )
}
