import useSWR from 'swr'
import Layout from 'components/Layout/Layout'

const fetchCurrenttime = async () => {

    await new Promise((res) => setTimeout(res, 1000))

    if (Math.random() < 0.4) throw new Error('An error has occurred!')

    return new Date().toLocaleString()

}

export default function App() {

    const { data, error, mutate, isValidating } = useSWR(
        '/api',
        fetchCurrenttime,
        { dedupingInterval: 0 }
    )

    return (
        <Layout>
            <p>current time: {data}</p>
        </Layout>
    )
}