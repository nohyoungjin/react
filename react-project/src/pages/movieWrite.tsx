import Head from "next/head";
import Layout from "components/Layout/Layout"
import { useState, useEffect } from 'react'

import Router from 'next/router'
import Link from 'next/link'

import { PrismaClient } from '@prisma/client'

import dynamic from "next/dynamic"

const NoSsrWysiwyg = dynamic(()=> import('containers/Page/WysiwygEditor'), { ssr : false } ) 

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
        
        const json = await response.json()
        console.log(json)

        return Router.push('/movieList')
    }
    
    return (
        
        <Layout>
            <Head>
                <title>글 작성</title>
            </Head>

            {/* <ul>
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
                </ul> */}

            <div className="grid top">
                <div>&nbsp;</div>
                <div>
                    <Link href={`movieList`} role="button" className="contrast">
                        List 돌아가기
                    </Link>
                </div>
            </div>

            <form onSubmit={saveMovie}>
                <input 
                    // value={inputData.title}
                    id="subject"
                    type="text" 
                    placeholder="제목" 
                    name="title" 
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                />
                <input 
                    // value={inputData.year}
                    type="text" 
                    placeholder="년도" 
                    name="year" 
                    onChange={e => setFormData({ ...formData, year: +e.target.value })} 
                />
                <textarea 
                    name="description" 
                    id="" 
                    cols="30" 
                    rows="1" 
                    placeholder="설명" 
                    onChange={e => setFormData({ ...formData, description: e.target.value })} 
                />
                <input 
                    type="text" 
                    placeholder="Slug" 
                    name="slug" 
                    onChange={e => setFormData({ ...formData, slug: e.target.value })} 
                />
                <button type="submit">저장</button>
            </form>

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