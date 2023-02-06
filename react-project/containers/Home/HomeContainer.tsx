// import Raect from 'react'
import arrayData from 'components/Json/arrayData'

const HomeContainer = () => {

    const newArrayData = arrayData.map((item, index) => {
        return (
            <li key={index}>
                {item.name}({item.age}) from {item.country}
            </li>
        )
    })

    return (
        <div>
            <ul className="container">
                { newArrayData }
            </ul>
        </div>
    ) 
}

export default HomeContainer