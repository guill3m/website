import type { Metadata, ResolvingMetadata } from 'next'
import type { WebSite, WithContext } from 'schema-dts'

import Image from 'next/image'

import Link from '../components/link'
import ProjectThumbnailList from '../components/project-thumbnail-list'
import { getFeaturedProjectThumbnails } from '../lib/get-data'
import siteMetadata from '../lib/site-metadata'

import meSvg from '../public/me.svg'
import styles from './page.module.css'

const title = 'Guillem Andreu - Web Developer and Designer'
const description =
  'Hi. I’m Guillem, a web developer and designer based in Berlin. This is my Portfolio Website.'

export async function generateMetadata(
  params: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph
  const url = '/'

  return {
    alternates: {
      canonical: url,
    },
    title,
    description,
    openGraph: {
      locale: parentOpenGraph?.locale,
      siteName: parentOpenGraph?.siteName,
      title,
      type: 'website',
      description,
      url,
    },
  }
}

export default async function HomePage() {
  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    alternateName: 'Guillem Andreu’s Portfolio Website.',
    description,
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

  const featuredProjectThumbnails = await getFeaturedProjectThumbnails()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.about}>
        <Image alt="A drawn silouethe of myself" priority src={meSvg} />
        <p>
          <strong>Hi. I’m Guillem,</strong> a web developer and designer based
          in Berlin.
          <br />
          <Link href="/about/">More about me</Link>
        </p>
      </section>
      <section className={styles.work}>
        <p>
          Here are some of the <Link href="/work/">things I make</Link>:
        </p>
        <ProjectThumbnailList items={featuredProjectThumbnails} />
      </section>
    </>
  )
}
