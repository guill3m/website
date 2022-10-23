import { PrismicRichText } from '@prismicio/react'
import Head from 'next/head'

import styles from '../styles/pages/PrivacyPolicy.module.css'

export default function PrivacyPolicyPage () {
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
            text: 'This Privacy Policy document describes which information is collected, and how it is used when you visit https://www.guillemandreu.com (the “Site”).',
            spans: [
              {
                start: 105,
                end: 134,
                type: 'em',
              },
            ],
          },
          {
            type: 'heading2',
            text: 'Which information is collected.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'When you visit the Site:',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'No personal information is collected',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'No information such as cookies is stored in the browser',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'No information is shared with advertising companies',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'No information is monetized',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'The data collected includes: ',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'Top pages',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'Referral sources',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'Visit duration',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'Information from the devices used during the visit\n(device type, browser, operating system, country, region, and city)',
            spans: [],
          },
          {
            type: 'heading2',
            text: 'How do I use the information collected.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'The information collected (as described in the previous section) is used to help improve and optimise the Site, to find possible errors on the Site, or to mitigate and prevent malicious attacks on the Site.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'The information collected is not used for anything else than what is described in this Privacy Policy.',
            spans: [],
          },
          {
            type: 'heading2',
            text: 'Third-Party Services.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'To make the Site possible and available, there are third-party services being used:',
            spans: [],
          },
          {
            type: 'list-item',
            text: 'Vercel, to host and serve the website.',
            spans: [
              {
                start: 0,
                end: 6,
                type: 'strong',
              },
              {
                start: 0,
                end: 6,
                type: 'hyperlink',
                data: {
                  link_type: 'Web',
                  url: 'https://vercel.com',
                },
              },
            ],
          },
          {
            type: 'list-item',
            text: 'Plausible Analytics, to better understand how the Site is being used in order to improve it.',
            spans: [
              {
                start: 0,
                end: 19,
                type: 'strong',
              },
              {
                start: 0,
                end: 19,
                type: 'hyperlink',
                data: {
                  link_type: 'Web',
                  url: 'https://plausible.io',
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
            text: 'I may update this privacy policy from time to time in order to reflect changes to my practices or for other operational, legal or regulatory reasons.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'Last updated on October 23, 2022.',
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
