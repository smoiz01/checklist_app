import Header from './components/Header'
import Tabs from './components/Tabs'
import Checklist from './components/Checklist'
import CheckListInput from './components/CheckListInput'
import { useState, useEffect } from 'react'

function App() {
  // const todos = [
  //   {input: 'Hello! Add your first task', completed: true},
  //   {input: 'Buy groceries', completed: false},
  //   {input: 'Learn React', completed: false},
  //   {input: 'Build a project', completed: false},
  //   {input: 'Apply to jobs', completed: false},
  //   {input: 'Prepare for interview', completed: false},
  //   {input: 'Go to the gym', completed: true},
  //   {input: 'Read a book', completed: false},
  // ]
  const [todos, setTodos] = useState([])

  const [selectedTab, setSelectedTab] = useState('Active')

  function handleAddTodo(input) {
    setTodos([...todos, {input: input, completed: false}])
    handleSaveData(todos)
  }

  function handleDeleteTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index)) 
    handleSaveData(todos)
  }

  function handleCompleteTodo(index) {
    setTodos(todos.map((todo, i) => i === index ? {...todo, completed: true} : todo))
    handleSaveData(todos)
  }
  
  function handleSaveData(currentTodos) {
    localStorage.setItem('Checklist-app', JSON.stringify({todos: currentTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('Checklist-app')) {return}
    let db = JSON.parse(localStorage.getItem('Checklist-app'))
    setTodos(db.todos)
  }, [])


  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <Checklist handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab}/>
      <CheckListInput handleAddTodo={handleAddTodo} />
    </>
  )


}

export default App
