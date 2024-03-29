// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {

    if (req.method === "POST") {

        const { id } = req.body
        const post = await prisma.movie.delete({
            where: {
                id,
            },
        })

        res.status(200).json(post)

    }

}
