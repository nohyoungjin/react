import React, { useEffect, useCallback, useRef, useMemo, useState, useReducer } from "react";

const initialState = { backgroundColor: '#fff' }

const reducer = (state, action) => {
    switch(action) {
        case 'black':
            return { backgroundColor: '#000' }
        case 'red':
            return { backgroundColor: 'red' }
        default:
            return { backgroundColor: 'initial' }
    }
}

function App() {
    const [input, setInput] = useState('')
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(0) // 기본적으로 배열을 만들고, 업데이트 되는 실제 유사 변수인 카운트

    const [state, dispatch] = useReducer(reducer, initialState)

    const expensiveCalculation = () => {
        return Math.random() * 1000
    }

    const renderedValue = useMemo(() => expensiveCalculation(), [count])

    useEffect(() => {
        function test() {
            if (counter === 0) {
                setCounter(Math.random() * 200)
            }
        }
        test()
    }, [counter]) // 두개의 매개변수 하나는 화살표 함수, 하나는 빈 배열 코드와 화살표 기능은 구성 요소가 처음으로 렌더링 될 때 한 번만 실행...

    // 종속성 배열

    return (
        <div>
            <h1 style={{ backgroundColor: state.backgroundColor }}>Hello reducer</h1>
            <button onClick={() => dispatch('red')}>Turn to red</button>
            <button onClick={() => dispatch('black')}>Turn to black</button> <br />

            <p onClick={() => setCount((prevCount) => prevCount + 1)}>
                Count: {count}
            </p>
            <p>Rendered value: {renderedValue}</p>
        </div>
    )
}

export default App