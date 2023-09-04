import React, { useState } from "react"
import useSWRInfinite from "swr/infinite"

import axios from "axios"

import Layout from 'components/Layout/Layout'

const fetcher = (url: string) => axios.get(url).then((res) => res.data._embedded.locations)

const PAGE_SIZE = 4

export default function App() {
    const [repo, setRepo] = useState("reactjs/react-a11y")
    const [val, setVal] = useState(repo)

    const {
        data,
        mutate,
        size,
        setSize,
        isValidating,
        isLoading
    } = useSWRInfinite((index) => `http://10.10.10.202:8400/api/locations?page=${index}&size=10`, fetcher)

    const issues = data ? [].concat(...data) : []
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined')

    const isEmpty = data?.[0]?.length === 0
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
    const isRefreshing = isValidating && data && data.length === size

    return (
        <Layout>
            <div>
                <input
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    placeholder="reactjs/react-a11y"
                    class="hidden"
                />
                <button
                    onClick={() => {
                        setRepo(val)
                        setSize(1)
                    }}
                >
                처음으로
                </button> <br />

                <div style={{ margin: "0 0 26px 0" }}>
                    showing {size} page(s) of {isLoadingMore ? "..." : issues.length} {" "} issue(s) {" "} <br /><br />

                    <button
                        disabled={isLoadingMore || isReachingEnd}
                        onClick={() => setSize(size + 1)}
                    >
                        {isLoadingMore
                        ? "loading..."
                        : isReachingEnd
                        ? "더 보기 없음"
                        : "더 보기"}
                    </button> <br />

                    <button disabled={isRefreshing} onClick={() => mutate()}>
                        {isRefreshing ? "refreshing..." : "새로고침"}
                    </button> <br />

                    <button disabled={!size} onClick={() => setSize(0)}>초기화</button>
                </div>

                {isEmpty ? <p>Yay, no issues found.</p> : null}
                <div>
                    {issues.map((issue) => {
                        return (
                            
                            <div key={issue.sortA} style={{ margin: "6px 0" }}>
                                - {issue.province} : {issue.city} / {issue.store}
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}