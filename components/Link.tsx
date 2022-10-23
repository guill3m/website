import { ReactNode } from 'react'
import NextLink from 'next/link'

type LinkProps = {
  className?: string,
  children: ReactNode,
  href: string|null,
  target?: string,
}

export default function Link ({
  children,
  href,
  target,
  ...rest
}: LinkProps) {
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
