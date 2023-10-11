import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        axios.get('http://10.10.10.202:8400/api/locations?page=0&size=41')
            .then(response => {
                setUsers(response.data._embedded.locations) // 응답이 제대로 들어왔을 때 setUsers() 함수를 사용해 response의 data를 users의 정보로 변경
            })
    }, [])

    return (

        <div>
            <h3>정보</h3>

            {users.map(user => { // 각각의 객체를 식별할 수 있도록 key값을 고유한 user id로 설정
                return (
                    <dl>
                        <dt key={user.sortA}> 
                            {user.store}
                        </dt>
                        <dd> 
                            {user.province} {user.city} {user.address}
                            {/* user.feed */} 
                        </dd>                                            
                    </dl>
                )
            })}
        </div>

    )
}

export default Users