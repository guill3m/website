import { NextPageContext } from 'next'
import NextError, { ErrorProps } from 'next/error'

import '../styles/font-face.css'
import '../styles/globals.css'
import '../styles/error.css'

export default function ErrorPage ({ statusCode }: ErrorProps) {
  return (
    <NextError statusCode={statusCode} withDarkMode={false} />
  )
}

ErrorPage.getInitialProps = async (contextData: NextPageContext) => {
  return NextError.getInitialProps(contextData)
}
