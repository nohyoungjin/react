import { useState } from 'react'

function MyForm() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [error1, setError1] = useState<string>('')
    const [error2, setError2] = useState<string>('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        if (value1.trim() === '') {
            setError1('필수 입력값입니다.')
        } else if (isNaN(value1)) {
            setError1('숫자를 입력해주세요.')
        } else {
            setError1('')
        }

        if (value2.trim() === '') {
            setError2('필수 입력값입니다.')
        } else {
            setError2('')
        }

        // 모든 입력값에 대한 검사를 수행한 후, 검사에 실패한 에러 메시지가 존재하는 경우
        if (error1 || error2) { return }

        // 입력값 검사에 통과한 경우 폼 제출 처리 로직
    }   

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} />
                <small>{error1}</small>           
            </label>
            <label>
                Name
                <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)} />
                <small>{error2}</small>                  
            </label>
           
            <fieldset>
                <label for="switch">
                    <input type="checkbox" id="switch" name="switch" role="switch" />
                    Publish on my profile
                </label>
            </fieldset>

            <button type="submit">제출</button>
        </form>
    )
} 

export default MyForm