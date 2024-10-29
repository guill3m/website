import type { Metadata, ResolvingMetadata } from 'next'

import RichText from '@/components/rich-text'

import styles from './page.module.scss'
import Link from '@/components/link'
import SocialIcon from '@/components/social-icon'

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
            text: 'Or find me on:',
            spans: [],
          },
        ]}
      />
      <ul>
        <li>
          <Link href="https://bsky.app/profile/guill3m.me">
            <SocialIcon platform="bluesky" /> Bluesky
          </Link>
        </li>
        <li>
          <Link href="https://github.com/guill3m">
            <SocialIcon platform="github" /> GitHub
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/guill3m/">
            <SocialIcon platform="instagram" /> Instagram
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/guillemandreu/">
            <SocialIcon platform="linkedin" /> LinkedIn
          </Link>
        </li>
      </ul>
    </article>
  )
}
