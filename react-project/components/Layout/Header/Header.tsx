import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (

    <nav className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                </div>
                <div className="flex flex-1 items-center justify-center sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <Link legacyBehavior href={"/"}>
                            <a><Image
                                src="mark.svg"
                                alt="Your Company"
                                width={32}
                                height={32}
                            /></a>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link legacyBehavior href={"page1"}>
                                <a className="text-sm font-medium text-gray-700 hover:text-gray-900">
                                    로컬 json(map)
                                </a>
                            </Link>

                            <Link legacyBehavior href={"page2"}>
                                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    외부 json(axios)
                                </a>
                            </Link>

                            <Link legacyBehavior href={"page3"}>
                                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    이미지
                                </a>
                            </Link>   

                            <Link legacyBehavior href={"page4"}>
                                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    글꼴(구글)
                                </a>
                            </Link>        

                            <Link legacyBehavior href={"page5?pid=query"}>
                                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    동적경로
                                </a>
                            </Link>      

                            <Link legacyBehavior href={"page6"}>
                                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    스크립트(인라인)
                                </a>
                            </Link>           

                             <Link legacyBehavior href={"page7"}>
                                <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    페이징
                                </a>
                            </Link>                                                                                               
                        </div>
                    </div>          
                </div>            
            </div>
        </div>
    </nav>

    )
}

export default Header