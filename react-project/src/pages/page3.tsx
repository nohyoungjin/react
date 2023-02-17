import React from 'react'
import Head from 'next/head'

import Layout from "components/Layout/Layout"
import Page3 from "containers/Page/page3"

export default function Test({ title }) {
  return (
      <>
          <Head>
              <meta property="og:title" content={title ? title: "default title"} />
          </Head>
          <Layout>
            <div>dynamic meta test</div>
          </Layout>
      </>
  ) 
}

Test.getInitialProps = () => {
  return {
      title: "seo title" 
  }
}
