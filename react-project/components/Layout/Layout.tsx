import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useRouter } from 'next/router'

const Layout = ({ children, pageMeta }) => {

    const router = useRouter()

    const meta = {
        title: '테스트',
        ...pageMeta
    }

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta property="og:url" content={`http:localhost:3000${router.asPath}`} />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"></link>
                <link rel="" href="https://tailwindui.com/v2-assets/components.css"></link>
            </Head>

            <Header />

            <main className="container">
                {children}
            </main>

            <Footer />
        </>
    )

}

export default Layout