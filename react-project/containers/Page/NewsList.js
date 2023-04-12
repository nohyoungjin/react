import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsList = () => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async() => {
            setLoading(true)
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=107d6d6bd85f4a888a3573a6d81057d9'    
                )
                setArticles(response.data.articles)                
            } catch(err) {
                console.log(err)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    // 대기 중일 때
    if (loading) {
        return "대기중"
    }

    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) { return null }

    return (
        <div className="w-[768px] mx-auto">
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    )

}

export default NewsList