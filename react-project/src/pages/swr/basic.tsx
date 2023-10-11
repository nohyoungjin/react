import useSWR from 'swr'
import axios from 'axios'

import Layout from 'components/Layout/Layout'

export interface Todo {
    province: string
    sortA: number
    city: string
    completed: boolean
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data._embedded.locations)

export default function Todo( {children} ) {

    const { data, error, isLoading } = useSWR(
        'http://10.10.10.202:8400/api/locations?page=0&size=41',
        fetcher
    )

    if (error) return <p>An error has occurred 😢</p>
    if (isLoading) return <p>Loading... ⏳</p>

    return (
        <>
        <Layout>
            <ul>
                {data.map((todo: Todo) => (
                    <li key={todo.sortA}>
                        {todo.province} : {todo.city} / {todo.status}
                    </li>
                ))}
            </ul>    
        </Layout>
        </>
    )

}