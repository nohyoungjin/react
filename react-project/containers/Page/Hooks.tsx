import { useState, useEffect } from 'react'

const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.!')
        console.log({
            name,
            nickname
        }, [])
    })

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeNickname = e => {
        setNickname(e.target.value)
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange = {onChangeName}
            />
            <input
                type="text"
                value={nickname}
                onChange = {onChangeNickname}
            />
            <p>이름 {name} / 닉네임 {nickname}</p>
        </div>
    )
}

export default Info