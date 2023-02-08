import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://nohyoungjin.github.io/apitest/db.json')
            .then(response => {
                setUsers(response.data) // 응답이 제대로 들어왔을 때 setUsers() 함수를 사용해 response의 data를 users의 정보로 변경
            })
    }, [])

    return (
        <div>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">정보</h3>
                            </div>

                            {users.map(user => { // 각각의 객체를 식별할 수 있도록 key값을 고유한 user id로 설정
                                return (
                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt key={user.id} className="text-sm font-medium text-gray-500"> 
                                                {user.numx} {user.time} {user.cate}
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> 
                                                {user.coxt}
                                                {/* user.feed */} 
                                            </dd>                                            
                                        </div>
                                    </dl>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users