import React from "react"
import useSWR from "swr"
import axios from "axios"

import { useState } from 'react'

import Layout from 'components/Layout/Layout'

export interface Todo {
    province: string
    sortA: number
    city: string
    completed: boolean
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data._embedded.locations)

export default function Todo() {

    const [pageIndex, setPageIndex] = useState(0)

    const { data, error, isLoading } = useSWR(
        `http://10.10.10.202:8400/api/locations?page=${pageIndex}&size=10`,
        fetcher
    )

    if (error) return <p>An error has occurred 😢</p>
    if (isLoading) return <p>Loading... ⏳</p>

    return (
        <>
        <Layout>
            <ul> 
                {data.map((todo: Todo) => (
                    <>
                    <li key={todo.sortA}>
                        {todo.province} : {todo.city} / {todo.store}
                    </li>
                    </>
                ))}
            </ul>
            <br />

            <div class="grid w-40 mx-auto">
                {pageIndex === 0 ? <div>이전 할 페이지 없음</div> : <button onClick={() => setPageIndex(pageIndex - 1)}>이전</button>}
                <div>
                    <button class="secondary">{pageIndex + 1}</button>
                </div>
                {pageIndex === 4 ? <div>넘어 갈 페이지 없음</div> : <button onClick={() => setPageIndex(pageIndex + 1)}>다음</button>}
            </div>

        </Layout>
        </>
    )

}