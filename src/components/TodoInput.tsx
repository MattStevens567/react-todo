import React from 'react'
import { SetState } from '../shared/utils'

interface TodoInputProps {
    handleAddTodos: (todoValue: string) => void
    todoValue: string
    setTodoValue: SetState<string>
}

export default function TodoInput(props: TodoInputProps) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    // console.log(e)
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
