import Head from "next/head";
import Layout from "components/Layout/Layout"
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ data }) {
    const [movies, setMovies] = useState(data)

    async function saveMovie(e) {
        e.preventDefault()
        setMovies([...movies, formData])
        const response = await fetch('/api/movies', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        
        return await response.json()
    }

    useEffect(() => {
        document.body.classList.add('page-movie')
        return () => {
            document.body.classList.remove('page-movie')
        }        
    }, [])

    return (
        <Layout>
            <Head>
                <title>Movie List</title>
            </Head>

            <div className="list-wrap">
                <div className="grid top">
                    <div>&nbsp;</div>
                    <div>
                        <Link href={`movieWrite`} role="button" class="contrast">
                            글작성
                        </Link>
                    </div>
                </div>

                <ul>
                    {movies
                    .sort((a, b) => a.id < b.id ? 1 : -1)
                    .map(item => (
                        <li key="item.id">
                            <Link href={`/movies/${item.slug}`} className="bod-container">
                                <div className="box-cont" aria-hidden="true">
                                    <span>{item.year}</span>
                                    <h4>{item.title}</h4>
                                    <time>{item.description}</time>
                                </div>
                                <div className="box-img">
                                    <div className="box-rel">
                                        <div className="box-abs">
                                            <div className="img-css">
                                                <img src="https://www.skhappiness.org/upload/board/20230307034947774.png" aria-hidden="true" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>    
        </Layout>
    )
}

export async function getServerSideProps() {

    const movies = await prisma.movie.findMany()

    return {
        props: {
            data: movies
        }
    }
    
}