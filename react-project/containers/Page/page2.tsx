import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://nohyoungjin.github.io/apitest/db.json')
            .then(response => {
                setUsers(response.data); // 응답이 제대로 들어왔을 때 setUsers() 함수를 사용해 response의 data를 users의 정보로 변경
            })
    }, [])

    return (
        <div>
            {users.map(user => { // 각각의 객체를 식별할 수 있도록 key값을 고유한 user id로 설정
                return (
                    <div key={user.id}> 
                        {user.numx} &nbsp;
                        {user.cate} &nbsp;
                        {user.coxt} &nbsp;
                        {user.feed} &nbsp;
                        {user.time}
                    </div>
                )
            })}
        </div>
    )
}

export default Users;