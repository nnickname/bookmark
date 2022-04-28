// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResType = {
  email: string
}

export default function ContactRoute(
  req: NextApiRequest,
  res: NextApiResponse<ResType>
) {
  res.status(200).json({ email: 'example' })
}
