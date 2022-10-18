import React from 'react'

import Link from './Link'

import styles from '../styles/components/Layout.module.css'

interface LayoutInterface {
  children: React.ReactNode,
}

function Layout ({
  children,
}: LayoutInterface) {
  const year = (new Date()).getFullYear()

  return (
    <>
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          Guillem Andreu.
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href='/about/'>About me.</Link>
            </li>
            <li>
              <Link href='/work/'>My work.</Link>
            </li>
            <li>
              <Link href='/contact/'>Contact.</Link>
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
            Privacy policy.
          </Link>
        </p>
        <p>Designed and developed by me. Text set with <Link href='https://brandingwithtype.com/typefaces/bw-darius'>Bw Darius</Link> and <Link href='https://www.atipofoundry.com/fonts/geomanist'>Geomanist</Link>.</p>
      </footer>
    </>
  )
}

export default Layout
