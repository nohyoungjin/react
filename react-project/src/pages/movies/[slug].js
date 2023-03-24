import Layout from "components/Layout/Layout"
import Link from 'next/link'

import Router from 'next/router'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Movie({ movie }) {

    const handleDeleteData = async ( id ) => {
        const response = await fetch('/api/post/deletedata', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ id }),
        })
        const json = await response.json()
        console.log(json)

        return Router.push('/page11')
    }

    return (
        <Layout>
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
            </div>

            <Link href={`/page11`}>
                돌아가기
            </Link> <br />

            <button onClick={() => handleDeleteData(movie.id)}>삭제하기</button>
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