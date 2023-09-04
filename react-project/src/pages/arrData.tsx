import Layout from 'components/Layout/Layout'
import Join from 'containers/Page/arrData'

const arrData = () => {
    return (
        <Layout pageMeta={{
            title: '첫번째 페이지'
        }}>
            <Join />
        </Layout>
    )
}

export default arrData