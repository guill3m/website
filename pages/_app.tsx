import type { AppProps } from 'next/app'
import Head from 'next/head'
import { JSXMapSerializer, PrismicProvider } from '@prismicio/react'

import Layout from 'components/Layout'
import Link from 'components/Link'
import linkResolver from 'lib/linkResolver'

import 'styles/font-face.css'
import 'styles/globals.css'

const richTextComponents : JSXMapSerializer = {
  hyperlink: ({ node, children, ...rest }) => (
    <Link href={node?.data?.url} {...rest}>{children}</Link>
  ),
}

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
        <title>Guillem Andreu</title>
      </Head>
      <PrismicProvider
        linkResolver={linkResolver}
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
        <meta name='twitter:site' content='@guill3m' />
        <meta name='twitter:creator' content='@guill3m' />
        <meta name='twitter:dnt' content='on' />
        <meta name='pinterest' content='nopin' />
      </Head>
    </>
  )
}

export default MyApp
