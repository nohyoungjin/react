import { useState, useRef, useCallback } from 'react'
import Layout from "components/Layout/Layout"
import TodoTemplate from "containers/Page/TodoTemplate"
import TodoInsert from "containers/Page/TodoInsert"
import TodoList from "containers/Page/TodoList"

function createBulkTodos() {
  const array = []
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array
}

const App = () => {

  /* const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리',
      checked: true,
    },   
  ]) */

  const [todos, setTodos] = useState(createBulkTodos)

  // 고유값으로 사용될 id
  // ref를 사용하여 변수담기
  const nextId = useRef(4)

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos(todos => todos.concat(todo))
      nextId.current += 1
    },
    [todos]
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id))
    },
    [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos => 
        todos.map(todo => 
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,)
      )
    },
    [todos]
  )

  return (
    <Layout>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </Layout>
  )

}

export default App
