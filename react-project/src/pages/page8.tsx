// pages/index.js

import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import Layout from "components/Layout/Layout"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data')
      const responseData = await response.json()
      setData(responseData)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}