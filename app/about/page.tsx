import { Metadata } from 'next'
import { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface'

import ExperienceList from '../../components/ExperienceList'
import siteMetadata from '../../lib/siteMetadata'

import styles from './page.module.css'

export async function generateMetadata(
  params: any,
  parent: ResolvingMetadata
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
          <img
            alt="Me when I was a kid"
            src={`${siteMetadata.cdnUrl}/img/website/me-kid.jpg`}
          />
        </p>
        <p>
          Hi, my name is Guillem. I’m an Experienced Tech Lead, Web Developer,
          and Designer. With a predilection for front-end web development and a
          people-first approach. Passionate about design and technology.
        </p>
      </section>
      <section>
        <h2 id="experience">Experience.</h2>
        <ExperienceList
          items={[
            {
              date: 'Since June 2019',
              city: 'Hybrid, Berlin',
              description:
                'I align with different stakeholders in the organisation to plan and implement the teams’s roadmap and tech initiatives. I make sure the team has the knowledge, resources and support they need to grow and consistently deliver excellent work. I have guided the team through many changes on the website, including a redesign as well as CMS and framework migrations, with end-user performance and usability as the focus. I also led the hiring of Developers, Designers, and SEO Managers.',
              title: 'Team Lead, Website',
              url: 'https://ada.com',
              where: 'Ada Health',
            },
            {
              date: 'July 2018 to June 2019',
              description:
                'Worked on the development of the company website, a mix of a corporate website and an SEO-driven user-acquisition channel. I worked closely with designers and copywriters, and my first focus was on building capabilities on the site: new components, landing pages, and languages.',
              city: 'On-site, Berlin',
              title: 'Web Developer',
              url: 'https://ada.com',
              where: 'Ada Health',
            },
            {
              date: 'June 2015 to June 2018',
              description:
                'Led the front-end development and user interface design of web-based financial applications for multinational European corporations. With the aim of improving efficiency, I expanded and improved the component library and design system. I also implemented the company’s brand refresh.',
              city: 'On-site, Berlin',
              title: 'UI/UX Designer & Front-end Developer',
              url: 'https://universalunits.com',
              where: 'Universal Units',
            },
            {
              date: 'October 2013 to May 2015',
              description:
                'Front-end development and user interface design of a suite of web-based financial applications for multinational European corporations. Besides, I started and led the development of a design system, improving efficiency and consistency through the suite of applications.',
              city: 'On-site, Berlin',
              title: 'UI/UX Designer & Front-end Developer',
              url: 'https://web.archive.org/web/20160817001617/http://www.netdudes.de/',
              where: 'netdudes',
            },
            {
              date: 'May 2011 to October 2013',
              description:
                'Worked with multiple clients on web design and development, book design, signage iconography, video editing, and posters. Further, I continued to work with CuldeSac™️ on various projects as a freelancer after my internship.',
              city: 'València',
              title: 'Freelance Graphic and Web Designer',
              titleUnion: '',
            },
            {
              date: 'April 2012 to April 2013',
              description:
                'Designed and developed the company websites of a reseller for three network providers. I built marketing sites for each of the brands and a DSL-comparison site with a focus on SEO.',
              city: 'On-site, València',
              title: 'Web Designer and Developer',
              url: 'https://web.archive.org/web/20160129162203/http://www.ampservicios.com/',
              where: 'AMP Servicios',
            },
            {
              date: 'November 2010 to May 2011',
              description:
                'Worked on editorial design, graphics for events and retail spaces, client presentations, and artwork preparation for print in the “Espacio Creativo” (Interior and Product Design) department.',
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
