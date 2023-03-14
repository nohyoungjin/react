import Head from "next/head";
import Layout from "components/Layout/Layout"
import {useState} from 'react'
import Link from 'next/link'

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ data }) {
    const [formData, setFormData] = useState({})
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

    return (
        <Layout>
        <div>
            <Head>
                <title>Movie list</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
              <ul>
                    {movies.map(item => (
                        <li key="item.id" className="mt-2">
                            <span><strong>{item.title}</strong></span> &nbsp;
                            <span>{item.year}</span> &nbsp;
                            <span>{item.description}</span> <br />
                            <Link href={`/movies/${item.slug}`}>
                                상세보기
                            </Link>
                        </li>
                    ))}
                </ul>

                <form onSubmit={saveMovie}>
                    <input type="text" placeholder="Title" name="title" onChange={e => setFormData({ ...formData, title: e.target.value })}/>
                    <input type="text" placeholder="Year" name="year" onChange={e => setFormData({ ...formData, year: +e.target.value })} />
                    <textarea name="description" id="" cols="30" rows="10" placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
                    <input type="text" placeholder="Slug" name="slug" onChange={e => setFormData({ ...formData, slug: e.target.value })} />
                    <button type="submit">Add movie</button>
                </form>

            </main>
        </div>
        </Layout>
    );
}

export async function getServerSideProps() {

    const movies = await prisma.movie.findMany()

    return {
        props: {
            data: movies
        }
    }
}