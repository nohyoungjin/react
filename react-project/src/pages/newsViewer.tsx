import React, { useState } from 'react'
import axios from 'axios'
import Layout from 'components/Layout/Layout'
import NewsList from "containers/Page/NewsList"

const App = () => {

    return (
        <Layout>
            <NewsList />
        </Layout>
    )

}

export default App