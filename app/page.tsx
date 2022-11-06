import Link from '../components/Link'
import ProjectThumbnailList from '../components/ProjectThumbnailList'
import { getFeaturedProjectThumbnails } from '../lib/getData'
import siteMetadata from '../lib/siteMetadata'

import styles from './page.module.css'

export default async function HomePage () {
  const featuredProjectThumbnails = await getFeaturedProjectThumbnails()
  const title = 'Guillem Andreu - Designer and Web Developer'
  const description = 'Hi. I’m Guillem, a designer and web developer based in Berlin. This is my Portfolio Website.'

  return (
    <>
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: title,
          alternativeName: 'Guillem Andreu’s Portfolio Website.',
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
        })}
      </script>
      <section className={styles.about}>
        <img
          alt='A drawn silouethe of myself'
          src='/me.svg'
        />
        <p>
          <strong>Hi. I’m Guillem,</strong> a designer and web developer based in Berlin.
          <br />
          <Link href='/about/'>More about me</Link>
        </p>
      </section>
      <section className={styles.work}>
        <p>Here are some of the <Link href='/work/'>things I make</Link>:</p>
        <ProjectThumbnailList items={featuredProjectThumbnails} />
      </section>
    </>
  )
}
