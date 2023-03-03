import { useState } from 'react'
import Layout from "components/Layout/Layout"

function MyForm() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [error1, setError1] = useState(null)
  const [error2, setError2] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (value1.trim() === '') {
      setError1('필수 입력값입니다.')
    } else if (isNaN(value1)) {
      setError1('숫자를 입력해주세요.')
    }
    else {
      setError1(null)
    }

    if (value2.trim() === '') {
      setError2('필수 입력값입니다.')
    } else {
      setError2(null)
    }

    // 모든 입력값에 대한 검사를 수행한 후, 검사에 실패한 에러 메시지가 존재하는 경우
    if (error1 || error2) {
      return
    }

    // 입력값 검사에 통과한 경우 폼 제출 처리 로직
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit}>
      <label>
        입력1:
        <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} />
      </label>
      {error1 && <p>{error1}</p>} <br />
      <label>
        입력2:
        <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)} />
      </label>
      {error2 && <p>{error2}</p>} <br />
      <button type="submit">제출</button>
    </form>
    </Layout>
  )
} export default MyForm