import {useState} from 'react'
import useSWR, { SWRConfig } from 'swr'
import Layout from 'components/Layout/Layout'

const fetcher = (url) => fetch(url).then((res) => res.json())
const API = 'https://nohyoungjin.github.io/apitest/db.json' 

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
            {data.map(item => (
                <li key={item.numx}>🍴 {item.numx}. {item.coxt} ✨ 👁</li>
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
