import { useRouter } from 'next/router'
import Script from 'next/script'

import Layout from "components/Layout/Layout"

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <Layout>
      <p>Post: {pid}</p>
    </Layout>
  )

}

export default Post