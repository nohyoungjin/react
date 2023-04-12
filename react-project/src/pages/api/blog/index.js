export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const {author = '', size = 10, cursor = undefined} = req.query
            const posts = await faunaQueries.getPosts({
                author,
                size,
                after: cursor
            })
        }
    } catch (error) {

    }
}