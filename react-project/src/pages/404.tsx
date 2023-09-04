import Link from 'next/link'
import Layout from "components/Layout/Layout"

const NotFound = () => {
    return(
    <Layout 
        pageMeta={{
            title: '404 에러',
    }}>
        <div className="text-center">
            <Link legacyBehavior href={"/"}>
                <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">
                    홈으로 돌아가기
                </a>
            </Link>
        </div>
    </Layout>
    )

}

export default NotFound