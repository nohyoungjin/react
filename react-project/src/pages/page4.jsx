// pages/_app.js
import { Inter } from '@next/font/google'
import Layout from "components/Layout/Layout"

const inter = Inter({ 
  weight: '700',
  subsets: ['latin'] 
})

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Blog({ data }) {
    return (
    <>
    <style jsx global>{`
        main {
          font-family: ${inter.style.fontFamily}
        }
        ul li {
          font-size: ${'34px'}
        }
    `}</style>
    <Layout>  
      <p>서버쪽 렌더링</p> <br></br>
      <ul>
        {data.map((post) => (
          <li>{post.numx} {post.time}</li>
        ))}
      </ul>
    </Layout>
    </>
    )
  }

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://nohyoungjin.github.io/apitest/db.json')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
} 