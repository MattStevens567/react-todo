import TodoCard from './TodoCard'

interface TodoListProps {
    todos: string[]
    handleDeleteTodo: (todoIndex: number) => void
    handleEditTodo: (todoIndex: number) => void
}

export default function TodoList(props: TodoListProps) {
    const { todos, handleDeleteTodo, handleEditTodo } = props

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        index={todoIndex}
                        handleDeleteTodo={handleDeleteTodo}
                        handleEditTodo={handleEditTodo}
                    >
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
