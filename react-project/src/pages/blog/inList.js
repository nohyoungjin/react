import Layout from 'components/Layout/Layout'
import InfiniteDataList from 'containers/Page/infiniteDataList'
import faunaQueries from 'lib/fauna'

const Posts = ({ initialData }) => {
    return (
        <Layout>
            <>
            <InfiniteDataList queryKey='api/posts' initialData={initialData} />
            </>
        </Layout>
    )
} 

export async function getStaticProps() {
    try {
        const {initialData} = await faunaQueries.getPosts()

        return {
            props: {
                data: initialData,
            }
        }
    } catch(error) {
        return {
            props: {
                data: []
            }
        }
    }
}

export default Posts