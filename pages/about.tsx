// import { PrismicRichText } from '@prismicio/react'
import Head from 'next/head'

import siteMetadata from '../lib/siteMetadata'

import styles from '../styles/pages/About.module.css'

const AboutPage = () => {
  const metaTitle = 'About me - Guillem Andreu'
  const metaDescription = 'Hi, my name is Guillem and I’m a graphic designer from València (ES), currently living in Berlin (DE). I’m also a self-taught front-end web developer.'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
      </Head>
      <section className={styles.about}>
        <h1>About me.</h1>
        <section className={styles.intro}>
          <p>
            <img
              alt='Me when I was a kid'
              src={`${siteMetadata.cdnUrl}/img/website/me-kid.jpg`}
            />
          </p>
          <p>Hi, my name is Guillem and I’m a graphic designer from València (ES), currently living in Berlin (DE). I’m also a self-taught front end web developer. Passionate about design and technology.</p>
        </section>
      </section>
    </>
  )
}

export default AboutPage
