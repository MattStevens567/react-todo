interface TodoCardProps {
    children: React.ReactNode
    handleDeleteTodo: (todoIndex: number) => void
    index: number
}

export default function TodoCard(props: TodoCardProps) {
    const { children, handleDeleteTodo, index } = props
    console.log(children)
    console.log(handleDeleteTodo)
    console.log(index)

    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button>
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
