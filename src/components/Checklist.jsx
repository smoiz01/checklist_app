import ChecklistCard from './ChecklistCard'

export default function Checklist(props) {
    const { todos, selectedTab } = props
    const filteredTodos = selectedTab === 'All' ? todos :
        selectedTab === 'Active' ? todos.filter(todo => todo.completed === false) :
            todos.filter(todo => todo.completed === true)

    return (
        <>
            {filteredTodos.map((todo, index) => {
                return (
                    <ChecklistCard key={index}
                    todoIndex={todos.findIndex(todo => todo.input === todo.input)}
                    {...props} 
                    todo={todo} />
                )
            })}
        </>
    )
}