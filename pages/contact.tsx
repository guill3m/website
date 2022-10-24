import { PrismicRichText } from '@prismicio/react'

import Meta from '../components/Meta'

import styles from '../styles/pages/Contact.module.css'

export default function ContactPage () {
  return (
    <>
      <Meta
        title='Contact - Guillem Andreu'
        description='If you are interested in my work, here you can find out how to contact me.'
      />
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
