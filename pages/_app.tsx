import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/font-face.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
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
