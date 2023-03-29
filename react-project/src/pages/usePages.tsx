import useSWR, { SWRConfig } from 'swr'
import useSWRInfinite from "swr/infinite";

const fetcher = (url) => fetch(url).then((res) => res.json())

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null // reached the end
  return `https://nohyoungjin.github.io/apitest/user.json?page=${pageIndex}&limit=10` // SWR key
}
 
export default function App () {

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)
  if (!data) return 'loading'

  // We can now calculate the number of all users
  let totalUsers = 0

  for (let i = 0; i < data.length; i++) {
    totalUsers += data[i].length
  }

  const isReacheEnd = data && data[data.length - 1]?.length < 4
  

  return (

    <div>
      <p>{totalUsers} users listed</p>
      {data.map((users, index) => {
        // `data` is an array of each page's API response.
        return users.map(user => <div key={user.id}>{user.name}</div>)
      })}
      
      {!isReacheEnd && <button onClick={() => setSize(size + 1)}>Load More</button>}
    </div>

  )

}