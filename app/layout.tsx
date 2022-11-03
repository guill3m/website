import { ReactNode } from 'react'
import Script from 'next/script'

import Link from '../components/Link'
import siteMetadata from '../lib/siteMetadata'

import '../styles/font-face.css'
import '../styles/globals.css'
import styles from './layout.module.css'

type LayoutProps = {
  children: ReactNode,
}

export default function Layout ({ children }: LayoutProps) {
  const enableAnalytics = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  const year = (new Date()).getFullYear()

  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f68d2e' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={`@${siteMetadata.author.twitter}`} />
        <meta name='twitter:creator' content={`@${siteMetadata.author.twitter}`} />
        <meta name='twitter:dnt' content='on' />
        <meta name='pinterest' content='nopin' />
      </head>
      <body>
        {enableAnalytics && (
          <>
            <Script
              data-domain='guillemandreu.com'
              defer
              src='/stats.js'
            />
            <Script
              id='plausible-init'
              dangerouslySetInnerHTML={{
                __html: 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
              }}
            />
          </>
        )}
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
      </body>
    </html>
  )
}
