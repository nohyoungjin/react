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
    if (error1 || error2) {
      return
    }

    // 입력값 검사에 통과한 경우 폼 제출 처리 로직

  }

  return (
    <div className="max-w-4xl mx-auto py-5 px-3">
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
                <label>
                    <span className="block text-sm font-medium text-slate-700">email</span>
                    <input type="text" className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" value={value1} onChange={(e) => setValue1(e.target.value)} />
                    <p className="mt-2 text-sm text-slate-600 opacity-4 contrast-more:opacity-100">
                        {error1} 
                    </p>            
                </label>
                <label>
                    <span className="block mt-4 text-sm font-medium text-slate-700">name</span>
                    <input type="text" className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" value={value2} onChange={(e) => setValue2(e.target.value)} />
                    <p className="mt-2 text-sm text-slate-600 opacity-4 contrast-more:opacity-100">
                        {error2} 
                    </p>                
                </label>
                <button type="submit" className="mt-6 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">제출</button>
            </form>
        </div>
    </div>
  )
} export default MyForm