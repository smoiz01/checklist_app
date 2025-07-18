import ChecklistCard from './ChecklistCard'

export default function Checklist(props) {
    const { todos } = props
    const tab = 'All'
    const filteredTodos = tab === 'All' ? todos :
        tab === 'Active' ? todos.filter(todo => todo.completed === false) :
            todos.filter(todo => todo.completed === true)

    return (
        <>
            {filteredTodos.map((todo, index) => {
                return (
                    <ChecklistCard key={index} 
                    todo={todo} />
                )
            })}
        </>
    )
}