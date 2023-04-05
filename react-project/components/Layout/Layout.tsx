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
        </Head>
        <div className="min-h-screen flex flex-col justify-center">
            <Header />

            <main className="flex-grow container mx-auto px-4 sm:px-6">
                {children}
            </main>

            <Footer />
        </div>
        </>
    )

}

export default Layout