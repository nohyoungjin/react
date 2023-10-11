import Link from 'next/link'
import Layout from 'components/Layout/Layout'

import { useEffect } from 'react'

const NotFound = () => {

    useEffect(() => {
        document.body.classList.add('page-404')
        return () => {
            document.body.classList.remove('page-404')
        }        
    }, [])

    return(
        <Layout 
            pageMeta={{
                title: '404 에러',
        }}>
            <h1>
                404 Error <br />
            </h1>

            <Link legacyBehavior href={"/"}>
                <a role="button">
                    홈으로 돌아가기
                </a>
            </Link>
        </Layout>
    )

}

export default NotFound