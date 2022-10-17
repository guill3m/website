import { ReactNode } from 'react'
import NextLink from 'next/link'
import { UrlObject } from 'url'

interface LinkInterface {
  children: ReactNode,
  href: UrlObject | string | undefined,
  target: string | undefined,
}

function Link ({
  children,
  href,
  target,
  ...rest
}: LinkInterface) {
  if (!href) {
    return (
      <span {...rest}>{children}</span>
    )
  }

  if (typeof href === 'string' && href.startsWith('https://')) {
    return (
      <a
        href={href}
        rel='noopener noreferrer nofollow'
        target={target || '_blank'}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} target={target} {...rest}>
      {children}
    </NextLink>
  )
}

export default Link
