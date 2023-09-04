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
            <label for="firstname">
                이름
                <input 
                    type="text" 
                    value={name}
                    onChange = {onChangeName}
                    placeholder="First name" 
                required />
            </label>

            <label for="firstname">
                닉네임
                <input
                    type="text"
                    value={nickname}
                    onChange = {onChangeNickname}
                />
            </label>

            <div class="grid">
                <p>이름 {name}</p>
                <p>닉네임 {nickname}</p>
            </div>
        </div>
    )
}

export default Info