import React, { useReducer } from 'react'

function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT' :
            return { value: state.value + 1}
        case 'DECREMENT' :
            return { value: state.value - 1}
        default :
        // 아무것도 해당되지 않을 때 기존 상태 반환
        return state
    }
}

function reducer2(state, action) {
    return {
        ...state,
        [action.name] : action.value
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 })
    const [state2, dispatch2] = useReducer(reducer2, { 
        name: '',
        nickname: '',
    })

    const { name, nickname } = state2

    const onChange = e => {
        dispatch2(e.target)
    }

    return (
        <>
        <p>현재 카운터 값은 {state.value}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button> &nbsp;
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button> <br /> <br />

        <div>
            <input 
                type="text"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input 
                type="text"
                name="nickname"
                value={nickname}
                onChange={onChange}
            />
        </div> <br />
        <p>이름 {name} / 닉네임 {nickname}</p>
        </>
    )
}

export default Counter