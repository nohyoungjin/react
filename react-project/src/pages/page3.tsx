import { useEffect } from "react"
import { useRouter } from "next/router"

import Head from 'next/head'
import Layout from 'components/Layout/Layout'

import posts from 'components/Json/posts.json'

const Posts = () => {
    const router = useRouter()
    const post = posts[router.query.id]
    if (!post) return (
        <Layout>
        <p className="text-center">데이터를 불러오지 못했습니다.</p>
        </Layout>
    )
    
    return (
    <>
    <Layout>
        <Head>
            <title>새로 만들어진 타이틀입니다.</title>
        </Head>
        <div>
            <h1>{post.title}</h1>
        </div>
    </Layout>
    </>
    )
}

export default Posts