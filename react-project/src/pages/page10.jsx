import { useState, useEffect } from 'react'
import { mysql } from 'mysql'

function MyComponent() {
    const [data, setDate] = useEffect([])

    useEffect(() => {

        // MySQL 연결정보
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: '',
        })

        // MySQL 연결
        connection.connect((error) => {

            if (error) {
                console.error('MySQL 연결 오류:', error)
                return
            }

            console.log('MySQL 연결 성공!')

        })

    })
}