// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: [
      { id: 1, name: 'Rafael' },
      { id: 2, name: 'Tonhão' },
    ]
  })
}
