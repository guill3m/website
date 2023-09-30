import {
  FilledLinkToDocumentField,
  FilledLinkToMediaField,
  FilledLinkToWebField,
} from '@prismicio/types'

import siteMetadata from './site-metadata'

export default function linkResolver(
  target:
    | FilledLinkToWebField
    | FilledLinkToDocumentField
    | FilledLinkToMediaField
): string | null {
  if (target.link_type !== 'Web') {
    return null
  }

  if (/^https?:\/\/(?:www.)?guillemandreu\.com/i.test(target.url)) {
    const urlObject = new URL(target.url, siteMetadata.url)
    target.url = urlObject.pathname + urlObject.search + urlObject.hash
  }

  return target.url
}
