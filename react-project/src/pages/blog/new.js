import Layout from 'components/Layout/Layout'
import Editor from 'containers/Page/Editor'
import axios from 'axios'
// import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const NewDraft = () => {
    const router = useRouter()
    // const [session] = useSession()

    const handleOnChange = async (title, content) => {
        try {
            const { data: {id} } = await axios.post('/api/posts', {
                title,
                content,
                // author: session.user
            })
            router.push(`/drafts/${id}`)
        } catch (error) {
            toast.error('등록 실패')
        }
    }

    return (
        <Layout>
            <div>
                <Editor onChange={handleOnChange} />
            </div>
        </Layout>
    )

}

export default NewDraft