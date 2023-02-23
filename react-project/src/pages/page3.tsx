import Image from 'next/image'
import profilePic from '/public/img5.png'

import Layout from "components/Layout/Layout"

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Blog({ posts }) {
    return (
    <Layout>  
      <p>페이지 콘텐츠가 외부 데이터에 종속</p> <br></br>
      <Image
        src='/img5.png'
        alt="Picture of the author"
        width={330}
        height={116}
        priority
      /> <br></br>
      <ul>
        {posts.map((post) => (
          <li>{post.numx} {post.time}</li>
        ))}
      </ul>
    </Layout>
    )
  }

  // This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://nohyoungjin.github.io/apitest/db.json')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }