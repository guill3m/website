'use client'

import styles from './not-found.module.css'

export default function Error() {
  return (
    <section className={styles.notfound}>
      <h1>Not found.</h1>
      <p>
        <strong>Error 404.</strong> This page does not exist.
      </p>
    </section>
  )
}
