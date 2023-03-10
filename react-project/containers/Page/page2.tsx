import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        axios.get('https://nohyoungjin.github.io/apitest/db.json')
            .then(response => {
                setUsers(response.data) // 응답이 제대로 들어왔을 때 setUsers() 함수를 사용해 response의 data를 users의 정보로 변경
            })
    }, [])

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="overflow-hidden bg-white shadow rounded-lg">
                        <div className="py-5 px-6">
                            <h3 className="text-lg font-medium text-gray-900 leading-6">정보</h3>
                        </div>

                        {users.map(user => { // 각각의 객체를 식별할 수 있도록 key값을 고유한 user id로 설정
                            return (
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="grid grid-cols-3 gap-4 py-5 px-6 bg-gray-50">
                                        <dt key={user.id} className="text-sm font-medium text-gray-500"> 
                                            {user.numx} {user.time} {user.cate}
                                        </dt>
                                        <dd className="col-span-2 mt-0 text-sm text-gray-900"> 
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
    )
}

export default Users