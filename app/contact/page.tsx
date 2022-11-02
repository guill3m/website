import RichText from '../../components/RichText'

import styles from './page.module.css'

export default function ContactPage () {
  return (
    <article className={styles.contact}>
      <h1>Contact.</h1>
      <RichText field={[
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
