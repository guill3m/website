import { ReactNode } from 'react'
import NextLink from 'next/link'
import { UrlObject } from 'url'

interface LinkInterface {
  children: ReactNode,
  href: UrlObject | string | undefined,
}

function Link ({
  children,
  href,
  ...rest
}: LinkInterface) {
  if (!href) {
    return (
      <span {...rest}>{children}</span>
    )
  }

  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  )
}

export default Link
