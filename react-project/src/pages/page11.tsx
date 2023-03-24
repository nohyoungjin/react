import Layout from "components/Layout/Layout"
import Link from 'next/link'
import type { NextPage } from "next"
import { useState, useEffect } from "react"

const Home: NextPage = () => {
    const [data, setData] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [inputeData, setInputeData] = useState({
        id: "",
        title: "",
        year: "",
        description: "",
        slug: "",
    })

    const fetchData = async () => {
        const response = await fetch('/api/post/getdata')
        const json = await response.json()
        setData(json)
    }

    const handleCreateData = async (e: React.FormEvent) => {
        e.preventDefault()
        if (editMode) {
            handleUpdateData()
        } else {
            const response = await fetch('/api/post/createdata', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: inputeData.title,
                    year: inputeData.year,
                    description: inputeData.description,
                    slug: inputeData.slug,    
                }),
            })
            const json = await response.json()
            console.log(json)
            setInputeData({ 
                id: "",
                title: "",
                year: "",
                description: "",
                slug: "",
            })
            fetchData()
        }
    }   

    const handleDeleteData = async (id) => {
        const response = await fetch('/api/post/deletedata', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },      
            body: JSON.stringify({ id }),                
        })
        const json = await response.json()
        console.log(json)
        fetchData()
    }

    const handleEditData = async (id: number, title: string, year: number, description: string, slug: string) => {
        setInputeData ({ id, title, year, description, slug })
        setEditMode(true)
    }

    const handleUpdateData = async (id) => {
        const response = await fetch('/api/post/updatedata', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: inputeData.id,
                title: inputeData.title,
                year: inputeData.year,
                description: inputeData.description,
                slug: inputeData.slug,    
            }),
        })
        const json = await response.json()
        console.log(json)
        setInputeData({ 
            id: "",
            title: "",
            year: "",
            description: "",
            slug: "",
        })
        setEditMode(false)  
        fetchData()        
    }

    useEffect(() => {
        fetchData() 
    }, [])

    return ( 
        <>
        <Layout>
        <div>
        <form onSubmit={handleCreateData}>
                    <input 
                        value={inputeData.title || ""}
                        type="text" 
                        placeholder="제목" 
                        name="title" 
                        onChange={e => setInputeData({ ...inputeData, title: e.target.value })}
                    />
                    <input 
                        value={inputeData.year || ""}
                        type="text" 
                        placeholder="년도" 
                        name="year" 
                        onChange={e => setInputeData({ ...inputeData, year: +e.target.value })} 
                    />
                    <textarea 
                        value={inputeData.description || ""}
                        id="" 
                        cols="30" 
                        rows="1" 
                        placeholder="설명" 
                        name="description" 
                        onChange={e => setInputeData({ ...inputeData, description: e.target.value })} 
                    />
                    <input 
                        value={inputeData.slug || ""}
                        type="text" 
                        placeholder="Slug" 
                        name="slug" 
                        onChange={e => setInputeData({ ...inputeData, slug: e.target.value })} 
                    />
                    <button type="submit">저장</button>
                </form>

            {data.map(({ id, title, year, description, slug }) => {
                return (
                    <div key={id} className="mt-2">
                        <h3>{title}</h3>
                        <p>{year}</p>
                        <Link href={`/movies/${slug}`}>
                            상세
                        </Link> &nbsp;
                        <button onClick={() => handleDeleteData(id)}>삭제</button> &nbsp;
                        <button onClick={() => handleEditData(id, title, year, description, slug)}>편집</button>
                    </div> 
                )
            })}
        </div>
        </Layout>
        </>
    )

}

export default Home