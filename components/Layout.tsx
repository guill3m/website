import Link from 'next/link'
import React from 'react'

import styles from '../styles/Layout.module.css'

interface LayoutProps {
  children: React.ReactNode,
}

function Layout ({
  children,
}: LayoutProps) {
  const year = (new Date()).getFullYear()

  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <a className={styles.logo}>Guillem Andreu.</a>
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href='/about/'>
                <a>About me.</a>
              </Link>
            </li>
            <li>
              <Link href='/work/'>
                <a>My work.</a>
              </Link>
            </li>
            <li>
              <Link href='/contact/'>
                <a>Contact.</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>
          <strong>© {year} Guillem Andreu Muñoz.</strong>
          {' '}
          <Link href='/privacy-policy/'>
            <a>Privacy policy.</a>
          </Link>
        </p>
        <p>Designed and developed by me. Text set with <a href='https://brandingwithtype.com/typefaces/bw-darius' target='_blank' rel='noopener noreferrer nofollow'>Bw Darius</a> and <a href='https://www.atipofoundry.com/fonts/geomanist' target='_blank' rel='noopener noreferrer nofollow'>Geomanist</a>.</p>
      </footer>
    </>
  )
}

export default Layout
