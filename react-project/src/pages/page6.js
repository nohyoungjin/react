import Script from 'next/script'
import Layout from "components/Layout/Layout"

const Post = () => {
  return (
    <Layout>

      <Script id="show-banner" strategy="afterInteractive">
        {`alert('경고창')`}
      </Script>

    </Layout>
  )

}

export default Post