export default function ChecklistCard(props) {
    const {todo} = props
    

    return (
        <div className="card todo-card">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.completed}>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
            
        </div>
    )
}