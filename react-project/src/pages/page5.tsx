import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from "components/Layout/Layout"
import Hooks from "containers/Page/Hooks"

const Post = () => {

    const router = useRouter()
    const { pid } = router.query

    const [visible, setVisible] = useState(false)

    const onClick = () => {
        setVisible(!visible)
    }

    return (
        <Layout>
            
            <p>Post: {pid}</p> <br />
            <a href="#" role="button" onClick={onClick}>
                {visible ? '숨기기' : '보이기'}
            </a>
            <br /><br />
            {visible && <Hooks />}

        </Layout>
    )

}

export default Post