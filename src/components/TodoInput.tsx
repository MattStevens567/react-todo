import { useState } from 'react'

interface TodoInputProps {
    handleAddTodos: (todoValue: string) => void
}

export default function TodoInput(props: TodoInputProps) {
    const { handleAddTodos } = props
    const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => {
                    console.log(e)
                    setTodoValue(e.target.value)
                }}
                placeholder="Enter todo..."
            />
            <button
                onClick={() => {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }}
            >
                Add
            </button>
        </header>
    )
}
