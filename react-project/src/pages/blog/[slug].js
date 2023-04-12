import Layout from 'components/Layout/Layout'
import faunaQueries from 'lib/fauna'
import {useRouter} from 'next/router'

const Post = ({ 
    title= '', 
    content = '', 
    author = null, 
    published_at = '' 
}) => {
    const router = useRouter()

    const pageMeta = {
        type: 'article'
    }

    return (
        <Layout pageMets={pageMeta}>
            {
                router.isFallback ? (
                    <p className="text-center text-lg py-10">Loding ...</p>
                ) : (
            <article className="max-w-screen-lg mx-auto py-12 space-y-16">
                <header>
                    <h1 className="block max-w-screen-md mb-5 text-3xl w-full font-extrabold leading-tight">{title}</h1>
                    <div className="flex items-center space-x-2">
                        <img
                            src={author?.image}
                            className="w-16 h-16 rounded-full flex-shrink-0"
                        />
                        <div>
                            <p className="font-semibold">{author?.name}</p>
                            <p className="text-gray-500">{published_at}</p>
                        </div>
                    </div>
                </header>

                <main>
                    {content}
                </main>
            </article>
            )}
        </Layout>
    )
}

/* 사전 렌더링 경로 지정 */

export async function getStaticPaths() {
    let slugs = [], 
        cursor = null;

    do {
        const { data, after } = await faunaQueries.getAllSlugs({ after: cursor })
        slugs = [...slugs, ...data]
        cursor = after
    } while (cursor)

    return {
        paths: slugs.map(slug => ({
            params: {slug}
        })),
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    try {
        const data = await faunaQueries.getPostBySlug(params.slug)

        return {
            props: data,
            revalidate: 1, // in seconds
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}

export default Post