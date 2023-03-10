// pages/_app.js
import { Roboto } from '@next/font/google'
import Layout from "components/Layout/Layout"
import Page4 from "containers/Page/page4"

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'] 
})

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Blog() {
    return (
      <>
        <style jsx global>
        {`
          main {
            font-family: ${roboto.style.fontFamily};
          }
          div.fo {
            font-size: ${'34px'};
            font-weight: ${'400'};
          }
        `}
        </style>
        <Layout>  
          <Page4 />
        </Layout>
      </>
    )
}