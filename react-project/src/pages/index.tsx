import Layout from "components/Layout/Layout"
import HomeContainer from "containers/Home/HomeContainer"

const HomePage = () => {
  return (
    <Layout>
      <div className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        &nbsp;
        <HomeContainer />
      </div>  
    </Layout>
  )
}

export default HomePage