import type { NextApiRequest, NextApiResponse } from 'next'

export default async function robots (
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { headers: { host } } = req

  res.setHeader('Content-Type', 'text/plain')

  if (host !== 'www.guillemandreu.com') {
    res.status(200).send(`User-agent: *
Disallow: /`)
  } else {
    res.status(200).send(`User-Agent: *
Disallow: /api/*`)
  }
}
