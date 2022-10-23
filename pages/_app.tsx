import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { JSXMapSerializer, PrismicProvider } from '@prismicio/react'

import Layout from '../components/Layout'
import Link from '../components/Link'
import linkResolver from '../lib/linkResolver'

import '../styles/font-face.css'
import '../styles/globals.css'
import siteMetadata from '../lib/siteMetadata'

const richTextComponents : JSXMapSerializer = {
  hyperlink: ({ node, children }) => (
    <Link href={linkResolver(node?.data)}>{children}</Link>
  ),
}

export default function App ({ Component, pageProps }: AppProps) {
  const enableAnalytics = process.env.NODE_ENV === 'production' && (!process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
        <title>Guillem Andreu</title>
      </Head>
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
      <PrismicProvider
        richTextComponents={richTextComponents}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismicProvider>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f68d2e' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={`@${siteMetadata.author.twitter}`} />
        <meta name='twitter:creator' content={`@${siteMetadata.author.twitter}`} />
        <meta name='twitter:dnt' content='on' />
        <meta name='pinterest' content='nopin' />
      </Head>
    </>
  )
}
