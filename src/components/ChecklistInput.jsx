import { useState } from 'react'


export default function ChecklistInput(props) {
    const {handleAddTodo} = props
    const [input, setInput] = useState('')

    return (
        <div className="input-container">
            <input type="text" placeholder="Add a task" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                if (!input) {return}
                handleAddTodo(input)
                setInput('')
                }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}