import Layout from "components/Layout/Layout"
import Page1 from "containers/Page/page1"

const PageA = () => {
  return (
    <Layout pageMeta={{
      title: '첫번째 페이지'
    }}>
      <Page1 />
    </Layout>
  )
}

export default PageA