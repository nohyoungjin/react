import { useState } from 'react'
import Layout from 'components/Layout/Layout'
import Hooks from 'containers/Page/Hooks'

const Post = () => {

    const [visible, setVisible] = useState(true)

    const onClick = () => {
        setVisible(!visible)
    }

    return (
        <Layout>
            <a href="#" role="button" onClick={onClick}>
                {visible ? '닫기' : '열기'}
            </a>
            <br /><br />
            {visible && <Hooks />}
        </Layout>
    )

}

export default Post