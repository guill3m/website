import Head from 'next/head'
import { ReactNode } from 'react'

type MetaProps = {
  children?: ReactNode,
  description: string,
  title: string,
}

export default function Meta ({
  children,
  description,
  title,
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {children}
    </Head>
  )
}
