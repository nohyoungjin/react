import Layout from "components/Layout/Layout"
import Link from 'next/link'

import Router from 'next/router'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

        return Router.push('/movieList')
    }

    return (
        <Layout>
            <div className="bod-template">
                <div className="bod-head">
                    <span className="cat">{movie && movie.description}</span>
                    <h2 className="tit">{movie && movie.title}</h2>
                    <p><time className="css-qy">{movie && movie.year}</time></p>
                </div>
            </div>

            <div className="grid">
                <Link href={`/movieList`} role="button" className="secondary">
                    List 돌아가기
                </Link>      

                <Link href="javascript" role="button" className="contrast" onClick={() => handleDeleteData(movie.id)}>
                    삭제하기
                </Link> 
            </div>
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