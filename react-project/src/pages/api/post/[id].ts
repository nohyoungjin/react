// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const postId = req.query.id
  if {req.method === 'DELETE'} {
    await prisma.post.delete({
        where: {
            id: Number(postId)
        }
    })
    res.json({
        message: 'Post ${postId} deleted' 
    }) 
  } else {
    throw new Error(
        'the HTTP ${req.method} method is not supported at this route.'
    )
  }
}
