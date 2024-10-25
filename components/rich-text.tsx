import type { JSXMapSerializer } from '@prismicio/react'
import type { RTTextNode } from '@prismicio/types'

import { PrismicRichText } from '@prismicio/react'

import linkResolver from '@/helpers/link-resolver'
import Link from '@/components/link'

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => (
    <Link href={linkResolver(node?.data)}>{children}</Link>
  ),
  label: ({ node, children }) => {
    if (node.data.label === 'small') {
      return <small>{children}</small>
    }
    return <span>{children}</span>
  },
}

type RichTextProps = {
  field: [RTTextNode, ...RTTextNode[]]
}

export default function RichText({ field }: Readonly<RichTextProps>) {
  return <PrismicRichText components={components} field={field} />
}
