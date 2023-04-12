import React from 'react'

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage, publishedAt } = article

    return (
        <>
            <div>
                <a href={url} target="_blank" rel="" className="flex mb-6">
                    <div className="w-[25%] h-[160px]">
                        <img className="block w-[160px] h-[160px]" src="https://via.placeholder.com/160" alt=""></img>
                    </div>
        
                    <div className="w-[75%]">
                        <h2 className="mt-3 font-bold">{title}</h2>
                        <p className="mt-3 leading-4">{publishedAt}</p>
                    </div>
                </a>
            </div>
        </>
    )

}

export default NewsItem 