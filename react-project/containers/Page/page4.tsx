import React, { useState } from 'react'

const DataImg = () => {

  const [form, setForm] = useState({
    username: '',
    message: ''
  })

  const {username, message} = form

  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는 값을 덮어 쒸우기
    }

    setForm(nextForm) 
  }

  const onClick = () => {
    if (!username) { 
      alert("값이없음")
      return 
    }

    alert(username + ': ' + message)

    setForm({
      username: '',
      message: '',
    })
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  const [names, setNames] = useState ([
    { id: 1, text: '치수' },
    { id: 2, text: '대만' },
    { id: 3, text: '준호' },
    { id: 4, text: '백호' },
  ])

  const [inputText, setInputText] = useState()
  const [nextId, setNextId] = useState(5) // 새로운 항목을 추가할 때 사용할 ID

  const onChangeMd = e => { setInputText(e.target.value) }

  const onClickMd = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    })

    setNextId(nextId + 1)
    setNames(nextNames)
    setInputText('')
  }

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id)
    setNames(nextNames)
  }

  const nameList = names.map((name, index) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
  ))  

  return (
    <>
    <div className="fo pt-2">
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div> <br />
    <ul>
      {nameList}
    </ul> <br />
    <input 
      type="text"
      value={inputText}
      onChange={onChangeMd}
    />
    <button onClick={onClickMd}>추가</button>
    </>
  )
}

export default DataImg