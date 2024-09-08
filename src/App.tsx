import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState<string[]>([])

    function handleAddTodos(newTodo: string) {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
    }

    function handleDeleteTodo(index: number) {
        const newTodoList = todos.filter(
            () => (todo: string, todoIndex: number) => {
                return todoIndex !== index
            }
        )
        setTodos(newTodoList)
    }

    return (
        <>
            <TodoInput handleAddTodos={handleAddTodos} />
            <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
        </>
    )
}

export default App
