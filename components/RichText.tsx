'use client'

import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import { RTTextNode } from '@prismicio/types'

import linkResolver from '../lib/linkResolver'
import Link from './Link'

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => (
    <Link href={linkResolver(node?.data)}>{children}</Link>
  ),
}

type RichTextProps = {
  field: [RTTextNode, ...RTTextNode[]]
}

export default function RichText ({
  field,
}: RichTextProps) {
  return (
    <PrismicRichText
      components={components}
      field={field}
    />
  )
}
