// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
    'Hi there! If you found this page then you are probably a developer familiar with nextjs, or someone who scanned our website for some reason, or in the rarest case you maybe just typed random bs into your browser and this is what you got. Either way, congratulation on finding absolutely nothing other than this text!')
}
