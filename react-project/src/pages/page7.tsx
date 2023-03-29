import { useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

import Layout from "components/Layout/Layout"

const PAGE_LIMIT = 10

export default function MyPage({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = ({ selected }: { selected: any }) => {
    setCurrentPage(selected)
  }

  const startIndex = currentPage * PAGE_LIMIT
  const endIndex = startIndex + PAGE_LIMIT

  const currentData = data.slice(startIndex, endIndex)

  return (
    <Layout>
    <div>
      <ul>
        {currentData.map((item: any) => (
          <li key={item.numx}>{item.coxt}</li>
        ))}
      </ul>
      <ReactPaginate
        pageCount={Math.ceil(data.length / PAGE_LIMIT)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await axios.get('https://nohyoungjin.github.io/apitest/db.json')
  const data = await res.data

  return {
    props: { data },
  }
}
