export default function Header(props) {
    const {todos} = props
    const todosLength = todos.length
    const isTasksPlural = todosLength != 1 ? 'tasks' : 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} {isTasksPlural} to do</h1>
        </header>
    )
}