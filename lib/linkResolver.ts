import { FilledLinkToDocumentField, FilledLinkToMediaField, FilledLinkToWebField } from '@prismicio/types'

export default function linkResolver (target: FilledLinkToWebField|FilledLinkToDocumentField|FilledLinkToMediaField): string|null {
  if (target.link_type !== 'Web') {
    return null
  }

  if (/^https?:\/\/(?:www.)?guillemandreu\.com/i.test(target.url)) {
    const urlObject = new URL(target.url, 'https://www.guillemandreu.com')
    target.url = urlObject.pathname + urlObject.search + urlObject.hash
  }

  return target.url
}
