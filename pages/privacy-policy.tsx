import { PrismicRichText } from '@prismicio/react'
import Head from 'next/head'

import styles from '../styles/pages/PrivacyPolicy.module.css'

const PrivacyPolicyPage = () => {
  const metaTitle = 'Privacy Policy - Guillem Andreu'
  const metaDescription = 'This Privacy Policy describes how your personal information is collected and used when you visit https://www.guillemandreu.com.'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
      </Head>
      <article className={styles.privacyPolicy}>
        <h1>Privacy Policy.</h1>
        <PrismicRichText field={[
          {
            type: 'paragraph',
            text: 'This Privacy Policy document describes how your personal information is collected and used when you visit https://www.guillemandreu.com (the “Site”).',
            spans: [
              {
                start: 106,
                end: 135,
                type: 'em',
              },
            ],
          },
          {
            type: 'heading2',
            text: 'Personal Information collected.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'When you visit the Site, it automatically collects certain information about your device and your visit. This data is collected using the following technologies:',
            spans: [],
          },
          {
            type: 'list-item',
            text: '“Log files” track actions occurring on the Site, and collect data that may include your IP address, browser type and version, Internet service provider, referring/exit pages, and date/time stamps. This data is essential for the Site to function correctly and cannot be turned off.',
            spans: [],
          },
          {
            type: 'list-item',
            text: '“Cookies” are text files which the Site may put on your device during your visit. The cookie helps the website to recognize returning visits and preferences.',
            spans: [],
          },
          {
            type: 'heading2',
            text: 'How do I use your Personal Information?',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'The personal information collected (as described in the previous section) is used to help improve and optimise the Site, to find possible errors on the Site, or to mitigate and prevent malicious attacks on the Site.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'Your Personal Information is not, and will not be, used for anything else than what is described in the previous paragraph and how it is described in this privacy policy.',
            spans: [],
          },
          {
            type: 'heading2',
            text: 'Third-party Services.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'To make this website possible and available, there are third party services being used:',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'Vercel. Used to host the website, Privacy Policy.',
            spans: [
              {
                start: 0,
                end: 7,
                type: 'strong',
              },
              {
                start: 34,
                end: 49,
                type: 'hyperlink',
                data: {
                  link_type: 'Web',
                  url: 'https://vercel.com/legal/privacy-policy',
                },
              },
            ],
          },
          {
            type: 'heading2',
            text: 'Changes to this Privacy Policy.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'I may update this privacy policy from time to time in order to reflect, for example, changes to my practices or for other operational, legal or regulatory reasons.',
            spans: [],
          },
          {
            type: 'heading2',
            text: 'Contact.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'For more information about my privacy practices, if you have any questions, or if you would like to make a complaint; please contact me via e-mail at privacy@guillemandreu.com.',
            spans: [
              {
                start: 150,
                end: 175,
                type: 'hyperlink',
                data: {
                  link_type: 'Web',
                  url: 'mailto:privacy@guillemandreu.com',
                },
              },
            ],
          },
        ]}
        />
      </article>
    </>
  )
}

export default PrivacyPolicyPage
