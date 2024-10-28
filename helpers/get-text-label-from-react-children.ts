import { Children, type ReactNode } from 'react'

export default function getTextLabelFromReactChildren(
  children: ReactNode | ReactNode[],
): string {
  let label = ''

  Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += child
    }
  })

  return label.trim()
}
