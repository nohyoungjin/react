import { useState } from 'react'
import { useRouter } from 'next/router'
// import { useSession } from 'next-auth/client'

import useSWR from 'swr'
import axios from 'axios'

const Draft = () => {
    const router = useRouter()
    // const [session] = useSession()
    const [publishing, setPublishing] = useState(false)
    const [savingStatus, setSavingStatus] = useState('saved')

    const [ data, error, mutate ] = useSWR(
        () => (`/api/posts/${router?.query?.id}`),
        fetcher
    )

    if (error) {
        return (
            <Layout>
                <p>데이터를 가져오지 못했습니다.</p>
            </Layout>
        )
    }

    return (
        <Layout>
            {data ? (
                <Editor 
                    initialData={data}
                />
            ): null}
        </Layout>
    )
}

export default Draft