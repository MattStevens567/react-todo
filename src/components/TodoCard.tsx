interface TodoCardProps {
    children: React.ReactNode
    handleDeleteTodo: (todoIndex: number) => void
    handleEditTodo: (todoIndex: number) => void
    index: number
}

export default function TodoCard(props: TodoCardProps) {
    const { children, handleDeleteTodo, handleEditTodo, index } = props
    // console.log(children)
    // console.log(handleDeleteTodo)
    // console.log(index)

    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button
                    onClick={() => {
                        handleEditTodo(index)
                    }}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                    onClick={() => {
                        handleDeleteTodo(index)
                    }}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}
