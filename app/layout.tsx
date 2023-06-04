import { ReactNode } from 'react'
import Script from 'next/script'
import type { Metadata } from 'next'

import Link from '../components/Link'
import siteMetadata from '../lib/siteMetadata'

import '../styles/font-face.css'
import '../styles/globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  authors: {
    name: 'Guillem Andreu',
    url: siteMetadata.url,
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned.tab.svg',
        // color: '#f68d2e',
      },
    ],
  },
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    locale: 'en',
    siteName: 'Guillem Andreu',
  },
  other: {
    pinterest: 'nopin',
    'twitter:dnt': 'on',
  },
  themeColor: '#f68d2e',
  twitter: {
    creator: `@${siteMetadata.author.twitter}`,
    creatorId: '2672731',
  },
  viewport: {
    initialScale: 1,
    viewportFit: 'cover',
    width: 'device-width',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  const enableAnalytics =
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  const year = new Date().getFullYear()

  return (
    <html lang="en">
      <body>
        {enableAnalytics && (
          <>
            <Script data-domain="guillemandreu.com" defer src="/stats.js" />
            <Script
              id="plausible-init"
              dangerouslySetInnerHTML={{
                __html:
                  'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
              }}
            />
          </>
        )}
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            Guillem Andreu.
          </Link>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link href="/about/">About me.</Link>
              </li>
              <li>
                <Link href="/work/">My work.</Link>
              </li>
              <li>
                <Link href="/contact/">Contact.</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>
            <strong>© {year} Guillem Andreu Muñoz.</strong>{' '}
            <Link href="/privacy-policy/">Privacy policy.</Link>
          </p>
          <p>
            Designed and developed by me. Text set with{' '}
            <Link href="https://brandingwithtype.com/typefaces/bw-darius">
              Bw Darius
            </Link>{' '}
            and{' '}
            <Link href="https://www.atipofoundry.com/fonts/geomanist">
              Geomanist
            </Link>
            .
          </p>
        </footer>
      </body>
    </html>
  )
}
