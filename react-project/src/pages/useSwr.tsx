import useSWR, { SWRConfig } from 'swr'
import useSWRInfinite from 'swr/infinite'

import Layout from 'components/Layout/Layout'

const fetcher = (url) => fetch(url).then((res) => res.json())
const API = 'https://nohyoungjin.github.io/apitest/user.json' 

export async function getServerSideProps() {
    const repoInfo = await fetcher(API)
    return {
        props: {
            fallback: {
                [API]: repoInfo
            }
        }
    }
}

function Repo() {
    const { data, error, isLoading } = useSWR(API)

    if (error) return "An error has occurred."
    if (isLoading) return "Loading..."

    return (
        <Layout>
            <ul>
                {data?.map(item => (
                    <li key={item.id}>🍴 {item.name} ✨ 👁</li>
                ))}
            </ul>
        </Layout>
    )
}

export default function App({ fallback }) {
    return (
        <SWRConfig value={{ fallback }} >
            <Repo />
        </SWRConfig>
    )
}
