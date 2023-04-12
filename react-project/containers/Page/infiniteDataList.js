import { useRef, useEffect } from 'react'
import toast from 'react-hot-toast'
import useInfiniteQuery from 'hooks/use-infinite-query'
import Card from 'containers/Page/Card'
import CardSkelecton from 'containers/Page/CardSkelecton'
// import { isInViewport } from 'lib/utils'
import { useDebouncedCallback } from 'use-debounce'

const InfiniteDataList = ({ queryKey, initialData }) => {
    const moreRef = useRef()

    const {
        data,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingInitialData,
        isFetchingNextPage
    } = useInfiniteQuery(queryKey, initialData)

    /* const loadMore = useDebouncedCallback(() => {
        if (isInViewport(moreRef.current)) {
            fetchNextPage()
        }
    }, 500) */

    useEffect(() => {
        window.addEventListener('scroll', loadMore) 

        return () => {
            window.addEventListener('scroll', loadMore)
        }
    }, [])

    if (error) {
        toast.error('Unable to fetch data...')
    }

    if (!isFetchingInitialData && data?.length === 0) {
        return (
            <div>
                <p>
                    <span>No blog posts yet!</span>
                </p>
            </div>
        )
    }

    return (
        <div>
            <div>
                {data?.map(item => {
                    <Card key={item.id} {...item} />
                })}

                {isFetchingInitialData
                    ? [...new Array(10)].map((_, i) => <CardSkelecton key={i} />)
                    : null
                }
            </div>

            {hasNextPage ? (
                <div ref={moreRef} />
            ) : (
                <p>No more data....</p>
            )}
        </div>
    )
}

export default InfiniteDataList