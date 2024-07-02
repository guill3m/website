import type { Metadata, ResolvingMetadata } from 'next'

import RichText from '../../components/rich-text'

import styles from './page.module.css'

export async function generateMetadata(
  params: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph
  const title = 'Contact - Guillem Andreu'
  const description =
    'If you are interested in my work, here you can find out how to contact me.'
  const url = '/contact/'

  return {
    alternates: {
      canonical: url,
    },
    title,
    description,
    openGraph: {
      description,
      locale: parentOpenGraph?.locale,
      siteName: parentOpenGraph?.siteName,
      title,
      type: 'website',
      url,
    },
  }
}

export default function ContactPage() {
  return (
    <article className={styles.contact}>
      <h1>Contact.</h1>
      <RichText
        field={[
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
  )
}
