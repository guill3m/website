import type { ReactNode } from 'react'

import NextLink from 'next/link'

import getTextLabelFromReactChildren from '@/helpers/get-text-label-from-react-children'

type LinkProps = {
  'aria-label'?: string
  className?: string
  children: ReactNode
  href: string | null
  target?: string
  title?: string
}

export default function Link({
  'aria-label': ariaLabel,
  children,
  href,
  target,
  ...rest
}: Readonly<LinkProps>) {
  if (!href) {
    return <span {...rest}>{children}</span>
  }

  if (typeof href === 'string' && href.startsWith('https://')) {
    let ariaLabelOpensInNewTab = undefined
    const linkTarget = target ?? '_blank'

    if (linkTarget === '_blank') {
      ariaLabelOpensInNewTab = `${getTextLabelFromReactChildren(children)} (opens in a new tab)`
    }

    return (
      <a
        aria-label={ariaLabel ?? ariaLabelOpensInNewTab}
        href={href}
        rel="noopener noreferrer"
        target={linkTarget}
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
