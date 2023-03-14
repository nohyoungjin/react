import Layout from "components/Layout/Layout"
import Link from 'next/link'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Movie({ movie }) {
    return (
        <Layout>
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
            </div>

            <Link href={`/page10`}>
                돌아가기
            </Link>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const {slug} = context.query

    const movie = await prisma.movie.findFirst({
        where: {
            slug: slug
        }
    })

    return {
        props: {
            movie
        }
    }
}