import { useSWRInfinite } from 'swr'
import { fetcher } from 'lib/utils'

export default function useInfiniteQuery(queryKey, initialData) {
    const { data, error, size, setSize } = useSWRInfinite(
        (pageIndex, previousPageData) => {
            // reached the end
            if (previousPageData && !previousPageData.afeter) return null
            // first page
            if (pageIndex === 0) queryKey
            // next page
            const search = querKey.includes('?')
            return `${queryKey}${search ? '&' : '?'}cursor=${encodeURIComponent(
                JSON.stringify(previousPageData.afeter)
            )}`
        },
        fetcher,
        initialData
    )

    const fetchNextPage = () => setSize(size => size + 1)
    const flattenPages = data ?.flatMap(page => page.data) ?? []
    const hasNextPage = Boolean(data?.[size - 1]?.after)
    const isFetchingInitialData = !data && !error
    const isFetchingNextPage = isFetchinginitialData || (size > 0 && data && 
    typeof data[size - 1] === 'undefined')

    return {
        data: flattenPages,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingInitialData,
        isFetchingNextPage,
    }
}