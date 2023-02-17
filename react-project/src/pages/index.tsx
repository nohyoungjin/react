import Layout from "components/Layout/Layout"
import HomeContainer from "containers/Home/HomeContainer"

const HomePage = () => {
  return (
    <Layout>

      <div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">메인</h2>
      </div>     

      <div className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        &nbsp;
        <HomeContainer />
      </div>  
    </Layout>
  )
}

export default HomePage