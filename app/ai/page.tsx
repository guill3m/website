import type { Metadata, ResolvingMetadata } from 'next'

import RichText from '@/components/rich-text'

import styles from './page.module.scss'

export async function generateMetadata(
  params: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph
  const title = 'AI Usage - Guillem'
  const description =
    'This page describes how how and when I use AI on this site.'
  const url = '/ai/'

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

export default function AIUsagePage() {
  return (
    <article className={styles.ai}>
      <h1>AI (non)usage.</h1>
      <RichText
        field={[
          {
            type: 'paragraph',
            text: 'Everything on this website (text, images, code) is personally made by me, not using generative AI.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'I believe AI and LLMs can be valuable tools and I occasionally use them for research and experimentation. However, this site and anything I publish under my name on social networks, other sites, or newsletters is purposely AI-free. I enjoy the creative process and I don’t want to offload this process to a machine.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'If any of this changes in the future, I’ll update this page to reflect it.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'Last updated on October 25, 2024.',
            spans: [
              {
                start: 0,
                end: 33,
                type: 'em',
              },
            ],
          },
        ]}
      />
      <hr />
      <RichText
        field={[
          {
            type: 'paragraph',
            text: 'If you would like to know why I made this page, check The ‘/ai’ manifesto by Damola Morenikeji.',
            spans: [
              {
                start: 0,
                end: 95,
                type: 'label',
                data: {
                  label: 'small',
                },
              },
              {
                start: 54,
                end: 94,
                type: 'hyperlink',
                data: {
                  link_type: 'Web',
                  url: 'https://www.bydamo.la/p/ai-manifesto',
                },
              },
            ],
          },
        ]}
      />
    </article>
  )
}
