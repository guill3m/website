import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'

import Script from 'next/script'

import Link from '@/components/link'
import siteMetadata from '@/helpers/site-metadata'
import { fontSourceSans, fontBwDarius } from '@/styles/fonts'

import '@/styles/globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  authors: {
    name: 'Guillem Andreu',
    url: siteMetadata.url,
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
  twitter: {
    creator: `@${siteMetadata.author.twitter}`,
    creatorId: '2672731',
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: '#f68d2e',
  viewportFit: 'cover',
  width: 'device-width',
}

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const year = new Date().getFullYear()

  return (
    <html
      lang="en"
      className={[fontSourceSans.variable, fontBwDarius.variable].join(' ')}
    >
      <body>
        <Script
          data-domains={siteMetadata.host}
          data-host-url="https://stats.guill3m.me"
          data-website-id="536f1a13-2add-4a8d-86d9-ea58f657799b"
          defer
          src="/stats.js"
          strategy="afterInteractive"
        />
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
            <strong>© {year} Guillem Andreu Muñoz.</strong> Made in Berlin.{' '}
            <Link href="/privacy-policy/">Privacy policy.</Link>
          </p>
        </footer>
      </body>
    </html>
  )
}
