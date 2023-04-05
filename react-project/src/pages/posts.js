import Layout from 'components/Layout/Layout'
import Card from 'containers/Page/Card'
import faunaQueries from 'lib/fauna'

const Posts = ({ data }) => {
    return (
        <Layout>
            <>
            <div className="grid sm:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
                {data.map(post => (
                    <Card key={post.id} {...post} />
                ))}
            </div>
            </>
        </Layout>
    )
} 

export async function getStaticProps() {
    try {
        const {data} = await faunaQueries.getPosts()

        return {
            props: {
                data
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