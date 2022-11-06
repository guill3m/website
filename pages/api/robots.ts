import type { NextApiRequest, NextApiResponse } from 'next'

import siteMetadata from '../../lib/siteMetadata'

export default async function robots (
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { headers: { host } } = req

  res.setHeader('Content-Type', 'text/plain')

  if (host !== siteMetadata.host) {
    res.status(200).send(`User-agent: *
Disallow: /`)
  } else {
    res.status(200).send(`User-Agent: *
Disallow: /api/*`)
  }
}
