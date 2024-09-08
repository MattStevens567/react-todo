import TodoCard from './TodoCard'

interface TodoListProps {
    todos: string[]
    handleDeleteTodo: (todoIndex: number) => void
}

export default function TodoList(props: TodoListProps) {
    const { todos } = props

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex} index={todoIndex} {...props}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
