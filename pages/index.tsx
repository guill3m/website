import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import siteMetadata from '../lib/siteMetadata'

import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  const metaTitle = 'Guillem Andreu - Designer and Web Developer'
  const metaDescription = 'Hi. I’m Guillem, a designer and web developer based in Berlin. This is my Portfolio Website.'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: metaTitle,
    alternativeName: 'Guillem Andreu’s Portfolio Website.',
    description: metaDescription,
    url: siteMetadata.url,
    author: {
      '@type': 'Person',
      name: siteMetadata.author.name,
      url: siteMetadata.url,
      sameAs: [
        `https://twitter.com/${siteMetadata.author.twitter}`,
        `https://www.linkedin.com/in/${siteMetadata.author.linkedin}`,
        `https://www.instagram.com/${siteMetadata.author.instagram}/`,
      ],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteMetadata.url,
    },
  }

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
        <script type='application/ld+json'>
          {JSON.stringify(schema)}
        </script>
      </Head>
      <section className={styles.about}>
        <img alt='A drawn silouethe of myself' src='https://assets.guillemandreu.com/img/website/me.svg' />
        <p>
          <strong>Hi. I’m Guillem,</strong> a designer and web developer based in Berlin.
          <br />
          <Link href='/about/'>More about me</Link>
        </p>
      </section>
      <section className={styles.work}>
        <p>Here are some of the <Link href='/work/'>things I make</Link>:</p>
      </section>
    </>
  )
}

export default Home
