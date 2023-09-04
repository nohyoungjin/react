import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {

    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemechanger = () => {
        if (!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return (
                <div className="w-20 h-7" role="button" onClick={() => setTheme('light')}>라이트</div>
            )
        } else {
            return (
                <div className="w-20 h-7" role="button" onClick={() => setTheme('dark')}>다크</div>
            )
        }
    }

    return (
    <nav className="container-fluid">
        <ul>
            <li>
            <Link legacyBehavior href={"/"}>
                <a><Image
                    src="/mark.svg"
                    alt="Your Company"
                    width={32}
                    height={32}
                /></a>
            </Link>
            </li>
        </ul>

        <ul>
            {/* <Link legacyBehavior href={"/page1"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    로컬 json(map)
                </a>
            </Link> */}

            {/* <Link legacyBehavior href={"/page2"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    외부 json(axios)
                </a>
            </Link> */}

            {/* <Link legacyBehavior href={"/page3"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    컴포넌트
                </a>
            </Link> */}   

            {/* <Link legacyBehavior href={"/page4"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    이벤트 핸들링
                </a>
            </Link> */}        

            {/* <Link legacyBehavior href={"/page5?pid=query"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    useEffect
                </a>
            </Link> */}

            {/* <Link legacyBehavior href={"/page6"} shallow>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    useReducer
                </a>
            </Link> */}

            {/* <Link legacyBehavior href={"/page7"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Todo App
                </a>
            </Link> */}

            {/* <Link legacyBehavior href={"/newsViewer"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    뉴스뷰어
                </a>
            </Link> */}

            {/* <Link legacyBehavior href={"/page11"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    MySql 연동(Prisma)
                </a>
            </Link> */}     

            {/* <Link legacyBehavior href={"/useSwr"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Swr
                </a>
            </Link> */}              

            {/* <Link legacyBehavior href={"/blog/posts"}>
                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    블로그(fauna)
                </a>
            </Link> */}  

            <li>
                <Link legacyBehavior href={"/swr/basic"}>
                    <a className="secondary">기본 사용법</a>
                </Link> 
            </li>
            <li>
                <Link legacyBehavior href={"/swr/error-handling"}>
                    <a className="secondary">에러 처리</a>
                </Link> 
            </li>
            <li>
                <Link legacyBehavior href={"/swr/paging"}>
                    <a className="secondary">페이징</a>
                </Link> 
            </li>
            <li>
                <Link legacyBehavior href={"/swr/infinite-loading"}>
                    <a className="secondary">인피니트 로딩</a>
                </Link> 
            </li>
            { /* renderThemechanger() */ }                                                                                                                                                 
        </ul>
    </nav>
    )
}

export default Header