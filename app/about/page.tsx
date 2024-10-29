import type { Metadata, ResolvingMetadata } from 'next'

import Image from 'next/image'

import ExperienceList from '@/components/experience-list'

import styles from './page.module.scss'

import meKidJpg from '@guill3m/website-img/me-kid.jpg'

export async function generateMetadata(
  params: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentOpenGraph = (await parent).openGraph
  const title = 'About me - Guillem Andreu'
  const description =
    'Hi, my name is Guillem. I’m an experienced Tech Lead, Web Developer, and Designer. With a predilection for front-end web development and a people-first approach. Passionate about design and technology.'
  const url = '/about/'

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
      url,
    },
  }
}

export default function AboutPage() {
  return (
    <article className={styles.about}>
      <h1>About me.</h1>
      <section className={styles.intro} id="intro">
        <p>
          <Image
            alt="Me when I was a kid"
            placeholder="blur"
            priority
            sizes="(min-width: 1325px) 410px, (min-width: 830px) calc((100vw - 4rem) * 0.8 / 12 * 5 - 1rem), (min-width: 600px) calc((100vw - 4rem) * 0.8), calc(100vw - 4rem)"
            src={meKidJpg}
          />
        </p>
        <p>
          Hi, my name is Guillem. I’m a Tech Lead, Web Developer, and Designer.
          With a predilection for front-end web development and a people-first
          approach. Passionate about design and technology.
        </p>
      </section>
      <section>
        <h2 id="experience">Experience.</h2>
        <ExperienceList
          items={[
            {
              date: 'June 2019 to date',
              city: 'Hybrid, Berlin',
              description:
                'Over the years, my role and team at Ada constantly evolved. From working with and managing a multi-disciplinary team in Marketing, to a hands-on Engineering Manager in a product-focused team. Spearheaded the transformation of Ada’s website, overseeing a complete redesign, CMS overhaul, and framework migration that boosted end-user performance, efficiency, and usability. Facilitated cross-functional collaboration, aligning with stakeholders on tech initiatives and roadmap, driving organisational priorities, and ensuring team execution on high-impact projects. Led the recruitment and managed developers, designers, and SEO managers. Strengthening the team’s ability to consistently deliver results aligned with business priorities. Guided the team through multiple business changes and strategic pivots. Providing mentorship, resources, and support to foster individual growth and team success.',
              title: 'Team Lead, Web',
              url: 'https://ada.com',
              where: 'Ada Health',
            },
            {
              date: 'July 2018 to June 2019',
              description:
                'Joined Ada to bring the development of the company website in-house, a mix of a corporate website and an SEO-driven user-acquisition channel. Drove the development of the website, optimising for user acquisition. Collaborated closely with designers and copywriters to launch new components, landing pages, and languages. Contributed to the SEO strategy by improving site performance and enhancing discoverability.',
              city: 'On-site, Berlin',
              title: 'Web Developer',
              url: 'https://ada.com',
              where: 'Ada Health',
            },
            {
              date: 'June 2015 to June 2018',
              description:
                'Led the front-end development and UI design for a suite of web-based financial applications for multinational European corporations. With a focus on performance and user-friendliness. Expanded and improved the component library and design system, streamlining development processes and ensuring visual consistency across applications. Implemented the company’s brand refresh, from logo to stationary to website redesign.',
              city: 'On-site, Berlin',
              title: 'UI/UX Developer',
              url: 'https://universalunits.com',
              where: 'Universal Units',
            },
            {
              date: 'October 2013 to May 2015',
              description:
                'Designed and developed the user interface for a suite of web-based financial applications for multinational European corporations. With a focus on performance and user-friendliness. Started and led the development of a scalable design system that improved development efficiency and visual consistency across applications.',
              city: 'On-site, Berlin',
              title: 'UI/UX Developer',
              url: 'https://web.archive.org/web/20160817001617/http://www.netdudes.de/',
              where: 'netdudes',
            },
            {
              date: 'May 2011 to October 2013',
              description:
                'Worked with multiple clients on a diverse range of projects. Web design and development, book layout, iconography for signage, video editing, and posters. Continued to work with CuldeSac™️ on various projects for clients such as Havaianas, TAG Heuer and Nike, among others, as a freelance designer.',
              city: 'València',
              title: 'Freelance Graphic and Web Designer',
              titleUnion: '',
            },
            {
              date: 'April 2012 to April 2013',
              description:
                'Built the company websites of a reseller for three major network providers in Spain. Designed and developed SEO-optimised websites for multiple telecom brands, driving leads and improving search visibility through regular experiments and optimisation. Built a DSL comparison site that served as a critical marketing tool for the company, attracting new leads through targeted SEO strategies.',
              city: 'On-site, València',
              title: 'Web Designer and Developer',
              url: 'https://web.archive.org/web/20160129162203/http://www.ampservicios.com/',
              where: 'AMP Servicios',
            },
            {
              date: 'November 2010 to May 2011',
              description:
                'Joined the “Espacio Creativo” (Interior and Product Design) department of this design studio. Assisted on projects in editorial design, events and retail spaces graphics, and client presentations. Prepared artwork for print, ensuring the highest quality standards were met.',
              city: 'On-site, València',
              title: 'Graphic Design Internship',
              url: 'https://www.culdesac.es',
              where: 'CuldeSac™',
            },
          ]}
        />
      </section>
      <section>
        <h2 id="studies">Studies.</h2>
        <ExperienceList
          items={[
            {
              date: 'October 2006 to April 2011',
              title: 'Bachelor’s Degree in Graphic Design',
              titleUnion: 'at the',
              url: 'https://www.easdvalencia.com',
              where: 'EASD València',
            },
          ]}
        />
      </section>
      <section>
        <h2 id="courses">Courses.</h2>
        <ExperienceList
          items={[
            {
              city: '359 hours, in-person',
              date: 'June to October 2006',
              title: 'Web Design and Multimedia',
              titleUnion: '',
            },
          ]}
        />
      </section>
      <section>
        <h2 id="others">Others.</h2>
        <ExperienceList
          items={[
            {
              date: 'September 2010',
              city: 'València',
              description:
                'Supported the organisation of the Valencia Disseny Week, a week-long event consisting of design-related activities around various locations in Valencia city highlighting the work of Valencian designers. The event was organised by the Association of Designers of the Region of Valencia (ADCV).',
              title: 'Organisation Assistance',
              titleUnion: 'at the',
              url: 'https://www.valenciadissenyweek.com',
              where: 'Valencia Disseny Week',
            },
            {
              date: 'June 2010',
              city: 'València',
              description:
                'Supported the organisation of a conference composed of a mix of workshops, exhibitions, talks, and book presentations with national and international guests. The conference was organised by the ADCV and considered the most important event about typography and graphic design in Spain.',
              title: 'Organisation Assistance',
              titleUnion: 'at the',
              url: 'https://www.congresotipografia.com',
              where: '4th International Typography Congress',
            },
          ]}
        />
      </section>
    </article>
  )
}
