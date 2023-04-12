import slugify from "slugify"
import { v4 as uuidv4 } from "uuid"
import faunadb, { query as q } from "faunadb"


// Flatten the result from FaunaDB

export const flattenData = (obj) => {
    if (!obj) return null

    if (Array.isArray(obj.data)) {
        return {
            ...obj,
            data: obj.data.map((e) => flattenData(e)),
        }
        
    } else {
        // flatten the document's data
        return { ...obj.data, id: obj.ref.value.id }
    }
}

class QueryManager {
    constructor() {
        this.client = new faunadb.Client({
            secret: process.env.NEXT_PUBLIC_FAUNADB_SECRET,
        })
    }

    createPost({ title, content, author }) {
        return this.client
        .query(
           q.Create(q.Collection("blog_posts"), {
                data: {
                    title,
                    content,
                    author,
                    published: false,
                    created_at: q.ToString(q.Now()),
                    updated_at: q.ToString(q.Now()),
                }
            }) 
        )
    }

    getPost(id) {
        return this.client
        .query(q.Get(q.Ref(q.Collection("blog_posts"), id)))
        .then(res => flattenData(res))
    }

    getPostBySlug(slug) {
        return this.client
        .query(q.Get(q.Match(q.Index("posts_search_by_slug"), slug)))
        .then(res => flattenData(res))
    }

    getPosts(options = {}) {
        return this.client
        .query(
            q.Map(
                q.Paginate(
                    q.Join(
                        q.Match(q.Index('posts_search_by_published'), true),
                        q.Index('posts_sort_by_published_at_desc')
                    ),
                    options
                ),
                q.Lambda(['published_at', 'ref'], q.Get(q.Var('ref')))
            )
            /* q.Map(
                q.Paginate(q.Documents(q.Collection("blog_posts"))),
                q.Lambda("X", q.Get(q.Var("X")))
            ) */
        )
        .then(res => flattenData(res))
    }

    getAllSlugs() {
        return this.client
        .query(
            q.Paginate(q.Match(q.Index("all_slugs")))
        )
    }
}

const faunaQueries = new QueryManager()
export default faunaQueries