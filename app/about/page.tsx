import ExperienceList from '../../components/ExperienceList'
import siteMetadata from '../../lib/siteMetadata'

import styles from './page.module.css'

export default function AboutPage () {
  return (
    <article className={styles.about}>
      <h1>About me.</h1>
      <section className={styles.intro} id='intro'>
        <p>
          <img
            alt='Me when I was a kid'
            src={`${siteMetadata.cdnUrl}/img/website/me-kid.jpg`}
          />
        </p>
        <p>Hi, my name is Guillem and I’m a graphic designer from València (ES), currently living in Berlin (DE). I’m also a self-taught front end web developer. Passionate about design and technology.</p>
      </section>
      <section>
        <h2 id='experience'>Experience.</h2>
        <ExperienceList
          items={[
            {
              date: 'Since June 2019',
              city: 'Berlin',
              title: 'Team Lead, Website',
              url: 'https://ada.com',
              where: 'Ada Health',
            },
            {
              date: 'July 2018 to June 2019',
              city: 'Berlin',
              title: 'Web Developer',
              url: 'https://ada.com',
              where: 'Ada Health',
            },
            {
              date: 'June 2015 to June 2018',
              description: 'Previously “netdudes GmbH”. User interface design and front end development of web based financial applications for major european corporations, as well as implementation and standardisation of the company’s brand image and website.',
              city: 'Berlin',
              title: 'UI/UX Designer & Front-end Developer',
              url: 'https://universalunits.com',
              where: 'Universal Units',
            },
            {
              date: 'October 2013 to May 2015',
              description: 'Later “Universal Units GmbH”. User interface design and front end development of web based financial applications for major european corporations.',
              city: 'Berlin',
              title: 'UI/UX Designer & Front-end Developer',
              url: 'https://web.archive.org/web/20160817001617/http://www.netdudes.de/',
              where: 'netdudes',
            },
            {
              date: 'April 2012 to April 2013',
              description: 'In charge of the graphic and web design of the company. Mainly web design and development, as well as advertising banners and brand application through the various company websites and services.',
              city: 'València',
              title: 'Graphic Designer and Web Developer',
              url: 'https://web.archive.org/web/20160129162203/http://www.ampservicios.com/',
              where: 'AMP Servicios',
            },
            {
              date: 'May 2011 to October 2013',
              description: 'Worked with CuldeSac™ on some projects after my internship. And other Graphic Design work as freelancer: web design and development, editorial design, signage, video, posters.',
              city: 'València',
              title: 'Freelance Graphic and Web Designer',
              titleUnion: '',
              url: 'https://web.archive.org/web/20160129162203/http://www.ampservicios.com/',
            },
            {
              date: 'November 2010 to May 2011',
              description: 'Graphic Design internship in the “Espacio Creativo” (Interior and Product Design) department: editorial design, graphics for events and retail spaces, presentations, artwork preparation for print.',
              city: 'València',
              title: 'Graphic Design Internship',
              url: 'https://www.culdesac.es',
              where: 'CuldeSac™',
            },
          ]}
        />
      </section>
      <section>
        <h2 id='studies'>Studies.</h2>
        <ExperienceList
          items={[
            {
              date: 'Finished April 2011',
              city: 'València',
              title: 'Bachelor’s Degree on Graphic Design',
              titleUnion: 'at the',
              url: 'https://www.easdvalencia.com',
              where: 'EASD Valencia',
            },
          ]}
        />
      </section>
      <section>
        <h2 id='courses'>Courses.</h2>
        <ExperienceList
          items={[
            {
              date: 'June to October 2006',
              city: 'València',
              title: 'Web Design and Multimedia',
              titleUnion: '(359 hours)',
            },
          ]}
        />
      </section>
      <section>
        <h2 id='others'>Others.</h2>
        <ExperienceList
          items={[
            {
              date: 'September 2010',
              city: 'València',
              description: 'Event organised by the Association of Designers of the Region of Valencia (ADCV) consisting on several design-related activities carried out in Valencia city during a week coinciding with the Feria Hábitat Valencia Trade Fair.',
              title: 'Organisation Assistance',
              titleUnion: 'at the',
              url: 'https://www.valenciadissenyweek.com',
              where: 'Valencia Disseny Week',
            },
            {
              date: 'June 2010',
              city: 'València',
              description: 'Considered the most impotant event about typography and graphic design in Spain, it is composed of a mix of workshops, expositions, talks, book presentations… and organised by the ADCV.',
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
