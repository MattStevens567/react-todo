import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState<string[]>([])
    const [todoValue, setTodoValue] = useState<string>('')

    function persistData(newList: string[]) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    }

    function handleAddTodos(newTodo: string) {
        console.log('Add Pressed!')
        const newTodoList = [...todos, newTodo]
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    function handleDeleteTodo(index: number) {
        console.log('Delete Pressed!')
        const newTodoList = todos.filter((todo: string, todoIndex: number) => {
            return todoIndex !== index
        })
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    function handleEditTodo(index: number) {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleDeleteTodo(index)
    }

    useEffect(() => {
        if (!localStorage) {
            return
        }

        let localTodos: string = localStorage.getItem('todos') || ''
        if (!localTodos) {
            return
        }

        const localTodosJSON: string[] = JSON.parse(localTodos).todos
        setTodos(localTodosJSON)
    }, [])

    return (
        <>
            <TodoInput
                todoValue={todoValue}
                setTodoValue={setTodoValue}
                handleAddTodos={handleAddTodos}
            />
            <TodoList
                todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
            />
        </>
    )
}

export default App
