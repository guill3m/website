import { PrismicRichText } from '@prismicio/react'
import Head from 'next/head'

import styles from '../styles/pages/Contact.module.css'

export default function ContactPage () {
  const metaTitle = 'Contact - Guillem Andreu'
  const metaDescription = 'If you are interested in my work, here you can find out how to contact me.'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
      </Head>
      <article className={styles.contact}>
        <h1>Contact.</h1>
        <PrismicRichText field={[
          {
            type: 'paragraph',
            text: 'If you are interested in my work, please contact me via contact@guillemandreu.com.',
            spans: [
              {
                start: 56,
                end: 81,
                type: 'hyperlink',
                data: {
                  link_type: 'Web',
                  url: 'mailto:contact@guillemandreu.com',
                },
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'I look forward to hearing from you.',
            spans: [],
          },
        ]}
        />
      </article>
    </>
  )
}
